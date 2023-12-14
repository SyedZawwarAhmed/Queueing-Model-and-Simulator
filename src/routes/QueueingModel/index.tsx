import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Model } from "../../constants/enums";
import Title from "../../components/Title";
import {
  calculateMM1,
  calculateMMC,
  calculateMG1,
  calculateMGC,
  calculateGG1,
  calculateGGC,
} from "../../modules/queueingModel/utils";
import QueuingTable from "../../components/QueueingTable";
import Loader from "../../components/Loader/Index";

function QueueingModel() {
  const location = useLocation();
  const { model } = location.state;

  const [arrivalMean, setArrivalMean] = useState();
  const [serviceMean, setServiceMean] = useState();
  const [numberOfServers, setNumberOfServers] = useState();
  const [minimumService, setMinimumService] = useState();
  const [maximumService, setMaximumService] = useState();
  const [arrivalVariance, setArrivalVariance] = useState();
  const [serviceVariance, setServiceVariance] = useState();
  const [modelData, setModelData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateQueuingModel = () => {
    if (model == Model.MMN) {
      if (numberOfServers == 1) {
        setModelData(calculateMM1(arrivalMean, serviceMean));
      }
      setModelData(calculateMMC(arrivalMean, serviceMean, numberOfServers));
    }
    if (model == Model.MGN) {
      if (numberOfServers == 1) {
        setModelData(calculateMG1(arrivalMean, minimumService, maximumService));
      }
      setModelData(
        calculateMGC(
          arrivalMean,
          minimumService,
          maximumService,
          numberOfServers
        )
      );
    }
    if (model == Model.GGN) {
      if (numberOfServers == 1) {
        setModelData(
          calculateGG1(
            arrivalMean,
            serviceMean,
            arrivalVariance,
            serviceVariance
          )
        );
      }
      setModelData(
        calculateGGC(
          arrivalMean,
          serviceMean,
          arrivalVariance,
          serviceVariance,
          numberOfServers
        )
      );
    }
  };

  return (
    <div className="container">
      <Title>{model}</Title>
      <div className="grid grid-cols-3 gap-4">
        <Input label="Arrival Mean" setValue={setArrivalMean} />

        {(model === Model.MMN || model === Model.GGN) && (
          <Input label="Service Mean" setValue={setServiceMean} />
        )}
        {model === Model.MGN && (
          <>
            <Input label="Minimum Service" setValue={setMinimumService} />
            <Input label="Maximum Service" setValue={setMaximumService} />
            <div />
          </>
        )}
        {model === Model.GGN && (
          <>
            <Input label="Arrival Variance" setValue={setArrivalVariance} />
            <Input label="Service Variance" setValue={setServiceVariance} />
          </>
        )}
        <Input label="Number of Servers" setValue={setNumberOfServers} />
      </div>
      <Button title="Generate" onClick={() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
        generateQueuingModel()
      }
      } />
      {isLoading ? <Loader />: <>
      {modelData ? <QueuingTable simData={modelData}/> : <></>}
      </>}
    </div>
  );
}

export default QueueingModel;
