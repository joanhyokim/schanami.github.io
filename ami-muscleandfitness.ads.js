var ami = ami || {};
ami.muscleandfitness = ami.muscleandfitness || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];


ami.muscleandfitness.ads = (function() {
    return {
        slots: {},
        elementInViewport: function(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight || rect.height))
        },
        initialize: function() {

            (function() {
                var gads = document.createElement('script');
                gads.async = true;
                gads.type = 'text/javascript';
                var useSSL = 'https:' == document.location.protocol;
                gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            })();

            googletag.cmd.push(function() {

                googletag.pubads().enableAsyncRendering();
                googletag.pubads().enableSingleRequest();
                googletag.pubads().collapseEmptyDivs();


                if (typeof ads_targeting["kw"] !== "undefined") {
                    googletag.pubads().setTargeting("kw", ads_targeting["kw"]);
                }
                if (typeof ads_targeting["s1"] !== "undefined") {
                    googletag.pubads().setTargeting("s1", ads_targeting["s1"]);
                }
                if (typeof ads_targeting["s2"] !== "undefined") {
                    googletag.pubads().setTargeting("s2", ads_targeting["s2"]);
                }
                if (typeof ads_targeting["s3"] !== "undefined") {
                    googletag.pubads().setTargeting("s3", ads_targeting["s3"]);
                }
                if (typeof ads_targeting["pid"] !== "undefined") {
                    googletag.pubads().setTargeting("pid", ads_targeting["pid"]);
                }
                if (typeof ads_targeting["type"] !== "undefined") {
                    googletag.pubads().setTargeting("type", ads_targeting["type"]);
                }
                if (typeof ads_targeting["topic"] !== "undefined") {
                    googletag.pubads().setTargeting("topic", ads_targeting["topic"]);
                }
                if (typeof ads_targeting["galleryid"] !== "undefined") {
                    googletag.pubads().setTargeting("galleryid", ads_targeting["galleryid"]);
                }
                if (document.location.search.slice(1) === "test=on") {
                    googletag.pubads().setTargeting("test", "on");
                }
                googletag.enableServices();
            });



            window.addEventListener('scroll', this.processElements);
            window.addEventListener('load', this.processElements);


        },
        processElements: function() {


            Object.keys(ami.muscleandfitness.ads.slots).forEach(function(key) {

                var el = document.getElementById(key);
                if (ami.muscleandfitness.ads.elementInViewport(el)) {
                    googletag.display(key);

                    delete ami.muscleandfitness.ads.slots[key];

                }
            });
        },
        addSlot: function(adObject) {
            var lazyload = adObject.lazyload;
            var targeting = adObject.targeting;
            googletag.cmd.push(function() {


                ami.muscleandfitness.ads.slots[adObject.idSelector] = googletag.defineSlot(adObject.adUnit, adObject.sizes, adObject.idSelector).addService(googletag.pubads());

                for (var i = 0, len = targeting.length; i < len; i++) {
                    var target = targeting[i];
                    ami.muscleandfitness.ads.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                }


                if (lazyload !== "true") {


                    googletag.display(adObject.idSelector);
                    delete ami.muscleandfitness.ads.slots[adObject.idSelector];
                }


            });


        },
        addOOPSlot: function(adObject) {

            googletag.cmd.push(function() {

                ami.muscleandfitness.ads.slots[adObject.idSelector] = googletag.defineOutOfPageSlot(adObject.adUnit, adObject.idSelector).addService(googletag.pubads());
                var targeting = adObject.targeting;

                for (var i = 0, len = targeting.length; i < len; i++) {
                    var target = targeting[i];
                    ami.muscleandfitness.ads.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                }
                googletag.display(adObject.idSelector);

                delete ami.muscleandfitness.ads.slots[adObject.idSelector];

            });



        }
    }
})();
ami.muscleandfitness.ads.initialize();

var adUnit;
if (ads_targeting["s2"]) {
    adUnit = "/" + ads_targeting["s1"] + "/" + ads_targeting["s2"];
} else {
    adUnit = "/" + ads_targeting["s1"];
}

if (document.documentElement.clientWidth >= 768) {
    ami.muscleandfitness.ads.addOOPSlot({
        slotName: "interstitial",
        adUnit: "/4216/muscleandfitness" + adUnit,
        idSelector: "dfp-ad-interstitial",
        targeting: [

            ["pos", "interstitial"]
        ]
    });
    ami.muscleandfitness.ads.addOOPSlot({
        slotName: "wallpaper",
        adUnit: "/4216/muscleandfitness" + adUnit,
        idSelector: "dfp-ad-wallpaper",
        targeting: [

            ["pos", "wallpaper"]
        ]
    });
    ami.muscleandfitness.ads.addSlot({
        slotName: "top_banner",
        adUnit: "/4216/muscleandfitness" + adUnit,
        sizes: [
            [728, 90],
            [728, 91],
            [970, 250],
            [970, 66]

        ],
        idSelector: "dfp-ad-top_banner",
        targeting: [

            ["pos", "top"]
        ],
        lazyload: "false"
    });

    ami.muscleandfitness.ads.addSlot({
        slotName: "right_rail_first",
        adUnit: "/4216/muscleandfitness" + adUnit,
        sizes: [
            [300, 250],
            [300, 251],
            [300, 600],
            [300, 1050]
        ],
        lazyload: "false",
        idSelector: "dfp-ad-right_rail_first",
        targeting: [

            ["pos", "right1"]
        ]
    });

    ami.muscleandfitness.ads.addSlot({
        slotName: "right_subscribe_300x195",
        adUnit: "/4216/muscleandfitness" + adUnit,
        sizes: [
            [300, 195]

        ],
        idSelector: "dfp-ad-right_subscribe_300x195",
        targeting: [

            ["pos", "subscription"]
        ],
        lazyload: "false"
    });

    ami.muscleandfitness.ads.addSlot({
        slotName: "right_rail_second",
        adUnit: "/4216/muscleandfitness" + adUnit,
        sizes: [
            [300, 250],
            [300, 252]
        ],
        idSelector: "dfp-ad-right_rail_second",
        lazyload: "true",
        targeting: [

            ["pos", "right2"]
        ]
    });

    ami.muscleandfitness.ads.addSlot({
        slotName: "teads",
        adUnit: "/4216/muscleandfitness" + adUnit,
        sizes: [
            [1, 1]
        ],
        idSelector: "dfp-ad-teads",
        lazyload: "false",
    });


}




if (document.documentElement.clientWidth < 768) {
    ami.muscleandfitness.ads.addSlot({
        slotName: "mobile_top",
        adUnit: "/4216/mob.muscleandfitness" + adUnit,
        sizes: [
            [320, 50],
            [300, 50],
            [300, 100]
        ],
        idSelector: "dfp-ad-mobile_top",
        lazyload: "false",
        targeting: [

            ["pos", "mobile_top"]

        ]
    });

    ami.muscleandfitness.ads.addSlot({
        slotName: "mobile_bottom",
        adUnit: "/4216/mob.muscleandfitness" + adUnit,
        sizes: [
            [300, 50],
            [320, 50],
            [300, 100]
        ],
        idSelector: "dfp-ad-mobile_bottom",
        lazyload: "false",
        targeting: [

            ["pos", "mobile_bottom"]
        ]
    });

    ami.muscleandfitness.ads.addOOPSlot({
        slotName: "mobile_interstitial",
        adUnit: "/4216/mob.muscleandfitness" + adUnit,
        idSelector: "dfp-ad-mobile_interstitial",
        targeting: [

            ["pos", "mobile_interstitial"]
        ]
    });

}
