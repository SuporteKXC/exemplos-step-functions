export const handler = async (event) => {
  
  console.log('event', )
    return {
      c: 3,
      ...event
    };
  };
  