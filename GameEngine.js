function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
import storage from './1Storage.js';
// GameEngine handles core game mechanics and state management
var GameEngine = /*#__PURE__*/ function() {
    "use strict";
    function GameEngine() {
        _class_call_check(this, GameEngine);
        var _this_gameState, _this_gameState1, _this_gameState2;
        this.gameState = this.loadGameState();
        this.evidenceList = this.loadEvidence();
        this.cluesFound = ((_this_gameState = this.gameState) === null || _this_gameState === void 0 ? void 0 : _this_gameState.cluesFound) || [];
        this.gameStartTime = ((_this_gameState1 = this.gameState) === null || _this_gameState1 === void 0 ? void 0 : _this_gameState1.gameStartTime) || Date.now();
        this.gameCompletionTime = ((_this_gameState2 = this.gameState) === null || _this_gameState2 === void 0 ? void 0 : _this_gameState2.gameCompletionTime) || null;
    }
    _create_class(GameEngine, [
        {
            // Load current game state from storage
            key: "loadGameState",
            value: function loadGameState() {
                return storage.getGameState() || {
                    currentLocation: null,
                    activeApps: [],
                    gameProgress: 0,
                    cluesFound: [],
                    gameStartTime: Date.now(),
                    gameCompletionTime: null,
                    suspectStatus: {
                        reginaldMason: {
                            interviewed: false,
                            suspect: true
                        },
                        sofiaPestrichelli: {
                            interviewed: false,
                            suspect: true
                        },
                        mickeyVenuto: {
                            interviewed: false,
                            suspect: true
                        }
                    }
                };
            }
        },
        {
            // Load evidence from storage
            key: "loadEvidence",
            value: function loadEvidence() {
                return storage.getEvidence() || [];
            }
        },
        {
            // Save current game state to storage
            key: "saveGameState",
            value: function saveGameState() {
                storage.setGameState(this.gameState);
                return this;
            }
        },
        {
            // Add a clue to the player's collected clues
            key: "addClue",
            value: function addClue(clue) {
                if (!this.cluesFound.includes(clue)) {
                    this.cluesFound.push(clue);
                    this.gameState.cluesFound = this.cluesFound;
                    this.updateGameProgress();
                    this.saveGameState();
                    return true;
                }
                return false;
            }
        },
        {
            // Add evidence to the evidence collection
            key: "addEvidence",
            value: function addEvidence(evidence) {
                if (!this.evidenceList.some(function(item) {
                    return item.title === evidence.title;
                })) {
                    var updatedEvidence = _to_consumable_array(this.evidenceList).concat([
                        _object_spread({
                            id: Date.now()
                        }, evidence)
                    ]);
                    storage.setEvidence(updatedEvidence);
                    this.evidenceList = updatedEvidence;
                    this.updateGameProgress();
                    return true;
                }
                return false;
            }
        },
        {
            // Check if player has specific evidence
            key: "hasEvidence",
            value: function hasEvidence(title) {
                return this.evidenceList.some(function(item) {
                    return item.title === title;
                });
            }
        },
        {
            // Update game progress based on evidence and clues found
            key: "updateGameProgress",
            value: function updateGameProgress() {
                // Calculate progress based on total possible evidence/clues
                var totalPossibleClues = 10; // Example value - adjust based on game design
                var totalProgress = Math.min(Math.floor(this.cluesFound.length / totalPossibleClues * 100), 100);
                this.gameState.gameProgress = totalProgress;
                this.saveGameState();
                return totalProgress;
            }
        },
        {
            // Mark suspect as interviewed
            key: "markSuspectInterviewed",
            value: function markSuspectInterviewed(suspectName) {
                if (this.gameState.suspectStatus[suspectName]) {
                    this.gameState.suspectStatus[suspectName].interviewed = true;
                    this.saveGameState();
                    return true;
                }
                return false;
            }
        },
        {
            // Check if suspect is marked as interviewed
            key: "isSuspectInterviewed",
            value: function isSuspectInterviewed(suspectName) {
                var _this_gameState_suspectStatus_suspectName;
                return ((_this_gameState_suspectStatus_suspectName = this.gameState.suspectStatus[suspectName]) === null || _this_gameState_suspectStatus_suspectName === void 0 ? void 0 : _this_gameState_suspectStatus_suspectName.interviewed) || false;
            }
        },
        {
            // Mark suspect as innocent or guilty
            key: "updateSuspectStatus",
            value: function updateSuspectStatus(suspectName, isSuspect) {
                if (this.gameState.suspectStatus[suspectName]) {
                    this.gameState.suspectStatus[suspectName].suspect = isSuspect;
                    this.saveGameState();
                    return true;
                }
                return false;
            }
        },
        {
            // Get time played in seconds
            key: "getTimePlayed",
            value: function getTimePlayed() {
                var endTime = this.gameCompletionTime || Date.now();
                return Math.floor((endTime - this.gameStartTime) / 1000);
            }
        },
        {
            // Format time played as HH:MM:SS
            key: "getFormattedTimePlayed",
            value: function getFormattedTimePlayed() {
                var totalSeconds = this.getTimePlayed();
                var hours = Math.floor(totalSeconds / 3600);
                var minutes = Math.floor(totalSeconds % 3600 / 60);
                var seconds = totalSeconds % 60;
                return [
                    hours.toString().padStart(2, '0'),
                    minutes.toString().padStart(2, '0'),
                    seconds.toString().padStart(2, '0')
                ].join(':');
            }
        },
        {
            // Complete the game and record completion time
            key: "completeGame",
            value: function completeGame() {
                this.gameState.gameCompletionTime = Date.now();
                this.gameCompletionTime = this.gameState.gameCompletionTime;
                this.saveGameState();
                return this.getTimePlayed();
            }
        },
        {
            // Check if a theory is correct (simplified version)
            key: "checkTheory",
            value: function checkTheory(theory) {
                // This is a placeholder implementation that would be replaced with actual game logic
                var correctTheory = {
                    culprit: "mickeyVenuto",
                    motive: "revenge",
                    location: "stonehaven"
                };
                var isCorrect = theory.culprit === correctTheory.culprit && theory.motive === correctTheory.motive && theory.location === correctTheory.location;
                if (isCorrect) {
                    this.completeGame();
                }
                return {
                    correct: isCorrect,
                    feedback: isCorrect ? "Congratulations! Your theory is correct!" : "Your theory isn't quite right. Review the evidence and try again."
                };
            }
        },
        {
            // Reset game to initial state
            key: "resetGame",
            value: function resetGame() {
                storage.clearGame();
                this.gameState = this.loadGameState();
                this.evidenceList = [];
                this.cluesFound = [];
                this.gameStartTime = Date.now();
                this.gameCompletionTime = null;
                this.saveGameState();
                return true;
            }
        },
        {
            // Trigger an in-game event based on player actions
            key: "triggerEvent",
            value: function triggerEvent(eventName) {
                var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                console.log("Event triggered: ".concat(eventName), data);
                switch(eventName){
                    case 'evidence_added':
                        // Check if this evidence should trigger an email
                        if (data.title === 'Victoria Mason Photo') {
                            this.triggerEmail('Victoria Mason Photo Email');
                        } else if (data.title === 'Mickey Venuto Photo') {
                            this.triggerEmail('Mickey Venuto Photo Email');
                        } else if (data.title === 'Biscuit Photo') {
                            this.triggerEmail('Biscuit Photo Email');
                        }
                        break;
                    case 'search_completed':
                        // Handle search events
                        this.handleSearch(data.searchTerm);
                        break;
                    default:
                        // Unknown event
                        console.log("No handler for event: ".concat(eventName));
                }
                // Dispatch a custom event for other components to listen for
                var customEvent = new CustomEvent('game_event', {
                    detail: {
                        name: eventName,
                        data: data
                    }
                });
                window.dispatchEvent(customEvent);
                return true;
            }
        },
        {
            // Trigger an email to appear in the inbox
            key: "triggerEmail",
            value: function triggerEmail(emailId) {
                var emails = storage.getEmailsState();
                if (!emails.includes(emailId)) {
                    var newEmailsState = _to_consumable_array(emails).concat([
                        emailId
                    ]);
                    storage.setEmailsState(newEmailsState);
                    // Dispatch storage event to update components
                    window.dispatchEvent(new Event('storage'));
                }
            }
        },
        {
            // Handle search terms that might trigger events
            key: "handleSearch",
            value: function handleSearch(searchTerm) {
                if (!searchTerm) return;
                var lowercaseSearch = searchTerm.toLowerCase();
                // Track which people have been searched for
                var searchedTerms = JSON.parse(localStorage.getItem('searchedTerms') || '[]');
                var triggerTerms = [
                    'angie hamilton',
                    'mvenuto65',
                    'sofia pestrichelli'
                ];
                var matchedTerm = triggerTerms.find(function(term) {
                    return lowercaseSearch.includes(term) || term === 'angie hamilton' && lowercaseSearch.includes('angie hamtilton');
                });
                if (matchedTerm && !searchedTerms.includes(matchedTerm)) {
                    var updatedSearchedTerms = _to_consumable_array(searchedTerms).concat([
                        matchedTerm
                    ]);
                    localStorage.setItem('searchedTerms', JSON.stringify(updatedSearchedTerms));
                    // Check if all three required terms have been searched
                    var hasSearchedAllTerms = triggerTerms.every(function(term) {
                        return updatedSearchedTerms.includes(term);
                    });
                    if (hasSearchedAllTerms) {
                        this.triggerEmail('Search Terms Email');
                    }
                }
                // Check for Sofia Pestrichelli specifically
                if (lowercaseSearch.includes('sofia pestrichelli')) {
                    this.triggerEmail('Sofia Pestrichelli Files Email');
                }
            }
        }
    ]);
    return GameEngine;
}();
// Create and export a singleton instance
var gameEngine = new GameEngine();
export default gameEngine;
