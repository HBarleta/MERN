const tossCoin = () => {
  return Math.random() > 0.5 ? "Heads" : "Tails";
};

// const fiveHeadsSync = () => {
//   let headsCount = 0;
//   let attempts = 0;
//   while(headsCount < 5 ){
//     attempts++;
//     let result = tossCoin();
//     console.log(`${result} was flipped`);
//     if(result==="heads"){
//       headsCount++;
//     } else{
//       headsCount = 0;
//     }
//   }
//   return `It took ${attempts} tries to flip five "heads"`;
// }

// console.log(fiveHeadsSync());
// console.log("This is run after fiveHeadsSync function completes")


const fiveHeads = () => {
  return new Promise ( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5 ){
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if(result ==="Heads"){
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    if(headsCount === 5 && attempts < 101){
      resolve(`It took ${attempts} tries to flip 5 "Heads"`)
    } else{
      reject("Could not reach 5 heads before 100 flips")
    }
  });
}
fiveHeads()
    .then(res => console.log(res))
    .catch ( err => console.log(err) );
console.log("When does this run now?");

// const noMondays = new Promise((resolve, reject) => {
//   if(new Date().getDay() !== 1 ){
//     resolve("Good, its not Monday!");
//   } else {
//     reject("Someone has a case of the Mondays!");
//   }
// });
// noMondays
//     .then(res => console.log(res) )
//     .catch( err => console.log(err) );
