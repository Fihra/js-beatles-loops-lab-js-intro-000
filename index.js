function theBeatlesPlay(musicians, instruments){
    var newArray = [];
    for(var m = 0, i = 0; m < musicians.length && i < instruments.length; m++, i++){
      newArray.push(`${musicians[m]} plays ${instruments[i]}`);
    }
    return newArray;
}

function johnLennonFacts(facts){
  var counter = 0;
  while(counter < facts.length){
    console.log(facts[counter] + "!!!");
    counter++;
  }
}
