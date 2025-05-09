// Notes.js
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
var Notes = function(param) {
    var onClose = param.onClose;
    var _useState = _sliced_to_array(useState(function() {
        return storage.getNotes();
    }), 2), notes = _useState[0], setNotes = _useState[1];
    useEffect(function() {
        storage.setNotes(notes);
    }, [
        notes
    ]);
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.window,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: styles.windowHeader,
                children: [
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: "NOTEPAD"
                    }, void 0, false, {
                        fileName: "3Notes.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: onClose,
                        style: styles.closeButton,
                        children: "X"
                    }, void 0, false, {
                        fileName: "3Notes.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "3Notes.js",
                lineNumber: 14,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("textarea", {
                value: notes,
                onChange: function(e) {
                    return setNotes(e.target.value);
                },
                style: styles.notepad,
                placeholder: "Type your investigation notes here...",
                autoFocus: true
            }, void 0, false, {
                fileName: "3Notes.js",
                lineNumber: 18,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "3Notes.js",
        lineNumber: 13,
        columnNumber: 5
    }, _this);
};
export default Notes;
