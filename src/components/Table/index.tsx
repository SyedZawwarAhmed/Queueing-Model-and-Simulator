import React from "react";

function Table({ simData, isPriorityEnabled }) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Patient ID
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Arrival Time
          </th>
          <th className="pri-server px-6 py-3 text-white font-bold uppercase text-sm">
            Start Time
          </th>
          <th className="pri-server px-6 py-3 text-white font-bold uppercase text-sm">
            End Time
          </th>
          {isPriorityEnabled && <th className="pri-server px-6 py-3 text-white font-bold uppercase text-sm">
            Priority
          </th>}
          <th className="pri-server px-6 py-3 text-white font-bold uppercase text-sm">
            Service Time
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Turnaround Time
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Wait Time
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Response Time
          </th>
        </tr>
      </thead>
      <tbody className="t-body-2">
        {simData.map((data) => {
          return (
            <tr>
              <td className="font-semibold border text-center px-2 py-3">
                {data.patient_id ? data.patient_id : '0'}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {data.arrival_time ? data.arrival_time : '0'}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {data.start_time ? data.start_time : '0'}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {data.end_time ? data.end_time : '0'}
              </td>
              {isPriorityEnabled && <td className="font-semibold border text-center px-2 py-3">
                {data.priority ? data.priority : '0'}
              </td>}
              <td className="font-semibold border text-center px-2 py-3">
                {data.burst_time ? data.burst_time : '0'}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {data.turn_around_time ? data.turn_around_time : '0'}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {data.wait_time ? data.wait_time : '0'}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {data.response_time ? data.response_time : '0'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
