// Gossip.js - Module for handling gossip content
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
// Function to create the gossip forum website content
export var createGossipContent = function() {
    return {
        title: "LOVELINE: Relationship Advice Forum",
        type: "Website",
        date: "1995-12-14",
        source: "AOL Forums",
        content: /*#__PURE__*/ _jsxDEV(GossipForum, {}, void 0, false, {
            fileName: "gossip.js",
            lineNumber: 10,
            columnNumber: 14
        }, _this),
        isLink: true
    };
};
// Main gossip forum component
var GossipForum = function(param) {
    var onClose = param.onClose;
    var forumStyle = {
        backgroundColor: '#000080',
        color: '#FFFFFF',
        fontFamily: '"MS Sans Serif", "Arial", sans-serif',
        padding: '10px',
        width: '100%',
        height: '100%',
        overflow: 'auto'
    };
    var headerStyle = {
        backgroundColor: '#C0C0C0',
        color: '#000000',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080',
        marginBottom: '10px'
    };
    var forumPostStyle = {
        backgroundColor: '#C0C0C0',
        color: '#000000',
        margin: '10px 0',
        padding: '10px',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080'
    };
    var postHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #808080',
        paddingBottom: '5px',
        marginBottom: '8px'
    };
    var userInfoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    };
    var avatarStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid #FFFFFF',
        borderLeft: '1px solid #FFFFFF',
        borderRight: '1px solid #808080',
        borderBottom: '1px solid #808080',
        fontWeight: 'bold',
        fontSize: '16px'
    };
    var buttonStyle = {
        backgroundColor: '#C0C0C0',
        border: 'none',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080',
        padding: '4px 8px',
        margin: '0 5px',
        cursor: 'pointer',
        fontFamily: '"MS Sans Serif", "Arial", sans-serif',
        fontSize: '12px',
        fontWeight: 'bold'
    };
    var navbarStyle = {
        display: 'flex',
        backgroundColor: '#C0C0C0',
        padding: '5px',
        justifyContent: 'space-between',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080',
        marginBottom: '10px'
    };
    // Sample forum posts
    var posts = [
        {
            id: 1,
            user: 'MVenuto65',
            avatar: 'M',
            date: '01-05-1995',
            title: 'Seriously, V???',
            content: "I wasn't going to post this, but I can't hold it in anymore. Did anyone else see that interview with V? You know, the one where she said her dog was the \"love of her life\"? Her dog. Not me. Not the person who stood by her, who put up with all her nonsense, who actually loved her. No, it's Biscuit.\n\nI knew she was self-absorbed, but this? This is a whole new level. It's like I never even existed to her. After everything I did, after everything I gave up, and she acts like I was nothing. Just some guy who took up space in her life until she got bored.\n\nI should've seen it coming. She was always like this—money, status, getting whatever she wanted. And me? I was just another accessory, just another thing she could toss aside when she was done. I'm so angry, I swear to God… if I ever saw her again—\n\nI don't even know what I'd do."
        },
        {
            id: 2,
            user: 'Anonymous',
            avatar: 'A',
            date: '01-05-1995',
            title: 'RE: Seriously, V???',
            content: "Yikes, dude. You sure you wanna post this? Sounds like you need to take a walk and cool off."
        },
        {
            id: 3,
            user: 'Anonymous',
            avatar: 'A',
            date: '01-05-1995',
            title: 'RE: Seriously, V???',
            content: "I mean… if her dog makes her happier than you did, maybe that says something?"
        },
        {
            id: 4,
            user: 'Anonymous',
            avatar: 'A',
            date: '01-05-1995',
            title: 'RE: Seriously, V???',
            content: "Lol, are we really surprised? These rich types think the whole world revolves around them. The Mason family acts like they own Newport."
        },
        {
            id: 5,
            user: 'Anonymous',
            avatar: 'A',
            date: '01-05-1995',
            title: 'RE: Seriously, V???',
            content: "This post is kinda unsettling, man. Might wanna delete before someone takes it the wrong way."
        },
        {
            id: 6,
            user: 'MVenuto65',
            avatar: 'M',
            date: '01-05-1995',
            title: 'RE: Seriously, V???',
            content: "I don't care how it sounds. She deserves to know how it feels to be tossed aside."
        }
    ];
    return /*#__PURE__*/ _jsxDEV("div", {
        style: forumStyle,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: headerStyle,
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        style: {
                            margin: '0',
                            fontSize: '24px',
                            fontWeight: 'bold'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    color: '#FF0000'
                                },
                                children: "LOVE"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 163,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    color: '#0000FF'
                                },
                                children: "LINE"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, _this),
                            ": Relationship Advice Forum"
                        ]
                    }, void 0, true, {
                        fileName: "gossip.js",
                        lineNumber: 162,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: onClose,
                        style: _object_spread_props(_object_spread({}, buttonStyle), {
                            backgroundColor: '#FF0000',
                            color: '#FFFFFF'
                        }),
                        children: "X Close"
                    }, void 0, false, {
                        fileName: "gossip.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "gossip.js",
                lineNumber: 161,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: navbarStyle,
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "Home"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 176,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "New Post"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 177,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "Search"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 178,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "Members"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 179,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "Help"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 180,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "gossip.js",
                        lineNumber: 175,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            fontWeight: 'bold',
                            fontSize: '12px',
                            padding: '4px'
                        },
                        children: "Online Users: 347"
                    }, void 0, false, {
                        fileName: "gossip.js",
                        lineNumber: 182,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "gossip.js",
                lineNumber: 174,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    backgroundColor: '#000080',
                    color: '#FFFFFF',
                    padding: '10px'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        style: {
                            margin: '0',
                            fontSize: '18px'
                        },
                        children: "Forum: Relationship Advice"
                    }, void 0, false, {
                        fileName: "gossip.js",
                        lineNumber: 188,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        style: {
                            fontSize: '12px',
                            margin: '5px 0'
                        },
                        children: "Moderator: LoveDoctor | Posts Today: 23 | Members: 2,145"
                    }, void 0, false, {
                        fileName: "gossip.js",
                        lineNumber: 189,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "gossip.js",
                lineNumber: 187,
                columnNumber: 7
            }, _this),
            posts.map(function(post) {
                return /*#__PURE__*/ _jsxDEV("div", {
                    style: forumPostStyle,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: postHeaderStyle,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: userInfoStyle,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            style: avatarStyle,
                                            children: post.avatar
                                        }, void 0, false, {
                                            fileName: "gossip.js",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: {
                                                        fontWeight: 'bold'
                                                    },
                                                    children: post.user
                                                }, void 0, false, {
                                                    fileName: "gossip.js",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: {
                                                        fontSize: '11px'
                                                    },
                                                    children: [
                                                        "Posted: ",
                                                        post.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "gossip.js",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "gossip.js",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "gossip.js",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        fontWeight: 'bold'
                                    },
                                    children: post.title
                                }, void 0, false, {
                                    fileName: "gossip.js",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "gossip.js",
                            lineNumber: 196,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                fontSize: '13px'
                            },
                            children: post.content
                        }, void 0, false, {
                            fileName: "gossip.js",
                            lineNumber: 206,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'flex-end',
                                marginTop: '8px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("button", {
                                    style: buttonStyle,
                                    children: "Reply"
                                }, void 0, false, {
                                    fileName: "gossip.js",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    style: buttonStyle,
                                    children: "Quote"
                                }, void 0, false, {
                                    fileName: "gossip.js",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    style: buttonStyle,
                                    children: "PM User"
                                }, void 0, false, {
                                    fileName: "gossip.js",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "gossip.js",
                            lineNumber: 207,
                            columnNumber: 11
                        }, _this)
                    ]
                }, post.id, true, {
                    fileName: "gossip.js",
                    lineNumber: 195,
                    columnNumber: 9
                }, _this);
            }),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    backgroundColor: '#C0C0C0',
                    padding: '8px',
                    marginTop: '10px'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            display: 'flex',
                            gap: '5px'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "Previous Page"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 217,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "Next Page"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 218,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                style: buttonStyle,
                                children: "New Thread"
                            }, void 0, false, {
                                fileName: "gossip.js",
                                lineNumber: 219,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "gossip.js",
                        lineNumber: 216,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            fontSize: '11px',
                            marginTop: '8px',
                            textAlign: 'center',
                            color: '#000000'
                        },
                        children: "LOVELINE \xa9 1995 AOL Forums | All Rights Reserved | Terms of Service | Privacy Policy"
                    }, void 0, false, {
                        fileName: "gossip.js",
                        lineNumber: 221,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "gossip.js",
                lineNumber: 215,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "gossip.js",
        lineNumber: 160,
        columnNumber: 5
    }, _this);
};
