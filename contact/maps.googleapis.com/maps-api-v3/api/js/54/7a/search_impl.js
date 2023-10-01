google.maps.__gjsload__('search_impl', function(_) {
    var Ohb = function(a) {
            a = a.toArray();
            U$ || (U$ = {
                K: "sssM",
                N: ["ss"]
            });
            return _.Yf(a, U$, 1)
        },
        Phb = function(a, b) {
            _.z(a.m, 3, b)
        },
        Thb = function(a, b, c) {
            const d = _.tC(new Qhb);
            c.Ch = (0, _.la)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.nIa(c, _.oJ(b));
            const e = [];
            e.push(_.J(c, "click", (0, _.la)(Rhb, null, a)));
            _.bb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.J(c, f, (0, _.la)(Shb, null, a, f)))
            });
            e.push(_.J(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        Rhb = function(a, b, c, d, e) {
            let f =
                null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Q(e.m, 2) ? new _.Pg(_.Sn(_.E(e.m, 2, _.Xn).m, 1), _.Sn(_.E(e.m, 2, _.Xn).m, 2)) : null;
                f.fields = {};
                const g = _.B(e.m, 3);
                for (let h = 0; h < g; ++h) {
                    const k = _.am(e.m, 3, _.wJ, h);
                    f.fields[k.getKey()] = k.Ga()
                }
            }
            _.K(a, "click", b, c, d, f)
        },
        Shb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.K(a, b, c, d, e, h, g)
        },
        Uhb = function() {},
        Vhb = class extends _.P {
            constructor() {
                super()
            }
            Lb() {
                return _.H(this.m, 2)
            }
        },
        U$;
    var Whb = class extends _.P {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.C(this.m, 1, -1)
        }
    };
    var Qhb = class {
        constructor() {
            var a = _.pk,
                b = _.ok;
            this.h = _.gg;
            this.g = _.Ql(_.Pp, a, _.as + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Whb(g);
                b(g)
            }
            var d = new Vhb;
            _.z(d.m, 1, a.layerId.split("|")[0]);
            _.z(d.m, 2, a.featureId);
            Phb(d, this.h.g().g());
            for (var e in a.parameters) {
                var f = _.cg(d.m, 4, _.wJ);
                _.z(f.m, 1, e);
                _.z(f.m, 2, a.parameters[e])
            }
            a = Ohb(d);
            this.g(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Uhb.prototype.pt = function(a) {
        if (_.qj[15]) {
            var b = a.o;
            const u = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().jf(a.g))) : a.g && _.KIa(a.g, b) && (_.bb(a.h || [], _.jh), a.h = null));
            if (u) {
                var c = a.get("layerId");
                b = a.get("spotlightDescription");
                var d = a.get("paintExperimentIds"),
                    e = a.get("styler"),
                    f = a.get("roadmapStyler"),
                    g = a.get("mapsApiLayer"),
                    h = a.get("darkLaunch"),
                    k = a.get("mapFeatures"),
                    l = a.get("clickableCities"),
                    m = a.get("travelMapRequest"),
                    n = a.get("searchPipeMetadata"),
                    p = a.get("overlayLayer"),
                    q = a.get("caseExperimentIds"),
                    r = a.get("airQualityPipeMetadata"),
                    t = a.get("directionsPipeParameters");
                const v = new _.Bp;
                c = c.split("|");
                v.layerId = c[0];
                for (let A = 1; A < c.length; ++A) {
                    const [D, ...G] = c[A].split(":");
                    v.parameters[D] = G.join(":")
                }
                b && (v.spotlightDescription = new _.Kp(b));
                d && (v.paintExperimentIds = d.slice(0));
                e && (v.roadmapStyler = new _.So(e));
                f && (v.roadmapStyler = new _.So(f));
                m && (v.travelMapRequest = new _.gka(m));
                g && (v.mapsApiLayer = new _.Cp(g));
                k && (v.mapFeatures = k);
                l && (v.clickableCities = l);
                n && (v.searchPipeMetadata = new _.rr(n));
                p &&
                    (v.overlayLayer = new _.Lp(p));
                q && (v.caseExperimentIds = q.slice(0));
                r && (v.airQualityPipeMetadata = new _.Xja(r));
                t && (v.directionsPipeParameters = new _.Uja(t));
                v.darkLaunch = !!h;
                b = v;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = u.__gm.j, a.set(a.get().Id(b))) : Thb(a, u, b);
                _.N(u, "Lg");
                _.M(u, 148282)
            }
        }
    };
    _.bh("search_impl", new Uhb);
});