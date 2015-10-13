var ami = ami || {};
ami.ads = ami.ads || {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

Headertag_defer_queue = Headertag_defer_queue || [];



ami.ads.gpt = (function() {
    return {
        slots: {},
        elementInViewport: function(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight || rect.height))
        },
        initialize: function() {
         var script = document.createElement("script");
             script.type = "text/javascript";
            script.src = "http://js.indexww.com/ht/headertag-ami.js";
            var node = document.getElementsByTagName("script")[0];
            node.parentNode.insertBefore(script, node);



            var useSSL = 'https:' == document.location.protocol;
            var src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');

            Headertag_defer_queue.push(function () {
            googletag.cmd.push(function() {
                googletag.pubads().enableAsyncRendering();
                googletag.pubads().enableSingleRequest();
                googletag.pubads().collapseEmptyDivs();
                
                googletag.pubads().setTargeting("kw", ads_targeting["kw"]);
                googletag.pubads().setTargeting("s1", ads_targeting["s1"]);
                googletag.pubads().setTargeting("s2", ads_targeting["s2"]);
                googletag.pubads().setTargeting("pid", ads_targeting["pid"]);
                googletag.pubads().setTargeting("type", ads_targeting["type"]);
                googletag.pubads().setTargeting("topic", ads_targeting["topic"]);                
                
                googletag.enableServices();
            });


            });

            window.addEventListener('scroll', this.processElements);
            window.addEventListener('load', this.processElements);



            window.addEventListener("scroll",function(){
            	var l = document.getElementById("dfp-ad-top_728x90");
            	var top = l.getBoundingClientRect().top;
            	var bottom = document.getElementById("dfp-ad-right1_300x250").getBoundingClientRect().top;
            	var table = [];
            	var leaderboard_height = l.getBoundingClientRect().height;
            
            	table.push(["leaderboard height",leaderboard_height]);
            	table.push(["window.scrollY", window.scrollY]);
            	table.push(["leaderboard.top", top]);
            
            	var page_height = document.getElementsByTagName("html")[0].offsetHeight;
            	if(window.scrollY < bottom){

            		if(leaderboard_height == 90){
            		    l.classList.add("fixed");
            		    l.classList.add("fixed-90");
            		}
            		if(leaderboard_height == 250){
            		    l.classList.add("fixed");
            		    l.classList.add("fixed-250");
            		}

            			window.setTimeout(function(){
            			    l.classList.add("close");

            				l.classList.remove("fixed-90");
            				l.classList.remove("fixed-250");
            			},6000);
            		if(window.scrollY == 0){
            			l.classList.remove("fixed");
        				l.classList.remove("fixed-90");
        				l.classList.remove("fixed-250");
            		}
            	}
            
            });
          
            
            var position = window.scrollY;
            window.addEventListener("scroll",function(){
            	/* catch scroll direction */
            	var scroll = window.scrollY;
            	var direction = "";
            	if(scroll > position){
            		direction = "down"
            	}
            	else {
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
                if(leaderboard.getBoundingClientRect().top > 0){
                    anchorTopPos = anchorTopPos + leaderboard_height;
                }
                if(header_height === 83){
                    anchorTopPos = anchorTopPos + 83;
                }

            	if(ad1_top < 250 && ad1_top >= 0 && direction == "down"){
            		if(leaderboard.getBoundingClientRect().bottom !== 1){
            			ad1.setAttribute("style","position:fixed;top:"+leaderboard_height+"px;z-index:99999;background:#fff;padding-bottom:20px")
            		}
            		else if(header_height == 83){
                        ad1.setAttribute("style","position:fixed;top:83px;z-index:99999;background:#fff;padding-bottom:20px")            		    
            		}
            		else {
            			ad1.setAttribute("style","position:fixed;top:0px;z-index:99999;background:#fff;padding-bottom:20px")
            		}
            		ad2.setAttribute("style","");
            	}
            	if(ad2_top < 250 && ad2_top >= 0 && direction == "down"){
            		if(leaderboard.getBoundingClientRect().bottom !== 1){
            			ad2.setAttribute("style","position:fixed;top:"+leaderboard_height+"px;z-index:99999;background:#fff;padding-bottom:20px")
            		}
            		else if(header_height === 83){
                        ad2.setAttribute("style","position:fixed;top:83px;z-index:99999;background:#fff;padding-bottom:20px")            		    
            		}
            		else {
            			ad2.setAttribute("style","position:fixed;top:0px;z-index:99999;background:#fff;padding-bottom:20px")	
            		}
            		ad1.setAttribute("style","");
            	}
            	if((ad2.getBoundingClientRect().bottom + 25) > document.getElementById("footer").getBoundingClientRect().top){
            		ad2.setAttribute("style","");
            	}
            	if(window.scrollY < 50){
            		ad1.setAttribute("style","");
            		ad2.setAttribute("style","");
            	}
            });
            
        },
        processElements: function() {


            Object.keys(ami.ads.gpt.slots).forEach(function(key) {
                var el = document.getElementById(key);
                if (ami.ads.gpt.elementInViewport(el)) {
                    googletag.display(key);
                    console.log(key);
                    delete ami.ads.gpt.slots[key];

                }
            });
        },
        addSlot: function(adObject) {

            Headertag_defer_queue.push(function () {
                googletag.cmd.push(function() {
                    var targeting = adObject.targeting;
                    
                    ami.ads.gpt.slots[adObject.idSelector] = googletag.defineSlot(adObject.adUnit, adObject.sizes, adObject.idSelector).addService(googletag.pubads());

                    for (var i = 0, len = targeting.length; i < len; i++) {
                        var target = targeting[i];
                        ami.ads.gpt.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                    }

                    if(adObject.lazyload !== "true"){
                        googletag.display(adObject.idSelector);
                        
                        delete ami.ads.gpt.slots[adObject.idSelector];
                    }
                    
                    googletag.enableServices();
                });
            });

        },
        addOOPSlot: function(adObject) {
                Headertag_defer_queue.push(function () {
                googletag.cmd.push(function() {

                    ami.ads.gpt.slots[adObject.idSelector] = googletag.defineOutOfPageSlot(adObject.adUnit, adObject.idSelector).addService(googletag.pubads());
                    var targeting = adObject.targeting;
                    for (var i = 0, len = targeting.length; i < len; i++) {
                        var target = targeting[i];
                        ami.ads.gpt.slots[adObject.idSelector].setTargeting(target[0], target[1]);
                    }
                    googletag.enableServices();
                });

            });

        }
    }
})();
ami.ads.gpt.initialize();

var adUnit = "/" + Drupal.settings["mfTaboola"]["kargo"]["category"] + "/" + Drupal.settings["mfTaboola"]["kargo"]["section"];
if(window.innerWidth > 768){
    ami.ads.gpt.addOOPSlot({
    slotName: "interstitial",
    adUnit: "/4216/mensfitness"+adUnit,
    idSelector: "dfp-ad-interstitial",
    targeting: [
        // ["pos", "interstitial"]
        ["kw", "dev3"]
    ]
    });
    ami.ads.gpt.addOOPSlot({
        slotName: "wallpaper",
        adUnit: "/4216/mensfitness"+adUnit,
        idSelector: "dfp-ad-wallpaper",
        targeting: [
            // ["pos", "wallpaper"]
            ["kw", "dev3"]
        ]
    });
    ami.ads.gpt.addSlot({
        slotName: "top_728x90",
        adUnit: "/4216/mensfitness"+adUnit,
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
        adUnit: "/4216/mensfitness"+adUnit,
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
        adUnit: "/4216/mensfitness"+adUnit,
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
        adUnit: "/4216/mensfitness"+adUnit,
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
        adUnit: "/4216/mob.mensfitness"+adUnit,
        sizes: [
            [320, 50],
            [300, 50],
            [300, 100]
        ],
        idSelector: "dfp-ad-mobile_top",
        lazyload: "true",
        targeting: [
            ["kw", "dev3"]
            ["pos", "mobile_top"]

        ]
    });

    ami.ads.gpt.addSlot({
        slotName: "mobile_bottom",
        adUnit: "/4216/mob.mensfitness"+adUnit,
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
