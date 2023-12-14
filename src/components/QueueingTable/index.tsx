import React from "react";

const QueuingTable = ({ simData }) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Utilization
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Average System Length
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Average Queue Length
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Average Wait time in System
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Average Wait time in Queue
          </th>
        </tr>
      </thead>
      <tbody className="t-body-2">
        <tr>
          <td className="font-semibold border text-center px-2 py-3">
            {simData.utilization ? simData.utilization.toFixed(2) : "0"}
          </td>
          <td className="font-semibold border text-center px-2 py-3">
            {simData.averageQueueLengthSystem
              ? simData.averageQueueLengthSystem.toFixed(2)
              : "0"}
          </td>
          <td className="font-semibold border text-center px-2 py-3">
            {simData.averageQueueLengthQueue ? simData.averageQueueLengthQueue.toFixed(2) : "0"}
          </td>
          <td className="font-semibold border text-center px-2 py-3">
            {simData.averageWaitingTimeSystem
              ? simData.averageWaitingTimeSystem.toFixed(2)
              : "0"}
          </td>
          <td className="font-semibold border text-center px-2 py-3">
            {simData.averageWaitingTimeQueue ? simData.averageWaitingTimeQueue.toFixed(2) : "0"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default QueuingTable;
