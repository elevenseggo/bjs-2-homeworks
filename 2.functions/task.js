function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let length = arr.length;
  let avg = Number((sum/length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) return 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max-min;
  }


function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (elem in arr) {
      if (arr[elem] % 2 == 0)
      {
        sumEvenElement += arr[elem];
      }
      else {
        sumOddElement += arr[elem];
      }
    }
    let result = sumEvenElement-sumOddElement;
    return result;
    }
    else {
      return 0;
    }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num;
            countEvenElement++;
        }
    }
    return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) return 0;
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr) {
      let result = func(...arr);
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }
  return maxWorkerResult;
}
