(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[888], {
		91118: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
				return n(15493)
			}])
		},
		4510: function(e, t, n) {
			"use strict";
			n.d(t, {
				NZ: function() {
					return c
				},
				ZP: function() {
					return d
				},
				yZ: function() {
					return i
				}
			});
			var r = n(85893),
				u = n(67294);
			let i = {
					OK: "OK",
					SLOW: "SLOW",
					ERROR: "ERROR"
				},
				o = (0, u.createContext)(),
				c = () => (0, u.useContext)(o);

			function d(e) {
				let {
					children: t
				} = e, [n, c] = (0, u.useState)(i.OK), d = (0, u.useMemo)(() => ({
					openAIStatus: n,
					setOpenAIStatus: c
				}), [n]);
				return (0, r.jsx)(o.Provider, {
					value: d,
					children: t
				})
			}
		},
		15493: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				default: function() {
					return s
				}
			});
			var r = n(85893);
			n(82488);
			var u = n(67294),
				i = () => {
					window.va || (window.va = function(...e) {
						(window.vaq = window.vaq || []).push(e)
					})
				},
				o = (e = {
					debug: !0
				}) => {
					var t;
					if (!("undefined" != typeof window)) return;
					let n = function(e = "auto") {
						return "auto" === e ? ! function() {
							try {
								return !1
							} catch (e) {
								return !1
							}
						}() ? "production" : "development" : e
					}(e.mode);
					i(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
					let r = "development" === n ? "https://cdn.vercel-insights.com/v1/script.debug.js" : "/_vercel/insights/script.js";
					if (document.head.querySelector(`script[src*="${r}"]`)) return;
					let u = document.createElement("script");
					u.src = r, u.defer = !0, u.setAttribute("data-sdkn", "@vercel/analytics"), u.setAttribute("data-sdkv", "0.1.11"), "development" === n && !1 === e.debug && u.setAttribute("data-debug", "false"), document.head.appendChild(u)
				};

			function c({
				beforeSend: e,
				debug: t = !0,
				mode: n = "auto"
			}) {
				return (0, u.useEffect)(() => {
					o({
						beforeSend: e,
						debug: t,
						mode: n
					})
				}, [e, t, n]), null
			}
			var d = n(4510),
				s = function(e) {
					let {
						Component: t,
						pageProps: n
					} = e;
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(d.ZP, {
							children: (0, r.jsx)(t, {
								...n
							})
						}), (0, r.jsx)(c, {})]
					})
				}
		},
		82488: function() {}
	},
	function(e) {
		var t = function(t) {
			return e(e.s = t)
		};
		e.O(0, [774, 179], function() {
			return t(91118), t(90387)
		}), _N_E = e.O()
	}
]);