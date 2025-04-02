var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
var styles = {
    window: {
        backgroundColor: '#fff',
        border: '2px solid #000',
        borderRadius: '5px',
        width: '60%',
        height: '60%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column'
    },
    windowHeader: {
        backgroundColor: '#000080',
        color: '#fff',
        padding: '5px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    closeButton: {
        backgroundColor: '#c0c0c0',
        border: '2px solid #fff',
        borderRight: '2px solid #424242',
        borderBottom: '2px solid #424242',
        color: '#000',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px'
    },
    content: {
        flex: 1,
        padding: '20px',
        fontFamily: 'monospace',
        fontSize: '14px',
        whiteSpace: 'pre-wrap',
        overflowY: 'auto'
    }
};
var TextViewer = function(param) {
    var onClose = param.onClose;
    var content = "CASE FILE: VICTORIA MASON\nDate: June 15, 1995\n\nSUBJECT STATUS:\n- Missing since June 12, 1995\n- Last seen at Mason Estate\n- No signs of struggle\n\nINVESTIGATION GUIDELINES:\n1. Review emails for case briefing\n2. Search police database for background\n3. Document findings in notepad\n4. Store evidence in case file\n\nWARNING: Information may be time-sensitive. \nMonitor email for updates.\n\n--- END OF FILE ---";
    return /*#__PURE__*/ _jsxDEV("div", {
        style: styles.window,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: styles.windowHeader,
                children: [
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: "start here.txt"
                    }, void 0, false, {
                        fileName: "TextViewer.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: onClose,
                        style: styles.closeButton,
                        children: "X"
                    }, void 0, false, {
                        fileName: "TextViewer.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "TextViewer.js",
                lineNumber: 71,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: styles.content,
                children: content
            }, void 0, false, {
                fileName: "TextViewer.js",
                lineNumber: 75,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "TextViewer.js",
        lineNumber: 70,
        columnNumber: 5
    }, _this);
};
export default TextViewer;
