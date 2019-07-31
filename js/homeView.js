define("text!src/home-black/background.tpl.html", [], function() {
	return '<img src="images/home/home-black-bg.jpg" style="height: 100%;position:relative;width:100%;left:0;right:0;" id="star-bg">\r\n<!-- <a href="https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=748&token=qmb1dtk0vnkinmukbqrmufo5kvtc6eh0&domainID=campus&type=2" class="customer-service" target="_blank">\r\n    <div class="icon"></div>\r\n    <div class="text">\r\n        在线客服\r\n    </div> -->\r\n</a>\r\n'
}), define("src/home-black/Star", ["three"], function(e) {
	function r(e, t) {
		return Math.random() * (t - e) + e
	}
	var t = function(t) {
		e.Particle.call(this, t), this.velocity = new e.Vector3(0, -8, 0), this.velocity.rotateX(r(-45, 45)), this.velocity
			.rotateY(r(0, 360)), this.gravity = new e.Vector3(0, 0, 0), this.drag = 1
	};
	t.prototype = new e.Particle, t.prototype.constructor = t, t.prototype.updatePhysics = function() {
		this.velocity.multiplyScalar(this.drag), this.velocity.addSelf(this.gravity)
	};
	var n = Math.PI / 180;
	return e.Vector3.prototype.rotateY = function(e) {
		var t = Math.cos(e * n),
			r = Math.sin(e * n),
			i = this.z,
			s = this.x;
		this.x = s * t + i * r, this.z = s * -r + i * t
	}, e.Vector3.prototype.rotateX = function(e) {
		var t = Math.cos(e * n),
			r = Math.sin(e * n),
			i = this.z,
			s = this.y;
		this.y = s * t + i * r, this.z = s * -r + i * t
	}, e.Vector3.prototype.rotateZ = function(e) {
		var t = Math.cos(e * n),
			r = Math.sin(e * n),
			i = this.x,
			s = this.y;
		this.y = s * t + i * r, this.x = s * -r + i * t
	}, t
}), define("src/home-black/drawStar", ["three", "./Star", "jquery"], function(e, t, n) {
	function y(t) {
		r = window.innerWidth > g ? window.innerWidth : g, i = window.innerHeight, p = r / 2, d = i / 2, s = document.createElement(
				"div"), s.id = "canvas", t.append(s), a = new e.PerspectiveCamera(75, r / i, 1, 1e4), a.position.z = 1500, f =
			new e.Scene, f.add(a), l = new e.CanvasRenderer, l.setSize(r, i - 10), x(), s.appendChild(l.domElement), n(s).on({
				mousemove: b,
				touchstart: w,
				touchmove: E
			}), u = setInterval(S, 1e3 / 30)
	}

	function b(e) {
		e.clientX > p / 2 && e.clientX < p / 2 + p && (c = e.clientX - p)
	}

	function w(e) {}

	function E(e) {
		e.touches.length === 1 && (e.preventDefault(), c = e.touches[0].pageX - p, h = e.touches[0].pageY - d)
	}

	function S() {
		a.position.x += (c - a.position.x) * .05, a.lookAt(f.position), l.render(f, a)
	}

	function x() {
		var n = 0,
			r = 0,
			i = new e.ParticleBasicMaterial({
				map: new e.Texture(m)
			});
		for (var s = 0; s < 400; s++) o = new t(i), n = T(-3.5, 3.5), r = N(n, 0, 2), o.position.y = T(-r, r) * 1400, o.position
			.x = n * 500, o.position.z = Math.random() * 800 - 400, o.scale.x = o.scale.y = 1, f.add(o), v.push(o);
		for (var s = 0; s < 20; s++) o = new t(i), o.position.x = Math.random() * 2e3 - 2e3, o.position.y = Math.random() *
			2e3 - 1e3, o.position.z = Math.random() * 500 + 200, o.scale.x = o.scale.y = 1.5, f.add(o), v.push(o);
		for (var s = 0; s < 20; s++) o = new t(i), o.position.x = Math.random() * 2e3, o.position.y = Math.random() * 2e3 -
			1e3, o.position.z = Math.random() * 500 + 200, o.scale.x = o.scale.y = 1.5, f.add(o), v.push(o)
	}

	function T(e, t) {
		return Math.random() * (t - e) + e
	}

	function N(e, t, n) {
		var t = t || 0,
			n = n || 1;
		return 1 / (Math.sqrt(n) * Math.sqrt(2 * Math.PI)) * Math.pow(Math.E, -(e * e + 0 - t) / (2 * n))
	}
	var r, i, s, o, u, a, f, l, c = 0,
		h = 0,
		p = window.innerWidth / 2,
		d = window.innerHeight / 2,
		v = [],
		m = new Image,
		g = 1200;
	return m.src = "images/home/star-ignore.png", {
		init: y,
		destroy: function() {
			a = null, f = null, l = null, n(s).off(), clearInterval(u)
		}
	}
}), define("src/home-black/Circle", [], function() {
	function e(e) {
		this.canvas = document.createElement(), this.ctx = this.canvas.getContext("2d"), this.image = e instanceof Image ?
			e : new Image, this.IMAGE_WIDTH = this.canvas.width = this.image.width, this.IMAGE_HEIGHT = this.canvas.height =
			this.image.height, this.ctx.drawImage(this.image, 0, 0), this.cX = this.IMAGE_WIDTH / 2, this.cY = this.IMAGE_HEIGHT /
			2, this.angleNow = 0
	}
	return e.prototype.rotate = function(e) {
		var t = this.ctx,
			n = this.IMAGE_WIDTH,
			r = this.IMAGE_HEIGHT;
		t.translate(n / 2, r / 2), t.rotate(e * Math.PI / 180), this.angleNow += e
	}, e
}), define("src/home-black/drawCircle", ["./Circle", "backbone"], function(e, t) {
	var n = .05,
		r = .05,
		i, s, o = 1980,
		u = 926,
		a = 390,
		f = 1211,
		l = 688,
		c = 688,
		h = .4324,
		p = .4324,
		d = 1.46,
		v = 1.46,
		m = .812,
		g = .812,
		y = .87,
		b = .87,
		w = .52,
		E = .518,
		S = .68,
		x = .92,
		T, N, C, k, L, A, O = 1200,
		M = t.View.extend({
			initialize: function() {
				var e = document.documentElement.clientWidth,
					t = document.documentElement.clientHeight;
				i = e > O ? e : O, s = t, L = s, A = u, a = 390;
				if (i < s || e < O) L = i, A = o, a = 530;
				T = L * a / A, N = L * f / A, C = L * l / A, k = L * c / A, this.c1 = document.createElement("img"), this.c2 =
					document.createElement("img"), this.c3 = document.createElement("img"), this.c4 = document.createElement("img"),
					this.c1.src = "images/home/earth-ignore.png", this.c2.src = "images/home/c3-ignore.png", this.c3.src =
					"images/home/c3-ignore.png", this.c4.src = "images/home/home-bigtitle-ignore.png", this.c1.className =
					"circle c1 earth", this.c2.className = "circle c2", this.c3.className = "circle c3", this.c4.className =
					"circle big-title", $(this.c4).css({
						height: T,
						width: "auto",
						marginLeft: -T * S,
						marginTop: -T * x
					}), $(this.c3).css({
						width: N,
						height: N,
						marginLeft: -N / 2,
						marginTop: -N / 2
					}), $(this.c2).css({
						width: C,
						height: C,
						marginLeft: -C / 2,
						marginTop: -C / 2
					}), $(this.c1).css({
						width: k,
						height: k,
						marginLeft: -k * w,
						marginTop: -k * E
					}), this.angleNow = 0
			},
			render: function() {
				var e = $(this.$el);
				return e.append(this.c1), e.append(this.c2), e.append(this.c3), e.append(this.c4), this.canvasSupport() && (
					clearTimeout(this.timeout), this.angleNow = 0, this.rotate.call(this)), this
			},
			rotate: function() {
				var e = this;
				this.c2.style.transform = "rotate(" + -this.angleNow * n + "deg)", this.c3.style.transform = "rotate(" + this.angleNow *
					r + "deg)", this.angleNow++, this.timeout = setTimeout(function() {
						e.rotate.call(e)
					}, 65)
			},
			canvasSupport: function() {
				return !!document.createElement("canvas").getContext
			},
			destroy: function() {
				this.remove().off()
			}
		});
	return M
}), define("src/home-black/RelationGroup", ["svgJs", "jquery"], function(e, t) {
	var n = "",
		r = "rgba(255,255,255,0.5)",
		i = "rgba(255,255,255,0.8)",
		s = "rgba(255,255,255,0.3)",
		o = "rgba(255,255,255,0.8)",
		u = 1,
		a = "rgba(255,255,255,0.4)",
		f = "rgba(255,78,207,0.9)",
		l = 14,
		c = "Microsoft YaHei",
		h = 1500,
		p = 1e3,
		d = 40,
		v = 25,
		m = 25,
		g = 15,
		y = 10,
		b = 10,
		w = "_self",
		E = function(t, r) {
			n === "" && (n = e(t).size("100%", "100%")), this.iData = r, this.sText = "", this.fontArr = [], this.lineArr = [],
				this.sPointArr = [], this.bPointArr = [], this.fontSet = n.set(), this.sPointSet = n.set(), this.bPointSet = n.set(),
				this.polygon = n.polygon("").fill("rgba(255,255,255,0)"), this.sWave = n.circle(1).fill(a), this.bWave = n.circle(
					1).fill(a), this.init()
		};
	return E.prototype.init = function() {
		var e = this.iData,
			o = 0,
			a = 0,
			f = 0,
			h = this,
			p = 0,
			d = e.points,
			v = e.lines,
			m = "",
			g = "",
			E = "",
			S = [],
			x = "",
			T;
		for (o = v.length - 1; o >= 0; o--) E = v[o], m = n.line(E.bx, E.by, E.bx, E.by).stroke({
			width: u,
			color: s
		}), E.line = m, this.lineArr.push(E);
		for (o = d.length - 1; o >= 0; o--) {
			E = d[o], g = E.font, g.textArr = g.textArr || [], f = g.textArr.length, p = E.position.cx + g.dx;
			for (a = 0; a < f; a++) T = g.textArr[a], x = n.link(E.link + T.value), x.target(E.target || w), m = x.text(
				function(e) {
					e.tspan(T.text).fill(g.color || r).cx(p).cy(E.position.cy + g.dy), T.text.indexOf("Hao123") !== -1 ? p += T.text
						.length * b / 1.5 + y : p += T.text.length * b / .95 + y, e.attr({
							pointType: E.type,
							px: E.position.cx,
							py: E.position.cy
						})
				}), m.font({
				family: g.fontFamily || c,
				size: g.fontSize || l
			}), this.fontSet.add(m), this.fontArr.push(m);
			m = n.circle(E.size).cx(E.position.cx).cy(E.position.cy).fill(E.color || r), m.attr({
				linkIndex: this.fontArr.length - 1,
				pointType: E.type
			}), E.type === "large" ? (this.bPointSet.add(m), this.bPointArr.push(m)) : (this.sPointSet.add(m), this.sPointArr
				.push(m)), S.push([E.position.cx, E.position.cy])
		}
		this.polygon.plot(S), e.flashIndex === undefined ? (this.bPointSet.on("mouseenter", function(e) {
			var n = t(e.target),
				r = {
					cx: parseInt(n.attr("cx"), 0),
					cy: parseInt(n.attr("cy"), 0),
					pointType: e.target.getAttribute("pointType")
				};
			h.bPointMouseEnter(h, r)
		}), this.bPointSet.on("mouseleave", function(e) {
			h.bPointMouseLeave(h, e)
		}), this.sPointSet.on("mouseenter", function(e) {
			var n = t(e.target),
				r = {
					cx: parseInt(n.attr("cx"), 0),
					cy: parseInt(n.attr("cy"), 0),
					pointType: e.target.getAttribute("pointType")
				};
			h.bPointMouseEnter(h, r)
		}), this.sPointSet.on("mouseleave", function(e) {
			h.bPointMouseLeave(h, e)
		}), this.fontSet.on("mouseenter", function(e) {
			var n = t(e.target),
				r = {
					cx: parseInt(n.attr("px"), 0),
					cy: parseInt(n.attr("py"), 0),
					pointType: e.target.getAttribute("pointType"),
					N_S: !0
				};
			n.find("tspan").attr("fill", i), h.bPointMouseEnter(h, r)
		}), this.fontSet.on("mouseleave", function(e) {
			var n = t(e.target);
			h.bPointMouseLeave(h, e), e.target.getAttribute("pointType") !== "large" && n.find("tspan").attr("fill", r)
		}), this.polygon.on("mouseenter", function(e) {
			var t = h.bPointArr[0],
				n = {
					cx: t.cx(),
					cy: t.cy(),
					pointType: "large"
				};
			h.bPointMouseEnter(h, n)
		}), this.polygon.on("mouseleave", function(e) {
			h.bPointMouseLeave(h)
		})) : typeof e.flashIndex == "number" && this.pointFlash()
	}, E.prototype.bPointMouseEnter = function(e, t) {
		var n = t.cx,
			i = t.cy,
			s = -1,
			u = "",
			a = v,
			f = d;
		t.pointType === "small" && (a = g, f = m), t.N_S || (e.sPointSet && e.sPointSet.fill(o), e.sWave.cx(n).cy(i).opacity(
			1).stroke(r).animate(h).radius(a).opacity(0).loop(), e.bWave.cx(n).cy(i).opacity(1).stroke(r).animate(h).radius(
			f).opacity(0).loop());
		for (s = e.lineArr.length - 1; s >= 0; s--) u = e.lineArr[s], u.line.animate(p).attr({
			x1: u.bx,
			y1: u.by,
			x2: u.ex,
			y2: u.ey
		})
	}, E.prototype.bPointMouseLeave = function(e, t) {
		var n = -1,
			i = "";
		e.sPointSet.fill(r), this.sWave.radius(0).stop(), this.bWave.radius(0).stop();
		for (n = e.lineArr.length - 1; n >= 0; n--) i = e.lineArr[n], i.line.stop(), i.line.plot(i.bx, i.by, i.bx, i.by)
	}, E.prototype.pointFlash = function() {
		var e = this.iData.flashIndex,
			t = this.bPointArr[e],
			n = t.cx(),
			i = t.cy();
		this.sWave.cx(n).cy(i).opacity(1).stroke(r).animate(h).radius(v).opacity(0).loop(), this.bWave.cx(n).cy(i).opacity(
			1).stroke(r).animate(h).radius(d).opacity(0).loop()
	}, E.prototype.destroy = function() {
		this.bPointSet.off(), this.sPointSet.off(), this.polygon.off()
	}, E.resetDrawer = function() {
		n = ""
	}, E
}), define("text!src/home-black/RelationGroupIE.tpl.html", [], function() {
	return '<span class="{{iconClass}}"></span>\n{{#each texts}}\n	{{#if @first}}\n		<a href="{{@root.link}}{{value}}" target="{{@root.target}}" style="margin:{{@root.dy}}px 0 0 {{@root.dx}}px; top:{{@root.top}}px;">{{text}}</a>\n	{{else}}\n		<a href="{{@root.link}}{{value}}" target="{{@root.target}}" style="top:{{@root.top}}px;" class="not-fir">{{text}}</a>\n	{{/if}}\n{{/each}}'
}), define("src/home-black/RelationGroupIE", ["jquery", "backbone", "handlebars",
	"text!src/home-black/RelationGroupIE.tpl.html"
], function(e, t, n, r) {
	function u(t, n) {
		var r = 0,
			s = n.points,
			u = e(t);
		this.viewList = [], i || (i = e('<div class="svg-container"></div>'), i.css({
			width: u.width(),
			height: u.height()
		}));
		do this.viewList.push(new o(i, s[r])); while (s[++r]);
		i.insertBefore(e(t).find(".search-box-container"))
	}
	var i, s = 13,
		o = t.View.extend({
			tagName: "span",
			className: "point-ie",
			events: {},
			initialize: function(e, t) {
				this.$container = e, this.point = t, this.template = n.compile(r);
				var i = this.renderData = {
					cx: t.position.cx,
					cy: t.position.cy,
					link: t.link,
					type: t.type,
					dx: t.font.dx,
					dy: t.font.dy,
					iconClass: "c-" + (parseInt(Math.random() * 100 % 7, 0) + 1),
					texts: t.font.textArr
				};
				t.type === "small" && (i.iconClass = "c-white"), i.dx < 0 && (i.dx -= 15), i.dy > 10 && (i.top = i.dy), this.render()
			},
			render: function() {
				var t = e(this.el);
				return t.html(this.template(this.renderData)), this.$container.append(t), t.css({
					top: this.renderData.cy,
					left: this.renderData.cx
				}), this
			},
			destroy: function() {
				this.remove().off()
			}
		});
	return u.prototype.destroy = function() {
		var e = 0,
			t = this.viewList;
		do t[e].destroy(); while (t[++e]);
		i.remove().off()
	}, u
}), define("src/home-black/drawSvg", ["svgJs", "jquery", "./RelationGroup", "./RelationGroupIE"], function(e, t, n, r) {
	function f(e, n, r, s) {
		this.c1 = n || t("#canvas .c1"), this.c2 = r || t("#canvas .c2"), this.c3 = s || t("#canvas .c3");
		var o = n.offset(),
			f = r.offset(),
			c = s.offset(),
			h = n.width() / 2,
			p = r.width() / 2,
			d = s.width() / 2,
			v = 5,
			m = {
				cx: f.left + p - p * .95 + v,
				cy: 2 * (f.top + p) - l(f.top, p, p * .95) - 50
			},
			g = {
				cx: f.left + p - p * .85 + v - 20,
				cy: l(f.top, p, p * .85) - 40
			},
			y = {
				cx: f.left + p + p * .8 + 0,
				cy: l(f.top, p, p * .8) - 50
			},
			b = {
				cx: f.left + p + p * .98 + v,
				cy: 2 * (f.top + p) - l(f.top, p, p * .98) - 80
			},
			w = {
				cx: f.left + p - p * .95,
				cy: 2 * (f.top + p) - l(f.top, p, 0) - 50
			},
			E = {
				cx: f.left + p + p * .3 + 145,
				cy: 2 * (f.top + p) - l(f.top, p, p * .3) - 120
			},
			S = {
				cx: f.left + p - p * .47,
				cy: 2 * (f.top + p) - l(f.top, p, p * .47) - 50
			},
			x = {
				cx: f.left + p + p * .3,
				cy: 2 * (f.top + p) - l(f.top, p, p * .3)
			};
		this.rg1 = new i(e, {
			points: [{
				position: {
					cx: m.cx,
					cy: m.cy
				},
				color: "rgba(255,78,207,0.9)",
				size: 9,
				type: "large",
				link: u + "#/social/2/",
				font: {
					text: "智能驾驶",
					color: "rgba(255,255,255,0.8)",
					dx: -60,
					dy: 5,
					fontSize: 13,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "智能驾驶",
						value: "IDG合作发展部|IDG综合管理部|IDG智能驾驶体验设计中心|车联网事业部|自动驾驶事业部|自动驾驶技术部|智能汽车事业部"
					}]
				}
			}, {
				position: {
					cx: m.cx - 16,
					cy: m.cy + 80
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "智能驾驶",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "智能驾驶",
						value: "IDG合作发展部|IDG综合管理部|IDG智能驾驶体验设计中心"
					}]
				}
			}, {
				position: {
					cx: m.cx - 80,
					cy: m.cy - 60
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "车联网",
					color: "",
					dx: -55,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "车联网",
						value: "车联网事业部"
					}]
				}
			}, {
				position: {
					cx: m.cx - 130,
					cy: m.cy - 10
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "自动驾驶",
					color: "",
					dx: -54,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "自动驾驶",
						value: "自动驾驶事业部|自动驾驶技术部"
					}]
				}
			}, {
				position: {
					cx: m.cx - 110,
					cy: m.cy + 70
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "智能汽车",
					color: "",
					dx: -20,
					dy: 17,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "智能汽车",
						value: "智能汽车事业部"
					}]
				}
			}],
			lines: [{
				bx: m.cx,
				by: m.cy,
				ex: m.cx - 16,
				ey: m.cy + 80
			}, {
				bx: m.cx,
				by: m.cy,
				ex: m.cx - 80,
				ey: m.cy - 60
			}, {
				bx: m.cx,
				by: m.cy,
				ex: m.cx - 130,
				ey: m.cy - 10
			}, {
				bx: m.cx,
				by: m.cy,
				ex: m.cx - 110,
				ey: m.cy + 70
			}, {
				bx: m.cx - 80,
				by: m.cy - 60,
				ex: m.cx - 130,
				ey: m.cy - 10
			}, {
				bx: m.cx - 110,
				by: m.cy + 70,
				ex: m.cx - 130,
				ey: m.cy - 10
			}, {
				bx: m.cx - 16,
				by: m.cy + 80,
				ex: m.cx - 110,
				ey: m.cy + 70
			}]
		}), this.rg2 = new i(e, {
			points: [{
				position: {
					cx: g.cx,
					cy: g.cy
				},
				color: "#7aff64",
				size: 9,
				type: "large",
				link: u + "#/social/2/",
				font: {
					text: "技术体系",
					color: "rgba(255,255,255,0.8)",
					dx: 10,
					dy: 5,
					fontSize: 13,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "技术体系",
						value: "百度众测|基础技术测试部|EBG测试部|智能云技术三部|平台测试部|工程效率部|ASIC后端工程师|智能芯片及架构部|企业智能平台部|企业智能平台|量子计算研究所|Distinguished Scientist|安全事业部|云安全部|安全实验室|安全产品中心"
					}]
				}
			}, {
				position: {
					cx: g.cx + 56,
					cy: g.cy + 40
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "系统",
					color: "",
					dx: 9,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "系统",
						value: ""
					}]
				}
			}, {
				position: {
					cx: g.cx - 60,
					cy: g.cy - 85
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "测试",
					color: "",
					dx: -53,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "测试",
						value: "百度众测|基础技术测试部|EBG测试部|智能云技术三部|平台测试部"
					}]
				}
			}, {
				position: {
					cx: g.cx + 16,
					cy: g.cy - 80
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "工程效率",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "工程效率",
						value: "工程效率部"
					}]
				}
			}, {
				position: {
					cx: g.cx - 116,
					cy: g.cy - 30
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "芯片",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "芯片",
						value: "ASIC后端工程师|智能芯片及架构部"
					}]
				}
			}, {
				position: {
					cx: g.cx - 96,
					cy: g.cy + 20
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "企业智能平台",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "企业智能平台",
						value: "企业智能平台部|企业智能平台"
					}]
				}
			}, {
				position: {
					cx: g.cx + 80,
					cy: g.cy - 30
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "量子",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "量子",
						value: "量子计算研究所|Distinguished Scientist"
					}]
				}
			}, {
				position: {
					cx: g.cx - 5,
					cy: g.cy + 50
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "安全",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "安全",
						value: "安全事业部|云安全部|安全实验室|安全产品中心"
					}]
				}
			}],
			lines: [{
				bx: g.cx,
				by: g.cy,
				ex: g.cx + 16,
				ey: g.cy - 80
			}, {
				bx: g.cx,
				by: g.cy,
				ex: g.cx + 80,
				ey: g.cy - 30
			}, {
				bx: g.cx,
				by: g.cy,
				ex: g.cx + 56,
				ey: g.cy + 40
			}, {
				bx: g.cx,
				by: g.cy,
				ex: g.cx - 5,
				ey: g.cy + 50
			}, {
				bx: g.cx,
				by: g.cy,
				ex: g.cx - 96,
				ey: g.cy + 20
			}, {
				bx: g.cx,
				by: g.cy,
				ex: g.cx - 116,
				ey: g.cy - 30
			}, {
				bx: g.cx,
				by: g.cy,
				ex: g.cx - 60,
				ey: g.cy - 85
			}, {
				bx: g.cx + 16,
				by: g.cy - 80,
				ex: g.cx + 80,
				ey: g.cy - 30
			}, {
				bx: g.cx + 80,
				by: g.cy - 30,
				ex: g.cx + 56,
				ey: g.cy + 40
			}, {
				bx: g.cx + 56,
				by: g.cy + 40,
				ex: g.cx - 5,
				ey: g.cy + 50
			}, {
				bx: g.cx - 5,
				by: g.cy + 50,
				ex: g.cx - 96,
				ey: g.cy + 20
			}, {
				bx: g.cx - 96,
				by: g.cy + 20,
				ex: g.cx - 116,
				ey: g.cy - 30
			}, {
				bx: g.cx - 116,
				by: g.cy - 30,
				ex: g.cx - 60,
				ey: g.cy - 85
			}, {
				bx: g.cx - 60,
				by: g.cy - 85,
				ex: g.cx + 16,
				ey: g.cy - 80
			}]
		}), this.rg3 = new i(e, {
			points: [{
				position: {
					cx: y.cx,
					cy: y.cy
				},
				color: "#ffde00",
				size: 9,
				type: "large",
				link: u + "#/social/2/",
				font: {
					text: "搜索公司",
					color: "rgba(255,255,255,0.8)",
					dx: -70,
					dy: 5,
					fontSize: 13,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "搜索公司",
						value: "垂直行业搜索部|多模搜索部|核心搜索部|搜索生态业务部|贴吧事业部基础业务技术部|推荐技术平台部|百度APP业务部|富媒体业务部|新闻与内容生态部|百家号业务部|百度APP研发部|Hao123基础业务部|推荐产品部|内容生态市场部|内容生态用户体验部|内容生态质量部|内容生态运营部|推荐技术架构部|商务搜索部|商务搜索商品推广部|商务搜索智能交互部|展示广告平台部|商务搜索产品部|品牌广告技术部|商品推广部|商务搜索架构部|聚屏产品技术部"
					}]
				}
			}, {
				position: {
					cx: y.cx - 20,
					cy: y.cy - 75
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "大搜索",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "大搜索",
						value: "垂直行业搜索部|多模搜索部|核心搜索部|搜索生态业务部"
					}]
				}
			}, {
				position: {
					cx: y.cx + 80,
					cy: y.cy - 10
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "百度APP&信息流业务体系",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "百度APP&信息流业务体系",
						value: "贴吧事业部基础业务技术部|推荐技术平台部|百度APP业务部|富媒体业务部|新闻与内容生态部|百家号业务部|百度APP研发部|Hao123基础业务部|推荐产品部|内容生态市场部|内容生态用户体验部|内容生态质量部|内容生态运营部|推荐技术架构部"
					}]
				}
			}, {
				position: {
					cx: y.cx - 20,
					cy: y.cy + 45
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "大商业",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "大商业",
						value: "商务搜索部|商务搜索商品推广部|商务搜索智能交互部|展示广告平台部|商务搜索产品部|品牌广告技术部|商品推广部|商务搜索架构部|聚屏产品技术部"
					}]
				}
			}],
			lines: [{
				bx: y.cx,
				by: y.cy,
				ex: y.cx - 20,
				ey: y.cy - 75
			}, {
				bx: y.cx,
				by: y.cy,
				ex: y.cx + 80,
				ey: y.cy - 10
			}, {
				bx: y.cx,
				by: y.cy,
				ex: y.cx - 20,
				ey: y.cy + 45
			}, {
				bx: y.cx - 20,
				by: y.cy - 75,
				ex: y.cx + 80,
				ey: y.cy - 10
			}, {
				bx: y.cx - 20,
				by: y.cy + 45,
				ex: y.cx - 20,
				ey: y.cy - 75
			}, {
				bx: y.cx + 80,
				by: y.cy - 10,
				ex: y.cx - 20,
				ey: y.cy + 45
			}]
		}), this.rg4 = new i(e, {
			points: [{
				position: {
					cx: b.cx,
					cy: b.cy
				},
				color: "#ff6e6e",
				size: 9,
				type: "large",
				link: u + "#/social/2/",
				font: {
					text: "新兴业务",
					color: "rgba(255,255,255,0.8)",
					dx: 10,
					dy: 5,
					fontSize: 13,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "新兴业务",
						value: "教育事业部|教育事业部-产品及研发部|教育事业部-运营部|教育事业部-商务部|智能云GTM部|云计算事业部|智能云物联网部|智能云技术二部|智能云GTM1部|智能云AI应用部|智能云事业部|智能云业务运营部|智能云技术一部|国际业务发展部|国际化产品研发中心（深圳）|国际化产品部|国际市场部"
					}]
				}
			}, {
				position: {
					cx: b.cx - 25,
					cy: b.cy - 65
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "教育",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "教育",
						value: "教育事业部|教育事业部-产品及研发部|教育事业部-运营部|教育事业部-商务部"
					}]
				}
			}, {
				position: {
					cx: b.cx + 55,
					cy: b.cy - 55
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "百度云",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "百度云",
						value: "智能云GTM部|云计算事业部|智能云物联网部|智能云技术二部|智能云GTM1部|智能云AI应用部|智能云事业部|智能云业务运营部|智能云技术一部"
					}]
				}
			}, {
				position: {
					cx: b.cx + 110,
					cy: b.cy - 25
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "国际化",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "国际化",
						value: "国际业务发展部|国际化产品研发中心（深圳）|国际化产品部|国际市场部"
					}]
				}
			}],
			lines: [{
				bx: b.cx,
				by: b.cy,
				ex: b.cx - 25,
				ey: b.cy - 65
			}, {
				bx: b.cx - 25,
				by: b.cy - 65,
				ex: b.cx + 55,
				ey: b.cy - 55
			}, {
				bx: b.cx + 55,
				by: b.cy - 55,
				ex: b.cx + 110,
				ey: b.cy - 25
			}, {
				bx: b.cx,
				by: b.cy,
				ex: b.cx + 55,
				ey: b.cy - 55
			}, {
				bx: b.cx,
				by: b.cy,
				ex: b.cx + 110,
				ey: b.cy - 25
			}]
		}), this.rg5 = new i(e, {
			points: [{
				position: {
					cx: w.cx,
					cy: w.cy
				},
				color: "#ff6e6e",
				size: 9,
				type: "large",
				link: u + "#/social/2/",
				target: "_blank",
				font: {
					text: "智能生活",
					color: "rgba(255,255,255,0.8)",
					dx: -20,
					dy: 20,
					fontSize: 13,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "智能生活",
						value: "度秘事业部|硬件生态渠道事业部"
					}]
				}
			}, {
				position: {
					cx: w.cx - 96,
					cy: w.cy + 20
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "度秘",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "度秘",
						value: "度秘事业部"
					}]
				}
			}, {
				position: {
					cx: w.cx + 56,
					cy: w.cy + 40
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "硬件生态",
					color: "",
					dx: 10,
					dy: 5,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "硬件生态",
						value: "硬件生态渠道事业部"
					}]
				}
			}],
			lines: [{
				bx: w.cx,
				by: w.cy,
				ex: w.cx - 96,
				ey: w.cy + 20
			}, {
				bx: w.cx,
				by: w.cy,
				ex: w.cx + 56,
				ey: w.cy + 40
			}, {
				bx: w.cx + 56,
				by: w.cy + 40,
				ex: w.cx - 96,
				ey: w.cy + 20
			}]
		}), this.rg6 = new i(e, {
			points: [{
				position: {
					cx: E.cx,
					cy: E.cy
				},
				color: "#fffd48",
				size: 9,
				type: "large",
				link: u + "#/social/2/",
				font: {
					text: "AI技术平台体系",
					color: "rgba(255,255,255,0.8)",
					dx: 10,
					dy: 5,
					fontSize: 13,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "AI技术平台体系",
						value: "地图运营管理部|地图质量部|百度地图开放平台|视觉技术部门|视觉技术部|自然语言处理部|语音技术部|语音产品创新实验室|知识图谱部|商业智能实验室|大数据实验室|深度学习研究院|增强现实实验室|深度学习实验室"
					}]
				}
			}, {
				position: {
					cx: E.cx + 20,
					cy: E.cy - 50
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "百度地图",
					color: "",
					dx: -20,
					dy: 17,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "百度地图",
						value: "地图运营管理部|地图质量部|百度地图开放平台"
					}]
				}
			}, {
				position: {
					cx: E.cx + 80,
					cy: E.cy - 70
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "计算机视觉",
					color: "",
					dx: -20,
					dy: 17,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "计算机视觉",
						value: "视觉技术部门|视觉技术部"
					}]
				}
			}, {
				position: {
					cx: E.cx + 170,
					cy: E.cy - 50
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "NLP",
					color: "",
					dx: -20,
					dy: 17,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "NLP",
						value: "自然语言处理部"
					}]
				}
			}, {
				position: {
					cx: E.cx + 200,
					cy: E.cy + 30
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "语音",
					color: "",
					dx: -20,
					dy: 17,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "语音",
						value: "语音技术部|语音产品创新实验室"
					}]
				}
			}, {
				position: {
					cx: E.cx + 120,
					cy: E.cy + 70
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "知识图谱",
					color: "",
					dx: -20,
					dy: 17,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "知识图谱",
						value: "知识图谱部"
					}]
				}
			}, {
				position: {
					cx: E.cx + 40,
					cy: E.cy + 70
				},
				color: "",
				size: 7,
				type: "small",
				link: u + "#/social/2/",
				font: {
					text: "百度研究院",
					color: "",
					dx: -20,
					dy: 17,
					fontSize: 10,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "百度研究院",
						value: "商业智能实验室|大数据实验室|深度学习研究院|增强现实实验室|深度学习实验室"
					}]
				}
			}],
			lines: [{
				bx: E.cx,
				by: E.cy,
				ex: E.cx + 20,
				ey: E.cy - 50
			}, {
				bx: E.cx,
				by: E.cy,
				ex: E.cx + 80,
				ey: E.cy - 70
			}, {
				bx: E.cx,
				by: E.cy,
				ex: E.cx + 170,
				ey: E.cy - 50
			}, {
				bx: E.cx,
				by: E.cy,
				ex: E.cx + 200,
				ey: E.cy + 30
			}, {
				bx: E.cx,
				by: E.cy,
				ex: E.cx + 120,
				ey: E.cy + 70
			}, {
				bx: E.cx,
				by: E.cy,
				ex: E.cx + 40,
				ey: E.cy + 70
			}, {
				bx: E.cx + 20,
				by: E.cy - 50,
				ex: E.cx + 80,
				ey: E.cy - 70
			}, {
				bx: E.cx + 80,
				by: E.cy - 70,
				ex: E.cx + 170,
				ey: E.cy - 50
			}, {
				bx: E.cx + 170,
				by: E.cy - 50,
				ex: E.cx + 200,
				ey: E.cy + 30
			}, {
				bx: E.cx + 200,
				by: E.cy + 30,
				ex: E.cx + 120,
				ey: E.cy + 70
			}, {
				bx: E.cx + 120,
				by: E.cy + 70,
				ex: E.cx + 40,
				ey: E.cy + 70
			}]
		}), this.rg8 = new i(e, {
			points: [{
				position: {
					cx: x.cx,
					cy: x.cy
				},
				color: "#48f0ff",
				size: 9,
				type: "large",
				link: a + "campus.html",
				target: "_blank",
				font: {
					text: "2020年百度校招",
					color: "rgba(255,255,255,0.8)",
					dx: 10,
					dy: 5,
					fontSize: 13,
					fontFamily: "Microsoft YaHei",
					textArr: [{
						text: "2020年百度校招",
						value: ""
					}]
				}
			}],
			lines: [],
			flashIndex: 0
		})
	}

	function l(e, t, n) {
		return e + t - Math.sqrt(Math.abs(t * t - n * n))
	}
	var i = n,
		s = {},
		o = window.location.href,
		u = o.split("#")[0],
		a = o.indexOf("index.html") !== -1 ? o.split("index.html")[0] : o.split("#")[0];
	return f.prototype.destroy = function() {
		this.rg1.destroy(), this.rg2.destroy(), this.rg3.destroy(), this.rg4.destroy(), this.rg8.destroy()
	}, {
		draw: function(t, n, s, o) {
			e.supported ? i.resetDrawer() : i = r, this.result = new f(t, n, s, o)
		},
		destroy: function() {
			this.result && this.result.destroy(), this.result = null
		}
	}
}), define("text!src/home-black/searchBox.tpl.html", [], function() {
	return '<div class="search-box-container">\n    <div class="search-box">\n        <div class="search-box-inner">\n            <div class="left-selection">\n                <a class="select-tag"> <label>\n                        社会招聘\n                    </label> <span class="angle"></span> </a>\n                <ul class="hide">\n                    <li>\n                        <a data-id="2">社会招聘</a>\n                    </li>\n                    <li>\n                        <a data-id="1">校园招聘</a>\n                    </li>\n                    <li>\n                        <a data-id="13">实习生招聘</a>\n                    </li>\n                    <li>\n                        <a data-id="12">Global talent</a>\n                    </li>\n                </ul>\n            </div>\n            <div class="middle-input">\n                <div>\n                    <input type="text" id="search-input">\n                </div>\n            </div>\n            <div class="right-button">\n                <a class="transition">百度一下</a>\n            </div>\n        </div>\n    </div>\n    <div class="search-tag footer">\n        <ul>\n            <li>\n                <a data-posttype="0/1227/10002">技术</a>\n                |\n            </li>\n            <li>\n                <a data-posttype="0/1227/37850530">产品</a>\n                |\n            </li>\n            <li>\n                <a data-posttype="0/1227/37850532">客户服务</a>\n                |\n            </li>\n            <li>\n                <a data-posttype="0/1227/73491299">市场与销售</a>\n                |\n            </li>\n            <li>\n                <a data-posttype="0/1227/73491301">管理支持</a>\n                |\n            </li>\n            <li>\n                <a data-posttype="0/1227/73491303">用户体验</a>\n            </li>\n        </ul>\n    </div>\n</div>'
}), define("src/home-black/homeView", ["backbone", "text!src/home-black/background.tpl.html", "underscore", "jquery",
	"./drawStar", "./drawCircle", "./drawSvg", "text!src/home-black/searchBox.tpl.html", "router", "siteData"
], function(e, t, n, r, i, s, o, u, a, f) {
	var l = "hide",
		c = "",
		h = "images/home/star-ignore.png",
		p = "angle-up",
		d = "#/social",
		v = window.location.href,
		m = v.indexOf("index.html") !== -1 ? v.split("index.html")[0] : v.split("#")[0],
		g = 1200,
		y = 1980,
		b = 926,
		w = 557,
		E = b,
		S = window.innerHeight,
		x = e.View.extend({
			tagName: "div",
			className: "home_view",
			template: t,
			events: {
				"mouseenter .left-selection": "showLeftMenu",
				"mouseleave .left-selection": "hideLeftMenu",
				"click .left-selection ul li": "setLocation",
				"click .right-button a": "searchJob",
				"click .search-tag ul li a": "toSocial",
				"keydown #search-input": "kSearch"
			},
			initialize: function() {
				c = new Image, c.src = h, this.circles = new s, this.WIN_WIDTH = window.innerWidth, this.WIN_HEIGHT = window.innerHeight
			},
			render: function() {
				var e = this,
					t = {},
					n;
				return this.$el = r(this.el), this.$el.html(this.template), this.canvasSupport() ? (this.$el.css({
					height: document.documentElement.clientHeight - 136 + "px"
				}), i.init(this.$el), t = this.$("#canvas")) : (this.$el.css({
					height: document.documentElement.clientHeight + "px"
				}), t = r('<div id="canvas"></div>'), n = r('<img src="images/home/star-bg-ignore.png" id="star-bg"/>'), n.css({
					height: "100%",
					width: this.WIN_HEIGHT
				}), t.append(n), this.$el.append(t)), t.append(this.circles.render().el), setTimeout(function() {
					o.draw(t[0], e.$(".c1"), e.$(".c2"), e.$(".c3"))
				}, 0), t.append(u), this.adjustStyle(), this
			},
			adjustStyle: function() {
				var e = window.innerHeight;
				E = b;
				var t = w / E,
					n = t * window.innerHeight,
					i = this,
					s = 50;
				this.$("#star-bg").css({
						height: e
					}), this.$("canvas").attr({
						width: window.innerWidth,
						height: window.innerHeight
					}), window.innerWidth < window.innerHeight && (E = y, t = w / E, n = t * window.innerWidth), n = n >= 375 ? n :
					375, n = n <= 557 ? n : 557, this.$(".search-box-container").css({
						width: n + "px",
						marginLeft: -n / 2,
						left: "50%"
					}), r(window).on("resize", function() {
						var e = Math.abs(i.WIN_WIDTH - window.innerWidth) > s || Math.abs(i.WIN_HEIGHT - window.innerHeight) > s;
						e && (i.timer = i.timer || setTimeout(function() {
							a.navigate("#/", {
								trigger: !0
							}), clearTimeout(i.timer)
						}, 100))
					})
			},
			showLeftMenu: function() {
				var e = this.$(".left-selection ul"),
					t = this.$(".angle");
				e.hasClass(l) && (e.removeClass(l), t.addClass(p))
			},
			hideLeftMenu: function(e) {
				var t = this.$(".angle"),
					n = ["div", "ul"];
				n.indexOf(r(e.target)[0].tagName.toLowerCase() !== -1) && (this.$(".left-selection ul").addClass(l), t.removeClass(
					p))
			},
			setLocation: function(e) {
				var t = r(e.target),
					n = t.attr("data-id"),
					i = t.text();
				this.recruitType = n, this.$(".select-tag label").text(i).attr("title", i)
			},
			searchJob: function() {
				var e;
				this.searchValue = this.$(".middle-input input").val();
				var t = this.recruitType = this.recruitType || 2;
				t = parseInt(t, 0);
				switch (t) {
					case 1:
						e = m + "campus.html#/jobList/social/searchModel/" + this.searchValue, window.open(e, "_blank");
						return;
					case 12:
						e = m + "index.html#/globalJob/All", this.searchValue && (e += "/" + this.searchValue), window.open(e,
							"_blank");
						return;
					case 13:
						e = "#/intern/12", this.searchValue && (e += "/" + this.searchValue);
						break;
					default:
						e = d, t && (e += "/" + t), this.searchValue && (e += "/" + this.searchValue)
				}
				a.navigate(e, {
					trigger: !0
				})
			},
			kSearch: function(e) {
				e.keyCode === 13 && this.searchJob()
			},
			toSocial: function(e) {
				var t = r(e.target),
					n = t.attr("data-postType");
				f.SOCIAL_PT = n, a.navigate(d)
			},
			canvasSupport: function() {
				return !!document.createElement("canvas").getContext
			},
			destroy: function() {
				r(window).off("resize"), i.destroy(), o.destroy(), this.circles.remove().off(), this.remove().off()
			}
		});
	return x
});
