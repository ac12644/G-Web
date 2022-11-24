import { createGlobalStyle } from "styled-components";
import "@fontsource/vt323";
const Globalstyles = createGlobalStyle`

*,*::before,*::after{
   margin: 0;
   padding: 0;
}
body{
   font-family: "VT323", monospace;
   overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6{
   margin: 0;
   padding: 0;
}
a{
   color: inherit;
   text-decoration:none;
}
a:hover{
   color:white;
}

`;
export default Globalstyles;
