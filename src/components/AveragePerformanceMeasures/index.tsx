import Title from "../Title"

function AveragePerformanceMeasures ({averageTurnAroundTimeList, averageResponseTimeList, averageWaitTimeList}) {
  const dataLength = averageResponseTimeList.length
  const averageTurnAroundTime = averageTurnAroundTimeList.reduce(((total, current) => total + current), 0) / dataLength
  console.log("🚀 ~ file: index.tsx:6 ~ AveragePerformanceMeasures ~ averageTurnAroundTimeList:", averageTurnAroundTimeList)
  const averageResponseTime = averageResponseTimeList.reduce(((total, current) => total + current), 0) / dataLength
  const averageWaitTime = averageWaitTimeList.reduce(((total, current) => total + current), 0) / dataLength
  return <>
  <Title>Average Performance Measures</Title>
  <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Average Turn Around Time
          </th>
          <th className="px-6 py-3 text-white font-bold uppercase text-sm">
            Average Response Time
          </th>
          <th className="pri-server px-6 py-3 text-white font-bold uppercase text-sm">
            Average Wait Time
          </th>
        </tr>
      </thead>
      <tbody className="t-body-2">
            <tr>
              <td className="font-semibold border text-center px-2 py-3">
                {averageTurnAroundTime}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {averageResponseTime}
              </td>
              <td className="font-semibold border text-center px-2 py-3">
                {averageWaitTime}
              </td>
            </tr>
          
        
      </tbody>
    </table>
  </>
}

export default AveragePerformanceMeasures