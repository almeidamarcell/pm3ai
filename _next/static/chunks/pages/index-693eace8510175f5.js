(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405], {
		75557: function(e, t, s) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return s(36365)
			}])
		},
		36365: function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, {
				default: function() {
					return eL
				}
			});
			var n = s(85893),
				r = s(51448),
				i = s(24461),
				l = s(67294),
				a = s(64597),
				o = s(14364);

			function c(e) {
				let {
					setChats: t,
					wait: s = 5e3,
					showCoruptedMessage: r = !0,
					emptyMessage: i = () => null
				} = e, [c, d] = (0, l.useState)([]);
				return (0, l.useEffect)(() => {
					let e = setTimeout(() => {
						console.log("ChatsCoruptCheck");
						let e = (0, o.FW)((0, a.NW)().filter(e => e.startsWith("CHAT_")).map(e => {
							try {
								return JSON.parse((0, a.cF)().getItem(e))
							} catch (e) {
								console.error(e)
							}
						}).filter(Boolean));
						d(e)
					}, s);
					return () => {
						clearTimeout(e)
					}
				}, []), c.length ? (0, n.jsxs)("div", {
					className: "m-2 p-2 bg-yellow-500 text-black rounded-lg text-xs space-y-2 max-w-xs mx-auto text-center",
					children: [(0, n.jsxs)("div", {
						children: [r ? "Hmm... it seems like your chats are corrupted. " : "", "We found ", (0, n.jsx)("b", {
							children: c.length
						}), " chats that we were able to restore."]
					}), (0, n.jsx)("div", {
						className: "text-center",
						children: (0, n.jsx)("button", {
							onClick: () => t(c),
							type: "button",
							className: "rounded-full border border-blue-500 px-3 py-1 text-sm my-0 hover:bg-blue-600 transition-all space-x-1 bg-blue-500 text-white",
							children: "Restore Now"
						})
					})]
				}) : i()
			}
			var d = s(96907),
				u = s(87260);
			let h = "Something went wrong. Please try again.";

			function x(e) {
				let {
					children: t
				} = e, [s, r] = (0, l.useState)(!1), [a, o] = (0, l.useState)(!1), [c, d] = (0, l.useState)(""), [x, m] = (0, l.useState)(null);
				(0, l.useEffect)(() => {
					let e = new URLSearchParams(window.location.search),
						t = e.get("continue");
					t ? (setTimeout(() => {
						window.history.replaceState({}, document.title, "/")
					}, 1e3), f(t), r(!0)) : m([])
				}, []);
				let f = async e => {
					o(!0), d("");
					try {
						await new Promise(e => setTimeout(e, 2e3));
						let t = await fetch("https://www.typingmind.com/api/share?id=" + e, {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						});
						if (t.status >= 400) {
							let e = await t.json();
							d(e.userMessage || h), o(!1), m([]);
							return
						}
						if (!t.ok) {
							d(h), o(!1), m([]);
							return
						}
						let s = await t.json();
						m(s.messages)
					} catch (e) {
						d(h), m([]), console.error(e)
					}
					o(!1), r(!1)
				};
				return (0, n.jsxs)(n.Fragment, {
					children: [null !== x ? t({
						defaultMessages: x
					}) : null, (0, n.jsx)(u.Z, {
						open: s,
						setOpen: r,
						showCloseButton: !1,
						children: (0, n.jsxs)("div", {
							className: "my-4 text-center",
							children: [a ? (0, n.jsxs)("div", {
								className: "flex items-center justify-center gap-2 my-4",
								children: [(0, n.jsx)(i.Z, {}), (0, n.jsx)("h2", {
									className: "text-center text-xl font-bold",
									children: "Loading Chat..."
								})]
							}) : null, c && (0, n.jsx)("div", {
								className: "text-red-500",
								children: c
							})]
						})
					})]
				})
			}
			var m = s(83991);
			let f = (0, a.eK)("useExampleFilled");

			function p(e) {
				let {
					onLoaded: t
				} = e, [s, n] = f(!1);
				return (0, l.useEffect)(() => {
					setTimeout(() => {
						try {
							if (s) return;
							let e = JSON.parse((0, a.cF)().getItem("TM_useChatList") || "[]");
							if (e.length > 0) return;
							m.f.forEach(e => {
								(0, a.cF)().setItem("CHAT_" + e.chatID, JSON.stringify(e))
							});
							let r = (0, o.FW)(m.f);
							(0, a.cF)().setItem("TM_useChatList", JSON.stringify(r)), n(!0), t && t()
						} catch (e) {
							console.error(e)
						}
					}, 3e3)
				}, []), null
			}
			var g = s(39590),
				y = s(55623),
				b = s(41908);
			let j = (0, a.eK)("useDismissMacWarning");

			function v() {
				let [e, t] = j(!1), [s, r] = (0, l.useState)(!1);
				return (0, l.useEffect)(() => {
					!e && window.navigator.userAgent.includes("TypingMindMac") && r(!0)
				}, []), (0, n.jsxs)(u.Z, {
					open: s,
					setOpen: r,
					showCloseButton: !1,
					children: [(0, n.jsx)("h2", {
						className: "text-center text-xl font-bold flex items-center justify-center space-x-2",
						children: (0, n.jsx)("span", {
							children: "Known Issues in macOS app:"
						})
					}), (0, n.jsx)("div", {
						className: "my-2 text-center text-xs",
						children: "Welcome to using TypingMind on macOS! Please be informed about the following known issues in the macOS app. We are working hard to improve the app every day!"
					}), (0, n.jsxs)("ul", {
						className: "my-4 pl-4 list-disc",
						children: [(0, n.jsx)("li", {
							children: "Chats Export/Import is not supported."
						}), (0, n.jsx)("li", {
							children: "Updating user's profile picture is not supported."
						}), (0, n.jsx)("li", {
							children: "Domain Check Integration is not supported"
						}), (0, n.jsx)("li", {
							children: "Voice input is not supported."
						}), (0, n.jsx)("li", {
							children: "PDF export is not supportd."
						})]
					}), (0, n.jsxs)("div", {
						className: "my-2 text-center gap-2 flex items-center justify-center",
						children: [(0, n.jsx)("button", {
							onClick: () => r(!1),
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
							children: (0, n.jsx)("span", {
								children: "Got it!"
							})
						}), (0, n.jsx)("button", {
							onClick: () => {
								t(!0), r(!1)
							},
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 space-x-1 disabled:bg-gray-500",
							children: (0, n.jsx)("span", {
								children: "Don't show again"
							})
						})]
					})]
				})
			}
			var w = s(60155);

			function N(e) {
				let {
					open: t,
					setOpen: s,
					setOpenLicenseKey: r,
					setOpenBuy: i
				} = e, [a, o] = (0, l.useState)(5);
				(0, l.useEffect)(() => {
					t && c()
				}, [t]);
				let c = async () => {
					for (let e = 10; e >= 0; e--) o(e), await new Promise(e => setTimeout(e, 1e3))
				};
				return (0, n.jsxs)(u.Z, {
					wide: !0,
					open: t,
					setOpen: e => {
						0 === a && s(e)
					},
					showCloseButton: !1,
					children: [(0, n.jsx)("h2", {
						className: "text-center text-xl font-bold",
						children: "\uD83D\uDCA1 A Quick Reminder:"
					}), (0, n.jsxs)("p", {
						className: "my-4 text-sm",
						children: [(0, n.jsx)("b", {
							children: "TypingMind Beta"
						}), " is ending soon! To continue using the app with all the premium features, you need to enter a license key."]
					}), (0, n.jsxs)("div", {
						className: "my-4 text-center flex items-center justify-center flex-wrap gap-2",
						children: [(0, n.jsx)("button", {
							onClick: () => {
								0 === a && s(!1), setTimeout(() => {
									i(!0)
								}, 1)
							},
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 space-x-1 disabled:bg-gray-500",
							children: (0, n.jsx)("span", {
								children: " → Buy a License Key"
							})
						}), (0, n.jsxs)("button", {
							onClick: () => {
								0 === a && s(!1), setTimeout(() => {
									r(!0)
								}, 1)
							},
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
							children: [(0, n.jsx)(w.itj, {
								className: "w-4 h-4"
							}), (0, n.jsx)("span", {
								children: "Enter License Key"
							})]
						})]
					}), (0, n.jsx)("div", {
						className: "mt-4 text-center flex items-center justify-center space-x-2",
						children: (0, n.jsx)("button", {
							onClick: () => s(!1),
							disabled: a > 0,
							className: "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-800 dark:text-zinc-100 dark:disabled:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:text-gray-400",
							children: (0, n.jsxs)("span", {
								children: ["I'll do it later", a > 0 ? " (".concat(a, ")") : ""]
							})
						})
					})]
				})
			}(0, a.eK)("useLicenseKey");
			var k = s(54426);

			function C() {
				let [e, t] = (0, l.useState)(null);
				return (0, l.useEffect)(() => {
					var e = 0;
					for (var s in localStorage) localStorage.hasOwnProperty(s) && (e += localStorage.getItem(s).length, s.substring(0, 5));
					var n = 5242880 - e;
					t({
						usagePercentage: (e / 5242880 * 100).toFixed(2),
						usedSpace: e,
						totalSpace: 5242880,
						availableSpace: n
					})
				}, []), (0, n.jsxs)("div", {
					children: [(0, n.jsx)("h3", {
						className: "text-xl font-bold",
						children: "Local Storage"
					}), e ? (0, n.jsxs)("div", {
						className: "my-4",
						children: [(0, n.jsx)("div", {
							className: "my-2 h-6 w-full bg-green-500 rounded-lg overflow-hidden relative",
							children: (0, n.jsx)("div", {
								style: {
									width: "".concat(e.usedSpace / e.totalSpace * 100, "%")
								},
								className: "h-6 w-full bg-red-500 absolute top-0 left-0 bottom-0"
							})
						}), (0, n.jsxs)("div", {
							className: "flex items-center justify-between ",
							children: [(0, n.jsxs)("div", {
								children: ["Used: ", (0, n.jsx)("b", {
									children: (e.usedSpace / 1024).toFixed(2) + " KB"
								}), " (", e.usagePercentage, "%)"]
							}), (0, n.jsxs)("div", {
								children: ["Available:", " ", (0, n.jsx)("b", {
									children: (e.availableSpace / 1024).toFixed(2) + " KB"
								}), " "]
							})]
						})]
					}) : null]
				})
			}
			s(34339);
			var S = s(8193),
				T = s(67266),
				O = s.n(T);
			let A = "Something went wrong. Please try again.",
				I = (0, a.eK)("useUserPrompts"),
				E = (0, a.eK)("useFolderList"),
				D = (0, a.eK)("useChatsInFolder");

			function L(e) {
				let {
					open: t,
					setOpen: s,
					chats: r,
					setChats: i
				} = e, [d, h] = I([]), [x, m] = (0, l.useState)({
					chats: [],
					folders: [],
					chatsInFolder: {},
					userPrompts: []
				}), [f, p] = E([]), [g, y] = D({}), [b, j] = (0, l.useState)(0), [v, w] = (0, l.useState)(!1);
				(0, l.useEffect)(() => {
					if (t) {
						let e = r.map(e => JSON.parse((0, a.cF)().getItem("CHAT_" + e.id)));
						m({
							chats: e,
							folders: f,
							chatsInFolder: g,
							userPrompts: d
						})
					}
				}, [r, t, f, g]);
				let N = () => {
						if (0 === x.chats.length && 0 === x.folders.length && 0 === x.userPrompts.length) {
							window.alert("Nothing to export.");
							return
						}
						let e = O()(x),
							t = (0, o.M)(e),
							s = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
								checksum: t,
								data: x
							})),
							n = document.createElement("a");
						n.setAttribute("href", s), n.setAttribute("download", "typingmind-chats-".concat(Date.now(), ".json")), document.body.appendChild(n), n.click(), n.remove()
					},
					k = () => {
						let e = document.createElement("input");
						e.type = "file", e.accept = "application/json", e.onchange = e => {
							let t = e.target.files[0],
								s = new FileReader;
							s.onload = e => {
								let t = e.target.result;
								try {
									let e = JSON.parse(t);
									T(e)
								} catch (e) {
									console.error(e), alert(A)
								}
							}, s.readAsText(t)
						}, e.click()
					},
					T = e => {
						try {
							var t, s, n, l, c, u, x, m, g, b, j;
							if (!e.checksum || !(e.data || e.chats)) {
								window.alert("This is not a valid archive file or it has been corupted.");
								return
							}
							let v = (0, o.M)(O()(e.data || e.chats));
							if (v !== e.checksum) {
								window.alert("This archive file has been corrupted. Please try again or contact support.");
								return
							}
							let w = e.data || {
								chats: e.chats
							};
							if (!(null === (t = w.chats) || void 0 === t ? void 0 : t.length) && !(null === (s = w.folders) || void 0 === s ? void 0 : s.length) && !(null === (n = w.userPrompts) || void 0 === n ? void 0 : n.length)) {
								window.alert("This archive file is empty.");
								return
							}
							let N = [];
							if ((null === (l = w.userPrompts) || void 0 === l ? void 0 : l.length) > 0 && N.push("".concat(w.userPrompts.length, " ").concat(1 === w.userPrompts.length ? "prompt" : "prompts", " ")), (null === (c = w.folders) || void 0 === c ? void 0 : c.length) > 0 && N.push("".concat(w.folders.length, " ").concat(1 === w.folders.length ? "folder" : "folders")), (null === (u = w.chats) || void 0 === u ? void 0 : u.length) > 0 && N.push("".concat(w.chats.length, " ").concat(1 === w.chats.length ? "chat" : "chats")), N.length > 0 && !window.confirm("Importing new ".concat(N.join(", "), ". Are you sure?"))) return;
							w.chats.forEach(e => {
								(0, a.cF)().setItem("CHAT_" + e.chatID, JSON.stringify(e))
							});
							let k = (0, o.FW)(w.chats),
								C = [...k, ...r],
								S = C.filter((e, t, s) => t === s.findIndex(t => t.chatID === e.chatID));
							i(S);
							let T = [];
							if (null === (x = w.folders) || void 0 === x ? void 0 : x.length) {
								let e = {};
								f.forEach(t => {
									e[t.id] = t
								}), w.folders.forEach(t => {
									e[t.id] = t
								}), T = Object.values(e), p(T)
							}
							y(e => ({
								...e,
								...w.chatsInFolder || {}
							}));
							let A = [];
							if (null === (m = w.userPrompts) || void 0 === m ? void 0 : m.length) {
								let e = {};
								d.forEach(t => {
									e[t.id] = t
								}), w.userPrompts.forEach(t => {
									e[t.id] = t
								}), A = Object.values(e), h(A)
							}
							let I = [],
								E = [];
							(null === (g = w.userPrompts) || void 0 === g ? void 0 : g.length) && (I.push("".concat(w.userPrompts.length, " prompts")), E.push("".concat(A.length, " prompts"))), (null === (b = w.folders) || void 0 === b ? void 0 : b.length) && (I.push("".concat(w.folders.length, " folders")), E.push("".concat(T.length, " folders"))), (null === (j = w.chats) || void 0 === j ? void 0 : j.length) && (I.push("".concat(w.chats.length, " chats")), E.push("".concat(S.length, " chats"))), alert("Imported " + I.join(", ") + ". You now have " + E.join(", ") + " on this device. TypingMind will restart now."), window.location.reload()
						} catch (e) {
							console.error(e), alert(A)
						}
					},
					L = x.chats.reduce((e, t) => {
						var s;
						return e + ((null == t ? void 0 : null === (s = t.messages) || void 0 === s ? void 0 : s.length) || 0)
					}, 0),
					P = [];
				return d.length > 0 && P.push("<b>".concat(d.length, " saved prompt").concat(1 === d.length ? "" : "s", "</b>")), f.length > 0 && P.push("<b>".concat(f.length, " folder").concat(1 === f.length ? "" : "s", "</b>")), P.push("<b> ".concat(r.length, " chat").concat(1 === r.length ? "" : "s", "</b>\nwith <b> ").concat(L, " message").concat(1 === L ? "" : "s", "</b> on this device.")), (0, n.jsxs)(u.Z, {
					wide: !0,
					open: t,
					setOpen: s,
					showCloseButton: !1,
					delayMount: !0,
					children: [(0, n.jsx)("h2", {
						onClick: () => {
							j(b + 1)
						},
						className: "text-center text-xl font-bold",
						children: "App Settings"
					}), (0, n.jsx)("hr", {
						className: "my-4"
					}), (0, n.jsxs)("div", {
						children: [(0, n.jsx)("h3", {
							className: "text-xl font-bold",
							children: "All Data"
						}), (0, n.jsx)("div", {
							className: "my-4",
							dangerouslySetInnerHTML: {
								__html: "You have " + P.join(", ")
							}
						}), (0, n.jsxs)("div", {
							className: "my-4 flex items-center justify-center flex-wrap gap-2",
							children: [(0, n.jsxs)("button", {
								onClick: N,
								type: "button",
								className: "inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors",
								children: [(0, n.jsx)(S.r2j, {
									className: "w-4 h-4 mr-2"
								}), (0, n.jsx)("span", {
									children: "Export"
								})]
							}), (0, n.jsxs)("button", {
								type: "button",
								onClick: k,
								className: "inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors",
								children: [(0, n.jsx)(S.cX4, {
									className: "w-4 h-4 mr-2"
								}), (0, n.jsx)("span", {
									children: "Import"
								})]
							}), (0, n.jsxs)("button", {
								type: "button",
								onClick: () => w(!0),
								className: "inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-400 disabled:cursor-default transition-colors",
								children: [(0, n.jsx)(S.wg8, {
									className: "w-4 h-4 mr-2"
								}), (0, n.jsx)("span", {
									children: "Recover Lost Data"
								})]
							})]
						})]
					}), v ? (0, n.jsxs)("div", {
						className: "my-4",
						children: [(0, n.jsx)("div", {
							className: "text-xs text-gray-500 my-4",
							children: "If your chats are not showing up, you can try to recover them here. This will find all of the existing chats available in your local storage and recover them. Usually, you don't need to do this, but in some extreme case where there is a browser bug, or TypingMind's storage is corupted by a other browser extensions, you can try to recover your chats here."
						}), (0, n.jsx)(c, {
							wait: 0,
							setChats: e => {
								i(e), window.location.reload()
							},
							showCoruptedMessage: !1,
							emptyMessage: () => (0, n.jsx)("div", {
								className: "text-base font-semibold p-4",
								children: "No data found on this device"
							})
						})]
					}) : null, b >= 10 && (0, n.jsx)(C, {})]
				})
			}
			let P = (0, a.eK)("useLicenseKey"),
				K = "Something went wrong. Please try again.";

			function F(e) {
				let {
					open: t,
					setOpen: s,
					setOpenBuy: r,
					setLicenseVerified: a
				} = e, [o, c] = P(""), [d, h] = (0, l.useState)(""), [x, m] = (0, l.useState)(!1), [f, p] = (0, l.useState)(""), [g, y] = (0, l.useState)(!0), b = (0, l.useRef)();
				(0, l.useEffect)(() => {
					o ? y(!0) : y(!1)
				}, []), (0, l.useEffect)(() => {
					t && (p(""), o ? y(!0) : y(!1), h(""), setTimeout(() => {
						var e;
						null === (e = b.current) || void 0 === e || e.focus()
					}, 700))
				}, [t]), (0, l.useEffect)(() => {
					h(o)
				}, [o]);
				let j = async () => {
					if ("" === d) {
						c(""), s(!1), a(!1);
						return
					}
					try {
						m(!0), p("");
						let e = await fetch("https://www.typingmind.com/api/license", {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								key: d
							})
						});
						if (500 === e.status) {
							await e.json(), p("Could not connect to Licenes Server. Please try again later."), m(!1);
							return
						}
						if (e.status >= 400) {
							let t = await e.json();
							p(t.userMessage || K), m(!1);
							return
						}
						if (!e.ok) {
							p(K), m(!1);
							return
						}
						await e.json(), c(d), s(!1), a(!0)
					} catch (e) {
						console.error(e), p(K)
					}
					m(!1)
				};
				return (0, n.jsxs)(u.Z, {
					open: t,
					setOpen: s,
					showCloseButton: !1,
					children: [(0, n.jsx)("h2", {
						className: "text-center text-xl font-bold",
						children: "Enter License Key"
					}), (0, n.jsxs)("p", {
						className: "my-2 text-sm",
						children: ["Enter ", (0, n.jsx)("b", {
							children: "Typing Mind License Key"
						}), " to unlock all premium features."]
					}), (0, n.jsx)("div", {
						className: "my-4 z-100 relative",
						children: g ? (0, n.jsxs)("div", {
							className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700 text-right flex items-center justify-end gap-4",
							children: [(0, n.jsxs)("span", {
								children: ["**************************", o.slice(-4)]
							}), (0, n.jsx)("button", {
								onClick: () => {
									y(!1), h(""), setTimeout(() => {
										var e;
										null === (e = b.current) || void 0 === e || e.focus()
									}, 100)
								},
								className: "text-blue-500 hover:underline",
								children: "Change Key"
							})]
						}) : (0, n.jsx)("input", {
							type: "text",
							ref: b,
							disabled: x,
							placeholder: "Enter your license key here",
							className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
							value: d,
							onChange: e => h(e.target.value),
							onKeyDown: e => {
								"Enter" === e.key && (e.preventDefault(), j())
							}
						})
					}), (0, n.jsxs)("p", {
						className: "my-2 text-sm",
						children: ["Don't have one?", " ", (0, n.jsx)("button", {
							onClick: () => {
								s(!1), setTimeout(() => {
									r(!0)
								}, 500)
							},
							className: "text-blue-500 hover:underline",
							children: "→ Buy A License Key"
						})]
					}), (0, n.jsxs)("p", {
						className: "my-2 text-sm",
						children: ["Lost your license key? →", " ", (0, n.jsx)("a", {
							className: "text-blue-500 hover:underline",
							href: "https://app.lemonsqueezy.com/my-orders/",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Recover License Key"
						})]
					}), f && (0, n.jsx)("div", {
						className: "my-2 text-sm text-red-500 text-center",
						children: f
					}), (0, n.jsx)("div", {
						className: "my-4 text-center flex items-center justify-center space-x-2",
						children: (0, n.jsxs)("button", {
							disabled: x,
							onClick: j,
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
							children: [x ? (0, n.jsx)(i.Z, {}) : (0, n.jsx)(S.bzc, {
								className: "w-4 h-4"
							}), (0, n.jsx)("span", {
								children: "Activate License"
							})]
						})
					}), (0, n.jsx)("p", {
						className: "my-2 text-xs",
						children: "The app will connect to TypingMind.com license server to verify your license key."
					})]
				})
			}
			let _ = (0, a.eK)("useLicenseKey");

			function B(e) {
				let {
					open: t,
					setOpen: s,
					setOpenLicenseKey: r
				} = e, [i, l] = _("");
				return (0, n.jsxs)(u.Z, {
					wide: !0,
					open: t,
					setOpen: s,
					showCloseButton: !1,
					children: [(0, n.jsxs)("h2", {
						className: "text-center text-2xl font-bold flex items-center justify-center space-x-2",
						children: [(0, n.jsx)(S.WYw, {
							className: "h-8 w-8 text-red-500",
							"aria-hidden": "true"
						}), (0, n.jsx)("span", {
							children: "One Time Purchase"
						})]
					}), (0, n.jsx)(b.Z, {}), (0, n.jsx)("div", {
						className: "flex items-center justify-center",
						children: (0, n.jsxs)("div", {
							className: "my-4 grid gap-y-2 gap-x-6",
							children: [(0, n.jsxs)("div", {
								className: "flex items-center justify-start space-x-1",
								children: [(0, n.jsx)(S.mny, {
									className: "text-green-500 w-6 h-6 shrink-0"
								}), (0, n.jsxs)("div", {
									className: "text-sm",
									children: [(0, n.jsx)("div", {
										children: "Unlock All Features"
									}), (0, n.jsx)("div", {
										className: "text-xs text-gray-500",
										children: "Search, AI characters, prompt library, etc."
									})]
								})]
							}), (0, n.jsxs)("div", {
								className: "flex items-center justify-start space-x-1",
								children: [(0, n.jsx)(S.mny, {
									className: "text-green-500 w-6 h-6 shrink-0"
								}), (0, n.jsxs)("div", {
									className: "text-sm",
									children: [(0, n.jsx)("div", {
										children: "Unlimited Integrations"
									}), (0, n.jsx)("div", {
										className: "text-xs text-gray-500",
										children: "Domain check, Codepen, code highlighting, etc."
									})]
								})]
							}), (0, n.jsxs)("div", {
								className: "flex items-center justify-start space-x-1",
								children: [(0, n.jsx)(S.mny, {
									className: "text-green-500 w-6 h-6 shrink-0"
								}), (0, n.jsxs)("div", {
									className: "text-sm",
									children: [(0, n.jsxs)("div", {
										children: ["MacOS App (", (0, n.jsx)("a", {
											className: "text-blue-500 hover:underline text-xs",
											target: "_blank",
											href: "https://twitter.com/tdinh_me/status/1634111496421793792",
											children: "View Demo"
										}), ")"]
									}), (0, n.jsxs)("div", {
										className: "text-xs text-gray-500",
										children: ["Maximum convenience (macOS 11.3+)", " "]
									})]
								})]
							}), (0, n.jsxs)("div", {
								className: "flex items-center justify-start space-x-1",
								children: [(0, n.jsx)(S.mny, {
									className: "text-green-500 w-6 h-6 shrink-0"
								}), (0, n.jsxs)("div", {
									className: "text-sm",
									children: [(0, n.jsxs)("div", {
										children: ["Self-host Option", " ", (0, n.jsx)("a", {
											className: "text-blue-500 hover:underline text-xs",
											target: "_blank",
											href: "/self-host-faqs",
											children: "(Learn More)"
										})]
									}), (0, n.jsx)("div", {
										className: "text-xs text-gray-500",
										children: "Host the static app on your own domain"
									})]
								})]
							})]
						})
					}), (0, n.jsx)("div", {
						className: "text-xs text-center my-2",
						children: "Note: You still need an OpenAI API key to use the app. We don't sell API keys."
					}), (0, n.jsx)("div", {
						className: "my-2 text-center",
						children: i ? (0, n.jsxs)("div", {
							className: "text-sm text-center my-2",
							children: [(0, n.jsx)("div", {
								className: "text-green-500 font-bold",
								children: "Thank you for your purchase!"
							}), (0, n.jsxs)("div", {
								className: "text-gray-500",
								children: ["Your license key is: ", (0, n.jsxs)("code", {
									children: ["***", i.slice(0, 5)]
								}), " ", (0, n.jsx)("button", {
									onClick: () => {
										s(!1), setTimeout(() => {
											r(!0)
										}, 500)
									},
									className: "text-blue-500 hover:underline inline-block",
									children: "(change)"
								})]
							})]
						}) : (0, n.jsx)("button", {
							onClick: () => {
								s(!1), setTimeout(() => {
									r(!0)
								}, 500)
							},
							className: "text-blue-500 hover:underline",
							children: "I already bought a license"
						})
					}), (0, n.jsx)("div", {
						className: "my-4 text-center",
						children: (0, n.jsxs)("a", {
							href: "https://tdinh.lemonsqueezy.com/checkout/buy/4e8d7ea3-0e9e-45b1-bf62-058ade690553",
							className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-green-500 transition-all group",
							children: [(0, n.jsx)("span", {
								className: "group-hover:scale-125 transition-all mr-2",
								children: "→"
							}), " ", i ? "Buy Another" : "Buy Now"]
						})
					}), (0, n.jsx)("div", {
						className: "my-4 text-center",
						children: (0, n.jsxs)("a", {
							href: "https://tdinh.lemonsqueezy.com/checkout/buy/149502c9-ff37-4a51-85b2-cce01e541c52",
							target: "_blank",
							className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-cyan-500 transition-all group",
							children: [(0, n.jsx)("span", {
								className: "group-hover:scale-125 transition-all mr-2",
								children: "→"
							}), " ", "Buy Team License (10 users) – $195"]
						})
					}), (0, n.jsx)("div", {
						className: "my-4 text-center",
						children: (0, n.jsxs)("a", {
							href: "https://tdinh.lemonsqueezy.com/checkout/buy/fa7b7e2d-0fa3-475e-9360-06850b7e22cf",
							target: "_blank",
							className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-cyan-500 transition-all group",
							children: [(0, n.jsx)("span", {
								className: "group-hover:scale-125 transition-all mr-2",
								children: "→"
							}), " ", "Buy Team License (50 users) – $650"]
						})
					}), (0, n.jsx)("div", {
						className: "my-4 text-center",
						children: (0, n.jsxs)("a", {
							href: "/whitelabel",
							target: "_blank",
							className: "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-cyan-500 transition-all group",
							children: [(0, n.jsx)("span", {
								className: "group-hover:scale-125 transition-all mr-2",
								children: "→"
							}), " ", "Buy Custom Branding (NEW!) – $49"]
						})
					}), (0, n.jsxs)("div", {
						className: "text-xs text-gray-500 text-center my-4",
						children: [(0, n.jsx)("a", {
							target: "_blank",
							href: "/privacy",
							children: "Privacy Policy"
						}), " | ", (0, n.jsx)("a", {
							target: "_blank",
							href: "/terms",
							children: "Terms of Service"
						})]
					}), (0, n.jsx)("div", {
						className: "mt-8 px-4 flex items-center justify-center",
						children: (0, n.jsx)("a", {
							href: "https://www.producthunt.com/posts/typing-mind?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-typing-mind",
							target: "_blank",
							children: (0, n.jsx)("img", {
								src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=383464&theme=light",
								alt: "Typing Mind - A better UI for ChatGPT | Product Hunt",
								style: {
									width: "250px",
									height: "54px"
								},
								width: 250,
								height: 54
							})
						})
					}), (0, n.jsx)("div", {
						className: "mt-2 px-4 flex items-center justify-center",
						children: (0, n.jsx)("a", {
							href: "https://www.producthunt.com/posts/typing-mind?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-typing-mind",
							target: "_blank",
							children: (0, n.jsx)("img", {
								src: "https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=383464&theme=light&period=daily",
								alt: "Typing Mind - A better UI for ChatGPT | Product Hunt",
								style: {
									width: "250px",
									height: "54px"
								},
								width: 250,
								height: 54
							})
						})
					}), (0, n.jsx)("div", {
						className: "mt-8",
						children: (0, n.jsx)(y.Z, {})
					}), (0, n.jsx)("div", {
						className: "mt-8",
						children: (0, n.jsx)(g.Z, {})
					})]
				})
			}
			var M = s(57632),
				R = s(23235);

			function Z(e) {
				let {
					verifyLicenseKey: t,
					licenseVerified: s
				} = e, [r, i] = (0, l.useState)(!1), [a, o] = (0, l.useState)(!1), [c, d] = (0, l.useState)(""), [h, x] = (0, l.useState)(!1), [m, f] = (0, l.useState)("");
				(0, l.useEffect)(() => {
					"#thankyou" === window.location.hash && (window.location.hash = "", i(!0), setTimeout(() => {
						o(!0)
					}, 800))
				}, []), (0, l.useEffect)(() => {
					!0 === s && i(!1)
				}, [s]);
				let p = async () => {
					x(!0);
					let e = await t(c);
					x(!1), e ? i(!1) : f("Sorry, that license key is invalid.")
				};
				return (0, n.jsxs)(u.Z, {
					wide: !0,
					open: r,
					setOpen: i,
					showCloseButton: !1,
					children: [(0, n.jsx)("h2", {
						className: "text-center text-xl font-bold",
						children: "\uD83C\uDF89 Thank you for your purchase!"
					}), (0, n.jsxs)("div", {
						className: "my-2",
						children: ["You will receive a receipt and a ", (0, n.jsx)("b", {
							children: "license key"
						}), " in your email shortly. Enter your license key here to save it:"]
					}), (0, n.jsx)("div", {
						className: "my-4",
						children: (0, n.jsx)("input", {
							type: "text",
							disabled: h,
							placeholder: "Enter your license key here",
							className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
							value: c,
							onChange: e => d(e.target.value),
							onKeyDown: e => {
								"Enter" === e.key && (e.preventDefault(), p())
							}
						})
					}), m ? (0, n.jsx)("div", {
						className: "text-sm text-center text-red-500",
						children: m
					}) : null, (0, n.jsx)("div", {
						className: "my-2 text-center",
						children: (0, n.jsxs)("button", {
							onClick: p,
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
							disabled: h,
							children: [(0, n.jsx)(S.bzc, {
								className: "w-4 h-4"
							}), (0, n.jsx)("span", {
								children: "Activate"
							})]
						})
					}), (0, n.jsxs)("details", {
						className: "my-4",
						children: [(0, n.jsx)("summary", {
							className: " text-center",
							children: (0, n.jsx)("h2", {
								className: "text-center text-xl font-bold cursor-pointer hover:underline inline text-red-500",
								children: "\uD83D\uDC49 Don't see the receipt email? Click here."
							})
						}), (0, n.jsxs)("div", {
							className: "my-4",
							children: ["There is a current temporary issue with our payment processor", " ", (0, n.jsx)("b", {
								children: "Lemon Squeezy"
							}), " that causes the receipt emails to be lost for some customers. This happen more frequently with ", (0, n.jsx)("b", {
								children: "PayPal"
							}), " users."]
						}), (0, n.jsxs)("div", {
							className: "my-4",
							children: ["If you ", (0, n.jsx)("b", {
								children: "have been charged"
							}), " but still don't see the receipt email, please send your ", (0, n.jsx)("b", {
								children: "Transaction ID"
							}), " or your bank transaction detail to ", (0, n.jsx)("b", {
								children: "hello@lemonsqueezy.com"
							}), " and CC ", (0, n.jsx)("b", {
								children: "support@typingmind.com"
							}), " ", ". We will check this for you ASAP."]
						}), (0, n.jsx)("div", {
							className: "my-4 text-center",
							children: (0, n.jsx)("a", {
								className: "text-blue-500 font-semibold hover:underline",
								href: "mailto:hello@lemonsqueezy.com?cc=support@typingmind.com&subject=Receipt%20and%20License%20Key%20not%20received&body=Hi%20Lemon%20Squeezy%20and%20TypingMind%2C%0D%0A%0D%0AI%20purchased%20a%20license%20key%20from%20TypingMind.com%20via%20Lemon%20Squeezy%20but%20still%20have%20not%20received%20a%20license%20key%20and%20a%20receipt.%0D%0A%0D%0AMy%20transaction%20ID%20is%3A%20%7B%7Byour%20transaction%20ID%20here%7D%7D%0D%0A%0D%0APlease%20help%20check%20this.%0D%0A%0D%0AThanks",
								children: "\uD83D\uDC49 Click here to open your Email client with prefilled content"
							})
						}), (0, n.jsx)("div", {
							className: "my-4",
							children: "Very sorry about this inconvenience!"
						})]
					}), (0, n.jsx)("div", {
						className: "my-2 text-center",
						children: (0, n.jsx)("button", {
							onClick: () => i(!1),
							className: "text-blue-500 hover:underline disabled:text-gray-400",
							disabled: h,
							children: "I'll activate later"
						})
					}), a && (0, n.jsx)("div", {
						className: "flex items-center justify-center",
						children: (0, n.jsx)(R.Z, {})
					})]
				})
			}
			s(50456);
			var z = s(91655),
				W = s(91799),
				H = s(60357),
				q = s.n(H),
				J = s(89583);
			let V = (0, a.eK)("useSoundMode");

			function Y() {
				let [e, t] = V(!0);
				return (0, n.jsx)("button", {
					onClick: () => {
						t(!e)
					},
					type: "button",
					className: "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2",
					children: e ? (0, n.jsx)(J.rxG, {
						className: "w-4 h-4"
					}) : (0, n.jsx)(J.xZH, {
						className: "w-4 h-4"
					})
				})
			}
			var U = s(53854);
			let G = (0, a.eK)("useDarkTheme");

			function X() {
				let [e, t] = G(!1);
				return (0, l.useEffect)(() => {
					e ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
				}, [e]), (0, n.jsx)("button", {
					onClick: () => t(!e),
					type: "button",
					className: "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2",
					children: e ? (0, n.jsx)(U.Lac, {
						className: "h-4 w-4"
					}) : (0, n.jsx)(U.q4P, {
						className: "w-4 h-4"
					})
				})
			}
			let Q = (0, a.eK)("useAPIKey");

			function $(e) {
				let {
					onCompleted: t
				} = e, [s, r] = Q(""), [a, o] = (0, l.useState)(""), [c, d] = (0, l.useState)(!1), [h, x] = (0, l.useState)(!1), [m, f] = (0, l.useState)(!1), [p, g] = (0, l.useState)(""), [y, b] = (0, l.useState)(!1), [j, v] = (0, l.useState)(!1), w = (0, l.useRef)(null);
				(0, l.useEffect)(() => {
					s && v(!0)
				}, []);
				let N = async () => {
					f(!0), o(""), s ? v(!0) : v(!1)
				}, k = async () => {
					if (o(""), null !== p) {
						if ("" === p) {
							r(""), f(!1), t && t();
							return
						}
						await C(p) && (r(p), x(!0), f(!1), t && t())
					}
				}, C = async e => {
					d(!0);
					try {
						let t = await fetch("https://api.openai.com/v1/chat/completions", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Authorization: "Bearer ".concat(e)
							},
							body: JSON.stringify({
								model: "gpt-3.5-turbo",
								messages: [{
									role: "user",
									content: "hello"
								}]
							})
						});
						if (401 === t.status) return d(!1), o("Invalid API key. Please make sure your API key is still working properly."), null;
						if (429 === t.status) return d(!1), o((0, n.jsxs)("span", {
							children: ["Your API key is not working. You need a ", (0, n.jsx)("b", {
								children: "paid API account"
							}), " on OpenAI in order to use the ChatGPT API Key (the free trial won't work). To verify that you have a paid API account, go here and make sure you have your billing info added:", " ", (0, n.jsx)("u", {
								children: "https://platform.openai.com/account/billing/overview"
							}), ". Note that you ", (0, n.jsx)("b", {
								children: "do not"
							}), " need to have a ChatGPT Plus subscription, it's ", (0, n.jsx)("b", {
								children: "not needed"
							}), ". If you already have a paid OpenAI account, check to see if you still have sufficient credits. Also, try creating a new API key and trying again. If this problem persists, please contact support."]
						})), null;
						if (!t.ok) return o("Could not connect to OpenAI API. Please try again later. This could be because OpenAI's server is experiencing high demand and rejected your request. Go to https://status.openai.com/ to check their status. Error code: " + t.status), d(!1), null;
						let s = await t.json();
						return d(!1), s
					} catch (e) {
						o("Could not connect to OpenAI API from your browser. This could be a network issue or adblock. Please try again or contact support. Open Developer Console to see more details."), console.error(e)
					}
					d(!1)
				};
				return (0, n.jsxs)("div", {
					className: "",
					children: [h && (0, n.jsx)("div", {
						className: "flex items-center justify-center",
						children: (0, n.jsx)(R.Z, {})
					}), s ? (0, n.jsxs)("button", {
						onClick: N,
						disabled: c,
						className: "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all",
						children: [(0, n.jsx)(S.bzc, {
							className: "text-green-500 mr-2 h-4 w-4 flex-shrink-0",
							"aria-hidden": "true"
						}), (0, n.jsx)("span", {
							className: "font-mono",
							children: s ? " (***".concat(s.slice(s.length - 4), ")") : ""
						})]
					}) : (0, n.jsxs)("button", {
						disabled: c,
						className: "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all space-x-1",
						onClick: N,
						children: [c ? (0, n.jsx)(i.Z, {}) : (0, n.jsx)(S.CSE, {
							className: "text-yellow-500 h-4 w-4 flex-shrink-0",
							"aria-hidden": "true"
						}), (0, n.jsx)("span", {
							children: "Enter API Key"
						})]
					}), (0, n.jsxs)(u.Z, {
						open: m,
						setOpen: f,
						showCloseButton: !1,
						children: [(0, n.jsx)("h2", {
							className: "text-center text-xl font-bold",
							children: "\uD83D\uDD11 Enter OpenAI API Key:"
						}), (0, n.jsx)("div", {
							className: "text-center my-4",
							children: (0, n.jsx)("a", {
								className: "text-blue-500 text-xs hover:underline",
								target: "_blank",
								rel: "noopener noreferrer",
								href: "https://platform.openai.com/account/api-keys",
								children: "→ Get your API key from OpenAI dashboard."
							})
						}), (0, n.jsx)("div", {
							className: "text-xs",
							children: "Your API Key is stored locally on your browser and never sent anywhere else."
						}), (0, n.jsx)("div", {
							className: "my-4",
							children: j ? (0, n.jsxs)("div", {
								className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700 text-right flex items-center justify-end gap-4",
								children: [(0, n.jsxs)("span", {
									children: ["**************************", s.slice(-4)]
								}), (0, n.jsx)("button", {
									onClick: () => {
										v(!1), g(""), setTimeout(() => {
											var e;
											null === (e = w.current) || void 0 === e || e.focus()
										}, 100)
									},
									className: "text-blue-500 hover:underline",
									children: "Change Key"
								})]
							}) : (0, n.jsx)("input", {
								type: "text",
								ref: w,
								placeholder: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
								className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
								value: p,
								autoComplete: "off",
								onChange: e => g(e.target.value),
								onKeyDown: e => {
									"Enter" === e.key && (e.preventDefault(), k())
								},
								disabled: c
							})
						}), (0, n.jsx)("div", {
							className: "my-4 text-center font-semibold",
							children: (0, n.jsxs)("details", {
								children: [(0, n.jsx)("summary", {
									className: "my-4 cursor-pointer hover:underline",
									children: "API Key not working? Click Here."
								}), (0, n.jsxs)("ul", {
									className: "list-disc pl-4 text-left space-y-4",
									children: [(0, n.jsxs)("li", {
										children: ["Make sure you have your billing info added in", " ", (0, n.jsx)("a", {
											className: "text-blue-500 hover:underline",
											target: "_blank",
											rel: "noopener noreferrer",
											href: "https://platform.openai.com/account/billing/overview",
											children: "OpenAI Billing"
										}), " ", "page. Without billing info, your API key will not work."]
									}), (0, n.jsxs)("li", {
										children: ["OpenAI's ChatGPT API key is VERY cheap. You pay for what you use.", " ", (0, n.jsx)("a", {
											className: "text-blue-500 hover:underline",
											target: "_blank",
											rel: "noopener noreferrer",
											href: "https://openai.com/pricing#language-models",
											children: "The price"
										}), " ", "is roughly about 100,000 words per $1."]
									}), (0, n.jsx)("li", {
										children: "A ChatGPT Plus Subscription is NOT needed."
									})]
								})]
							})
						}), a ? (0, n.jsx)("div", {
							className: "text-sm text-center text-red-500",
							children: a
						}) : null, (0, n.jsx)("div", {
							className: "my-2 text-center space-x-2 flex items-center justify-center",
							children: (0, n.jsxs)("button", {
								disabled: c,
								onClick: () => k(),
								className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
								children: [c ? (0, n.jsx)(i.Z, {}) : (0, n.jsx)(S.bzc, {
									className: "w-4 h-4"
								}), (0, n.jsx)("span", {
									children: "Save API Key"
								})]
							})
						}), (0, n.jsx)("div", {
							className: "my-4 text-xs",
							children: "The app will connect to OpenAI API server to check if your API Key is working properly."
						})]
					})]
				})
			}

			function ee(e) {
				let {
					licenseVerified: t,
					setOpenLicenseKey: s
				} = e, r = (0, l.useRef)(), [i, a] = (0, l.useState)(!1);
				return (0, l.useEffect)(() => {
					null === r.current || r.current || !t || i || a(!0), r.current = t
				}, [t]), (0, n.jsxs)("div", {
					children: [i ? (0, n.jsx)(R.Z, {}) : null, (0, n.jsx)("button", {
						onClick: () => s(!0),
						className: "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all",
						children: !0 === t ? (0, n.jsxs)(n.Fragment, {
							children: [(0, n.jsx)(S.bzc, {
								className: "text-green-500 mr-2 h-4 w-4 flex-shrink-0",
								"aria-hidden": "true"
							}), "Activated"]
						}) : !1 === t ? (0, n.jsxs)(n.Fragment, {
							children: [(0, n.jsx)(S.CSE, {
								className: "text-yellow-500 mr-2 h-4 w-4 flex-shrink-0",
								"aria-hidden": "true"
							}), "Unlicensed"]
						}) : (0, n.jsx)(n.Fragment, {
							children: (0, n.jsx)(S.CSE, {
								className: "text-yellow-500 mr-2 h-4 w-4 flex-shrink-0 opacity-0",
								"aria-hidden": "true"
							})
						})
					})]
				})
			}(0, a.eK)("useLicenseKey");
			var et = s(5434);

			function es() {
				let [e, t] = (0, l.useState)(!1);
				return (0, n.jsxs)("div", {
					children: [(0, n.jsxs)("button", {
						onClick: () => t(!0),
						type: "button",
						className: "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2",
						children: [(0, n.jsx)(et.fsM, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), (0, n.jsx)("span", {
							children: "Send Feedback"
						})]
					}), (0, n.jsx)(u.Z, {
						open: e,
						setOpen: t,
						children: (0, n.jsxs)("div", {
							className: "text-center",
							children: [(0, n.jsx)("h2", {
								className: "text-xl font-semibold text-center",
								children: "Send Feedback"
							}), (0, n.jsx)("p", {
								className: "my-4",
								children: "All feedback, suggestions, feature requests, and bug reports are welcomed!"
							}), (0, n.jsx)("p", {
								className: "my-4",
								children: (0, n.jsx)("a", {
									href: "mailto:feedback@typingmind.com",
									className: "text-blue-600 hover:underline",
									children: "feedback@typingmind.com"
								})
							})]
						})
					})]
				})
			}
			var en = s(93463);

			function er() {
				for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return t.filter(Boolean).join(" ")
			}

			function ei(e) {
				var t;
				let {
					chat: s,
					thin: r,
					onEditName: i,
					onDelete: a,
					onSelect: o,
					selected: c,
					highlightedTitle: d,
					highlightedPreview: u,
					onToggleFavorite: h
				} = e, [x, m] = (0, l.useState)(!1), [f, p] = (0, l.useState)(s.title || "New Chat"), g = (0, l.useRef)(null);
				(0, l.useEffect)(() => {
					p(s.title || "New Chat")
				}, [s.title]);
				let y = e => {
						null == h || h(), e.preventDefault(), e.stopPropagation()
					},
					b = () => {
						m(!0), setTimeout(() => {
							g.current.focus(), g.current.setSelectionRange((null == f ? void 0 : f.length) || 0, (null == f ? void 0 : f.length) || 0)
						}, 100)
					},
					j = () => {
						m(!1), p(s.title)
					},
					v = () => {
						f && (m(!1), i(f))
					};
				return (0, n.jsxs)("div", {
					className: er(c ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "group flex items-center text-sm font-medium w-full space-x-2 justify-between overflow-hidden"),
					children: [(0, n.jsxs)("div", {
						onClick: () => {
							x || o()
						},
						className: "flex items-center justify-start gap-x-2 min-w-0 w-full px-2 py-2 text-sm group cursor-pointer",
						children: [(0, n.jsx)(U.wIw, {
							className: er("text-gray-300 h-6 w-6 flex-shrink-0 hidden sm:block", s.favoritedAt ? "sm:hidden" : "sm:group-hover:hidden"),
							"aria-hidden": "true"
						}), (0, n.jsx)("button", {
							onClick: y,
							className: er("flex-shrink-0", s.favoritedAt ? "" : " sm:hidden sm:group-hover:block"),
							children: s.favoritedAt ? (0, n.jsx)(S.pHD, {
								className: "text-yellow-500 " + (r ? "h-4 w-4" : "h-6 w-6"),
								"aria-hidden": "true"
							}) : (0, n.jsx)(S.y5j, {
								className: r ? "h-4 w-4" : "h-6 w-6",
								"aria-hidden": "true"
							})
						}), (0, n.jsxs)("div", {
							className: "space-y-1 text-left w-full min-w-0",
							children: [x ? (0, n.jsx)(en.Z, {
								type: "text",
								ref: g,
								value: f,
								onKeyDown: e => {
									"Enter" === e.key && (e.preventDefault(), v()), "Escape" === e.key && (e.preventDefault(), j())
								},
								onChange: e => p(e.target.value),
								className: "bg-gray-900 text-white rounded-sm px-0 py-0 border-0 ring-blue-500 focus:ring-2 ring-2 sm:text-sm font-medium w-full text-base"
							}) : (0, n.jsx)("div", {
								className: "text-gray-100 truncate w-full",
								children: d || f || "New Chat"
							}), r ? null : (0, n.jsx)("div", {
								className: "text-xs text-gray-400 font-normal truncate  w-full",
								children: u || (null == s ? void 0 : null === (t = s.preview) || void 0 === t ? void 0 : t.substring(0, 50))
							})]
						})]
					}), (0, n.jsx)("div", {
						className: "pr-2",
						children: x ? (0, n.jsxs)("div", {
							className: "flex items-center justify-center space-x-2",
							children: [(0, n.jsx)("button", {
								onClick: v,
								className: "text-gray-500 hover:text-white transiton-all",
								children: (0, n.jsx)(J.l_A, {
									className: "w-6 h-6 sm:w-4 sm:h-4"
								})
							}), (0, n.jsx)("button", {
								onClick: j,
								className: "text-gray-500 hover:text-white transiton-all",
								children: (0, n.jsx)(J.aHS, {
									className: "w-6 h-6 sm:w-4 sm:h-4"
								})
							})]
						}) : (0, n.jsxs)("div", {
							className: "flex items-center justify-center space-x-2",
							children: [(0, n.jsx)("button", {
								onClick: b,
								className: "text-gray-500 hover:text-white transiton-all",
								children: (0, n.jsx)(S.QML, {
									className: "w-6 h-6 sm:w-4 sm:h-4"
								})
							}), (0, n.jsx)(k.Z, {
								onConfirmed: a,
								className: "text-gray-500 hover:text-white transiton-all",
								children: (0, n.jsx)(S.YK6, {
									className: "w-6 h-6 sm:w-4 sm:h-4"
								})
							})]
						})
					})]
				})
			}
			var el = s(4510);

			function ea(e) {
				let {
					open: t,
					setOpen: s
				} = e, {
					openAIStatus: r
				} = (0, el.NZ)();
				return (0, n.jsxs)(u.Z, {
					open: t,
					setOpen: s,
					showCloseButton: !1,
					wide: !0,
					children: [(0, n.jsx)("h2", {
						className: "text-center text-xl font-bold",
						children: r === el.yZ.OK ? "OpenAI Status: OK" : r === el.yZ.SLOW ? "OpenAI Status: Slow" : "OpenAI Status: Unavailable"
					}), r === el.yZ.OK ? (0, n.jsxs)("p", {
						className: "my-2 text-sm",
						children: [(0, n.jsx)("div", {
							className: "flex items-center justify-center my-10",
							children: (0, n.jsx)("div", {
								className: "w-8 h-8 bg-green-500 rounded-full",
								children: (0, n.jsx)("div", {
									className: "w-8 h-8 bg-green-500 rounded-full animate-ping"
								})
							})
						}), (0, n.jsxs)("div", {
							className: "my-4",
							children: ["The green dot indicates that OpenAI API services are working normally. When it turns red", (0, n.jsx)("div", {
								className: "w-4 h-4 bg-red-500 rounded-full inline-block mx-2 align-middle"
							}), ", that means OpenAI is slow or unresponsive due to high demand or other reasons."]
						})]
					}) : r === el.yZ.SLOW ? (0, n.jsxs)("p", {
						className: "my-2 text-sm",
						children: [(0, n.jsx)("div", {
							className: "flex items-center justify-center my-10",
							children: (0, n.jsx)("div", {
								className: "w-8 h-8 bg-yellow-500 rounded-full",
								children: (0, n.jsx)("div", {
									className: "w-8 h-8 bg-yellow-500 rounded-full animate-ping"
								})
							})
						}), (0, n.jsxs)("div", {
							className: "my-4",
							children: ["We are receiving multiple reports of OpenAI being slow or unresponsive. This is likely due to high demand. If your message is not being sent, please try again later. This issue will usually be resolved within a few hours. If it takes too long, go to", " ", (0, n.jsx)("a", {
								href: "https://status.openai.com",
								target: "_blank",
								rel: "noopenner noreferer",
								className: "text-blue-500",
								children: "https://status.openai.com"
							}), " ", "to check OpenAI service's status."]
						})]
					}) : (0, n.jsxs)("p", {
						className: "my-2 text-sm",
						children: [(0, n.jsx)("div", {
							className: "flex items-center justify-center my-10",
							children: (0, n.jsx)("div", {
								className: "w-8 h-8 bg-red-500 rounded-full",
								children: (0, n.jsx)("div", {
									className: "w-8 h-8 bg-red-500 rounded-full animate-ping"
								})
							})
						}), "This could be because OpenAI's server is experiencing high demand or having an outage. Usually, the issue will goes away pretty quick. You can try to send your message again every few minutes. If it takes too long, go to", " ", (0, n.jsx)("a", {
							href: "https://status.openai.com",
							target: "_blank",
							rel: "noopenner noreferer",
							className: "text-blue-500",
							children: "https://status.openai.com"
						}), " ", "to check their service status."]
					}), (0, n.jsx)("div", {
						className: "mt-4 text-center flex items-center justify-center space-x-2",
						children: (0, n.jsx)("button", {
							onClick: () => {
								s(!1)
							},
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
							children: (0, n.jsx)("span", {
								children: "Got it"
							})
						})
					})]
				})
			}
			var eo = s(60887);

			function ec() {
				for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return t.filter(Boolean).join(" ")
			}
			let ed = e => {
					var t;
					let {
						children: s,
						onEdit: r,
						onDelete: i,
						folder: a,
						shouldOpen: o = !1,
						numberOfChats: c,
						dragHandle: d
					} = e, [u, h] = (0, l.useState)(Boolean(a.open)), [x, m] = (0, l.useState)(Boolean(a.new)), [f, p] = (0, l.useState)(""), {
						over: g,
						active: y
					} = (0, eo.Cj)();
					(0, eo.IJ)({
						onDragEnd: e => {
							var t, s;
							let {
								active: n,
								over: r
							} = e;
							(null === (t = n.data) || void 0 === t ? void 0 : null === (s = t.current) || void 0 === s ? void 0 : s.type) !== "SORTABLE_FOLDER" && (null == r ? void 0 : r.id) === a.id && h(!0)
						}
					});
					let b = (0, l.useRef)(null);
					(0, l.useEffect)(() => {
						o && h(o)
					}, [o]);
					let j = () => {
							r({
								...a,
								title: f,
								new: !1
							}), p(void 0), m(!1)
						},
						v = () => {
							p(void 0), m(!1), a.new && r({
								...a,
								new: !1
							})
						},
						w = () => {
							m(!0), p(a.title), setTimeout(() => {
								var e, t;
								b.current.focus(), b.current.setSelectionRange((null === (e = a.title) || void 0 === e ? void 0 : e.length) || 0, (null === (t = a.title) || void 0 === t ? void 0 : t.length) || 0)
							}, 100)
						};
					(0, l.useEffect)(() => {
						if (x) {
							var e;
							null === (e = b.current) || void 0 === e || e.focus()
						}
					}, [x]), (0, l.useEffect)(() => {
						a.open !== u && r({
							...a,
							open: u
						})
					}, [u]);
					let N = (null === (t = null == y ? void 0 : y.data.current) || void 0 === t ? void 0 : t.type) === "SORTABLE_FOLDER",
						C = !N && (null == g ? void 0 : g.id) === a.id;
					return (0, l.useEffect)(() => {
						let e = setTimeout(() => {
							C && h(!0)
						}, 700);
						return () => {
							clearTimeout(e)
						}
					}, [C]), (0, l.useEffect)(() => {
						N && h(!1)
					}, [N]), (0, n.jsxs)("div", {
						children: [(0, n.jsxs)("div", {
							className: ec("focus-within:bg-gray-900 focus-within:text-white text-gray-300 hover:bg-gray-700 hover:text-white", "group flex items-center text-sm font-medium w-full space-x-2 justify-between overflow-hidden"),
							...null == d ? void 0 : d.attributes,
							...null == d ? void 0 : d.listeners,
							children: [(0, n.jsxs)("button", {
								onClick: () => {
									x || h(!u)
								},
								className: "flex items-center justify-start space-x-2 min-w-0 w-full px-2 py-2 text-sm",
								children: [u ? (0, n.jsx)(U.kWQ, {
									className: ec("text-gray-300 h-6 w-6 flex-shrink-0"),
									"aria-hidden": "true"
								}) : (0, n.jsx)(U.MOd, {
									className: ec("text-gray-300 h-6 w-6 flex-shrink-0"),
									"aria-hidden": "true"
								}), (0, n.jsx)("div", {
									className: "space-y-1 text-left w-full min-w-0",
									children: x ? (0, n.jsx)(en.Z, {
										type: "text",
										ref: b,
										value: void 0 === f ? a.title : f,
										onKeyDown: e => {
											"Enter" === e.key && (e.preventDefault(), j()), "Escape" === e.key && (e.preventDefault(), v())
										},
										onChange: e => p(e.target.value),
										className: "bg-gray-900 text-white rounded-sm px-0 py-0 border-0 ring-blue-500 focus:ring-2 ring-2 sm:text-sm font-medium w-full text-base"
									}) : (0, n.jsxs)("div", {
										className: "text-gray-100 w-full flex",
										children: [(0, n.jsx)("div", {
											className: "truncate min-w-0",
											children: a.title || "(Untitled)"
										}), (0, n.jsxs)("div", {
											className: "ml-1 whitespace-nowrap opacity-50",
											children: ["(", c, " ", 1 === c ? "chat" : "chats", ")"]
										})]
									})
								})]
							}), (0, n.jsx)("div", {
								className: "pr-2",
								children: x ? (0, n.jsxs)("div", {
									className: "flex items-center justify-center space-x-2",
									children: [(0, n.jsx)("button", {
										onClick: j,
										className: "text-gray-500 hover:text-white transiton-all",
										children: (0, n.jsx)(J.l_A, {
											className: "w-6 h-6 sm:w-4 sm:h-4"
										})
									}), (0, n.jsx)("button", {
										onClick: v,
										className: "text-gray-500 hover:text-white transiton-all",
										children: (0, n.jsx)(J.aHS, {
											className: "w-6 h-6 sm:w-4 sm:h-4"
										})
									})]
								}) : (0, n.jsxs)("div", {
									className: "flex items-center justify-center space-x-2",
									children: [(0, n.jsx)("button", {
										onClick: w,
										className: "text-gray-500 hover:text-white transiton-all",
										children: (0, n.jsx)(S.QML, {
											className: "w-6 h-6 sm:w-4 sm:h-4"
										})
									}), (0, n.jsx)(k.Z, {
										onConfirmed: i,
										className: "text-gray-500 hover:text-white transiton-all",
										children: (0, n.jsx)(S.YK6, {
											className: "w-6 h-6 sm:w-4 sm:h-4"
										})
									})]
								})
							})]
						}), (0, n.jsxs)("div", {
							className: ec("pl-6 space-y-2 relative hidden", u && "!block"),
							children: [s, c > 0 && (0, n.jsx)("div", {
								className: "absolute top-0 -translate-y-5 left-5 h-[calc(100%+20px)] w-[1px] bg-white/20 -translate-x-1/2"
							})]
						})]
					})
				},
				eu = e => {
					let {
						onDragEnd: t,
						children: s,
						onDragStart: r,
						onDragOver: i
					} = e, l = (0, eo.Dy)((0, eo.VT)(eo.MA, {
						activationConstraint: {
							distance: 15
						}
					}), (0, eo.VT)(eo.LO, {
						activationConstraint: {
							delay: 200,
							tolerance: 5
						}
					}));
					return (0, n.jsx)(eo.LB, {
						sensors: l,
						onDragEnd: t,
						onDragStart: r,
						onDragOver: i,
						children: s
					})
				};
			var eh = s(45587);
			let ex = (0, a.eK)("useChatsInFolder"),
				em = (0, a.eK)("useFolderList"),
				ef = e => {
					let {
						children: t,
						chats: s
					} = e, [r, i] = (0, l.useState)(null), [a, o] = ex({}), [c, d] = em([]), u = e => {
						let {
							active: t
						} = e;
						i(t)
					}, h = e => {
						var t, s, n, r, i;
						let {
							active: l,
							over: a
						} = e;
						if ((null === (t = l.data) || void 0 === t ? void 0 : null === (s = t.current) || void 0 === s ? void 0 : s.type) === "SORTABLE_FOLDER") {
							if ((null === (r = a.data) || void 0 === r ? void 0 : null === (i = r.current) || void 0 === i ? void 0 : i.type) !== "SORTABLE_FOLDER") return;
							d(e => {
								let t = e.findIndex(e => e.id === l.id),
									s = e.findIndex(e => e.id === a.id);
								return (0, eh.Rp)(e, t, s)
							});
							return
						}
						let c = null === (n = l.data.current) || void 0 === n ? void 0 : n.container,
							u = null == a ? void 0 : a.id;
						c && u && c !== u && o(e => "ROOT" === c ? {
							...e,
							[u]: [...e[u] || [], l.id]
						} : "ROOT" === u ? {
							...e,
							[c]: e[c].filter(e => e !== l.id)
						} : {
							...e,
							[c]: e[c].filter(e => e !== l.id),
							[u]: [...e[u] || [], l.id]
						})
					}, x = (0, l.useMemo)(() => {
						var e, t;
						if (!r) return null;
						if ((null == r ? void 0 : null === (e = r.data) || void 0 === e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.type) === "SORTABLE_FOLDER") {
							let e = c.find(e => e.id === r.id);
							return e ? (0, n.jsx)(ed, {
								folder: e,
								numberOfChats: r.data.current.numberOfChats,
								onEdit: () => {},
								onDelete: () => {}
							}) : null
						}
						let i = s.find(e => e.id === r.id);
						return i ? (0, n.jsx)("div", {
							className: "bg-gray-700 select-none",
							children: (0, n.jsx)(ei, {
								chat: i
							})
						}) : null
					}, [r, s, c]);
					return (0, n.jsxs)(eu, {
						onDragStart: u,
						onDragEnd: h,
						children: [t, (0, n.jsx)(eo.y9, {
							children: x
						})]
					})
				};

			function ep(e) {
				var t, s;
				let {
					id: r,
					data: i,
					children: l,
					className: a
				} = e, {
					isOver: o,
					setNodeRef: c,
					active: d
				} = (0, eo.Zj)({
					id: r,
					data: i
				}), u = o && (null === (t = null == d ? void 0 : d.data.current) || void 0 === t ? void 0 : t.container) !== r && (null === (s = null == d ? void 0 : d.data.current) || void 0 === s ? void 0 : s.type) !== "SORTABLE_FOLDER";
				return (0, n.jsx)("div", {
					ref: c,
					className: function() {
						for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
						return t.filter(Boolean).join(" ")
					}(u && "bg-blue-500/30", a),
					children: l
				})
			}

			function eg(e) {
				let {
					id: t,
					data: s,
					children: r
				} = e, {
					attributes: i,
					listeners: l,
					setNodeRef: a,
					isDragging: o
				} = (0, eo.O1)({
					id: t,
					data: s
				});
				return (0, n.jsx)("div", {
					ref: a,
					style: {
						opacity: o ? .3 : void 0
					},
					...l,
					...i,
					children: (0, n.jsx)("div", {
						className: "select-none lg:select-auto touch-manipulation",
						children: r
					})
				})
			}
			var ey = s(24285);

			function eb(e) {
				let {
					id: t,
					data: s,
					customHandlePosition: r,
					children: i
				} = e, {
					attributes: l,
					listeners: a,
					setNodeRef: o,
					transform: c,
					transition: d,
					isDragging: u
				} = (0, eh.nB)({
					id: t,
					data: s
				}), h = {
					transform: ey.ux.Transform.toString(c),
					transition: d,
					zIndex: u ? 10 : void 0,
					position: u ? "relative" : void 0,
					opacity: u ? .3 : void 0
				};
				return (0, n.jsx)("div", {
					ref: o,
					style: h,
					...r ? void 0 : a,
					...r ? void 0 : l,
					children: "function" == typeof i && r ? i({
						listeners: a,
						isDragging: u,
						attributes: l
					}) : i
				})
			}
			let ej = (0, a.eK)("useFolderList"),
				ev = (0, a.eK)("useChatsInFolder");

			function ew() {
				for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return t.filter(Boolean).join(" ")
			}
			let eN = (e, t) => {
					let s = {},
						r = e.filter(e => {
							if ("" === t) return !0;
							let r = (e.title || "").toLowerCase().includes(t.toLowerCase()),
								i = [];
							try {
								i = JSON.parse((0, a.cF)().getItem("CHAT_" + e.id)).messages
							} catch (e) {
								console.error(e)
							}
							let l = i.some(e => e.content.toLowerCase().includes(t.toLowerCase()));
							if (s[e.id] = {}, r) {
								let r = [],
									i = e.title.toLowerCase().indexOf(t.toLowerCase());
								r.push(e.title.substring(0, i), (0, n.jsx)("span", {
									className: "bg-yellow-700",
									children: e.title.substring(i, i + t.length)
								}), e.title.substring(i + t.length)), s[e.id].title = r
							}
							if (l) {
								let r = [],
									l = i.map(e => e.content.toLowerCase()).findIndex(e => e.toLowerCase().includes(t.toLowerCase())),
									a = i[l].content,
									o = a.toLowerCase().indexOf(t.toLowerCase()),
									c = a.substring(Math.max(0, o - 10), Math.min(a.length, o + 20)),
									d = c.toLowerCase().indexOf(t.toLowerCase());
								r.push("...", c.substring(0, d), (0, n.jsx)("span", {
									className: "bg-yellow-700",
									children: c.substring(d, d + t.length)
								}), c.substring(d + t.length), "..."), s[e.id].preview = r
							}
							return r || l
						});
					return {
						filteredChats: r,
						highlighted: s
					}
				},
				ek = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "updatedAt";
					return [...e].sort((e, s) => "updatedAt" === t ? e.updatedAt ? s.updatedAt ? new Date(s.updatedAt).getTime() - new Date(e.updatedAt).getTime() : -1 : 1 : "title" === t ? e.title.localeCompare(s.title) : void 0)
				};

			function eC(e) {
				var t;
				let {
					chats: s,
					chatID: r,
					onDeleteChat: i,
					onDeleteChats: a,
					onEditChatTitle: o,
					onNewChatRequested: c,
					onChatSelected: d,
					sidebarOpen: u,
					setSidebarOpen: h,
					licenseVerified: x,
					setLicenseVerified: m,
					setOpenBuy: f,
					onOpenSettings: p,
					hostConfig: g,
					onToggleFavorite: y
				} = e, [b, j] = (0, l.useState)(0), [v, w] = (0, l.useState)(!1), [N, k] = (0, l.useState)(""), [C, T] = (0, l.useState)(null), [O, A] = (0, l.useState)(!1), [I, E] = (0, l.useState)(!1), {
					openAIStatus: D
				} = (0, el.NZ)(), [L, P] = ej([]), [K, _] = ev({});
				(0, l.useEffect)(() => {
					w(!0)
				}, []);
				let B = () => {
						c(), h(!1), setTimeout(() => {
							let e = document.getElementById("chat-input-textbox");
							e && e.focus()
						}, 100)
					},
					R = () => {
						P(e => [{
							id: (0, M.Z)(),
							title: "",
							new: !0,
							open: !0
						}, ...e])
					},
					Z = e => {
						P(t => {
							let s = t.findIndex(t => t.id === e.id),
								n = [...t];
							return n[s] = e, n
						})
					},
					z = e => {
						P(L.filter(t => t.id !== e)), _(t => {
							let s = {
								...t
							};
							return delete s[e], s
						})
					};
				if (!v) return null;
				let {
					filteredChats: W,
					highlighted: H
				} = eN(ek(s), N), V = W.filter(e => e.favoritedAt), G = (() => {
					let e = {};
					return W.forEach(t => {
						for (let n of L) {
							var s;
							if (null === (s = K[n.id]) || void 0 === s ? void 0 : s.includes(t.id)) {
								e[n.id] = [...e[n.id] || [], t];
								return
							}
						}
						e.ROOT = [...e.ROOT || [], t]
					}), e
				})();
				return (0, n.jsxs)("div", {
					onTouchMove: e => {
						if (!C) return;
						let t = e.touches[0].clientX - C;
						t < -100 && h(!1)
					},
					onTouchStart: e => {
						T(e.touches[0].clientX)
					},
					onTouchEnd: () => {
						T(null)
					},
					className: "jsx-7078ffb922cb3c38 flex min-h-0 flex-1 flex-col bg-gray-800",
					children: [(0, n.jsx)("div", {
						id: "navbar",
						className: "jsx-7078ffb922cb3c38 flex flex-1 flex-col overflow-y-auto pb-4",
						children: (0, n.jsxs)("nav", {
							className: "jsx-7078ffb922cb3c38 flex-1 space-y-2 bg-gray-800 flex flex-col ",
							children: [(0, n.jsxs)("div", {
								className: "jsx-7078ffb922cb3c38 px-2 space-y-2 sticky z-30 top-0 bg-gray-800 py-2",
								children: [(0, n.jsxs)("div", {
									className: "jsx-7078ffb922cb3c38 flex items-center justify-center space-x-2",
									children: [(0, n.jsxs)("button", {
										onClick: B,
										className: "jsx-7078ffb922cb3c38 " + (ew("bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium w-full hover:bg-gray-500 transition-all") || ""),
										children: [(0, n.jsx)(U.wIw, {
											className: ew("text-gray-300 mr-2 h-6 w-6 flex-shrink-0"),
											"aria-hidden": "true"
										}), "New Chat"]
									}), (0, n.jsx)("button", {
										onClick: p,
										className: "jsx-7078ffb922cb3c38 " + (ew("bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:bg-gray-500 transition-all w-12 shrink-0") || ""),
										children: (0, n.jsx)(U.JEI, {
											className: ew("text-gray-300 h-6 w-6 flex-shrink-0"),
											"aria-hidden": "true"
										})
									})]
								}), (0, n.jsxs)("div", {
									className: "jsx-7078ffb922cb3c38 relative flex items-center space-x-2",
									children: [(0, n.jsxs)("div", {
										className: "jsx-7078ffb922cb3c38 relative w-full",
										children: [(0, n.jsx)("input", {
											type: "text",
											placeholder: "Search chats...",
											value: N,
											onChange: e => k(e.target.value),
											onKeyDown: e => {
												27 === e.keyCode && k("")
											},
											className: "jsx-7078ffb922cb3c38 bg-gray-700 text-white px-2 py-1 rounded-md w-full"
										}), N ? (0, n.jsx)("button", {
											onClick: () => k(""),
											className: "jsx-7078ffb922cb3c38 absolute right-0 top-0 bottom-0 flex items-center justify-center px-2 text-white",
											children: (0, n.jsx)(S.oHP, {
												className: "w-4 h-4"
											})
										}) : null]
									}), (0, n.jsx)("button", {
										onClick: () => {
											R()
										},
										className: "jsx-7078ffb922cb3c38 text-gray-500 hover:text-white transiton-all flex items-center justify-center w-12 shrink-0",
										children: (0, n.jsx)(J.RHD, {
											className: "w-6 h-6"
										})
									})]
								}), (0, n.jsx)("div", {
									className: "jsx-7078ffb922cb3c38",
									children: N ? null : V.map(e => {
										var t, s;
										return (0, n.jsx)(ei, {
											thin: !0,
											chat: e,
											onToggleFavorite: () => {
												y(e)
											},
											highlightedTitle: null === (t = H[e.id]) || void 0 === t ? void 0 : t.title,
											highlightedPreview: null === (s = H[e.id]) || void 0 === s ? void 0 : s.preview,
											onSelect: () => {
												d(e), h(!1)
											},
											selected: e.id === r,
											onDelete: () => {
												i(e.id)
											},
											onEditName: t => {
												o(e.id, t)
											}
										}, e.id)
									})
								}), V.length > 0 && (0, n.jsx)("hr", {
									className: "jsx-7078ffb922cb3c38 border-gray-700"
								})]
							}), 0 === W.length ? N ? (0, n.jsxs)("div", {
								className: "jsx-7078ffb922cb3c38 text-gray-500 text-center",
								children: [(0, n.jsx)("p", {
									className: "jsx-7078ffb922cb3c38 text-sm",
									children: "No results"
								}), (0, n.jsxs)("p", {
									className: "jsx-7078ffb922cb3c38 text-xs",
									children: ['No result found for "', N, '"']
								})]
							}) : (0, n.jsx)("div", {
								className: "jsx-7078ffb922cb3c38 flex flex-col items-center justify-center p-4 border border-dashed border-2 border-gray-500 rounded-lg mx-2",
								children: (0, n.jsxs)("div", {
									className: "jsx-7078ffb922cb3c38 text-gray-500 text-center",
									children: [(0, n.jsx)("p", {
										className: "jsx-7078ffb922cb3c38 text-sm",
										children: "No Chats Yet"
									}), (0, n.jsx)("p", {
										className: "jsx-7078ffb922cb3c38 text-xs",
										children: "Click the button above to start a new chat"
									})]
								})
							}) : null, (0, n.jsxs)(ef, {
								chats: s,
								children: [(0, n.jsx)(eh.Fo, {
									items: L,
									strategy: eh.qw,
									children: L.map(e => {
										let t = G[e.id] || [],
											s = t.map(e => e.id);
										return N && !t.length ? null : (0, n.jsx)(eb, {
											id: e.id,
											data: {
												type: "SORTABLE_FOLDER",
												numberOfChats: t.length
											},
											customHandlePosition: !0,
											children: l => {
												let {
													listeners: a,
													attributes: c
												} = l;
												return (0, n.jsx)(ep, {
													id: e.id,
													children: (0, n.jsx)(ed, {
														folder: e,
														onEdit: Z,
														onDelete: () => z(e.id),
														shouldOpen: !!N || (null == s ? void 0 : s.includes(r)),
														numberOfChats: t.length,
														dragHandle: {
															listeners: a,
															attributes: c
														},
														children: t.map(t => {
															var s, l;
															return (0, n.jsx)(eg, {
																id: t.id,
																data: {
																	container: e.id
																},
																children: (0, n.jsx)(ei, {
																	chat: t,
																	onToggleFavorite: () => {
																		y(t)
																	},
																	highlightedTitle: null === (s = H[t.id]) || void 0 === s ? void 0 : s.title,
																	highlightedPreview: null === (l = H[t.id]) || void 0 === l ? void 0 : l.preview,
																	onSelect: () => {
																		d(t), h(!1)
																	},
																	selected: t.id === r,
																	onDelete: () => {
																		i(t.id)
																	},
																	onEditName: e => {
																		o(t.id, e)
																	}
																})
															}, t.id)
														})
													})
												})
											}
										}, e.id)
									})
								}), (0, n.jsx)(ep, {
									id: "ROOT",
									className: "flex-1 pb-4",
									children: null === (t = G.ROOT) || void 0 === t ? void 0 : t.map(e => {
										var t, s;
										return (0, n.jsx)(eg, {
											id: e.id,
											data: {
												container: "ROOT"
											},
											children: (0, n.jsx)(ei, {
												chat: e,
												onToggleFavorite: () => {
													y(e)
												},
												highlightedTitle: null === (t = H[e.id]) || void 0 === t ? void 0 : t.title,
												highlightedPreview: null === (s = H[e.id]) || void 0 === s ? void 0 : s.preview,
												onSelect: () => {
													d(e), h(!1)
												},
												selected: e.id === r,
												onDelete: () => {
													i(e.id)
												},
												onEditName: t => {
													o(e.id, t)
												}
											})
										}, e.id)
									})
								})]
							})]
						})
					}), (0, n.jsxs)("div", {
						className: "jsx-7078ffb922cb3c38 flex flex-col flex-shrink-0 bg-gray-700 p-3 justify-center space-y-1",
						children: [(0, n.jsx)("div", {
							className: "jsx-7078ffb922cb3c38 flex items-center justify-center",
							children: (0, n.jsxs)("div", {
								className: "jsx-7078ffb922cb3c38 mb-2 grid grid-cols-2 gap-2",
								children: [(0, n.jsx)("div", {
									className: "jsx-7078ffb922cb3c38 text-xs text-white font-semibold flex items-center justify-end",
									children: "License Key"
								}), (0, n.jsx)(ee, {
									licenseVerified: x,
									setOpenLicenseKey: A
								}), (0, n.jsx)("div", {
									className: "jsx-7078ffb922cb3c38 text-xs text-white font-semibold flex items-center justify-end",
									children: "OpenAI API Key"
								}), (0, n.jsxs)("div", {
									className: "jsx-7078ffb922cb3c38 flex items-center relative",
									children: [(0, n.jsx)($, {}), D === el.yZ.OK && (0, n.jsx)("button", {
										onClick: () => E(!0),
										className: "jsx-7078ffb922cb3c38 flex items-center justify-center absolute left-full ml-2",
										children: (0, n.jsx)("div", {
											className: "jsx-7078ffb922cb3c38 " + (ew("h-3 w-3 rounded-full bg-green-500") || "")
										})
									}), D === el.yZ.SLOW && (0, n.jsx)("button", {
										onClick: () => E(!0),
										className: "jsx-7078ffb922cb3c38 flex items-center justify-center absolute left-full ml-2",
										children: (0, n.jsx)("div", {
											className: "jsx-7078ffb922cb3c38 " + (ew("h-3 w-3 rounded-full bg-yellow-500") || ""),
											children: (0, n.jsx)("div", {
												className: "jsx-7078ffb922cb3c38 " + (ew("h-3 w-3 rounded-full bg-yellow-500 animate-ping") || "")
											})
										})
									})]
								}), D === el.yZ.ERROR && (0, n.jsxs)(n.Fragment, {
									children: [(0, n.jsx)("div", {
										className: "jsx-7078ffb922cb3c38 text-xs text-white font-semibold flex items-center justify-end",
										children: "OpenAI Status"
									}), (0, n.jsxs)("button", {
										onClick: () => E(!0),
										className: "jsx-7078ffb922cb3c38 bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all",
										children: [(0, n.jsxs)("span", {
											className: "jsx-7078ffb922cb3c38 relative flex h-3 w-3 shrink-0",
											children: [(0, n.jsx)("span", {
												className: "jsx-7078ffb922cb3c38 animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
											}), (0, n.jsx)("span", {
												className: "jsx-7078ffb922cb3c38 relative inline-flex rounded-full h-3 w-3 bg-red-500"
											})]
										}), (0, n.jsx)("p", {
											className: "jsx-7078ffb922cb3c38 text-xs text-white ml-2",
											children: "Error"
										})]
									})]
								})]
							})
						}), (0, n.jsx)(F, {
							open: O,
							setOpen: A,
							setOpenBuy: f,
							setLicenseVerified: m
						}), (0, n.jsx)(ea, {
							open: I,
							setOpen: E
						}), (0, n.jsx)("div", {
							className: "jsx-7078ffb922cb3c38  border-t border-gray-500 py-1"
						}), (0, n.jsxs)("div", {
							className: "jsx-7078ffb922cb3c38 text-xs text-gray-400 font-semibold text-center",
							children: [g.hosted ? g.brand : (0, n.jsx)("a", {
								href: "https://typingmind.com",
								className: "jsx-7078ffb922cb3c38",
								children: "TypingMind.com"
							}), " ", "\xa9 ", new Date().getFullYear()]
						}), g.hosted ? null : (0, n.jsxs)("div", {
							className: "jsx-7078ffb922cb3c38 text-xs text-gray-400 text-center",
							children: [(0, n.jsx)("a", {
								href: "/privacy",
								target: "_blank",
								className: "jsx-7078ffb922cb3c38 hover:underline",
								children: "Privacy"
							}), " | ", (0, n.jsx)("a", {
								href: "/terms",
								target: "_blank",
								className: "jsx-7078ffb922cb3c38 hover:underline",
								children: "Terms"
							}), " | ", (0, n.jsx)("a", {
								href: "/faqs",
								target: "_blank",
								className: "jsx-7078ffb922cb3c38 hover:underline",
								children: "FAQs"
							}), " | ", (0, n.jsx)("a", {
								rel: "noopener noreferrer",
								href: "https://tdinh.notion.site/tdinh/Typing-Mind-Changelog-b23c1d7de373417bbad50247f7a1a7cb",
								target: "_blank",
								className: "jsx-7078ffb922cb3c38 hover:underline",
								children: "Changelog"
							})]
						}), (0, n.jsxs)("div", {
							onClick: () => j(b + 1),
							className: "jsx-7078ffb922cb3c38 text-center flex items-center justify-center",
							children: [g.hosted ? null : (0, n.jsx)(es, {}), (0, n.jsx)(X, {}), (0, n.jsx)(Y, {})]
						})]
					}), (0, n.jsx)(q(), {
						id: "7078ffb922cb3c38",
						children: "#navbar.jsx-7078ffb922cb3c38{color-scheme:dark}"
					})]
				})
			}
			var eS = s(44080),
				eT = s(46047),
				eO = s(80243);

			function eA(e) {
				let {
					chatID: t,
					chats: s,
					onDeleteChat: r,
					onDeleteChats: i,
					onEditChatTitle: a,
					onNewChatRequested: o,
					onChatSelected: c,
					licenseVerified: d,
					setLicenseVerified: u,
					setOpenBuy: h,
					setOpenLicenseKey: x,
					onOpenSettings: m,
					hostConfig: f,
					onToggleFavorite: p,
					children: g
				} = e, [y, b] = (0, l.useState)(!1), [j, v] = (0, l.useState)(null);
				return (0, n.jsx)(n.Fragment, {
					children: (0, n.jsxs)("div", {
						children: [(0, n.jsx)(eS.u.Root, {
							show: y,
							as: l.Fragment,
							children: (0, n.jsxs)(eT.V, {
								as: "div",
								className: "relative z-40 lg:hidden",
								onClose: b,
								children: [(0, n.jsx)(eS.u.Child, {
									as: l.Fragment,
									enter: "transition-opacity ease-linear duration-300",
									enterFrom: "opacity-0",
									enterTo: "opacity-100",
									leave: "transition-opacity ease-linear duration-300",
									leaveFrom: "opacity-100",
									leaveTo: "opacity-0",
									children: (0, n.jsx)("div", {
										className: "fixed inset-0 bg-gray-600 bg-opacity-75"
									})
								}), (0, n.jsxs)("div", {
									className: "fixed inset-0 z-40 flex",
									children: [(0, n.jsx)(eS.u.Child, {
										as: l.Fragment,
										enter: "transition ease-in-out duration-300 transform",
										enterFrom: "-translate-x-full",
										enterTo: "translate-x-0",
										leave: "transition ease-in-out duration-300 transform",
										leaveFrom: "translate-x-0",
										leaveTo: "-translate-x-full",
										children: (0, n.jsxs)(eT.V.Panel, {
											className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-800",
											children: [(0, n.jsx)(eS.u.Child, {
												as: l.Fragment,
												enter: "ease-in-out duration-300",
												enterFrom: "opacity-0",
												enterTo: "opacity-100",
												leave: "ease-in-out duration-300",
												leaveFrom: "opacity-100",
												leaveTo: "opacity-0",
												children: (0, n.jsx)("div", {
													className: "absolute top-0 right-0 -mr-12 pt-2",
													children: (0, n.jsxs)("button", {
														type: "button",
														className: "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
														onClick: () => b(!1),
														children: [(0, n.jsx)("span", {
															className: "sr-only",
															children: "Close sidebar"
														}), (0, n.jsx)(eO, {
															className: "h-6 w-6 text-white",
															"aria-hidden": "true"
														})]
													})
												})
											}), (0, n.jsx)(eC, {
												chatID: t,
												chats: s,
												onDeleteChat: r,
												onDeleteChats: i,
												onEditChatTitle: a,
												onNewChatRequested: o,
												onChatSelected: c,
												sidebarOpen: y,
												setSidebarOpen: b,
												licenseVerified: d,
												setLicenseVerified: u,
												setOpenBuy: h,
												setOpenLicenseKey: x,
												onOpenSettings: m,
												hostConfig: f,
												onToggleFavorite: p
											})]
										})
									}), (0, n.jsx)("div", {
										className: "w-14 flex-shrink-0"
									})]
								})]
							})
						}), (0, n.jsx)("div", {
							className: "hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col z-40",
							children: (0, n.jsx)(eC, {
								chatID: t,
								chats: s,
								onDeleteChat: r,
								onDeleteChats: i,
								onEditChatTitle: a,
								onNewChatRequested: o,
								onChatSelected: c,
								sidebarOpen: y,
								setSidebarOpen: b,
								licenseVerified: d,
								setLicenseVerified: u,
								setOpenBuy: h,
								setOpenLicenseKey: x,
								onOpenSettings: m,
								hostConfig: f,
								onToggleFavorite: p
							})
						}), (0, n.jsx)("div", {
							onTouchMove: e => {
								if (!j) return;
								let t = e.touches[0].clientX - j;
								t > 40 && b(!0)
							},
							onTouchStart: e => {
								e.touches[0].clientX > 50 || v(e.touches[0].clientX)
							},
							onTouchEnd: () => {
								v(null)
							},
							className: "flex flex-1 flex-col lg:pl-80",
							children: g({
								sidebarOpen: y,
								setSidebarOpen: b
							})
						})]
					})
				})
			}
			var eI = s(28610);
			let eE = (0, a.eK)("useLicenseKey"),
				eD = (0, a.eK)("useAPIKey");

			function eL() {
				let [e, t] = eD(""), [s, u] = (0, l.useState)(!1), [h, m] = (0, l.useState)(""), [f, g] = (0, l.useState)([]), [y, b] = (0, l.useState)((0, M.Z)()), [j, w] = (0, l.useState)([]), [k, C] = eE(""), [T, O] = (0, l.useState)(null), [A, I] = (0, l.useState)(!1), [E, D] = (0, l.useState)(!1), [P, K] = (0, l.useState)(!1), [_, R] = (0, l.useState)(!1), [H, q] = (0, l.useState)(0), [J, V] = (0, l.useState)({
					hosted: !1
				}), [Y, U] = (0, l.useState)(!1), [G, X] = (0, l.useState)(null), [Q, $] = (0, l.useState)(null);
				(0, l.useEffect)(() => {
					u(!0), er(), en(), eu(k), es(), ee()
				}, []);
				let ee = () => {
						if (!("serviceWorker" in navigator)) {
							console.log("Service worker not supported");
							return
						}
						window.navigator.serviceWorker.register("/sw.js", {
							scope: "."
						}).then(function(e) {
							console.log("Service Worker registration successful with scope: ", e.scope)
						}, function(e) {
							console.log("Service Worker registration failed: ", e)
						})
					},
					et = (0, l.useCallback)(() => {
						if (window.location.hash.startsWith("#chat=")) {
							let e = window.location.hash.split("=")[1],
								t = j.find(t => t.id === e);
							t && (b(t.id), m(t.title))
						}
					}, [j]);
				(0, l.useEffect)(() => (j.length && et(), window.addEventListener("hashchange", et), () => window.removeEventListener("hashchange", et)), [j]), (0, l.useEffect)(() => {
					(0, a.cF)().setItem("TM_useChatList", JSON.stringify(j))
				}, [j]), (0, l.useEffect)(() => {
					h && w(e => e.map(e => e.id === y ? {
						...e,
						title: h
					} : e))
				}, [h]);
				let es = () => {
						window.document.addEventListener("visibilitychange", () => {
							Y && U(!1)
						})
					},
					en = async () => {
						try {
							let e = await fetch("/config.json"),
								t = await e.json();
							V(t)
						} catch (e) {
							console.error(e)
						}
					}, er = () => {
						try {
							let e = JSON.parse((0, a.cF)().getItem("TM_useChatList") || "[]"),
								t = e.filter((e, t, s) => t === s.findIndex(t => t.id === e.id));
							w(t)
						} catch (e) {
							console.error(e)
						}
					}, ei = e => {
						w(t => [e, ...t])
					}, el = () => {
						let e = (0, M.Z)();
						window.history.replaceState(void 0, void 0, "#chat=" + e), b(e), m(""), g([])
					}, ea = (e, t) => {
						w(s => s.map(s => s.id === e ? {
							...s,
							title: t
						} : s))
					}, eo = e => {
						let t = e.id,
							s = (0, a.cF)().getItem("CHAT_" + t),
							n = JSON.parse(s),
							r = {
								...n,
								favoritedAt: n.favoritedAt ? null : new Date
							};
						(0, a.cF)().setItem("CHAT_" + t, JSON.stringify(r)), w(e => e.map(e => e.id === t ? {
							...e,
							favoritedAt: r.favoritedAt
						} : e))
					}, ec = e => {
						w(t => t.filter(t => t.id !== e)), el(), setTimeout(() => {
							(0, a.cF)().removeItem("CHAT_" + e)
						}, 100)
					}, ed = e => {
						m(e)
					}, eu = async e => {
						if (!e) {
							O(!1);
							return
						}
						try {
							let t = await fetch("https://www.typingmind.com/api/license", {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({
									key: e
								})
							});
							if (500 === t.status) {
								await t.json(), O(!1);
								return
							}
							if (t.status >= 400) {
								let e = await t.json();
								console.error(e), O(!1);
								return
							}
							if (!t.ok) {
								console.error(t), O(!1);
								return
							}
							let s = await t.json();
							try {
								let e = await (0, o.uM)(s.token);
								$(e)
							} catch (e) {
								console.error(e), O(!1);
								return
							}
							return C(e), O(!0), !0
						} catch (e) {
							console.error(e), O(!1)
						}
					}, eh = e => {
						g(e)
					}, ex = e => {
						w(t => t.map(t => {
							var s;
							return t.id === y ? {
								...t,
								updatedAt: Date.now(),
								preview: (null == e ? void 0 : null === (s = e.content) || void 0 === s ? void 0 : s.substring(0, 50)) || ""
							} : t
						}));
						let t = Math.floor((Date.now() - H) / 1e3);
						f.length > 1 && !T && t > 120 && (R(!0), q(Date.now()))
					}, em = () => {
						K(!0)
					}, ef = e => {
						w(t => t.filter(t => !e.includes(t.id))), setTimeout(() => {
							e.forEach(e => {
								(0, a.cF)().removeItem("CHAT_" + e)
							})
						}, 100)
					};
				return (0, n.jsxs)("div", {
					children: [J.hosted ? (0, n.jsx)(r.Z, {
						showNotification: Y,
						title: J.brand + " – " + J.tagline
					}, "hosted") : (0, n.jsx)(r.Z, {
						showNotification: Y
					}, "cloud"), (0, n.jsx)(eA, {
						chatID: y,
						chats: j,
						onToggleFavorite: eo,
						onDeleteChat: ec,
						onDeleteChats: ef,
						onEditChatTitle: ea,
						onNewChatRequested: el,
						onChatSelected: e => {
							window.history.replaceState(void 0, void 0, "#chat=" + e.id), b(e.id), m(e.title)
						},
						licenseVerified: T,
						setLicenseVerified: O,
						setOpenBuy: I,
						setOpenLicenseKey: D,
						onOpenSettings: em,
						hostConfig: J,
						children: t => {
							let {
								sidebarOpen: r,
								setSidebarOpen: l
							} = t;
							return (0, n.jsxs)("main", {
								className: "relative",
								children: [(0, n.jsxs)("div", {
									className: "hide-when-print sticky top-0 z-30 bg-white dark:bg-zinc-700 backdrop-blur",
									children: [(0, n.jsx)("div", {
										className: "flex lg:hidden absolute left-1 top-0 bottom-0 items-center justify-center",
										children: (0, n.jsxs)("button", {
											type: "button",
											className: "inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:text-gray-100",
											onClick: e => {
												e.preventDefault(), e.stopPropagation(), l(!0)
											},
											onTouchEnd: e => {
												e.preventDefault(), e.stopPropagation(), l(!0)
											},
											children: [(0, n.jsx)("span", {
												className: "sr-only",
												children: "Open sidebar"
											}), (0, n.jsx)(W, {
												className: "h-6 w-6",
												"aria-hidden": "true"
											})]
										})
									}), J.hosted ? null : (0, n.jsx)("div", {
										className: "absolute right-2 top-0 bottom-0 flex items-center justify-center",
										children: s ? (0, n.jsx)("button", {
											type: "button",
											className: "inline-flex items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 py-2 px-2 space-x-2 text-sm",
											onClick: () => I(!0),
											children: (0, n.jsx)(S.WYw, {
												className: "h-6 w-6 text-red-500",
												"aria-hidden": "true"
											})
										}) : null
									}), s ? (0, n.jsx)(z.Z, {
										model: G,
										chatTitle: h,
										messages: f
									}) : (0, n.jsx)("div", {
										className: "text-center py-4 font-semibold text-gray-500 flex items-center justify-center",
										children: (0, n.jsx)(i.Z, {})
									})]
								}), J.hosted ? (0, n.jsx)("div", {
									className: "p-6 sm:p-10 flex items-center justify-center",
									children: (0, n.jsxs)("div", {
										children: [(0, n.jsxs)("div", {
											className: "flex items-center justify-center space-x-2",
											children: [(0, n.jsx)("img", {
												src: "/favicon-192x192.png",
												alt: J.brand,
												className: "rounded-lg w-12 h-12"
											}), (0, n.jsx)("div", {
												className: "font-semibold text-4xl sm:text-5xl text-black dark:text-white ",
												children: J.brand
											})]
										}), (0, n.jsx)("div", {
											className: "text-center my-4 font-light text-base sm:text-xl my-4 sm:my-6 text-black dark:text-white",
											children: J.tagline
										}), (0, n.jsx)(d.Z, {
											onCompleted: () => {
												setError(""), textareaRef.current.focus()
											}
										})]
									})
								}) : null, 0 === j.length ? (0, n.jsx)(c, {
									setChats: w
								}) : null, s ? (0, n.jsx)(x, {
									children: t => {
										let {
											defaultMessages: s
										} = t;
										return (0, n.jsx)(eI.Z, {
											apiKey: e,
											licenseKey: k,
											setOpenBuy: I,
											chatID: y,
											chatTitle: h,
											defaultMessages: s,
											onMessagesChanged: eh,
											onNewChatPersisted: ei,
											onNewChatRequested: el,
											onChatTitleUpdated: ed,
											onChatUpdated: ex,
											showBrand: !J.hosted,
											onModelChanged: X,
											onNotification: U
										}, y)
									}
								}) : null, (0, n.jsx)(Z, {
									licenseVerified: T,
									verifyLicenseKey: eu
								})]
							})
						}
					}), (0, n.jsx)(B, {
						setOpenLicenseKey: D,
						open: A,
						setOpen: I
					}), (0, n.jsx)(F, {
						open: E,
						setOpen: D,
						setOpenBuy: I,
						setLicenseVerified: O
					}), (0, n.jsx)(N, {
						open: _,
						setOpen: R,
						setOpenLicenseKey: D,
						setOpenBuy: I
					}), s ? (0, n.jsx)(v, {}) : null, (0, n.jsx)(L, {
						open: P,
						setOpen: K,
						chats: j,
						setChats: w
					}), (0, n.jsx)(p, {
						onLoaded: er
					})]
				})
			}
		}
	},
	function(e) {
		e.O(0, [774, 445, 617, 556, 228, 260, 662, 266, 717, 555, 957, 610, 888, 179], function() {
			return e(e.s = 75557)
		}), _N_E = e.O()
	}
]);