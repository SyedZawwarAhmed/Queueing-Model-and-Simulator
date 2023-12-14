import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Model } from "../../constants/enums";
import Title from "../../components/Title";

function QueueingModel() {
  const location = useLocation();
  const { model } = location.state;

  const [arrivalMean, setArrivalMean] = useState();
  const [serviceMean, setServiceMean] = useState();
  const [numberOfServers, setNumberOfServers] = useState();
  const [minimumService, setMinimumService] = useState()
  const [maximumService, setMaximumService] = useState()
  const [arrivalVariance, setArrivalVariance] = useState()
  const [serviceVariance, setServiceVariance] = useState()

  console.log

  return (
    <div className="container">
      <Title>{model}</Title>
      <div className="grid grid-cols-3 gap-4">
        <Input label="Arrival Mean" setValue={setArrivalMean} />

        {
          (model === Model.MMN || model === Model.GGN) &&
          <Input label="Service Mean" setValue={setServiceMean} />
        }
        {
          model === Model.MGN &&
          <>
            <Input label="Minimum Service" setValue={setMinimumService} />
            <Input label="Maximum Service" setValue={setMaximumService} />
            <div />
          </>
        }
        {
          model === Model.GGN &&
          <>
            <Input label="Arrival Variance" setValue={setArrivalVariance} />
            <Input label="Service Variance" setValue={setServiceVariance} />
          </>
        }
        <Input label="Number of Servers" setValue={setNumberOfServers} />
      </div>
      <Button title="Generate" onClick={() => { }} />
      {/* {simData.length ? <Table simData={simData} isPriorityEnabled={isPriorityEnabled}></Table> : <></>} */}
    </div>
  );
}

export default QueueingModel;
