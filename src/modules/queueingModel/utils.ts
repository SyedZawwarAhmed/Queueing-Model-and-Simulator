// Queuing Models

let arrivalRate, serviceRate, min, max;

// M/M/1 Queue Model
function calculateMM1(lambda, mew) {
  arrivalRate = lambda
  serviceRate = mew
  const utilization = arrivalRate / serviceRate;
  const averageQueueLengthQueue = Math.pow(utilization,2) / (1 - utilization)
  const averageWaitingTimeQueue = averageQueueLengthQueue/arrivalRate
  const averageWaitingTimeSystem = averageWaitingTimeQueue + (1/serviceRate)
  const averageQueueLengthSystem = arrivalRate*averageWaitingTimeSystem;

  return {
    utilization,
    averageQueueLengthSystem,
    averageWaitingTimeSystem,
    averageQueueLengthQueue,
    averageWaitingTimeQueue, 
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function calculatePo(c, rho){
  let res = 0
  for(let n = 0; n<c; n++){
    res += Math.pow((c*rho), n)/factorial(n)
  }
  return 1 / (res + (Math.pow((c*rho), c)/(factorial(c)*(1-rho))))
}

// M/M/2 Queue Model
function calculateMM2(lamda, mew) {
  arrivalRate = lamda
  serviceRate = mew
  // Calculate utilization
  const utilization = arrivalRate / (2 * serviceRate);

  // Calculate average queue length and waiting 
  const averageQueueLengthQueue = (calculatePo(2, utilization)*Math.pow((arrivalRate/serviceRate),2)*utilization)/(factorial(2)*Math.pow(1-utilization, 2));
  const averageWaitingTimeQueue = averageQueueLengthQueue / arrivalRate
  const averageWaitingTimeSystem = averageWaitingTimeQueue + (1/serviceRate)
  const averageQueueLengthSystem = arrivalRate*averageWaitingTimeSystem;

  return {
    utilization,
    averageQueueLengthSystem,
    averageWaitingTimeSystem,
    averageQueueLengthQueue,
    averageWaitingTimeQueue,
  };
}

// M/G/1 Queue Model
function calculateMG1(lambda, minVal, maxVal) {
  arrivalRate = lambda
  min = minVal
  max = maxVal
  serviceRate = 1/((min + max)/2)

  const utilization = arrivalRate / serviceRate;
  const averageQueueLengthQueue = (Math.pow(arrivalRate,2)*(Math.pow(max-min, 2)/12)+Math.pow(utilization, 2)) / (2*(1-utilization))
  const averageWaitingTimeQueue = averageQueueLengthQueue/arrivalRate
  const averageWaitingTimeSystem = averageWaitingTimeQueue + (1/serviceRate)
  const averageQueueLengthSystem = averageWaitingTimeSystem*arrivalRate

  return {
    utilization,
    averageQueueLengthQueue,
    averageWaitingTimeQueue,
    averageQueueLengthSystem,
    averageWaitingTimeSystem,
  };
}

// M/G/2 Queue Model
function calculateMG2(lambda, minVal, maxVal) {
  arrivalRate = lambda
  min = minVal
  max = maxVal
  serviceRate = 1/((min + max)/2)
  const cs = (Math.pow(min-max,2)/12)/Math.pow(1/serviceRate, 2)

  // Calculate utilization
  const utilization = arrivalRate / (2 * serviceRate);

  // Estimate the average length of queue for G/G/2 model
  const expaverageQueueLengthQueue = (calculatePo(2, utilization)*Math.pow((arrivalRate/serviceRate),2)*utilization)/(factorial(2)*Math.pow(1-utilization, 2));
  const averageWaitingTimeQueue = (expaverageQueueLengthQueue / arrivalRate)*((1+cs)/2)

  const averageQueueLengthQueue = averageWaitingTimeQueue * arrivalRate
  const averageWaitingTimeSystem = averageWaitingTimeQueue + (1/serviceRate)
  const averageQueueLengthSystem = arrivalRate * averageWaitingTimeSystem

  return {
    utilization,
    averageQueueLengthQueue,
    averageQueueLengthSystem,
    averageWaitingTimeSystem,
    averageWaitingTimeQueue,
  };
}

// G/G/1 Queue Model
function calculateGG1(lambda, mew, arrivalVariance, serviceVariance) {
  arrivalRate = 1/lambda
  serviceRate = 1/mew
  const ca = arrivalVariance/(Math.pow(1/arrivalRate, 2))
  const cs = serviceVariance/(Math.pow(1/serviceRate, 2))

  // Calculate utilization
  const utilization = arrivalRate / serviceRate;

  const averageQueueLengthQueue = (Math.pow(utilization, 2)*(1+cs)*(ca+Math.pow(utilization, 2)*cs))/(2*(1-utilization)*(1+Math.pow(utilization, 2)*cs))
  const averageWaitingTimeQueue = averageQueueLengthQueue/arrivalRate
  const averageWaitingTimeSystem = averageWaitingTimeQueue + (1/serviceRate)
  const averageQueueLengthSystem = arrivalRate*averageWaitingTimeSystem

  return {
    utilization,
    averageQueueLengthQueue,
    averageWaitingTimeQueue,
    averageWaitingTimeSystem,
    averageQueueLengthSystem
  };
}

// G/G/2 Queue Model
function calculateGG2(arrivalMean, serviceMean, arrivalVariance, serviceVariance) {
  arrivalRate = 1/arrivalMean
  serviceRate = 1/serviceMean
  const ca = arrivalVariance/(Math.pow(1/arrivalRate, 2))
  const cs = serviceVariance/(Math.pow(1/serviceRate, 2))

  // Calculate utilization
  const utilization = arrivalRate / (2 * serviceRate);

  // Estimate the second moment of service time for M/M/2 model
  const expaverageQueueLengthQueue = (calculatePo(2, utilization)*Math.pow((arrivalRate/serviceRate),2)*utilization)/(factorial(2)*Math.pow(1-utilization, 2));

  const averageQueueLengthQueue = expaverageQueueLengthQueue*((ca+cs)/2)
  const averageWaitingTimeQueue = averageQueueLengthQueue/arrivalRate
  const averageWaitingTimeSystem = averageWaitingTimeQueue + (1/serviceRate)
  const averageQueueLengthSystem = arrivalRate*averageWaitingTimeSystem

  return {
    utilization,
    averageQueueLengthQueue,
    averageWaitingTimeQueue,
    averageWaitingTimeSystem,
    averageQueueLengthSystem,
  };
}