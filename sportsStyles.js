export var sportsStyles = {
    container: {
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        fontFamily: 'Arial, Helvetica, sans-serif',
        maxWidth: '850px',
        margin: '0 auto',
        border: '1px solid #ddd',
        position: 'relative'
    },
    header: {
        backgroundColor: '#CC0000',
        backgroundImage: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)',
        color: 'white',
        padding: '20px',
        position: 'relative',
        borderBottom: '4px solid #000',
        overflow: 'hidden'
    },
    headerPattern: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle, transparent 20%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.1) 30%, transparent 30%, transparent)',
        backgroundSize: '20px 20px',
        opacity: 0.4,
        zIndex: 1
    },
    profileTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    profileSubtitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '15px',
        position: 'relative',
        zIndex: 2,
        color: '#f0f0f0',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },
    content: {
        padding: '25px',
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 1
    },
    universityLogo: {
        position: 'absolute',
        top: '15px',
        left: '15px',
        backgroundColor: 'white',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#CC0000',
        fontSize: '14px',
        border: '2px solid #000',
        zIndex: 3,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    soccerIcon: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '40px',
        height: '40px',
        background: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
        border: '2px solid #000',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    paragraph: {
        lineHeight: '1.8',
        fontSize: '16px',
        textAlign: 'justify',
        marginBottom: '20px',
        color: '#333'
    },
    footer: {
        backgroundColor: '#f2f2f2',
        color: '#666',
        padding: '15px',
        fontSize: '12px',
        textAlign: 'center',
        borderTop: '1px solid #ddd'
    },
    playerInfo: {
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #eee',
        borderRadius: '5px'
    },
    playerData: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'space-between'
    },
    stat: {
        flex: '0 0 30%',
        backgroundColor: '#f0f0f0',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px',
        textAlign: 'center'
    },
    statLabel: {
        fontSize: '12px',
        color: '#666',
        display: 'block',
        marginBottom: '5px'
    },
    statValue: {
        fontWeight: 'bold',
        fontSize: '18px',
        color: '#CC0000'
    }
};
