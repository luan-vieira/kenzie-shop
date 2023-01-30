import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #f5f5f5;
    --vanilla: #f1ede0;
    --black: #292929;
    --purple: #37268C;
    --gray: #242424;
    --gray-black: #292929
    --red: #c53030
}

body{
       color: var(--black)
}
body, input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Inter', sans-serif;
}
li{
    list-style-type: none;
}
P{
    color: var(--gray)
}
button{
    cursor: pointer;
}
a{text-decoration:none}


`;
