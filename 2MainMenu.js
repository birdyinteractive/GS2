// MainMenu.js
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from 'react';
import styles from './10Styles.js';
import storage from './1Storage.js';
var MainMenu = function(param) {
    var onNewGame = param.onNewGame, onLoadGame = param.onLoadGame, onExit = param.onExit, onSaveGame = param.onSaveGame;
    var _useState = _sliced_to_array(useState(false), 2), canLoad = _useState[0], setCanLoad = _useState[1];
    var _useState1 = _sliced_to_array(useState('SAVE GAME'), 2), saveText = _useState1[0], setSaveText = _useState1[1];
    var savedGame = storage.getGameState();
    var hasStartedGame = localStorage.getItem('gameStarted') === 'true';
    // Effect to monitor saved game state
    useEffect(function() {
        var checkSaveState = function() {
            var savedState = storage.getGameState();
            setCanLoad(!!savedState);
        };
        checkSaveState();
        window.addEventListener('storage', checkSaveState);
        return function() {
            return window.removeEventListener('storage', checkSaveState);
        };
    }, []);
    // Style for disabled buttons
    var disabledButtonStyle = _object_spread_props(_object_spread({}, styles.menuButton), {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: '#666',
        color: '#999'
    });
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.mainMenu,
        children: /*#__PURE__*/ _jsxDEV("div", {
            style: styles.menuContent,
            children: [
                /*#__PURE__*/ _jsxDEV("img", {
                    src: "https://play.rosebud.ai/assets/GSD-removebg-preview.png?unYD",
                    style: styles.menuImage,
                    alt: "Gumshoe Detective Agency Logo"
                }, void 0, false, {
                    fileName: "2MainMenu.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.menuButtons,
                    children: [
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: onNewGame,
                            style: styles.menuButton,
                            children: "NEW GAME"
                        }, void 0, false, {
                            fileName: "2MainMenu.js",
                            lineNumber: 40,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: function(e) {
                                e.preventDefault();
                                if (canLoad) {
                                    onLoadGame();
                                }
                            },
                            style: canLoad ? styles.menuButton : disabledButtonStyle,
                            disabled: !canLoad,
                            children: canLoad ? 'LOAD GAME' : 'NO SAVED GAME'
                        }, void 0, false, {
                            fileName: "2MainMenu.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: function(e) {
                                e.preventDefault();
                                if (hasStartedGame) {
                                    onSaveGame();
                                    setCanLoad(true);
                                    setSaveText('SAVED');
                                    setTimeout(function() {
                                        return setSaveText('SAVE GAME');
                                    }, 1000);
                                }
                            },
                            style: hasStartedGame ? styles.menuButton : disabledButtonStyle,
                            disabled: !hasStartedGame,
                            children: hasStartedGame ? saveText : 'START A GAME FIRST'
                        }, void 0, false, {
                            fileName: "2MainMenu.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: onExit,
                            style: styles.menuButton,
                            children: "EXIT GAME"
                        }, void 0, false, {
                            fileName: "2MainMenu.js",
                            lineNumber: 73,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "2MainMenu.js",
                    lineNumber: 39,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "2MainMenu.js",
            lineNumber: 33,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "2MainMenu.js",
        lineNumber: 32,
        columnNumber: 5
    }, _this);
};
export default MainMenu;
