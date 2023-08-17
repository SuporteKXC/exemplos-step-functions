import { randomBytes } from "crypto";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

export const lambdaHandler = async (event, context) => {
    console.log(event)

    var date = new Date();
    let transaction_result = {
        'id': randomBytes(16).toString("hex"), 
        'type': "buy", 
        'qty': getRandomInt(10).toString(),  
        'timestamp': date.toISOString(),  
    }
    return transaction_result
};
