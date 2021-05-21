function convertFahrToCelsius(value){
    if ( Array.isArray(value) ){
      return '[$(value)] is not a valid number but a/an array,'
    }else if( typeof (value) == "object" ) {
        return'{$(value)} is not a valid number but a/an object,'
    }else{
    C = Number(value)
    let Fahr = (C-32)/1.8
    Temp = Fahr.toFixed(4);
    return Temp;
    }
}

Temp = convertFahrToCelsius();
console.log("The Temp is",Temp,"degrees celsius");