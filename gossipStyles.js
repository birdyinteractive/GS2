// Styling for the gossip forum
export var gossipStyles = {
    forumContainer: {
        backgroundColor: '#121212',
        color: '#e0e0e0',
        padding: '20px',
        fontFamily: '"Courier New", monospace',
        border: '1px solid #444',
        maxWidth: '900px',
        margin: '0 auto',
        boxShadow: '0 0 10px rgba(255, 0, 0, 0.2)'
    },
    forumHeader: {
        backgroundColor: '#1a1a1a',
        backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #300 100%)',
        padding: '15px',
        borderBottom: '3px double #600',
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden'
    },
    forumTitle: {
        color: '#ff9900',
        fontSize: '32px',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '0 0 10px 0',
        fontFamily: 'Impact, fantasy',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px #000, 0 0 10px #f00'
    },
    forumSubtitle: {
        color: '#ccc',
        fontSize: '14px',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: '10px'
    },
    bannerHighlight: {
        color: '#ff3333',
        fontWeight: 'bold'
    },
    threadContainer: {
        backgroundColor: '#262626',
        border: '1px solid #444',
        padding: '15px',
        marginBottom: '15px'
    },
    threadTitle: {
        borderBottom: '1px solid #444',
        padding: '0 0 10px 0',
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    threadTitleText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#fff'
    },
    threadInfo: {
        color: '#999',
        fontSize: '12px'
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    username: {
        color: '#ff9900',
        fontWeight: 'bold',
        marginRight: '10px'
    },
    postDate: {
        color: '#999',
        fontSize: '12px'
    },
    postContent: {
        lineHeight: '1.6',
        marginBottom: '20px'
    },
    reply: {
        border: '1px solid #444',
        backgroundColor: '#333',
        padding: '15px',
        marginBottom: '15px',
        marginLeft: '20px'
    },
    flashingText: {
        animation: 'flashingText 2s infinite'
    },
    scanlines: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(32, 32, 32, 0.3) 50%)',
        backgroundSize: '4px 4px',
        pointerEvents: 'none',
        zIndex: 10
    },
    missingPersonBanner: {
        backgroundColor: '#400',
        padding: '10px',
        margin: '10px 0 15px 0',
        border: '1px dashed #f00',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    missingPersonText: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        textShadow: '1px 1px 2px #000',
        position: 'relative',
        zIndex: 2
    },
    threadButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
        borderTop: '1px dotted #444',
        paddingTop: '10px'
    },
    threadButton: {
        backgroundColor: '#333',
        color: '#ccc',
        border: '1px solid #555',
        padding: '5px 10px',
        fontSize: '12px',
        cursor: 'pointer'
    }
};
// Add keyframes for animations
var injectGlobalStyles = function() {
    var style = document.createElement('style');
    style.textContent = "\n    @keyframes flashingText {\n      0%, 49% { opacity: 1; }\n      50%, 100% { opacity: 0.5; }\n    }\n  ";
    document.head.appendChild(style);
};
// Execute the function to inject global styles
if (typeof window !== 'undefined') {
    injectGlobalStyles();
}
