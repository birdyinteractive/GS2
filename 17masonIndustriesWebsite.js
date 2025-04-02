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
export var masonIndustriesWebsiteData = {
    title: "MASON INDUSTRIES",
    subtitle: "Advanced Security Solutions for the Digital Age",
    history: {
        1974: "FlickBuster founded, expanding to 500+ locations",
        1987: "TechFusion merger propels Mason Industries into cybersecurity",
        1995: "A leader in corporate encryption and government security solutions"
    },
    leadership: [
        {
            name: "Reginald Mason",
            title: "CEO & Founder",
            description: "visionary behind the company's evolution"
        },
        {
            name: "Victoria Mason",
            title: "CFO",
            description: "overseeing financial strategy and cybersecurity investments"
        }
    ],
    services: [
        "Advanced Floppy Disc Security Systems",
        "Quantum CRT Encryption Solutions",
        "Corporate VHS to CD Conversions"
    ]
};
var MasonIndustries = function(param) {
    var onClose = param.onClose;
    var _useState = _sliced_to_array(useState(true), 2), blink = _useState[0], setBlink = _useState[1];
    var _useState1 = _sliced_to_array(useState(0), 2), scrollText = _useState1[0], setScrollText = _useState1[1];
    var _useState2 = _sliced_to_array(useState({
        title: "Mason Industries",
        content: null
    }), 2), currentPage = _useState2[0], setCurrentPage = _useState2[1];
    useEffect(function() {
        var blinkInterval = setInterval(function() {
            setBlink(function(prev) {
                return !prev;
            });
        }, 500);
        var scrollInterval = setInterval(function() {
            setScrollText(function(prev) {
                return (prev + 1) % 3;
            });
        }, 2000);
        return function() {
            clearInterval(blinkInterval);
            clearInterval(scrollInterval);
        };
    }, []);
    var styles = {
        container: {
            backgroundColor: '#000066',
            color: '#FFFFFF',
            fontFamily: '"Courier New", monospace',
            height: '100%',
            overflow: 'auto',
            padding: '20px',
            backgroundImage: 'linear-gradient(45deg, #000066 25%, #000080 25%, #000080 50%, #000066 50%, #000066 75%, #000080 75%, #000080 100%)',
            backgroundSize: '56.57px 56.57px'
        },
        header: {
            textAlign: 'center',
            marginBottom: '30px',
            borderBottom: '3px double #00FFFF'
        },
        title: {
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#00FFFF',
            textShadow: '2px 2px #000000, -2px -2px #0000FF',
            marginBottom: '10px',
            fontFamily: '"Arial Black", sans-serif'
        },
        subtitle: {
            color: '#FFFFFF',
            fontSize: '18px',
            marginBottom: '20px',
            textShadow: '1px 1px #000000'
        },
        content: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '20px',
            border: '2px solid #00FFFF',
            marginBottom: '20px',
            boxShadow: '0 0 10px #00FFFF'
        },
        section: {
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid #4169E1',
            backgroundColor: 'rgba(0, 0, 128, 0.5)'
        },
        blink: {
            visibility: blink ? 'visible' : 'hidden',
            color: '#FF0000',
            fontWeight: 'bold'
        },
        marquee: {
            color: '#FFFF00',
            fontWeight: 'bold',
            marginBottom: '20px'
        },
        button: {
            backgroundColor: '#000080',
            color: '#FFFFFF',
            border: '2px outset #4169E1',
            padding: '5px 15px',
            cursor: 'pointer',
            fontFamily: '"Courier New", monospace',
            fontWeight: 'bold',
            margin: '5px'
        },
        footer: {
            textAlign: 'center',
            marginTop: '30px',
            borderTop: '3px double #00FFFF',
            paddingTop: '20px',
            fontSize: '12px',
            color: '#888888'
        },
        counter: {
            textAlign: 'center',
            marginTop: '20px',
            fontFamily: '"Digital", monospace',
            color: '#00FF00'
        }
    };
    var scrollingTexts = [
        "SECURING THE FUTURE OF TECHNOLOGY",
        "QUANTUM ENCRYPTION SPECIALISTS",
        "INNOVATIVE SECURITY SOLUTIONS"
    ];
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.container,
        children: currentPage.content ? currentPage.content : /*#__PURE__*/ _jsxDEV("div", {
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: styles.title,
                            children: "MASON INDUSTRIES"
                        }, void 0, false, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 132,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: styles.subtitle,
                            children: "Advanced Security Solutions for the Digital Age"
                        }, void 0, false, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 133,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "17masonIndustriesWebsite.js",
                    lineNumber: 131,
                    columnNumber: 11
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.marquee,
                    children: /*#__PURE__*/ _jsxDEV("marquee", {
                        children: scrollingTexts[scrollText]
                    }, void 0, false, {
                        fileName: "17masonIndustriesWebsite.js",
                        lineNumber: 136,
                        columnNumber: 13
                    }, _this)
                }, void 0, false, {
                    fileName: "17masonIndustriesWebsite.js",
                    lineNumber: 135,
                    columnNumber: 11
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.content,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: styles.section,
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    style: {
                                        color: '#00FFFF'
                                    },
                                    children: "FROM VHS TO CYBERSECURITY"
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 140,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        lineHeight: '1.6',
                                        marginBottom: '15px'
                                    },
                                    children: "What began as FlickBuster, a nationwide video rental chain in the '70s, has evolved into a leader in encryption and cybersecurity. Under Reginald Mason's leadership, the company shifted from home entertainment to data protection, culminating in the 1987 merger with TechFusion."
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 141,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        lineHeight: '1.6',
                                        marginBottom: '15px'
                                    },
                                    children: "Now, Mason Industries develops cutting-edge encryption software, firewall technology, and digital security solutions for businesses and government agencies."
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 144,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: styles.blink,
                                    children: "[NEW!] SENTINEL System Now Available"
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 147,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 139,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: styles.section,
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    style: {
                                        color: '#00FFFF'
                                    },
                                    children: "OUR LEGACY & FUTURE"
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 150,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'auto 1fr',
                                        gap: '10px',
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                color: '#00FF00'
                                            },
                                            children: "1974:"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 157,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: "FlickBuster founded, expanding to 500+ locations"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 158,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                color: '#00FF00'
                                            },
                                            children: "1987:"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 159,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: "TechFusion merger propels Mason Industries into cybersecurity"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 160,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                color: '#00FF00'
                                            },
                                            children: "1995:"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 161,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: "A leader in corporate encryption and government security solutions"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 162,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 151,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    style: {
                                        color: '#00FFFF',
                                        marginTop: '20px',
                                        marginBottom: '15px'
                                    },
                                    children: "CURRENT LEADERSHIP"
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 164,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    style: {
                                        listStyle: 'none',
                                        padding: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            style: {
                                                marginBottom: '10px'
                                            },
                                            children: [
                                                "➤ ",
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        color: '#FFFF00'
                                                    },
                                                    children: "Reginald Mason"
                                                }, void 0, false, {
                                                    fileName: "17masonIndustriesWebsite.js",
                                                    lineNumber: 166,
                                                    columnNumber: 50
                                                }, _this),
                                                " – CEO & Founder, visionary behind the company's evolution"
                                            ]
                                        }, void 0, true, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 166,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            style: {
                                                marginBottom: '10px'
                                            },
                                            children: [
                                                "➤ ",
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        color: '#FFFF00'
                                                    },
                                                    children: "Victoria Mason"
                                                }, void 0, false, {
                                                    fileName: "17masonIndustriesWebsite.js",
                                                    lineNumber: 167,
                                                    columnNumber: 50
                                                }, _this),
                                                " – CFO, overseeing financial strategy and cybersecurity investments"
                                            ]
                                        }, void 0, true, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 167,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 165,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 149,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: styles.section,
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    style: {
                                        color: '#00FFFF'
                                    },
                                    children: "OUR SERVICES"
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 171,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            children: "➤ Advanced Floppy Disc Security Systems"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 173,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            children: "➤ Quantum CRT Encryption Solutions"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 174,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            children: "➤ Corporate VHS to CD Conversions"
                                        }, void 0, false, {
                                            fileName: "17masonIndustriesWebsite.js",
                                            lineNumber: 175,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 172,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        color: '#00FF00',
                                        fontStyle: 'italic',
                                        textAlign: 'center',
                                        marginTop: '20px'
                                    },
                                    children: "Mason Industries continues to secure the future, one breakthrough at a time."
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 177,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 170,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "17masonIndustriesWebsite.js",
                    lineNumber: 138,
                    columnNumber: 11
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.counter,
                    children: "Visitor Count: 000,472"
                }, void 0, false, {
                    fileName: "17masonIndustriesWebsite.js",
                    lineNumber: 182,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.footer,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: "\xa9 1995 Mason Industries - All Rights Reserved"
                        }, void 0, false, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 186,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: "Best viewed with Netscape Navigator™ at 800x600 resolution"
                        }, void 0, false, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 187,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                marginTop: '10px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("img", {
                                    src: "data:image/gif;base64,R0lGODlhGAAYAPcAAP////7+/v39/fz8/Pv7+/r6+vn5+fj4+Pf39/b29vX19fT09PPz8/Ly8vHx8fDw8O/v7+7u7u3t7ezs7Ovr6+rq6unp6ejo6Ofn5+bm5uXl5eTk5OPj4+Li4uHh4eDg4N/f397e3t3d3dzc3Nvb29ra2tnZ2djY2NfX19bW1tXV1dTU1NPT09LS0tHR0dDQ0M/Pz87Ozs3NzczMzMvLy8rKysnJycjIyMfHx8bGxsXFxcTExMPDw8LCwsHBwcDAwL+/v76+vr29vby8vLu7u7q6urm5ubi4uLe3t7a2trW1tbS0tLOzs7KysrGxsbCwsK+vr66urq2traysrKurq6qqqqmpqaioqKenp6ampqWlpaSkpKOjo6KioqGhoaCgoJ+fn56enp2dnZycnJubm5qampmZmZiYmJeXl5aWlpWVlZSUlJOTk5KSkpGRkZCQkI+Pj46Ojo2NjYyMjIuLi4qKiomJiYiIiIeHh4aGhoWFhYSEhIODg4KCgoGBgYCAgH9/f35+fn19fXx8fHt7e3p6enl5eXh4eHd3d3Z2dnV1dXR0dHNzc3JycnFxcXBwcG9vb25ubm1tbWxsbGtra2pqamlpaWhoaGdnZ2ZmZmVlZWRkZGNjY2JiYmFhYWBgYF9fX15eXl1dXVxcXFtbW1paWllZWVhYWFdXV1ZWVlVVVVRUVFNTU1JSUlFRUVBQUE9PT05OTk1NTUxMTEtLS0pKSklJSUhISEdHR0ZGRkVFRURERENDQ0JCQkFBQUBAQD8/Pz4+Pj09PTw8PDs7Ozo6Ojk5OTg4ODc3NzY2NjU1NTQ0NDMzMzIyMjExMTAwMC8vLy4uLi0tLSwsLCsrKyoqKikpKSgoKCcnJyYmJiUlJSQkJCMjIyIiIiEhISAgIB8fHx4eHh0dHRwcHBsbGxoaGhkZGRgYGBcXFxYWFhUVFRQUFBMTExISEhERERAQEA8PDw4ODg0NDQwMDAsLCwoKCgkJCQgICAcHBwYGBgUFBQQEBAMDAwICAgEBAQAAACH+AS4ALAAAAAAYABgAAAj/AAEIHEiwoMGDCAXqwRNnDh+GEA3iISNGjx8/faJInUgRz549YrqEEbNmjp08Y8yU2aKFi5g2dvgIpGOGi5UoTpYoASNHj6BMgcJ8+ZJFyxYvX8L8CUQoDxgpSoYEwTGjxpFAfvDMyUMHj59CihjxYfMFyxUtWbyEGQNoEJ0nPmqYyGDBAoYNIFCkWBHDxo0dQIQcSbJkCRMoVLBsCUMmjZ6Ih+BcaTIDxIcPIUaMIGHCxAkUKlawaAFDRo0cPIAMKXJESRQsX86wEXRnSg8ZGhYsSLAgAYMGDh4IKGDgQAIFDR5EmEChwgUNHT6EIHFCRQsYNXwMHzjmR4oH1xMoWMCQQcOGDh49fgAJIoSIkSRLmDR5EoVKli5hyqTp4wdQHhwaENifgAISOGCBBh6IYIIKLshggw4+CGGEEk5IYYUWXohhhhp6yOEeHxLUh4gklmjiiSimqOKKLLbo4oswxijjjDTWaOONON6xY0ABAQA7",
                                    alt: "Under Construction",
                                    style: {
                                        width: '24px',
                                        height: '24px',
                                        marginRight: '5px'
                                    }
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 189,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    onClick: function() {
                                        return setCurrentPage({
                                            title: "Mason Industries - Employee Directory",
                                            content: /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    backgroundColor: '#000066',
                                                    height: '100%',
                                                    padding: '20px',
                                                    color: '#FFFFFF',
                                                    overflowY: 'auto'
                                                },
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h1", {
                                                        style: {
                                                            color: '#00FFFF',
                                                            marginBottom: '20px',
                                                            textAlign: 'center'
                                                        },
                                                        children: "Mason Industries Employee Directory"
                                                    }, void 0, false, {
                                                        fileName: "17masonIndustriesWebsite.js",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        style: {
                                                            marginBottom: '20px',
                                                            backgroundColor: '#000044',
                                                            padding: '10px',
                                                            border: '1px solid #00FFFF'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                style: {
                                                                    color: '#FF0000',
                                                                    fontWeight: 'bold',
                                                                    marginBottom: '10px'
                                                                },
                                                                children: "INTERNAL USE ONLY"
                                                            }, void 0, false, {
                                                                fileName: "17masonIndustriesWebsite.js",
                                                                lineNumber: 207,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                children: "Mick, please delete this page when you're done updating the Mason Industries Employee Directory with everyone's new titles."
                                                            }, void 0, false, {
                                                                fileName: "17masonIndustriesWebsite.js",
                                                                lineNumber: 208,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "17masonIndustriesWebsite.js",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        style: {
                                                            overflowX: 'auto'
                                                        },
                                                        children: /*#__PURE__*/ _jsxDEV("table", {
                                                            style: {
                                                                width: '100%',
                                                                borderCollapse: 'collapse',
                                                                border: '2px solid #00FFFF',
                                                                marginBottom: '20px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("thead", {
                                                                    children: /*#__PURE__*/ _jsxDEV("tr", {
                                                                        style: {
                                                                            backgroundColor: '#000088'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("th", {
                                                                                style: {
                                                                                    padding: '12px',
                                                                                    border: '1px solid #00FFFF',
                                                                                    color: '#FFFFFF',
                                                                                    textAlign: 'left'
                                                                                },
                                                                                children: "Employee Name"
                                                                            }, void 0, false, {
                                                                                fileName: "17masonIndustriesWebsite.js",
                                                                                lineNumber: 220,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ _jsxDEV("th", {
                                                                                style: {
                                                                                    padding: '12px',
                                                                                    border: '1px solid #00FFFF',
                                                                                    color: '#FFFFFF',
                                                                                    textAlign: 'left'
                                                                                },
                                                                                children: "Job Title"
                                                                            }, void 0, false, {
                                                                                fileName: "17masonIndustriesWebsite.js",
                                                                                lineNumber: 221,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ _jsxDEV("th", {
                                                                                style: {
                                                                                    padding: '12px',
                                                                                    border: '1px solid #00FFFF',
                                                                                    color: '#FFFFFF',
                                                                                    textAlign: 'left'
                                                                                },
                                                                                children: "Notes"
                                                                            }, void 0, false, {
                                                                                fileName: "17masonIndustriesWebsite.js",
                                                                                lineNumber: 222,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "17masonIndustriesWebsite.js",
                                                                        lineNumber: 219,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                    lineNumber: 218,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ _jsxDEV("tbody", {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("tr", {
                                                                            style: {
                                                                                backgroundColor: '#000055'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Reginald Mason"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 227,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "CEO of Mason Industries"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 228,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "No change in job title post merger. Update headshot"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 229,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                            lineNumber: 226,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ _jsxDEV("tr", {
                                                                            style: {
                                                                                backgroundColor: '#000055'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Victoria Mason"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 232,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Director of R&D at Mason Industries"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 233,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "No change in job title post merger. Update headshot"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 234,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                            lineNumber: 231,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ _jsxDEV("tr", {
                                                                            style: {
                                                                                backgroundColor: '#000055'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Angie Hamilton"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 237,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            children: "Before Merger: Security Systems Engineer at TechFusion"
                                                                                        }, void 0, false, {
                                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                                            lineNumber: 239,
                                                                                            columnNumber: 31
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            style: {
                                                                                                color: '#FF6666',
                                                                                                marginTop: '5px'
                                                                                            },
                                                                                            children: "After Merger: N/A, Terminated"
                                                                                        }, void 0, false, {
                                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                                            lineNumber: 240,
                                                                                            columnNumber: 31
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 238,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Terminated after implementing the SENTINEL security system during merger. Remove from employee roster."
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 242,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                            lineNumber: 236,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ _jsxDEV("tr", {
                                                                            style: {
                                                                                backgroundColor: '#000055'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: 'Mickey "Mick" Venuto'
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 245,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "IT Specialist at Mason Industries"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 246,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Terminated in July, 1994. No official explanation for termination. Remove from employee roster."
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 247,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                            lineNumber: 244,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ _jsxDEV("tr", {
                                                                            style: {
                                                                                backgroundColor: '#000055'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Sofia Pestrichelli"
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 250,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            children: "Before Merger: Secretary at TechFusion"
                                                                                        }, void 0, false, {
                                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                                            lineNumber: 252,
                                                                                            columnNumber: 31
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            style: {
                                                                                                color: '#AAFFAA',
                                                                                                marginTop: '5px'
                                                                                            },
                                                                                            children: "After Merger: Director of Acquisitions at Mason Industries"
                                                                                        }, void 0, false, {
                                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                                            lineNumber: 253,
                                                                                            columnNumber: 31
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 251,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ _jsxDEV("td", {
                                                                                    style: {
                                                                                        padding: '10px',
                                                                                        border: '1px solid #00FFFF',
                                                                                        color: '#FFFFFF'
                                                                                    },
                                                                                    children: "Promoted after merger, update job title in employee roster."
                                                                                }, void 0, false, {
                                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                                    lineNumber: 255,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "17masonIndustriesWebsite.js",
                                                                            lineNumber: 249,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "17masonIndustriesWebsite.js",
                                                                    lineNumber: 225,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "17masonIndustriesWebsite.js",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "17masonIndustriesWebsite.js",
                                                        lineNumber: 211,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ _jsxDEV("button", {
                                                        onClick: function() {
                                                            return setCurrentPage({
                                                                title: "Mason Industries",
                                                                content: null
                                                            });
                                                        },
                                                        style: {
                                                            backgroundColor: '#000080',
                                                            color: '#FFFFFF',
                                                            border: '2px outset #4169E1',
                                                            padding: '5px 15px',
                                                            cursor: 'pointer',
                                                            fontFamily: '"Courier New", monospace',
                                                            fontWeight: 'bold',
                                                            margin: '20px auto',
                                                            display: 'block'
                                                        },
                                                        children: "Return to Main Page"
                                                    }, void 0, false, {
                                                        fileName: "17masonIndustriesWebsite.js",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "17masonIndustriesWebsite.js",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, void 0)
                                        });
                                    },
                                    style: {
                                        cursor: 'pointer',
                                        textDecoration: 'underline',
                                        color: '#00FFFF'
                                    },
                                    children: "SITE UNDER CONSTRUCTION"
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("img", {
                                    src: "data:image/gif;base64,R0lGODlhGAAYAPcAAP////7+/v39/fz8/Pv7+/r6+vn5+fj4+Pf39/b29vX19fT09PPz8/Ly8vHx8fDw8O/v7+7u7u3t7ezs7Ovr6+rq6unp6ejo6Ofn5+bm5uXl5eTk5OPj4+Li4uHh4eDg4N/f397e3t3d3dzc3Nvb29ra2tnZ2djY2NfX19bW1tXV1dTU1NPT09LS0tHR0dDQ0M/Pz87Ozs3NzczMzMvLy8rKysnJycjIyMfHx8bGxsXFxcTExMPDw8LCwsHBwcDAwL+/v76+vr29vby8vLu7u7q6urm5ubi4uLe3t7a2trW1tbS0tLOzs7KysrGxsbCwsK+vr66urq2traysrKurq6qqqqmpqaioqKenp6ampqWlpaSkpKOjo6KioqGhoaCgoJ+fn56enp2dnZycnJubm5qampmZmZiYmJeXl5aWlpWVlZSUlJOTk5KSkpGRkZCQkI+Pj46Ojo2NjYyMjIuLi4qKiomJiYiIiIeHh4aGhoWFhYSEhIODg4KCgoGBgYCAgH9/f35+fn19fXx8fHt7e3p6enl5eXh4eHd3d3Z2dnV1dXR0dHNzc3JycnFxcXBwcG9vb25ubm1tbWxsbGtra2pqamlpaWhoaGdnZ2ZmZmVlZWRkZGNjY2JiYmFhYWBgYF9fX15eXl1dXVxcXFtbW1paWllZWVhYWFdXV1ZWVlVVVVRUVFNTU1JSUlFRUVBQUE9PT05OTk1NTUxMTEtLS0pKSklJSUhISEdHR0ZGRkVFRURERENDQ0JCQkFBQUBAQD8/Pz4+Pj09PTw8PDs7Ozo6Ojk5OTg4ODc3NzY2NjU1NTQ0NDMzMzIyMjExMTAwMC8vLy4uLi0tLSwsLCsrKyoqKikpKSgoKCcnJyYmJiUlJSQkJCMjIyIiIiEhISAgIB8fHx4eHh0dHRwcHBsbGxoaGhkZGRgYGBcXFxYWFhUVFRQUFBMTExISEhERERAQEA8PDw4ODg0NDQwMDAsLCwoKCgkJCQgICAcHBwYGBgUFBQQEBAMDAwICAgEBAQAAACH+AS4ALAAAAAAYABgAAAj/AAEIHEiwoMGDCAXqwRNnDh+GEA3iISNGjx8/faJInUgRz549YrqEEbNmjp08Y8yU2aKFi5g2dvgIpGOGi5UoTpYoASNHj6BMgcJ8+ZJFyxYvX8L8CUQoDxgpSoYEwTGjxpFAfvDMyUMHj59CihjxYfMFyxUtWbyEGQNoEJ0nPmqYyGDBAoYNIFCkWBHDxo0dQIQcSbJkCRMoVLBsCUMmjZ6Ih+BcaTIDxIcPIUaMIGHCxAkUKlawaAFDRo0cPIAMKXJESRQsX86wEXRnSg8ZGhYsSLAgAYMGDh4IKGDgQAIFDR5EmEChwgUNHT6EIHFCRQsYNXwMHzjmR4oH1xMoWMCQQcOGDh49fgAJIoSIkSRLmDR5EoVKli5hyqTp4wdQHhwaENifgAISOGCBBh6IYIIKLshggw4+CGGEEk5IYYUWXohhhhp6yOEeHxLUh4gklmjiiSimqOKKLLbo4oswxijjjDTWaOONON6xY0ABAQA7",
                                    alt: "Under Construction",
                                    style: {
                                        width: '24px',
                                        height: '24px',
                                        marginLeft: '5px'
                                    }
                                }, void 0, false, {
                                    fileName: "17masonIndustriesWebsite.js",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "17masonIndustriesWebsite.js",
                            lineNumber: 188,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "17masonIndustriesWebsite.js",
                    lineNumber: 185,
                    columnNumber: 7
                }, _this)
            ]
        }, void 0, true, {
            fileName: "17masonIndustriesWebsite.js",
            lineNumber: 130,
            columnNumber: 9
        }, _this)
    }, void 0, false, {
        fileName: "17masonIndustriesWebsite.js",
        lineNumber: 126,
        columnNumber: 5
    }, _this);
};
export default MasonIndustries;
