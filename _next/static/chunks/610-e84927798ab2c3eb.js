"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[610], {
		50456: function(e, t, a) {
			a(85893), a(67294), a(41908), a(55623), a(39590), a(87260), a(64597)
		},
		28610: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return e5
				}
			});
			var s = a(85893),
				n = a(67294),
				i = a(64597);
			let r = (0, i.eK)("useOutputFormat");

			function o(e) {
				let {} = e, [t, a] = r("");
				return (0, s.jsxs)("div", {
					className: "relative w-full max-w-xs mx-auto",
					children: [(0, s.jsx)("label", {
						htmlFor: "name",
						className: function() {
							for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
							return t.filter(Boolean).join(" ")
						}("absolute -top-2 left-2 inline-block bg-white dark:bg-zinc-800 px-1 text-xs font-medium ", t ? "text-orange-500" : "text-gray-500"),
						children: "Format"
					}), (0, s.jsxs)("select", {
						value: t,
						onChange: e => {
							a(e.target.value)
						},
						className: "block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-gray-500",
						children: [(0, s.jsx)("option", {
							value: "",
							children: "Default"
						}), (0, s.jsx)("option", {
							disabled: !0,
							children: "____________________"
						}), (0, s.jsx)("option", {
							value: "Answer as concise as possible",
							children: "Concise"
						}), (0, s.jsx)("option", {
							value: "Think step-by-step",
							children: "Step-by-step"
						}), (0, s.jsx)("option", {
							value: "Answer in painstakingly detail",
							children: "Extreme Detail"
						}), (0, s.jsx)("option", {
							value: "Explain like I'm five",
							children: "ELI5"
						})]
					})]
				})
			}
			var l = a(5434);
			let c = (0, i.eK)("useShowOutputSettings"),
				A = (0, i.eK)("useOutputTone"),
				d = (0, i.eK)("useOutputStyle"),
				u = (0, i.eK)("useOutputLanguage"),
				q = (0, i.eK)("useOutputFormat");

			function g() {
				let [e, t] = A(""), [a, n] = u(""), [i, r] = d(""), [o, g] = c(!1), [V, h] = q(""), m = () => {
					t(""), n(""), r(""), h(""), g(!1)
				};
				return (0, s.jsxs)("button", {
					onClick: m,
					className: "p-1 ml-2 flex items-center justify-center",
					children: [(0, s.jsx)(l.lUB, {
						className: "w-6 h-6"
					}), (0, s.jsx)("span", {
						className: "sm:hidden text-xs text-gray-500 font-semibold",
						children: "Reset to defaults"
					})]
				})
			}
			let V = (0, i.eK)("useOutputTone"),
				h = (0, i.eK)("useOutputStyle"),
				m = (0, i.eK)("useOutputLanguage"),
				p = (0, i.eK)("useOutputFormat");

			function w() {
				let [e, t] = V(""), [a, n] = m(""), [i, r] = h(""), [o, l] = p("");
				return a || i || e || o ? (0, s.jsx)("div", {
					className: "absolute bottom-1 right-1 w-2 h-2 bg-orange-500 rounded-full"
				}) : null
			}
			let x = (0, i.eK)("useOutputStyle");

			function f(e) {
				let {} = e, [t, a] = x("");
				return (0, s.jsxs)("div", {
					className: "relative w-full max-w-xs mx-auto",
					children: [(0, s.jsx)("label", {
						htmlFor: "name",
						className: function() {
							for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
							return t.filter(Boolean).join(" ")
						}("absolute -top-2 left-2 inline-block bg-white dark:bg-zinc-800 px-1 text-xs font-medium ", t ? "text-orange-500" : "text-gray-500"),
						children: "Writing Style"
					}), (0, s.jsxs)("select", {
						value: t,
						onChange: e => a(e.target.value),
						className: "block rounded-md w-full border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-gray-500",
						children: [(0, s.jsx)("option", {
							value: "",
							children: "Default"
						}), (0, s.jsx)("option", {
							disabled: !0,
							children: "____________________"
						}), (0, s.jsx)("option", {
							value: "Academic",
							children: "Academic"
						}), (0, s.jsx)("option", {
							value: "Analytical",
							children: "Analytical"
						}), (0, s.jsx)("option", {
							value: "Argumentative",
							children: "Argumentative"
						}), (0, s.jsx)("option", {
							value: "Conversational",
							children: "Conversational"
						}), (0, s.jsx)("option", {
							value: "Creative",
							children: "Creative"
						}), (0, s.jsx)("option", {
							value: "Critical",
							children: "Critical"
						}), (0, s.jsx)("option", {
							value: "Descriptive",
							children: "Descriptive"
						}), (0, s.jsx)("option", {
							value: "Epigrammatic",
							children: "Epigrammatic"
						}), (0, s.jsx)("option", {
							value: "Epistolary",
							children: "Epistolary"
						}), (0, s.jsx)("option", {
							value: "Expository",
							children: "Expository"
						}), (0, s.jsx)("option", {
							value: "Informative",
							children: "Informative"
						}), (0, s.jsx)("option", {
							value: "Instructive",
							children: "Instructive"
						}), (0, s.jsx)("option", {
							value: "Journalistic",
							children: "Journalistic"
						}), (0, s.jsx)("option", {
							value: "Metaphorical",
							children: "Metaphorical"
						}), (0, s.jsx)("option", {
							value: "Narrative",
							children: "Narrative"
						}), (0, s.jsx)("option", {
							value: "Persuasive",
							children: "Persuasive"
						}), (0, s.jsx)("option", {
							value: "Poetic",
							children: "Poetic"
						}), (0, s.jsx)("option", {
							value: "Satirical",
							children: "Satirical"
						}), (0, s.jsx)("option", {
							value: "Technical",
							children: "Technical"
						})]
					})]
				})
			}
			let y = (0, i.eK)("useOutputTone");

			function v(e) {
				let {} = e, [t, a] = y("");
				return (0, s.jsxs)("div", {
					className: "relative w-full max-w-xs mx-auto",
					children: [(0, s.jsx)("label", {
						htmlFor: "name",
						className: function() {
							for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
							return t.filter(Boolean).join(" ")
						}("absolute -top-2 left-2 inline-block bg-white dark:bg-zinc-800 px-1 text-xs font-medium ", t ? "text-orange-500" : "text-gray-500"),
						children: "Tone"
					}), (0, s.jsxs)("select", {
						value: t,
						onChange: e => {
							a(e.target.value)
						},
						className: "block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-gray-500",
						children: [(0, s.jsx)("option", {
							value: "",
							children: "Default"
						}), (0, s.jsx)("option", {
							disabled: !0,
							children: "____________________"
						}), (0, s.jsx)("option", {
							value: "Authoritative",
							children: "Authoritative"
						}), (0, s.jsx)("option", {
							value: "Clinical",
							children: "Clinical"
						}), (0, s.jsx)("option", {
							value: "Cold",
							children: "Cold"
						}), (0, s.jsx)("option", {
							value: "Confident",
							children: "Confident"
						}), (0, s.jsx)("option", {
							value: "Cynical",
							children: "Cynical"
						}), (0, s.jsx)("option", {
							value: "Emotional",
							children: "Emotional"
						}), (0, s.jsx)("option", {
							value: "Empathetic",
							children: "Empathetic"
						}), (0, s.jsx)("option", {
							value: "Formal",
							children: "Formal"
						}), (0, s.jsx)("option", {
							value: "Friendly",
							children: "Friendly"
						}), (0, s.jsx)("option", {
							value: "Humorous",
							children: "Humorous"
						}), (0, s.jsx)("option", {
							value: "Informal",
							children: "Informal"
						}), (0, s.jsx)("option", {
							value: "Ironic",
							children: "Ironic"
						}), (0, s.jsx)("option", {
							value: "Optimistic",
							children: "Optimistic"
						}), (0, s.jsx)("option", {
							value: "Pessimistic",
							children: "Pessimistic"
						}), (0, s.jsx)("option", {
							value: "Playful",
							children: "Playful"
						}), (0, s.jsx)("option", {
							value: "Sarcastic",
							children: "Sarcastic"
						}), (0, s.jsx)("option", {
							value: "Serious",
							children: "Serious"
						}), (0, s.jsx)("option", {
							value: "Sympathetic",
							children: "Sympathetic"
						}), (0, s.jsx)("option", {
							value: "Tentative",
							children: "Tentative"
						}), (0, s.jsx)("option", {
							value: "Warm",
							children: "Warm"
						})]
					})]
				})
			}
			let b = (0, i.eK)("useOutputLanguage");

			function B(e) {
				let {} = e, [t, a] = b("");
				return (0, s.jsxs)("div", {
					className: "relative w-full max-w-xs mx-auto",
					children: [(0, s.jsx)("label", {
						htmlFor: "name",
						className: function() {
							for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
							return t.filter(Boolean).join(" ")
						}("absolute -top-2 left-2 inline-block bg-white dark:bg-zinc-800 px-1 text-xs font-medium ", t ? "text-orange-500" : "text-gray-500"),
						children: "Output Language"
					}), (0, s.jsxs)("select", {
						value: t,
						onChange: e => {
							a(e.target.value)
						},
						className: "block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-gray-500",
						children: [(0, s.jsx)("option", {
							value: "",
							children: "Default"
						}), (0, s.jsx)("option", {
							disabled: !0,
							children: "____________________"
						}), (0, s.jsx)("option", {
							value: "English",
							children: "English"
						}), (0, s.jsx)("option", {
							value: "Spanish",
							children: "Espa\xf1ol"
						}), (0, s.jsx)("option", {
							value: "French",
							children: "Fran\xe7ais"
						}), (0, s.jsx)("option", {
							value: "German",
							children: "Deutsch"
						}), (0, s.jsx)("option", {
							value: "Italian",
							children: "Italiano"
						}), (0, s.jsx)("option", {
							value: "Portuguese",
							children: "Portugu\xeas"
						}), (0, s.jsx)("option", {
							value: "Polish",
							children: "Polski"
						}), (0, s.jsx)("option", {
							value: "Ukrainian",
							children: "Українська"
						}), (0, s.jsx)("option", {
							disabled: !0,
							children: "____________________"
						}), (0, s.jsx)("option", {
							value: "Somali",
							children: "Af Soomaali"
						}), (0, s.jsx)("option", {
							value: "Afrikaans",
							children: "Afrikaans"
						}), (0, s.jsx)("option", {
							value: "Azerbaijani",
							children: "Azərbaycan dili"
						}), (0, s.jsx)("option", {
							value: "Indonesian",
							children: "Bahasa Indonesia"
						}), (0, s.jsx)("option", {
							value: "Malaysian Malay",
							children: "Bahasa Malaysia"
						}), (0, s.jsx)("option", {
							value: "Malay",
							children: "Bahasa Melayu"
						}), (0, s.jsx)("option", {
							value: "Javanese",
							children: "Basa Jawa"
						}), (0, s.jsx)("option", {
							value: "Sundanese",
							children: "Basa Sunda"
						}), (0, s.jsx)("option", {
							value: "Bosnian",
							children: "Bosanski jezik"
						}), (0, s.jsx)("option", {
							value: "Catalan",
							children: "Catal\xe0"
						}), (0, s.jsx)("option", {
							value: "Czech",
							children: "Čeština"
						}), (0, s.jsx)("option", {
							value: "Chichewa",
							children: "Chichewa"
						}), (0, s.jsx)("option", {
							value: "Welsh",
							children: "Cymraeg"
						}), (0, s.jsx)("option", {
							value: "Danish",
							children: "Dansk"
						}), (0, s.jsx)("option", {
							value: "German",
							children: "Deutsch"
						}), (0, s.jsx)("option", {
							value: "Estonian",
							children: "Eesti keel"
						}), (0, s.jsx)("option", {
							value: "English",
							children: "English"
						}), (0, s.jsx)("option", {
							value: "English (UK)",
							children: "English (UK)"
						}), (0, s.jsx)("option", {
							value: "English (US)",
							children: "English (US)"
						}), (0, s.jsx)("option", {
							value: "Spanish",
							children: "Espa\xf1ol"
						}), (0, s.jsx)("option", {
							value: "Esperanto",
							children: "Esperanto"
						}), (0, s.jsx)("option", {
							value: "Basque",
							children: "Euskara"
						}), (0, s.jsx)("option", {
							value: "French",
							children: "Fran\xe7ais"
						}), (0, s.jsx)("option", {
							value: "Irish",
							children: "Gaeilge"
						}), (0, s.jsx)("option", {
							value: "Galician",
							children: "Galego"
						}), (0, s.jsx)("option", {
							value: "Croatian",
							children: "Hrvatski jezik"
						}), (0, s.jsx)("option", {
							value: "Xhosa",
							children: "isiXhosa"
						}), (0, s.jsx)("option", {
							value: "Zulu",
							children: "isiZulu"
						}), (0, s.jsx)("option", {
							value: "Icelandic",
							children: "\xcdslenska"
						}), (0, s.jsx)("option", {
							value: "Italian",
							children: "Italiano"
						}), (0, s.jsx)("option", {
							value: "Swahili",
							children: "Kiswahili"
						}), (0, s.jsx)("option", {
							value: "Haitian Creole",
							children: "Krey\xf2l Ayisyen"
						}), (0, s.jsx)("option", {
							value: "Kurdish",
							children: "Kurd\xee"
						}), (0, s.jsx)("option", {
							value: "Latin",
							children: "Latīna"
						}), (0, s.jsx)("option", {
							value: "Latvian",
							children: "Latviešu valoda"
						}), (0, s.jsx)("option", {
							value: "Luxembourgish",
							children: "L\xebtzebuergesch"
						}), (0, s.jsx)("option", {
							value: "Lithuanian",
							children: "Lietuvių kalba"
						}), (0, s.jsx)("option", {
							value: "Hungarian",
							children: "Magyar"
						}), (0, s.jsx)("option", {
							value: "Malagasy",
							children: "Malagasy"
						}), (0, s.jsx)("option", {
							value: "Maltese",
							children: "Malti"
						}), (0, s.jsx)("option", {
							value: "Maori",
							children: "Māori"
						}), (0, s.jsx)("option", {
							value: "Dutch",
							children: "Nederlands"
						}), (0, s.jsx)("option", {
							value: "Norwegian",
							children: "Norsk"
						}), (0, s.jsx)("option", {
							value: "Uzbek",
							children: "O'zbek tili"
						}), (0, s.jsx)("option", {
							value: "Polish",
							children: "Polski"
						}), (0, s.jsx)("option", {
							value: "Portuguese",
							children: "Portugu\xeas"
						}), (0, s.jsx)("option", {
							value: "Romanian",
							children: "Rom\xe2nă"
						}), (0, s.jsx)("option", {
							value: "Sesotho",
							children: "Sesotho"
						}), (0, s.jsx)("option", {
							value: "Albanian",
							children: "Shqip"
						}), (0, s.jsx)("option", {
							value: "Slovak",
							children: "Slovenčina"
						}), (0, s.jsx)("option", {
							value: "Slovenian",
							children: "Slovenščina"
						}), (0, s.jsx)("option", {
							value: "Finnish",
							children: "Suomi"
						}), (0, s.jsx)("option", {
							value: "Swedish",
							children: "Svenska"
						}), (0, s.jsx)("option", {
							value: "Tagalog",
							children: "Tagalog"
						}), (0, s.jsx)("option", {
							value: "Tatar",
							children: "Tatar\xe7a"
						}), (0, s.jsx)("option", {
							value: "Turkish",
							children: "T\xfcrk\xe7e"
						}), (0, s.jsx)("option", {
							value: "Vietnamese",
							children: "Tiếng Việt"
						}), (0, s.jsx)("option", {
							value: "Yoruba",
							children: "Yor\xf9b\xe1"
						}), (0, s.jsx)("option", {
							value: "Greek",
							children: "Ελληνικά"
						}), (0, s.jsx)("option", {
							value: "Belarusian",
							children: "Беларуская мова"
						}), (0, s.jsx)("option", {
							value: "Bulgarian",
							children: "Български език"
						}), (0, s.jsx)("option", {
							value: "Kyrgyz",
							children: "Кыр"
						}), (0, s.jsx)("option", {
							value: "Kazakh",
							children: "Қазақ тілі"
						}), (0, s.jsx)("option", {
							value: "Macedonian",
							children: "Македонски јазик"
						}), (0, s.jsx)("option", {
							value: "Mongolian",
							children: "Монгол хэл"
						}), (0, s.jsx)("option", {
							value: "Russian",
							children: "Русский"
						}), (0, s.jsx)("option", {
							value: "Serbian",
							children: "Српски језик"
						}), (0, s.jsx)("option", {
							value: "Tajik",
							children: "Тоҷикӣ"
						}), (0, s.jsx)("option", {
							value: "Ukrainian",
							children: "Українська"
						}), (0, s.jsx)("option", {
							value: "Georgian",
							children: "ქართული"
						}), (0, s.jsx)("option", {
							value: "Armenian",
							children: "Հայերեն"
						}), (0, s.jsx)("option", {
							value: "Yiddish",
							children: "ייִדיש"
						}), (0, s.jsx)("option", {
							value: "Hebrew",
							children: "עברית"
						}), (0, s.jsx)("option", {
							value: "Uyghur",
							children: "ئۇيغۇرچە"
						}), (0, s.jsx)("option", {
							value: "Urdu",
							children: "اردو"
						}), (0, s.jsx)("option", {
							value: "Arabic",
							children: "العربية"
						}), (0, s.jsx)("option", {
							value: "Pashto",
							children: "پښتو"
						}), (0, s.jsx)("option", {
							value: "Persian",
							children: "فارسی"
						}), (0, s.jsx)("option", {
							value: "Nepali",
							children: "नेपाली"
						}), (0, s.jsx)("option", {
							value: "Marathi",
							children: "मराठी"
						}), (0, s.jsx)("option", {
							value: "Hindi",
							children: "हिन्दी"
						}), (0, s.jsx)("option", {
							value: "Bengali",
							children: "বাংলা"
						}), (0, s.jsx)("option", {
							value: "Punjabi",
							children: "ਪੰਜਾਬੀ"
						}), (0, s.jsx)("option", {
							value: "Gujarati",
							children: "ગુજરાતી"
						}), (0, s.jsx)("option", {
							value: "Oriya",
							children: "ଓଡ଼ିଆ"
						}), (0, s.jsx)("option", {
							value: "Tamil",
							children: "தமிழ்"
						}), (0, s.jsx)("option", {
							value: "Telugu",
							children: "తెలుగు"
						}), (0, s.jsx)("option", {
							value: "Kannada",
							children: "ಕನ್ನಡ"
						}), (0, s.jsx)("option", {
							value: "Malayalam",
							children: "മലയാളം"
						}), (0, s.jsx)("option", {
							value: "Sinhala",
							children: "සිංහල"
						}), (0, s.jsx)("option", {
							value: "Thai",
							children: "ไทย"
						}), (0, s.jsx)("option", {
							value: "Lao",
							children: "ພາສາລາວ"
						}), (0, s.jsx)("option", {
							value: "Burmese",
							children: "ဗမာစာ"
						}), (0, s.jsx)("option", {
							value: "Khmer",
							children: "ភាសាខ្មែរ"
						}), (0, s.jsx)("option", {
							value: "Korean",
							children: "한국어"
						}), (0, s.jsx)("option", {
							value: "Chinese",
							children: "中文"
						}), (0, s.jsx)("option", {
							value: "Traditional Chinese",
							children: "繁體中文"
						}), (0, s.jsx)("option", {
							value: "Japanese",
							children: "日本語"
						})]
					})]
				})
			}
			var j = a(11541),
				C = a(87260),
				M = a(89583),
				Y = JSON.parse('[{"id":"standup_comedian","title":"Standup Comedian","instruction":"You are a standup comedian, you make people laugh with your satire, jokes and humor. You answer everything in a humorous way to cheer the user up. Use satire and make fun of everything the user says in a positive way.","description":"A standup comedian who can make you laugh with their jokes and humor.","color":"#F0FFF0"},{"id":"life_coach","title":"Life Coach","instruction":"You are a life coach, you help the user identify and achieve their goals, motivate them, and provide support and encouragement.","description":"A life coach who can help you set and achieve personal and professional goals.","color":"#F0F8FF"},{"id":"career_counselor","title":"Career Counselor","instruction":"You are a career counselor, you help the user with their career-related concerns, such as job searching, resume writing, interview preparation, networking, and career planning.","description":"A career counselor who can help you with anything related to your career, from job searching to career planning.","color":"#F5F5DC"},{"id":"nutritionist","title":"Nutritionist","instruction":"You are a nutritionist, you help the user with their nutritional needs by providing advice on healthy eating habits, recipes, dietary restrictions and recommendations.","description":"A nutritionist who can help you with your dietary needs by providing recipes, advice on healthy eating habits, and dietary recommendations.","color":"#F5DEB3"},{"id":"product_manager","title":"Product Manager","instruction":"You are a product manager, you oversee the development and marketing of a product, identify customer needs, and work with engineers and designers to create a product roadmap.","description":"A product manager who can oversee the development and marketing of a product, identify customer needs, and work with engineers and designers to create a product roadmap.","color":"#d5ffd5"},{"id":"personal_trainer","title":"Personal Trainer","instruction":"You are a personal trainer, you help the user create and follow a personalized fitness plan, track progress, and provide guidance and motivation through workout routines.","description":"A personal trainer who can help you stay fit and improve your health by creating personalized fitness plans and providing workout routines.","color":"#FFE4C4"},{"id":"life_hacker","title":"Life Hacker","instruction":"You are a life hacker, you provide useful tips and tricks to help the user optimize their daily routines, save time, and increase productivity.","description":"A life hacker who can provide useful tips and tricks to help you optimize your daily routines, save time, and increase productivity.","color":"#ededff"},{"id":"travel_advisor","title":"Travel Advisor","instruction":"You are a travel advisor, you suggest travel destinations based on the user\'s preferences and budget, provide recommendations on transportation, accommodations, and activities, and help plan the itinerary.","description":"A travel advisor who can suggest travel destinations, provide recommendations on transportation and accommodations, and help you plan your itinerary based on your preferences and budget.","color":"#FFFACD"},{"id":"mindfulness_coach","title":"Mindfulness Coach","instruction":"You are a mindfulness coach, you guide the user through meditation and relaxation techniques, help them focus on the present moment, and reduce stress and anxiety.","description":"A mindfulness coach who can guide you through meditation and relaxation techniques to help you focus on the present moment and reduce stress and anxiety.","color":"#FAFAD2"},{"id":"financial_advisor","title":"Financial Advisor","instruction":"You are a financial advisor, you provide advice on budgeting, saving, investing, retirement planning, and other financial issues.","description":"A financial advisor who can provide advice on budgeting, saving, investing, retirement planning, and other financial issues.","color":"#D3D3D3"},{"id":"language_tutor","title":"Language Tutor","instruction":"You are a language tutor, you help the user improve their language skills through conversation practice, vocabulary building, and grammar lessons.","description":"A language tutor who can help you improve your language skills through conversation practice, vocabulary building, and grammar lessons.","color":"#F8F8FF"},{"id":"travel_guide","title":"Travel Guide","instruction":"You are a travel guide, you provide information about tourist attractions, historical sites, culture, and customs of various travel destinations.","description":"A travel guide who can help you explore various travel destinations and learn about their tourist attractions, culture, and customs.","color":"#E0FFFF"},{"id":"marketing_expert","title":"Marketing Expert","instruction":"You are a marketing expert, you help the user develop marketing strategies and campaigns, conduct market research, and provide branding and advertising advice.","description":"A marketing expert who can help you develop effective marketing strategies and campaigns, conduct market research, and provide branding and advertising advice.","color":"#F5F5F5"},{"id":"software_developer","title":"Software Developer","instruction":"You are a software developer, you develop software programs and applications using programming languages and development tools.","description":"A software developer who can help you develop software programs and applications using programming languages and development tools.","color":"#E6E6FA"},{"id":"dating_coach","title":"Dating Coach","instruction":"You are a dating coach, you help the user with their dating and relationship concerns, such as online dating, first dates, communication, and breakup advice.","description":"A dating coach who can provide advice on online dating, first dates, communication, and breakup advice.","color":"#DCDCDC"},{"id":"diy_expert","title":"DIY Expert","instruction":"You are a DIY expert, you provide advice and guidance on do-it-yourself projects, such as home improvement, woodworking, and crafting.","description":"A DIY expert who can provide advice and guidance on do-it-yourself projects, such as home improvement, woodworking, and crafting.","color":"#EEE8AA"},{"id":"journalist","title":"Journalist","instruction":"You are a journalist, you research and report on newsworthy events, conduct interviews, and write news articles and stories.","description":"A journalist who can research and report on newsworthy events, conduct interviews, and write news articles and stories.","color":"#FFEFD5"},{"id":"tech_writer","title":"Tech Writer","instruction":"You are a tech writer, you write technical documentation, manuals, and guides for software, hardware, and technology products.","description":"A tech writer who can write technical documentation, manuals, and guides for software, hardware, and technology products.","color":"#F0FAF0"},{"id":"professional_chef","title":"Professional Chef","instruction":"You are a professional chef, you cook and prepare meals in a variety of cuisines, and provide advice on cooking techniques and ingredients.","description":"A professional chef who can cook and prepare meals in a variety of cuisines and provide advice on cooking techniques and ingredients.","color":"#FDF5E6"},{"id":"professional_salesperson","title":"Professional Salesperson","instruction":"You are a professional salesperson, you sell products or services, negotiate deals, and provide advice on sales strategies and techniques.","description":"A professional salesperson who can sell products or services, negotiate deals, and provide advice on sales strategies and techniques.","color":"#F5FFFA"},{"id":"startup_tech_lawyer","title":"Startup Tech Lawyer","instruction":"You are a startup tech lawyer, you provide legal advice and guidance to startups and technology businesses on intellectual property, contracts, and regulatory compliance.","description":"A startup tech lawyer who can provide legal advice and guidance to startups and technology businesses on intellectual property, contracts, and regulatory compliance.","color":"#FAEBD7"},{"id":"graphic_designer","title":"Graphic Designer","instruction":"You are a graphic designer, you design graphics and visual materials for various media such as websites, advertisements, and branding. You make use of typography, imagery and creative layout to communicate ideas and messages visually. Always strive to create unique designs that will stand out and grab attention.","description":"A graphic designer who can create unique visual materials for various media such as websites, advertisements, and branding.","color":"#c1e7ff"},{"id":"academic_researcher","title":"Academic Researcher","instruction":"You are an academic researcher, you conduct research, analyze data, and publish findings in academic journals and conferences.","description":"An academic researcher who can conduct research, analyze data, and publish findings in academic journals and conferences.","color":"#C2DFFF"},{"id":"customer_support_agent","title":"Customer Support Agent","instruction":"You are a customer support agent, you provide help and support to customers with their inquiries, complaints, and other related issues.","description":"A customer support agent who can provide help and support to customers with their inquiries, complaints, and other related issues.","color":"#ffe3e3"},{"id":"hr_consultant","title":"HR Consultant","instruction":"You are an HR consultant, you provide advice and guidance to businesses and organizations on human resources issues, such as recruiting, hiring, training, and employee relations.","description":"An HR consultant who can provide advice and guidance on human resources issues.","color":"#FFF0CB"}]');

			function I(e) {
				let {
					onCharacterSelected: t
				} = e, [a, i] = (0, n.useState)(!1);
				return (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsxs)("button", {
						onClick: () => i(!0),
						className: "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm shadow-md bg-indigo-600 text-white hover:bg-indigo-500 transition-all active:bg-indigo-600 group space-x-2",
						children: [(0, s.jsx)(M.q1E, {
							className: "w-4 h-4"
						}), (0, s.jsx)("span", {
							children: "Select Character"
						})]
					}), (0, s.jsxs)(C.Z, {
						wide2: !0,
						open: a,
						setOpen: i,
						children: [(0, s.jsx)("h2", {
							className: "text-center text-xl font-semibold",
							children: "Select an AI Character"
						}), (0, s.jsx)("div", {
							className: "grid grid-cols-2 gap-2 mt-4",
							children: Y.map(e => (0, s.jsxs)("button", {
								onClick: () => {
									t(e), i(!1)
								},
								className: "border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 text-left flex items-start justify-start flex-col hover:scale-105 hover:shadow-md transition-all dark:invert text-black",
								style: {
									background: e.color
								},
								children: [(0, s.jsxs)("div", {
									className: "text-lg font-semibold mb-2 flex items-center justify-center space-x-2 leading-6",
									children: [(0, s.jsx)(M.q1E, {
										className: "w-4 h-4"
									}), (0, s.jsx)("span", {
										children: e.title
									})]
								}), (0, s.jsx)("div", {
									className: "text-xs text-gray-500",
									children: e.description
								})]
							}, e.id))
						})]
					})]
				})
			}
			var D = a(83991),
				E = a(8193),
				G = a(54426),
				k = a(57632),
				N = a(93463);
			let F = (0, i.eK)("useUserPrompts");

			function T(e) {
				let {
					show: t,
					setShow: a
				} = e, [i, r] = (0, n.useState)(""), [o, l] = (0, n.useState)(""), [c, A] = (0, n.useState)(""), [d, u] = F([]), q = (0, n.useRef)(null);
				(0, n.useEffect)(() => {
					if (t) {
						var e;
						null === (e = q.current) || void 0 === e || e.focus()
					}
				}, [t]);
				let g = () => {
						i && c && (u([{
							id: "pr-" + (0, k.Z)(),
							title: i,
							description: o,
							prompt: c,
							createdAt: new Date,
							lastUsedAt: new Date
						}, ...d]), r(""), l(""), A(""), a(!1))
					},
					V = e => {
						if ("Escape" === e.key) {
							e.preventDefault(), a(!1);
							return
						}
						if ("Enter" === e.key && e.metaKey) {
							e.preventDefault(), g();
							return
						}
					};
				return (0, s.jsxs)("div", {
					children: [(0, s.jsx)("div", {
						className: "font-semibold my-1",
						children: "Title:"
					}), (0, s.jsx)("input", {
						onKeyDown: V,
						ref: q,
						type: "text",
						placeholder: "Prompt Title (e.g., 'Domain Names Inspirations')",
						className: "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
						value: i,
						onChange: e => r(e.target.value)
					}), (0, s.jsx)("div", {
						className: "font-semibold mb-1 mt-3",
						children: "Description (optional):"
					}), (0, s.jsx)("input", {
						type: "text",
						placeholder: "E.g., A list of domain names based on topics",
						className: "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
						value: o,
						onChange: e => l(e.target.value),
						onKeyDown: V
					}), (0, s.jsxs)("div", {
						className: " mb-1 mt-3",
						children: [(0, s.jsx)("span", {
							className: "font-semibold ",
							children: "Prompt:"
						}), (0, s.jsxs)("span", {
							className: "text-xs ml-2",
							children: ["Use", " ", (0, s.jsx)("code", {
								className: "text-xs bg-gray-200 dark:bg-zinc-900",
								children: "{{your content here}}"
							}), " ", "to indicate the fill in the blank part."]
						})]
					}), (0, s.jsx)(N.Z, {
						className: "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
						minRows: 3,
						placeholder: "Enter your prompt here...",
						value: c,
						onChange: e => A(e.target.value),
						onKeyDown: V
					}), (0, s.jsxs)("div", {
						className: "my-2 text-center",
						children: [(0, s.jsxs)("button", {
							onClick: g,
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap gap-1",
							children: [(0, s.jsx)(E.Lfi, {
								className: "w-4 h-4"
							}), (0, s.jsx)("span", {
								children: "Add Prompt"
							})]
						}), (0, s.jsx)("button", {
							onClick: () => a(!1),
							className: " text-black dark:text-white transition font-bold py-2 px-4 rounded inline-flex space-x-1 justify-center items-center",
							children: (0, s.jsx)("span", {
								children: "Cancel"
							})
						})]
					})]
				})
			}
			var L = a(14364);
			let Q = [{
				name: "Your Prompts"
			}, {
				name: "Community Prompts"
			}];

			function R() {
				for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
				return t.filter(Boolean).join(" ")
			}

			function S(e) {
				let {
					userPrompts: t,
					selectedLibName: a,
					setSelectedLibName: n
				} = e;
				return (0, s.jsxs)("div", {
					className: "mt-4",
					children: [(0, s.jsxs)("div", {
						className: "sm:hidden",
						children: [(0, s.jsx)("label", {
							htmlFor: "tabs",
							className: "sr-only",
							children: "Select a tab"
						}), (0, s.jsx)("select", {
							id: "tabs",
							name: "tabs",
							className: "block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-zinc-800",
							value: a,
							onChange: e => {
								console.log(e.target.value), n(e.target.value)
							},
							children: Q.map(e => (0, s.jsx)("option", {
								children: e.name
							}, e.name))
						})]
					}), (0, s.jsx)("div", {
						className: "hidden sm:block",
						children: (0, s.jsx)("div", {
							className: "border-b border-gray-200",
							children: (0, s.jsx)("nav", {
								className: "-mb-px flex space-x-8",
								"aria-label": "Tabs",
								children: Q.map(e => (0, s.jsxs)("button", {
									onClick: () => n(e.name),
									className: R(e.name === a ? "border-blue-500 text-blue-600 dark:text-blue-500" : "border-transparent text-gray-500 dark:text-gray-200 hover:border-gray-200 dark:hover:text-gray-400 hover:text-gray-700", "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"),
									"aria-current": e.name === a ? "page" : void 0,
									children: [e.name, (0, s.jsx)("span", {
										className: R(e.name === a ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-900", "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"),
										children: "Your Prompts" === e.name ? t.length : L.Ri.length
									})]
								}, e.name))
							})
						})
					})]
				})
			}

			function P(e) {
				let {
					promptItem: t,
					onUpdate: a,
					onCancel: i
				} = e, [r, o] = (0, n.useState)(t.title), [l, c] = (0, n.useState)(t.description), [A, d] = (0, n.useState)(t.prompt), [u, q] = (0, n.useState)(""), g = (0, n.useRef)(null);
				(0, n.useEffect)(() => {
					setTimeout(() => {
						var e;
						null === (e = g.current) || void 0 === e || e.focus()
					}, 100)
				}, []);
				let V = () => {
						if (!r || !A) {
							q("Title and prompt cannot be empty!");
							return
						}
						a({
							id: t.id,
							title: r,
							description: l,
							prompt: A
						})
					},
					h = e => {
						if ("Escape" === e.key) {
							e.preventDefault(), null == i || i();
							return
						}
						if ("Enter" === e.key && e.metaKey) {
							e.preventDefault(), V();
							return
						}
					};
				return (0, s.jsxs)("div", {
					children: [(0, s.jsx)("div", {
						className: "font-semibold my-1",
						children: "Title:"
					}), (0, s.jsx)("input", {
						ref: g,
						type: "text",
						placeholder: t.title,
						className: "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
						value: r,
						onChange: e => o(e.target.value),
						onKeyDown: h
					}), (0, s.jsx)("div", {
						className: "font-semibold mb-1 mt-3",
						children: "Description (optional):"
					}), (0, s.jsx)("input", {
						type: "text",
						placeholder: t.description || "",
						className: "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
						value: l,
						onChange: e => c(e.target.value),
						onKeyDown: h
					}), (0, s.jsxs)("div", {
						className: " mb-1 mt-3",
						children: [(0, s.jsx)("span", {
							className: "font-semibold ",
							children: "Prompt:"
						}), (0, s.jsxs)("span", {
							className: "text-xs ml-2",
							children: ["Use", " ", (0, s.jsx)("code", {
								className: "text-xs bg-gray-200 dark:bg-zinc-900",
								children: "{{your content here}}"
							}), " ", "to indicate the fill in the blank part."]
						})]
					}), (0, s.jsx)(N.Z, {
						className: "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
						minRows: 3,
						placeholder: t.prompt,
						value: A,
						onChange: e => d(e.target.value),
						onKeyDown: h
					}), u && (0, s.jsxs)("p", {
						className: "my-2 text-sm text-red-500",
						children: [" ", u]
					}), (0, s.jsxs)("div", {
						className: "my-2 flex items-center space-x-2 justify-center text-center",
						children: [(0, s.jsx)("button", {
							onClick: V,
							className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap",
							children: (0, s.jsx)("span", {
								children: "Update Prompt"
							})
						}), (0, s.jsx)("button", {
							onClick: i,
							className: " text-black dark:text-white transition font-bold py-2 px-4 rounded inline-flex space-x-1 justify-center items-center",
							children: (0, s.jsx)("span", {
								children: "Cancel"
							})
						})]
					})]
				})
			}
			var K = a(34656);
			let W = (0, i.eK)("useSelectedPromptLib"),
				H = (0, i.eK)("useUserPrompts"),
				O = (e, t) => "" === t ? e : e.filter(e => {
					var a, s, n, i, r, o;
					return (null === (a = null === (s = e.prompt) || void 0 === s ? void 0 : s.toLowerCase()) || void 0 === a ? void 0 : a.includes(t.toLowerCase())) || (null === (n = null === (i = e.description) || void 0 === i ? void 0 : i.toLowerCase()) || void 0 === n ? void 0 : n.includes(t.toLowerCase())) || (null === (r = null === (o = e.title) || void 0 === o ? void 0 : o.toLowerCase()) || void 0 === r ? void 0 : r.includes(t.toLowerCase()))
				}),
				Z = e => [...e].sort((e, t) => e.favoritedAt && t.favoritedAt ? t.favoritedAt - e.favoritedAt : e.favoritedAt ? -1 : t.favoritedAt ? 1 : e.lastUsedAt && t.lastUsedAt ? t.lastUsedAt - e.lastUsedAt : e.lastUsedAt ? -1 : t.lastUsedAt ? 1 : t.createdAt - e.createdAt);

			function U(e) {
				let {
					usePrompt: t
				} = e, [a, i] = (0, n.useState)(!0), [r, o] = (0, n.useState)(""), [l, c] = W("Your Prompts"), [A, d] = H([]), [u, q] = (0, n.useState)(null), [g, V] = (0, n.useState)(""), [h, m] = (0, n.useState)(!1), p = (0, n.useRef)(null);
				(0, n.useEffect)(() => {
					var e;
					null === (e = p.current) || void 0 === e || e.focus()
				}, []);
				let w = "Your Prompts" === l ? A : L.Ri,
					x = e => {
						d(A.map(t => (t.id === e.id && (t.lastUsedAt = Date.now()), t)))
					},
					f = e => {
						d(A.map(t => (t.id === e.id && (t.favoritedAt ? delete t.favoritedAt : t.favoritedAt = new Date), t)))
					},
					y = e => {
						d(t => {
							let a = t.findIndex(t => t.id === e.id);
							if (-1 === a) return t;
							let s = [...t];
							return s[a] = e, s
						}), q(null)
					};
				return (0, s.jsxs)("div", {
					children: [(0, s.jsx)("h2", {
						className: "text-center text-2xl font-bold text-gray-800 dark:text-white",
						children: "Prompt Library"
					}), (0, s.jsx)(S, {
						userPrompts: A,
						selectedLibName: l,
						setSelectedLibName: c
					}), (0, s.jsxs)("div", {
						className: "mt-4",
						children: [(0, s.jsxs)("div", {
							className: "my-4 flex items-center justify-center gap-2",
							children: [(0, s.jsx)("input", {
								ref: p,
								type: "text",
								placeholder: "Search your prompts",
								className: "w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 dark:bg-zinc-800",
								value: g,
								onChange: e => V(e.target.value),
								onKeyDown: e => {
									"Escape" === e.key && "" !== g && (e.preventDefault(), V(""))
								}
							}), "Your Prompts" === l ? u ? null : (0, s.jsx)("div", {
								className: "text-center",
								children: (0, s.jsxs)("button", {
									onClick: () => m(!0),
									className: "text-blue-500 hover:underline inline-flex justify-center items-center font-semibold space-x-1 shrink-0 truncate py-2 px-2",
									children: [(0, s.jsx)(E.Lfi, {
										className: "w-4 h-4"
									}), (0, s.jsx)("span", {
										children: "Add Prompt"
									})]
								})
							}) : (0, s.jsxs)("div", {
								className: "my-4 text-center",
								children: [(0, s.jsx)("span", {
									children: "Contribute Prompts via: "
								}), (0, s.jsx)("a", {
									href: "https://github.com/trungdq88/chatgpt-prompt-templates",
									target: "_blank",
									rel: "noreferrer noopener",
									className: "text-blue-500 hover:underline inline-flex justify-center items-center font-semibold space-x-1",
									children: "GitHub"
								}), "⋅", (0, s.jsx)("a", {
									href: "https://forms.gle/1mmzLRqGKd3XBAZz8",
									target: "_blank",
									rel: "noreferrer noopener",
									className: "text-blue-500 hover:underline inline-flex justify-center items-center font-semibold space-x-1",
									children: "Google Form"
								})]
							})]
						}), h ? (0, s.jsx)(T, {
							show: h,
							setShow: m
						}) : null, 0 === w.length ? (0, s.jsx)("div", {
							className: "text-center text-gray-500 p-4 border border-2 border-dashed border-gray-300 rounded-lg",
							children: "Your Prompts" === l ? 'You have no saved prompts. Tap "Add Prompt" to add a new prompt.' : "This library is empty"
						}) : 0 === O(w, g).length ? (0, s.jsxs)("div", {
							className: "text-center text-gray-500 p-4 border border-2 border-dashed border-gray-300 rounded-lg",
							children: ['Nothing found for "', g, '"']
						}) : null, u ? null : (0, s.jsx)("div", {
							children: O(Z(w), g).map(e => (0, s.jsxs)("div", {
								className: "p-4 border border-gray-200 dark:border-gray-600 rounded shadow-sm mb-4 flex items-center justify-between space-x-2 gap-3 flex-col sm:flex-row",
								children: [(0, s.jsx)("div", {
									className: "space-y-2 text-right shrink-0",
									children: (0, s.jsx)("button", {
										className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap",
										onClick: () => {
											x(e), t(e)
										},
										children: "→ Use"
									})
								}), (0, s.jsxs)("div", {
									className: "w-full",
									children: [(0, s.jsx)("h3", {
										className: "text-lg font-bold text-gray-800 dark:text-white",
										children: e.title
									}), e.description ? (0, s.jsx)("p", {
										className: "text-gray-500",
										children: e.description
									}) : null, e.source ? (0, s.jsxs)("p", {
										className: "text-gray-500 text-xs my-1",
										children: ["Source: ", e.source]
									}) : null, "Your Prompts" === l ? (0, s.jsxs)("div", {
										className: "flex items-center mt-1 gap-x-4 gap-y-1 flex-wrap",
										children: [(0, s.jsx)("button", {
											onClick: () => {
												q(e)
											},
											className: "text-xs text-blue-500",
											children: "Edit"
										}), (0, s.jsx)(G.Z, {
											onConfirmed: () => {
												d(A.filter(t => t.id !== e.id))
											},
											className: "text-xs text-red-500 hover:undefined",
											children: "Delete"
										}), e.lastUsedAt ? (0, s.jsxs)("div", {
											className: "text-gray-500 text-xs",
											children: ["Last used: ", (0, K.Z)(new Date(e.lastUsedAt))]
										}) : null]
									}) : null]
								}), (0, s.jsx)("div", {
									className: "flex items-center justify-center gap-2",
									children: (0, s.jsx)("button", {
										onClick: () => f(e),
										className: "shrink-0 hover:scale-110 transition-all",
										children: e.favoritedAt ? (0, s.jsx)(E.pHD, {
											className: "text-yellow-500 w-6 h-6"
										}) : (0, s.jsx)(E.y5j, {
											className: "text-yellow-500 w-6 h-6"
										})
									})
								})]
							}, e.id))
						}), (0, s.jsx)("hr", {
							className: "my-4"
						}), u && (0, s.jsx)("div", {
							className: "my-4",
							children: (0, s.jsx)(P, {
								promptItem: u,
								onUpdate: y,
								onCancel: () => q(null)
							})
						})]
					})]
				})
			}

			function z(e) {
				let {
					usePrompt: t,
					className: a,
					label: i
				} = e, [r, o] = (0, n.useState)(!1);
				return (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsxs)("button", {
						onClick: () => o(!0),
						className: a || "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm shadow-md bg-orange-600 text-white hover:bg-orange-500 transition-all active:bg-orange-600 group space-x-2",
						children: [(0, s.jsx)(M.Mp$, {
							className: "w-4 h-4"
						}), (0, s.jsx)("span", {
							children: i || "Prompt Library"
						})]
					}), (0, s.jsx)(C.Z, {
						wide: !0,
						open: r,
						setOpen: o,
						children: (0, s.jsx)(U, {
							usePrompt: e => {
								t(e), o(!1)
							}
						})
					})]
				})
			}
			var J = a(329),
				X = a(63714),
				_ = a(97762);

			function $(e) {
				let {
					chatData: t
				} = e, [a, i] = (0, n.useState)(!1), r = () => {
					navigator.clipboard.writeText(l()), i(!0), setTimeout(() => {
						i(!1)
					}, 2e3)
				}, o = () => {
					let e = window.document.createElement("a");
					e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(l())), e.setAttribute("download", "typingmind-chat-".concat(t.chatID, ".html")), e.click()
				}, l = () => t.messages.map(e => {
					var t;
					return "<b>".concat((t = e.role).charAt(0).toUpperCase() + t.slice(1), "</b>: ").concat("assistant" === e.role ? (0, _.uS)((0, s.jsx)(J.D, {
						children: e.content,
						remarkPlugins: [X.Z]
					})) : e.content, "<br/>")
				}).join("<br/>");
				return (0, s.jsxs)("div", {
					children: [(0, s.jsx)("div", {
						className: "text-center font-semibold my-5",
						children: "Here is your chat transcript:"
					}), (0, s.jsxs)("div", {
						className: "text-center space-x-2",
						children: [(0, s.jsx)("button", {
							onClick: r,
							className: "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
							children: a ? "Copied!" : "Copy Content"
						}), (0, s.jsx)("button", {
							onClick: o,
							className: "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
							children: "Download .html"
						})]
					}), (0, s.jsx)("pre", {
						className: "bg-gray-200 border border-gray-200 rounded-lg overflow-auto p-4 whitespace-pre-line my-4 dark:bg-zinc-800 dark:border-gray-700 max-h-[200px]",
						children: l()
					})]
				})
			}
			var ee = a(67266),
				et = a.n(ee);
			let ea = "Something went wrong. Please try again.",
				es = {
					assistant: "gpt",
					user: "human"
				};

			function en(e) {
				let {
					chatData: t
				} = e, [a, i] = (0, n.useState)(null), [r, o] = (0, n.useState)(!1), [l, c] = (0, n.useState)(!1), [A, d] = (0, n.useState)(!1), [u, q] = (0, n.useState)(null), [g, V] = (0, n.useState)(!1), h = async () => {
					d(!0), q("");
					try {
						let e = {
								avatarUrl: "data:image/jpeg;base64,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",
								items: [{
									from: "system",
									value: (0, _.uS)((0, s.jsx)("div", {
										children: (0, s.jsx)("small", {
											children: (0, s.jsxs)("i", {
												children: ["This chat conversation is shared from", " ", (0, s.jsx)("a", {
													href: "https://typingmind.com",
													children: (0, s.jsx)("b", {
														children: "TypingMind.com"
													})
												})]
											})
										})
									}))
								}, ...t.messages.filter(e => "assistant" === e.role || "user" === e.role).map(e => ({
									from: es[e.role],
									value: "assistant" === e.role ? (0, _.uS)((0, s.jsx)(J.D, {
										children: e.content,
										remarkPlugins: [X.Z]
									})) : e.content
								}))]
							},
							a = await fetch("https://sharegpt.com/api/conversations", {
								body: JSON.stringify(e),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST"
							});
						if (a.status >= 400) {
							let e = await a.json();
							q(e.userMessage || ea), d(!1);
							return
						}
						if (!a.ok) {
							q(ea), d(!1);
							return
						}
						let n = await a.json();
						i({
							shareLink: "https://shareg.pt/" + n.id
						})
					} catch (e) {
						q(ea), console.error(e)
					}
					d(!1)
				};
				return (0, s.jsx)("div", {
					children: a ? (0, s.jsxs)("div", {
						className: "",
						children: [(0, s.jsx)("div", {
							className: "my-4 text-lg text-center font-bold",
							children: "\uD83C\uDF89 It's done!"
						}), (0, s.jsx)("div", {
							className: "my-4 text-center",
							children: "Please make a copy of the links below, they will not be shown again."
						}), (0, s.jsxs)("div", {
							className: "my-4",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [(0, s.jsx)("div", {
									className: "text-sm font-semibold my-2",
									children: "Your Public Link:"
								}), (0, s.jsx)("div", {
									children: r ? "Copied!" : ""
								})]
							}), (0, s.jsx)("input", {
								onClick: () => {
									o(!0), navigator.clipboard.writeText(a.shareLink)
								},
								className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
								value: a.shareLink,
								readOnly: !0
							})]
						})]
					}) : (0, s.jsxs)("div", {
						children: [(0, s.jsx)("p", {
							className: "my-2 text-lg",
							children: (0, s.jsxs)("b", {
								children: ["Share to", " ", (0, s.jsx)("span", {
									className: "font-semibold text-blue-500",
									children: "ShareGPT"
								})]
							})
						}), (0, s.jsxs)("ul", {
							className: "list-disc pl-4",
							children: [(0, s.jsxs)("li", {
								className: "my-2",
								children: ["This will ", (0, s.jsx)("b", {
									children: "upload"
								}), " your chat conversation to", " ", (0, s.jsx)("b", {
									children: "sharegpt.com"
								}), " and become ", (0, s.jsx)("b", {
									children: "publicly accessible"
								}), " for anyone on the internet."]
							}), (0, s.jsx)("li", {
								className: "my-2",
								children: "You can share a chat multiple times and have different links each time. The link contains the chat conversation and the time it was created."
							})]
						}), u && (0, s.jsx)("div", {
							className: "text-red-500 text-sm font-semibold my-2",
							children: u
						}), (0, s.jsx)("div", {
							className: "flex items-center justify-center",
							children: (0, s.jsxs)("label", {
								className: "flex items-center justify-start gap-2",
								children: [(0, s.jsx)("input", {
									type: "checkbox",
									checked: g,
									onChange: () => V(!g)
								}), (0, s.jsx)("span", {
									children: "I understand my chat will be made public"
								})]
							})
						}), (0, s.jsx)("div", {
							className: "my-4 text-center",
							children: (0, s.jsxs)("button", {
								disabled: A || !g,
								onClick: h,
								className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
								children: [(0, s.jsx)(E.x2q, {
									className: "w-4 h-4"
								}), (0, s.jsx)("span", {
									children: "Share Now"
								})]
							})
						})]
					})
				})
			}

			function ei(e) {
				let {
					chatData: t
				} = e, [a, i] = (0, n.useState)(!1), r = () => {
					navigator.clipboard.writeText(l()), i(!0), setTimeout(() => {
						i(!1)
					}, 2e3)
				}, o = () => {
					let e = window.document.createElement("a");
					e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(l())), e.setAttribute("download", "typingmind-chat-".concat(t.chatID, ".md")), e.click()
				}, l = () => t.messages.map(e => {
					var t;
					return "**".concat((t = e.role).charAt(0).toUpperCase() + t.slice(1), "**: ").concat(e.content, "\n")
				}).join("\n");
				return (0, s.jsxs)("div", {
					children: [(0, s.jsx)("div", {
						className: "text-center font-semibold my-5",
						children: "Here is your chat transcript:"
					}), (0, s.jsxs)("div", {
						className: "text-center space-x-2",
						children: [(0, s.jsx)("button", {
							onClick: r,
							className: "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
							children: a ? "Copied!" : "Copy Content"
						}), (0, s.jsx)("button", {
							onClick: o,
							className: "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
							children: "Download .md"
						})]
					}), (0, s.jsx)("pre", {
						className: "bg-gray-200 border border-gray-200 rounded-lg overflow-auto p-4 whitespace-pre-line my-4 dark:bg-zinc-800 dark:border-gray-700 max-h-[200px]",
						children: l()
					})]
				})
			}
			let er = "Something went wrong. Please try again.";

			function eo(e) {
				let {
					chatData: t
				} = e, [a, i] = (0, n.useState)(null), [r, o] = (0, n.useState)(!1), [l, c] = (0, n.useState)(!1), [A, d] = (0, n.useState)(!1), [u, q] = (0, n.useState)(null), [g, V] = (0, n.useState)(!1), h = async () => {
					d(!0), q("");
					try {
						let e = (0, L.M)(et()(t)),
							a = await fetch("https://www.typingmind.com/api/share", {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({
									chatData: t,
									c: e
								})
							});
						if (a.status >= 400) {
							let e = await a.json();
							q(e.userMessage || er), d(!1);
							return
						}
						if (!a.ok) {
							q(er), d(!1);
							return
						}
						let s = await a.json();
						i(s)
					} catch (e) {
						q(er), console.error(e)
					}
					d(!1)
				};
				return (0, s.jsx)("div", {
					children: a ? (0, s.jsxs)("div", {
						className: "",
						children: [(0, s.jsx)("div", {
							className: "my-4 text-lg text-center font-bold",
							children: "\uD83C\uDF89 It's done!"
						}), (0, s.jsx)("div", {
							className: "my-4 text-center",
							children: "Please make a copy of the links below, they will not be shown again."
						}), (0, s.jsxs)("div", {
							className: "my-4",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [(0, s.jsx)("div", {
									className: "text-sm font-semibold my-2",
									children: "Your Public Link:"
								}), (0, s.jsx)("div", {
									children: r ? "Copied!" : ""
								})]
							}), (0, s.jsx)("input", {
								onClick: () => {
									o(!0), navigator.clipboard.writeText(a.shareLink)
								},
								className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
								value: a.shareLink,
								readOnly: !0
							})]
						}), (0, s.jsxs)("div", {
							className: "my-4",
							children: [(0, s.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [(0, s.jsx)("div", {
									className: "text-sm font-semibold my-2 text-red-500",
									children: "To delete the link above, go here:"
								}), (0, s.jsx)("div", {
									children: l ? "Copied!" : ""
								})]
							}), (0, s.jsx)("input", {
								onClick: () => {
									c(!0), navigator.clipboard.writeText(a.deleteLink)
								},
								className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
								value: a.deleteLink,
								readOnly: !0
							})]
						})]
					}) : (0, s.jsxs)("div", {
						children: [(0, s.jsx)("p", {
							className: "my-2 text-lg",
							children: (0, s.jsxs)("b", {
								children: ["Share to", " ", (0, s.jsx)("span", {
									className: "font-semibold text-blue-500",
									children: "TypingMind Cloud"
								})]
							})
						}), (0, s.jsxs)("ul", {
							className: "list-disc pl-4",
							children: [(0, s.jsxs)("li", {
								className: "my-2",
								children: ["This will ", (0, s.jsx)("b", {
									children: "upload"
								}), " your chat conversation to", " ", (0, s.jsx)("b", {
									children: "cloud.typingmind.com"
								}), " and become ", (0, s.jsx)("b", {
									children: "publicly accessible"
								}), " ", "for anyone on the internet."]
							}), (0, s.jsx)("li", {
								className: "my-2",
								children: "You can share a chat multiple times and have different links each time. The link contains the chat conversation and the time it was created."
							})]
						}), u && (0, s.jsx)("div", {
							className: "text-red-500 text-sm font-semibold my-2",
							children: u
						}), (0, s.jsx)("div", {
							className: "flex items-center justify-center",
							children: (0, s.jsxs)("label", {
								className: "flex items-center justify-start gap-2",
								children: [(0, s.jsx)("input", {
									type: "checkbox",
									checked: g,
									onChange: () => V(!g)
								}), (0, s.jsx)("span", {
									children: "I understand my chat will be made public"
								})]
							})
						}), (0, s.jsx)("div", {
							className: "my-4 text-center",
							children: (0, s.jsxs)("button", {
								disabled: A || !g,
								onClick: h,
								className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
								children: [(0, s.jsx)(E.x2q, {
									className: "w-4 h-4"
								}), (0, s.jsx)("span", {
									children: "Share Now"
								})]
							})
						})]
					})
				})
			}

			function el(e) {
				let {
					chatID: t,
					onPrint: a
				} = e, [r, o] = (0, n.useState)(""), [l, c] = (0, n.useState)(null);
				return (0, n.useEffect)(() => {
					let e = (0, i.cF)().getItem("CHAT_" + t);
					if (e) {
						let t = JSON.parse(e);
						c(t)
					}
				}, []), (0, s.jsxs)("div", {
					children: [(0, s.jsx)("h2", {
						className: "text-xl font-semibold text-center",
						children: "Share This Chat"
					}), "typingmind" === r ? (0, s.jsx)(eo, {
						chatData: l
					}) : "text" === r ? (0, s.jsx)(ei, {
						chatData: l
					}) : "html" === r ? (0, s.jsx)($, {
						chatData: l
					}) : "sharegpt" === r ? (0, s.jsx)(en, {
						chatData: l
					}) : (0, s.jsxs)("div", {
						children: [(0, s.jsx)("div", {
							className: "text-lg font-semibold text-center",
							children: "How do you want to share this chat?"
						}), (0, s.jsx)("div", {
							className: "my-4",
							children: (0, s.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [(0, s.jsx)("div", {
									className: "flex items-center justify-end",
									children: (0, s.jsxs)("button", {
										onClick: () => o("typingmind"),
										className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
										children: [(0, s.jsx)(M.H_w, {
											className: "h-5 w-5"
										}), (0, s.jsx)("span", {
											children: "TypingMind Cloud"
										})]
									})
								}), (0, s.jsxs)("div", {
									children: [(0, s.jsx)("b", {
										children: "TypingMind Cloud"
									}), " is a free online service to share ChatGPT conversations."]
								}), (0, s.jsx)("div", {
									className: "flex items-center justify-end",
									children: (0, s.jsxs)("button", {
										onClick: () => o("text"),
										className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
										children: [(0, s.jsx)(M.mGS, {
											className: "h-5 w-5"
										}), (0, s.jsx)("span", {
											children: "Plain Text (Markdown)"
										})]
									})
								}), (0, s.jsx)("div", {
									children: "Share conversation in Markdown text format"
								}), (0, s.jsx)("div", {
									className: "flex items-center justify-end",
									children: (0, s.jsxs)("button", {
										onClick: () => o("html"),
										className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
										children: [(0, s.jsx)(M.mGS, {
											className: "h-5 w-5"
										}), (0, s.jsx)("span", {
											children: "HTML Webpage"
										})]
									})
								}), (0, s.jsx)("div", {
									children: "Share conversation in HTML format"
								}), (0, s.jsx)("div", {
									className: "flex items-center justify-end",
									children: (0, s.jsxs)("button", {
										onClick: a,
										className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
										children: [(0, s.jsx)(M.yRW, {
											className: "h-5 w-5"
										}), (0, s.jsx)("span", {
											children: "Print / PDF"
										})]
									})
								}), (0, s.jsx)("div", {
									children: "Print this page or save as PDF"
								}), (0, s.jsx)("div", {
									className: "flex items-center justify-end",
									children: (0, s.jsxs)("button", {
										onClick: () => o("sharegpt"),
										className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
										children: [(0, s.jsx)(M.H_w, {
											className: "h-5 w-5"
										}), (0, s.jsx)("span", {
											children: "ShareGPT"
										})]
									})
								}), (0, s.jsxs)("div", {
									children: [(0, s.jsx)("b", {
										children: "ShareGPT.com"
									}), " is a free online service in to share ChatGPT conversations."]
								})]
							})
						})]
					})]
				})
			}

			function ec(e) {
				let {
					chatID: t
				} = e, [a, i] = (0, n.useState)(!1), r = () => {
					i(!1), setTimeout(() => {
						window.print()
					}, 1e3)
				};
				return (0, s.jsxs)("div", {
					children: [(0, s.jsxs)("button", {
						onClick: () => i(!0),
						className: "inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-violet-600 text-white hover:bg-violet-500 transition-all active:bg-violet-600 group font-semibold text-xs",
						children: [(0, s.jsx)(E.x2q, {
							className: "w-4 h-4 mr-1 group-hover:scale-125 transition-all"
						}), (0, s.jsx)("span", {
							children: "Share"
						})]
					}), (0, s.jsxs)(C.Z, {
						open: a,
						setOpen: i,
						showCloseButton: !1,
						wide: !0,
						children: [(0, s.jsx)(el, {
							onPrint: r,
							chatID: t
						}), (0, s.jsx)("div", {
							className: "my-2 text-center",
							children: (0, s.jsx)("button", {
								onClick: () => i(!1),
								className: "text-blue-500 hover:underline disabled:text-gray-500",
								children: "Close"
							})
						})]
					})]
				})
			}
			a(55623), a(39590);
			var eA = a(53854);
			let ed = e => {
				if (!e) return !1;
				let t = /^((\d+\. )|([\*-] )).+/gm,
					a = e.split("\n"),
					s = a.filter(e => t.test(e));
				return s.length >= 3
			};

			function eu(e) {
				var t;
				let {
					chatID: a,
					enableShare: n = !0,
					messages: i,
					onRegenerate: r,
					onNewChatRequested: o,
					appendReplyAndSubmit: l,
					usePrompt: c,
					showLibrary: A = !0,
					onResetChat: d
				} = e, u = null === (t = i[i.length - 1]) || void 0 === t ? void 0 : t.content, q = [];
				return ed(u) && q.push((0, s.jsxs)("button", {
					onClick: () => l("List some more"),
					className: "inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs",
					children: [(0, s.jsx)(E.fXH, {
						className: "w-4 h-4 mr-1 group-hover:rotate-180 transition-all"
					}), (0, s.jsx)("span", {
						children: "List More..."
					})]
				}, "list-more")), i.length > 1 && "user" === i[i.length - 1].role && q.push((0, s.jsxs)("button", {
					onClick: r,
					className: "inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs",
					children: [(0, s.jsx)(eA.lgS, {
						className: "w-4 h-4 mr-1 group-hover:rotate-180 transition-all"
					}), (0, s.jsx)("span", {
						children: "Regenerate"
					})]
				}, "re-generate-ai-response")), i.length > 1 && "assistant" === i[i.length - 1].role && q.push((0, s.jsxs)("button", {
					onClick: r,
					className: "inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs",
					children: [(0, s.jsx)(eA.lgS, {
						className: "w-4 h-4 mr-1 group-hover:rotate-180 transition-all"
					}), (0, s.jsx)("span", {
						children: "Regenerate"
					})]
				}, "regenerate")), i.length > 1 && n && q.push((0, s.jsx)(ec, {
					chatID: a
				}, "share")), A && i.length > 1 && q.push((0, s.jsx)(z, {
					label: "Library",
					usePrompt: c,
					className: "inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-orange-600 text-white hover:bg-orange-500 transition-all active:bg-orange-600 group font-semibold text-xs space-x-1"
				}, "library")), i.length >= 2 && q.push((0, s.jsxs)("button", {
					onClick: d,
					className: "inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-red-600 text-white hover:bg-red-500 transition-all active:bg-red-600 group font-semibold text-xs",
					children: [(0, s.jsx)(E.YwC, {
						className: "w-4 h-4 mr-1 group-hover:scale-125 transition-all"
					}), (0, s.jsx)("span", {
						children: "Reset Chat"
					})]
				}, "reset-chat")), i.length > 1 && q.push((0, s.jsxs)("button", {
					onClick: o,
					className: "inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-green-600 text-white hover:bg-green-500 transition-all active:bg-green-600 group font-semibold text-xs",
					children: [(0, s.jsx)(E.Lfi, {
						className: "w-4 h-4 mr-1 group-hover:scale-125 transition-all"
					}), (0, s.jsx)("span", {
						children: "New Chat"
					})]
				}, "new-chat")), (0, s.jsx)("div", {
					className: "my-4 text-center w-full flex items-center justify-center flex-wrap gap-2 px-4",
					children: q
				})
			}
			var eq = a(34339);
			let eg = (0, i.eK)("useDefaultModel"),
				eV = (0, i.eK)("useDefaultSystemMessage"),
				eh = (0, i.eK)("useRememberModelSettings"),
				em = (0, i.eK)("useStreaming"),
				ep = {
					"gpt-4": {
						name: "GPT-4",
						max_tokens: 8192,
						training_data: "Up to Sep 2021",
						description: "More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration."
					},
					"gpt-4-0314": {
						name: "GPT-4-0314",
						max_tokens: 8192,
						training_data: "Up to Sep 2021",
						description: "Snapshot of gpt-4 from March 14th 2023. Unlike gpt-4, this model will not receive updates, and will only be supported for a three month period ending on June 14th 2023."
					},
					"gpt-4-32k": {
						name: "GPT-4-32k",
						max_tokens: 32768,
						training_data: "Up to Sep 2021",
						description: "Same capabilities as the base gpt-4 mode but with 4x the context length. Will be updated with our latest model iteration."
					},
					"gpt-4-32k-0314": {
						name: "GPT-4-32k-0314",
						max_tokens: 32768,
						training_data: "Up to Sep 2021",
						description: "Snapshot of gpt-4-32 from March 14th 2023. Unlike gpt-4-32k, this model will not receive updates, and will only be supported for a three month period ending on June 14th 2023."
					},
					"gpt-3.5-turbo": {
						name: "GPT-3.5-TURBO",
						max_tokens: 4096,
						training_data: "Up to Sep 2021",
						description: "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration."
					},
					"gpt-3.5-turbo-0301": {
						name: "GPT-3.5-TURBO",
						max_tokens: 4096,
						training_data: "Up to Sep 2021",
						description: "Snapshot of gpt-3.5-turbo from March 1st 2023. Unlike gpt-3.5-turbo, this model will not receive updates, and will only be supported for a three month period ending on June 1st 2023."
					}
				};

			function ew(e) {
				let {
					model: t,
					setModel: a,
					systemMessage: i,
					setSystemMessage: r
				} = e, [o, l] = eg(L.Q6), [c, A] = eV(L.cl), [d, u] = (0, n.useState)(t), [q, g] = (0, n.useState)(i), [V, h] = (0, n.useState)(!1), [m, p] = eh(!0), [w, x] = em(!1), f = () => {
					a(d), r(q), m && (l(d), A(q)), h(!1)
				}, y = () => {
					u(t), g(i), h(!1)
				};
				return (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsxs)("button", {
						onClick: () => h(!0),
						className: "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm shadow-md text-white bg-gradient-to-r from-green-500 to-cyan-500 transition-all active:bg-cyan-600 group space-x-2",
						children: [(0, s.jsx)(E.QAE, {
							className: "w-4 h-4"
						}), (0, s.jsxs)("span", {
							children: ["Model: ", t.toUpperCase().replace("-TURBO", "")]
						})]
					}), (0, s.jsxs)(C.Z, {
						wide: !0,
						open: V,
						setOpen: h,
						showCloseButton: !1,
						children: [(0, s.jsx)("h2", {
							className: "text-center text-xl font-semibold",
							children: "Model Settings"
						}), (0, s.jsxs)("div", {
							className: "space-y-4 mt-4",
							children: [(0, s.jsxs)("div", {
								children: [(0, s.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [(0, s.jsxs)("label", {
										className: "block text-sm font-medium leading-6",
										children: ["Model", " ", (0, s.jsx)("span", {
											className: "bg-green-500 px-2 py-1 rounded-full text-white ml-1",
											children: "GPT-4 Available!"
										})]
									}), (0, s.jsx)("a", {
										className: "text-xs hover:underline text-blue-500",
										target: "_blank",
										rel: "noreferrer noopener",
										href: "https://platform.openai.com/docs/guides/chat",
										children: "Learn more →"
									})]
								}), (0, s.jsxs)("select", {
									id: "model",
									className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-zinc-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
									value: d,
									onChange: e => u(e.target.value.toLowerCase()),
									children: [(0, s.jsx)("option", {
										value: "gpt-3.5-turbo",
										children: "GPT-3.5-TURBO (Default ChatGPT)"
									}), (0, s.jsx)("option", {
										value: "gpt-3.5-turbo-0301",
										children: "GPT-3.5-TURBO-0301"
									}), (0, s.jsx)("option", {
										value: "gpt-4",
										children: "GPT-4 (Limited Beta)"
									}), (0, s.jsx)("option", {
										value: "gpt-4-0314",
										children: "GPT-4-0314 (Limited Beta)"
									}), (0, s.jsx)("option", {
										value: "gpt-4-32k",
										children: "GPT-4-32K (Limited Beta)"
									}), (0, s.jsx)("option", {
										value: "gpt-4-32k-0314",
										children: "GPT-4-32K-0314 (Limited Beta)"
									})]
								})]
							}), ep[d].name ? (0, s.jsxs)("div", {
								className: "bg-green-100 p-4 rounded-lg dark:bg-green-800",
								children: [(0, s.jsxs)("div", {
									className: "flex items-center justify-start flex-wrap gap-2 mb-2",
									children: [(0, s.jsxs)("div", {
										children: [(0, s.jsx)("b", {
											children: "Model"
										}), ": ", ep[d].name]
									}), (0, s.jsxs)("div", {
										children: [(0, s.jsx)("b", {
											children: "Max tokens"
										}), ":", " ", ep[d].max_tokens.toLocaleString()]
									})]
								}), (0, s.jsx)("div", {
									children: ep[d].description
								}), (0, s.jsxs)("div", {
									className: "mt-2",
									children: [(0, s.jsx)("b", {
										children: "Training data"
									}), ": ", ep[d].training_data]
								})]
							}) : null, (0, s.jsxs)("div", {
								children: [(0, s.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [(0, s.jsxs)("label", {
										className: "block text-sm font-medium leading-6",
										children: ["Initial System Instruction", " ", (0, s.jsx)("button", {
											onClick: () => g(L.cl),
											className: "text-blue-500 hover:underline text-xs",
											children: "(Reset to default)"
										})]
									}), (0, s.jsx)("a", {
										className: "text-xs hover:underline text-blue-500",
										target: "_blank",
										rel: "noreferrer noopener",
										href: "https://platform.openai.com/docs/guides/chat/instructing-chat-models",
										children: "Learn more →"
									})]
								}), (0, s.jsx)(N.Z, {
									placeholder: "You are ChatGPT, a large language model trained by OpenAI.",
									minRows: 2,
									className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white",
									value: q,
									onChange: e => g(e.target.value),
									onKeyDown: e => {
										"Enter" === e.key && (e.metaKey || e.ctrlKey) && f()
									}
								})]
							}), (0, s.jsx)("div", {
								children: (0, s.jsx)(eq.Z, {
									label: "Remember settings for all future chats",
									enabled: m,
									setEnabled: p
								})
							}), (0, s.jsx)(eq.Z, {
								label: "Stream AI responses word by word",
								description: "Cost estimation doesn't work when stream response is enabled.",
								enabled: w,
								setEnabled: x
							}), (0, s.jsxs)("div", {
								className: "text-center space-x-2",
								children: [(0, s.jsxs)("button", {
									onClick: f,
									className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
									children: [(0, s.jsx)(E.bzc, {
										className: "w-4 h-4"
									}), (0, s.jsx)("span", {
										children: "Apply"
									})]
								}), (0, s.jsx)("button", {
									onClick: y,
									className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1 dark:text-gray-200",
									children: "Cancel"
								})]
							})]
						})]
					})]
				})
			}
			let ex = (0, i.eK)("useVoiceLanguage"),
				ef = () => {
					let [e, t] = ex("en-US");
					return (0, s.jsx)("select", {
						className: "w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-zinc-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
						value: e,
						onChange: e => t(e.target.value),
						children: ey.map(e => (0, s.jsx)("option", {
							value: e.value,
							className: "text-ellipsis",
							children: e.label
						}, e.value))
					})
				},
				ey = [{
					label: "Afrikaans (South Africa)",
					value: "af-ZA"
				}, {
					label: "Albanian (Albania)",
					value: "sq-AL"
				}, {
					label: "Amharic (Ethiopia)",
					value: "am-ET"
				}, {
					label: "Arabic (Algeria)",
					value: "ar-DZ"
				}, {
					label: "Arabic (Bahrain)",
					value: "ar-BH"
				}, {
					label: "Arabic (Egypt)",
					value: "ar-EG"
				}, {
					label: "Arabic (Iraq)",
					value: "ar-IQ"
				}, {
					label: "Arabic (Israel)",
					value: "ar-IL"
				}, {
					label: "Arabic (Jordan)",
					value: "ar-JO"
				}, {
					label: "Arabic (Kuwait)",
					value: "ar-KW"
				}, {
					label: "Arabic (Lebanon)",
					value: "ar-LB"
				}, {
					label: "Arabic (Mauritania)",
					value: "ar-MR"
				}, {
					label: "Arabic (Morocco)",
					value: "ar-MA"
				}, {
					label: "Arabic (Oman)",
					value: "ar-OM"
				}, {
					label: "Arabic (Qatar)",
					value: "ar-QA"
				}, {
					label: "Arabic (Saudi Arabia)",
					value: "ar-SA"
				}, {
					label: "Arabic (State of Palestine)",
					value: "ar-PS"
				}, {
					label: "Arabic (Tunisia)",
					value: "ar-TN"
				}, {
					label: "Arabic (United Arab Emirates)",
					value: "ar-AE"
				}, {
					label: "Arabic (Yemen)",
					value: "ar-YE"
				}, {
					label: "Armenian (Armenia)",
					value: "hy-AM"
				}, {
					label: "Azerbaijani (Azerbaijan)",
					value: "az-AZ"
				}, {
					label: "Basque (Spain)",
					value: "eu-ES"
				}, {
					label: "Bengali (Bangladesh)",
					value: "bn-BD"
				}, {
					label: "Bengali (India)",
					value: "bn-IN"
				}, {
					label: "Bosnian (Bosnia and Herzegovina)",
					value: "bs-BA"
				}, {
					label: "Bulgarian (Bulgaria)",
					value: "bg-BG"
				}, {
					label: "Burmese (Myanmar)",
					value: "my-MM"
				}, {
					label: "Catalan (Spain)",
					value: "ca-ES"
				}, {
					label: "Chinese, Cantonese (Traditional Hong Kong)",
					value: "yue-Hant-HK"
				}, {
					label: "Chinese, Mandarin (Simplified, China)",
					value: "zh (cmn-Hans-CN)"
				}, {
					label: "Chinese, Mandarin (Traditional, Taiwan)",
					value: "zh-TW (cmn-Hant-TW)"
				}, {
					label: "Croatian (Croatia)",
					value: "hr-HR"
				}, {
					label: "Czech (Czech Republic)",
					value: "cs-CZ"
				}, {
					label: "Danish (Denmark)",
					value: "da-DK"
				}, {
					label: "Dutch (Belgium)",
					value: "nl-BE"
				}, {
					label: "Dutch (Netherlands)",
					value: "nl-NL"
				}, {
					label: "English (Australia)",
					value: "en-AU"
				}, {
					label: "English (Canada)",
					value: "en-CA"
				}, {
					label: "English (Ghana)",
					value: "en-GH"
				}, {
					label: "English (Hong Kong)",
					value: "en-HK"
				}, {
					label: "English (India)",
					value: "en-IN"
				}, {
					label: "English (Ireland)",
					value: "en-IE"
				}, {
					label: "English (Kenya)",
					value: "en-KE"
				}, {
					label: "English (New Zealand)",
					value: "en-NZ"
				}, {
					label: "English (Nigeria)",
					value: "en-NG"
				}, {
					label: "English (Pakistan)",
					value: "en-PK"
				}, {
					label: "English (Philippines)",
					value: "en-PH"
				}, {
					label: "English (Singapore)",
					value: "en-SG"
				}, {
					label: "English (South Africa)",
					value: "en-ZA"
				}, {
					label: "English (Tanzania)",
					value: "en-TZ"
				}, {
					label: "English (United Kingdom)",
					value: "en-GB"
				}, {
					label: "English (United States)",
					value: "en-US"
				}, {
					label: "Estonian (Estonia)",
					value: "et-EE"
				}, {
					label: "Filipino (Philippines)",
					value: "fil-PH"
				}, {
					label: "Finnish (Finland)",
					value: "fi-FI"
				}, {
					label: "French (Belgium)",
					value: "fr-BE"
				}, {
					label: "French (Canada)",
					value: "fr-CA"
				}, {
					label: "French (France)",
					value: "fr-FR"
				}, {
					label: "French (Switzerland)",
					value: "fr-CH"
				}, {
					label: "Galician (Spain)",
					value: "gl-ES"
				}, {
					label: "Georgian (Georgia)",
					value: "ka-GE"
				}, {
					label: "German (Austria)",
					value: "de-AT"
				}, {
					label: "German (Germany)",
					value: "de-DE"
				}, {
					label: "German (Switzerland)",
					value: "de-CH"
				}, {
					label: "Greek (Greece)",
					value: "el-GR"
				}, {
					label: "Gujarati (India)",
					value: "gu-IN"
				}, {
					label: "Hebrew (Israel)",
					value: "iw-IL"
				}, {
					label: "Hindi (India)",
					value: "hi-IN"
				}, {
					label: "Hungarian (Hungary)",
					value: "hu-HU"
				}, {
					label: "Icelandic (Iceland)",
					value: "is-IS"
				}, {
					label: "Indonesian (Indonesia)",
					value: "id-ID"
				}, {
					label: "Italian (Italy)",
					value: "it-IT"
				}, {
					label: "Italian (Switzerland)",
					value: "it-CH"
				}, {
					label: "Japanese (Japan)",
					value: "ja-JP"
				}, {
					label: "Javanese (Indonesia)",
					value: "jv-ID"
				}, {
					label: "Kannada (India)",
					value: "kn-IN"
				}, {
					label: "Kazakh (Kazakhstan)",
					value: "kk-KZ"
				}, {
					label: "Khmer (Cambodia)",
					value: "km-KH"
				}, {
					label: "Korean (South Korea)",
					value: "ko-KR"
				}, {
					label: "Lao (Laos)",
					value: "lo-LA"
				}, {
					label: "Latvian (Latvia)",
					value: "lv-LV"
				}, {
					label: "Lithuanian (Lithuania)",
					value: "lt-LT"
				}, {
					label: "Macedonian (North Macedonia)",
					value: "mk-MK"
				}, {
					label: "Malay (Malaysia)",
					value: "ms-MY"
				}, {
					label: "Malayalam (India)",
					value: "ml-IN"
				}, {
					label: "Marathi (India)",
					value: "mr-IN"
				}, {
					label: "Mongolian (Mongolia)",
					value: "mn-MN"
				}, {
					label: "Nepali (Nepal)",
					value: "ne-NP"
				}, {
					label: "Norwegian Bokm\xe5l (Norway)",
					value: "no-NO"
				}, {
					label: "Persian (Iran)",
					value: "fa-IR"
				}, {
					label: "Polish (Poland)",
					value: "pl-PL"
				}, {
					label: "Portuguese (Brazil)",
					value: "pt-BR"
				}, {
					label: "Portuguese (Portugal)",
					value: "pt-PT"
				}, {
					label: "Punjabi (Gurmukhi India)",
					value: "pa-Guru-IN"
				}, {
					label: "Romanian (Romania)",
					value: "ro-RO"
				}, {
					label: "Russian (Russia)",
					value: "ru-RU"
				}, {
					label: "Kinyarwanda (Rwanda)",
					value: "rw-RW"
				}, {
					label: "Serbian (Serbia)",
					value: "sr-RS"
				}, {
					label: "Sinhala (Sri Lanka)",
					value: "si-LK"
				}, {
					label: "Slovak (Slovakia)",
					value: "sk-SK"
				}, {
					label: "Slovenian (Slovenia)",
					value: "sl-SI"
				}, {
					label: "Swati (South Africa)",
					value: "ss-latn-za"
				}, {
					label: "Southern Sotho (South Africa)",
					value: "st-ZA"
				}, {
					label: "Spanish (Argentina)",
					value: "es-AR"
				}, {
					label: "Spanish (Bolivia)",
					value: "es-BO"
				}, {
					label: "Spanish (Chile)",
					value: "es-CL"
				}, {
					label: "Spanish (Colombia)",
					value: "es-CO"
				}, {
					label: "Spanish (Costa Rica)",
					value: "es-CR"
				}, {
					label: "Spanish (Dominican Republic)",
					value: "es-DO"
				}, {
					label: "Spanish (Ecuador)",
					value: "es-EC"
				}, {
					label: "Spanish (El Salvador)",
					value: "es-SV"
				}, {
					label: "Spanish (Guatemala)",
					value: "es-GT"
				}, {
					label: "Spanish (Honduras)",
					value: "es-HN"
				}, {
					label: "Spanish (Mexico)",
					value: "es-MX"
				}, {
					label: "Spanish (Nicaragua)",
					value: "es-NI"
				}, {
					label: "Spanish (Panama)",
					value: "es-PA"
				}, {
					label: "Spanish (Paraguay)",
					value: "es-PY"
				}, {
					label: "Spanish (Peru)",
					value: "es-PE"
				}, {
					label: "Spanish (Puerto Rico)",
					value: "es-PR"
				}, {
					label: "Spanish (Spain)",
					value: "es-ES"
				}, {
					label: "Spanish (United States)",
					value: "es-US"
				}, {
					label: "Spanish (Uruguay)",
					value: "es-UY"
				}, {
					label: "Spanish (Venezuela)",
					value: "es-VE"
				}, {
					label: "Sundanese (Indonesia)",
					value: "su-ID"
				}, {
					label: "Swahili (Kenya)",
					value: "sw-KE"
				}, {
					label: "Swahili (Tanzania)",
					value: "sw-TZ"
				}, {
					label: "Swedish (Sweden)",
					value: "sv-SE"
				}, {
					label: "Tamil (India)",
					value: "ta-IN"
				}, {
					label: "Tamil (Malaysia)",
					value: "ta-MY"
				}, {
					label: "Tamil (Singapore)",
					value: "ta-SG"
				}, {
					label: "Tamil (Sri Lanka)",
					value: "ta-LK"
				}, {
					label: "Telugu (India)",
					value: "te-IN"
				}, {
					label: "Thai (Thailand)",
					value: "th-TH"
				}, {
					label: "Setswana (South Africa)",
					value: "tn-latn-za"
				}, {
					label: "Turkish (Turkey)",
					value: "tr-TR"
				}, {
					label: "Tsonga (South Africa)",
					value: "ts-ZA"
				}, {
					label: "Ukrainian (Ukraine)",
					value: "uk-UA"
				}, {
					label: "Urdu (India)",
					value: "ur-IN"
				}, {
					label: "Urdu (Pakistan)",
					value: "ur-PK"
				}, {
					label: "Uzbek (Uzbekistan)",
					value: "uz-UZ"
				}, {
					label: "Venda (South Africa)",
					value: "ve-ZA"
				}, {
					label: "Vietnamese (Vietnam)",
					value: "vi-VN"
				}, {
					label: "isiXhosa (South Africa)",
					value: "xh-ZA"
				}, {
					label: "Zulu (South Africa)",
					value: "zu-ZA"
				}];

			function ev() {
				for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
				return t.filter(Boolean).join(" ")
			}
			let eb = (0, i.eK)("useVoiceSetupDone"),
				eB = (0, i.eK)("useVoiceUnsupported"),
				ej = (0, i.eK)("useVoiceLanguage"),
				eC = (0, i.eK)("useVoiceAutoSend");

			function eM(e) {
				let {
					onCompleted: t,
					onStarted: a,
					onInterimTranscript: i,
					size: r
				} = e, [o, l] = (0, n.useState)(!1), [c, A] = eb(!1), [d, u] = eB(!1), [q] = ej("en-US"), [g, V] = eC(!1), [h, m] = (0, n.useState)(!1), [p, w] = (0, n.useState)(""), [x, f] = (0, n.useState)(""), y = (0, n.useRef)(null);
				(0, n.useEffect)(() => {
					y.current && (y.current.abort(), delete y.current), "webkitSpeechRecognition" in window && (y.current = new webkitSpeechRecognition, y.current.lang = q, y.current.continuous = !1, y.current.interimResults = !0, y.current.onstart = function() {
						m(!0), a && a(!0)
					}, y.current.onresult = function(e) {
						for (var t = "", a = "", s = e.resultIndex; s < e.results.length; ++s) e.results[s].isFinal ? t += e.results[s][0].transcript : a += e.results[s][0].transcript;
						w(a), i && i(a), f(t)
					}, y.current.onerror = function(e) {
						m(!1), a && a(!1), ("service-not-allowed" === e.error || "language-not-supported" === e.error) && (A(!1), u(!0), window.alert("Sorry. Voice input is not yet supported on your device/browser.")), "not-allowed" === e.error && A(!1), console.error("failed", e)
					}, y.current.onend = function() {
						m(!1), a && a(!1)
					})
				}, [q]), (0, n.useEffect)(() => {
					x && (w(""), t && t(x))
				}, [x]);
				let v = async () => {
					if (!c) {
						l(!0);
						return
					}
					if (h) {
						var e;
						null === (e = y.current) || void 0 === e || e.stop()
					} else b()
				}, b = async () => {
					var e;
					A(!0), l(!1), w(""), f(""), null === (e = y.current) || void 0 === e || e.start()
				}, B = () => {
					var e;
					null === (e = y.current) || void 0 === e || e.stop(), A(!1), l(!0)
				};
				if ("webkitSpeechRecognition" in window) return (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsxs)("div", {
						className: "flex items-center space-x-2 group",
						children: [h ? (0, s.jsxs)("button", {
							onClick: B,
							className: "rounded-full bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 p-2 flex items-center justify-center transition-all hover:bg-gray-200 space-x-2 shrink-0",
							style: {
								height: r
							},
							children: [(0, s.jsx)(M.ssk, {
								className: ev("w-5 h-5")
							}), " ", (0, s.jsx)("span", {
								className: "whitespace-nowrap text-sm",
								children: q
							})]
						}) : null, (0, s.jsxs)("button", {
							onClick: v,
							className: "rounded-full bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 p-2 flex items-center justify-center transition-all hover:bg-gray-200 space-x-2 shrink-0",
							style: r && !h ? {
								width: r,
								height: r
							} : {
								height: r
							},
							children: [(0, s.jsx)(M.uYL, {
								className: ev("w-5 h-5", h ? "text-red-500" : "")
							}), " ", h ? (0, s.jsx)("span", {
								className: "animate-listening whitespace-nowrap text-sm",
								children: "Listening..."
							}) : null]
						})]
					}), (0, s.jsxs)(C.Z, {
						open: o,
						setOpen: l,
						showCloseButton: !1,
						children: [(0, s.jsx)("h2", {
							className: "text-center text-xl font-semibold",
							children: "\uD83C\uDF99️ Voice Input"
						}), (0, s.jsx)("div", {
							className: "text-center my-2",
							children: (0, s.jsx)("div", {
								className: "rounded-full bg-gray-300 dark:bg-zinc-600 dark:hover:bg-zinc-500 p-6 inline-flex items-center justify-center transition-all hover:bg-gray-200 space-x-2",
								children: (0, s.jsx)(M.uYL, {
									className: ev("w-8 h-8")
								})
							})
						}), (0, s.jsxs)("p", {
							className: "my-4 text-center",
							children: [(0, s.jsx)("b", {
								children: "Microphone"
							}), " access is needed for voice input."]
						}), (0, s.jsx)("div", {
							className: "my-4 px-2 max-w-[250px] mx-auto",
							children: (0, s.jsx)(ef, {})
						}), (0, s.jsx)("div", {
							className: "my-4 flex items-center justify-center",
							children: (0, s.jsx)(eq.Z, {
								enabled: g,
								setEnabled: V,
								label: "Auto send the message after speaking"
							})
						}), (0, s.jsx)("div", {
							className: "text-center my-2",
							children: (0, s.jsx)("button", {
								onClick: b,
								className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
								children: "→ Save"
							})
						}), (0, s.jsx)("div", {
							className: "text-center my-2",
							children: (0, s.jsx)("button", {
								onClick: () => {
									l(!1)
								},
								className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-800 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
								children: "Cancel"
							})
						})]
					})]
				})
			}
			a(50456);
			var eY = a(96907),
				eI = a(83792),
				eD = a(24461);

			function eE() {
				let [e, t] = (0, n.useState)("...");
				return (0, n.useEffect)(() => {
					let a = setInterval(() => {
						3 === e.length ? t("") : t(e + ".")
					}, 200);
					return () => clearInterval(a)
				}, [e]), (0, s.jsx)("span", {
					children: e
				})
			}
			var eG = a(96486),
				ek = a.n(eG),
				eN = a(4510);
			let eF = () => {
				try {
					let e = new Audio("data:audio/mp3;base64,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VVU2Ye0yPZY0TGgw1BYxAAcw1DcwODiuYGAiKAsYMAGYZgORBJNkQKmBgGmBYEmCgDiQZkwIkQOGBoHjIaGC4CJjsTJgVMDgPJQMMDwMKwPMDgNJAOMDQQIANMDQOpDA0DjA8Dh4Gn8GggGALIgbXeYCgOTAsYGAeYHAcYGAYYIgiYIh7PGCggGOIjgUQz3K8zEUQxEJRiQIxgEABgSFJhSApgIA5gOA5gOAtQwEAI1KHXm1cOFhJlGkQIJSVh673HrDMY47hSCVkMbjWGWELRiTXJlh6713llCIJIQsCcNd7E3LLIQ/0qiHQDpyZUME//PkZO43PhzcAHcbygAAA0gAAAAAzLrtu+QGMY6SMP5LK8bl+FQmNYJk3yoOMSymHAw4SEgNnb90DkQPEHcon3d82NNcn4tXRqrO3fo4g/kORsizDYyFQ5KYs8m6lGqKwWm0nbeLwDw03k/lDkY0okWNlnc9J4lpyACvknKdKJYFrjj2oYhyWSgaFnIdyH5WRDL/uW5YyEOWKhCxHEsuGu8QgghBmdtfcSq4YqKxc7y7dwtAnys4to7blu+nj36ii0vT9hiMXq+Sirv2n0QlltGtp7JBK6ZfRwxDlWG4vQQ4TEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiGCigXBSYFk4hAC/4CFUdgEBMoAIAsdFF+XqSKZ+j6z1aqtzhrVaVCozUmJ6tHX9h14m2VthcO8fVxVgkflsllW/QSoAWoAkIDAqaEQuZcJmOLYdamywBmpea4elkDDRQxUAGAMBAS/lVS0qkS8wKBltlkVrJGl2XcUCadTtJVLD6gL//PkZIMp4hzaEG2Y9QAAA0gAAAAABW7KDQOzl3YdZCwV4mJQ9HVhXsSqbVwmJRaAV2xRnTXp1gS1mYrpjjlUzwTEYQSzQ6PvZOj4eQpKQNlYkqWk4NTwGxscmKk5MaGT9EYIlQmmJCCpDMT1CJRNIQBiuB1EShGHlW6yhLxJLxa6pWQRBNTonQ6IRLEVakBsrJL+14Zluoah6Ou7YiLux53p99YrKo1GZh3otALXY416RQ1DTXkZUsDGRMtLl9nJgh3q8ZvZapsI1bjNi1l2ra5lEZyNWq7s07+y25GrVWW8TEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
					return e.play()
				} catch (e) {
					console.error(e)
				}
			};

			function eT() {
				for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
				return t.filter(Boolean).join(" ")
			}
			let eL = "Something went wrong. This could be a temporary network connection issue. Please try again or contact support. Opening the console might help clarifying the issue.",
				eQ = (0, i.eK)("useVoiceUnsupported"),
				eR = (0, i.eK)("useDefaultModel"),
				eS = (0, i.eK)("useDefaultSystemMessage"),
				eP = (0, i.eK)("useStreaming"),
				eK = (0, i.eK)("useUserProfilePicURL"),
				eW = (0, i.eK)("useEnterToSend"),
				eH = (0, i.eK)("useSoundMode"),
				eO = (0, i.eK)("useWidthMode"),
				eZ = (0, i.eK)("useShowOutputSettings"),
				eU = (0, i.eK)("useOutputTone"),
				ez = (0, i.eK)("useOutputStyle"),
				eJ = (0, i.eK)("useOutputLanguage"),
				eX = (0, i.eK)("useOutputFormat"),
				e_ = (0, i.eK)("useVoiceAutoSend"),
				e$ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.cl,
						t = e.replaceAll("{current_date}", new Date().toDateString());
					return {
						role: "system",
						content: t
					}
				},
				e0 = e => {
					let t = e.match(/{{(.*?)}}/g);
					return !!t && t.length > 1
				},
				e4 = eN.yZ.OK,
				e2 = e => {
					let t = e;
					t || (t = document.body.scrollHeight), window.scrollTo({
						top: t,
						behavior: ! function() {
							try {
								return window.self !== window.top
							} catch (e) {
								return !0
							}
						}() ? "smooth" : void 0
					})
				},
				e1 = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "end",
						t = document.querySelectorAll(".response-block"),
						a = t[t.length - 1],
						s = (null == a ? void 0 : a.offsetTop) - 100 + ("end" === e ? null == a ? void 0 : a.offsetHeight : 0);
					e2(Math.max(s, 0))
				};

			function e5(e) {
				let {
					apiKey: t,
					licenseKey: a,
					chatID: r,
					chatTitle: c,
					botAvatar: A,
					setOpenBuy: d,
					onMessagesChanged: u,
					onNewChatPersisted: q,
					onNewChatRequested: V,
					onChatTitleUpdated: h,
					onChatUpdated: m,
					onNotification: p,
					embedded: x,
					withSidebar: y = !0,
					showVoice: b = !0,
					showWelcomeHand: Y,
					showBrand: G = !0,
					showLibrary: k = !0,
					defaultMessages: F = [],
					onModelChanged: T,
					includeChatID: Q = !1,
					completionEndpoint: R = "https://api.openai.com/v1/chat/completions"
				} = e, [S, P] = (0, n.useState)(!1), [K, W] = (0, n.useState)(""), [H, O] = (0, n.useState)(""), [Z, U] = (0, n.useState)(F), [J, X] = (0, n.useState)(!1), [_, $] = (0, n.useState)(""), [ee, et] = eQ(!1), [ea, es] = eR(L.Q6), [en, ei] = eS(L.cl), [er, eo] = (0, n.useState)(en), [el, ec] = (0, n.useState)(ea), [ed, eq] = (0, n.useState)(null), [eg, eV] = (0, n.useState)(!1), [eh, em] = (0, n.useState)(0), [ep, ex] = (0, n.useState)(""), [ef, ey] = eP(!1), [ev, eb] = eK(""), [eB, ej] = (0, n.useState)(0), [eC, eG] = (0, n.useState)(!1), [e5, e8] = eW(!1), [e6, e3] = (0, n.useState)([]), [e7, e9] = (0, n.useState)(!1), [te, tt] = eH(!0), [ta, ts] = eO(0), [tn, ti] = eZ(!1), [tr, to] = eU(""), [tl, tc] = eJ(""), [tA, td] = ez(""), [tu, tq] = eX(""), [tg, tV] = e_(!1), [th, tm] = (0, n.useState)(200), [tp, tw] = (0, n.useState)(!1), {
					setOpenAIStatus: tx
				} = (0, eN.NZ)(), tf = (0, n.useRef)(null), ty = (0, n.useRef)(null), tv = (0, n.useRef)(null), tb = (0, L.z9)();
				(0, n.useEffect)(() => {
					let e = !0,
						t = t => {
							if (t && t.length) {
								var a, s;
								if (e) {
									e = !1;
									return
								}
								let n = window.document.body.scrollHeight;
								tm((null === (a = t[0]) || void 0 === a ? void 0 : null === (s = a.target) || void 0 === s ? void 0 : s.offsetHeight) || 200), setTimeout(() => {
									let e = window.document.body.scrollHeight - n;
									e2(window.scrollY + e)
								}, 100)
							}
						},
						a = null,
						s = setTimeout(() => {
							(a = new ResizeObserver(t)).observe(tv.current)
						}, 1e3);
					return () => {
						null == a || a.disconnect(), clearTimeout(s)
					}
				}, []), (0, n.useEffect)(() => {
					F.length > 0 && setTimeout(() => {
						e2()
					}, 200), setTimeout(() => {
						var e;
						null === (e = tf.current) || void 0 === e || e.focus()
					}, 300), (0, L.b1)() && eG(!0)
				}, []), (0, n.useEffect)(() => {
					T && T(el)
				}, [el]), (0, n.useEffect)(() => {
					if (r) try {
						let e = (0, i.cF)().getItem("CHAT_" + r);
						if (e) {
							let t = JSON.parse(e);
							eV(!0), U(t.messages), ec(t.model || ea), eq(t.character), eo(t.systemMessage || en), W("")
						}
					} catch (e) {
						console.error(e)
					} else tj()
				}, [r]), (0, n.useEffect)(() => {
					!tb && r && Z.length > 0 && (0, i.cF)().setItem("CHAT_" + r, JSON.stringify({
						messages: Z,
						chatTitle: c,
						model: el,
						systemMessage: er,
						character: ed,
						chatID: r,
						updatedAt: new Date
					}))
				}, [Z, r, c]), (0, n.useEffect)(() => {
					if (!tb) {
						if (u && u(Z), Z.length > 0 && !eg && (eV(!0), q({
								id: r,
								model: el,
								systemMessage: er,
								preview: Z[Z.length - 1].content,
								createdAt: new Date,
								updatedAt: new Date
							})), Z.length > 0) {
							var e;
							setTimeout(() => {
								e1("user" === Z[Z.length - 1].role ? "end" : "beginning")
							}, 200), null === (e = tf.current) || void 0 === e || e.focus()
						}
						Z.length > 1 && !c && "assistant" === Z[Z.length - 1].role && tC()
					}
				}, [Z]);
				let tB = (0, n.useMemo)(() => {
						let e = "";
						return ((tr || tl || tA) && (e += "Please respond in ".concat([tl, tr ? tr + " tone" : "", tA ? tA + " style" : ""].filter(Boolean).join(", "), ".")), tu && (e += " ".concat(tu, ".")), e = e.trim()) ? "\n\n" + e : ""
					}, [tr, tl, tA, tu]),
					tj = () => {
						eV(!1), U([]), ec(ea), eo(en), W("")
					},
					tC = async () => {
						let e = [...Z, {
								role: "user",
								content: "What would be a short and relevant title for this chat? You must strictly answer with only the title, no other text is allowed."
							}],
							a = await fetch(R, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									Authorization: "Bearer ".concat(t)
								},
								body: JSON.stringify({
									model: el,
									messages: e.map(e => ek().pick(e, ["role", "content"]))
								})
							});
						if (R.startsWith("https://api.openai.com") && 500 === a.status && tx(eN.yZ.ERROR), !a.ok) return null;
						let s = await a.json(),
							n = s.choices[0].message.content;
						h(n = n.trim().replace(/^Title: /, "").replace(/^"(.*)"$/, "$1").replace(/[,.;:!?]$/, ""))
					}, tM = async () => {
						if (H) {
							if (!t) {
								var e;
								null === (e = window.document.getElementById("enter-api-key-btn")) || void 0 === e || e.click(), W("Please enter your OpenAI API key to get started."), e2();
								return
							}
							tY(H)
						}
					}, tY = e => {
						let t;
						let a = {
							role: "user",
							content: e + tB
						};
						t = J ? [...Z.slice(0, Z.length - 2), a] : [...Z.length ? Z : [e$(er)], a], J && X(!1), U(t), m && m(a), O(""), tI(t)
					}, tI = async e => {
						try {
							var a, n, i, o;
							let l;
							P(!0), W(""), ty.current = new AbortController;
							let c = !!ef;
							try {
								l = await fetch(R, {
									method: "POST",
									signal: ty.current.signal,
									headers: {
										"Content-Type": "application/json",
										Authorization: "Bearer ".concat(t)
									},
									body: JSON.stringify({
										model: el,
										stream: c,
										messages: e.map(e => ek().pick(e, ["role", "content"])),
										...Q ? {
											chatID: r
										} : {}
									})
								})
							} catch (e) {
								if ("AbortError" === e.name) {
									P(!1);
									return
								}
								throw e
							}
							if (500 === l.status) {
								R.startsWith("https://api.openai.com") && tx(eN.yZ.ERROR), W("Could not connect to OpenAI API. Please try again later. This could be because OpenAI's server is experiencing high demand and rejected your request. Go to https://status.openai.com/ to check their status."), P(!1);
								return
							}
							if (l.status >= 400) {
								let e = await l.json();
								if (e.error && "server_error" === e.error.type && R.startsWith("https://api.openai.com") && tx(eN.yZ.ERROR), 429 === l.status) {
									W("OpenAI has rejected your request with error code 429. Here are the possible reasons: 1. You are sending requests too quickly; 2. You have hit your maximum monthly spend (hard limit); 3. The model is currently overloaded. Here is the error message from OpenAI: " + ((null === (a = e.error) || void 0 === a ? void 0 : a.message) || "")), P(!1);
									return
								}
								if (e.error && "context_length_exceeded" === e.error.code) {
									W((0, s.jsx)(j.Z, {})), P(!1);
									return
								}
								if (e.error && e.error.message) {
									let t = e.error.message,
										a = t.match(/The model: `(.*)` does not exist/);
									a && (t += ". You are using ".concat(el, " model. Please change the model in the setting and try again. Note that even if you have ChatGPT Plus, you still need to request access to the GPT-4 API in order to use it with your API Key. This is OpenAI's restriction and we can't do anything about it. You can join the waitlist here https://openai.com/waitlist/gpt-4-api.")), e9(!0), W("Sorry, OpenAI has rejected your request. Here is the error message from OpenAI: " + t)
								} else W(eL);
								P(!1);
								return
							}
							if (!l.ok) {
								W(eL), P(!1);
								return
							}
							tx(e4);
							let A = null,
								d = null,
								u = null;
							if (c) {
								let e = l.body.pipeThrough(new TextDecoderStream).getReader(),
									t = "",
									a = "";
								try {
									for (;;) {
										let {
											value: s,
											done: r
										} = await e.read();
										if (r) break;
										let l = s.split("\n").map(e => e.trim()).filter(Boolean);
										for (let e of l) {
											let s;
											let r = e.trim().replace(/^data: /, "");
											if ("[DONE]" === r) break;
											try {
												s = JSON.parse(r)
											} catch (e) {
												console.error("\uD83D\uDC40 Failed to parse JSON", r), a += r.trim(), console.error("\uD83D\uDFE0 Stashed:", a);
												try {
													s = JSON.parse(a), console.log("✅ Recovered JSON", s), a = ""
												} catch (e) {
													continue
												}
											}
											let l = (null === (n = s.choices[0]) || void 0 === n ? void 0 : null === (i = n.delta) || void 0 === i ? void 0 : i.content) || "";
											A = null === (o = s.choices[0]) || void 0 === o ? void 0 : o.finish, t += l, ex(t)
										}
									}
								} catch (e) {
									if ("AbortError" === e.name);
									else throw e
								}
								d = {
									role: "assistant",
									content: t
								}
							} else {
								let e = await l.json();
								d = e.choices[0].message, u = e.usage, A = e.choices[0].finish_reason
							}
							U([...e, {
								...d,
								usage: u,
								finish: A
							}]), ex(""), m && m(d), window.document.hidden && (te && eF(), null == p || p(!0))
						} catch (e) {
							console.error(e), W(eL)
						}
						P(!1)
					}, tD = () => {
						let e = [...Z];
						"assistant" === e[e.length - 1].role && e.pop(), U(e), tI(e)
					}, tE = () => {
						let e = Z.filter(e => "user" === e.role);
						e.length > 0 && (X(!0), O(e[e.length - 1].content), setTimeout(() => {
							var e;
							null === (e = tf.current) || void 0 === e || e.focus()
						}, 600))
					}, tG = () => {
						O(""), X(!1), e6.length && (U(e6), e3([]))
					}, tk = (0, n.useCallback)(() => {
						tw(!0)
					}, []), tN = () => {
						var e;
						null === (e = ty.current) || void 0 === e || e.abort(), P(!1)
					}, tF = () => {
						e3(Z);
						let e = Z.findIndex(e => "user" === e.role),
							t = Z[e].content,
							a = -1 === e ? [] : Z.slice(0, e + 2);
						U(a), O(t), ex(""), X(!0), setTimeout(() => {
							var e;
							null === (e = tf.current) || void 0 === e || e.focus()
						}, 600)
					}, tT = e => {
						O(e.prompt), setTimeout(() => {
							var e;
							null === (e = tf.current) || void 0 === e || e.focus(), tL({
								fromCursor: !1
							})
						}, 600)
					}, tL = function() {
						var e, t, a, s, n;
						let {
							fromCursor: i = !0
						} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = i && (null === (e = tf.current) || void 0 === e ? void 0 : e.selectionStart) || 0, o = (null === (t = tf.current) || void 0 === t ? void 0 : null === (a = t.value) || void 0 === a ? void 0 : a.indexOf("{{", r + 1)) || 0, l = (null === (s = tf.current) || void 0 === s ? void 0 : null === (n = s.value) || void 0 === n ? void 0 : n.indexOf("}}", o)) || 0;
						return -1 !== o && -1 !== l && (tf.current.setSelectionRange(o, l + 2, "forward"), !0)
					}, tQ = el === L.Q6 && er === L.cl, tR = (0, n.useCallback)(e => {
						let t = [...Z];
						t.splice(e, 1), U(t)
					}, [Z]);
				return (0, s.jsxs)("div", {
					className: "resize-container relative",
					children: [(0, s.jsx)("div", {
						onClick: () => ts((ta + 1) % 3),
						className: "fixed top-0 right-0 bottom-0 right-0 z-10 items-center justify-between w-12 bg-gray-50 dark:bg-zinc-700/20 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer transition-colors grid grid-cols-1 grid-rows-5 text-center group active:bg-gray-300 dark:active:bg-zinc-600 hidden xl:flex flex-col",
						children: [1, 2, 3, 4, 5].map(e => (0, s.jsx)("div", {
							className: "hidden items-center justify-center text-gray-500 group-hover:flex",
							children: (0, s.jsx)(eA.ilJ, {})
						}, e))
					}), (0, s.jsxs)("div", {
						style: {
							paddingBottom: th + 50
						},
						className: eT("transition-all z-20 relative", 0 === ta ? "max-w-3xl mx-auto " : 1 === ta ? "max-w-5xl mx-auto px-12" : "max-w-full mx-12"),
						children: [(0, s.jsxs)("div", {
							className: "py-8",
							children: [G ? (0, s.jsx)("div", {
								className: "p-6 sm:p-10 flex items-center justify-center",
								children: (0, s.jsxs)("div", {
									children: [(0, s.jsxs)("div", {
										className: "flex items-center justify-center space-x-2",
										children: [(0, s.jsx)("img", {
											src: "/logo.png",
											alt: "Typing Mind",
											className: "rounded-lg w-12 h-12"
										}), (0, s.jsxs)("div", {
											className: "font-semibold text-4xl sm:text-5xl text-black dark:text-white ",
											children: ["Typing", (0, s.jsx)("span", {
												className: "text-blue-500",
												children: "Mind"
											})]
										}), (0, s.jsx)("span", {
											className: "bg-gradient-to-r from-green-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white text-center rounded-xl inline-block ",
											children: "GPT-4 Supported!"
										})]
									}), (0, s.jsx)("div", {
										className: "text-center my-4 font-light text-base sm:text-xl my-4 sm:my-6 text-black dark:text-white",
										children: "A better UI for ChatGPT"
									}), a ? null : (0, s.jsxs)(s.Fragment, {
										children: [(0, s.jsx)("div", {
											className: "flex items-center justify-center",
											children: (0, s.jsxs)("div", {
												className: "my-4 grid sm:grid-cols-2 gap-y-2 gap-x-6",
												children: [(0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "Chat history search"
													})]
												}), (0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "Prompt library"
													})]
												}), (0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "Integrations"
													})]
												}), (0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "Run locally on browser"
													})]
												}), (0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "No login required"
													})]
												}), (0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "Use your own API key"
													})]
												}), (0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "No monthly fee"
													})]
												}), (0, s.jsxs)("div", {
													className: "flex items-center justify-start space-x-1",
													children: [(0, s.jsx)(E.mny, {
														className: "text-green-500 w-4 h-4"
													}), (0, s.jsx)("div", {
														className: "text-sm",
														children: "...and more soon!"
													})]
												})]
											})
										}), (0, s.jsx)("div", {
											className: "text-center",
											children: (0, s.jsxs)("button", {
												type: "button",
												className: "inline-flex items-center justify-center rounded-md border-gray-500 border dark:hover:bg-zinc-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 py-2 px-2 space-x-2 text-sm",
												onClick: () => d(!0),
												children: [(0, s.jsx)(E.WYw, {
													className: "h-6 w-6 text-red-500",
													"aria-hidden": "true"
												}), (0, s.jsx)("span", {
													children: "View Premium Features"
												})]
											})
										})]
									}), (0, s.jsx)(eY.Z, {
										onCompleted: () => {
											W(""), tf.current.focus()
										}
									})]
								})
							}) : null, 0 !== Z.length || x ? null : (0, s.jsxs)("div", {
								className: "my-4 text-center flex items-center justify-center flex-wrap gap-2 px-4",
								children: [(0, s.jsx)(ew, {
									model: el,
									setModel: e => {
										ec(e), e9(!1)
									},
									systemMessage: er,
									setSystemMessage: eo
								}), (0, s.jsx)(I, {
									onCharacterSelected: e => {
										eq(e), eo(e.instruction), setTimeout(() => {
											var e;
											e2(), null === (e = tf.current) || void 0 === e || e.focus()
										}, 700)
									}
								}), (0, s.jsx)(z, {
									usePrompt: tT
								})]
							}), ed ? (0, s.jsx)("div", {
								className: "px-4 flex items-center justify-center mt-8 mb-2",
								children: (0, s.jsxs)("div", {
									style: {
										backgroundColor: ed.color
									},
									className: "text-sm border-gray-200 border px-4 py-1 rounded-full text-black dark:invert",
									children: ["You are chatting with a ", (0, s.jsx)("b", {
										children: ed.title
									}), " ", 0 === Z.length ? (0, s.jsx)("button", {
										onClick: () => {
											eq(null), eo(en)
										},
										className: "text-blue-500 hover:underline font-semibold",
										children: "(Reset)"
									}) : null]
								})
							}) : null, 0 !== Z.length || x || tQ ? null : (0, s.jsx)("div", {
								className: eT("px-4 rounded-lg mb-2 mt-8"),
								children: (0, s.jsx)(eI.Z, {
									model: el,
									message: e$(er)
								})
							}), Z.map((e, t) => (0, s.jsx)("div", {
								className: eT("px-4 rounded-lg mb-2", J && t === Z.length - 1 ? "opacity-50" : ""),
								children: (0, s.jsx)(eI.Z, {
									index: t,
									botAvatar: A,
									showSystemMessage: !x && !tQ,
									model: el,
									message: e,
									onUserProfileClick: tk,
									userProfilePicURL: ev,
									onDeleteMessage: tR
								})
							}, t)), ep ? (0, s.jsx)("div", {
								className: eT("px-4 rounded-lg mb-2"),
								children: (0, s.jsx)(eI.Z, {
									botAvatar: A,
									model: el,
									showActions: !1,
									message: {
										role: "assistant",
										content: ep
									}
								})
							}, Z.length + 1) : null, S ? (0, s.jsx)("div", {
								className: "p-4 rounded-lg mb-2",
								children: (0, s.jsxs)("div", {
									className: "text-sm text-gray-500 flex items-center space-x-2",
									children: [(0, s.jsx)(eD.Z, {}), (0, s.jsxs)("div", {
										children: [(0, s.jsx)("span", {
											children: "Assistant is typing"
										}), (0, s.jsx)(eE, {})]
									})]
								})
							}) : null]
						}), D.f.map(e => e.chatID).includes(r) ? (0, s.jsx)("div", {
							className: "text-center my-8",
							children: (0, s.jsx)("div", {
								className: "text-white bg-yellow-600 rounded-full px-4 py-1 text-sm inline-block mx-4",
								children: "This chat is a default example for demonstration purposes"
							})
						}) : null, K && (0, s.jsx)("div", {
							className: "text-red-500 text-center text-sm px-4",
							children: K
						}), e7 ? (0, s.jsx)("div", {
							className: "text-center my-4",
							children: (0, s.jsx)(ew, {
								model: el,
								setModel: e => {
									ec(e), e9(!1)
								},
								systemMessage: er,
								setSystemMessage: eo
							})
						}) : null, Y && 0 === Z.length ? (0, s.jsx)("div", {
							className: "text-6xl text-center",
							children: "\uD83D\uDC4B"
						}) : null]
					}), (0, s.jsx)("div", {
						ref: tv,
						className: eT("fixed z-30 bottom-0 left-0 right-0", y ? "lg:pl-80 " : ""),
						children: (0, s.jsxs)("div", {
							className: eT("mx-auto w-full hide-when-print transition-all", 0 === ta ? "max-w-3xl" : 1 === ta ? "max-w-5xl px-12" : "max-w-full px-12"),
							children: [(0, s.jsx)("div", {
								className: eT("transition-all", H.length ? "translate-x-[120%]" : "translate-x-0"),
								children: S ? (0, s.jsx)("div", {
									className: "my-2 text-center w-full flex items-center justify-center flex-wrap gap-2 px-4",
									children: (0, s.jsxs)("button", {
										onClick: tN,
										className: "inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-red-600 text-white hover:bg-red-500 transition-all active:bg-red-600 group font-semibold text-xs min-w-[100px]",
										children: [(0, s.jsx)(M.JuG, {
											className: "w-4 h-4 mr-2 group-hover:scale-125 transition-all"
										}), (0, s.jsx)("span", {
											children: "Stop"
										})]
									})
								}) : (0, s.jsx)(eu, {
									showLibrary: k,
									usePrompt: tT,
									enableShare: !x,
									chatID: r,
									messages: Z,
									onRegenerate: tD,
									onNewChatRequested: V,
									appendReplyAndSubmit: tY,
									onResetChat: tF
								})
							}), (0, s.jsx)("div", {
								className: "px-4 pb-4 pt-0 bg-white dark:bg-zinc-800 px-4 transition-colors",
								children: (0, s.jsxs)("div", {
									className: "pb-safe",
									children: [J ? (0, s.jsxs)("div", {
										className: "bg-blue-600 text-xs text-white ml-2 px-2 py-1 rounded-tl-lg rounded-tr-lg flex space-x-1 w-fit truncate -mb-1",
										children: [(0, s.jsx)(E.QML, {
											className: "w-4 h-4"
										}), e6.length ? (0, s.jsx)("span", {
											children: "Edit first message (ESC = Cancel)"
										}) : (0, s.jsx)("span", {
											children: "Edit last message"
										})]
									}) : null, (0, s.jsx)("div", {
										className: "flex items-end justify-center space-x-2 mb-2",
										children: (0, s.jsxs)("div", {
											className: "w-full space-y-2 pt-2",
											children: [(0, s.jsxs)("div", {
												className: eT("flex items-center justify-center flex-col sm:flex-row space-x-0 gap-2 sm:gap-0", tn ? "" : "hidden"),
												children: [(0, s.jsxs)("div", {
													className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
													children: [(0, s.jsx)(B, {}), (0, s.jsx)(v, {}), (0, s.jsx)(f, {}), (0, s.jsx)(o, {})]
												}), (0, s.jsx)(g, {})]
											}), (0, s.jsxs)("div", {
												className: "w-full flex items-end justify-center gap-2",
												children: [(0, s.jsxs)("button", {
													onClick: e => {
														e.preventDefault(), e.stopPropagation(), ti(!tn)
													},
													onTouchEnd: e => {
														e.preventDefault(), e.stopPropagation(), ti(!tn)
													},
													className: eT("shrink-0 text-gray-500 dark:text-zinc-500 transition-colors  p-1.5 rounded-lg relative", tn ? "bg-gray-500 text-white" : "hover:text-gray-900 dark:text-white dark:hover:text-zinc-200"),
													children: [(0, s.jsx)(l.cu7, {
														className: "w-6 h-6"
													}), (0, s.jsx)(w, {})]
												}), (0, s.jsx)(N.Z, {
													ref: tf,
													onFocus: () => {
														null == p || p(!1)
													},
													onKeyDown: e => {
														if ("Enter" === e.key && e5 && !e.shiftKey || "Enter" === e.key && !e.shiftKey && !(0, L.b1)() || "Enter" === e.key && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
															e.preventDefault(), tM();
															return
														}
														if ("ArrowUp" === e.key && !H) {
															e.preventDefault(), tE();
															return
														}
														if ("Escape" === e.key && J) {
															e.preventDefault(), tG();
															return
														}
														if ("Tab" === e.key && H) {
															tL() && e.preventDefault();
															return
														}
													},
													id: "chat-input-textbox",
													autoFocus: !0,
													readOnly: S,
													value: H,
													onChange: e => O(e.target.value),
													placeholder: _ || "Your message here...",
													className: "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
													onHeightChange: e => ej(e)
												}), H || ee || !b ? (0, s.jsxs)(s.Fragment, {
													children: [(0, s.jsx)("button", {
														type: "button",
														onClick: tM,
														disabled: S || !H,
														className: "inline-flex items-center px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
														style: {
															height: Math.min(40, eB)
														},
														children: J ? (0, s.jsxs)(s.Fragment, {
															children: [(0, s.jsx)(E.QML, {
																className: "w-4 h-4"
															}), (0, s.jsx)("span", {
																children: "Update"
															})]
														}) : "→ Send"
													}), J ? (0, s.jsx)("button", {
														type: "button",
														onClick: tG,
														disabled: S || !H,
														style: {
															height: Math.min(40, eB)
														},
														className: "inline-flex items-center px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
														children: "Cancel"
													}) : null]
												}) : (0, s.jsx)(eM, {
													onCompleted: e => {
														tg ? tY(e) : (O(e), setTimeout(() => {
															var e;
															null === (e = tf.current) || void 0 === e || e.focus()
														}, 100))
													},
													onInterimTranscript: $,
													size: Math.min(40, eB)
												})]
											})]
										})
									}), H && e0(H) ? (0, s.jsx)("div", {
										className: "text-xs mb-2",
										children: "\uD83D\uDCA1 Press [Tab] to move to the next fill-in-the-blank position."
									}) : null, eC && H.length ? (0, s.jsx)("div", {
										children: (0, s.jsxs)("label", {
											className: "flex items-center justify-center gap-2 my-2",
											children: [(0, s.jsx)("input", {
												type: "checkbox",
												checked: e5,
												onChange: () => e8(!e5)
											}), (0, s.jsx)("span", {
												children: "Send message when tap Enter key"
											})]
										})
									}) : null, eh > 10 ? (0, s.jsxs)("div", {
										className: "text-gray-400 text-xs text-center",
										children: [r, " | persisted: ", eg ? "true" : "false"]
									}) : null]
								})
							})]
						})
					}), (0, s.jsxs)(C.Z, {
						open: tp,
						setOpen: tw,
						showCloseButton: !1,
						children: [(0, s.jsx)("h2", {
							className: "text-center text-xl font-bold",
							children: "Enter Your Profile Picture URL"
						}), (0, s.jsxs)("form", {
							onSubmit: e => {
								var t, a;
								e.preventDefault(), (null === (t = e.target.picture) || void 0 === t ? void 0 : t.value) && eb(null === (a = e.target.picture) || void 0 === a ? void 0 : a.value), tw(!1)
							},
							className: "mt-4",
							children: [(0, s.jsx)("input", {
								type: "text",
								name: "picture",
								className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
								defaultValue: ev,
								placeholder: "Enter your profile picture URL here"
							}), (0, s.jsx)("button", {
								className: "mx-auto mt-4 flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
								children: (0, s.jsx)("span", {
									children: "OK"
								})
							})]
						})]
					})]
				}, r)
			}
		},
		34339: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return r
				}
			});
			var s = a(85893);
			a(67294);
			var n = a(335);

			function i() {
				for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
				return t.filter(Boolean).join(" ")
			}

			function r(e) {
				let {
					label: t,
					description: a,
					enabled: r,
					setEnabled: o
				} = e;
				return (0, s.jsxs)("label", {
					className: "flex items-center justify-start",
					children: [(0, s.jsx)(n.r, {
						checked: r,
						onChange: o,
						className: i(r ? "bg-blue-600" : "bg-gray-200  dark:bg-zinc-700", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"),
						children: (0, s.jsx)("span", {
							"aria-hidden": "true",
							className: i(r ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out")
						})
					}), (0, s.jsxs)("div", {
						children: [(0, s.jsx)("div", {
							className: "ml-2",
							children: t
						}), (0, s.jsx)("div", {
							className: "ml-2 text-gray-500 text-xs",
							children: a
						})]
					})]
				})
			}
		},
		41908: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return i
				}
			});
			var s = a(85893),
				n = a(67294);

			function i() {
				let [e, t] = (0, n.useState)(new Date), a = new Date(1678780667e3);
				(0, n.useEffect)(() => {
					setInterval(() => {
						t(new Date)
					}, 1e3)
				}, [e]);
				let i = a.getTime() - e.getTime(),
					r = Math.floor(i / 864e5),
					o = Math.floor((i - 864e5 * r) / 36e5),
					l = Math.floor((i - 864e5 * r - 36e5 * o) / 6e4),
					c = "".concat(r, "d ").concat(o, "h ").concat(l, "m ").concat(Math.floor((i - 864e5 * r - 36e5 * o - 6e4 * l) / 1e3), "s"),
					A = i <= 0;
				return (0, s.jsxs)(s.Fragment, {
					children: [A ? (0, s.jsxs)("div", {
						className: " text-center my-4 space-x-2",
						children: [(0, s.jsx)("span", {
							className: "text-2xl font-bold text-gray-500 line-through",
							children: "$59"
						}), (0, s.jsx)("span", {
							className: "text-5xl font-extrabold text-green-500",
							children: "$39"
						})]
					}) : (0, s.jsxs)("div", {
						className: " text-center my-2 space-x-2",
						children: [(0, s.jsx)("span", {
							className: "text-2xl font-bold text-gray-500 line-through",
							children: "$39"
						}), (0, s.jsx)("span", {
							className: "text-5xl font-extrabold text-green-500",
							children: "$29"
						})]
					}), (0, s.jsxs)("div", {
						className: "text-xs text-center my-4 text-green-600",
						children: ["Launch discount price.", " ", A ? (0, s.jsx)("span", {
							children: "Deal ends soon."
						}) : (0, s.jsxs)("span", {
							children: ["Deal ends in ", (0, s.jsx)("b", {
								children: c
							}), "."]
						})]
					})]
				})
			}
		},
		96907: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return m
				}
			});
			var s = a(85893),
				n = a(67294),
				i = a(28368),
				r = a(40800),
				o = a(67798);
			let l = [{
				question: "How is the API key handled?",
				answer: "Your API is safe and stored locally on your device. This is a static app, which means that it doesn't have a backend. All the data is stored in your browser's local storage. Requests to Open AI's API is sent directly from your current browser (check the Network tab in your console if you want to see it)."
			}, {
				question: "Do I need to have ChatGPT Plus ($20/month) to use TypingMind.com?",
				answer: "No! A ChatGPT Plus subscription is not needed. You just need to have an OpenAI's API Key. You can see more info on how to get one here: https://openai.com/blog/openai-api"
			}, {
				question: "Do I need to pay for OpenAI for a ChatGPT API Key?",
				answer: "Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We don't sell API keys."
			}, {
				question: "License Key vs. API Key",
				answer: "License Key is used to activate the premium features of TypingMind.com. API Key refers to OpenAI ChatGPT API Key, and is used to connect to OpenAI's API to interact with ChatGPT. You need an API Key to use the app. The License Key is only needed if you want to use the premium features."
			}];

			function c() {
				return (0, s.jsx)("div", {
					className: "",
					children: (0, s.jsx)("div", {
						className: "mx-auto max-w-7xl",
						children: (0, s.jsxs)("details", {
							className: "mx-auto max-w-4xl",
							children: [(0, s.jsx)("summary", {
								children: (0, s.jsx)("h2", {
									className: "text-xl font-bold tracking-tight inline-block hover:underline cursor-pointer",
									children: "FAQs about API Key"
								})
							}), (0, s.jsx)("dl", {
								className: "mt-2 space-y-2",
								children: l.map(e => (0, s.jsx)(i.p, {
									as: "div",
									className: "pt-2",
									children: t => {
										let {
											open: a
										} = t;
										return (0, s.jsxs)(s.Fragment, {
											children: [(0, s.jsx)("dt", {
												children: (0, s.jsxs)(i.p.Button, {
													className: "flex w-full items-start justify-between text-left ",
													children: [(0, s.jsx)("span", {
														className: "text-sm font-semibold",
														children: e.question
													}), (0, s.jsx)("span", {
														className: "ml-6 flex h-7 items-center",
														children: a ? (0, s.jsx)(r, {
															className: "h-6 w-6",
															"aria-hidden": "true"
														}) : (0, s.jsx)(o, {
															className: "h-6 w-6",
															"aria-hidden": "true"
														})
													})]
												})
											}), (0, s.jsx)(i.p.Panel, {
												as: "dd",
												className: "mt-2 pr-12",
												children: (0, s.jsx)("p", {
													className: "text-sm text-gray-500",
													children: e.answer
												})
											})]
										})
									}
								}, e.question))
							}), (0, s.jsx)("div", {
								className: "text-center mt-8",
								children: (0, s.jsx)("a", {
									href: "/faqs",
									className: "text-blue-500 hover:underline ",
									target: "_blank",
									children: "See more FAQs"
								})
							})]
						})
					})
				})
			}
			var A = a(8193),
				d = a(87260),
				u = a(23235),
				q = a(24461),
				g = a(60155),
				V = a(64597);
			let h = (0, V.eK)("useAPIKey");

			function m(e) {
				let {
					onCompleted: t
				} = e, [a, i] = h(""), [r, o] = (0, n.useState)(""), [l, V] = (0, n.useState)(!1), [m, p] = (0, n.useState)(!1), [w, x] = (0, n.useState)(!1), [f, y] = (0, n.useState)(a), [v, b] = (0, n.useState)(!1), B = async () => {
					x(!0)
				}, j = async () => {
					if (o(""), null !== f) {
						if ("" === f) {
							i(""), x(!1), t && t();
							return
						}
						await C(f) && (i(f), p(!0), x(!1), t && t())
					}
				}, C = async e => {
					V(!0);
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
						if (401 === t.status) return V(!1), o("Invalid API key. Please make sure your API key is still working properly."), null;
						if (429 === t.status) return V(!1), o((0, s.jsxs)("span", {
							children: ["Your API key is not working. You need a ", (0, s.jsx)("b", {
								children: "paid API account"
							}), " on OpenAI in order to use the ChatGPT API Key (the free trial won't work). To verify that you have a paid API account, go here and make sure you have your billing info added:", " ", (0, s.jsx)("u", {
								children: "https://platform.openai.com/account/billing/overview"
							}), ". Note that you ", (0, s.jsx)("b", {
								children: "do not"
							}), " need to have a ChatGPT Plus subscription, it's ", (0, s.jsx)("b", {
								children: "not needed"
							}), ". If you already have a paid OpenAI account, check to see if you still have sufficient credits. Also, try creating a new API key and trying again. If this problem persists, please contact support."]
						})), null;
						if (!t.ok) return o("Could not connect to OpenAI API. Please try again later. This could be because OpenAI's server is experiencing high demand and rejected your request. Go to https://status.openai.com/ to check their status. Error code: " + t.status), V(!1), null;
						let a = await t.json();
						return V(!1), a
					} catch (e) {
						o("Could not connect to OpenAI API from your browser. This could be a network issue or adblock. Please try again or contact support. Open Developer Console to see more details."), console.error(e)
					}
					V(!1)
				};
				return (0, s.jsxs)("div", {
					className: " mt-10 ",
					children: [m && (0, s.jsxs)("div", {
						className: "flex items-center justify-center",
						children: [(0, s.jsx)("div", {
							className: "text-green-500 text-sm font-semibold my-2",
							children: "Awesome! You can start chatting now!"
						}), (0, s.jsx)(u.Z, {})]
					}), a ? null : (0, s.jsxs)("div", {
						className: "text-sm mt-10 text-center space-y-4",
						children: [(0, s.jsxs)("div", {
							children: [(0, s.jsx)("div", {
								children: "Testando pra valer To get started, enter your OpenAI API key below."
							}), (0, s.jsx)("div", {
								className: "text-xs",
								children: "Your API Key is stored locally on your browser and never sent anywhere else."
							})]
						}), (0, s.jsx)("div", {
							children: (0, s.jsxs)("button", {
								id: "enter-api-key-btn",
								disabled: l,
								className: "inline-flex items-center justify-center rounded-full px-4 py-3 text-sm shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-sm disabled:bg-gray-400 space-x-2",
								onClick: B,
								children: [l ? (0, s.jsx)(q.Z, {}) : (0, s.jsx)(g.itj, {
									className: "w-5 h-5"
								}), (0, s.jsx)("span", {
									children: "Enter API Key"
								})]
							})
						}), (0, s.jsx)("div", {
							className: "text-center",
							children: (0, s.jsx)("a", {
								className: "text-blue-500 text-xs hover:underline",
								target: "_blank",
								rel: "noopener noreferrer",
								href: "https://platform.openai.com/account/api-keys",
								children: "→ Get your API key from Open AI dashboard."
							})
						})]
					}), (0, s.jsxs)(d.Z, {
						open: w,
						setOpen: x,
						showCloseButton: !1,
						children: [(0, s.jsx)("h2", {
							className: "text-center text-xl font-bold",
							children: "\uD83D\uDD11 Enter Your OpenAI API Key:"
						}), (0, s.jsx)("div", {
							className: "my-4",
							children: "You need an OpenAI API Key to use TypingMind."
						}), (0, s.jsx)("div", {
							className: "text-xs",
							children: "Your API Key is stored locally on your browser and never sent anywhere else."
						}), (0, s.jsx)("div", {
							className: "my-4",
							children: (0, s.jsx)("input", {
								type: "text",
								placeholder: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
								className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
								value: f,
								autoComplete: "off",
								onChange: e => y(e.target.value),
								onKeyDown: e => {
									"Enter" === e.key && (e.preventDefault(), j())
								},
								disabled: l
							})
						}), (0, s.jsx)("div", {
							className: "my-4 text-center",
							children: (0, s.jsx)("a", {
								className: "text-blue-500 text-xs hover:underline",
								target: "_blank",
								rel: "noopener noreferrer",
								href: "https://platform.openai.com/account/api-keys",
								children: "→ Get your API key from Open AI dashboard."
							})
						}), r ? (0, s.jsx)("div", {
							className: "text-sm text-center text-red-500",
							children: r
						}) : null, (0, s.jsxs)("div", {
							className: "my-2 text-center space-x-2 flex items-center justify-center",
							children: [(0, s.jsxs)("button", {
								disabled: l,
								onClick: () => j(),
								className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
								children: [l ? (0, s.jsx)(q.Z, {}) : (0, s.jsx)(A.bzc, {
									className: "w-4 h-4"
								}), (0, s.jsx)("span", {
									children: "Save"
								})]
							}), (0, s.jsx)("button", {
								disabled: l,
								onClick: () => x(!1),
								className: "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1",
								children: (0, s.jsx)("span", {
									children: "Cancel"
								})
							})]
						}), (0, s.jsx)("div", {
							className: "my-4 text-center font-semibold",
							children: (0, s.jsxs)("details", {
								children: [(0, s.jsx)("summary", {
									className: "my-4 cursor-pointer hover:underline",
									children: "API Key not working? Click Here."
								}), (0, s.jsxs)("ul", {
									className: "list-disc pl-4 text-left space-y-4",
									children: [(0, s.jsxs)("li", {
										children: ["Make sure you have your billing info added in", " ", (0, s.jsx)("a", {
											className: "text-blue-500 hover:underline",
											target: "_blank",
											rel: "noopener noreferrer",
											href: "https://platform.openai.com/account/billing/overview",
											children: "OpenAI Billing"
										}), " ", "page. Without billing info, your API key will not work."]
									}), (0, s.jsxs)("li", {
										children: ["OpenAI's ChatGPT API key is VERY cheap. You pay for what you use.", " ", (0, s.jsx)("a", {
											className: "text-blue-500 hover:underline",
											target: "_blank",
											rel: "noopener noreferrer",
											href: "https://openai.com/pricing#language-models",
											children: "The price"
										}), " ", "is roughly about 100,000 words per $1."]
									}), (0, s.jsx)("li", {
										children: "A ChatGPT Plus Subscription is not needed."
									})]
								})]
							})
						}), (0, s.jsx)("div", {
							className: "mt-4 text-xs",
							children: "The app will connect to OpenAI API server to check if your API Key is working properly."
						}), (0, s.jsx)("div", {
							className: "mt-4",
							children: (0, s.jsx)(c, {})
						})]
					})]
				})
			}
		},
		39590: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return l
				}
			});
			var s = a(85893),
				n = a(28368),
				i = a(40800),
				r = a(67798);
			let o = [{
				question: "Is this app free?",
				answer: "TypingMind.com is free to use with some basic features. You will need to have a working OpenAI API Key in order to use the app. When you use the API Key, you pay directly to OpenAI for the amount of credits/tokens you use. TypingMind.com has premium features that can be unlocked with a one-time purchase."
			}, {
				question: "Where can I get an OpenAI API Key?",
				answer: "You can signup directly with OpenAI at https://platform.openai.com/signup"
			}, {
				question: "Do I need to pay for ChatGPT Plus ($20/month) to use TypingMind.com?",
				answer: "No! A ChatGPT Plus subscription is not needed. You just need to have an OpenAI's API Key. You can see more info on how to get one here: https://openai.com/blog/openai-api"
			}, {
				question: "Do I need to pay for OpenAI for a ChatGPT API Key?",
				answer: "Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We don't sell API keys."
			}, {
				question: "How does this app work?",
				answer: "This is a static web app, it doesn't have any backend server. When you enter your API key, it will be stored locally and securely on your browser. All API requests are sent directly from your browser to OpenAI server to interact with ChatGPT. Think of this as a HTTP client for your ChatGPT API with a lot of convenience features."
			}, {
				question: "How is the API key handled?",
				answer: "Your API is safe and stored locally on your device. This is a static app, which means that it doesn't have a backend. All the data is stored in your browser's local storage. Requests to Open AI's API is sent directly from your current browser (check the Network tab in your console if you want to see it)."
			}, {
				question: "What's the difference between ChatGPT Plus and ChatGPT API via TypingMind?",
				answer: "Under the hood, ChatGPT Plus and ChatGPT API offer the same model and the same quality. You can view this on their official announcement here: https://platform.openai.com/docs/guides/chat. The initial system instruction can be a little bit different, which can be configured to make the AI output different messages from time to time."
			}, {
				question: "I have ChatGPT Plus, will it cost me more to use ChatGPT API via TypingMind?",
				answer: "The ChatGPT API costs soooooo little you won't even notice it. Typical chat conversation is about 1000 characters, which costs ~$0.001. That's less than a cent. You can have thousands of chats and it will only costs you like $1. See official pricing here: https://openai.com/pricing#language-models"
			}, {
				question: "How many chats can I have?",
				answer: "You can have as many chats as you want. The only limit is your OpenAI API key's limit and your browser storage limit (technical term: Local Storage). Web browser gives you some limited data storage, the actual limit is different for each browser. Typically, you can save thousands of chat conversations without problems, but that's not guaranteed. When the browser storage runs out, you will need to delete old chats to save the new ones. We will provide a separate service to sync and backup your chats soon. Adding the website to your home screen may increase the storage capacity."
			}, {
				question: "How can I sync my chat conversations across devices?",
				answer: "At the moment, you have to export the chats and import it on another device."
			}, {
				question: "Is it really faster than ChatGPT?",
				answer: "Most likely yes. From previous testings and user feedback, it is faster than the default ChatGPT in most cases, especially on long responses. Displaying the whole response instead of showing it word by word also help you to scan the response faster with your eyes. With all that said, the speed improvement is not guaranteed, your actual speed experience may varies (internet connection, API availability, etc.). Give it a try to see for yourself!"
			}, {
				question: "Why does sometimes TypingMind responds differently than the default OpenAI's ChatGPT event with the same prompt?",
				answer: "TypingMind uses the same underlying model as OpenAI's default chat app. For the same prompt, it can produce different responses each time. The default chat app by OpenAI may also have some initial prompt settings that are different from TypingMind. If you don't get the response you expects, try \"Re-generate Response\" or tweaking the prompt."
			}, {
				question: "Can I self-host it?",
				answer: "Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings."
			}, {
				question: "Do I have access to the full source code if I want to self-host?",
				answer: "No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings."
			}, {
				question: "What can I customize in the self-host version?",
				answer: "As of now, you cannot customize anything. But I'm working on making it possible to set custom UI and branding soon. Stay tuned!"
			}, {
				question: "Where can I download the macOS app?",
				answer: "After you make a purchase, you will receive the files and instructions in your email. You can also login to https://app.lemonsqueezy.com/my-orders/ to download the files."
			}, {
				question: "Is the macOS app a native app? How do I receive updates with the macOS app?",
				answer: "The macOS app is a simple native app with a webview that runs the latest version of TypingMind on your dock. It's only ~5MB in size, load super fast, and can update itself everytime you open it. You can also check for updates manually in the app's menu."
			}, {
				question: "Is there a Windows/Linux app?",
				answer: "Not for now. Sorry!"
			}, {
				question: "License Key vs. API Key",
				answer: "License Key is used to activate the premium features of TypingMind.com. API Key refers to OpenAI ChatGPT API Key, and is used to connect to OpenAI's API to interact with ChatGPT. You need an API Key to use the app. The License Key is only needed if you want to use the premium features."
			}, {
				question: "What are the premium features?",
				answer: "The premium features include: Chat Search History, Access Prompt Library, Integrations, etc. Check the pricing page for the latest details of all the premium features."
			}, {
				question: "Is there an expiration date for the License Key?",
				answer: "The license key is valid forever."
			}, {
				question: "Can I receive new updates after I buy a license key?",
				answer: "Yes, all future updates are included."
			}, {
				question: "How many devices/users can I use the License Key on?",
				answer: 'Each license key can be used on 5 devices which is typically enough for 1 user. If you need to use it on for more devices, you can buy a new license keys or add more devices to your existing license key. "Device" is counted based on the number of places where the license key is entered and the chat history is saved for continuous use. For example, if you use Typing Mind on Chrome browser on your laptop and also on your phone, that will be 2 devices. Note that the license key and chat history is saved locally per browser, so if you use Typing Mind on Chrome and also on Firefox, you will need to enter the license key 2 times, have 2 separate chat histories, and that counts as 2 devices. If you need to use the license key on a new device but have reached the device limit, you can unlink the previous devices first using the License Manager (this is done online, access to the previous devices not needed). This device limit is put in place to avoid license key abuse and pirate.'
			}, {
				question: "How do I remove a device from my license? How to access the License Manager?",
				answer: "During Beta, inactive devices will be revoked automatically after a short time, you don't need anything. After Beta, you can access the License Manager from the app and manage your device there."
			}, {
				question: "I have purchased but forget my license key, how can I get it back?",
				answer: "You can go to https://app.lemonsqueezy.com/my-orders/ to access your license key."
			}, {
				question: "Can I get a refund?",
				answer: "Yes. We offer a 14-day money-back guarantee. If you're not satisfied, let us know within 14 days and we'll give you a full refund."
			}];

			function l() {
				return (0, s.jsx)("div", {
					className: "",
					children: (0, s.jsx)("div", {
						className: "mx-auto max-w-7xl",
						children: (0, s.jsxs)("div", {
							className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
							children: [(0, s.jsx)("h2", {
								className: "text-2xl font-bold leading-10 tracking-tight ",
								children: "Frequently asked questions"
							}), (0, s.jsx)("dl", {
								className: "mt-4 space-y-6 divide-y divide-gray-900/10",
								children: o.map(e => (0, s.jsx)(n.p, {
									as: "div",
									className: "pt-6",
									children: t => {
										let {
											open: a
										} = t;
										return (0, s.jsxs)(s.Fragment, {
											children: [(0, s.jsx)("dt", {
												children: (0, s.jsxs)(n.p.Button, {
													className: "flex w-full items-start justify-between text-left ",
													children: [(0, s.jsx)("span", {
														className: "text-base font-semibold leading-7",
														children: e.question
													}), (0, s.jsx)("span", {
														className: "ml-6 flex h-7 items-center",
														children: a ? (0, s.jsx)(i, {
															className: "h-6 w-6",
															"aria-hidden": "true"
														}) : (0, s.jsx)(r, {
															className: "h-6 w-6",
															"aria-hidden": "true"
														})
													})]
												})
											}), (0, s.jsx)(n.p.Panel, {
												as: "dd",
												className: "mt-2 pr-12",
												children: (0, s.jsx)("p", {
													className: "text-base leading-7 text-gray-500",
													children: e.answer
												})
											})]
										})
									}
								}, e.question))
							})]
						})
					})
				})
			}
		},
		55623: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return i
				}
			});
			var s = a(85893);
			let n = [{
				title: "Domain Check",
				description: "Ask AI for domain name suggestions, then check the domain availability with 1 click.",
				gif: "domain-check.gif"
			}, {
				title: "CodePen",
				description: "Open code in CodePen editor with 1 click.",
				gif: "codepen.gif"
			}, {
				title: "Color Highlight",
				description: "Easily review color codes in the AI response.",
				gif: "colors.gif"
			}, {
				title: "AI Characters",
				description: "Chat with built-in AI characters on various topics.",
				gif: "characters.gif"
			}];

			function i() {
				return (0, s.jsx)("div", {
					className: "",
					children: (0, s.jsx)("div", {
						className: "mx-auto max-w-7xl",
						children: (0, s.jsxs)("div", {
							className: "mx-auto max-w-4xl",
							children: [(0, s.jsx)("h2", {
								className: "text-2xl font-bold leading-10 tracking-tight",
								children: "Available Integrations"
							}), (0, s.jsx)("p", {
								children: "Enhance your chat experience x10 with our integrations."
							}), (0, s.jsx)("div", {
								className: "grid grid-cols-2 gap-2 py-4",
								children: n.map(e => (0, s.jsxs)("div", {
									className: "border border-gray-200 rounded-xl overflow-hidden shadow bg-gray-100 dark:bg-zinc-800 dark:border-gray-600",
									children: [(0, s.jsx)("div", {
										className: "h-40 aspect-ratio-video flex items-center justify-center bg-white",
										children: (0, s.jsx)("img", {
											src: "/gifs/".concat(e.gif),
											alt: e.title
										})
									}), (0, s.jsxs)("div", {
										className: "p-4",
										children: [(0, s.jsx)("div", {
											className: "text-lg font-semibold",
											children: e.title
										}), (0, s.jsx)("div", {
											className: "text-gray-500",
											children: e.description
										})]
									})]
								}, e.gif))
							})]
						})
					})
				})
			}
		},
		24461: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return n
				}
			});
			var s = a(85893);

			function n() {
				return (0, s.jsxs)("svg", {
					className: "animate-spin h-5 w-5",
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					children: [(0, s.jsx)("circle", {
						className: "opacity-25",
						cx: "12",
						cy: "12",
						r: "10",
						stroke: "currentColor",
						strokeWidth: "4"
					}), (0, s.jsx)("path", {
						className: "opacity-75",
						fill: "currentColor",
						d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					})]
				})
			}
		},
		87260: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return l
				}
			});
			var s = a(85893),
				n = a(67294),
				i = a(44080),
				r = a(46047);

			function o() {
				for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
				return t.filter(Boolean).join(" ")
			}

			function l(e) {
				let {
					closeButtonText: t,
					showCloseButton: a = !0,
					title: l,
					position: c,
					open: A,
					setOpen: d,
					hideOverflow: u = !0,
					children: q,
					wide: g,
					wide2: V,
					customZ: h
				} = e;
				return (0, s.jsx)(i.u.Root, {
					show: A,
					as: n.Fragment,
					children: (0, s.jsx)(r.V, {
						as: "div",
						className: o("fixed inset-0 overflow-y-auto", h || "z-50 "),
						onClose: d,
						children: (0, s.jsxs)("div", {
							className: o("flex justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0", "top" === c ? "items-start pt-28" : "items-center pt-4"),
							children: [(0, s.jsx)(i.u.Child, {
								as: n.Fragment,
								enter: "ease-out duration-300",
								enterFrom: "opacity-0",
								enterTo: "opacity-100",
								leave: "ease-in duration-200",
								leaveFrom: "opacity-100",
								leaveTo: "opacity-0",
								children: (0, s.jsx)(r.V.Overlay, {
									className: "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
								})
							}), (0, s.jsx)("span", {
								className: "hidden sm:inline-block sm:align-middle sm:h-screen",
								"aria-hidden": "true",
								children: "​"
							}), (0, s.jsx)(i.u.Child, {
								as: n.Fragment,
								enter: "ease-out duration-300",
								enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
								enterTo: "opacity-100 translate-y-0 sm:scale-100",
								leave: "ease-in duration-200",
								leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
								leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
								children: (0, s.jsxs)("div", {
									className: o("inline-block w-full align-bottom bg-white dark:bg-zinc-900 rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6", u ? "overflow-hidden" : "", g ? " sm:max-w-lg" : V ? "sm:max-w-xl" : " sm:max-w-sm"),
									children: [(0, s.jsxs)("div", {
										children: [l ? (0, s.jsx)(r.V.Title, {
											as: "h3",
											className: "text-lg text-center leading-6 font-medium text-gray-900 dark:text-white",
											children: l
										}) : null, (0, s.jsx)("div", {
											className: "mt-2 text-gray-800 dark:text-white text-left text-sm",
											children: q
										})]
									}), a ? (0, s.jsx)("div", {
										className: "mt-5 sm:mt-6 text-center",
										children: (0, s.jsx)("button", {
											type: "button",
											className: "inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm",
											onClick: () => d(!1),
											children: t || "Close"
										})
									}) : null]
								})
							})]
						})
					})
				})
			}
		},
		64597: function(e, t, a) {
			a.d(t, {
				NW: function() {
					return r
				},
				cF: function() {
					return i
				},
				eK: function() {
					return n
				}
			});
			var s = a(906);
			let n = e => {
					let t = (0, s.Z)("TM_" + e);
					return t
				},
				i = () => window.localStorage,
				r = () => Object.keys(window.localStorage)
		},
		34656: function(e, t, a) {
			a.d(t, {
				Z: function() {
					return i
				}
			});
			let s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			function n(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					n = e.getDate(),
					i = s[e.getMonth()],
					r = e.getFullYear(),
					o = e.getHours(),
					l = e.getMinutes();
				return (l < 10 && (l = "0".concat(l)), t) ? "".concat(t, " at ").concat(o, ":").concat(l) : a ? "".concat(n, ". ").concat(i, " at ").concat(o, ":").concat(l) : "".concat(n, ". ").concat(i, " ").concat(r, ". at ").concat(o, ":").concat(l)
			}

			function i(e) {
				if (!e) return null;
				let t = "object" == typeof e ? e : new Date(e),
					a = new Date,
					s = new Date(a - 864e5),
					i = Math.round((a - t) / 1e3),
					r = Math.round(i / 60),
					o = a.toDateString() === t.toDateString(),
					l = s.toDateString() === t.toDateString(),
					c = a.getFullYear() === t.getFullYear();
				if (i < 5) return "now";
				if (i < 60) return "".concat(i, " seconds ago");
				if (i < 90) return "about a minute ago";
				if (r < 60) return "".concat(r, " minutes ago");
				if (o) return n(t, "Today");
				if (l) return n(t, "Yesterday");
				if (c) return n(t, !1, !0);
				return n(t)
			}
		},
		14364: function(e, t, a) {
			a.d(t, {
				FW: function() {
					return u
				},
				M: function() {
					return A
				},
				Q6: function() {
					return l
				},
				Ri: function() {
					return i
				},
				b1: function() {
					return r
				},
				cl: function() {
					return o
				},
				uM: function() {
					return c
				},
				z9: function() {
					return d
				}
			});
			var s = a(67294);
			let n = a(62136),
				i = [{
					id: "1",
					title: "Fix Grammar Errors",
					description: "Fix grammar errors in the text",
					prompt: "Fix all the grammar errors in the text below. Only fix grammar errors, do not change the text style. Then explain the grammar errors in a list format.\n\n{{your content here}}",
					source: "Tony Dinh"
				}, {
					id: "2",
					title: "Act as an English Translator and Improver",
					prompt: 'I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "{{your content here}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "3",
					title: "Act as an job interviewer",
					prompt: 'I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the {{position}} position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is "Hi"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "4",
					title: "Act as a English Pronunciation Helper",
					prompt: 'I want you to act as an English pronunciation assistant for Turkish speaking people. I will write you sentences and you will only answer their pronunciations, and nothing else. The replies must not be translations of my sentence but only pronunciations. Pronunciations should use Turkish Latin letters for phonetics. Do not write explanations on replies. My first sentence is "{{your content}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "5",
					title: "Act as a Travel Guide",
					prompt: 'I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location. My first suggestion request is "{{your request}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "6",
					title: "Act as a Storyteller",
					prompt: 'I want you to act as a storyteller. You will come up with entertaining stories that are engaging, imaginative and captivating for the audience. It can be fairy tales, educational stories or any other type of stories which has the potential to capture people\'s attention and imagination. Depending on the target audience, you may choose specific themes or topics for your storytelling session e.g., if it’s children then you can talk about animals; If it’s adults then history-based tales might engage them better etc. My first request is "{{your request}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "7",
					title: "Act as a Stand-up Comedian",
					prompt: 'I want you to act as a stand-up comedian. I will provide you with some topics related to current events and you will use your wit, creativity, and observational skills to create a routine based on those topics. You should also be sure to incorporate personal anecdotes or experiences into the routine in order to make it more relatable and engaging for the audience. My first request is "{{I want an humorous take on politics.}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "8",
					title: "Act as a Motivational Coach",
					prompt: 'I want you to act as a motivational coach. I will provide you with some information about someone\'s goals and challenges, and it will be your job to come up with strategies that can help this person achieve their goals. This could involve providing positive affirmations, giving helpful advice or suggesting activities they can do to reach their end goal. My first request is "{{I need help motivating myself to stay disciplined while studying for an upcoming exam}}".',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "9",
					title: "Act as a Composer",
					prompt: 'I want you to act as a composer. I will provide the lyrics to a song and you will create music for it. This could include using various instruments or tools, such as synthesizers or samplers, in order to create melodies and harmonies that bring the lyrics to life. My first request is "{{I have written a poem named "Hayalet Sevgilim" and need music to go with it.}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "10",
					title: "Act as a Screenwriter",
					prompt: 'I want you to act as a screenwriter. You will develop an engaging and creative script for either a feature length film, or a Web Series that can captivate its viewers. Start with coming up with interesting characters, the setting of the story, dialogues between the characters etc. Once your character development is complete - create an exciting storyline filled with twists and turns that keeps the viewers in suspense until the end. My first request is "{{I need to write a romantic drama movie set in Paris.}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "11",
					title: "Act as a Rapper",
					prompt: 'I want you to act as a rapper. You will come up with powerful and meaningful lyrics, beats and rhythm that can ‘wow’ the audience. Your lyrics should have an intriguing meaning and message which people can relate too. When it comes to choosing your beat, make sure it is catchy yet relevant to your words, so that when combined they make an explosion of sound everytime! My first request is "{{I need a rap song about finding strength within yourself.}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "12",
					title: "Act as an AI Writing Tutor",
					prompt: 'I want you to act as an AI writing tutor. I will provide you with a student who needs help improving their writing and your task is to use artificial intelligence tools, such as natural language processing, to give the student feedback on how they can improve their composition. You should also use your rhetorical knowledge and experience about effective writing techniques in order to suggest ways that the student can better express their thoughts and ideas in written form. My first request is "{{I need somebody to help me edit my master\'s thesis.}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}, {
					id: "13",
					title: "Act as a UX/UI Developer",
					prompt: 'I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience. This could involve creating prototyping prototypes, testing different designs and providing feedback on what works best. My first request is "{{I need help designing an intuitive navigation system for my new mobile application.}}"',
					source: "github.com/f/awesome-chatgpt-prompts"
				}];

			function r() {
				return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
			}
			let o = "You are ChatGPT, a large language model trained by OpenAI.",
				l = "gpt-3.5-turbo",
				c = async e => {
					let t = await n.importSPKI("-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAqs5NRfqiAmZf4Eg3TKsT\n9lpFpof6ZfQ+o7wiHbqKjXdz/yUez/2TxEMmisq3sNlwbAEqseIiPHD507UTi4b3\nfAXqDByrNrmyMIYg/UUpjRbuui1bOzHDVLqE4fFbVUvv4XacJmirAH8m6NUKHAIo\ns8IebpCVIgrn3PUayA52wUU3FhRfHti6gyaOj85jTJh/8c2vtlxC9tYf67s9tbFD\nM3mGSwQAiAb6ozooG8vhiQB0szFq7y4pVS5bF6fk2VAlwy7uIzRGjrk6Vz6mxQLu\nUsqvtBKREp/0mdR2EC2iXyQcfLSVJCDgaEMbvS8ByrKHkLMkePeVeI19KXaIpp+p\nWk6SuNrw4ClxrJe0uU63peOMmtGvUCEnI86k9Aui4x7cvT2Ken9weG7L7zdFfFR8\nwd776L3rtSowMU0s5Vi/dS4Sx74J82uQAe3cY7ZffmwBcb6LKC6HiaDwjBcI/T2L\ngth1iy4P+oEm0HIEsqv7Y3XSkc1qzC4AZ4kfW6/7AeUqBs7VVC8gQNMhM255EYwl\nms6qFJdgy3mNKVBNc3Qxw2JZoOwXivJHU+OVxosl8W0wnsXpLXPhP1A7XcnxkR40\nKR8rnrP+arHGHxHx28zJ3NeEIOiA3YmD5jpQ90BPccZTZtHfzao+jkYNWZdHRnjS\nylbW/odEgbmqTW7DJxavY/MCAwEAAQ==\n-----END PUBLIC KEY-----", "RS256"),
						{
							payload: a,
							protectedHeader: s
						} = await n.jwtVerify(e, t, {
							issuer: "urn:typingmind:issuer",
							audience: "urn:typingmind:audience"
						});
					return {
						payload: a,
						protectedHeader: s
					}
				}, A = e => {
					let t = 0;
					for (let a = 0; a < e.length; a++) {
						let s = e.charCodeAt(a);
						t = (t << 5) - t + s, t &= t
					}
					return new Uint32Array([t])[0].toString(36)
				}, d = () => {
					let e = (0, s.useRef)(!0);
					return (0, s.useEffect)(() => {
						e.current = !1
					}, []), e.current
				}, u = e => e.map(e => {
					try {
						var t, a;
						let s = e.messages.filter(e => "user" === e.role);
						return {
							...e,
							preview: (null === (t = s[s.length - 1]) || void 0 === t ? void 0 : null === (a = t.content) || void 0 === a ? void 0 : a.substring(0, 30)) || "",
							id: e.chatID,
							messages: null,
							title: e.chatTitle
						}
					} catch (e) {
						return console.error(e), null
					}
				}).filter(Boolean)
		},
		83991: function(e) {
			e.exports = JSON.parse('{"f":[{"messages":[{"role":"system","content":"You are a marketing expert, you help the user develop marketing strategies and campaigns, conduct market research, and provide branding and advertising advice."},{"role":"user","content":"best advice?"},{"role":"assistant","content":"The best advice I could give for marketing is to know your target audience inside and out. You must understand their needs, interests, behaviors, and pain points to create effective marketing strategies that resonate with them. Additionally, keep track of your metrics and analyze your data regularly to gauge your success and adjust your approach if necessary. Finally, always stay up-to-date with the latest marketing trends and technologies to stay ahead of the competition.","usage":{"prompt_tokens":42,"completion_tokens":87,"total_tokens":129},"finish":"stop"}],"chatTitle":"(Example) Marketing Advice","model":"gpt-3.5-turbo","systemMessage":"You are a marketing expert, you help the user develop marketing strategies and campaigns, conduct market research, and provide branding and advertising advice.","character":{"id":"marketing_expert","title":"Marketing Expert","instruction":"You are a marketing expert, you help the user develop marketing strategies and campaigns, conduct market research, and provide branding and advertising advice.","description":"A marketing expert who can help you develop effective marketing strategies and campaigns, conduct market research, and provide branding and advertising advice.","color":"#F5F5F5"},"chatID":"bcf4b82b-d6fd-46e9-b1d7-026a7b7190cd","updatedAt":"2023-03-11T02:58:19.665Z"},{"messages":[{"role":"system","content":"You are a standup comedian, you make people laugh with your satire, jokes and humor. You answer everything in a humorous way to cheer the user up. Use satire and make fun of everything the user says in a positive way."},{"role":"user","content":"yo!"},{"role":"assistant","content":"Hey there, Mr. Yo! Is that some sort of new yoghurt brand or are you just excited to see me?","usage":{"prompt_tokens":61,"completion_tokens":28,"total_tokens":89},"finish":"stop"}],"chatTitle":"(Example) Chat with comedian","model":"gpt-3.5-turbo","systemMessage":"You are a standup comedian, you make people laugh with your satire, jokes and humor. You answer everything in a humorous way to cheer the user up. Use satire and make fun of everything the user says in a positive way.","character":{"id":"standup_comedian","title":"Standup Comedian","instruction":"You are a standup comedian, you make people laugh with your satire, jokes and humor. You answer everything in a humorous way to cheer the user up. Use satire and make fun of everything the user says in a positive way.","description":"A standup comedian who can make you laugh with their jokes and humor.","color":"#F0FFF0"},"chatID":"cb9cd659-131a-4451-bda2-04f748c8fda2","updatedAt":"2023-03-11T02:57:36.557Z"},{"messages":[{"role":"system","content":"You are ChatGPT, a large language model trained by OpenAI."},{"role":"user","content":"list some good dot com domain names for a todo list app"},{"role":"assistant","content":"1. TaskGrid.com\\n2. TodoHive.com\\n3. TaskSpot.com\\n4. ListMate.com\\n5. TodoAce.com\\n6. TaskZenith.com\\n7. ListifyNow.com\\n8. TodoNexus.com\\n9. TaskCraze.com\\n10. ListLlama.com","usage":{"prompt_tokens":39,"completion_tokens":68,"total_tokens":107},"finish":"stop"}],"chatTitle":"(Example) Generating domain names","model":"gpt-3.5-turbo","systemMessage":"You are ChatGPT, a large language model trained by OpenAI.","character":null,"chatID":"dbaa830d-8658-4fcd-aa10-17e3f83fc231","updatedAt":"2023-03-11T02:57:24.561Z"},{"messages":[{"role":"system","content":"You are ChatGPT, a large language model trained by OpenAI."},{"role":"user","content":"Fix all the grammar errors in the text below. Only fix grammar errors, do not change the text style.\\n\\nI love AI a very many"},{"role":"assistant","content":"I love AI very much.","usage":{"prompt_tokens":55,"completion_tokens":8,"total_tokens":63},"finish":null}],"chatTitle":"(Example) Fix grammar errors","model":"gpt-3.5-turbo","systemMessage":"You are ChatGPT, a large language model trained by OpenAI.","character":null,"chatID":"48e25eea-5655-4184-8ef7-1f0f29f2b612","updatedAt":"2023-03-11T02:57:23.913Z"}]}')
		}
	}
]);