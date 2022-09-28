const {logger} = require("../logger");
const isPrimeSync = (num) =>{
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}
const pressurizeCpu = async ()=> {
    let i = 0;
    for(;;){
        if(isPrimeSync(i)){
            logger.info(`${i} is prime`)
        }i++;
    }
}

module.exports = {pressureCpu: pressurizeCpu}
