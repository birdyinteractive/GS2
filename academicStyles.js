export var academicStyles = {
    container: {
        backgroundColor: '#fffef7',
        padding: '25px',
        fontFamily: '"Times New Roman", Times, serif',
        border: '1px solid #d0c8a8',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lineHeight: '1.6',
        color: '#333',
        maxWidth: '850px',
        margin: '0 auto',
        position: 'relative'
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #8b0000',
        paddingBottom: '20px'
    },
    university: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    },
    universityLogo: {
        width: '80px',
        height: '80px',
        backgroundColor: '#8b0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'Georgia, serif',
        fontWeight: 'bold',
        borderRadius: '50%',
        fontSize: '18px',
        textAlign: 'center',
        padding: '5px'
    },
    universityName: {
        fontSize: '14px',
        color: '#5a5a5a',
        fontStyle: 'italic',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    watermark: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        fontSize: '80px',
        opacity: '0.04',
        color: '#000',
        fontWeight: 'bold',
        pointerEvents: 'none',
        zIndex: '0',
        letterSpacing: '5px'
    },
    paperTitle: {
        fontSize: '26px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px',
        color: '#222'
    },
    author: {
        fontSize: '18px',
        textAlign: 'center',
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    date: {
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#5a5a5a'
    },
    abstract: {
        fontStyle: 'italic',
        padding: '15px 25px',
        borderLeft: '4px solid #8b0000',
        backgroundColor: '#f9f7f0',
        marginBottom: '25px'
    },
    abstractTitle: {
        fontWeight: 'bold',
        marginBottom: '10px',
        display: 'block',
        fontSize: '16px'
    },
    content: {
        padding: '10px',
        position: 'relative',
        zIndex: '1'
    },
    section: {
        marginBottom: '25px'
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '15px',
        borderBottom: '1px solid #ddd',
        paddingBottom: '5px'
    },
    paragraph: {
        marginBottom: '15px',
        textAlign: 'justify',
        textIndent: '30px'
    },
    footer: {
        marginTop: '30px',
        fontSize: '12px',
        color: '#888',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        paddingTop: '15px'
    },
    citation: {
        fontSize: '13px',
        fontStyle: 'italic',
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#f9f7f0',
        borderLeft: '3px solid #8b0000'
    },
    pageNumber: {
        position: 'absolute',
        bottom: '10px',
        right: '20px',
        fontSize: '12px',
        color: '#888'
    }
};
