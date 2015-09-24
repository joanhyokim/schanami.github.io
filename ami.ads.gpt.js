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

            // ybotq.push(function() {
            googletag.cmd.push(function() {
                // googletag.pubads().disableInitialLoad();
                googletag.pubads().enableAsyncRendering();
                googletag.pubads().enableSingleRequest();
                googletag.pubads().collapseEmptyDivs();
                // googletag.pubads().setTargeting("kw", "dev3");
                // googletag.pubads().setTargeting("s1", "homepage");
                // googletag.pubads().setTargeting("pid", "homepage");
                // googletag.pubads().setTargeting("type", "homepage");
            });


            // });

            window.addEventListener('scroll', this.processElements);
            window.addEventListener('load', this.processElements);


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
                    
                    if(adObject.lazyload !== "true"){
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


ami.ads.gpt.addOOPSlot({
    slotName: "interstitial",
    adUnit: "/4216/mensfitness",
    idSelector: "dfp-ad-interstitial",
    targeting: [
        // ["pos", "interstitial"]
        ["kw", "dev3"]
    ]
});
ami.ads.gpt.addOOPSlot({
    slotName: "wallpaper",
    adUnit: "/4216/mensfitness",
    idSelector: "dfp-ad-wallpaper",
    targeting: [
        // ["pos", "wallpaper"]
        ["kw", "dev3"]
    ]
});
ami.ads.gpt.addSlot({
    slotName: "top_728x90",
    adUnit: "/4216/mensfitness",
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
    adUnit: "/4216/mensfitness",
    sizes: [
        [300, 250],
        [300, 600],
        [300, 1050]
    ],
    idSelector: "dfp-ad-right1_300x250",
    targeting: [
        ["kw", "dev3"]
        // ["pos", "right1"]
    ]
});
// ami.ads.gpt.addSlot({
//     slotName: "right_subscribe_300x195",
//     adUnit: "/4216/mensfitness/homepage",
//     sizes: [300, 195],
//     idSelector: "dfp-ad-right_subscribe_300x195",
//     targeting: [
//         ["kw", "dev3"]
//         // ["pos", "subscription"]
//     ]
// });
ami.ads.gpt.addSlot({
    slotName: "right2_300x250",
    adUnit: "/4216/mensfitness",
    sizes: [300, 250],
    idSelector: "dfp-ad-right2_300x250",
    targeting: [
        ["kw", "dev3"]
        // ["pos", "right2"]
    ]
});
if (window.innerWidth < 768) {
    ami.ads.gpt.addSlot({
        slotName: "mobile_top",
        adUnit: "/4216/mob.mensfitness/homepage",
        sizes: [
            [320, 50],
            [300, 50],
            [300, 100]
        ],
        idSelector: "dfp-ad-mobile_top",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "mobile_top"]

        ]
    });

    ami.ads.gpt.addSlot({
        slotName: "mobile_bottom",
        adUnit: "/4216/mob.mensfitness/homepage",
        sizes: [
            [300, 50],
            [320, 50],
            [300, 100]
        ],
        idSelector: "dfp-ad-mobile_bottom",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "mobile_bottom"]
        ]
    });

}
