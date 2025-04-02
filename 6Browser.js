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
import React, { useState, useEffect } from 'react';
import storage from './1Storage.js';
import styles from './10Styles.js';
import { articlesData } from './11articlesData.js';
import { bankData } from './12bankData.js';
import { stonehavenData } from './13stonehavenData.js';
import { masonIndustriesData } from './14masonIndustriesData.js';
import { techfusionData, renderTechFusionArticle } from './15techfusionData.js';
import { atlanticGazetteData } from './atlanticgazette.js';
import { reginaldMasonData } from './reginaldarticle.js';
import { usernameData } from './usernames.js';
import { createGossipContent } from './gossip.js';
import MasonIndustries from './17masonIndustriesWebsite.js';
import { textContent } from './Text.js';
import { renderDefaultArticle } from './default.js';
import { academicStyles } from './academicStyles.js';
import { sportsStyles } from './sportsStyles.js';
var Browser = function(param) {
    var onClose = param.onClose;
    var _useState = _sliced_to_array(useState(null), 2), currentPage = _useState[0], setCurrentPage = _useState[1];
    var _useState1 = _sliced_to_array(useState(''), 2), searchQuery = _useState1[0], setSearchQuery = _useState1[1];
    var _useState2 = _sliced_to_array(useState([]), 2), searchResults = _useState2[0], setSearchResults = _useState2[1];
    var _useState3 = _sliced_to_array(useState(false), 2), hasSearched = _useState3[0], setHasSearched = _useState3[1];
    var _useState4 = _sliced_to_array(useState([]), 2), evidenceList = _useState4[0], setEvidenceList = _useState4[1];
    // Load evidence files from localStorage
    useEffect(function() {
        var loadEvidenceFiles = function() {
            var files = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
            setEvidenceList(files);
        };
        // Initial load
        loadEvidenceFiles();
        // Listen for changes to evidence files
        var handleStorageChange = function() {
            return loadEvidenceFiles();
        };
        window.addEventListener('storage', handleStorageChange);
        return function() {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    // Effect to handle new email when evidence is added
    useEffect(function() {
        var savedEmails = JSON.parse(localStorage.getItem('readEmails') || '[]');
        var emails = JSON.parse(localStorage.getItem('emailsState') || '[]');
        if (evidenceList.some(function(item) {
            return item.title === 'Victoria Mason Photo';
        })) {
            if (!emails.includes('Victoria Mason Photo Email')) {
                var newEmailsState = _to_consumable_array(emails).concat([
                    'Victoria Mason Photo Email'
                ]);
                localStorage.setItem('emailsState', JSON.stringify(newEmailsState));
                // Trigger storage event to update unread count
                window.dispatchEvent(new Event('storage'));
            }
        }
        if (evidenceList.some(function(item) {
            return item.title === 'Mickey Venuto Photo' && item.type === 'image';
        })) {
            if (!emails.includes('Mickey Venuto Photo Email')) {
                var newEmailsState1 = _to_consumable_array(emails).concat([
                    'Mickey Venuto Photo Email'
                ]);
                localStorage.setItem('emailsState', JSON.stringify(newEmailsState1));
                // Trigger storage event to update unread count
                window.dispatchEvent(new Event('storage'));
            }
        }
    }, [
        evidenceList
    ]);
    var handleInputChange = function(e) {
        var value = e.target.value;
        console.log('Search input changed:', value);
        setSearchQuery(value);
    };
    var handleSearch = function() {
        var query = searchQuery.toLowerCase().trim();
        console.log('Processing search for query:', query);
        if (!query) {
            console.log('Empty query, returning early');
            return;
        }
        // Force refresh mechanism for EmailClient
        var triggerEmailRefresh = function(reason) {
            console.log("Triggering email refresh: ".concat(reason));
            // Create a custom event with a flag to force refresh
            var forceRefreshEvent = new CustomEvent('storage', {
                detail: {
                    forceEmailRefresh: true,
                    reason: reason
                }
            });
            window.dispatchEvent(forceRefreshEvent);
        };
        setCurrentPage(null);
        setHasSearched(true);
        // Check for specific search terms that should trigger an email
        var triggerTerms = [
            'angie hamilton',
            'mvenuto65',
            'sofia pestrichelli'
        ];
        console.log('Checking search term triggers for:', query.toLowerCase());
        console.log('Trigger terms:', triggerTerms);
        // Track which people have been searched for previously
        var searchedTerms = JSON.parse(localStorage.getItem('searchedTerms') || '[]');
        // Check if the current search includes any of the trigger terms
        var currentMatchedTerm = triggerTerms.find(function(term) {
            return query.toLowerCase().includes(term) || term === 'angie hamilton' && query.toLowerCase().includes('angie hamtilton') // Handle typo case
            ;
        });
        // If we found a match and it's not already in our tracked terms, add it
        if (currentMatchedTerm && !searchedTerms.includes(currentMatchedTerm)) {
            var updatedSearchedTerms = _to_consumable_array(searchedTerms).concat([
                currentMatchedTerm
            ]);
            localStorage.setItem('searchedTerms', JSON.stringify(updatedSearchedTerms));
            console.log("Added ".concat(currentMatchedTerm, " to searched terms. Now searched: ").concat(updatedSearchedTerms.join(', ')));
            // Check if all three required terms have been searched
            var hasSearchedAllTerms = triggerTerms.every(function(term) {
                return updatedSearchedTerms.includes(term);
            });
            console.log('Has searched all required terms:', hasSearchedAllTerms);
            // Only proceed with email if all three terms have been searched
            if (hasSearchedAllTerms) {
                // Force email refresh for these high-priority search terms
                triggerEmailRefresh('all search terms matched');
                // Check if the email already exists
                var emails = JSON.parse(localStorage.getItem('emailsState') || '[]');
                console.log('Current email state:', emails);
                // Add email trigger directly to evidence as well to ensure detection
                var evidence = JSON.parse(localStorage.getItem('evidenceFiles') || '[]');
                console.log('Current evidence:', evidence.map(function(i) {
                    return i.title;
                }));
                if (!emails.includes('Search Terms Email')) {
                    var newEmailsState = _to_consumable_array(emails).concat([
                        'Search Terms Email'
                    ]);
                    console.log('Adding Search Terms Email to email state:', newEmailsState);
                    localStorage.setItem('emailsState', JSON.stringify(newEmailsState));
                    // Trigger storage event to update unread count
                    window.dispatchEvent(new Event('storage'));
                    console.log('Storage event dispatched');
                    // Add search terms as evidence trigger for the email client to detect
                    if (!evidence.some(function(item) {
                        return item.title === 'Search Terms Email';
                    })) {
                        var updatedEvidence = _to_consumable_array(evidence).concat([
                            {
                                id: Date.now(),
                                title: 'Search Terms Email',
                                type: 'trigger',
                                date: new Date().toISOString()
                            }
                        ]);
                        localStorage.setItem('evidenceFiles', JSON.stringify(updatedEvidence));
                        console.log('Added Search Terms Email to evidence triggers');
                    }
                    // Show notification to the player that new email arrived
                    setTimeout(function() {
                        alert("You have received a new email from Chief Karadec.");
                        console.log('Email notification alert shown to user');
                    }, 500);
                } else {
                    console.log('Search Terms Email already exists in state, skipping');
                }
            }
        }
        console.log('Continuing search for other content...');
        var results = []; // Initialize results array first
        // Check for "FlickBuster" search term
        if (query === 'flickbuster') {
            results.push(textContent.FlickBuster);
        }
        // Check for "Mickey Venuto" search term
        if (query.toLowerCase().includes('mickey venuto')) {
            results.push(textContent.MickeyVenuto);
        }
        // Check for "Sentinel" search term
        if (query.toLowerCase().includes('sentinel')) {
            results.push(techfusionData.createSentinelArticleContent());
        }
        // Check for "MVenuto65" search term 
        if (query === 'mvenuto65') {
            results.push(createGossipContent());
        }
        // Check for "Angie Hamilton" search term
        if (query.toLowerCase().includes('angie hamilton')) {
            results.push({
                title: "Angie Hamilton Senior Thesis",
                type: "academic",
                date: "1991",
                content: '<div style="'.concat(Object.entries(academicStyles.container).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n          <div style="').concat(Object.entries(academicStyles.watermark).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">ACADEMIC PAPER</div>\n          \n          <div style="').concat(Object.entries(academicStyles.header).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n            <div style="').concat(Object.entries(academicStyles.university).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n              <div style="').concat(Object.entries(academicStyles.universityLogo).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">NU</div>\n              <div style="').concat(Object.entries(academicStyles.universityName).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Northeastern University • Department of Computer Engineering</div>\n            </div>\n            \n            <h1 style="').concat(Object.entries(academicStyles.paperTitle).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">GUARDIAN: A Predictive Framework for Digital and Physical Security</h1>\n            <h2 style="').concat(Object.entries(academicStyles.author).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Angie Hamilton</h2>\n            <div style="').concat(Object.entries(academicStyles.date).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Senior Thesis, 1991</div>\n          </div>\n          \n          <div style="').concat(Object.entries(academicStyles.abstract).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n            <span style="').concat(Object.entries(academicStyles.abstractTitle).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Abstract:</span>\n            Security systems must evolve from being reactive to proactive, anticipating breaches before they occur.\n          </div>\n          \n          <div style="').concat(Object.entries(academicStyles.content).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n            <div style="').concat(Object.entries(academicStyles.section).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n              <p style="').concat(Object.entries(academicStyles.paragraph).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                GUARDIAN integrates real-time monitoring, pattern recognition, and adaptive encryption to create a self-learning security framework. By analyzing access logs, user behavior, and environmental factors, GUARDIAN identifies potential threats before they manifest.\n              </p>\n              \n              <p style="').concat(Object.entries(academicStyles.paragraph).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                This system combines both digital and physical security, ensuring that unauthorized access is not only detected but predicted. The encryption protocols adjust dynamically based on threat assessments, making it increasingly difficult for attackers to decrypt security measures. GUARDIAN continuously learns from new data, refining its predictive capabilities and improving its response time.\n              </p>\n              \n              <p style="').concat(Object.entries(academicStyles.paragraph).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                Prototype testing indicates a 70% improvement in breach detection and response speed compared to static security systems. With further development, GUARDIAN has the potential to redefine corporate and government security systems, shifting from a reactive defense to a proactive, predictive model.\n              </p>\n            </div>\n            \n            <div style="').concat(Object.entries(academicStyles.citation).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n              Note: (Angie Hamilton is a senior in the Computer Engineering program and a starting midfielder for the Northeastern Maroon Geese FC)\n            </div>\n          </div>\n          \n          <div style="').concat(Object.entries(academicStyles.footer).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n            Northeastern University • Computer Engineering Department • 1991\n          </div>\n          \n          <div style="').concat(Object.entries(academicStyles.pageNumber).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">1</div>\n        </div>')
            });
        }
        // Check for Northeastern Maroon Geese FC, Maroon Geese FC, or The Phantom search terms
        if (query.toLowerCase().includes('northeastern maroon geese fc') || query.toLowerCase().includes('maroon geese fc') || query.toLowerCase().includes('the phantom')) {
            results.push({
                title: "Northeastern University Athletics: Player Spotlight",
                type: "message",
                date: "1990",
                content: '<div style="'.concat(Object.entries(sportsStyles.container).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n          <div style="').concat(Object.entries(sportsStyles.header).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n            <div style="').concat(Object.entries(sportsStyles.headerPattern).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '"></div>\n            <div style="').concat(Object.entries(sportsStyles.universityLogo).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">NU</div>\n            <div style="').concat(Object.entries(sportsStyles.soccerIcon).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">⚽</div>\n            <h1 style="').concat(Object.entries(sportsStyles.profileTitle).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">MAROON GEESE FC PLAYER PROFILE</h1>\n            <h2 style="').concat(Object.entries(sportsStyles.profileSubtitle).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">"THE PHANTOM" - ANGIE HAMILTON</h2>\n          </div>\n          \n          <div style="').concat(Object.entries(sportsStyles.content).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n            <p style="').concat(Object.entries(sportsStyles.paragraph).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n              It looks like Angie Hamilton played soccer at Northeastern University, on the team the Maroon Geese FC, and made quite an impression as a starting midfielder. Known as "The Phantom" for her ability to slip past defenders without them even realizing it, Hamilton\'s skill on the field is hard to match. Her quick thinking and agility have made her a standout player throughout her college career. Off the field, she\'s also excelling in Computer Engineering, proving that she\'s just as sharp in the classroom as she is on the pitch.\n            </p>\n            \n            <div style="').concat(Object.entries(sportsStyles.playerInfo).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n              <div style="').concat(Object.entries(sportsStyles.playerData).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                <div style="').concat(Object.entries(sportsStyles.stat).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                  <span style="').concat(Object.entries(sportsStyles.statLabel).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Position</span>\n                  <span style="').concat(Object.entries(sportsStyles.statValue).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Midfielder</span>\n                </div>\n                <div style="').concat(Object.entries(sportsStyles.stat).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                  <span style="').concat(Object.entries(sportsStyles.statLabel).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Class</span>\n                  <span style="').concat(Object.entries(sportsStyles.statValue).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Senior</span>\n                </div>\n                <div style="').concat(Object.entries(sportsStyles.stat).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                  <span style="').concat(Object.entries(sportsStyles.statLabel).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Major</span>\n                  <span style="').concat(Object.entries(sportsStyles.statValue).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Comp Eng</span>\n                </div>\n                <div style="').concat(Object.entries(sportsStyles.stat).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                  <span style="').concat(Object.entries(sportsStyles.statLabel).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Goals</span>\n                  <span style="').concat(Object.entries(sportsStyles.statValue).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">15</span>\n                </div>\n                <div style="').concat(Object.entries(sportsStyles.stat).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                  <span style="').concat(Object.entries(sportsStyles.statLabel).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Assists</span>\n                  <span style="').concat(Object.entries(sportsStyles.statValue).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">22</span>\n                </div>\n                <div style="').concat(Object.entries(sportsStyles.stat).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n                  <span style="').concat(Object.entries(sportsStyles.statLabel).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">Games</span>\n                  <span style="').concat(Object.entries(sportsStyles.statValue).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">42</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div style="').concat(Object.entries(sportsStyles.footer).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    return "".concat(key.replace(/([A-Z])/g, '-$1').toLowerCase(), ":").concat(value);
                }).join(';'), '">\n            Northeastern University Athletics Department • Maroon Geese FC • 1990\n          </div>\n        </div>')
            });
        }
        // Get articles data
        var articles = articlesData.createArticlesData(evidenceList, setEvidenceList);
        // Search logic
        console.log('Starting search with articles:', Object.keys(articles));
        // Check for various keywords and add matching articles
        if (query.toLowerCase().includes('stonehaven')) {
            console.log('Stonehaven match found');
            results = _to_consumable_array(results).concat(_to_consumable_array(articles.stonehaven));
        }
        if (query.toLowerCase().includes('newport bank')) {
            results = _to_consumable_array(results).concat(_to_consumable_array(articles["newport bank"]));
        }
        if (query.includes('victoria mason')) {
            console.log('Victoria Mason match found');
            results = _to_consumable_array(results).concat(_to_consumable_array(articles.victoria));
        }
        if (query.toLowerCase().includes('reginald mason') || query.toLowerCase().includes('sofia pestrichelli')) {
            console.log('Reginald Mason or Sofia Pestrichelli match found');
            results = _to_consumable_array(results).concat([
                reginaldMasonData.createReginaldMasonArticle()
            ]);
            // If specifically searching for Sofia Pestrichelli, trigger email with attachments
            if (query.toLowerCase().includes('sofia pestrichelli')) {
                console.log('Sofia Pestrichelli search detected, triggering email');
                // Force email refresh specifically for Sofia Pestrichelli search
                triggerEmailRefresh('sofia pestrichelli search');
                // Check if the email already exists
                var emails1 = JSON.parse(localStorage.getItem('emailsState') || '[]');
                if (!emails1.includes('Sofia Pestrichelli Files Email')) {
                    var newEmailsState1 = _to_consumable_array(emails1).concat([
                        'Sofia Pestrichelli Files Email'
                    ]);
                    localStorage.setItem('emailsState', JSON.stringify(newEmailsState1));
                    // Force immediate update to EmailClient
                    storage.setEmailsState(newEmailsState1);
                    // Make sure the trigger condition is matched in the evidence list for the email
                    var evidence1 = storage.getEvidence();
                    if (!evidence1.some(function(item) {
                        return item.title === 'Sofia Pestrichelli Files Email';
                    })) {
                        var updatedEvidence1 = _to_consumable_array(evidence1).concat([
                            {
                                title: 'Sofia Pestrichelli Files Email',
                                type: 'trigger'
                            }
                        ]);
                        storage.setEvidence(updatedEvidence1);
                    }
                    // Trigger storage event to update email client
                    window.dispatchEvent(new Event('storage'));
                    // Show notification to the player that new email arrived
                    setTimeout(function() {
                        alert("You have received a new email from Chief Karadec with interview transcripts.");
                    }, 500);
                } else {
                    console.log('Sofia Pestrichelli email already exists in state:', emails1);
                }
            }
        }
        if (query.includes('mason industries')) {
            console.log('Mason Industries match found');
            results = [
                {
                    title: "Mason Industries Corporate Website",
                    type: "Website",
                    date: "1995-03-15",
                    content: /*#__PURE__*/ _jsxDEV(MasonIndustries, {
                        onClose: function() {
                            return setCurrentPage(null);
                        }
                    }, void 0, false, {
                        fileName: "6Browser.js",
                        lineNumber: 365,
                        columnNumber: 20
                    }, _this),
                    isLink: true
                },
                techfusionData.createSentinelArticleContent(),
                reginaldMasonData.createReginaldMasonArticle()
            ];
        }
        if (query.toLowerCase().includes('techfusion')) {
            results = _to_consumable_array(results).concat(_to_consumable_array(articles.techfusion));
        }
        if (query.toLowerCase().includes('security') || query.toLowerCase().includes('digital')) {
            results.push(_object_spread_props(_object_spread({}, atlanticGazetteData.createAtlanticGazetteContent()), {
                source: 'ATLANTIC GAZETTE'
            }));
        }
        // Check for specific usernames
        var lowercaseUsernames = [
            'jameson89',
            'insiderinfo',
            'bizwatcher',
            'skeptic101',
            'rhodeislander77'
        ];
        if (lowercaseUsernames.includes(query.toLowerCase())) {
            results.push(usernameData.createUsernameMessage(query));
        }
        console.log('Final search results:', results);
        setSearchResults(results);
        console.log('Search results state updated:', results.length, 'results');
    };
    var handlePageClick = function(page) {
        if (page.isLink && page.title === 'Newport Bank Homepage') {
            setCurrentPage(_object_spread_props(_object_spread({}, page), {
                content: bankData.createBankContent(evidenceList, setEvidenceList).content
            }));
        } else {
            if (page.title === 'Hidden Histories: The Architecture of Stonehaven Estate') {
                setCurrentPage(_object_spread_props(_object_spread({}, page), {
                    content: stonehavenData.createStonehavenContent().content
                }));
            } else {
                setCurrentPage(page);
            }
        }
    };
    var renderContent = function() {
        if (currentPage) {
            // Special formatting for Mason Industries article
            if (currentPage.title.includes('Mason Industries Reports Groundbreaking Security Advances')) {
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
                                cursor: 'pointer',
                                margin: '10px'
                            },
                            children: "← BACK"
                        }, void 0, false, {
                            fileName: "6Browser.js",
                            lineNumber: 415,
                            columnNumber: 13
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
                                        fileName: "6Browser.js",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, _this),
                                    " ",
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        style: {
                                            color: '#006400'
                                        },
                                        children: "INSIDER"
                                    }, void 0, false, {
                                        fileName: "6Browser.js",
                                        lineNumber: 447,
                                        columnNumber: 66
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "6Browser.js",
                                lineNumber: 433,
                                columnNumber: 15
                            }, _this)
                        }, void 0, false, {
                            fileName: "6Browser.js",
                            lineNumber: 427,
                            columnNumber: 13
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
                                    fileName: "6Browser.js",
                                    lineNumber: 462,
                                    columnNumber: 15
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
                                    fileName: "6Browser.js",
                                    lineNumber: 475,
                                    columnNumber: 15
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
                                            fileName: "6Browser.js",
                                            lineNumber: 494,
                                            columnNumber: 17
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
                                                        fileName: "6Browser.js",
                                                        lineNumber: 515,
                                                        columnNumber: 21
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "6Browser.js",
                                                    lineNumber: 506,
                                                    columnNumber: 19
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
                                                    fileName: "6Browser.js",
                                                    lineNumber: 517,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "6Browser.js",
                                            lineNumber: 505,
                                            columnNumber: 17
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
                                                            fileName: "6Browser.js",
                                                            lineNumber: 540,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            style: {
                                                                fontSize: '10px',
                                                                fontWeight: 'bold'
                                                            },
                                                            children: "STOCKS"
                                                        }, void 0, false, {
                                                            fileName: "6Browser.js",
                                                            lineNumber: 541,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "6Browser.js",
                                                    lineNumber: 535,
                                                    columnNumber: 19
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
                                                            fileName: "6Browser.js",
                                                            lineNumber: 548,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            style: {
                                                                fontSize: '10px',
                                                                fontWeight: 'bold'
                                                            },
                                                            children: "MARKET"
                                                        }, void 0, false, {
                                                            fileName: "6Browser.js",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "6Browser.js",
                                                    lineNumber: 543,
                                                    columnNumber: 19
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
                                                            fileName: "6Browser.js",
                                                            lineNumber: 556,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            style: {
                                                                fontSize: '10px',
                                                                fontWeight: 'bold'
                                                            },
                                                            children: "TECH"
                                                        }, void 0, false, {
                                                            fileName: "6Browser.js",
                                                            lineNumber: 557,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "6Browser.js",
                                                    lineNumber: 551,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "6Browser.js",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "6Browser.js",
                                    lineNumber: 485,
                                    columnNumber: 15
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
                                            fileName: "6Browser.js",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, _this),
                                        " |",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: "MARKETS"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 576,
                                            columnNumber: 17
                                        }, _this),
                                        " |",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: "TECH"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, _this),
                                        " |",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: "FINANCE"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 578,
                                            columnNumber: 17
                                        }, _this),
                                        " |",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: "STOCKS"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 579,
                                            columnNumber: 17
                                        }, _this),
                                        " |",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: "ANALYSIS"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            style: {
                                                marginLeft: 'auto',
                                                fontSize: '10px',
                                                fontStyle: 'italic'
                                            },
                                            children: "June 15, 1982 Edition"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "6Browser.js",
                                    lineNumber: 561,
                                    columnNumber: 15
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
                                            children: "Mason Industries Reports Groundbreaking Security Advances"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            style: {
                                                fontSize: '14px',
                                                color: '#555',
                                                marginBottom: '20px'
                                            },
                                            children: "Business Insider | June 15, 1982"
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 586,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: "Mason Industries unveiled its revolutionary SENTINEL security system today, marking a major breakthrough in digital protection technology. The system, developed under the guidance of CEO Reginald Mason, incorporates advanced AI algorithms to detect and neutralize cyber threats in real-time."
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 588,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: "The company's dedication to innovation has led to a 300% increase in government contracts since 1980. Industry experts note that Mason's strategic focus on combining traditional defense capabilities with cutting-edge computer security has positioned the company as a leader in the rapidly evolving tech landscape."
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: "The announcement comes amid speculation about Mason Industries' classified research division, which has reportedly made significant strides in quantum encryption technology. Sources suggest these developments could reshape the future of digital security."
                                        }, void 0, false, {
                                            fileName: "6Browser.js",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "6Browser.js",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "6Browser.js",
                            lineNumber: 450,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "6Browser.js",
                    lineNumber: 414,
                    columnNumber: 11
                }, _this);
            }
            // Special formatting for TechFusion article
            // Use the TechFusion article renderer from 15techfusionData.js
            var techFusionArticle = renderTechFusionArticle(currentPage, setCurrentPage);
            if (techFusionArticle) {
                return techFusionArticle;
            }
            // Use the extracted default formatting from default.js
            return renderDefaultArticle(currentPage, setCurrentPage);
        }
        return /*#__PURE__*/ _jsxDEV("div", {
            style: _object_spread_props(_object_spread({}, styles.browserContent), {
                backgroundColor: '#fff'
            }),
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    style: styles.askHeader,
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: styles.askTitle,
                            children: /*#__PURE__*/ _jsxDEV("img", {
                                src: "https://rosebud.ai/assets/ultra.png?GNTo",
                                style: styles.ultraLogo,
                                alt: "ULTRA VISTA"
                            }, void 0, false, {
                                fileName: "6Browser.js",
                                lineNumber: 613,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "6Browser.js",
                            lineNumber: 612,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("form", {
                            onSubmit: function(e) {
                                e.preventDefault();
                                handleSearch();
                            },
                            style: {
                                display: 'flex',
                                gap: '10px',
                                width: '100%',
                                maxWidth: '600px',
                                margin: '0 auto'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        flex: 1,
                                        display: 'flex'
                                    },
                                    children: /*#__PURE__*/ _jsxDEV("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: handleInputChange,
                                        placeholder: "Type search keywords here...",
                                        style: {
                                            width: '100%',
                                            padding: '8px 12px',
                                            border: '1px solid #000',
                                            backgroundColor: '#fff',
                                            fontSize: '1em',
                                            color: '#000',
                                            outline: 'none'
                                        },
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "6Browser.js",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "6Browser.js",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    type: "submit",
                                    onClick: function(e) {
                                        e.preventDefault();
                                        handleSearch();
                                    },
                                    style: {
                                        padding: '8px 16px',
                                        backgroundColor: '#D4D0C8',
                                        color: '#000',
                                        border: '1px solid #808080',
                                        cursor: 'pointer',
                                        fontSize: '1em',
                                        fontWeight: 'bold'
                                    },
                                    children: "SEARCH"
                                }, void 0, false, {
                                    fileName: "6Browser.js",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "6Browser.js",
                            lineNumber: 619,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "6Browser.js",
                    lineNumber: 611,
                    columnNumber: 9
                }, _this),
                searchResults.length > 0 && searchQuery && /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        margin: '15px',
                        padding: '20px',
                        background: '#fff',
                        color: '#000',
                        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
                        maxHeight: 'calc(100% - 140px)',
                        overflow: 'auto'
                    },
                    children: searchResults.map(function(result, index) {
                        return /*#__PURE__*/ _jsxDEV("div", {
                            onClick: function() {
                                return result.type !== 'message' && handlePageClick(result);
                            },
                            style: {
                                padding: '15px',
                                borderBottom: '1px solid #ccc',
                                cursor: result.type !== 'message' ? 'pointer' : './default.js',
                                textAlign: result.type === 'message' ? 'center' : 'left'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        color: '#000080',
                                        fontSize: '14px',
                                        marginBottom: '5px',
                                        fontWeight: 'bold',
                                        textAlign: result.title === 'Angie Hamilton Senior Thesis' || result.title === 'Northeastern University Athletics: Player Spotlight' ? 'center' : 'left'
                                    },
                                    children: result.title
                                }, void 0, false, {
                                    fileName: "6Browser.js",
                                    lineNumber: 694,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        color: '#444',
                                        fontSize: '13px'
                                    },
                                    children: result.type === 'message' || result.type === 'academic' ? /*#__PURE__*/ _jsxDEV("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: result.content
                                        }
                                    }, void 0, false, {
                                        fileName: "6Browser.js",
                                        lineNumber: 708,
                                        columnNumber: 23
                                    }, _this) : typeof result.content === 'string' ? "".concat(result.content.slice(0, 150), "...") : 'Click to view article'
                                }, void 0, false, {
                                    fileName: "6Browser.js",
                                    lineNumber: 703,
                                    columnNumber: 17
                                }, _this)
                            ]
                        }, index, true, {
                            fileName: "6Browser.js",
                            lineNumber: 684,
                            columnNumber: 15
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "6Browser.js",
                    lineNumber: 674,
                    columnNumber: 11
                }, _this),
                searchResults.length === 0 && hasSearched && searchQuery && /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        margin: '15px',
                        padding: '20px',
                        background: '#fff',
                        color: '#000',
                        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                fontSize: '18px',
                                fontWeight: 'bold',
                                marginBottom: '10px'
                            },
                            children: "0 Search Results Found"
                        }, void 0, false, {
                            fileName: "6Browser.js",
                            lineNumber: 726,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                fontSize: '14px',
                                color: '#666'
                            },
                            children: "Try different keywords or check your spelling"
                        }, void 0, false, {
                            fileName: "6Browser.js",
                            lineNumber: 733,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "6Browser.js",
                    lineNumber: 718,
                    columnNumber: 11
                }, _this)
            ]
        }, void 0, true, {
            fileName: "6Browser.js",
            lineNumber: 610,
            columnNumber: 7
        }, _this);
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.window,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: styles.windowHeader,
                children: [
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: "Ultra Vista Search Engine"
                    }, void 0, false, {
                        fileName: "6Browser.js",
                        lineNumber: 747,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: onClose,
                        style: styles.closeButton,
                        children: "X"
                    }, void 0, false, {
                        fileName: "6Browser.js",
                        lineNumber: 748,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "6Browser.js",
                lineNumber: 746,
                columnNumber: 7
            }, _this),
            renderContent()
        ]
    }, void 0, true, {
        fileName: "6Browser.js",
        lineNumber: 745,
        columnNumber: 5
    }, _this);
};
export default Browser;
