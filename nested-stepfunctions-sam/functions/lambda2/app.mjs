function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const lambdaHandler = async (event, context) => {
    console.log(event)
    
    const stock_price = getRandomInt(100) 

    return { 'stock_price': stock_price }
};
