var test = require('ava')
var warp10 = require('../index')

var nock = require('./http_hook');

// var nock = require('nock')
// nock.recorder.rec();

var decoder = {
    ts: 'StartTimestamp',
    lat: 'Position.Lat',
    long: 'Position.Long',
    prefixValue: 'test.',
    values: { 'tacho': 'ATSParameter', 'mileage': 'Mileage', 'speed.avg': 'AvgSpeed', 'duration': 'duration' }
}

var warp10_option = {
    hostname: 'app.myapp.bzh',
    // hostname: 'ide.s3pweb.ovh',
    port: 8080,
    path: '/api/v0/update',
    method: 'POST',
    headers: {
        'X-Warp10-Token': 'XXX'
    }
}

var events = [{
    "DriverNameId": "88888",
    "ATSParameter": "97",
    "VehicleId": "4446464",
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


test('without tags', async t => {


    const promise1 = warp10({
        decoder: decoder,
        warp10: warp10_option
    }).insert(events);

    t.is(await promise1, 'done');

});


test('with tags', async t => {

    const promise2 = warp10({
        decoder: Object.assign({ tags: ['DriverNameId', 'VehicleId'] }, decoder),
        warp10: warp10_option
    }).insert(events);

    t.is(await promise2, 'done');

})


test('test with new instance', async t => {

    const promise4 = require('../index')({
        decoder: decoder,
        warp10: warp10_option
    }).insert(events);

    t.is(await promise4, 'done');
});

// TO DO: do 't work
test('test wrong port', async t => {

    const promise3 = warp10({
        decoder: decoder,
        warp10: Object.assign({ path: 'api' }, warp10_option)
    }).insert(events);

    await t.throws(promise3);
});