import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../globalStyles.css";
import Input from "../../components/Input";
import {
  getArrivalTimes,
  getPriorities,
  getServiceTimes,
} from "../../modules/simulator/utils";
import {
  Patient,
  serve_highest_priority_patient,
} from "../../modules/simulator/patient";
import Button from "../../components/Button";
import Table from "../../components/Table";
import Title from "../../components/Title";
import PerformanceMeasures from "../../components/PerformanceMeasures";
import GanttChart from "../../components/GanttChart";
import Loader from "../../components/Loader/Index";
import AveragePerformanceMeasures from "../../components/AveragePerformanceMeasures";

function Simulator() {
  const location = useLocation();
  const { isPriorityEnabled, model } = location.state;

  const [arrivalMean, setArrivalMean] = useState();
  const [serviceMean, setServiceMean] = useState();
  const [numberOfServers, setNumberOfServers] = useState();
  const [simData, setSimData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [averageWaitTimeList, setAverageWaitTimeList] = useState([]);
  const [averageResponseTimeList, setAverageResponseTimeList] = useState([]);
  const [averageTurnAroundTimeList, setAverageTurnAroundTimeList] = useState(
    []
  );
  const [showAveragePerformanceMeasures, setShowAveragePerformanceMeasures] = useState(false)

  const A = 55;
  const M = 1994;
  const Z = 10112166;
  const C = 9;
  const a = 1;
  const b = 3;

  const arrivalTimes = getArrivalTimes(arrivalMean);
  console.log(
    "🚀 ~ file: index.tsx:28 ~ Simulator ~ arrivalTimes:",
    arrivalTimes
  );
  const serviceTimes = getServiceTimes(
    arrivalTimes.arrivalTimes.length,
    serviceMean
  );
  const priorities = isPriorityEnabled
    ? getPriorities(arrivalTimes.arrivalTimes.length, A, M, Z, C, a, b)
    : Array.from({ length: arrivalTimes.arrivalTimes.length }, () => 1);

  const dataLength = simData.length;
  const averageTurnAroundTime =
    simData.reduce((total, current) => total + current.turn_around_time, 0) /
    dataLength;
  const averageResponseTime =
    simData.reduce((total, current) => total + current.response_time, 0) /
    dataLength;
  const averageWaitTime =
    simData.reduce((total, current) => total + current.wait_time, 0) /
    dataLength;

  return (
    <div className="container">
      <Title>{`${model} with${
        !isPriorityEnabled ? "out" : ""
      } Priority`}</Title>
      <div style={{ display: "flex" }}>
        <Input label="Arrival Mean" setValue={setArrivalMean} />

        <Input label="Service Mean" setValue={setServiceMean} />
        <Input label="Number of Servers" setValue={setNumberOfServers} />
      </div>
      <Button
        title="Simulate"
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 2000);
          const patients = arrivalTimes.arrivalTimes.map(
            (_, i) =>
              new Patient(
                i + 1,
                arrivalTimes.arrivalTimes[i],
                serviceTimes[i],
                priorities[i],
                serviceTimes[i]
              )
          );
          serve_highest_priority_patient(patients);
          setSimData(patients);
          // setAverageWaitTimeList([...averageWaitTimeList, averageWaitTime]);
          // setAverageResponseTimeList([
          //   ...averageResponseTimeList,
          //   averageResponseTime,
          // ]);
          // setAverageTurnAroundTimeList([
          //   ...averageTurnAroundTimeList,
          //   averageTurnAroundTime,
          // ]);
        }}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {simData.length ? (
            <Table
              simData={simData}
              isPriorityEnabled={isPriorityEnabled}
            ></Table>
          ) : (
            <></>
          )}
          {simData.length && (
            <>
              {" "}
              <PerformanceMeasures data={simData} />{" "}
              <Button
                title="Re evaluate"
                onClick={() => {
                  setShowAveragePerformanceMeasures(true)
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 2000);
                  const patients = arrivalTimes.arrivalTimes.map(
                    (_, i) =>
                      new Patient(
                        i + 1,
                        arrivalTimes.arrivalTimes[i],
                        serviceTimes[i],
                        priorities[i],
                        serviceTimes[i]
                      )
                  );
                  serve_highest_priority_patient(patients);
                  setSimData(patients);
                  setAverageWaitTimeList([
                    ...averageWaitTimeList,
                    averageWaitTime,
                  ]);
                  setAverageResponseTimeList([
                    ...averageResponseTimeList,
                    averageResponseTime,
                  ]);
                  setAverageTurnAroundTimeList([
                    ...averageTurnAroundTimeList,
                    averageTurnAroundTime,
                  ]);
                }}
              />
            </>
          )}
          {showAveragePerformanceMeasures && (
            <AveragePerformanceMeasures
              averageWaitTimeList={averageWaitTimeList}
              averageResponseTimeList={averageResponseTimeList}
              averageTurnAroundTimeList={averageTurnAroundTimeList}
            />
          )}
          {simData.length && <GanttChart data={simData} />}
        </>
      )}
    </div>
  );
}

export default Simulator;
