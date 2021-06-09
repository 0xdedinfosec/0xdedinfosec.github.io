import { hackthebox_arr, hackthebox_date_arr, active_arr, active_date_arr, retired_arr, retired_date_arr } from './Variable.js';

//All HackTheBox Posts
export function HackTheBox_posts() {
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

export function Active_posts() {
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

export function Retired_posts() {
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

export function Categories_lenght() {
    document.getElementById("hackthebox_lenght").innerHTML = `2 categories, ${hackthebox_arr.length} posts`;
    document.getElementById("active_lenght").innerHTML = `${active_arr.length} posts`;
    document.getElementById("retired_lenght").innerHTML = `${retired_arr.length} posts`;
}
