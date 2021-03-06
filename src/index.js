/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let first;
  let second;
  let third;
    
    for (let i=0; i < preferences.length; i++){
    if(preferences[i] !== i+1){
    first = preferences[i];
    second = preferences[first-1];
    third = preferences [second-1];
    if(i == third - 1){
      count++;
      preferences[i] = 0;
      preferences[(first-1)] = 0;
      preferences[(second-1)] = 0;
      
   }
  }
}
   
   return count;
  }
