exports.handler = (event, context, callback) => {
    console.log('queryStringParameters', event.queryStringParameters)
    callback(null, {
        statusCode: 200,
        body: 'Yey!',
    });
};
