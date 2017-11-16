var nock = require('nock');

console.log('implement http mock')

nock('http://app.myapp.bzh:8080', { "encodedQueryParams": true })
    .post('/api/v0/update', "1510068780000000/48.746017:1.3680433/ test.tacho { } 97\n1510068780000000/48.746017:1.3680433/ test.mileage { } 474774.65\n1510068780000000/48.746017:1.3680433/ test.speed.avg { } 71.01512045105073\n1510068780000000/48.746017:1.3680433/ test.duration { } 7800000\n")
    .reply(200, "", ['Connection',
        'close',
        'Date',
        'Thu, 16 Nov 2017 13:55:41 GMT',
        'Access-Control-Allow-Origin',
        '*',
        'Vary',
        'Accept-Encoding, User-Agent'
    ]);

nock('http://app.myapp.bzh:8080', { "encodedQueryParams": true })
    .post('/api/v0/update', "1510068780000000/48.746017:1.3680433/ test.tacho {DriverNameId=88888,VehicleId=4446464} 97\n1510068780000000/48.746017:1.3680433/ test.mileage {DriverNameId=88888,VehicleId=4446464} 474774.65\n1510068780000000/48.746017:1.3680433/ test.speed.avg {DriverNameId=88888,VehicleId=4446464} 71.01512045105073\n1510068780000000/48.746017:1.3680433/ test.duration {DriverNameId=88888,VehicleId=4446464} 7800000\n")
    .reply(200, "", ['Connection',
        'close',
        'Date',
        'Thu, 16 Nov 2017 13:56:03 GMT',
        'Access-Control-Allow-Origin',
        '*',
        'Vary',
        'Accept-Encoding, User-Agent'
    ]);

nock('http://app.myapp.bzh:8080', { "encodedQueryParams": true })
    .post('/api/v0/update', "1510068780000000/48.746017:1.3680433/ test.tacho { } 97\n1510068780000000/48.746017:1.3680433/ test.mileage { } 474774.65\n1510068780000000/48.746017:1.3680433/ test.speed.avg { } 71.01512045105073\n1510068780000000/48.746017:1.3680433/ test.duration { } 7800000\n")
    .reply(200, "", ['Connection',
        'close',
        'Date',
        'Thu, 16 Nov 2017 14:01:55 GMT',
        'Access-Control-Allow-Origin',
        '*',
        'Vary',
        'Accept-Encoding, User-Agent'
    ]);


module.exports = nock