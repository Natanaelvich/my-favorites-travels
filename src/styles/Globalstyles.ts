import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --highlight: #e20e8d;
  --background: #030518;
  --white: #eeeeee;
  --container: 100rem;
  --small: 1.5rem;
  --medium: 3rem;
  --large: 5rem;
}

*{
margin : 0;
padding : 0;
box-sizing : border-box;
}
html{
  font-size : 62.5%;
}
html, body, #__next{
  height : 100%;
  background: var(--background);
  color: var(--white);
}

body,input,button{
  font-size : 1rem;
  font-family: 'Roboto Slab', serif;
}
h1,h2,h3,h4,h5,h6 strong{
  font-weight : 500;
}
a{
  text-decoration : none;
}
ul{
  list-style : none;
}
button{
  cursor: pointer;
}
p,
a {
  font-size: 2rem;
  line-height: var(--medium);
}
a {
  color: var(--highlight);
}
`;
