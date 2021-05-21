function checkYuGiOh(n) {


    if (isNaN(n)) {
        return 'invalid parameter: "fizzbuzz is meh"'
    }

    let arr = [...Array(n+1).keys()].slice(1);
    
    let yu = "yu"
    let gi = "gi"
    let oh = "oh"

    let results = [];

    arr.forEach(function(entry) {

        if (entry % 2 === 0) {

          let final = [];

          final.push(yu);

          if (entry % 3 === 0) {
  
            final.push(gi);
        }
        if (entry % 5 === 0) {
  
            final.push(oh);
        }
        results.push(final.join('-'))
    }

    
    else if (entry % 3 === 0) {
        let final = [];

        final.push(gi)

        if (entry % 5 === 0) {
            final.push(oh);
        }
        results.push(final.join('-'))
    }

    else if (entry % 5 === 0) {
        let final = [];

        final.push(oh)

        results.push(final.join('-'))
    }

    else{
        results.push(entry)
    }
}
 );

 //console.log(arr);

 return results;

}


const parameter1 = checkYuGiOh(5)
const parameter2 = checkYuGiOh(10)
const parameter3 = checkYuGiOh("fizzbuzz is meh")


console.log(parameter1);
console.log(parameter2);
console.log(parameter3);

    
