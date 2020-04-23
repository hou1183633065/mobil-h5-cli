export function randomWord(len, upper) {
  let newStr = '';
  len = len || parseInt(Math.random() * 36, 0);
  upper = upper || Math.round(Math.random());
  let newArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < len; i++) {
    let newIndex = Math.round(Math.random() * (newArr.length - 1));
    newStr += newArr[newIndex];
  }
  if (upper) {
    newStr = newStr.toUpperCase();
  } else {
    newStr = newStr.toLowerCase();
  }
  return newStr;
}

export function ObjectTransformArray(optObj) {
  let newArr = [];
  for (const key in optObj) {
    newArr.push({
      value: key,
      label: optObj[key]
    });
  }
  return newArr;
}
