function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
import React, { useState, useEffect, useMemo } from 'react';
import storage from './1Storage.js';
import { SoundSystem, SOUND_EFFECTS } from './SoundSystem.js';
import styles from './10Styles.js';
var EmailClient = function(param) {
    var onClose = param.onClose;
    var _useState = _sliced_to_array(useState(null), 2), openAttachment = _useState[0], setOpenAttachment = _useState[1];
    var emailData = [
        {
            from: "ANONGAL",
            subject: "Tip 4 you",
            date: "March 16, 1995 1:45 PM",
            content: "Hi Detective,\n\nI have a tip for you regarding Victoria Mason's disappearance. I'm afraid to come forward publicly, but I know for a fact that at Stonehaven (that's what the Mason's call their ancestral family home) last night Victoria's father, family lawyer, and Victoria's personal assistant were on the property when she disappeared.\nI know because I was the person she called right before she disappeared. I know that puts me in a suspicious light, but I just want my friend to turn up safe!",
            triggerCondition: "Victoria Mason Photo"
        },
        {
            from: "Cindy",
            subject: "A Quick Chat About Office Tidiness & Punctuality",
            date: "March 16, 1995 2:15 PM",
            content: "Hi there,\n\nHope you're having a fabulous morning! Just a little note from Cin (trying it out—fun, right?!) about keeping our workspace as polished and professional as we all are. \n\nI've noticed your desk has been looking a bit cluttered lately—nothing major, of course! But a tidy space leads to a tidy mind, as they say. \n\nMaybe take a few minutes at the end of each day to straighten up? Would love to see us all embracing a neater, more zen environment!\n\nAlso, I happened to notice you've been rolling in a teensy bit late a few times this past week. I totally get it—mornings can be rough (trust me, my third cup of coffee is calling my name right now!). \nBut let's try to make sure we're all setting the right example by being on time and ready to rock!\nLet me know if you need anything from me—my door is always open.\n\nBest,\nCindy (\"Cin\")\nHuman Resources Associate\nGumshoe Detective Agency",
            triggerCondition: "Biscuit Photo"
        },
        {
            from: "Chief Karadec",
            subject: "Happy Computing!",
            date: "March 16, 1995 8:30 AM",
            content: "Dear Detective,\nWe hope you're enjoying your new, state-of-the-art computer courtesy of the mayor. Apparently our agency failed to solve a single case in 1994 - can we at least try to start off 1995 on the right foot?\n\nBest,\nChief Karadec, Lead Detective\nGumshoe Detective Agency"
        },
        {
            from: "Ryan Rivera",
            subject: "Wow this is cool!",
            date: "March 16, 1995 9:04 AM",
            content: "These new computers that the Gumshoe Detective Agency got for us sure are nifty! I've never had a computer before now. I was just reading an article that said the internet is a fad though, I'm inclined to agree... what are your thoughts?\n\nFrom,\nRyan Rivera, Detective\nGumshoe Detective Agency"
        },
        {
            from: "System Administrator",
            subject: "Welcome to Electronic Mail",
            date: "March 16, 1995 09:00 AM",
            content: "Dear User,\nThe Gumshoe Detective Agency is now utilizing CaseSolver2000 software. To solve your cases simply email CaseSolver2000@GumshoeDetectiveAgency.com with your theory and click send! \n\nIf you're correct, congratulations! You'll have solved Gumshoe's first ever case (our track record is horrible). If you're incorrect, no big deal, just try again!\n\nSincerely,\nSystem Administrator"
        },
        {
            from: "Chief Karadec",
            subject: "Interview Transcripts (Mason & Pestrichelli)",
            date: "March 16, 1995 3:30 PM",
            content: "Detective,\nHere are the transcripts from my interviews with Reginald Mason and Sofia Pestrichelli regarding the night Victoria Mason disappeared. Both of them were cagey, Mason especially. They both seem to be hiding something.\nMason is definitely hiding something—likely tied to SENTINEL and the reason Victoria withdrew that money. Pestrichelli is lying about when she left and knows more than she's letting on.\nThey both claim the lights were gone by the time they reached the front of the house. Convenient. Victoria was alone for only a few minutes, yet no one saw her leave, and Biscuit was found unharmed in the library.\nKeep investigating and let me know what you discover.\n– Chief Karadec",
            attachments: [
                {
                    name: "mason_interview.txt",
                    type: "text",
                    content: "Interview with Reginald Mason – CEO, Mason Industries\nMason remained composed but deflected often.\n**Chief Karadec:** Let's go over the timeline again. Where were you when Victoria disappeared?\n**Reginald Mason:** In the library. Sofia was with me. We were discussing business.\n**Chief Karadec:** What kind of business?\n**Reginald Mason:** The usual—acquisitions, expansion plans. Nothing pressing.\n**Chief Karadec:** And Victoria?\n**Reginald Mason:** She was there, but she wasn't part of the discussion. She was preoccupied with her dog.\n**Chief Karadec:** Biscuit?\n**Reginald Mason:** Yes. He wouldn't stop barking.\n**Chief Karadec:** What happened next?\n**Reginald Mason:** There were flashing lights outside. It looked like a malfunction with a power line or something. Sofia and I stepped out to check.\n**Chief Karadec:** And Victoria?\n**Reginald Mason:** She stayed behind. Biscuit was too worked up, and she didn't want to leave him alone.\n**Chief Karadec:** How long were you outside?\n**Reginald Mason:** A few minutes. The lights were gone by the time we got to the front of the house. We didn't see anything.\n**Chief Karadec:** And when you came back?\n(He hesitated, rubbing his temple.)\n**Reginald Mason:** Victoria was gone.\n**Chief Karadec:** Just like that?\n**Reginald Mason:** Just like that.\n**Chief Karadec:** The SENTINEL security system was deactivated for several minutes that night. You're telling me you have no idea why?\n(His jaw tightened.)\n**Reginald Mason:** If you have security concerns, talk to IT.\n**Chief Karadec:** They said only a high-level executive could override it.\n(Silence.)\n**Chief Karadec:** Reginald, is someone pressuring you?\n(He exhaled sharply, avoiding eye contact.)\n**Reginald Mason:** I don't have anything else to say."
                },
                {
                    name: "pestrichelli_interview.txt",
                    type: "text",
                    content: "Interview with Sofia Pestrichelli – VP of Acquisitions, Mason Industries\nPestrichelli arrived late and appeared irritated.\n**Chief Karadec:** You were with Reginald in the library when Victoria was last seen?\n**Sofia Pestrichelli:** Yes, we were discussing acquisitions.\n**Chief Karadec:** You both left to investigate the lights outside. What did you see?\n**Sofia Pestrichelli:** Nothing. By the time we got out there, the lights were gone. Probably a false alarm.\n**Chief Karadec:** When you came back, Victoria was gone. Did that seem strange to you?\n**Sofia Pestrichelli:** Of course, but she's an adult. Maybe she left on her own.\n**Chief Karadec:** There's no record of her leaving the estate.\n(She shifted in her seat.)\n**Sofia Pestrichelli:** I don't know what to tell you.\n**Chief Karadec:** You and Reginald were seen together at the holiday party, looking… close.\n(Her expression darkened.)\n**Sofia Pestrichelli:** Is this about Victoria or gossip?\n**Chief Karadec:** You tell me.\n(She crossed her arms.)\n**Sofia Pestrichelli:** I left the estate after midnight. That's all I know."
                }
            ],
            triggerCondition: "Sofia Pestrichelli Files Email"
        },
        {
            from: "Chief Karadec",
            subject: "Interesting Search Pattern Detected",
            date: "March 16, 1995 4:15 PM",
            content: "Detective,\nI've been monitoring your search activity and noticed you've researched all three key individuals: Angie Hamilton, Mickey Venuto, and Sofia Pestrichelli. Excellent work! This specific combination of names seems highly significant to our investigation.\nThese three individuals are connected to Victoria Mason and Mason Industries in ways that might explain her disappearance. The fact that you've identified this pattern shows we're on the right track.\nKeep digging and report back any findings that might help us understand what happened to Victoria Mason. I believe you're getting closer to the truth.\n– Chief Karadec",
            triggerCondition: "Search Terms Email"
        }
    ];
    // Calculate base emails once
    var baseEmails = useMemo(function() {
        return emailData.filter(function(email) {
            return !email.triggerCondition;
        });
    }, []);
    var _useState1 = _sliced_to_array(useState(null), 2), selectedEmail = _useState1[0], setSelectedEmail = _useState1[1];
    var _useState2 = _sliced_to_array(useState(function() {
        // Check evidence for conditional emails
        var evidence = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
        var evidenceTitles = evidence.map(function(item) {
            return item.title;
        });
        // Add conditional emails if their conditions are met
        var conditionalEmails = emailData.filter(function(email) {
            return email.triggerCondition && evidenceTitles.includes(email.triggerCondition);
        });
        return _to_consumable_array(baseEmails).concat(_to_consumable_array(conditionalEmails));
    }), 2), emails = _useState2[0], setEmails = _useState2[1];
    var _useState3 = _sliced_to_array(useState(function() {
        if (!localStorage.getItem('gameState')) {
            return baseEmails.length;
        }
        var readEmails = JSON.parse(localStorage.getItem('readEmails') || '[]');
        var emails = JSON.parse(localStorage.getItem('emailsState') || '[]');
        var totalEmails = baseEmails.length + emails.length;
        return totalEmails - readEmails.length;
    }), 2), unreadCount = _useState3[0], setUnreadCount = _useState3[1];
    // Effect to update unread count when evidence changes and update emails display
    useEffect(function() {
        var evidence = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
        var evidenceTitles = evidence.map(function(item) {
            return item.title;
        });
        var emailsState = JSON.parse(localStorage.getItem('emailsState') || '[]');
        var readEmails = JSON.parse(localStorage.getItem('readEmails') || '[]');
        console.log('EmailClient - evidence update effect triggered');
        console.log('Current evidence titles:', evidenceTitles);
        console.log('Current emailsState:', emailsState);
        // Update conditional emails based on evidence
        var conditionalEmails = emailData.filter(function(email) {
            // Special case for Search Terms Email
            if (email.triggerCondition === "Search Terms Email" && emailsState.includes("Search Terms Email")) {
                console.log("Search Terms Email direct match found in emailsState");
                return true;
            }
            // Check regular evidence-based triggers
            var matches = email.triggerCondition && evidenceTitles.includes(email.triggerCondition);
            console.log('Checking email with trigger "'.concat(email.triggerCondition, '" - Match: ').concat(matches));
            return matches;
        });
        console.log('Conditional emails based on evidence:', conditionalEmails.map(function(e) {
            return e.subject;
        }));
        // Update emails state
        setEmails(_to_consumable_array(baseEmails).concat(_to_consumable_array(conditionalEmails)));
        // Update unread count
        var totalEmails = baseEmails.length + conditionalEmails.length;
        setUnreadCount(totalEmails - readEmails.length);
        console.log('Updated unread count:', totalEmails - readEmails.length);
    }, [
        baseEmails.length,
        emailData
    ]);
    // Effect to update unread count when read emails change or new emails are added
    useEffect(function() {
        var handleStorageChange = function(event) {
            var _event_detail;
            console.log('EmailClient - storage event triggered');
            // Check if this is a force refresh event from Browser
            var isForceRefresh = ((_event_detail = event.detail) === null || _event_detail === void 0 ? void 0 : _event_detail.forceEmailRefresh) === true;
            if (isForceRefresh) {
                console.log("Force refresh triggered: ".concat(event.detail.reason || 'unknown reason'));
                // Perform a complete refresh of the emails list
                var evidence = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
                var evidenceTitles = evidence.map(function(item) {
                    return item.title;
                });
                var emailsState = JSON.parse(localStorage.getItem('emailsState') || '[]');
                // Reset conditional emails based on evidence and emailsState
                var directTriggers = emailData.filter(function(email) {
                    if (email.triggerCondition === "Search Terms Email" && emailsState.includes("Search Terms Email")) {
                        return true;
                    }
                    return email.triggerCondition && emailsState.includes(email.triggerCondition);
                });
                var evidenceTriggers = emailData.filter(function(email) {
                    return email.triggerCondition && evidenceTitles.includes(email.triggerCondition);
                });
                // Combine all conditional emails and remove duplicates
                var conditionalEmails = _to_consumable_array(new Set(_to_consumable_array(directTriggers).concat(_to_consumable_array(evidenceTriggers))));
                // Update emails state completely
                var allEmails = _to_consumable_array(baseEmails).concat(_to_consumable_array(conditionalEmails));
                console.log('Force refresh: Updating emails list with total count:', allEmails.length);
                setEmails(allEmails);
                // Play a notification sound if available
                try {
                    SoundSystem.play(SOUND_EFFECTS.NOTIFICATION);
                } catch (e) {
                    console.log('Sound system not available or error playing notification');
                }
            }
            var evidence1 = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
            var evidenceTitles1 = evidence1.map(function(item) {
                return item.title;
            });
            var emailsState1 = JSON.parse(localStorage.getItem('emailsState') || '[]');
            var readEmails = JSON.parse(localStorage.getItem('readEmails') || '[]');
            console.log('Storage event - emailsState:', emailsState1);
            console.log('Storage event - evidence titles:', evidenceTitles1);
            // Check for direct email triggers in emailsState
            var directTriggers1 = emailData.filter(function(email) {
                // Special case for Search Terms Email
                if (email.triggerCondition === "Search Terms Email" && emailsState1.includes("Search Terms Email")) {
                    console.log("Search Terms Email direct match found in emailsState during storage event");
                    return true;
                }
                // Regular direct trigger check
                var matches = email.triggerCondition && emailsState1.includes(email.triggerCondition);
                console.log('Checking direct trigger "'.concat(email.triggerCondition, '" - Match: ').concat(matches));
                return matches;
            });
            // Check for evidence-based triggers
            var evidenceTriggers1 = emailData.filter(function(email) {
                var matches = email.triggerCondition && evidenceTitles1.includes(email.triggerCondition);
                console.log('Checking evidence trigger "'.concat(email.triggerCondition, '" - Match: ').concat(matches));
                return matches;
            });
            // Combine all conditional emails
            var conditionalEmails1 = _to_consumable_array(new Set(_to_consumable_array(directTriggers1).concat(_to_consumable_array(evidenceTriggers1))));
            console.log('All conditional emails after storage event:', conditionalEmails1.map(function(e) {
                return e.subject;
            }));
            // Update emails state
            var allEmails1 = _to_consumable_array(baseEmails).concat(_to_consumable_array(conditionalEmails1));
            console.log('Setting emails state with total count:', allEmails1.length);
            setEmails(allEmails1);
            // Update unread count
            var totalEmails = baseEmails.length + conditionalEmails1.length;
            setUnreadCount(totalEmails - readEmails.length);
            console.log('Updated unread count after storage event:', totalEmails - readEmails.length);
        };
        console.log('Adding storage event listener to EmailClient');
        window.addEventListener('storage', handleStorageChange);
        return function() {
            console.log('Removing storage event listener from EmailClient');
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [
        baseEmails.length,
        emailData
    ]);
    // Log on mount for debugging
    useEffect(function() {
        console.log('EmailClient mounted');
        console.log('Base emails:', baseEmails.map(function(e) {
            return e.subject;
        }));
        // Check initial state
        var emailsState = JSON.parse(localStorage.getItem('emailsState') || '[]');
        console.log('Initial emailsState:', emailsState);
        // Check for Search Terms Email right on mount
        if (emailsState.includes('Search Terms Email')) {
            console.log('Search Terms Email found in initial emailsState, triggering update');
            setTimeout(function() {
                // Force component update
                var updatedEmails = _to_consumable_array(emails);
                setEmails(updatedEmails);
            }, 100);
        }
        return function() {
            console.log('EmailClient unmounted');
        };
    }, [
        baseEmails
    ]);
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.window,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: styles.windowHeader,
                children: [
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: "EMAIL"
                    }, void 0, false, {
                        fileName: "7EmailClient.js",
                        lineNumber: 337,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: onClose,
                        style: styles.closeButton,
                        children: "X"
                    }, void 0, false, {
                        fileName: "7EmailClient.js",
                        lineNumber: 338,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "7EmailClient.js",
                lineNumber: 336,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    display: 'flex',
                    height: 'calc(100% - 30px)',
                    backgroundColor: '#D4D0C8'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            width: '200px',
                            borderRight: '2px solid #808080',
                            padding: '10px'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    padding: '5px 10px',
                                    backgroundColor: '#000080',
                                    color: '#FFFFFF',
                                    marginBottom: '5px',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                },
                                children: [
                                    "Inbox (",
                                    unreadCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "7EmailClient.js",
                                lineNumber: 350,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                },
                                children: "Sent"
                            }, void 0, false, {
                                fileName: "7EmailClient.js",
                                lineNumber: 360,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                },
                                children: "Drafts"
                            }, void 0, false, {
                                fileName: "7EmailClient.js",
                                lineNumber: 367,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "7EmailClient.js",
                        lineNumber: 345,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    borderBottom: '2px solid #808080',
                                    padding: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("button", {
                                        style: {
                                            backgroundColor: '#D4D0C8',
                                            border: '2px solid #808080',
                                            padding: '5px 10px',
                                            marginRight: '10px',
                                            cursor: 'pointer'
                                        },
                                        children: "New Message"
                                    }, void 0, false, {
                                        fileName: "7EmailClient.js",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("button", {
                                        style: {
                                            backgroundColor: '#D4D0C8',
                                            border: '2px solid #808080',
                                            padding: '5px 10px',
                                            cursor: 'pointer'
                                        },
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "7EmailClient.js",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "7EmailClient.js",
                                lineNumber: 380,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    flex: 1,
                                    backgroundColor: '#FFFFFF',
                                    padding: '10px',
                                    overflow: 'auto'
                                },
                                children: [
                                    _to_consumable_array(emails).sort(function(a, b) {
                                        return new Date(b.date) - new Date(a.date);
                                    }).map(function(email, index) {
                                        return /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                padding: '10px',
                                                borderBottom: '1px solid #D4D0C8',
                                                cursor: 'pointer',
                                                backgroundColor: selectedEmail === email ? '#D4D0C8' : JSON.parse(localStorage.getItem('readEmails') || '[]').includes(email.date) ? '#FFFFFF' : '#F0F8FF'
                                            },
                                            onClick: function() {
                                                if (selectedEmail !== email) {
                                                    var readEmails = JSON.parse(localStorage.getItem('readEmails') || '[]');
                                                    if (!readEmails.includes(email.date)) {
                                                        readEmails.push(email.date);
                                                        localStorage.setItem('readEmails', JSON.stringify(readEmails));
                                                        setUnreadCount(function(prev) {
                                                            return Math.max(0, prev - 1);
                                                        });
                                                        // Dispatch storage event for other components
                                                        window.dispatchEvent(new Event('storage'));
                                                    }
                                                    setSelectedEmail(email);
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px'
                                                    },
                                                    children: [
                                                        !JSON.parse(localStorage.getItem('readEmails') || '[]').includes(email.date) && /*#__PURE__*/ _jsxDEV("div", {
                                                            style: {
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                backgroundColor: '#0000FF',
                                                                marginRight: '8px',
                                                                display: 'inline-block'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "7EmailClient.js",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, _this),
                                                        "From: ",
                                                        email.from
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "7EmailClient.js",
                                                    lineNumber: 438,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: {
                                                        color: '#000080',
                                                        marginBottom: '5px'
                                                    },
                                                    children: [
                                                        "Subject: ",
                                                        email.subject
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "7EmailClient.js",
                                                    lineNumber: 456,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    style: {
                                                        color: '#666666',
                                                        fontSize: '12px'
                                                    },
                                                    children: [
                                                        "Date: ",
                                                        email.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "7EmailClient.js",
                                                    lineNumber: 462,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, index, true, {
                                            fileName: "7EmailClient.js",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, _this);
                                    }),
                                    selectedEmail && /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            margin: '20px',
                                            padding: '20px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #808080',
                                            fontFamily: '"Courier New", monospace'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    borderBottom: '1px solid #808080',
                                                    paddingBottom: '10px',
                                                    marginBottom: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        style: {
                                                            fontWeight: 'bold'
                                                        },
                                                        children: [
                                                            "From: ",
                                                            selectedEmail.from
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "7EmailClient.js",
                                                        lineNumber: 483,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        children: [
                                                            "Subject: ",
                                                            selectedEmail.subject
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "7EmailClient.js",
                                                        lineNumber: 484,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        children: [
                                                            "Date: ",
                                                            selectedEmail.date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "7EmailClient.js",
                                                        lineNumber: 485,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "7EmailClient.js",
                                                lineNumber: 478,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    whiteSpace: 'pre-wrap',
                                                    lineHeight: '1.5'
                                                },
                                                children: selectedEmail.content.replace(/(Dear [^,]+,)/g, "$1\n\n").replace(/(Best regards,)/g, "\n\n$1")
                                            }, void 0, false, {
                                                fileName: "7EmailClient.js",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, _this),
                                            selectedEmail.attachments && selectedEmail.attachments.length > 0 && /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    marginTop: '20px',
                                                    borderTop: '1px solid #808080',
                                                    paddingTop: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            marginBottom: '10px'
                                                        },
                                                        children: "Attachments:"
                                                    }, void 0, false, {
                                                        fileName: "7EmailClient.js",
                                                        lineNumber: 506,
                                                        columnNumber: 21
                                                    }, _this),
                                                    selectedEmail.attachments.map(function(attachment, index) {
                                                        return /*#__PURE__*/ _jsxDEV("div", {
                                                            style: {
                                                                padding: '5px 10px',
                                                                margin: '5px 0',
                                                                backgroundColor: '#f0f0f0',
                                                                border: '1px solid #ccc',
                                                                cursor: 'pointer',
                                                                display: 'inline-block',
                                                                marginRight: '10px'
                                                            },
                                                            onClick: function() {
                                                                setOpenAttachment(attachment);
                                                            },
                                                            children: [
                                                                "\uD83D\uDCC4 ",
                                                                attachment.name
                                                            ]
                                                        }, index, true, {
                                                            fileName: "7EmailClient.js",
                                                            lineNumber: 508,
                                                            columnNumber: 23
                                                        }, _this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "7EmailClient.js",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "7EmailClient.js",
                                        lineNumber: 471,
                                        columnNumber: 15
                                    }, _this),
                                    openAttachment && /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            position: 'fixed',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '80%',
                                            maxWidth: '800px',
                                            maxHeight: '80vh',
                                            backgroundColor: '#FFFFFF',
                                            border: '3px double #000080',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                                            zIndex: 1000,
                                            overflow: 'auto',
                                            fontFamily: '"Courier New", monospace'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    backgroundColor: '#000080',
                                                    color: '#FFFFFF',
                                                    padding: '5px 10px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        style: {
                                                            fontWeight: 'bold'
                                                        },
                                                        children: [
                                                            "\uD83D\uDCC4 ",
                                                            openAttachment.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "7EmailClient.js",
                                                        lineNumber: 555,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ _jsxDEV("button", {
                                                        onClick: function() {
                                                            return setOpenAttachment(null);
                                                        },
                                                        style: {
                                                            backgroundColor: '#D4D0C8',
                                                            border: '1px solid #808080',
                                                            cursor: 'pointer',
                                                            color: '#000',
                                                            fontWeight: 'bold'
                                                        },
                                                        children: "X"
                                                    }, void 0, false, {
                                                        fileName: "7EmailClient.js",
                                                        lineNumber: 558,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "7EmailClient.js",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    padding: '15px',
                                                    whiteSpace: 'pre-wrap',
                                                    lineHeight: '1.5',
                                                    maxHeight: 'calc(80vh - 40px)',
                                                    overflow: 'auto'
                                                },
                                                children: openAttachment.content
                                            }, void 0, false, {
                                                fileName: "7EmailClient.js",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "7EmailClient.js",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "7EmailClient.js",
                                lineNumber: 402,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "7EmailClient.js",
                        lineNumber: 375,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "7EmailClient.js",
                lineNumber: 340,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "7EmailClient.js",
        lineNumber: 335,
        columnNumber: 5
    }, _this);
};
export default EmailClient;
