function formatTime(time) {
    let timeNum = time;
    let result = {};
    let structure = {
        day: 3600,
        hour: 60,
        minute: 1
    };
    Object.keys(structure).forEach(function (key) {
        result[key] = Math.floor(timeNum / structure[key]);
        timeNum -= result[key] * structure[key];
    });
    return `${result.day} day(s)  ${result.hour} hour(s) ${result.minute} minute(s)`;
}

formatTime(122);