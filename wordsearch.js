//Jorge Medina, Fakeha Iftikhar, Sorren Jao

const transpose = function(matrix) {
  const results = [];
  for (let i = 0; i < matrix[0].length; i++) {
    results[i] = [];
      
    for (let j = 0; j < matrix.length; j++) {
      results[i][j] = matrix[j][i];
    }
  }
  return results;
};

const internalJoining = function(array, back) {
  let horizontalJoin = [];
  if (back) {
    horizontalJoin = array.map(ls => ls.reverse().join(''));
  } else {
    horizontalJoin = array.map(ls => ls.join(''));
  }
  return horizontalJoin;
};
  
const internalSearch = function(arr, word, back) {
  let joinedArr = [];
  if (back) {
    joinedArr = internalJoining(arr, true);
  } else {
    joinedArr = internalJoining(arr);
  }
  for (let l of joinedArr) {
    if (l.includes(word)) return true;
  }
};
  
const wordSearch = (letters, word) => {
  const transLetters = transpose(letters);

  // FIRST CASE: searching horizontally =======> DONE!
  if (internalSearch(letters, word)) {
    return true;
    /* SECOND CASE: searching vertically =======> DONE! */
  } else if (internalSearch(transLetters, word)) {
    return true;
    /* THIRD CASE: searching horizontally backwards =======> DONE! */
  }  else if (internalSearch(letters, word, true)) {
    return true;
    /* FOURTh CASE: searching vertically backwards =======> DONE!*/
  }  else if (internalSearch(transLetters, word, true)) {
    return true;
  } else {
    return false;
  }
};

// Finished search

module.exports = wordSearch;

