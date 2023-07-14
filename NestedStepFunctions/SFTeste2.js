export const handler = async (event) => {
    // TODO implement
  
  console.log('event', )
    return {
      c: 3,
      ...event
    };
  };
  