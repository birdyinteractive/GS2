import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
// Storage Keys
var STORAGE_KEYS = {
    GAME_STATE: 'gameState',
    BROWSER_STATE: 'browserState',
    EVIDENCE_FILES: 'evidenceFiles',
    PLAYER_NOTES: 'playerNotes',
    READ_EMAILS: 'readEmails',
    EMAILS_STATE: 'emailsState'
};
// Storage Utilities
var storage = {
    // Get item from storage with optional default value
    get: function(key) {
        var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        try {
            var item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error("Error getting ".concat(key, " from storage:"), error);
            return defaultValue;
        }
    },
    // Set item in storage
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            // Dispatch storage event for cross-component communication
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.error("Error setting ".concat(key, " in storage:"), error);
        }
    },
    // Remove item from storage
    remove: function(key) {
        try {
            localStorage.removeItem(key);
            // Dispatch storage event for cross-component communication
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.error("Error removing ".concat(key, " from storage:"), error);
        }
    },
    // Clear all game-related storage
    clearGame: function() {
        Object.values(STORAGE_KEYS).forEach(function(key) {
            return storage.remove(key);
        });
    },
    // Game-specific utilities
    getGameState: function() {
        return storage.get(STORAGE_KEYS.GAME_STATE);
    },
    setGameState: function(state) {
        return storage.set(STORAGE_KEYS.GAME_STATE, state);
    },
    getEvidence: function() {
        return storage.get(STORAGE_KEYS.EVIDENCE_FILES, []);
    },
    setEvidence: function(evidence) {
        return storage.set(STORAGE_KEYS.EVIDENCE_FILES, evidence);
    },
    getNotes: function() {
        return storage.get(STORAGE_KEYS.PLAYER_NOTES, '');
    },
    setNotes: function(notes) {
        return storage.set(STORAGE_KEYS.PLAYER_NOTES, notes);
    },
    getReadEmails: function() {
        return storage.get(STORAGE_KEYS.READ_EMAILS, []);
    },
    setReadEmails: function(emails) {
        return storage.set(STORAGE_KEYS.READ_EMAILS, emails);
    },
    getEmailsState: function() {
        return storage.get(STORAGE_KEYS.EMAILS_STATE, []);
    },
    setEmailsState: function(state) {
        return storage.set(STORAGE_KEYS.EMAILS_STATE, state);
    },
    getBrowserState: function() {
        return storage.get(STORAGE_KEYS.BROWSER_STATE);
    },
    setBrowserState: function(state) {
        return storage.set(STORAGE_KEYS.BROWSER_STATE, state);
    }
};
export default storage;
