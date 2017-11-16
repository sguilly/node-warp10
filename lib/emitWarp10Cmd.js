var http = require('http')

var emitWarp10Cmd = function(postData, options) {
    return new Promise(function(resolve, reject) {


        const req = http.request(options, (res) => {
            // console.log(`STATUS: ${res.statusCode}`);
            // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {

            });
            res.on('end', () => {
                // console.log('No more data in response.');

                resolve()
            });
        });

        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);

            reject(e)
        });

        // write data to request body

        req.write(postData);
        req.end();

    })
}

module.exports = emitWarp10Cmd