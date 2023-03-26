(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[729], {
		74927: function(e, t, s) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/share/[uuid]", function() {
				return s(49398)
			}])
		},
		49398: function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, {
				__N_SSP: function() {
					return c
				}
			});
			var n = s(85893),
				i = s(67294),
				a = s(51448),
				r = s(91655),
				l = s(83792);
			let o = e => {
				let {
					chat: t,
					shareID: s
				} = e, [o, c] = (0, i.useState)("");
				(0, i.useEffect)(() => {
					c(new URLSearchParams(window.location.search).get("delete"))
				}, []);
				let d = async () => {
					window.confirm("Are you sure you want to delete this chat? This is not undoable.") && (await fetch("/api/share", {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							shareID: s,
							deleteToken: o
						})
					}), window.location.reload())
				};
				return (0, n.jsxs)("div", {
					children: [(0, n.jsx)(a.Z, {
						title: ((null == t ? void 0 : t.chatTitle) || "Not Found") + " - AI Chat via TypingMind.com",
						description: null == t ? void 0 : t.messages.slice(0, 5).filter(e => "system" !== e.role).map(e => {
							var t;
							return [(t = e.role).charAt(0).toUpperCase() + t.slice(1) + ":", e.content].join(" ")
						}).join(" ")
					}), t ? (0, n.jsx)("div", {
						className: "sticky top-0 z-10 bg-white backdrop-blur",
						children: (0, n.jsx)(r.Z, {
							chatTitle: t.chatTitle,
							messages: t.messages
						})
					}) : null, (0, n.jsxs)("div", {
						className: "flex items-center justify-center space-x-2 pt-10",
						children: [(0, n.jsx)("img", {
							src: "/logo.png",
							alt: "Typing Mind",
							className: "rounded-lg w-8 h-8"
						}), (0, n.jsxs)("a", {
							href: "https://www.typingmind.com",
							className: "font-semibold text-xl",
							children: ["Typing", (0, n.jsx)("span", {
								className: "text-blue-500",
								children: "Mind"
							})]
						})]
					}), (0, n.jsx)("div", {
						className: "text-center my-4 font-light text-base my-4",
						children: "A better UI for ChatGPT"
					}), o ? (0, n.jsx)("div", {
						className: "max-w-2xl mx-auto",
						children: (0, n.jsx)("div", {
							className: "flex justify-center space-x-4 my-10",
							children: (0, n.jsx)("button", {
								className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap",
								onClick: d,
								children: "Delete This Chat"
							})
						})
					}) : null, t ? (0, n.jsxs)(n.Fragment, {
						children: [(0, n.jsx)("div", {
							className: "max-w-2xl mx-auto w-full pb-10",
							children: t.messages.map((e, s) => (0, n.jsx)("div", {
								className: "px-4 rounded-lg mb-2",
								children: (0, n.jsx)(l.Z, {
									model: null == t ? void 0 : t.model,
									message: e,
									showActions: !1
								})
							}, s))
						}), (0, n.jsx)("div", {
							className: "py-10 text-center text-xs text-gray-500",
							children: "End of Chat"
						}), (0, n.jsx)("div", {
							className: "py-10 text-center text-xs text-gray-500",
							children: (0, n.jsx)("a", {
								href: "https://www.typingmind.com?continue=" + s,
								className: "inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
								children: "→ Continue this chat on TypingMind.com"
							})
						})]
					}) : (0, n.jsx)("div", {
						className: "py-4 text-center text-lg",
						children: "Chat Not Found"
					})]
				})
			};
			var c = !0;
			t.default = o
		}
	},
	function(e) {
		e.O(0, [445, 617, 556, 266, 957, 774, 888, 179], function() {
			return e(e.s = 74927)
		}), _N_E = e.O()
	}
]);