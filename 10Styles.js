// Global styles for the application
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
var baseStyles = {
    audioControls: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 1000
    },
    audioButton: {
        padding: '5px 10px',
        border: '2px solid #000',
        color: '#000',
        cursor: 'pointer',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        '&:hover': {
            opacity: 0.8
        }
    },
    searchInputContainer: {
        position: 'relative',
        flex: 1,
        maxWidth: '600px'
    },
    desktop: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000810',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace'
    },
    monitor: {
        width: '90%',
        height: '90%',
        margin: '2% auto',
        background: 'linear-gradient(160deg, #e6f2ff 0%, #b3d9ff 100%)',
        border: '20px solid #111',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden'
    },
    screenOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
    },
    iconGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 80px)',
        gap: '20px',
        padding: '20px'
    },
    icon: {
        width: '80px',
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '12px',
        userSelect: 'none',
        transition: 'all 0.2s ease',
        padding: '5px',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        '&:active': {
            transform: 'scale(0.95)'
        }
    },
    iconEmoji: {
        fontSize: '32px',
        marginBottom: '5px'
    },
    window: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '85%',
        backgroundColor: '#000',
        border: '3px solid #666',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    windowHeader: {
        backgroundColor: '#808080',
        color: '#fff',
        padding: '5px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    closeButton: {
        backgroundColor: '#808080',
        border: '1px solid #666',
        color: '#fff',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        padding: '0'
    },
    browserContent: {
        padding: '0',
        color: '#000',
        height: 'calc(100% - 30px)',
        background: '#fff',
        overflow: 'auto',
        fontFamily: 'Arial, sans-serif'
    },
    pageList: {
        padding: '20px',
        backgroundColor: '#fff',
        margin: '20px',
        border: '2px solid #666',
        borderTopColor: '#333',
        borderLeftColor: '#333',
        borderRightColor: '#fff',
        borderBottomColor: '#fff'
    },
    pageItem: {
        padding: '15px 20px',
        borderBottom: '1px solid #DDD',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-start'
    },
    pageItemHover: {
        backgroundColor: '#F5F5F5'
    },
    askHeader: {
        textAlign: 'center',
        padding: '20px',
        background: '#fff',
        borderBottom: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    searchForm: {
        display: 'flex',
        gap: '10px',
        maxWidth: '600px',
        margin: '20px auto',
        padding: '0 20px'
    },
    searchInput: {
        flex: 1,
        padding: '10px 15px',
        fontSize: '16px',
        border: '3px solid #FF69B4',
        borderStyle: 'ridge',
        borderRadius: '5px',
        backgroundColor: '#FFF0F5',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.2)',
        '&:focus': {
            outline: 'none',
            borderColor: '#FF1493',
            backgroundColor: '#FFFFFF'
        }
    },
    askTitle: {
        fontSize: '32px',
        color: '#FFFFFF',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        marginBottom: '15px',
        textShadow: '2px 2px #FF1493, -2px -2px #4169E1',
        letterSpacing: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchSuggestions: {
        color: '#666',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif'
    },
    resultsTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
        padding: '10px 20px',
        borderBottom: '1px solid #DDD'
    },
    resultIcon: {
        fontSize: '20px',
        marginRight: '15px'
    },
    resultContent: {
        flex: 1
    },
    resultTitle: {
        color: '#1E40AF',
        textDecoration: 'underline',
        marginBottom: '8px',
        fontSize: '16px',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        fontWeight: 'bold'
    },
    resultPreview: {
        color: '#444444',
        fontSize: '13px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.4',
        marginTop: '5px'
    },
    ultraLogo: {
        width: '200px',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
    },
    browserControls: {
        display: 'flex',
        gap: '5px',
        marginLeft: '10px'
    },
    browserButton: {
        backgroundColor: '#D4D0C8',
        border: '2px solid #666',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        padding: '2px 8px',
        fontSize: '11px',
        cursor: 'pointer',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        color: '#000'
    },
    searchButton: {
        background: '#808080',
        border: '2px solid #666',
        color: '#000',
        padding: '8px 20px',
        cursor: 'pointer',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        fontSize: '14px',
        fontWeight: 'bold',
        borderRadius: '5px',
        textTransform: 'uppercase',
        transition: 'all 0.2s ease',
        '&:hover': {
            background: '#909090'
        },
        '&:active': {
            background: '#707070',
            transform: 'scale(0.98)'
        }
    },
    searchResults: {
        margin: '15px',
        padding: '20px',
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        color: '#000',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        maxHeight: 'calc(100% - 140px)',
        overflow: 'auto',
        boxShadow: '0 0 15px rgba(65, 105, 225, 0.3)'
    },
    resultCount: {
        padding: '8px 15px',
        borderBottom: '1px solid #DDE3E8',
        marginBottom: '15px',
        fontSize: '13px',
        backgroundColor: '#F5F5DC',
        color: '#666666',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        borderRadius: '3px'
    },
    resultType: {
        color: '#006699',
        fontSize: '11px',
        marginBottom: '5px',
        fontWeight: 'normal',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        backgroundColor: '#F0F7FF',
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '3px'
    },
    searchHint: {
        color: '#005500',
        fontSize: '12px',
        marginTop: '10px',
        fontStyle: 'italic'
    },
    resultItem: {
        padding: '15px',
        margin: '15px 5px',
        border: '1px solid #ccc',
        cursor: 'pointer',
        borderLeft: '5px solid #4169E1',
        position: 'relative'
    },
    filterButton: {
        backgroundColor: '#4169E1',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        margin: '0 5px',
        cursor: 'pointer',
        borderRadius: '3px',
        fontSize: '12px',
        fontFamily: '"Courier New", monospace'
    },
    resultFilters: {
        padding: '10px',
        borderBottom: '1px solid #DDE3E8',
        marginBottom: '15px',
        color: '#666',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: '#fff',
        transition: 'all 0.3s ease',
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '3px 3px 7px rgba(0,0,0,0.1)',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
            borderColor: '#FF1493',
            background: 'linear-gradient(to bottom, #FFFFFF, #E6E6FA)'
        }
    },
    resultFooter: {
        marginTop: '8px',
        fontSize: '11px',
        color: '#008000',
        textAlign: 'left',
        fontFamily: '"Courier New", "Lucida Console", Monaco, monospace',
        paddingTop: '5px'
    },
    backButton: {
        backgroundColor: '#001100',
        border: '1px solid #00ff00',
        color: '#00ff00',
        padding: '5px 10px',
        marginBottom: '10px',
        cursor: 'pointer',
        fontFamily: 'monospace'
    },
    webPage: {
        border: '2px solid #8B4513',
        padding: '20px',
        backgroundColor: '#FFF',
        margin: '20px',
        boxShadow: '5px 5px 15px rgba(0,0,0,0.2)'
    },
    // All needed styles are already defined in other sections
    startScreen: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#808080',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
        color: '#000000',
        position: 'relative'
    },
    startContent: {
        backgroundColor: '#A9A9A9',
        border: '2px solid #000000',
        padding: '40px',
        maxWidth: '600px',
        width: '90%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 0 20px rgba(0,0,0,0.3)'
    },
    startTitle: {
        fontSize: '24px',
        marginBottom: '30px',
        letterSpacing: '2px',
        color: '#000000',
        fontWeight: 'bold'
    },
    instructions: {
        marginBottom: '30px',
        lineHeight: '1.6',
        textAlign: 'center',
        color: '#000000'
    },
    instructionsParagraph: {
        margin: '15px 0',
        color: '#000000'
    },
    startButton: {
        backgroundColor: '#A9A9A9',
        color: '#000000',
        border: '2px solid #000000',
        padding: '15px 30px',
        fontSize: '16px',
        cursor: 'pointer',
        fontFamily: 'monospace',
        transition: 'all 0.3s ease',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#909090',
            transform: 'scale(1.05)'
        },
        '&:active': {
            transform: 'scale(0.95)'
        }
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
    }
};
// Consolidated styles
// Add business article styles before commonStyles
var businessArticleStyles = {
    magazineContent: {
        padding: '20px',
        backgroundColor: '#FFFFFF',
        color: '#000000'
    },
    magazineHeaderLine: {
        borderTop: '2px solid #1E3A8A',
        marginBottom: '20px'
    },
    magazineMetaInfo: {
        color: '#666666',
        fontSize: '14px',
        marginBottom: '20px'
    },
    magazineArticleTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '30px',
        color: '#1E3A8A'
    },
    magazineArticleText: {
        lineHeight: '1.8'
    },
    magazineArticleParagraph: {
        marginBottom: '20px'
    },
    magazineFooterLine: {
        borderBottom: '2px solid #1E3A8A',
        marginTop: '20px'
    }
};
var commonStyles = {
    mainMenu: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#808080',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
        color: '#000000',
        position: 'relative'
    },
    menuContent: {
        backgroundColor: '#A9A9A9',
        border: '2px solid #000000',
        padding: '40px',
        maxWidth: '800px',
        width: '90%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 0 20px rgba(0,0,0,0.3)'
    },
    menuTitle: {
        fontSize: '36px',
        marginBottom: '30px',
        letterSpacing: '2px',
        color: '#000000',
        fontWeight: 'bold'
    },
    menuImage: {
        width: '50%',
        height: 'auto',
        marginBottom: '40px',
        filter: 'brightness(0.9) contrast(1.1)'
    },
    // Modal styles
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF5E1',
        padding: '40px',
        border: '2px solid #8B4513',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        zIndex: '9999',
        maxWidth: '800px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto',
        fontFamily: 'Georgia, serif'
    },
    modalClose: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        background: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: '#8B4513'
    },
    // Blog post styles
    blogPost: {
        backgroundColor: '#000066',
        color: '#FFFF00',
        padding: '20px',
        fontFamily: '"Comic Sans MS", "Arial", sans-serif'
    },
    blogHeader: {
        backgroundColor: '#000033',
        border: '2px solid #FFFF00',
        padding: '20px',
        marginBottom: '20px'
    },
    blogTitle: {
        textAlign: 'center',
        color: '#FF00FF',
        marginBottom: '10px',
        textShadow: '2px 2px #000000',
        fontSize: '24px',
        fontFamily: '"Big Shoulders Stencil", "Comic Sans MS", "Arial", sans-serif'
    },
    // Business article styles
    businessArticle: {
        backgroundColor: '#FFFFFF',
        margin: '20px auto',
        padding: '40px',
        border: '2px solid #1E3A8A',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        fontFamily: '"Times New Roman", serif',
        maxWidth: '800px',
        color: '#000000'
    },
    businessHeader: {
        fontSize: '42px',
        fontFamily: '"Times New Roman", serif',
        background: 'linear-gradient(45deg, #FFD700, #FFF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '0',
        fontWeight: 'bold',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    // Image container styles
    imageContainer: {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer'
    },
    imageOverlay: {
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
    menuButtons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '300px',
        margin: '0 auto'
    },
    menuButton: {
        backgroundColor: '#A9A9A9',
        color: '#000000',
        border: '2px solid #000000',
        padding: '15px 30px',
        fontSize: '18px',
        cursor: 'pointer',
        fontFamily: 'monospace',
        transition: 'all 0.3s ease',
        fontWeight: 'bold'
    }
};
// Add notepad styles
var notepadStyles = {
    notepad: {
        width: '100%',
        height: 'calc(100% - 30px)',
        padding: '20px',
        backgroundColor: '#ffffcc',
        border: 'none',
        resize: 'none',
        fontFamily: '"Courier New", monospace',
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#000000',
        outline: 'none',
        boxSizing: 'border-box',
        backgroundImage: 'linear-gradient(#999 1px, transparent 1px)',
        backgroundSize: '100% 1.5em',
        '&::placeholder': {
            color: '#666'
        }
    }
};
// Create final styles object
var styles = _object_spread({}, baseStyles, commonStyles, notepadStyles, businessArticleStyles);
// Bank website specific styles (90s style)
var bankStyles = {
    // Main container styles
    bankContainer: {
        backgroundColor: '#FFFFFF',
        minHeight: '100%',
        fontFamily: '"Times New Roman", serif',
        backgroundImage: 'url("data:image/gif;base64,R0lGODlhAwADAIAAAP////8AAyH5BAAAAAAALAAAAAADAAMAAAIDhI9WADs=")',
        color: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bankContent: {
        width: '100%',
        maxWidth: '760px',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        border: '2px solid #006400',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)'
    },
    // Header styles
    bankHeader: {
        background: '#006400',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '10px 0'
    },
    headerInner: {
        display: 'table',
        width: '100%'
    },
    logoContainer: {
        display: 'table-cell',
        verticalAlign: 'middle',
        width: '80px',
        textAlign: 'center'
    },
    titleContainer: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    bankLogo: {
        height: '50px',
        width: 'auto',
        backgroundColor: '#FFFFFF',
        padding: '2px',
        border: '1px solid #000080'
    },
    bankTitle: {
        margin: '0',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        color: '#FFFFFF'
    },
    bankSubtitle: {
        color: '#FFFF00',
        marginTop: '5px',
        fontSize: '12px',
        fontFamily: 'Arial, sans-serif'
    },
    // Navigation styles
    bankNav: {
        backgroundColor: '#006400',
        padding: '8px 0',
        textAlign: 'center',
        borderTop: '1px solid #FFFFFF',
        borderBottom: '1px solid #004d00'
    },
    navButton: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #004d00',
        margin: '0 5px',
        padding: '4px 12px',
        fontSize: '12px',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
        display: 'inline-block',
        fontWeight: 'bold',
        color: '#006400',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#e6f2e6'
        }
    },
    navButtonIcon: {
        marginRight: '3px'
    },
    // Main content styles - using table layout as was common in the 90s
    mainContent: {
        width: '100%',
        padding: '10px'
    },
    leftColumn: {
        width: '65%',
        padding: '0 10px 0 0',
        verticalAlign: 'top'
    },
    rightColumn: {
        width: '35%',
        padding: '0 0 0 5px',
        verticalAlign: 'top'
    },
    promoBox: {
        border: '2px ridge #666666',
        padding: '10px',
        backgroundColor: '#FFFFCC',
        marginTop: '20px'
    },
    // Welcome header
    welcomeHeader: {
        color: '#006400',
        marginBottom: '15px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        borderBottom: '1px solid #006400',
        paddingBottom: '5px',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    newBadge: {
        display: 'inline-block',
        fontSize: '12px',
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        padding: '1px 4px',
        marginLeft: '5px',
        fontFamily: '"Comic Sans MS", cursive',
        animation: 'blink 1s infinite'
    },
    // Content styles
    contentGrid: {
        width: '100%',
        margin: '0 0 15px 0',
        position: 'relative'
    },
    constructionIcon: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        width: '40px',
        height: '40px'
    },
    contentBox: {
        backgroundColor: '#F0F0F0',
        padding: '10px',
        border: '1px solid #808080',
        margin: '10px 0',
        height: '100%',
        boxSizing: 'border-box'
    },
    boxTitle: {
        color: '#006400',
        marginBottom: '8px',
        borderBottom: '1px solid #808080',
        paddingBottom: '3px',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    newTag: {
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        padding: '0 3px',
        marginRight: '5px',
        fontSize: '10px'
    },
    boxContent: {
        fontSize: '12px',
        lineHeight: '1.4',
        color: '#000000',
        fontFamily: '"Comic Sans MS", cursive'
    },
    dogBoxTitle: {
        color: '#006400',
        marginBottom: '8px',
        borderBottom: '1px solid #808080',
        paddingBottom: '3px',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    starDecoration: {
        display: 'inline-block',
        color: '#FF0000'
    },
    starDecorationRight: {
        display: 'inline-block',
        color: '#FF0000'
    },
    imageContainer: {
        padding: '0',
        margin: '0',
        textAlign: 'center'
    },
    bankImageContainer: {
        position: 'relative',
        cursor: 'pointer',
        display: 'inline-block'
    },
    dogImage: {
        width: 'auto',
        maxWidth: '100%',
        border: '1px solid #000000',
        padding: '2px',
        backgroundColor: '#FFFFFF'
    },
    // Bank hours styles
    bankHours: {
        backgroundColor: '#F0F0F0',
        padding: '10px',
        border: '1px solid #808080',
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column'
    },
    hoursTitle: {
        color: '#006400',
        marginBottom: '10px',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    hoursGrid: {
        width: '100%',
        borderCollapse: 'collapse'
    },
    // Login box styles
    loginBox: {
        backgroundColor: '#F0F0F0',
        padding: '10px',
        border: '1px solid #808080'
    },
    loginTitle: {
        color: '#006400',
        marginBottom: '10px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    formGroup: {
        marginBottom: '10px'
    },
    inputLabel: {
        display: 'block',
        marginBottom: '3px',
        fontSize: '12px'
    },
    textInput: {
        width: '100%',
        padding: '2px',
        border: '1px solid #808080'
    },
    loginButton: {
        width: '100%',
        padding: '4px',
        backgroundColor: '#006400',
        color: '#FFFFFF',
        border: '2px outset #C0C0C0',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12px'
    },
    // Promotional content
    promoImage: {
        width: '100%',
        height: 'auto',
        border: '1px solid #000000',
        marginBottom: '5px'
    },
    promoText: {
        fontSize: '11px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        color: '#006400'
    },
    // Password recovery link
    forgotPassword: {
        fontSize: '10px',
        textAlign: 'center',
        marginTop: '8px',
        color: '#0000FF',
        cursor: 'pointer',
        textDecoration: 'underline'
    },
    // Security banner
    securityBanner: {
        textAlign: 'center',
        padding: '5px 0',
        margin: '10px 0',
        backgroundColor: '#FFFFE1',
        border: '1px solid #000000'
    },
    securityContent: {
        display: 'inline-block'
    },
    securityIcon: {
        width: '16px',
        height: '16px',
        marginRight: '5px',
        verticalAlign: 'middle'
    },
    securityIconRight: {
        width: '16px',
        height: '16px',
        marginLeft: '5px',
        verticalAlign: 'middle'
    },
    securityText: {
        fontFamily: 'Arial, sans-serif',
        color: '#006400',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    // Footer styles
    bankFooter: {
        backgroundColor: '#006400',
        color: '#FFFFFF',
        padding: '10px',
        marginTop: '15px',
        fontSize: '10px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    },
    footerCopyright: {
        marginTop: '5px'
    }
};
export default styles;
export { bankStyles };
