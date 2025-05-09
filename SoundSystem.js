function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var SOUNDS = {
    STARTUP: 'https://play.rosebud.ai/assets/startup.mp3',
    CLICK: 'https://play.rosebud.ai/assets/click.mp3',
    ERROR: 'https://play.rosebud.ai/assets/error.mp3',
    NEW_EMAIL: 'https://play.rosebud.ai/assets/newemail.mp3'
};
var soundCache = new Map();
function loadSound(url) {
    return _loadSound.apply(this, arguments);
}
function _loadSound() {
    _loadSound = _async_to_generator(function(url) {
        var response, arrayBuffer, audioBuffer, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (soundCache.has(url)) {
                        return [
                            2,
                            soundCache.get(url)
                        ];
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        fetch(url)
                    ];
                case 2:
                    response = _state.sent();
                    return [
                        4,
                        response.arrayBuffer()
                    ];
                case 3:
                    arrayBuffer = _state.sent();
                    return [
                        4,
                        audioContext.decodeAudioData(arrayBuffer)
                    ];
                case 4:
                    audioBuffer = _state.sent();
                    soundCache.set(url, audioBuffer);
                    return [
                        2,
                        audioBuffer
                    ];
                case 5:
                    error = _state.sent();
                    console.error('Error loading sound:', error);
                    return [
                        2,
                        null
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    });
    return _loadSound.apply(this, arguments);
}
export var SoundSystem = {
    init: /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Preload all sounds
                    return [
                        4,
                        Promise.all(Object.values(SOUNDS).map(loadSound))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }),
    play: /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(soundName) {
            var url, buffer, source, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        url = SOUNDS[soundName];
                        if (!url) return [
                            2
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            loadSound(url)
                        ];
                    case 2:
                        buffer = _state.sent();
                        if (buffer) {
                            source = audioContext.createBufferSource();
                            source.buffer = buffer;
                            source.connect(audioContext.destination);
                            source.start(0);
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        console.error('Error playing sound:', error);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function(soundName) {
            return _ref.apply(this, arguments);
        };
    }()
};
export var SOUND_EFFECTS = {
    STARTUP: 'STARTUP',
    CLICK: 'CLICK',
    ERROR: 'ERROR',
    NEW_EMAIL: 'NEW_EMAIL'
};
