google.maps.__gjsload__('overlay', function(_) {
    var Vv = function(a) {
            this.g = a
        },
        loa = function() {},
        Wv = function(a) {
            a.Tn = a.Tn || new loa;
            return a.Tn
        },
        moa = function(a) {
            this.Ba = new _.dj(() => {
                const b = a.Tn;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Hm && a.onAdd) a.onAdd();
                        b.Hm = !0;
                        a.draw()
                    }
                } else {
                    if (b.Hm)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Hm = !1
                }
            }, 0)
        },
        noa = function(a, b) {
            const c = Wv(a);
            let d = c.Ul;
            d || (d = c.Ul = new moa(a));
            _.bb(c.Na || [], _.jh);
            var e = c.ab = c.ab || new _.Dka;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.sr = c.sr || new Vv(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.ej(d.Ba);
            c.Na = [_.J(a, "panes_changed", e), _.J(f, "zoom_changed", e), _.J(f, "offset_changed", e), _.J(b, "projection_changed", e), _.J(f, "projectioncenterq_changed", e)];
            _.ej(d.Ba);
            b instanceof _.yh ? (_.N(b, "Ox"), _.M(b, 148440)) : b instanceof _.ti && (_.N(b, "Oxs"), _.M(b, 181451))
        },
        soa = function(a) {
            if (a) {
                var b = a.getMap();
                if (ooa(a) !== b && b && b instanceof _.yh) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new poa(b, a, c.overlayLayer) : c.h.then(({
                        ha: d
                    }) => {
                        const e = new qoa(b, d);
                        d.Bb(e);
                        c.overlayLayer = e;
                        roa(a);
                        soa(a)
                    })
                }
            }
        },
        roa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Dd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        ooa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        toa = function(a, b) {
            a.g.get("projection") !=
                b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        };
    _.y(Vv, _.L);
    Vv.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.rg(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Xv = {};
    _.y(moa, _.L);
    Xv.nd = function(a) {
        if (a) {
            var b = a.getMap();
            (Wv(a).Yq || null) !== b && (b && noa(a, b), Wv(a).Yq = b)
        }
    };
    Xv.Dd = function(a) {
        const b = Wv(a);
        var c = b.ab;
        c && c.unbindAll();
        (c = b.sr) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Na && _.bb(b.Na, _.jh);
        b.Na = null;
        b.Ul && (b.Ul.Ba.zc(), b.Ul = null);
        delete Wv(a).Yq
    };
    var Yv = {},
        poa = class {
            constructor(a, b, c) {
                this.map = a;
                this.g = b;
                this.j = c;
                this.h = !1;
                _.N(this.map, "Ox");
                _.M(this.map, 148440);
                c.nd(this)
            }
            draw() {
                this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
                this.g.draw && this.g.draw()
            }
        },
        qoa = class {
            constructor(a, b) {
                this.o = a;
                this.j = b;
                this.g = null;
                this.h = []
            }
            dispose() {}
            Kb(a, b, c, d, e, f, g, h) {
                const k = this.g = this.g || new _.is(this.o, this.j, () => {});
                k.Kb(a, b, c, d, e, f, g, h);
                for (const l of this.h) toa(l, k), l.draw()
            }
            nd(a) {
                this.h.push(a);
                this.g && toa(a, this.g);
                this.j.refresh()
            }
            Dd(a) {
                _.kb(this.h,
                    a)
            }
        };
    Yv.nd = soa;
    Yv.Dd = roa;
    _.bh("overlay", {
        sp: function(a) {
            if (a) {
                (0, Xv.Dd)(a);
                (0, Yv.Dd)(a);
                var b = a.getMap();
                b && (b instanceof _.yh ? (0, Yv.nd)(a) : (0, Xv.nd)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.to(a, {
                wd: ({
                    event: b
                }) => {
                    _.kn(b.Ea)
                },
                Ac: b => _.fo(b),
                Mg: b => _.go(b),
                gd: b => _.go(b),
                Mc: b => _.ho(b)
            }).Xh(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.gh);
            a.addEventListener("contextmenu", _.gh);
            a.addEventListener("dblclick", _.gh);
            a.addEventListener("mousedown", _.gh);
            a.addEventListener("mousemove", _.gh);
            a.addEventListener("MSPointerDown",
                _.gh);
            a.addEventListener("pointerdown", _.gh);
            a.addEventListener("touchstart", _.gh);
            a.addEventListener("wheel", _.gh)
        }
    });
});