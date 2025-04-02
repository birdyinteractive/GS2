function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
import React from 'react';
import { bankStyles } from './10Styles.js';
export var createBankContent = function(evidenceList, setEvidenceList) {
    return {
        title: 'Newport Bank Homepage',
        content: /*#__PURE__*/ _jsxDEV("div", {
            style: _object_spread_props(_object_spread({}, bankStyles.bankContainer), {
                width: '100%',
                height: '100vh',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
                overflow: 'auto'
            }),
            children: /*#__PURE__*/ _jsxDEV("div", {
                style: _object_spread_props(_object_spread({}, bankStyles.bankContent), {
                    minHeight: '100%',
                    maxWidth: 'none',
                    width: '100%'
                }),
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: _object_spread_props(_object_spread({}, bankStyles.bankHeader), {
                            width: '100%'
                        }),
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            style: bankStyles.headerInner,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: bankStyles.logoContainer,
                                    children: /*#__PURE__*/ _jsxDEV("img", {
                                        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23003366' d='M12 2L2 11h3v9h6v-7h2v7h6v-9h3L12 2zM12 4.3l5 4.7v1h-10v-1l5-4.7z'/%3E%3C/svg%3E",
                                        alt: "Newport Bank Logo",
                                        style: bankStyles.bankLogo
                                    }, void 0, false, {
                                        fileName: "12bankData.js",
                                        lineNumber: 11,
                                        columnNumber: 15
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "12bankData.js",
                                    lineNumber: 10,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: bankStyles.titleContainer,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h1", {
                                            style: bankStyles.bankTitle,
                                            children: "NEWPORT BANK"
                                        }, void 0, false, {
                                            fileName: "12bankData.js",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: bankStyles.bankSubtitle,
                                            children: "Serving the community since 1955"
                                        }, void 0, false, {
                                            fileName: "12bankData.js",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "12bankData.js",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "12bankData.js",
                            lineNumber: 9,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "12bankData.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: _object_spread_props(_object_spread({}, bankStyles.bankNav), {
                            backgroundColor: '#006400',
                            padding: '8px 0'
                        }),
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: _object_spread_props(_object_spread({}, bankStyles.navButton), {
                                    backgroundColor: '#FFFFFF',
                                    color: '#006400',
                                    fontWeight: 'bold',
                                    margin: '0 5px'
                                }),
                                children: "Home"
                            }, void 0, false, {
                                fileName: "12bankData.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, _this),
                            [
                                {
                                    text: 'Services'
                                },
                                {
                                    text: 'Contact'
                                },
                                {
                                    text: 'About'
                                },
                                {
                                    text: 'Downloads'
                                },
                                {
                                    text: 'Rates'
                                }
                            ].map(function(item, index) {
                                return /*#__PURE__*/ _jsxDEV("button", {
                                    style: _object_spread_props(_object_spread({}, bankStyles.navButton), {
                                        backgroundColor: '#FFFFFF',
                                        color: '#006400',
                                        fontWeight: 'bold',
                                        margin: '0 5px'
                                    }),
                                    children: item.text
                                }, index, false, {
                                    fileName: "12bankData.js",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, _this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "12bankData.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: _object_spread_props(_object_spread({}, bankStyles.mainContent), {
                            padding: '20px',
                            maxWidth: 'none',
                            width: '100%',
                            margin: '0 auto'
                        }),
                        children: /*#__PURE__*/ _jsxDEV("table", {
                            width: "100%",
                            cellSpacing: "0",
                            cellPadding: "0",
                            border: "0",
                            children: /*#__PURE__*/ _jsxDEV("tbody", {
                                children: /*#__PURE__*/ _jsxDEV("tr", {
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("td", {
                                            style: _object_spread_props(_object_spread({}, bankStyles.leftColumn), {
                                                padding: '0 15px 0 0'
                                            }),
                                            valign: "top",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h2", {
                                                    style: _object_spread_props(_object_spread({}, bankStyles.welcomeHeader), {
                                                        margin: '0 0 20px 0',
                                                        padding: '10px',
                                                        textAlign: 'center'
                                                    }),
                                                    children: "Welcome to Newport Bank"
                                                }, void 0, false, {
                                                    fileName: "12bankData.js",
                                                    lineNumber: 48,
                                                    columnNumber: 13
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: _object_spread_props(_object_spread({}, bankStyles.contentGrid), {
                                                        marginBottom: '20px'
                                                    }),
                                                    children: /*#__PURE__*/ _jsxDEV("table", {
                                                        width: "100%",
                                                        cellSpacing: "0",
                                                        cellPadding: "10",
                                                        border: "0",
                                                        children: /*#__PURE__*/ _jsxDEV("tbody", {
                                                            children: /*#__PURE__*/ _jsxDEV("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("td", {
                                                                        width: "50%",
                                                                        valign: "top",
                                                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                                                            style: _object_spread_props(_object_spread({}, bankStyles.contentBox), {
                                                                                height: '100%',
                                                                                margin: '0 10px 0 0',
                                                                                display: 'flex',
                                                                                flexDirection: 'column'
                                                                            }),
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                                    style: bankStyles.boxTitle,
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                                            style: bankStyles.newTag,
                                                                                            children: "NEW!"
                                                                                        }, void 0, false, {
                                                                                            fileName: "12bankData.js",
                                                                                            lineNumber: 58,
                                                                                            columnNumber: 27
                                                                                        }, _this),
                                                                                        "Online Banking"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "12bankData.js",
                                                                                    lineNumber: 57,
                                                                                    columnNumber: 25
                                                                                }, _this),
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    style: _object_spread_props(_object_spread({}, bankStyles.boxContent), {
                                                                                        flex: 1,
                                                                                        display: 'flex',
                                                                                        flexDirection: 'column',
                                                                                        justifyContent: 'center'
                                                                                    }),
                                                                                    children: [
                                                                                        "As of January 1, 1995, we are proud to offer online banking to our customers!",
                                                                                        /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                                                                                            fileName: "12bankData.js",
                                                                                            lineNumber: 63,
                                                                                            columnNumber: 27
                                                                                        }, _this),
                                                                                        /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                                                                                            fileName: "12bankData.js",
                                                                                            lineNumber: 63,
                                                                                            columnNumber: 32
                                                                                        }, _this),
                                                                                        "We read that the font Comic Sans was voted this year's best business usage font, so we've implemented it to stay trendy!"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "12bankData.js",
                                                                                    lineNumber: 61,
                                                                                    columnNumber: 25
                                                                                }, _this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "12bankData.js",
                                                                            lineNumber: 56,
                                                                            columnNumber: 23
                                                                        }, _this)
                                                                    }, void 0, false, {
                                                                        fileName: "12bankData.js",
                                                                        lineNumber: 55,
                                                                        columnNumber: 21
                                                                    }, _this),
                                                                    /*#__PURE__*/ _jsxDEV("td", {
                                                                        width: "50%",
                                                                        valign: "top",
                                                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                                                            style: _object_spread_props(_object_spread({}, bankStyles.contentBox), {
                                                                                height: '100%',
                                                                                margin: '0 0 0 10px',
                                                                                display: 'flex',
                                                                                flexDirection: 'column'
                                                                            }),
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                                    style: bankStyles.dogBoxTitle,
                                                                                    children: "Newport Bank Dog of the Month"
                                                                                }, void 0, false, {
                                                                                    fileName: "12bankData.js",
                                                                                    lineNumber: 70,
                                                                                    columnNumber: 25
                                                                                }, _this),
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    style: bankStyles.imageContainer,
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "bank-image-container hover-effect",
                                                                                            style: bankStyles.bankImageContainer,
                                                                                            onMouseEnter: function(e) {
                                                                                                e.currentTarget.querySelector('.image-overlay').style.opacity = '1';
                                                                                            },
                                                                                            onMouseLeave: function(e) {
                                                                                                e.currentTarget.querySelector('.image-overlay').style.opacity = '0';
                                                                                            },
                                                                                            onClick: function(e) {
                                                                                                var button = e.currentTarget.querySelector('.image-overlay');
                                                                                                var photoExists = evidenceList.some(function(item) {
                                                                                                    return item.title === 'Biscuit Photo' && item.type === 'image';
                                                                                                });
                                                                                                if (!photoExists) {
                                                                                                    button.textContent = 'Added to evidence folder';
                                                                                                    var biscuitEvidence = {
                                                                                                        id: Date.now(),
                                                                                                        type: 'image',
                                                                                                        title: 'Biscuit Photo',
                                                                                                        source: 'Newport Bank Website',
                                                                                                        date: 'January 1995',
                                                                                                        url: "https://rosebud.ai/assets/biscuit.png?mAkU",
                                                                                                        image: "https://rosebud.ai/assets/biscuit.png?mAkU",
                                                                                                        description: 'Photo of Biscuit, featured as Newport Bank\'s Dog of the Month in January 1995'
                                                                                                    };
                                                                                                    setEvidenceList(_to_consumable_array(evidenceList).concat([
                                                                                                        biscuitEvidence
                                                                                                    ]));
                                                                                                    // Update localStorage directly to ensure the evidence is saved
                                                                                                    var evidenceFiles = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
                                                                                                    evidenceFiles.push(biscuitEvidence);
                                                                                                    localStorage.setItem('evidenceFiles', JSON.stringify(evidenceFiles));
                                                                                                    // Trigger storage event to update other components
                                                                                                    window.dispatchEvent(new Event('storage'));
                                                                                                }
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("img", {
                                                                                                    src: "https://rosebud.ai/assets/biscuit.png?mAkU",
                                                                                                    alt: "Biscuit - Dog of the Month",
                                                                                                    style: bankStyles.dogImage
                                                                                                }, void 0, false, {
                                                                                                    fileName: "12bankData.js",
                                                                                                    lineNumber: 115,
                                                                                                    columnNumber: 21
                                                                                                }, _this),
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "image-overlay",
                                                                                                    style: {
                                                                                                        position: 'absolute',
                                                                                                        top: '50%',
                                                                                                        left: '50%',
                                                                                                        transform: 'translate(-50%, -50%)',
                                                                                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                                                        color: '#000',
                                                                                                        padding: '6px 10px',
                                                                                                        borderRadius: '4px',
                                                                                                        fontSize: '12px',
                                                                                                        opacity: 0,
                                                                                                        transition: 'all 0.3s ease',
                                                                                                        pointerEvents: 'none',
                                                                                                        textAlign: 'center',
                                                                                                        width: '70%',
                                                                                                        fontWeight: 'bold',
                                                                                                        border: '1px solid #000',
                                                                                                        zIndex: 10
                                                                                                    },
                                                                                                    children: evidenceList.some(function(item) {
                                                                                                        return item.title === 'Biscuit Photo' && item.type === 'image';
                                                                                                    }) ? 'Added to evidence folder' : 'Click to add to evidence folder'
                                                                                                }, void 0, false, {
                                                                                                    fileName: "12bankData.js",
                                                                                                    lineNumber: 120,
                                                                                                    columnNumber: 21
                                                                                                }, _this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "12bankData.js",
                                                                                            lineNumber: 74,
                                                                                            columnNumber: 19
                                                                                        }, _this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            style: {
                                                                                                fontSize: '12px',
                                                                                                textAlign: 'center'
                                                                                            },
                                                                                            children: "Meet Biscuit, our January Dog of the Month!"
                                                                                        }, void 0, false, {
                                                                                            fileName: "12bankData.js",
                                                                                            lineNumber: 147,
                                                                                            columnNumber: 19
                                                                                        }, _this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "12bankData.js",
                                                                                    lineNumber: 73,
                                                                                    columnNumber: 17
                                                                                }, _this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "12bankData.js",
                                                                            lineNumber: 69,
                                                                            columnNumber: 23
                                                                        }, _this)
                                                                    }, void 0, false, {
                                                                        fileName: "12bankData.js",
                                                                        lineNumber: 68,
                                                                        columnNumber: 21
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "12bankData.js",
                                                                lineNumber: 54,
                                                                columnNumber: 19
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 53,
                                                            columnNumber: 17
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "12bankData.js",
                                                        lineNumber: 52,
                                                        columnNumber: 15
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "12bankData.js",
                                                    lineNumber: 51,
                                                    columnNumber: 13
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: _object_spread_props(_object_spread({}, bankStyles.bankHours), {
                                                        marginBottom: '20px',
                                                        padding: '15px'
                                                    }),
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            style: _object_spread_props(_object_spread({}, bankStyles.hoursTitle), {
                                                                marginTop: '0'
                                                            }),
                                                            children: "Bank Hours"
                                                        }, void 0, false, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 159,
                                                            columnNumber: 15
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            style: _object_spread_props(_object_spread({}, bankStyles.hoursGrid), {
                                                                display: 'grid',
                                                                gridTemplateColumns: '1fr 1fr',
                                                                gap: '5px'
                                                            }),
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: "Monday - Friday:"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 161,
                                                                    columnNumber: 17
                                                                }, _this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: "9:00 AM - 5:00 PM"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 162,
                                                                    columnNumber: 17
                                                                }, _this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: "Saturday:"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 163,
                                                                    columnNumber: 17
                                                                }, _this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: "9:00 AM - 12:00 PM"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 164,
                                                                    columnNumber: 17
                                                                }, _this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: "Sunday:"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 165,
                                                                    columnNumber: 17
                                                                }, _this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    children: "Closed"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 166,
                                                                    columnNumber: 17
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 160,
                                                            columnNumber: 15
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "12bankData.js",
                                                    lineNumber: 158,
                                                    columnNumber: 13
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "12bankData.js",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("td", {
                                            style: _object_spread_props(_object_spread({}, bankStyles.rightColumn), {
                                                padding: '0 0 0 15px'
                                            }),
                                            valign: "top",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: _object_spread_props(_object_spread({}, bankStyles.loginBox), {
                                                        padding: '15px',
                                                        marginBottom: '20px'
                                                    }),
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            style: bankStyles.loginTitle,
                                                            children: "Online Banking Login"
                                                        }, void 0, false, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 172,
                                                            columnNumber: 13
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            style: bankStyles.formGroup,
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("label", {
                                                                    style: bankStyles.inputLabel,
                                                                    children: "User Name:"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 174,
                                                                    columnNumber: 15
                                                                }, _this),
                                                                /*#__PURE__*/ _jsxDEV("input", {
                                                                    type: "text",
                                                                    style: bankStyles.textInput
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 175,
                                                                    columnNumber: 15
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 173,
                                                            columnNumber: 13
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            style: bankStyles.formGroup,
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("label", {
                                                                    style: bankStyles.inputLabel,
                                                                    children: "Password:"
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 181,
                                                                    columnNumber: 15
                                                                }, _this),
                                                                /*#__PURE__*/ _jsxDEV("input", {
                                                                    type: "password",
                                                                    style: bankStyles.textInput
                                                                }, void 0, false, {
                                                                    fileName: "12bankData.js",
                                                                    lineNumber: 182,
                                                                    columnNumber: 15
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 180,
                                                            columnNumber: 13
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("button", {
                                                            style: bankStyles.loginButton,
                                                            children: "Login"
                                                        }, void 0, false, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 187,
                                                            columnNumber: 13
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                                onClick: function() {
                                                                    var dialogBox = document.createElement('div');
                                                                    dialogBox.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#fff;border:2px solid #003366;padding:20px;box-shadow:0 0 10px rgba(0,0,0,0.5);z-index:9999;font-family:Arial,sans-serif;min-width:200px;text-align:center;';
                                                                    var message = document.createElement('div');
                                                                    message.textContent = 'To reduce the number of customer calls regarding our new online banking platform, please try these tips for remembering your login credentials before calling us:';
                                                                    message.style.cssText = 'margin-bottom:15px;text-align:left;';
                                                                    var list = document.createElement('div');
                                                                    list.style.cssText = 'text-align:left;margin-left:20px;margin-bottom:15px;';
                                                                    list.innerHTML = "\n                    1. Your username defaults to your email address.<br>\n                    2. We recommend making your password a common word you'll remember, after all this is the 1990's and hacking is still very uncommon...\n                  ";
                                                                    var okButton = document.createElement('button');
                                                                    okButton.textContent = 'OK';
                                                                    okButton.style.cssText = 'padding:5px 15px;background-color:#003366;color:#fff;border:none;cursor:pointer;';
                                                                    okButton.onclick = function() {
                                                                        return document.body.removeChild(dialogBox);
                                                                    };
                                                                    dialogBox.append(message, list, okButton);
                                                                    document.body.appendChild(dialogBox);
                                                                },
                                                                style: bankStyles.forgotPassword,
                                                                children: "Forgot your user name or password?"
                                                            }, void 0, false, {
                                                                fileName: "12bankData.js",
                                                                lineNumber: 191,
                                                                columnNumber: 15
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 190,
                                                            columnNumber: 13
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "12bankData.js",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: _object_spread_props(_object_spread({}, bankStyles.promoBox), {
                                                        padding: '15px'
                                                    }),
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("img", {
                                                            src: "https://play.rosebud.ai/assets/GettyImages-78488427.webp?Km1N",
                                                            alt: "Bank Promotion",
                                                            style: bankStyles.promoImage
                                                        }, void 0, false, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 223,
                                                            columnNumber: 13
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            style: bankStyles.promoText,
                                                            children: "Trust Newport Bank with your financial future!"
                                                        }, void 0, false, {
                                                            fileName: "12bankData.js",
                                                            lineNumber: 228,
                                                            columnNumber: 13
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "12bankData.js",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "12bankData.js",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "12bankData.js",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "12bankData.js",
                                lineNumber: 45,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "12bankData.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "12bankData.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: _object_spread_props(_object_spread({}, bankStyles.securityBanner), {
                            margin: '20px 0',
                            padding: '10px 0'
                        }),
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            style: bankStyles.securityContent,
                            children: [
                                /*#__PURE__*/ _jsxDEV("img", {
                                    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E",
                                    alt: "Secure Banking",
                                    style: bankStyles.securityIcon
                                }, void 0, false, {
                                    fileName: "12bankData.js",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: bankStyles.securityText,
                                    children: "SECURE BANKING SINCE 1955"
                                }, void 0, false, {
                                    fileName: "12bankData.js",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "12bankData.js",
                            lineNumber: 239,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "12bankData.js",
                        lineNumber: 238,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: _object_spread_props(_object_spread({}, bankStyles.bankFooter), {
                            padding: '15px',
                            marginTop: '0'
                        }),
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    marginBottom: '5px'
                                },
                                children: "\xa9 1995 Newport Bank. All rights reserved."
                            }, void 0, false, {
                                fileName: "12bankData.js",
                                lineNumber: 250,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: bankStyles.footerCopyright,
                                children: "24/7 Customer Service: (555) 555-0123"
                            }, void 0, false, {
                                fileName: "12bankData.js",
                                lineNumber: 251,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "12bankData.js",
                        lineNumber: 249,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "12bankData.js",
                lineNumber: 7,
                columnNumber: 7
            }, _this)
        }, void 0, false, {
            fileName: "12bankData.js",
            lineNumber: 6,
            columnNumber: 5
        }, _this),
        type: 'Website Link',
        date: 'Current',
        isLink: true,
        url: '#'
    };
};
export var bankData = {
    createBankContent: createBankContent
};
