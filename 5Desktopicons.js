// DesktopIcons.js
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
var DesktopIcons = function(param) {
    var onLaunch = param.onLaunch;
    var _useState = _sliced_to_array(useState(0), 2), unreadCount = _useState[0], setUnreadCount = _useState[1];
    // Effect to update unread count
    useEffect(function() {
        var updateUnreadCount = function() {
            var baseEmails = 3; // Initial number of emails
            var readEmails = storage.getReadEmails();
            var evidence = storage.getEvidence();
            // Check for conditional emails based on evidence
            var conditionalEmails = [];
            if (evidence.some(function(item) {
                return item.title === 'Victoria Mason Photo';
            })) {
                conditionalEmails.push('Victoria Mason Photo Email');
            }
            if (evidence.some(function(item) {
                return item.title === 'Biscuit Photo';
            })) {
                conditionalEmails.push('Biscuit Photo Email');
            }
            if (evidence.some(function(item) {
                return item.title === 'Mickey Venuto Photo' && item.type === 'image';
            })) {
                conditionalEmails.push('Mickey Venuto Photo Email');
            }
            // Check for Sofia Pestrichelli email
            var emailsState = storage.getEmailsState();
            if (emailsState.includes('Sofia Pestrichelli Files Email')) {
                conditionalEmails.push('Sofia Pestrichelli Files Email');
            }
            // Check for search terms triggered email
            if (emailsState.includes('Search Terms Email')) {
                conditionalEmails.push('Search Terms Email');
            }
            // Calculate total emails after all conditions are checked
            var totalEmails = baseEmails + conditionalEmails.length;
            setUnreadCount(totalEmails - readEmails.length);
        };
        updateUnreadCount();
        // Update count when evidence or read emails change
        window.addEventListener('storage', updateUnreadCount);
        // Also listen for changes in evidence files
        var evidenceFiles = storage.getEvidence();
        if (evidenceFiles.some(function(item) {
            return item.title === 'Victoria Mason Photo';
        })) {
            updateUnreadCount();
        }
        return function() {
            return window.removeEventListener('storage', updateUnreadCount);
        };
    }, []);
    var icons = [
        {
            name: 'Browser',
            icon: '🌐'
        },
        {
            name: 'Email',
            displayName: "Email ".concat(unreadCount > 0 ? "(".concat(unreadCount, ")") : ''),
            icon: '✉️'
        },
        {
            name: 'Notes',
            displayName: 'Notes',
            icon: '📝'
        },
        {
            name: 'Evidence',
            displayName: 'Evidence',
            icon: '🔍'
        },
        {
            name: 'start here.txt',
            displayName: 'start here.txt',
            icon: '📄'
        },
        {
            name: 'MainMenu',
            displayName: 'Main Menu',
            icon: '📋'
        }
    ];
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.iconGrid,
        children: icons.map(function(icon) {
            return /*#__PURE__*/ _jsxDEV("div", {
                onClick: function() {
                    return onLaunch(icon.name);
                },
                style: styles.icon,
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: styles.iconEmoji,
                        children: icon.icon
                    }, void 0, false, {
                        fileName: "5Desktopicons.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, _this),
                    icon.displayName || icon.name
                ]
            }, icon.name, true, {
                fileName: "5Desktopicons.js",
                lineNumber: 73,
                columnNumber: 9
            }, _this);
        })
    }, void 0, false, {
        fileName: "5Desktopicons.js",
        lineNumber: 71,
        columnNumber: 5
    }, _this);
};
export default DesktopIcons;
