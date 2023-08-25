const AWS = require('aws-sdk')

const roleToAssume = {
    RoleArn: "<role>",
    RoleSessionName: 'session1',
    DurationSeconds: 900,
};

// Create the STS service object    
const sts = new AWS.STS({apiVersion: '2011-06-15'});

exports.handler = async(event) => {
    
    console.log(event)
    const resAssumeRole = await sts.assumeRole(roleToAssume).promise()
    
  
    console.log(resAssumeRole)
    
    if(!resAssumeRole.Credentials){
        return {
            statusCode: 500,
            body: JSON.stringify(resAssumeRole)
        }    
    }
    
    const credentials = resAssumeRole.Credentials
    
    const stepFunctions = new AWS.StepFunctions({
       accessKeyId:  credentials.AccessKeyId,
       secretAccessKey: credentials.SecretAccessKey,
       sessionToken: credentials.SessionToken
    })

    const params = {
      stateMachineArn: '<state machine arn>', /* required */
      input: JSON.stringify({
          "Comment": "Insert your JSON here"
        }),
      name: 'teste1'
    };
    
    const res =  await stepFunctions.startExecution(params).promise();

    return {
      res
    };
};
