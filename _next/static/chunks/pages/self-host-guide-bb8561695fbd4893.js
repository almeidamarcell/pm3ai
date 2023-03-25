(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[524], {
		44950: function(e, i, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/self-host-guide", function() {
				return t(89622)
			}])
		},
		89622: function(e, i, t) {
			"use strict";
			t.r(i), t.d(i, {
				default: function() {
					return l
				}
			});
			var o = t(85893),
				s = t(51448),
				n = t(89290);

			function l() {
				return (0, o.jsx)(o.Fragment, {
					children: (0, o.jsxs)("div", {
						className: "min-h-screen",
						children: [(0, o.jsx)(s.Z, {
							title: "Self-host Guide"
						}), (0, o.jsx)("div", {
							className: "py-10 ",
							children: (0, o.jsxs)("main", {
								children: [(0, o.jsx)("div", {
									className: "my-10 text-center",
									children: (0, o.jsx)("a", {
										href: "/",
										className: "text-blue-500 hover:underline",
										children: "Go back to TypingMind.com"
									})
								}), (0, o.jsx)("h1", {
									className: "text-2xl text-center my-10",
									children: "Self-host Guide"
								}), (0, o.jsxs)("section", {
									className: "px-5 max-w-xl mx-auto sm:px-10",
									children: [(0, o.jsx)("h2", {
										className: "text-2xl font-bold leading-10 tracking-tight  my-4",
										children: "How to deploy:"
									}), (0, o.jsxs)("ul", {
										className: "list-disc pl-4",
										children: [(0, o.jsx)("li", {
											children: "Extract the zip file into a folder."
										}), (0, o.jsx)("li", {
											children: 'Upload the "out" folder to any static web hosting (Netlify, GitHub Pages, Cloudflare Pages, AWS S3, etc.) to host the files. That\'s it!'
										}), (0, o.jsxs)("li", {
											children: ["You must deploy the app at the root level of your domain or subdomain. Deploy under a subfolder will not work. For example: ", (0, o.jsx)("b", {
												children: "https://yourdomain.com/"
											}), " will work,", " ", (0, o.jsx)("b", {
												children: "https://chat.yourdomain.com/"
											}), " will work,", " ", (0, o.jsx)("b", {
												children: "https://yourdomain.com/typingmind/"
											}), " will not work."]
										}), (0, o.jsx)("li", {
											children: "The zip file name indicates the version of the app. There maybe a new version available online. To receive the latest version of the app, go to https://typingmind.com/self-host-guide for more information."
										}), (0, o.jsx)("li", {
											children: "Note that in the current self-hosted version of TypingMind, it is not possible to change the branding name and customize the UI."
										})]
									}), (0, o.jsx)("h2", {
										className: "text-2xl font-bold leading-10 tracking-tight  my-4",
										children: "Your License:"
									}), (0, o.jsxs)("ul", {
										className: "list-disc pl-4",
										children: [(0, o.jsx)("li", {
											children: "✅ You only have access to the compiled code of the app."
										}), (0, o.jsx)("li", {
											children: "✅ You have permission to deploy and use the compiled code on your own server."
										}), (0, o.jsx)("li", {
											children: "❌ You do not have permissions to modify or redistribute the compiled code."
										}), (0, o.jsx)("li", {
											children: "❌ You do not have permissions to share or resell the compiled code."
										})]
									}), (0, o.jsx)("div", {
										className: "mt-10",
										children: (0, o.jsx)(n.Z, {})
									})]
								})]
							})
						})]
					})
				})
			}
		}
	},
	function(e) {
		e.O(0, [823, 774, 888, 179], function() {
			return e(e.s = 44950)
		}), _N_E = e.O()
	}
]);