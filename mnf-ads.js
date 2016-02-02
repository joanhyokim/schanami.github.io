/*! pubfood v0.1.10 | (c) pubfood | http://pubfood.org/LICENSE.txt */ ! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.pubfood = t()
    }
}(function() {
    return function t(e, i, r) {
        function o(s, a) {
            if (!i[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
                    if (n) return n(s, !0);
                    var d = new Error("Cannot find module '" + s + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var l = i[s] = {
                    exports: {}
                };
                e[s][0].call(l.exports, function(t) {
                    var i = e[s][1][t];
                    return o(i ? i : t)
                }, l, l.exports, t, e, i, r)
            }
            return i[s].exports
        }
        for (var n = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
        return o
    }({
        1: [
            function(t, e, i) {
                "use strict";

                function r(t, e, i) {
                    this.fn = t, this.context = e, this.once = i || !1
                }

                function o() {}
                var n = "function" != typeof Object.create ? "~" : !1;
                o.prototype._events = void 0, o.prototype.listeners = function(t, e) {
                    var i = n ? n + t : t,
                        r = this._events && this._events[i];
                    if (e) return !!r;
                    if (!r) return [];
                    if (r.fn) return [r.fn];
                    for (var o = 0, s = r.length, a = new Array(s); s > o; o++) a[o] = r[o].fn;
                    return a
                }, o.prototype.emit = function(t, e, i, r, o, s) {
                    var a = n ? n + t : t;
                    if (!this._events || !this._events[a]) return !1;
                    var u, d, l = this._events[a],
                        h = arguments.length;
                    if ("function" == typeof l.fn) {
                        switch (l.once && this.removeListener(t, l.fn, void 0, !0), h) {
                            case 1:
                                return l.fn.call(l.context), !0;
                            case 2:
                                return l.fn.call(l.context, e), !0;
                            case 3:
                                return l.fn.call(l.context, e, i), !0;
                            case 4:
                                return l.fn.call(l.context, e, i, r), !0;
                            case 5:
                                return l.fn.call(l.context, e, i, r, o), !0;
                            case 6:
                                return l.fn.call(l.context, e, i, r, o, s), !0
                        }
                        for (d = 1, u = new Array(h - 1); h > d; d++) u[d - 1] = arguments[d];
                        l.fn.apply(l.context, u)
                    } else {
                        var p, c = l.length;
                        for (d = 0; c > d; d++) switch (l[d].once && this.removeListener(t, l[d].fn, void 0, !0), h) {
                            case 1:
                                l[d].fn.call(l[d].context);
                                break;
                            case 2:
                                l[d].fn.call(l[d].context, e);
                                break;
                            case 3:
                                l[d].fn.call(l[d].context, e, i);
                                break;
                            default:
                                if (!u)
                                    for (p = 1, u = new Array(h - 1); h > p; p++) u[p - 1] = arguments[p];
                                l[d].fn.apply(l[d].context, u)
                        }
                    }
                    return !0
                }, o.prototype.on = function(t, e, i) {
                    var o = new r(e, i || this),
                        s = n ? n + t : t;
                    return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], o] : this._events[s].push(o) : this._events[s] = o, this
                }, o.prototype.once = function(t, e, i) {
                    var o = new r(e, i || this, !0),
                        s = n ? n + t : t;
                    return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], o] : this._events[s].push(o) : this._events[s] = o, this
                }, o.prototype.removeListener = function(t, e, i, r) {
                    var o = n ? n + t : t;
                    if (!this._events || !this._events[o]) return this;
                    var s = this._events[o],
                        a = [];
                    if (e)
                        if (s.fn)(s.fn !== e || r && !s.once || i && s.context !== i) && a.push(s);
                        else
                            for (var u = 0, d = s.length; d > u; u++)(s[u].fn !== e || r && !s[u].once || i && s[u].context !== i) && a.push(s[u]);
                    return a.length ? this._events[o] = 1 === a.length ? a[0] : a : delete this._events[o], this
                }, o.prototype.removeAllListeners = function(t) {
                    return this._events ? (t ? delete this._events[n ? n + t : t] : this._events = n ? {} : Object.create(null), this) : this
                }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
                    return this
                }, o.prefixed = n, "undefined" != typeof e && (e.exports = o)
            }, {}
        ],
        2: [
            function(t, e, i) {
                "use strict";

                function r() {
                    this.operators = []
                }
                r.prototype.addOperator = function(t) {
                    this.operators.push(t)
                }, r.prototype.process = function(t, e) {
                    for (var i = t, r = 0; r < this.operators.length; r++) i = this.operators[r].process(i, e);
                    return i
                }, e.exports = r
            }, {}
        ],
        3: [
            function(t, e, i) {
                "use strict";

                function r() {
                    this.operators = []
                }
                r.prototype.addOperator = function(t) {
                    this.operators.push(t)
                }, r.prototype.process = function(t, e) {
                    for (var i = t, r = 0; r < this.operators.length; r++) i = this.operators[r].process(i, e);
                    return i
                }, e.exports = r
            }, {}
        ],
        4: [
            function(t, e, i) {
                "use strict";

                function r(t) {
                    this.name = "OP-" + o.newId(), this.transform = t
                }
                var o = t("../util"),
                    n = t("../event"),
                    s = t("../errors");
                r.validate = function(t) {
                    return !!t && "function" === o.asType(t)
                }, r.withDelegate = function(t) {
                    if (!r.validate(t)) return null;
                    var e = new r(t);
                    return e
                }, r.prototype.setName = function(t) {
                    return this.name = t, this
                }, r.prototype.process = function(t, e) {
                    if (!t) return null;
                    var i = this.transform(t, e);
                    return i || n.publish(n.EVENT_TYPE.ERROR, new s("no transform output")), i || null
                }, e.exports = r
            }, {
                "../errors": 5,
                "../event": 6,
                "../util": 18
            }
        ],
        5: [
            function(t, e, i) {
                "use strict";

                function r(t) {
                    this.name = o, this.message = t || "Pubfood integration error.", this.stack = (new Error).stack
                }
                var o = "PubfoodError";
                r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r.prototype.name = o, r.prototype.is = function(t) {
                    return t && t.name === o
                }, e.exports = r
            }, {}
        ],
        6: [
            function(t, e, i) {
                "use strict";

                function r() {
                    this.auction_ = 1, this.observeImmediate_ = {}
                }
                var o = t("./util"),
                    n = t("./logger"),
                    s = t("eventemitter3");
                r.prototype.EVENT_TYPE = {
                    PUBFOOD_API_LOAD: "PUBFOOD_API_LOAD",
                    PUBFOOD_API_START: "PUBFOOD_API_START",
                    BID_LIB_START: "BID_LIB_START",
                    BID_LIB_LOADED: "BID_LIB_LOADED",
                    BID_START: "BID_START",
                    BID_PUSH_NEXT: "BID_PUSH_NEXT",
                    BID_COMPLETE: "BID_COMPLETE",
                    BID_ASSEMBLER: "BID_ASSEMBLER",
                    AUCTION_LIB_START: "AUCTION_LIB_START",
                    AUCTION_LIB_LOADED: "AUCTION_LIB_LOADED",
                    AUCTION_GO: "AUCTION_GO",
                    AUCTION_TRIGGER: "AUCTION_TRIGGER",
                    AUCTION_REFRESH: "AUCTION_REFRESH",
                    AUCTION_COMPLETE: "AUCTION_COMPLETE",
                    AUCTION_POST_RUN: "AUCTION_POST_RUN",
                    ERROR: "ERROR",
                    WARN: "WARN",
                    INVALID: "INVALID"
                }, r.prototype.publish = function(t, e, i) {
                    var r = +new Date;
                    return t === this.EVENT_TYPE.PUBFOOD_API_START && e && (r = e), n.logEvent(t, arguments), this.emit(t, {
                        ts: r,
                        type: t,
                        eventContext: i || "pubfood",
                        data: e || ""
                    })
                }, o["extends"](r, s), r.prototype.emit = function(t) {
                    var e = s.prototype.emit.apply(this, arguments);
                    return e && this.EVENT_TYPE.AUCTION_POST_RUN !== t || (e = !0, this.observeImmediate_[t] = this.observeImmediate_[t] || [], this.observeImmediate_[t].push(Array.prototype.slice.call(arguments, 1))), e
                }, r.prototype.on = function(t, e) {
                    var i = this.observeImmediate_[t] || null;
                    if (i) {
                        for (var r = 0; r < i.length; r++) e.apply(this, i[r]);
                        return this
                    }
                    return s.prototype.on.apply(this, arguments)
                }, e.exports = new r
            }, {
                "./logger": 8,
                "./util": 18,
                eventemitter3: 1
            }
        ],
        7: [
            function(t, e, i) {
                "use strict";
                var r = {
                    name: "",
                    libUri: "",
                    init: function(t, e) {},
                    refresh: function(t, e) {}
                };
                r.optional = {
                    refresh: !0
                };
                var o = {
                    name: "__default__",
                    libUri: " ",
                    init: function(t, e, i) {
                        i()
                    },
                    refresh: function(t, e, i) {
                        i()
                    }
                };
                o.optional = {
                    refresh: !0
                };
                var n = function(t, e) {}, s = {
                        slot: "",
                        value: "",
                        sizes: [],
                        targeting: {},
                        label: ""
                    };
                s.optional = {
                    targeting: !0,
                    label: !0,
                    value: !0
                };
                var a = {
                    name: "",
                    elementId: "",
                    sizes: [],
                    bidProviders: []
                };
                e.exports = {
                    BidDelegate: o,
                    AuctionDelegate: r,
                    SlotConfig: a,
                    BidObject: s,
                    TransformDelegate: n
                }
            }, {}
        ],
        8: [
            function(t, e, i) {
                "use strict";
                var r = {
                    auction: 1,
                    history: [],
                    dumpLog: function(t) {
                        if (console && console.log)
                            for (var e = 0; e < this.history.length; e++) {
                                var i = this.history[e];
                                t ? (t = t || "", t.match(/event/) && i.eventName && console.log(i)) : console.log(i)
                            }
                    },
                    logCall: function(t, e) {
                        this.history.push({
                            ts: +new Date,
                            auction: this.auction,
                            functionName: t,
                            args: Array.prototype.slice.call(e)
                        })
                    },
                    logEvent: function(t, e) {
                        this.history.push({
                            ts: +new Date,
                            auction: this.auction,
                            eventName: t,
                            args: Array.prototype.slice.call(e)
                        })
                    }
                };
                e.exports = r
            }, {}
        ],
        9: [
            function(t, e, i) {
                "use strict";
                var r = t("./mediator/auctionmediator"),
                    o = {
                        mediatorBuilder: function(t) {
                            return new r(t)
                        }
                    };
                e.exports = o
            }, {
                "./mediator/auctionmediator": 10
            }
        ],
        10: [
            function(t, e, i) {
                "use strict";

                function r(t) {
                    t && t.optionalId && (this.id = t.optionalId), this.prefix = t && t.hasOwnProperty("prefix") ? t.prefix : !0, this.bidCount = 0, this.totalBidProviders = 0, this.slots = [], this.slotMap = {}, this.bidProviders = {}, this.auctionProvider = null, this.bids_ = [], this.lateBids_ = [], this.inAuction = !1, this.timeout_ = -1, this.trigger_ = null, this.initDoneTimeout_ = 2e3, this.processTargetingCounter_ = 0, this.bidMediator = new s(this), this.bidAssembler = new a, this.requestAssembler = new u
                }
                var o = t("../util"),
                    n = t("../model/slot"),
                    s = t("./bidmediator"),
                    a = t("../assembler/bidassembler"),
                    u = t("../assembler/requestassembler"),
                    d = t("../assembler/transformoperator"),
                    l = t("../provider/auctionprovider"),
                    h = t("../provider/bidprovider"),
                    p = t("../event");
                r.prototype.init = function() {
                    return p.on(p.EVENT_TYPE.BID_COMPLETE, o.bind(this.checkBids_, this)), p.on(p.EVENT_TYPE.BID_PUSH_NEXT, o.bind(this.pushBid_, this)), p.on(p.EVENT_TYPE.AUCTION_TRIGGER, o.bind(this.triggerAuction_, this)), this
                }, r.prototype.validate = function(t) {
                    var e = !0,
                        i = {
                            hasAuctionProvider: function() {
                                return !!this.auctionProvider
                            },
                            hasBidProviders: function() {
                                var t = !1;
                                for (var e in this.bidProviders) {
                                    t = !0;
                                    break
                                }
                                return t || p.publish(p.EVENT_TYPE.WARN, {
                                    msg: "Warn: no bid providers"
                                }), t
                            },
                            hasSlots: function() {
                                return 0 !== this.slots.length
                            },
                            hasAllSlotsBidder: function() {
                                for (var t = [], e = 0; e < this.slots.length; e++) {
                                    var i = this.slots[e];
                                    i.bidProviders && i.bidProviders[0] || t.push(i.name)
                                }
                                return t.length > 0 && p.publish(p.EVENT_TYPE.WARN, {
                                    msg: "Warn: no bidders - " + t.join(", ")
                                }), 0 === t.length
                            }
                        };
                    i.hasBidProviders.warn = !0;
                    for (var r in i)
                        if (e = i[r].call(this), e = i[r].warn ? !0 : e, !e) {
                            p.publish(p.EVENT_TYPE.INVALID, {
                                msg: "Failed: " + r
                            });
                            break
                        }
                    return e
                }, r.prototype.timeout = function(t) {
                    this.timeout_ = "number" == typeof t ? t : 2e3
                }, r.prototype.getTimeout = function() {
                    return this.timeout_
                }, r.prototype.setAuctionProviderCbTimeout = function(t) {
                    this.initDoneTimeout_ = "number" == typeof t ? t : 2e3
                }, r.prototype.setAuctionTrigger = function(t) {
                    this.trigger = t
                }, r.prototype.startAuction_ = function() {
                    p.publish(p.EVENT_TYPE.BID_ASSEMBLER, "AuctionMediator"), this.bidAssembler.process(this.bids_), this.go_()
                }, r.prototype.startTimeout_ = function() {
                    return -1 !== this.timeout_ && this.timeout_ >= 0 && setTimeout(o.bind(this.startAuction_, this), this.timeout_), this
                }, r.prototype.triggerAuction_ = function() {
                    function t() {
                        this.startAuction_()
                    }
                    return this.trigger ? (this.trigger(o.bind(t, this)), this) : void this.startTimeout_()
                }, r.prototype.pushBid_ = function(t) {
                    if (this.inAuction) this.lateBids_.push(t.data);
                    else {
                        var e = t.data;
                        this.bids_.push(e)
                    }
                    return this
                }, r.prototype.checkBids_ = function() {
                    this.bidCount++, this.bidCount === this.totalBidProviders && this.startAuction_()
                }, r.prototype.go_ = function() {
                    this.inAuction || (this.inAuction = !0, this.processTargeting_())
                }, r.prototype.getBidKey = function(t) {
                    return (this.prefix && t.provider ? t.provider + "_" : "") + (t.label || "bid")
                }, r.prototype.mergeKeys = function(t, e) {
                    t = o.mergeToObject(t, e)
                }, r.prototype.getSlotBids = function(t) {
                    for (var e = [], i = 0; i < this.bids_.length; i++) {
                        var r = this.bids_[i];
                        r.slot && r.slot === t && e.push(r)
                    }
                    return e
                }, r.prototype.buildTargeting_ = function() {
                    for (var t = [], e = 0; e < this.slots.length; e++) {
                        for (var i = this.slots[e], r = {
                                type: "slot",
                                name: i.name,
                                id: i.id,
                                elementId: i.elementId || "",
                                sizes: i.sizes,
                                bids: [],
                                targeting: {}
                            }, o = this.getSlotBids(i.name), n = 0; n < o.length; n++) {
                            var s = o[n];
                            r.bids.push({
                                value: s.value || "",
                                provider: s.provider,
                                id: s.id,
                                targeting: s.targeting
                            });
                            var a = this.getBidKey(s);
                            r.targeting[a] = r.targeting[a] || s.value || "", this.mergeKeys(r.targeting, s.targeting)
                        }
                        t.push(r)
                    }
                    return t
                }, r.prototype.processTargeting_ = function() {
                    var t = this,
                        e = !1,
                        i = t.auctionProvider.name;
                    t.processTargetingCounter_++;
                    var r = function() {
                        e || (e = !0, t.auctionDone(i))
                    };
                    setTimeout(function() {
                        e || (p.publish(p.EVENT_TYPE.WARN, 'Warning: The auction done callback for "' + i + "\" hasn't been called within the allotted time (" + t.initDoneTimeout_ / 1e3 + "sec)"), r())
                    }, t.initDoneTimeout_), p.publish(p.EVENT_TYPE.AUCTION_GO, i);
                    var o = t.buildTargeting_();
                    1 === t.processTargetingCounter_ ? t.auctionProvider.init(o, r) : t.auctionProvider.refresh(o, r)
                }, r.prototype.auctionDone = function(t) {
                    p.publish(p.EVENT_TYPE.AUCTION_COMPLETE, t), setTimeout(function() {
                        p.publish(p.EVENT_TYPE.AUCTION_POST_RUN, t)
                    }, 0)
                }, r.prototype.addSlot = function(t) {
                    var e = n.fromObject(t);
                    return e ? (this.slots.push(e), this.slotMap[e.name] = e) : p.publish(p.EVENT_TYPE.WARN, "Invalid slot object: " + JSON.stringify(t || {})), this
                }, r.prototype.addBidProvider = function(t) {
                    var e = h.withDelegate(t);
                    return e ? this.bidProviders[e.name] ? p.publish(p.EVENT_TYPE.WARN, "Warning: bid provider " + e.name + " is already added") : (this.totalBidProviders++, this.bidProviders[e.name] = e) : p.publish(p.EVENT_TYPE.WARN, "Warning: invalid bid provider: " + t.name), e
                }, r.prototype.bidProviderExists_ = function(t) {
                    return !!this.bidProviders[t]
                }, r.prototype.setBidProviderCbTimeout = function(t) {
                    this.bidMediator.setBidProviderCbTimeout(t)
                }, r.prototype.setAuctionProvider = function(t) {
                    this.auctionProvider && p.publish(p.EVENT_TYPE.WARN, "Warning: auction provider exists: " + this.auctionProvider.name);
                    var e = l.withDelegate(t);
                    return e ? (this.auctionProvider = e, this.auctionProvider.setMediator(this)) : p.publish(p.EVENT_TYPE.WARN, "Warning: invalid auction provider: " + t.name), e
                }, r.prototype.addRequestTransform = function(t) {
                    return this.requestAssembler.addOperator(new d(t)), this
                }, r.prototype.addBidTransform = function(t) {
                    return this.bidAssembler.addOperator(new d(t)), this
                }, r.prototype.loadProviders = function(t) {
                    var e, i = [];
                    for (var r in this.bidProviders) i.push(r);
                    t && o.randomize(i);
                    for (var n = 0; n < i.length; n++) {
                        var s = i[n];
                        if (this.bidProviders[s].libUri) {
                            e = this.bidProviders[s].libUri() || "";
                            var a = this.bidProviders[s].sync();
                            o.loadUri(e, a)
                        }
                    }
                    this.auctionProvider && this.auctionProvider.libUri() && (p.publish(p.EVENT_TYPE.AUCTION_LIB_LOADED, this.auctionProvider.name), e = this.auctionProvider.libUri(), o.loadUri(e))
                }, r.prototype.getBidderSlots = function() {
                    var t, e, i = {}, r = [];
                    for (t = 0; t < this.slots.length; t++) {
                        var o = this.slots[t];
                        for (e = 0; e < o.bidProviders.length; e++) {
                            var n = o.bidProviders[e],
                                s = i[n] = i[n] || [];
                            s.push(o)
                        }
                    }
                    for (e in i) r.push({
                        provider: this.bidProviders[e],
                        slots: i[e]
                    });
                    return r
                }, r.prototype.start = function(t) {
                    this.init(), p.publish(p.EVENT_TYPE.AUCTION_TRIGGER, this.auctionProvider.name), this.loadProviders(t);
                    var e = this.getBidderSlots();
                    return this.bidMediator.processBids(e), this
                }, r.prototype.refresh = function(t) {
                    if (o.isArray(t)) {
                        var e, i, r = this;
                        for (this.slots = [], e = 0; e < t.length; e++) i = t[e], this.slotMap[i] ? this.slots.push(this.slotMap[i]) : p.publish(p.EVENT_TYPE.WARN, "Can't refresh slot \"" + i + "\", because it wasn't defined");
                        if (this.slots.length > 0) {
                            var n = this.auctionProvider.name;
                            p.publish(p.EVENT_TYPE.AUCTION_REFRESH, n), this.bids_ = [], this.lateBids_ = [];
                            var s = this.getBidderSlots();
                            this.bidMediator.processBids(s);
                            var a = !1,
                                u = function() {
                                    a || (a = !0, r.auctionDone(n))
                                };
                            setTimeout(function() {
                                a || (p.publish(p.EVENT_TYPE.WARN, 'Warning: The auction done callback for "' + n + "\" hasn't been called within the allotted time (" + r.initDoneTimeout_ / 1e3 + "sec)"), u())
                            }, this.initDoneTimeout_);
                            var d = this.buildTargeting_();
                            this.auctionProvider.refresh(d, u)
                        }
                    } else p.publish(p.EVENT_TYPE.WARN, 'Invalid data structure, "refresh" accepts an array of strings (slot names)');
                    return this
                }, e.exports = r
            }, {
                "../assembler/bidassembler": 2,
                "../assembler/requestassembler": 3,
                "../assembler/transformoperator": 4,
                "../event": 6,
                "../model/slot": 14,
                "../provider/auctionprovider": 15,
                "../provider/bidprovider": 16,
                "../util": 18,
                "./bidmediator": 11
            }
        ],
        11: [
            function(t, e, i) {
                "use strict";

                function r(t) {
                    this.auctionMediator = t, this.operators = [], this.callbackTimeout_ = 2e3, this.processCounter_ = 0
                }
                var o = t("../event"),
                    n = t("../model/bid");
                r.prototype.processBids = function(t) {
                    this.processCounter_++;
                    for (var e in t) this.getBids_(t[e].provider, t[e].slots)
                }, r.prototype.setBidProviderCbTimeout = function(t) {
                    this.callbackTimeout_ = "number" == typeof t ? t : 2e3
                }, r.prototype.getBids_ = function(t, e) {
                    var i = this,
                        r = t.name,
                        n = !1,
                        s = function(t) {
                            i.pushBid(t, r)
                        }, a = function() {
                            n || (n = !0, i.doneBid(r))
                        };
                    setTimeout(function() {
                        n || (o.publish(o.EVENT_TYPE.WARN, 'Warning: The bid done callback for "' + r + "\" hasn't been called within the allotted time (2sec)"), a())
                    }, this.callbackTimeout_), o.publish(o.EVENT_TYPE.BID_START, r), 1 === this.processCounter_ ? t.init(e, s, a) : t.refresh(e, s, a)
                }, r.prototype.pushBid = function(t, e) {
                    var i = n.fromObject(t);
                    i ? (i.provider = e, o.publish(o.EVENT_TYPE.BID_PUSH_NEXT, i)) : o.publish(o.EVENT_TYPE.WARN, "Invalid bid object: " + JSON.stringify(t || {}))
                }, r.prototype.doneBid = function(t) {
                    o.publish(o.EVENT_TYPE.BID_COMPLETE, t)
                }, e.exports = r
            }, {
                "../event": 6,
                "../model/bid": 13
            }
        ],
        12: [
            function(t, e, i) {
                "use strict";

                function r() {
                    this.id = o.newId()
                }
                var o = t("../util");
                e.exports = r
            }, {
                "../util": 18
            }
        ],
        13: [
            function(t, e, i) {
                "use strict";

                function r(t, e, i) {
                    this.init_ && this.init_(), this.sizes = i, this.slot = t, this.value = e, this.type = o.asType(this.value), this.label, this.provider
                }
                var o = t("../util"),
                    n = t("./basemodelobject"),
                    s = t("../interfaces").BidObject;
                r.validate = function(t) {
                    return t ? o.validate(s, t) : !1
                }, r.fromObject = function(t) {
                    if (!r.validate(t)) return null;
                    var e = new r;
                    for (var i in t) "function" === o.asType(e[i]) ? e[i](t[i]) : e[i] = t[i];
                    return e.type = o.asType(e.value), e
                }, r.prototype.setValue = function(t) {
                    return this.value = t || "", this.type = o.asType(this.value), this
                }, r.prototype.addSize = function(t, e) {
                    var i = Math.abs(~~t),
                        r = Math.abs(~~e);
                    return this.sizes.push([i, r]), this
                }, o["extends"](r, n), e.exports = r
            }, {
                "../interfaces": 7,
                "../util": 18,
                "./basemodelobject": 12
            }
        ],
        14: [
            function(t, e, i) {
                "use strict";

                function r(t, e) {
                    this.init_ && this.init_(), this.name = t, this.elementId = e, this.bidProviders = [], this.sizes = []
                }
                var o = t("../util"),
                    n = t("./basemodelobject"),
                    s = t("../interfaces").SlotConfig;
                r.validate = function(t) {
                    return t ? o.validate(s, t) : !1
                }, r.fromObject = function(t) {
                    if (!r.validate(t)) return null;
                    var e = new r;
                    for (var i in t) e[i] = t[i];
                    return e
                }, r.prototype.addSizes = function(t) {
                    return Array.prototype.push.apply(this.sizes, t), this
                }, r.prototype.addSize = function(t, e) {
                    var i = Math.abs(~~t),
                        r = Math.abs(~~e);
                    return this.sizes.push([i, r]), this
                }, r.prototype.addBidProvider = function(t) {
                    return this.bidProviders.push(t), this
                }, o["extends"](r, n), e.exports = r
            }, {
                "../interfaces": 7,
                "../util": 18,
                "./basemodelobject": 12
            }
        ],
        15: [
            function(t, e, i) {
                "use strict";

                function r(t) {
                    this.name = t.name || "", this.slots_ = [], this.auctionDelegate = t, this.mediator = null
                }
                var o = t("../util"),
                    n = t("../interfaces").AuctionDelegate,
                    s = t("../event");
                r.prototype.setMediator = function(t) {
                    this.mediator = t
                }, r.withDelegate = function(t) {
                    if (!r.validate(t)) return s.publish(s.EVENT_TYPE.INVALID, {
                        msg: "Warn: invalid auction delegate - " + (t && JSON.stringify(t)) || ""
                    }), null;
                    var e = new r(t);
                    return e
                }, r.validate = function(t) {
                    return o.validate(n, t)
                }, r.prototype.libUri = function() {
                    return this.auctionDelegate.libUri
                }, r.prototype.init = function(t, e) {
                    this.auctionDelegate.init(t, e)
                }, r.prototype.refresh = function(t, e) {
                    var i = this.auctionDelegate && this.auctionDelegate.refresh || null;
                    return i ? void i(t, e) : void s.publish(s.EVENT_TYPE.WARN, "AuctionProvider.auctionDelegate.refresh not defined.")
                }, e.exports = r
            }, {
                "../event": 6,
                "../interfaces": 7,
                "../util": 18
            }
        ],
        16: [
            function(t, e, i) {
                "use strict";

                function r(t) {
                    this.name = t.name || "", this.bidDelegate = t
                }
                var o = t("../util"),
                    n = t("../interfaces").BidDelegate,
                    s = t("../event");
                r.withDelegate = function(t) {
                    if (!r.validate(t)) return s.publish(s.EVENT_TYPE.WARN, {
                        msg: "Warn: invalid bidder delegate - " + t || ""
                    }), null;
                    var e = new r(t);
                    return e
                }, r.validate = function(t) {
                    return o.validate(n, t)
                }, r.prototype.libUri = function(t) {
                    return t && (this.bidDelegate.libUri = t), this.bidDelegate.libUri
                }, r.prototype.sync = function() {
                    var t = Array.prototype.slice.call(arguments);
                    return t.length > 0 && "boolean" === o.asType(t[0]) && (this.bidDelegate.sync = t[0]), !! this.bidDelegate.sync
                }, r.prototype.init = function(t, e, i) {
                    this.bidDelegate.init(t, e, i)
                }, r.prototype.refresh = function(t, e, i) {
                    var r = this.bidDelegate && this.bidDelegate.refresh || null;
                    return r ? void r(t, e, i) : void s.publish(s.EVENT_TYPE.WARN, "BidProvider.bidDelegate.refresh not defined.")
                }, e.exports = r
            }, {
                "../event": 6,
                "../interfaces": 7,
                "../util": 18
            }
        ],
        17: [
            function(t, e, i) {
                "use strict";
                var r = t("./event"),
                    o = t("./util"),
                    n = t("./logger"),
                    s = t("./interfaces").BidDelegate;
                ! function(t, i, r) {
                    t && (e.exports = r(t, t.pfConfig || {}))
                }(window || {}, void 0, function(e) {
                    if (e.pubfood) return e.pubfood.library.logger.logEvent(r.EVENT_TYPE.WARN, ["multiple api load"]), e.pubfood;
                    var i = function(t) {
                        return new i.library.init(t)
                    }, a = [],
                        u = {
                            addSlot: 0,
                            setAuctionProvider: 0,
                            addBidProvider: 0
                        };
                    i.library = i.prototype = {
                        version: "0.1.10",
                        mediator: t("./mediator").mediatorBuilder(),
                        PubfoodError: t("./errors"),
                        logger: n
                    };
                    var d = function() {
                        var t = l.prototype.getBidProviders();
                        for (var e in u) 0 === u[e] && a.push('"' + e + '" was not called');
                        for (var i = l.prototype.getSlots(), r = 0; r < i.length; r++)
                            for (var o = 0; o < i[r].bidProviders.length; o++) {
                                var n = i[r].bidProviders[o];
                                t[n] || a.push('No configuration found for bid provider "' + n + '"')
                            }
                        return {
                            hasError: a.length > 0,
                            details: a
                        }
                    }, l = i.library.init = function(t) {
                            return r.publish(r.EVENT_TYPE.PUBFOOD_API_LOAD), n.logCall("api.init", arguments), this.EVENT_TYPE = r.EVENT_TYPE, this.logger = n, t && (this.id_ = t.id || "", this.auctionProviderTimeout_ = t.auctionProviderCbTimeout || 2e3, this.bidProviderTimeout_ = t.bidProviderCbTimeout || 2e3, this.randomizeBidRequests_ = !! t.randomizeBidRequests), this
                        };
                    return l.prototype.dumpLog = function(t) {
                        this.logger.dumpLog(t)
                    }, l.prototype.addSlot = function(t) {
                        return o.isArray(t.bidProviders) && 0 !== t.bidProviders.length || (t.bidProviders = ["__default__"], this.library.mediator.bidProviderExists_("__default__") || this.library.mediator.addBidProvider(s)), n.logCall("api.addSlot", arguments), this.library.mediator.addSlot(t), u.addSlot++, this
                    }, l.prototype.getSlots = function() {
                        return n.logCall("api.getSlots", arguments), this.library.mediator.slots
                    }, l.prototype.setAuctionProvider = function(t) {
                        n.logCall("api.setAuctionProvider", arguments);
                        var e = this.library.mediator.setAuctionProvider(t);
                        return this.library.mediator.setAuctionProviderCbTimeout(this.auctionProviderTimeout_), u.setAuctionProvider++, e || a.push("Invalid auction provider config"), this
                    }, l.prototype.getAuctionProvider = function() {
                        return n.logCall("api.getAuctionProvider", arguments), this.library.mediator.auctionProvider
                    }, l.prototype.addBidProvider = function(t) {
                        n.logCall("api.addBidProvider", arguments);
                        var e = this.library.mediator.addBidProvider(t);
                        return this.library.mediator.setBidProviderCbTimeout(this.bidProviderTimeout_), u.addBidProvider++, e || a.push("Invalid bid provider config for " + t.name), "function" == typeof t.init && 3 !== t.init.length && a.push("Bid provider " + t.name + "'s init method requires 3 arguments"), "function" == typeof t.refresh && 3 !== t.refresh.length && a.push("Bid provider " + t.name + "'s refresh method requires 3 arguments"), this
                    }, l.prototype.getBidProviders = function() {
                        return n.logCall("api.getBidProvider", arguments), this.library.mediator.bidProviders
                    }, l.prototype.observe = function(t, e) {
                        if (n.logCall("api.observe", arguments), "function" == typeof t)
                            for (var i in r.EVENT_TYPE) r.on(r.EVENT_TYPE[i], o.bind(t, this));
                        else "string" == typeof t && (r.EVENT_TYPE[t] ? r.on(r.EVENT_TYPE[t], o.bind(e, this)) : r.publish(r.EVENT_TYPE.WARN, 'Warning: Invalid event type "' + t + '"'));
                        return this
                    }, l.prototype.timeout = function(t) {
                        return n.logCall("api.timeout", arguments), this.library.mediator.timeout(t), this
                    }, l.prototype.setAuctionTrigger = function(t) {
                        return n.logCall("api.setAuctionTrigger", arguments), this.library.mediator.setAuctionTrigger(t), this
                    }, l.prototype.addBidTransform = function(t) {
                        return n.logCall("api.addBidTransform", arguments), this.library.mediator.addBidTransform(t), this
                    }, l.prototype.addRequestTransform = function(t) {
                        return n.logCall("api.addRequestTransform", arguments), this.library.mediator.addRequestTransform(t), this
                    }, l.prototype.start = function(t, e) {
                        r.publish(r.EVENT_TYPE.PUBFOOD_API_START, t), n.logCall("api.start", arguments);
                        var i = d();
                        return "function" == typeof e && e(i.hasError, i.details), i.hasError || this.library.mediator.start(this.randomizeBidRequests_), this
                    }, l.prototype.refresh = function(t) {
                        return n.auction++, n.logCall("api.refresh", arguments), this.library.mediator.refresh(t), this
                    }, l.prototype.library = i.library, e.pubfood = i, i
                })
            }, {
                "./errors": 5,
                "./event": 6,
                "./interfaces": 7,
                "./logger": 8,
                "./mediator": 9,
                "./util": 18
            }
        ],
        18: [
            function(t, e, i) {
                "use strict";
                var r = {
                    asType: function(t) {
                        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                    },
                    newId: function() {
                        return (+new Date).toString(36) + "xxxxxxxxxx".replace(/[x]/g, function() {
                            return (0 | 36 * Math.random()).toString(36)
                        })
                    },
                    "extends": function(t, e) {
                        for (var i in e.prototype) t.prototype[i] = e.prototype[i];
                        t.prototype.parents = t.prototype.parents || [], t.prototype.parents.push(function() {
                            return e
                        }), t.prototype.init_ = function() {
                            var t = this.parents || [];
                            for (var e in t) t[e]().call(this)
                        }
                    },
                    hasFunctions: function(t, e) {
                        if (!t) return !1;
                        for (var i = !0, o = 0; o < e.length; o++) {
                            var n = e[o];
                            if (!t[n] || "function" === !r.asType(t[n])) {
                                i = !1;
                                break
                            }
                        }
                        return i
                    },
                    loadUri: function(t, e) {
                        var i = document,
                            r = t || "";
                        if (e)
                            if ("complete" === i.readyState || "loaded" === i.readyState);
                            else try {
                                i.write('<script src="' + r + '"></script>')
                            } catch (o) {} else {
                                var n = document.createElement("script");
                                n.async = !0, n.src = r, (i.head || i.body || i.documentElement).appendChild(n)
                            }
                    },
                    bind: function(t, e) {
                        return function() {
                            t.apply(e, Array.prototype.slice.call(arguments))
                        }
                    },
                    mergeToObject: function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (this.isObject(e[i]) ? (t[i] || (t[i] = {}), this.mergeToObject(t[i], e[i])) : this.isArray(e[i]) ? (t[i] || (t[i] = []), this.mergeToArray(t[i], e[i])) : t[i] = e[i]);
                        return t
                    },
                    mergeToArray: function(t, e) {
                        for (var i = 0; i < e.length; i++) t.push(this.clone(e[i]));
                        return t
                    },
                    isArray: function(t) {
                        return !!t && "array" === this.asType(t)
                    },
                    isObject: function(t) {
                        return !!t && "object" === this.asType(t)
                    },
                    clone: function(t) {
                        return this.isObject(t) ? this.cloneObject(t) : this.isArray(t) ? this.cloneArray(t) : t
                    },
                    cloneArray: function(t) {
                        return this.mergeToArray([], t)
                    },
                    cloneObject: function(t) {
                        return this.mergeToObject({}, t)
                    },
                    values: function(t) {
                        var e = [];
                        for (var i in t) e.push(t[i]);
                        return e
                    },
                    validate: function(t, e) {
                        if (!e) return !1;
                        var i = 0;
                        for (var o in t)
                            if ("optional" !== o) {
                                var n = !! t.optional && !! t.optional[o],
                                    s = e.hasOwnProperty(o),
                                    a = this.asType(e[o]),
                                    u = !e.init,
                                    d = !0;
                                if (("null" === a || "undefined" === a || "number" === a && !isFinite(e[o]) || "string" === a && "" === e[o]) && (d = !1), n || s && d || ++i, d && u && r.isArray(e[o]) && 0 === e[o].length && ++i, d && !u && r.asType(e[o]) !== r.asType(t[o]) && ++i, i > 0) break
                            }
                        return !i
                    }
                };
                r.randomize = function(t) {
                    for (var e, i, r = t.length; r;) i = Math.floor(Math.random() * r--), e = t[r], t[r] = t[i], t[i] = e;
                    return t
                }, e.exports = r
            }, {}
        ]
    }, {}, [17])(17)
});


var ami = ami || {};
ami.muscleandfitness = ami.muscleandfitness || {};
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
if (ads_targeting['ctype'] == 'landing') {
    adUnit += "/" + ads_targeting['ctype'];
}


var food = new pubfood();


if (document.documentElement.clientWidth >= 768) {
    food.addSlot({
        name: '4216/muscleandfitness' + adUnit,
        sizes: [
            [728, 90],
            [728, 91],
            [970, 66],
            [970, 250]
        ],
        elementId: 'dfp-ad-top_banner',
        bidProviders: ["yieldbot", "casale", "criteo"]
    });


    food.addSlot({
        name: '4216/muscleandfitness' + adUnit,
        sizes: [
            [300, 250],
            [300, 251],
            [300, 600],
            [300, 1050]
        ],
        elementId: 'dfp-ad-right_rail_first',
        bidProviders: ["yieldbot", "casale", "criteo"]
    });


    food.addSlot({
        name: '4216/muscleandfitness' + adUnit,
        sizes: [
            [300, 250],
            [300, 252]
        ],
        elementId: 'dfp-ad-right_rail_second',
        bidProviders: []
    });

    food.addSlot({
        name: '4216/muscleandfitness' + adUnit,
        sizes: [
            [1, 1]
        ],
        elementId: 'dfp-ad-teads',
        bidProviders: []
    });

}


if (document.documentElement.clientWidth < 768) {
    food.addSlot({
        name: '4216/mob.muscleandfitness' + adUnit,
        sizes: [
            [320, 50],
            [300, 50],
            [300, 100]
        ],
        elementId: 'dfp-ad-mobile_top',
        bidProviders: ["yieldbot", "casale", "criteo"]
    });

    food.addSlot({
        name: '4216/mob.muscleandfitness' + adUnit,
        sizes: [
            [300, 50],
            [320, 50],
            [300, 100]
        ],
        elementId: 'dfp-ad-mobile_bottom',
        bidProviders: ["yieldbot", "casale", "criteo"]
    });
}


food.addBidProvider({
    name: 'yieldbot',
    libUri: '//cdn.yldbt.com/js/yieldbot.intent.js',
    ybParams: {
        "dfp-ad-top_728x90": "top_728x90",
        "dfp-ad-right1_300x250": "right1_300x250",
        "dfp-ad-mobile_top": "mobile_top",
        "dfp-ad-mobile_bottom": "mobile_bottom"
    },
    init: function(slots, pushBid, done) {
        var slotMap = {};
        var ybParams = this.ybParams;

        ybotq.push(function() {
            if (document.documentElement.clientWidth >= 768) {
                yieldbot.pub('ffe5');
                yieldbot.defineSlot('top_728x90');
                yieldbot.defineSlot('right1_300x250');
            } else {
                yieldbot.pub('689f');
                yieldbot.defineSlot('mobile_top');
                yieldbot.defineSlot('mobile_bottom');
                yieldbot.defineSlot('mobile_box');
            };

            for (var k = 0; k < slots.length; k++) {
                var slot = slots[k];
                var ybslot = ybParams[slot.elementId];

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

function cygnus_index_parse_res() {}

function cygnus_index_start() {
    function e(e) {
        var t = a[e];
        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
    }

    function t(t) {
        return o.lastIndex = 0, o.test(t) ? t.replace(o, e) : t
    }

    function i(e, t, i) {
        if (this.initialized = !1, "number" != typeof e || e % 1 !== 0 || 0 > e) throw "Invalid Site ID";
        if ("number" == typeof i && i % 1 == 0 && i >= 0 && (this.timeoutDelay = i), this.siteID = e, this.impressions = [], this._parseFnName = void 0, top === self ? (this.sitePage = location.href, this.topframe = 1) : (this.sitePage = document.referrer, this.topframe = 0), "undefined" != typeof t) {
            if ("function" != typeof t) throw "Invalid jsonp target function";
            this._parseFnName = "cygnus_index_args.parseFn"
        }
        "undefined" == typeof _IndexRequestData.requestCounter ? _IndexRequestData.requestCounter = Math.floor(256 * Math.random()) : _IndexRequestData.requestCounter = (_IndexRequestData.requestCounter + 1) % 256, this.requestID = String((new Date).getTime() % 2592e3 * 256 + _IndexRequestData.requestCounter + 256), this.initialized = !0
    }
    if (cygnus_index_primary_request) {
        for (var s = [], n = 0; n < cygnus_index_args.slots.length; n++) {
            var r = cygnus_index_args.slots[n],
                u = {
                    id: "T1_" + r.id,
                    width: r.width,
                    height: r.height,
                    siteID: 164873
                };
            ({
                id: "T2_" + r.id,
                width: r.width,
                height: r.height,
                siteID: 444444
            });
            s.push(u)
        }
        for (var n = 0; n < s.length; n++) cygnus_index_args.slots.push(s[n]);
        cygnus_index_primary_request = !1
    }
    cygnus_index_args.parseFn = cygnus_index_parse_res;
    var o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        a = {
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
    i.prototype.serialize = function() {
        var e = '{"id":' + this.requestID + ',"site":{"page":"' + t(this.sitePage) + '"';
        "string" == typeof document.referrer && (e += ',"ref":"' + t(document.referrer) + '"'), e += '},"imp":[';
        for (var i = 0; i < this.impressions.length; i++) {
            var s = this.impressions[i],
                n = [];
            e += '{"id":"' + s.id + '", "banner":{"w":' + s.w + ',"h":' + s.h + ',"topframe":' + String(this.topframe) + "}", "number" == typeof s.bidfloor && (e += ',"bidfloor":' + s.bidfloor, "string" == typeof s.bidfloorcur && (e += ',"bidfloorcur":"' + t(s.bidfloorcur) + '"')), "string" != typeof s.slotID || s.slotID.match(/^\s*$/) || n.push('"sid":"' + t(s.slotID) + '"'), "number" == typeof s.siteID && n.push('"siteID":' + s.siteID), n.length > 0 && (e += ',"ext": {' + n.join() + "}"), e += i + 1 == this.impressions.length ? "}" : "},"
        }
        return e += "]}"
    }, i.prototype.setPageOverride = function(e) {
        return "string" != typeof e || e.match(/^\s*$/) ? !1 : (this.sitePage = e, !0)
    }, i.prototype.addImpression = function(e, t, i, s, n, r) {
        var u = {
            id: String(this.impressions.length + 1)
        };
        if ("number" != typeof e || 1 >= e) return null;
        if ("number" != typeof t || 1 >= t) return null;
        if (("string" == typeof n || "number" == typeof n) && String(n).length <= 50 && (u.slotID = String(n)), u.w = e, u.h = t, void 0 != i && "number" != typeof i) return null;
        if ("number" == typeof i) {
            if (0 > i) return null;
            if (u.bidfloor = i, void 0 != s && "string" != typeof s) return null;
            u.bidfloorcur = s
        }
        if ("undefined" != typeof r) {
            if (!("number" == typeof r && r % 1 === 0 && r >= 0)) return null;
            u.siteID = r
        }
        return this.impressions.push(u), u.id
    }, i.prototype.buildRequest = function() {
        if (0 != this.impressions.length && this.initialized === !0) {
            var e = encodeURIComponent(this.serialize()),
                t = "https:" === window.location.protocol ? "https://as-sec.casalemedia.com" : "http://as.casalemedia.com";
            return t += "/headertag?v=9&x3=1&fn=cygnus_index_parse_res&s=" + this.siteID + "&r=" + e, "number" == typeof this.timeoutDelay && this.timeoutDelay % 1 == 0 && this.timeoutDelay >= 0 && (t += "&t=" + this.timeoutDelay), t
        }
    };
    try {
        if ("undefined" == typeof cygnus_index_args || "undefined" == typeof cygnus_index_args.siteID || "undefined" == typeof cygnus_index_args.slots) return;
        "undefined" == typeof _IndexRequestData && (_IndexRequestData = {}, _IndexRequestData.impIDToSlotID = {}, _IndexRequestData.reqOptions = {});
        var d = new i(cygnus_index_args.siteID, cygnus_index_args.parseFn, cygnus_index_args.timeout);
        cygnus_index_args.url && "string" == typeof cygnus_index_args.url && d.setPageOverride(cygnus_index_args.url), _IndexRequestData.impIDToSlotID[d.requestID] = {}, _IndexRequestData.reqOptions[d.requestID] = {};
        for (var f, g, s = 0; s < cygnus_index_args.slots.length; s++) f = cygnus_index_args.slots[s], g = d.addImpression(f.width, f.height, f.bidfloor, f.bidfloorcur, f.id, f.siteID), g && (_IndexRequestData.impIDToSlotID[d.requestID][g] = String(f.id));
        return "number" == typeof cygnus_index_args.targetMode && (_IndexRequestData.reqOptions[d.requestID].targetMode = cygnus_index_args.targetMode), "function" == typeof cygnus_index_args.callback && (_IndexRequestData.reqOptions[d.requestID].callback = cygnus_index_args.callback), d.buildRequest()
    } catch (h) {}
}
cygnus_index_args = {
    timeout: 300,
    siteID: 164874,
    slots: [{
        id: "1",
        width: 728,
        height: 90,
        siteID: 164874
    }, {
        id: "2",
        width: 300,
        height: 250,
        siteID: 164874
    }, {
        id: "3",
        width: 300,
        height: 600,
        siteID: 164874
    }, {
        id: "4",
        width: 300,
        height: 250,
        siteID: 164690
    }, {
        id: "5",
        width: 300,
        height: 600,
        siteID: 164690
    }, {
        id: "6",
        width: 970,
        height: 90,
        siteID: 164874
    }, {
        id: "7",
        width: 970,
        height: 250,
        siteID: 164874
    }, {
        id: "8",
        width: 300,
        height: 1050,
        siteID: 164874
    }]
};
var cygnus_index_primary_request = !0;


var crtg_nid = '4877';
var crtg_cookiename = 'crtg_rta';
var crtg_varname = 'crtg_content';
var crtg_getCookie = function(c_name) {
    var i, x, y, ARRCookies = document.cookie.split(";");
    for (i = 0; i < ARRCookies.length; i++) {
        x = ARRCookies[i].substr(0, ARRCookies[i].indexOf("="));
        y = ARRCookies[i].substr(ARRCookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    return '';
}
var crtg_content = crtg_getCookie(crtg_cookiename);
console.log("criteo");
console.log(crtg_content);
window.pubfood_crtg_content = crtg_content;

var crtg_rnd = Math.floor(Math.random() * 99999999999);
(function() {
    var crtg_url = location.protocol + '//rtax.criteo.com/delivery/rta/rta.js?netId=' + escape(crtg_nid);
    crtg_url += '&cookieName=' + escape(crtg_cookiename);
    crtg_url += '&rnd=' + crtg_rnd;
    crtg_url += '&varName=' + escape(crtg_varname);
    var crtg_script = document.createElement('script');
    crtg_script.type = 'text/javascript';
    crtg_script.src = crtg_url;
    crtg_script.async = true;
    if (document.getElementsByTagName("head").length > 0)
        document.getElementsByTagName("head")[0].appendChild(crtg_script);
    else if (document.getElementsByTagName("body").length > 0)
        document.getElementsByTagName("body")[0].appendChild(crtg_script);
})();

food.addBidProvider({
    name: 'criteo',
    libUri: ' ',
    init: function(slots, pushBid, done) {
        done();
    },
    refresh: function(slots, pushBid, done) {}
});


food.addBidProvider({
    name: 'casale',
    libUri: ' ',
    init: function(slots, pushBid, done) {

        var scriptTag = document.createElement("script");
        scriptTag.setAttribute("src", cygnus_index_start());
        scriptTag.setAttribute("type", "text/javascript");
        var firstScript = document.getElementsByTagName("script")[0];
        if (firstScript.parentNode) {
            firstScript.parentNode.insertBefore(scriptTag, firstScript);
        }
        window.cygnus_index_ready_state = done;
        done();
    },
    refresh: function(slots, pushBid, done) {}
});


food.setAuctionProvider({
    name: 'Google',
    libUri: '//www.googletagservices.com/tag/js/gpt.js',
    gpt_targeting: {

        "dfp-ad-top_banner": [
            ["pos", "top"]
        ],
        "dfp-ad-right_rail_first": [
            ["pos", "right1"]
        ],
        "dfp-ad-right_rail_second": [
            ["pos", "right2"]
        ],
        "dfp-ad-mobile_top": [
            ["pos", "mobile_top"]
        ],
        "dfp-ad-mobile_box": [
            ["pos", "mobile_box"]
        ],
        "dfp-ad-mobile_bottom": [
            ["pos", "mobile_bottom"]
        ]
    },

    init: function(targeting, done) {
        var gpt_targeting = this.gpt_targeting;

        var gptslot;

        googletag.cmd.push(function() {
            googletag.pubads().enableAsyncRendering();
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();

            //Kick off index bids
            // cygnus_index_start();


            // RTA-DFP key-value script
            if (typeof crtg_content == 'undefined') crtg_content = '';
            var s = crtg_content.split(';');
            s.pop();
            if (s.length > 0) googletag.pubads().setTargeting('crtRTA', s);


            //Kick off yieldbot bids
            googletag.pubads().setTargeting("ybot", yieldbot.getPageCriteria());

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
            if (typeof ads_targeting["ctype"] !== "undefined") {
                googletag.pubads().setTargeting("type", ads_targeting["ctype"]);
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
            
            // done();
        });



        if (document.documentElement.clientWidth >= 768) {
            googletag.cmd.push(function() {
                googletag.defineSlot('/4216/muscleandfitness' + adUnit, [300, 195], 'dfp-ad-right_subscribe_300x195').setTargeting('pos', ['subscription']).addService(googletag.pubads());
                //googletag.defineOutOfPageSlot('/4216/muscleandfitness' + adUnit, 'dfp-ad-interstitial').setTargeting('pos', ['interstitial']).addService(googletag.pubads());
                //googletag.defineOutOfPageSlot('/4216/muscleandfitness' + adUnit, 'dfp-ad-wallpaper').setTargeting('pos', ['wallpaper']).addService(googletag.pubads());

                googletag.display('dfp-ad-right_subscribe_300x195');
               //googletag.display('dfp-ad-interstitial');
                //googletag.display('dfp-ad-wallpaper');
            });
        }
        if (document.documentElement.clientWidth < 768) {
            googletag.cmd.push(function() {
                googletag.defineOutOfPageSlot('/4216/mob.muscleandfitness' + adUnit, 'dfp-ad-mobile_interstitial').setTargeting('pos', ['mobile_interstitial']).addService(googletag.pubads());
                googletag.display('dfp-ad-mobile_interstitial');
            });
        }



        googletag.cmd.push(function() {
            var i;
            for (i = 0; i < targeting.length; i++) {
                var slot = targeting[i];


                gptslot = googletag.defineSlot(slot.name, slot.sizes, slot.elementId)
                    .addService(googletag.pubads());

                // ami.mensfitness.ads.slots[slot.elementId] = gptslot;



                for (j = 0; j < gpt_targeting[slot.elementId].length; j++) {
                    pair = gpt_targeting[slot.elementId][j];
                    key = pair[0];
                    value = pair[1];
                    gptslot.setTargeting(key, value);

                }

                googletag.display(slot.elementId);
            }
            googletag.enableServices();
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



;
(function($, window, console, Drupal) {
    console = console || {
        log: function() {}
    };

    Drupal.behaviors.ami_contest_vote = {
        attach: function(context, settings) {
            $('div.ami_contest_photo_container div.needlogin [href$="enter-contest"]', context).each(function(i) {
                //console.log($(this).attr('href'));

                $(this).addClass('colorbox-load');
                new_url = $(this).attr('href') + '?popup=1&width=580&height=515';
                $(this).attr('href', new_url);
            });
            setTimeout(function() {
                $('.fivestar-contest-vote-wide div.fivestar-widget .star', context).append('<span class="copy">VOTE FOR ME</span>');
                $('.fivestar-contest-vote-wide div.fivestar-widget .star a, .fivestar-contest-vote-wide div.fivestar-widget .star span.copy').once('ami_contest_vote', context).bind('click', function(evt) {
                    if ($(evt.target).hasClass('copy')) {
                        $(evt.target).prev().click();
                    }
                });
                $('.fivestar-contest-vote-wide div.fivestar-widget span.copy', context).css('cursor', 'pointer');
                if ($('.fivestar-contest-vote-wide div.fivestar-widget div.on', context).length) {
                    $('.fivestar-contest-vote-wide div.fivestar-widget div.on a', context).unbind();
                    $('.fivestar-contest-vote-wide div.fivestar-widget div.on span.copy', context).text('THANK YOU!');
                    $('.fivestar-contest-vote-wide div.fivestar-widget div.on span.copy', context).css('cursor', 'default');
                }
            }, 500);
            if ($.autopager && $.isArray(context)) {
                $('li.views-row select:not(.ajax-processed)').each(function() {
                    if (false == ($(this).attr('id') in settings.ajax)) {
                        settings.ajax[$(this).attr('id')] = {
                            "callback": "fivestar_ajax_submit",
                            "event": "change",
                            "url": "/system/ajax",
                            "submit": {
                                "_triggering_element_name": "vote"
                            }
                        }
                    }
                });
            }
        }
    };
})(jQuery, window, window.console, Drupal);;
/*
 * Turn off form modification script from global_effects.js script of flexonline website
 *
 * Put a comma separated list of jQuery selectors that describe form elements
 * that should not be processed by this script into the following variable.
 */
(function($, window, console, Drupal) {
    console = console || {
        log: function() {}
    };

    Drupal.behaviors.flexonline_ami_contest = {
        attach: function(context, settings) {
            flexonline_fieldExceptionsList = "form#contest-entry-edit-form input, form#contest-entry-edit-form label";
        }
    };
    Drupal.behaviors.ami_contest_popup_style = {
        attach: function(context, settings) {
            showHide();
            $('select#edit-field-ami-contest-entry-type-und').change(function() {
                showHide()
            });

            function showHide() {
                switch ($('select#edit-field-ami-contest-entry-type-und').val()) {
                    case '1':
                        // model_search
                        $('div#edit-field-popup-style').show();
                        break;
                    default:
                        $('div#edit-field-popup-style').hide();
                        break;
                }
            }
        }
    };
})(jQuery, window, window.console, Drupal);;
(function($) {

    /**
     * Retrieves the summary for the first element.
     */
    $.fn.drupalGetSummary = function() {
        var callback = this.data('summaryCallback');
        return (this[0] && callback) ? $.trim(callback(this[0])) : '';
    };

    /**
     * Sets the summary for all matched elements.
     *
     * @param callback
     *   Either a function that will be called each time the summary is
     *   retrieved or a string (which is returned each time).
     */
    $.fn.drupalSetSummary = function(callback) {
        var self = this;

        // To facilitate things, the callback should always be a function. If it's
        // not, we wrap it into an anonymous function which just returns the value.
        if (typeof callback != 'function') {
            var val = callback;
            callback = function() {
                return val;
            };
        }

        return this
            .data('summaryCallback', callback)
        // To prevent duplicate events, the handlers are first removed and then
        // (re-)added.
        .unbind('formUpdated.summary')
            .bind('formUpdated.summary', function() {
                self.trigger('summaryUpdated');
            })
        // The actual summaryUpdated handler doesn't fire when the callback is
        // changed, so we have to do this manually.
        .trigger('summaryUpdated');
    };

    /**
     * Sends a 'formUpdated' event each time a form element is modified.
     */
    Drupal.behaviors.formUpdated = {
        attach: function(context) {
            // These events are namespaced so that we can remove them later.
            var events = 'change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated';
            $(context)
            // Since context could be an input element itself, it's added back to
            // the jQuery object and filtered again.
            .find(':input').andSelf().filter(':input')
            // To prevent duplicate events, the handlers are first removed and then
            // (re-)added.
            .unbind(events).bind(events, function() {
                $(this).trigger('formUpdated');
            });
        }
    };

    /**
     * Prepopulate form fields with information from the visitor cookie.
     */
    Drupal.behaviors.fillUserInfoFromCookie = {
        attach: function(context, settings) {
            $('form.user-info-from-cookie').once('user-info-from-cookie', function() {
                var formContext = this;
                $.each(['name', 'mail', 'homepage'], function() {
                    var $element = $('[name=' + this + ']', formContext);
                    var cookie = $.cookie('Drupal.visitor.' + this);
                    if ($element.length && cookie) {
                        $element.val(cookie);
                    }
                });
            });
        }
    };

})(jQuery);;

(function($) {

    /**
     * This script transforms a set of fieldsets into a stack of vertical
     * tabs. Another tab pane can be selected by clicking on the respective
     * tab.
     *
     * Each tab may have a summary which can be updated by another
     * script. For that to work, each fieldset has an associated
     * 'verticalTabCallback' (with jQuery.data() attached to the fieldset),
     * which is called every time the user performs an update to a form
     * element inside the tab pane.
     */
    Drupal.behaviors.verticalTabs = {
        attach: function(context) {
            $('.vertical-tabs-panes', context).once('vertical-tabs', function() {
                var focusID = $(':hidden.vertical-tabs-active-tab', this).val();
                var tab_focus;

                // Check if there are some fieldsets that can be converted to vertical-tabs
                var $fieldsets = $('> fieldset', this);
                if ($fieldsets.length == 0) {
                    return;
                }

                // Create the tab column.
                var tab_list = $('<ul class="vertical-tabs-list"></ul>');
                $(this).wrap('<div class="vertical-tabs clearfix"></div>').before(tab_list);

                // Transform each fieldset into a tab.
                $fieldsets.each(function() {
                    var vertical_tab = new Drupal.verticalTab({
                        title: $('> legend', this).text(),
                        fieldset: $(this)
                    });
                    tab_list.append(vertical_tab.item);
                    $(this)
                        .removeClass('collapsible collapsed')
                        .addClass('vertical-tabs-pane')
                        .data('verticalTab', vertical_tab);
                    if (this.id == focusID) {
                        tab_focus = $(this);
                    }
                });

                $('> li:first', tab_list).addClass('first');
                $('> li:last', tab_list).addClass('last');

                if (!tab_focus) {
                    // If the current URL has a fragment and one of the tabs contains an
                    // element that matches the URL fragment, activate that tab.
                    if (window.location.hash && $(this).find(window.location.hash).length) {
                        tab_focus = $(this).find(window.location.hash).closest('.vertical-tabs-pane');
                    } else {
                        tab_focus = $('> .vertical-tabs-pane:first', this);
                    }
                }
                if (tab_focus.length) {
                    tab_focus.data('verticalTab').focus();
                }
            });
        }
    };

    /**
     * The vertical tab object represents a single tab within a tab group.
     *
     * @param settings
     *   An object with the following keys:
     *   - title: The name of the tab.
     *   - fieldset: The jQuery object of the fieldset that is the tab pane.
     */
    Drupal.verticalTab = function(settings) {
        var self = this;
        $.extend(this, settings, Drupal.theme('verticalTab', settings));

        this.link.click(function() {
            self.focus();
            return false;
        });

        // Keyboard events added:
        // Pressing the Enter key will open the tab pane.
        this.link.keydown(function(event) {
            if (event.keyCode == 13) {
                self.focus();
                // Set focus on the first input field of the visible fieldset/tab pane.
                $("fieldset.vertical-tabs-pane :input:visible:enabled:first").focus();
                return false;
            }
        });

        this.fieldset
            .bind('summaryUpdated', function() {
                self.updateSummary();
            })
            .trigger('summaryUpdated');
    };

    Drupal.verticalTab.prototype = {
        /**
         * Displays the tab's content pane.
         */
        focus: function() {
            this.fieldset
                .siblings('fieldset.vertical-tabs-pane')
                .each(function() {
                    var tab = $(this).data('verticalTab');
                    tab.fieldset.hide();
                    tab.item.removeClass('selected');
                })
                .end()
                .show()
                .siblings(':hidden.vertical-tabs-active-tab')
                .val(this.fieldset.attr('id'));
            this.item.addClass('selected');
            // Mark the active tab for screen readers.
            $('#active-vertical-tab').remove();
            this.link.append('<span id="active-vertical-tab" class="element-invisible">' + Drupal.t('(active tab)') + '</span>');
        },

        /**
         * Updates the tab's summary.
         */
        updateSummary: function() {
            this.summary.html(this.fieldset.drupalGetSummary());
        },

        /**
         * Shows a vertical tab pane.
         */
        tabShow: function() {
            // Display the tab.
            this.item.show();
            // Show the vertical tabs.
            this.item.closest('.vertical-tabs').show();
            // Update .first marker for items. We need recurse from parent to retain the
            // actual DOM element order as jQuery implements sortOrder, but not as public
            // method.
            this.item.parent().children('.vertical-tab-button').removeClass('first')
                .filter(':visible:first').addClass('first');
            // Display the fieldset.
            this.fieldset.removeClass('vertical-tab-hidden').show();
            // Focus this tab.
            this.focus();
            return this;
        },

        /**
         * Hides a vertical tab pane.
         */
        tabHide: function() {
            // Hide this tab.
            this.item.hide();
            // Update .first marker for items. We need recurse from parent to retain the
            // actual DOM element order as jQuery implements sortOrder, but not as public
            // method.
            this.item.parent().children('.vertical-tab-button').removeClass('first')
                .filter(':visible:first').addClass('first');
            // Hide the fieldset.
            this.fieldset.addClass('vertical-tab-hidden').hide();
            // Focus the first visible tab (if there is one).
            var $firstTab = this.fieldset.siblings('.vertical-tabs-pane:not(.vertical-tab-hidden):first');
            if ($firstTab.length) {
                $firstTab.data('verticalTab').focus();
            }
            // Hide the vertical tabs (if no tabs remain).
            else {
                this.item.closest('.vertical-tabs').hide();
            }
            return this;
        }
    };

    /**
     * Theme function for a vertical tab.
     *
     * @param settings
     *   An object with the following keys:
     *   - title: The name of the tab.
     * @return
     *   This function has to return an object with at least these keys:
     *   - item: The root tab jQuery element
     *   - link: The anchor tag that acts as the clickable area of the tab
     *       (jQuery version)
     *   - summary: The jQuery element that contains the tab summary
     */
    Drupal.theme.prototype.verticalTab = function(settings) {
        var tab = {};
        tab.item = $('<li class="vertical-tab-button" tabindex="-1"></li>')
            .append(tab.link = $('<a href="#"></a>')
                .append(tab.title = $('<strong></strong>').text(settings.title))
                .append(tab.summary = $('<span class="summary"></span>'))
        );
        return tab;
    };

})(jQuery);;
(function($) {

    Drupal.behaviors.initColorboxLoad = {
        attach: function(context, settings) {
            if (!$.isFunction($.colorbox)) {
                return;
            }
            $.urlParams = function(url) {
                var p = {},
                    e,
                    a = /\+/g, // Regex for replacing addition symbol with a space
                    r = /([^&=]+)=?([^&]*)/g,
                    d = function(s) {
                        return decodeURIComponent(s.replace(a, ' '));
                    },
                    q = url.split('?');
                while (e = r.exec(q[1])) {
                    e[1] = d(e[1]);
                    e[2] = d(e[2]);
                    switch (e[2].toLowerCase()) {
                        case 'true':
                        case 'yes':
                            e[2] = true;
                            break;
                        case 'false':
                        case 'no':
                            e[2] = false;
                            break;
                    }
                    if (e[1] == 'width') {
                        e[1] = 'innerWidth';
                    }
                    if (e[1] == 'height') {
                        e[1] = 'innerHeight';
                    }
                    p[e[1]] = e[2];
                }
                return p;
            };
            $('.colorbox-load', context)
                .once('init-colorbox-load', function() {
                    var params = $.urlParams($(this).attr('href'));
                    $(this).colorbox($.extend({}, settings.colorbox, params));
                });
        }
    };

})(jQuery);;
/*!
Colorbox v1.5.13 - 2014-08-04
jQuery lightbox and modal window plugin
(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t, e, i) {
    function n(i, n, o) {
        var r = e.createElement(i);
        return n && (r.id = Z + n), o && (r.style.cssText = o), t(r)
    }

    function o() {
        return i.innerHeight ? i.innerHeight : t(i).height()
    }

    function r(e, i) {
        i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function(e) {
            var n;
            return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e]
        }, this.get = function(e) {
            var i = this.value(e);
            return t.isFunction(i) ? i.call(this.el, this) : i
        }
    }

    function h(t) {
        var e = W.length,
            i = (z + t) % e;
        return 0 > i ? e + i : i
    }

    function a(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10))
    }

    function s(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e)
    }

    function l(t, e) {
        return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }

    function d(t) {
        "contains" in y[0] && !y[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), y.focus())
    }

    function c(t) {
        c.str !== t && (y.add(v).removeClass(c.str).addClass(t), c.str = t)
    }

    function g(e) {
        z = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function() {
            var i = t.data(this, Y),
                n = new r(this, i);
            return n.get("rel") === e
        }), z = W.index(_.el), -1 === z && (W = W.add(_.el), z = W.length - 1)) : W = t(_.el)
    }

    function u(i) {
        t(e).trigger(i), ae.triggerHandler(i)
    }

    function f(i) {
        var o;
        if (!G) {
            if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !$) {
                $ = q = !0, c(_.get("className")), y.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }), L = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({
                    width: "",
                    height: ""
                }).append(L), D = T.height() + k.height() + b.outerHeight(!0) - b.height(), j = C.width() + H.width() + b.outerWidth(!0) - b.width(), A = L.outerHeight(!0), N = L.outerWidth(!0);
                var h = a(_.get("initialWidth"), "x"),
                    s = a(_.get("initialHeight"), "y"),
                    l = _.get("maxWidth"),
                    f = _.get("maxHeight");
                _.w = (l !== !1 ? Math.min(h, a(l, "x")) : h) - N - j, _.h = (f !== !1 ? Math.min(s, a(f, "y")) : s) - A - D, L.css({
                    width: "",
                    height: _.h
                }), J.position(), u(ee), _.get("onOpen"), O.add(I).hide(), y.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function() {
                    e.removeEventListener("focus", d, !0)
                })), _.get("returnFocus") && ae.one(re, function() {
                    t(_.el).focus()
                })
            }
            var p = parseFloat(_.get("opacity"));
            v.css({
                opacity: p === p ? p : "",
                cursor: _.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
        }
    }

    function p() {
        !y && e.body && (V = !1, E = t(i), y = n(se).attr({
            id: Y,
            "class": t.support.opacity === !1 ? Z + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), v = n(se, "Overlay").hide(), S = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), x = n(se, "Wrapper"), b = n(se, "Content").append(I = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({
            id: Z + "Previous"
        }), K = t('<button type="button"/>').attr({
            id: Z + "Next"
        }), F = n("button", "Slideshow"), S), B = t('<button type="button"/>').attr({
            id: Z + "Close"
        }), x.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
            "float": "left"
        }), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(F), t(e.body).append(v, y.append(x, M)))
    }

    function m() {
        function i(t) {
            t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
        }
        return y ? (V || (V = !0, K.click(function() {
            J.next()
        }), P.click(function() {
            J.prev()
        }), B.click(function() {
            J.close()
        }), v.click(function() {
            _.get("overlayClose") && J.close()
        }), t(e).bind("keydown." + Z, function(t) {
            var e = t.keyCode;
            $ && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), $ && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
    }

    function w() {
        var e, o, r, h = J.prep,
            d = ++le;
        if (q = !0, U = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - A - D : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - N - j : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - N - j, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - A - D, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function() {
            S.show()
        }, 100), _.get("inline")) {
            var c = t(e);
            r = t("<div>").hide().insertBefore(c), ae.one(he, function() {
                r.replaceWith(c)
            }), h(c)
        } else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), U = new Image, t(U).addClass(Z + "Photo").bind("error", function() {
            h(n(se, "Error").html(_.get("imgError")))
        }).one("load", function() {
            d === le && setTimeout(function() {
                var e;
                t.each(["alt", "longdesc", "aria-describedby"], function(e, i) {
                    var n = t(_.el).attr(i) || t(_.el).attr("data-" + i);
                    n && U.setAttribute(i, n)
                }), _.get("retinaImage") && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function() {
                    U.height -= U.height * e, U.width -= U.width * e
                }, _.mw && U.width > _.mw && (e = (U.width - _.mw) / U.width, o()), _.mh && U.height > _.mh && (e = (U.height - _.mh) / U.height, o())), _.h && (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[z + 1]) && (U.style.cursor = "pointer", U.onclick = function() {
                    J.next()
                }), U.style.width = U.width + "px", U.style.height = U.height + "px", h(U)
            }, 1)
        }), U.src = e) : e && M.load(e, _.get("data"), function(e, i) {
            d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents())
        })
    }
    var v, y, x, b, T, C, H, k, W, E, L, M, S, I, R, F, K, P, B, O, _, D, j, A, N, z, U, $, q, G, Q, J, V, X = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return t(this).attr("href")
            },
            title: function() {
                return this.title
            }
        }, Y = "colorbox",
        Z = "cbox",
        te = Z + "Element",
        ee = Z + "_open",
        ie = Z + "_load",
        ne = Z + "_complete",
        oe = Z + "_cleanup",
        re = Z + "_closed",
        he = Z + "_purge",
        ae = t("<a/>"),
        se = "div",
        le = 0,
        de = {}, ce = function() {
            function t() {
                clearTimeout(h)
            }

            function e() {
                (_.get("loop") || W[z + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
            }

            function i() {
                F.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), y.removeClass(a + "off").addClass(a + "on")
            }

            function n() {
                t(), ae.unbind(ne, e).unbind(ie, t), F.html(_.get("slideshowStart")).unbind(s).one(s, function() {
                    J.next(), i()
                }), y.removeClass(a + "on").addClass(a + "off")
            }

            function o() {
                r = !1, F.hide(), t(), ae.unbind(ne, e).unbind(ie, t), y.removeClass(a + "off " + a + "on")
            }
            var r, h, a = Z + "Slideshow_",
                s = "click." + Z;
            return function() {
                r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), F.show())
            }
        }();
    t[Y] || (t(p), J = t.fn[Y] = t[Y] = function(e, i) {
        var n, o = this;
        if (e = e || {}, t.isFunction(o)) o = t("<a/>"), e.open = !0;
        else if (!o[0]) return o;
        return o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function() {
            var i = t.data(this, Y) || {};
            t.data(this, Y, t.extend(i, e))
        }).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
    }, J.position = function(e, i) {
        function n() {
            T[0].style.width = k[0].style.width = b[0].style.width = parseInt(y[0].style.width, 10) - j + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(y[0].style.height, 10) - D + "px"
        }
        var r, h, s, l = 0,
            d = 0,
            c = y.offset();
        if (E.unbind("resize." + Z), y.css({
            top: -9e4,
            left: -9e4
        }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, y.css({
            position: "fixed"
        })) : (l = h, d = s, y.css({
            position: "absolute"
        })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - N - j - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - N - j, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - A - D - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - A - D, 0) / 2), y.css({
            top: c.top,
            left: c.left,
            visibility: "visible"
        }), x[0].style.width = x[0].style.height = "9999px", r = {
            width: _.w + N + j,
            height: _.h + A + D,
            top: l,
            left: d
        }, e) {
            var g = 0;
            t.each(r, function(t) {
                return r[t] !== de[t] ? (g = e, void 0) : void 0
            }), e = g
        }
        de = r, e || y.css(r), y.dequeue().animate(r, {
            duration: e || 0,
            complete: function() {
                n(), q = !1, x[0].style.width = _.w + N + j + "px", x[0].style.height = _.h + A + D + "px", _.get("reposition") && setTimeout(function() {
                    E.bind("resize." + Z, J.position)
                }, 1), i && i()
            },
            step: n
        })
    }, J.resize = function(t) {
        var e;
        $ && (t = t || {}, t.width && (_.w = a(t.width, "x") - N - j), t.innerWidth && (_.w = a(t.innerWidth, "x")), L.css({
            width: _.w
        }), t.height && (_.h = a(t.height, "y") - A - D), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = L.scrollTop(), L.css({
            height: "auto"
        }), _.h = L.height()), L.css({
            height: _.h
        }), e && L.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
    }, J.prep = function(i) {
        function o() {
            return _.w = _.w || L.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w
        }

        function a() {
            return _.h = _.h || L.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h
        }
        if ($) {
            var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
            L.remove(), L = n(se, "LoadedContent").append(i), L.hide().appendTo(M.show()).css({
                width: o(),
                overflow: _.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: a()
            }).prependTo(b), M.hide(), t(U).css({
                "float": "none"
            }), c(_.get("className")), d = function() {
                function i() {
                    t.support.opacity === !1 && y[0].style.removeAttribute("filter")
                }
                var n, o, a = W.length;
                $ && (o = function() {
                    clearTimeout(Q), S.hide(), u(ne), _.get("onComplete")
                }, I.html(_.get("title")).show(), L.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", z + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > z ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || z ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function() {
                    var i, n = W[this],
                        o = new r(n, t.data(n, Y)),
                        h = o.get("href");
                    h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
                })) : O.hide(), _.get("iframe") ? (n = e.createElement("iframe"), "frameBorder" in n && (n.frameBorder = 0), "allowTransparency" in n && (n.allowTransparency = "true"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({
                    src: _.get("href"),
                    name: (new Date).getTime(),
                    "class": Z + "Iframe",
                    allowFullScreen: !0
                }).one("load", o).appendTo(L), ae.one(he, function() {
                    n.src = "//about:blank"
                }), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? y.fadeTo(g, 1, i) : i())
            }, "fade" === _.get("transition") ? y.fadeTo(g, 0, function() {
                J.position(0, d)
            }) : J.position(g, d)
        }
    }, J.next = function() {
        !q && W[1] && (_.get("loop") || W[z + 1]) && (z = h(1), f(W[z]))
    }, J.prev = function() {
        !q && W[1] && (_.get("loop") || z) && (z = h(-1), f(W[z]))
    }, J.close = function() {
        $ && !G && (G = !0, $ = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), y.stop().fadeTo(_.get("fadeOut") || 0, 0, function() {
            y.hide(), v.hide(), u(he), L.remove(), setTimeout(function() {
                G = !1, u(re), _.get("onClosed")
            }, 1)
        }))
    }, J.remove = function() {
        y && (y.stop(), t[Y].close(), y.stop(!1, !0).remove(), v.remove(), G = !1, y = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z))
    }, J.element = function() {
        return t(_.el)
    }, J.settings = X)
})(jQuery, document, window);;
(function($) {

    Drupal.behaviors.initColorbox = {
        attach: function(context, settings) {
            if (!$.isFunction($.colorbox)) {
                return;
            }

            if (settings.colorbox.mobiledetect && window.matchMedia) {
                // Disable Colorbox for small screens.
                var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
                if (mq.matches) {
                    return;
                }
            }

            $('.colorbox', context)
                .once('init-colorbox')
                .colorbox(settings.colorbox);

            $(context).bind('cbox_complete', function() {
                Drupal.attachBehaviors('#cboxLoadedContent');
            });
        }
    };

})(jQuery);;
(function($) {

    Drupal.behaviors.initColorboxDefaultStyle = {
        attach: function(context, settings) {
            $(context).bind('cbox_complete', function() {
                // Only run if there is a title.
                if ($('#cboxTitle:empty', context).length == false) {
                    $('#cboxLoadedContent img', context).bind('mouseover', function() {
                        $('#cboxTitle', context).slideDown();
                    });
                    $('#cboxOverlay', context).bind('mouseover', function() {
                        $('#cboxTitle', context).slideUp();
                    });
                } else {
                    $('#cboxTitle', context).hide();
                }
            });
        }
    };

})(jQuery);;
var popupCopies = 0; // only 1 copy can be opened per time
(function($) {
    Drupal.behaviors.contest_popup = {
        attach: function(context, settings) {
            var currentSlide = 0;
            var thumbsArray = [];
            var cache = [];
            var thumbsLoaded = false;
            var slideImage, objectRef, uId, contestId, centerY, centerX, jsonObj, rootUrl, gridButton;
            var userName = '';
            var contestPopupHTML = '<div id="contest_popup" class="clearfix"><div id="PopupWrapper"><div class="ClosePopup"></div><div class="AdBaner">&nbsp;</div><div class="AdBanerMobile">&nbsp;</div><div class="Sponsor">&nbsp;</div><div class="Gallery"><div class="loadingBar"></div><div class="LeftSection imageRow"></div><div class="RightSection"><h1 class="Name"></h1><p class="SepLine"></p><p class="PersonalData"><span class="ageCont hide"><b>Age:</b> </span><span class="age"></span><span class="separator1 hide"> | </span><span class="weightCont hide"><b>Weight:</b> <span class="weight"></span></span><span class="separator2 hide"> | </span><span class="heightCont hide"><b>Height:</b> <span class="height"></span></span></p><p class="SepLine"></p></div></div><div class="Thumb slideThumbs"><div class="BeforeSection hide"><p>Before</p><ul class="images clearfix"></ul></div><div class="AfterSection hide"><p>After</p><ul class="images clearfix"></ul></div></div><div class="waitForVote hide"><span>Please wait...</span></div><button class="VoteForMe hide">Vote for me</button><button class="ThanksForTheVote hide">Thanks For The Vote</button></div></div>';
            /*Constructor
             ***********************/

            function intiContestPopup() {
                $("button.VoteForMe").click(function(event) {
                    var contestPopup = $("#contest_popup .waitForVote");
                    contestPopup.show();
                    $.getJSON("/contest-info/vote/" + contestId + "/" + uId, function(data) {
                        contestPopup.hide();
                        $("button.VoteForMe").hide();
                        $("button.ThanksForTheVote").removeClass('hide');
                        gridButton.html('THANKS FOR THE VOTE');
                        gridButton.unbind();
                        gridButton.prev().unbind();
                        gridButton.parent().addClass('on');
                    });
                });

                $(thumbsArray[currentSlide]).addClass("active");

            }

            /*Add html for contest_popup*/

            function addContestPopupHTML() {
                $("body").prepend('<div id="overlayM"></div>');
            }

            /*Close Momento
             ***********************/

            function closeContestPopup() {
                $("#contest_popup .ClosePopup").click(function() {
                    $("#overlayM").fadeOut(400, function() {
                        $("#overlayM").remove();
                        thumbsArray = [];
                    });
                    //history.replaceState({content:"title"}, "test", rootUrl);
                    if (!isLtIe10()) {
                        history.pushState({
                            "content": "title"
                        }, "test", rootUrl);
                    }
                    popupCopies--;
                });
            }

            /*Thumb nails nav
             ***********************/

            function thumbsNav(count) {
                if (!isLtIe10()) {
                    $(thumbsArray).each(function(i) {
                        $(this).click(function(event) {
                            $("#contest_popup .loadingBar").show();
                            currentSlide = $(".slideThumbs ul li").index(this);
                            updateSlide(objectRef[currentSlide]);
                            return event.preventDefault();
                        });
                    });
                }
            }

            /*Next/Prev funcitons
             ***********************/

            function slideNext(event) {
                updateSlide(objectRef[currentSlide]);
            }

            function updateSlide(data) {
                /*load from URL page load first if true
                 ********************************************************/

                if (!isLtIe10()) {
                    if (checkParemeterExists("contest")) {
                        currentSlide = getURLParameter("slide");
                    } else {
                        //else just pushState from controls

                        /*push pageview
             To Google Analyitcs
             *******************/
                        try {
                            _gaq.push(['_trackPageview', "/" + data.slide.url + getURLParameter("slide") + "/?dest=" + rootUrl]);
                        } catch (err) {}
                        /******************/
                    }
                }


                /*Check if ad interstitial needs to be injected
                 ********************************************************/

                setResponsiveImg(objectRef[currentSlide].slide.image.full);
                //////
                // $("#contest_popup .preload").html(slideImage);//preloadImage in hidden container
                //then take whats there and store it if for now
                ////////

                //If image is loaded, execute
                loadImages($(slideImage).attr("src"), function() {
                    //////////////////////////////////////Transitions set area
                    var imageRow = $(".imageRow");
                    imageRow.fadeOut(300, function() {
                        imageRow.html(slideImage);
                        imageRow.fadeIn(300, function() {
                            $("#contest_popup .loadingBar").hide();
                            $("#contest_popup .imageRow img").click(slideNext);
                            loadThumbNails();
                        });
                    });

                    /////////////////////////////////////////////////////////////////
                    $(".slideThumbs ul li").removeClass("active");
                    $(thumbsArray[currentSlide]).addClass("active");
                    refreshIframe();
                });

            } //end function

            function refreshIframe() {
                //top ad
                $("#contest_popup div.AdBaner").html("<iframe src='" + objectRef[currentSlide].slide.dart.horizontal_banner[0].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"') + "' name='ifrm' id='ifrm2' scrolling='no' allowtransparency='true' width='728' height='90' frameborder='0'></iframe>");
                $("#contest_popup div.AdBanerMobile").html("<iframe src='" + objectRef[currentSlide].slide.dart.horizontal_banner_mobile[0].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"') + "' name='ifrm' id='ifrm2' scrolling='no' allowtransparency='true' width='320' height='50' frameborder='0'></iframe>");
            }

            /*calculate width of thumbs nav
             *************************************/

            function loadThumbNails() {
                if (thumbsLoaded == false) {
                    $(".slideThumbs ul li").each(function(i) {
                        loadImages($(this).find("img").attr("src"), function() {
                            $(".slideThumbs img").animate({
                                "opacity": "1"
                            });
                            $(".slideThumbs .preloadThumb").fadeOut();
                        });
                    });
                    thumbsLoaded = true;
                }
            }

            /*Center contest_popup based on screen size*/

            function centerContestPopup() {
                var contestPopup = $("#contest_popup");
                var contestHeight = contestPopup.height();
                var contestWidth = contestPopup.width();
                centerY = ($(window).height() / 2) - (contestHeight / 2);
                centerX = ($(window).width() / 2) - (contestWidth / 2);
                if (centerY < 0 || $(window).height() <= contestHeight) {
                    centerY = 0;
                }
                contestPopup.css({
                    top: centerY,
                    left: centerX
                });
            }

            /*Set image based on screen size*/

            function setResponsiveImg(img) {
                slideImage = '<img src="' + img + '" class="slideImage' + currentSlide + '" />';
            }

            /*Parameter functions
             ***************************/

            function getURLParameter(name) {
                name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                var regexS = "[\\?&]" + name + "=([^&#]*)";
                var regex = new RegExp(regexS);
                var results = regex.exec(window.location.href);
                if (results == null) {
                    return "";
                } else {
                    return results[1];
                }
            }

            function checkParemeterExists(parameter) {
                //Get Query String from url
                fullQString = window.location.search.substring(1);

                paramCount = 0;
                queryStringComplete = "?";

                if (fullQString.length > 0) {
                    //Split Query String into separate parameters
                    paramArray = fullQString.split("&");

                    //Loop through params, check if parameter exists.
                    for (i = 0; i < paramArray.length; i++) {
                        currentParameter = paramArray[i].split("=");
                        if (currentParameter[0] == parameter) {
                            return true;
                        }
                    }
                }
                return false;
            }


            /*Put this in a function somewhere
       this is the click event for the thumbnails
       ******************************************************/
            $(".contest-popup-slideshow-trigger").click(function(event) {
                if (0 == popupCopies) {
                    popupCopies++;
                    jsonObj = $(this).attr("rel");
                    currentSlide = 0;
                    loadContestPopup("clicked");
                    gridButton = $(event.target).closest('li').find('span.copy');
                    event.preventDefault();
                }
            });


            /*Get controls from
       Controller Json and apply
       ***************************/

            function isLtIe10() {
                if ($.browser.msie && Math.floor($.browser.version) <= 9) {
                    return true;
                } else {
                    return false;
                }
            }

            function ieControls() {
                $(".slideThumbs li").each(function(i) {
                    $(this).children("img").wrap('<a href="' + rootUrl + "?contest=" + contestId + "&uid=" + uId + "&slide=" + objectRef[i].slide.index + "&dest=" + rootUrl + '" />');
                });
            }

            function loadImages(images, callback) {
                // if our first argument is an string, we convert it to an array
                if (typeof images == "string") {
                    images = [images];
                }
                var imagesLength = images.length;
                var loadedCounter = 0;

                for (var i = 0; i < imagesLength; i++) {
                    var cacheImage = document.createElement('img');
                    //set the onload method after the src is called otherwise will fail to be called in IE
                    cacheImage.onload = function() {
                        loadedCounter++;
                        if (loadedCounter == imagesLength) {
                            if ($.isFunction(callback)) {
                                callback();
                            }
                        }
                    };
                    cacheImage.src = images[i];
                    cache.push(cacheImage);
                }
            }

            function loadContestPopup(type) {
                if (checkParemeterExists("contest") || type == "clicked") {
                    addContestPopupHTML();
                    $(".Gallery").css("headroom", "display: none!important;");
                    if (type == "loaded") {
                        jsonObj = "/contest-info-popup/" + getURLParameter("contest") + "/" + getURLParameter("uid");
                        uId = getURLParameter("uid");
                        contestId = getURLParameter("contest");
                    }
                    if (type == "clicked") {
                        contestId = jsonObj.split("/");
                        uId = contestId[3];
                        contestId = contestId[2];
                    }
                    $("#overlayM").animate({
                        opacity: 1
                    }, 300, function() {});


                    $.getJSON(jsonObj, function(data) {
                        $("div#overlayM").prepend(contestPopupHTML);
                        closeContestPopup();
                        if ('youtube' == data.popup_type) {
                            $('#contest_popup').addClass("youtube");
                            $("div.RightSection").clone().removeClass("RightSection").addClass("Info").insertAfter("div.Thumb").empty();

                            $("div.waitForVote").remove();
                            if (data.youtube) {
                                $("div.RightSection").append(data.youtube);
                            }
                            if (data.essay) {
                                $("div.RightSection").append('<div class="Essay"><div>' + data.essay + '</div></div>');
                                if (null != data.show_button && data.show_button) {
                                    $("div.Essay").addClass("vote");
                                }
                                if ($.fn.jScrollPane !== undefined) {
                                    $("div.Essay").jScrollPane();
                                }

                            }
                            $("div.RightSection").append($("button.VoteForMe"));
                            $("div.RightSection").append($("button.ThanksForTheVote"));
                        }
                        centerContestPopup();
                        userName = '';
                        if (null != data.first_name) {
                            userName += data.first_name + ' ';
                        }
                        if (null != data.last_name) {
                            userName += data.last_name;
                        }
                        $("h1.Name").text(userName);
                        var needSeparator1 = false;
                        var needSeparator2 = false;
                        if (null != data.age) {
                            $("span.age").text(data.age);
                            $("span.ageCont").show();
                            needSeparator1 = true;
                        }
                        if (null != data.weight) {
                            $("span.weight").text(data.weight);
                            $("span.weightCont").show();
                            if (needSeparator1) {
                                $("span.separator1").show();
                            }
                            needSeparator2 = true;
                        }
                        if (null != data.height) {
                            $("span.height").text(data.height);
                            $("span.heightCont").show();
                            if (needSeparator2) {
                                $("span.separator2").show();
                            }
                        }
                        if (null == data.age && null == data.weight && null == data.height) {
                            $("p.SepLine").hide();
                        }

                        if (null != data.header) {
                            $("div.Sponsor").html(data.header);
                        }

                        if (null != data.show_button && data.show_button) {
                            if (null == data.may_vote || data.may_vote) {
                                $("button.VoteForMe").show();
                            } else {
                                $("button.ThanksForTheVote").show();
                            }
                        }
                        if ('before_after' == data.type) {
                            $("div.BeforeSection, div.AfterSection").show();
                            for (var b in data.before) {
                                $(".BeforeSection ul.images").append('<li><div class="preloadThumb"></div><img src="' + data.before[b].slide.image.thumb + '"></li>');
                                thumbsArray.push($(".slideThumbs div.BeforeSection ul li:nth-child(" + (parseInt(b, 10) + 1) + ")"));
                            }
                            for (var a in data.after) {
                                $(".AfterSection ul.images").append('<li><div class="preloadThumb"></div><img src="' + data.after[a].slide.image.thumb + '"></li>');
                                thumbsArray.push($(".slideThumbs div.AfterSection ul li:nth-child(" + (parseInt(a, 10) + 1) + ")"));
                            }
                        } else {
                            $("div.BeforeSection p, div.AfterSection p").hide();
                            $("div.BeforeSection").show();
                            var t;
                            for (t in data.picts) {
                                $(".BeforeSection ul.images").append('<li><div class="preloadThumb"></div><img src="' + data.picts[t].slide.image.thumb + '"></li>');
                                thumbsArray.push($(".slideThumbs div.BeforeSection ul li:nth-child(" + (parseInt(t, 10) + 1) + ")"));
                            }
                        }
                        thumbsLoaded = false;

                        if (type == "clicked") {
                            currentSlide = 0;
                            rootUrl = window.location.href;
                        } else {
                            currentSlide = getURLParameter("slide");
                            rootUrl = decodeURIComponent(decodeURIComponent(getURLParameter("dest")));
                        }
                        //////////////////////////////////////////////////////////
                        objectRef = null;
                        if ('before_after' == data.type) {
                            if (null != data.before && 0 < data.before.length) {
                                objectRef = data.before;
                            }
                            if (null != data.after && 0 < data.after.length) {
                                if (null == objectRef) {
                                    objectRef = data.after;
                                } else {
                                    objectRef = objectRef.concat(data.after);
                                }
                            }
                        } else {
                            // if (data.length > 0) {
                            if (null !== data.picts && 0 < data.picts.length) {
                                objectRef = data.picts;
                            }
                            // }

                        }
                        if (null !== objectRef) {
                            thumbsNav(objectRef.length);
                        }
                        centerContestPopup();
                        if (null !== objectRef) {
                            updateSlide(objectRef[currentSlide]);
                        }
                        window.onpopstate = function(event) {
                            if (data == null)
                                return;
                            currentSlide = parseInt(event.state.index, 10);
                            $(".slideInfo h1").text(userName);

                            $(".slideThumbs ul li").removeClass("active");
                            $(thumbsArray[currentSlide]).addClass("active");
                        };

                        intiContestPopup();

                        if (isLtIe10()) {
                            ieControls();
                        }
                    });
                }
            }

            loadContestPopup("loaded");
        }
    }
})(jQuery);;
var Timer = function(millis, callback) {
    return this._init(millis, callback);
}

Timer.prototype = {
    VERSION: 1.0,
    _init: function(millis, callback) {

        this._interval = 1000;
        this._timer = null;
        this._cbs = [];
        this._multipliers = [];
        this._tickCounts = [];
        this._canRun = [];
        this._stoppedThreads = 0;
        this._runOnce = false;
        this._startedAt = -1;
        this._pausedAt = -1;

        if (typeof(millis) == 'number') this._interval = millis;
        this.addCallback(callback);
        return this;
    },

    /* some preset operation, called from start() */

    _preset: function() {
        this._stoppedThreads = 0;
        this._startedAt = -1;
        this._pausedAt = -1;
        for (var i = 0; i < this._cbs.length; i++) {
            this._canRun[i] = true;
            this._tickCounts[i] = 0;
        }
    },
    _ticks: function(initInterval) {

        var me = this;
        for (var i = 0; i < this._cbs.length; i++) {
            if (typeof(this._cbs[i]) == 'function' && this._canRun[i]) {
                this._tickCounts[i]++;
                if (this._tickCounts[i] == this._multipliers[i]) {
                    this._tickCounts[i] = 0;
                    if (this.runOnce()) {
                        this._canRun[i] = false;
                        this._stoppedThreads++;
                    }
                    window.setTimeout(me._cbs[i], 0);
                }
            }
        }

        if (this.runOnce() && this._stoppedThreads == this._cbs.length)
            this.stop();

        if (typeof(initInterval) == 'number') {
            this.stop().start(null, true);
        }
    },

    runOnce: function(isRunOnce) {
        if (typeof(isRunOnce) == 'undefined') return this._runOnce;
        else if (typeof(isRunOnce) == 'boolean') this._runOnce = isRunOnce;
        else alert("Invalid argument for runOnce(...).\n\nUsage: runOnce(true | false) /*Default value: false*/\nor, runOnce() to get status");
        return this;
    },
    interval: function(millis) {
        if (typeof(millis) == 'undefined') return this._interval;
        else if (typeof(millis) == 'number') this._interval = Math.floor(millis);
        return this;
    },

    stop: function(isPausing) {
        if (this._timer) {
            if (!isPausing) this._pausedAt = -1;
            try {
                window.clearInterval(this._timer);
            } catch (ex) {}
            this._timer = null;
        }
        return this;
    },

    isStopped: function() {
        return ((this._timer == null) && !this.isPaused());
    },

    start: function(_initialInterval, _withoutPreset) {
        if (this.isPaused())
            return this.resume();
        if (!this.isStopped())
            return this;

        if (!_withoutPreset)
            this._preset();

        var tmpInterval = this._interval;

        if (typeof(_initialInterval) == 'number') tmpInterval = _initialInterval;

        var me = this;

        this._timer = window.setInterval(function() {
            me._ticks(_initialInterval);
        }, tmpInterval);

        this._startedAt = (new Date()).getTime();

        this._startedAt -= (this._interval - tmpInterval);

        return this;

    },

    pause: function() {
        if (this._timer) {
            this._pausedAt = (new Date()).getTime();
            this.stop(true);
        }
        return this;
    },

    isPaused: function() {
        return (this._pausedAt >= 0);
    },


    resume: function() {
        if (this.isPaused()) {
            var tempInterval = this._interval - ((this._pausedAt - this._startedAt) % this._interval);
            this._pausedAt = -1;
            this.start(tempInterval, true);
        }
        return this;
    },

    restart: function() {
        return this.stop().start();
    },

    addCallback: function(callback, N) {
        if (typeof(callback) == 'function') {
            this._cbs.push(callback);
            if (typeof(N) == 'number') {
                N = Math.floor(N)
                this._multipliers.push((N < 1 ? 1 : N));
            } else
                this._multipliers.push(1);
            this._tickCounts.push(0);

            this._canRun.push(true);
        }
        return this;
    },

    clearCallbacks: function() {
        this._cbs.length = 0;
        this._multipliers.length = 0;
        this._canRun.length = 0;
        this._tickCounts.length = 0;
        this._stoppedThreads = 0;
        return this;
    }
};;
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($) {
    $.fn.touchwipe = function(settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function() {},
            wipeRight: function() {},
            wipeUp: function() {},
            wipeDown: function() {},
            preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function() {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }

            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }

            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);;
(function($, window, console, Drupal) {
    console = console || {
        log: function() {}
    };
    Drupal.behaviors.field_manager = {
        attach: function(context, setting) {
            var cms_storage = [],
                cp_storage = [];
            $(function() {
                $('div.ami_field_manager').hide().after('<table class="ami_field_manager"><colgroup><col width="40px" /><col width="40px" /><col /></colgroup><thead><tr><th>visibility</th><th>mandatory</th><th>field</th></tr></thead><tbody class="ami_contest_model_search"></tbody><tbody class="ami_contest_photo"></tbody><tbody class="notypeselected"><tr><td colspan="3">Please select a contest type</td></tr></tbody></table>');
                var options = {
                    'ami_contest_model_search_': {},
                    'ami_contest_photo_': {}
                };
                $('div.ami_field_manager input.ami_field_manager').each(function() {
                    var value_parts = parseValue($(this).val());
                    if (!options[value_parts['type']][value_parts['field']]) {
                        options[value_parts['type']][value_parts['field']] = {
                            'v': null,
                            'm': null,
                            'l': null
                        };
                    }
                    if (value_parts['mandatory']) {
                        options[value_parts['type']][value_parts['field']]['m'] = $(this);
                    } else {
                        options[value_parts['type']][value_parts['field']]['v'] = $(this).change(function() {
                            $('input.ami_field_manager[value="' + $(this).val() + '_mandatory"]').attr('disabled', !$(this).is(":checked"));
                        });
                        options[value_parts['type']][value_parts['field']]['l'] = $(this).parent().children('label');
                    }
                });
                buildTable('ami_contest_model_search', options);
                buildTable('ami_contest_photo', options);
                showHide();
                $('select#edit-field-ami-contest-entry-type-und').change(function() {
                    showHide();
                });
            });

            function showHide() {
                switch ($('select#edit-field-ami-contest-entry-type-und').val()) {
                    case '1':
                        // model_search
                        storeValues(cp_storage, 'ami_contest_photo');
                        $('table.ami_field_manager tbody.ami_contest_photo').hide();
                        $('table.ami_field_manager tbody.notypeselected').hide();
                        restoreValues(cms_storage, 'ami_contest_model_search');
                        $('table.ami_field_manager tbody.ami_contest_model_search').show();
                        break;
                    case '2':
                        // photo
                        storeValues(cms_storage, 'ami_contest_model_search');
                        $('table.ami_field_manager tbody.ami_contest_model_search').hide();
                        $('table.ami_field_manager tbody.notypeselected').hide();
                        restoreValues(cp_storage, 'ami_contest_photo');
                        $('table.ami_field_manager tbody.ami_contest_photo').show();
                        break;
                    default:
                        storeValues(cms_storage, 'ami_contest_model_search');
                        storeValues(cp_storage, 'ami_contest_photo');
                        $('table.ami_field_manager tbody.ami_contest_model_search').hide();
                        $('table.ami_field_manager tbody.ami_contest_photo').hide();
                        $('table.ami_field_manager tbody.notypeselected').show();
                        break;
                }
            }

            function storeValues(storage, type) {
                if ($('table.ami_field_manager tbody.' + type).is(":visible")) {
                    storage.length = 0;
                    $('table.ami_field_manager tbody.' + type + ' input.ami_field_manager:checked').each(function() {
                        storage.push($(this).val());
                        $(this).attr('checked', false);
                    });
                }
            }

            function restoreValues(storage, type) {
                $.each(storage, function() {
                    $('table.ami_field_manager tbody.' + type + ' input.ami_field_manager[value="' + this + '"]').attr('checked', true);
                })
            }

            function buildTable(type, options) {
                $.each(options[type + '_'], function() {
                    $('table.ami_field_manager tbody.' + type).append($('<tr></tr>').append(
                        $('<td></td>').append($(this)[0]['v']),
                        $('<td></td>').append($(this)[0]['m'].attr('disabled', !$(this)[0]['v'].is(":checked"))),
                        $('<td></td>').append($(this)[0]['l'])
                    ));
                });
            }

            function parseValue(value) {
                var value_parts = {
                    'type': null,
                    'field': null,
                    'mandatory': null
                };
                if (0 == value.indexOf('ami_contest_model_search_')) {
                    value_parts['type'] = 'ami_contest_model_search_';
                } else {
                    value_parts['type'] = 'ami_contest_photo_';
                }
                if (-1 !== value.indexOf('_mandatory', value.length - '_mandatory'.length)) {
                    value_parts['mandatory'] = true;
                    value_parts['field'] = value.substring(value_parts['type'].length, value.length - '_mandatory'.length);
                } else {
                    value_parts['field'] = value.substring(value_parts['type'].length);
                }
                return value_parts;
            }
        }
    };
})(jQuery, window, window.console, Drupal);;
(function($) {
    Drupal.behaviors.memento = {
        attach: function(context, settings) {

            var thumbsPos = 0;
            var maxThumbs = 0;
            var thumbWidth = 0;
            var thumbsMargin = 0;
            var currentSlide = 0;
            var slidesOut = 0;
            var moveCount = 0;
            var maxMobile = 640; //change to dynamic
            var adTimeOut = 6000; //change to pull from control
            var controlsActive = false;
            var fullscreen = false;
            var thumbNavW = new Number;
            var thumbsArray = new Array();
            var cache = new Array();
            var mementoClick = false;
            var injectAd = false;
            var thumbsLoaded = false;
            var interstitialActive = false;
            var controls = Drupal.settings.memento.controls_settings;
            var slideImage, slideTxt, slideTime, slideBlurb, timer, autoPlay, objectRef, slideShowId, navMenu, centerY, centerX, centerThumb, jsonObj, rootUrl, interstitialCount, autoNav, enableKeys, slideW, slideH;
            var fullMemW, sThumbsW, sInfoH;
            var mementoHTML = '<div id="overlayM"><div id="memento" class="clearfix"><div id="mementoHeader"><div id="mNav"><nav></nav></div><div class="logo"></div><div class="closeBtn"></div></div><header></header><div class="nextBtn"></div><div class="prevBtn"></div><div class="slideContainer"><div class="adDiv"><div class="adTdCell"></div></div><div class="preload"></div><div class="loadingBar"></div><div class="imageRow"></div></div><div class="slideInfo"><div class="header clearfix"><div class="playPause"></div></div><div class="text"><h1></h1><div class="pageInfo"></div><div class="blurb"></div></div><div class="shareNav"></div></div><div class="adContainer"><div class="adText">ADVERTISEMENT</div><div class="ad"></div></div><div class="bottomNav"><div class="prevThumbs"></div><div class="slideThumbs"><ul class="clearfix"></ul></div><div class="nextThumbs"></div></div></div></div>';

            /*Constructor
             ***********************/

            function intiMomemto() {
                getControls(Drupal.settings.memento.controls_settings);


                closeMemento();
                //inti controls
                controlsActive = true;
                if (!isLtIe10()) {
                    $(".nextBtn").click(slideNext);
                    $(".prevBtn").click(slidePrev);
                }
                swipeEvents();


                $("#memento .slideInfo .playPause").click(toggleAutoPlay);

                //initial thumb Nav calculations
                centerThumb = Math.round(maxThumbs / 2);

                $(thumbsArray[currentSlide]).addClass("active");

                $("#memento #mNav nav").append(decodeHTML(navMenu));
                toggleNav();
            }
            /*Add html for memento*/

            function addMementoHTML() {
                $("body").prepend(mementoHTML);
            }

            function decodeHTML(html) {
                html = $(html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'));

                return html;
            }


            /*Close Momento
             ***********************/

            function closeMemento() {
                $("#memento .closeBtn").click(function() {
                    $("#overlayM").fadeOut(function() {
                        $(this).remove();
                        thumbsArray = [];
                        maxThumbs = 0;
                    });
                    $(window).touchwipe({
                        wipeLeft: function() {},
                        wipeRight: function() {}
                    });
                    //history.replaceState({content:"title"}, "test", rootUrl);
                    if (!isLtIe10()) {
                        history.pushState({
                            "content": "title"
                        }, "test", rootUrl);
                    }
                });
            }

            function toggleNav() {
                $("#memento #mNav").click(function() {
                    $(this).toggleClass("on");
                    if ($(this).hasClass("on")) {
                        $("#memento #mNav ul").show();
                    } else {
                        $("#memento #mNav ul").hide();
                    }
                });
            }


            /*Thumb nails nav
             ***********************/

            function thumbsNav(count) {
                if (count > maxThumbs) {
                    $(".slideThumbs .prevThumbs, .slideThumbs .nextThumbs").show();
                    $(".nextThumbs").click({
                        val: "next"
                    }, updateThumbNav);
                    $(".prevThumbs").click({
                        val: "prev"
                    }, updateThumbNav);
                }
                if (!isLtIe10()) {
                    $(thumbsArray).each(function(i) {
                        $(this).click(function(event) {
                            currentSlide = $(".slideThumbs ul li").index(this);
                            updateSlide(objectRef[currentSlide]);
                            return event.preventDefault();
                        });
                    });
                }
            }

            function selectedThumb() {
                setResponsiveImg(objectRef[currentSlide].slide.image.desktop);
                updateSlide(objectRef[currentSlide]);
                $(".slideThumbs ul li").removeClass("active");
                $(thumbsArray[currentSlide]).addClass("active");
                thumbsPos = (currentSlide * thumbWidth);

                if (currentSlide > centerThumb - 1) {
                    thumbsPos = -1 * (currentSlide * thumbWidth) + ((centerThumb - 1) * thumbWidth); //centerThumb - 
                    $(".slideThumbs ul").css({
                        "margin-left": thumbsPos
                    });
                } else {
                    $(".slideThumbs ul").css({
                        "margin-left": 0
                    });
                }
            }


            /*Update the position 
of the thumbs Navigation
*************************************/

            function updateThumbNav(event) {
                timerReset(timer);
                slidesOut = thumbsPos > 0 ? 0 : -1 * (thumbsPos / thumbWidth);
                switch (event.data.val) {
                    case "next":
                        if ((slidesOut + maxThumbs < objectRef.length)) {
                            thumbsPos -= maxThumbs * thumbWidth;
                            $(".slideThumbs ul").animate({
                                "margin-left": thumbsPos
                            }, 200);
                        }
                        break;

                    case "prev":
                        if (slidesOut > 0) {
                            if (slidesOut < maxThumbs) {
                                thumbsPos = 0;
                            } else {
                                thumbsPos += maxThumbs * thumbWidth;
                            }
                            /*console.log("Thumbs Nav test");
console.log("thumbsPos = "+thumbsPos);
console.log("slidesOut = "+slidesOut);
console.log(maxThumbs * thumbWidth);*/

                            $(".slideThumbs ul").animate({
                                "margin-left": thumbsPos
                            }, 200);
                        }
                        break;
                }
            }


            /*Next/Prev funcitons
             ***********************/

            function slideNext(event) {
                if (injectAd) {
                    injectAd = false;

                    injectInterstitial();
                    controlsActive = true;
                } else {
                    if (interstitialActive) {
                        $(".adDiv").hide();
                        $(".adTdCell").empty();
                    }
                    if (controlsActive) {
                        controlsActive = false;

                        if (currentSlide >= objectRef.length - 1) {
                            currentSlide = 0;
                        } else {
                            currentSlide++;
                        }

                        updateSlide(objectRef[currentSlide]);
                    }
                }
            }

            function slidePrev() {
                if (injectAd) {
                    injectAd = false;

                    injectInterstitial();
                    controlsActive = true;
                } else {
                    if (interstitialActive) {
                        $(".adDiv").hide();
                        $(".adTdCell").empty();
                    }
                    if (controlsActive) {
                        controlsActive = false;

                        if (currentSlide == 0) {
                            currentSlide = objectRef.length - 1;
                        } else {
                            currentSlide--;
                        }
                        updateSlide(objectRef[currentSlide]);
                    }
                }
            }


            /*Keyboard Controls
             ***********************/

            function keyControls() {
                $(document).keydown(function(event) {
                    if (event.keyCode == 37) {
                        //left arrow
                        slidePrev();
                        return false;
                    }
                    if (event.keyCode == 39) {
                        //right arrow
                        slideNext();
                        return false;
                    }
                    if (event.keyCode == 32) {
                        //space bar
                        //toggleAutoPlay();
                        return false;
                    }
                    if (event.keyCode == 27) {
                        closeFullscreen();
                        return false;
                    }
                    if (event.ctrlKey && event.keyCode == 13) {
                        launchFullscreen();
                        return false;
                    }
                    /*if(event.keyCode == 13) {
//enter/return key
}*/
                    return true;
                    //console.log(event.keyCode);
                });
            }



            function launchFullscreen() {
                //document.getElementById("memento").mozRequestFullScreen();
                var elem = document.getElementById("memento");
                fullscreen = true;

                if (elem.requestFullScreen) {
                    elem.requestFullScreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();

                } else if (elem.webkitRequestFullScreen) {
                    elem.webkitRequestFullScreen();
                }
            }

            function closeFullscreen() {
                document.cancelFullScreen()
            }


            /*Update the slide image and text
             *************************************/

            function updateSlide(data) {
                /*load from URL page load first if true
                 ********************************************************/

                if (!isLtIe10()) {
                    if (checkParemeterExists("slideshow")) {
                        var newURL = data.slide.url.split("/");
                        //var sNumb = newURL.pop();
                        newURL.splice(newURL.length - 2, 2);
                        var finalURL = "";
                        for (var i = 0; i < newURL.length; i++) {
                            finalURL += newURL[i] + "/";
                        }
                        finalURL += getURLParameter("slide") + "/?dest=" + getURLParameter("dest");
                        currentSlide = getURLParameter("slide");
                        history.pushState(data.slide, data.slide.text.title, "/" + decodeURIComponent(decodeURIComponent(finalURL)));
                    } else {
                        //else just pushState from controls
                        history.pushState(data.slide, data.slide.text.title, "/" + data.slide.url + getURLParameter("slide") + "/?dest=" + rootUrl);

                        /*push pageview
To Google Analyitcs
*******************/
                        _gaq.push(['_trackPageview', "/" + data.slide.url + getURLParameter("slide") + "/?dest=" + rootUrl]);
                        /******************/
                    }
                }


                /*Check if ad interstitial needs to be injected
                 ********************************************************/

                //console.log(objectRef[currentSlide].slide.dart.horizontal_banner);//Dart ad
                timerReset(timer); //reset timer if needed
                addSlideContent(data.slide); //update slide content

                //////
                $("#memento .preload").html(slideImage); //preloadImage in hidden container
                $("#memento .loadingBar").show();
                //then take whats there and store it if for now
                ////////


                //If image is loaded, execute
                loadImages($(slideImage).attr("src"), function() {
                    $("#memento .loadingBar").hide();

                    //////////////////////////////////////Transitions set area
                    $(".imageRow").fadeOut(300, function() {
                        $(".imageRow").html(slideImage);
                        resizeImg();
                        $(".imageRow").fadeIn(300, function() {
                            $("#memento .imageRow img").click(slideNext);
                            loadThumbNails();
                        });
                    });

                    /////////////////////////////////////////////////////////////////

                    if (data.slide.text.title == null) {
                        $(".slideInfo h1").text("");
                    } else {
                        $(".slideInfo h1").text(data.slide.text.title);
                    }
                    if (data.slide.text.title == null) {
                        $(".slideInfo .blurb").text("");
                    } else {
                        $(".slideInfo .blurb").text(data.slide.text.caption);
                    }
                    $(".slideInfo .pageInfo").text((parseInt(currentSlide, 10) + 1) + " of " + objectRef.length);

                    $(".slideThumbs ul li").removeClass("active");
                    $(thumbsArray[currentSlide]).addClass("active");
                    thumbsPos = (currentSlide * thumbWidth);

                    if (currentSlide > centerThumb - 1) {
                        thumbsPos = -1 * (currentSlide * thumbWidth) + ((centerThumb - 1) * thumbWidth); //centerThumb - 
                        $(".slideThumbs ul").animate({
                            "margin-left": thumbsPos
                        }, function() {
                            controlsActive = true;
                        });
                    } else {
                        $(".slideThumbs ul").animate({
                            "margin-left": 0
                        }, function() {
                            controlsActive = true;
                        });
                    }

                    /*if center thumbs nav doesn't need to pan over*/
                    if (thumbsPos > 0) {
                        thumbsPos = 0;
                    }
                    refreshIframe();
                    //slidesOut = -1*(parseInt($(".slideThumbs ul").css("marginLeft").replace(/[^-\d\.]/g, ''), 10) / thumbWidth);
                    slidesOut = thumbsPos > 0 ? 0 : -1 * (thumbsPos / thumbWidth);
                });

            } //end function

            function refreshIframe() {
                //top ad
                $("#memento header").html("<iframe src='" + objectRef[currentSlide].slide.dart.horizontal_banner[0].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"') + "' name='ifrm' id='ifrm2' scrolling='no' allowtransparency='true' width='728' height='90' frameborder='0'></iframe>");

                //side ad
                $("#memento .adContainer .ad").html("<iframe src='" + objectRef[currentSlide].slide.dart.block_banner[0].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"') + "'  name='ifrm2' id='ifrm1' scrolling='no' allowtransparency='true' width='300' height='250' frameborder='0'></iframe>");
            }


            /*turn autoplay on/off
             *************************************/

            function toggleAutoPlay() {
                $("#memento .playPause").toggleClass("off");

                if ($("#memento .playPause").hasClass("off")) {
                    timer.stop();
                } else {
                    timer.start();
                }
            }

            /*check odd # value
             *************************************/

            function isOdd(num) {
                return (num % 2) === 1;
            }


            /*Reset timer
             *************************************/

            function timerReset(t) {
                if (autoPlay) {
                    if ($("#memento .slideInfo .playPause").hasClass("off")) {
                        t.stop();
                    } else {
                        t.stop();
                        t.start();
                    }
                }
            }


            /*calculate width of thumbs nav
             *************************************/

            function calThumbWidth() {
                for (var i in objectRef) {
                    if ($(".slideThumbs ul li:nth-child(" + (parseInt(i, 10) + 1) + ")").outerWidth(true) > thumbWidth) {
                        //thumbWidth = $(".slideThumbs ul li:nth-child("+(parseInt(i,10)+1)+")").width(50);
                        thumbWidth = $(".slideThumbs ul li:nth-child(" + (parseInt(i, 10) + 1) + ")").outerWidth(true);
                    }
                }
                return thumbWidth;
            }

            /*calculate width of thumbs nav
             *************************************/

            function loadThumbNails() {
                if (thumbsLoaded == false) {
                    $(".slideThumbs ul li").each(function(i) {
                        loadImages($(this).find("img").attr("src"), function() {
                            $(".slideThumbs img").animate({
                                "opacity": "1"
                            });
                            $(".slideThumbs .preloadThumb").fadeOut();
                        });
                    });
                    thumbsLoaded = true;
                }
            }


            /*Responsive coding
             *****************************/
            /*Controller that updates and 
adjusts dimentions of memento*/

            function updateOrientation() {
                //var resizeInt = false;
                //var dimensions = [ $(window).width(), $(window).height() ];

                resizeInterface();
                $(window).resize(function() {
                    resizeInterface();
                });
            }

            function resizeInterface() {
                calThumbWidth();
                centerMemento();

                //.slideInfo Dimensions
                if ($("#memento .adContainer").is(":visible")) {
                    slideInfoH = $("#memento").height() - $("#memento header").height() - $("#memento #mementoHeader").height() - $("#memento .adContainer").outerHeight(true) - $("#memento .slideThumbs").height();
                } else if ($("#memento header").is(":visible")) {
                    slideInfoH = $("#memento").height() - $("#memento header").height() - $("#memento #mementoHeader").height() - $("#memento .slideThumbs").height();
                } else {
                    slideInfoH = $("#memento").height() - $("#memento .slideThumbs").height() - $("#memento #mementoHeader").height() - $("#memento .slideThumbs").height();
                }
                $("#memento .slideInfo").height(slideInfoH);
                $("#memento .adContainer").css({
                    bottom: $("#memento .slideThumbs").height()
                });


                $("#memento .slideInfo .text").height($("#memento .slideInfo").height() - $("#memento .slideInfo .header").outerHeight());
                //console.log($("#memento .slideInfo"));

                if (objectRef.length > maxThumbs) {
                    $("#memento .prevThumbs, #memento .nextThumbs").show();
                } else {
                    $("#memento .prevThumbs, #memento .nextThumbs").hide();
                }

                //Slide container and thumbs
                if ($("#memento header").is(":visible")) {
                    slideW;
                    slideH = $("#memento").height() - $("#memento header").height() - $("#memento #mementoHeader").height() - $("#memento .slideThumbs").height();

                    $("#memento .slideContainer").height(slideH);
                    $("#memento .imageRow, #memento .loadingBar, #memento .adDiv, #memento .adTdCell").height(slideH);
                } else {
                    slideH = $("#memento").height($("#memento").height() - $("#memento #mementoHeader").height() - $("#memento .slideThumbs").height());

                    $("#memento .slideContainer").height(slideH);
                    $("#memento .imageRow, #memento .loadingBar, #memento .adDiv, #memento .adTdCell").height(slideH);
                }

                if (window.innerWidth <= 750) {
                    slideW = $("#memento").width() - $("#memento .prevBtn").width() - $("#memento .nextBtn").width() - 20;
                    $("#memento .slideContainer, #memento .imageRow, #memento .adTdCell").width(slideW);
                    $("#memento .slideInfo").width($("#memento").width());
                } else {
                    slideW = $("#memento").width() - $("#memento .prevBtn").width() - $("#memento .slideInfo").outerWidth(true) - 40;
                    $("#memento .slideContainer, #memento .imageRow, #memento .adTdCell").width(slideW);
                    $("#memento .slideInfo").width(300);
                }

                ///heights
                if (window.innerWidth <= 750) {
                    slideH = ($("#memento").height() - $("#memento #mementoHeader").height()) * .65;
                    $("#memento .slideInfo, #memento .slideInfo .text").height(($("#memento").height() - $("#memento #mementoHeader").height()) * .35);
                    $("#memento .slideContainer, #memento .imageRow").height(slideH);
                }


                //resize .slideThumbs
                $("#memento .slideThumbs").width($("#memento").width() - ($("#memento .prevThumbs").width() + $("#memento .nextThumbs").width()) - 1);

                maxThumbs = Math.floor($(".slideThumbs").width() / thumbWidth);
                centerThumb = Math.round(maxThumbs / 2);

                resizeImg();
                mediaQueriesIE();
            }


            function resizeImg() {
                $(".imageRow img").css({
                    "max-width": slideW,
                    "max-height": slideH - 10
                });
            }


            /*Center memento based 
on screen size*/

            function centerMemento() {
                //centerY = ($(window).outerHeight(true) / 2) - ($("#memento").height() / 2);
                centerY = ($(window).height() / 2) - ($("#memento").height() / 2);
                centerX = ($(window).width() / 2) - ($("#memento").width() / 2);
                //console.log($(window).height());
                if (centerY < 0 || $(window).height() <= $("#momento").height()) {
                    centerY = 0;
                }
                $("#memento").css({
                    top: centerY,
                    left: centerX
                });
            }

            /*Set image based on screen size*/

            function setResponsiveImg(img) {
                if (window.innerWidth <= 770) {
                    img = objectRef[currentSlide].slide.image.tab;
                    //console.log("daisaga");
                } else if (window.innerWidth <= 640) {
                    img = objectRef[currentSlide].slide.image.mobile;
                }

                //switch statement to evaluate media query for image size
                slideImage = '<img src="' + img + '" class="slideImage' + currentSlide + '" style="max-width:' + $(".imageRow").width() + 'px; max-height:' + $(".imageRow").height() + 'px;">';

                return slideImage;
            }

            function setVideoObject(vid) {
                slideImage = vid;

                return slideImage;
            }

            /*Media Queries for IE8 and below*/

            function mediaQueriesIE() {
                if ($.browser.msie && Math.floor($.browser.version) < 9) {
                    if (window.innerWidth <= 960) {
                        $("#memento .slideInfo").css({
                            "margin-right": "45px"
                        });
                        $("#memento .imageRow").css({
                            "margin": "0 auto",
                            "overflow": "hidden"
                        });
                    }
                    if (window.innerWidth <= 850) {
                        $("#memento .adContainer").css({
                            "padding": "10px"
                        });
                    }
                    if (window.innerWidth <= 770) {
                        $("#memento header").css({
                            "height": 0,
                            "padding": 0,
                            "overflow": "hidden"
                        });
                        $("#memento .adContainer, #memento .bottomNav, #memento header > div").css({
                            "display": "none"
                        });
                        $("#memento .slideContainer").css({
                            "margin-left": "50px"
                        });
                        $("#memento .slideInfo").css({
                            "margin-right": 0,
                            "padding": "10px",
                            "bottom": 0
                        });
                    }
                    if (window.innerHeight <= 635) {
                        $("#memento .adContainer").css({
                            "display": "none"
                        });
                        $("#memento header").css({
                            "height": 0,
                            "padding": 0
                        });
                    }
                }
            }


            /*Parameter functions
             ***************************/

            function getURLParameter(name) {
                name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                var regexS = "[\\?&]" + name + "=([^&#]*)";
                var regex = new RegExp(regexS);
                var results = regex.exec(window.location.href);
                if (results == null) {
                    return "";
                } else {
                    return results[1];
                }
            }

            function checkParemeterExists(parameter) {
                //Get Query String from url
                fullQString = window.location.search.substring(1);

                paramCount = 0;
                queryStringComplete = "?";

                if (fullQString.length > 0) {
                    //Split Query String into separate parameters
                    paramArray = fullQString.split("&");

                    //Loop through params, check if parameter exists.  
                    for (i = 0; i < paramArray.length; i++) {
                        currentParameter = paramArray[i].split("=");
                        if (currentParameter[0] == parameter) {
                            return true;
                        }
                    }
                }
                return false;
            }


            /*Put this in a function somewhere
this is the click event for the thumbnails
******************************************************/
            $(".memento-slideshow-trigger").click(function(event) {
                jsonObj = $(this).attr("rel");
                currentSlide = 0;
                loadMemento("clicked");

                event.preventDefault();
            });

            /*Injections
             **************************************/

            function injectInterstitial() {
                $(".adTdCell").prepend('<img src="http://www.stillad.com/wp-content/uploads/2011/03/Bodybuilding-ads-560x376.jpg">');
                $(".adDiv").show();
                moveCount = 1;
                interstitialActive = true;
            }

            function checkInjection() {
                if (moveCount % interstitialCount == 0) {
                    injectAd = true;
                } else {
                    injectAd = false;
                }
            }

            function addSlideContent(slide) {
                if (slide.type) {
                    switch (slide.type) {
                        case "image":
                            setResponsiveImg(objectRef[currentSlide].slide.image.full);
                            break;

                        case "video":
                            //slideImage = "This is HTML for a video";
                            setVideoObject(objectRef[currentSlide].slide.video.src);
                            break;

                        default:
                            setResponsiveImg(objectRef[currentSlide].slide.image.full);
                    }
                } else {
                    setResponsiveImg(objectRef[currentSlide].slide.image.full);
                }
            }


            /*Rebuild json object
based on injected content
*******************************/

            function reBuildJson(data) {
                for (var k in data.slides) {
                    var slideUrl = "";
                    var finalUrl = "";

                    data.slides[k].slide.index = k;
                    slideUrl = data.slides[k].slide.url.split("/");
                    slideUrl[slideUrl.length - 1] = k.toString();

                    for (var l = 0; l < slideUrl.length; l++) {
                        finalUrl += slideUrl[l] + "/";
                    }
                    data.slides[k].slide.url = finalUrl;
                }
            }


            /*Get controls from
Controller Json and apply 
***************************/

            function getControls(cdata) {
                slideTime = parseInt(cdata.timing, 10);
                interstitialCount = 4;
                autoPlay = false //parseInt(cdata.autoPlay, 10);
                autoNav = parseInt(cdata.autoNav, 10);
                enableKeys = parseInt(cdata.enableKeys, 10);
                fullscreen = parseInt(cdata.fullscreen, 10);
                nextPrev = parseInt(cdata.nextPrev, 10);
                playButton = parseInt(cdata.playButton, 10);
            }

            function isLtIe10() {
                if ($.browser.msie && Math.floor($.browser.version) <= 9) {
                    return true;
                } else {
                    return false;
                }
            }

            function ieControls() {
                var prevSlide = (currentSlide == 0) ? parseInt(objectRef.length, 10) - 1 : parseInt(currentSlide, 10) - 1;
                var nextSlide = (currentSlide == objectRef.length - 1) ? 0 : parseInt(currentSlide, 10) + 1;

                $("#memento .prevBtn, #memento .nextBtn").html('<a href=""></a>');
                $("#memento .prevBtn a").attr("href", objectRef[prevSlide].slide.list_path + "?slideshow=" + slideShowId + "&slide=" + objectRef[prevSlide].slide.index + "&dest=" + rootUrl);

                $("#memento .nextBtn a").attr("href", objectRef[nextSlide].slide.list_path + "?slideshow=" + slideShowId + "&slide=" + objectRef[nextSlide].slide.index + "&dest=" + rootUrl);

                $(".slideThumbs li").each(function(i) {
                    $(this).children("img").wrap('<a href="' + objectRef[i].slide.list_path + "?slideshow=" + slideShowId + "&slide=" + objectRef[i].slide.index + "&dest=" + rootUrl + '" />');
                });
            }


            function loadImages(images, callback) {
                // if our first argument is an string, we convert it to an array
                if (typeof images == "string") {
                    images = [images];
                }
                var imagesLength = images.length;
                var loadedCounter = 0;

                for (var i = 0; i < imagesLength; i++) {
                    var cacheImage = document.createElement('img');
                    //set the onload method before the src is called otherwise will fail to be called in IE
                    cacheImage.onload = function() {
                        loadedCounter++;
                        if (loadedCounter == imagesLength) {
                            if ($.isFunction(callback)) {
                                callback();
                            }
                        }
                    }
                    cacheImage.src = images[i];
                    cache.push(cacheImage);
                }
            }

            function swipeEvents() {
                $(window).touchwipe({
                    wipeLeft: function() {
                        slideNext()
                    },
                    wipeRight: function() {
                        slidePrev()
                    }
                });
            }

            function loadMemento(type) {
                if (checkParemeterExists("slideshow") || type == "clicked") {
                    addMementoHTML();

                    if (type == "loaded") {
                        jsonObj = "/slideshow-info/" + getURLParameter("slideshow");
                        slideShowId = getURLParameter("slideshow");
                    }
                    if (type == "clicked") {
                        slideShowId = jsonObj.split("/");
                        slideShowId = slideShowId[2];
                    }

                    $("#overlayM").animate({
                        opacity: 1
                    }, 300, function() {
                        //$(this).find(".header").animate({opacity: 1}, 500);

                        //autoscroll on
                        timer = new Timer(slideTime, slideNext);
                        if (autoPlay) {
                            timer.start();
                        } else {
                            $("#memento .slideInfo .playPause").addClass("off");
                        }
                    });
                    if (enableKeys) {
                        keyControls();
                    }
                    centerMemento();



                    $.getJSON(jsonObj, function(data) {
                        //reBuildJson(data);
                        for (var j in data.slides) {
                            $(".slideThumbs ul").append('<li><div class="preloadThumb"></div><img src="' + data.slides[j].slide.image.thumb + '"></li>');
                            thumbsArray.push($(".slideThumbs ul li:nth-child(" + (parseInt(j, 10) + 1) + ")"));
                        }
                        for (var i in data.slides) {
                            if (thumbNavW < $(".slideContainer").width() - $(".slideThumbs ul li:nth-child(" + (parseInt(i, 10) + 1) + ")").outerWidth(true)) {
                                thumbNavW += $(".slideThumbs ul li:nth-child(" + (parseInt(i, 10) + 1) + ")").outerWidth(true);
                                //maxThumbs++
                            }
                        }
                        thumbsLoaded = false;

                        objectRef = data.slides;
                        navMenu = data.nav_items;
                        if (type == "clicked") {
                            currentSlide = 0;
                            rootUrl = window.location.href;
                        } else {
                            currentSlide = getURLParameter("slide");
                            rootUrl = decodeURIComponent(decodeURIComponent(getURLParameter("dest")));
                        }
                        //////////////////////////////////////////////////////////

                        thumbsNav(objectRef.length);
                        //autoPlay = false;

                        updateOrientation();
                        updateSlide(objectRef[currentSlide]);

                        //window.addEventListener('popstate', function(event) {
                        window.onpopstate = function(event) {
                            if (data == null)
                                return;
                            currentSlide = parseInt(event.state.index, 10);


                            timerReset(timer);

                            $(".slideInfo h1").text(event.state.text.title);
                            $(".slideInfo .blurb").text(event.state.text.blurb);
                            $(".slideInfo .pageInfo").text((parseInt(currentSlide, 10) + 1) + " of " + data.slides.length);

                            $(".slideThumbs ul li").removeClass("active");
                            $(thumbsArray[currentSlide]).addClass("active");
                            thumbsPos = (currentSlide * thumbWidth);

                            if (currentSlide > centerThumb - 1) {
                                thumbsPos = -1 * (currentSlide * thumbWidth) + ((centerThumb - 1) * thumbWidth); //centerThumb - 
                                $(".slideThumbs ul").animate({
                                    "margin-left": thumbsPos
                                }, function() {
                                    controlsActive = true;
                                });
                            } else {
                                $(".slideThumbs ul").animate({
                                    "margin-left": 0
                                }, function() {
                                    controlsActive = true;
                                });
                            }
                        };

                        intiMomemto();
                        if (isLtIe10()) {
                            ieControls();
                        }
                        //return objectRef;
                    });
                }
            }
            loadMemento("loaded");
        }
    }
})(jQuery);;
var Timer = function(millis, callback) {
    return this._init(millis, callback);
}

Timer.prototype = {
    VERSION: 1.0,
    _init: function(millis, callback) {

        this._interval = 1000;
        this._timer = null;
        this._cbs = [];
        this._multipliers = [];
        this._tickCounts = [];
        this._canRun = [];
        this._stoppedThreads = 0;
        this._runOnce = false;
        this._startedAt = -1;
        this._pausedAt = -1;

        if (typeof(millis) == 'number') this._interval = millis;
        this.addCallback(callback);
        return this;
    },

    /* some preset operation, called from start() */

    _preset: function() {
        this._stoppedThreads = 0;
        this._startedAt = -1;
        this._pausedAt = -1;
        for (var i = 0; i < this._cbs.length; i++) {
            this._canRun[i] = true;
            this._tickCounts[i] = 0;
        }
    },
    _ticks: function(initInterval) {

        var me = this;
        for (var i = 0; i < this._cbs.length; i++) {
            if (typeof(this._cbs[i]) == 'function' && this._canRun[i]) {
                this._tickCounts[i]++;
                if (this._tickCounts[i] == this._multipliers[i]) {
                    this._tickCounts[i] = 0;
                    if (this.runOnce()) {
                        this._canRun[i] = false;
                        this._stoppedThreads++;
                    }
                    window.setTimeout(me._cbs[i], 0);
                }
            }
        }

        if (this.runOnce() && this._stoppedThreads == this._cbs.length)
            this.stop();

        if (typeof(initInterval) == 'number') {
            this.stop().start(null, true);
        }
    },

    runOnce: function(isRunOnce) {
        if (typeof(isRunOnce) == 'undefined') return this._runOnce;
        else if (typeof(isRunOnce) == 'boolean') this._runOnce = isRunOnce;
        else alert("Invalid argument for runOnce(...).\n\nUsage: runOnce(true | false) /*Default value: false*/\nor, runOnce() to get status");
        return this;
    },
    interval: function(millis) {
        if (typeof(millis) == 'undefined') return this._interval;
        else if (typeof(millis) == 'number') this._interval = Math.floor(millis);
        return this;
    },

    stop: function(isPausing) {
        if (this._timer) {
            if (!isPausing) this._pausedAt = -1;
            try {
                window.clearInterval(this._timer);
            } catch (ex) {}
            this._timer = null;
        }
        return this;
    },

    isStopped: function() {
        return ((this._timer == null) && !this.isPaused());
    },

    start: function(_initialInterval, _withoutPreset) {
        if (this.isPaused())
            return this.resume();
        if (!this.isStopped())
            return this;

        if (!_withoutPreset)
            this._preset();

        var tmpInterval = this._interval;

        if (typeof(_initialInterval) == 'number') tmpInterval = _initialInterval;

        var me = this;

        this._timer = window.setInterval(function() {
            me._ticks(_initialInterval);
        }, tmpInterval);

        this._startedAt = (new Date()).getTime();

        this._startedAt -= (this._interval - tmpInterval);

        return this;

    },

    pause: function() {
        if (this._timer) {
            this._pausedAt = (new Date()).getTime();
            this.stop(true);
        }
        return this;
    },

    isPaused: function() {
        return (this._pausedAt >= 0);
    },


    resume: function() {
        if (this.isPaused()) {
            var tempInterval = this._interval - ((this._pausedAt - this._startedAt) % this._interval);
            this._pausedAt = -1;
            this.start(tempInterval, true);
        }
        return this;
    },

    restart: function() {
        return this.stop().start();
    },

    addCallback: function(callback, N) {
        if (typeof(callback) == 'function') {
            this._cbs.push(callback);
            if (typeof(N) == 'number') {
                N = Math.floor(N)
                this._multipliers.push((N < 1 ? 1 : N));
            } else
                this._multipliers.push(1);
            this._tickCounts.push(0);

            this._canRun.push(true);
        }
        return this;
    },

    clearCallbacks: function() {
        this._cbs.length = 0;
        this._multipliers.length = 0;
        this._canRun.length = 0;
        this._tickCounts.length = 0;
        this._stoppedThreads = 0;
        return this;
    }
};;
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($) {
    $.fn.touchwipe = function(settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function() {},
            wipeRight: function() {},
            wipeUp: function() {},
            wipeDown: function() {},
            preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function() {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }

            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }

            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);;
(function($, window, console, Drupal) {
    console = console || {
        log: function() {}
    };
    var jcrop_api;
    Drupal.behaviors.photo_crop = {
        attach: function(context, setting) {
            $('div.ami-crop-popup', context).click(function(i) {
                //        console.log($(this).attr('rel'));
                var targetId = 'tid_' + $(this).attr('id');
                var imgSrc = $(this).attr('rel');
                $.colorbox({
                    html: "<div class='ami-crop-popup-frame'><img id='img-to-crop' alt='' src='" + imgSrc + "' /></div>",
                    innerWidth: 825,
                    innerHeight: 544,
                    title: function() {
                        return '<a href="#" id="ami-crop-apply" onclick="return false;">Save</a>';
                    },
                    onComplete: function() {
                        $('img#img-to-crop').Jcrop({
                                boxWidth: 815,
                                boxHeight: 530,
                                keySupport: false,
                                aspectRatio: 256 / 360
                            },
                            function() {
                                jcrop_api = this;
                                var ratio = parseFloat($('img#' + targetId).attr('ori_w')) / parseFloat($('.jcrop-holder').children('img').css('width'));
                                var x = parseFloat($('img#' + targetId).parent().siblings('div').children('input.crop-region-x').val()) / ratio;
                                var y = parseFloat($('img#' + targetId).parent().siblings('div').children('input.crop-region-y').val()) / ratio;
                                var x2 = x + parseFloat($('img#' + targetId).parent().siblings('div').children('input.crop-region-width').val()) / ratio;
                                var y2 = y + parseFloat($('img#' + targetId).parent().siblings('div').children('input.crop-region-height').val()) / ratio;
                                jcrop_api.animateTo([x, y, x2, y2]);
                                var ratio = parseFloat($('img#' + targetId).attr('ori_w')) / parseFloat($('.jcrop-holder').children('img').css('width'));
                                jcrop_api.setOptions({
                                    minSize: [256 / ratio, 360 / ratio]
                                });
                            }
                        );
                        $('a#ami-crop-apply').click(function() {
                            var coords = jcrop_api.tellScaled();
                            $('img#' + targetId).attr('src', imgSrc);
                            $('img#' + targetId).css('display', 'block');
                            var ratio = 142.22 / coords.w;
                            $('img#' + targetId).css('width', (parseInt($('div.jcrop-holder img').css('width')) * ratio) + 'px');
                            $('img#' + targetId).css('height', 'auto');
                            $('img#' + targetId).css('margin-left', '-' + (coords.x * ratio) + 'px');
                            $('img#' + targetId).css('margin-top', '-' + (coords.y * ratio) + 'px');
                            var ratio = parseFloat($('img#' + targetId).attr('ori_w')) / parseFloat($('.jcrop-holder').children('img').css('width'));
                            var coords = jcrop_api.tellSelect();
                            $('img#' + targetId).parent().siblings('div').children('input.crop-region-x').val(coords.x * ratio)
                            $('img#' + targetId).parent().siblings('div').children('input.crop-region-y').val(coords.y * ratio)
                            $('img#' + targetId).parent().siblings('div').children('input.crop-region-width').val(coords.w * ratio)
                            $('img#' + targetId).parent().siblings('div').children('input.crop-region-height').val(coords.h * ratio)
                            $.colorbox.close();
                            return false;
                        });
                    }
                });
            });
        }
    };
})(jQuery, window, window.console, Drupal);;
/**
 * jquery.Jcrop.min.js v0.9.12 (build:20130202)
 * jQuery Image Cropping Plugin - released under MIT License
 * Copyright (c) 2008-2013 Tapmodo Interactive LLC
 * https://github.com/tapmodo/Jcrop
 */
(function(a) {
    a.Jcrop = function(b, c) {
        function i(a) {
            return Math.round(a) + "px"
        }

        function j(a) {
            return d.baseClass + "-" + a
        }

        function k() {
            return a.fx.step.hasOwnProperty("backgroundColor")
        }

        function l(b) {
            var c = a(b).offset();
            return [c.left, c.top]
        }

        function m(a) {
            return [a.pageX - e[0], a.pageY - e[1]]
        }

        function n(b) {
            typeof b != "object" && (b = {}), d = a.extend(d, b), a.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(a, b) {
                typeof d[b] != "function" && (d[b] = function() {})
            })
        }

        function o(a, b, c) {
            e = l(D), bc.setCursor(a === "move" ? a : a + "-resize");
            if (a === "move") return bc.activateHandlers(q(b), v, c);
            var d = _.getFixed(),
                f = r(a),
                g = _.getCorner(r(f));
            _.setPressed(_.getCorner(f)), _.setCurrent(g), bc.activateHandlers(p(a, d), v, c)
        }

        function p(a, b) {
            return function(c) {
                if (!d.aspectRatio) switch (a) {
                    case "e":
                        c[1] = b.y2;
                        break;
                    case "w":
                        c[1] = b.y2;
                        break;
                    case "n":
                        c[0] = b.x2;
                        break;
                    case "s":
                        c[0] = b.x2
                } else switch (a) {
                    case "e":
                        c[1] = b.y + 1;
                        break;
                    case "w":
                        c[1] = b.y + 1;
                        break;
                    case "n":
                        c[0] = b.x + 1;
                        break;
                    case "s":
                        c[0] = b.x + 1
                }
                _.setCurrent(c), bb.update()
            }
        }

        function q(a) {
            var b = a;
            return bd.watchKeys(),
            function(a) {
                _.moveOffset([a[0] - b[0], a[1] - b[1]]), b = a, bb.update()
            }
        }

        function r(a) {
            switch (a) {
                case "n":
                    return "sw";
                case "s":
                    return "nw";
                case "e":
                    return "nw";
                case "w":
                    return "ne";
                case "ne":
                    return "sw";
                case "nw":
                    return "se";
                case "se":
                    return "nw";
                case "sw":
                    return "ne"
            }
        }

        function s(a) {
            return function(b) {
                return d.disabled ? !1 : a === "move" && !d.allowMove ? !1 : (e = l(D), W = !0, o(a, m(b)), b.stopPropagation(), b.preventDefault(), !1)
            }
        }

        function t(a, b, c) {
            var d = a.width(),
                e = a.height();
            d > b && b > 0 && (d = b, e = b / a.width() * a.height()), e > c && c > 0 && (e = c, d = c / a.height() * a.width()), T = a.width() / d, U = a.height() / e, a.width(d).height(e)
        }

        function u(a) {
            return {
                x: a.x * T,
                y: a.y * U,
                x2: a.x2 * T,
                y2: a.y2 * U,
                w: a.w * T,
                h: a.h * U
            }
        }

        function v(a) {
            var b = _.getFixed();
            b.w > d.minSelect[0] && b.h > d.minSelect[1] ? (bb.enableHandles(), bb.done()) : bb.release(), bc.setCursor(d.allowSelect ? "crosshair" : "default")
        }

        function w(a) {
            if (d.disabled) return !1;
            if (!d.allowSelect) return !1;
            W = !0, e = l(D), bb.disableHandles(), bc.setCursor("crosshair");
            var b = m(a);
            return _.setPressed(b), bb.update(), bc.activateHandlers(x, v, a.type.substring(0, 5) === "touch"), bd.watchKeys(), a.stopPropagation(), a.preventDefault(), !1
        }

        function x(a) {
            _.setCurrent(a), bb.update()
        }

        function y() {
            var b = a("<div></div>").addClass(j("tracker"));
            return g && b.css({
                opacity: 0,
                backgroundColor: "white"
            }), b
        }

        function be(a) {
            G.removeClass().addClass(j("holder")).addClass(a)
        }

        function bf(a, b) {
            function t() {
                window.setTimeout(u, l)
            }
            var c = a[0] / T,
                e = a[1] / U,
                f = a[2] / T,
                g = a[3] / U;
            if (X) return;
            var h = _.flipCoords(c, e, f, g),
                i = _.getFixed(),
                j = [i.x, i.y, i.x2, i.y2],
                k = j,
                l = d.animationDelay,
                m = h[0] - j[0],
                n = h[1] - j[1],
                o = h[2] - j[2],
                p = h[3] - j[3],
                q = 0,
                r = d.swingSpeed;
            c = k[0], e = k[1], f = k[2], g = k[3], bb.animMode(!0);
            var s, u = function() {
                    return function() {
                        q += (100 - q) / r, k[0] = Math.round(c + q / 100 * m), k[1] = Math.round(e + q / 100 * n), k[2] = Math.round(f + q / 100 * o), k[3] = Math.round(g + q / 100 * p), q >= 99.8 && (q = 100), q < 100 ? (bh(k), t()) : (bb.done(), bb.animMode(!1), typeof b == "function" && b.call(bs))
                    }
                }();
            t()
        }

        function bg(a) {
            bh([a[0] / T, a[1] / U, a[2] / T, a[3] / U]), d.onSelect.call(bs, u(_.getFixed())), bb.enableHandles()
        }

        function bh(a) {
            _.setPressed([a[0], a[1]]), _.setCurrent([a[2],
                a[3]
            ]), bb.update()
        }

        function bi() {
            return u(_.getFixed())
        }

        function bj() {
            return _.getFixed()
        }

        function bk(a) {
            n(a), br()
        }

        function bl() {
            d.disabled = !0, bb.disableHandles(), bb.setCursor("default"), bc.setCursor("default")
        }

        function bm() {
            d.disabled = !1, br()
        }

        function bn() {
            bb.done(), bc.activateHandlers(null, null)
        }

        function bo() {
            G.remove(), A.show(), A.css("visibility", "visible"), a(b).removeData("Jcrop")
        }

        function bp(a, b) {
            bb.release(), bl();
            var c = new Image;
            c.onload = function() {
                var e = c.width,
                    f = c.height,
                    g = d.boxWidth,
                    h = d.boxHeight;
                D.width(e).height(f), D.attr("src", a), H.attr("src", a), t(D, g, h), E = D.width(), F = D.height(), H.width(E).height(F), M.width(E + L * 2).height(F + L * 2), G.width(E).height(F), ba.resize(E, F), bm(), typeof b == "function" && b.call(bs)
            }, c.src = a
        }

        function bq(a, b, c) {
            var e = b || d.bgColor;
            d.bgFade && k() && d.fadeTime && !c ? a.animate({
                backgroundColor: e
            }, {
                queue: !1,
                duration: d.fadeTime
            }) : a.css("backgroundColor", e)
        }

        function br(a) {
            d.allowResize ? a ? bb.enableOnly() : bb.enableHandles() : bb.disableHandles(), bc.setCursor(d.allowSelect ? "crosshair" : "default"), bb
                .setCursor(d.allowMove ? "move" : "default"), d.hasOwnProperty("trueSize") && (T = d.trueSize[0] / E, U = d.trueSize[1] / F), d.hasOwnProperty("setSelect") && (bg(d.setSelect), bb.done(), delete d.setSelect), ba.refresh(), d.bgColor != N && (bq(d.shade ? ba.getShades() : G, d.shade ? d.shadeColor || d.bgColor : d.bgColor), N = d.bgColor), O != d.bgOpacity && (O = d.bgOpacity, d.shade ? ba.refresh() : bb.setBgOpacity(O)), P = d.maxSize[0] || 0, Q = d.maxSize[1] || 0, R = d.minSize[0] || 0, S = d.minSize[1] || 0, d.hasOwnProperty("outerImage") && (D.attr("src", d.outerImage), delete d.outerImage), bb.refresh()
        }
        var d = a.extend({}, a.Jcrop.defaults),
            e, f = navigator.userAgent.toLowerCase(),
            g = /msie/.test(f),
            h = /msie [1-6]\./.test(f);
        typeof b != "object" && (b = a(b)[0]), typeof c != "object" && (c = {}), n(c);
        var z = {
            border: "none",
            visibility: "visible",
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 0,
            left: 0
        }, A = a(b),
            B = !0;
        if (b.tagName == "IMG") {
            if (A[0].width != 0 && A[0].height != 0) A.width(A[0].width), A.height(A[0].height);
            else {
                var C = new Image;
                C.src = A[0].src, A.width(C.width), A.height(C.height)
            }
            var D = A.clone().removeAttr("id").
            css(z).show();
            D.width(A.width()), D.height(A.height()), A.after(D).hide()
        } else D = A.css(z).show(), B = !1, d.shade === null && (d.shade = !0);
        t(D, d.boxWidth, d.boxHeight);
        var E = D.width(),
            F = D.height(),
            G = a("<div />").width(E).height(F).addClass(j("holder")).css({
                position: "relative",
                backgroundColor: d.bgColor
            }).insertAfter(A).append(D);
        d.addClass && G.addClass(d.addClass);
        var H = a("<div />"),
            I = a("<div />").width("100%").height("100%").css({
                zIndex: 310,
                position: "absolute",
                overflow: "hidden"
            }),
            J = a("<div />").width("100%").height("100%").css("zIndex", 320),
            K = a("<div />").css({
                position: "absolute",
                zIndex: 600
            }).dblclick(function() {
                var a = _.getFixed();
                d.onDblClick.call(bs, a)
            }).insertBefore(D).append(I, J);
        B && (H = a("<img />").attr("src", D.attr("src")).css(z).width(E).height(F), I.append(H)), h && K.css({
            overflowY: "hidden"
        });
        var L = d.boundary,
            M = y().width(E + L * 2).height(F + L * 2).css({
                position: "absolute",
                top: i(-L),
                left: i(-L),
                zIndex: 290
            }).mousedown(w),
            N = d.bgColor,
            O = d.bgOpacity,
            P, Q, R, S, T, U, V = !0,
            W, X, Y;
        e = l(D);
        var Z = function() {
            function a() {
                var a = {}, b = ["touchstart", "touchmove", "touchend"],
                    c = document.createElement("div"),
                    d;
                try {
                    for (d = 0; d < b.length; d++) {
                        var e = b[d];
                        e = "on" + e;
                        var f = e in c;
                        f || (c.setAttribute(e, "return;"), f = typeof c[e] == "function"), a[b[d]] = f
                    }
                    return a.touchstart && a.touchend && a.touchmove
                } catch (g) {
                    return !1
                }
            }

            function b() {
                return d.touchSupport === !0 || d.touchSupport === !1 ? d.touchSupport : a()
            }
            return {
                createDragger: function(a) {
                    return function(b) {
                        return d.disabled ? !1 : a === "move" && !d.allowMove ? !1 : (e = l(D), W = !0, o(a, m(Z.cfilter(b)), !0), b.stopPropagation(), b.preventDefault(), !1)
                    }
                },
                newSelection: function(a) {
                    return w(Z.cfilter(a))
                },
                cfilter: function(a) {
                    return a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY, a
                },
                isSupported: a,
                support: b()
            }
        }(),
            _ = function() {
                function h(d) {
                    d = n(d), c = a = d[0], e = b = d[1]
                }

                function i(a) {
                    a = n(a), f = a[0] - c, g = a[1] - e, c = a[0], e = a[1]
                }

                function j() {
                    return [f, g]
                }

                function k(d) {
                    var f = d[0],
                        g = d[1];
                    0 > a + f && (f -= f + a), 0 > b + g && (g -= g + b), F < e + g && (g += F - (e + g)), E < c + f && (f += E - (c + f)), a += f, c += f, b += g, e += g
                }

                function l(a) {
                    var b = m();
                    switch (a) {
                        case "ne":
                            return [
                                b.x2, b.y];
                        case "nw":
                            return [b.x, b.y];
                        case "se":
                            return [b.x2, b.y2];
                        case "sw":
                            return [b.x, b.y2]
                    }
                }

                function m() {
                    if (!d.aspectRatio) return p();
                    var f = d.aspectRatio,
                        g = d.minSize[0] / T,
                        h = d.maxSize[0] / T,
                        i = d.maxSize[1] / U,
                        j = c - a,
                        k = e - b,
                        l = Math.abs(j),
                        m = Math.abs(k),
                        n = l / m,
                        r, s, t, u;
                    return h === 0 && (h = E * 10), i === 0 && (i = F * 10), n < f ? (s = e, t = m * f, r = j < 0 ? a - t : t + a, r < 0 ? (r = 0, u = Math.abs((r - a) / f), s = k < 0 ? b - u : u + b) : r > E && (r = E, u = Math.abs((r - a) / f), s = k < 0 ? b - u : u + b)) : (r = c, u = l / f, s = k < 0 ? b - u : b + u, s < 0 ? (s = 0, t = Math.abs((s - b) * f), r = j < 0 ? a - t : t + a) : s > F && (s = F, t = Math.abs(s - b) * f, r = j < 0 ? a - t : t + a)), r > a ? (r - a < g ? r = a + g : r - a > h && (r = a + h), s > b ? s = b + (r - a) / f : s = b - (r - a) / f) : r < a && (a - r < g ? r = a - g : a - r > h && (r = a - h), s > b ? s = b + (a - r) / f : s = b - (a - r) / f), r < 0 ? (a -= r, r = 0) : r > E && (a -= r - E, r = E), s < 0 ? (b -= s, s = 0) : s > F && (b -= s - F, s = F), q(o(a, b, r, s))
                }

                function n(a) {
                    return a[0] < 0 && (a[0] = 0), a[1] < 0 && (a[1] = 0), a[0] > E && (a[0] = E), a[1] > F && (a[1] = F), [Math.round(a[0]), Math.round(a[1])]
                }

                function o(a, b, c, d) {
                    var e = a,
                        f = c,
                        g = b,
                        h = d;
                    return c < a && (e = c, f = a), d < b && (g = d, h = b), [e, g, f, h]
                }

                function p() {
                    var d = c - a,
                        f = e - b,
                        g;
                    return P && Math.abs(d) > P && (c = d > 0 ? a + P : a - P), Q && Math.abs(f) > Q && (e = f > 0 ? b + Q : b - Q), S / U && Math.abs(f) < S / U && (e = f > 0 ? b + S / U : b - S / U), R / T && Math.abs(d) < R / T && (c = d > 0 ? a + R / T : a - R / T), a < 0 && (c -= a, a -= a), b < 0 && (e -= b, b -= b), c < 0 && (a -= c, c -= c), e < 0 && (b -= e, e -= e), c > E && (g = c - E, a -= g, c -= g), e > F && (g = e - F, b -= g, e -= g), a > E && (g = a - F, e -= g, b -= g), b > F && (g = b - F, e -= g, b -= g), q(o(a, b, c, e))
                }

                function q(a) {
                    return {
                        x: a[0],
                        y: a[1],
                        x2: a[2],
                        y2: a[3],
                        w: a[2] - a[0],
                        h: a[3] - a[1]
                    }
                }
                var a = 0,
                    b = 0,
                    c = 0,
                    e = 0,
                    f, g;
                return {
                    flipCoords: o,
                    setPressed: h,
                    setCurrent: i,
                    getOffset: j,
                    moveOffset: k,
                    getCorner: l,
                    getFixed: m
                }
            }(),
            ba = function() {
                function f(a, b) {
                    e.left.css({
                        height: i(b)
                    }), e.right.css({
                        height: i(b)
                    })
                }

                function g() {
                    return h(_.getFixed())
                }

                function h(a) {
                    e.top.css({
                        left: i(a.x),
                        width: i(a.w),
                        height: i(a.y)
                    }), e.bottom.css({
                        top: i(a.y2),
                        left: i(a.x),
                        width: i(a.w),
                        height: i(F - a.y2)
                    }), e.right.css({
                        left: i(a.x2),
                        width: i(E - a.x2)
                    }), e.left.css({
                        width: i(a.x)
                    })
                }

                function j() {
                    return a("<div />").css({
                        position: "absolute",
                        backgroundColor: d.shadeColor || d.bgColor
                    }).appendTo(c)
                }

                function k() {
                    b || (b = !0, c.insertBefore(D), g(), bb.setBgOpacity(1, 0, 1), H.hide(), l(d.shadeColor || d.bgColor, 1), bb.isAwake() ? n(d.bgOpacity, 1) : n(1, 1))
                }

                function l(a, b) {
                    bq(p(), a, b)
                }

                function m() {
                    b && (c.remove(), H.show(), b = !1, bb.isAwake() ? bb.setBgOpacity(d.bgOpacity, 1, 1) : (bb.setBgOpacity(1, 1, 1), bb.disableHandles()), bq(G, 0, 1))
                }

                function n(a, e) {
                    b && (d.bgFade && !e ? c.animate({
                        opacity: 1 - a
                    }, {
                        queue: !1,
                        duration: d.fadeTime
                    }) : c.css({
                        opacity: 1 - a
                    }))
                }

                function o() {
                    d.shade ? k() : m(), bb.isAwake() && n(d.bgOpacity)
                }

                function p() {
                    return c.children()
                }
                var b = !1,
                    c = a("<div />").css({
                        position: "absolute",
                        zIndex: 240,
                        opacity: 0
                    }),
                    e = {
                        top: j(),
                        left: j().height(F),
                        right: j().height(F),
                        bottom: j()
                    };
                return {
                    update: g,
                    updateRaw: h,
                    getShades: p,
                    setBgColor: l,
                    enable: k,
                    disable: m,
                    resize: f,
                    refresh: o,
                    opacity: n
                }
            }(),
            bb = function() {
                function k(b) {
                    var c = a("<div />").css({
                        position: "absolute",
                        opacity: d.borderOpacity
                    }).addClass(j(b));
                    return I.append(c), c
                }

                function l(b, c) {
                    var d = a("<div />").mousedown(s(b)).css({
                        cursor: b + "-resize",
                        position: "absolute",
                        zIndex: c
                    }).addClass("ord-" + b);
                    return Z.support && d.bind("touchstart.jcrop", Z.createDragger(b)), J.append(d), d
                }

                function m(a) {
                    var b = d.handleSize,
                        e = l(a, c++).css({
                            opacity: d.handleOpacity
                        }).addClass(j("handle"));
                    return b && e.width(b).height(b), e
                }

                function n(a) {
                    return l(a, c++).addClass("jcrop-dragbar")
                }

                function o(a) {
                    var b;
                    for (b = 0; b < a.length; b++) g[a[b]] = n(a[b])
                }

                function p(a) {
                    var b, c;
                    for (c = 0; c < a.length; c++) {
                        switch (a[c]) {
                            case "n":
                                b = "hline";
                                break;
                            case "s":
                                b = "hline bottom";
                                break;
                            case "e":
                                b = "vline right";
                                break;
                            case "w":
                                b = "vline"
                        }
                        e[a[c]] = k(b)
                    }
                }

                function q(a) {
                    var b;
                    for (b = 0; b < a.length; b++) f[a[b]] = m(a[b])
                }

                function r(a, b) {
                    d.shade || H.css({
                        top: i(-b),
                        left: i(-a)
                    }), K.css({
                        top: i(b),
                        left: i(a)
                    })
                }

                function t(a, b) {
                    K.width(Math.round(a)).height(Math.round(b))
                }

                function v() {
                    var a = _.getFixed();
                    _.setPressed([a.x, a.y]), _.setCurrent([a.x2, a.y2]), w()
                }

                function w(a) {
                    if (b) return x(a)
                }

                function x(a) {
                    var c = _.getFixed();
                    t(c.w, c.h), r(c.x, c.y), d.shade && ba.updateRaw(c), b || A(), a ? d.onSelect.call(bs, u(c)) : d.onChange.call(bs, u(c))
                }

                function z(a, c, e) {
                    if (!b && !c) return;
                    d.bgFade && !e ? D.animate({
                        opacity: a
                    }, {
                        queue: !1,
                        duration: d.fadeTime
                    }) : D.css("opacity", a)
                }

                function A() {
                    K.show(), d.shade ? ba.opacity(O) : z(O, !0), b = !0
                }

                function B() {
                    F(), K.hide(), d.shade ? ba.opacity(1) : z(1), b = !1, d.onRelease.call(bs)
                }

                function C() {
                    h && J.show()
                }

                function E() {
                    h = !0;
                    if (d.allowResize) return J.show(), !0
                }

                function F() {
                    h = !1, J.hide()
                }

                function G(a) {
                    a ? (X = !0, F()) : (X = !1, E())
                }

                function L() {
                    G(!1), v()
                }
                var b, c = 370,
                    e = {}, f = {}, g = {}, h = !1;
                d.dragEdges && a.isArray(d.createDragbars) && o(d.createDragbars), a.isArray(d.createHandles) && q(d.createHandles), d.drawBorders && a.isArray(d.createBorders) && p(d.createBorders), a(document).bind("touchstart.jcrop-ios", function(b) {
                    a(b.currentTarget).hasClass("jcrop-tracker") && b.stopPropagation()
                });
                var M = y().mousedown(s("move")).css({
                    cursor: "move",
                    position: "absolute",
                    zIndex: 360
                });
                return Z.support && M.bind("touchstart.jcrop", Z.createDragger("move")), I.append(M), F(), {
                    updateVisible: w,
                    update: x,
                    release: B,
                    refresh: v,
                    isAwake: function() {
                        return b
                    },
                    setCursor: function(a) {
                        M.css("cursor", a)
                    },
                    enableHandles: E,
                    enableOnly: function() {
                        h = !0
                    },
                    showHandles: C,
                    disableHandles: F,
                    animMode: G,
                    setBgOpacity: z,
                    done: L
                }
            }(),
            bc = function() {
                function f(b) {
                    M.css({
                        zIndex: 450
                    }), b ? a(document).bind("touchmove.jcrop", k).bind("touchend.jcrop", l) : e && a(document).bind("mousemove.jcrop", h).bind("mouseup.jcrop", i)
                }

                function g() {
                    M.css({
                        zIndex: 290
                    }), a(document).unbind(".jcrop")
                }

                function h(a) {
                    return b(m(a)), !1
                }

                function i(a) {
                    return a.preventDefault(), a.stopPropagation(), W && (W = !1, c(m(a)), bb.isAwake() && d.onSelect.call(bs, u(_.getFixed())), g(), b = function() {}, c = function() {}), !1
                }

                function j(a, d, e) {
                    return W = !0, b = a, c = d, f(e), !1
                }

                function k(a) {
                    return b(m(Z.cfilter(a))), !1
                }

                function l(a) {
                    return i(Z.cfilter(a))
                }

                function n(a) {
                    M.css("cursor", a)
                }
                var b = function() {}, c = function() {}, e = d.trackDocument;
                return e || M.mousemove(h).mouseup(i).mouseout(i), D.before(M), {
                    activateHandlers: j,
                    setCursor: n
                }
            }(),
            bd = function() {
                function e() {
                    d.keySupport && (b.show(), b.focus())
                }

                function f(a) {
                    b.hide()
                }

                function g(a, b, c) {
                    d.allowMove && (_.moveOffset([b, c]), bb.updateVisible(!0)), a.preventDefault(), a.stopPropagation()
                }

                function i(a) {
                    if (a.ctrlKey || a.metaKey) return !0;
                    Y = a.shiftKey ? !0 : !1;
                    var b = Y ? 10 : 1;
                    switch (a.keyCode) {
                        case 37:
                            g(a, -b, 0);
                            break;
                        case 39:
                            g(a, b, 0);
                            break;
                        case 38:
                            g(a, 0, -b);
                            break;
                        case 40:
                            g(a, 0, b);
                            break;
                        case 27:
                            d.allowSelect && bb.release();
                            break;
                        case 9:
                            return !0
                    }
                    return !1
                }
                var b = a('<input type="radio" />').css({
                    position: "fixed",
                    left: "-120px",
                    width: "12px"
                }).addClass("jcrop-keymgr"),
                    c = a("<div />").css({
                        position: "absolute",
                        overflow: "hidden"
                    }).append(b);
                return d.keySupport && (b.keydown(i).blur(f), h || !d.fixedSupport ? (b.css({
                    position: "absolute",
                    left: "-20px"
                }), c.append(b).insertBefore(D)) : b.insertBefore(D)), {
                    watchKeys: e
                }
            }();
        Z.support && M.bind("touchstart.jcrop", Z.newSelection), J.hide(), br(!0);
        var bs = {
            setImage: bp,
            animateTo: bf,
            setSelect: bg,
            setOptions: bk,
            tellSelect: bi,
            tellScaled: bj,
            setClass: be,
            disable: bl,
            enable: bm,
            cancel: bn,
            release: bb.release,
            destroy: bo,
            focus: bd.watchKeys,
            getBounds: function() {
                return [E * T, F * U]
            },
            getWidgetSize: function() {
                return [E, F]
            },
            getScaleFactor: function() {
                return [T, U]
            },
            getOptions: function() {
                return d
            },
            ui: {
                holder: G,
                selection: K
            }
        };
        return g && G.bind("selectstart", function() {
            return !1
        }), A.data("Jcrop", bs), bs
    }, a.fn.Jcrop = function(b, c) {
        var d;
        return this.each(function() {
            if (a(this).data("Jcrop")) {
                if (
                    b === "api") return a(this).data("Jcrop");
                a(this).data("Jcrop").setOptions(b)
            } else this.tagName == "IMG" ? a.Jcrop.Loader(this, function() {
                a(this).css({
                    display: "block",
                    visibility: "hidden"
                }), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d)
            }) : (a(this).css({
                display: "block",
                visibility: "hidden"
            }), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d))
        }), this
    }, a.Jcrop.Loader = function(b, c, d) {
        function g() {
            f.complete ? (e.unbind(".jcloader"), a.isFunction(c) && c.call(f)) : window.setTimeout(g, 50)
        }
        var e = a(b),
            f = e[0];
        e.bind("load.jcloader", g).bind("error.jcloader", function(b) {
            e.unbind(".jcloader"), a.isFunction(d) && d.call(f)
        }), f.complete && a.isFunction(c) && (e.unbind(".jcloader"), c.call(f))
    }, a.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: .6,
        bgFade: !1,
        borderOpacity: .4,
        handleOpacity: .5,
        handleSize: null,
        aspectRatio: 0,
        keySupport: !0,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        shade: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function() {},
        onSelect: function() {},
        onDblClick: function() {},
        onRelease: function() {}
    }
})(jQuery);;
(function($) {
    // Global variables.
    // Load more page number counter.
    var loadMoreCount = 1;
    // Busy flag, need it to prevent multiple calls.
    var busy = false;
    // Variable to set content selector.
    var mafChannelsContent = '.l-content--inner';

    Drupal.behaviors.mafHomepageLoadmore = {
        refreshAds: function() {
            if (typeof(Drupal.behaviors.dfp_yieldbot) == "object") {
                Drupal.behaviors.dfp_yieldbot.refresh();
            } else if (typeof(Drupal.behaviors.dfp_amobee2) == "object" && window.innerWidth < 768) {
                Drupal.behaviors.dfp_amobee2.refresh();
            } else {
                // If we need to refresh all ads we will use below line commented .
                // googletag.pubads().refresh();
                // In our case we need to refresh all tags except skin or interstitial.
                if (typeof(googletag.slots) !== 'undefined') {
                    var new_slots = [];
                    $.each(googletag.slots, function(index, value) {
                        if (typeof(value.getTargetingMap().pos) !== 'undefined') {
                            var i = value.getTargetingMap().pos.toString();
                            var dontrefresh = ["skin", "interstitial", "wallpaper", "slideshow_interstitial"];
                            if (dontrefresh.indexOf(i) == -1) {
                                new_slots.push(value);
                            }
                        }
                    });
                    if (new_slots.length > 0) {
                        googletag.pubads().refresh(new_slots);
                    }
                }
            }

            if (typeof(konaAjaxPageKey) == 'function') {
                var slideIndex = $('.memento-gallery .first-slide .count').text().split(" ")[0];
                konaAjaxPageKey(Drupal.settings.ami_slideshow.nid + '|' + slideIndex);
            }

            // Recalculate sticky sidebar position.
            if ($.fn.hcSticky !== undefined && window.innerWidth > 767) {
                $('.l-region--sidebar-second').hcSticky('reinit');
                console.log("Done");
            }

        },
        // Track a new Google Analytics pageview.
        trackGoogle: function() {
            try {
                dataLayer.push({
                    'event': 'page_view'
                });
            } catch (err) {
                //ignore
            }
        },
        attach: function(context, settings) {
            // Define window width for use mobile conditions.
            var windowWidth = window.innerWidth;

            // loadMoreTrigger - static variable: return number
            var contentEnd = $('#block-maf-homepage-maf-homepage-fake-pager').offset(),
                loadMoreTrigger = contentEnd.top;
            // Create dynamic vars depended from device window width.
            if (!(windowWidth >= 768)) {
                var mainScroll = $('#snap-content'),
                    mainHeightContainer = $('.l-main');
                //mainHeight = $('.l-leaderboard').height() + $('.l-main').height() + $('.l-bottomboard').height() + $('.l-footer').height();
            } else {
                var mainScroll = $(window),
                    mainHeightContainer = $(document);
                //mainHeight = $(document).height();
            };
            // Calculating static load action variable depended of the dynamic vars.
            var loadHeight = mainHeightContainer.height() - loadMoreTrigger;

            mainScroll.scroll(function(e) {
                //Calculating main content container height which will increased after ajax callback and next scroll.
                var mainHeight = mainHeightContainer.height();
                //console.log(mainScroll.scrollTop(), mainHeight - $(window).height() - loadHeight, mainHeight, $(window).height(), loadHeight, loadMoreTrigger);
                if (mainScroll.scrollTop() > mainHeight - $(window).height() - loadHeight && !busy) {
                    // Get content area.
                    var content = $(mafChannelsContent);
                    // Set busy flag to true to prevent multiple calls.
                    busy = true;
                    $("a.ajax-pager--load-more, #block-maf-homepage-maf-homepage-fake-pager a").remove();
                    // Create DOM load more link element.
                    var load = $('<a class="ajax-pager--load-more" href="/homepage">' + Drupal.t('Next') + '</a>');
                    // Append load more link at the bottom of content.
                    content.append(load);
                    // Set ajax request with special $_POST['is_ajax'] = TRUE parameter to give page without all markup.
                    $.ajax({
                        type: 'GET',
                        url: $('body').find("a.ajax-pager--load-more").attr("href"),
                        data: {
                            'is_ajax': 'TRUE',
                            'page': loadMoreCount,
                            'offset': Drupal.settings.maf_homepage.offset,
                            'printed': Drupal.settings.maf_homepage.printed.join(',')
                        }
                    }).done(function(data) {
                        // Remove old load more link.
                        $("a.ajax-pager--load-more").remove();
                        if (data) {
                            // Increase load more page number.
                            loadMoreCount++;
                            // Append data received from server.
                            content.append(data);
                            // Create new load_more element.
                            var load = $('<a class="ajax-pager--load-more" href="/homepage">' + Drupal.t('Next') + '</a>');
                            // Inset new load more link.
                            content.append(load);
                            // Set busy flag to false.
                            busy = false;
                            // Add page_view event
                            Drupal.behaviors.mafHomepageLoadmore.trackGoogle();
                            // Reload ads.
                            Drupal.behaviors.mafHomepageLoadmore.refreshAds();
                        }
                    });
                    e.preventDefault();
                }
            });
        }
    };
})(jQuery);;
