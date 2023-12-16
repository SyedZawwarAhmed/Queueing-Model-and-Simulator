import Title from "../Title";

function PerformanceMeasures ({data}) {
  console.log("🚀 ~ file: index.tsx:4 ~ PerformanceMeasures ~ data:", data)
  const dataLength = data.length
  const averageTurnAroundTime = data.reduce(((total, current) => total + current.turn_around_time), 0) / dataLength
  const averageResponseTime = data.reduce(((total, current) => total + current.response_time), 0) / dataLength
  const averageWaitTime = data.reduce(((total, current) => total + current.wait_time), 0) / dataLength
  return (
    <>
    <Title>Performance Measures</Title>
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
  )
}

export default PerformanceMeasures