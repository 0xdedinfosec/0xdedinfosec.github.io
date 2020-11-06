$(window).scroll(function() {
    if ($(this).scrollTop() > 50 && $("#sidebar-trigger").css("display") == "none") {
        $("#back-to-top").fadeIn()
    } else {
        $("#back-to-top").fadeOut()
    }
});
$(function() {
    $("#back-to-top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false
    })
});
$(function() {
    var j = $("#sidebar-trigger");
    var o = $("#search-trigger");
    var h = $("#search-cancel");
    var b = $("#search-cleaner");
    var e = $("#main");
    var c = $("#topbar-title");
    var k = $("#search-wrapper");
    var i = $("#search-result-wrapper");
    var g = $("#search-results");
    var l = $("#search-input");
    var a = $("#search-hints");
    var d = (function() {
        var p = 0;
        return {
            block: function() {
                p = $(window).scrollTop();
                $("body").addClass("no-scroll")
            },
            release: function() {
                $("body").removeClass("no-scroll");
                $("html,body").scrollTop(p)
            },
            getOffset: function() {
                return p
            }
        }
    }
    )();
    var m = (function() {
        return {
            on: function() {
                j.addClass("unloaded");
                c.addClass("unloaded");
                o.addClass("unloaded");
                k.addClass("d-flex");
                h.addClass("loaded")
            },
            off: function() {
                h.removeClass("loaded");
                k.removeClass("d-flex");
                j.removeClass("unloaded");
                c.removeClass("unloaded");
                o.removeClass("unloaded")
            }
        }
    }
    )();
    var n = (function() {
        var p = false;
        return {
            on: function() {
                if (!p) {
                    i.removeClass("unloaded");
                    e.addClass("hidden");
                    p = true;
                    d.block()
                }
            },
            off: function() {
                if (p) {
                    g.empty();
                    if (a.hasClass("unloaded")) {
                        a.removeClass("unloaded")
                    }
                    i.addClass("unloaded");
                    b.removeClass("visable");
                    e.removeClass("hidden");
                    l.val("");
                    p = false;
                    d.release()
                }
            },
            isVisable: function() {
                return p
            }
        }
    }
    )();
    function f() {
        return h.hasClass("loaded")
    }
    o.click(function() {
        m.on();
        n.on();
        l.focus()
    });
    h.click(function() {
        m.off();
        n.off()
    });
    l.focus(function() {
        k.addClass("input-focus")
    });
    l.focusout(function() {
        k.removeClass("input-focus")
    });
    l.on("keyup", function(p) {
        if (p.keyCode == 8 && l.val() == "") {
            if (!f()) {
                n.off()
            } else {
                a.removeClass("unloaded")
            }
        } else {
            if (l.val() != "") {
                n.on();
                if (!b.hasClass("visible")) {
                    b.addClass("visable")
                }
                if (f()) {
                    a.addClass("unloaded")
                }
            }
        }
    });
    b.on("click", function() {
        l.val("");
        if (f()) {
            a.removeClass("unloaded");
            g.empty()
        } else {
            n.off()
        }
        l.focus();
        b.removeClass("visable")
    })
});
$(function() {
    var d = false;
    $("#sidebar-trigger").click(function() {
        if (d == false) {
            $("#sidebar").addClass("sidebar-expand");
            b();
            d = true
        }
    });
    $("#mask").click(function() {
        $("#sidebar").removeClass("sidebar-expand");
        c();
        d = false
    });
    var a = (function(e) {
        var f;
        return {
            afterOpen: function() {
                f = document.scrollingElement.scrollTop;
                document.body.classList.add(e);
                document.body.style.top = -f + "px"
            },
            beforeClose: function() {
                document.body.classList.remove(e);
                document.scrollingElement.scrollTop = f;
                document.body.style.top = ""
            }
        }
    }
    )("no-scroll");
    function b() {
        a.afterOpen()
    }
    function c() {
        a.beforeClose()
    }
});
$(function() {
    var d;
    var c = 0;
    var e = 5;
    var b = $("#topbar-wrapper").outerHeight();
    $(window).scroll(function(f) {
        if ($("#topbar-title").is(":hidden")) {
            d = true
        }
    });
    setInterval(function() {
        if (d) {
            a();
            d = false
        }
    }, 250);
    function a() {
        var f = $(this).scrollTop();
        if (Math.abs(c - f) <= e) {
            return
        }
        if (f > c && f > b) {
            $("#topbar-wrapper").removeClass("topbar-down").addClass("topbar-up");
            if ($("#toc-wrapper").length > 0) {
                $("#toc-wrapper").removeClass("topbar-down")
            }
            if ($(".access").length > 0) {
                $(".access").removeClass("topbar-down")
            }
            if ($("#search-input").is(":focus")) {
                $("#search-input").blur()
            }
        } else {
            if (f + $(window).height() < $(document).height()) {
                $("#topbar-wrapper").removeClass("topbar-up").addClass("topbar-down");
                if ($("#toc-wrapper").length > 0) {
                    $("#toc-wrapper").addClass("topbar-down")
                }
                if ($(".access").length > 0) {
                    $(".access").addClass("topbar-down")
                }
            }
        }
        c = f
    }
});
$(function() {
    var a = $("#topbar-title").text().trim();
    var b = ($("div.post>h1").length > 0) ? $("div.post>h1").text().trim() : $("h1").text().trim();
    if ($("#page-category").length || $("#page-tag").length) {
        if (/\s/.test(b)) {
            b = b.replace(/[0-9]/g, "").trim()
        }
    }
    $(window).scroll(function() {
        if ($("#post-list").length || $("div.post>h1").is(":hidden") || $("#topbar-title").is(":hidden") || $("#sidebar.sidebar-expand").length) {
            return false
        }
        if ($(this).scrollTop() >= 95) {
            if ($("#topbar-title").text() != b) {
                $("#topbar-title").text(b)
            }
        } else {
            if ($("#topbar-title").text() != a) {
                $("#topbar-title").text(a)
            }
        }
    });
    $("#topbar-title").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 800)
    })
});
function copyLink(a) {
    if (!a || 0 === a.length) {
        a = window.location.href
    }
    var b = $("<input>");
    $("body").append(b);
    b.val(a).select();
    document.execCommand("copy");
    b.remove();
    alert("Link copied successfully!")
}
;