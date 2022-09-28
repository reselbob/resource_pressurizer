const {logger} = require('../logger');
const axios = require('axios');
const pressurizeNetwork = async ()=> {
    const milliSecs = 50;
    async function callApi() {
        const url = `https://api.publicapis.org/entries`;
        const config = {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
        logger.info(`Getting data from ${url} at: ${Date.now()}`);
        //Go get a joke
        const response = await axios({
            url: url,
            method: 'get',
            headers: config.headers
        });
        logger.info(`Received from ${url}: ${JSON.stringify(response.data)}` )
    }

    for(;;){
        await callApi();
    }
}


module.exports = {pressureNetwork: pressurizeNetwork};
