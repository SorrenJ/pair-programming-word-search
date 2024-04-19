const transpose = function (matrix) {
    const results = [];
    for (let i = 0; i < matrix[0].length; i++) {
      results[i] = [];
      
      for (let j = 0; j < matrix.length; j++) {
        results[i][j] = matrix[j][i];
      }
    }
    return results;
  };

  const internalJoining = function(array) {
    const horizontalJoin = array.map(ls => ls.join(''));
    return horizontalJoin;
  }

  const internalSearch = function(arr, word) {
    let joinedArr = internalJoining(arr);
    for (l of joinedArr) {
        if (l.includes(word)) return true
    } 
  }

  

const wordSearch = (letters, word) => { 
    
    if (internalSearch(letters, word)) {
        return true;
    }

    const transLetters = transpose(letters);
    if (internalSearch(transLetters, word)) {
        return true;
    }
    // const transHorizontalJoin = transLetters.map((ls) => ls.join(""));
    // for (l of transHorizontalJoin) {
    //   if (l.includes(word)) return true;
    // }
    return false;
}


const backwards1 = function(array) {
    const hori = array.map(ls => ls.join(''));
    return horizontalJoin;
  }


module.exports = wordSearch

//printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));