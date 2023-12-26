//for
for(let i = 1; i <=10; i++){
    console.log(i);
}; 
//forEach
const flowerArr = ["Rose","Lotus","Lily","Lavender","Marigold","Sunflower"];
flowerArr.forEach((value, index, actualArray) => {
    console.log(`
            Value : ${value}
            Index : ${index}
            actualArray : ${actualArray}
           `);
  });
//forin
 const flowerobj ={
              flower1 : "rose",
              flower2 : "lotus",
              flower3 : "lily",
              flower4 : "lavender",
              flower5 :"marigold",
        };
   for(val in flowerobj) {
    console.log(`
           flower : ${val}
           name : ${flowerobj[val]}
     `);
   }
//for of
const collegename ="srikrishnacollege";

  for ( str of collegename ){
    console.log(str);
  }