exports.handler = async event => {
    const queryString = event.queryStringParameters
    const friend = queryString.friend || "friend"
    return {
        statusCode: 200,
        body: `Hello, ${friend}!`
    }
}