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
import React from 'react';
import styles from './10Styles.js';
export var renderDefaultArticle = function(currentPage, setCurrentPage) {
    if (!currentPage) return null;
    var pageContent = {
        date: currentPage.date,
        source: currentPage.source || 'THE ATLANTIC GAZETTE',
        subtitle: currentPage.subtitle || 'Truth Above All',
        title: currentPage.title,
        content: currentPage.content,
        type: currentPage.type
    };
    if (currentPage.title === 'Newport Bank Homepage') {
        return /*#__PURE__*/ _jsxDEV("div", {
            style: styles.browserContent,
            children: [
                /*#__PURE__*/ _jsxDEV("button", {
                    onClick: function() {
                        return setCurrentPage(null);
                    },
                    style: {
                        padding: '5px 10px',
                        backgroundColor: '#D4D0C8',
                        border: '1px solid #808080',
                        cursor: 'pointer'
                    },
                    children: "← BACK"
                }, void 0, false, {
                    fileName: "default.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, _this),
                currentPage.content
            ]
        }, void 0, true, {
            fileName: "default.js",
            lineNumber: 18,
            columnNumber: 7
        }, _this);
    }
    if (currentPage.title === 'Newport Alien Alerts!') {
        return /*#__PURE__*/ _jsxDEV("div", {
            style: styles.browserContent,
            children: [
                /*#__PURE__*/ _jsxDEV("button", {
                    onClick: function() {
                        return setCurrentPage(null);
                    },
                    style: {
                        padding: '5px 10px',
                        backgroundColor: '#D4D0C8',
                        border: '1px solid #808080',
                        cursor: 'pointer'
                    },
                    children: "← BACK"
                }, void 0, false, {
                    fileName: "default.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, _this),
                currentPage.content
            ]
        }, void 0, true, {
            fileName: "default.js",
            lineNumber: 37,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ _jsxDEV("div", {
        style: _object_spread_props(_object_spread({}, styles.browserContent), {
            backgroundColor: '#ffffff'
        }),
        children: [
            /*#__PURE__*/ _jsxDEV("button", {
                onClick: function() {
                    return setCurrentPage(null);
                },
                style: {
                    padding: '5px 10px',
                    backgroundColor: '#D4D0C8',
                    border: '1px solid #808080',
                    cursor: 'pointer',
                    margin: '10px',
                    zIndex: 1,
                    position: 'relative'
                },
                children: "← BACK"
            }, void 0, false, {
                fileName: "default.js",
                lineNumber: 56,
                columnNumber: 7
            }, _this),
            typeof pageContent.content === 'string' ? /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    width: '100%',
                    boxSizing: 'border-box',
                    maxWidth: '100vw',
                    overflow: 'auto'
                },
                children: /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        backgroundColor: '#ffffff'
                    },
                    dangerouslySetInnerHTML: {
                        __html: pageContent.content
                    }
                }, void 0, false, {
                    fileName: "default.js",
                    lineNumber: 77,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "default.js",
                lineNumber: 71,
                columnNumber: 9
            }, _this) : /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    width: '100%',
                    boxSizing: 'border-box',
                    maxWidth: '100vw',
                    overflow: 'auto'
                },
                children: pageContent.content
            }, void 0, false, {
                fileName: "default.js",
                lineNumber: 87,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "default.js",
        lineNumber: 55,
        columnNumber: 5
    }, _this);
};
