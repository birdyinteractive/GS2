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
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from 'react';
import storage from './1Storage.js';
import { SoundSystem, SOUND_EFFECTS } from './SoundSystem.js';
import styles from './10Styles.js';
var StartScreen = function(param) {
    var onStart = param.onStart;
    var handleNewGame = function() {
        // Clear all saved game state
        storage.clearGame();
        onStart();
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.startScreen,
        children: /*#__PURE__*/ _jsxDEV("div", {
            style: styles.startContent,
            children: [
                /*#__PURE__*/ _jsxDEV("h1", {
                    style: styles.startTitle,
                    children: "THE MASON ESTATE INVESTIGATION"
                }, void 0, false, {
                    fileName: "8StartScreen.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.instructions,
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: "You are a private investigator in 1995."
                        }, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 18,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: "Your mission: Uncover the truth about the disappearance of Victoria Mason."
                        }, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: "Use the computer terminal to access files, emails, and the early internet."
                        }, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: "Every piece of information could be vital."
                        }, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 23,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "8StartScreen.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, _this),
                localStorage.getItem('gameState') ? /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.buttonContainer,
                    children: [
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: onStart,
                            style: styles.startButton,
                            children: "CONTINUE INVESTIGATION"
                        }, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 27,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: handleNewGame,
                            style: _object_spread_props(_object_spread({}, styles.startButton), {
                                marginLeft: '20px'
                            }),
                            children: "NEW INVESTIGATION"
                        }, void 0, false, {
                            fileName: "8StartScreen.js",
                            lineNumber: 33,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "8StartScreen.js",
                    lineNumber: 26,
                    columnNumber: 11
                }, _this) : /*#__PURE__*/ _jsxDEV("button", {
                    onClick: onStart,
                    style: styles.startButton,
                    children: "BEGIN INVESTIGATION"
                }, void 0, false, {
                    fileName: "8StartScreen.js",
                    lineNumber: 41,
                    columnNumber: 11
                }, _this)
            ]
        }, void 0, true, {
            fileName: "8StartScreen.js",
            lineNumber: 14,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "8StartScreen.js",
        lineNumber: 13,
        columnNumber: 5
    }, _this);
};
export default StartScreen;
