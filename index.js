'use strict';

class client {

    constructor(opts) {

        this.opts = opts
    }

    insert(events) {


        // console.log('\nopts', this.opts)

        return new Promise((resolve, reject) => {


            var generateWarp10Cmd = require('./lib/generateWarp10Cmd')

            var request = ''
            for (var event of events) {
                //console.log(event)

                var duration = new Date(event.EndTimestamp) - new Date(event.StartTimestamp)

                event.duration = duration

                // console.log(event, this.opts.decoder)

                request += generateWarp10Cmd(event, this.opts.decoder)
            }

            //console.log(request)

            var emitWarp10Cmd = require('./lib/emitWarp10Cmd')

            emitWarp10Cmd(request, this.opts.warp10).then(() => {

                resolve('done')

            }).catch((error) => {
                console.log('err', error)

                reject(error)
            })
        })

    }
}

module.exports = (opts) => {

    var instance

    if (!instance) {
        instance = new client(opts);
    }

    return instance
};