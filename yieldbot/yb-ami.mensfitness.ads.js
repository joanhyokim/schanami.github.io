var ami = ami || {};
ami.mensfitness = ami.mensfitness || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var ybotq = ybotq || [];
var adUnit;



if (ads_targeting["s2"]) {
    adUnit = "/" + ads_targeting["s1"] + "/" + ads_targeting["s2"];
} else {
    adUnit = "/" + ads_targeting["s1"];
}

var food = new pubfood();


food.addSlot({
       name: '4216/mensfitness'+adUnit+'/top_728x90',
       sizes: [
            [728, 90],
            [970, 66],
            [970, 90],
            [970, 250]
       ],
       lazyload: "false",
       targeting: [["pos", "leaderboard"]],
       elementId: 'dfp-ad-top_728x90',
       bidProviders: ["yieldbot"]
});






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

var obj = {};
obj["/4216/mensfitness" + adUnit] = "top_728x90";


food.setAuctionProvider({
     name: 'Google',
     libUri: '//www.googletagservices.com/tag/js/gpt.js',
     init: function(targeting, done) {

           googletag.cmd.push(function() {
             var i;
             for (i = 0; i < targeting.length; i++) {
               var slot = targeting[i];
               console.dir(slot);
               console.log("lazyload: ");
               console.dir(slot.lazyload);
               var gptslot = googletag.defineSlot(slot.name, slot.sizes, slot.elementId)
                 .addService(googletag.pubads());
                 console.dir("pubfood targeting: "+slot.targeting);
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

