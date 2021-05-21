function convertFahrToCelsius(value){
    if ( Array.isArray(value) ){
      return '[1,2,3] is not a valid number but an array,'
    }else if( typeof (value) == "object" ) {
        return'{temp: 0} is not a valid number but an object,'
    }else{
    C = Number(value)
    let Fahr = (C-32)/1.8
    Temp = Fahr.toFixed(4);
    return Temp;
    }
}

const Temp1 = convertFahrToCelsius(0);
const Temp2 = convertFahrToCelsius("0");
const Temp3 = convertFahrToCelsius([1,2,3]);
const Temp4 = convertFahrToCelsius({temp: 0});


console.log("The Temp is",Temp1,"degrees celsius");
console.log("The Temp is",Temp2,"degrees celsius");
console.log("The Temp is",Temp3,"degrees celsius");
console.log("The Temp is",Temp4,"degrees celsius");