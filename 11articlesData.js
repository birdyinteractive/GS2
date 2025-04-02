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
import { atlanticGazetteStyles } from './atlanticgazetteStyles.js';
var createArticlesData = function(evidenceList, setEvidenceList) {
    return {
        "eleanor finch": [
            {
                title: 'Eleanor Finch: A Local Historian\'s Legacy',
                content: /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        backgroundColor: '#FFF5E1',
                        padding: '20px',
                        border: '1px solid #DEB887',
                        borderRadius: '5px',
                        marginBottom: '20px',
                        fontFamily: 'Georgia, serif',
                        lineHeight: '1.6'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                fontSize: '18px',
                                color: '#8B4513',
                                marginBottom: '15px',
                                borderBottom: '2px solid #DEB887',
                                paddingBottom: '10px'
                            },
                            children: "From the Newport Historical Society Archives"
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 17,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: {
                                marginBottom: '15px'
                            },
                            children: "Renowned Newport historian Eleanor Finch has dedicated her career to uncovering the hidden histories of the town's most prominent estates. Known for her meticulous research and unflinching pursuit of truth, Finch's work has often put her at odds with Newport's elite families."
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 27,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: {
                                marginBottom: '15px'
                            },
                            children: 'Her recent investigations into the architectural secrets of historic Newport mansions have garnered both praise and controversy. Despite pressure from certain influential families, Finch continues her work, stating that "history belongs to everyone, not just those who wish to control its narrative."'
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 31,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: {
                                marginBottom: '15px'
                            },
                            children: "Having served as the lead researcher at the Newport Historical Society for over two decades, Finch maintains an extensive archive of architectural records and family histories. Her dedication to preserving Newport's authentic history has made her both a respected figure in historical circles and a thorn in the side of those who prefer certain stories remain buried."
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 35,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: {
                                marginBottom: '15px'
                            },
                            children: "In her most recent work, Finch has focused on documenting the architectural evolution of Newport's historic estates, with particular attention to unusual modifications and unexplained renovations. Her research suggests that many of Newport's oldest buildings may harbor secrets their current owners would rather keep hidden."
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 39,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                marginTop: '20px',
                                padding: '15px',
                                backgroundColor: '#F5DEB3',
                                border: '1px solid #DEB887',
                                borderRadius: '5px',
                                fontSize: '14px',
                                color: '#8B4513'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("strong", {
                                    children: "Note:"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, _this),
                                " This biography is part of the Newport Historical Society's ongoing effort to document the work of local historians and their contributions to preserving our town's heritage."
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 43,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "11articlesData.js",
                    lineNumber: 8,
                    columnNumber: 13
                }, _this),
                type: 'Biography',
                date: 'January 10, 1995'
            }
        ],
        "stonehaven": [
            {
                title: 'Hidden Histories: The Architecture of Stonehaven Estate',
                content: /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        fontFamily: '"Times New Roman", serif',
                        padding: '20px',
                        backgroundColor: '#FFF5E1',
                        color: '#000000',
                        border: '1px solid #DEB887'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: '20px',
                                borderBottom: '2px double #8B4513',
                                paddingBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("h1", {
                                    style: {
                                        fontSize: '24px',
                                        color: '#8B4513',
                                        marginBottom: '10px'
                                    },
                                    children: "Hidden Histories: The Architecture of Stonehaven Estate"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        fontSize: '14px',
                                        color: '#666666',
                                        fontStyle: 'italic'
                                    },
                                    children: "A Digital Publication from the Newport Historical Society"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 71,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: {
                                marginBottom: '15px',
                                lineHeight: '1.6',
                                textIndent: '20px'
                            },
                            children: "Built in 1892, Stonehaven Estate stands as one of Newport's most enigmatic architectural treasures. The mansion's distinctive blend of Victorian and Gothic Revival styles reflects the Mason family's influence on the region's architectural heritage."
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 91,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: {
                                marginBottom: '15px',
                                lineHeight: '1.6',
                                textIndent: '20px'
                            },
                            children: "Of particular interest is the estate's east wing, added in 1923 under Reginald Mason's direction. The wing's unusual features include reinforced walls, specialized electrical systems, and what architectural plans refer to as \"research spaces.\""
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 101,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                backgroundColor: '#8B4513',
                                color: '#FFF5E1',
                                padding: '10px',
                                marginTop: '20px',
                                textAlign: 'center',
                                fontSize: '12px'
                            },
                            children: "[Preview Only - Full text available at Newport Public Library]"
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 111,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "11articlesData.js",
                    lineNumber: 64,
                    columnNumber: 13
                }, _this),
                type: 'Digital Publication',
                date: 'January 15, 1995'
            },
            {
                title: 'Newport Alien Alerts',
                content: /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        fontFamily: '"Comic Sans MS", "Arial", sans-serif',
                        padding: '20px',
                        backgroundColor: '#000066',
                        color: '#FFFF00',
                        backgroundImage: 'url("data:image/gif;base64,R0lGODlhCgAKAIAAAAAAAP///yH5BAEAAAAALAAAAAAKAAoAAAIIhI+py+0PYysAOw==")'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                backgroundColor: '#000033',
                                border: '2px solid #FFFF00',
                                padding: '20px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("h1", {
                                    style: {
                                        textAlign: 'center',
                                        color: '#FF00FF',
                                        marginBottom: '10px',
                                        textShadow: '2px 2px #000000',
                                        fontSize: '24px',
                                        fontFamily: '"Big Shoulders Stencil", "Comic Sans MS", "Arial", sans-serif'
                                    },
                                    children: "\uD83D\uDC7D NEWPORT ALIEN ALERTS \uD83D\uDEF8 \uD83C\uDF20 \uD83D\uDC7E \uD83D\uDE80 ✨"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        textAlign: 'center',
                                        color: '#00FF00',
                                        marginBottom: '20px',
                                        fontSize: '12px'
                                    },
                                    children: "~ * ~ * ~ THE TRUTH IS OUT THERE! ~ * ~ * ~"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        textAlign: 'center',
                                        color: '#FF0000',
                                        fontSize: '10px',
                                        marginBottom: '20px'
                                    },
                                    children: "[This page is monitored by the Men in Black \uD83D\uDD74️ \uD83D\uDC41️]"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 136,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                backgroundColor: '#000033',
                                border: '2px solid #FFFF00',
                                padding: '20px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    style: {
                                        color: '#00FF00',
                                        borderBottom: '1px solid #FFFF00',
                                        paddingBottom: '5px',
                                        marginBottom: '10px'
                                    },
                                    children: "\uD83C\uDF1F Latest Blog Post - March 16, 1995 \uD83C\uDF1F"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        color: '#FFFFFF',
                                        marginBottom: '15px',
                                        lineHeight: '1.5'
                                    },
                                    children: "Something strange happened at the Mason estate on the night Victoria Mason disappeared. Multiple witnesses reported eerie flickering lights hovering over the property, moving in unnatural patterns before vanishing into the night. Some say it was UFOs. Others believe it was an experimental Mason Industries project gone wrong."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        color: '#FFFFFF',
                                        marginBottom: '15px',
                                        lineHeight: '1.5'
                                    },
                                    children: 'A local resident I interviewed swears he saw "glowing orbs, zipping across the trees like they were searching for something." Meanwhile, another witness claims the lights blinked in a rhythmic pattern, almost like a signal. Was Mason Industries testing classified technology? Or was something—or someone—trying to make contact?'
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        color: '#FFFFFF',
                                        marginBottom: '15px',
                                        lineHeight: '1.5'
                                    },
                                    children: "With Victoria missing and no official explanation for the lights, the mystery only deepens. One thing's for sure: something unusual happened that night. And someone doesn't want us to know the truth."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        color: '#FF00FF',
                                        fontSize: '12px',
                                        textAlign: 'right',
                                        fontStyle: 'italic'
                                    },
                                    children: "Posted by: LocalHistoryBuff"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 170,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                backgroundColor: '#000033',
                                border: '2px solid #FFFF00',
                                padding: '20px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    style: {
                                        color: '#00FF00',
                                        marginBottom: '10px'
                                    },
                                    children: "\uD83D\uDCDD Blog Posts Coming Soon"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        color: '#00FFFF',
                                        textAlign: 'center',
                                        padding: '20px 0',
                                        fontSize: '14px'
                                    },
                                    children: "Stay tuned for more updates about strange happenings in Newport..."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        marginTop: '20px',
                                        textAlign: 'center',
                                        color: '#FF0000',
                                        fontSize: '12px'
                                    },
                                    children: /*#__PURE__*/ _jsxDEV("marquee", {
                                        children: "\uD83D\uDEA7 Under Construction - Please Visit Again Soon! \uD83D\uDEA7"
                                    }, void 0, false, {
                                        fileName: "11articlesData.js",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 220,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "11articlesData.js",
                    lineNumber: 129,
                    columnNumber: 13
                }, _this),
                type: 'Personal Blog',
                date: 'March 15, 1995'
            }
        ],
        "newport bank": [
            {
                title: 'Newport Bank Homepage',
                content: 'Click to visit the Newport Bank Homepage',
                type: 'Website Link',
                date: 'Current',
                isLink: true,
                url: '#'
            }
        ],
        "techfusion": [
            {
                title: 'TechFusion-Mason Industries Merger: A New Era for Business',
                content: /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        backgroundColor: '#FFFFFF',
                        padding: '20px',
                        color: '#000000'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                borderTop: '2px solid #1E3A8A',
                                marginBottom: '20px'
                            }
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 273,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                color: '#666666',
                                fontSize: '14px',
                                marginBottom: '20px'
                            },
                            children: "BUSINESS INSIDER | March 22, 1987"
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 277,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("h1", {
                            style: {
                                fontSize: '32px',
                                fontWeight: 'bold',
                                marginBottom: '30px',
                                color: '#1E3A8A'
                            },
                            children: "TechFusion-Mason Industries Merger Shakes Tech Sector"
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 284,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                lineHeight: '1.8'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: 'In a landmark deal announced yesterday, Mason Industries and TechFusion Corporation have agreed to a merger valued at $2.8 billion. The move marks one of the largest consolidations in the computer security sector, creating what analysts are calling a "powerhouse in digital defense."'
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: "Sources close to the negotiations reveal that Reginald Mason will retain control as CEO of the merged entity, while TechFusion's innovative encryption division will be integrated into Mason's existing security framework. Industry experts predict this combination could revolutionize corporate data protection."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: "Rachel Monroe, a senior manager at TechFusion, is expected to take on a new role at Mason Industries following the merger. While details remain undisclosed, her involvement signals a major shift in leadership as the two companies combine operations."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: "However, the merger has raised concerns among some board members, particularly regarding TechFusion's experimental projects and their alignment with Mason Industries' traditional defense contracts. Internal documents suggest Victoria Mason, head of Research & Development, has expressed reservations about certain aspects of the deal."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 302,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 292,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                borderBottom: '2px solid #1E3A8A',
                                marginTop: '20px'
                            }
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 306,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "11articlesData.js",
                    lineNumber: 268,
                    columnNumber: 13
                }, _this),
                type: 'Business News',
                date: 'March 22, 1987'
            }
        ],
        "mason industries": [
            {
                title: "Mason Industries Corporate Website",
                type: "Website",
                date: "1995-03-15",
                content: "Mason Industries Corporate Website",
                isLink: true
            }
        ],
        victoria: [
            {
                title: 'Heiress Victoria Mason Vanishes from Family Estate',
                content: /*#__PURE__*/ _jsxDEV("div", {
                    style: atlanticGazetteStyles.container,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.header,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.newspaperTitle,
                                    children: "THE ATLANTIC GAZETTE"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 331,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.newspaperSubtitle,
                                    children: "NEWPORT'S TRUSTED NEWS SOURCE - MARCH 16, 1995"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 332,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: _object_spread({}, atlanticGazetteStyles.headerAfter)
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 333,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 330,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.navigation,
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: atlanticGazetteStyles.navItem,
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 337,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: atlanticGazetteStyles.navItem,
                                    children: "POLITICS"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 338,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: atlanticGazetteStyles.navItem,
                                    children: "BUSINESS"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 339,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: _object_spread({}, atlanticGazetteStyles.navItem, atlanticGazetteStyles.navHighlight),
                                    children: "LOCAL"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: atlanticGazetteStyles.navItem,
                                    children: "WORLD"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        marginLeft: 'auto',
                                        fontSize: '10px',
                                        fontStyle: 'italic'
                                    },
                                    children: "March 16, 1995"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 336,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.articleHeader,
                            children: [
                                /*#__PURE__*/ _jsxDEV("h1", {
                                    style: atlanticGazetteStyles.articleTitle,
                                    children: "BREAKING NEWS"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 346,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    style: atlanticGazetteStyles.articleSubtitle,
                                    children: "Heiress Victoria Mason Vanishes from Family Estate"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 347,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.metaInfo,
                                    children: "By Jonathan Wells, Chief Correspondent | March 16, 1995"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 348,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 345,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.articleContent,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "image-container",
                                    style: _object_spread({
                                        position: 'relative',
                                        float: 'left',
                                        margin: '0 20px 20px 0',
                                        cursor: 'pointer'
                                    }, atlanticGazetteStyles.imageContainer),
                                    onClick: function(e) {
                                        var button = e.currentTarget.querySelector('.image-overlay');
                                        var photoExists = evidenceList.some(function(item) {
                                            return item.title === 'Victoria Mason Photo' && item.type === 'image';
                                        });
                                        if (!photoExists) {
                                            button.textContent = 'Added to evidence folder';
                                            var newEvidence = {
                                                id: Date.now(),
                                                type: 'image',
                                                title: 'Victoria Mason Photo',
                                                source: 'Atlantic Gazette',
                                                date: 'March 16, 1995',
                                                url: "https://rosebud.ai/assets/374cf6bd9e31d25e0d4f6bac6e31675b.jpg?UeO3",
                                                description: 'Last known photograph of Victoria Mason before her disappearance'
                                            };
                                            var updatedList = _to_consumable_array(evidenceList).concat([
                                                newEvidence
                                            ]);
                                            setEvidenceList(updatedList);
                                            localStorage.setItem('evidenceFiles', JSON.stringify(updatedList));
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            src: "https://rosebud.ai/assets/374cf6bd9e31d25e0d4f6bac6e31675b.jpg?UeO3",
                                            alt: "Victoria Mason",
                                            style: {
                                                width: '100%',
                                                height: 'auto',
                                                border: '1px solid #000',
                                                padding: '5px',
                                                backgroundColor: '#FFF',
                                                shapeOutside: 'margin-box',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 0 0 rgba(255, 215, 0, 0)'
                                            }
                                        }, void 0, false, {
                                            fileName: "11articlesData.js",
                                            lineNumber: 386,
                                            columnNumber: 19
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
                                                padding: '8px 12px',
                                                borderRadius: '4px',
                                                fontSize: '14px',
                                                opacity: 0,
                                                transition: 'all 0.3s ease',
                                                pointerEvents: 'none',
                                                textAlign: 'center',
                                                width: '80%',
                                                fontWeight: 'bold',
                                                border: '1px solid #000',
                                                zIndex: 10
                                            },
                                            children: function() {
                                                var isPhotoAdded = evidenceList.some(function(item) {
                                                    return item.title === 'Victoria Mason Photo' && item.type === 'image';
                                                });
                                                if (isPhotoAdded) {
                                                    return 'Added to evidence folder';
                                                }
                                                return 'Click to add to evidence folder';
                                            }()
                                        }, void 0, false, {
                                            fileName: "11articlesData.js",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("style", {
                                            children: "\n                      .image-container {\n                        position: relative;\n                        display: inline-block;\n                        cursor: pointer;\n                      }\n                      .image-container:hover img {\n                        opacity: 0.5 !important;\n                        transform: scale(1.02);\n                      }\n                      .image-container:hover .image-overlay {\n                        opacity: 1 !important;\n                        visibility: visible !important;\n                      }\n                      .image-overlay {\n                        visibility: hidden;\n                        z-index: 2;\n                        background-color: rgba(255, 255, 255, 0.9);\n                        border: 1px solid #000;\n                        padding: 8px 12px;\n                        border-radius: 4px;\n                        transition: all 0.3s ease;\n                      }\n                    "
                                        }, void 0, false, {
                                            fileName: "11articlesData.js",
                                            lineNumber: 432,
                                            columnNumber: 19
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 353,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: atlanticGazetteStyles.paragraph,
                                    children: "Newport, RI – Victoria Mason, 26-year-old heiress to the Mason Industries fortune, and current Director of R&D for the company, was reported missing under mysterious circumstances at her family's secluded estate on the evening of Wednesday March 15, 1995."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 460,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: atlanticGazetteStyles.paragraph,
                                    children: "Mason was seen earlier that day at Newport Bank, though it is unclear what business she was conducting, she was reportedly wearing sunglasses in an attempt to hide her identity. That evening, she was at the estate with her father, Reginald Mason, and an unidentified staff member. At some point, Reginald and the staff member stepped away, and when they returned, Victoria was gone. The only known disturbance was a series of strange lights seen in the woods surrounding the property."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 464,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: atlanticGazetteStyles.paragraph,
                                    children: "One curious detail: Victoria's beloved dog, Biscuit, was found unharmed in the estate's library. Mason was known to dote on Biscuit, once calling him \"the love of my life\" in an interview. The fact that she would leave him behind has raised further questions about the circumstances of her disappearance."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 468,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: atlanticGazetteStyles.paragraph,
                                    children: "Reginald Mason, CEO of Mason Industries and Victoria's father declined to comment."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 472,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.sidebarBox,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: atlanticGazetteStyles.sidebarTitle,
                                            children: "Gumshoe Detective Agency Brought in to Assist Newport Police"
                                        }, void 0, false, {
                                            fileName: "11articlesData.js",
                                            lineNumber: 477,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: atlanticGazetteStyles.sidebarContent,
                                            children: 'The Newport Police Department have enlisted the help of the newly established "Gumshoe Detective Agency" to assist in the investigation. Former Newport Police Chief Detective Chris Karadec started the agency in 1994 and although the agency has not publically reported their number of solved cases, the Newport Mayor\'s office has gone on record saying they have "nothing but the upmost confidence in Detective Karadec\'s prior track record and new business venture".'
                                        }, void 0, false, {
                                            fileName: "11articlesData.js",
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 476,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    style: _object_spread_props(_object_spread({}, atlanticGazetteStyles.paragraph), {
                                        clear: 'both'
                                    }),
                                    children: "The investigation remains ongoing."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 485,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 352,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.adBanner,
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                style: atlanticGazetteStyles.adText,
                                children: "SUBSCRIBE TO THE ATLANTIC GAZETTE TODAY! Call 1-800-555-NEWS for home delivery."
                            }, void 0, false, {
                                fileName: "11articlesData.js",
                                lineNumber: 491,
                                columnNumber: 17
                            }, _this)
                        }, void 0, false, {
                            fileName: "11articlesData.js",
                            lineNumber: 490,
                            columnNumber: 15
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.footer,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    children: "THE ATLANTIC GAZETTE - Your trusted source for Newport news since 1892"
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 497,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.copyrightText,
                                    children: "\xa9 1995 Newport Publishing Group. All Rights Reserved."
                                }, void 0, false, {
                                    fileName: "11articlesData.js",
                                    lineNumber: 498,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "11articlesData.js",
                            lineNumber: 496,
                            columnNumber: 15
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "11articlesData.js",
                    lineNumber: 329,
                    columnNumber: 13
                }, _this),
                type: 'News Article',
                date: 'March 16, 1995'
            }
        ],
        estate: [
            {
                title: '[Property Record] Mason Estate Security System Installation',
                content: 'Recent upgrades to the Mason Estate security system include new surveillance cameras and electronic locks. Installation completed March 1, 1995...',
                type: 'Property Record',
                date: 'March 1, 1995'
            }
        ],
        party: [
            {
                title: '[Society Column] Mason Estate Spring Gathering',
                content: 'The annual Mason Estate spring gathering was held on March 15, with notable attendees including industrial leaders and local politicians...',
                type: 'Society News',
                date: 'March 15, 1995'
            }
        ],
        security: [
            {
                title: '[Security Log] Night Guard Report - March 15',
                content: 'Standard patrol completed. Note: East wing camera #3 experienced interference between 23:30-23:50. Maintenance scheduled...',
                type: 'Security Log',
                date: 'March 15, 1995'
            }
        ],
        business: [
            {
                title: '[Financial Times] Mason Industries Restructuring',
                content: 'Mason Industries board meeting scheduled for March 20 to discuss proposed changes to company leadership and ownership structure...',
                type: 'Business News',
                date: 'March 14, 1995'
            }
        ],
        camera: [
            {
                title: '[Maintenance Log] Security Camera System',
                content: 'Periodic interference reported in east wing security cameras. Possible electromagnetic disturbance from nearby equipment...',
                type: 'Technical Report',
                date: 'March 10, 1995'
            }
        ]
    };
};
export var articlesData = {
    createArticlesData: createArticlesData
};
