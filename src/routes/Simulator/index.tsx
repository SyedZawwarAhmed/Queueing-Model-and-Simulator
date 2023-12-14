import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../globalStyles.css";
import Input from "../../components/Input";
import { getArrivalTimes, getPriorities, getServiceTimes } from "../../modules/simulator/utils";
import { Patient, serve_highest_priority_patient } from "../../modules/simulator/patient";
import Button from "../../components/Button";

function Simulator() {
  const location = useLocation();
  const { isPriorityEnabled } = location.state;

  const [arrivalMean, setArrivalMean] = useState();
  const [serviceMean, setServiceMean] = useState();
  const [numberOfServers, setNumberOfServers] = useState();

  const meanArrivalNumber = 2.25;
  const meanServiceNumber = 8.98;
  const A = 55;
  const M = 1994;
  const Z = 10112166;
  const C = 9;
  const a = 1;
  const b = 3;

  const arrivalTimes = getArrivalTimes(arrivalMean);
  const serviceTimes = getServiceTimes(
      arrivalTimes.arrivalTimes.length, serviceMean);
  const priorities = getPriorities(
      arrivalTimes.arrivalTimes.length, A, M, Z, C, a, b);

  const patients = arrivalTimes.arrivalTimes.map((_, i) => new Patient(i + 1, arrivalTimes.arrivalTimes[i], serviceTimes[i],
      priorities[i], serviceTimes[i]));

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <Input label="Arrival Mean" setValue={setArrivalMean} />

        <Input label="Service Mean" setValue={setServiceMean} />

        <Input label="Number of Servers" setValue={setNumberOfServers} />
      </div>
      <Button title="Simulate" onClick={() => {
          serve_highest_priority_patient(patients);
      }} />
    </div>
  );
}

export default Simulator;
