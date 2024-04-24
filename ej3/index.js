const numerosJS = require('./numeros.js');
const Logger = require('logplease');
const logger = Logger.create('utils');


const numeros = [2,3,101,201,202,100];

const colorLogger = (numerosArr) => {
    numerosArr.forEach(num => {
        if (numerosJS.esPar(num)){
            logger.info(`${num} es par.`);
        } else {
            logger.error(`${num} no es par.`);
        }
    })
};

colorLogger(numeros);
