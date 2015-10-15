var ami = ami || {};
ami.ads = ami.ads || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var ybotq = ybotq || [];
// (function() {
//   var gads = document.createElement('script');
//   gads.async = true;
//   gads.type = 'text/javascript';
//   var useSSL = 'https:' == document.location.protocol;
//   gads.src = (useSSL ? 'https:' : 'http:') +
//     '//www.googletagservices.com/tag/js/gpt.js';
//   var node = document.getElementsByTagName('script')[0];
//   node.parentNode.insertBefore(gads, node);
// })();


//
// var googletag = googletag || {};
// googletag.cmd = googletag.cmd || [];
// var useSSL = 'https:' == document.location.protocol;
// var src = (useSSL ? 'https:' : 'http:') +'//www.googletagservices.com/tag/js/gpt.js';
// document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
//
// <script src="http://localhost:8000/ami.ads.gpt.js">

ami.ads.gpt = (function() {
    return {
        slots: {},
        elementInViewport: function(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight || rect.height))
        },
        initialize: function() {

            (function() {
                var js = document.createElement('script');
                js.src = '//cdn.yldbt.com/js/yieldbot.intent.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(js, node);
            })();

            ybotq.push(function() {
                if (window.innerWidth >= 768) {
                    yieldbot.pub('4534');
                    yieldbot.defineSlot('right1_300x250', {
                        sizes: [
                            [300, 250],
                            [300, 600]
                        ]
                    });
                    yieldbot.defineSlot('top_728x90');
                }
                if (window.innerWidth < 768) {
                    yieldbot.pub('0651');
                    yieldbot.defineSlot('mobile_top');
                    yieldbot.defineSlot('mobile_bottom');
                }
                yieldbot.enableAsync();
                yieldbot.go();
            });

            var useSSL = 'https:' == document.location.protocol;
            var src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');

            ybotq.push(function() {
                googletag.cmd.push(function() {
                    // googletag.pubads().disableInitialLoad();
                    googletag.pubads().enableAsyncRendering();
                    googletag.pubads().enableSingleRequest();
                    googletag.pubads().collapseEmptyDivs();

                    // var targetKW = "";
                    // var targetS1 = Drupal.settings["mfTaboola"]["kargo"]["category"].replace(/-/g,"_");
                    // var targetS2 = Drupal.settings["mfTaboola"]["kargo"]["section"].replace(/-/g,"_");
                    // var targetPid = "nid_"+Drupal.settings["gigyaComments"]["commentsUIparams"]["streamID"];
                    // var targetType = dataLayer[0].pageCategory || "";
                    // var targetTopic = "";                

                    if(typeof ads_targeting["kw"] !== "undefined"){
                        googletag.pubads().setTargeting("kw", ads_targeting["kw"]);
                    }
                    if(typeof ads_targeting["s1"] !== "undefined"){
                        googletag.pubads().setTargeting("s1", ads_targeting["s1"]);
                    }
                    if(typeof ads_targeting["s2"] !== "undefined"){
                        googletag.pubads().setTargeting("s2", ads_targeting["s2"]);
                    }
                    if(typeof ads_targeting["s3"] !== "undefined"){
                        googletag.pubads().setTargeting("s3", ads_targeting["s3"]);
                    }
                    if(typeof ads_targeting["pid"] !== "undefined"){
                        googletag.pubads().setTargeting("pid", ads_targeting["pid"]);
                    }
                    if(typeof ads_targeting["type"] !== "undefined"){
                        googletag.pubads().setTargeting("type", ads_targeting["type"]);
                    }
                    if(typeof ads_targeting["topic"] !== "undefined"){
                        googletag.pubads().setTargeting("topic", ads_targeting["topic"]);
                    }

                    googletag.enableServices();
                    
                                    
                    var _sf_async_config = {};
                    /** CHARTBEAT CONFIGURATION START **/
                    _sf_async_config.uid = 11054;
                    _sf_async_config.domain = 'mensfitness.com';
                    _sf_async_config.engagedAdFilters = [{engagedSeconds:20}];
                    var adunit = [ads_targeting["s1"],ads_targeting["s2"],ads_targeting["s3"]]
                    if(ads_targeting["type"] === "landing_page"){
                        _sf_async_config.zone = 'mensfitness/'+adunit.join("/")+"landing";
                    }
                    else if(ads_targeting["type"] == "homepage"){
                        _sf_async_config.zone = 'mensfitness/homepage';
                    }
                    else {
                        _sf_async_config.zone = 'mensfitness/'+adunit.join("/");
                    }
                    if(ads_targeting["type"] === "homepage"){
                        _sf_async_config.sections = "other,mf-homepage";    
                    }
                    else {
                        _sf_async_config.sections = "other,"+document.location.pathname.replace(/\//g,"_").slice(1);
                    }
                    
                    console.log("chartbeat zone:"+_sf_async_config.zone);
                    console.log("chartbeat sections:"+_sf_async_config.sections);
                    
                    _sf_async_config.useCanonical = true;
                    /** CHARTBEAT CONFIGURATION END **/
                    

                    window._sf_endpt=(new Date()).getTime();
                    var e = document.createElement('script');
                    e.setAttribute('language', 'javascript');
                    e.setAttribute('type', 'text/javascript');
                    e.setAttribute('src', '//static.chartbeat.com/js/chartbeat_ad.js');
                    document.body.appendChild(e);

                    // googletag.pubads().setTargeting("kw", "dev3");
                    // googletag.pubads().setTargeting("s1", "homepage");
                    // googletag.pubads().setTargeting("pid", "homepage");
                    // googletag.pubads().setTargeting("type", "homepage");
                });


            });

            window.addEventListener('scroll', this.processElements);
            window.addEventListener('load', this.processElements);



            window.addEventListener("scroll", function() {
                var l = document.getElementById("dfp-ad-top_728x90");
                var top = l.getBoundingClientRect().top;
                var bottom = document.getElementById("dfp-ad-right1_300x250").getBoundingClientRect().top;
                var table = [];
                var leaderboard_height = l.getBoundingClientRect().height;

                table.push(["leaderboard height", leaderboard_height]);
                table.push(["window.scrollY", window.scrollY]);
                table.push(["leaderboard.top", top]);

                var page_height = document.getElementsByTagName("html")[0].offsetHeight;
                if (window.scrollY < bottom) {

                    // if(window.scrollY > (60+leaderboard_height)){
                    // if(window.scrollY > top && window.scrollY < 1200){
                    // if(window.scrollY > top && top >= -250){
                    if (leaderboard_height == 90) {
                        l.classList.add("fixed");
                        l.classList.add("fixed-90");
                    }
                    if (leaderboard_height == 250) {
                        l.classList.add("fixed");
                        l.classList.add("fixed-250");
                    }

                    // 			l.classList.add("fixed");
                    // 			l.setAttribute("style","height:"+leaderboard_height+"px");
                    window.setTimeout(function() {
                        l.classList.add("close");
                        // l.classList.remove("fixed");
                        l.classList.remove("fixed-90");
                        l.classList.remove("fixed-250");
                    }, 6000);
                    // }
                    // if(window.scrollY < leaderboard_height){
                    if (window.scrollY == 0) {
                        //  l.classList.add("close");
                        l.classList.remove("fixed");
                        l.classList.remove("fixed-90");
                        l.classList.remove("fixed-250");
                    }
                }

                // else {
                // 	l.classList.remove("fixed");
                // }
                // 	console.table(table);
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
                    if (leaderboard.getBoundingClientRect().bottom !== 1) {
                        ad1.setAttribute("style", "position:fixed;top:" + leaderboard_height + "px;z-index:99999;background:#fff;padding-bottom:20px")
                    } else if (header_height == 83) {
                        ad1.setAttribute("style", "position:fixed;top:83px;z-index:99999;background:#fff;padding-bottom:20px")
                    } else {
                        ad1.setAttribute("style", "position:fixed;top:0px;z-index:99999;background:#fff;padding-bottom:20px")
                    }
                    ad2.setAttribute("style", "");
                }
                if (ad2_top < 250 && ad2_top >= 0 && direction == "down") {
                    if (leaderboard.getBoundingClientRect().bottom !== 1) {
                        ad2.setAttribute("style", "position:fixed;top:" + leaderboard_height + "px;z-index:99999;background:#fff;padding-bottom:20px")
                    } else if (header_height === 83) {
                        ad2.setAttribute("style", "position:fixed;top:83px;z-index:99999;background:#fff;padding-bottom:20px")
                    } else {
                        ad2.setAttribute("style", "position:fixed;top:0px;z-index:99999;background:#fff;padding-bottom:20px")
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
                var h = document.querySelector("#top-ad.nh").getBoundingClientRect().height;
                if (h > 90) {
                    document.querySelector(".page-wrapper").setAttribute("style", "margin-top:380px");
                }
            });

        },
        processElements: function() {


            Object.keys(ami.ads.gpt.slots).forEach(function(key) {
                //console.log("key: "+key);
                var el = document.getElementById(key);
                if (ami.ads.gpt.elementInViewport(el)) {
                    // googletag.cmd.push(function(){
                    // setTimeout(function(){
                    googletag.display(key);
                    console.log(key);
                    delete ami.ads.gpt.slots[key];

                    // },1000);

                    // });
                }
            });
        },
        addSlot: function(adObject) {

            ybotq.push(function() {
                googletag.cmd.push(function() {
                    var targeting = adObject.targeting;

                    ami.ads.gpt.slots[adObject.idSelector] = googletag.defineSlot(adObject.adUnit, adObject.sizes, adObject.idSelector).addService(googletag.pubads());

                    for (var i = 0, len = targeting.length; i < len; i++) {
                        var target = targeting[i];
                        ami.ads.gpt.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                    }
                    yieldbot.setSlotTargeting(adObject.idSelector, ami.ads.gpt.slots[adObject.idSelector]);

                    if (adObject.lazyload !== "true") {
                        googletag.display(adObject.idSelector);

                        delete ami.ads.gpt.slots[adObject.idSelector];
                    }

                    googletag.enableServices();
                    // googletag.pubads().enableAsyncRendering();
                    // googletag.pubads().enableSingleRequest();
                    // googletag.pubads().collapseEmptyDivs();
                });
            });

        },
        addOOPSlot: function(adObject) {
            ybotq.push(function() {

                googletag.cmd.push(function() {

                    ami.ads.gpt.slots[adObject.idSelector] = googletag.defineOutOfPageSlot(adObject.adUnit, adObject.idSelector).addService(googletag.pubads());
                    var targeting = adObject.targeting;
                    for (var i = 0, len = targeting.length; i < len; i++) {
                        var target = targeting[i];
                        ami.ads.gpt.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                    }
                    // yieldbot.setSlotTargeting(adObject.slotName, ami.ads.gpt.slots[adObject.slotName]);
                    yieldbot.setSlotTargeting(adObject.idSelector, ami.ads.gpt.slots[adObject.idSelector]);
                    googletag.enableServices();
                    // googletag.pubads().enableAsyncRendering();

                    // googletag.pubads().enableSingleRequest();
                    // googletag.pubads().collapseEmptyDivs();
                });

            });

        }
    }
})();
ami.ads.gpt.initialize();

// ami.ads.gpt.addSlot({
// 	slotName: "top_728x90",
// 	adUnit: "mensfitness/homepage",
// 	sizes: [[728, 90], [970, 66], [970, 250]],
// 	idSelector: "dfp-ad-top_728x90",
// 	targeting: [["pos","top"]]
// })
//ami.ads.gpt.addSlot({sizes: [300,600]});
var adUnit = "/" + Drupal.settings["mfTaboola"]["kargo"]["category"] + "/" + Drupal.settings["mfTaboola"]["kargo"]["section"];
if (window.innerWidth > 768) {
    ami.ads.gpt.addOOPSlot({
        slotName: "interstitial",
        adUnit: "/4216/mensfitness" + adUnit,
        idSelector: "dfp-ad-interstitial",
        targeting: [
        // ["pos", "interstitial"]
        ["kw", "dev3"]]
    });
    ami.ads.gpt.addOOPSlot({
        slotName: "wallpaper",
        adUnit: "/4216/mensfitness" + adUnit,
        idSelector: "dfp-ad-wallpaper",
        targeting: [
        // ["pos", "wallpaper"]
        ["kw", "dev3"]]
    });
    ami.ads.gpt.addSlot({
        slotName: "top_728x90",
        adUnit: "/4216/mensfitness" + adUnit,
        sizes: [
            [728, 90],
            [970, 66],
            [970, 250]
        ],
        idSelector: "dfp-ad-top_728x90",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "top"]
            ],
        lazyload: "false"
    });

    ami.ads.gpt.addSlot({
        slotName: "right1_300x250",
        adUnit: "/4216/mensfitness" + adUnit,
        sizes: [
            [300, 250],
            [300, 600],
            [300, 1050]
        ],
        lazyload: "false",
        idSelector: "dfp-ad-right1_300x250",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "right1"]
            ]
    });
    ami.ads.gpt.addSlot({
        slotName: "right_subscribe_300x195",
        adUnit: "/4216/mensfitness" + adUnit,
        sizes: [300, 195],
        idSelector: "dfp-ad-right_subscribe_300x195",
        lazyload: "false",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "subscription"]
            ]
    });
    ami.ads.gpt.addSlot({
        slotName: "right2_300x250",
        adUnit: "/4216/mensfitness" + adUnit,
        sizes: [300, 250],
        idSelector: "dfp-ad-right2_300x250",
        lazyload: "true",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "right2"]
            ]
    });

    // setTimeout(function(){ window.scrollBy(1, 1); }, 1200);

}



if (window.innerWidth < 768) {
    ami.ads.gpt.addSlot({
        slotName: "mobile_top",
        adUnit: "/4216/mob.mensfitness" + adUnit,
        sizes: [
            [320, 50],
            [300, 50],
            [300, 100]
        ],
        idSelector: "dfp-ad-mobile_top",
        lazyload: "true",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "mobile_top"]

        ]
    });

    ami.ads.gpt.addSlot({
        slotName: "mobile_bottom",
        adUnit: "/4216/mob.mensfitness" + adUnit,
        sizes: [
            [300, 50],
            [320, 50],
            [300, 100]
        ],
        idSelector: "dfp-ad-mobile_bottom",
        lazyload: "true",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "mobile_bottom"]
            ]
    });

}
