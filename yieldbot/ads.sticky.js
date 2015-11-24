window.addEventListener("scroll", function() {
                var l = document.getElementById("dfp-ad-top_728x90");
                var top = l.getBoundingClientRect().top;
                var bottom = document.getElementById("dfp-ad-right1_300x250").getBoundingClientRect().top;

                var leaderboard_height = l.getBoundingClientRect().height;

                var page_height = document.getElementsByTagName("html")[0].offsetHeight;
                if (window.scrollY < bottom) {

                    if (leaderboard_height == 90) {
                        l.classList.add("fixed");
                        l.classList.add("fixed-90");
                    }
                    if (leaderboard_height == 250) {
                        l.classList.add("fixed");
                        l.classList.add("fixed-250");
                    }
                    window.setTimeout(function() {
                        l.classList.add("close");

                        l.classList.remove("fixed-90");
                        l.classList.remove("fixed-250");
                    }, 6000);

                    if (window.scrollY == 0) {
                        //  l.classList.add("close");
                        l.classList.remove("fixed");
                        l.classList.remove("fixed-90");
                        l.classList.remove("fixed-250");
                    }
                }


            });


            var position = window.scrollY;
            window.addEventListener("scroll", function() {
                /* catch scroll direction */
                var scroll = window.scrollY;
                var direction = "";
                if (scroll > position) {
                    direction = "down"
                } else {
                    direction = "up";
                }
                position = scroll;

                var ad1 = document.getElementById("dfp-ad-right1_300x250");
                var ad2 = document.getElementById("dfp-ad-right2_300x250");

                var ad1_top = ad1.getBoundingClientRect().top;
                var ad2_top = ad2.getBoundingClientRect().top;


                var leaderboard = document.getElementById("dfp-ad-top_728x90");
                var leaderboard_height = leaderboard.getBoundingClientRect().height;
                var header = document.getElementById("header");
                var header_height = header.getBoundingClientRect().height;


                var anchorTopPos = 0;
                if (leaderboard.getBoundingClientRect().top > 0) {
                    anchorTopPos = anchorTopPos + leaderboard_height;
                }
                if (header_height === 83) {
                    anchorTopPos = anchorTopPos + 83;
                }

                if (ad1_top < 250 && ad1_top >= 0 && direction == "down") {
                    if (document.getElementById("top-ad").classList.contains("nh") && leaderboard.getBoundingClientRect().height !== 1) {
                        var topValue = 82 + parseInt(leaderboard_height);
                        ad1.setAttribute("style", "position:fixed;top:" + topValue + "px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    } else if (!document.getElementById("top-ad").classList.contains("nh") && leaderboard.getBoundingClientRect().height !== 1) {
                        ad1.setAttribute("style", "position:fixed;top:" + leaderboard_height + "px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    } else if (header_height == 82) {
                        ad1.setAttribute("style", "position:fixed;top:82px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    } else {
                        ad1.setAttribute("style", "position:fixed;top:0px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    }
                    ad2.setAttribute("style", "");
                }
                if (ad2_top < 250 && ad2_top >= 0 && direction == "down") {
                    // if (leaderboard.getBoundingClientRect().bottom !== 1) {
                    //     ad2.setAttribute("style", "position:fixed;top:" + leaderboard_height + "px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    // } 
                    if (document.getElementById("top-ad").classList.contains("nh") && leaderboard.getBoundingClientRect().height !== 1) {
                        var topValue = 82 + parseInt(leaderboard_height);
                        ad2.setAttribute("style", "position:fixed;top:" + topValue + "px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    } else if (!document.getElementById("top-ad").classList.contains("nh") && leaderboard.getBoundingClientRect().height !== 1) {

                        ad2.setAttribute("style", "position:fixed;top:" + leaderboard_height + "px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    } else if (header_height === 82) {
                        ad2.setAttribute("style", "position:fixed;top:82px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    } else {
                        ad2.setAttribute("style", "position:fixed;top:0px;z-index:99999;background:#fff;padding-top:20px;padding-bottom:20px")
                    }
                    ad1.setAttribute("style", "");
                }
                if ((ad2.getBoundingClientRect().bottom + 25) > document.getElementById("footer").getBoundingClientRect().top) {
                    ad2.setAttribute("style", "");
                }
                if (window.scrollY < 50) {
                    ad1.setAttribute("style", "");
                    ad2.setAttribute("style", "");
                }
            });



            window.addEventListener('scroll', function() {
                if (document.querySelector("#top-ad.nh") !== null) {
                    var h = document.querySelector("#top-ad.nh").getBoundingClientRect().height;
                    if (h > 90) {
                        document.querySelector(".page-wrapper").setAttribute("style", "margin-top:380px");
                    }

                }
            });