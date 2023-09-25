module.exports.handler = async (event) => {
    console.log(process.env)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "State1 Function",
          input: event,
        },
        null,
        2
      ),
    };
  };
  