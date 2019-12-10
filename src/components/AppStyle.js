export const styles = StyleSheet.create({
    //Los 2 primeros estilos son de ejemplo nomás, no tienen uso dentro de la aplicación.
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },

    App: {
        textAlign: 'center',
        alignItems: 'center'
    },
    AppLogo: {
        height: 30
    },
    savechang: {
        textDecorationStyle: 'none',
        color: 'white',
        ':hover': {
            textDecorationStyle: 'none'
        }
    },
    AppHeader: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: '#3c4f57'
    },
    AppLink: {
        color: '#3c4f57'
    },
    footer: {
        fontFamily: 'ZCOOL XiaoWei',
        color: '#3c4f57'
    },

    /* NAVIGATION BAR */
    dropdownMenu: {
        border: 'none! important',
        opacity: 0.9,
        ':after': {
            content: 'none !important'
        }
    },
    back: {
        backgroundImage: 'linear-gradient(to right, #ff8177 0%,#ff867a 0%,#ff8c7f 21%,#f99185 52%,#cf556c 78%,#b12a5b 100%)'
    },
    navLinkOutline: {
        textShadow: '0 1px 0 rgba(68, 66, 66, 0.603)',
        ':hover': {
            textShadow: '0 1px 0 #c9bbdf80'
        }
    },
    navBar: {
        width: '100%',
        display: 'fixed-top'
    },

    /* LOGO */
    userLogo: {
        height: '3rem'
    },
    banner: {
        height: '30vmin'
    },
    Arrow: {
        height: '12rem',
        borderRadius: '40%'
    },
    homeIcon: {
        height: '2rem',
        alignContent: 'center',
        marginBottom: '4%',
        marginTop: '2%',
        opacity: 0.7
    },
    main: {
        alignItems: 'center'
    },

    /* TEXT STYLING */
    p: {
        fontFamily: 'Fjalla One',
        fontWeight: 300,
        fontSize: '200%',
        textShadow: '0 1px 0 rgba(255, 255, 255, 0.7)'
    },

    h1, h2, h3, h4: {
        fontFamily: 'Fjalla One',
        fontWeight: 900,
        color: '#4d6d7a',
        textShadow: '0 1px 0 rgba(255, 255, 255, 0.603)',
        paddingTop: '2%'
    },
    coolTouch: {
        fontFamily: 'Fjalla One',
        fontSize: '100%',
        color: '#db2f00'
    },
    a: {
        textDecoration: none
    },

    /* CAROUSEL */
    carousel: {
        backgroundImage: 'linear-gradient(to top, #eeeeee 0%, #e2ebf0 70%)',
        borderRadius: '2%',
        boxShadow: '0 1px 0 rgba(255, 255, 255, 0.4)',
        justifyContent: 'center'
    },
    carouselControlNextIcon: {
        zIndex: 500,
        ':hover': {
            backgroundColor: '#3c4f57!important',
            borderRadius: '50%',
            opacity: 0.7
        }
    },
    carouselControlPrevIcon: {
        zIndex: 500,
        ':hover': {
            backgroundColor: '#3c4f57!important',
            borderRadius: '50%',
            opacity: 0.7
        }
    },
    carouselItemDiv: {
        display: 'flex',
        justifyContent: 'center',
    },
    imgSize: {
        marginBottom: '4%',
        marginRight: '0%',
        marginLeft: '0%'
    },

    /* FORM LOGIN */
    logForm: {
        backgroundImage: 'linear-gradient(to top, #eeeeee 0%, #e2ebf0 70%)',
        width: '60%',
        minWidth: '6rem',
        paddingLeft: '12%',
        paddingBottom: '5%',
        paddingTop: '5%',
        marginLeft: '21%',
        borderRadius: '3%'
    },

    /* DISCOUNT LABEL */
    priceLabel: {
        position: 'absolute',
        zIndex: 300,
        marginLeft: '52%',
        lineHeight: 'auto',
        fontSize: '30px',
        fontSize: '3.1vw',
        boxSizing: 'inherit'
    },
    cinta: {
        width: '30%',
        height: 'auto',
        position: 'absolute',
        marginLeft: '0.9rem',
        marginTop: '0.53rem',
        zIndex: 140
    },

    /* CITY ARTICLE */
    nameOnPic: {
        zIndex: 500,
        display: 'flex-start',
        textAlign: 'left',
        paddingTop: '18vh',
        marginTop: '6vh'
    },
    cityPic: {
        position: 'absolute',
        zIndex: 100,
        paddingTop: '2%'
    },
    labelCity: {
        paddingTop: '10%',
        position: 'absolute',
        zIndex: 100,
        opacity: 0.95
    },
    featuretteTitle: {
        color: 'red'
    },

    /* DAMERO */
    damero: {
        height: '30vh',
        width: '200px',
        backgroundColor: '#719bac',
        borderRadius: '10%',
        backgroundSize: 'cover',
        margin: '1vh',
        ':hover': {
            filter: 'brightness(130%)'
        }
    },
    dameroLink: {
        fontFamily: 'Fjalla One',
        fontWeight: 300,
        fontSize: '130%',
        color: '#ffff',
        textShadow: '0 1px 0 rgb(75, 69, 69)',
        textDecoration: 'none',
        zIndex: 200000,
        ':hover': {
            textDecoration: 'none',
            color: 'rgb(168, 111, 111)',
            textShadow: '0 1px 0 rgb(224, 147, 147)'
        }
    },
    imagenCarousel: {
        height: ' "40vh" !important',
        width: ' "40vh" !important'
    },
    dameroBack: {
        backgroundImage: 'linear-gradient(to top, #eeeeee 0%, #e2ebf0 70%)';
        justifyContent: center,
        paddingTop: '1%',
        paddingBottom: '1%',
        borderRadius: '2%'
    },

    /* FEATURED CITY */
    singleCity: {
        backgroundImage: 'linear-gradient(to top, #eeeeee 0%, #e2ebf0 70%)'
    },
    featPic: {
        height: '50vh',
        width: 'auto',
        borderRadius: '4%',
        maxWidth: '77vw'
    },
    featTitle: {
        textShadow: '0 1px 0 rgba(156, 184, 202, 0.603)'
    },
    cityDescript: {
        textAlign: 'justify',
        fontFamily: 'Fjalla One',
        color: '#719bac',
        backgroundImage: 'linear-gradient(to top, #eeeeee 0%, #e2ebf0 70%)',
        padding: '4vh',
        paddingRight: '6vh',
        margin: 'none',
        height: '100%',
        width: '100%'
    },

    /* PROFILE */
    profilePic: {
        height: 'auto',
        width: '8vw'
    },
    itineraryTitle: {
        color: '#ffff',
        textShadow: '0 1px 0 rgb(75, 69, 69)'
    },
    itineraryContainer: {
        backgroundImage: 'linear-gradient(to top, #9bbecc 0%, #86acbb 70%)'
    },

    /* REGISTER FORM */
    registerForm: {
        backgroundImage: 'linear-gradient(to top, #eeeeee 0%, #e2ebf0 70%)',
        width: '50%',
        paddingBottom: '5%',
        paddingTop: '5%',
        marginLeft: '21%',
        borderRadius: '3%'
    },
    userPic: {
        ':hover': {
            filter: 'brightness(150%)'
        }
    },

    /* TOGGLE */
    toggleDeco: {
        background: 'none! important',
        border: 'none',
        color: '#ffff',
        ':hover': {
            background: 'none !important',
            border: 'none',
            color: '#c2eeff'
        },
        ':focus': {
            outline: 'none'
        }
    },
    comments: {
        width: '40vw',
        textAlign: 'center'
    },
});