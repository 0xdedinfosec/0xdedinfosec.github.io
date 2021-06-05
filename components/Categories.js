//All HackTheBox Posts

function HackTheBox_posts() {
    var hackthebox_arr = ["Spider", "Knife", "Pivotapi", "Love", "Monitors", "Atom", "Unobtainium", "Armageddon", "Spectra", "Scriptkiddie", "Sink", "Tenet", "Cereal", "Delivery", "Ready", "Launne", "Crossfit", "Laboratory", "Academy", "Bucket", "Time", "Jewel", "Reel2", "Doctor", "Compromised", "Passage", "Feline", "Omni", "Sneakymailer"];
    var hackthebox_date_arr = ["Jun 01, 2021", "May 23, 2021", "May 15, 2021", "May 03, 2021", "Apr 29, 2021", "Apr 19, 2021", "Apr 18, 2021", "Mar 29, 2021", "Mar 04, 2021", "Feb 17, 2021", "Feb 14, 2021", "Feb 08, 2021", "Jan 27, 2021", "Jan 11, 2021", "Dec 14, 2020", "Dec 2, 2020", "Nov 26, 2020", "Nov 21, 2020", "Nov 11, 2020", "Nov 08, 2020", "Oct 30, 2020", "Oct 29, 2020", "Oct 05, 2020", "Sep 28, 2020", "Sep 20, 2020", "Sep 07, 2020", "Sep 01, 2020", "Aug 24, 2020", "Jul 12, 2020"];
    var output_Hackthebox_HTML = "";
    for (var i = 0, hackthebox_arr_size = hackthebox_arr.length; i < hackthebox_arr_size; i++) {
        output_Hackthebox_HTML += `<li class="d-flex justify-content-between pl-md-3 pr-md-3">\n`
        output_Hackthebox_HTML += `<a href="https://0xdedinfosec.github.io/posts/htb-${hackthebox_arr[i].toLowerCase()}/">Hackthebox ${hackthebox_arr[i]} writeup</a>\n`
        output_Hackthebox_HTML += `<span class="dash flex-grow-1"></span>\n`
        output_Hackthebox_HTML += `<span class="text-muted small">${hackthebox_date_arr[i]}</span>\n`
        output_Hackthebox_HTML += `</li>\n`
    }

    document.getElementById("post_lenght_hackthebox").innerHTML = hackthebox_arr.length;
    document.getElementById("post_content_hackthebox").innerHTML = output_Hackthebox_HTML;
}


//Active Posts

function Active_posts() {
    var active_arr = ["Spider", "Knife", "Pivotapi", "Love", "Monitors", "Atom", "Unobtainium", "Armageddon", "Spectra", "Scriptkiddie", "Sink", "Tenet"];
    var active_date_arr = ["Jun 01, 2021", "May 23, 2021", "May 15, 2021", "May 03, 2021", "Apr 29, 2021", "Apr 19, 2021", "Apr 18, 2021", "Mar 29, 2021", "Mar 04, 2021", "Feb 17, 2021", "Feb 14, 2021", "Feb 08, 2021"];
    var output_Active_HTML = "";

    for (var i = 0, active_arr_size = active_arr.length; i < active_arr_size; i++) {
        output_Active_HTML += `<li class="d-flex justify-content-between pl-md-3 pr-md-3">\n`
        output_Active_HTML += `<a href="https://0xdedinfosec.github.io/posts/htb-${active_arr[i].toLowerCase()}/">Hackthebox ${active_arr[i]} writeup</a>\n`
        output_Active_HTML += `<span class="dash flex-grow-1"></span>\n`
        output_Active_HTML += `<span class="text-muted small">${active_date_arr[i]}</span>\n`
        output_Active_HTML += `</li>\n`
    }

    document.getElementById("post_lenght_active").innerHTML = active_arr.length;
    document.getElementById("post_content_active").innerHTML = output_Active_HTML;
}

function Retired_posts() {
    var retired_arr = ["Cereal", "Delivery", "Ready", "Launne", "Crossfit", "Laboratory", "Academy", "Bucket", "Time", "Jewel", "Reel2", "Doctor", "Compromised", "Passage", "Feline", "Omni", "Sneakymailer"];
    var retired_date_arr = ["Jan 27, 2021", "Jan 11, 2021", "Dec 14, 2020", "Dec 2, 2020", "Nov 26, 2020", "Nov 21, 2020", "Nov 11, 2020", "Nov 08, 2020", "Oct 30, 2020", "Oct 29, 2020", "Oct 05, 2020", "Sep 28, 2020", "Sep 20, 2020", "Sep 07, 2020", "Sep 01, 2020", "Aug 24, 2020", "Jul 12, 2020"];
    var output_Retired_HTML = "";

    for (var i = 0, retired_arr_size = retired_arr.length; i < retired_arr_size; i++) {
        output_Retired_HTML += `<li class="d-flex justify-content-between pl-md-3 pr-md-3">\n`
        output_Retired_HTML += `<a href="https://0xdedinfosec.github.io/posts/htb-${retired_arr[i].toLowerCase()}/">Hackthebox ${retired_arr[i]} writeup</a>\n`
        output_Retired_HTML += `<span class="dash flex-grow-1"></span>\n`
        output_Retired_HTML += `<span class="text-muted small">${retired_date_arr[i]}</span>\n`
        output_Retired_HTML += `</li>\n`
    }

    document.getElementById("post_lenght_retired").innerHTML = retired_arr.length;
    document.getElementById("post_content_retired").innerHTML = output_Retired_HTML;
}