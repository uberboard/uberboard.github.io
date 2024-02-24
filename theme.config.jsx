const config = {
    logo: <span style={{fontFamily: '"Helvetica Neue", sans-serif', fontWeight: 700, letterSpacing: '-0.04em'}}>uberboard.io</span>,
    project: {
        link: 'https://github.com/uberboard/uberboard-cli'
    },
    docsRepositoryBase: 'https://github.com/uberboard/uberboard.github.io/tree/main',
    useNextSeoProps() {
        return {
            titleTemplate: '%s – uberboard.io'
        }
    },
    footer: {
        text: (
            <span>{new Date().getFullYear()} ©{' '}<a href="https://uberboard.io" target="_blank">uberboard.io</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
                href="https://uberboard.io" target="_blank">Terms of Use & Privacy Policy</a></span>
        )
    }
}

export default config