var ami = ami || {};
ami.mensfitness = ami.mensfitness || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var ybotq = ybotq || [];
var adUnit;

/* Updated 11/02/2015 12:28pm */
ami.mensfitness.ads = (function() {
    return {
        slots: {},
        elementInViewport: function(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight || rect.height))
        },
        addYieldBotBidProvider: function(adUnit){
            
        },
        initialize: function() {

            // this.addYieldBotBidProvider();

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
                googletag.enableServices();

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
                if (document.location.search.slice(1) === "test=on") {
                    googletag.pubads().setTargeting("test", "on");
                }

            });



            window.addEventListener('scroll', this.processElements);
            window.addEventListener('load', this.processElements);



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

        },
        processElements: function() {


            Object.keys(ami.mensfitness.ads.slots).forEach(function(key) {

                var el = document.getElementById(key);
                if (ami.mensfitness.ads.elementInViewport(el)) {
                    googletag.display(key);

                    delete ami.mensfitness.ads.slots[key];

                }
            });
        },
        addSlot: function(adObject) {
            var lazyload = adObject.lazyload;
            var targeting = adObject.targeting;
            googletag.cmd.push(function() {


                ami.mensfitness.ads.slots[adObject.idSelector] = googletag.defineSlot(adObject.adUnit, adObject.sizes, adObject.idSelector).addService(googletag.pubads());

                for (var i = 0, len = targeting.length; i < len; i++) {
                    var target = targeting[i];
                    ami.mensfitness.ads.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                }


                if (lazyload !== "true") {


                    googletag.display(adObject.idSelector);
                    delete ami.mensfitness.ads.slots[adObject.idSelector];
                }


            });


        },
        addOOPSlot: function(adObject) {

            googletag.cmd.push(function() {

                ami.mensfitness.ads.slots[adObject.idSelector] = googletag.defineOutOfPageSlot(adObject.adUnit, adObject.idSelector).addService(googletag.pubads());
                var targeting = adObject.targeting;

                for (var i = 0, len = targeting.length; i < len; i++) {
                    var target = targeting[i];
                    ami.mensfitness.ads.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                }
                googletag.display(adObject.idSelector);

                delete ami.mensfitness.ads.slots[adObject.idSelector];

            });



        }
    }
})();



ami.mensfitness.ads.initialize();


// var adUnit;
if (ads_targeting["s2"]) {
    adUnit = "/" + ads_targeting["s1"] + "/" + ads_targeting["s2"];
} else {
    adUnit = "/" + ads_targeting["s1"];
}
var food = new pubfood();
food.addSlot({
       name: '4216/mensfitness/'+adUnit+'top_728x90',
       sizes: [
            [728, 90],
            [970, 66],
            [970, 250]
       ],
       elementId: 'dfp-ad-top_728x90',
       bidProviders: ["yieldbot"]
});
var leaderboardAdUnit = adUnit + "/top_728x90";
var obj = {};
obj["/4216/mensfitness/" + adUnit] = "top_728x90";

food.addBidProvider({
   name: 'yieldbot',
   libUri: '//cdn.yldbt.com/js/yieldbot.intent.js',
   slotParams: obj,
   init: function(slots, pushBid, done) {
       var slotMap = {};
       var slotParams = this.slotParams;

       ybotq.push(function() {
        if(document.documentElement.clientWidth >= 768){
          yieldbot.pub('4534');
        }else{
          yieldbot.pub('0651');
        };
        for (var k = 0; k < slots.length; k++) {
                     var slot = slots[k];
                     var ybslot = slotParams[slot.name];

                     yieldbot.defineSlot(ybslot, {
                       sizes: slot.sizes
                     });
                     slotMap[ybslot] = slot.name;
                   }
               yieldbot.enableAsync();
               yieldbot.go();
             });
             ybotq.push(function() {
               var pageSlots = yieldbot.getPageCriteria().split(',');
               for (var i = 0; i < pageSlots.length; i++) {
                 var slotInfo = pageSlots[i].split(':');
                 var slot = slotInfo[0];
                 var size = slotInfo[1];
                 var bid = 0;
                 if (slotInfo.length && slotInfo[2]) {
                   bid = parseFloat(slotInfo[2], 10);
                 }
                 var sizes = size.split('x');
                 sizes[0] = parseInt(sizes[0], 10);
                 sizes[1] = parseInt(sizes[1], 10);
                 // submit my bid...
                 var bidObject = {
                   slot: slotMap[slot] || 'undefined_slot',
                   value: bid,
                   sizes: sizes,
                   targeting: {
                     ybot_size: size,
                     ybot_cpm: bid,
                     ybot_ad: 'y',
                     ybot_slot: slot
                   }
                 };
                 pushBid(bidObject);
               }
           done();
       });
   },
   refresh: function(slots, pushBid, done) {
   }
});
// ami.mensfitness.ads.addYieldBotBidProvider(adUnit);

food.setAuctionProvider({
     name: 'Google',
     libUri: '//www.googletagservices.com/tag/js/gpt.js',
     init: function(targeting, done) {
        console.log("Pubfood");
            // console.log(targeting);
           googletag.cmd.push(function() {
             var i;
             for (i = 0; i < targeting.length; i++) {
               var slot = targeting[i];

               var gptslot = googletag.defineSlot(slot.name, slot.sizes, slot.elementId)
                 .addService(googletag.pubads());
                 console.log("pubfood targeting:");
                 console.dir(slot.targeting);
               for (var p in slot.targeting) {
                 gptslot.setTargeting(p, slot.targeting[p]);
               }
             }
           });
           googletag.cmd.push(function() {
             googletag.enableServices();
             done();
           });
       },
       refresh: function(targeting, done) {


       }
   });


food.timeout(1500);
food.observe(function(ev) {
  console.log(ev);
});
food.start();

food.observe('AUCTION_POST_RUN', function() {
  googletag.cmd.push(function() {
    googletag.display('dfp-ad-top_728x90');
  });
});

