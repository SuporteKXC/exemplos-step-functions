export const handler = async(event) => {
    
    console.log(event)
    return {
        b: 2,
        ...event
    };
};
