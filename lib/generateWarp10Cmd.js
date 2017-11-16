Object.resolve = function(obj, path) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj || self)
}

var generateHeader = function(date, lat, long) {
    var timestamp = new Date(date);
    timestamp = timestamp.getTime() * 1e3;

    var headerText =
        timestamp + "/" + (lat ? lat : "") + ":" + (long ? long : "") + "/";

    return headerText;
};

var generateTagsText = function(event, decoder) {
    if (decoder && decoder.tags && decoder.tags.length > 0) {
        var tagsText = "{";

        for (var index = 0; index < decoder.tags.length; index++) {
            var tag = decoder.tags[index];
            tagsText += tag + "=" + Object.resolve(event, tag);
            if (index < decoder.tags.length - 1) {
                tagsText += ",";
            }
        }
        tagsText += "}";
    } else {
        return "{ }";
    }
    return tagsText;
};

var generateWarp10Cmd = function(event, decoder) {


    // console.log('\nevent=', event)
    var Warp10Cmd = "";

    var headerText = generateHeader(
        Object.resolve(event, decoder.ts),
        decoder.long && decoder.lat ? Object.resolve(event, decoder.lat) : null,
        decoder.long && decoder.lat ? Object.resolve(event, decoder.long) : null
    );

    // console.log('\nheader=', headerText)

    var tagsText = generateTagsText(event, decoder);

    var valuesName = Object.keys(decoder.values);

    for (valueName of valuesName) {

        var value = Object.resolve(event, decoder.values[valueName])

        if (value) {
            Warp10Cmd +=
                headerText +
                " " +
                (decoder.prefixValue ? decoder.prefixValue : "") +
                valueName +
                " " +
                tagsText +
                " " +
                value +
                "\n";
        }

    }

    return Warp10Cmd;
};

module.exports = generateWarp10Cmd;