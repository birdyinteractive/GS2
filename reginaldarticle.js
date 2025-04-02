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
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import { atlanticGazetteStyles } from './atlanticgazetteStyles.js';
export var createReginaldMasonArticle = function() {
    return {
        title: 'Mason Industries Holiday Gala: A Night of Celebration',
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
                            fileName: "reginaldarticle.js",
                            lineNumber: 9,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.newspaperSubtitle,
                            children: "NEWPORT'S TRUSTED NEWS SOURCE - DECEMBER 19, 1994"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 10,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: _object_spread({}, atlanticGazetteStyles.headerAfter)
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 11,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "reginaldarticle.js",
                    lineNumber: 8,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: atlanticGazetteStyles.navigation,
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: atlanticGazetteStyles.navItem,
                            children: "HOME"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 15,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: atlanticGazetteStyles.navItem,
                            children: "POLITICS"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 16,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: _object_spread({}, atlanticGazetteStyles.navItem, atlanticGazetteStyles.navHighlight),
                            children: "BUSINESS"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 17,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: atlanticGazetteStyles.navItem,
                            children: "TECHNOLOGY"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 18,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: atlanticGazetteStyles.navItem,
                            children: "WORLD"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 19,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("span", {
                            style: {
                                marginLeft: 'auto',
                                fontSize: '10px',
                                fontStyle: 'italic'
                            },
                            children: "December 19, 1994"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 20,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "reginaldarticle.js",
                    lineNumber: 14,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: atlanticGazetteStyles.articleHeader,
                    children: [
                        /*#__PURE__*/ _jsxDEV("h1", {
                            style: atlanticGazetteStyles.articleTitle,
                            children: "BUSINESS & SOCIETY"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 24,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            style: atlanticGazetteStyles.articleSubtitle,
                            children: "Mason Industries Holiday Gala: A Night of Celebration"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 25,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.metaInfo,
                            children: "By Elizabeth Harrington, Society Correspondent | December 19, 1994"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 26,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "reginaldarticle.js",
                    lineNumber: 23,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: atlanticGazetteStyles.articleContent,
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: atlanticGazetteStyles.paragraph,
                            children: "Mason Industries held its annual holiday gala on Saturday evening at the Newport Grand Hotel, welcoming executives, employees, and industry partners for a night of celebration. CEO Reginald Mason addressed attendees with a speech highlighting the company's achievements over the past year, followed by a toast to continued success in the new year."
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 32,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: atlanticGazetteStyles.paragraph,
                            children: "The event featured live music, a formal dinner, and networking among guests, maintaining the company's tradition of an elegant year-end gathering. Among those in attendance was Sofia Pestrichelli, an executive in acquisitions, who was seen speaking at length with Mason during the evening. \"It's always great to celebrate the hard work of our team,\" Pestrichelli commented when asked about the event."
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 36,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            style: atlanticGazetteStyles.paragraph,
                            children: "Mason Industries remains a dominant force in corporate security solutions, and the gala reflected its commitment to fostering strong professional relationships as the company moves into the new year."
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 40,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "reginaldarticle.js",
                    lineNumber: 31,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: atlanticGazetteStyles.adBanner,
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        style: atlanticGazetteStyles.adText,
                        children: "SUBSCRIBE TO THE ATLANTIC GAZETTE TODAY! Call 1-800-555-NEWS for home delivery."
                    }, void 0, false, {
                        fileName: "reginaldarticle.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, _this)
                }, void 0, false, {
                    fileName: "reginaldarticle.js",
                    lineNumber: 44,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: atlanticGazetteStyles.commentsSection,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.commentsTitle,
                            children: "READERS' COMMENTS"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 51,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.commentCard,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentHeader,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentAuthor,
                                            children: "Jameson89"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 57,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentDate,
                                            children: "December 20, 1994"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 58,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 56,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentContent,
                                    children: "Great, another year of Mason Industries patting themselves on the back. Wonder if the employees actually enjoy these events or just show up to stay in good standing."
                                }, void 0, false, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 60,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 55,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.commentCard,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentHeader,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentAuthor,
                                            children: "InsiderInfo"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 67,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentDate,
                                            children: "December 20, 1994"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 68,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 66,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentContent,
                                    children: "Funny how no one's mentioning that Reginald and Sofia left together right before midnight. Saw them heading toward the elevators—heard someone say they were going to the hotel upstairs. Just saying."
                                }, void 0, false, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 70,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 65,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.commentCard,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentHeader,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentAuthor,
                                            children: "BizWatcher"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 77,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentDate,
                                            children: "December 21, 1994"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 78,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 76,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentContent,
                                    children: "How is NO ONE talking about how Sofia Pasta-whatever her name is was a secretary at TechFusion, but is now mysteriously director of acquisitions at Mason Industries AND was seen getting close and cuddly with Reginald at the party. Wake up people!!"
                                }, void 0, false, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 80,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 75,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.commentCard,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentHeader,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentAuthor,
                                            children: "MVenuto65"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 87,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentDate,
                                            children: "December 21, 1994"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 88,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 86,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentContent,
                                    children: "Glad everyone had a great time. Meanwhile, some of us actually cared about Victoria instead of whatever Reginald was up to."
                                }, void 0, false, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 90,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 85,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.commentCard,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentHeader,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentAuthor,
                                            children: "Skeptic101"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 97,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentDate,
                                            children: "December 22, 1994"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 98,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 96,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentContent,
                                    children: "People love to speculate. Maybe they were just talking business? Not everything is a scandal."
                                }, void 0, false, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 100,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 95,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.commentCard,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentHeader,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentAuthor,
                                            children: "RhodeIslander77"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 107,
                                            columnNumber: 13
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: atlanticGazetteStyles.commentDate,
                                            children: "December 22, 1994"
                                        }, void 0, false, {
                                            fileName: "reginaldarticle.js",
                                            lineNumber: 108,
                                            columnNumber: 13
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: atlanticGazetteStyles.commentContent,
                                    children: "The Mason family is so obnoxious. They act like they own Newport and everyone in it. Would love to see someone knock them down a peg."
                                }, void 0, false, {
                                    fileName: "reginaldarticle.js",
                                    lineNumber: 110,
                                    columnNumber: 11
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 105,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "reginaldarticle.js",
                    lineNumber: 50,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ _jsxDEV("div", {
                    style: atlanticGazetteStyles.footer,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: "THE ATLANTIC GAZETTE - Your trusted source for Newport news since 1892"
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 117,
                            columnNumber: 9
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: atlanticGazetteStyles.copyrightText,
                            children: "\xa9 1994 Newport Publishing Group. All Rights Reserved."
                        }, void 0, false, {
                            fileName: "reginaldarticle.js",
                            lineNumber: 118,
                            columnNumber: 9
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "reginaldarticle.js",
                    lineNumber: 116,
                    columnNumber: 7
                }, _this)
            ]
        }, void 0, true, {
            fileName: "reginaldarticle.js",
            lineNumber: 7,
            columnNumber: 5
        }, _this),
        type: 'Society News',
        date: 'December 19, 1994'
    };
};
export var reginaldMasonData = {
    createReginaldMasonArticle: createReginaldMasonArticle
};
