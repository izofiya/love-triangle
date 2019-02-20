/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var result = 0;
  for (var i = 0; i < preferences.length; i++) {
    var one = i + 1;
    var two = preferences[preferences[i] - 1];
    var three = preferences[preferences[preferences[i] - 1] -  1];
      if (preferences[i] !== one && two !== three && three === one) {
        result ++;
      }
  }
  return result / 3;
};

// function getLoveTrianglesCount(preferences = []) {
//   var result = 0;
//   preferences.forEach((value, i) => {
//     var one = i + 1;
//     var two = preferences[value - 1];
//     var three = preferences[preferences[value - 1] -  1];
//       if (value !== one && two !== three && three === one) {
//         result ++;
//       }
//     });

//   return result / 3;
// };


