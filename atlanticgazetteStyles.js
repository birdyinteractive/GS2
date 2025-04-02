export var atlanticGazetteStyles = {
    container: {
        backgroundColor: '#F5F2E9',
        fontFamily: '"Times New Roman", serif',
        color: '#000000',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        border: '3px double #000',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
    },
    header: {
        backgroundImage: 'linear-gradient(to bottom, #1E3A5A, #2A5480)',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '4px solid #851F1F',
        marginBottom: '20px',
        width: '100%',
        position: 'relative'
    },
    headerAfter: {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '0',
        width: '100%',
        height: '6px',
        backgroundImage: 'linear-gradient(to right, #851F1F, #851F1F 33%, transparent 33%, transparent 66%, #851F1F 66%, #851F1F 100%)',
        backgroundSize: '6px 6px'
    },
    newspaperTitle: {
        fontSize: '42px',
        fontWeight: 'bold',
        fontFamily: '"Times New Roman", serif',
        letterSpacing: '2px',
        marginBottom: '10px',
        color: '#FFE4C4',
        textShadow: '2px 2px 0 #000, -2px -2px 0 #851F1F'
    },
    newspaperSubtitle: {
        fontSize: '14px',
        color: '#DEB887',
        fontFamily: '"Times New Roman", serif',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        borderTop: '1px solid #DEB887',
        borderBottom: '1px solid #DEB887',
        padding: '5px 0',
        width: '80%',
        margin: '0 auto'
    },
    articleHeader: {
        backgroundColor: '#FFFFFF',
        padding: '15px',
        marginBottom: '20px',
        borderBottom: '2px solid #000000',
        borderTop: '2px solid #000000',
        position: 'relative'
    },
    articleTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px',
        color: '#851F1F',
        fontFamily: '"Times New Roman", serif'
    },
    articleSubtitle: {
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '15px',
        color: '#000000',
        fontFamily: '"Times New Roman", serif'
    },
    metaInfo: {
        textAlign: 'center',
        fontSize: '14px',
        color: '#666666',
        borderTop: '1px solid #000000',
        paddingTop: '10px',
        marginTop: '10px',
        fontFamily: '"Courier New", monospace'
    },
    imageContainer: {
        position: 'relative',
        float: 'left',
        margin: '0 20px 20px 0',
        width: '25%',
        maxWidth: '300px',
        minWidth: '200px',
        height: 'auto',
        border: '2px solid #851F1F',
        padding: '3px',
        backgroundColor: '#FFFFFF',
        boxShadow: '3px 3px 0 #000'
    },
    articleContent: {
        backgroundColor: '#FFFFFF',
        padding: '20px',
        margin: '20px 0',
        lineHeight: '1.6',
        fontSize: '16px',
        overflow: 'hidden',
        maxWidth: '100%',
        paddingLeft: '40px',
        paddingRight: '40px',
        borderLeft: '1px solid #DEB887',
        borderRight: '1px solid #DEB887'
    },
    paragraph: {
        marginBottom: '20px',
        color: '#000000',
        textAlign: 'justify',
        textIndent: '2em'
    },
    navigation: {
        backgroundColor: '#1E3A5A',
        padding: '8px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        fontFamily: '"Courier New", monospace',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    navItem: {
        cursor: 'pointer',
        padding: '0 10px'
    },
    navHighlight: {
        color: '#FFD700'
    },
    sidebarBox: {
        backgroundColor: '#F5F5F5',
        padding: '20px',
        margin: '20px 40px',
        border: '1px solid #000000',
        fontSize: '16px',
        color: '#000000',
        textAlign: 'center',
        fontFamily: '"Times New Roman", serif',
        position: 'relative'
    },
    sidebarTitle: {
        fontWeight: 'bold',
        marginBottom: '15px',
        borderBottom: '1px solid #000000',
        paddingBottom: '10px',
        fontSize: '18px',
        color: '#851F1F'
    },
    sidebarContent: {
        fontSize: '14px',
        lineHeight: '1.5'
    },
    adBanner: {
        backgroundColor: '#FFEB3B',
        margin: '20px 0',
        padding: '10px',
        textAlign: 'center',
        border: '2px dashed #851F1F',
        fontFamily: '"Arial Black", sans-serif',
        color: '#851F1F',
        fontSize: '14px',
        fontWeight: 'bold',
        position: 'relative',
        overflow: 'hidden'
    },
    adText: {
        position: 'relative',
        zIndex: 1
    },
    weatherBox: {
        backgroundColor: '#E0F7FA',
        padding: '15px',
        border: '1px solid #4FC3F7',
        margin: '20px 0',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        color: '#0277BD',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    forecastItem: {
        textAlign: 'center'
    },
    weatherDay: {
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    weatherIcon: {
        fontSize: '24px',
        margin: '5px 0'
    },
    weatherTemp: {
        fontSize: '12px'
    },
    footer: {
        borderTop: '2px solid #851F1F',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#1E3A5A',
        color: '#DEB887',
        fontSize: '12px',
        fontFamily: 'Arial, sans-serif'
    },
    copyrightText: {
        marginTop: '10px',
        fontSize: '10px'
    },
    commentsSection: {
        backgroundColor: '#F8F8F8',
        padding: '20px',
        borderTop: '2px solid #851F1F',
        margin: '0',
        position: 'relative'
    },
    commentsTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#1E3A5A',
        textAlign: 'center',
        borderBottom: '1px solid #DEB887',
        paddingBottom: '10px'
    },
    commentCard: {
        backgroundColor: '#FFFFFF',
        padding: '15px',
        margin: '10px 0',
        border: '1px solid #DEB887',
        borderLeft: '4px solid #1E3A5A',
        borderRadius: '0 5px 5px 0',
        fontFamily: 'Arial, sans-serif'
    },
    commentHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        borderBottom: '1px dotted #DEB887',
        paddingBottom: '5px'
    },
    commentAuthor: {
        fontWeight: 'bold',
        color: '#1E3A5A',
        fontSize: '14px'
    },
    commentDate: {
        fontSize: '12px',
        color: '#666',
        fontStyle: 'italic'
    },
    commentContent: {
        fontSize: '14px',
        lineHeight: '1.4'
    }
};
