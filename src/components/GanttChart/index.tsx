// import React from 'react';
// import Plot from 'react-plotly.js';

// const GanttChart: React.FC = ({simulationData}) => {
//   const patientList = [
//     // Add your patient data here
//     // Example: { patiend_id: '1', start_times: [1, 2, 3], end_times: [2, 3, 4] }
//   ];
  
//   console.log("🚀 ~ file: index.tsx:40 ~ simulationData:", simulationData)
//   const data = simulationData.flatMap((patient, index) => {
//     return patient.start_times.map((startTime, i) => {
//       return {
//         x: [startTime, patient.end_times[i]],
//         y: [patient.patient_id],
//         type: 'bar',
//         orientation: 'h',
//         name: `Patient ${patient.patient_id}`,
//         marker: { color: index },
//         hoverinfo: 'x',
//         showlegend: i === 0,
//       };
//     });
//   });
//   console.log("🚀 ~ file: index.tsx:24 ~ data ~ data:", data)

//   const layout = {
//     barmode: 'stack',
//     title: 'Gantt Chart',
//     // groupTasks: true,
//     yaxis: {
//       autorange: 'reversed',
//       title: 'Patients',
//     },
//     xaxis: {
//       title: 'Time Passed (seconds)',
//     },
//     width: 1200, 
//     height: 600,
//   };

//   return <Plot data={data} layout={layout} />;
// };

// export default GanttChart;
