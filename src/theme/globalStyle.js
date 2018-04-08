import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=VT323');

    body {
        font-family: 'Quicksand', sans-serif;
        a, a:visited {
            color: white;
        }
        a:hover {
            color: #44f544;
        }
    }
    .panelmid {
        background: transparent;
    }

    li {
        margin: 0;
    }

`;
