/*!
 * "position: sticky" polyfill
 * https://github.com/matthewp/position--sticky-
 * License: MIT
 */ (function() {
    var prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
    var stickyTestElement = document.createElement('div');
    var lastKnownScrollTop = 0;
    var waitingForUpdate = false;
    // requestAnimationFrame may be prefixed
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

    for (var i = 0, l = prefixTestList.length; i < l; i++) {
        stickyTestElement.style.position = prefixTestList[i] + 'sticky';
    }

    var slice = Array.prototype.slice;

    function getBodyOffset(body) {
        return {
            top: body.offsetTop,
            left: body.offsetLeft
        };
    }

    function getOffset(elem) {
        var docElem,
        body,
        win,
        clientTop,
        clientLeft,
        scrollTop,
        scrollLeft,
        box = {
            top: 0,
            left: 0
        },
        doc = elem && elem.ownerDocument;

        if (!doc) {
            return;
        }
        if ((body = doc.body) === elem) {
            return getBodyOffset(elem);
        }
        docElem = doc.documentElement;
        if (typeof elem.getBoundingClientRect !== "undefined") {
            box = elem.getBoundingClientRect();
        }
        win = window;
        clientTop = docElem.clientTop || body.clientTop || 0;
        clientLeft = docElem.clientLeft || body.clientLeft || 0;
        scrollTop = win.pageYOffset || docElem.scrollTop;
        scrollLeft = win.pageXOffset || docElem.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }

    function setStyle(elem, repl) {
        var style = elem.getAttribute('style').split(';'),
            newStyle = [];

        for (var i = 0, l = style.length; i < l; i++) {
            var both = style[i].split(':'),
                key = both[0],
                value = both[1];

            if (key in repl) {
                newStyle.push(key + ':' + repl[key]);
            } else {
                newStyle.push(both.join(':'));
            }
        }
        elem.setAttribute('style', newStyle.join(';'));
    }
    var cssPattern = /\s*([^{}]+?)\s*{([^{}]+?)}+/g,
        matchPosition = /\.*?position:.*?sticky.*?;/i,
        getTop = /\.*?top:(.*?);/i,
        toObserve = [];

    function parse(css) {
        var matches;
        css = css.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '').replace(/\n|\r/g, '');

        while ((matches = cssPattern.exec(css)) !== null) {
            var selector = matches[1];
            if (matchPosition.test(matches[2]) && selector !== "#modernizr") {
                var topMatch = getTop.exec(matches[2]),
                    topCSS = ((topMatch !== null) ? parseInt(topMatch[1]) : 0);

                var elems = slice.call(document.querySelectorAll(selector));
                matches[2] = (matches[2].trim().slice(-1) === ";") ? matches[2] : matches[2].trim() + ';';
                elems.forEach(function(elem) {
                    var height = elem.offsetHeight,
                        parent = elem.parentElement,
                        parOff = getOffset(parent),
                        parOffTop = ((parOff !== null && parOff.top !== null) ? parOff.top : 0),
                        elmOff = getOffset(elem),
                        elmOffTop = ((elmOff !== null && elmOff.top !== null) ? elmOff.top : 0),
                        start = elmOffTop - topCSS,
                        end = (parOffTop + parent.offsetHeight) - height - topCSS,
                        newCSS = matches[2] + "position:fixed;width:100%;height:" + height + "px",
                        dummy = document.createElement('div');

                    dummy.innerHTML = '<span style="position:static;display:block;height:' + height + 'px;"></span>';
                    toObserve.push({
                        element: elem,
                        parent: parent,
                        repl: dummy.firstElementChild,
                        start: start,
                        end: end,
                        oldCSS: matches[2],
                        newCSS: newCSS,
                        fixed: false
                    });
                });
            }
        }
    }

    function setPositions() {
        var scrollTop = lastKnownScrollTop;
        waitingForUpdate = false;
        for (var i = 0, l = toObserve.length; i < l; i++) {
            var obj = toObserve[i];
            if (obj.fixed === false && scrollTop > obj.start && scrollTop < obj.end) {
                obj.element.setAttribute('style', obj.newCSS);
                obj.fixed = true;
                obj.element.classList.add('stuck');
            } else {
                if (obj.fixed === true) {
                    if (scrollTop < obj.start) {
                        obj.element.setAttribute('style', obj.oldCSS);
                        obj.fixed = false;
                        obj.element.classList.remove('stuck');
                    } else {
                        if (scrollTop > obj.end) {
                            var absolute = getOffset(obj.element);
                            absolute.position = "absolute";
                            obj.element.setAttribute('style', obj.newCSS);
                            setStyle(obj.element, absolute);
                            obj.fixed = false;
                            obj.element.classList.remove('stuck');
                        }
                    }
                }
            }
        }
    }

    // Debounced scroll handling
    function updateScrollPos() {
        lastKnownScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // Only trigger a layout change if we’re not already waiting for one
        if (!waitingForUpdate) {
            waitingForUpdate = true;
            // Don’t update until next animation frame if we can, otherwise use a
            // timeout - either will help avoid too many repaints
            if (requestAnimationFrame) {
                requestAnimationFrame(setPositions);
            } else {
                setTimeout(setPositions, 15);
            }
        }
    }
    if (stickyTestElement.style.position.length === 0) {
        window.addEventListener('scroll', updateScrollPos);
    }

    window.addEventListener('load', function() {
        var styles = slice.call(document.querySelectorAll('style'));
        styles.forEach(function(style) {
            var text = style.textContent || style.innerText;
            parse(text);
        });
        var links = slice.call(document.querySelectorAll('link'));
        links.forEach(function(link) {
            if (link.getAttribute('rel') !== 'stylesheet') {
                return;
            }
            var href = link.getAttribute('href'),
                req = new XMLHttpRequest();
            req.open('GET', href, true);
            req.onload = function(e) {
                parse(req.responseText);

                // Update once stylesheet loaded, in case page loaded with a scroll offset
                updateScrollPos();
            };
            req.send();
        });
    }, false);
})();


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

            window.addEventListener('scroll', function(){
                var h = document.querySelector("#top-ad.nh").getBoundingClientRect().height;
                if(h > 90){
                document.querySelector(".page-wrapper").setAttribute("style","margin-top:380px");
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
    lazyload: "false",
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
    lazyload: "true",
    targeting: [
        ["kw", "dev3"]
        // ["pos", "right2"]
    ]
});

setTimeout(function(){ window.scrollBy(1, 1); }, 1200);



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
        lazyload: "true",
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
        lazyload: "true",
        targeting: [
            ["kw", "dev3"]
            // ["pos", "mobile_bottom"]
        ]
    });

}
