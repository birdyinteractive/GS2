// Evidence.js
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
import storage from './1Storage.js';
import styles from './10Styles.js';
var Evidence = function(param) {
    var onClose = param.onClose;
    var _useState = _sliced_to_array(useState([]), 2), evidenceFiles = _useState[0], setEvidenceFiles = _useState[1];
    // Listen for changes to evidence files
    useEffect(function() {
        // Initial load of evidence
        var loadEvidenceFiles = function() {
            var files = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
            setEvidenceFiles(files);
        };
        // Load evidence on mount
        loadEvidenceFiles();
        // Listen for storage events (when evidence is added)
        var handleStorageChange = function() {
            return loadEvidenceFiles();
        };
        window.addEventListener('storage', handleStorageChange);
        return function() {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.window,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: styles.windowHeader,
                children: [
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: "EVIDENCE FOLDER"
                    }, void 0, false, {
                        fileName: "4Evidence.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: onClose,
                        style: styles.closeButton,
                        children: "X"
                    }, void 0, false, {
                        fileName: "4Evidence.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "4Evidence.js",
                lineNumber: 30,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    padding: '20px',
                    height: 'calc(100% - 30px)',
                    backgroundColor: '#fff',
                    overflow: 'auto'
                },
                children: function() {
                    if (evidenceFiles.length === 0) {
                        return /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                textAlign: 'center',
                                color: '#666',
                                marginTop: '40px',
                                fontFamily: '"Courier New", monospace'
                            },
                            children: [
                                "No evidence files found.",
                                /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                                    fileName: "4Evidence.js",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                                    fileName: "4Evidence.js",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, _this),
                                "Search for clues using the browser."
                            ]
                        }, void 0, true, {
                            fileName: "4Evidence.js",
                            lineNumber: 43,
                            columnNumber: 15
                        }, _this);
                    }
                    return evidenceFiles.map(function(evidence) {
                        return /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                border: '1px solid #ccc',
                                padding: '15px',
                                marginBottom: '20px',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '5px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        marginBottom: '10px',
                                        fontWeight: 'bold'
                                    },
                                    children: evidence.title
                                }, void 0, false, {
                                    fileName: "4Evidence.js",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, _this),
                                evidence.type === 'image' && /*#__PURE__*/ _jsxDEV("img", {
                                    src: evidence.url,
                                    alt: evidence.title,
                                    style: {
                                        width: '75px',
                                        height: 'auto',
                                        border: '1px solid #000',
                                        padding: '3px',
                                        backgroundColor: '#FFF',
                                        marginBottom: '10px'
                                    }
                                }, void 0, false, {
                                    fileName: "4Evidence.js",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        fontSize: '12px',
                                        color: '#666'
                                    },
                                    children: [
                                        "Source: ",
                                        evidence.source
                                    ]
                                }, void 0, true, {
                                    fileName: "4Evidence.js",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        marginTop: '10px',
                                        fontSize: '14px'
                                    },
                                    children: evidence.description
                                }, void 0, false, {
                                    fileName: "4Evidence.js",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, evidence.id, true, {
                            fileName: "4Evidence.js",
                            lineNumber: 57,
                            columnNumber: 13
                        }, _this);
                    });
                }()
            }, void 0, false, {
                fileName: "4Evidence.js",
                lineNumber: 34,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "4Evidence.js",
        lineNumber: 29,
        columnNumber: 5
    }, _this);
};
export default Evidence;
