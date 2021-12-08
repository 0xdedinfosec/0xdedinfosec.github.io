import {hackthebox_arr} from "./Variable.js";

let random1 = hackthebox_arr[Math.floor(Math.random() * hackthebox_arr.length)];
let random2 = hackthebox_arr[Math.floor(Math.random() * hackthebox_arr.length)];
let random3 = hackthebox_arr[Math.floor(Math.random() * hackthebox_arr.length)];
let random4 = hackthebox_arr[Math.floor(Math.random() * hackthebox_arr.length)];

document.getElementById("Recent-Updates").innerHTML = "<li>
  <a href="https://0xdedinfosec.vercel.app/">Check Out My New Website</a>
</li>"
// `<li>
// <a href="/posts/htb-${random1.toLowerCase()}/">Hackthebox ${random1} writeup</a>
// </li>
// <li>
// <a href="/posts/htb-${random2.toLowerCase()}/">Hackthebox ${random2} writeup</a>
// </li>
// <li>
// <a href="/posts/htb-${random3.toLowerCase()}/">Hackthebox ${random3} writeup</a>
// </li>
// <li>
// <a href="/posts/htb-${random4.toLowerCase()}/">Hackthebox ${random4} writeup</a>
// </li>`
