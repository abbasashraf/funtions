exports.handler = (event, context, callback) => {
    console.log('queryStringParameters', event, context)
    callback(null, {
        statusCode: 200,
        body: 'Test first function!',
    });
};
