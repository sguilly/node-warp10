# node-warp10 [![Build Status](https://travis-ci.org/sguilly/node-warp10.svg?branch=master)](https://travis-ci.org/sguilly/node-warp10) [![codecov](https://codecov.io/gh/sguilly/node-warp10/badge.svg?branch=master)](https://codecov.io/gh/sguilly/node-warp10?branch=master)

> A simple module to send JSON events in warp10 platform


## Install

```
$ npm install node-warp10
```


## Usage

```js
const warp10 = require('node-warp10');

var decoder = {
    ts: 'StartTimestamp',
    lat: 'Position.Lat',
    long: 'Position.Long',
    prefixValue: 'test.',
    values: { 'tacho': 'ATSParameter', 'mileage': 'Mileage', 'speed.avg': 'AvgSpeed', 'duration': 'duration' }
}

var warp10_option = {
    hostname: 'app.myapp.bzh',
    port: 7080,
    path: '/api/v0/update',
    method: 'POST',
    headers: {
        'X-Warp10-Token': 'XXXX REPLACE BY YOUR WRITE TOKEN XXXX'
    }
}

var events = [{
    "DriverNameId": "88888",
    "ATSParameter": "97",
    "VehicleId": "56565",
    "Position": {
        "Long": "1.3680433",
        "Lat": "48.746017",
        "PosText": "W,73,Paris (F-75001),",
        "Course": "264",
        "KM": "474774.6",
        "GPSStatus": "OK"
    },
    "StartTimestamp": "2017-11-07 16:33:00",
    "EndTimestamp": "2017-11-07 18:43:00",
    "AvgSpeed": "71.01512045105073",
    "Mileage": "474774.65"
}]

warp10({
        decoder: decoder,
        warp10: warp10_option
    }).insert(events).then(()=>{
		console.log('done')
	}).catch((err)=>{
		console.log(err)
	})

```


## License

MIT © [Stéphane GUILLY](https://github.com/sguilly)
