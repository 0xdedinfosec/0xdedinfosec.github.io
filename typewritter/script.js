var app = document.getElementById('app');

var typewriter = new Typewriter(app,{
    loop: true,
    wrapperClassName: 'typeText',
    cursorClassName: 'typeCursor'
});

typewriter.typeString('<font size="+2">DedInfoSec@HTB:<font color="blue">~</font><font color="yellow"># </font></font>').typeString('<font size="+2" color="yellow">Hacker</font>').pauseFor(1000).deleteChars(6).typeString('<font size="+2" color="yellow">CTF player</font>').pauseFor(1000).deleteChars(10).typeString('<font size="+2" color="yellow">Bug Hunter</font>').pauseFor(1000).deleteChars(10).typeString('<font size="+2" color="yellow">Bash</font>').pauseFor(1000).deleteChars(4).typeString('<font size="+2" color="yellow">Python</font>').pauseFor(1000).deleteChars(6).typeString('<font size="+2" color="yellow">Hackthebox Player</font>').pauseFor(1500).start();
