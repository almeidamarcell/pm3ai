"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[957], {
		11541: function(e, A, t) {
			t.d(A, {
				Z: function() {
					return r
				}
			});
			var E = t(85893);
			t(67294);
			var N = t(8193);

			function r() {
				return (0, E.jsxs)("div", {
					className: "text-yellow-600 text-xs my-4 text-left",
					children: [(0, E.jsxs)("div", {
						className: "font-semibold my-2",
						children: [(0, E.jsx)(N.CSE, {
							className: "inline-block mr-1 w-4 h-4"
						}), "You have reached the maximum length of the conversation."]
					}), (0, E.jsx)("div", {
						children: "This limitation is set by OpenAI. We hope to fix this issue in the future when OpenAI increase the limit for API usage (for example, GPT-4 has a bigger context length!). Sorry about this inconvenience!"
					}), (0, E.jsxs)("div", {
						children: [(0, E.jsx)("div", {
							className: "font-semibold my-2",
							children: "Possible workarounds:"
						}), (0, E.jsxs)("ul", {
							className: "list-decimal pl-4",
							children: [(0, E.jsx)("li", {
								children: "You can delete some old messages from this chat, then start sending new messages again."
							}), (0, E.jsx)("li", {
								children: "You can continue this in a new chat, but keep in mind that the assistant will not remember the previous conversation."
							})]
						})]
					})]
				})
			}
		},
		91655: function(e, A, t) {
			t.d(A, {
				Z: function() {
					return n
				}
			});
			var E = t(85893);
			t(67294);
			let N = {
					"gpt-4": {
						prompt: .03,
						completion: .06
					},
					"gpt-4-0314": {
						prompt: .03,
						completion: .06
					},
					"gpt-4-32k": {
						prompt: .06,
						completion: .12
					},
					"gpt-4-32k-0314": {
						prompt: .06,
						completion: .12
					},
					"gpt-3.5-turbo": {
						prompt: .002,
						completion: .002
					},
					"gpt-3.5-turbo-0301": {
						prompt: .002,
						completion: .002
					}
				},
				r = e => "$".concat(e.toFixed(4));

			function n(e) {
				let {
					model: A,
					messages: t,
					chatTitle: n
				} = e, I = t.reduce((e, A) => {
					var t;
					return e + ((null == A ? void 0 : null === (t = A.usage) || void 0 === t ? void 0 : t.total_tokens) || 0)
				}, 0), S = N[A] || N["gpt-3.5-turbo"], s = t.reduce((e, A) => {
					var t, E;
					return e + ((null == A ? void 0 : null === (t = A.usage) || void 0 === t ? void 0 : t.prompt_tokens) || 0) * ((null == S ? void 0 : S.prompt) || 0) / 1e3 + ((null == A ? void 0 : null === (E = A.usage) || void 0 === E ? void 0 : E.completion_tokens) || 0) * ((null == S ? void 0 : S.completion) || 0) / 1e3
				}, 0);
				return (0, E.jsxs)("div", {
					className: "flex items-center justify-center w-full p-2 border-bottom-2 border-gray-200 shadow-bottom flex-col min-w-0",
					children: [(0, E.jsx)("div", {
						className: "font-semibold truncate w-full text-center px-12 text-black dark:text-white",
						children: n || "New Chat"
					}), t.length > 0 ? (0, E.jsxs)("div", {
						className: "text-xs text-gray-400 w-full truncate text-center px-16",
						children: [A ? (0, E.jsxs)("span", {
							children: [A.toUpperCase().replace("-TURBO", ""), " ⋅ "]
						}) : null, t.length, " message", t.length > 1 ? "s" : "", I > 0 ? (0, E.jsxs)("span", {
							children: [" ⋅ ", I.toLocaleString(), " token", I > 1 ? "s" : "", " ⋅ ", r(s)]
						}) : null]
					}) : (0, E.jsx)("div", {
						className: "text-xs text-gray-400",
						children: "Start a new chat"
					})]
				})
			}
		},
		54426: function(e, A, t) {
			t.d(A, {
				Z: function() {
					return r
				}
			});
			var E = t(85893),
				N = t(67294);

			function r() {
				let e, {
						onConfirmed: A,
						children: t,
						className: r,
						disabled: n,
						defaultText: I = () => "Delete",
						confirmText: S = () => (0, E.jsx)("span", {
							className: "text-red-500 text-xs hover:underline",
							children: "Sure?"
						})
					} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					[s, O] = (0, N.useState)(!1);
				return (0, N.useEffect)(() => () => clearTimeout(e), []), (0, N.useEffect)(() => (s && (clearTimeout(e), e = setTimeout(() => {
					O(!1)
				}, 2e3)), () => clearTimeout(e)), [s]), (0, E.jsx)("button", {
					onClick: () => {
						!n && (s ? A && A() : O(!0))
					},
					className: r,
					children: s ? S({
						disabled: n
					}) : t || I({
						disabled: n
					})
				})
			}
		},
		83792: function(e, A, t) {
			t.d(A, {
				Z: function() {
					return G
				}
			});
			var E = t(85893),
				N = t(67294),
				r = t(11541),
				n = t(54426),
				I = t(89583);

			function S(e) {
				let {
					onDelete: A,
					toggleRaw: t,
					showRawButton: r,
					showRaw: S,
					text: s
				} = e, [O, R] = (0, N.useState)(!1), [T, a] = (0, N.useState)(!1);
				return (0, N.useEffect)(() => {
					if (O) {
						let e = setTimeout(() => {
							R(!1)
						}, 2e3);
						return () => clearTimeout(e)
					}
				}, [O]), (0, E.jsxs)("div", {
					onMouseEnter: () => a(!0),
					onMouseLeave: () => a(!1),
					className: "absolute bottom-0 right-0 p-4 items-start justify-center gap-1 hidden group-hover:flex translate-y-1/2 z-30",
					children: [(0, E.jsx)(n.Z, {
						onConfirmed: A,
						className: "rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 px-2 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex overflow-hidden items-center justify-center text-gray-500 active:bg-gray-300 dark:active:bg-gray-800 gap-1 hover:text-red-500",
						children: (0, E.jsx)(I.Xm5, {
							className: "w-4 h-4"
						})
					}), r ? (0, E.jsx)("button", {
						onClick: t,
						className: "rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 px-2 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex overflow-hidden items-center justify-center text-gray-500 active:bg-gray-300 dark:active:bg-gray-800 gap-1",
						children: (0, E.jsx)(I.tvD, {
							className: "w-4 h-4"
						})
					}) : null, (0, E.jsxs)("button", {
						onClick: () => {
							navigator.clipboard.writeText(s), R(!0)
						},
						className: "rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 px-2 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex overflow-hidden items-center justify-center text-gray-500 active:bg-gray-300 dark:active:bg-gray-800 gap-1",
						children: [(0, E.jsx)(I.esY, {
							className: "w-4 h-4"
						}), O ? (0, E.jsx)("span", {
							children: "Copied!"
						}) : null]
					})]
				})
			}
			class s extends N.Component {
				static getDerivedStateFromError(e) {
					return {
						hasError: !0
					}
				}
				componentDidCatch(e, A) {
					console.error("render error", e, A)
				}
				render() {
					return this.state.hasError ? (0, E.jsx)("div", {
						className: "text-red-500 font-semibold",
						children: "Failed to render this response. Please contact support."
					}) : this.props.children
				}
				constructor(e) {
					super(e), this.state = {
						hasError: !1
					}
				}
			}
			var O = t(8193);

			function R(e) {
				let {
					content: A
				} = e, [t, r] = (0, N.useState)(!1);
				return (0, E.jsx)("div", {
					children: (0, E.jsx)("div", {
						className: function() {
							for (var e = arguments.length, A = Array(e), t = 0; t < e; t++) A[t] = arguments[t];
							return A.filter(Boolean).join(" ")
						}("text-sm whitespace-pre-wrap space-y-2 w-fit", "bg-blue-500 text-white px-4 py-2 rounded-lg max-w-full overflow-auto highlight-darkblue focus:outline"),
						children: A
					})
				})
			}

			function T(e) {
				let {
					domain: A
				} = e, t = e => {
					let t = e.screenX,
						E = e.screenY;
					window.open("https://instantdomainsearch.com/?q=".concat(A), "_blank", "width=600,height=500,left=".concat(t, ",top=").concat(E))
				};
				return (0, E.jsxs)("button", {
					onClick: t,
					className: "rounded-full border border-gray-500 px-2 py-0 text-xs my-0 ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all max-w-[24px] group-hover:max-w-[100px] overflow-hidden",
					children: [(0, E.jsx)("span", {
						className: "hidden group-hover:inline-block whitespace-nowrap",
						children: "Check Domain"
					}), (0, E.jsx)("span", {
						className: "text-gray-500 group-hover:hidden whitespace-nowrap",
						children: "?"
					})]
				})
			}
			var a = t(51356);

			function i(e) {
				let {
					rawContent: A
				} = e;
				return (0, E.jsx)("div", {
					className: "pb-6",
					children: (0, E.jsx)("pre", {
						className: "mb-2 overflow-auto text-sm border border-gray-200 rounded bg-gray-100 p-4 dark:bg-zinc-800",
						children: A
					})
				})
			}
			var o = t(53854);
			let C = {
				js: "js",
				javascript: "js",
				ts: "js",
				typescript: "js",
				html: "html",
				css: "css"
			};

			function l(e) {
				let {
					code: A,
					children: t,
					language: r
				} = e, [n, I] = (0, N.useState)(!1), S = () => {
					navigator.clipboard.writeText(A), I(!0), setTimeout(() => {
						I(!1)
					}, 2e3)
				};
				return (0, E.jsxs)("div", {
					children: [t, (0, E.jsxs)("div", {
						className: "text-center space-x-2",
						children: [(0, E.jsx)("button", {
							onClick: S,
							className: "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sans",
							children: n ? "Copied!" : "Copy Code"
						}), r && C.hasOwnProperty(r) ? (0, E.jsxs)("form", {
							className: "inline-block",
							action: "https://codepen.io/pen/define",
							method: "POST",
							target: "_blank",
							children: [(0, E.jsx)("input", {
								type: "hidden",
								name: "data",
								value: JSON.stringify({
									title: "Code from TypingMind.com",
									[C[r]]: A
								})
							}), (0, E.jsxs)("button", {
								type: "submit",
								className: "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sans",
								children: ["Open in CodePen ", (0, E.jsx)(o.x9Z, {
									className: "inline-block"
								})]
							})]
						}) : null]
					})]
				})
			}
			var L = t(11111),
				c = t(63714),
				B = t(329);
			let M = ["AAA", "AARP", "ABARTH", "ABB", "ABBOTT", "ABBVIE", "ABC", "ABLE", "ABOGADO", "ABUDHABI", "AC", "ACADEMY", "ACCENTURE", "ACCOUNTANT", "ACCOUNTANTS", "ACO", "ACTOR", "AD", "ADS", "ADULT", "AE", "AEG", "AERO", "AETNA", "AF", "AFL", "AFRICA", "AG", "AGAKHAN", "AGENCY", "AI", "AIG", "AIRBUS", "AIRFORCE", "AIRTEL", "AKDN", "AL", "ALFAROMEO", "ALIBABA", "ALIPAY", "ALLFINANZ", "ALLSTATE", "ALLY", "ALSACE", "ALSTOM", "AM", "AMAZON", "AMERICANEXPRESS", "AMERICANFAMILY", "AMEX", "AMFAM", "AMICA", "AMSTERDAM", "ANALYTICS", "ANDROID", "ANQUAN", "ANZ", "AO", "AOL", "APARTMENTS", "APP", "APPLE", "AQ", "AQUARELLE", "AR", "ARAB", "ARAMCO", "ARCHI", "ARMY", "ARPA", "ART", "ARTE", "AS", "ASDA", "ASIA", "ASSOCIATES", "AT", "ATHLETA", "ATTORNEY", "AU", "AUCTION", "AUDI", "AUDIBLE", "AUDIO", "AUSPOST", "AUTHOR", "AUTO", "AUTOS", "AVIANCA", "AW", "AWS", "AX", "AXA", "AZ", "AZURE", "BA", "BABY", "BAIDU", "BANAMEX", "BANANAREPUBLIC", "BAND", "BANK", "BAR", "BARCELONA", "BARCLAYCARD", "BARCLAYS", "BAREFOOT", "BARGAINS", "BASEBALL", "BASKETBALL", "BAUHAUS", "BAYERN", "BB", "BBC", "BBT", "BBVA", "BCG", "BCN", "BD", "BE", "BEATS", "BEAUTY", "BEER", "BENTLEY", "BERLIN", "BEST", "BESTBUY", "BET", "BF", "BG", "BH", "BHARTI", "BI", "BIBLE", "BID", "BIKE", "BING", "BINGO", "BIO", "BIZ", "BJ", "BLACK", "BLACKFRIDAY", "BLOCKBUSTER", "BLOG", "BLOOMBERG", "BLUE", "BM", "BMS", "BMW", "BN", "BNPPARIBAS", "BO", "BOATS", "BOEHRINGER", "BOFA", "BOM", "BOND", "BOO", "BOOK", "BOOKING", "BOSCH", "BOSTIK", "BOSTON", "BOT", "BOUTIQUE", "BOX", "BR", "BRADESCO", "BRIDGESTONE", "BROADWAY", "BROKER", "BROTHER", "BRUSSELS", "BS", "BT", "BUILD", "BUILDERS", "BUSINESS", "BUY", "BUZZ", "BV", "BW", "BY", "BZ", "BZH", "CA", "CAB", "CAFE", "CAL", "CALL", "CALVINKLEIN", "CAM", "CAMERA", "CAMP", "CANON", "CAPETOWN", "CAPITAL", "CAPITALONE", "CAR", "CARAVAN", "CARDS", "CARE", "CAREER", "CAREERS", "CARS", "CASA", "CASE", "CASH", "CASINO", "CAT", "CATERING", "CATHOLIC", "CBA", "CBN", "CBRE", "CBS", "CC", "CD", "CENTER", "CEO", "CERN", "CF", "CFA", "CFD", "CG", "CH", "CHANEL", "CHANNEL", "CHARITY", "CHASE", "CHAT", "CHEAP", "CHINTAI", "CHRISTMAS", "CHROME", "CHURCH", "CI", "CIPRIANI", "CIRCLE", "CISCO", "CITADEL", "CITI", "CITIC", "CITY", "CITYEATS", "CK", "CL", "CLAIMS", "CLEANING", "CLICK", "CLINIC", "CLINIQUE", "CLOTHING", "CLOUD", "CLUB", "CLUBMED", "CM", "CN", "CO", "COACH", "CODES", "COFFEE", "COLLEGE", "COLOGNE", "COM", "COMCAST", "COMMBANK", "COMMUNITY", "COMPANY", "COMPARE", "COMPUTER", "COMSEC", "CONDOS", "CONSTRUCTION", "CONSULTING", "CONTACT", "CONTRACTORS", "COOKING", "COOKINGCHANNEL", "COOL", "COOP", "CORSICA", "COUNTRY", "COUPON", "COUPONS", "COURSES", "CPA", "CR", "CREDIT", "CREDITCARD", "CREDITUNION", "CRICKET", "CROWN", "CRS", "CRUISE", "CRUISES", "CU", "CUISINELLA", "CV", "CW", "CX", "CY", "CYMRU", "CYOU", "CZ", "DABUR", "DAD", "DANCE", "DATA", "DATE", "DATING", "DATSUN", "DAY", "DCLK", "DDS", "DE", "DEAL", "DEALER", "DEALS", "DEGREE", "DELIVERY", "DELL", "DELOITTE", "DELTA", "DEMOCRAT", "DENTAL", "DENTIST", "DESI", "DESIGN", "DEV", "DHL", "DIAMONDS", "DIET", "DIGITAL", "DIRECT", "DIRECTORY", "DISCOUNT", "DISCOVER", "DISH", "DIY", "DJ", "DK", "DM", "DNP", "DO", "DOCS", "DOCTOR", "DOG", "DOMAINS", "DOT", "DOWNLOAD", "DRIVE", "DTV", "DUBAI", "DUNLOP", "DUPONT", "DURBAN", "DVAG", "DVR", "DZ", "EARTH", "EAT", "EC", "ECO", "EDEKA", "EDU", "EDUCATION", "EE", "EG", "EMAIL", "EMERCK", "ENERGY", "ENGINEER", "ENGINEERING", "ENTERPRISES", "EPSON", "EQUIPMENT", "ER", "ERICSSON", "ERNI", "ES", "ESQ", "ESTATE", "ET", "ETISALAT", "EU", "EUROVISION", "EUS", "EVENTS", "EXCHANGE", "EXPERT", "EXPOSED", "EXPRESS", "EXTRASPACE", "FAGE", "FAIL", "FAIRWINDS", "FAITH", "FAMILY", "FAN", "FANS", "FARM", "FARMERS", "FASHION", "FAST", "FEDEX", "FEEDBACK", "FERRARI", "FERRERO", "FI", "FIAT", "FIDELITY", "FIDO", "FILM", "FINAL", "FINANCE", "FINANCIAL", "FIRE", "FIRESTONE", "FIRMDALE", "FISH", "FISHING", "FIT", "FITNESS", "FJ", "FK", "FLICKR", "FLIGHTS", "FLIR", "FLORIST", "FLOWERS", "FLY", "FM", "FO", "FOO", "FOOD", "FOODNETWORK", "FOOTBALL", "FORD", "FOREX", "FORSALE", "FORUM", "FOUNDATION", "FOX", "FR", "FREE", "FRESENIUS", "FRL", "FROGANS", "FRONTDOOR", "FRONTIER", "FTR", "FUJITSU", "FUN", "FUND", "FURNITURE", "FUTBOL", "FYI", "GA", "GAL", "GALLERY", "GALLO", "GALLUP", "GAME", "GAMES", "GAP", "GARDEN", "GAY", "GB", "GBIZ", "GD", "GDN", "GE", "GEA", "GENT", "GENTING", "GEORGE", "GF", "GG", "GGEE", "GH", "GI", "GIFT", "GIFTS", "GIVES", "GIVING", "GL", "GLASS", "GLE", "GLOBAL", "GLOBO", "GM", "GMAIL", "GMBH", "GMO", "GMX", "GN", "GODADDY", "GOLD", "GOLDPOINT", "GOLF", "GOO", "GOODYEAR", "GOOG", "GOOGLE", "GOP", "GOT", "GOV", "GP", "GQ", "GR", "GRAINGER", "GRAPHICS", "GRATIS", "GREEN", "GRIPE", "GROCERY", "GROUP", "GS", "GT", "GU", "GUARDIAN", "GUCCI", "GUGE", "GUIDE", "GUITARS", "GURU", "GW", "GY", "HAIR", "HAMBURG", "HANGOUT", "HAUS", "HBO", "HDFC", "HDFCBANK", "HEALTH", "HEALTHCARE", "HELP", "HELSINKI", "HERE", "HERMES", "HGTV", "HIPHOP", "HISAMITSU", "HITACHI", "HIV", "HK", "HKT", "HM", "HN", "HOCKEY", "HOLDINGS", "HOLIDAY", "HOMEDEPOT", "HOMEGOODS", "HOMES", "HOMESENSE", "HONDA", "HORSE", "HOSPITAL", "HOST", "HOSTING", "HOT", "HOTELES", "HOTELS", "HOTMAIL", "HOUSE", "HOW", "HR", "HSBC", "HT", "HU", "HUGHES", "HYATT", "HYUNDAI", "IBM", "ICBC", "ICE", "ICU", "ID", "IE", "IEEE", "IFM", "IKANO", "IL", "IM", "IMAMAT", "IMDB", "IMMO", "IMMOBILIEN", "IN", "INC", "INDUSTRIES", "INFINITI", "INFO", "ING", "INK", "INSTITUTE", "INSURANCE", "INSURE", "INT", "INTERNATIONAL", "INTUIT", "INVESTMENTS", "IO", "IPIRANGA", "IQ", "IR", "IRISH", "IS", "ISMAILI", "IST", "ISTANBUL", "IT", "ITAU", "ITV", "JAGUAR", "JAVA", "JCB", "JE", "JEEP", "JETZT", "JEWELRY", "JIO", "JLL", "JM", "JMP", "JNJ", "JO", "JOBS", "JOBURG", "JOT", "JOY", "JP", "JPMORGAN", "JPRS", "JUEGOS", "JUNIPER", "KAUFEN", "KDDI", "KE", "KERRYHOTELS", "KERRYLOGISTICS", "KERRYPROPERTIES", "KFH", "KG", "KH", "KI", "KIA", "KIDS", "KIM", "KINDER", "KINDLE", "KITCHEN", "KIWI", "KM", "KN", "KOELN", "KOMATSU", "KOSHER", "KP", "KPMG", "KPN", "KR", "KRD", "KRED", "KUOKGROUP", "KW", "KY", "KYOTO", "KZ", "LA", "LACAIXA", "LAMBORGHINI", "LAMER", "LANCASTER", "LANCIA", "LAND", "LANDROVER", "LANXESS", "LASALLE", "LAT", "LATINO", "LATROBE", "LAW", "LAWYER", "LB", "LC", "LDS", "LEASE", "LECLERC", "LEFRAK", "LEGAL", "LEGO", "LEXUS", "LGBT", "LI", "LIDL", "LIFE", "LIFEINSURANCE", "LIFESTYLE", "LIGHTING", "LIKE", "LILLY", "LIMITED", "LIMO", "LINCOLN", "LINDE", "LINK", "LIPSY", "LIVE", "LIVING", "LK", "LLC", "LLP", "LOAN", "LOANS", "LOCKER", "LOCUS", "LOL", "LONDON", "LOTTE", "LOTTO", "LOVE", "LPL", "LPLFINANCIAL", "LR", "LS", "LT", "LTD", "LTDA", "LU", "LUNDBECK", "LUXE", "LUXURY", "LV", "LY", "MA", "MACYS", "MADRID", "MAIF", "MAISON", "MAKEUP", "MAN", "MANAGEMENT", "MANGO", "MAP", "MARKET", "MARKETING", "MARKETS", "MARRIOTT", "MARSHALLS", "MASERATI", "MATTEL", "MBA", "MC", "MCKINSEY", "MD", "ME", "MED", "MEDIA", "MEET", "MELBOURNE", "MEME", "MEMORIAL", "MEN", "MENU", "MERCKMSD", "MG", "MH", "MIAMI", "MICROSOFT", "MIL", "MINI", "MINT", "MIT", "MITSUBISHI", "MK", "ML", "MLB", "MLS", "MM", "MMA", "MN", "MO", "MOBI", "MOBILE", "MODA", "MOE", "MOI", "MOM", "MONASH", "MONEY", "MONSTER", "MORMON", "MORTGAGE", "MOSCOW", "MOTO", "MOTORCYCLES", "MOV", "MOVIE", "MP", "MQ", "MR", "MS", "MSD", "MT", "MTN", "MTR", "MU", "MUSEUM", "MUSIC", "MUTUAL", "MV", "MW", "MX", "MY", "MZ", "NA", "NAB", "NAGOYA", "NAME", "NATURA", "NAVY", "NBA", "NC", "NE", "NEC", "NET", "NETBANK", "NETFLIX", "NETWORK", "NEUSTAR", "NEW", "NEWS", "NEXT", "NEXTDIRECT", "NEXUS", "NF", "NFL", "NG", "NGO", "NHK", "NI", "NICO", "NIKE", "NIKON", "NINJA", "NISSAN", "NISSAY", "NL", "NO", "NOKIA", "NORTHWESTERNMUTUAL", "NORTON", "NOW", "NOWRUZ", "NOWTV", "NP", "NR", "NRA", "NRW", "NTT", "NU", "NYC", "NZ", "OBI", "OBSERVER", "OFFICE", "OKINAWA", "OLAYAN", "OLAYANGROUP", "OLDNAVY", "OLLO", "OM", "OMEGA", "ONE", "ONG", "ONL", "ONLINE", "OOO", "OPEN", "ORACLE", "ORANGE", "ORG", "ORGANIC", "ORIGINS", "OSAKA", "OTSUKA", "OTT", "OVH", "PA", "PAGE", "PANASONIC", "PARIS", "PARS", "PARTNERS", "PARTS", "PARTY", "PASSAGENS", "PAY", "PCCW", "PE", "PET", "PF", "PFIZER", "PG", "PH", "PHARMACY", "PHD", "PHILIPS", "PHONE", "PHOTO", "PHOTOGRAPHY", "PHOTOS", "PHYSIO", "PICS", "PICTET", "PICTURES", "PID", "PIN", "PING", "PINK", "PIONEER", "PIZZA", "PK", "PL", "PLACE", "PLAY", "PLAYSTATION", "PLUMBING", "PLUS", "PM", "PN", "PNC", "POHL", "POKER", "POLITIE", "PORN", "POST", "PR", "PRAMERICA", "PRAXI", "PRESS", "PRIME", "PRO", "PROD", "PRODUCTIONS", "PROF", "PROGRESSIVE", "PROMO", "PROPERTIES", "PROPERTY", "PROTECTION", "PRU", "PRUDENTIAL", "PS", "PT", "PUB", "PW", "PWC", "PY", "QA", "QPON", "QUEBEC", "QUEST", "RACING", "RADIO", "RE", "READ", "REALESTATE", "REALTOR", "REALTY", "RECIPES", "RED", "REDSTONE", "REDUMBRELLA", "REHAB", "REISE", "REISEN", "REIT", "RELIANCE", "REN", "RENT", "RENTALS", "REPAIR", "REPORT", "REPUBLICAN", "REST", "RESTAURANT", "REVIEW", "REVIEWS", "REXROTH", "RICH", "RICHARDLI", "RICOH", "RIL", "RIO", "RIP", "RO", "ROCHER", "ROCKS", "RODEO", "ROGERS", "ROOM", "RS", "RSVP", "RU", "RUGBY", "RUHR", "RUN", "RW", "RWE", "RYUKYU", "SA", "SAARLAND", "SAFE", "SAFETY", "SAKURA", "SALE", "SALON", "SAMSCLUB", "SAMSUNG", "SANDVIK", "SANDVIKCOROMANT", "SANOFI", "SAP", "SARL", "SAS", "SAVE", "SAXO", "SB", "SBI", "SBS", "SC", "SCA", "SCB", "SCHAEFFLER", "SCHMIDT", "SCHOLARSHIPS", "SCHOOL", "SCHULE", "SCHWARZ", "SCIENCE", "SCOT", "SD", "SE", "SEARCH", "SEAT", "SECURE", "SECURITY", "SEEK", "SELECT", "SENER", "SERVICES", "SEVEN", "SEW", "SEX", "SEXY", "SFR", "SG", "SH", "SHANGRILA", "SHARP", "SHAW", "SHELL", "SHIA", "SHIKSHA", "SHOES", "SHOP", "SHOPPING", "SHOUJI", "SHOW", "SHOWTIME", "SI", "SILK", "SINA", "SINGLES", "SITE", "SJ", "SK", "SKI", "SKIN", "SKY", "SKYPE", "SL", "SLING", "SM", "SMART", "SMILE", "SN", "SNCF", "SO", "SOCCER", "SOCIAL", "SOFTBANK", "SOFTWARE", "SOHU", "SOLAR", "SOLUTIONS", "SONG", "SONY", "SOY", "SPA", "SPACE", "SPORT", "SPOT", "SR", "SRL", "SS", "ST", "STADA", "STAPLES", "STAR", "STATEBANK", "STATEFARM", "STC", "STCGROUP", "STOCKHOLM", "STORAGE", "STORE", "STREAM", "STUDIO", "STUDY", "STYLE", "SU", "SUCKS", "SUPPLIES", "SUPPLY", "SUPPORT", "SURF", "SURGERY", "SUZUKI", "SV", "SWATCH", "SWISS", "SX", "SY", "SYDNEY", "SYSTEMS", "SZ", "TAB", "TAIPEI", "TALK", "TAOBAO", "TARGET", "TATAMOTORS", "TATAR", "TATTOO", "TAX", "TAXI", "TC", "TCI", "TD", "TDK", "TEAM", "TECH", "TECHNOLOGY", "TEL", "TEMASEK", "TENNIS", "TEVA", "TF", "TG", "TH", "THD", "THEATER", "THEATRE", "TIAA", "TICKETS", "TIENDA", "TIFFANY", "TIPS", "TIRES", "TIROL", "TJ", "TJMAXX", "TJX", "TK", "TKMAXX", "TL", "TM", "TMALL", "TN", "TO", "TODAY", "TOKYO", "TOOLS", "TOP", "TORAY", "TOSHIBA", "TOTAL", "TOURS", "TOWN", "TOYOTA", "TOYS", "TR", "TRADE", "TRADING", "TRAINING", "TRAVEL", "TRAVELCHANNEL", "TRAVELERS", "TRAVELERSINSURANCE", "TRUST", "TRV", "TT", "TUBE", "TUI", "TUNES", "TUSHU", "TV", "TVS", "TW", "TZ", "UA", "UBANK", "UBS", "UG", "UK", "UNICOM", "UNIVERSITY", "UNO", "UOL", "UPS", "US", "UY", "UZ", "VA", "VACATIONS", "VANA", "VANGUARD", "VC", "VE", "VEGAS", "VENTURES", "VERISIGN", "VERSICHERUNG", "VET", "VG", "VI", "VIAJES", "VIDEO", "VIG", "VIKING", "VILLAS", "VIN", "VIP", "VIRGIN", "VISA", "VISION", "VIVA", "VIVO", "VLAANDEREN", "VN", "VODKA", "VOLKSWAGEN", "VOLVO", "VOTE", "VOTING", "VOTO", "VOYAGE", "VU", "VUELOS", "WALES", "WALMART", "WALTER", "WANG", "WANGGOU", "WATCH", "WATCHES", "WEATHER", "WEATHERCHANNEL", "WEBCAM", "WEBER", "WEBSITE", "WED", "WEDDING", "WEIBO", "WEIR", "WF", "WHOSWHO", "WIEN", "WIKI", "WILLIAMHILL", "WIN", "WINDOWS", "WINE", "WINNERS", "WME", "WOLTERSKLUWER", "WOODSIDE", "WORK", "WORKS", "WORLD", "WOW", "WS", "WTC", "WTF", "XBOX", "XEROX", "XFINITY", "XIHUAN", "XIN", "XN--11B4C3D", "XN--1CK2E1B", "XN--1QQW23A", "XN--2SCRJ9C", "XN--30RR7Y", "XN--3BST00M", "XN--3DS443G", "XN--3E0B707E", "XN--3HCRJ9C", "XN--3PXU8K", "XN--42C2D9A", "XN--45BR5CYL", "XN--45BRJ9C", "XN--45Q11C", "XN--4DBRK0CE", "XN--4GBRIM", "XN--54B7FTA0CC", "XN--55QW42G", "XN--55QX5D", "XN--5SU34J936BGSG", "XN--5TZM5G", "XN--6FRZ82G", "XN--6QQ986B3XL", "XN--80ADXHKS", "XN--80AO21A", "XN--80AQECDR1A", "XN--80ASEHDB", "XN--80ASWG", "XN--8Y0A063A", "XN--90A3AC", "XN--90AE", "XN--90AIS", "XN--9DBQ2A", "XN--9ET52U", "XN--9KRT00A", "XN--B4W605FERD", "XN--BCK1B9A5DRE4C", "XN--C1AVG", "XN--C2BR7G", "XN--CCK2B3B", "XN--CCKWCXETD", "XN--CG4BKI", "XN--CLCHC0EA0B2G2A9GCD", "XN--CZR694B", "XN--CZRS0T", "XN--CZRU2D", "XN--D1ACJ3B", "XN--D1ALF", "XN--E1A4C", "XN--ECKVDTC9D", "XN--EFVY88H", "XN--FCT429K", "XN--FHBEI", "XN--FIQ228C5HS", "XN--FIQ64B", "XN--FIQS8S", "XN--FIQZ9S", "XN--FJQ720A", "XN--FLW351E", "XN--FPCRJ9C3D", "XN--FZC2C9E2C", "XN--FZYS8D69UVGM", "XN--G2XX48C", "XN--GCKR3F0F", "XN--GECRJ9C", "XN--GK3AT1E", "XN--H2BREG3EVE", "XN--H2BRJ9C", "XN--H2BRJ9C8C", "XN--HXT814E", "XN--I1B6B1A6A2E", "XN--IMR513N", "XN--IO0A7I", "XN--J1AEF", "XN--J1AMH", "XN--J6W193G", "XN--JLQ480N2RG", "XN--JVR189M", "XN--KCRX77D1X4A", "XN--KPRW13D", "XN--KPRY57D", "XN--KPUT3I", "XN--L1ACC", "XN--LGBBAT1AD8J", "XN--MGB9AWBF", "XN--MGBA3A3EJT", "XN--MGBA3A4F16A", "XN--MGBA7C0BBN0A", "XN--MGBAAKC7DVF", "XN--MGBAAM7A8H", "XN--MGBAB2BD", "XN--MGBAH1A3HJKRD", "XN--MGBAI9AZGQP6J", "XN--MGBAYH7GPA", "XN--MGBBH1A", "XN--MGBBH1A71E", "XN--MGBC0A9AZCG", "XN--MGBCA7DZDO", "XN--MGBCPQ6GPA1A", "XN--MGBERP4A5D4AR", "XN--MGBGU82A", "XN--MGBI4ECEXP", "XN--MGBPL2FH", "XN--MGBT3DHD", "XN--MGBTX2B", "XN--MGBX4CD0AB", "XN--MIX891F", "XN--MK1BU44C", "XN--MXTQ1M", "XN--NGBC5AZD", "XN--NGBE9E0A", "XN--NGBRX", "XN--NODE", "XN--NQV7F", "XN--NQV7FS00EMA", "XN--NYQY26A", "XN--O3CW4H", "XN--OGBPF8FL", "XN--OTU796D", "XN--P1ACF", "XN--P1AI", "XN--PGBS0DH", "XN--PSSY2U", "XN--Q7CE6A", "XN--Q9JYB4C", "XN--QCKA1PMC", "XN--QXA6A", "XN--QXAM", "XN--RHQV96G", "XN--ROVU88B", "XN--RVC1E0AM3E", "XN--S9BRJ9C", "XN--SES554G", "XN--T60B56A", "XN--TCKWE", "XN--TIQ49XQYJ", "XN--UNUP4Y", "XN--VERMGENSBERATER-CTB", "XN--VERMGENSBERATUNG-PWB", "XN--VHQUV", "XN--VUQ861B", "XN--W4R85EL8FHU5DNRA", "XN--W4RS40L", "XN--WGBH1C", "XN--WGBL6A", "XN--XHQ521B", "XN--XKC2AL3HYE2A", "XN--XKC2DL3A5EE0H", "XN--Y9A3AQ", "XN--YFRO4I67O", "XN--YGBI2AMMX", "XN--ZFR164B", "XXX", "XYZ", "YACHTS", "YAHOO", "YAMAXUN", "YANDEX", "YE", "YODOBASHI", "YOGA", "YOKOHAMA", "YOU", "YOUTUBE", "YT", "YUN", "ZA", "ZAPPOS", "ZARA", "ZERO", "ZIP", "ZM", "ZONE", "ZUERICH", "ZW"];
			var G = (0, N.memo)(function(e) {
				let {
					index: A,
					message: t,
					showSystemMessage: n = !0,
					showActions: o = !0,
					model: C,
					onUserProfileClick: G,
					userProfilePicURL: d,
					onDeleteMessage: D,
					botAvatar: U,
					generalInstructions: X
				} = e, [m, p] = (0, N.useState)(!1), P = t.content.trim(), h = P;
				if ("assistant" === t.role) try {
					let e = JSON.parse(h);
					("object" == typeof e || Array.isArray(e)) && (h = "```json\n".concat(h, "\n```"))
				} catch (e) {}
				return "system" !== t.role || n ? (0, E.jsx)(s, {
					children: (0, E.jsxs)("div", {
						className: function() {
							for (var e = arguments.length, A = Array(e), t = 0; t < e; t++) A[t] = arguments[t];
							return A.filter(Boolean).join(" ")
						}("pl-14 relative response-block scroll-mt-32 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-900 pb-2 pt-2 pr-2 group min-h-[52px]"),
						children: [(0, E.jsx)("div", {
							className: "absolute top-2 left-2",
							children: "user" === t.role ? (0, E.jsx)("button", {
								onClick: G,
								className: "w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-all group active:bg-gray-200 overflow-hidden",
								children: d ? (0, E.jsx)("img", {
									className: "w-9 h-9 user-avatar object-contain",
									src: d,
									alt: "User profile"
								}) : (0, E.jsxs)(E.Fragment, {
									children: [(0, E.jsx)(I.Xws, {
										className: "w-5 h-5 inline-block group-hover:hidden"
									}), (0, E.jsx)(I.H3h, {
										className: "w-5 h-5 hidden group-hover:inline-block"
									})]
								})
							}) : "system" === t.role ? (0, E.jsx)("div", {
								className: "w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500",
								children: (0, E.jsx)(O.QAE, {
									className: "w-5 h-5"
								})
							}) : (0, E.jsx)("img", {
								src: U || "/favicon-192x192.png",
								className: "w-9 h-9 rounded-md flex-none"
							})
						}), "system" !== t.role && o && (0, E.jsx)(S, {
							text: P,
							showRawButton: "assistant" === t.role,
							showRaw: m,
							toggleRaw: () => {
								p(!m)
							},
							onDelete: () => D(A)
						}), (0, E.jsx)("div", {
							className: "w-full",
							children: "user" === t.role ? (0, E.jsx)(R, {
								generalInstructions: X,
								content: h
							}) : "system" === t.role ? (0, E.jsxs)("div", {
								children: [(0, E.jsxs)("div", {
									className: "text-gray-500 text-xs mb-1 whitespace-pre-line",
									children: ["Model: ", C || "default", (0, E.jsx)("br", {}), "System Instruction:", " ", h || (0, E.jsx)("i", {
										children: "(No instruction provided)"
									})]
								}), t.model ? (0, E.jsxs)("div", {
									className: "text-gray-500 text-xs mb-1",
									children: ["Model: ", t.model]
								}) : null]
							}) : m ? (0, E.jsxs)("div", {
								children: [(0, E.jsx)("div", {
									className: "text-gray-500 text-xs mb-1",
									children: "Raw response:"
								}), (0, E.jsx)(i, {
									rawContent: P
								})]
							}) : (0, E.jsx)("div", {
								className: "prose prose-sm max-w-full dark:prose-invert",
								children: (0, E.jsx)(B.D, {
									children: h,
									remarkPlugins: [c.Z, a.Z],
									components: {
										table(e) {
											let {
												node: A,
												inline: t,
												className: N,
												children: r,
												...n
											} = e;
											return (0, E.jsx)("div", {
												className: "overflow-auto",
												children: (0, E.jsx)("table", {
													className: N,
													...n,
													children: r
												})
											})
										},
										li(e) {
											let {
												node: A,
												inline: t,
												className: N,
												children: r,
												...n
											} = e, I = r && r[0], S = [];
											if (I && "string" == typeof I) {
												if (I.trim().toLowerCase().match(/^[a-z0-9]+([\-_\.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/)) {
													let e = I.trim().toUpperCase().split(".").slice(-1)[0];
													M.includes(e) && S.push((0, E.jsx)(T, {
														domain: I
													}, "check-domain"))
												}
												if (I.trim().match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)) {
													let e = I.trim().match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)[0];
													S.push((0, E.jsx)("div", {
														className: "m-0 ml-1 w-4 h-4 rounded-md inline-block border border-gray-200 align-middle",
														style: {
															backgroundColor: e
														}
													}, "color"))
												}
											}
											return (0, E.jsxs)("li", {
												className: (N || "") + (S.length ? " group" : ""),
												...n,
												children: [r, S]
											})
										},
										a(e) {
											let {
												node: A,
												inline: t,
												className: N,
												children: r,
												...n
											} = e;
											return (0, E.jsx)("a", {
												className: N,
												...n,
												target: "_blank",
												rel: "noopener noreferrer",
												children: r
											})
										},
										code(e) {
											let {
												node: A,
												inline: t,
												className: N,
												children: r,
												...n
											} = e, I = /language-(\w+)/.exec(N || ""), S = I ? I[1].toLowerCase() : "";
											return t ? (0, E.jsx)("code", {
												className: "text-sm inline border border-gray-200 rounded bg-gray-100 dark:bg-zinc-900 px-1",
												children: r
											}) : (0, E.jsx)(l, {
												code: r[0],
												language: S,
												children: (0, E.jsx)(L.Z, {
													children: String(r).replace(/\n$/, ""),
													customStyle: {
														lineHeight: "1.25em",
														fontSize: "0.875em"
													},
													codeTagProps: {
														style: {
															lineHeight: "inherit",
															fontSize: "inherit"
														}
													},
													language: S,
													...n
												})
											})
										}
									}
								})
							})
						}), "length" === t.finish ? (0, E.jsx)(r.Z, {}) : null]
					})
				}) : null
			})
		},
		51448: function(e, A, t) {
			t.d(A, {
				Z: function() {
					return n
				}
			});
			var E = t(85893);
			t(67294);
			var N = t(9008),
				r = t.n(N);

			function n(e) {
				let {
					title: A,
					showNotification: t = !1,
					description: N = "Use ChatGPT with enhanced features like chat hitsory search, folders, integrations, prompt library, etc."
				} = e;
				return (0, E.jsxs)(r(), {
					children: [(0, E.jsx)("title", {
						children: (t ? "(*) " : "") + (A || "TypingMind — A better UI for ChatGPT")
					}), (0, E.jsx)("meta", {
						name: "title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, E.jsx)("meta", {
						name: "description",
						content: N
					}), (0, E.jsx)("meta", {
						property: "og:type",
						content: "website"
					}), (0, E.jsx)("meta", {
						property: "og:url",
						content: "https://www.typingmind.com/"
					}), (0, E.jsx)("meta", {
						property: "og:title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, E.jsx)("meta", {
						property: "og:description",
						content: N
					}), (0, E.jsx)("meta", {
						property: "og:image",
						content: "https://www.typingmind.com/poster.png"
					}), (0, E.jsx)("meta", {
						property: "twitter:card",
						content: "summary_large_image"
					}), (0, E.jsx)("meta", {
						property: "twitter:url",
						content: "https://www.typingmind.com/"
					}), (0, E.jsx)("meta", {
						property: "twitter:title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, E.jsx)("meta", {
						property: "twitter:description",
						content: N
					}), (0, E.jsx)("meta", {
						property: "twitter:image",
						content: "https://www.typingmind.com/poster.png"
					}), (0, E.jsx)("meta", {
						name: "viewport",
						content: "initial-scale=1, viewport-fit=cover"
					}), (0, E.jsx)("link", {
						rel: "apple-touch-icon",
						sizes: "152x152",
						href: "/apple-icon-152x152.png"
					}), (0, E.jsx)("link", {
						rel: "apple-touch-icon",
						sizes: "180x180",
						href: "/apple-icon-180x180.png"
					}), (0, E.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "192x192",
						href: "/android-icon-192x192.png"
					}), (0, E.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "32x32",
						href: "/favicon-32x32.png"
					}), (0, E.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "96x96",
						href: "/favicon-96x96.png"
					}), (0, E.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "16x16",
						href: "/favicon-16x16.png"
					}), (0, E.jsx)("link", {
						rel: "manifest",
						href: "/manifest.json"
					}), (0, E.jsx)("meta", {
						name: "msapplication-TileColor",
						content: "#ffffff"
					}), (0, E.jsx)("meta", {
						name: "msapplication-TileImage",
						content: "/ms-icon-144x144.png"
					}), (0, E.jsx)("meta", {
						name: "theme-color",
						content: "#ffffff"
					})]
				})
			}
		}
	}
]);