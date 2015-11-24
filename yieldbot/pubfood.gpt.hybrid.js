var ami = ami || {};
ami.mensfitness = ami.mensfitness || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var ybotq = ybotq || [];
var adUnit;


var gpt_targeting = {};

if (ads_targeting["s2"]) {
    adUnit = "/" + ads_targeting["s1"] + "/" + ads_targeting["s2"];
} else {
    adUnit = "/" + ads_targeting["s1"];
}


ami.mensfitness.ads = (function() {
    return {
        slots: {},
        elementInViewport: function(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight || rect.height))
        },
        processElements: function() {

            var slots = ami.mensfitness.ads.slots;
            var slot;
            Object.keys(ami.mensfitness.ads.slots).forEach(function(key) {
                var el = document.getElementById(key);
                if (ami.mensfitness.ads.elementInViewport(el)) {
                food.observe('AUCTION_POST_RUN', function() {

                  googletag.cmd.push(function() {
                    googletag.display(key);
                    console.log("lazy loading: "+key);
                    delete ami.mensfitness.ads.slots[key];

                  });
                });
                }
            });

        },        

        init: function(){
          window.addEventListener("scroll",this.processElements);
          window.addEventListener("load",this.processElements);
        }
    }
})();

ami.mensfitness.ads.init();

var food = new pubfood();


food.addSlot({
       name: '4216/mensfitness'+adUnit,
       sizes: [
            [728, 90],
            [970, 66],
            [970, 90],
            [970, 250]
       ],
        slotParams: {
          "pos":"top",
          "lazyload":"false"
        },       
       elementId: 'dfp-ad-top_728x90',
       bidProviders: ["yieldbot"]
});


food.addSlot({
        name: '4216/mensfitness'+adUnit,
        sizes: [
            [300, 250],
            [300, 251],
            [300, 600],
            [300, 1050]
        ],
        slotParams: {
          "pos":"right1",
          "lazyload":"false"
        },
        elementId: 'dfp-ad-right1_300x250',
        bidProviders: ["yieldbot"]
});


googletag.cmd.push(function() {
    googletag.defineOutOfPageSlot('/4216/mensfitness'+adUnit, 'dfp-ad-interstitial').setTargeting('pos', ['interstitial']).addService(googletag.pubads());
});

googletag.cmd.push(function() {
    googletag.defineOutOfPageSlot('/4216/mensfitness'+adUnit, 'dfp-ad-wallpaper').setTargeting('pos', ['wallpaper']).addService(googletag.pubads());
});


// googletag.cmd.push(function() {
//     googletag.defineSlot('/4216/mensfitness'+adUnit, 'dfp-ad-right2_300x250').setTargeting('pos', ['right2']).addService(googletag.pubads());
// });
food.addSlot({
       name: '4216/mensfitness'+adUnit,
       sizes: [
            [300, 250],
            [300, 252]
       ],
       slotParams: {
        "pos":"right2",
        "lazyload":"true"
       },
       elementId: 'dfp-ad-right2_300x250',
       bidProviders: []
});




food.addBidProvider({
    name: 'yieldbot',
    libUri: '//cdn.yldbt.com/js/yieldbot.intent.js',
    ybParams: {
        // "dfp-ad-interstitial":"interstitial",
        // "dfp-ad-wallpaper":"wallpaper",
        "dfp-ad-top_728x90": "top_728x90",
        "dfp-ad-right1_300x250":"right1_300x250",
        // "dfp-ad-right2_300x250":"right2_300x250",
        "dfp-ad-mobile_top":"mobile_top",
        "dfp-ad-mobile_bottom":"mobile_bottom"
    },
    init: function(slots, pushBid, done) {
        var slotMap = {};
        var ybParams = this.ybParams;

        ybotq.push(function() {
            if (document.documentElement.clientWidth >= 768) {
                yieldbot.pub('4534');
            } else {
                yieldbot.pub('0651');
            };

            for (var k = 0; k < slots.length; k++) {
                var slot = slots[k];
                var ybslot = ybParams[slot.elementId];

                yieldbot.defineSlot(ybslot, {
                    sizes: slot.sizes
                });
                slotMap[ybslot] = slot.name;
            }
            yieldbot.enableAsync();
            yieldbot.go();
        });
        ybotq.push(function() {

            var pageCriteria = yieldbot.getPageCriteria();
            console.dir(pageCriteria);
            var pageSlots = pageCriteria !== '' ? pageCriteria.split(',') : [];
                
                for (var i = 0; i < pageSlots.length; i++) {
                var slotInfo = pageSlots[i].split(':');
                var slot = slotInfo[0];
                var size = slotInfo[1];
                alert(size); 
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
                    customParam: true,
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
    refresh: function(slots, pushBid, done) {}
});

food.setAuctionProvider({
     name: 'Google',
     libUri: '//www.googletagservices.com/tag/js/gpt.js',
     gpt_targeting: {
      // "dfp-ad-interstitial": [["pos","interstitial"]],
      // "dfp-ad-wallpaper": [["pos","wallpaper"]],
      "dfp-ad-top_728x90": [["pos","top"]],
      "dfp-ad-right1_300x250": [["pos","right1"]],
      // "dfp-ad-right2_300x250": [["pos","right2"]],
      "dfp-ad-mobile_top": [["pos","mobile_top"]],
      "dfp-ad-mobile_box": [["pos","mobile_box"]],
      "dfp-ad-mobile_bottom": [["pos","mobile_bottom"]]
     },
     // oop: [
     //  "dfp-ad-interstitial",
     //  "dfp-ad-wallpaper"
     // ],
     init: function(targeting, done) {
          var gpt_targeting = this.gpt_targeting;
          // var targeting = targeting;
          // var oop_slots = this.oop;
          var gptslot;
          console.dir(targeting);


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
               // done();
            });          

           googletag.cmd.push(function() {
             var i;
             for (i = 0; i < targeting.length; i++) {
               var slot = targeting[i];


                gptslot = googletag.defineSlot(slot.name, slot.sizes, slot.elementId)
                 .addService(googletag.pubads());   

                 ami.mensfitness.ads.slots[slot.elementId] = gptslot;             



             for(j = 0; j < gpt_targeting[slot.elementId].length; j++){
              pair = gpt_targeting[slot.elementId][j];
              key = pair[0];
              value = pair[1];
             gptslot.setTargeting(key,value);

             }
             }
           });
           done();
       },
       refresh: function(targeting, done) {


       }
   });


food.timeout(1500);
food.observe(function(ev) {
  console.log(ev);
});
food.start();

window.slots = food.getSlots();

food.observe('AUCTION_POST_RUN', function() {
	if (document.documentElement.clientWidth >= 768) {
	  googletag.cmd.push(function() {
	    // googletag.display('dfp-ad-top_728x90');
	    // googletag.display('dfp-ad-right1_300x250');
	    // googletag.display('dfp-ad-right2_300x250');
	    googletag.display('dfp-ad-interstitial');
	    googletag.display('dfp-ad-wallpaper');
	  });
	} 
	if (document.documentElement.clientWidth < 768) {
    //insert mobile ad calls
	}
});

