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
export var createTechfusionContent = function() {
    return {
        title: 'Mason Industries Merges with TechFusion Amid Struggles',
        content: /*#__PURE__*/ _jsxDEV("div", {
            style: styles.magazineContent,
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.magazineHeaderLine
                }, void 0, false, {
                    fileName: "15techfusionData.js",
                    lineNumber: 7,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.magazineMetaInfo,
                    children: "BUSINESS INSIDER | December 12, 1994"
                }, void 0, false, {
                    fileName: "15techfusionData.js",
                    lineNumber: 8,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("h1", {
                    style: styles.magazineArticleTitle,
                    children: "Mason Industries Merges with TechFusion Amid Struggles"
                }, void 0, false, {
                    fileName: "15techfusionData.js",
                    lineNumber: 11,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.magazineArticleText,
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: styles.magazineArticleParagraph,
                            children: "In a groundbreaking move that has sent shockwaves through the tech industry, Mason Industries announced its merger with rising star TechFusion. The deal, valued at an undisclosed amount, brings together Mason's established security infrastructure with TechFusion's cutting-edge AI technology."
                        }, void 0, false, {
                            fileName: "15techfusionData.js",
                            lineNumber: 15,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: styles.magazineArticleParagraph,
                            children: "The merger comes after months of speculation about TechFusion's revolutionary quantum computing breakthroughs. Industry insiders suggest that the combined expertise of both companies could lead to unprecedented advances in digital security and artificial intelligence applications."
                        }, void 0, false, {
                            fileName: "15techfusionData.js",
                            lineNumber: 18,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: styles.magazineArticleParagraph,
                            children: "While the specifics of their joint projects remain classified, sources close to the deal hint at the development of next-generation security systems that could reshape the digital landscape well into the next century."
                        }, void 0, false, {
                            fileName: "15techfusionData.js",
                            lineNumber: 21,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "15techfusionData.js",
                    lineNumber: 14,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.magazineFooterLine
                }, void 0, false, {
                    fileName: "15techfusionData.js",
                    lineNumber: 25,
                    columnNumber: 7
                }, _this)
            ]
        }, void 0, true, {
            fileName: "15techfusionData.js",
            lineNumber: 6,
            columnNumber: 5
        }, _this),
        type: 'Business Article',
        date: 'December 12, 1994'
    };
};
export var createSentinelArticleContent = function() {
    return {
        title: 'Mason Industries Unveils SENTINEL: A Predictive Security System',
        content: /*#__PURE__*/ _jsxDEV("div", {
            style: _object_spread_props(_object_spread({}, styles.browserContent), {
                backgroundColor: '#000C66'
            }),
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        width: '100%',
                        backgroundColor: '#000C66',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '5px 0'
                    },
                    children: /*#__PURE__*/ _jsxDEV("h1", {
                        style: {
                            fontSize: '42px',
                            fontFamily: 'Impact, sans-serif',
                            color: '#00008B',
                            margin: '0',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            textShadow: '3px 3px 0px #FFD700, 5px 5px 0px #ff6347',
                            background: '#fff',
                            padding: '5px 15px',
                            border: '3px double #000',
                            position: 'relative',
                            boxShadow: '0 0 0 5px #fff, 0 0 0 10px #000'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    color: '#8B0000'
                                },
                                children: "BUSINESS"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, _this),
                            " ",
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    color: '#006400'
                                },
                                children: "INSIDER"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 56,
                                columnNumber: 60
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "15techfusionData.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, _this)
                }, void 0, false, {
                    fileName: "15techfusionData.js",
                    lineNumber: 35,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        backgroundColor: '#FFFFFF',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM30 0h10v10H30V0zM20 10h10v10H20V10zm10 10h10v10H30V20zM20 30h10v10H20V30z\' fill=\'%23e0e0e0\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                        margin: '20px auto',
                        padding: '40px 40px',
                        border: '4px solid #1E3A8A',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 0 20px rgba(0,0,0,0.2)',
                        fontFamily: '"Times New Roman", serif',
                        maxWidth: '1400px',
                        color: '#000000',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                position: 'absolute',
                                top: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#ff6347',
                                color: 'white',
                                padding: '2px 10px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                zIndex: 1
                            },
                            children: "EXCLUSIVE REPORT"
                        }, void 0, false, {
                            fileName: "15techfusionData.js",
                            lineNumber: 71,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '80px',
                                height: '80px',
                                background: '#FFD700',
                                transform: 'rotate(45deg) translate(20px, -50px)',
                                boxShadow: '0 0 10px rgba(0,0,0,0.3)'
                            }
                        }, void 0, false, {
                            fileName: "15techfusionData.js",
                            lineNumber: 84,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: '4px solid #000',
                                paddingBottom: '15px',
                                marginBottom: '20px',
                                backgroundImage: 'linear-gradient(to right, #fff, #FFD700, #fff)',
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: '-2px',
                                        left: '0',
                                        right: '0',
                                        height: '4px',
                                        backgroundImage: 'linear-gradient(to right, #000 0%, #000 50%, transparent 50%, transparent 100%)',
                                        backgroundSize: '20px 100%',
                                        backgroundRepeat: 'repeat-x',
                                        zIndex: 2
                                    }
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 103,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                backgroundColor: '#1E3A8A',
                                                padding: '5px',
                                                borderRadius: '50%',
                                                boxShadow: '3px 3px 0 #000',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            },
                                            children: /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '24px',
                                                    color: '#fff'
                                                },
                                                children: "\uD83D\uDCF0"
                                            }, void 0, false, {
                                                fileName: "15techfusionData.js",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "15techfusionData.js",
                                            lineNumber: 115,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: {
                                                fontWeight: 'bold',
                                                color: '#1E3A8A',
                                                textTransform: 'uppercase',
                                                fontFamily: 'Impact, sans-serif',
                                                letterSpacing: '1px',
                                                fontSize: '18px',
                                                textShadow: '1px 1px 0 #000'
                                            },
                                            children: "HOT OFF THE PRESS"
                                        }, void 0, false, {
                                            fileName: "15techfusionData.js",
                                            lineNumber: 126,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 114,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        backgroundColor: '#f0f0f0',
                                        padding: '5px 10px',
                                        border: '2px solid #000'
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        fontSize: '20px'
                                                    },
                                                    children: "\uD83D\uDCBC"
                                                }, void 0, false, {
                                                    fileName: "15techfusionData.js",
                                                    lineNumber: 149,
                                                    columnNumber: 15
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "STOCKS"
                                                }, void 0, false, {
                                                    fileName: "15techfusionData.js",
                                                    lineNumber: 150,
                                                    columnNumber: 15
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "15techfusionData.js",
                                            lineNumber: 144,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        fontSize: '20px'
                                                    },
                                                    children: "\uD83D\uDCC8"
                                                }, void 0, false, {
                                                    fileName: "15techfusionData.js",
                                                    lineNumber: 157,
                                                    columnNumber: 15
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "MARKET"
                                                }, void 0, false, {
                                                    fileName: "15techfusionData.js",
                                                    lineNumber: 158,
                                                    columnNumber: 15
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "15techfusionData.js",
                                            lineNumber: 152,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        fontSize: '20px'
                                                    },
                                                    children: "\uD83D\uDDA5️"
                                                }, void 0, false, {
                                                    fileName: "15techfusionData.js",
                                                    lineNumber: 165,
                                                    columnNumber: 15
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        fontWeight: 'bold'
                                                    },
                                                    children: "TECH"
                                                }, void 0, false, {
                                                    fileName: "15techfusionData.js",
                                                    lineNumber: 166,
                                                    columnNumber: 15
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "15techfusionData.js",
                                            lineNumber: 160,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 136,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "15techfusionData.js",
                            lineNumber: 94,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                backgroundColor: '#1E3A8A',
                                padding: '8px',
                                fontSize: '12px',
                                marginBottom: '20px',
                                fontFamily: '"Courier New", monospace',
                                display: 'flex',
                                justifyContent: 'space-between',
                                color: 'white',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
                                border: '1px solid #000'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        textDecoration: 'underline'
                                    },
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 184,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "MARKETS"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 185,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        color: '#FFD700'
                                    },
                                    children: "TECH"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 186,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "FINANCE"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 187,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "STOCKS"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 188,
                                    columnNumber: 11
                                }, _this),
                                " |",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: "ANALYSIS"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 189,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        marginLeft: 'auto',
                                        fontSize: '10px',
                                        fontStyle: 'italic'
                                    },
                                    children: "December 1994 Edition"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 190,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "15techfusionData.js",
                            lineNumber: 170,
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
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        marginBottom: '15px'
                                    },
                                    children: "Mason Industries Unveils SENTINEL: A Predictive Security System"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 193,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        fontSize: '14px',
                                        color: '#555',
                                        marginBottom: '20px'
                                    },
                                    children: "Business Insider, December 1994"
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 195,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '15px'
                                    },
                                    children: "Mason Industries, newly expanding into corporate security, has announced SENTINEL, a cutting-edge system designed to predict and prevent breaches before they happen."
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 197,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '15px'
                                    },
                                    children: "Unlike traditional alarms, SENTINEL uses real-time monitoring, behavioral analysis, and adaptive encryption to flag suspicious activity before unauthorized access occurs. Beta-tested at the Mason family estate shortly after the TechFusion merger, the system successfully neutralized multiple simulated breaches."
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 199,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '15px'
                                    },
                                    children: "A key feature, altitude-dependent security lighting, adjusts based on environmental conditions, though early tests caused electrical surges and brief sparking when deactivated. Engineers have since addressed these calibration issues."
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 201,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '15px'
                                    },
                                    children: "Industry experts believe SENTINEL could make traditional alarm systems obsolete. A full rollout across Mason Industries facilities and select corporate clients is expected by March, 1995."
                                }, void 0, false, {
                                    fileName: "15techfusionData.js",
                                    lineNumber: 203,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "15techfusionData.js",
                            lineNumber: 192,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "15techfusionData.js",
                    lineNumber: 59,
                    columnNumber: 7
                }, _this)
            ]
        }, void 0, true, {
            fileName: "15techfusionData.js",
            lineNumber: 34,
            columnNumber: 5
        }, _this),
        type: 'Business Article',
        date: 'December 1994'
    };
};
export var techfusionData = {
    createTechfusionContent: createTechfusionContent,
    createSentinelArticleContent: createSentinelArticleContent
};
export var renderTechFusionArticle = function(currentPage, setCurrentPage) {
    if (!currentPage || !currentPage.title.includes('TechFusion-Mason Industries Merger')) return null;
    return /*#__PURE__*/ _jsxDEV("div", {
        style: _object_spread_props(_object_spread({}, styles.browserContent), {
            backgroundColor: '#000C66'
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
                    cursor: 'pointer'
                },
                children: "← BACK"
            }, void 0, false, {
                fileName: "15techfusionData.js",
                lineNumber: 220,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '5px 0'
                },
                children: /*#__PURE__*/ _jsxDEV("h1", {
                    style: {
                        fontSize: '42px',
                        fontFamily: 'Impact, sans-serif',
                        color: '#00008B',
                        margin: '0',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        textShadow: '3px 3px 0px #FFD700, 5px 5px 0px #ff6347',
                        background: '#fff',
                        padding: '5px 15px',
                        border: '3px double #000',
                        position: 'relative',
                        boxShadow: '0 0 0 5px #fff, 0 0 0 10px #000'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: {
                                color: '#8B0000'
                            },
                            children: "BUSINESS"
                        }, void 0, false, {
                            fileName: "15techfusionData.js",
                            lineNumber: 251,
                            columnNumber: 11
                        }, _this),
                        " ",
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: {
                                color: '#006400'
                            },
                            children: "INSIDER"
                        }, void 0, false, {
                            fileName: "15techfusionData.js",
                            lineNumber: 251,
                            columnNumber: 60
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "15techfusionData.js",
                    lineNumber: 237,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "15techfusionData.js",
                lineNumber: 231,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    backgroundColor: '#FFFFFF',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM30 0h10v10H30V0zM20 10h10v10H20V10zm10 10h10v10H30V20zM20 30h10v10H20V30z\' fill=\'%23e0e0e0\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                    margin: '20px auto',
                    padding: '40px 40px',
                    border: '4px solid #1E3A8A',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 0 20px rgba(0,0,0,0.2)',
                    fontFamily: '"Times New Roman", serif',
                    maxWidth: '1400px',
                    color: '#000000',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#ff6347',
                            color: 'white',
                            padding: '2px 10px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            zIndex: 1
                        },
                        children: "EXCLUSIVE REPORT"
                    }, void 0, false, {
                        fileName: "15techfusionData.js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '80px',
                            height: '80px',
                            background: '#FFD700',
                            transform: 'rotate(45deg) translate(20px, -50px)',
                            boxShadow: '0 0 10px rgba(0,0,0,0.3)'
                        }
                    }, void 0, false, {
                        fileName: "15techfusionData.js",
                        lineNumber: 279,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '4px solid #000',
                            paddingBottom: '15px',
                            marginBottom: '20px',
                            backgroundImage: 'linear-gradient(to right, #fff, #FFD700, #fff)',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: '0',
                                    right: '0',
                                    height: '4px',
                                    backgroundImage: 'linear-gradient(to right, #000 0%, #000 50%, transparent 50%, transparent 100%)',
                                    backgroundSize: '20px 100%',
                                    backgroundRepeat: 'repeat-x',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 298,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            backgroundColor: '#1E3A8A',
                                            padding: '5px',
                                            borderRadius: '50%',
                                            boxShadow: '3px 3px 0 #000',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        },
                                        children: /*#__PURE__*/ _jsxDEV("span", {
                                            style: {
                                                fontSize: '24px',
                                                color: '#fff'
                                            },
                                            children: "\uD83D\uDCF0"
                                        }, void 0, false, {
                                            fileName: "15techfusionData.js",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "15techfusionData.js",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        style: {
                                            fontWeight: 'bold',
                                            color: '#1E3A8A',
                                            textTransform: 'uppercase',
                                            fontFamily: 'Impact, sans-serif',
                                            letterSpacing: '1px',
                                            fontSize: '18px',
                                            textShadow: '1px 1px 0 #000'
                                        },
                                        children: "HOT OFF THE PRESS"
                                    }, void 0, false, {
                                        fileName: "15techfusionData.js",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "15techfusionData.js",
                                lineNumber: 309,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    backgroundColor: '#f0f0f0',
                                    padding: '5px 10px',
                                    border: '2px solid #000'
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '20px'
                                                },
                                                children: "\uD83D\uDCBC"
                                            }, void 0, false, {
                                                fileName: "15techfusionData.js",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '10px',
                                                    fontWeight: 'bold'
                                                },
                                                children: "STOCKS"
                                            }, void 0, false, {
                                                fileName: "15techfusionData.js",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "15techfusionData.js",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '20px'
                                                },
                                                children: "\uD83D\uDCC8"
                                            }, void 0, false, {
                                                fileName: "15techfusionData.js",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '10px',
                                                    fontWeight: 'bold'
                                                },
                                                children: "MARKET"
                                            }, void 0, false, {
                                                fileName: "15techfusionData.js",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "15techfusionData.js",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '20px'
                                                },
                                                children: "\uD83D\uDDA5️"
                                            }, void 0, false, {
                                                fileName: "15techfusionData.js",
                                                lineNumber: 360,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '10px',
                                                    fontWeight: 'bold'
                                                },
                                                children: "TECH"
                                            }, void 0, false, {
                                                fileName: "15techfusionData.js",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "15techfusionData.js",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "15techfusionData.js",
                                lineNumber: 331,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "15techfusionData.js",
                        lineNumber: 289,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            backgroundColor: '#1E3A8A',
                            padding: '8px',
                            fontSize: '12px',
                            marginBottom: '20px',
                            fontFamily: '"Courier New", monospace',
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: 'white',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
                            border: '1px solid #000'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    textDecoration: 'underline'
                                },
                                children: "HOME"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 379,
                                columnNumber: 11
                            }, _this),
                            " |",
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "MARKETS"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 380,
                                columnNumber: 11
                            }, _this),
                            " |",
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    color: '#FFD700'
                                },
                                children: "TECH"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 381,
                                columnNumber: 11
                            }, _this),
                            " |",
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "FINANCE"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 382,
                                columnNumber: 11
                            }, _this),
                            " |",
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "STOCKS"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 383,
                                columnNumber: 11
                            }, _this),
                            " |",
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: "ANALYSIS"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 384,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    marginLeft: 'auto',
                                    fontSize: '10px',
                                    fontStyle: 'italic'
                                },
                                children: "Sept 7, 1994 Edition"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 385,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "15techfusionData.js",
                        lineNumber: 365,
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
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    marginBottom: '15px'
                                },
                                children: "Mason Industries Merges with TechFusion Amid Struggles"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 388,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                style: {
                                    fontSize: '14px',
                                    color: '#555',
                                    marginBottom: '20px'
                                },
                                children: "Business Insider | September 7, 1994"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 390,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                style: {
                                    marginBottom: '15px'
                                },
                                children: "Mason Industries has announced a merger with TechFusion, a security technology firm, in a bid to revamp its outdated operations and expand into emerging tech markets."
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 392,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                style: {
                                    marginBottom: '15px'
                                },
                                children: "Founded on the success of Flickbuster, its once-dominant home video rental business, Mason Industries has struggled to stay profitable as internet-based entertainment grows in popularity. With declining employee retention and stagnant innovation, the company has been searching for a new direction."
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 394,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                style: {
                                    marginBottom: '15px'
                                },
                                children: 'TechFusion, known for its cutting-edge security solutions, will help Mason Industries pivot into surveillance, encryption, and other booming tech sectors. CEO Reginald Mason called the merger an "exciting new chapter," but industry experts remain skeptical. "If they don\'t fix internal issues, new technology won\'t save them," said one analyst.'
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 396,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                style: {
                                    marginBottom: '15px'
                                },
                                children: "As the companies integrate, the question remains: Can Mason Industries reinvent itself, or is this a desperate attempt to stay afloat?"
                            }, void 0, false, {
                                fileName: "15techfusionData.js",
                                lineNumber: 398,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "15techfusionData.js",
                        lineNumber: 387,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "15techfusionData.js",
                lineNumber: 254,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "15techfusionData.js",
        lineNumber: 219,
        columnNumber: 5
    }, _this);
};
