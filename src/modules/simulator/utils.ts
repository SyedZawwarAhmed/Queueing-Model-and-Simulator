function toFixed(value, precision) {
    var precision = precision || 0,
        power = Math.pow(10, precision),
        absValue = Math.abs(Math.round(value * power)),
        result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

    if (precision > 0) {
        var fraction = String(absValue % power),
            padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
        result += '.' + padding + fraction;
    }
    return Number(result);
}

export function getArrivalTimes(
  meanArrivalNumber: number
): Record<string, number[]> {
  let cumulativeProbability = 0;
  const cumulativeProbabilities: number[] = [];
  let x = 0;
  while (toFixed(cumulativeProbability, 4) < 1) {
    const newValue =
      (Math.exp(-meanArrivalNumber) * Math.pow(meanArrivalNumber, x)) /
      factorial(x);
    cumulativeProbability += newValue;
    cumulativeProbabilities.push(toFixed(cumulativeProbability, 4));
    x += 1;
  }

  const cpLookUp = [0];
  for (let i = 0; i < cumulativeProbabilities.length - 1; i++) {
    cpLookUp.push(cumulativeProbabilities[i]);
  }

  const averageTimes = [...Array(cumulativeProbabilities.length).keys()];

  const interArrivals: number[] = [];
  for (let i = 0; i < cumulativeProbabilities.length; i++) {
    const randomNumber = Math.random();
    for (let j = 0; j < cumulativeProbabilities.length; j++) {
      const item = cumulativeProbabilities[j];
      if (randomNumber < item) {
        interArrivals.push(j);
        break;
      }
    }
  }

  const arrivalTimes = [interArrivals[0]];
  for (let i = 1; i < interArrivals.length; i++) {
    arrivalTimes.push(arrivalTimes[i - 1] + interArrivals[i]);
  }
  return {
    cumulativeProbabilities: cumulativeProbabilities,
    cpLookUp: cpLookUp,
    averageTimes: averageTimes,
    interArrivals: interArrivals,
    arrivalTimes: arrivalTimes,
  };
}

export function getServiceTimes(
  length: number,
  meanServiceNumber: number
): number[] {
  const serviceTimes: number[] = [];
  for (let i = 0; i < length; i++) {
    const serviceTime = -meanServiceNumber * Math.log(Math.random());
    serviceTimes.push(Math.ceil(serviceTime));
  }
  return serviceTimes;
}

export function getPriorities(
  length: number,
  A: number,
  M: number,
  Z: number,
  C: number,
  a: number,
  b: number
): number[] {
  const priorities: number[] = [];
  for (let i = 0; i < length; i++) {
    const R = (A * Z + C) % M;
    const S = R / M;
    const Y = Math.round((b - a) * S + a);
    priorities.push(Y);
    Z = R;
  }
  return priorities;
}

export function factorial(integer: number): number {
  let factorial = 1;

  for (let i = 1; i <= integer; i++) {
    factorial *= i;
  }

  return factorial;
}