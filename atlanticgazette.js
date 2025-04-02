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
export var createAtlanticGazetteContent = function() {
    return {
        title: 'Online Security: The Digital Arms Race',
        content: /*#__PURE__*/ _jsxDEV("div", {
            style: _object_spread_props(_object_spread({}, styles.browserContent), {
                backgroundColor: '#004080'
            }),
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px 0',
                        backgroundColor: '#004080'
                    },
                    children: /*#__PURE__*/ _jsxDEV("h1", {
                        style: {
                            fontSize: '36px',
                            fontFamily: '"Times New Roman", serif',
                            color: '#FFFFFF',
                            margin: '0',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            textShadow: '2px 2px 0px #000000',
                            background: 'linear-gradient(to bottom, #004080, #002040)',
                            padding: '10px 20px',
                            border: '2px solid #FFFFFF',
                            borderRadius: '5px',
                            boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                        },
                        children: "ATLANTIC GAZETTE"
                    }, void 0, false, {
                        fileName: "atlanticgazette.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, _this)
                }, void 0, false, {
                    fileName: "atlanticgazette.js",
                    lineNumber: 8,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        backgroundColor: '#F5F5DC',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM30 0h10v10H30V0zM20 10h10v10H20V10zm10 10h10v10H30V20zM20 30h10v10H20V30z\' fill=\'%23D3D3D3\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                        margin: '10px auto',
                        padding: '20px 30px',
                        border: '1px solid #000000',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                        fontFamily: '"Times New Roman", serif',
                        maxWidth: '95%',
                        color: '#000000',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                backgroundColor: '#004080',
                                padding: '8px',
                                fontSize: '12px',
                                marginBottom: '15px',
                                fontFamily: '"Courier New", monospace',
                                display: 'flex',
                                justifyContent: 'space-between',
                                color: 'white',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        textDecoration: 'underline'
                                    },
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 57,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "POLITICS"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 58,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "BUSINESS"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 59,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        color: '#FFD700'
                                    },
                                    children: "TECHNOLOGY"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 60,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "WORLD"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 61,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "SPORTS"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 62,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        marginLeft: 'auto',
                                        fontSize: '10px',
                                        fontStyle: 'italic'
                                    },
                                    children: "December 15, 1994"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 63,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "atlanticgazette.js",
                            lineNumber: 44,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                fontFamily: '"Times New Roman", serif',
                                fontSize: '16px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("h1", {
                                    style: {
                                        fontSize: '28px',
                                        fontWeight: 'bold',
                                        marginBottom: '15px',
                                        borderBottom: '3px double #000000',
                                        paddingBottom: '10px'
                                    },
                                    children: "Online Security: The Digital Arms Race"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 67,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        fontSize: '14px',
                                        color: '#555',
                                        marginBottom: '20px',
                                        fontStyle: 'italic'
                                    },
                                    children: "By John Thompson, Technology Reporter | December 15, 1994"
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 77,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '15px',
                                        textIndent: '20px',
                                        lineHeight: '1.6'
                                    },
                                    children: "As the internet becomes increasingly integral to business operations, companies are racing to develop more sophisticated security measures. Recent developments in encryption technology and digital authentication systems mark a new chapter in the ongoing battle to protect sensitive information."
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 81,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        float: 'right',
                                        margin: '0 0 10px 15px',
                                        padding: '8px',
                                        border: '1px solid #000',
                                        background: '#EEE',
                                        width: '200px',
                                        fontSize: '14px',
                                        boxShadow: '3px 3px 0 #999'
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                textAlign: 'center',
                                                marginBottom: '5px',
                                                fontWeight: 'bold',
                                                borderBottom: '1px solid #999',
                                                paddingBottom: '5px'
                                            },
                                            children: "QUICK FACTS"
                                        }, void 0, false, {
                                            fileName: "atlanticgazette.js",
                                            lineNumber: 99,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("ul", {
                                            style: {
                                                paddingLeft: '20px',
                                                margin: '5px 0'
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("li", {
                                                    children: "Encryption technology evolving rapidly"
                                                }, void 0, false, {
                                                    fileName: "atlanticgazette.js",
                                                    lineNumber: 103,
                                                    columnNumber: 15
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("li", {
                                                    children: "Quantum computing breakthroughs by TechFusion"
                                                }, void 0, false, {
                                                    fileName: "atlanticgazette.js",
                                                    lineNumber: 104,
                                                    columnNumber: 15
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("li", {
                                                    children: "Corporate spending on security up 35% in 1994"
                                                }, void 0, false, {
                                                    fileName: "atlanticgazette.js",
                                                    lineNumber: 105,
                                                    columnNumber: 15
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "atlanticgazette.js",
                                            lineNumber: 102,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 89,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '15px',
                                        textIndent: '20px',
                                        lineHeight: '1.6'
                                    },
                                    children: "Industry experts point to recent breakthroughs in quantum computing as potential game-changers in the field of cybersecurity. These advancements could revolutionize how businesses protect their digital assets, though concerns about potential vulnerabilities remain."
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 109,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '15px',
                                        textIndent: '20px',
                                        lineHeight: '1.6'
                                    },
                                    children: "With major tech companies investing heavily in security infrastructure, the coming years promise to bring unprecedented changes to how we think about digital safety and privacy in the corporate world."
                                }, void 0, false, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 117,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        margin: '20px 0',
                                        padding: '10px',
                                        border: '2px dashed #004080',
                                        backgroundColor: '#E0E0E0',
                                        textAlign: 'center',
                                        fontSize: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                fontWeight: 'bold',
                                                fontSize: '16px',
                                                marginBottom: '5px'
                                            },
                                            children: "SUBSCRIBE NOW!"
                                        }, void 0, false, {
                                            fileName: "atlanticgazette.js",
                                            lineNumber: 133,
                                            columnNumber: 13
                                        }, _this),
                                        "Get the Atlantic Gazette delivered to your door each morning.",
                                        /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                                            fileName: "atlanticgazette.js",
                                            lineNumber: 135,
                                            columnNumber: 13
                                        }, _this),
                                        "Call 1-800-555-NEWS today for special rates!"
                                    ]
                                }, void 0, true, {
                                    fileName: "atlanticgazette.js",
                                    lineNumber: 125,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "atlanticgazette.js",
                            lineNumber: 66,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "atlanticgazette.js",
                    lineNumber: 32,
                    columnNumber: 7
                }, _this)
            ]
        }, void 0, true, {
            fileName: "atlanticgazette.js",
            lineNumber: 7,
            columnNumber: 5
        }, _this),
        type: 'Technology Article',
        date: 'December 15, 1994'
    };
};
export var atlanticGazetteData = {
    createAtlanticGazetteContent: createAtlanticGazetteContent
};
