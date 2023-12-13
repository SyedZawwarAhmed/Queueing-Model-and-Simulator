import React from "react";

function Table() {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            Arrival Time
          </th>
          <th className="pri-server px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            Start Time
          </th>
          <th className="pri-server px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            End Time
          </th>
          <th className="pri-server px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            Server
          </th>
          <th className="pri-server px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            Service Time
          </th>
          <th className="px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            Turnaround Time
          </th>
          <th className="px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            Wait Time
          </th>
          <th className="px-6 py-3 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
            Response Time
          </th>
        </tr>
      </thead>
      <tbody className="t-body-2">
      {/* <td className="font-semibold border text-center px-2 py-3">${arrival}</td>
        <td className="font-semibold border text-center px-2 py-3">${startTime}</td>
        <td className="font-semibold border text-center px-2 py-3">${endTime}</td>
        <td className="font-semibold border text-center px-2 py-3">${serviceTime}</td>
        <td className="font-semibold border text-center px-2 py-3">${turnAroundTime}</td>
        <td className="font-semibold border text-center px-2 py-3">${waitTime}</td>
        <td className="font-semibold border text-center px-2 py-3">${responseTime}</td> */}
      </tbody>
    </table>
  );
}

export default Table;
