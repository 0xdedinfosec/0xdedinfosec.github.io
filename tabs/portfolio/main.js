function get_matrix(){
    document.getElementById('clear').innerHTML = '<canvas id="canvas"></canvas><style>@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&family=Sawarabi+Mincho&display=swap");*{margin:0;padding:0;box-sizing:border-box;background:#000;font-family:"Sawarabi Mincho",sans-serif;font-size:2vmax}body{display:inline-block;transform:scale(1.4,1);-webkit-transform:scale(1.4,1);-moz-transform:scale(1.4,1);-ms-transform:scale(1.4,1);-o-transform:scale(1.4,1);overflow:hidden}</style>';
    matrix();
}



function matrix() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        drops = [],
        text = [],
        font_size = 12;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth / 1.2;
    columns = canvas.width / font_size;

    context.translate(canvas.width, 0);
    context.scale(-1, 1);

    // hiragana characters.
    var chars = "MAZAL「平」とは平凡な、や さしいという意で通に 使 ל 用 する文 字 体 平 仮 名 は 漢 字の知 識 מ ז ל に乏しい人々などが用いる私的な$#@&!あった".split(
        ""
    );

    for (var i = 0; i < columns; i++) drops[i] = Math.random() * 43 - 43;

    function draw() {
        // Background with 0.1 opacity.
        context.font = font_size + "px 'Sawarabi Mincho', 'Roboto Mono'";
        context.fillStyle = "rgba(0, 0, 0, 0.07)";
        context.fillRect(0, 0, canvas.width, canvas.height);

        //Set the previous line to neon.
        context.fillStyle = "#00ffff";
        for (var i = 0; i < drops.length; i++) {
            context.fillText(text[i], i * font_size, drops[i] * font_size);
        }

        // Generate new characters.
        context.fillStyle = "#cc00ff";
        for (var i = 0; i < drops.length; i++) {
            drops[i]++;

            // Random character to print.
            text[i] = chars[Math.floor(Math.random() * chars.length)];

            // Parameters - text, x-pos, y-pos.
            context.fillText(text[i], i * font_size, drops[i] * font_size);

            // Sending the drop to the top randomly, after it has crossed the screen.
            if (drops[i] * font_size > canvas.height)
                drops[i] = Math.random() * 100 - 43;
        }
    }

    setInterval(draw, 43);
}