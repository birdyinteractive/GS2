function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import { SoundSystem, SOUND_EFFECTS } from './SoundSystem.js';
import MainMenu from './2MainMenu.js';
import DesktopIcons from './5Desktopicons.js';
import StartScreen from './8StartScreen.js';
import Browser from './6Browser.js';
import EmailClient from './7EmailClient.js';
import Notes from './3Notes.js';
import Evidence from './4Evidence.js';
import storage from './1Storage.js';
import styles from './10Styles.js';
var App = function() {
    var _useState = _sliced_to_array(useState(true), 2), showMainMenu = _useState[0], setShowMainMenu = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), gameStarted = _useState1[0], setGameStarted = _useState1[1];
    var _useState2 = _sliced_to_array(useState(false), 2), isMuted = _useState2[0], setIsMuted = _useState2[1];
    var _useState3 = _sliced_to_array(useState(function() {
        var gameState = storage.getGameState();
        return gameState ? gameState.activeProgram : null;
    }), 2), activeProgram = _useState3[0], setActiveProgram = _useState3[1];
    // Background music setup
    useEffect(function() {
        var bgMusic = new Audio('https://play.rosebud.ai/assets/Jazz-Noir-Detective-Music-Perfec.mp3?6ieZ');
        bgMusic.loop = true;
        bgMusic.volume = 0.3;
        if (gameStarted && !isMuted) {
            bgMusic.play().catch(function(err) {
                return console.log('Audio playback error:', err);
            });
        }
        return function() {
            bgMusic.pause();
            bgMusic.currentTime = 0;
        };
    }, [
        isMuted,
        gameStarted
    ]);
    useEffect(function() {
        // Initialize sound system
        SoundSystem.init();
    }, []);
    var playClickSound = function() {
        SoundSystem.play(SOUND_EFFECTS.CLICK);
    };
    var renderProgram = function() {
        playClickSound(); // Play click sound when program launches
        switch(activeProgram){
            case 'Browser':
                return /*#__PURE__*/ _jsxDEV(Browser, {
                    onClose: function() {
                        return setActiveProgram(null);
                    }
                }, void 0, false, {
                    fileName: "9App.js",
                    lineNumber: 47,
                    columnNumber: 16
                }, _this);
            case 'Email':
                return /*#__PURE__*/ _jsxDEV(EmailClient, {
                    onClose: function() {
                        return setActiveProgram(null);
                    }
                }, void 0, false, {
                    fileName: "9App.js",
                    lineNumber: 49,
                    columnNumber: 16
                }, _this);
            case 'Notes':
                return /*#__PURE__*/ _jsxDEV(Notes, {
                    onClose: function() {
                        return setActiveProgram(null);
                    }
                }, void 0, false, {
                    fileName: "9App.js",
                    lineNumber: 51,
                    columnNumber: 16
                }, _this);
            case 'Evidence':
                return /*#__PURE__*/ _jsxDEV(Evidence, {
                    onClose: function() {
                        return setActiveProgram(null);
                    }
                }, void 0, false, {
                    fileName: "9App.js",
                    lineNumber: 53,
                    columnNumber: 16
                }, _this);
            case 'start here.txt':
                return /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.window,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: styles.windowHeader,
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "start here.txt"
                                }, void 0, false, {
                                    fileName: "9App.js",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    onClick: function() {
                                        return setActiveProgram(null);
                                    },
                                    style: styles.closeButton,
                                    children: "X"
                                }, void 0, false, {
                                    fileName: "9App.js",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "9App.js",
                            lineNumber: 57,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                padding: '20px',
                                height: 'calc(100% - 30px)',
                                backgroundColor: '#fff',
                                fontFamily: 'monospace',
                                whiteSpace: 'pre-wrap',
                                overflow: 'auto'
                            },
                            children: "===================================\nCASE FILE: VICTORIA MASON DISAPPEARANCE\n===================================\n\nDate: March 15, 1995\nLocation: Newport\nSubject: Victoria Mason (age 26)\n\nINITIAL FINDINGS:\n\n----------------\n\n- Last seen at Mason Estate on the evening of  March 15\n- No signs of forced entry at Mason Estate, brief security system malfuction\n- Unusual financial activity detected day of disappearance\n\nSUGGESTED INVESTIGATION STEPS:\n\n----------------------------\n\n1. Check recent news articles about Victoria Mason\n2. Review Mason Industries company history\n3. Monitor email for updates\n\n===================================\n\nUse the browser to search for information.\nKeep track of findings in the Notes application.\nStore important documents in the Evidence folder."
                        }, void 0, false, {
                            fileName: "9App.js",
                            lineNumber: 61,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "9App.js",
                    lineNumber: 56,
                    columnNumber: 11
                }, _this);
            default:
                return null;
        }
    };
    var handleNewGame = function() {
        storage.clearGame();
        localStorage.setItem('gameStarted', 'true');
        setShowMainMenu(false);
        setGameStarted(false);
    };
    var handleSaveGame = function() {
        if (!gameStarted) return; // Don't save if game hasn't started
        var evidence = storage.getEvidence();
        var notes = storage.getNotes();
        var readEmails = storage.getReadEmails();
        var gameState = {
            activeProgram: activeProgram,
            gameStarted: true,
            evidence: evidence,
            notes: notes,
            readEmails: readEmails,
            emailsState: storage.getEmailsState(),
            browserState: storage.getBrowserState(),
            savedAt: new Date().toISOString()
        };
        // Save game state regardless of progress
        storage.setGameState(gameState);
        localStorage.setItem('gameStarted', 'true');
        localStorage.setItem('hasSavedGame', 'true');
        playClickSound();
    };
    var handleLoadGame = function() {
        var savedState = storage.getGameState();
        if (savedState) {
            // Restore all game state
            setShowMainMenu(false);
            setGameStarted(true);
            setActiveProgram(savedState.activeProgram);
            // Restore all individual states
            storage.setEvidence(savedState.evidence);
            storage.setNotes(savedState.notes);
            storage.setReadEmails(savedState.readEmails);
            storage.setEmailsState(savedState.emailsState);
            storage.setBrowserState(savedState.browserState);
            playClickSound();
        }
    };
    if (showMainMenu) {
        return /*#__PURE__*/ _jsxDEV(MainMenu, {
            onNewGame: handleNewGame,
            onLoadGame: handleLoadGame,
            onSaveGame: handleSaveGame,
            onExit: function() {
                return window.close();
            }
        }, void 0, false, {
            fileName: "9App.js",
            lineNumber: 154,
            columnNumber: 7
        }, _this);
    }
    if (!gameStarted) {
        return /*#__PURE__*/ _jsxDEV(StartScreen, {
            onStart: function() {
                return setGameStarted(true);
            }
        }, void 0, false, {
            fileName: "9App.js",
            lineNumber: 163,
            columnNumber: 12
        }, _this);
    }
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.desktop,
        children: /*#__PURE__*/ _jsxDEV("div", {
            style: styles.monitor,
            children: [
                /*#__PURE__*/ _jsxDEV(DesktopIcons, {
                    onLaunch: function(program) {
                        if (program === 'MainMenu') {
                            setShowMainMenu(true);
                        } else {
                            setActiveProgram(program);
                        }
                    }
                }, void 0, false, {
                    fileName: "9App.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, _this),
                renderProgram()
            ]
        }, void 0, true, {
            fileName: "9App.js",
            lineNumber: 167,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "9App.js",
        lineNumber: 166,
        columnNumber: 5
    }, _this);
};
export default App;
