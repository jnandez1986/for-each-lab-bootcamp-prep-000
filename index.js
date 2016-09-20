var iterativeLog = arr => {
  arr.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

var iterate = callback => {
  var arr = [1,2,3,4];
  arr.forEach(callback);
  return arr;
}

var doToArray = (array, callback) => {
  array.forEach(callback);
}
