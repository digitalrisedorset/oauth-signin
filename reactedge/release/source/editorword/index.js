import { a as e, i as t, n, o as r, r as i, t as a } from "./rolldown-runtime-CEFd7nDs.js";
import { createContext as o, useCallback as s, useContext as c, useEffect as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { createRoot as p } from "react-dom/client";
//#region ../../node_modules/zod/v4/core/util.js
function m(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function h(e, t = "|") {
	return e.map((e) => B(e)).join(t);
}
function g(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
var _ = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		let e = this._getter;
		return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
	}
};
function v(e) {
	return new _(e);
}
function y(e) {
	return e == null;
}
function b(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function x(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function S(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function C(e) {
	return S(e._zod.def) ?? e._zod.def.shape;
}
function w(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return x(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function T(e, t, n) {
	t in e ? x(e, t, n) : e[t] = n;
}
function E(e, t, n, r) {
	let i = C(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? w(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : T(e, a, r ? r(n.value, a) : n.value));
	}
}
function D(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? w(e, n, () => t[n]) : T(e, n, r.value));
	}
}
function O(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function k(e) {
	return JSON.stringify(e);
}
function A(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var j = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function M(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var N = /* @__PURE__*/ v(() => {
	if (Le.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function P(e) {
	if (M(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return M(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function F(e) {
	return P(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var I = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function L(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function R(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function z(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function B(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function ee(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var te = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, V = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function ne(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return E(i, e, re(e, t)), R(e, O(n, {
		shape: i,
		checks: []
	}));
}
function re(e, t) {
	let n = C(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function H(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(re(e, t)), a = {};
	return E(a, e, Reflect.ownKeys(C(e)).filter((e) => !i.has(e))), R(e, O(n, {
		shape: a,
		checks: []
	}));
}
function U(e, t) {
	if (!P(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = C(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return R(e, O(e._zod.def, { shape: ie(e, t) }));
}
function ie(e, t) {
	let n = {};
	return E(n, e, Reflect.ownKeys(C(e))), D(n, t), n;
}
function ae(e, t) {
	if (!P(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return R(e, O(e._zod.def, { shape: ie(e, t) }));
}
function oe(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return E(n, e, Reflect.ownKeys(C(e))), E(n, t, Reflect.ownKeys(C(t))), R(e, O(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function se(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(re(t, n)) : void 0, o = {};
	return E(o, t, Reflect.ownKeys(C(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), R(t, O(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function ce(e, t, n) {
	let r = n ? new Set(re(t, n)) : void 0, i = {};
	return E(i, t, Reflect.ownKeys(C(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), R(t, O(t._zod.def, { shape: i }));
}
function le(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function ue(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function de(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function fe(e) {
	return typeof e == "string" ? e : e?.message;
}
function pe(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function W(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : fe(e.inst?._zod.def?.error?.(e)) ?? fe(a?.(e)) ?? fe(t?.error?.(e)) ?? fe(n.customError?.(e)) ?? fe(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
var me = /[\uD800-\uDBFF]/;
function he(e) {
	let t = e.length;
	if (!me.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function ge(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function _e(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function ve(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function ye(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Ce(e, n, r.value);
	}
}
function be(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function xe(e, t, n) {
	return be(e, t, n, !1);
}
function Se(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return be(this, n, r(this));
			},
			set(e) {
				be(this, n, e);
			}
		});
	}
	return t;
}
function Ce(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : be(this, t, n.bind(this));
		},
		set(e) {
			be(this, t, e);
		}
	});
}
function we(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var Te, Ee = !1, De = {
	configurable: !0,
	get() {
		Ee = !0;
	}
};
function G(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Te !== e._zod) {
		Te = void 0;
		return;
	}
	Te = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, De);
			let e = Ee;
			Ee = !1;
			try {
				let r = n(this);
				return Ee ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), Ee ||= e, r;
			} catch (n) {
				throw delete this[t], Ee ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function Oe(e, t, n, r) {
	let i = we(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
var ke = "~constantCatch";
function Ae(e) {
	let t = () => e;
	return t[ke] = !0, t;
}
//#endregion
//#region ../../node_modules/zod/v4/core/core.js
var je, Me = {
	value: void 0,
	enumerable: !1
}, Ne = "captureStackTrace" in Error ? Error : null;
function Pe(e) {
	let t = Ne;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Ne = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function K(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Me.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Me);
			} finally {
				Me.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), ye(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? Pe(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var Fe = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Ie = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(je = globalThis).__zod_globalConfig ?? (je.__zod_globalConfig = {});
var Le = globalThis.__zod_globalConfig;
function Re(e) {
	return e && Object.assign(Le, e), Le;
}
//#endregion
//#region ../../node_modules/zod/v4/core/errors.js
function ze() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, g, 2), e.message;
}
function Be(e) {
	this._zod.message = e;
}
var Ve = {
	get: ze,
	set: Be,
	enumerable: !0,
	configurable: !0
}, He = {
	value: void 0,
	enumerable: !1
}, Ue = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), We = (e, t) => {
	e.name = "$ZodError", He.value = t, Object.defineProperty(e, "issues", He), He.value = void 0, Object.defineProperty(e, "message", Ve);
	let n = Object.getPrototypeOf(e);
	Ue.has(n) || (Ue.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
}, Ge = K("$ZodError", We);
K("$ZodError", We, void 0, { Parent: Error });
function Ke(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function qe(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Ke(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Je(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/parse.js
function Ye(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var Xe = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new Fe();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => W(e, o, Re())));
			throw j(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Ze = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => W(e, o, Re())));
			throw j(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Qe = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new Fe();
	return a.issues.length ? $e(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
};
function $e(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => W(e, n, Re()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
var et = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? $e(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
}, tt = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), nt = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), rt = ((e, t, n) => {
	let r = e._zod.bag.validator;
	if (r !== void 0) {
		if (r(t) !== tt) return !0;
		if (r.definite === !0 && n === void 0) return !1;
	}
	return it(e, t, n);
});
function it(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[nt] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new Fe();
	return a.issues.length === 0;
}
var at = async (e, t, n) => {
	let r = n ? {
		...n,
		async: !0,
		abortEarly: !0
	} : {
		async: !0,
		abortEarly: !0
	}, i = e._zod.run({
		value: t,
		issues: []
	}, r);
	return i instanceof Promise && (i = await i), i.issues.length === 0;
}, ot = (e) => {
	let t = Xe(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, Ye(n, a));
	};
	return n;
}, st = (e) => {
	let t = Xe(e), n = (e, r, i, a) => t(e, r, i, Ye(n, a));
	return n;
}, ct = (e) => {
	let t = Ze(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, Ye(n, a));
	};
	return n;
}, lt = (e) => {
	let t = Ze(e), n = async (e, r, i, a) => await t(e, r, i, Ye(n, a));
	return n;
}, ut = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Qe(e)(t, n, i);
}, dt = (e) => (t, n, r) => Qe(e)(t, n, r), ft = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return et(e)(t, n, i);
}, pt = (e) => async (t, n, r) => et(e)(t, n, r), mt = /^[cC][0-9a-z]{6,}$/, ht = /^[0-9a-z]+$/, gt = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, _t = /^[0-9a-vA-V]{20}$/, vt = /^[A-Za-z0-9]{27}$/, yt = /^[a-zA-Z0-9_-]{21}$/;
function bt(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var xt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, St = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ct = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, wt = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Tt = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Et() {
	return new RegExp(Tt, "u");
}
var Dt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ot = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, kt = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, At = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, jt = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Mt = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Nt = /^https?$/, Pt = /^\+[1-9]\d{6,14}$/, Ft = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function It(e) {
	return RegExp(`^${e}$`);
}
var Lt = /*@__PURE__*/ It(Ft);
function Rt(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function zt(e) {
	return RegExp(`^${Rt(e)}$`);
}
function Bt(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Rt({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Rt({ precision: e.precision })}` : n;
	return RegExp(`^${Ft}T(?:${r})$`);
}
var Vt = /^[\s\S]{0,}$/, Ht = /^[^A-Z]*$/, Ut = /^[^a-z]*$/, Wt = /*@__PURE__*/ K("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Gt = (e) => {
	let t = e.value;
	return !y(t) && t.length !== void 0;
}, Kt = /*@__PURE__*/ K("$ZodCheckMaxLength", (e, t) => {
	var n;
	Wt.init(e, t), (n = e._zod.def).when ?? (n.when = Gt), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? he(r) : i) <= t.maximum) return;
		let a = ge(r);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), qt = /*@__PURE__*/ K("$ZodCheckMinLength", (e, t) => {
	var n;
	Wt.init(e, t), (n = e._zod.def).when ?? (n.when = Gt), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? he(r) : i) >= t.minimum) return;
		let a = ge(r);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Jt = /*@__PURE__*/ K("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Wt.init(e, t), (n = e._zod.def).when ?? (n.when = Gt), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? he(r) : i;
		if (a === t.length) return;
		let o = ge(r), s = a > t.length;
		n.issues.push({
			origin: o,
			...s ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Yt = /*@__PURE__*/ K("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	Wt.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), Xt = /*@__PURE__*/ K("$ZodCheckRegex", (e, t) => {
	Yt.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), Zt = /*@__PURE__*/ K("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= Ht, Yt.init(e, t);
}), Qt = /*@__PURE__*/ K("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= Ut, Yt.init(e, t);
}), $t = /*@__PURE__*/ K("$ZodCheckIncludes", (e, t) => {
	Wt.init(e, t);
	let n = L(t.includes);
	t.pattern = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), en = /*@__PURE__*/ K("$ZodCheckStartsWith", (e, t) => {
	Wt.init(e, t);
	let n = RegExp(`^${L(t.prefix)}.*`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), tn = /*@__PURE__*/ K("$ZodCheckEndsWith", (e, t) => {
	Wt.init(e, t);
	let n = RegExp(`.*${L(t.suffix)}$`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), nn = /*@__PURE__*/ K("$ZodCheckOverwrite", (e, t) => {
	Wt.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), rn = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1;
		try {
			e(this);
		} finally {
			--this.indent;
		}
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
}, an = {
	major: 4,
	minor: 6,
	patch: 5
}, on = /*@__PURE__*/ K("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = an;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = le(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (ue(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new Fe();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (pe(t.issues, n, e), i ||= le(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					pe(t.issues, n, e), i ||= le(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (le(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Fe();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (r, a) => {
			if (a.skipChecks) return e._zod.parse(r, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: r.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
			}
			let o = e._zod.parse(r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Fe();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return xe(this, "~standard", ln(this));
	},
	set "~standard"(e) {
		be(this, "~standard", e);
	}
}), sn = (e, t) => e.issues.length ? { issues: e.issues.map((e) => W(e, t, Re())) } : { value: e.value };
async function cn(e, t) {
	let n = { async: !0 };
	return sn(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function ln(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return sn(r, n);
			} catch {}
			return cn(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
var un = /*@__PURE__*/ K("$ZodString", (e, t) => {
	on.init(e, t), e._zod.pattern = t.pattern ?? Vt, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), q = /*@__PURE__*/ K("$ZodStringFormat", (e, t) => {
	Yt.init(e, t), un.init(e, t);
}), dn = /*@__PURE__*/ K("$ZodGUID", (e, t) => {
	t.pattern ??= St, q.init(e, t);
}), fn = /*@__PURE__*/ K("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= Ct(e);
	} else t.pattern ??= Ct();
	q.init(e, t);
}), pn = /*@__PURE__*/ K("$ZodEmail", (e, t) => {
	t.pattern ??= wt, q.init(e, t);
});
function mn(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function hn(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? mn(e) || 2 : gn(e, t);
}
function gn(e, t) {
	if (!t.normalize && t.protocol?.source === Nt.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		if (typeof URL < "u") {
			let t = URL;
			if (typeof t.parse == "function") return t.parse(e) ?? 2;
		}
		return new URL(e);
	} catch {
		return 2;
	}
}
var _n = /[\t\n\r]/g;
function vn(e) {
	return e.replace(_n, "");
}
function yn(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function bn(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var xn = /*@__PURE__*/ K("$ZodURL", (e, t) => {
	q.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = hn(r, t);
			if (i === 1) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === 2) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === !0) {
				n.value = vn(r);
				return;
			}
			t.hostname && !yn(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !bn(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : vn(r);
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Sn = /*@__PURE__*/ K("$ZodEmoji", (e, t) => {
	t.pattern ??= Et(), q.init(e, t);
}), Cn = /*@__PURE__*/ K("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? yt : bt(t.length), q.init(e, t);
}), wn = /*@__PURE__*/ K("$ZodCUID", (e, t) => {
	t.pattern ??= mt, q.init(e, t);
}), Tn = /*@__PURE__*/ K("$ZodCUID2", (e, t) => {
	t.pattern ??= ht, q.init(e, t);
}), En = /*@__PURE__*/ K("$ZodULID", (e, t) => {
	t.pattern ??= gt, q.init(e, t);
}), Dn = /*@__PURE__*/ K("$ZodXID", (e, t) => {
	t.pattern ??= _t, q.init(e, t);
}), On = /*@__PURE__*/ K("$ZodKSUID", (e, t) => {
	t.pattern ??= vt, q.init(e, t);
}), kn = /*@__PURE__*/ K("$ZodISODateTime", (e, t) => {
	t.pattern ??= Bt(t), q.init(e, t);
}), An = /*@__PURE__*/ K("$ZodISODate", (e, t) => {
	t.pattern ??= Lt, q.init(e, t);
}), jn = /*@__PURE__*/ K("$ZodISOTime", (e, t) => {
	t.pattern ??= zt(t), q.init(e, t);
}), Mn = /*@__PURE__*/ K("$ZodISODuration", (e, t) => {
	t.pattern ??= xt, q.init(e, t);
}), Nn = /*@__PURE__*/ K("$ZodIPv4", (e, t) => {
	t.pattern ??= Dt, q.init(e, t);
}), Pn = /^[0-9a-fA-F:.]+$/;
function Fn(e) {
	return Pn.test(e) ? mn(`http://[${e}]`) : !1;
}
var In = /*@__PURE__*/ K("$ZodIPv6", (e, t) => {
	t.pattern ??= Ot, q.init(e, t), e._zod.check = (n) => {
		Fn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Ln = /*@__PURE__*/ K("$ZodCIDRv4", (e, t) => {
	t.pattern ??= kt, q.init(e, t);
});
function Rn(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Fn(n);
}
var zn = /*@__PURE__*/ K("$ZodCIDRv6", (e, t) => {
	t.pattern ??= At, q.init(e, t), e._zod.check = (n) => {
		Rn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Bn(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Vn = /^[0-9a-zA-Z+/]*={0,2}$/, Hn = /*@__PURE__*/ K("$ZodBase64", (e, t) => {
	t.pattern ??= Vn, q.init(e, t), e._zod.check = (n) => {
		Bn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Un = /^[A-Za-z0-9_-]*$/;
function Wn(e) {
	if (!Un.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Bn(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Gn = /*@__PURE__*/ K("$ZodBase64URL", (e, t) => {
	t.pattern ??= Un, q.init(e, t), e._zod.check = (n) => {
		Wn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Kn = /*@__PURE__*/ K("$ZodE164", (e, t) => {
	t.pattern ??= Pt, q.init(e, t);
});
function qn(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var Jn = /*@__PURE__*/ K("$ZodJWT", (e, t) => {
	q.init(e, t), e._zod.check = (n) => {
		qn(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Yn = /*@__PURE__*/ K("$ZodUnknown", (e, t) => {
	on.init(e, t), e._zod.parse = (e) => e;
}), Xn = /*@__PURE__*/ K("$ZodNever", (e, t) => {
	on.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Zn(e, t, n) {
	e.issues.length && t.issues.push(...de(n, e.issues)), t.value[n] = e.value;
}
var Qn = /*@__PURE__*/ K("$ZodArray", (e, t) => {
	on.init(e, t);
	let n = Le.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
		let o = [], s = i?.abortEarly;
		for (let e = 0; e < a.length; e++) {
			let n = a[e], c = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (c instanceof Promise) o.push(c.then((t) => Zn(t, r, e)));
			else if (Zn(c, r, e), s && c.issues.length !== 0 && le(c)) break;
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
});
function $n(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...de(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? (o || i === "defaulted" && !s) && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
var er = [];
function tr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : er, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = ee(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function nr(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (le(n, p)) break;
			p = n.issues.length;
		}
		if (c.has(i)) continue;
		if (i === "__proto__") {
			u === "never" && s.push(i);
			continue;
		}
		if (u === "never") {
			s.push(i);
			continue;
		}
		let a = l.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => $n(e, n, i, t, d, f))) : $n(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var rr = /*@__PURE__*/ K("$ZodObject", (e, t) => {
	on.init(e, t);
	let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
	if (r) {
		let e = () => {
			let n = { ...r };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = r, Object.defineProperty(t, "shape", { get: e });
	}
	let i = v(() => tr(t));
	G(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || x(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let a = M, o = t.catchall, s, c = Le.memoizer;
	c?.attach(e), e._zod.parse = (t, n) => {
		s ??= i.value;
		let r = t.value;
		if (!a(r)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
		t.value = c ? c.alloc(e, t, {}, n) : {};
		let l = [], u = s.shape, d = n?.abortEarly, f = t.issues.length;
		for (let e of s.allKeys) {
			if (d && t.issues.length !== f) {
				if (le(t, f)) break;
				f = t.issues.length;
			}
			if (e === "__proto__") continue;
			let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
				value: r[e],
				issues: []
			}, n);
			s instanceof Promise ? l.push(s.then((n) => $n(n, t, e, r, a, o))) : $n(s, t, e, r, a, o);
		}
		return o ? nr(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), ir = /*@__PURE__*/ K("$ZodObjectJIT", (e, t) => {
	rr.init(e, t);
	let n = e._zod.parse, r = v(() => tr(t)), i = Le.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new rn(["payload", "ctx"], {
			shape: t,
			inst: e,
			memo: i,
			syms: a
		}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
		o.write("const input = payload.value;");
		let l = Object.create(null), u = 0;
		for (let e of n.allKeys) l[e] = `key_${u++}`;
		o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let e of n.allKeys) {
			if (e === "__proto__") continue;
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : k(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
			if (o.write(`const ${n} = ${s(r)};`), f && p) {
				let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
				o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
			} else f ? (o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
      `), d === "defaulted" ? o.write(`newResult[${r}] = ${n}.value;`) : o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
		}
		return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
	}, o, s = M, c = !Le.jitless, l = c && N.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? nr([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function ar(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !le(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => W(e, r, Re())))
	}), t);
}
var or = /*@__PURE__*/ K("$ZodUnion", (e, t) => {
	on.init(e, t), G(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), G(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), G(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), G(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => b(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => ar(t, r, e, i)) : ar(o, r, e, i);
	};
}), sr = /*@__PURE__*/ K("$ZodIntersection", (e, t) => {
	on.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => lr(e, t, n)) : lr(e, i, a);
	};
});
function cr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (P(e) && P(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = cr(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = cr(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function lr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = cr(t.value, n.value);
	if (!c.valid) {
		if (le(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var ur = /*@__PURE__*/ K("$ZodEnum", (e, t) => {
	on.init(e, t);
	let n = m(t.entries), r = new Set(n);
	e._zod.values = r, G(e, "pattern", (e) => {
		let t = m(e.def.entries).filter((e) => I.has(typeof e));
		return RegExp(t.length ? `^(${t.map((e) => L(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), dr = /*@__PURE__*/ K("$ZodTransform", (e, t) => {
	on.init(e, t), e._zod.optin = "optional", Le.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Ie(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new Fe();
		return n.value = i, n;
	};
});
function fr(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var pr = /*@__PURE__*/ K("$ZodOptional", (e, t) => {
	on.init(e, t), G(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", G(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), G(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${b(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => fr(e, t)) : fr(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), mr = /*@__PURE__*/ K("$ZodExactOptional", (e, t) => {
	pr.init(e, t), G(e, "values", (e) => e.def.innerType._zod.values), G(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), hr = /*@__PURE__*/ K("$ZodNullable", (e, t) => {
	on.init(e, t), G(e, "optin", (e) => e.def.innerType._zod.optin), G(e, "optout", (e) => e.def.innerType._zod.optout), G(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${b(t.source)}|null)$`) : void 0;
	}), G(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), gr = /*@__PURE__*/ K("$ZodDefault", (e, t) => {
	on.init(e, t), e._zod.optin = "defaulted", G(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => _r(e, t)) : _r(r, t);
	};
});
function _r(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var vr = /*@__PURE__*/ K("$ZodPrefault", (e, t) => {
	on.init(e, t), e._zod.optin = "defaulted", G(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), yr = /*@__PURE__*/ K("$ZodNonOptional", (e, t) => {
	on.init(e, t), G(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => br(t, e)) : br(i, e);
	};
});
function br(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function xr(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => W(e, r, Re())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var Sr = /*@__PURE__*/ K("$ZodCatch", (e, t) => {
	on.init(e, t), G(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), G(e, "optout", (e) => e.def.innerType._zod.optout), G(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => xr(e, r, t, n)) : xr(e, r, t, n);
	};
}), Cr = /*@__PURE__*/ K("$ZodPipe", (e, t) => {
	on.init(e, t), G(e, "values", (e) => e.def.in._zod.values), G(e, "optin", (e) => e.def.in._zod.optin), G(e, "optout", (e) => e.def.out._zod.optout), G(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => wr(e, t.in, n)) : wr(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => wr(e, t.out, n)) : wr(r, t.out, n);
	};
});
function wr(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Tr = /*@__PURE__*/ K("$ZodReadonly", (e, t) => {
	on.init(e, t), G(e, "propValues", (e) => e.def.innerType._zod.propValues), G(e, "values", (e) => e.def.innerType._zod.values), G(e, "optin", (e) => e.def.innerType?._zod?.optin), G(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Er) : Er(r);
	};
});
function Er(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var Dr = /*@__PURE__*/ K("$ZodCustom", (e, t) => {
	Wt.init(e, t), on.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Or(t, n, r, e));
		Or(i, n, r, e);
	};
});
function Or(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(ve(e));
	}
}
//#endregion
//#region ../../node_modules/zod/v4/core/memoizer.js
var kr = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, Ar = "~memo", jr = [];
function Mr(e) {
	return typeof e == "object" && !!e;
}
function Nr(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var Pr = /*@__PURE__*/ new WeakMap(), Fr = 0, Ir = 1, Lr = 2;
function Rr(e, t, n) {
	let r = Pr.get(e);
	if (r !== void 0) return r ? Lr : Fr;
	if (t.has(e)) return Lr;
	t.add(e);
	let i = Fr, a = (e) => {
		if (i !== Lr && e?._zod) {
			let r = Rr(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = Fr;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? Ir : o.value?._zod ? Rr(o.value, t, n) : Fr;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = S(c);
			s(e ? o(e, !0) : Ir), a(c.catchall);
			break;
		}
		case "array":
			a(c.element);
			break;
		case "tuple":
			for (let e of c.items) a(e);
			a(c.rest);
			break;
		case "record":
		case "map":
			a(c.keyType), a(c.valueType);
			break;
		case "set":
			a(c.valueType);
			break;
		case "union":
			for (let e of c.options) a(e);
			break;
		case "intersection":
			a(c.left), a(c.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			a(c.innerType);
			break;
		case "pipe":
			a(c.in), a(c.out);
			break;
		case "function":
			a(c.input), a(c.output);
			break;
		case "lazy": {
			let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
			s(r ? Rr(r, t, !1) : Ir);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in c) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) a(n);
				else if (Array.isArray(n)) for (let e of n) a(e);
			}
		}
	}
	return t.delete(e), zr(e, i);
}
function zr(e, t) {
	return t !== Ir && Pr.set(e, t === Lr), t;
}
function Br(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
var Vr, Hr = [], Ur = {
	alloc(e, t, n) {
		let r = Vr;
		if (!r) return n;
		Vr = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), Hr.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && Gr(n, e.value)) throw new kr();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, r = !1, i, a;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, o = (s, c) => {
				if (n === void 0) {
					let i = Rr(e, /* @__PURE__ */ new Set(), !1);
					if (i === Fr) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
					i === Lr || r ? n = !0 : r = !0;
				}
				let l = s.value;
				if (!Mr(l)) return t(s, c);
				let u = c[Ar];
				u || (u = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[Ar] = u);
				let d;
				i === c ? d = a : (d = Br(u, e), i = c, a = d);
				let f = d.get(l);
				if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...Nr(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
				Vr = d;
				let p = Hr.length, m = t(s, c);
				Vr = void 0;
				let h = Hr.length > p ? Hr.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? Nr(e.issues) : jr), e)) : (h && (h.issues = m.issues.length ? Nr(m.issues) : jr), m);
			};
			e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
		});
	}
};
function Wr() {
	return Ur;
}
function Gr(e, t) {
	let n = e[Ar]?.backEdges;
	return n !== void 0 && Mr(t) && n.has(t);
}
//#endregion
//#region ../../node_modules/zod/v4/locales/en.js
var Kr = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	function i(e, t) {
		return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(_e(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${B(e.values[0])}` : `Invalid option: expected one of ${h(e.values, "|")}`;
			case "too_big": {
				let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${h(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function qr() {
	return { localeError: Kr() };
}
//#endregion
//#region ../../node_modules/zod/v4/core/registries.js
var Jr, Yr = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function Xr() {
	return new Yr();
}
(Jr = globalThis).__zod_globalRegistry ?? (Jr.__zod_globalRegistry = Xr());
var Zr = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
function Qr(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function $r(e, t) {
	return new e(Qr({
		type: "string",
		...z(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function ei(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ti(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ni(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ri(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ii(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ai(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function oi(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function si(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ci(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function li(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ui(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function di(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function fi(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function pi(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mi(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function hi(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function gi(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _i(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vi(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function yi(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function bi(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xi(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wi(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ti(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ei(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Di(e, t) {
	return new e({
		type: "never",
		...z(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
	return new Kt({
		check: "max_length",
		...z(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
	return new qt({
		check: "min_length",
		...z(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ai(e, t) {
	return new Jt({
		check: "length_equals",
		...z(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function ji(e, t) {
	return new Xt({
		check: "string_format",
		format: "regex",
		...z(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
	return new Zt({
		check: "string_format",
		format: "lowercase",
		...z(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
	return new Qt({
		check: "string_format",
		format: "uppercase",
		...z(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Pi(e, t) {
	return new $t({
		check: "string_format",
		format: "includes",
		...z(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function Fi(e, t) {
	return new en({
		check: "string_format",
		format: "starts_with",
		...z(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ii(e, t) {
	return new tn({
		check: "string_format",
		format: "ends_with",
		...z(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Li(e) {
	return new nn({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ri(e) {
	return /* @__PURE__ */ Li((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function zi() {
	return /* @__PURE__ */ Li((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Bi() {
	return /* @__PURE__ */ Li((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Vi() {
	return /* @__PURE__ */ Li((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Hi() {
	return /* @__PURE__ */ Li((e) => A(e));
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...z(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Wi(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...z(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Gi(e, t) {
	let n = /* @__PURE__ */ Ki((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(ve(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(ve(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t) {
	let n = new Wt({
		check: "custom",
		...z(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function qi(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && x(e, t, n[t]);
	return e;
}
function Ji(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Zr,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function Yi(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function Xi(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, Xi(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && qi(o.schema, c), t.io === "input" && oa(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Zi(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Qi(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${Zi(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Zi(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		r.count > 1 && e.reused === "ref" && a(n);
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function $i(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		$i(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
var ea = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), ta = ["oneOf", "anyOf"];
function na(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function ra(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!ea.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? na(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			x(n, r, e.length === 1 ? e[0] : ra(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = na(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function ia(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of ea) if (t in e) return;
	let n = t.filter((e) => ta.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = ra(t);
	else {
		let e = n[0], i = ta.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => ra([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, qi(e, r));
}
function aa(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : qi(i, s), qi(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) $i(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) ia(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	qi(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, x(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: ca(t, "input", e.processors),
					output: ca(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function oa(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return oa(r.element, n);
	if (r.type === "set") return oa(r.valueType, n);
	if (r.type === "lazy") return oa(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return oa(r.innerType, n);
	if (r.type === "intersection") return oa(r.left, n) || oa(r.right, n);
	if (r.type === "record" || r.type === "map") return oa(r.keyType, n) || oa(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : oa(r.in, n) || oa(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (oa(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (oa(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (oa(e, n)) return !0;
		return !!(r.rest && oa(r.rest, n));
	}
	return !1;
}
var sa = (e, t = {}) => (n) => {
	let r = Ji({
		...n,
		processors: t
	});
	return Xi(e, r), Qi(r, e), aa(r, e);
}, ca = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Ji({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return Xi(e, o), Qi(o, e), aa(o, e);
}, la = (e, t, n) => {
	(e[t] === void 0 || n > e[t]) && (e[t] = n);
}, ua = (e, t, n) => {
	(e[t] === void 0 || n < e[t]) && (e[t] = n);
}, da = (e, t) => {
	la(e, "minimum", t), ua(e, "maximum", t);
}, fa = (e, t) => {
	e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
}, pa = (e, t) => {
	e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
}, ma = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, ha = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, ga = (e, t) => la(e, "minimum", t.minimum), _a = (e, t) => ua(e, "maximum", t.maximum), va = (e) => (t, n) => {
	ha(t, n.format);
	let [r, i] = e[n.format];
	la(t, "minimum", r), ua(t, "maximum", i);
}, ya = {
	greater_than: (e, t) => la(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => ua(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => fa(e, t.value),
	number_format: va(te),
	bigint_format: va(V),
	min_length: ga,
	max_length: _a,
	length_equals: (e, t) => da(e, t.length),
	min_size: ga,
	max_size: _a,
	size_equals: (e, t) => da(e, t.size),
	string_format: (e, t) => {
		ha(e, t.format), t.pattern && pa(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => ma(e, t.mime)
};
function ba(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) ya[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && la(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && la(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && ua(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && ua(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && fa(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && ma(t, i.mime);
	for (let e of i.patterns ?? []) pa(t, e);
	return t;
}
var xa = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Sa = /* @__PURE__ */ new Map([[Vn, jt], [Un, Mt]]), Ca = (e) => Sa.get(e) ?? e, wa = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = ba(e);
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = xa[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c].map(Ca);
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Ta = (e, t, n, r) => {
	n.not = {};
}, Ea = (e, t, n, r) => {
	let i = e._zod.def, a = m(i.entries);
	if (a.length === 0) {
		n.not = {};
		return;
	}
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Da = (e, t, n, r) => {
	Yi(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, Oa = (e, t, n, r) => {
	Yi(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, ka = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = ba(e);
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = Xi(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function Aa(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Aa(t.out) : t.type === "catch" ? Aa(t.innerType) : e._zod.optin;
}
var ja = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && Yi(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) x(i.properties, e, Xi(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	}));
	let s = [];
	for (let e of Object.keys(o)) {
		let n = a.shape[e];
		(t.io === "input" ? Aa(n) === void 0 : n._zod.optout === void 0) && s.push(e);
	}
	s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = Xi(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Ma = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => Xi(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Na = (e, t, n, r) => {
	let i = e._zod.def, a = Xi(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = Xi(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, Pa = (e, t, n, r) => {
	let i = e._zod.def, a = Xi(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Fa = (e, t, n, r) => {
	let i = e._zod.def;
	Xi(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Ia = Symbol();
function La(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (Yi(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Ia) : JSON.parse(o);
}
var Ra = (e, t, n, r) => {
	let i = e._zod.def;
	Xi(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = La(i.defaultValue, e, t, n, r);
	o !== Ia && (n.default = o);
}, za = (e, t, n, r) => {
	let i = e._zod.def;
	Xi(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = La(i.defaultValue, e, t, n, r);
	o !== Ia && (n._prefault = o);
}, Ba = (e, t, n, r) => {
	let i = e._zod.def;
	Xi(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		Yi(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, Va = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	Xi(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Ha = (e, t, n, r) => {
	let i = e._zod.def;
	Xi(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Ua = (e, t, n, r) => {
	let i = e._zod.def;
	Xi(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Wa = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Ga(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var Ka = /*@__PURE__*/ K("ZodError", (e, t) => {
	Ge.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	Wa.has(n) || (Wa.add(n), Ga(n, "format", (e) => (t) => Je(e, t)), Ga(n, "flatten", (e) => (t) => qe(e, t)), Ga(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, g, 2);
	}), Ga(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, g, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), qa = /* @__PURE__ */ Xe(Ka), Ja = /* @__PURE__ */ Ze(Ka), Ya = /* @__PURE__ */ Qe(Ka), Xa = /* @__PURE__ */ et(Ka), Za = /* @__PURE__ */ ot(Ka), Qa = /* @__PURE__ */ st(Ka), $a = /* @__PURE__ */ ct(Ka), eo = /* @__PURE__ */ lt(Ka), to = /* @__PURE__ */ ut(Ka), no = /* @__PURE__ */ dt(Ka), ro = /* @__PURE__ */ ft(Ka), io = /* @__PURE__ */ pt(Ka);
//#endregion
//#region ../../node_modules/zod/v4/classic/schemas.js
function ao() {
	Le.localeError || Re(qr());
}
function oo() {
	Le.memoizer || Re({ memoizer: Wr() });
}
var so = /*@__PURE__*/ K("ZodType", (e, t) => (ao(), on.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(O(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return R(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(gs(e, t));
	},
	superRefine(e, t) {
		return this.check(_s(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ Li(e));
	},
	optional() {
		return Qo(this);
	},
	exactOptional() {
		return es(this);
	},
	nullable() {
		return ns(this);
	},
	nullish() {
		return Qo(ns(this));
	},
	nonoptional(e) {
		return cs(this, e);
	},
	array() {
		return Bo(this);
	},
	or(e) {
		return Wo([this, e]);
	},
	and(e) {
		return Ko(this, e);
	},
	transform(e) {
		return fs(this, Xo(e));
	},
	default(e) {
		return is(this, e);
	},
	prefault(e) {
		return os(this, e);
	},
	catch(e) {
		return us(this, e);
	},
	pipe(e) {
		return fs(this, e);
	},
	readonly() {
		return ms(this);
	},
	describe(e) {
		let t = this.clone();
		return Zr.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return Zr.get(this);
		let t = this.clone();
		return Zr.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return t.length === 0 ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return xe(this, "~standard", {
			...ln(this),
			jsonSchema: {
				input: ca(this, "input"),
				output: ca(this, "output")
			}
		});
	},
	set "~standard"(e) {
		be(this, "~standard", e);
	},
	parse: function e(t, n) {
		return qa(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await Ja(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return Ya(this, e, t);
	},
	async safeParseAsync(e, t) {
		return Xa(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		be(this, "spa", e);
	},
	validate(e, t) {
		return rt(this, e, t);
	},
	validateAsync(e, t) {
		return at(this, e, t);
	},
	encode: function e(t, n) {
		return Za(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return Qa(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await $a(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await eo(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return to(this, e, t);
	},
	safeDecode(e, t) {
		return no(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return ro(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return io(this, e, t);
	},
	toJSONSchema(e) {
		return sa(this, {})(e);
	},
	get description() {
		return Zr.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), co = /*@__PURE__*/ K("_ZodString", (e, t) => {
	un.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => wa(e, t, n, r);
}, /*@__PURE__*/ Se({
	format: (e) => ba(e).format ?? null,
	minLength: (e) => ba(e).minimum ?? null,
	maxLength: (e) => ba(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ ji(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ Pi(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ Fi(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ Ii(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ ki(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ Oi(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ Ai(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ ki(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ Mi(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ Ni(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ zi());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ Ri(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ Bi());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ Vi());
	},
	slugify() {
		return this.check(/* @__PURE__ */ Hi());
	}
})), lo = /*@__PURE__*/ K("ZodString", (e, t) => {
	un.init(e, t), co.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ ei(go, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ oi(yo, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ xi(Po, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ si(bo, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ ti(_o, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ ni(vo, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ ri(vo, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ ii(vo, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ ai(vo, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ ci(xo, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ li(So, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ ui(Co, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ di(wo, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ vi(jo, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ yi(Mo, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ fi(To, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ pi(Eo, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ mi(Do, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ hi(Oo, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ gi(ko, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ _i(Ao, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ bi(No, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ Si(fo, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ Ci(po, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ wi(mo, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ Ti(ho, e));
	}
});
function uo(e) {
	return /* @__PURE__ */ $r(lo, e);
}
var J = /*@__PURE__*/ K("ZodStringFormat", (e, t) => {
	q.init(e, t), co.init(e, t);
}), fo = /*@__PURE__*/ K("ZodISODateTime", (e, t) => {
	kn.init(e, t), J.init(e, t);
}), po = /*@__PURE__*/ K("ZodISODate", (e, t) => {
	An.init(e, t), J.init(e, t);
}), mo = /*@__PURE__*/ K("ZodISOTime", (e, t) => {
	jn.init(e, t), J.init(e, t);
}), ho = /*@__PURE__*/ K("ZodISODuration", (e, t) => {
	Mn.init(e, t), J.init(e, t);
}), go = /*@__PURE__*/ K("ZodEmail", (e, t) => {
	pn.init(e, t), J.init(e, t);
}), _o = /*@__PURE__*/ K("ZodGUID", (e, t) => {
	dn.init(e, t), J.init(e, t);
}), vo = /*@__PURE__*/ K("ZodUUID", (e, t) => {
	fn.init(e, t), J.init(e, t);
}), yo = /*@__PURE__*/ K("ZodURL", (e, t) => {
	xn.init(e, t), J.init(e, t);
}), bo = /*@__PURE__*/ K("ZodEmoji", (e, t) => {
	Sn.init(e, t), J.init(e, t);
}), xo = /*@__PURE__*/ K("ZodNanoID", (e, t) => {
	Cn.init(e, t), J.init(e, t);
}), So = /*@__PURE__*/ K("ZodCUID", (e, t) => {
	wn.init(e, t), J.init(e, t);
}), Co = /*@__PURE__*/ K("ZodCUID2", (e, t) => {
	Tn.init(e, t), J.init(e, t);
}), wo = /*@__PURE__*/ K("ZodULID", (e, t) => {
	En.init(e, t), J.init(e, t);
}), To = /*@__PURE__*/ K("ZodXID", (e, t) => {
	Dn.init(e, t), J.init(e, t);
}), Eo = /*@__PURE__*/ K("ZodKSUID", (e, t) => {
	On.init(e, t), J.init(e, t);
}), Do = /*@__PURE__*/ K("ZodIPv4", (e, t) => {
	Nn.init(e, t), J.init(e, t);
}), Oo = /*@__PURE__*/ K("ZodIPv6", (e, t) => {
	In.init(e, t), J.init(e, t);
}), ko = /*@__PURE__*/ K("ZodCIDRv4", (e, t) => {
	Ln.init(e, t), J.init(e, t);
}), Ao = /*@__PURE__*/ K("ZodCIDRv6", (e, t) => {
	zn.init(e, t), J.init(e, t);
}), jo = /*@__PURE__*/ K("ZodBase64", (e, t) => {
	Hn.init(e, t), J.init(e, t);
}), Mo = /*@__PURE__*/ K("ZodBase64URL", (e, t) => {
	Gn.init(e, t), J.init(e, t);
}), No = /*@__PURE__*/ K("ZodE164", (e, t) => {
	Kn.init(e, t), J.init(e, t);
}), Po = /*@__PURE__*/ K("ZodJWT", (e, t) => {
	Jn.init(e, t), J.init(e, t);
}), Fo = /*@__PURE__*/ K("ZodUnknown", (e, t) => {
	Yn.init(e, t), so.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Io() {
	return /* @__PURE__ */ Ei(Fo);
}
var Lo = /*@__PURE__*/ K("ZodNever", (e, t) => {
	Xn.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ta(e, t, n, r);
});
function Ro(e) {
	return /* @__PURE__ */ Di(Lo, e);
}
var zo = /*@__PURE__*/ K("ZodArray", (e, t) => {
	oo(), Qn.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => ka(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ ki(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ ki(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Oi(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ Ai(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function Bo(e, t) {
	return /* @__PURE__ */ Ui(zo, e, t);
}
var Vo = /*@__PURE__*/ K("ZodObject", (e, t) => {
	oo(), ir.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => ja(e, t, n, r), Oe(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return Jo(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(O(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(O(this._zod.def, { catchall: Io() }));
	},
	loose() {
		return this.clone(O(this._zod.def, { catchall: Io() }));
	},
	strict() {
		return this.clone(O(this._zod.def, { catchall: Ro() }));
	},
	strip() {
		return this.clone(O(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return U(this, e);
	},
	safeExtend(e) {
		return ae(this, e);
	},
	merge(e) {
		return oe(this, e);
	},
	pick(e) {
		return ne(this, e);
	},
	omit(e) {
		return H(this, e);
	},
	partial(...e) {
		return se(Zo, this, e[0]);
	},
	exactPartial(...e) {
		return se($o, this, e[0], "exactPartial");
	},
	required(...e) {
		return ce(ss, this, e[0]);
	}
});
function Ho(e, t) {
	return new Vo({
		type: "object",
		shape: e ?? {},
		...z(t)
	});
}
var Uo = /*@__PURE__*/ K("ZodUnion", (e, t) => {
	or.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ma(e, t, n, r), e.options = t.options;
});
function Wo(e, t) {
	return new Uo({
		type: "union",
		options: e,
		...z(t)
	});
}
var Go = /*@__PURE__*/ K("ZodIntersection", (e, t) => {
	sr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Na(e, t, n, r);
});
function Ko(e, t) {
	return new Go({
		type: "intersection",
		left: e,
		right: t
	});
}
var qo = /*@__PURE__*/ K("ZodEnum", (e, t) => {
	ur.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ea(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new qo({
			...t,
			checks: [],
			...z(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new qo({
			...t,
			checks: [],
			...z(r),
			entries: i
		});
	};
});
function Jo(e, t) {
	return new qo({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...z(t)
	});
}
var Yo = /*@__PURE__*/ K("ZodTransform", (e, t) => {
	oo(), dr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Oa(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Ie(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(ve(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(ve(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function Xo(e) {
	return new Yo({
		type: "transform",
		transform: e
	});
}
var Zo = /*@__PURE__*/ K("ZodOptional", (e, t) => {
	pr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ua(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Qo(e) {
	return new Zo({
		type: "optional",
		innerType: e
	});
}
var $o = /*@__PURE__*/ K("ZodExactOptional", (e, t) => {
	mr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ua(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function es(e) {
	return new $o({
		type: "optional",
		innerType: e
	});
}
var ts = /*@__PURE__*/ K("ZodNullable", (e, t) => {
	hr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pa(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ns(e) {
	return new ts({
		type: "nullable",
		innerType: e
	});
}
var rs = /*@__PURE__*/ K("ZodDefault", (e, t) => {
	gr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ra(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function is(e, t) {
	return new rs({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : F(t);
		}
	});
}
var as = /*@__PURE__*/ K("ZodPrefault", (e, t) => {
	vr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => za(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function os(e, t) {
	return new as({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : F(t);
		}
	});
}
var ss = /*@__PURE__*/ K("ZodNonOptional", (e, t) => {
	yr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fa(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function cs(e, t) {
	return new ss({
		type: "nonoptional",
		innerType: e,
		...z(t)
	});
}
var ls = /*@__PURE__*/ K("ZodCatch", (e, t) => {
	Sr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ba(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function us(e, t) {
	return new ls({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Ae(t)
	});
}
var ds = /*@__PURE__*/ K("ZodPipe", (e, t) => {
	Cr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Va(e, t, n, r), e.in = t.in, e.out = t.out;
});
function fs(e, t) {
	return new ds({
		type: "pipe",
		in: e,
		out: t
	});
}
var ps = /*@__PURE__*/ K("ZodReadonly", (e, t) => {
	Tr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ha(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ms(e) {
	return new ps({
		type: "readonly",
		innerType: e
	});
}
var hs = /*@__PURE__*/ K("ZodCustom", (e, t) => {
	Dr.init(e, t), so.init(e, t), e._zod.processJSONSchema = (t, n, r) => Da(e, t, n, r);
});
function gs(e, t = {}) {
	return /* @__PURE__ */ Wi(hs, e, t);
}
function _s(e, t) {
	return /* @__PURE__ */ Gi(e, t);
}
var vs = Ho({
	data: Ho({ title: uo() }),
	settings: Ho({ colour: uo() })
}).strict();
function ys(e) {
	return vs.parse(e);
}
//#endregion
//#region src/Config.ts
var bs = "editorword";
function xs(e, t, n) {
	try {
		let r = Ss(ys(e));
		return n?.log("bootstrap", "Config runtime", t), n?.log("bootstrap", "Config resolved", r), Object.freeze(r);
	} catch (e) {
		throw n?.log("bootstrap", "Invalid widget contract", e instanceof Error ? e.message : e, "error"), e;
	}
}
function Ss(e) {
	return {
		data: e.data,
		settings: e.settings,
		runtime: {},
		integrations: {}
	};
}
//#endregion
//#region src/activity/Context/ActivityContext.tsx
var Cs = o(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/activity.guard.ts
function ws() {
	if (typeof window > "u") return [];
	let e = new URLSearchParams(window.location.search).get("reactedge_debug");
	return e ? e === "1" || e === "all" ? ["all"] : e.split(",").map((e) => e.trim().toLowerCase()) : null;
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/index.ts
var Ts = class {
	widgetId;
	instance;
	correlationId;
	constructor(e, t) {
		this.widgetId = e, t !== void 0 && (this.instance = t);
	}
	log(e, t, n, r = "info") {
		let i = {
			widget: this.widgetId,
			instance: this.instance ?? this.widgetId,
			phase: e,
			message: t,
			level: r,
			data: n,
			ts: Date.now()
		};
		if (this.isEnabled()) {
			let t = `[${this.widgetId}] ${e}`;
			r === "error" ? console.error(t, i) : r === "warn" ? console.warn(t, i) : console.log(t, i);
		}
		this.dispatchActivityEvent(i);
	}
	group(e, t) {
		if (this.isEnabled()) {
			if (console.group(`[ReactEdge] ${e}`), t) for (let [e, n] of Object.entries(t)) console.log(`${e}:`, n);
			console.groupEnd();
		}
	}
	debug(e, t) {
		if (this.isEnabled() && (console.group(`[ReactEdge] ${e}`), t)) for (let [e, n] of Object.entries(t)) console.debug(`${e}:`, n);
	}
	ready() {
		let e = "widget-ready", t = {
			widget: this.widgetId,
			instance: this.instance ?? this.widgetId,
			phase: e,
			message: "The widget is now ready to take over the SSR",
			level: "info",
			data: null,
			ts: Date.now()
		};
		if (this.isEnabled()) {
			let n = `[${this.widgetId}] ${e}`;
			console.log(n, t);
		}
		this.dispatchActivityEvent(t);
	}
	dispatchActivityEvent(e) {
		typeof window > "u" || window.dispatchEvent(new CustomEvent("reactedge:activity", { detail: e }));
	}
	isEnabled() {
		let e = ws();
		return e !== null && (e.includes("all") || e.includes(this.widgetId.toLowerCase()));
	}
	setCorrelationId(e) {
		this.correlationId = e;
	}
	getCorrelationId() {
		return this.correlationId;
	}
}, Es = Cs.Provider, Ds = ({ children: e, hostElement: t }) => {
	let n = new Ts(bs, (t ?? document.documentElement).dataset.instance);
	return /* @__PURE__ */ d(Es, {
		value: n,
		children: e
	});
};
//#endregion
//#region src/activity/Context/useActivityContext.ts
function Os() {
	let e = c(Cs);
	if (!e) throw Error("useInstanceState must be used within InstanceStateProvider");
	return e;
}
//#endregion
//#region src/state/Document/DocumentState.tsx
var ks = o(void 0);
//#endregion
//#region src/state/Document/useDocumentState.ts
function As() {
	let e = c(ks);
	if (!e) throw Error("useDocumentState must be used within DocumentStateProvider");
	return e;
}
//#endregion
//#region src/controller/DocumentController.ts
var js = class {
	activity;
	constructor(e) {
		this.activity = e;
	}
	async isValidDocument(e, t) {
		let n = await fetch(e);
		if (!n.ok) return !1;
		let r = await n.arrayBuffer(), i = new Uint8Array(r);
		switch (t) {
			case "pdf": return i[0] === 37 && i[1] === 80 && i[2] === 68 && i[3] === 70;
			case "odt":
			case "docx": return i[0] === 80 && i[1] === 75;
		}
	}
	getDocumentType(e) {
		let t = e.split(".").pop()?.toLowerCase();
		return t === "pdf" || t === "odt" || t === "docx" ? t : null;
	}
	async load(e) {
		let t = e.filename.trim();
		if (!t) {
			let e = `Filename is missing: ${t}`;
			return this.activity.log("Document Filename Missing", e, "error"), {
				success: !1,
				error: e
			};
		}
		let n = this.getDocumentType(t);
		if (!n) {
			let e = `Unsupported document type: ${t}`;
			return this.activity.log("Document Type", e, "error"), {
				success: !1,
				error: e
			};
		}
		try {
			let r = `/${encodeURIComponent(t)}`;
			if (!await this.isValidDocument(r, n)) {
				let e = `Document not found or invalid: ${t}`;
				return this.activity.log("Document Validation", e, "error"), {
					success: !1,
					error: e
				};
			}
			return {
				success: !0,
				file: {
					...e,
					filename: t,
					url: r,
					type: n
				}
			};
		} catch (e) {
			let t = e instanceof Error ? e.message : "Unable to load document";
			return this.activity.log("Error Document", t, "error"), {
				success: !1,
				error: t
			};
		}
	}
}, Ms = () => {
	let e = Os(), { file: t, setFile: n, setError: r } = As();
	return /* @__PURE__ */ f("div", {
		className: "word-editor__toolbar",
		children: [/* @__PURE__ */ d("input", {
			type: "text",
			value: t.filename,
			onChange: (e) => {
				n({
					...t,
					filename: e.target.value
				});
			},
			placeholder: "Document filename",
			"aria-label": "Document filename"
		}), /* @__PURE__ */ d("button", {
			type: "button",
			onClick: async () => {
				r(null);
				let i = await new js(e).load(t);
				if (!i.success) {
					r(i.error);
					return;
				}
				n(i.file);
			},
			disabled: !t.filename.trim(),
			children: "Load"
		})]
	});
}, Ns = ({ file: e }) => e.url ? /* @__PURE__ */ d("iframe", {
	src: e.url,
	title: e.filename,
	className: "word-editor__document-frame"
}) : null, Ps, Fs, Is, Ls, Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, Y = n((() => {
	Ps = "1.13.8", Fs = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, Is = Array.prototype, Ls = Object.prototype, Rs = typeof Symbol < "u" ? Symbol.prototype : null, zs = Is.push, Bs = Is.slice, Vs = Ls.toString, Hs = Ls.hasOwnProperty, Us = typeof ArrayBuffer < "u", Ws = typeof DataView < "u", Gs = Array.isArray, Ks = Object.keys, qs = Object.create, Js = Us && ArrayBuffer.isView, Ys = isNaN, Xs = isFinite, Zs = !{ toString: null }.propertyIsEnumerable("toString"), Qs = [
		"valueOf",
		"isPrototypeOf",
		"toString",
		"propertyIsEnumerable",
		"hasOwnProperty",
		"toLocaleString"
	], $s = 2 ** 53 - 1;
}));
//#endregion
//#region ../../node_modules/underscore/modules/restArguments.js
function ec(e, t) {
	return t = t == null ? e.length - 1 : +t, function() {
		for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
		switch (t) {
			case 0: return e.call(this, r);
			case 1: return e.call(this, arguments[0], r);
			case 2: return e.call(this, arguments[0], arguments[1], r);
		}
		var a = Array(t + 1);
		for (i = 0; i < t; i++) a[i] = arguments[i];
		return a[t] = r, e.apply(this, a);
	};
}
var tc = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isObject.js
function nc(e) {
	var t = typeof e;
	return t === "function" || t === "object" && !!e;
}
var rc = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isNull.js
function ic(e) {
	return e === null;
}
var ac = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isUndefined.js
function oc(e) {
	return e === void 0;
}
var sc = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/isBoolean.js
function cc(e) {
	return e === !0 || e === !1 || Vs.call(e) === "[object Boolean]";
}
var lc = n((() => {
	Y();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isElement.js
function uc(e) {
	return !!(e && e.nodeType === 1);
}
var dc = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/_tagTester.js
function fc(e) {
	var t = "[object " + e + "]";
	return function(e) {
		return Vs.call(e) === t;
	};
}
var pc = n((() => {
	Y();
})), mc, hc = n((() => {
	pc(), mc = fc("String");
})), gc, _c = n((() => {
	pc(), gc = fc("Number");
})), vc, yc = n((() => {
	pc(), vc = fc("Date");
})), bc, xc = n((() => {
	pc(), bc = fc("RegExp");
})), Sc, Cc = n((() => {
	pc(), Sc = fc("Error");
})), wc, Tc = n((() => {
	pc(), wc = fc("Symbol");
})), Ec, Dc = n((() => {
	pc(), Ec = fc("ArrayBuffer");
})), Oc, kc, Ac, jc = n((() => {
	pc(), Y(), Oc = fc("Function"), kc = Fs.document && Fs.document.childNodes, typeof /./ != "function" && typeof Int8Array != "object" && typeof kc != "function" && (Oc = function(e) {
		return typeof e == "function" || !1;
	}), Ac = Oc;
})), Mc, Nc = n((() => {
	pc(), Mc = fc("Object");
})), Pc, Fc, Ic = n((() => {
	Y(), Nc(), Pc = Ws && (!/\[native code\]/.test(String(DataView)) || Mc(/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8)))), Fc = typeof Map < "u" && Mc(/* @__PURE__ */ new Map());
}));
//#endregion
//#region ../../node_modules/underscore/modules/isDataView.js
function Lc(e) {
	return e != null && Ac(e.getInt8) && Ec(e.buffer);
}
var Rc, zc, Bc = n((() => {
	pc(), jc(), Dc(), Ic(), Rc = fc("DataView"), zc = Pc ? Lc : Rc;
})), Vc, Hc = n((() => {
	Y(), pc(), Vc = Gs || fc("Array");
}));
//#endregion
//#region ../../node_modules/underscore/modules/_has.js
function Uc(e, t) {
	return e != null && Hs.call(e, t);
}
var Wc = n((() => {
	Y();
})), Gc, Kc, qc = n((() => {
	pc(), Wc(), Gc = fc("Arguments"), (function() {
		Gc(arguments) || (Gc = function(e) {
			return Uc(e, "callee");
		});
	})(), Kc = Gc;
}));
//#endregion
//#region ../../node_modules/underscore/modules/isFinite.js
function Jc(e) {
	return !wc(e) && Xs(e) && !isNaN(parseFloat(e));
}
var Yc = n((() => {
	Y(), Tc();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isNaN.js
function Xc(e) {
	return gc(e) && Ys(e);
}
var Zc = n((() => {
	Y(), _c();
}));
//#endregion
//#region ../../node_modules/underscore/modules/constant.js
function Qc(e) {
	return function() {
		return e;
	};
}
var $c = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/_createSizePropertyCheck.js
function el(e) {
	return function(t) {
		var n = e(t);
		return typeof n == "number" && n >= 0 && n <= $s;
	};
}
var tl = n((() => {
	Y();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_shallowProperty.js
function nl(e) {
	return function(t) {
		return t?.[e];
	};
}
var rl = n((() => {})), il, al = n((() => {
	rl(), il = nl("byteLength");
})), ol, sl = n((() => {
	tl(), al(), ol = el(il);
}));
//#endregion
//#region ../../node_modules/underscore/modules/isTypedArray.js
function cl(e) {
	return Js ? Js(e) && !zc(e) : ol(e) && ll.test(Vs.call(e));
}
var ll, ul, dl = n((() => {
	Y(), Bc(), $c(), sl(), ll = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/, ul = Us ? cl : Qc(!1);
})), fl, pl = n((() => {
	rl(), fl = nl("length");
}));
//#endregion
//#region ../../node_modules/underscore/modules/_collectNonEnumProps.js
function ml(e) {
	for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = !0;
	return {
		contains: function(e) {
			return t[e] === !0;
		},
		push: function(n) {
			return t[n] = !0, e.push(n);
		}
	};
}
function hl(e, t) {
	t = ml(t);
	var n = Qs.length, r = e.constructor, i = Ac(r) && r.prototype || Ls, a = "constructor";
	for (Uc(e, a) && !t.contains(a) && t.push(a); n--;) a = Qs[n], a in e && e[a] !== i[a] && !t.contains(a) && t.push(a);
}
var gl = n((() => {
	Y(), jc(), Wc();
}));
//#endregion
//#region ../../node_modules/underscore/modules/keys.js
function _l(e) {
	if (!nc(e)) return [];
	if (Ks) return Ks(e);
	var t = [];
	for (var n in e) Uc(e, n) && t.push(n);
	return Zs && hl(e, t), t;
}
var vl = n((() => {
	rc(), Y(), Wc(), gl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isEmpty.js
function yl(e) {
	if (e == null) return !0;
	var t = fl(e);
	return typeof t == "number" && (Vc(e) || mc(e) || Kc(e)) ? t === 0 : fl(_l(e)) === 0;
}
var bl = n((() => {
	pl(), Hc(), hc(), qc(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isMatch.js
function xl(e, t) {
	var n = _l(t), r = n.length;
	if (e == null) return !r;
	for (var i = Object(e), a = 0; a < r; a++) {
		var o = n[a];
		if (t[o] !== i[o] || !(o in i)) return !1;
	}
	return !0;
}
var Sl = n((() => {
	vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/underscore.js
function X(e) {
	if (e instanceof X) return e;
	if (!(this instanceof X)) return new X(e);
	this._wrapped = e;
}
var Cl = n((() => {
	Y(), X.VERSION = Ps, X.prototype.value = function() {
		return this._wrapped;
	}, X.prototype.valueOf = X.prototype.toJSON = X.prototype.value, X.prototype.toString = function() {
		return String(this._wrapped);
	};
}));
//#endregion
//#region ../../node_modules/underscore/modules/_toBufferView.js
function wl(e) {
	return new Uint8Array(e.buffer || e, e.byteOffset || 0, il(e));
}
var Tl = n((() => {
	al();
}));
//#endregion
//#region ../../node_modules/underscore/modules/isEqual.js
function El(e, t) {
	for (var n = [{
		a: e,
		b: t
	}], r = [], i = []; n.length;) {
		var a = n.pop();
		if (a === !0) {
			r.pop(), i.pop();
			continue;
		}
		if (e = a.a, t = a.b, e === t) {
			if (e !== 0 || 1 / e == 1 / t) continue;
			return !1;
		}
		if (e == null || t == null) return !1;
		if (e !== e) {
			if (t !== t) continue;
			return !1;
		}
		var o = typeof e;
		if (o !== "function" && o !== "object" && typeof t != "object") return !1;
		e instanceof X && (e = e._wrapped), t instanceof X && (t = t._wrapped);
		var s = Vs.call(e);
		if (s !== Vs.call(t)) return !1;
		if (Pc && s == "[object Object]" && zc(e)) {
			if (!zc(t)) return !1;
			s = Dl;
		}
		switch (s) {
			case "[object RegExp]":
			case "[object String]":
				if ("" + e == "" + t) continue;
				return !1;
			case "[object Number]":
				n.push({
					a: +e,
					b: +t
				});
				continue;
			case "[object Date]":
			case "[object Boolean]":
				if (+e == +t) continue;
				return !1;
			case "[object Symbol]":
				if (Rs.valueOf.call(e) === Rs.valueOf.call(t)) continue;
				return !1;
			case "[object ArrayBuffer]":
			case Dl:
				n.push({
					a: wl(e),
					b: wl(t)
				});
				continue;
		}
		var c = s === "[object Array]";
		if (!c && ul(e)) {
			if (il(e) !== il(t)) return !1;
			if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) continue;
			c = !0;
		}
		if (!c) {
			if (typeof e != "object" || typeof t != "object") return !1;
			var l = e.constructor, u = t.constructor;
			if (l !== u && !(Ac(l) && l instanceof l && Ac(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
		}
		for (var d = r.length; d--;) if (r[d] === e) {
			if (i[d] === t) break;
			return !1;
		}
		if (!(d >= 0)) {
			if (r.push(e), i.push(t), n.push(!0), c) {
				if (d = e.length, d !== t.length) return !1;
				for (; d--;) n.push({
					a: e[d],
					b: t[d]
				});
			} else {
				var f = _l(e), p;
				if (d = f.length, _l(t).length !== d) return !1;
				for (; d--;) {
					if (p = f[d], !Uc(t, p)) return !1;
					n.push({
						a: e[p],
						b: t[p]
					});
				}
			}
		}
	}
	return !0;
}
var Dl, Ol = n((() => {
	Cl(), Y(), al(), dl(), jc(), Ic(), Bc(), vl(), Wc(), Tl(), Dl = "[object DataView]";
}));
//#endregion
//#region ../../node_modules/underscore/modules/allKeys.js
function kl(e) {
	if (!nc(e)) return [];
	var t = [];
	for (var n in e) t.push(n);
	return Zs && hl(e, t), t;
}
var Al = n((() => {
	rc(), Y(), gl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_methodFingerprint.js
function jl(e) {
	var t = fl(e);
	return function(n) {
		if (n == null) return !1;
		var r = kl(n);
		if (fl(r)) return !1;
		for (var i = 0; i < t; i++) if (!Ac(n[e[i]])) return !1;
		return e !== Ll || !Ac(n[Ml]);
	};
}
var Ml, Nl, Pl, Fl, Il, Ll, Rl, zl = n((() => {
	pl(), jc(), Al(), Ml = "forEach", Nl = "has", Pl = ["clear", "delete"], Fl = [
		"get",
		Nl,
		"set"
	], Il = Pl.concat(Ml, Fl), Ll = Pl.concat(Fl), Rl = ["add"].concat(Pl, Ml, Nl);
})), Bl, Vl = n((() => {
	pc(), Ic(), zl(), Bl = Fc ? jl(Il) : fc("Map");
})), Hl, Ul = n((() => {
	pc(), Ic(), zl(), Hl = Fc ? jl(Ll) : fc("WeakMap");
})), Wl, Gl = n((() => {
	pc(), Ic(), zl(), Wl = Fc ? jl(Rl) : fc("Set");
})), Kl, ql = n((() => {
	pc(), Kl = fc("WeakSet");
}));
//#endregion
//#region ../../node_modules/underscore/modules/values.js
function Jl(e) {
	for (var t = _l(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
	return r;
}
var Yl = n((() => {
	vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/pairs.js
function Xl(e) {
	for (var t = _l(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
	return r;
}
var Zl = n((() => {
	vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/invert.js
function Ql(e) {
	for (var t = {}, n = _l(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
	return t;
}
var $l = n((() => {
	vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/functions.js
function eu(e) {
	var t = [];
	for (var n in e) Ac(e[n]) && t.push(n);
	return t.sort();
}
var tu = n((() => {
	jc();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createAssigner.js
function nu(e, t) {
	return function(n) {
		var r = arguments.length;
		if (t && (n = Object(n)), r < 2 || n == null) return n;
		for (var i = 1; i < r; i++) for (var a = arguments[i], o = e(a), s = o.length, c = 0; c < s; c++) {
			var l = o[c];
			(!t || n[l] === void 0) && (n[l] = a[l]);
		}
		return n;
	};
}
var ru = n((() => {})), iu, au = n((() => {
	ru(), Al(), iu = nu(kl);
})), ou, su = n((() => {
	ru(), vl(), ou = nu(_l);
})), cu, lu = n((() => {
	ru(), Al(), cu = nu(kl, !0);
}));
//#endregion
//#region ../../node_modules/underscore/modules/_baseCreate.js
function uu() {
	return function() {};
}
function du(e) {
	if (!nc(e)) return {};
	if (qs) return qs(e);
	var t = uu();
	t.prototype = e;
	var n = new t();
	return t.prototype = null, n;
}
var fu = n((() => {
	rc(), Y();
}));
//#endregion
//#region ../../node_modules/underscore/modules/create.js
function pu(e, t) {
	var n = du(e);
	return t && ou(n, t), n;
}
var mu = n((() => {
	fu(), su();
}));
//#endregion
//#region ../../node_modules/underscore/modules/clone.js
function hu(e) {
	return nc(e) ? Vc(e) ? e.slice() : iu({}, e) : e;
}
var gu = n((() => {
	rc(), Hc(), au();
}));
//#endregion
//#region ../../node_modules/underscore/modules/tap.js
function _u(e, t) {
	return t(e), e;
}
var vu = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/toPath.js
function yu(e) {
	return Vc(e) ? e : [e];
}
var bu = n((() => {
	Cl(), Hc(), X.toPath = yu;
}));
//#endregion
//#region ../../node_modules/underscore/modules/_toPath.js
function xu(e) {
	return X.toPath(e);
}
var Su = n((() => {
	Cl(), bu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_deepGet.js
function Cu(e, t) {
	for (var n = t.length, r = 0; r < n; r++) {
		if (e == null) return;
		e = e[t[r]];
	}
	return n ? e : void 0;
}
var wu = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/get.js
function Tu(e, t, n) {
	var r = Cu(e, xu(t));
	return oc(r) ? n : r;
}
var Eu = n((() => {
	Su(), wu(), sc();
}));
//#endregion
//#region ../../node_modules/underscore/modules/has.js
function Du(e, t) {
	t = xu(t);
	for (var n = t.length, r = 0; r < n; r++) {
		var i = t[r];
		if (!Uc(e, i)) return !1;
		e = e[i];
	}
	return !!n;
}
var Ou = n((() => {
	Wc(), Su();
}));
//#endregion
//#region ../../node_modules/underscore/modules/identity.js
function ku(e) {
	return e;
}
var Au = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/matcher.js
function ju(e) {
	return e = ou({}, e), function(t) {
		return xl(t, e);
	};
}
var Mu = n((() => {
	su(), Sl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/property.js
function Nu(e) {
	return e = xu(e), function(t) {
		return Cu(t, e);
	};
}
var Pu = n((() => {
	wu(), Su();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_optimizeCb.js
function Fu(e, t, n) {
	if (t === void 0) return e;
	switch (n ?? 3) {
		case 1: return function(n) {
			return e.call(t, n);
		};
		case 3: return function(n, r, i) {
			return e.call(t, n, r, i);
		};
		case 4: return function(n, r, i, a) {
			return e.call(t, n, r, i, a);
		};
	}
	return function() {
		return e.apply(t, arguments);
	};
}
var Iu = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/_baseIteratee.js
function Lu(e, t, n) {
	return e == null ? ku : Ac(e) ? Fu(e, t, n) : nc(e) && !Vc(e) ? ju(e) : Nu(e);
}
var Ru = n((() => {
	Au(), jc(), rc(), Hc(), Mu(), Pu(), Iu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/iteratee.js
function zu(e, t) {
	return Lu(e, t, Infinity);
}
var Bu = n((() => {
	Cl(), Ru(), X.iteratee = zu;
}));
//#endregion
//#region ../../node_modules/underscore/modules/_cb.js
function Vu(e, t, n) {
	return X.iteratee === zu ? Lu(e, t, n) : X.iteratee(e, t);
}
var Hu = n((() => {
	Cl(), Ru(), Bu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/mapObject.js
function Uu(e, t, n) {
	t = Vu(t, n);
	for (var r = _l(e), i = r.length, a = {}, o = 0; o < i; o++) {
		var s = r[o];
		a[s] = t(e[s], s, e);
	}
	return a;
}
var Wu = n((() => {
	Hu(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/noop.js
function Gu() {}
var Ku = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/propertyOf.js
function qu(e) {
	return e == null ? Gu : function(t) {
		return Tu(e, t);
	};
}
var Ju = n((() => {
	Ku(), Eu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/times.js
function Yu(e, t, n) {
	var r = Array(Math.max(0, e));
	t = Fu(t, n, 1);
	for (var i = 0; i < e; i++) r[i] = t(i);
	return r;
}
var Xu = n((() => {
	Iu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/random.js
function Zu(e, t) {
	return t ?? (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
}
var Qu = n((() => {})), $u, ed = n((() => {
	$u = Date.now || function() {
		return (/* @__PURE__ */ new Date()).getTime();
	};
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createEscaper.js
function td(e) {
	var t = function(t) {
		return e[t];
	}, n = "(?:" + _l(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
	return function(e) {
		return e = e == null ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
	};
}
var nd = n((() => {
	vl();
})), rd, id = n((() => {
	rd = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#x27;",
		"`": "&#x60;"
	};
})), ad, od = n((() => {
	nd(), id(), ad = td(rd);
})), sd, cd = n((() => {
	$l(), id(), sd = Ql(rd);
})), ld, ud = n((() => {
	nd(), cd(), ld = td(sd);
})), dd, fd = n((() => {
	Cl(), dd = X.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
}));
//#endregion
//#region ../../node_modules/underscore/modules/template.js
function pd(e) {
	return "\\" + gd[e];
}
function md(e, t, n) {
	!t && n && (t = n), t = cu({}, t, X.templateSettings);
	var r = RegExp([
		(t.escape || hd).source,
		(t.interpolate || hd).source,
		(t.evaluate || hd).source
	].join("|") + "|$", "g"), i = 0, a = "__p+='";
	e.replace(r, function(t, n, r, o, s) {
		return a += e.slice(i, s).replace(_d, pd), i = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (a += "';\n" + o + "\n__p+='"), t;
	}), a += "';\n";
	var o = t.variable;
	if (o) {
		if (!vd.test(o)) throw Error("variable is not a bare identifier: " + o);
	} else a = "with(obj||{}){\n" + a + "}\n", o = "obj";
	a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
	var s;
	try {
		s = Function(o, "_", a);
	} catch (e) {
		throw e.source = a, e;
	}
	var c = function(e) {
		return s.call(this, e, X);
	};
	return c.source = "function(" + o + "){\n" + a + "}", c;
}
var hd, gd, _d, vd, yd = n((() => {
	lu(), Cl(), fd(), hd = /(.)^/, gd = {
		"'": "'",
		"\\": "\\",
		"\r": "r",
		"\n": "n",
		"\u2028": "u2028",
		"\u2029": "u2029"
	}, _d = /\\|'|\r|\n|\u2028|\u2029/g, vd = /^\s*(\w|\$)+\s*$/;
}));
//#endregion
//#region ../../node_modules/underscore/modules/result.js
function bd(e, t, n) {
	t = xu(t);
	var r = t.length;
	if (!r) return Ac(n) ? n.call(e) : n;
	for (var i = 0; i < r; i++) {
		var a = e?.[t[i]];
		a === void 0 && (a = n, i = r), e = Ac(a) ? a.call(e) : a;
	}
	return e;
}
var xd = n((() => {
	jc(), Su();
}));
//#endregion
//#region ../../node_modules/underscore/modules/uniqueId.js
function Sd(e) {
	var t = ++Cd + "";
	return e ? e + t : t;
}
var Cd, wd = n((() => {
	Cd = 0;
}));
//#endregion
//#region ../../node_modules/underscore/modules/chain.js
function Td(e) {
	var t = X(e);
	return t._chain = !0, t;
}
var Ed = n((() => {
	Cl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_executeBound.js
function Dd(e, t, n, r, i) {
	if (!(r instanceof t)) return e.apply(n, i);
	var a = du(e.prototype), o = e.apply(a, i);
	return nc(o) ? o : a;
}
var Od = n((() => {
	fu(), rc();
})), kd, Ad = n((() => {
	tc(), Od(), Cl(), kd = ec(function(e, t) {
		var n = kd.placeholder, r = function() {
			for (var i = 0, a = t.length, o = Array(a), s = 0; s < a; s++) o[s] = t[s] === n ? arguments[i++] : t[s];
			for (; i < arguments.length;) o.push(arguments[i++]);
			return Dd(e, r, this, this, o);
		};
		return r;
	}), kd.placeholder = X;
})), jd, Md = n((() => {
	tc(), jc(), Od(), jd = ec(function(e, t, n) {
		if (!Ac(e)) throw TypeError("Bind must be called on a function");
		var r = ec(function(i) {
			return Dd(e, r, t, this, n.concat(i));
		});
		return r;
	});
})), Nd, Pd = n((() => {
	tl(), pl(), Nd = el(fl);
}));
//#endregion
//#region ../../node_modules/underscore/modules/_flatten.js
function Fd(e, t, n) {
	!t && t !== 0 && (t = Infinity);
	for (var r = [], i = 0, a = 0, o = fl(e) || 0, s = [];;) {
		if (a >= o) {
			if (!s.length) break;
			var c = s.pop();
			a = c.i, e = c.v, o = fl(e);
			continue;
		}
		var l = e[a++];
		s.length >= t ? r[i++] = l : Nd(l) && (Vc(l) || Kc(l)) ? (s.push({
			i: a,
			v: e
		}), a = 0, e = l, o = fl(e)) : n || (r[i++] = l);
	}
	return r;
}
var Id = n((() => {
	pl(), Pd(), Hc(), qc();
})), Ld, Rd = n((() => {
	tc(), Id(), Md(), Ld = ec(function(e, t) {
		t = Fd(t, !1, !1);
		var n = t.length;
		if (n < 1) throw Error("bindAll must be passed function names");
		for (; n--;) {
			var r = t[n];
			e[r] = jd(e[r], e);
		}
		return e;
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/memoize.js
function zd(e, t) {
	var n = function(r) {
		var i = n.cache, a = "" + (t ? t.apply(this, arguments) : r);
		return Uc(i, a) || (i[a] = e.apply(this, arguments)), i[a];
	};
	return n.cache = {}, n;
}
var Bd = n((() => {
	Wc();
})), Vd, Hd = n((() => {
	tc(), Vd = ec(function(e, t, n) {
		return setTimeout(function() {
			return e.apply(null, n);
		}, t);
	});
})), Ud, Wd = n((() => {
	Ad(), Hd(), Cl(), Ud = kd(Vd, X, 1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/throttle.js
function Gd(e, t, n) {
	var r, i, a, o, s = 0;
	n ||= {};
	var c = function() {
		s = n.leading === !1 ? 0 : $u(), r = null, o = e.apply(i, a), r || (i = a = null);
	}, l = function() {
		var l = $u();
		!s && n.leading === !1 && (s = l);
		var u = t - (l - s);
		return i = this, a = arguments, u <= 0 || u > t ? (r &&= (clearTimeout(r), null), s = l, o = e.apply(i, a), r || (i = a = null)) : !r && n.trailing !== !1 && (r = setTimeout(c, u)), o;
	};
	return l.cancel = function() {
		clearTimeout(r), s = 0, r = i = a = null;
	}, l;
}
var Kd = n((() => {
	ed();
}));
//#endregion
//#region ../../node_modules/underscore/modules/debounce.js
function qd(e, t, n) {
	var r, i, a, o, s, c = function() {
		var l = $u() - i;
		t > l ? r = setTimeout(c, t - l) : (r = null, n || (o = e.apply(s, a)), r || (a = s = null));
	}, l = ec(function(l) {
		return s = this, a = l, i = $u(), r || (r = setTimeout(c, t), n && (o = e.apply(s, a))), o;
	});
	return l.cancel = function() {
		clearTimeout(r), r = a = s = null;
	}, l;
}
var Jd = n((() => {
	tc(), ed();
}));
//#endregion
//#region ../../node_modules/underscore/modules/wrap.js
function Yd(e, t) {
	return kd(t, e);
}
var Xd = n((() => {
	Ad();
}));
//#endregion
//#region ../../node_modules/underscore/modules/negate.js
function Zd(e) {
	return function() {
		return !e.apply(this, arguments);
	};
}
var Qd = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/compose.js
function $d() {
	var e = arguments, t = e.length - 1;
	return function() {
		for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
		return r;
	};
}
var ef = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/after.js
function tf(e, t) {
	return function() {
		if (--e < 1) return t.apply(this, arguments);
	};
}
var nf = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/before.js
function rf(e, t) {
	var n;
	return function() {
		return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
	};
}
var af = n((() => {})), of, sf = n((() => {
	Ad(), af(), of = kd(rf, 2);
}));
//#endregion
//#region ../../node_modules/underscore/modules/findKey.js
function cf(e, t, n) {
	t = Vu(t, n);
	for (var r = _l(e), i, a = 0, o = r.length; a < o; a++) if (i = r[a], t(e[i], i, e)) return i;
}
var lf = n((() => {
	Hu(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createPredicateIndexFinder.js
function uf(e) {
	return function(t, n, r) {
		n = Vu(n, r);
		for (var i = fl(t), a = e > 0 ? 0 : i - 1; a >= 0 && a < i; a += e) if (n(t[a], a, t)) return a;
		return -1;
	};
}
var df = n((() => {
	Hu(), pl();
})), ff, pf = n((() => {
	df(), ff = uf(1);
})), mf, hf = n((() => {
	df(), mf = uf(-1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/sortedIndex.js
function gf(e, t, n, r) {
	n = Vu(n, r, 1);
	for (var i = n(t), a = 0, o = fl(e); a < o;) {
		var s = Math.floor((a + o) / 2);
		n(e[s]) < i ? a = s + 1 : o = s;
	}
	return a;
}
var _f = n((() => {
	Hu(), pl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createIndexFinder.js
function vf(e, t, n) {
	return function(r, i, a) {
		var o = 0, s = fl(r);
		if (typeof a == "number") e > 0 ? o = a >= 0 ? a : Math.max(a + s, o) : s = a >= 0 ? Math.min(a + 1, s) : a + s + 1;
		else if (n && a && s) return a = n(r, i), r[a] === i ? a : -1;
		if (i !== i) return a = t(Bs.call(r, o, s), Xc), a >= 0 ? a + o : -1;
		for (a = e > 0 ? o : s - 1; a >= 0 && a < s; a += e) if (r[a] === i) return a;
		return -1;
	};
}
var yf = n((() => {
	pl(), Y(), Zc();
})), bf, xf = n((() => {
	_f(), pf(), yf(), bf = vf(1, ff, gf);
})), Sf, Cf = n((() => {
	hf(), yf(), Sf = vf(-1, mf);
}));
//#endregion
//#region ../../node_modules/underscore/modules/find.js
function wf(e, t, n) {
	var r = (Nd(e) ? ff : cf)(e, t, n);
	if (r !== void 0 && r !== -1) return e[r];
}
var Tf = n((() => {
	Pd(), pf(), lf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/findWhere.js
function Ef(e, t) {
	return wf(e, ju(t));
}
var Df = n((() => {
	Tf(), Mu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/each.js
function Of(e, t, n) {
	t = Fu(t, n);
	var r, i;
	if (Nd(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
	else {
		var a = _l(e);
		for (r = 0, i = a.length; r < i; r++) t(e[a[r]], a[r], e);
	}
	return e;
}
var kf = n((() => {
	Iu(), Pd(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/map.js
function Af(e, t, n) {
	t = Vu(t, n);
	for (var r = !Nd(e) && _l(e), i = (r || e).length, a = Array(i), o = 0; o < i; o++) {
		var s = r ? r[o] : o;
		a[o] = t(e[s], s, e);
	}
	return a;
}
var jf = n((() => {
	Hu(), Pd(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_createReduce.js
function Mf(e) {
	var t = function(t, n, r, i) {
		var a = !Nd(t) && _l(t), o = (a || t).length, s = e > 0 ? 0 : o - 1;
		for (i || (r = t[a ? a[s] : s], s += e); s >= 0 && s < o; s += e) {
			var c = a ? a[s] : s;
			r = n(r, t[c], c, t);
		}
		return r;
	};
	return function(e, n, r, i) {
		var a = arguments.length >= 3;
		return t(e, Fu(n, i, 4), r, a);
	};
}
var Nf = n((() => {
	Pd(), vl(), Iu();
})), Pf, Ff = n((() => {
	Nf(), Pf = Mf(1);
})), If, Lf = n((() => {
	Nf(), If = Mf(-1);
}));
//#endregion
//#region ../../node_modules/underscore/modules/filter.js
function Rf(e, t, n) {
	var r = [];
	return t = Vu(t, n), Of(e, function(e, n, i) {
		t(e, n, i) && r.push(e);
	}), r;
}
var zf = n((() => {
	Hu(), kf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/reject.js
function Bf(e, t, n) {
	return Rf(e, Zd(Vu(t)), n);
}
var Vf = n((() => {
	zf(), Qd(), Hu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/every.js
function Hf(e, t, n) {
	t = Vu(t, n);
	for (var r = !Nd(e) && _l(e), i = (r || e).length, a = 0; a < i; a++) {
		var o = r ? r[a] : a;
		if (!t(e[o], o, e)) return !1;
	}
	return !0;
}
var Uf = n((() => {
	Hu(), Pd(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/some.js
function Wf(e, t, n) {
	t = Vu(t, n);
	for (var r = !Nd(e) && _l(e), i = (r || e).length, a = 0; a < i; a++) {
		var o = r ? r[a] : a;
		if (t(e[o], o, e)) return !0;
	}
	return !1;
}
var Gf = n((() => {
	Hu(), Pd(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/contains.js
function Kf(e, t, n, r) {
	return Nd(e) || (e = Jl(e)), (typeof n != "number" || r) && (n = 0), bf(e, t, n) >= 0;
}
var qf = n((() => {
	Pd(), Yl(), xf();
})), Jf, Yf = n((() => {
	tc(), jc(), jf(), wu(), Su(), Jf = ec(function(e, t, n) {
		var r, i;
		return Ac(t) ? i = t : (t = xu(t), r = t.slice(0, -1), t = t[t.length - 1]), Af(e, function(e) {
			var a = i;
			if (!a) {
				if (r && r.length && (e = Cu(e, r)), e == null) return;
				a = e[t];
			}
			return a == null ? a : a.apply(e, n);
		});
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/pluck.js
function Xf(e, t) {
	return Af(e, Nu(t));
}
var Zf = n((() => {
	jf(), Pu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/where.js
function Qf(e, t) {
	return Rf(e, ju(t));
}
var $f = n((() => {
	zf(), Mu();
}));
//#endregion
//#region ../../node_modules/underscore/modules/max.js
function ep(e, t, n) {
	var r = -Infinity, i = -Infinity, a, o;
	if (t == null || typeof t == "number" && typeof e[0] != "object" && e != null) {
		e = Nd(e) ? e : Jl(e);
		for (var s = 0, c = e.length; s < c; s++) a = e[s], a != null && a > r && (r = a);
	} else t = Vu(t, n), Of(e, function(e, n, a) {
		o = t(e, n, a), (o > i || o === -Infinity && r === -Infinity) && (r = e, i = o);
	});
	return r;
}
var tp = n((() => {
	Pd(), Yl(), Hu(), kf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/min.js
function np(e, t, n) {
	var r = Infinity, i = Infinity, a, o;
	if (t == null || typeof t == "number" && typeof e[0] != "object" && e != null) {
		e = Nd(e) ? e : Jl(e);
		for (var s = 0, c = e.length; s < c; s++) a = e[s], a != null && a < r && (r = a);
	} else t = Vu(t, n), Of(e, function(e, n, a) {
		o = t(e, n, a), (o < i || o === Infinity && r === Infinity) && (r = e, i = o);
	});
	return r;
}
var rp = n((() => {
	Pd(), Yl(), Hu(), kf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/toArray.js
function ip(e) {
	return e ? Vc(e) ? Bs.call(e) : mc(e) ? e.match(ap) : Nd(e) ? Af(e, ku) : Jl(e) : [];
}
var ap, op = n((() => {
	Hc(), Y(), hc(), Pd(), jf(), Au(), Yl(), ap = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
}));
//#endregion
//#region ../../node_modules/underscore/modules/sample.js
function sp(e, t, n) {
	if (t == null || n) return Nd(e) || (e = Jl(e)), e[Zu(e.length - 1)];
	var r = ip(e), i = fl(r);
	t = Math.max(Math.min(t, i), 0);
	for (var a = i - 1, o = 0; o < t; o++) {
		var s = Zu(o, a), c = r[o];
		r[o] = r[s], r[s] = c;
	}
	return r.slice(0, t);
}
var cp = n((() => {
	Pd(), Yl(), pl(), Qu(), op();
}));
//#endregion
//#region ../../node_modules/underscore/modules/shuffle.js
function lp(e) {
	return sp(e, Infinity);
}
var up = n((() => {
	cp();
}));
//#endregion
//#region ../../node_modules/underscore/modules/sortBy.js
function dp(e, t, n) {
	var r = 0;
	return t = Vu(t, n), Xf(Af(e, function(e, n, i) {
		return {
			value: e,
			index: r++,
			criteria: t(e, n, i)
		};
	}).sort(function(e, t) {
		var n = e.criteria, r = t.criteria;
		if (n !== r) {
			if (n > r || n === void 0) return 1;
			if (n < r || r === void 0) return -1;
		}
		return e.index - t.index;
	}), "value");
}
var fp = n((() => {
	Hu(), Zf(), jf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_group.js
function pp(e, t) {
	return function(n, r, i) {
		var a = t ? [[], []] : {};
		return r = Vu(r, i), Of(n, function(t, i) {
			e(a, t, r(t, i, n));
		}), a;
	};
}
var mp = n((() => {
	Hu(), kf();
})), hp, gp = n((() => {
	mp(), Wc(), hp = pp(function(e, t, n) {
		Uc(e, n) ? e[n].push(t) : e[n] = [t];
	});
})), _p, vp = n((() => {
	mp(), _p = pp(function(e, t, n) {
		e[n] = t;
	});
})), yp, bp = n((() => {
	mp(), Wc(), yp = pp(function(e, t, n) {
		Uc(e, n) ? e[n]++ : e[n] = 1;
	});
})), xp, Sp = n((() => {
	mp(), xp = pp(function(e, t, n) {
		e[+!n].push(t);
	}, !0);
}));
//#endregion
//#region ../../node_modules/underscore/modules/size.js
function Cp(e) {
	return e == null ? 0 : Nd(e) ? e.length : _l(e).length;
}
var wp = n((() => {
	Pd(), vl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_keyInObj.js
function Tp(e, t, n) {
	return t in n;
}
var Ep = n((() => {})), Dp, Op = n((() => {
	tc(), jc(), Iu(), Al(), Ep(), Id(), Dp = ec(function(e, t) {
		var n = {}, r = t[0];
		if (e == null) return n;
		Ac(r) ? (t.length > 1 && (r = Fu(r, t[1])), t = kl(e)) : (r = Tp, t = Fd(t, !1, !1), e = Object(e));
		for (var i = 0, a = t.length; i < a; i++) {
			var o = t[i], s = e[o];
			r(s, o, e) && (n[o] = s);
		}
		return n;
	});
})), kp, Ap = n((() => {
	tc(), jc(), Qd(), jf(), Id(), qf(), Op(), kp = ec(function(e, t) {
		var n = t[0], r;
		return Ac(n) ? (n = Zd(n), t.length > 1 && (r = t[1])) : (t = Af(Fd(t, !1, !1), String), n = function(e, n) {
			return !Kf(t, n);
		}), Dp(e, n, r);
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/initial.js
function jp(e, t, n) {
	return Bs.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)));
}
var Mp = n((() => {
	Y();
}));
//#endregion
//#region ../../node_modules/underscore/modules/first.js
function Np(e, t, n) {
	return e == null || e.length < 1 ? t == null || n ? void 0 : [] : t == null || n ? e[0] : jp(e, e.length - t);
}
var Pp = n((() => {
	Mp();
}));
//#endregion
//#region ../../node_modules/underscore/modules/rest.js
function Fp(e, t, n) {
	return Bs.call(e, t == null || n ? 1 : t);
}
var Ip = n((() => {
	Y();
}));
//#endregion
//#region ../../node_modules/underscore/modules/last.js
function Lp(e, t, n) {
	return e == null || e.length < 1 ? t == null || n ? void 0 : [] : t == null || n ? e[e.length - 1] : Fp(e, Math.max(0, e.length - t));
}
var Rp = n((() => {
	Ip();
}));
//#endregion
//#region ../../node_modules/underscore/modules/compact.js
function zp(e) {
	return Rf(e, Boolean);
}
var Bp = n((() => {
	zf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/flatten.js
function Vp(e, t) {
	return Fd(e, t, !1);
}
var Hp = n((() => {
	Id();
})), Up, Wp = n((() => {
	tc(), Id(), zf(), qf(), Up = ec(function(e, t) {
		return t = Fd(t, !0, !0), Rf(e, function(e) {
			return !Kf(t, e);
		});
	});
})), Gp, Kp = n((() => {
	tc(), Wp(), Gp = ec(function(e, t) {
		return Up(e, t);
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/uniq.js
function qp(e, t, n, r) {
	cc(t) || (r = n, n = t, t = !1), n != null && (n = Vu(n, r));
	for (var i = [], a = [], o = 0, s = fl(e); o < s; o++) {
		var c = e[o], l = n ? n(c, o, e) : c;
		t && !n ? ((!o || a !== l) && i.push(c), a = l) : n ? Kf(a, l) || (a.push(l), i.push(c)) : Kf(i, c) || i.push(c);
	}
	return i;
}
var Jp = n((() => {
	lc(), Hu(), pl(), qf();
})), Yp, Xp = n((() => {
	tc(), Jp(), Id(), Yp = ec(function(e) {
		return qp(Fd(e, !0, !0));
	});
}));
//#endregion
//#region ../../node_modules/underscore/modules/intersection.js
function Zp(e) {
	for (var t = [], n = arguments.length, r = 0, i = fl(e); r < i; r++) {
		var a = e[r];
		if (!Kf(t, a)) {
			for (var o = 1; o < n && Kf(arguments[o], a); o++);
			o === n && t.push(a);
		}
	}
	return t;
}
var Qp = n((() => {
	pl(), qf();
}));
//#endregion
//#region ../../node_modules/underscore/modules/unzip.js
function $p(e) {
	for (var t = e && ep(e, fl).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = Xf(e, r);
	return n;
}
var em = n((() => {
	tp(), pl(), Zf();
})), tm, nm = n((() => {
	tc(), em(), tm = ec($p);
}));
//#endregion
//#region ../../node_modules/underscore/modules/object.js
function rm(e, t) {
	for (var n = {}, r = 0, i = fl(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
	return n;
}
var im = n((() => {
	pl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/range.js
function am(e, t, n) {
	t ?? (t = e || 0, e = 0), n ||= t < e ? -1 : 1;
	for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), a = 0; a < r; a++, e += n) i[a] = e;
	return i;
}
var om = n((() => {}));
//#endregion
//#region ../../node_modules/underscore/modules/chunk.js
function sm(e, t) {
	if (t == null || t < 1) return [];
	for (var n = [], r = 0, i = e.length; r < i;) n.push(Bs.call(e, r, r += t));
	return n;
}
var cm = n((() => {
	Y();
}));
//#endregion
//#region ../../node_modules/underscore/modules/_chainResult.js
function lm(e, t) {
	return e._chain ? X(t).chain() : t;
}
var um = n((() => {
	Cl();
}));
//#endregion
//#region ../../node_modules/underscore/modules/mixin.js
function dm(e) {
	return Of(eu(e), function(t) {
		var n = X[t] = e[t];
		X.prototype[t] = function() {
			var e = [this._wrapped];
			return zs.apply(e, arguments), lm(this, n.apply(X, e));
		};
	}), X;
}
var fm = n((() => {
	Cl(), kf(), tu(), Y(), um();
})), pm, mm = n((() => {
	Cl(), kf(), Y(), um(), Of([
		"pop",
		"push",
		"reverse",
		"shift",
		"sort",
		"splice",
		"unshift"
	], function(e) {
		var t = Is[e];
		X.prototype[e] = function() {
			var n = this._wrapped;
			return n != null && (t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0]), lm(this, n);
		};
	}), Of([
		"concat",
		"join",
		"slice"
	], function(e) {
		var t = Is[e];
		X.prototype[e] = function() {
			var e = this._wrapped;
			return e != null && (e = t.apply(e, arguments)), lm(this, e);
		};
	}), pm = X;
})), hm = /* @__PURE__ */ i({
	VERSION: () => Ps,
	after: () => tf,
	all: () => Hf,
	allKeys: () => kl,
	any: () => Wf,
	assign: () => ou,
	before: () => rf,
	bind: () => jd,
	bindAll: () => Ld,
	chain: () => Td,
	chunk: () => sm,
	clone: () => hu,
	collect: () => Af,
	compact: () => zp,
	compose: () => $d,
	constant: () => Qc,
	contains: () => Kf,
	countBy: () => yp,
	create: () => pu,
	debounce: () => qd,
	default: () => pm,
	defaults: () => cu,
	defer: () => Ud,
	delay: () => Vd,
	detect: () => wf,
	difference: () => Up,
	drop: () => Fp,
	each: () => Of,
	escape: () => ad,
	every: () => Hf,
	extend: () => iu,
	extendOwn: () => ou,
	filter: () => Rf,
	find: () => wf,
	findIndex: () => ff,
	findKey: () => cf,
	findLastIndex: () => mf,
	findWhere: () => Ef,
	first: () => Np,
	flatten: () => Vp,
	foldl: () => Pf,
	foldr: () => If,
	forEach: () => Of,
	functions: () => eu,
	get: () => Tu,
	groupBy: () => hp,
	has: () => Du,
	head: () => Np,
	identity: () => ku,
	include: () => Kf,
	includes: () => Kf,
	indexBy: () => _p,
	indexOf: () => bf,
	initial: () => jp,
	inject: () => Pf,
	intersection: () => Zp,
	invert: () => Ql,
	invoke: () => Jf,
	isArguments: () => Kc,
	isArray: () => Vc,
	isArrayBuffer: () => Ec,
	isBoolean: () => cc,
	isDataView: () => zc,
	isDate: () => vc,
	isElement: () => uc,
	isEmpty: () => yl,
	isEqual: () => El,
	isError: () => Sc,
	isFinite: () => Jc,
	isFunction: () => Ac,
	isMap: () => Bl,
	isMatch: () => xl,
	isNaN: () => Xc,
	isNull: () => ic,
	isNumber: () => gc,
	isObject: () => nc,
	isRegExp: () => bc,
	isSet: () => Wl,
	isString: () => mc,
	isSymbol: () => wc,
	isTypedArray: () => ul,
	isUndefined: () => oc,
	isWeakMap: () => Hl,
	isWeakSet: () => Kl,
	iteratee: () => zu,
	keys: () => _l,
	last: () => Lp,
	lastIndexOf: () => Sf,
	map: () => Af,
	mapObject: () => Uu,
	matcher: () => ju,
	matches: () => ju,
	max: () => ep,
	memoize: () => zd,
	methods: () => eu,
	min: () => np,
	mixin: () => dm,
	negate: () => Zd,
	noop: () => Gu,
	now: () => $u,
	object: () => rm,
	omit: () => kp,
	once: () => of,
	pairs: () => Xl,
	partial: () => kd,
	partition: () => xp,
	pick: () => Dp,
	pluck: () => Xf,
	property: () => Nu,
	propertyOf: () => qu,
	random: () => Zu,
	range: () => am,
	reduce: () => Pf,
	reduceRight: () => If,
	reject: () => Bf,
	rest: () => Fp,
	restArguments: () => ec,
	result: () => bd,
	sample: () => sp,
	select: () => Rf,
	shuffle: () => lp,
	size: () => Cp,
	some: () => Wf,
	sortBy: () => dp,
	sortedIndex: () => gf,
	tail: () => Fp,
	take: () => Np,
	tap: () => _u,
	template: () => md,
	templateSettings: () => dd,
	throttle: () => Gd,
	times: () => Yu,
	toArray: () => ip,
	toPath: () => yu,
	transpose: () => $p,
	unescape: () => ld,
	union: () => Yp,
	uniq: () => qp,
	unique: () => qp,
	uniqueId: () => Sd,
	unzip: () => $p,
	values: () => Jl,
	where: () => Qf,
	without: () => Gp,
	wrap: () => Yd,
	zip: () => tm
}), gm = n((() => {
	Y(), tc(), rc(), ac(), sc(), lc(), dc(), hc(), _c(), yc(), xc(), Cc(), Tc(), Dc(), Bc(), Hc(), jc(), qc(), Yc(), Zc(), dl(), bl(), Sl(), Ol(), Vl(), Ul(), Gl(), ql(), vl(), Al(), Yl(), Zl(), $l(), tu(), au(), su(), lu(), mu(), gu(), vu(), Eu(), Ou(), Wu(), Au(), $c(), Ku(), bu(), Pu(), Ju(), Mu(), Xu(), Qu(), ed(), od(), ud(), fd(), yd(), xd(), wd(), Ed(), Bu(), Ad(), Md(), Rd(), Bd(), Hd(), Wd(), Kd(), Jd(), Xd(), Qd(), ef(), nf(), af(), sf(), lf(), pf(), hf(), _f(), xf(), Cf(), Tf(), Df(), kf(), jf(), Ff(), Lf(), zf(), Vf(), Uf(), Gf(), qf(), Yf(), Zf(), $f(), tp(), rp(), up(), cp(), fp(), gp(), vp(), bp(), Sp(), op(), wp(), Op(), Ap(), Pp(), Mp(), Rp(), Ip(), Bp(), Hp(), Kp(), Jp(), Xp(), Qp(), Wp(), em(), nm(), im(), om(), cm(), fm(), mm();
})), _m, vm = n((() => {
	gm(), _m = dm(hm), _m._ = _m;
})), Z = /* @__PURE__ */ i({
	VERSION: () => Ps,
	after: () => tf,
	all: () => Hf,
	allKeys: () => kl,
	any: () => Wf,
	assign: () => ou,
	before: () => rf,
	bind: () => jd,
	bindAll: () => Ld,
	chain: () => Td,
	chunk: () => sm,
	clone: () => hu,
	collect: () => Af,
	compact: () => zp,
	compose: () => $d,
	constant: () => Qc,
	contains: () => Kf,
	countBy: () => yp,
	create: () => pu,
	debounce: () => qd,
	default: () => _m,
	defaults: () => cu,
	defer: () => Ud,
	delay: () => Vd,
	detect: () => wf,
	difference: () => Up,
	drop: () => Fp,
	each: () => Of,
	escape: () => ad,
	every: () => Hf,
	extend: () => iu,
	extendOwn: () => ou,
	filter: () => Rf,
	find: () => wf,
	findIndex: () => ff,
	findKey: () => cf,
	findLastIndex: () => mf,
	findWhere: () => Ef,
	first: () => Np,
	flatten: () => Vp,
	foldl: () => Pf,
	foldr: () => If,
	forEach: () => Of,
	functions: () => eu,
	get: () => Tu,
	groupBy: () => hp,
	has: () => Du,
	head: () => Np,
	identity: () => ku,
	include: () => Kf,
	includes: () => Kf,
	indexBy: () => _p,
	indexOf: () => bf,
	initial: () => jp,
	inject: () => Pf,
	intersection: () => Zp,
	invert: () => Ql,
	invoke: () => Jf,
	isArguments: () => Kc,
	isArray: () => Vc,
	isArrayBuffer: () => Ec,
	isBoolean: () => cc,
	isDataView: () => zc,
	isDate: () => vc,
	isElement: () => uc,
	isEmpty: () => yl,
	isEqual: () => El,
	isError: () => Sc,
	isFinite: () => Jc,
	isFunction: () => Ac,
	isMap: () => Bl,
	isMatch: () => xl,
	isNaN: () => Xc,
	isNull: () => ic,
	isNumber: () => gc,
	isObject: () => nc,
	isRegExp: () => bc,
	isSet: () => Wl,
	isString: () => mc,
	isSymbol: () => wc,
	isTypedArray: () => ul,
	isUndefined: () => oc,
	isWeakMap: () => Hl,
	isWeakSet: () => Kl,
	iteratee: () => zu,
	keys: () => _l,
	last: () => Lp,
	lastIndexOf: () => Sf,
	map: () => Af,
	mapObject: () => Uu,
	matcher: () => ju,
	matches: () => ju,
	max: () => ep,
	memoize: () => zd,
	methods: () => eu,
	min: () => np,
	mixin: () => dm,
	negate: () => Zd,
	noop: () => Gu,
	now: () => $u,
	object: () => rm,
	omit: () => kp,
	once: () => of,
	pairs: () => Xl,
	partial: () => kd,
	partition: () => xp,
	pick: () => Dp,
	pluck: () => Xf,
	property: () => Nu,
	propertyOf: () => qu,
	random: () => Zu,
	range: () => am,
	reduce: () => Pf,
	reduceRight: () => If,
	reject: () => Bf,
	rest: () => Fp,
	restArguments: () => ec,
	result: () => bd,
	sample: () => sp,
	select: () => Rf,
	shuffle: () => lp,
	size: () => Cp,
	some: () => Wf,
	sortBy: () => dp,
	sortedIndex: () => gf,
	tail: () => Fp,
	take: () => Np,
	tap: () => _u,
	template: () => md,
	templateSettings: () => dd,
	throttle: () => Gd,
	times: () => Yu,
	toArray: () => ip,
	toPath: () => yu,
	transpose: () => $p,
	unescape: () => ld,
	union: () => Yp,
	uniq: () => qp,
	unique: () => qp,
	uniqueId: () => Sd,
	unzip: () => $p,
	values: () => Jl,
	where: () => Qf,
	without: () => Gp,
	wrap: () => Yd,
	zip: () => tm
}), Q = n((() => {
	vm(), gm();
})), ym = /* @__PURE__ */ a(((e, t) => {
	var n = (function() {
		return this === void 0;
	})();
	if (n) t.exports = {
		freeze: Object.freeze,
		defineProperty: Object.defineProperty,
		getDescriptor: Object.getOwnPropertyDescriptor,
		keys: Object.keys,
		names: Object.getOwnPropertyNames,
		getPrototypeOf: Object.getPrototypeOf,
		isArray: Array.isArray,
		isES5: n,
		propertyIsWritable: function(e, t) {
			var n = Object.getOwnPropertyDescriptor(e, t);
			return !!(!n || n.writable || n.set);
		}
	};
	else {
		var r = {}.hasOwnProperty, i = {}.toString, a = {}.constructor.prototype, o = function(e) {
			var t = [];
			for (var n in e) r.call(e, n) && t.push(n);
			return t;
		};
		t.exports = {
			isArray: function(e) {
				try {
					return i.call(e) === "[object Array]";
				} catch {
					return !1;
				}
			},
			keys: o,
			names: o,
			defineProperty: function(e, t, n) {
				return e[t] = n.value, e;
			},
			getDescriptor: function(e, t) {
				return { value: e[t] };
			},
			freeze: function(e) {
				return e;
			},
			getPrototypeOf: function(e) {
				try {
					return Object(e).constructor.prototype;
				} catch {
					return a;
				}
			},
			isES5: n,
			propertyIsWritable: function() {
				return !0;
			}
		};
	}
})), $ = /* @__PURE__ */ a(((e, t) => {
	var n = ym(), r = typeof navigator > "u", i = { e: {} }, a, o = typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : e === void 0 ? null : e;
	function s() {
		try {
			var e = a;
			return a = null, e.apply(this, arguments);
		} catch (e) {
			return i.e = e, i;
		}
	}
	function c(e) {
		return a = e, s;
	}
	var l = function(e, t) {
		var n = {}.hasOwnProperty;
		function r() {
			for (var r in this.constructor = e, this.constructor$ = t, t.prototype) n.call(t.prototype, r) && r.charAt(r.length - 1) !== "$" && (this[r + "$"] = t.prototype[r]);
		}
		return r.prototype = t.prototype, e.prototype = new r(), e.prototype;
	};
	function u(e) {
		return e == null || e === !0 || e === !1 || typeof e == "string" || typeof e == "number";
	}
	function d(e) {
		return typeof e == "function" || typeof e == "object" && !!e;
	}
	function f(e) {
		return u(e) ? Error(w(e)) : e;
	}
	function p(e, t) {
		for (var n = e.length, r = Array(n + 1), i = 0; i < n; ++i) r[i] = e[i];
		return r[i] = t, r;
	}
	function m(e, t, r) {
		if (n.isES5) {
			var i = Object.getOwnPropertyDescriptor(e, t);
			if (i != null) return i.get == null && i.set == null ? i.value : r;
		} else return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
	}
	function h(e, t, r) {
		if (u(e)) return e;
		var i = {
			value: r,
			configurable: !0,
			enumerable: !1,
			writable: !0
		};
		return n.defineProperty(e, t, i), e;
	}
	function g(e) {
		throw e;
	}
	var _ = (function() {
		var e = [
			Array.prototype,
			Object.prototype,
			Function.prototype
		], t = function(t) {
			for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
			return !1;
		};
		if (n.isES5) {
			var r = Object.getOwnPropertyNames;
			return function(e) {
				for (var i = [], a = Object.create(null); e != null && !t(e);) {
					var o;
					try {
						o = r(e);
					} catch {
						return i;
					}
					for (var s = 0; s < o.length; ++s) {
						var c = o[s];
						if (!a[c]) {
							a[c] = !0;
							var l = Object.getOwnPropertyDescriptor(e, c);
							l != null && l.get == null && l.set == null && i.push(c);
						}
					}
					e = n.getPrototypeOf(e);
				}
				return i;
			};
		}
		var i = {}.hasOwnProperty;
		return function(n) {
			if (t(n)) return [];
			var r = [];
			enumeration: for (var a in n) if (i.call(n, a)) r.push(a);
			else {
				for (var o = 0; o < e.length; ++o) if (i.call(e[o], a)) continue enumeration;
				r.push(a);
			}
			return r;
		};
	})(), v = /this\s*\.\s*\S+\s*=/;
	function y(e) {
		try {
			if (typeof e == "function") {
				var t = n.names(e.prototype), r = n.isES5 && t.length > 1, i = t.length > 0 && (t.length !== 1 || t[0] !== "constructor"), a = v.test(e + "") && n.names(e).length > 0;
				if (r || i || a) return !0;
			}
			return !1;
		} catch {
			return !1;
		}
	}
	function b(e) {
		function t() {}
		t.prototype = e;
		for (var n = 8; n--;) new t();
		return e;
	}
	var x = /^[a-z$_][a-z$_0-9]*$/i;
	function S(e) {
		return x.test(e);
	}
	function C(e, t, n) {
		for (var r = Array(e), i = 0; i < e; ++i) r[i] = t + i + n;
		return r;
	}
	function w(e) {
		try {
			return e + "";
		} catch {
			return "[no string representation]";
		}
	}
	function T(e) {
		return typeof e == "object" && !!e && typeof e.message == "string" && typeof e.name == "string";
	}
	function E(e) {
		try {
			h(e, "isOperational", !0);
		} catch {}
	}
	function D(e) {
		return e == null ? !1 : e instanceof Error.__BluebirdErrorTypes__.OperationalError || e.isOperational === !0;
	}
	function O(e) {
		return T(e) && n.propertyIsWritable(e, "stack");
	}
	var k = (function() {
		return "stack" in /* @__PURE__ */ Error() ? function(e) {
			return O(e) ? e : Error(w(e));
		} : function(e) {
			if (O(e)) return e;
			try {
				throw Error(w(e));
			} catch (e) {
				return e;
			}
		};
	})();
	function A(e) {
		return {}.toString.call(e);
	}
	function j(e, t, r) {
		for (var i = n.names(e), a = 0; a < i.length; ++a) {
			var o = i[a];
			if (r(o)) try {
				n.defineProperty(t, o, n.getDescriptor(e, o));
			} catch {}
		}
	}
	var M = function(e) {
		return n.isArray(e) ? e : null;
	};
	if (typeof Symbol < "u" && Symbol.iterator) {
		var N = typeof Array.from == "function" ? function(e) {
			return Array.from(e);
		} : function(e) {
			for (var t = [], n = e[Symbol.iterator](), r; !(r = n.next()).done;) t.push(r.value);
			return t;
		};
		M = function(e) {
			return n.isArray(e) ? e : e != null && typeof e[Symbol.iterator] == "function" ? N(e) : null;
		};
	}
	var P = typeof process < "u" && A(process).toLowerCase() === "[object process]", F = typeof process < "u" && process.env !== void 0;
	function I(e) {
		return F ? process.env[e] : void 0;
	}
	function L() {
		if (typeof Promise == "function") try {
			var e = new Promise(function() {});
			if ({}.toString.call(e) === "[object Promise]") return Promise;
		} catch {}
	}
	function R(e, t) {
		return e.bind(t);
	}
	var z = {
		isClass: y,
		isIdentifier: S,
		inheritedDataKeys: _,
		getDataPropertyOrDefault: m,
		thrower: g,
		isArray: n.isArray,
		asArray: M,
		notEnumerableProp: h,
		isPrimitive: u,
		isObject: d,
		isError: T,
		canEvaluate: r,
		errorObj: i,
		tryCatch: c,
		inherits: l,
		withAppended: p,
		maybeWrapAsError: f,
		toFastProperties: b,
		filledRange: C,
		toString: w,
		canAttachTrace: O,
		ensureErrorObject: k,
		originatesFromRejection: D,
		markAsOriginatingFromRejection: E,
		classString: A,
		copyDescriptors: j,
		hasDevTools: typeof chrome < "u" && chrome && typeof chrome.loadTimes == "function",
		isNode: P,
		hasEnvVariables: F,
		env: I,
		global: o,
		getNativePromise: L,
		domainBind: R
	};
	z.isRecentNode = z.isNode && (function() {
		var e = process.versions.node.split(".").map(Number);
		return e[0] === 0 && e[1] > 10 || e[0] > 0;
	})(), z.isNode && z.toFastProperties(process);
	try {
		throw Error();
	} catch (e) {
		z.lastLineError = e;
	}
	t.exports = z;
})), bm = /* @__PURE__ */ a(((e, t) => {
	var n = $(), r, i = function() {
		throw Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
	}, a = n.getNativePromise();
	if (n.isNode && typeof MutationObserver > "u") {
		var o = global.setImmediate, s = process.nextTick;
		r = n.isRecentNode ? function(e) {
			o.call(global, e);
		} : function(e) {
			s.call(process, e);
		};
	} else if (typeof a == "function" && typeof a.resolve == "function") {
		var c = a.resolve();
		r = function(e) {
			c.then(e);
		};
	} else r = typeof MutationObserver < "u" && !(typeof window < "u" && window.navigator && (window.navigator.standalone || window.cordova)) ? (function() {
		var e = document.createElement("div"), t = { attributes: !0 }, n = !1, r = document.createElement("div");
		new MutationObserver(function() {
			e.classList.toggle("foo"), n = !1;
		}).observe(r, t);
		var i = function() {
			n || (n = !0, r.classList.toggle("foo"));
		};
		return function(n) {
			var r = new MutationObserver(function() {
				r.disconnect(), n();
			});
			r.observe(e, t), i();
		};
	})() : typeof setImmediate < "u" ? function(e) {
		setImmediate(e);
	} : typeof setTimeout < "u" ? function(e) {
		setTimeout(e, 0);
	} : i;
	t.exports = r;
})), xm = /* @__PURE__ */ a(((e, t) => {
	function n(e, t, n, r, i) {
		for (var a = 0; a < i; ++a) n[a + r] = e[a + t], e[a + t] = void 0;
	}
	function r(e) {
		this._capacity = e, this._length = 0, this._front = 0;
	}
	r.prototype._willBeOverCapacity = function(e) {
		return this._capacity < e;
	}, r.prototype._pushOne = function(e) {
		var t = this.length();
		this._checkCapacity(t + 1);
		var n = this._front + t & this._capacity - 1;
		this[n] = e, this._length = t + 1;
	}, r.prototype.push = function(e, t, n) {
		var r = this.length() + 3;
		if (this._willBeOverCapacity(r)) {
			this._pushOne(e), this._pushOne(t), this._pushOne(n);
			return;
		}
		var i = this._front + r - 3;
		this._checkCapacity(r);
		var a = this._capacity - 1;
		this[i + 0 & a] = e, this[i + 1 & a] = t, this[i + 2 & a] = n, this._length = r;
	}, r.prototype.shift = function() {
		var e = this._front, t = this[e];
		return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, t;
	}, r.prototype.length = function() {
		return this._length;
	}, r.prototype._checkCapacity = function(e) {
		this._capacity < e && this._resizeTo(this._capacity << 1);
	}, r.prototype._resizeTo = function(e) {
		var t = this._capacity;
		this._capacity = e;
		var r = this._front + this._length & t - 1;
		n(this, 0, this, t, r);
	}, t.exports = r;
})), Sm = /* @__PURE__ */ a(((e, t) => {
	var n;
	try {
		throw Error();
	} catch (e) {
		n = e;
	}
	var r = bm(), i = xm(), a = $();
	function o() {
		this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new i(16), this._normalQueue = new i(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
		var e = this;
		this.drainQueues = function() {
			e._drainQueues();
		}, this._schedule = r;
	}
	o.prototype.setScheduler = function(e) {
		var t = this._schedule;
		return this._schedule = e, this._customScheduler = !0, t;
	}, o.prototype.hasCustomScheduler = function() {
		return this._customScheduler;
	}, o.prototype.enableTrampoline = function() {
		this._trampolineEnabled = !0;
	}, o.prototype.disableTrampolineIfNecessary = function() {
		a.hasDevTools && (this._trampolineEnabled = !1);
	}, o.prototype.haveItemsQueued = function() {
		return this._isTickUsed || this._haveDrainedQueues;
	}, o.prototype.fatalError = function(e, t) {
		t ? (process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), process.exit(2)) : this.throwLater(e);
	}, o.prototype.throwLater = function(e, t) {
		if (arguments.length === 1 && (t = e, e = function() {
			throw t;
		}), typeof setTimeout < "u") setTimeout(function() {
			e(t);
		}, 0);
		else try {
			this._schedule(function() {
				e(t);
			});
		} catch {
			throw Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
		}
	};
	function s(e, t, n) {
		this._lateQueue.push(e, t, n), this._queueTick();
	}
	function c(e, t, n) {
		this._normalQueue.push(e, t, n), this._queueTick();
	}
	function l(e) {
		this._normalQueue._pushOne(e), this._queueTick();
	}
	a.hasDevTools ? (o.prototype.invokeLater = function(e, t, n) {
		this._trampolineEnabled ? s.call(this, e, t, n) : this._schedule(function() {
			setTimeout(function() {
				e.call(t, n);
			}, 100);
		});
	}, o.prototype.invoke = function(e, t, n) {
		this._trampolineEnabled ? c.call(this, e, t, n) : this._schedule(function() {
			e.call(t, n);
		});
	}, o.prototype.settlePromises = function(e) {
		this._trampolineEnabled ? l.call(this, e) : this._schedule(function() {
			e._settlePromises();
		});
	}) : (o.prototype.invokeLater = s, o.prototype.invoke = c, o.prototype.settlePromises = l), o.prototype._drainQueue = function(e) {
		for (; e.length() > 0;) {
			var t = e.shift();
			if (typeof t != "function") {
				t._settlePromises();
				continue;
			}
			var n = e.shift(), r = e.shift();
			t.call(n, r);
		}
	}, o.prototype._drainQueues = function() {
		this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue);
	}, o.prototype._queueTick = function() {
		this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
	}, o.prototype._reset = function() {
		this._isTickUsed = !1;
	}, t.exports = o, t.exports.firstLineError = n;
})), Cm = /* @__PURE__ */ a(((e, t) => {
	var n = ym(), r = n.freeze, i = $(), a = i.inherits, o = i.notEnumerableProp;
	function s(e, t) {
		function n(r) {
			if (!(this instanceof n)) return new n(r);
			o(this, "message", typeof r == "string" ? r : t), o(this, "name", e), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
		}
		return a(n, Error), n;
	}
	var c, l, u = s("Warning", "warning"), d = s("CancellationError", "cancellation error"), f = s("TimeoutError", "timeout error"), p = s("AggregateError", "aggregate error");
	try {
		c = TypeError, l = RangeError;
	} catch {
		c = s("TypeError", "type error"), l = s("RangeError", "range error");
	}
	for (var m = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), h = 0; h < m.length; ++h) typeof Array.prototype[m[h]] == "function" && (p.prototype[m[h]] = Array.prototype[m[h]]);
	n.defineProperty(p.prototype, "length", {
		value: 0,
		configurable: !1,
		writable: !0,
		enumerable: !0
	}), p.prototype.isOperational = !0;
	var g = 0;
	p.prototype.toString = function() {
		var e = Array(g * 4 + 1).join(" "), t = "\n" + e + "AggregateError of:\n";
		g++, e = Array(g * 4 + 1).join(" ");
		for (var n = 0; n < this.length; ++n) {
			for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), a = 0; a < i.length; ++a) i[a] = e + i[a];
			r = i.join("\n"), t += r + "\n";
		}
		return g--, t;
	};
	function _(e) {
		if (!(this instanceof _)) return new _(e);
		o(this, "name", "OperationalError"), o(this, "message", e), this.cause = e, this.isOperational = !0, e instanceof Error ? (o(this, "message", e.message), o(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
	}
	a(_, Error);
	var v = Error.__BluebirdErrorTypes__;
	v || (v = r({
		CancellationError: d,
		TimeoutError: f,
		OperationalError: _,
		RejectionError: _,
		AggregateError: p
	}), n.defineProperty(Error, "__BluebirdErrorTypes__", {
		value: v,
		writable: !1,
		enumerable: !1,
		configurable: !1
	})), t.exports = {
		Error,
		TypeError: c,
		RangeError: l,
		CancellationError: v.CancellationError,
		OperationalError: v.OperationalError,
		TimeoutError: v.TimeoutError,
		AggregateError: v.AggregateError,
		Warning: u
	};
})), wm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		var n = $(), r = n.errorObj, i = n.isObject;
		function a(n, a) {
			if (i(n)) {
				if (n instanceof e) return n;
				var o = s(n);
				if (o === r) {
					a && a._pushContext();
					var c = e.reject(o.e);
					return a && a._popContext(), c;
				}
				if (typeof o == "function") {
					if (l(n)) {
						var c = new e(t);
						return n._then(c._fulfill, c._reject, void 0, c, null), c;
					}
					return u(n, o, a);
				}
			}
			return n;
		}
		function o(e) {
			return e.then;
		}
		function s(e) {
			try {
				return o(e);
			} catch (e) {
				return r.e = e, r;
			}
		}
		var c = {}.hasOwnProperty;
		function l(e) {
			try {
				return c.call(e, "_promise0");
			} catch {
				return !1;
			}
		}
		function u(i, a, o) {
			var s = new e(t), c = s;
			o && o._pushContext(), s._captureStackTrace(), o && o._popContext();
			var l = !0, u = n.tryCatch(a).call(i, d, f);
			l = !1, s && u === r && (s._rejectCallback(u.e, !0, !0), s = null);
			function d(e) {
				s &&= (s._resolveCallback(e), null);
			}
			function f(e) {
				s &&= (s._rejectCallback(e, l, !0), null);
			}
			return c;
		}
		return a;
	};
})), Tm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i) {
		var a = $();
		a.isArray;
		function o(e) {
			switch (e) {
				case -2: return [];
				case -3: return {};
			}
		}
		function s(n) {
			var r = this._promise = new e(t);
			n instanceof e && r._propagateFrom(n, 3), r._setOnCancel(this), this._values = n, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
		}
		return a.inherits(s, i), s.prototype.length = function() {
			return this._length;
		}, s.prototype.promise = function() {
			return this._promise;
		}, s.prototype._init = function t(i, s) {
			var c = n(this._values, this._promise);
			if (c instanceof e) {
				c = c._target();
				var l = c._bitField;
				if (this._values = c, !(l & 50397184)) return this._promise._setAsyncGuaranteed(), c._then(t, this._reject, void 0, this, s);
				if (l & 33554432) c = c._value();
				else if (l & 16777216) return this._reject(c._reason());
				else return this._cancel();
			}
			if (c = a.asArray(c), c === null) {
				var u = r("expecting an array or an iterable object but got " + a.classString(c)).reason();
				this._promise._rejectCallback(u, !1);
				return;
			}
			if (c.length === 0) {
				s === -5 ? this._resolveEmptyArray() : this._resolve(o(s));
				return;
			}
			this._iterate(c);
		}, s.prototype._iterate = function(t) {
			var r = this.getActualLength(t.length);
			this._length = r, this._values = this.shouldCopyValues() ? Array(r) : this._values;
			for (var i = this._promise, a = !1, o = null, s = 0; s < r; ++s) {
				var c = n(t[s], i);
				c instanceof e ? (c = c._target(), o = c._bitField) : o = null, a ? o !== null && c.suppressUnhandledRejections() : o === null ? a = this._promiseFulfilled(c, s) : o & 50397184 ? a = o & 33554432 ? this._promiseFulfilled(c._value(), s) : o & 16777216 ? this._promiseRejected(c._reason(), s) : this._promiseCancelled(s) : (c._proxy(this, s), this._values[s] = c);
			}
			a || i._setAsyncGuaranteed();
		}, s.prototype._isResolved = function() {
			return this._values === null;
		}, s.prototype._resolve = function(e) {
			this._values = null, this._promise._fulfill(e);
		}, s.prototype._cancel = function() {
			!this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
		}, s.prototype._reject = function(e) {
			this._values = null, this._promise._rejectCallback(e, !1);
		}, s.prototype._promiseFulfilled = function(e, t) {
			return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), !0);
		}, s.prototype._promiseCancelled = function() {
			return this._cancel(), !0;
		}, s.prototype._promiseRejected = function(e) {
			return this._totalResolved++, this._reject(e), !0;
		}, s.prototype._resultCancelled = function() {
			if (!this._isResolved()) {
				var t = this._values;
				if (this._cancel(), t instanceof e) t.cancel();
				else for (var n = 0; n < t.length; ++n) t[n] instanceof e && t[n].cancel();
			}
		}, s.prototype.shouldCopyValues = function() {
			return !0;
		}, s.prototype.getActualLength = function(e) {
			return e;
		}, s;
	};
})), Em = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		var t = !1, n = [];
		e.prototype._promiseCreated = function() {}, e.prototype._pushContext = function() {}, e.prototype._popContext = function() {
			return null;
		}, e._peekContext = e.prototype._peekContext = function() {};
		function r() {
			this._trace = new r.CapturedTrace(a());
		}
		r.prototype._pushContext = function() {
			this._trace !== void 0 && (this._trace._promiseCreated = null, n.push(this._trace));
		}, r.prototype._popContext = function() {
			if (this._trace !== void 0) {
				var e = n.pop(), t = e._promiseCreated;
				return e._promiseCreated = null, t;
			}
			return null;
		};
		function i() {
			if (t) return new r();
		}
		function a() {
			var e = n.length - 1;
			if (e >= 0) return n[e];
		}
		return r.CapturedTrace = null, r.create = i, r.deactivateLongStackTraces = function() {}, r.activateLongStackTraces = function() {
			var n = e.prototype._pushContext, i = e.prototype._popContext, o = e._peekContext, s = e.prototype._peekContext, c = e.prototype._promiseCreated;
			r.deactivateLongStackTraces = function() {
				e.prototype._pushContext = n, e.prototype._popContext = i, e._peekContext = o, e.prototype._peekContext = s, e.prototype._promiseCreated = c, t = !1;
			}, t = !0, e.prototype._pushContext = r.prototype._pushContext, e.prototype._popContext = r.prototype._popContext, e._peekContext = e.prototype._peekContext = a, e.prototype._promiseCreated = function() {
				var e = this._peekContext();
				e && e._promiseCreated == null && (e._promiseCreated = this);
			};
		}, r;
	};
})), Dm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		var n = e._getDomain, r = e._async, i = Cm().Warning, a = $(), o = a.canAttachTrace, s, c, l = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, u = /\((?:timers\.js):\d+:\d+\)/, d = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, f = null, p = null, m = !1, h, g = !(a.env("BLUEBIRD_DEBUG") == 0 || !a.env("BLUEBIRD_DEBUG") && a.env("NODE_ENV") !== "development"), _ = !(a.env("BLUEBIRD_WARNINGS") == 0 || !g && !a.env("BLUEBIRD_WARNINGS")), v = !(a.env("BLUEBIRD_LONG_STACK_TRACES") == 0 || !g && !a.env("BLUEBIRD_LONG_STACK_TRACES")), y = a.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (_ || !!a.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
		e.prototype.suppressUnhandledRejections = function() {
			var e = this._target();
			e._bitField = e._bitField & -1048577 | 524288;
		}, e.prototype._ensurePossibleRejectionHandled = function() {
			this._bitField & 524288 || (this._setRejectionIsUnhandled(), r.invokeLater(this._notifyUnhandledRejection, this, void 0));
		}, e.prototype._notifyUnhandledRejectionIsHandled = function() {
			ie("rejectionHandled", s, void 0, this);
		}, e.prototype._setReturnedNonUndefined = function() {
			this._bitField |= 268435456;
		}, e.prototype._returnedNonUndefined = function() {
			return !!(this._bitField & 268435456);
		}, e.prototype._notifyUnhandledRejection = function() {
			if (this._isRejectionUnhandled()) {
				var e = this._settledValue();
				this._setUnhandledRejectionIsNotified(), ie("unhandledRejection", c, e, this);
			}
		}, e.prototype._setUnhandledRejectionIsNotified = function() {
			this._bitField |= 262144;
		}, e.prototype._unsetUnhandledRejectionIsNotified = function() {
			this._bitField &= -262145;
		}, e.prototype._isUnhandledRejectionNotified = function() {
			return (this._bitField & 262144) > 0;
		}, e.prototype._setRejectionIsUnhandled = function() {
			this._bitField |= 1048576;
		}, e.prototype._unsetRejectionIsUnhandled = function() {
			this._bitField &= -1048577, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
		}, e.prototype._isRejectionUnhandled = function() {
			return (this._bitField & 1048576) > 0;
		}, e.prototype._warn = function(e, t, n) {
			return B(e, t, n || this);
		}, e.onPossiblyUnhandledRejection = function(e) {
			var t = n();
			c = typeof e == "function" ? t === null ? e : a.domainBind(t, e) : void 0;
		}, e.onUnhandledRejectionHandled = function(e) {
			var t = n();
			s = typeof e == "function" ? t === null ? e : a.domainBind(t, e) : void 0;
		};
		var b = function() {};
		e.longStackTraces = function() {
			if (r.haveItemsQueued() && !W.longStackTraces) throw Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
			if (!W.longStackTraces && se()) {
				var n = e.prototype._captureStackTrace, i = e.prototype._attachExtraTrace;
				W.longStackTraces = !0, b = function() {
					if (r.haveItemsQueued() && !W.longStackTraces) throw Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
					e.prototype._captureStackTrace = n, e.prototype._attachExtraTrace = i, t.deactivateLongStackTraces(), r.enableTrampoline(), W.longStackTraces = !1;
				}, e.prototype._captureStackTrace = I, e.prototype._attachExtraTrace = L, t.activateLongStackTraces(), r.disableTrampolineIfNecessary();
			}
		}, e.hasLongStackTraces = function() {
			return W.longStackTraces && se();
		};
		var x = (function() {
			try {
				if (typeof CustomEvent == "function") {
					var e = new CustomEvent("CustomEvent");
					return a.global.dispatchEvent(e), function(e, t) {
						var n = new CustomEvent(e.toLowerCase(), {
							detail: t,
							cancelable: !0
						});
						return !a.global.dispatchEvent(n);
					};
				}
				if (typeof Event == "function") {
					var e = new Event("CustomEvent");
					return a.global.dispatchEvent(e), function(e, t) {
						var n = new Event(e.toLowerCase(), { cancelable: !0 });
						return n.detail = t, !a.global.dispatchEvent(n);
					};
				}
				var e = document.createEvent("CustomEvent");
				return e.initCustomEvent("testingtheevent", !1, !0, {}), a.global.dispatchEvent(e), function(e, t) {
					var n = document.createEvent("CustomEvent");
					return n.initCustomEvent(e.toLowerCase(), !1, !0, t), !a.global.dispatchEvent(n);
				};
			} catch {}
			return function() {
				return !1;
			};
		})(), S = (function() {
			return a.isNode ? function() {
				return process.emit.apply(process, arguments);
			} : a.global ? function(e) {
				var t = "on" + e.toLowerCase(), n = a.global[t];
				return n ? (n.apply(a.global, [].slice.call(arguments, 1)), !0) : !1;
			} : function() {
				return !1;
			};
		})();
		function C(e, t) {
			return { promise: t };
		}
		var w = {
			promiseCreated: C,
			promiseFulfilled: C,
			promiseRejected: C,
			promiseResolved: C,
			promiseCancelled: C,
			promiseChained: function(e, t, n) {
				return {
					promise: t,
					child: n
				};
			},
			warning: function(e, t) {
				return { warning: t };
			},
			unhandledRejection: function(e, t, n) {
				return {
					reason: t,
					promise: n
				};
			},
			rejectionHandled: C
		}, T = function(e) {
			var t = !1;
			try {
				t = S.apply(null, arguments);
			} catch (e) {
				r.throwLater(e), t = !0;
			}
			var n = !1;
			try {
				n = x(e, w[e].apply(null, arguments));
			} catch (e) {
				r.throwLater(e), n = !0;
			}
			return n || t;
		};
		e.config = function(t) {
			if (t = Object(t), "longStackTraces" in t && (t.longStackTraces ? e.longStackTraces() : !t.longStackTraces && e.hasLongStackTraces() && b()), "warnings" in t) {
				var n = t.warnings;
				W.warnings = !!n, y = W.warnings, a.isObject(n) && "wForgottenReturn" in n && (y = !!n.wForgottenReturn);
			}
			if ("cancellation" in t && t.cancellation && !W.cancellation) {
				if (r.haveItemsQueued()) throw Error("cannot enable cancellation after promises are in use");
				e.prototype._clearCancellationData = j, e.prototype._propagateFrom = M, e.prototype._onCancel = k, e.prototype._setOnCancel = A, e.prototype._attachCancellationCallback = O, e.prototype._execute = D, P = M, W.cancellation = !0;
			}
			return "monitoring" in t && (t.monitoring && !W.monitoring ? (W.monitoring = !0, e.prototype._fireEvent = T) : !t.monitoring && W.monitoring && (W.monitoring = !1, e.prototype._fireEvent = E)), e;
		};
		function E() {
			return !1;
		}
		e.prototype._fireEvent = E, e.prototype._execute = function(e, t, n) {
			try {
				e(t, n);
			} catch (e) {
				return e;
			}
		}, e.prototype._onCancel = function() {}, e.prototype._setOnCancel = function(e) {}, e.prototype._attachCancellationCallback = function(e) {}, e.prototype._captureStackTrace = function() {}, e.prototype._attachExtraTrace = function() {}, e.prototype._clearCancellationData = function() {}, e.prototype._propagateFrom = function(e, t) {};
		function D(e, t, n) {
			var r = this;
			try {
				e(t, n, function(e) {
					if (typeof e != "function") throw TypeError("onCancel must be a function, got: " + a.toString(e));
					r._attachCancellationCallback(e);
				});
			} catch (e) {
				return e;
			}
		}
		function O(e) {
			if (!this._isCancellable()) return this;
			var t = this._onCancel();
			t === void 0 ? this._setOnCancel(e) : a.isArray(t) ? t.push(e) : this._setOnCancel([t, e]);
		}
		function k() {
			return this._onCancelField;
		}
		function A(e) {
			this._onCancelField = e;
		}
		function j() {
			this._cancellationParent = void 0, this._onCancelField = void 0;
		}
		function M(e, t) {
			if (t & 1) {
				this._cancellationParent = e;
				var n = e._branchesRemainingToCancel;
				n === void 0 && (n = 0), e._branchesRemainingToCancel = n + 1;
			}
			t & 2 && e._isBound() && this._setBoundTo(e._boundTo);
		}
		function N(e, t) {
			t & 2 && e._isBound() && this._setBoundTo(e._boundTo);
		}
		var P = N;
		function F() {
			var t = this._boundTo;
			return t !== void 0 && t instanceof e ? t.isFulfilled() ? t.value() : void 0 : t;
		}
		function I() {
			this._trace = new fe(this._peekContext());
		}
		function L(e, t) {
			if (o(e)) {
				var n = this._trace;
				if (n !== void 0 && t && (n = n._parent), n !== void 0) n.attachExtraTrace(e);
				else if (!e.__stackCleaned__) {
					var r = H(e);
					a.notEnumerableProp(e, "stack", r.message + "\n" + r.stack.join("\n")), a.notEnumerableProp(e, "__stackCleaned__", !0);
				}
			}
		}
		function R(e, t, n, r, i) {
			if (e === void 0 && t !== null && y) {
				if (i !== void 0 && i._returnedNonUndefined() || !(r._bitField & 65535)) return;
				n && (n += " ");
				var a = "", o = "";
				if (t._trace) {
					for (var s = t._trace.stack.split("\n"), c = ne(s), l = c.length - 1; l >= 0; --l) {
						var f = c[l];
						if (!u.test(f)) {
							var p = f.match(d);
							p && (a = "at " + p[1] + ":" + p[2] + ":" + p[3] + " ");
							break;
						}
					}
					if (c.length > 0) {
						for (var m = c[0], l = 0; l < s.length; ++l) if (s[l] === m) {
							l > 0 && (o = "\n" + s[l - 1]);
							break;
						}
					}
				}
				var h = "a promise was created in a " + n + "handler " + a + "but was not returned from it, see http://goo.gl/rRqMUw" + o;
				r._warn(h, !0, t);
			}
		}
		function z(e, t) {
			var n = e + " is deprecated and will be removed in a future version.";
			return t && (n += " Use " + t + " instead."), B(n);
		}
		function B(t, n, r) {
			if (W.warnings) {
				var a = new i(t), o;
				if (n) r._attachExtraTrace(a);
				else if (W.longStackTraces && (o = e._peekContext())) o.attachExtraTrace(a);
				else {
					var s = H(a);
					a.stack = s.message + "\n" + s.stack.join("\n");
				}
				T("warning", a) || U(a, "", !0);
			}
		}
		function ee(e, t) {
			for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n");
			return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n");
		}
		function te(e) {
			for (var t = 0; t < e.length; ++t) (e[t].length === 0 || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), t--);
		}
		function V(e) {
			for (var t = e[0], n = 1; n < e.length; ++n) {
				for (var r = e[n], i = t.length - 1, a = t[i], o = -1, s = r.length - 1; s >= 0; --s) if (r[s] === a) {
					o = s;
					break;
				}
				for (var s = o; s >= 0; --s) {
					var c = r[s];
					if (t[i] === c) t.pop(), i--;
					else break;
				}
				t = r;
			}
		}
		function ne(e) {
			for (var t = [], n = 0; n < e.length; ++n) {
				var r = e[n], i = r === "    (No stack trace)" || f.test(r), a = i && ce(r);
				i && !a && (m && r.charAt(0) !== " " && (r = "    " + r), t.push(r));
			}
			return t;
		}
		function re(e) {
			for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
				var r = t[n];
				if (r === "    (No stack trace)" || f.test(r)) break;
			}
			return n > 0 && e.name != "SyntaxError" && (t = t.slice(n)), t;
		}
		function H(e) {
			var t = e.stack, n = e.toString();
			return t = typeof t == "string" && t.length > 0 ? re(e) : ["    (No stack trace)"], {
				message: n,
				stack: e.name == "SyntaxError" ? t : ne(t)
			};
		}
		function U(e, t, n) {
			if (typeof console < "u") {
				var r;
				if (a.isObject(e)) {
					var i = e.stack;
					r = t + p(i, e);
				} else r = t + String(e);
				typeof h == "function" ? h(r, n) : (typeof console.log == "function" || typeof console.log == "object") && console.log(r);
			}
		}
		function ie(e, t, n, i) {
			var a = !1;
			try {
				typeof t == "function" && (a = !0, e === "rejectionHandled" ? t(i) : t(n, i));
			} catch (e) {
				r.throwLater(e);
			}
			e === "unhandledRejection" ? !T(e, n, i) && !a && U(n, "Unhandled rejection ") : T(e, i);
		}
		function ae(e) {
			var t;
			if (typeof e == "function") t = "[function " + (e.name || "anonymous") + "]";
			else {
				if (t = e && typeof e.toString == "function" ? e.toString() : a.toString(e), /\[object [a-zA-Z0-9$_]+\]/.test(t)) try {
					t = JSON.stringify(e);
				} catch {}
				t.length === 0 && (t = "(empty array)");
			}
			return "(<" + oe(t) + ">, no stack trace)";
		}
		function oe(e) {
			var t = 41;
			return e.length < t ? e : e.substr(0, t - 3) + "...";
		}
		function se() {
			return typeof pe == "function";
		}
		var ce = function() {
			return !1;
		}, le = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
		function ue(e) {
			var t = e.match(le);
			if (t) return {
				fileName: t[1],
				line: parseInt(t[2], 10)
			};
		}
		function de(e, t) {
			if (se()) {
				for (var n = e.stack.split("\n"), r = t.stack.split("\n"), i = -1, a = -1, o, s, c = 0; c < n.length; ++c) {
					var u = ue(n[c]);
					if (u) {
						o = u.fileName, i = u.line;
						break;
					}
				}
				for (var c = 0; c < r.length; ++c) {
					var u = ue(r[c]);
					if (u) {
						s = u.fileName, a = u.line;
						break;
					}
				}
				i < 0 || a < 0 || !o || !s || o !== s || i >= a || (ce = function(e) {
					if (l.test(e)) return !0;
					var t = ue(e);
					return !!(t && t.fileName === o && i <= t.line && t.line <= a);
				});
			}
		}
		function fe(e) {
			this._parent = e, this._promisesCreated = 0;
			var t = this._length = 1 + (e === void 0 ? 0 : e._length);
			pe(this, fe), t > 32 && this.uncycle();
		}
		a.inherits(fe, Error), t.CapturedTrace = fe, fe.prototype.uncycle = function() {
			var e = this._length;
			if (!(e < 2)) {
				for (var t = [], n = {}, r = 0, i = this; i !== void 0; ++r) t.push(i), i = i._parent;
				e = this._length = r;
				for (var r = e - 1; r >= 0; --r) {
					var a = t[r].stack;
					n[a] === void 0 && (n[a] = r);
				}
				for (var r = 0; r < e; ++r) {
					var o = n[t[r].stack];
					if (o !== void 0 && o !== r) {
						o > 0 && (t[o - 1]._parent = void 0, t[o - 1]._length = 1), t[r]._parent = void 0, t[r]._length = 1;
						var s = r > 0 ? t[r - 1] : this;
						o < e - 1 ? (s._parent = t[o + 1], s._parent.uncycle(), s._length = s._parent._length + 1) : (s._parent = void 0, s._length = 1);
						for (var c = s._length + 1, l = r - 2; l >= 0; --l) t[l]._length = c, c++;
						return;
					}
				}
			}
		}, fe.prototype.attachExtraTrace = function(e) {
			if (!e.__stackCleaned__) {
				this.uncycle();
				for (var t = H(e), n = t.message, r = [t.stack], i = this; i !== void 0;) r.push(ne(i.stack.split("\n"))), i = i._parent;
				V(r), te(r), a.notEnumerableProp(e, "stack", ee(n, r)), a.notEnumerableProp(e, "__stackCleaned__", !0);
			}
		};
		var pe = (function() {
			var e = /^\s*at\s*/, t = function(e, t) {
				return typeof e == "string" ? e : t.name !== void 0 && t.message !== void 0 ? t.toString() : ae(t);
			};
			if (typeof Error.stackTraceLimit == "number" && typeof Error.captureStackTrace == "function") {
				Error.stackTraceLimit += 6, f = e, p = t;
				var n = Error.captureStackTrace;
				return ce = function(e) {
					return l.test(e);
				}, function(e, t) {
					Error.stackTraceLimit += 6, n(e, t), Error.stackTraceLimit -= 6;
				};
			}
			var r = /* @__PURE__ */ Error();
			if (typeof r.stack == "string" && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return f = /@/, p = t, m = !0, function(e) {
				e.stack = (/* @__PURE__ */ Error()).stack;
			};
			var i;
			try {
				throw Error();
			} catch (e) {
				i = "stack" in e;
			}
			return !("stack" in r) && i && typeof Error.stackTraceLimit == "number" ? (f = e, p = t, function(e) {
				Error.stackTraceLimit += 6;
				try {
					throw Error();
				} catch (t) {
					e.stack = t.stack;
				}
				Error.stackTraceLimit -= 6;
			}) : (p = function(e, t) {
				return typeof e == "string" ? e : (typeof t == "object" || typeof t == "function") && t.name !== void 0 && t.message !== void 0 ? t.toString() : ae(t);
			}, null);
		})([]);
		typeof console < "u" && console.warn !== void 0 && (h = function(e) {
			console.warn(e);
		}, a.isNode && process.stderr.isTTY ? h = function(e, t) {
			console.warn((t ? "\x1B[33m" : "\x1B[31m") + e + "\x1B[0m\n");
		} : !a.isNode && typeof (/* @__PURE__ */ Error()).stack == "string" && (h = function(e, t) {
			console.warn("%c" + e, t ? "color: darkorange" : "color: red");
		}));
		var W = {
			warnings: _,
			longStackTraces: !1,
			cancellation: !1,
			monitoring: !1
		};
		return v && e.longStackTraces(), {
			longStackTraces: function() {
				return W.longStackTraces;
			},
			warnings: function() {
				return W.warnings;
			},
			cancellation: function() {
				return W.cancellation;
			},
			monitoring: function() {
				return W.monitoring;
			},
			propagateFromFunction: function() {
				return P;
			},
			boundValueFunction: function() {
				return F;
			},
			checkForgottenReturns: R,
			setBounds: de,
			warn: B,
			deprecated: z,
			CapturedTrace: fe,
			fireDomEvent: x,
			fireGlobalEvent: S
		};
	};
})), Om = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		var n = $(), r = e.CancellationError, i = n.errorObj;
		function a(e, t, n) {
			this.promise = e, this.type = t, this.handler = n, this.called = !1, this.cancelPromise = null;
		}
		a.prototype.isFinallyHandler = function() {
			return this.type === 0;
		};
		function o(e) {
			this.finallyHandler = e;
		}
		o.prototype._resultCancelled = function() {
			s(this.finallyHandler);
		};
		function s(e, t) {
			return e.cancelPromise != null && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(), e.cancelPromise = null, !0);
		}
		function c() {
			return u.call(this, this.promise._target()._settledValue());
		}
		function l(e) {
			if (!s(this, e)) return i.e = e, i;
		}
		function u(n) {
			var a = this.promise, u = this.handler;
			if (!this.called) {
				this.called = !0;
				var d = this.isFinallyHandler() ? u.call(a._boundValue()) : u.call(a._boundValue(), n);
				if (d !== void 0) {
					a._setReturnedNonUndefined();
					var f = t(d, a);
					if (f instanceof e) {
						if (this.cancelPromise != null) {
							if (f._isCancelled()) {
								var p = new r("late cancellation observer");
								return a._attachExtraTrace(p), i.e = p, i;
							}
							f.isPending() && f._attachCancellationCallback(new o(this));
						}
						return f._then(c, l, void 0, this, void 0);
					}
				}
			}
			return a.isRejected() ? (s(this), i.e = n, i) : (s(this), n);
		}
		return e.prototype._passThrough = function(e, t, n, r) {
			return typeof e == "function" ? this._then(n, r, void 0, new a(this, t, e), void 0) : this.then();
		}, e.prototype.lastly = e.prototype.finally = function(e) {
			return this._passThrough(e, 0, u, u);
		}, e.prototype.tap = function(e) {
			return this._passThrough(e, 1, u);
		}, a;
	};
})), km = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		var t = $(), n = ym().keys, r = t.tryCatch, i = t.errorObj;
		function a(a, o, s) {
			return function(c) {
				var l = s._boundValue();
				predicateLoop: for (var u = 0; u < a.length; ++u) {
					var d = a[u];
					if (d === Error || d != null && d.prototype instanceof Error) {
						if (c instanceof d) return r(o).call(l, c);
					} else if (typeof d == "function") {
						var f = r(d).call(l, c);
						if (f === i) return f;
						if (f) return r(o).call(l, c);
					} else if (t.isObject(c)) {
						for (var p = n(d), m = 0; m < p.length; ++m) {
							var h = p[m];
							if (d[h] != c[h]) continue predicateLoop;
						}
						return r(o).call(l, c);
					}
				}
				return e;
			};
		}
		return a;
	};
})), Am = /* @__PURE__ */ a(((e, t) => {
	var n = $(), r = n.maybeWrapAsError, i = Cm().OperationalError, a = ym();
	function o(e) {
		return e instanceof Error && a.getPrototypeOf(e) === Error.prototype;
	}
	var s = /^(?:name|message|stack|cause)$/;
	function c(e) {
		var t;
		if (o(e)) {
			t = new i(e), t.name = e.name, t.message = e.message, t.stack = e.stack;
			for (var r = a.keys(e), c = 0; c < r.length; ++c) {
				var l = r[c];
				s.test(l) || (t[l] = e[l]);
			}
			return t;
		}
		return n.markAsOriginatingFromRejection(e), e;
	}
	function l(e, t) {
		return function(n, i) {
			if (e !== null) {
				if (n) {
					var a = c(r(n));
					e._attachExtraTrace(a), e._reject(a);
				} else if (!t) e._fulfill(i);
				else {
					for (var o = arguments.length, s = Array(Math.max(o - 1, 0)), l = 1; l < o; ++l) s[l - 1] = arguments[l];
					e._fulfill(s);
				}
				e = null;
			}
		};
	}
	t.exports = l;
})), jm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i) {
		var a = $(), o = a.tryCatch;
		e.method = function(n) {
			if (typeof n != "function") throw new e.TypeError("expecting a function but got " + a.classString(n));
			return function() {
				var r = new e(t);
				r._captureStackTrace(), r._pushContext();
				var a = o(n).apply(this, arguments), s = r._popContext();
				return i.checkForgottenReturns(a, s, "Promise.method", r), r._resolveFromSyncValue(a), r;
			};
		}, e.attempt = e.try = function(n) {
			if (typeof n != "function") return r("expecting a function but got " + a.classString(n));
			var s = new e(t);
			s._captureStackTrace(), s._pushContext();
			var c;
			if (arguments.length > 1) {
				i.deprecated("calling Promise.try with more than 1 argument");
				var l = arguments[1], u = arguments[2];
				c = a.isArray(l) ? o(n).apply(u, l) : o(n).call(u, l);
			} else c = o(n)();
			var d = s._popContext();
			return i.checkForgottenReturns(c, d, "Promise.try", s), s._resolveFromSyncValue(c), s;
		}, e.prototype._resolveFromSyncValue = function(e) {
			e === a.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0);
		};
	};
})), Mm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r) {
		var i = !1, a = function(e, t) {
			this._reject(t);
		}, o = function(e, t) {
			t.promiseRejectionQueued = !0, t.bindingPromise._then(a, a, null, this, e);
		}, s = function(e, t) {
			this._bitField & 50397184 || this._resolveCallback(t.target);
		}, c = function(e, t) {
			t.promiseRejectionQueued || this._reject(e);
		};
		e.prototype.bind = function(a) {
			i || (i = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
			var l = n(a), u = new e(t);
			u._propagateFrom(this, 1);
			var d = this._target();
			if (u._setBoundTo(l), l instanceof e) {
				var f = {
					promiseRejectionQueued: !1,
					promise: u,
					target: d,
					bindingPromise: l
				};
				d._then(t, o, void 0, u, f), l._then(s, c, void 0, u, f), u._setOnCancel(l);
			} else u._resolveCallback(d);
			return u;
		}, e.prototype._setBoundTo = function(e) {
			e === void 0 ? this._bitField &= -2097153 : (this._bitField |= 2097152, this._boundTo = e);
		}, e.prototype._isBound = function() {
			return (this._bitField & 2097152) == 2097152;
		}, e.bind = function(t, n) {
			return e.resolve(n).bind(t);
		};
	};
})), Nm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r) {
		var i = $(), a = i.tryCatch, o = i.errorObj, s = e._async;
		e.prototype.break = e.prototype.cancel = function() {
			if (!r.cancellation()) return this._warn("cancellation is disabled");
			for (var e = this, t = e; e._isCancellable();) {
				if (!e._cancelBy(t)) {
					t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
					break;
				}
				var n = e._cancellationParent;
				if (n == null || !n._isCancellable()) {
					e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
					break;
				}
				e._isFollowing() && e._followee().cancel(), e._setWillBeCancelled(), t = e, e = n;
			}
		}, e.prototype._branchHasCancelled = function() {
			this._branchesRemainingToCancel--;
		}, e.prototype._enoughBranchesHaveCancelled = function() {
			return this._branchesRemainingToCancel === void 0 || this._branchesRemainingToCancel <= 0;
		}, e.prototype._cancelBy = function(e) {
			return e === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), this._enoughBranchesHaveCancelled() ? (this._invokeOnCancel(), !0) : !1);
		}, e.prototype._cancelBranched = function() {
			this._enoughBranchesHaveCancelled() && this._cancel();
		}, e.prototype._cancel = function() {
			this._isCancellable() && (this._setCancelled(), s.invoke(this._cancelPromises, this, void 0));
		}, e.prototype._cancelPromises = function() {
			this._length() > 0 && this._settlePromises();
		}, e.prototype._unsetOnCancel = function() {
			this._onCancelField = void 0;
		}, e.prototype._isCancellable = function() {
			return this.isPending() && !this._isCancelled();
		}, e.prototype.isCancellable = function() {
			return this.isPending() && !this.isCancelled();
		}, e.prototype._doInvokeOnCancel = function(e, t) {
			if (i.isArray(e)) for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t);
			else if (e !== void 0) {
				if (typeof e == "function") {
					if (!t) {
						var r = a(e).call(this._boundValue());
						r === o && (this._attachExtraTrace(r.e), s.throwLater(r.e));
					}
				} else e._resultCancelled(this);
			}
		}, e.prototype._invokeOnCancel = function() {
			var e = this._onCancel();
			this._unsetOnCancel(), s.invoke(this._doInvokeOnCancel, this, e);
		}, e.prototype._invokeInternalOnCancel = function() {
			this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
		}, e.prototype._resultCancelled = function() {
			this.cancel();
		};
	};
})), Pm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		function t() {
			return this.value;
		}
		function n() {
			throw this.reason;
		}
		e.prototype.return = e.prototype.thenReturn = function(n) {
			return n instanceof e && n.suppressUnhandledRejections(), this._then(t, void 0, void 0, { value: n }, void 0);
		}, e.prototype.throw = e.prototype.thenThrow = function(e) {
			return this._then(n, void 0, void 0, { reason: e }, void 0);
		}, e.prototype.catchThrow = function(e) {
			if (arguments.length <= 1) return this._then(void 0, n, void 0, { reason: e }, void 0);
			var t = arguments[1];
			return this.caught(e, function() {
				throw t;
			});
		}, e.prototype.catchReturn = function(n) {
			if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), this._then(void 0, t, void 0, { value: n }, void 0);
			var r = arguments[1];
			return r instanceof e && r.suppressUnhandledRejections(), this.caught(n, function() {
				return r;
			});
		};
	};
})), Fm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		function t(e) {
			e === void 0 ? (this._bitField = 0, this._settledValueField = void 0) : (e = e._target(), this._bitField = e._bitField, this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0);
		}
		t.prototype._settledValue = function() {
			return this._settledValueField;
		};
		var n = t.prototype.value = function() {
			if (!this.isFulfilled()) throw TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
			return this._settledValue();
		}, r = t.prototype.error = t.prototype.reason = function() {
			if (!this.isRejected()) throw TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
			return this._settledValue();
		}, i = t.prototype.isFulfilled = function() {
			return !!(this._bitField & 33554432);
		}, a = t.prototype.isRejected = function() {
			return !!(this._bitField & 16777216);
		}, o = t.prototype.isPending = function() {
			return !(this._bitField & 50397184);
		}, s = t.prototype.isResolved = function() {
			return !!(this._bitField & 50331648);
		};
		t.prototype.isCancelled = function() {
			return !!(this._bitField & 8454144);
		}, e.prototype.__isCancelled = function() {
			return (this._bitField & 65536) == 65536;
		}, e.prototype._isCancelled = function() {
			return this._target().__isCancelled();
		}, e.prototype.isCancelled = function() {
			return !!(this._target()._bitField & 8454144);
		}, e.prototype.isPending = function() {
			return o.call(this._target());
		}, e.prototype.isRejected = function() {
			return a.call(this._target());
		}, e.prototype.isFulfilled = function() {
			return i.call(this._target());
		}, e.prototype.isResolved = function() {
			return s.call(this._target());
		}, e.prototype.value = function() {
			return n.call(this._target());
		}, e.prototype.reason = function() {
			var e = this._target();
			return e._unsetRejectionIsUnhandled(), r.call(e);
		}, e.prototype._value = function() {
			return this._settledValue();
		}, e.prototype._reason = function() {
			return this._unsetRejectionIsUnhandled(), this._settledValue();
		}, e.PromiseInspection = t;
	};
})), Im = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i, a) {
		var o = $(), s = o.canEvaluate, c = o.tryCatch, l = o.errorObj, u;
		if (s) {
			for (var d = function(e) {
				return Function("value", "holder", "                             \n            'use strict';                                                    \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g, e));
			}, f = function(e) {
				return Function("promise", "holder", "                           \n            'use strict';                                                    \n            holder.pIndex = promise;                                         \n            ".replace(/Index/g, e));
			}, p = function(t) {
				for (var n = Array(t), r = 0; r < n.length; ++r) n[r] = "this.p" + (r + 1);
				var a = n.join(" = ") + " = null;", o = "var promise;\n" + n.map(function(e) {
					return "                                                         \n                promise = " + e + ";                                      \n                if (promise instanceof Promise) {                            \n                    promise.cancel();                                        \n                }                                                            \n            ";
				}).join("\n"), s = n.join(", "), u = "Holder$" + t, d = "return function(tryCatch, errorObj, Promise, async) {    \n            'use strict';                                                    \n            function [TheName](fn) {                                         \n                [TheProperties]                                              \n                this.fn = fn;                                                \n                this.asyncNeeded = true;                                     \n                this.now = 0;                                                \n            }                                                                \n                                                                             \n            [TheName].prototype._callFunction = function(promise) {          \n                promise._pushContext();                                      \n                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n                promise._popContext();                                       \n                if (ret === errorObj) {                                      \n                    promise._rejectCallback(ret.e, false);                   \n                } else {                                                     \n                    promise._resolveCallback(ret);                           \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype.checkFulfillment = function(promise) {       \n                var now = ++this.now;                                        \n                if (now === [TheTotal]) {                                    \n                    if (this.asyncNeeded) {                                  \n                        async.invoke(this._callFunction, this, promise);     \n                    } else {                                                 \n                        this._callFunction(promise);                         \n                    }                                                        \n                                                                             \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype._resultCancelled = function() {              \n                [CancellationCode]                                           \n            };                                                               \n                                                                             \n            return [TheName];                                                \n        }(tryCatch, errorObj, Promise, async);                               \n        ";
				return d = d.replace(/\[TheName\]/g, u).replace(/\[TheTotal\]/g, t).replace(/\[ThePassedArguments\]/g, s).replace(/\[TheProperties\]/g, a).replace(/\[CancellationCode\]/g, o), Function("tryCatch", "errorObj", "Promise", "async", d)(c, l, e, i);
			}, m = [], h = [], g = [], _ = 0; _ < 8; ++_) m.push(p(_ + 1)), h.push(d(_ + 1)), g.push(f(_ + 1));
			u = function(e) {
				this._reject(e);
			};
		}
		e.join = function() {
			var i = arguments.length - 1, c;
			if (i > 0 && typeof arguments[i] == "function" && (c = arguments[i], i <= 8 && s)) {
				var l = new e(r);
				l._captureStackTrace();
				for (var d = m[i - 1], f = new d(c), p = h, _ = 0; _ < i; ++_) {
					var v = n(arguments[_], l);
					if (v instanceof e) {
						v = v._target();
						var y = v._bitField;
						y & 50397184 ? y & 33554432 ? p[_].call(l, v._value(), f) : y & 16777216 ? l._reject(v._reason()) : l._cancel() : (v._then(p[_], u, void 0, l, f), g[_](v, f), f.asyncNeeded = !1);
					} else p[_].call(l, v, f);
				}
				if (!l._isFateSealed()) {
					if (f.asyncNeeded) {
						var b = a();
						b !== null && (f.fn = o.domainBind(b, f.fn));
					}
					l._setAsyncGuaranteed(), l._setOnCancel(f);
				}
				return l;
			}
			var x = [...arguments];
			c && x.pop();
			var l = new t(x).promise();
			return c === void 0 ? l : l.spread(c);
		};
	};
})), Lm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i, a) {
		var o = e._getDomain, s = $(), c = s.tryCatch, l = s.errorObj, u = e._async;
		function d(e, t, n, r) {
			this.constructor$(e), this._promise._captureStackTrace();
			var a = o();
			this._callback = a === null ? t : s.domainBind(a, t), this._preservedValues = r === i ? Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], u.invoke(this._asyncInit, this, void 0);
		}
		s.inherits(d, t), d.prototype._asyncInit = function() {
			this._init$(void 0, -2);
		}, d.prototype._init = function() {}, d.prototype._promiseFulfilled = function(t, n) {
			var i = this._values, o = this.length(), s = this._preservedValues, u = this._limit;
			if (n < 0) {
				if (n = n * -1 - 1, i[n] = t, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
			} else {
				if (u >= 1 && this._inFlight >= u) return i[n] = t, this._queue.push(n), !1;
				s !== null && (s[n] = t);
				var d = this._promise, f = this._callback, p = d._boundValue();
				d._pushContext();
				var m = c(f).call(p, t, n, o), h = d._popContext();
				if (a.checkForgottenReturns(m, h, s === null ? "Promise.map" : "Promise.filter", d), m === l) return this._reject(m.e), !0;
				var g = r(m, this._promise);
				if (g instanceof e) {
					g = g._target();
					var _ = g._bitField;
					if (!(_ & 50397184)) return u >= 1 && this._inFlight++, i[n] = g, g._proxy(this, (n + 1) * -1), !1;
					if (_ & 33554432) m = g._value();
					else if (_ & 16777216) return this._reject(g._reason()), !0;
					else return this._cancel(), !0;
				}
				i[n] = m;
			}
			return ++this._totalResolved >= o && (s === null ? this._resolve(i) : this._filter(i, s), !0);
		}, d.prototype._drainQueue = function() {
			for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t;) {
				if (this._isResolved()) return;
				var r = e.pop();
				this._promiseFulfilled(n[r], r);
			}
		}, d.prototype._filter = function(e, t) {
			for (var n = t.length, r = Array(n), i = 0, a = 0; a < n; ++a) e[a] && (r[i++] = t[a]);
			r.length = i, this._resolve(r);
		}, d.prototype.preservedValues = function() {
			return this._preservedValues;
		};
		function f(t, r, i, a) {
			if (typeof r != "function") return n("expecting a function but got " + s.classString(r));
			var o = 0;
			if (i !== void 0) {
				if (typeof i == "object" && i) {
					if (typeof i.concurrency != "number") return e.reject(/* @__PURE__ */ TypeError("'concurrency' must be a number but it is " + s.classString(i.concurrency)));
					o = i.concurrency;
				} else return e.reject(/* @__PURE__ */ TypeError("options argument must be an object but it is " + s.classString(i)));
			}
			return o = typeof o == "number" && isFinite(o) && o >= 1 ? o : 0, new d(t, r, o, a).promise();
		}
		e.prototype.map = function(e, t) {
			return f(this, e, t, null);
		}, e.map = function(e, t, n, r) {
			return f(e, t, n, r);
		};
	};
})), Rm = /* @__PURE__ */ a(((e, t) => {
	var n = Object.create;
	if (n) {
		var r = n(null), i = n(null);
		r[" size"] = i[" size"] = 0;
	}
	t.exports = function(e) {
		var t = $(), n = t.canEvaluate, a = t.isIdentifier, o, s, c = function(e) {
			return Function("ensureMethod", "                                    \n        return function(obj) {                                               \n            'use strict'                                                     \n            var len = this.length;                                           \n            ensureMethod(obj, 'methodName');                                 \n            switch(len) {                                                    \n                case 1: return obj.methodName(this[0]);                      \n                case 2: return obj.methodName(this[0], this[1]);             \n                case 3: return obj.methodName(this[0], this[1], this[2]);    \n                case 0: return obj.methodName();                             \n                default:                                                     \n                    return obj.methodName.apply(obj, this);                  \n            }                                                                \n        };                                                                   \n        ".replace(/methodName/g, e))(d);
		}, l = function(e) {
			return Function("obj", "                                             \n        'use strict';                                                        \n        return obj.propertyName;                                             \n        ".replace("propertyName", e));
		}, u = function(e, t, n) {
			var r = n[e];
			if (typeof r != "function") {
				if (!a(e)) return null;
				if (r = t(e), n[e] = r, n[" size"]++, n[" size"] > 512) {
					for (var i = Object.keys(n), o = 0; o < 256; ++o) delete n[i[o]];
					n[" size"] = i.length - 256;
				}
			}
			return r;
		};
		o = function(e) {
			return u(e, c, r);
		}, s = function(e) {
			return u(e, l, i);
		};
		function d(n, r) {
			var i;
			if (n != null && (i = n[r]), typeof i != "function") {
				var a = "Object " + t.classString(n) + " has no method '" + t.toString(r) + "'";
				throw new e.TypeError(a);
			}
			return i;
		}
		function f(e) {
			return d(e, this.pop()).apply(e, this);
		}
		e.prototype.call = function(e) {
			for (var t = arguments.length, r = Array(Math.max(t - 1, 0)), i = 1; i < t; ++i) r[i - 1] = arguments[i];
			if (n) {
				var a = o(e);
				if (a !== null) return this._then(a, void 0, void 0, r, void 0);
			}
			return r.push(e), this._then(f, void 0, void 0, r, void 0);
		};
		function p(e) {
			return e[this];
		}
		function m(e) {
			var t = +this;
			return t < 0 && (t = Math.max(0, t + e.length)), e[t];
		}
		e.prototype.get = function(e) {
			var t = typeof e == "number", r;
			if (t) r = m;
			else if (n) {
				var i = s(e);
				r = i === null ? p : i;
			} else r = p;
			return this._then(r, void 0, void 0, e, void 0);
		};
	};
})), zm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i, a) {
		var o = $(), s = Cm().TypeError, c = $().inherits, l = o.errorObj, u = o.tryCatch, d = {};
		function f(e) {
			setTimeout(function() {
				throw e;
			}, 0);
		}
		function p(e) {
			var t = n(e);
			return t !== e && typeof e._isDisposable == "function" && typeof e._getDisposer == "function" && e._isDisposable() && t._setDisposable(e._getDisposer()), t;
		}
		function m(t, r) {
			var a = 0, o = t.length, s = new e(i);
			function c() {
				if (a >= o) return s._fulfill();
				var i = p(t[a++]);
				if (i instanceof e && i._isDisposable()) {
					try {
						i = n(i._getDisposer().tryDispose(r), t.promise);
					} catch (e) {
						return f(e);
					}
					if (i instanceof e) return i._then(c, f, null, null, null);
				}
				c();
			}
			return c(), s;
		}
		function h(e, t, n) {
			this._data = e, this._promise = t, this._context = n;
		}
		h.prototype.data = function() {
			return this._data;
		}, h.prototype.promise = function() {
			return this._promise;
		}, h.prototype.resource = function() {
			return this.promise().isFulfilled() ? this.promise().value() : d;
		}, h.prototype.tryDispose = function(e) {
			var t = this.resource(), n = this._context;
			n !== void 0 && n._pushContext();
			var r = t === d ? null : this.doDispose(t, e);
			return n !== void 0 && n._popContext(), this._promise._unsetDisposable(), this._data = null, r;
		}, h.isDisposer = function(e) {
			return e != null && typeof e.resource == "function" && typeof e.tryDispose == "function";
		};
		function g(e, t, n) {
			this.constructor$(e, t, n);
		}
		c(g, h), g.prototype.doDispose = function(e, t) {
			return this.data().call(e, e, t);
		};
		function _(e) {
			return h.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e;
		}
		function v(e) {
			this.length = e, this.promise = null, this[e - 1] = null;
		}
		v.prototype._resultCancelled = function() {
			for (var t = this.length, n = 0; n < t; ++n) {
				var r = this[n];
				r instanceof e && r.cancel();
			}
		}, e.using = function() {
			var r = arguments.length;
			if (r < 2) return t("you must pass at least 2 arguments to Promise.using");
			var i = arguments[r - 1];
			if (typeof i != "function") return t("expecting a function but got " + o.classString(i));
			var s, c = !0;
			r === 2 && Array.isArray(arguments[0]) ? (s = arguments[0], r = s.length, c = !1) : (s = arguments, r--);
			for (var d = new v(r), f = 0; f < r; ++f) {
				var p = s[f];
				if (h.isDisposer(p)) {
					var g = p;
					p = p.promise(), p._setDisposable(g);
				} else {
					var y = n(p);
					y instanceof e && (p = y._then(_, null, null, {
						resources: d,
						index: f
					}, void 0));
				}
				d[f] = p;
			}
			for (var b = Array(d.length), f = 0; f < b.length; ++f) b[f] = e.resolve(d[f]).reflect();
			var x = e.all(b).then(function(e) {
				for (var t = 0; t < e.length; ++t) {
					var n = e[t];
					if (n.isRejected()) return l.e = n.error(), l;
					if (!n.isFulfilled()) {
						x.cancel();
						return;
					}
					e[t] = n.value();
				}
				S._pushContext(), i = u(i);
				var r = c ? i.apply(void 0, e) : i(e), o = S._popContext();
				return a.checkForgottenReturns(r, o, "Promise.using", S), r;
			}), S = x.lastly(function() {
				return m(d, new e.PromiseInspection(x));
			});
			return d.promise = S, S._setOnCancel(d), S;
		}, e.prototype._setDisposable = function(e) {
			this._bitField |= 131072, this._disposer = e;
		}, e.prototype._isDisposable = function() {
			return (this._bitField & 131072) > 0;
		}, e.prototype._getDisposer = function() {
			return this._disposer;
		}, e.prototype._unsetDisposable = function() {
			this._bitField &= -131073, this._disposer = void 0;
		}, e.prototype.disposer = function(e) {
			if (typeof e == "function") return new g(e, this, r());
			throw new s();
		};
	};
})), Bm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n) {
		var r = $(), i = e.TimeoutError;
		function a(e) {
			this.handle = e;
		}
		a.prototype._resultCancelled = function() {
			clearTimeout(this.handle);
		};
		var o = function(e) {
			return s(+this).thenReturn(e);
		}, s = e.delay = function(r, i) {
			var s, c;
			return i === void 0 ? (s = new e(t), c = setTimeout(function() {
				s._fulfill();
			}, +r), n.cancellation() && s._setOnCancel(new a(c)), s._captureStackTrace()) : (s = e.resolve(i)._then(o, null, null, r, void 0), n.cancellation() && i instanceof e && s._setOnCancel(i)), s._setAsyncGuaranteed(), s;
		};
		e.prototype.delay = function(e) {
			return s(e, this);
		};
		var c = function(e, t, n) {
			var a = typeof t == "string" ? new i(t) : t instanceof Error ? t : new i("operation timed out");
			r.markAsOriginatingFromRejection(a), e._attachExtraTrace(a), e._reject(a), n?.cancel();
		};
		function l(e) {
			return clearTimeout(this.handle), e;
		}
		function u(e) {
			throw clearTimeout(this.handle), e;
		}
		e.prototype.timeout = function(e, t) {
			e = +e;
			var r, i, o = new a(setTimeout(function() {
				r.isPending() && c(r, t, i);
			}, e));
			return n.cancellation() ? (i = this.then(), r = i._then(l, u, void 0, o, void 0), r._setOnCancel(o)) : r = this._then(l, u, void 0, o, void 0), r;
		};
	};
})), Vm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i, a) {
		var o = Cm().TypeError, s = $(), c = s.errorObj, l = s.tryCatch, u = [];
		function d(t, n, i) {
			for (var a = 0; a < n.length; ++a) {
				i._pushContext();
				var o = l(n[a])(t);
				if (i._popContext(), o === c) {
					i._pushContext();
					var s = e.reject(c.e);
					return i._popContext(), s;
				}
				var u = r(o, i);
				if (u instanceof e) return u;
			}
			return null;
		}
		function f(t, r, i, o) {
			if (a.cancellation()) {
				var s = new e(n), c = this._finallyPromise = new e(n);
				this._promise = s.lastly(function() {
					return c;
				}), s._captureStackTrace(), s._setOnCancel(this);
			} else (this._promise = new e(n))._captureStackTrace();
			this._stack = o, this._generatorFunction = t, this._receiver = r, this._generator = void 0, this._yieldHandlers = typeof i == "function" ? [i].concat(u) : u, this._yieldedPromise = null, this._cancellationPhase = !1;
		}
		s.inherits(f, i), f.prototype._isResolved = function() {
			return this._promise === null;
		}, f.prototype._cleanup = function() {
			this._promise = this._generator = null, a.cancellation() && this._finallyPromise !== null && (this._finallyPromise._fulfill(), this._finallyPromise = null);
		}, f.prototype._promiseCancelled = function() {
			if (!this._isResolved()) {
				var t = this._generator.return !== void 0, n;
				if (t) this._promise._pushContext(), n = l(this._generator.return).call(this._generator, void 0), this._promise._popContext();
				else {
					var r = new e.CancellationError("generator .return() sentinel");
					e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), n = l(this._generator.throw).call(this._generator, r), this._promise._popContext();
				}
				this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(n);
			}
		}, f.prototype._promiseFulfilled = function(e) {
			this._yieldedPromise = null, this._promise._pushContext();
			var t = l(this._generator.next).call(this._generator, e);
			this._promise._popContext(), this._continue(t);
		}, f.prototype._promiseRejected = function(e) {
			this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext();
			var t = l(this._generator.throw).call(this._generator, e);
			this._promise._popContext(), this._continue(t);
		}, f.prototype._resultCancelled = function() {
			if (this._yieldedPromise instanceof e) {
				var t = this._yieldedPromise;
				this._yieldedPromise = null, t.cancel();
			}
		}, f.prototype.promise = function() {
			return this._promise;
		}, f.prototype._run = function() {
			this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
		}, f.prototype._continue = function(t) {
			var n = this._promise;
			if (t === c) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);
			var i = t.value;
			if (t.done === !0) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(i);
			var a = r(i, this._promise);
			if (!(a instanceof e) && (a = d(a, this._yieldHandlers, this._promise), a === null)) {
				this._promiseRejected(new o("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", i) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
				return;
			}
			a = a._target();
			var s = a._bitField;
			s & 50397184 ? s & 33554432 ? e._async.invoke(this._promiseFulfilled, this, a._value()) : s & 16777216 ? e._async.invoke(this._promiseRejected, this, a._reason()) : this._promiseCancelled() : (this._yieldedPromise = a, a._proxy(this, null));
		}, e.coroutine = function(e, t) {
			if (typeof e != "function") throw new o("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
			var n = Object(t).yieldHandler, r = f, i = (/* @__PURE__ */ Error()).stack;
			return function() {
				var t = e.apply(this, arguments), a = new r(void 0, void 0, n, i), o = a.promise();
				return a._generator = t, a._promiseFulfilled(void 0), o;
			};
		}, e.coroutine.addYieldHandler = function(e) {
			if (typeof e != "function") throw new o("expecting a function but got " + s.classString(e));
			u.push(e);
		}, e.spawn = function(n) {
			if (a.deprecated("Promise.spawn()", "Promise.coroutine()"), typeof n != "function") return t("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
			var r = new f(n, this), i = r.promise();
			return r._run(e.spawn), i;
		};
	};
})), Hm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		var t = $(), n = e._async, r = t.tryCatch, i = t.errorObj;
		function a(e, a) {
			var s = this;
			if (!t.isArray(e)) return o.call(s, e, a);
			var c = r(a).apply(s._boundValue(), [null].concat(e));
			c === i && n.throwLater(c.e);
		}
		function o(e, t) {
			var a = this._boundValue(), o = e === void 0 ? r(t).call(a, null) : r(t).call(a, null, e);
			o === i && n.throwLater(o.e);
		}
		function s(e, t) {
			var a = this;
			if (!e) {
				var o = /* @__PURE__ */ Error(e + "");
				o.cause = e, e = o;
			}
			var s = r(t).call(a._boundValue(), e);
			s === i && n.throwLater(s.e);
		}
		e.prototype.asCallback = e.prototype.nodeify = function(e, t) {
			if (typeof e == "function") {
				var n = o;
				t !== void 0 && Object(t).spread && (n = a), this._then(n, s, void 0, this, e);
			}
			return this;
		};
	};
})), Um = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		var n = {}, r = $(), i = Am(), a = r.withAppended, o = r.maybeWrapAsError, s = r.canEvaluate, c = Cm().TypeError, l = "Async", u = { __isPromisified__: !0 }, d = RegExp("^(?:" + [
			"arity",
			"length",
			"name",
			"arguments",
			"caller",
			"callee",
			"prototype",
			"__isPromisified__"
		].join("|") + ")$"), f = function(e) {
			return r.isIdentifier(e) && e.charAt(0) !== "_" && e !== "constructor";
		};
		function p(e) {
			return !d.test(e);
		}
		function m(e) {
			try {
				return e.__isPromisified__ === !0;
			} catch {
				return !1;
			}
		}
		function h(e, t, n) {
			var i = r.getDataPropertyOrDefault(e, t + n, u);
			return i ? m(i) : !1;
		}
		function g(e, t, n) {
			for (var r = 0; r < e.length; r += 2) {
				var i = e[r];
				if (n.test(i)) {
					for (var a = i.replace(n, ""), o = 0; o < e.length; o += 2) if (e[o] === a) throw new c("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t));
				}
			}
		}
		function _(e, t, n, i) {
			for (var a = r.inheritedDataKeys(e), o = [], s = 0; s < a.length; ++s) {
				var c = a[s], l = e[c], u = i === f || f(c, l, e);
				typeof l == "function" && !m(l) && !h(e, c, t) && i(c, l, e, u) && o.push(c, l);
			}
			return g(o, t, n), o;
		}
		var v = function(e) {
			return e.replace(/([$])/, "\\$");
		}, y, b = function(e) {
			for (var t = [e], n = Math.max(0, e - 1 - 3), r = e - 1; r >= n; --r) t.push(r);
			for (var r = e + 1; r <= 3; ++r) t.push(r);
			return t;
		}, x = function(e) {
			return r.filledRange(e, "_arg", "");
		}, S = function(e) {
			return r.filledRange(Math.max(e, 3), "_arg", "");
		}, C = function(e) {
			return typeof e.length == "number" ? Math.max(Math.min(e.length, 1024), 0) : 0;
		};
		y = function(s, c, l, u, d, f) {
			var p = Math.max(0, C(u) - 1), m = b(p), h = typeof s == "string" || c === n;
			function g(e) {
				var t = x(e).join(", "), n = e > 0 ? ", " : "";
				return (h ? "ret = callback.call(this, {{args}}, nodeback); break;\n" : c === void 0 ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n").replace("{{args}}", t).replace(", ", n);
			}
			function _() {
				for (var e = "", t = 0; t < m.length; ++t) e += "case " + m[t] + ":" + g(m[t]);
				return e += "                                                             \n        default:                                                             \n            var args = new Array(len + 1);                                   \n            var i = 0;                                                       \n            for (var i = 0; i < len; ++i) {                                  \n               args[i] = arguments[i];                                       \n            }                                                                \n            args[i] = nodeback;                                              \n            [CodeForCall]                                                    \n            break;                                                           \n        ".replace("[CodeForCall]", h ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n"), e;
			}
			var v = typeof s == "string" ? "this != null ? this['" + s + "'] : fn" : "fn", y = "'use strict';                                                \n        var ret = function (Parameters) {                                    \n            'use strict';                                                    \n            var len = arguments.length;                                      \n            var promise = new Promise(INTERNAL);                             \n            promise._captureStackTrace();                                    \n            var nodeback = nodebackForPromise(promise, " + f + ");   \n            var ret;                                                         \n            var callback = tryCatch([GetFunctionCode]);                      \n            switch(len) {                                                    \n                [CodeForSwitchCase]                                          \n            }                                                                \n            if (ret === errorObj) {                                          \n                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n            }                                                                \n            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n            return promise;                                                  \n        };                                                                   \n        notEnumerableProp(ret, '__isPromisified__', true);                   \n        return ret;                                                          \n    ".replace("[CodeForSwitchCase]", _()).replace("[GetFunctionCode]", v);
			return y = y.replace("Parameters", S(p)), Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", y)(e, u, c, a, o, i, r.tryCatch, r.errorObj, r.notEnumerableProp, t);
		};
		function w(s, c, l, u, d, f) {
			var p = (function() {
				return this;
			})(), m = s;
			typeof m == "string" && (s = u);
			function h() {
				var r = c;
				c === n && (r = this);
				var l = new e(t);
				l._captureStackTrace();
				var u = typeof m == "string" && this !== p ? this[m] : s, d = i(l, f);
				try {
					u.apply(r, a(arguments, d));
				} catch (e) {
					l._rejectCallback(o(e), !0, !0);
				}
				return l._isFateSealed() || l._setAsyncGuaranteed(), l;
			}
			return r.notEnumerableProp(h, "__isPromisified__", !0), h;
		}
		var T = s ? y : w;
		function E(e, t, i, a, o) {
			for (var s = _(e, t, RegExp(v(t) + "$"), i), c = 0, l = s.length; c < l; c += 2) {
				var u = s[c], d = s[c + 1], f = u + t;
				if (a === T) e[f] = T(u, n, u, d, t, o);
				else {
					var p = a(d, function() {
						return T(u, n, u, d, t, o);
					});
					r.notEnumerableProp(p, "__isPromisified__", !0), e[f] = p;
				}
			}
			return r.toFastProperties(e), e;
		}
		function D(e, t, n) {
			return T(e, t, void 0, e, null, n);
		}
		e.promisify = function(e, t) {
			if (typeof e != "function") throw new c("expecting a function but got " + r.classString(e));
			if (m(e)) return e;
			t = Object(t);
			var i = D(e, t.context === void 0 ? n : t.context, !!t.multiArgs);
			return r.copyDescriptors(e, i, p), i;
		}, e.promisifyAll = function(e, t) {
			if (typeof e != "function" && typeof e != "object") throw new c("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
			t = Object(t);
			var n = !!t.multiArgs, i = t.suffix;
			typeof i != "string" && (i = l);
			var a = t.filter;
			typeof a != "function" && (a = f);
			var o = t.promisifier;
			if (typeof o != "function" && (o = T), !r.isIdentifier(i)) throw RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
			for (var s = r.inheritedDataKeys(e), u = 0; u < s.length; ++u) {
				var d = e[s[u]];
				s[u] !== "constructor" && r.isClass(d) && (E(d.prototype, i, a, o, n), E(d, i, a, o, n));
			}
			return E(e, i, a, o, n);
		};
	};
})), Wm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r) {
		var i = $(), a = i.isObject, o = ym(), s;
		typeof Map == "function" && (s = Map);
		var c = (function() {
			var e = 0, t = 0;
			function n(n, r) {
				this[e] = n, this[e + t] = r, e++;
			}
			return function(r) {
				t = r.size, e = 0;
				var i = Array(r.size * 2);
				return r.forEach(n, i), i;
			};
		})(), l = function(e) {
			for (var t = new s(), n = e.length / 2 | 0, r = 0; r < n; ++r) {
				var i = e[n + r], a = e[r];
				t.set(i, a);
			}
			return t;
		};
		function u(e) {
			var t = !1, n;
			if (s !== void 0 && e instanceof s) n = c(e), t = !0;
			else {
				var r = o.keys(e), i = r.length;
				n = Array(i * 2);
				for (var a = 0; a < i; ++a) {
					var l = r[a];
					n[a] = e[l], n[a + i] = l;
				}
			}
			this.constructor$(n), this._isMap = t, this._init$(void 0, -3);
		}
		i.inherits(u, t), u.prototype._init = function() {}, u.prototype._promiseFulfilled = function(e, t) {
			if (this._values[t] = e, ++this._totalResolved >= this._length) {
				var n;
				if (this._isMap) n = l(this._values);
				else {
					n = {};
					for (var r = this.length(), i = 0, a = this.length(); i < a; ++i) n[this._values[i + r]] = this._values[i];
				}
				return this._resolve(n), !0;
			}
			return !1;
		}, u.prototype.shouldCopyValues = function() {
			return !1;
		}, u.prototype.getActualLength = function(e) {
			return e >> 1;
		};
		function d(t) {
			var i, o = n(t);
			if (a(o)) i = o instanceof e ? o._then(e.props, void 0, void 0, void 0, void 0) : new u(o).promise();
			else return r("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
			return o instanceof e && i._propagateFrom(o, 2), i;
		}
		e.prototype.props = function() {
			return d(this);
		}, e.props = function(e) {
			return d(e);
		};
	};
})), Gm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r) {
		var i = $(), a = function(e) {
			return e.then(function(t) {
				return o(t, e);
			});
		};
		function o(o, s) {
			var c = n(o);
			if (c instanceof e) return a(c);
			if (o = i.asArray(o), o === null) return r("expecting an array or an iterable object but got " + i.classString(o));
			var l = new e(t);
			s !== void 0 && l._propagateFrom(s, 3);
			for (var u = l._fulfill, d = l._reject, f = 0, p = o.length; f < p; ++f) {
				var m = o[f];
				(m !== void 0 || f in o) && e.cast(m)._then(u, d, void 0, l, null);
			}
			return l;
		}
		e.race = function(e) {
			return o(e, void 0);
		}, e.prototype.race = function() {
			return o(this, void 0);
		};
	};
})), Km = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n, r, i, a) {
		var o = e._getDomain, s = $(), c = s.tryCatch;
		function l(t, n, r, a) {
			this.constructor$(t);
			var c = o();
			this._fn = c === null ? n : s.domainBind(c, n), r !== void 0 && (r = e.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, this._eachValues = a === i ? Array(this._length) : a === 0 ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
		}
		s.inherits(l, t), l.prototype._gotAccum = function(e) {
			this._eachValues !== void 0 && this._eachValues !== null && e !== i && this._eachValues.push(e);
		}, l.prototype._eachComplete = function(e) {
			return this._eachValues !== null && this._eachValues.push(e), this._eachValues;
		}, l.prototype._init = function() {}, l.prototype._resolveEmptyArray = function() {
			this._resolve(this._eachValues === void 0 ? this._initialValue : this._eachValues);
		}, l.prototype.shouldCopyValues = function() {
			return !1;
		}, l.prototype._resolve = function(e) {
			this._promise._resolveCallback(e), this._values = null;
		}, l.prototype._resultCancelled = function(t) {
			if (t === this._initialValue) return this._cancel();
			this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel());
		}, l.prototype._iterate = function(t) {
			this._values = t;
			var n, r, i = t.length;
			if (this._initialValue === void 0 ? (n = e.resolve(t[0]), r = 1) : (n = this._initialValue, r = 0), this._currentCancellable = n, !n.isRejected()) for (; r < i; ++r) {
				var a = {
					accum: null,
					value: t[r],
					index: r,
					length: i,
					array: this
				};
				n = n._then(f, void 0, void 0, a, void 0);
			}
			this._eachValues !== void 0 && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(u, u, void 0, n, this);
		}, e.prototype.reduce = function(e, t) {
			return d(this, e, t, null);
		}, e.reduce = function(e, t, n, r) {
			return d(e, t, n, r);
		};
		function u(e, t) {
			this.isFulfilled() ? t._resolve(e) : t._reject(e);
		}
		function d(e, t, r, i) {
			return typeof t == "function" ? new l(e, t, r, i).promise() : n("expecting a function but got " + s.classString(t));
		}
		function f(t) {
			this.accum = t, this.array._gotAccum(t);
			var n = r(this.value, this.array._promise);
			return n instanceof e ? (this.array._currentCancellable = n, n._then(p, void 0, void 0, this, void 0)) : p.call(this, n);
		}
		function p(t) {
			var n = this.array, r = n._promise, i = c(n._fn);
			r._pushContext();
			var o = n._eachValues === void 0 ? i.call(r._boundValue(), this.accum, t, this.index, this.length) : i.call(r._boundValue(), t, this.index, this.length);
			o instanceof e && (n._currentCancellable = o);
			var s = r._popContext();
			return a.checkForgottenReturns(o, s, n._eachValues === void 0 ? "Promise.reduce" : "Promise.each", r), o;
		}
	};
})), qm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n) {
		var r = e.PromiseInspection, i = $();
		function a(e) {
			this.constructor$(e);
		}
		i.inherits(a, t), a.prototype._promiseResolved = function(e, t) {
			return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), !0);
		}, a.prototype._promiseFulfilled = function(e, t) {
			var n = new r();
			return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n);
		}, a.prototype._promiseRejected = function(e, t) {
			var n = new r();
			return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n);
		}, e.settle = function(e) {
			return n.deprecated(".settle()", ".reflect()"), new a(e).promise();
		}, e.prototype.settle = function() {
			return e.settle(this);
		};
	};
})), Jm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n) {
		var r = $(), i = Cm().RangeError, a = Cm().AggregateError, o = r.isArray, s = {};
		function c(e) {
			this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
		}
		r.inherits(c, t), c.prototype._init = function() {
			if (this._initialized) {
				if (this._howMany === 0) {
					this._resolve([]);
					return;
				}
				this._init$(void 0, -5);
				var e = o(this._values);
				!this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
			}
		}, c.prototype.init = function() {
			this._initialized = !0, this._init();
		}, c.prototype.setUnwrap = function() {
			this._unwrap = !0;
		}, c.prototype.howMany = function() {
			return this._howMany;
		}, c.prototype.setHowMany = function(e) {
			this._howMany = e;
		}, c.prototype._promiseFulfilled = function(e) {
			return this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), this.howMany() === 1 && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0);
		}, c.prototype._promiseRejected = function(e) {
			return this._addRejected(e), this._checkOutcome();
		}, c.prototype._promiseCancelled = function() {
			return this._values instanceof e || this._values == null ? this._cancel() : (this._addRejected(s), this._checkOutcome());
		}, c.prototype._checkOutcome = function() {
			if (this.howMany() > this._canPossiblyFulfill()) {
				for (var e = new a(), t = this.length(); t < this._values.length; ++t) this._values[t] !== s && e.push(this._values[t]);
				return e.length > 0 ? this._reject(e) : this._cancel(), !0;
			}
			return !1;
		}, c.prototype._fulfilled = function() {
			return this._totalResolved;
		}, c.prototype._rejected = function() {
			return this._values.length - this.length();
		}, c.prototype._addRejected = function(e) {
			this._values.push(e);
		}, c.prototype._addFulfilled = function(e) {
			this._values[this._totalResolved++] = e;
		}, c.prototype._canPossiblyFulfill = function() {
			return this.length() - this._rejected();
		}, c.prototype._getRangeError = function(e) {
			return new i("Input array must contain at least " + this._howMany + " items but contains only " + e + " items");
		}, c.prototype._resolveEmptyArray = function() {
			this._reject(this._getRangeError(0));
		};
		function l(e, t) {
			if ((t | 0) !== t || t < 0) return n("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
			var r = new c(e), i = r.promise();
			return r.setHowMany(t), r.init(), i;
		}
		e.some = function(e, t) {
			return l(e, t);
		}, e.prototype.some = function(e) {
			return l(this, e);
		}, e._SomePromiseArray = c;
	};
})), Ym = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		var n = e.map;
		e.prototype.filter = function(e, r) {
			return n(this, e, r, t);
		}, e.filter = function(e, r, i) {
			return n(e, r, i, t);
		};
	};
})), Xm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		var n = e.reduce, r = e.all;
		function i() {
			return r(this);
		}
		function a(e, r) {
			return n(e, r, t, t);
		}
		e.prototype.each = function(e) {
			return n(this, e, t, 0)._then(i, void 0, void 0, this, void 0);
		}, e.prototype.mapSeries = function(e) {
			return n(this, e, t, t);
		}, e.each = function(e, r) {
			return n(e, r, t, 0)._then(i, void 0, void 0, e, void 0);
		}, e.mapSeries = a;
	};
})), Zm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e) {
		var t = e._SomePromiseArray;
		function n(e) {
			var n = new t(e), r = n.promise();
			return n.setHowMany(1), n.setUnwrap(), n.init(), r;
		}
		e.any = function(e) {
			return n(e);
		}, e.prototype.any = function() {
			return n(this);
		};
	};
})), Qm = /* @__PURE__ */ a(((e, t) => {
	t.exports = function() {
		var e = function() {
			return new f("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
		}, n = function() {
			return new O.PromiseInspection(this._target());
		}, r = function(e) {
			return O.reject(new f(e));
		};
		function i() {}
		var a = {}, o = $(), s = o.isNode ? function() {
			var e = process.domain;
			return e === void 0 && (e = null), e;
		} : function() {
			return null;
		};
		o.notEnumerableProp(O, "_getDomain", s);
		var c = ym(), l = Sm(), u = new l();
		c.defineProperty(O, "_async", { value: u });
		var d = Cm(), f = O.TypeError = d.TypeError;
		O.RangeError = d.RangeError;
		var p = O.CancellationError = d.CancellationError;
		O.TimeoutError = d.TimeoutError, O.OperationalError = d.OperationalError, O.RejectionError = d.OperationalError, O.AggregateError = d.AggregateError;
		var m = function() {}, h = {}, g = {}, _ = wm()(O, m), v = Tm()(O, m, _, r, i), y = Em()(O), b = y.create, x = Dm()(O, y);
		x.CapturedTrace;
		var S = Om()(O, _), C = km()(g), w = Am(), T = o.errorObj, E = o.tryCatch;
		function D(e, t) {
			if (typeof t != "function") throw new f("expecting a function but got " + o.classString(t));
			if (e.constructor !== O) throw new f("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
		}
		function O(e) {
			this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, e !== m && (D(this, e), this._resolveFromExecutor(e)), this._promiseCreated(), this._fireEvent("promiseCreated", this);
		}
		O.prototype.toString = function() {
			return "[object Promise]";
		}, O.prototype.caught = O.prototype.catch = function(e) {
			var t = arguments.length;
			if (t > 1) {
				for (var n = Array(t - 1), i = 0, a = 0; a < t - 1; ++a) {
					var s = arguments[a];
					if (o.isObject(s)) n[i++] = s;
					else return r("expecting an object but got A catch statement predicate " + o.classString(s));
				}
				return n.length = i, e = arguments[a], this.then(void 0, C(n, e, this));
			}
			return this.then(void 0, e);
		}, O.prototype.reflect = function() {
			return this._then(n, n, void 0, this, void 0);
		}, O.prototype.then = function(e, t) {
			if (x.warnings() && arguments.length > 0 && typeof e != "function" && typeof t != "function") {
				var n = ".then() only accepts functions but was passed: " + o.classString(e);
				arguments.length > 1 && (n += ", " + o.classString(t)), this._warn(n);
			}
			return this._then(e, t, void 0, void 0, void 0);
		}, O.prototype.done = function(e, t) {
			this._then(e, t, void 0, void 0, void 0)._setIsFinal();
		}, O.prototype.spread = function(e) {
			return typeof e == "function" ? this.all()._then(e, void 0, void 0, h, void 0) : r("expecting a function but got " + o.classString(e));
		}, O.prototype.toJSON = function() {
			var e = {
				isFulfilled: !1,
				isRejected: !1,
				fulfillmentValue: void 0,
				rejectionReason: void 0
			};
			return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), e.isRejected = !0), e;
		}, O.prototype.all = function() {
			return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new v(this).promise();
		}, O.prototype.error = function(e) {
			return this.caught(o.originatesFromRejection, e);
		}, O.getNewLibraryCopy = t.exports, O.is = function(e) {
			return e instanceof O;
		}, O.fromNode = O.fromCallback = function(e) {
			var t = new O(m);
			t._captureStackTrace();
			var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, r = E(e)(w(t, n));
			return r === T && t._rejectCallback(r.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), t;
		}, O.all = function(e) {
			return new v(e).promise();
		}, O.cast = function(e) {
			var t = _(e);
			return t instanceof O || (t = new O(m), t._captureStackTrace(), t._setFulfilled(), t._rejectionHandler0 = e), t;
		}, O.resolve = O.fulfilled = O.cast, O.reject = O.rejected = function(e) {
			var t = new O(m);
			return t._captureStackTrace(), t._rejectCallback(e, !0), t;
		}, O.setScheduler = function(e) {
			if (typeof e != "function") throw new f("expecting a function but got " + o.classString(e));
			return u.setScheduler(e);
		}, O.prototype._then = function(e, t, n, r, i) {
			var a = i !== void 0, c = a ? i : new O(m), l = this._target(), d = l._bitField;
			a || (c._propagateFrom(this, 3), c._captureStackTrace(), r === void 0 && this._bitField & 2097152 && (r = d & 50397184 ? this._boundValue() : l === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, c));
			var f = s();
			if (d & 50397184) {
				var h, g, _ = l._settlePromiseCtx;
				d & 33554432 ? (g = l._rejectionHandler0, h = e) : d & 16777216 ? (g = l._fulfillmentHandler0, h = t, l._unsetRejectionIsUnhandled()) : (_ = l._settlePromiseLateCancellationObserver, g = new p("late cancellation observer"), l._attachExtraTrace(g), h = t), u.invoke(_, l, {
					handler: f === null ? h : typeof h == "function" && o.domainBind(f, h),
					promise: c,
					receiver: r,
					value: g
				});
			} else l._addCallbacks(e, t, c, r, f);
			return c;
		}, O.prototype._length = function() {
			return this._bitField & 65535;
		}, O.prototype._isFateSealed = function() {
			return !!(this._bitField & 117506048);
		}, O.prototype._isFollowing = function() {
			return (this._bitField & 67108864) == 67108864;
		}, O.prototype._setLength = function(e) {
			this._bitField = this._bitField & -65536 | e & 65535;
		}, O.prototype._setFulfilled = function() {
			this._bitField |= 33554432, this._fireEvent("promiseFulfilled", this);
		}, O.prototype._setRejected = function() {
			this._bitField |= 16777216, this._fireEvent("promiseRejected", this);
		}, O.prototype._setFollowing = function() {
			this._bitField |= 67108864, this._fireEvent("promiseResolved", this);
		}, O.prototype._setIsFinal = function() {
			this._bitField |= 4194304;
		}, O.prototype._isFinal = function() {
			return (this._bitField & 4194304) > 0;
		}, O.prototype._unsetCancelled = function() {
			this._bitField &= -65537;
		}, O.prototype._setCancelled = function() {
			this._bitField |= 65536, this._fireEvent("promiseCancelled", this);
		}, O.prototype._setWillBeCancelled = function() {
			this._bitField |= 8388608;
		}, O.prototype._setAsyncGuaranteed = function() {
			u.hasCustomScheduler() || (this._bitField |= 134217728);
		}, O.prototype._receiverAt = function(e) {
			var t = e === 0 ? this._receiver0 : this[e * 4 - 4 + 3];
			if (t !== a) return t === void 0 && this._isBound() ? this._boundValue() : t;
		}, O.prototype._promiseAt = function(e) {
			return this[e * 4 - 4 + 2];
		}, O.prototype._fulfillmentHandlerAt = function(e) {
			return this[e * 4 - 4 + 0];
		}, O.prototype._rejectionHandlerAt = function(e) {
			return this[e * 4 - 4 + 1];
		}, O.prototype._boundValue = function() {}, O.prototype._migrateCallback0 = function(e) {
			e._bitField;
			var t = e._fulfillmentHandler0, n = e._rejectionHandler0, r = e._promise0, i = e._receiverAt(0);
			i === void 0 && (i = a), this._addCallbacks(t, n, r, i, null);
		}, O.prototype._migrateCallbackAt = function(e, t) {
			var n = e._fulfillmentHandlerAt(t), r = e._rejectionHandlerAt(t), i = e._promiseAt(t), o = e._receiverAt(t);
			o === void 0 && (o = a), this._addCallbacks(n, r, i, o, null);
		}, O.prototype._addCallbacks = function(e, t, n, r, i) {
			var a = this._length();
			if (a >= 65531 && (a = 0, this._setLength(0)), a === 0) this._promise0 = n, this._receiver0 = r, typeof e == "function" && (this._fulfillmentHandler0 = i === null ? e : o.domainBind(i, e)), typeof t == "function" && (this._rejectionHandler0 = i === null ? t : o.domainBind(i, t));
			else {
				var s = a * 4 - 4;
				this[s + 2] = n, this[s + 3] = r, typeof e == "function" && (this[s + 0] = i === null ? e : o.domainBind(i, e)), typeof t == "function" && (this[s + 1] = i === null ? t : o.domainBind(i, t));
			}
			return this._setLength(a + 1), a;
		}, O.prototype._proxy = function(e, t) {
			this._addCallbacks(void 0, void 0, t, e, null);
		}, O.prototype._resolveCallback = function(t, n) {
			if (!(this._bitField & 117506048)) {
				if (t === this) return this._rejectCallback(e(), !1);
				var r = _(t, this);
				if (!(r instanceof O)) return this._fulfill(t);
				n && this._propagateFrom(r, 2);
				var i = r._target();
				if (i === this) {
					this._reject(e());
					return;
				}
				var a = i._bitField;
				if (!(a & 50397184)) {
					var o = this._length();
					o > 0 && i._migrateCallback0(this);
					for (var s = 1; s < o; ++s) i._migrateCallbackAt(this, s);
					this._setFollowing(), this._setLength(0), this._setFollowee(i);
				} else if (a & 33554432) this._fulfill(i._value());
				else if (a & 16777216) this._reject(i._reason());
				else {
					var c = new p("late cancellation observer");
					i._attachExtraTrace(c), this._reject(c);
				}
			}
		}, O.prototype._rejectCallback = function(e, t, n) {
			var r = o.ensureErrorObject(e), i = r === e;
			if (!i && !n && x.warnings()) {
				var a = "a promise was rejected with a non-error: " + o.classString(e);
				this._warn(a, !0);
			}
			this._attachExtraTrace(r, t ? i : !1), this._reject(e);
		}, O.prototype._resolveFromExecutor = function(e) {
			var t = this;
			this._captureStackTrace(), this._pushContext();
			var n = !0, r = this._execute(e, function(e) {
				t._resolveCallback(e);
			}, function(e) {
				t._rejectCallback(e, n);
			});
			n = !1, this._popContext(), r !== void 0 && t._rejectCallback(r, !0);
		}, O.prototype._settlePromiseFromHandler = function(e, t, n, r) {
			var i = r._bitField;
			if (!(i & 65536)) {
				r._pushContext();
				var a;
				t === h ? !n || typeof n.length != "number" ? (a = T, a.e = new f("cannot .spread() a non-array: " + o.classString(n))) : a = E(e).apply(this._boundValue(), n) : a = E(e).call(t, n);
				var s = r._popContext();
				i = r._bitField, !(i & 65536) && (a === g ? r._reject(n) : a === T ? r._rejectCallback(a.e, !1) : (x.checkForgottenReturns(a, s, "", r, this), r._resolveCallback(a)));
			}
		}, O.prototype._target = function() {
			for (var e = this; e._isFollowing();) e = e._followee();
			return e;
		}, O.prototype._followee = function() {
			return this._rejectionHandler0;
		}, O.prototype._setFollowee = function(e) {
			this._rejectionHandler0 = e;
		}, O.prototype._settlePromise = function(e, t, r, a) {
			var o = e instanceof O, s = this._bitField, c = !!(s & 134217728);
			s & 65536 ? (o && e._invokeInternalOnCancel(), r instanceof S && r.isFinallyHandler() ? (r.cancelPromise = e, E(t).call(r, a) === T && e._reject(T.e)) : t === n ? e._fulfill(n.call(r)) : r instanceof i ? r._promiseCancelled(e) : o || e instanceof v ? e._cancel() : r.cancel()) : typeof t == "function" ? o ? (c && e._setAsyncGuaranteed(), this._settlePromiseFromHandler(t, r, a, e)) : t.call(r, a, e) : r instanceof i ? r._isResolved() || (s & 33554432 ? r._promiseFulfilled(a, e) : r._promiseRejected(a, e)) : o && (c && e._setAsyncGuaranteed(), s & 33554432 ? e._fulfill(a) : e._reject(a));
		}, O.prototype._settlePromiseLateCancellationObserver = function(e) {
			var t = e.handler, n = e.promise, r = e.receiver, i = e.value;
			typeof t == "function" ? n instanceof O ? this._settlePromiseFromHandler(t, r, i, n) : t.call(r, i, n) : n instanceof O && n._reject(i);
		}, O.prototype._settlePromiseCtx = function(e) {
			this._settlePromise(e.promise, e.handler, e.receiver, e.value);
		}, O.prototype._settlePromise0 = function(e, t, n) {
			var r = this._promise0, i = this._receiverAt(0);
			this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, e, i, t);
		}, O.prototype._clearCallbackDataAtIndex = function(e) {
			var t = e * 4 - 4;
			this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0;
		}, O.prototype._fulfill = function(t) {
			var n = this._bitField;
			if (!((n & 117506048) >>> 16)) {
				if (t === this) {
					var r = e();
					return this._attachExtraTrace(r), this._reject(r);
				}
				this._setFulfilled(), this._rejectionHandler0 = t, (n & 65535) > 0 && (n & 134217728 ? this._settlePromises() : u.settlePromises(this));
			}
		}, O.prototype._reject = function(e) {
			var t = this._bitField;
			if (!((t & 117506048) >>> 16)) {
				if (this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal()) return u.fatalError(e, o.isNode);
				(t & 65535) > 0 ? u.settlePromises(this) : this._ensurePossibleRejectionHandled();
			}
		}, O.prototype._fulfillPromises = function(e, t) {
			for (var n = 1; n < e; n++) {
				var r = this._fulfillmentHandlerAt(n), i = this._promiseAt(n), a = this._receiverAt(n);
				this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, a, t);
			}
		}, O.prototype._rejectPromises = function(e, t) {
			for (var n = 1; n < e; n++) {
				var r = this._rejectionHandlerAt(n), i = this._promiseAt(n), a = this._receiverAt(n);
				this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, a, t);
			}
		}, O.prototype._settlePromises = function() {
			var e = this._bitField, t = e & 65535;
			if (t > 0) {
				if (e & 16842752) {
					var n = this._fulfillmentHandler0;
					this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n);
				} else {
					var r = this._rejectionHandler0;
					this._settlePromise0(this._fulfillmentHandler0, r, e), this._fulfillPromises(t, r);
				}
				this._setLength(0);
			}
			this._clearCancellationData();
		}, O.prototype._settledValue = function() {
			var e = this._bitField;
			if (e & 33554432) return this._rejectionHandler0;
			if (e & 16777216) return this._fulfillmentHandler0;
		};
		function k(e) {
			this.promise._resolveCallback(e);
		}
		function A(e) {
			this.promise._rejectCallback(e, !1);
		}
		O.defer = O.pending = function() {
			return x.deprecated("Promise.defer", "new Promise"), {
				promise: new O(m),
				resolve: k,
				reject: A
			};
		}, o.notEnumerableProp(O, "_makeSelfResolutionError", e), jm()(O, m, _, r, x), Mm()(O, m, _, x), Nm()(O, v, r, x), Pm()(O), Fm()(O), Im()(O, v, _, m, u, s), O.Promise = O, O.version = "3.4.7", Lm()(O, v, r, _, m, x), Rm()(O), zm()(O, r, _, b, m, x), Bm()(O, m, x), Vm()(O, r, m, _, i, x), Hm()(O), Um()(O, m), Wm()(O, v, _, r), Gm()(O, m, _, r), Km()(O, v, r, _, m, x), qm()(O, v, x), Jm()(O, v, r), Ym()(O, m), Xm()(O, m), Zm()(O), o.toFastProperties(O), o.toFastProperties(O.prototype);
		function j(e) {
			var t = new O(m);
			t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e;
		}
		return j({ a: 1 }), j({ b: 2 }), j({ c: 3 }), j(1), j(function() {}), j(void 0), j(!1), j(new O(m)), x.setBounds(l.firstLineError, o.lastLineError), O;
	};
})), $m = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = Qm()();
	t.defer = i, t.when = r.resolve, t.resolve = r.resolve, t.all = r.all, t.props = r.props, t.reject = r.reject, t.promisify = r.promisify, t.mapSeries = r.mapSeries, t.attempt = r.attempt, t.nfcall = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return r.promisify(e).apply(null, t);
	}, r.prototype.fail = r.prototype.caught, r.prototype.also = function(e) {
		return this.then(function(t) {
			var i = n.extend({}, t, e(t));
			return r.props(i);
		});
	};
	function i() {
		var e, t, n = new r.Promise(function(n, r) {
			e = n, t = r;
		});
		return {
			resolve: e,
			reject: t,
			promise: n
		};
	}
})), eh = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = t.types = {
		document: "document",
		paragraph: "paragraph",
		run: "run",
		text: "text",
		tab: "tab",
		checkbox: "checkbox",
		hyperlink: "hyperlink",
		noteReference: "noteReference",
		image: "image",
		note: "note",
		commentReference: "commentReference",
		comment: "comment",
		table: "table",
		tableRow: "tableRow",
		tableCell: "tableCell",
		break: "break",
		bookmarkStart: "bookmarkStart"
	};
	function i(e, t) {
		return t ||= {}, {
			type: r.document,
			children: e,
			notes: t.notes || new p({}),
			comments: t.comments || []
		};
	}
	function a(e, t) {
		t ||= {};
		var n = t.indent || {};
		return {
			type: r.paragraph,
			children: e,
			styleId: t.styleId || null,
			styleName: t.styleName || null,
			numbering: t.numbering || null,
			alignment: t.alignment || null,
			indent: {
				start: n.start || null,
				end: n.end || null,
				firstLine: n.firstLine || null,
				hanging: n.hanging || null
			}
		};
	}
	function o(e, t) {
		return t ||= {}, {
			type: r.run,
			children: e,
			styleId: t.styleId || null,
			styleName: t.styleName || null,
			isBold: !!t.isBold,
			isUnderline: !!t.isUnderline,
			isItalic: !!t.isItalic,
			isStrikethrough: !!t.isStrikethrough,
			isAllCaps: !!t.isAllCaps,
			isSmallCaps: !!t.isSmallCaps,
			verticalAlignment: t.verticalAlignment || s.baseline,
			font: t.font || null,
			fontSize: t.fontSize || null,
			highlight: t.highlight || null
		};
	}
	var s = {
		baseline: "baseline",
		superscript: "superscript",
		subscript: "subscript"
	};
	function c(e) {
		return {
			type: r.text,
			value: e
		};
	}
	function l() {
		return { type: r.tab };
	}
	function u(e) {
		return {
			type: r.checkbox,
			checked: e.checked
		};
	}
	function d(e, t) {
		return {
			type: r.hyperlink,
			children: e,
			href: t.href,
			anchor: t.anchor,
			targetFrame: t.targetFrame
		};
	}
	function f(e) {
		return {
			type: r.noteReference,
			noteType: e.noteType,
			noteId: e.noteId
		};
	}
	function p(e) {
		this._notes = n.indexBy(e, function(e) {
			return _(e.noteType, e.noteId);
		});
	}
	p.prototype.resolve = function(e) {
		return this.findNoteByKey(_(e.noteType, e.noteId));
	}, p.prototype.findNoteByKey = function(e) {
		return this._notes[e] || null;
	};
	function m(e) {
		return {
			type: r.note,
			noteType: e.noteType,
			noteId: e.noteId,
			body: e.body
		};
	}
	function h(e) {
		return {
			type: r.commentReference,
			commentId: e.commentId
		};
	}
	function g(e) {
		return {
			type: r.comment,
			commentId: e.commentId,
			body: e.body,
			authorName: e.authorName,
			authorInitials: e.authorInitials
		};
	}
	function _(e, t) {
		return e + "-" + t;
	}
	function v(e) {
		return {
			type: r.image,
			read: function(t) {
				return t ? e.readImage(t) : e.readImage().then(function(e) {
					return Buffer.from(e);
				});
			},
			readAsArrayBuffer: function() {
				return e.readImage();
			},
			readAsBase64String: function() {
				return e.readImage("base64");
			},
			readAsBuffer: function() {
				return e.readImage().then(function(e) {
					return Buffer.from(e);
				});
			},
			altText: e.altText,
			contentType: e.contentType
		};
	}
	function y(e, t) {
		return t ||= {}, {
			type: r.table,
			children: e,
			styleId: t.styleId || null,
			styleName: t.styleName || null
		};
	}
	function b(e, t) {
		return t ||= {}, {
			type: r.tableRow,
			children: e,
			isHeader: t.isHeader || !1
		};
	}
	function x(e, t) {
		return t ||= {}, {
			type: r.tableCell,
			children: e,
			colSpan: t.colSpan == null ? 1 : t.colSpan,
			rowSpan: t.rowSpan == null ? 1 : t.rowSpan
		};
	}
	function S(e) {
		return {
			type: r.break,
			breakType: e
		};
	}
	function C(e) {
		return {
			type: r.bookmarkStart,
			name: e.name
		};
	}
	t.document = t.Document = i, t.paragraph = t.Paragraph = a, t.run = t.Run = o, t.text = t.Text = c, t.tab = t.Tab = l, t.checkbox = t.Checkbox = u, t.Hyperlink = d, t.noteReference = t.NoteReference = f, t.Notes = p, t.Note = m, t.commentReference = h, t.comment = g, t.Image = v, t.Table = y, t.TableRow = b, t.TableCell = x, t.lineBreak = S("line"), t.pageBreak = S("page"), t.columnBreak = S("column"), t.BookmarkStart = C, t.verticalAlignment = s;
})), th = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z));
	t.Result = r, t.success = i, t.warning = a, t.error = o;
	function r(e, t) {
		this.value = e, this.messages = t || [];
	}
	r.prototype.map = function(e) {
		return new r(e(this.value), this.messages);
	}, r.prototype.flatMap = function(e) {
		var t = e(this.value);
		return new r(t.value, s([this, t]));
	}, r.prototype.flatMapThen = function(e) {
		var t = this;
		return e(this.value).then(function(e) {
			return new r(e.value, s([t, e]));
		});
	}, r.combine = function(e) {
		return new r(n.flatten(n.pluck(e, "value")), s(e));
	};
	function i(e) {
		return new r(e, []);
	}
	function a(e) {
		return {
			type: "warning",
			message: e
		};
	}
	function o(e) {
		return {
			type: "error",
			message: e.message,
			error: e
		};
	}
	function s(e) {
		var t = [];
		return n.flatten(n.pluck(e, "messages"), !0).forEach(function(e) {
			c(t, e) || t.push(e);
		}), t;
	}
	function c(e, t) {
		return n.find(e, l.bind(null, t)) !== void 0;
	}
	function l(e, t) {
		return e.type === t.type && e.message === t.message;
	}
})), nh = /* @__PURE__ */ a(((e) => {
	e.byteLength = c, e.toByteArray = u, e.fromByteArray = p;
	for (var t = [], n = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = i.length; a < o; ++a) t[a] = i[a], n[i.charCodeAt(a)] = a;
	n[45] = 62, n[95] = 63;
	function s(e) {
		var t = e.length;
		if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		n === -1 && (n = t);
		var r = n === t ? 0 : 4 - n % 4;
		return [n, r];
	}
	function c(e) {
		var t = s(e), n = t[0], r = t[1];
		return (n + r) * 3 / 4 - r;
	}
	function l(e, t, n) {
		return (t + n) * 3 / 4 - n;
	}
	function u(e) {
		for (var t, i = s(e), a = i[0], o = i[1], c = new r(l(e, a, o)), u = 0, d = o > 0 ? a - 4 : a, f = 0; f < d; f += 4) t = n[e.charCodeAt(f)] << 18 | n[e.charCodeAt(f + 1)] << 12 | n[e.charCodeAt(f + 2)] << 6 | n[e.charCodeAt(f + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = t & 255;
		return o === 2 && (t = n[e.charCodeAt(f)] << 2 | n[e.charCodeAt(f + 1)] >> 4, c[u++] = t & 255), o === 1 && (t = n[e.charCodeAt(f)] << 10 | n[e.charCodeAt(f + 1)] << 4 | n[e.charCodeAt(f + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = t & 255), c;
	}
	function d(e) {
		return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
	}
	function f(e, t, n) {
		for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(d(r));
		return i.join("");
	}
	function p(e) {
		for (var n, r = e.length, i = r % 3, a = [], o = 16383, s = 0, c = r - i; s < c; s += o) a.push(f(e, s, s + o > c ? c : s + o));
		return i === 1 ? (n = e[r - 1], a.push(t[n >> 2] + t[n << 4 & 63] + "==")) : i === 2 && (n = (e[r - 2] << 8) + e[r - 1], a.push(t[n >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "=")), a.join("");
	}
})), rh = /* @__PURE__ */ a(((e, n) => {
	(function(t) {
		typeof e == "object" && n !== void 0 ? n.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this).JSZip = t();
	})(function() {
		return function e(n, r, i) {
			function a(s, c) {
				if (!r[s]) {
					if (!n[s]) {
						var l = typeof t == "function" && t;
						if (!c && l) return l(s, !0);
						if (o) return o(s, !0);
						var u = /* @__PURE__ */ Error("Cannot find module '" + s + "'");
						throw u.code = "MODULE_NOT_FOUND", u;
					}
					var d = r[s] = { exports: {} };
					n[s][0].call(d.exports, function(e) {
						var t = n[s][1][e];
						return a(t || e);
					}, d, d.exports, e, n, r, i);
				}
				return r[s].exports;
			}
			for (var o = typeof t == "function" && t, s = 0; s < i.length; s++) a(i[s]);
			return a;
		}({
			1: [function(e, t, n) {
				var r = e("./utils"), i = e("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				n.encode = function(e) {
					for (var t, n, i, o, s, c, l, u = [], d = 0, f = e.length, p = f, m = r.getTypeOf(e) !== "string"; d < e.length;) p = f - d, i = m ? (t = e[d++], n = d < f ? e[d++] : 0, d < f ? e[d++] : 0) : (t = e.charCodeAt(d++), n = d < f ? e.charCodeAt(d++) : 0, d < f ? e.charCodeAt(d++) : 0), o = t >> 2, s = (3 & t) << 4 | n >> 4, c = 1 < p ? (15 & n) << 2 | i >> 6 : 64, l = 2 < p ? 63 & i : 64, u.push(a.charAt(o) + a.charAt(s) + a.charAt(c) + a.charAt(l));
					return u.join("");
				}, n.decode = function(e) {
					var t, n, r, o, s, c, l = 0, u = 0, d = "data:";
					if (e.substr(0, d.length) === d) throw Error("Invalid base64 input, it looks like a data url.");
					var f, p = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
					if (e.charAt(e.length - 1) === a.charAt(64) && p--, e.charAt(e.length - 2) === a.charAt(64) && p--, p % 1 != 0) throw Error("Invalid base64 input, bad content length.");
					for (f = i.uint8array ? new Uint8Array(0 | p) : Array(0 | p); l < e.length;) t = a.indexOf(e.charAt(l++)) << 2 | (o = a.indexOf(e.charAt(l++))) >> 4, n = (15 & o) << 4 | (s = a.indexOf(e.charAt(l++))) >> 2, r = (3 & s) << 6 | (c = a.indexOf(e.charAt(l++))), f[u++] = t, s !== 64 && (f[u++] = n), c !== 64 && (f[u++] = r);
					return f;
				};
			}, {
				"./support": 30,
				"./utils": 32
			}],
			2: [function(e, t, n) {
				var r = e("./external"), i = e("./stream/DataWorker"), a = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
				function s(e, t, n, r, i) {
					this.compressedSize = e, this.uncompressedSize = t, this.crc32 = n, this.compression = r, this.compressedContent = i;
				}
				s.prototype = {
					getContentWorker: function() {
						var e = new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), t = this;
						return e.on("end", function() {
							if (this.streamInfo.data_length !== t.uncompressedSize) throw Error("Bug : uncompressed data size mismatch");
						}), e;
					},
					getCompressedWorker: function() {
						return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
					}
				}, s.createWorkerFrom = function(e, t, n) {
					return e.pipe(new a()).pipe(new o("uncompressedSize")).pipe(t.compressWorker(n)).pipe(new o("compressedSize")).withStreamInfo("compression", t);
				}, t.exports = s;
			}, {
				"./external": 6,
				"./stream/Crc32Probe": 25,
				"./stream/DataLengthProbe": 26,
				"./stream/DataWorker": 27
			}],
			3: [function(e, t, n) {
				var r = e("./stream/GenericWorker");
				n.STORE = {
					magic: "\0\0",
					compressWorker: function() {
						return new r("STORE compression");
					},
					uncompressWorker: function() {
						return new r("STORE decompression");
					}
				}, n.DEFLATE = e("./flate");
			}, {
				"./flate": 7,
				"./stream/GenericWorker": 28
			}],
			4: [function(e, t, n) {
				var r = e("./utils"), i = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t) {
					return e !== void 0 && e.length ? r.getTypeOf(e) === "string" ? function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t.charCodeAt(s))];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : 0;
				};
			}, { "./utils": 32 }],
			5: [function(e, t, n) {
				n.base64 = !1, n.binary = !1, n.dir = !1, n.createFolders = !0, n.date = null, n.compression = null, n.compressionOptions = null, n.comment = null, n.unixPermissions = null, n.dosPermissions = null;
			}, {}],
			6: [function(e, t, n) {
				var r = null;
				r = typeof Promise < "u" ? Promise : e("lie"), t.exports = { Promise: r };
			}, { lie: 37 }],
			7: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", i = e("pako"), a = e("./utils"), o = e("./stream/GenericWorker"), s = r ? "uint8array" : "array";
				function c(e, t) {
					o.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
				}
				n.magic = "\b\0", a.inherits(c, o), c.prototype.processChunk = function(e) {
					this.meta = e.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(s, e.data), !1);
				}, c.prototype.flush = function() {
					o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
				}, c.prototype.cleanUp = function() {
					o.prototype.cleanUp.call(this), this._pako = null;
				}, c.prototype._createPako = function() {
					this._pako = new i[this._pakoAction]({
						raw: !0,
						level: this._pakoOptions.level || -1
					});
					var e = this;
					this._pako.onData = function(t) {
						e.push({
							data: t,
							meta: e.meta
						});
					};
				}, n.compressWorker = function(e) {
					return new c("Deflate", e);
				}, n.uncompressWorker = function() {
					return new c("Inflate", {});
				};
			}, {
				"./stream/GenericWorker": 28,
				"./utils": 32,
				pako: 38
			}],
			8: [function(e, t, n) {
				function r(e, t) {
					var n, r = "";
					for (n = 0; n < t; n++) r += String.fromCharCode(255 & e), e >>>= 8;
					return r;
				}
				function i(e, t, n, i, o, u) {
					var d, f, p = e.file, m = e.compression, h = u !== s.utf8encode, g = a.transformTo("string", u(p.name)), _ = a.transformTo("string", s.utf8encode(p.name)), v = p.comment, y = a.transformTo("string", u(v)), b = a.transformTo("string", s.utf8encode(v)), x = _.length !== p.name.length, S = b.length !== v.length, C = "", w = "", T = "", E = p.dir, D = p.date, O = {
						crc32: 0,
						compressedSize: 0,
						uncompressedSize: 0
					};
					t && !n || (O.crc32 = e.crc32, O.compressedSize = e.compressedSize, O.uncompressedSize = e.uncompressedSize);
					var k = 0;
					t && (k |= 8), h || !x && !S || (k |= 2048);
					var A = 0, j = 0;
					E && (A |= 16), o === "UNIX" ? (j = 798, A |= function(e, t) {
						var n = e;
						return e || (n = t ? 16893 : 33204), (65535 & n) << 16;
					}(p.unixPermissions, E)) : (j = 20, A |= function(e) {
						return 63 & (e || 0);
					}(p.dosPermissions)), d = D.getUTCHours(), d <<= 6, d |= D.getUTCMinutes(), d <<= 5, d |= D.getUTCSeconds() / 2, f = D.getUTCFullYear() - 1980, f <<= 4, f |= D.getUTCMonth() + 1, f <<= 5, f |= D.getUTCDate(), x && (w = r(1, 1) + r(c(g), 4) + _, C += "up" + r(w.length, 2) + w), S && (T = r(1, 1) + r(c(y), 4) + b, C += "uc" + r(T.length, 2) + T);
					var M = "";
					return M += "\n\0", M += r(k, 2), M += m.magic, M += r(d, 2), M += r(f, 2), M += r(O.crc32, 4), M += r(O.compressedSize, 4), M += r(O.uncompressedSize, 4), M += r(g.length, 2), M += r(C.length, 2), {
						fileRecord: l.LOCAL_FILE_HEADER + M + g + C,
						dirRecord: l.CENTRAL_FILE_HEADER + r(j, 2) + M + r(y.length, 2) + "\0\0\0\0" + r(A, 4) + r(i, 4) + g + C + y
					};
				}
				var a = e("../utils"), o = e("../stream/GenericWorker"), s = e("../utf8"), c = e("../crc32"), l = e("../signature");
				function u(e, t, n, r) {
					o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = n, this.encodeFileName = r, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
				}
				a.inherits(u, o), u.prototype.push = function(e) {
					var t = e.meta.percent || 0, n = this.entriesCount, r = this._sources.length;
					this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, o.prototype.push.call(this, {
						data: e.data,
						meta: {
							currentFile: this.currentFile,
							percent: n ? (t + 100 * (n - r - 1)) / n : 100
						}
					}));
				}, u.prototype.openedSource = function(e) {
					this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
					var t = this.streamFiles && !e.file.dir;
					if (t) {
						var n = i(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						this.push({
							data: n.fileRecord,
							meta: { percent: 0 }
						});
					} else this.accumulate = !0;
				}, u.prototype.closedSource = function(e) {
					this.accumulate = !1;
					var t = this.streamFiles && !e.file.dir, n = i(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
					if (this.dirRecords.push(n.dirRecord), t) this.push({
						data: function(e) {
							return l.DATA_DESCRIPTOR + r(e.crc32, 4) + r(e.compressedSize, 4) + r(e.uncompressedSize, 4);
						}(e),
						meta: { percent: 100 }
					});
					else for (this.push({
						data: n.fileRecord,
						meta: { percent: 0 }
					}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
					this.currentFile = null;
				}, u.prototype.flush = function() {
					for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
						data: this.dirRecords[t],
						meta: { percent: 100 }
					});
					var n = this.bytesWritten - e, i = function(e, t, n, i, o) {
						var s = a.transformTo("string", o(i));
						return l.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(e, 2) + r(e, 2) + r(t, 4) + r(n, 4) + r(s.length, 2) + s;
					}(this.dirRecords.length, n, e, this.zipComment, this.encodeFileName);
					this.push({
						data: i,
						meta: { percent: 100 }
					});
				}, u.prototype.prepareNextSource = function() {
					this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
				}, u.prototype.registerPrevious = function(e) {
					this._sources.push(e);
					var t = this;
					return e.on("data", function(e) {
						t.processChunk(e);
					}), e.on("end", function() {
						t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
					}), e.on("error", function(e) {
						t.error(e);
					}), this;
				}, u.prototype.resume = function() {
					return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
				}, u.prototype.error = function(e) {
					var t = this._sources;
					if (!o.prototype.error.call(this, e)) return !1;
					for (var n = 0; n < t.length; n++) try {
						t[n].error(e);
					} catch {}
					return !0;
				}, u.prototype.lock = function() {
					o.prototype.lock.call(this);
					for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
				}, t.exports = u;
			}, {
				"../crc32": 4,
				"../signature": 23,
				"../stream/GenericWorker": 28,
				"../utf8": 31,
				"../utils": 32
			}],
			9: [function(e, t, n) {
				var r = e("../compressions"), i = e("./ZipFileWorker");
				n.generateWorker = function(e, t, n) {
					var a = new i(t.streamFiles, n, t.platform, t.encodeFileName), o = 0;
					try {
						e.forEach(function(e, n) {
							o++;
							var i = function(e, t) {
								var n = e || t, i = r[n];
								if (!i) throw Error(n + " is not a valid compression method !");
								return i;
							}(n.options.compression, t.compression), s = n.options.compressionOptions || t.compressionOptions || {}, c = n.dir, l = n.date;
							n._compressWorker(i, s).withStreamInfo("file", {
								name: e,
								dir: c,
								date: l,
								comment: n.comment || "",
								unixPermissions: n.unixPermissions,
								dosPermissions: n.dosPermissions
							}).pipe(a);
						}), a.entriesCount = o;
					} catch (e) {
						a.error(e);
					}
					return a;
				};
			}, {
				"../compressions": 3,
				"./ZipFileWorker": 8
			}],
			10: [function(e, t, n) {
				function r() {
					if (!(this instanceof r)) return new r();
					if (arguments.length) throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
					this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
						var e = new r();
						for (var t in this) typeof this[t] != "function" && (e[t] = this[t]);
						return e;
					};
				}
				(r.prototype = e("./object")).loadAsync = e("./load"), r.support = e("./support"), r.defaults = e("./defaults"), r.version = "3.10.1", r.loadAsync = function(e, t) {
					return new r().loadAsync(e, t);
				}, r.external = e("./external"), t.exports = r;
			}, {
				"./defaults": 5,
				"./external": 6,
				"./load": 11,
				"./object": 15,
				"./support": 30
			}],
			11: [function(e, t, n) {
				var r = e("./utils"), i = e("./external"), a = e("./utf8"), o = e("./zipEntries"), s = e("./stream/Crc32Probe"), c = e("./nodejsUtils");
				function l(e) {
					return new i.Promise(function(t, n) {
						var r = e.decompressed.getContentWorker().pipe(new s());
						r.on("error", function(e) {
							n(e);
						}).on("end", function() {
							r.streamInfo.crc32 === e.decompressed.crc32 ? t() : n(/* @__PURE__ */ Error("Corrupted zip : CRC32 mismatch"));
						}).resume();
					});
				}
				t.exports = function(e, t) {
					var n = this;
					return t = r.extend(t || {}, {
						base64: !1,
						checkCRC32: !1,
						optimizedBinaryString: !1,
						createFolders: !1,
						decodeFileName: a.utf8decode
					}), c.isNode && c.isStream(e) ? i.Promise.reject(/* @__PURE__ */ Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", e, !0, t.optimizedBinaryString, t.base64).then(function(e) {
						var n = new o(t);
						return n.load(e), n;
					}).then(function(e) {
						var n = [i.Promise.resolve(e)], r = e.files;
						if (t.checkCRC32) for (var a = 0; a < r.length; a++) n.push(l(r[a]));
						return i.Promise.all(n);
					}).then(function(e) {
						for (var i = e.shift(), a = i.files, o = 0; o < a.length; o++) {
							var s = a[o], c = s.fileNameStr, l = r.resolve(s.fileNameStr);
							n.file(l, s.decompressed, {
								binary: !0,
								optimizedBinaryString: !0,
								date: s.date,
								dir: s.dir,
								comment: s.fileCommentStr.length ? s.fileCommentStr : null,
								unixPermissions: s.unixPermissions,
								dosPermissions: s.dosPermissions,
								createFolders: t.createFolders
							}), s.dir || (n.file(l).unsafeOriginalName = c);
						}
						return i.zipComment.length && (n.comment = i.zipComment), n;
					});
				};
			}, {
				"./external": 6,
				"./nodejsUtils": 14,
				"./stream/Crc32Probe": 25,
				"./utf8": 31,
				"./utils": 32,
				"./zipEntries": 33
			}],
			12: [function(e, t, n) {
				var r = e("../utils"), i = e("../stream/GenericWorker");
				function a(e, t) {
					i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
				}
				r.inherits(a, i), a.prototype._bindStream = function(e) {
					var t = this;
					(this._stream = e).pause(), e.on("data", function(e) {
						t.push({
							data: e,
							meta: { percent: 0 }
						});
					}).on("error", function(e) {
						t.isPaused ? this.generatedError = e : t.error(e);
					}).on("end", function() {
						t.isPaused ? t._upstreamEnded = !0 : t.end();
					});
				}, a.prototype.pause = function() {
					return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
				}, t.exports = a;
			}, {
				"../stream/GenericWorker": 28,
				"../utils": 32
			}],
			13: [function(e, t, n) {
				var r = e("readable-stream").Readable;
				function i(e, t, n) {
					r.call(this, t), this._helper = e;
					var i = this;
					e.on("data", function(e, t) {
						i.push(e) || i._helper.pause(), n && n(t);
					}).on("error", function(e) {
						i.emit("error", e);
					}).on("end", function() {
						i.push(null);
					});
				}
				e("../utils").inherits(i, r), i.prototype._read = function() {
					this._helper.resume();
				}, t.exports = i;
			}, {
				"../utils": 32,
				"readable-stream": 16
			}],
			14: [function(e, t, n) {
				t.exports = {
					isNode: typeof Buffer < "u",
					newBufferFrom: function(e, t) {
						if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
						if (typeof e == "number") throw Error("The \"data\" argument must not be a number");
						return new Buffer(e, t);
					},
					allocBuffer: function(e) {
						if (Buffer.alloc) return Buffer.alloc(e);
						var t = new Buffer(e);
						return t.fill(0), t;
					},
					isBuffer: function(e) {
						return Buffer.isBuffer(e);
					},
					isStream: function(e) {
						return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
					}
				};
			}, {}],
			15: [function(e, t, n) {
				function r(e, t, n) {
					var r, i = a.getTypeOf(t), s = a.extend(n || {}, c);
					s.date = s.date || /* @__PURE__ */ new Date(), s.compression !== null && (s.compression = s.compression.toUpperCase()), typeof s.unixPermissions == "string" && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = h(e)), s.createFolders && (r = m(e)) && g.call(this, r, !0);
					var d = i === "string" && !1 === s.binary && !1 === s.base64;
					n && n.binary !== void 0 || (s.binary = !d), (t instanceof l && t.uncompressedSize === 0 || s.dir || !t || t.length === 0) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
					var _ = null;
					_ = t instanceof l || t instanceof o ? t : f.isNode && f.isStream(t) ? new p(e, t) : a.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
					var v = new u(e, _, s);
					this.files[e] = v;
				}
				var i = e("./utf8"), a = e("./utils"), o = e("./stream/GenericWorker"), s = e("./stream/StreamHelper"), c = e("./defaults"), l = e("./compressedObject"), u = e("./zipObject"), d = e("./generate"), f = e("./nodejsUtils"), p = e("./nodejs/NodejsStreamInputAdapter"), m = function(e) {
					e.slice(-1) === "/" && (e = e.substring(0, e.length - 1));
					var t = e.lastIndexOf("/");
					return 0 < t ? e.substring(0, t) : "";
				}, h = function(e) {
					return e.slice(-1) !== "/" && (e += "/"), e;
				}, g = function(e, t) {
					return t = t === void 0 ? c.createFolders : t, e = h(e), this.files[e] || r.call(this, e, null, {
						dir: !0,
						createFolders: t
					}), this.files[e];
				};
				function _(e) {
					return Object.prototype.toString.call(e) === "[object RegExp]";
				}
				t.exports = {
					load: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					forEach: function(e) {
						var t, n, r;
						for (t in this.files) r = this.files[t], (n = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(n, r);
					},
					filter: function(e) {
						var t = [];
						return this.forEach(function(n, r) {
							e(n, r) && t.push(r);
						}), t;
					},
					file: function(e, t, n) {
						if (arguments.length !== 1) return e = this.root + e, r.call(this, e, t, n), this;
						if (_(e)) {
							var i = e;
							return this.filter(function(e, t) {
								return !t.dir && i.test(e);
							});
						}
						var a = this.files[this.root + e];
						return a && !a.dir ? a : null;
					},
					folder: function(e) {
						if (!e) return this;
						if (_(e)) return this.filter(function(t, n) {
							return n.dir && e.test(t);
						});
						var t = this.root + e, n = g.call(this, t), r = this.clone();
						return r.root = n.name, r;
					},
					remove: function(e) {
						e = this.root + e;
						var t = this.files[e];
						if (t ||= (e.slice(-1) !== "/" && (e += "/"), this.files[e]), t && !t.dir) delete this.files[e];
						else for (var n = this.filter(function(t, n) {
							return n.name.slice(0, e.length) === e;
						}), r = 0; r < n.length; r++) delete this.files[n[r].name];
						return this;
					},
					generate: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					generateInternalStream: function(e) {
						var t, n = {};
						try {
							if ((n = a.extend(e || {}, {
								streamFiles: !1,
								compression: "STORE",
								compressionOptions: null,
								type: "",
								platform: "DOS",
								comment: null,
								mimeType: "application/zip",
								encodeFileName: i.utf8encode
							})).type = n.type.toLowerCase(), n.compression = n.compression.toUpperCase(), n.type === "binarystring" && (n.type = "string"), !n.type) throw Error("No output type specified.");
							a.checkSupport(n.type), n.platform !== "darwin" && n.platform !== "freebsd" && n.platform !== "linux" && n.platform !== "sunos" || (n.platform = "UNIX"), n.platform === "win32" && (n.platform = "DOS");
							var r = n.comment || this.comment || "";
							t = d.generateWorker(this, n, r);
						} catch (e) {
							(t = new o("error")).error(e);
						}
						return new s(t, n.type || "string", n.mimeType);
					},
					generateAsync: function(e, t) {
						return this.generateInternalStream(e).accumulate(t);
					},
					generateNodeStream: function(e, t) {
						return (e ||= {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
					}
				};
			}, {
				"./compressedObject": 2,
				"./defaults": 5,
				"./generate": 9,
				"./nodejs/NodejsStreamInputAdapter": 12,
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31,
				"./utils": 32,
				"./zipObject": 35
			}],
			16: [function(e, t, n) {
				t.exports = e("stream");
			}, { stream: void 0 }],
			17: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
					for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data[this.zero + e];
				}, i.prototype.lastIndexOfSignature = function(e) {
					for (var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.length - 4; 0 <= a; --a) if (this.data[a] === t && this.data[a + 1] === n && this.data[a + 2] === r && this.data[a + 3] === i) return a - this.zero;
					return -1;
				}, i.prototype.readAndCheckSignature = function(e) {
					var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.readData(4);
					return t === a[0] && n === a[1] && r === a[2] && i === a[3];
				}, i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return [];
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			18: [function(e, t, n) {
				var r = e("../utils");
				function i(e) {
					this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
				}
				i.prototype = {
					checkOffset: function(e) {
						this.checkIndex(this.index + e);
					},
					checkIndex: function(e) {
						if (this.length < this.zero + e || e < 0) throw Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
					},
					setIndex: function(e) {
						this.checkIndex(e), this.index = e;
					},
					skip: function(e) {
						this.setIndex(this.index + e);
					},
					byteAt: function() {},
					readInt: function(e) {
						var t, n = 0;
						for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) n = (n << 8) + this.byteAt(t);
						return this.index += e, n;
					},
					readString: function(e) {
						return r.transformTo("string", this.readData(e));
					},
					readData: function() {},
					lastIndexOfSignature: function() {},
					readAndCheckSignature: function() {},
					readDate: function() {
						var e = this.readInt(4);
						return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
					}
				}, t.exports = i;
			}, { "../utils": 32 }],
			19: [function(e, t, n) {
				var r = e("./Uint8ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./Uint8ArrayReader": 21
			}],
			20: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data.charCodeAt(this.zero + e);
				}, i.prototype.lastIndexOfSignature = function(e) {
					return this.data.lastIndexOf(e) - this.zero;
				}, i.prototype.readAndCheckSignature = function(e) {
					return e === this.readData(4);
				}, i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			21: [function(e, t, n) {
				var r = e("./ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return /* @__PURE__ */ new Uint8Array();
					var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./ArrayReader": 17
			}],
			22: [function(e, t, n) {
				var r = e("../utils"), i = e("../support"), a = e("./ArrayReader"), o = e("./StringReader"), s = e("./NodeBufferReader"), c = e("./Uint8ArrayReader");
				t.exports = function(e) {
					var t = r.getTypeOf(e);
					return r.checkSupport(t), t !== "string" || i.uint8array ? t === "nodebuffer" ? new s(e) : i.uint8array ? new c(r.transformTo("uint8array", e)) : new a(r.transformTo("array", e)) : new o(e);
				};
			}, {
				"../support": 30,
				"../utils": 32,
				"./ArrayReader": 17,
				"./NodeBufferReader": 19,
				"./StringReader": 20,
				"./Uint8ArrayReader": 21
			}],
			23: [function(e, t, n) {
				n.LOCAL_FILE_HEADER = "PK", n.CENTRAL_FILE_HEADER = "PK", n.CENTRAL_DIRECTORY_END = "PK", n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", n.ZIP64_CENTRAL_DIRECTORY_END = "PK", n.DATA_DESCRIPTOR = "PK\x07\b";
			}, {}],
			24: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../utils");
				function a(e) {
					r.call(this, "ConvertWorker to " + e), this.destType = e;
				}
				i.inherits(a, r), a.prototype.processChunk = function(e) {
					this.push({
						data: i.transformTo(this.destType, e.data),
						meta: e.meta
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			25: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../crc32");
				function a() {
					r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
				}
				e("../utils").inherits(a, r), a.prototype.processChunk = function(e) {
					this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
				}, t.exports = a;
			}, {
				"../crc32": 4,
				"../utils": 32,
				"./GenericWorker": 28
			}],
			26: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
				}
				r.inherits(a, i), a.prototype.processChunk = function(e) {
					if (e) {
						var t = this.streamInfo[this.propName] || 0;
						this.streamInfo[this.propName] = t + e.data.length;
					}
					i.prototype.processChunk.call(this, e);
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			27: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataWorker");
					var t = this;
					this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
						t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = r.getTypeOf(e), t.isPaused || t._tickAndRepeat();
					}, function(e) {
						t.error(e);
					});
				}
				r.inherits(a, i), a.prototype.cleanUp = function() {
					i.prototype.cleanUp.call(this), this.data = null;
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
				}, a.prototype._tickAndRepeat = function() {
					this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
				}, a.prototype._tick = function() {
					if (this.isPaused || this.isFinished) return !1;
					var e = null, t = Math.min(this.max, this.index + 16384);
					if (this.index >= this.max) return this.end();
					switch (this.type) {
						case "string":
							e = this.data.substring(this.index, t);
							break;
						case "uint8array":
							e = this.data.subarray(this.index, t);
							break;
						case "array":
						case "nodebuffer": e = this.data.slice(this.index, t);
					}
					return this.index = t, this.push({
						data: e,
						meta: { percent: this.max ? this.index / this.max * 100 : 0 }
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			28: [function(e, t, n) {
				function r(e) {
					this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
						data: [],
						end: [],
						error: []
					}, this.previous = null;
				}
				r.prototype = {
					push: function(e) {
						this.emit("data", e);
					},
					end: function() {
						if (this.isFinished) return !1;
						this.flush();
						try {
							this.emit("end"), this.cleanUp(), this.isFinished = !0;
						} catch (e) {
							this.emit("error", e);
						}
						return !0;
					},
					error: function(e) {
						return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
					},
					on: function(e, t) {
						return this._listeners[e].push(t), this;
					},
					cleanUp: function() {
						this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
					},
					emit: function(e, t) {
						if (this._listeners[e]) for (var n = 0; n < this._listeners[e].length; n++) this._listeners[e][n].call(this, t);
					},
					pipe: function(e) {
						return e.registerPrevious(this);
					},
					registerPrevious: function(e) {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
						var t = this;
						return e.on("data", function(e) {
							t.processChunk(e);
						}), e.on("end", function() {
							t.end();
						}), e.on("error", function(e) {
							t.error(e);
						}), this;
					},
					pause: function() {
						return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
					},
					resume: function() {
						if (!this.isPaused || this.isFinished) return !1;
						var e = this.isPaused = !1;
						return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
					},
					flush: function() {},
					processChunk: function(e) {
						this.push(e);
					},
					withStreamInfo: function(e, t) {
						return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
					},
					mergeStreamInfo: function() {
						for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
					},
					lock: function() {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.isLocked = !0, this.previous && this.previous.lock();
					},
					toString: function() {
						var e = "Worker " + this.name;
						return this.previous ? this.previous + " -> " + e : e;
					}
				}, t.exports = r;
			}, {}],
			29: [function(e, t, n) {
				var r = e("../utils"), i = e("./ConvertWorker"), a = e("./GenericWorker"), o = e("../base64"), s = e("../support"), c = e("../external"), l = null;
				if (s.nodestream) try {
					l = e("../nodejs/NodejsStreamOutputAdapter");
				} catch {}
				function u(e, t) {
					return new c.Promise(function(n, i) {
						var a = [], s = e._internalType, c = e._outputType, l = e._mimeType;
						e.on("data", function(e, n) {
							a.push(e), t && t(n);
						}).on("error", function(e) {
							a = [], i(e);
						}).on("end", function() {
							try {
								n(function(e, t, n) {
									switch (e) {
										case "blob": return r.newBlob(r.transformTo("arraybuffer", t), n);
										case "base64": return o.encode(t);
										default: return r.transformTo(e, t);
									}
								}(c, function(e, t) {
									var n, r = 0, i = null, a = 0;
									for (n = 0; n < t.length; n++) a += t[n].length;
									switch (e) {
										case "string": return t.join("");
										case "array": return Array.prototype.concat.apply([], t);
										case "uint8array":
											for (i = new Uint8Array(a), n = 0; n < t.length; n++) i.set(t[n], r), r += t[n].length;
											return i;
										case "nodebuffer": return Buffer.concat(t);
										default: throw Error("concat : unsupported type '" + e + "'");
									}
								}(s, a), l));
							} catch (e) {
								i(e);
							}
							a = [];
						}).resume();
					});
				}
				function d(e, t, n) {
					var o = t;
					switch (t) {
						case "blob":
						case "arraybuffer":
							o = "uint8array";
							break;
						case "base64": o = "string";
					}
					try {
						this._internalType = o, this._outputType = t, this._mimeType = n, r.checkSupport(o), this._worker = e.pipe(new i(o)), e.lock();
					} catch (e) {
						this._worker = new a("error"), this._worker.error(e);
					}
				}
				d.prototype = {
					accumulate: function(e) {
						return u(this, e);
					},
					on: function(e, t) {
						var n = this;
						return e === "data" ? this._worker.on(e, function(e) {
							t.call(n, e.data, e.meta);
						}) : this._worker.on(e, function() {
							r.delay(t, arguments, n);
						}), this;
					},
					resume: function() {
						return r.delay(this._worker.resume, [], this._worker), this;
					},
					pause: function() {
						return this._worker.pause(), this;
					},
					toNodejsStream: function(e) {
						if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw Error(this._outputType + " is not supported by this method");
						return new l(this, { objectMode: this._outputType !== "nodebuffer" }, e);
					}
				}, t.exports = d;
			}, {
				"../base64": 1,
				"../external": 6,
				"../nodejs/NodejsStreamOutputAdapter": 13,
				"../support": 30,
				"../utils": 32,
				"./ConvertWorker": 24,
				"./GenericWorker": 28
			}],
			30: [function(e, t, n) {
				if (n.base64 = !0, n.array = !0, n.string = !0, n.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", n.nodebuffer = typeof Buffer < "u", n.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") n.blob = !1;
				else {
					var r = /* @__PURE__ */ new ArrayBuffer(0);
					try {
						n.blob = new Blob([r], { type: "application/zip" }).size === 0;
					} catch {
						try {
							var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							i.append(r), n.blob = i.getBlob("application/zip").size === 0;
						} catch {
							n.blob = !1;
						}
					}
				}
				try {
					n.nodestream = !!e("readable-stream").Readable;
				} catch {
					n.nodestream = !1;
				}
			}, { "readable-stream": 16 }],
			31: [function(e, t, n) {
				for (var r = e("./utils"), i = e("./support"), a = e("./nodejsUtils"), o = e("./stream/GenericWorker"), s = Array(256), c = 0; c < 256; c++) s[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
				s[254] = s[254] = 1;
				function l() {
					o.call(this, "utf-8 decode"), this.leftOver = null;
				}
				function u() {
					o.call(this, "utf-8 encode");
				}
				n.utf8encode = function(e) {
					return i.nodebuffer ? a.newBufferFrom(e, "utf-8") : function(e) {
						var t, n, r, a, o, s = e.length, c = 0;
						for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
						for (t = i.uint8array ? new Uint8Array(c) : Array(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
						return t;
					}(e);
				}, n.utf8decode = function(e) {
					return i.nodebuffer ? r.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
						var t, n, i, a, o = e.length, c = Array(2 * o);
						for (t = n = 0; t < o;) if ((i = e[t++]) < 128) c[n++] = i;
						else if (4 < (a = s[i])) c[n++] = 65533, t += a - 1;
						else {
							for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && t < o;) i = i << 6 | 63 & e[t++], a--;
							1 < a ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, c[n++] = 56320 | 1023 & i);
						}
						return c.length !== n && (c.subarray ? c = c.subarray(0, n) : c.length = n), r.applyFromCharCode(c);
					}(e = r.transformTo(i.uint8array ? "uint8array" : "array", e));
				}, r.inherits(l, o), l.prototype.processChunk = function(e) {
					var t = r.transformTo(i.uint8array ? "uint8array" : "array", e.data);
					if (this.leftOver && this.leftOver.length) {
						if (i.uint8array) {
							var a = t;
							(t = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), t.set(a, this.leftOver.length);
						} else t = this.leftOver.concat(t);
						this.leftOver = null;
					}
					var o = function(e, t) {
						var n;
						for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
						return n < 0 || n === 0 ? t : n + s[e[n]] > t ? n : t;
					}(t), c = t;
					o !== t.length && (i.uint8array ? (c = t.subarray(0, o), this.leftOver = t.subarray(o, t.length)) : (c = t.slice(0, o), this.leftOver = t.slice(o, t.length))), this.push({
						data: n.utf8decode(c),
						meta: e.meta
					});
				}, l.prototype.flush = function() {
					this.leftOver && this.leftOver.length && (this.push({
						data: n.utf8decode(this.leftOver),
						meta: {}
					}), this.leftOver = null);
				}, n.Utf8DecodeWorker = l, r.inherits(u, o), u.prototype.processChunk = function(e) {
					this.push({
						data: n.utf8encode(e.data),
						meta: e.meta
					});
				}, n.Utf8EncodeWorker = u;
			}, {
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./support": 30,
				"./utils": 32
			}],
			32: [function(e, t, n) {
				var r = e("./support"), i = e("./base64"), a = e("./nodejsUtils"), o = e("./external");
				function s(e) {
					return e;
				}
				function c(e, t) {
					for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
					return t;
				}
				e("setimmediate"), n.newBlob = function(e, t) {
					n.checkSupport("blob");
					try {
						return new Blob([e], { type: t });
					} catch {
						try {
							var r = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							return r.append(e), r.getBlob(t);
						} catch {
							throw Error("Bug : can't construct the Blob.");
						}
					}
				};
				var l = {
					stringifyByChunk: function(e, t, n) {
						var r = [], i = 0, a = e.length;
						if (a <= n) return String.fromCharCode.apply(null, e);
						for (; i < a;) t === "array" || t === "nodebuffer" ? r.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + n, a)))) : r.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + n, a)))), i += n;
						return r.join("");
					},
					stringifyByChar: function(e) {
						for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
						return t;
					},
					applyCanBeUsed: {
						uint8array: function() {
							try {
								return r.uint8array && String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1)).length === 1;
							} catch {
								return !1;
							}
						}(),
						nodebuffer: function() {
							try {
								return r.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
							} catch {
								return !1;
							}
						}()
					}
				};
				function u(e) {
					var t = 65536, r = n.getTypeOf(e), i = !0;
					if (r === "uint8array" ? i = l.applyCanBeUsed.uint8array : r === "nodebuffer" && (i = l.applyCanBeUsed.nodebuffer), i) for (; 1 < t;) try {
						return l.stringifyByChunk(e, r, t);
					} catch {
						t = Math.floor(t / 2);
					}
					return l.stringifyByChar(e);
				}
				function d(e, t) {
					for (var n = 0; n < e.length; n++) t[n] = e[n];
					return t;
				}
				n.applyFromCharCode = u;
				var f = {};
				f.string = {
					string: s,
					array: function(e) {
						return c(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.string.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return c(e, new Uint8Array(e.length));
					},
					nodebuffer: function(e) {
						return c(e, a.allocBuffer(e.length));
					}
				}, f.array = {
					string: u,
					array: s,
					arraybuffer: function(e) {
						return new Uint8Array(e).buffer;
					},
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.arraybuffer = {
					string: function(e) {
						return u(new Uint8Array(e));
					},
					array: function(e) {
						return d(new Uint8Array(e), Array(e.byteLength));
					},
					arraybuffer: s,
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(new Uint8Array(e));
					}
				}, f.uint8array = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return e.buffer;
					},
					uint8array: s,
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.nodebuffer = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.nodebuffer.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return d(e, new Uint8Array(e.length));
					},
					nodebuffer: s
				}, n.transformTo = function(e, t) {
					return t ||= "", e ? (n.checkSupport(e), f[n.getTypeOf(t)][e](t)) : t;
				}, n.resolve = function(e) {
					for (var t = e.split("/"), n = [], r = 0; r < t.length; r++) {
						var i = t[r];
						i === "." || i === "" && r !== 0 && r !== t.length - 1 || (i === ".." ? n.pop() : n.push(i));
					}
					return n.join("/");
				}, n.getTypeOf = function(e) {
					return typeof e == "string" ? "string" : Object.prototype.toString.call(e) === "[object Array]" ? "array" : r.nodebuffer && a.isBuffer(e) ? "nodebuffer" : r.uint8array && e instanceof Uint8Array ? "uint8array" : r.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
				}, n.checkSupport = function(e) {
					if (!r[e.toLowerCase()]) throw Error(e + " is not supported by this platform");
				}, n.MAX_VALUE_16BITS = 65535, n.MAX_VALUE_32BITS = -1, n.pretty = function(e) {
					var t, n, r = "";
					for (n = 0; n < (e || "").length; n++) r += "\\x" + ((t = e.charCodeAt(n)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
					return r;
				}, n.delay = function(e, t, n) {
					setImmediate(function() {
						e.apply(n || null, t || []);
					});
				}, n.inherits = function(e, t) {
					function n() {}
					n.prototype = t.prototype, e.prototype = new n();
				}, n.extend = function() {
					var e, t, n = {};
					for (e = 0; e < arguments.length; e++) for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && n[t] === void 0 && (n[t] = arguments[e][t]);
					return n;
				}, n.prepareContent = function(e, t, a, s, l) {
					return o.Promise.resolve(t).then(function(e) {
						return r.blob && (e instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(t, n) {
							var r = new FileReader();
							r.onload = function(e) {
								t(e.target.result);
							}, r.onerror = function(e) {
								n(e.target.error);
							}, r.readAsArrayBuffer(e);
						}) : e;
					}).then(function(t) {
						var u = n.getTypeOf(t);
						return u ? (u === "arraybuffer" ? t = n.transformTo("uint8array", t) : u === "string" && (l ? t = i.decode(t) : a && !0 !== s && (t = function(e) {
							return c(e, r.uint8array ? new Uint8Array(e.length) : Array(e.length));
						}(t))), t) : o.Promise.reject(/* @__PURE__ */ Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
					});
				};
			}, {
				"./base64": 1,
				"./external": 6,
				"./nodejsUtils": 14,
				"./support": 30,
				setimmediate: 54
			}],
			33: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./signature"), o = e("./zipEntry"), s = e("./support");
				function c(e) {
					this.files = [], this.loadOptions = e;
				}
				c.prototype = {
					checkSignature: function(e) {
						if (!this.reader.readAndCheckSignature(e)) {
							this.reader.index -= 4;
							var t = this.reader.readString(4);
							throw Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
						}
					},
					isSignature: function(e, t) {
						var n = this.reader.index;
						this.reader.setIndex(e);
						var r = this.reader.readString(4) === t;
						return this.reader.setIndex(n), r;
					},
					readBlockEndOfCentral: function() {
						this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
						var e = this.reader.readData(this.zipCommentLength), t = s.uint8array ? "uint8array" : "array", n = i.transformTo(t, e);
						this.zipComment = this.loadOptions.decodeFileName(n);
					},
					readBlockZip64EndOfCentral: function() {
						this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
						for (var e, t, n, r = this.zip64EndOfCentralSize - 44; 0 < r;) e = this.reader.readInt(2), t = this.reader.readInt(4), n = this.reader.readData(t), this.zip64ExtensibleData[e] = {
							id: e,
							length: t,
							value: n
						};
					},
					readBlockZip64EndOfCentralLocator: function() {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw Error("Multi-volumes zip are not supported");
					},
					readLocalFiles: function() {
						for (var e = 0, t; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
					},
					readCentralDir: function() {
						var e;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);) (e = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
						if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
					},
					readEndOfCentral: function() {
						var e = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
						if (e < 0) throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? /* @__PURE__ */ Error("Corrupted zip: can't find end of central directory") : /* @__PURE__ */ Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
						this.reader.setIndex(e);
						var t = e;
						if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
							if (this.reader.setIndex(e), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error("Corrupted zip: can't find the ZIP64 end of central directory");
							this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
						}
						var n = this.centralDirOffset + this.centralDirSize;
						this.zip64 && (n += 20, n += 12 + this.zip64EndOfCentralSize);
						var r = t - n;
						if (0 < r) this.isSignature(t, a.CENTRAL_FILE_HEADER) || (this.reader.zero = r);
						else if (r < 0) throw Error("Corrupted zip: missing " + Math.abs(r) + " bytes.");
					},
					prepareReader: function(e) {
						this.reader = r(e);
					},
					load: function(e) {
						this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
					}
				}, t.exports = c;
			}, {
				"./reader/readerFor": 22,
				"./signature": 23,
				"./support": 30,
				"./utils": 32,
				"./zipEntry": 34
			}],
			34: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./compressedObject"), o = e("./crc32"), s = e("./utf8"), c = e("./compressions"), l = e("./support");
				function u(e, t) {
					this.options = e, this.loadOptions = t;
				}
				u.prototype = {
					isEncrypted: function() {
						return (1 & this.bitFlag) == 1;
					},
					useUTF8: function() {
						return (2048 & this.bitFlag) == 2048;
					},
					readLocalPart: function(e) {
						var t, n;
						if (e.skip(22), this.fileNameLength = e.readInt(2), n = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(n), this.compressedSize === -1 || this.uncompressedSize === -1) throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
						if ((t = function(e) {
							for (var t in c) if (Object.prototype.hasOwnProperty.call(c, t) && c[t].magic === e) return c[t];
							return null;
						}(this.compressionMethod)) === null) throw Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
						this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
					},
					readCentralPart: function(e) {
						this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
						var t = e.readInt(2);
						if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
						e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
					},
					processAttributes: function() {
						this.unixPermissions = null, this.dosPermissions = null;
						var e = this.versionMadeBy >> 8;
						this.dir = !!(16 & this.externalFileAttributes), e == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), e == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
					},
					parseZIP64ExtraField: function() {
						if (this.extraFields[1]) {
							var e = r(this.extraFields[1].value);
							this.uncompressedSize === i.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === i.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === i.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === i.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
						}
					},
					readExtraFields: function(e) {
						var t, n, r, i = e.index + this.extraFieldsLength;
						for (this.extraFields ||= {}; e.index + 4 < i;) t = e.readInt(2), n = e.readInt(2), r = e.readData(n), this.extraFields[t] = {
							id: t,
							length: n,
							value: r
						};
						e.setIndex(i);
					},
					handleUTF8: function() {
						var e = l.uint8array ? "uint8array" : "array";
						if (this.useUTF8()) this.fileNameStr = s.utf8decode(this.fileName), this.fileCommentStr = s.utf8decode(this.fileComment);
						else {
							var t = this.findExtraFieldUnicodePath();
							if (t !== null) this.fileNameStr = t;
							else {
								var n = i.transformTo(e, this.fileName);
								this.fileNameStr = this.loadOptions.decodeFileName(n);
							}
							var r = this.findExtraFieldUnicodeComment();
							if (r !== null) this.fileCommentStr = r;
							else {
								var a = i.transformTo(e, this.fileComment);
								this.fileCommentStr = this.loadOptions.decodeFileName(a);
							}
						}
					},
					findExtraFieldUnicodePath: function() {
						var e = this.extraFields[28789];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) === 1 && o(this.fileName) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
						}
						return null;
					},
					findExtraFieldUnicodeComment: function() {
						var e = this.extraFields[25461];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) === 1 && o(this.fileComment) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
						}
						return null;
					}
				}, t.exports = u;
			}, {
				"./compressedObject": 2,
				"./compressions": 3,
				"./crc32": 4,
				"./reader/readerFor": 22,
				"./support": 30,
				"./utf8": 31,
				"./utils": 32
			}],
			35: [function(e, t, n) {
				function r(e, t, n) {
					this.name = e, this.dir = n.dir, this.date = n.date, this.comment = n.comment, this.unixPermissions = n.unixPermissions, this.dosPermissions = n.dosPermissions, this._data = t, this._dataBinary = n.binary, this.options = {
						compression: n.compression,
						compressionOptions: n.compressionOptions
					};
				}
				var i = e("./stream/StreamHelper"), a = e("./stream/DataWorker"), o = e("./utf8"), s = e("./compressedObject"), c = e("./stream/GenericWorker");
				r.prototype = {
					internalStream: function(e) {
						var t = null, n = "string";
						try {
							if (!e) throw Error("No output type specified.");
							var r = (n = e.toLowerCase()) === "string" || n === "text";
							n !== "binarystring" && n !== "text" || (n = "string"), t = this._decompressWorker();
							var a = !this._dataBinary;
							a && !r && (t = t.pipe(new o.Utf8EncodeWorker())), !a && r && (t = t.pipe(new o.Utf8DecodeWorker()));
						} catch (e) {
							(t = new c("error")).error(e);
						}
						return new i(t, n, "");
					},
					async: function(e, t) {
						return this.internalStream(e).accumulate(t);
					},
					nodeStream: function(e, t) {
						return this.internalStream(e || "nodebuffer").toNodejsStream(t);
					},
					_compressWorker: function(e, t) {
						if (this._data instanceof s && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
						var n = this._decompressWorker();
						return this._dataBinary || (n = n.pipe(new o.Utf8EncodeWorker())), s.createWorkerFrom(n, e, t);
					},
					_decompressWorker: function() {
						return this._data instanceof s ? this._data.getContentWorker() : this._data instanceof c ? this._data : new a(this._data);
					}
				};
				for (var l = [
					"asText",
					"asBinary",
					"asNodeBuffer",
					"asUint8Array",
					"asArrayBuffer"
				], u = function() {
					throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
				}, d = 0; d < l.length; d++) r.prototype[l[d]] = u;
				t.exports = r;
			}, {
				"./compressedObject": 2,
				"./stream/DataWorker": 27,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31
			}],
			36: [function(e, t, n) {
				(function(e) {
					var n, r, i = e.MutationObserver || e.WebKitMutationObserver;
					if (i) {
						var a = 0, o = new i(u), s = e.document.createTextNode("");
						o.observe(s, { characterData: !0 }), n = function() {
							s.data = a = ++a % 2;
						};
					} else if (e.setImmediate || e.MessageChannel === void 0) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
						var t = e.document.createElement("script");
						t.onreadystatechange = function() {
							u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
						}, e.document.documentElement.appendChild(t);
					} : function() {
						setTimeout(u, 0);
					};
					else {
						var c = new e.MessageChannel();
						c.port1.onmessage = u, n = function() {
							c.port2.postMessage(0);
						};
					}
					var l = [];
					function u() {
						var e, t;
						r = !0;
						for (var n = l.length; n;) {
							for (t = l, l = [], e = -1; ++e < n;) t[e]();
							n = l.length;
						}
						r = !1;
					}
					t.exports = function(e) {
						l.push(e) !== 1 || r || n();
					};
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}],
			37: [function(e, t, n) {
				var r = e("immediate");
				function i() {}
				var a = {}, o = ["REJECTED"], s = ["FULFILLED"], c = ["PENDING"];
				function l(e) {
					if (typeof e != "function") throw TypeError("resolver must be a function");
					this.state = c, this.queue = [], this.outcome = void 0, e !== i && p(this, e);
				}
				function u(e, t, n) {
					this.promise = e, typeof t == "function" && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), typeof n == "function" && (this.onRejected = n, this.callRejected = this.otherCallRejected);
				}
				function d(e, t, n) {
					r(function() {
						var r;
						try {
							r = t(n);
						} catch (t) {
							return a.reject(e, t);
						}
						r === e ? a.reject(e, /* @__PURE__ */ TypeError("Cannot resolve promise with itself")) : a.resolve(e, r);
					});
				}
				function f(e) {
					var t = e && e.then;
					if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") return function() {
						t.apply(e, arguments);
					};
				}
				function p(e, t) {
					var n = !1;
					function r(t) {
						n || (n = !0, a.reject(e, t));
					}
					function i(t) {
						n || (n = !0, a.resolve(e, t));
					}
					var o = m(function() {
						t(i, r);
					});
					o.status === "error" && r(o.value);
				}
				function m(e, t) {
					var n = {};
					try {
						n.value = e(t), n.status = "success";
					} catch (e) {
						n.status = "error", n.value = e;
					}
					return n;
				}
				(t.exports = l).prototype.finally = function(e) {
					if (typeof e != "function") return this;
					var t = this.constructor;
					return this.then(function(n) {
						return t.resolve(e()).then(function() {
							return n;
						});
					}, function(n) {
						return t.resolve(e()).then(function() {
							throw n;
						});
					});
				}, l.prototype.catch = function(e) {
					return this.then(null, e);
				}, l.prototype.then = function(e, t) {
					if (typeof e != "function" && this.state === s || typeof t != "function" && this.state === o) return this;
					var n = new this.constructor(i);
					return this.state === c ? this.queue.push(new u(n, e, t)) : d(n, this.state === s ? e : t, this.outcome), n;
				}, u.prototype.callFulfilled = function(e) {
					a.resolve(this.promise, e);
				}, u.prototype.otherCallFulfilled = function(e) {
					d(this.promise, this.onFulfilled, e);
				}, u.prototype.callRejected = function(e) {
					a.reject(this.promise, e);
				}, u.prototype.otherCallRejected = function(e) {
					d(this.promise, this.onRejected, e);
				}, a.resolve = function(e, t) {
					var n = m(f, t);
					if (n.status === "error") return a.reject(e, n.value);
					var r = n.value;
					if (r) p(e, r);
					else {
						e.state = s, e.outcome = t;
						for (var i = -1, o = e.queue.length; ++i < o;) e.queue[i].callFulfilled(t);
					}
					return e;
				}, a.reject = function(e, t) {
					e.state = o, e.outcome = t;
					for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
					return e;
				}, l.resolve = function(e) {
					return e instanceof this ? e : a.resolve(new this(i), e);
				}, l.reject = function(e) {
					var t = new this(i);
					return a.reject(t, e);
				}, l.all = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = Array(n), s = 0, c = -1, l = new this(i); ++c < n;) u(e[c], c);
					return l;
					function u(e, i) {
						t.resolve(e).then(function(e) {
							o[i] = e, ++s !== n || r || (r = !0, a.resolve(l, o));
						}, function(e) {
							r || (r = !0, a.reject(l, e));
						});
					}
				}, l.race = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = -1, s = new this(i); ++o < n;) c = e[o], t.resolve(c).then(function(e) {
						r || (r = !0, a.resolve(s, e));
					}, function(e) {
						r || (r = !0, a.reject(s, e));
					});
					var c;
					return s;
				};
			}, { immediate: 36 }],
			38: [function(e, t, n) {
				var r = {};
				(0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = r;
			}, {
				"./lib/deflate": 39,
				"./lib/inflate": 40,
				"./lib/utils/common": 41,
				"./lib/zlib/constants": 44
			}],
			39: [function(e, t, n) {
				var r = e("./zlib/deflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/messages"), s = e("./zlib/zstream"), c = Object.prototype.toString, l = 0, u = -1, d = 0, f = 8;
				function p(e) {
					if (!(this instanceof p)) return new p(e);
					this.options = i.assign({
						level: u,
						method: f,
						chunkSize: 16384,
						windowBits: 15,
						memLevel: 8,
						strategy: d,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
					var n = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
					if (n !== l) throw Error(o[n]);
					if (t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary) {
						var m = typeof t.dictionary == "string" ? a.string2buf(t.dictionary) : c.call(t.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(t.dictionary) : t.dictionary;
						if ((n = r.deflateSetDictionary(this.strm, m)) !== l) throw Error(o[n]);
						this._dict_set = !0;
					}
				}
				function m(e, t) {
					var n = new p(t);
					if (n.push(e, !0), n.err) throw n.msg || o[n.err];
					return n.result;
				}
				p.prototype.push = function(e, t) {
					var n, o, s = this.strm, u = this.options.chunkSize;
					if (this.ended) return !1;
					o = t === ~~t ? t : !0 === t ? 4 : 0, s.input = typeof e == "string" ? a.string2buf(e) : c.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, s.next_in = 0, s.avail_in = s.input.length;
					do {
						if (s.avail_out === 0 && (s.output = new i.Buf8(u), s.next_out = 0, s.avail_out = u), (n = r.deflate(s, o)) !== 1 && n !== l) return this.onEnd(n), !(this.ended = !0);
						s.avail_out !== 0 && (s.avail_in !== 0 || o !== 4 && o !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)));
					} while ((0 < s.avail_in || s.avail_out === 0) && n !== 1);
					return o === 4 ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === l) : o !== 2 || (this.onEnd(l), !(s.avail_out = 0));
				}, p.prototype.onData = function(e) {
					this.chunks.push(e);
				}, p.prototype.onEnd = function(e) {
					e === l && (this.result = this.options.to === "string" ? this.chunks.join("") : i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Deflate = p, n.deflate = m, n.deflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, m(e, t);
				}, n.gzip = function(e, t) {
					return (t ||= {}).gzip = !0, m(e, t);
				};
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/deflate": 46,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			40: [function(e, t, n) {
				var r = e("./zlib/inflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/constants"), s = e("./zlib/messages"), c = e("./zlib/zstream"), l = e("./zlib/gzheader"), u = Object.prototype.toString;
				function d(e) {
					if (!(this instanceof d)) return new d(e);
					this.options = i.assign({
						chunkSize: 16384,
						windowBits: 0,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && !(15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
					var n = r.inflateInit2(this.strm, t.windowBits);
					if (n !== o.Z_OK) throw Error(s[n]);
					this.header = new l(), r.inflateGetHeader(this.strm, this.header);
				}
				function f(e, t) {
					var n = new d(t);
					if (n.push(e, !0), n.err) throw n.msg || s[n.err];
					return n.result;
				}
				d.prototype.push = function(e, t) {
					var n, s, c, l, d, f, p = this.strm, m = this.options.chunkSize, h = this.options.dictionary, g = !1;
					if (this.ended) return !1;
					s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH, p.input = typeof e == "string" ? a.binstring2buf(e) : u.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, p.next_in = 0, p.avail_in = p.input.length;
					do {
						if (p.avail_out === 0 && (p.output = new i.Buf8(m), p.next_out = 0, p.avail_out = m), (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && h && (f = typeof h == "string" ? a.string2buf(h) : u.call(h) === "[object ArrayBuffer]" ? new Uint8Array(h) : h, n = r.inflateSetDictionary(this.strm, f)), n === o.Z_BUF_ERROR && !0 === g && (n = o.Z_OK, g = !1), n !== o.Z_STREAM_END && n !== o.Z_OK) return this.onEnd(n), !(this.ended = !0);
						p.next_out && (p.avail_out !== 0 && n !== o.Z_STREAM_END && (p.avail_in !== 0 || s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (c = a.utf8border(p.output, p.next_out), l = p.next_out - c, d = a.buf2string(p.output, c), p.next_out = l, p.avail_out = m - l, l && i.arraySet(p.output, p.output, c, l, 0), this.onData(d)) : this.onData(i.shrinkBuf(p.output, p.next_out)))), p.avail_in === 0 && p.avail_out === 0 && (g = !0);
					} while ((0 < p.avail_in || p.avail_out === 0) && n !== o.Z_STREAM_END);
					return n === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === o.Z_OK) : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(p.avail_out = 0));
				}, d.prototype.onData = function(e) {
					this.chunks.push(e);
				}, d.prototype.onEnd = function(e) {
					e === o.Z_OK && (this.result = this.options.to === "string" ? this.chunks.join("") : i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Inflate = d, n.inflate = f, n.inflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, f(e, t);
				}, n.ungzip = f;
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/constants": 44,
				"./zlib/gzheader": 47,
				"./zlib/inflate": 49,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			41: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
				n.assign = function(e) {
					for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
						var n = t.shift();
						if (n) {
							if (typeof n != "object") throw TypeError(n + "must be non-object");
							for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
						}
					}
					return e;
				}, n.shrinkBuf = function(e, t) {
					return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
				};
				var i = {
					arraySet: function(e, t, n, r, i) {
						if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
						else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						for (var t = r = 0, n = e.length, r, i, a, o; t < n; t++) r += e[t].length;
						for (o = new Uint8Array(r), t = i = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
						return o;
					}
				}, a = {
					arraySet: function(e, t, n, r, i) {
						for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						return [].concat.apply([], e);
					}
				};
				n.setTyped = function(e) {
					e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, i)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, a));
				}, n.setTyped(r);
			}, {}],
			42: [function(e, t, n) {
				var r = e("./common"), i = !0, a = !0;
				try {
					String.fromCharCode.apply(null, [0]);
				} catch {
					i = !1;
				}
				try {
					String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
				} catch {
					a = !1;
				}
				for (var o = new r.Buf8(256), s = 0; s < 256; s++) o[s] = 252 <= s ? 6 : 248 <= s ? 5 : 240 <= s ? 4 : 224 <= s ? 3 : 192 <= s ? 2 : 1;
				function c(e, t) {
					if (t < 65537 && (e.subarray && a || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
					for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[o]);
					return n;
				}
				o[254] = o[254] = 1, n.string2buf = function(e) {
					var t, n, i, a, o, s = e.length, c = 0;
					for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
					for (t = new r.Buf8(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
					return t;
				}, n.buf2binstring = function(e) {
					return c(e, e.length);
				}, n.binstring2buf = function(e) {
					for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
					return t;
				}, n.buf2string = function(e, t) {
					var n, r, i, a, s = t || e.length, l = Array(2 * s);
					for (n = r = 0; n < s;) if ((i = e[n++]) < 128) l[r++] = i;
					else if (4 < (a = o[i])) l[r++] = 65533, n += a - 1;
					else {
						for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && n < s;) i = i << 6 | 63 & e[n++], a--;
						1 < a ? l[r++] = 65533 : i < 65536 ? l[r++] = i : (i -= 65536, l[r++] = 55296 | i >> 10 & 1023, l[r++] = 56320 | 1023 & i);
					}
					return c(l, r);
				}, n.utf8border = function(e, t) {
					var n;
					for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
					return n < 0 || n === 0 ? t : n + o[e[n]] > t ? n : t;
				};
			}, { "./common": 41 }],
			43: [function(e, t, n) {
				t.exports = function(e, t, n, r) {
					for (var i = 65535 & e | 0, a = e >>> 16 & 65535 | 0, o = 0; n !== 0;) {
						for (n -= o = 2e3 < n ? 2e3 : n; a = a + (i = i + t[r++] | 0) | 0, --o;);
						i %= 65521, a %= 65521;
					}
					return i | a << 16 | 0;
				};
			}, {}],
			44: [function(e, t, n) {
				t.exports = {
					Z_NO_FLUSH: 0,
					Z_PARTIAL_FLUSH: 1,
					Z_SYNC_FLUSH: 2,
					Z_FULL_FLUSH: 3,
					Z_FINISH: 4,
					Z_BLOCK: 5,
					Z_TREES: 6,
					Z_OK: 0,
					Z_STREAM_END: 1,
					Z_NEED_DICT: 2,
					Z_ERRNO: -1,
					Z_STREAM_ERROR: -2,
					Z_DATA_ERROR: -3,
					Z_BUF_ERROR: -5,
					Z_NO_COMPRESSION: 0,
					Z_BEST_SPEED: 1,
					Z_BEST_COMPRESSION: 9,
					Z_DEFAULT_COMPRESSION: -1,
					Z_FILTERED: 1,
					Z_HUFFMAN_ONLY: 2,
					Z_RLE: 3,
					Z_FIXED: 4,
					Z_DEFAULT_STRATEGY: 0,
					Z_BINARY: 0,
					Z_TEXT: 1,
					Z_UNKNOWN: 2,
					Z_DEFLATED: 8
				};
			}, {}],
			45: [function(e, t, n) {
				var r = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t, n, i) {
					var a = r, o = i + n;
					e ^= -1;
					for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
					return -1 ^ e;
				};
			}, {}],
			46: [function(e, t, n) {
				var r, i = e("../utils/common"), a = e("./trees"), o = e("./adler32"), s = e("./crc32"), c = e("./messages"), l = 0, u = 4, d = 0, f = -2, p = -1, m = 4, h = 2, g = 8, _ = 9, v = 286, y = 30, b = 19, x = 2 * v + 1, S = 15, C = 3, w = 258, T = w + C + 1, E = 42, D = 113, O = 1, k = 2, A = 3, j = 4;
				function M(e, t) {
					return e.msg = c[t], t;
				}
				function N(e) {
					return (e << 1) - (4 < e ? 9 : 0);
				}
				function P(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				function F(e) {
					var t = e.state, n = t.pending;
					n > e.avail_out && (n = e.avail_out), n !== 0 && (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, t.pending === 0 && (t.pending_out = 0));
				}
				function I(e, t) {
					a._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, F(e.strm);
				}
				function L(e, t) {
					e.pending_buf[e.pending++] = t;
				}
				function R(e, t) {
					e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
				}
				function z(e, t) {
					var n, r, i = e.max_chain_length, a = e.strstart, o = e.prev_length, s = e.nice_match, c = e.strstart > e.w_size - T ? e.strstart - (e.w_size - T) : 0, l = e.window, u = e.w_mask, d = e.prev, f = e.strstart + w, p = l[a + o - 1], m = l[a + o];
					e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
					do
						if (l[(n = t) + o] === m && l[n + o - 1] === p && l[n] === l[a] && l[++n] === l[a + 1]) {
							a += 2, n++;
							do							;
while (l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && a < f);
							if (r = w - (f - a), a = f - w, o < r) {
								if (e.match_start = t, s <= (o = r)) break;
								p = l[a + o - 1], m = l[a + o];
							}
						}
					while ((t = d[t & u]) > c && --i != 0);
					return o <= e.lookahead ? o : e.lookahead;
				}
				function B(e) {
					var t, n, r, a, c, l, u, d, f, p, m = e.w_size;
					do {
						if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= m + (m - T)) {
							for (i.arraySet(e.window, e.window, m, m, 0), e.match_start -= m, e.strstart -= m, e.block_start -= m, t = n = e.hash_size; r = e.head[--t], e.head[t] = m <= r ? r - m : 0, --n;);
							for (t = n = m; r = e.prev[--t], e.prev[t] = m <= r ? r - m : 0, --n;);
							a += m;
						}
						if (e.strm.avail_in === 0) break;
						if (l = e.strm, u = e.window, d = e.strstart + e.lookahead, f = a, p = void 0, p = l.avail_in, f < p && (p = f), n = p === 0 ? 0 : (l.avail_in -= p, i.arraySet(u, l.input, l.next_in, p, d), l.state.wrap === 1 ? l.adler = o(l.adler, u, p, d) : l.state.wrap === 2 && (l.adler = s(l.adler, u, p, d)), l.next_in += p, l.total_in += p, p), e.lookahead += n, e.lookahead + e.insert >= C) for (c = e.strstart - e.insert, e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + C - 1]) & e.hash_mask, e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < C)););
					} while (e.lookahead < T && e.strm.avail_in !== 0);
				}
				function ee(e, t) {
					for (var n, r;;) {
						if (e.lookahead < T) {
							if (B(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), n !== 0 && e.strstart - n <= e.w_size - T && (e.match_length = z(e, n)), e.match_length >= C) {
							if (r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - C), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= C) {
								for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0;);
								e.strstart++;
							} else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
						} else r = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
						if (r && (I(e, !1), e.strm.avail_out === 0)) return O;
					}
					return e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function te(e, t) {
					for (var n, r, i;;) {
						if (e.lookahead < T) {
							if (B(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = C - 1, n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - T && (e.match_length = z(e, n), e.match_length <= 5 && (e.strategy === 1 || e.match_length === C && 4096 < e.strstart - e.match_start) && (e.match_length = C - 1)), e.prev_length >= C && e.match_length <= e.prev_length) {
							for (i = e.strstart + e.lookahead - C, r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - C), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0;);
							if (e.match_available = 0, e.match_length = C - 1, e.strstart++, r && (I(e, !1), e.strm.avail_out === 0)) return O;
						} else if (e.match_available) {
							if ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && I(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return O;
						} else e.match_available = 1, e.strstart++, e.lookahead--;
					}
					return e.match_available &&= (r = a._tr_tally(e, 0, e.window[e.strstart - 1]), 0), e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function V(e, t, n, r, i) {
					this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i;
				}
				function ne() {
					this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * x), this.dyn_dtree = new i.Buf16(2 * (2 * y + 1)), this.bl_tree = new i.Buf16(2 * (2 * b + 1)), P(this.dyn_ltree), P(this.dyn_dtree), P(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(S + 1), this.heap = new i.Buf16(2 * v + 1), P(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * v + 1), P(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
				}
				function re(e) {
					var t;
					return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = h, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? E : D, e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = l, a._tr_init(t), d) : M(e, f);
				}
				function H(e) {
					var t = re(e);
					return t === d && function(e) {
						e.window_size = 2 * e.w_size, P(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = C - 1, e.match_available = 0, e.ins_h = 0;
					}(e.state), t;
				}
				function U(e, t, n, r, a, o) {
					if (!e) return f;
					var s = 1;
					if (t === p && (t = 6), r < 0 ? (s = 0, r = -r) : 15 < r && (s = 2, r -= 16), a < 1 || _ < a || n !== g || r < 8 || 15 < r || t < 0 || 9 < t || o < 0 || m < o) return M(e, f);
					r === 8 && (r = 9);
					var c = new ne();
					return (e.state = c).strm = e, c.wrap = s, c.gzhead = null, c.w_bits = r, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = a + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + C - 1) / C), c.window = new i.Buf8(2 * c.w_size), c.head = new i.Buf16(c.hash_size), c.prev = new i.Buf16(c.w_size), c.lit_bufsize = 1 << a + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new i.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = o, c.method = n, H(e);
				}
				r = [
					new V(0, 0, 0, 0, function(e, t) {
						var n = 65535;
						for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
							if (e.lookahead <= 1) {
								if (B(e), e.lookahead === 0 && t === l) return O;
								if (e.lookahead === 0) break;
							}
							e.strstart += e.lookahead, e.lookahead = 0;
							var r = e.block_start + n;
							if ((e.strstart === 0 || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, I(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - T && (I(e, !1), e.strm.avail_out === 0)) return O;
						}
						return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : (e.strstart > e.block_start && (I(e, !1), e.strm.avail_out), O);
					}),
					new V(4, 4, 8, 4, ee),
					new V(4, 5, 16, 8, ee),
					new V(4, 6, 32, 32, ee),
					new V(4, 4, 16, 16, te),
					new V(8, 16, 32, 32, te),
					new V(8, 16, 128, 128, te),
					new V(8, 32, 128, 256, te),
					new V(32, 128, 258, 1024, te),
					new V(32, 258, 258, 4096, te)
				], n.deflateInit = function(e, t) {
					return U(e, t, g, 15, 8, 0);
				}, n.deflateInit2 = U, n.deflateReset = H, n.deflateResetKeep = re, n.deflateSetHeader = function(e, t) {
					return e && e.state && e.state.wrap === 2 ? (e.state.gzhead = t, d) : f;
				}, n.deflate = function(e, t) {
					var n, i, o, c;
					if (!e || !e.state || 5 < t || t < 0) return e ? M(e, f) : f;
					if (i = e.state, !e.output || !e.input && e.avail_in !== 0 || i.status === 666 && t !== u) return M(e, e.avail_out === 0 ? -5 : f);
					if (i.strm = e, n = i.last_flush, i.last_flush = t, i.status === E) {
						if (i.wrap === 2) e.adler = 0, L(i, 31), L(i, 139), L(i, 8), i.gzhead ? (L(i, +!!i.gzhead.text + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), L(i, 255 & i.gzhead.time), L(i, i.gzhead.time >> 8 & 255), L(i, i.gzhead.time >> 16 & 255), L(i, i.gzhead.time >> 24 & 255), L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), L(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (L(i, 255 & i.gzhead.extra.length), L(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (L(i, 0), L(i, 0), L(i, 0), L(i, 0), L(i, 0), L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), L(i, 3), i.status = D);
						else {
							var p = g + (i.w_bits - 8 << 4) << 8;
							p |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6, i.strstart !== 0 && (p |= 32), p += 31 - p % 31, i.status = D, R(i, p), i.strstart !== 0 && (R(i, e.adler >>> 16), R(i, 65535 & e.adler)), e.adler = 1;
						}
					}
					if (i.status === 69) {
						if (i.gzhead.extra) {
							for (o = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending !== i.pending_buf_size));) L(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
						} else i.status = 73;
					}
					if (i.status === 73) {
						if (i.gzhead.name) {
							o = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending === i.pending_buf_size)) {
									c = 1;
									break;
								}
								c = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, L(i, c);
							} while (c !== 0);
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.gzindex = 0, i.status = 91);
						} else i.status = 91;
					}
					if (i.status === 91) {
						if (i.gzhead.comment) {
							o = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending === i.pending_buf_size)) {
									c = 1;
									break;
								}
								c = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, L(i, c);
							} while (c !== 0);
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.status = 103);
						} else i.status = 103;
					}
					if (i.status === 103 && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && F(e), i.pending + 2 <= i.pending_buf_size && (L(i, 255 & e.adler), L(i, e.adler >> 8 & 255), e.adler = 0, i.status = D)) : i.status = D), i.pending !== 0) {
						if (F(e), e.avail_out === 0) return i.last_flush = -1, d;
					} else if (e.avail_in === 0 && N(t) <= N(n) && t !== u) return M(e, -5);
					if (i.status === 666 && e.avail_in !== 0) return M(e, -5);
					if (e.avail_in !== 0 || i.lookahead !== 0 || t !== l && i.status !== 666) {
						var m = i.strategy === 2 ? function(e, t) {
							for (var n;;) {
								if (e.lookahead === 0 && (B(e), e.lookahead === 0)) {
									if (t === l) return O;
									break;
								}
								if (e.match_length = 0, n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (I(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : i.strategy === 3 ? function(e, t) {
							for (var n, r, i, o, s = e.window;;) {
								if (e.lookahead <= w) {
									if (B(e), e.lookahead <= w && t === l) return O;
									if (e.lookahead === 0) break;
								}
								if (e.match_length = 0, e.lookahead >= C && 0 < e.strstart && (r = s[i = e.strstart - 1]) === s[++i] && r === s[++i] && r === s[++i]) {
									o = e.strstart + w;
									do									;
while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < o);
									e.match_length = w - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
								}
								if (e.match_length >= C ? (n = a._tr_tally(e, 1, e.match_length - C), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (I(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : r[i.level].func(i, t);
						if (m !== A && m !== j || (i.status = 666), m === O || m === A) return e.avail_out === 0 && (i.last_flush = -1), d;
						if (m === k && (t === 1 ? a._tr_align(i) : t !== 5 && (a._tr_stored_block(i, 0, 0, !1), t === 3 && (P(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), F(e), e.avail_out === 0)) return i.last_flush = -1, d;
					}
					return t === u ? i.wrap <= 0 ? 1 : (i.wrap === 2 ? (L(i, 255 & e.adler), L(i, e.adler >> 8 & 255), L(i, e.adler >> 16 & 255), L(i, e.adler >> 24 & 255), L(i, 255 & e.total_in), L(i, e.total_in >> 8 & 255), L(i, e.total_in >> 16 & 255), L(i, e.total_in >> 24 & 255)) : (R(i, e.adler >>> 16), R(i, 65535 & e.adler)), F(e), 0 < i.wrap && (i.wrap = -i.wrap), i.pending === 0 ? 1 : d) : d;
				}, n.deflateEnd = function(e) {
					var t;
					return e && e.state ? (t = e.state.status) !== E && t !== 69 && t !== 73 && t !== 91 && t !== 103 && t !== D && t !== 666 ? M(e, f) : (e.state = null, t === D ? M(e, -3) : d) : f;
				}, n.deflateSetDictionary = function(e, t) {
					var n, r, a, s, c, l, u, p, m = t.length;
					if (!e || !e.state || (s = (n = e.state).wrap) === 2 || s === 1 && n.status !== E || n.lookahead) return f;
					for (s === 1 && (e.adler = o(e.adler, t, m, 0)), n.wrap = 0, m >= n.w_size && (s === 0 && (P(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), p = new i.Buf8(n.w_size), i.arraySet(p, t, m - n.w_size, n.w_size, 0), t = p, m = n.w_size), c = e.avail_in, l = e.next_in, u = e.input, e.avail_in = m, e.next_in = 0, e.input = t, B(n); n.lookahead >= C;) {
						for (r = n.strstart, a = n.lookahead - (C - 1); n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + C - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++, --a;);
						n.strstart = r, n.lookahead = C - 1, B(n);
					}
					return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = C - 1, n.match_available = 0, e.next_in = l, e.input = u, e.avail_in = c, n.wrap = s, d;
				}, n.deflateInfo = "pako deflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./messages": 51,
				"./trees": 52
			}],
			47: [function(e, t, n) {
				t.exports = function() {
					this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
				};
			}, {}],
			48: [function(e, t, n) {
				t.exports = function(e, t) {
					var n = e.state, r = e.next_in, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e.input, E;
					i = r + (e.avail_in - 5), a = e.next_out, E = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, d = n.wnext, f = n.window, p = n.hold, m = n.bits, h = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
					e: do {
						m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = h[p & _];
						t: for (;;) {
							if (p >>>= b = y >>> 24, m -= b, (b = y >>> 16 & 255) == 0) E[a++] = 65535 & y;
							else {
								if (!(16 & b)) {
									if (!(64 & b)) {
										y = h[(65535 & y) + (p & (1 << b) - 1)];
										continue t;
									}
									if (32 & b) {
										n.mode = 12;
										break e;
									}
									e.msg = "invalid literal/length code", n.mode = 30;
									break e;
								}
								x = 65535 & y, (b &= 15) && (m < b && (p += T[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = g[p & v];
								r: for (;;) {
									if (p >>>= b = y >>> 24, m -= b, !(16 & (b = y >>> 16 & 255))) {
										if (!(64 & b)) {
											y = g[(65535 & y) + (p & (1 << b) - 1)];
											continue r;
										}
										e.msg = "invalid distance code", n.mode = 30;
										break e;
									}
									if (S = 65535 & y, m < (b &= 15) && (p += T[r++] << m, (m += 8) < b && (p += T[r++] << m, m += 8)), c < (S += p & (1 << b) - 1)) {
										e.msg = "invalid distance too far back", n.mode = 30;
										break e;
									}
									if (p >>>= b, m -= b, (b = a - o) < S) {
										if (u < (b = S - b) && n.sane) {
											e.msg = "invalid distance too far back", n.mode = 30;
											break e;
										}
										if (w = f, (C = 0) === d) {
											if (C += l - b, b < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												C = a - S, w = E;
											}
										} else if (d < b) {
											if (C += l + d - b, (b -= d) < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												if (C = 0, d < x) {
													for (x -= b = d; E[a++] = f[C++], --b;);
													C = a - S, w = E;
												}
											}
										} else if (C += d - b, b < x) {
											for (x -= b; E[a++] = f[C++], --b;);
											C = a - S, w = E;
										}
										for (; 2 < x;) E[a++] = w[C++], E[a++] = w[C++], E[a++] = w[C++], x -= 3;
										x && (E[a++] = w[C++], 1 < x && (E[a++] = w[C++]));
									} else {
										for (C = a - S; E[a++] = E[C++], E[a++] = E[C++], E[a++] = E[C++], 2 < (x -= 3););
										x && (E[a++] = E[C++], 1 < x && (E[a++] = E[C++]));
									}
									break;
								}
							}
							break;
						}
					} while (r < i && a < s);
					r -= x = m >> 3, p &= (1 << (m -= x << 3)) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), n.hold = p, n.bits = m;
				};
			}, {}],
			49: [function(e, t, n) {
				var r = e("../utils/common"), i = e("./adler32"), a = e("./crc32"), o = e("./inffast"), s = e("./inftrees"), c = 1, l = 2, u = 0, d = -2, f = 1, p = 852, m = 592;
				function h(e) {
					return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
				}
				function g() {
					this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
				}
				function _(e) {
					var t;
					return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = f, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(p), t.distcode = t.distdyn = new r.Buf32(m), t.sane = 1, t.back = -1, u) : d;
				}
				function v(e) {
					var t;
					return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, _(e)) : d;
				}
				function y(e, t) {
					var n, r;
					return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? d : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, v(e))) : d;
				}
				function b(e, t) {
					var n, r;
					return e ? (r = new g(), (e.state = r).window = null, (n = y(e, t)) !== u && (e.state = null), n) : d;
				}
				var x, S, C = !0;
				function w(e) {
					if (C) {
						var t;
						for (x = new r.Buf32(512), S = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
						for (; t < 256;) e.lens[t++] = 9;
						for (; t < 280;) e.lens[t++] = 7;
						for (; t < 288;) e.lens[t++] = 8;
						for (s(c, e.lens, 0, 288, x, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
						s(l, e.lens, 0, 32, S, 0, e.work, { bits: 5 }), C = !1;
					}
					e.lencode = x, e.lenbits = 9, e.distcode = S, e.distbits = 5;
				}
				function T(e, t, n, i) {
					var a, o = e.state;
					return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new r.Buf8(o.wsize)), i >= o.wsize ? (r.arraySet(o.window, t, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (i < (a = o.wsize - o.wnext) && (a = i), r.arraySet(o.window, t, n - i, a, o.wnext), (i -= a) ? (r.arraySet(o.window, t, n - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += a, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += a))), 0;
				}
				n.inflateReset = v, n.inflateReset2 = y, n.inflateResetKeep = _, n.inflateInit = function(e) {
					return b(e, 15);
				}, n.inflateInit2 = b, n.inflate = function(e, t) {
					var n, p, m, g, _, v, y, b, x, S, C, E, D, O, k, A, j, M, N, P, F, I, L, R, z = 0, B = new r.Buf8(4), ee = [
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					];
					if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return d;
					(n = e.state).mode === 12 && (n.mode = 13), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, S = v, C = y, I = u;
					e: for (;;) switch (n.mode) {
						case f:
							if (n.wrap === 0) {
								n.mode = 13;
								break;
							}
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (2 & n.wrap && b === 35615) {
								B[n.check = 0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0), x = b = 0, n.mode = 2;
								break;
							}
							if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
								e.msg = "incorrect header check", n.mode = 30;
								break;
							}
							if ((15 & b) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (x -= 4, F = 8 + (15 & (b >>>= 4)), n.wbits === 0) n.wbits = F;
							else if (F > n.wbits) {
								e.msg = "invalid window size", n.mode = 30;
								break;
							}
							n.dmax = 1 << F, e.adler = n.check = 1, n.mode = 512 & b ? 10 : 12, x = b = 0;
							break;
						case 2:
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.flags = b, (255 & n.flags) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (57344 & n.flags) {
								e.msg = "unknown header flags set", n.mode = 30;
								break;
							}
							n.head && (n.head.text = b >> 8 & 1), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0, n.mode = 3;
						case 3:
							for (; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.time = b), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, B[2] = b >>> 16 & 255, B[3] = b >>> 24 & 255, n.check = a(n.check, B, 4, 0)), x = b = 0, n.mode = 4;
						case 4:
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.xflags = 255 & b, n.head.os = b >> 8), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0, n.mode = 5;
						case 5:
							if (1024 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length = b, n.head && (n.head.extra_len = b), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0;
							} else n.head && (n.head.extra = null);
							n.mode = 6;
						case 6:
							if (1024 & n.flags && (v < (E = n.length) && (E = v), E && (n.head && (F = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), r.arraySet(n.head.extra, p, g, E, F)), 512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, n.length -= E), n.length)) break e;
							n.length = 0, n.mode = 7;
						case 7:
							if (2048 & n.flags) {
								if (v === 0) break e;
								for (E = 0; F = p[g + E++], n.head && F && n.length < 65536 && (n.head.name += String.fromCharCode(F)), F && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, F) break e;
							} else n.head && (n.head.name = null);
							n.length = 0, n.mode = 8;
						case 8:
							if (4096 & n.flags) {
								if (v === 0) break e;
								for (E = 0; F = p[g + E++], n.head && F && n.length < 65536 && (n.head.comment += String.fromCharCode(F)), F && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, F) break e;
							} else n.head && (n.head.comment = null);
							n.mode = 9;
						case 9:
							if (512 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (65535 & n.check)) {
									e.msg = "header crc mismatch", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = 12;
							break;
						case 10:
							for (; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							e.adler = n.check = h(b), x = b = 0, n.mode = 11;
						case 11:
							if (n.havedict === 0) return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, 2;
							e.adler = n.check = 1, n.mode = 12;
						case 12: if (t === 5 || t === 6) break e;
						case 13:
							if (n.last) {
								b >>>= 7 & x, x -= 7 & x, n.mode = 27;
								break;
							}
							for (; x < 3;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							switch (n.last = 1 & b, --x, 3 & (b >>>= 1)) {
								case 0:
									n.mode = 14;
									break;
								case 1:
									if (w(n), n.mode = 20, t !== 6) break;
									b >>>= 2, x -= 2;
									break e;
								case 2:
									n.mode = 17;
									break;
								case 3: e.msg = "invalid block type", n.mode = 30;
							}
							b >>>= 2, x -= 2;
							break;
						case 14:
							for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if ((65535 & b) != (b >>> 16 ^ 65535)) {
								e.msg = "invalid stored block lengths", n.mode = 30;
								break;
							}
							if (n.length = 65535 & b, x = b = 0, n.mode = 15, t === 6) break e;
						case 15: n.mode = 16;
						case 16:
							if (E = n.length) {
								if (v < E && (E = v), y < E && (E = y), E === 0) break e;
								r.arraySet(m, p, g, E, _), v -= E, g += E, y -= E, _ += E, n.length -= E;
								break;
							}
							n.mode = 12;
							break;
						case 17:
							for (; x < 14;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.nlen = 257 + (31 & b), b >>>= 5, x -= 5, n.ndist = 1 + (31 & b), b >>>= 5, x -= 5, n.ncode = 4 + (15 & b), b >>>= 4, x -= 4, 286 < n.nlen || 30 < n.ndist) {
								e.msg = "too many length or distance symbols", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 18;
						case 18:
							for (; n.have < n.ncode;) {
								for (; x < 3;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.lens[ee[n.have++]] = 7 & b, b >>>= 3, x -= 3;
							}
							for (; n.have < 19;) n.lens[ee[n.have++]] = 0;
							if (n.lencode = n.lendyn, n.lenbits = 7, L = { bits: n.lenbits }, I = s(0, n.lens, 0, 19, n.lencode, 0, n.work, L), n.lenbits = L.bits, I) {
								e.msg = "invalid code lengths set", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 19;
						case 19:
							for (; n.have < n.nlen + n.ndist;) {
								for (; A = (z = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (j < 16) b >>>= k, x -= k, n.lens[n.have++] = j;
								else {
									if (j === 16) {
										for (R = k + 2; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										if (b >>>= k, x -= k, n.have === 0) {
											e.msg = "invalid bit length repeat", n.mode = 30;
											break;
										}
										F = n.lens[n.have - 1], E = 3 + (3 & b), b >>>= 2, x -= 2;
									} else if (j === 17) {
										for (R = k + 3; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, F = 0, E = 3 + (7 & (b >>>= k)), b >>>= 3, x -= 3;
									} else {
										for (R = k + 7; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, F = 0, E = 11 + (127 & (b >>>= k)), b >>>= 7, x -= 7;
									}
									if (n.have + E > n.nlen + n.ndist) {
										e.msg = "invalid bit length repeat", n.mode = 30;
										break;
									}
									for (; E--;) n.lens[n.have++] = F;
								}
							}
							if (n.mode === 30) break;
							if (n.lens[256] === 0) {
								e.msg = "invalid code -- missing end-of-block", n.mode = 30;
								break;
							}
							if (n.lenbits = 9, L = { bits: n.lenbits }, I = s(c, n.lens, 0, n.nlen, n.lencode, 0, n.work, L), n.lenbits = L.bits, I) {
								e.msg = "invalid literal/lengths set", n.mode = 30;
								break;
							}
							if (n.distbits = 6, n.distcode = n.distdyn, L = { bits: n.distbits }, I = s(l, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, L), n.distbits = L.bits, I) {
								e.msg = "invalid distances set", n.mode = 30;
								break;
							}
							if (n.mode = 20, t === 6) break e;
						case 20: n.mode = 21;
						case 21:
							if (6 <= v && 258 <= y) {
								e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, o(e, C), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, n.mode === 12 && (n.back = -1);
								break;
							}
							for (n.back = 0; A = (z = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (A && !(240 & A)) {
								for (M = k, N = A, P = j; A = (z = n.lencode[P + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & z, !(M + (k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, n.length = j, A === 0) {
								n.mode = 26;
								break;
							}
							if (32 & A) {
								n.back = -1, n.mode = 12;
								break;
							}
							if (64 & A) {
								e.msg = "invalid literal/length code", n.mode = 30;
								break;
							}
							n.extra = 15 & A, n.mode = 22;
						case 22:
							if (n.extra) {
								for (R = n.extra; x < R;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							n.was = n.length, n.mode = 23;
						case 23:
							for (; A = (z = n.distcode[b & (1 << n.distbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (!(240 & A)) {
								for (M = k, N = A, P = j; A = (z = n.distcode[P + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & z, !(M + (k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, 64 & A) {
								e.msg = "invalid distance code", n.mode = 30;
								break;
							}
							n.offset = j, n.extra = 15 & A, n.mode = 24;
						case 24:
							if (n.extra) {
								for (R = n.extra; x < R;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.offset += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							if (n.offset > n.dmax) {
								e.msg = "invalid distance too far back", n.mode = 30;
								break;
							}
							n.mode = 25;
						case 25:
							if (y === 0) break e;
							if (E = C - y, n.offset > E) {
								if ((E = n.offset - E) > n.whave && n.sane) {
									e.msg = "invalid distance too far back", n.mode = 30;
									break;
								}
								D = E > n.wnext ? (E -= n.wnext, n.wsize - E) : n.wnext - E, E > n.length && (E = n.length), O = n.window;
							} else O = m, D = _ - n.offset, E = n.length;
							for (y < E && (E = y), y -= E, n.length -= E; m[_++] = O[D++], --E;);
							n.length === 0 && (n.mode = 21);
							break;
						case 26:
							if (y === 0) break e;
							m[_++] = n.length, y--, n.mode = 21;
							break;
						case 27:
							if (n.wrap) {
								for (; x < 32;) {
									if (v === 0) break e;
									v--, b |= p[g++] << x, x += 8;
								}
								if (C -= y, e.total_out += C, n.total += C, C && (e.adler = n.check = n.flags ? a(n.check, m, C, _ - C) : i(n.check, m, C, _ - C)), C = y, (n.flags ? b : h(b)) !== n.check) {
									e.msg = "incorrect data check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 28;
						case 28:
							if (n.wrap && n.flags) {
								for (; x < 32;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (4294967295 & n.total)) {
									e.msg = "incorrect length check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 29;
						case 29:
							I = 1;
							break e;
						case 30:
							I = -3;
							break e;
						case 31: return -4;
						default: return d;
					}
					return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, (n.wsize || C !== e.avail_out && n.mode < 30 && (n.mode < 27 || t !== 4)) && T(e, e.output, e.next_out, C - e.avail_out) ? (n.mode = 31, -4) : (S -= e.avail_in, C -= e.avail_out, e.total_in += S, e.total_out += C, n.total += C, n.wrap && C && (e.adler = n.check = n.flags ? a(n.check, m, C, e.next_out - C) : i(n.check, m, C, e.next_out - C)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === 12 ? 128 : 0) + (n.mode === 20 || n.mode === 15 ? 256 : 0), (S == 0 && C === 0 || t === 4) && I === u && (I = -5), I);
				}, n.inflateEnd = function(e) {
					if (!e || !e.state) return d;
					var t = e.state;
					return t.window &&= null, e.state = null, u;
				}, n.inflateGetHeader = function(e, t) {
					var n;
					return e && e.state && 2 & (n = e.state).wrap ? ((n.head = t).done = !1, u) : d;
				}, n.inflateSetDictionary = function(e, t) {
					var n, r = t.length;
					return e && e.state ? (n = e.state).wrap !== 0 && n.mode !== 11 ? d : n.mode === 11 && i(1, t, r, 0) !== n.check ? -3 : T(e, t, r, r) ? (n.mode = 31, -4) : (n.havedict = 1, u) : d;
				}, n.inflateInfo = "pako inflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./inffast": 48,
				"./inftrees": 50
			}],
			50: [function(e, t, n) {
				var r = e("../utils/common"), i = [
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					13,
					15,
					17,
					19,
					23,
					27,
					31,
					35,
					43,
					51,
					59,
					67,
					83,
					99,
					115,
					131,
					163,
					195,
					227,
					258,
					0,
					0
				], a = [
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					17,
					17,
					17,
					17,
					18,
					18,
					18,
					18,
					19,
					19,
					19,
					19,
					20,
					20,
					20,
					20,
					21,
					21,
					21,
					21,
					16,
					72,
					78
				], o = [
					1,
					2,
					3,
					4,
					5,
					7,
					9,
					13,
					17,
					25,
					33,
					49,
					65,
					97,
					129,
					193,
					257,
					385,
					513,
					769,
					1025,
					1537,
					2049,
					3073,
					4097,
					6145,
					8193,
					12289,
					16385,
					24577,
					0,
					0
				], s = [
					16,
					16,
					16,
					16,
					17,
					17,
					18,
					18,
					19,
					19,
					20,
					20,
					21,
					21,
					22,
					22,
					23,
					23,
					24,
					24,
					25,
					25,
					26,
					26,
					27,
					27,
					28,
					28,
					29,
					29,
					64,
					64
				];
				t.exports = function(e, t, n, c, l, u, d, f) {
					var p, m, h, g, _, v, y, b, x, S = f.bits, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = null, P = 0, F = new r.Buf16(16), I = new r.Buf16(16), L = null, R = 0;
					for (C = 0; C <= 15; C++) F[C] = 0;
					for (w = 0; w < c; w++) F[t[n + w]]++;
					for (D = S, E = 15; 1 <= E && F[E] === 0; E--);
					if (E < D && (D = E), E === 0) return l[u++] = 20971520, l[u++] = 20971520, f.bits = 1, 0;
					for (T = 1; T < E && F[T] === 0; T++);
					for (D < T && (D = T), C = A = 1; C <= 15; C++) if (A <<= 1, (A -= F[C]) < 0) return -1;
					if (0 < A && (e === 0 || E !== 1)) return -1;
					for (I[1] = 0, C = 1; C < 15; C++) I[C + 1] = I[C] + F[C];
					for (w = 0; w < c; w++) t[n + w] !== 0 && (d[I[t[n + w]]++] = w);
					if (v = e === 0 ? (N = L = d, 19) : e === 1 ? (N = i, P -= 257, L = a, R -= 257, 256) : (N = o, L = s, -1), C = T, _ = u, k = w = M = 0, h = -1, g = (j = 1 << (O = D)) - 1, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
					for (;;) {
						for (y = C - k, x = d[w] < v ? (b = 0, d[w]) : d[w] > v ? (b = L[R + d[w]], N[P + d[w]]) : (b = 96, 0), p = 1 << C - k, T = m = 1 << O; l[_ + (M >> k) + (m -= p)] = y << 24 | b << 16 | x | 0, m !== 0;);
						for (p = 1 << C - 1; M & p;) p >>= 1;
						if (p === 0 ? M = 0 : (M &= p - 1, M += p), w++, --F[C] == 0) {
							if (C === E) break;
							C = t[n + d[w]];
						}
						if (D < C && (M & g) !== h) {
							for (k === 0 && (k = D), _ += T, A = 1 << (O = C - k); O + k < E && !((A -= F[O + k]) <= 0);) O++, A <<= 1;
							if (j += 1 << O, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
							l[h = M & g] = D << 24 | O << 16 | _ - u | 0;
						}
					}
					return M !== 0 && (l[_ + M] = C - k << 24 | 4194304), f.bits = D, 0;
				};
			}, { "../utils/common": 41 }],
			51: [function(e, t, n) {
				t.exports = {
					2: "need dictionary",
					1: "stream end",
					0: "",
					"-1": "file error",
					"-2": "stream error",
					"-3": "data error",
					"-4": "insufficient memory",
					"-5": "buffer error",
					"-6": "incompatible version"
				};
			}, {}],
			52: [function(e, t, n) {
				var r = e("../utils/common"), i = 0, a = 1;
				function o(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				var s = 0, c = 29, l = 256, u = l + 1 + c, d = 30, f = 19, p = 2 * u + 1, m = 15, h = 16, g = 7, _ = 256, v = 16, y = 17, b = 18, x = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					1,
					1,
					1,
					2,
					2,
					2,
					2,
					3,
					3,
					3,
					3,
					4,
					4,
					4,
					4,
					5,
					5,
					5,
					5,
					0
				], S = [
					0,
					0,
					0,
					0,
					1,
					1,
					2,
					2,
					3,
					3,
					4,
					4,
					5,
					5,
					6,
					6,
					7,
					7,
					8,
					8,
					9,
					9,
					10,
					10,
					11,
					11,
					12,
					12,
					13,
					13
				], C = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					2,
					3,
					7
				], w = [
					16,
					17,
					18,
					0,
					8,
					7,
					9,
					6,
					10,
					5,
					11,
					4,
					12,
					3,
					13,
					2,
					14,
					1,
					15
				], T = Array(2 * (u + 2));
				o(T);
				var E = Array(2 * d);
				o(E);
				var D = Array(512);
				o(D);
				var O = Array(256);
				o(O);
				var k = Array(c);
				o(k);
				var A, j, M, N = Array(d);
				function P(e, t, n, r, i) {
					this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length;
				}
				function F(e, t) {
					this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
				}
				function I(e) {
					return e < 256 ? D[e] : D[256 + (e >>> 7)];
				}
				function L(e, t) {
					e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
				}
				function R(e, t, n) {
					e.bi_valid > h - n ? (e.bi_buf |= t << e.bi_valid & 65535, L(e, e.bi_buf), e.bi_buf = t >> h - e.bi_valid, e.bi_valid += n - h) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
				}
				function z(e, t, n) {
					R(e, n[2 * t], n[2 * t + 1]);
				}
				function B(e, t) {
					for (var n = 0; n |= 1 & e, e >>>= 1, n <<= 1, 0 < --t;);
					return n >>> 1;
				}
				function ee(e, t, n) {
					var r, i, a = Array(m + 1), o = 0;
					for (r = 1; r <= m; r++) a[r] = o = o + n[r - 1] << 1;
					for (i = 0; i <= t; i++) {
						var s = e[2 * i + 1];
						s !== 0 && (e[2 * i] = B(a[s]++, s));
					}
				}
				function te(e) {
					for (var t = 0; t < u; t++) e.dyn_ltree[2 * t] = 0;
					for (t = 0; t < d; t++) e.dyn_dtree[2 * t] = 0;
					for (t = 0; t < f; t++) e.bl_tree[2 * t] = 0;
					e.dyn_ltree[2 * _] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
				}
				function V(e) {
					8 < e.bi_valid ? L(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
				}
				function ne(e, t, n, r) {
					var i = 2 * t, a = 2 * n;
					return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n];
				}
				function re(e, t, n) {
					for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && ne(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !ne(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
					e.heap[n] = r;
				}
				function H(e, t, n) {
					var r, i, a, o, s = 0;
					if (e.last_lit !== 0) for (; r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, r === 0 ? z(e, i, t) : (z(e, (a = O[i]) + l + 1, t), (o = x[a]) !== 0 && R(e, i -= k[a], o), z(e, a = I(--r), n), (o = S[a]) !== 0 && R(e, r -= N[a], o)), s < e.last_lit;);
					z(e, _, t);
				}
				function U(e, t) {
					var n, r, i, a = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, c = t.stat_desc.elems, l = -1;
					for (e.heap_len = 0, e.heap_max = p, n = 0; n < c; n++) a[2 * n] === 0 ? a[2 * n + 1] = 0 : (e.heap[++e.heap_len] = l = n, e.depth[n] = 0);
					for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= o[2 * i + 1]);
					for (t.max_code = l, n = e.heap_len >> 1; 1 <= n; n--) re(e, a, n);
					for (i = c; n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], re(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, re(e, a, 1), 2 <= e.heap_len;);
					e.heap[--e.heap_max] = e.heap[1], function(e, t) {
						var n, r, i, a, o, s, c = t.dyn_tree, l = t.max_code, u = t.stat_desc.static_tree, d = t.stat_desc.has_stree, f = t.stat_desc.extra_bits, h = t.stat_desc.extra_base, g = t.stat_desc.max_length, _ = 0;
						for (a = 0; a <= m; a++) e.bl_count[a] = 0;
						for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < p; n++) g < (a = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) && (a = g, _++), c[2 * r + 1] = a, l < r || (e.bl_count[a]++, o = 0, h <= r && (o = f[r - h]), s = c[2 * r], e.opt_len += s * (a + o), d && (e.static_len += s * (u[2 * r + 1] + o)));
						if (_ !== 0) {
							do {
								for (a = g - 1; e.bl_count[a] === 0;) a--;
								e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[g]--, _ -= 2;
							} while (0 < _);
							for (a = g; a !== 0; a--) for (r = e.bl_count[a]; r !== 0;) l < (i = e.heap[--n]) || (c[2 * i + 1] !== a && (e.opt_len += (a - c[2 * i + 1]) * c[2 * i], c[2 * i + 1] = a), r--);
						}
					}(e, t), ee(a, l, e.bl_count);
				}
				function ie(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, o = t[2 * (r + 1) + 1], ++s < c && i === o || (s < l ? e.bl_tree[2 * i] += s : i === 0 ? s <= 10 ? e.bl_tree[2 * y]++ : e.bl_tree[2 * b]++ : (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * v]++), a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4));
				}
				function ae(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], !(++s < c && i === o)) {
						if (s < l) for (; z(e, i, e.bl_tree), --s != 0;);
						else i === 0 ? s <= 10 ? (z(e, y, e.bl_tree), R(e, s - 3, 3)) : (z(e, b, e.bl_tree), R(e, s - 11, 7)) : (i !== a && (z(e, i, e.bl_tree), s--), z(e, v, e.bl_tree), R(e, s - 3, 2));
						a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4);
					}
				}
				o(N);
				var oe = !1;
				function se(e, t, n, i) {
					R(e, (s << 1) + +!!i, 3), function(e, t, n, i) {
						V(e), i && (L(e, n), L(e, ~n)), r.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n;
					}(e, t, n, !0);
				}
				n._tr_init = function(e) {
					oe ||= (function() {
						var e, t, n, r, i, a = Array(m + 1);
						for (r = n = 0; r < c - 1; r++) for (k[r] = n, e = 0; e < 1 << x[r]; e++) O[n++] = r;
						for (O[n - 1] = r, r = i = 0; r < 16; r++) for (N[r] = i, e = 0; e < 1 << S[r]; e++) D[i++] = r;
						for (i >>= 7; r < d; r++) for (N[r] = i << 7, e = 0; e < 1 << S[r] - 7; e++) D[256 + i++] = r;
						for (t = 0; t <= m; t++) a[t] = 0;
						for (e = 0; e <= 143;) T[2 * e + 1] = 8, e++, a[8]++;
						for (; e <= 255;) T[2 * e + 1] = 9, e++, a[9]++;
						for (; e <= 279;) T[2 * e + 1] = 7, e++, a[7]++;
						for (; e <= 287;) T[2 * e + 1] = 8, e++, a[8]++;
						for (ee(T, u + 1, a), e = 0; e < d; e++) E[2 * e + 1] = 5, E[2 * e] = B(e, 5);
						A = new P(T, x, l + 1, u, m), j = new P(E, S, 0, d, m), M = new P([], C, 0, f, g);
					}(), !0), e.l_desc = new F(e.dyn_ltree, A), e.d_desc = new F(e.dyn_dtree, j), e.bl_desc = new F(e.bl_tree, M), e.bi_buf = 0, e.bi_valid = 0, te(e);
				}, n._tr_stored_block = se, n._tr_flush_block = function(e, t, n, r) {
					var o, s, c = 0;
					0 < e.level ? (e.strm.data_type === 2 && (e.strm.data_type = function(e) {
						var t, n = 4093624447;
						for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && e.dyn_ltree[2 * t] !== 0) return i;
						if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) return a;
						for (t = 32; t < l; t++) if (e.dyn_ltree[2 * t] !== 0) return a;
						return i;
					}(e)), U(e, e.l_desc), U(e, e.d_desc), c = function(e) {
						var t;
						for (ie(e, e.dyn_ltree, e.l_desc.max_code), ie(e, e.dyn_dtree, e.d_desc.max_code), U(e, e.bl_desc), t = f - 1; 3 <= t && e.bl_tree[2 * w[t] + 1] === 0; t--);
						return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
					}(e), o = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= o && (o = s)) : o = s = n + 5, n + 4 <= o && t !== -1 ? se(e, t, n, r) : e.strategy === 4 || s === o ? (R(e, 2 + +!!r, 3), H(e, T, E)) : (R(e, 4 + +!!r, 3), function(e, t, n, r) {
						var i;
						for (R(e, t - 257, 5), R(e, n - 1, 5), R(e, r - 4, 4), i = 0; i < r; i++) R(e, e.bl_tree[2 * w[i] + 1], 3);
						ae(e, e.dyn_ltree, t - 1), ae(e, e.dyn_dtree, n - 1);
					}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), H(e, e.dyn_ltree, e.dyn_dtree)), te(e), r && V(e);
				}, n._tr_tally = function(e, t, n) {
					return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, t === 0 ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (O[n] + l + 1)]++, e.dyn_dtree[2 * I(t)]++), e.last_lit === e.lit_bufsize - 1;
				}, n._tr_align = function(e) {
					R(e, 2, 3), z(e, _, T), function(e) {
						e.bi_valid === 16 ? (L(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
					}(e);
				};
			}, { "../utils/common": 41 }],
			53: [function(e, t, n) {
				t.exports = function() {
					this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
				};
			}, {}],
			54: [function(e, t, n) {
				(function(e) {
					(function(e, t) {
						if (!e.setImmediate) {
							var n, r, i, a, o = 1, s = {}, c = !1, l = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
							u = u && u.setTimeout ? u : e, n = {}.toString.call(e.process) === "[object process]" ? function(e) {
								process.nextTick(function() {
									f(e);
								});
							} : function() {
								if (e.postMessage && !e.importScripts) {
									var t = !0, n = e.onmessage;
									return e.onmessage = function() {
										t = !1;
									}, e.postMessage("", "*"), e.onmessage = n, t;
								}
							}() ? (a = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", p, !1) : e.attachEvent("onmessage", p), function(t) {
								e.postMessage(a + t, "*");
							}) : e.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function(e) {
								f(e.data);
							}, function(e) {
								i.port2.postMessage(e);
							}) : l && "onreadystatechange" in l.createElement("script") ? (r = l.documentElement, function(e) {
								var t = l.createElement("script");
								t.onreadystatechange = function() {
									f(e), t.onreadystatechange = null, r.removeChild(t), t = null;
								}, r.appendChild(t);
							}) : function(e) {
								setTimeout(f, 0, e);
							}, u.setImmediate = function(e) {
								typeof e != "function" && (e = Function("" + e));
								for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
								return s[o] = {
									callback: e,
									args: t
								}, n(o), o++;
							}, u.clearImmediate = d;
						}
						function d(e) {
							delete s[e];
						}
						function f(e) {
							if (c) setTimeout(f, 0, e);
							else {
								var n = s[e];
								if (n) {
									c = !0;
									try {
										(function(e) {
											var n = e.callback, r = e.args;
											switch (r.length) {
												case 0:
													n();
													break;
												case 1:
													n(r[0]);
													break;
												case 2:
													n(r[0], r[1]);
													break;
												case 3:
													n(r[0], r[1], r[2]);
													break;
												default: n.apply(t, r);
											}
										})(n);
									} finally {
										d(e), c = !1;
									}
								}
							}
						}
						function p(t) {
							t.source === e && typeof t.data == "string" && t.data.indexOf(a) === 0 && f(+t.data.slice(a.length));
						}
					})(typeof self > "u" ? e === void 0 ? this : e : self);
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}]
		}, {}, [10])(10);
	});
})), ih = /* @__PURE__ */ a(((e) => {
	var t = nh(), n = rh();
	e.openArrayBuffer = r, e.splitPath = i, e.joinPath = a;
	function r(e) {
		return n.loadAsync(e).then(function(e) {
			function n(t) {
				return e.file(t) !== null;
			}
			function r(n, r) {
				return e.file(n).async("uint8array").then(function(e) {
					return r === "base64" ? t.fromByteArray(e) : r ? new TextDecoder(r).decode(e) : e;
				});
			}
			function i(t, n) {
				e.file(t, n);
			}
			function a() {
				return e.generateAsync({ type: "arraybuffer" });
			}
			return {
				exists: n,
				read: r,
				write: i,
				toArrayBuffer: a
			};
		});
	}
	function i(e) {
		var t = e.lastIndexOf("/");
		return t === -1 ? {
			dirname: "",
			basename: e
		} : {
			dirname: e.substring(0, t),
			basename: e.substring(t + 1)
		};
	}
	function a() {
		var e = Array.prototype.filter.call(arguments, function(e) {
			return e;
		}), t = [];
		return e.forEach(function(e) {
			/^\//.test(e) ? t = [e] : t.push(e);
		}), t.join("/");
	}
})), ah = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z));
	t.Element = i, t.element = function(e, t, n) {
		return new i(e, t, n);
	}, t.text = function(e) {
		return {
			type: "text",
			value: e
		};
	};
	var r = t.emptyElement = {
		first: function() {
			return null;
		},
		firstOrEmpty: function() {
			return r;
		},
		attributes: {},
		children: []
	};
	function i(e, t, n) {
		this.type = "element", this.name = e, this.attributes = t || {}, this.children = n || [];
	}
	i.prototype.first = function(e) {
		return n.find(this.children, function(t) {
			return t.name === e;
		});
	}, i.prototype.firstOrEmpty = function(e) {
		return this.first(e) || r;
	}, i.prototype.getElementsByTagName = function(e) {
		return o(n.filter(this.children, function(t) {
			return t.name === e;
		}));
	}, i.prototype.text = function() {
		if (this.children.length === 0) return "";
		if (this.children.length !== 1 || this.children[0].type !== "text") throw Error("Not implemented");
		return this.children[0].value;
	};
	var a = { getElementsByTagName: function(e) {
		return o(n.flatten(this.map(function(t) {
			return t.getElementsByTagName(e);
		}, !0)));
	} };
	function o(e) {
		return n.extend(e, a);
	}
})), oh = /* @__PURE__ */ a(((e) => {
	function t(e, t, n) {
		if (n === void 0 && (n = Array.prototype), e && typeof n.find == "function") return n.find.call(e, t);
		for (var r = 0; r < e.length; r++) if (Object.prototype.hasOwnProperty.call(e, r)) {
			var i = e[r];
			if (t.call(void 0, i, r, e)) return i;
		}
	}
	function n(e, t) {
		return t === void 0 && (t = Object), t && typeof t.freeze == "function" ? t.freeze(e) : e;
	}
	function r(e, t) {
		if (typeof e != "object" || !e) throw TypeError("target is not an object");
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		return e;
	}
	var i = n({
		HTML: "text/html",
		isHTML: function(e) {
			return e === i.HTML;
		},
		XML_APPLICATION: "application/xml",
		XML_TEXT: "text/xml",
		XML_XHTML_APPLICATION: "application/xhtml+xml",
		XML_SVG_IMAGE: "image/svg+xml"
	}), a = n({
		HTML: "http://www.w3.org/1999/xhtml",
		isHTML: function(e) {
			return e === a.HTML;
		},
		SVG: "http://www.w3.org/2000/svg",
		XML: "http://www.w3.org/XML/1998/namespace",
		XMLNS: "http://www.w3.org/2000/xmlns/"
	}), o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, s = RegExp("[\\-\\.0-9" + o.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), c = RegExp("^" + o.source + s.source + "*(?::" + o.source + s.source + "*)?$");
	e.assign = r, e.find = t, e.freeze = n, e.MIME_TYPE = i, e.NAMESPACE = a, e.nameStartChar = o, e.nameChar = s, e.tagNamePattern = c;
})), sh = /* @__PURE__ */ a(((e) => {
	var t = oh(), n = t.find, r = t.NAMESPACE, i = t.tagNamePattern;
	function a(e) {
		return e !== "";
	}
	function o(e) {
		return e ? e.split(/[\t\n\f\r ]+/).filter(a) : [];
	}
	function s(e, t) {
		return e.hasOwnProperty(t) || (e[t] = !0), e;
	}
	function c(e) {
		if (!e) return [];
		var t = o(e);
		return Object.keys(t.reduce(s, {}));
	}
	function l(e) {
		return function(t) {
			return e && e.indexOf(t) !== -1;
		};
	}
	function u(e, t) {
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
	}
	function d(e, t) {
		var n = e.prototype;
		if (!(n instanceof t)) {
			function r() {}
			r.prototype = t.prototype, r = new r(), u(n, r), e.prototype = n = r;
		}
		n.constructor != e && (typeof e != "function" && console.error("unknown Class:" + e), n.constructor = e);
	}
	var f = {}, p = f.ELEMENT_NODE = 1, m = f.ATTRIBUTE_NODE = 2, h = f.TEXT_NODE = 3, g = f.CDATA_SECTION_NODE = 4, _ = f.ENTITY_REFERENCE_NODE = 5, v = f.ENTITY_NODE = 6, y = f.PROCESSING_INSTRUCTION_NODE = 7, b = f.COMMENT_NODE = 8, x = f.DOCUMENT_NODE = 9, S = f.DOCUMENT_TYPE_NODE = 10, C = f.DOCUMENT_FRAGMENT_NODE = 11, w = f.NOTATION_NODE = 12, T = {}, E = {};
	T.INDEX_SIZE_ERR = (E[1] = "Index size error", 1), T.DOMSTRING_SIZE_ERR = (E[2] = "DOMString size error", 2);
	var D = T.HIERARCHY_REQUEST_ERR = (E[3] = "Hierarchy request error", 3);
	T.WRONG_DOCUMENT_ERR = (E[4] = "Wrong document", 4);
	var O = T.INVALID_CHARACTER_ERR = (E[5] = "Invalid character", 5);
	T.NO_DATA_ALLOWED_ERR = (E[6] = "No data allowed", 6), T.NO_MODIFICATION_ALLOWED_ERR = (E[7] = "No modification allowed", 7);
	var k = T.NOT_FOUND_ERR = (E[8] = "Not found", 8);
	T.NOT_SUPPORTED_ERR = (E[9] = "Not supported", 9);
	var A = T.INUSE_ATTRIBUTE_ERR = (E[10] = "Attribute in use", 10), j = T.INVALID_STATE_ERR = (E[11] = "Invalid state", 11);
	T.SYNTAX_ERR = (E[12] = "Syntax error", 12), T.INVALID_MODIFICATION_ERR = (E[13] = "Invalid modification", 13), T.NAMESPACE_ERR = (E[14] = "Invalid namespace", 14), T.INVALID_ACCESS_ERR = (E[15] = "Invalid access", 15);
	function M(e, t) {
		if (t instanceof Error) var n = t;
		else n = this, Error.call(this, E[e]), this.message = E[e], Error.captureStackTrace && Error.captureStackTrace(this, M);
		return n.code = e, t && (this.message = this.message + ": " + t), n;
	}
	M.prototype = Error.prototype, u(T, M);
	function N() {}
	N.prototype = {
		length: 0,
		item: function(e) {
			return e >= 0 && e < this.length ? this[e] : null;
		},
		toString: function(e, t, n) {
			for (var r = !!n && !!n.requireWellFormed, i = [], a = 0; a < this.length; a++) K(this[a], i, e, t, null, r);
			return i.join("");
		},
		filter: function(e) {
			return Array.prototype.filter.call(this, e);
		},
		indexOf: function(e) {
			return Array.prototype.indexOf.call(this, e);
		}
	};
	function P(e, t) {
		this._node = e, this._refresh = t, F(this);
	}
	function F(e) {
		var t = e._node._inc || e._node.ownerDocument._inc;
		if (e._inc !== t) {
			var n = e._refresh(e._node);
			if (Le(e, "length", n.length), !e.$$length || n.length < e.$$length) for (var r = n.length; r in e; r++) Object.prototype.hasOwnProperty.call(e, r) && delete e[r];
			u(n, e), e._inc = t;
		}
	}
	P.prototype.item = function(e) {
		return F(this), this[e] || null;
	}, d(P, N);
	function I() {
		this._nameIndex = Object.create(null);
	}
	function L(e, t) {
		for (var n = e.length; n--;) if (e[n] === t) return n;
	}
	function R(e, t) {
		e._nameIndex[t.nodeName] = t;
	}
	function z(e, t) {
		e._nameIndex[t.nodeName] === t && delete e._nameIndex[t.nodeName];
	}
	function B(e, t, n, r) {
		if (r ? (t[L(t, r)] = n, z(t, r)) : t[t.length++] = n, R(t, n), e) {
			n.ownerElement = e;
			var i = e.ownerDocument;
			i && (r && ae(i, e, r), ie(i, e, n));
		}
	}
	function ee(e, t, n) {
		var r = L(t, n);
		if (r >= 0) {
			for (var i = t.length - 1; r < i;) t[r] = t[++r];
			if (t.length = i, z(t, n), e) {
				var a = e.ownerDocument;
				a && (ae(a, e, n), n.ownerElement = null);
			}
		} else throw new M(k, /* @__PURE__ */ Error(e.tagName + "@" + n));
	}
	I.prototype = {
		length: 0,
		item: N.prototype.item,
		getNamedItem: function(e) {
			for (var t = this.length; t--;) {
				var n = this[t];
				if (n.nodeName == e) return n;
			}
		},
		setNamedItem: function(e) {
			var t = e.ownerElement;
			if (t && t != this._ownerElement) throw new M(A);
			var n = this._nameIndex[e.nodeName];
			return B(this._ownerElement, this, e, n), n;
		},
		setNamedItemNS: function(e) {
			var t = e.ownerElement, n;
			if (t && t != this._ownerElement) throw new M(A);
			return n = this.getNamedItemNS(e.namespaceURI, e.localName), B(this._ownerElement, this, e, n), n;
		},
		removeNamedItem: function(e) {
			var t = this.getNamedItem(e);
			return ee(this._ownerElement, this, t), t;
		},
		removeNamedItemNS: function(e, t) {
			var n = this.getNamedItemNS(e, t);
			return ee(this._ownerElement, this, n), n;
		},
		getNamedItemNS: function(e, t) {
			for (var n = this.length; n--;) {
				var r = this[n];
				if (r.localName == t && r.namespaceURI == e) return r;
			}
			return null;
		}
	};
	function te() {}
	te.prototype = {
		hasFeature: function(e, t) {
			return !0;
		},
		createDocument: function(e, t, n) {
			var r = new U();
			if (r.implementation = this, r.childNodes = new N(), r.doctype = n || null, n && r.appendChild(n), t) {
				var i = r.createElementNS(e, t);
				r.appendChild(i);
			}
			return r;
		},
		createDocumentType: function(e, t, n) {
			var r = new Ee();
			return r.name = e, r.nodeName = e, r.publicId = t || "", r.systemId = n || "", r;
		}
	};
	function V() {}
	V.prototype = {
		firstChild: null,
		lastChild: null,
		previousSibling: null,
		nextSibling: null,
		attributes: null,
		parentNode: null,
		childNodes: null,
		ownerDocument: null,
		nodeValue: null,
		namespaceURI: null,
		prefix: null,
		localName: null,
		insertBefore: function(e, t) {
			return _e(this, e, t);
		},
		replaceChild: function(e, t) {
			_e(this, e, t, ge), t && this.removeChild(t);
		},
		removeChild: function(e) {
			return se(this, e);
		},
		appendChild: function(e) {
			return this.insertBefore(e, null);
		},
		hasChildNodes: function() {
			return this.firstChild != null;
		},
		cloneNode: function(e) {
			return Ie(this.ownerDocument || this, this, e);
		},
		normalize: function() {
			H(this, null, { enter: function(e) {
				for (var t = e.firstChild; t;) {
					var n = t.nextSibling;
					if (n !== null && n.nodeType === h && t.nodeType === h) {
						for (var r = [], i = n; i !== null && i.nodeType === h;) r.push(i.data), i = i.nextSibling;
						for (var a = t.nextSibling; a !== i;) {
							var o = a.nextSibling;
							a.parentNode = null, a.previousSibling = null, a.nextSibling = null, a = o;
						}
						t.nextSibling = i, i === null ? e.lastChild = t : i.previousSibling = t, t.appendData(r.join("")), oe(e.ownerDocument, e), t = i;
					} else t = n;
				}
				return !0;
			} });
		},
		isSupported: function(e, t) {
			return this.ownerDocument.implementation.hasFeature(e, t);
		},
		hasAttributes: function() {
			return this.attributes.length > 0;
		},
		lookupPrefix: function(e) {
			for (var t = this; t;) {
				var n = t._nsMap;
				if (n) {
					for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r) && n[r] === e) return r;
				}
				t = t.nodeType == m ? t.ownerDocument : t.parentNode;
			}
			return null;
		},
		lookupNamespaceURI: function(e) {
			for (var t = this; t;) {
				var n = t._nsMap;
				if (n && Object.prototype.hasOwnProperty.call(n, e)) return n[e];
				t = t.nodeType == m ? t.ownerDocument : t.parentNode;
			}
			return null;
		},
		isDefaultNamespace: function(e) {
			return this.lookupPrefix(e) == null;
		}
	};
	function ne(e) {
		return e == "<" && "&lt;" || e == ">" && "&gt;" || e == "&" && "&amp;" || e == "\"" && "&quot;" || "&#" + e.charCodeAt() + ";";
	}
	u(f, V), u(f, V.prototype);
	function re(e, t) {
		return H(e, null, { enter: function(e) {
			return !t(e) || H.STOP;
		} }) === H.STOP;
	}
	function H(e, t, n) {
		for (var r = [{
			node: e,
			context: t,
			phase: H.ENTER
		}]; r.length > 0;) {
			var i = r.pop();
			if (i.phase === H.ENTER) {
				var a = n.enter(i.node, i.context);
				if (a === H.STOP) return H.STOP;
				if (r.push({
					node: i.node,
					context: a,
					phase: H.EXIT
				}), a == null) continue;
				for (var o = i.node.lastChild; o;) r.push({
					node: o,
					context: a,
					phase: H.ENTER
				}), o = o.previousSibling;
			} else n.exit && n.exit(i.node, i.context);
		}
	}
	H.STOP = Symbol("walkDOM.STOP"), H.ENTER = 0, H.EXIT = 1;
	function U() {
		this.ownerDocument = this;
	}
	function ie(e, t, n) {
		e && e._inc++, n.namespaceURI === r.XMLNS && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
	}
	function ae(e, t, n, i) {
		e && e._inc++, n.namespaceURI === r.XMLNS && delete t._nsMap[n.prefix ? n.localName : ""];
	}
	function oe(e, t, n) {
		if (e && e._inc) {
			e._inc++;
			var r = t.childNodes;
			if (n) r[r.length++] = n;
			else {
				for (var i = t.firstChild, a = 0; i;) r[a++] = i, i = i.nextSibling;
				r.length = a, delete r[r.length];
			}
		}
	}
	function se(e, t) {
		var n = t.previousSibling, r = t.nextSibling;
		return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, oe(e.ownerDocument, e), t;
	}
	function ce(e) {
		return e && (e.nodeType === V.DOCUMENT_NODE || e.nodeType === V.DOCUMENT_FRAGMENT_NODE || e.nodeType === V.ELEMENT_NODE);
	}
	function le(e) {
		return e && (de(e) || fe(e) || ue(e) || e.nodeType === V.DOCUMENT_FRAGMENT_NODE || e.nodeType === V.COMMENT_NODE || e.nodeType === V.PROCESSING_INSTRUCTION_NODE);
	}
	function ue(e) {
		return e && e.nodeType === V.DOCUMENT_TYPE_NODE;
	}
	function de(e) {
		return e && e.nodeType === V.ELEMENT_NODE;
	}
	function fe(e) {
		return e && e.nodeType === V.TEXT_NODE;
	}
	function pe(e, t) {
		var r = e.childNodes || [];
		if (n(r, de) || ue(t)) return !1;
		var i = n(r, ue);
		return !(t && i && r.indexOf(i) > r.indexOf(t));
	}
	function W(e, t) {
		var r = e.childNodes || [];
		function i(e) {
			return de(e) && e !== t;
		}
		if (n(r, i)) return !1;
		var a = n(r, ue);
		return !(t && a && r.indexOf(a) > r.indexOf(t));
	}
	function me(e, t, n) {
		if (!ce(e)) throw new M(D, "Unexpected parent node type " + e.nodeType);
		if (n && n.parentNode !== e) throw new M(k, "child not in parent");
		if (!le(t) || ue(t) && e.nodeType !== V.DOCUMENT_NODE) throw new M(D, "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType);
	}
	function he(e, t, r) {
		var i = e.childNodes || [], a = t.childNodes || [];
		if (t.nodeType === V.DOCUMENT_FRAGMENT_NODE) {
			var o = a.filter(de);
			if (o.length > 1 || n(a, fe)) throw new M(D, "More than one element or text in fragment");
			if (o.length === 1 && !pe(e, r)) throw new M(D, "Element in fragment can not be inserted before doctype");
		}
		if (de(t) && !pe(e, r)) throw new M(D, "Only one element can be added and only after doctype");
		if (ue(t)) {
			if (n(i, ue)) throw new M(D, "Only one doctype is allowed");
			var s = n(i, de);
			if (r && i.indexOf(s) < i.indexOf(r)) throw new M(D, "Doctype can only be inserted before an element");
			if (!r && s) throw new M(D, "Doctype can not be appended since element is present");
		}
	}
	function ge(e, t, r) {
		var i = e.childNodes || [], a = t.childNodes || [];
		if (t.nodeType === V.DOCUMENT_FRAGMENT_NODE) {
			var o = a.filter(de);
			if (o.length > 1 || n(a, fe)) throw new M(D, "More than one element or text in fragment");
			if (o.length === 1 && !W(e, r)) throw new M(D, "Element in fragment can not be inserted before doctype");
		}
		if (de(t) && !W(e, r)) throw new M(D, "Only one element can be added and only after doctype");
		if (ue(t)) {
			function e(e) {
				return ue(e) && e !== r;
			}
			if (n(i, e)) throw new M(D, "Only one doctype is allowed");
			var s = n(i, de);
			if (r && i.indexOf(s) < i.indexOf(r)) throw new M(D, "Doctype can only be inserted before an element");
		}
	}
	function _e(e, t, n, r) {
		me(e, t, n), e.nodeType === V.DOCUMENT_NODE && (r || he)(e, t, n);
		var i = t.parentNode;
		if (i && i.removeChild(t), t.nodeType === C) {
			var a = t.firstChild;
			if (a == null) return t;
			var o = t.lastChild;
		} else a = o = t;
		var s = n ? n.previousSibling : e.lastChild;
		a.previousSibling = s, o.nextSibling = n, s ? s.nextSibling = a : e.firstChild = a, n == null ? e.lastChild = o : n.previousSibling = o;
		do {
			a.parentNode = e;
			var c = e.ownerDocument || e;
			ve(a, c);
		} while (a !== o && (a = a.nextSibling));
		return oe(e.ownerDocument || e, e), t.nodeType == C && (t.firstChild = t.lastChild = null), t;
	}
	function ve(e, t) {
		if (e.ownerDocument !== t) {
			if (e.ownerDocument = t, e.nodeType === p && e.attributes) for (var n = 0; n < e.attributes.length; n++) {
				var r = e.attributes.item(n);
				r && (r.ownerDocument = t);
			}
			for (var i = e.firstChild; i;) ve(i, t), i = i.nextSibling;
		}
	}
	function ye(e, t) {
		return t.parentNode && t.parentNode.removeChild(t), t.parentNode = e, t.previousSibling = e.lastChild, t.nextSibling = null, t.previousSibling ? t.previousSibling.nextSibling = t : e.firstChild = t, e.lastChild = t, oe(e.ownerDocument, e, t), ve(t, e.ownerDocument || e), t;
	}
	U.prototype = {
		nodeName: "#document",
		nodeType: x,
		doctype: null,
		documentElement: null,
		_inc: 1,
		insertBefore: function(e, t) {
			if (e.nodeType == C) {
				for (var n = e.firstChild; n;) {
					var r = n.nextSibling;
					this.insertBefore(n, t), n = r;
				}
				return e;
			}
			return _e(this, e, t), ve(e, this), this.documentElement === null && e.nodeType === p && (this.documentElement = e), e;
		},
		removeChild: function(e) {
			return this.documentElement == e && (this.documentElement = null), se(this, e);
		},
		replaceChild: function(e, t) {
			_e(this, e, t, ge), ve(e, this), t && this.removeChild(t), de(e) && (this.documentElement = e);
		},
		importNode: function(e, t) {
			return Fe(this, e, t);
		},
		getElementById: function(e) {
			var t = null;
			return re(this.documentElement, function(n) {
				if (n.nodeType == p && n.getAttribute("id") == e) return t = n, !0;
			}), t;
		},
		getElementsByClassName: function(e) {
			var t = c(e);
			return new P(this, function(n) {
				var r = [];
				return t.length > 0 && re(n.documentElement, function(i) {
					if (i !== n && i.nodeType === p) {
						var a = i.getAttribute("class");
						if (a) {
							var o = e === a;
							if (!o) {
								var s = c(a);
								o = t.every(l(s));
							}
							o && r.push(i);
						}
					}
				}), r;
			});
		},
		createElement: function(e) {
			var t = new be();
			t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.localName = e, t.childNodes = new N();
			var n = t.attributes = new I();
			return n._ownerElement = t, t;
		},
		createDocumentFragment: function() {
			var e = new ke();
			return e.ownerDocument = this, e.childNodes = new N(), e;
		},
		createTextNode: function(e) {
			var t = new Ce();
			return t.ownerDocument = this, t.appendData(e), t;
		},
		createComment: function(e) {
			var t = new we();
			return t.ownerDocument = this, t.appendData(e), t;
		},
		createCDATASection: function(e) {
			if (e.indexOf("]]>") !== -1) throw new M(O, "data contains \"]]>\"");
			var t = new Te();
			return t.ownerDocument = this, t.appendData(e), t;
		},
		createProcessingInstruction: function(e, t) {
			var n = new Ae();
			return n.ownerDocument = this, n.tagName = n.nodeName = n.target = e, n.nodeValue = n.data = t, n;
		},
		createAttribute: function(e) {
			var t = new xe();
			return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t;
		},
		createEntityReference: function(e) {
			if (!i.test(e)) throw new M(O, "not a valid xml name \"" + e + "\"");
			var t = new Oe();
			return t.ownerDocument = this, t.nodeName = e, t;
		},
		createElementNS: function(e, t) {
			var n = new be(), r = t.split(":"), i = n.attributes = new I();
			return n.childNodes = new N(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, r.length == 2 ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, i._ownerElement = n, n;
		},
		createAttributeNS: function(e, t) {
			var n = new xe(), r = t.split(":");
			return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, r.length == 2 ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
		}
	}, d(U, V);
	function be() {
		this._nsMap = {};
	}
	be.prototype = {
		nodeType: p,
		hasAttribute: function(e) {
			return this.getAttributeNode(e) != null;
		},
		getAttribute: function(e) {
			var t = this.getAttributeNode(e);
			return t && t.value || "";
		},
		getAttributeNode: function(e) {
			return this.attributes.getNamedItem(e);
		},
		setAttribute: function(e, t) {
			var n = this.ownerDocument.createAttribute(e);
			n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
		},
		removeAttribute: function(e) {
			var t = this.getAttributeNode(e);
			t && this.removeAttributeNode(t);
		},
		appendChild: function(e) {
			return e.nodeType === C ? this.insertBefore(e, null) : ye(this, e);
		},
		setAttributeNode: function(e) {
			return this.attributes.setNamedItem(e);
		},
		setAttributeNodeNS: function(e) {
			return this.attributes.setNamedItemNS(e);
		},
		removeAttributeNode: function(e) {
			return this.attributes.removeNamedItem(e.nodeName);
		},
		removeAttributeNS: function(e, t) {
			var n = this.getAttributeNodeNS(e, t);
			n && this.removeAttributeNode(n);
		},
		hasAttributeNS: function(e, t) {
			return this.getAttributeNodeNS(e, t) != null;
		},
		getAttributeNS: function(e, t) {
			var n = this.getAttributeNodeNS(e, t);
			return n && n.value || "";
		},
		setAttributeNS: function(e, t, n) {
			var r = this.ownerDocument.createAttributeNS(e, t);
			r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
		},
		getAttributeNodeNS: function(e, t) {
			return this.attributes.getNamedItemNS(e, t);
		},
		getElementsByTagName: function(e) {
			return new P(this, function(t) {
				var n = [];
				return re(t, function(r) {
					r !== t && r.nodeType == p && (e === "*" || r.tagName == e) && n.push(r);
				}), n;
			});
		},
		getElementsByTagNameNS: function(e, t) {
			return new P(this, function(n) {
				var r = [];
				return re(n, function(i) {
					i !== n && i.nodeType === p && (e === "*" || i.namespaceURI === e) && (t === "*" || i.localName == t) && r.push(i);
				}), r;
			});
		}
	}, U.prototype.getElementsByTagName = be.prototype.getElementsByTagName, U.prototype.getElementsByTagNameNS = be.prototype.getElementsByTagNameNS, d(be, V);
	function xe() {}
	xe.prototype.nodeType = m, d(xe, V);
	function Se() {}
	Se.prototype = {
		data: "",
		substringData: function(e, t) {
			return this.data.substring(e, e + t);
		},
		appendData: function(e) {
			e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
		},
		insertData: function(e, t) {
			this.replaceData(e, 0, t);
		},
		appendChild: function(e) {
			throw Error(E[D]);
		},
		deleteData: function(e, t) {
			this.replaceData(e, t, "");
		},
		replaceData: function(e, t, n) {
			var r = this.data.substring(0, e), i = this.data.substring(e + t);
			n = r + n + i, this.nodeValue = this.data = n, this.length = n.length;
		}
	}, d(Se, V);
	function Ce() {}
	Ce.prototype = {
		nodeName: "#text",
		nodeType: h,
		splitText: function(e) {
			var t = this.data, n = t.substring(e);
			t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
			var r = this.ownerDocument.createTextNode(n);
			return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
		}
	}, d(Ce, Se);
	function we() {}
	we.prototype = {
		nodeName: "#comment",
		nodeType: b
	}, d(we, Se);
	function Te() {}
	Te.prototype = {
		nodeName: "#cdata-section",
		nodeType: g
	}, d(Te, Se);
	function Ee() {}
	Ee.prototype.nodeType = S, d(Ee, V);
	function De() {}
	De.prototype.nodeType = w, d(De, V);
	function G() {}
	G.prototype.nodeType = v, d(G, V);
	function Oe() {}
	Oe.prototype.nodeType = _, d(Oe, V);
	function ke() {}
	ke.prototype.nodeName = "#document-fragment", ke.prototype.nodeType = C, d(ke, V);
	function Ae() {}
	Ae.prototype.nodeType = y, d(Ae, V);
	function je() {}
	je.prototype.serializeToString = function(e, t, n, r) {
		return Me.call(e, t, n, r);
	}, V.prototype.toString = Me;
	function Me(e, t, n) {
		var r = !!n && !!n.requireWellFormed, i = [], a = this.nodeType == 9 && this.documentElement || this, o = a.prefix, s = a.namespaceURI;
		if (s && o == null) {
			var o = a.lookupPrefix(s);
			if (o == null) var c = [{
				namespace: s,
				prefix: null
			}];
		}
		return K(this, i, e, t, c, r), i.join("");
	}
	function Ne(e, t, n) {
		var i = e.prefix || "", a = e.namespaceURI;
		if (!a || i === "xml" && a === r.XML || a === r.XMLNS) return !1;
		for (var o = n.length; o--;) {
			var s = n[o];
			if (s.prefix === i) return s.namespace !== a;
		}
		return !0;
	}
	function Pe(e, t, n, r) {
		if (r && !i.test(t)) throw new M(j, "The attribute name \"" + t + "\" is not a valid XML QName");
		e.push(" ", t, "=\"", n.replace(/[<>&"\t\n\r]/g, ne), "\"");
	}
	function K(e, t, n, a, o, s) {
		o ||= [], H(e, {
			ns: o,
			isHTML: n
		}, {
			enter: function(e, n) {
				var o = n.ns, c = n.isHTML;
				if (a) {
					if (e = a(e), e) {
						if (typeof e == "string") return t.push(e), null;
					} else return null;
				}
				switch (e.nodeType) {
					case p:
						var l = e.attributes, u = l.length, d = e.tagName;
						c = r.isHTML(e.namespaceURI) || c;
						var f = d;
						if (!c && !e.prefix && e.namespaceURI) {
							for (var v, w = 0; w < l.length; w++) if (l.item(w).name === "xmlns") {
								v = l.item(w).value;
								break;
							}
							if (!v) for (var T = o.length - 1; T >= 0; T--) {
								var E = o[T];
								if (E.prefix === "" && E.namespace === e.namespaceURI) {
									v = E.namespace;
									break;
								}
							}
							if (v !== e.namespaceURI) for (var T = o.length - 1; T >= 0; T--) {
								var E = o[T];
								if (E.namespace === e.namespaceURI) {
									E.prefix && (f = E.prefix + ":" + d);
									break;
								}
							}
						}
						if (s && !i.test(f)) throw new M(j, "The element name \"" + f + "\" is not a valid XML QName");
						t.push("<", f);
						for (var D = o.slice(), O = 0; O < u; O++) {
							var k = l.item(O);
							k.prefix == "xmlns" ? D.push({
								prefix: k.localName,
								namespace: k.value
							}) : k.nodeName == "xmlns" && D.push({
								prefix: "",
								namespace: k.value
							});
						}
						for (var O = 0; O < u; O++) {
							var k = l.item(O);
							if (Ne(k, c, D)) {
								var A = k.prefix || "", N = k.namespaceURI;
								Pe(t, A ? "xmlns:" + A : "xmlns", N, s), D.push({
									prefix: A,
									namespace: N
								});
							}
							var P = a ? a(k) : k;
							P && (typeof P == "string" ? t.push(P) : Pe(t, P.name, P.value, s));
						}
						if (d === f && Ne(e, c, D)) {
							var F = e.prefix || "", N = e.namespaceURI;
							Pe(t, F ? "xmlns:" + F : "xmlns", N, s), D.push({
								prefix: F,
								namespace: N
							});
						}
						var I = e.firstChild;
						if (I || c && !/^(?:meta|link|img|br|hr|input)$/i.test(d)) {
							if (t.push(">"), c && /^script$/i.test(d)) {
								for (; I;) I.data ? t.push(I.data) : K(I, t, c, a, D.slice(), s), I = I.nextSibling;
								return t.push("</", d, ">"), null;
							}
							return {
								ns: D,
								isHTML: c,
								tag: f
							};
						}
						return t.push("/>"), null;
					case x:
					case C: return {
						ns: o.slice(),
						isHTML: c,
						tag: null
					};
					case m: return Pe(t, e.name, e.value, s), null;
					case h: return t.push(e.data.replace(/[<&>]/g, ne)), null;
					case g:
						if (s && e.data.indexOf("]]>") !== -1) throw new M(j, "The CDATASection data contains \"]]>\"");
						return t.push("<![CDATA[", e.data.replace(/]]>/g, "]]]]><![CDATA[>"), "]]>"), null;
					case b:
						if (s && e.data.indexOf("-->") !== -1) throw new M(j, "The comment node data contains \"-->\"");
						return t.push("<!--", e.data, "-->"), null;
					case S:
						if (s) {
							if (!i.test(e.name)) throw new M(j, "The doctype name \"" + e.name + "\" is not a valid XML Name");
							if (e.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(e.publicId)) throw new M(j, "DocumentType publicId is not a valid PubidLiteral");
							if (e.systemId && !/^("[^"]*"|'[^']*')$/.test(e.systemId)) throw new M(j, "DocumentType systemId is not a valid SystemLiteral");
							if (e.internalSubset && e.internalSubset.indexOf("]>") !== -1) throw new M(j, "DocumentType internalSubset contains \"]>\"");
						}
						var L = e.publicId, R = e.systemId;
						if (t.push("<!DOCTYPE ", e.name), L) t.push(" PUBLIC ", L), R && R != "." && t.push(" ", R), t.push(">");
						else if (R && R != ".") t.push(" SYSTEM ", R, ">");
						else {
							var z = e.internalSubset;
							z && t.push(" [", z, "]"), t.push(">");
						}
						return null;
					case y:
						if (s) {
							if (!i.test(e.target) || e.target.indexOf(":") !== -1 || e.target.toLowerCase() === "xml") throw new M(j, "The processing instruction target \"" + e.target + "\" is not a valid XML NCName or is reserved");
							if (e.data.indexOf("?>") !== -1) throw new M(j, "The ProcessingInstruction data contains \"?>\"");
						}
						return t.push("<?", e.target, " ", e.data, "?>"), null;
					case _:
						if (s && !i.test(e.nodeName)) throw new M(j, "The entity reference name \"" + e.nodeName + "\" is not a valid XML Name");
						return t.push("&", e.nodeName, ";"), null;
					default: return t.push("??", e.nodeName), null;
				}
			},
			exit: function(e, n) {
				n && n.tag && t.push("</", n.tag, ">");
			}
		});
	}
	function Fe(e, t, n) {
		var r;
		return H(t, null, { enter: function(t, i) {
			var a = t.cloneNode(!1);
			return a.ownerDocument = e, a.parentNode = null, i === null ? r = a : i.appendChild(a), t.nodeType === m || n ? a : null;
		} }), r;
	}
	function Ie(e, t, n) {
		var r;
		return H(t, null, { enter: function(t, i) {
			var a = new t.constructor();
			for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
				var s = t[o];
				typeof s != "object" && s != a[o] && (a[o] = s);
			}
			t.childNodes && (a.childNodes = new N()), a.ownerDocument = e;
			var c = n;
			switch (a.nodeType) {
				case p:
					var l = t.attributes, u = a.attributes = new I(), d = l.length;
					u._ownerElement = a;
					for (var f = 0; f < d; f++) a.setAttributeNode(Ie(e, l.item(f), !0));
					break;
				case m: c = !0;
			}
			return i === null ? r = a : i.appendChild(a), c ? a : null;
		} }), r;
	}
	function Le(e, t, n) {
		e[t] = n;
	}
	try {
		Object.defineProperty && (Object.defineProperty(P.prototype, "length", { get: function() {
			return F(this), this.$$length;
		} }), Object.defineProperty(V.prototype, "textContent", {
			get: function() {
				if (this.nodeType === p || this.nodeType === C) {
					var e = [];
					return H(this, null, { enter: function(t) {
						if (t.nodeType === p || t.nodeType === C) return !0;
						if (t.nodeType === y || t.nodeType === b) return null;
						e.push(t.nodeValue);
					} }), e.join("");
				}
				return this.nodeValue;
			},
			set: function(e) {
				switch (this.nodeType) {
					case p:
					case C:
						for (; this.firstChild;) this.removeChild(this.firstChild);
						(e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
						break;
					default: this.data = e, this.value = e, this.nodeValue = e;
				}
			}
		}), Le = function(e, t, n) {
			e["$$" + t] = n;
		});
	} catch {}
	e.DocumentType = Ee, e.DOMException = M, e.DOMImplementation = te, e.Element = be, e.Node = V, e.NodeList = N, e.walkDOM = H, e.XMLSerializer = je;
})), ch = /* @__PURE__ */ a(((e) => {
	var t = oh().freeze;
	e.XML_ENTITIES = t({
		amp: "&",
		apos: "'",
		gt: ">",
		lt: "<",
		quot: "\""
	}), e.HTML_ENTITIES = t({
		Aacute: "Á",
		aacute: "á",
		Abreve: "Ă",
		abreve: "ă",
		ac: "∾",
		acd: "∿",
		acE: "∾̳",
		Acirc: "Â",
		acirc: "â",
		acute: "´",
		Acy: "А",
		acy: "а",
		AElig: "Æ",
		aelig: "æ",
		af: "⁡",
		Afr: "𝔄",
		afr: "𝔞",
		Agrave: "À",
		agrave: "à",
		alefsym: "ℵ",
		aleph: "ℵ",
		Alpha: "Α",
		alpha: "α",
		Amacr: "Ā",
		amacr: "ā",
		amalg: "⨿",
		AMP: "&",
		amp: "&",
		And: "⩓",
		and: "∧",
		andand: "⩕",
		andd: "⩜",
		andslope: "⩘",
		andv: "⩚",
		ang: "∠",
		ange: "⦤",
		angle: "∠",
		angmsd: "∡",
		angmsdaa: "⦨",
		angmsdab: "⦩",
		angmsdac: "⦪",
		angmsdad: "⦫",
		angmsdae: "⦬",
		angmsdaf: "⦭",
		angmsdag: "⦮",
		angmsdah: "⦯",
		angrt: "∟",
		angrtvb: "⊾",
		angrtvbd: "⦝",
		angsph: "∢",
		angst: "Å",
		angzarr: "⍼",
		Aogon: "Ą",
		aogon: "ą",
		Aopf: "𝔸",
		aopf: "𝕒",
		ap: "≈",
		apacir: "⩯",
		apE: "⩰",
		ape: "≊",
		apid: "≋",
		apos: "'",
		ApplyFunction: "⁡",
		approx: "≈",
		approxeq: "≊",
		Aring: "Å",
		aring: "å",
		Ascr: "𝒜",
		ascr: "𝒶",
		Assign: "≔",
		ast: "*",
		asymp: "≈",
		asympeq: "≍",
		Atilde: "Ã",
		atilde: "ã",
		Auml: "Ä",
		auml: "ä",
		awconint: "∳",
		awint: "⨑",
		backcong: "≌",
		backepsilon: "϶",
		backprime: "‵",
		backsim: "∽",
		backsimeq: "⋍",
		Backslash: "∖",
		Barv: "⫧",
		barvee: "⊽",
		Barwed: "⌆",
		barwed: "⌅",
		barwedge: "⌅",
		bbrk: "⎵",
		bbrktbrk: "⎶",
		bcong: "≌",
		Bcy: "Б",
		bcy: "б",
		bdquo: "„",
		becaus: "∵",
		Because: "∵",
		because: "∵",
		bemptyv: "⦰",
		bepsi: "϶",
		bernou: "ℬ",
		Bernoullis: "ℬ",
		Beta: "Β",
		beta: "β",
		beth: "ℶ",
		between: "≬",
		Bfr: "𝔅",
		bfr: "𝔟",
		bigcap: "⋂",
		bigcirc: "◯",
		bigcup: "⋃",
		bigodot: "⨀",
		bigoplus: "⨁",
		bigotimes: "⨂",
		bigsqcup: "⨆",
		bigstar: "★",
		bigtriangledown: "▽",
		bigtriangleup: "△",
		biguplus: "⨄",
		bigvee: "⋁",
		bigwedge: "⋀",
		bkarow: "⤍",
		blacklozenge: "⧫",
		blacksquare: "▪",
		blacktriangle: "▴",
		blacktriangledown: "▾",
		blacktriangleleft: "◂",
		blacktriangleright: "▸",
		blank: "␣",
		blk12: "▒",
		blk14: "░",
		blk34: "▓",
		block: "█",
		bne: "=⃥",
		bnequiv: "≡⃥",
		bNot: "⫭",
		bnot: "⌐",
		Bopf: "𝔹",
		bopf: "𝕓",
		bot: "⊥",
		bottom: "⊥",
		bowtie: "⋈",
		boxbox: "⧉",
		boxDL: "╗",
		boxDl: "╖",
		boxdL: "╕",
		boxdl: "┐",
		boxDR: "╔",
		boxDr: "╓",
		boxdR: "╒",
		boxdr: "┌",
		boxH: "═",
		boxh: "─",
		boxHD: "╦",
		boxHd: "╤",
		boxhD: "╥",
		boxhd: "┬",
		boxHU: "╩",
		boxHu: "╧",
		boxhU: "╨",
		boxhu: "┴",
		boxminus: "⊟",
		boxplus: "⊞",
		boxtimes: "⊠",
		boxUL: "╝",
		boxUl: "╜",
		boxuL: "╛",
		boxul: "┘",
		boxUR: "╚",
		boxUr: "╙",
		boxuR: "╘",
		boxur: "└",
		boxV: "║",
		boxv: "│",
		boxVH: "╬",
		boxVh: "╫",
		boxvH: "╪",
		boxvh: "┼",
		boxVL: "╣",
		boxVl: "╢",
		boxvL: "╡",
		boxvl: "┤",
		boxVR: "╠",
		boxVr: "╟",
		boxvR: "╞",
		boxvr: "├",
		bprime: "‵",
		Breve: "˘",
		breve: "˘",
		brvbar: "¦",
		Bscr: "ℬ",
		bscr: "𝒷",
		bsemi: "⁏",
		bsim: "∽",
		bsime: "⋍",
		bsol: "\\",
		bsolb: "⧅",
		bsolhsub: "⟈",
		bull: "•",
		bullet: "•",
		bump: "≎",
		bumpE: "⪮",
		bumpe: "≏",
		Bumpeq: "≎",
		bumpeq: "≏",
		Cacute: "Ć",
		cacute: "ć",
		Cap: "⋒",
		cap: "∩",
		capand: "⩄",
		capbrcup: "⩉",
		capcap: "⩋",
		capcup: "⩇",
		capdot: "⩀",
		CapitalDifferentialD: "ⅅ",
		caps: "∩︀",
		caret: "⁁",
		caron: "ˇ",
		Cayleys: "ℭ",
		ccaps: "⩍",
		Ccaron: "Č",
		ccaron: "č",
		Ccedil: "Ç",
		ccedil: "ç",
		Ccirc: "Ĉ",
		ccirc: "ĉ",
		Cconint: "∰",
		ccups: "⩌",
		ccupssm: "⩐",
		Cdot: "Ċ",
		cdot: "ċ",
		cedil: "¸",
		Cedilla: "¸",
		cemptyv: "⦲",
		cent: "¢",
		CenterDot: "·",
		centerdot: "·",
		Cfr: "ℭ",
		cfr: "𝔠",
		CHcy: "Ч",
		chcy: "ч",
		check: "✓",
		checkmark: "✓",
		Chi: "Χ",
		chi: "χ",
		cir: "○",
		circ: "ˆ",
		circeq: "≗",
		circlearrowleft: "↺",
		circlearrowright: "↻",
		circledast: "⊛",
		circledcirc: "⊚",
		circleddash: "⊝",
		CircleDot: "⊙",
		circledR: "®",
		circledS: "Ⓢ",
		CircleMinus: "⊖",
		CirclePlus: "⊕",
		CircleTimes: "⊗",
		cirE: "⧃",
		cire: "≗",
		cirfnint: "⨐",
		cirmid: "⫯",
		cirscir: "⧂",
		ClockwiseContourIntegral: "∲",
		CloseCurlyDoubleQuote: "”",
		CloseCurlyQuote: "’",
		clubs: "♣",
		clubsuit: "♣",
		Colon: "∷",
		colon: ":",
		Colone: "⩴",
		colone: "≔",
		coloneq: "≔",
		comma: ",",
		commat: "@",
		comp: "∁",
		compfn: "∘",
		complement: "∁",
		complexes: "ℂ",
		cong: "≅",
		congdot: "⩭",
		Congruent: "≡",
		Conint: "∯",
		conint: "∮",
		ContourIntegral: "∮",
		Copf: "ℂ",
		copf: "𝕔",
		coprod: "∐",
		Coproduct: "∐",
		COPY: "©",
		copy: "©",
		copysr: "℗",
		CounterClockwiseContourIntegral: "∳",
		crarr: "↵",
		Cross: "⨯",
		cross: "✗",
		Cscr: "𝒞",
		cscr: "𝒸",
		csub: "⫏",
		csube: "⫑",
		csup: "⫐",
		csupe: "⫒",
		ctdot: "⋯",
		cudarrl: "⤸",
		cudarrr: "⤵",
		cuepr: "⋞",
		cuesc: "⋟",
		cularr: "↶",
		cularrp: "⤽",
		Cup: "⋓",
		cup: "∪",
		cupbrcap: "⩈",
		CupCap: "≍",
		cupcap: "⩆",
		cupcup: "⩊",
		cupdot: "⊍",
		cupor: "⩅",
		cups: "∪︀",
		curarr: "↷",
		curarrm: "⤼",
		curlyeqprec: "⋞",
		curlyeqsucc: "⋟",
		curlyvee: "⋎",
		curlywedge: "⋏",
		curren: "¤",
		curvearrowleft: "↶",
		curvearrowright: "↷",
		cuvee: "⋎",
		cuwed: "⋏",
		cwconint: "∲",
		cwint: "∱",
		cylcty: "⌭",
		Dagger: "‡",
		dagger: "†",
		daleth: "ℸ",
		Darr: "↡",
		dArr: "⇓",
		darr: "↓",
		dash: "‐",
		Dashv: "⫤",
		dashv: "⊣",
		dbkarow: "⤏",
		dblac: "˝",
		Dcaron: "Ď",
		dcaron: "ď",
		Dcy: "Д",
		dcy: "д",
		DD: "ⅅ",
		dd: "ⅆ",
		ddagger: "‡",
		ddarr: "⇊",
		DDotrahd: "⤑",
		ddotseq: "⩷",
		deg: "°",
		Del: "∇",
		Delta: "Δ",
		delta: "δ",
		demptyv: "⦱",
		dfisht: "⥿",
		Dfr: "𝔇",
		dfr: "𝔡",
		dHar: "⥥",
		dharl: "⇃",
		dharr: "⇂",
		DiacriticalAcute: "´",
		DiacriticalDot: "˙",
		DiacriticalDoubleAcute: "˝",
		DiacriticalGrave: "`",
		DiacriticalTilde: "˜",
		diam: "⋄",
		Diamond: "⋄",
		diamond: "⋄",
		diamondsuit: "♦",
		diams: "♦",
		die: "¨",
		DifferentialD: "ⅆ",
		digamma: "ϝ",
		disin: "⋲",
		div: "÷",
		divide: "÷",
		divideontimes: "⋇",
		divonx: "⋇",
		DJcy: "Ђ",
		djcy: "ђ",
		dlcorn: "⌞",
		dlcrop: "⌍",
		dollar: "$",
		Dopf: "𝔻",
		dopf: "𝕕",
		Dot: "¨",
		dot: "˙",
		DotDot: "⃜",
		doteq: "≐",
		doteqdot: "≑",
		DotEqual: "≐",
		dotminus: "∸",
		dotplus: "∔",
		dotsquare: "⊡",
		doublebarwedge: "⌆",
		DoubleContourIntegral: "∯",
		DoubleDot: "¨",
		DoubleDownArrow: "⇓",
		DoubleLeftArrow: "⇐",
		DoubleLeftRightArrow: "⇔",
		DoubleLeftTee: "⫤",
		DoubleLongLeftArrow: "⟸",
		DoubleLongLeftRightArrow: "⟺",
		DoubleLongRightArrow: "⟹",
		DoubleRightArrow: "⇒",
		DoubleRightTee: "⊨",
		DoubleUpArrow: "⇑",
		DoubleUpDownArrow: "⇕",
		DoubleVerticalBar: "∥",
		DownArrow: "↓",
		Downarrow: "⇓",
		downarrow: "↓",
		DownArrowBar: "⤓",
		DownArrowUpArrow: "⇵",
		DownBreve: "̑",
		downdownarrows: "⇊",
		downharpoonleft: "⇃",
		downharpoonright: "⇂",
		DownLeftRightVector: "⥐",
		DownLeftTeeVector: "⥞",
		DownLeftVector: "↽",
		DownLeftVectorBar: "⥖",
		DownRightTeeVector: "⥟",
		DownRightVector: "⇁",
		DownRightVectorBar: "⥗",
		DownTee: "⊤",
		DownTeeArrow: "↧",
		drbkarow: "⤐",
		drcorn: "⌟",
		drcrop: "⌌",
		Dscr: "𝒟",
		dscr: "𝒹",
		DScy: "Ѕ",
		dscy: "ѕ",
		dsol: "⧶",
		Dstrok: "Đ",
		dstrok: "đ",
		dtdot: "⋱",
		dtri: "▿",
		dtrif: "▾",
		duarr: "⇵",
		duhar: "⥯",
		dwangle: "⦦",
		DZcy: "Џ",
		dzcy: "џ",
		dzigrarr: "⟿",
		Eacute: "É",
		eacute: "é",
		easter: "⩮",
		Ecaron: "Ě",
		ecaron: "ě",
		ecir: "≖",
		Ecirc: "Ê",
		ecirc: "ê",
		ecolon: "≕",
		Ecy: "Э",
		ecy: "э",
		eDDot: "⩷",
		Edot: "Ė",
		eDot: "≑",
		edot: "ė",
		ee: "ⅇ",
		efDot: "≒",
		Efr: "𝔈",
		efr: "𝔢",
		eg: "⪚",
		Egrave: "È",
		egrave: "è",
		egs: "⪖",
		egsdot: "⪘",
		el: "⪙",
		Element: "∈",
		elinters: "⏧",
		ell: "ℓ",
		els: "⪕",
		elsdot: "⪗",
		Emacr: "Ē",
		emacr: "ē",
		empty: "∅",
		emptyset: "∅",
		EmptySmallSquare: "◻",
		emptyv: "∅",
		EmptyVerySmallSquare: "▫",
		emsp: " ",
		emsp13: " ",
		emsp14: " ",
		ENG: "Ŋ",
		eng: "ŋ",
		ensp: " ",
		Eogon: "Ę",
		eogon: "ę",
		Eopf: "𝔼",
		eopf: "𝕖",
		epar: "⋕",
		eparsl: "⧣",
		eplus: "⩱",
		epsi: "ε",
		Epsilon: "Ε",
		epsilon: "ε",
		epsiv: "ϵ",
		eqcirc: "≖",
		eqcolon: "≕",
		eqsim: "≂",
		eqslantgtr: "⪖",
		eqslantless: "⪕",
		Equal: "⩵",
		equals: "=",
		EqualTilde: "≂",
		equest: "≟",
		Equilibrium: "⇌",
		equiv: "≡",
		equivDD: "⩸",
		eqvparsl: "⧥",
		erarr: "⥱",
		erDot: "≓",
		Escr: "ℰ",
		escr: "ℯ",
		esdot: "≐",
		Esim: "⩳",
		esim: "≂",
		Eta: "Η",
		eta: "η",
		ETH: "Ð",
		eth: "ð",
		Euml: "Ë",
		euml: "ë",
		euro: "€",
		excl: "!",
		exist: "∃",
		Exists: "∃",
		expectation: "ℰ",
		ExponentialE: "ⅇ",
		exponentiale: "ⅇ",
		fallingdotseq: "≒",
		Fcy: "Ф",
		fcy: "ф",
		female: "♀",
		ffilig: "ﬃ",
		fflig: "ﬀ",
		ffllig: "ﬄ",
		Ffr: "𝔉",
		ffr: "𝔣",
		filig: "ﬁ",
		FilledSmallSquare: "◼",
		FilledVerySmallSquare: "▪",
		fjlig: "fj",
		flat: "♭",
		fllig: "ﬂ",
		fltns: "▱",
		fnof: "ƒ",
		Fopf: "𝔽",
		fopf: "𝕗",
		ForAll: "∀",
		forall: "∀",
		fork: "⋔",
		forkv: "⫙",
		Fouriertrf: "ℱ",
		fpartint: "⨍",
		frac12: "½",
		frac13: "⅓",
		frac14: "¼",
		frac15: "⅕",
		frac16: "⅙",
		frac18: "⅛",
		frac23: "⅔",
		frac25: "⅖",
		frac34: "¾",
		frac35: "⅗",
		frac38: "⅜",
		frac45: "⅘",
		frac56: "⅚",
		frac58: "⅝",
		frac78: "⅞",
		frasl: "⁄",
		frown: "⌢",
		Fscr: "ℱ",
		fscr: "𝒻",
		gacute: "ǵ",
		Gamma: "Γ",
		gamma: "γ",
		Gammad: "Ϝ",
		gammad: "ϝ",
		gap: "⪆",
		Gbreve: "Ğ",
		gbreve: "ğ",
		Gcedil: "Ģ",
		Gcirc: "Ĝ",
		gcirc: "ĝ",
		Gcy: "Г",
		gcy: "г",
		Gdot: "Ġ",
		gdot: "ġ",
		gE: "≧",
		ge: "≥",
		gEl: "⪌",
		gel: "⋛",
		geq: "≥",
		geqq: "≧",
		geqslant: "⩾",
		ges: "⩾",
		gescc: "⪩",
		gesdot: "⪀",
		gesdoto: "⪂",
		gesdotol: "⪄",
		gesl: "⋛︀",
		gesles: "⪔",
		Gfr: "𝔊",
		gfr: "𝔤",
		Gg: "⋙",
		gg: "≫",
		ggg: "⋙",
		gimel: "ℷ",
		GJcy: "Ѓ",
		gjcy: "ѓ",
		gl: "≷",
		gla: "⪥",
		glE: "⪒",
		glj: "⪤",
		gnap: "⪊",
		gnapprox: "⪊",
		gnE: "≩",
		gne: "⪈",
		gneq: "⪈",
		gneqq: "≩",
		gnsim: "⋧",
		Gopf: "𝔾",
		gopf: "𝕘",
		grave: "`",
		GreaterEqual: "≥",
		GreaterEqualLess: "⋛",
		GreaterFullEqual: "≧",
		GreaterGreater: "⪢",
		GreaterLess: "≷",
		GreaterSlantEqual: "⩾",
		GreaterTilde: "≳",
		Gscr: "𝒢",
		gscr: "ℊ",
		gsim: "≳",
		gsime: "⪎",
		gsiml: "⪐",
		Gt: "≫",
		GT: ">",
		gt: ">",
		gtcc: "⪧",
		gtcir: "⩺",
		gtdot: "⋗",
		gtlPar: "⦕",
		gtquest: "⩼",
		gtrapprox: "⪆",
		gtrarr: "⥸",
		gtrdot: "⋗",
		gtreqless: "⋛",
		gtreqqless: "⪌",
		gtrless: "≷",
		gtrsim: "≳",
		gvertneqq: "≩︀",
		gvnE: "≩︀",
		Hacek: "ˇ",
		hairsp: " ",
		half: "½",
		hamilt: "ℋ",
		HARDcy: "Ъ",
		hardcy: "ъ",
		hArr: "⇔",
		harr: "↔",
		harrcir: "⥈",
		harrw: "↭",
		Hat: "^",
		hbar: "ℏ",
		Hcirc: "Ĥ",
		hcirc: "ĥ",
		hearts: "♥",
		heartsuit: "♥",
		hellip: "…",
		hercon: "⊹",
		Hfr: "ℌ",
		hfr: "𝔥",
		HilbertSpace: "ℋ",
		hksearow: "⤥",
		hkswarow: "⤦",
		hoarr: "⇿",
		homtht: "∻",
		hookleftarrow: "↩",
		hookrightarrow: "↪",
		Hopf: "ℍ",
		hopf: "𝕙",
		horbar: "―",
		HorizontalLine: "─",
		Hscr: "ℋ",
		hscr: "𝒽",
		hslash: "ℏ",
		Hstrok: "Ħ",
		hstrok: "ħ",
		HumpDownHump: "≎",
		HumpEqual: "≏",
		hybull: "⁃",
		hyphen: "‐",
		Iacute: "Í",
		iacute: "í",
		ic: "⁣",
		Icirc: "Î",
		icirc: "î",
		Icy: "И",
		icy: "и",
		Idot: "İ",
		IEcy: "Е",
		iecy: "е",
		iexcl: "¡",
		iff: "⇔",
		Ifr: "ℑ",
		ifr: "𝔦",
		Igrave: "Ì",
		igrave: "ì",
		ii: "ⅈ",
		iiiint: "⨌",
		iiint: "∭",
		iinfin: "⧜",
		iiota: "℩",
		IJlig: "Ĳ",
		ijlig: "ĳ",
		Im: "ℑ",
		Imacr: "Ī",
		imacr: "ī",
		image: "ℑ",
		ImaginaryI: "ⅈ",
		imagline: "ℐ",
		imagpart: "ℑ",
		imath: "ı",
		imof: "⊷",
		imped: "Ƶ",
		Implies: "⇒",
		in: "∈",
		incare: "℅",
		infin: "∞",
		infintie: "⧝",
		inodot: "ı",
		Int: "∬",
		int: "∫",
		intcal: "⊺",
		integers: "ℤ",
		Integral: "∫",
		intercal: "⊺",
		Intersection: "⋂",
		intlarhk: "⨗",
		intprod: "⨼",
		InvisibleComma: "⁣",
		InvisibleTimes: "⁢",
		IOcy: "Ё",
		iocy: "ё",
		Iogon: "Į",
		iogon: "į",
		Iopf: "𝕀",
		iopf: "𝕚",
		Iota: "Ι",
		iota: "ι",
		iprod: "⨼",
		iquest: "¿",
		Iscr: "ℐ",
		iscr: "𝒾",
		isin: "∈",
		isindot: "⋵",
		isinE: "⋹",
		isins: "⋴",
		isinsv: "⋳",
		isinv: "∈",
		it: "⁢",
		Itilde: "Ĩ",
		itilde: "ĩ",
		Iukcy: "І",
		iukcy: "і",
		Iuml: "Ï",
		iuml: "ï",
		Jcirc: "Ĵ",
		jcirc: "ĵ",
		Jcy: "Й",
		jcy: "й",
		Jfr: "𝔍",
		jfr: "𝔧",
		jmath: "ȷ",
		Jopf: "𝕁",
		jopf: "𝕛",
		Jscr: "𝒥",
		jscr: "𝒿",
		Jsercy: "Ј",
		jsercy: "ј",
		Jukcy: "Є",
		jukcy: "є",
		Kappa: "Κ",
		kappa: "κ",
		kappav: "ϰ",
		Kcedil: "Ķ",
		kcedil: "ķ",
		Kcy: "К",
		kcy: "к",
		Kfr: "𝔎",
		kfr: "𝔨",
		kgreen: "ĸ",
		KHcy: "Х",
		khcy: "х",
		KJcy: "Ќ",
		kjcy: "ќ",
		Kopf: "𝕂",
		kopf: "𝕜",
		Kscr: "𝒦",
		kscr: "𝓀",
		lAarr: "⇚",
		Lacute: "Ĺ",
		lacute: "ĺ",
		laemptyv: "⦴",
		lagran: "ℒ",
		Lambda: "Λ",
		lambda: "λ",
		Lang: "⟪",
		lang: "⟨",
		langd: "⦑",
		langle: "⟨",
		lap: "⪅",
		Laplacetrf: "ℒ",
		laquo: "«",
		Larr: "↞",
		lArr: "⇐",
		larr: "←",
		larrb: "⇤",
		larrbfs: "⤟",
		larrfs: "⤝",
		larrhk: "↩",
		larrlp: "↫",
		larrpl: "⤹",
		larrsim: "⥳",
		larrtl: "↢",
		lat: "⪫",
		lAtail: "⤛",
		latail: "⤙",
		late: "⪭",
		lates: "⪭︀",
		lBarr: "⤎",
		lbarr: "⤌",
		lbbrk: "❲",
		lbrace: "{",
		lbrack: "[",
		lbrke: "⦋",
		lbrksld: "⦏",
		lbrkslu: "⦍",
		Lcaron: "Ľ",
		lcaron: "ľ",
		Lcedil: "Ļ",
		lcedil: "ļ",
		lceil: "⌈",
		lcub: "{",
		Lcy: "Л",
		lcy: "л",
		ldca: "⤶",
		ldquo: "“",
		ldquor: "„",
		ldrdhar: "⥧",
		ldrushar: "⥋",
		ldsh: "↲",
		lE: "≦",
		le: "≤",
		LeftAngleBracket: "⟨",
		LeftArrow: "←",
		Leftarrow: "⇐",
		leftarrow: "←",
		LeftArrowBar: "⇤",
		LeftArrowRightArrow: "⇆",
		leftarrowtail: "↢",
		LeftCeiling: "⌈",
		LeftDoubleBracket: "⟦",
		LeftDownTeeVector: "⥡",
		LeftDownVector: "⇃",
		LeftDownVectorBar: "⥙",
		LeftFloor: "⌊",
		leftharpoondown: "↽",
		leftharpoonup: "↼",
		leftleftarrows: "⇇",
		LeftRightArrow: "↔",
		Leftrightarrow: "⇔",
		leftrightarrow: "↔",
		leftrightarrows: "⇆",
		leftrightharpoons: "⇋",
		leftrightsquigarrow: "↭",
		LeftRightVector: "⥎",
		LeftTee: "⊣",
		LeftTeeArrow: "↤",
		LeftTeeVector: "⥚",
		leftthreetimes: "⋋",
		LeftTriangle: "⊲",
		LeftTriangleBar: "⧏",
		LeftTriangleEqual: "⊴",
		LeftUpDownVector: "⥑",
		LeftUpTeeVector: "⥠",
		LeftUpVector: "↿",
		LeftUpVectorBar: "⥘",
		LeftVector: "↼",
		LeftVectorBar: "⥒",
		lEg: "⪋",
		leg: "⋚",
		leq: "≤",
		leqq: "≦",
		leqslant: "⩽",
		les: "⩽",
		lescc: "⪨",
		lesdot: "⩿",
		lesdoto: "⪁",
		lesdotor: "⪃",
		lesg: "⋚︀",
		lesges: "⪓",
		lessapprox: "⪅",
		lessdot: "⋖",
		lesseqgtr: "⋚",
		lesseqqgtr: "⪋",
		LessEqualGreater: "⋚",
		LessFullEqual: "≦",
		LessGreater: "≶",
		lessgtr: "≶",
		LessLess: "⪡",
		lesssim: "≲",
		LessSlantEqual: "⩽",
		LessTilde: "≲",
		lfisht: "⥼",
		lfloor: "⌊",
		Lfr: "𝔏",
		lfr: "𝔩",
		lg: "≶",
		lgE: "⪑",
		lHar: "⥢",
		lhard: "↽",
		lharu: "↼",
		lharul: "⥪",
		lhblk: "▄",
		LJcy: "Љ",
		ljcy: "љ",
		Ll: "⋘",
		ll: "≪",
		llarr: "⇇",
		llcorner: "⌞",
		Lleftarrow: "⇚",
		llhard: "⥫",
		lltri: "◺",
		Lmidot: "Ŀ",
		lmidot: "ŀ",
		lmoust: "⎰",
		lmoustache: "⎰",
		lnap: "⪉",
		lnapprox: "⪉",
		lnE: "≨",
		lne: "⪇",
		lneq: "⪇",
		lneqq: "≨",
		lnsim: "⋦",
		loang: "⟬",
		loarr: "⇽",
		lobrk: "⟦",
		LongLeftArrow: "⟵",
		Longleftarrow: "⟸",
		longleftarrow: "⟵",
		LongLeftRightArrow: "⟷",
		Longleftrightarrow: "⟺",
		longleftrightarrow: "⟷",
		longmapsto: "⟼",
		LongRightArrow: "⟶",
		Longrightarrow: "⟹",
		longrightarrow: "⟶",
		looparrowleft: "↫",
		looparrowright: "↬",
		lopar: "⦅",
		Lopf: "𝕃",
		lopf: "𝕝",
		loplus: "⨭",
		lotimes: "⨴",
		lowast: "∗",
		lowbar: "_",
		LowerLeftArrow: "↙",
		LowerRightArrow: "↘",
		loz: "◊",
		lozenge: "◊",
		lozf: "⧫",
		lpar: "(",
		lparlt: "⦓",
		lrarr: "⇆",
		lrcorner: "⌟",
		lrhar: "⇋",
		lrhard: "⥭",
		lrm: "‎",
		lrtri: "⊿",
		lsaquo: "‹",
		Lscr: "ℒ",
		lscr: "𝓁",
		Lsh: "↰",
		lsh: "↰",
		lsim: "≲",
		lsime: "⪍",
		lsimg: "⪏",
		lsqb: "[",
		lsquo: "‘",
		lsquor: "‚",
		Lstrok: "Ł",
		lstrok: "ł",
		Lt: "≪",
		LT: "<",
		lt: "<",
		ltcc: "⪦",
		ltcir: "⩹",
		ltdot: "⋖",
		lthree: "⋋",
		ltimes: "⋉",
		ltlarr: "⥶",
		ltquest: "⩻",
		ltri: "◃",
		ltrie: "⊴",
		ltrif: "◂",
		ltrPar: "⦖",
		lurdshar: "⥊",
		luruhar: "⥦",
		lvertneqq: "≨︀",
		lvnE: "≨︀",
		macr: "¯",
		male: "♂",
		malt: "✠",
		maltese: "✠",
		Map: "⤅",
		map: "↦",
		mapsto: "↦",
		mapstodown: "↧",
		mapstoleft: "↤",
		mapstoup: "↥",
		marker: "▮",
		mcomma: "⨩",
		Mcy: "М",
		mcy: "м",
		mdash: "—",
		mDDot: "∺",
		measuredangle: "∡",
		MediumSpace: " ",
		Mellintrf: "ℳ",
		Mfr: "𝔐",
		mfr: "𝔪",
		mho: "℧",
		micro: "µ",
		mid: "∣",
		midast: "*",
		midcir: "⫰",
		middot: "·",
		minus: "−",
		minusb: "⊟",
		minusd: "∸",
		minusdu: "⨪",
		MinusPlus: "∓",
		mlcp: "⫛",
		mldr: "…",
		mnplus: "∓",
		models: "⊧",
		Mopf: "𝕄",
		mopf: "𝕞",
		mp: "∓",
		Mscr: "ℳ",
		mscr: "𝓂",
		mstpos: "∾",
		Mu: "Μ",
		mu: "μ",
		multimap: "⊸",
		mumap: "⊸",
		nabla: "∇",
		Nacute: "Ń",
		nacute: "ń",
		nang: "∠⃒",
		nap: "≉",
		napE: "⩰̸",
		napid: "≋̸",
		napos: "ŉ",
		napprox: "≉",
		natur: "♮",
		natural: "♮",
		naturals: "ℕ",
		nbsp: "\xA0",
		nbump: "≎̸",
		nbumpe: "≏̸",
		ncap: "⩃",
		Ncaron: "Ň",
		ncaron: "ň",
		Ncedil: "Ņ",
		ncedil: "ņ",
		ncong: "≇",
		ncongdot: "⩭̸",
		ncup: "⩂",
		Ncy: "Н",
		ncy: "н",
		ndash: "–",
		ne: "≠",
		nearhk: "⤤",
		neArr: "⇗",
		nearr: "↗",
		nearrow: "↗",
		nedot: "≐̸",
		NegativeMediumSpace: "​",
		NegativeThickSpace: "​",
		NegativeThinSpace: "​",
		NegativeVeryThinSpace: "​",
		nequiv: "≢",
		nesear: "⤨",
		nesim: "≂̸",
		NestedGreaterGreater: "≫",
		NestedLessLess: "≪",
		NewLine: "\n",
		nexist: "∄",
		nexists: "∄",
		Nfr: "𝔑",
		nfr: "𝔫",
		ngE: "≧̸",
		nge: "≱",
		ngeq: "≱",
		ngeqq: "≧̸",
		ngeqslant: "⩾̸",
		nges: "⩾̸",
		nGg: "⋙̸",
		ngsim: "≵",
		nGt: "≫⃒",
		ngt: "≯",
		ngtr: "≯",
		nGtv: "≫̸",
		nhArr: "⇎",
		nharr: "↮",
		nhpar: "⫲",
		ni: "∋",
		nis: "⋼",
		nisd: "⋺",
		niv: "∋",
		NJcy: "Њ",
		njcy: "њ",
		nlArr: "⇍",
		nlarr: "↚",
		nldr: "‥",
		nlE: "≦̸",
		nle: "≰",
		nLeftarrow: "⇍",
		nleftarrow: "↚",
		nLeftrightarrow: "⇎",
		nleftrightarrow: "↮",
		nleq: "≰",
		nleqq: "≦̸",
		nleqslant: "⩽̸",
		nles: "⩽̸",
		nless: "≮",
		nLl: "⋘̸",
		nlsim: "≴",
		nLt: "≪⃒",
		nlt: "≮",
		nltri: "⋪",
		nltrie: "⋬",
		nLtv: "≪̸",
		nmid: "∤",
		NoBreak: "⁠",
		NonBreakingSpace: "\xA0",
		Nopf: "ℕ",
		nopf: "𝕟",
		Not: "⫬",
		not: "¬",
		NotCongruent: "≢",
		NotCupCap: "≭",
		NotDoubleVerticalBar: "∦",
		NotElement: "∉",
		NotEqual: "≠",
		NotEqualTilde: "≂̸",
		NotExists: "∄",
		NotGreater: "≯",
		NotGreaterEqual: "≱",
		NotGreaterFullEqual: "≧̸",
		NotGreaterGreater: "≫̸",
		NotGreaterLess: "≹",
		NotGreaterSlantEqual: "⩾̸",
		NotGreaterTilde: "≵",
		NotHumpDownHump: "≎̸",
		NotHumpEqual: "≏̸",
		notin: "∉",
		notindot: "⋵̸",
		notinE: "⋹̸",
		notinva: "∉",
		notinvb: "⋷",
		notinvc: "⋶",
		NotLeftTriangle: "⋪",
		NotLeftTriangleBar: "⧏̸",
		NotLeftTriangleEqual: "⋬",
		NotLess: "≮",
		NotLessEqual: "≰",
		NotLessGreater: "≸",
		NotLessLess: "≪̸",
		NotLessSlantEqual: "⩽̸",
		NotLessTilde: "≴",
		NotNestedGreaterGreater: "⪢̸",
		NotNestedLessLess: "⪡̸",
		notni: "∌",
		notniva: "∌",
		notnivb: "⋾",
		notnivc: "⋽",
		NotPrecedes: "⊀",
		NotPrecedesEqual: "⪯̸",
		NotPrecedesSlantEqual: "⋠",
		NotReverseElement: "∌",
		NotRightTriangle: "⋫",
		NotRightTriangleBar: "⧐̸",
		NotRightTriangleEqual: "⋭",
		NotSquareSubset: "⊏̸",
		NotSquareSubsetEqual: "⋢",
		NotSquareSuperset: "⊐̸",
		NotSquareSupersetEqual: "⋣",
		NotSubset: "⊂⃒",
		NotSubsetEqual: "⊈",
		NotSucceeds: "⊁",
		NotSucceedsEqual: "⪰̸",
		NotSucceedsSlantEqual: "⋡",
		NotSucceedsTilde: "≿̸",
		NotSuperset: "⊃⃒",
		NotSupersetEqual: "⊉",
		NotTilde: "≁",
		NotTildeEqual: "≄",
		NotTildeFullEqual: "≇",
		NotTildeTilde: "≉",
		NotVerticalBar: "∤",
		npar: "∦",
		nparallel: "∦",
		nparsl: "⫽⃥",
		npart: "∂̸",
		npolint: "⨔",
		npr: "⊀",
		nprcue: "⋠",
		npre: "⪯̸",
		nprec: "⊀",
		npreceq: "⪯̸",
		nrArr: "⇏",
		nrarr: "↛",
		nrarrc: "⤳̸",
		nrarrw: "↝̸",
		nRightarrow: "⇏",
		nrightarrow: "↛",
		nrtri: "⋫",
		nrtrie: "⋭",
		nsc: "⊁",
		nsccue: "⋡",
		nsce: "⪰̸",
		Nscr: "𝒩",
		nscr: "𝓃",
		nshortmid: "∤",
		nshortparallel: "∦",
		nsim: "≁",
		nsime: "≄",
		nsimeq: "≄",
		nsmid: "∤",
		nspar: "∦",
		nsqsube: "⋢",
		nsqsupe: "⋣",
		nsub: "⊄",
		nsubE: "⫅̸",
		nsube: "⊈",
		nsubset: "⊂⃒",
		nsubseteq: "⊈",
		nsubseteqq: "⫅̸",
		nsucc: "⊁",
		nsucceq: "⪰̸",
		nsup: "⊅",
		nsupE: "⫆̸",
		nsupe: "⊉",
		nsupset: "⊃⃒",
		nsupseteq: "⊉",
		nsupseteqq: "⫆̸",
		ntgl: "≹",
		Ntilde: "Ñ",
		ntilde: "ñ",
		ntlg: "≸",
		ntriangleleft: "⋪",
		ntrianglelefteq: "⋬",
		ntriangleright: "⋫",
		ntrianglerighteq: "⋭",
		Nu: "Ν",
		nu: "ν",
		num: "#",
		numero: "№",
		numsp: " ",
		nvap: "≍⃒",
		nVDash: "⊯",
		nVdash: "⊮",
		nvDash: "⊭",
		nvdash: "⊬",
		nvge: "≥⃒",
		nvgt: ">⃒",
		nvHarr: "⤄",
		nvinfin: "⧞",
		nvlArr: "⤂",
		nvle: "≤⃒",
		nvlt: "<⃒",
		nvltrie: "⊴⃒",
		nvrArr: "⤃",
		nvrtrie: "⊵⃒",
		nvsim: "∼⃒",
		nwarhk: "⤣",
		nwArr: "⇖",
		nwarr: "↖",
		nwarrow: "↖",
		nwnear: "⤧",
		Oacute: "Ó",
		oacute: "ó",
		oast: "⊛",
		ocir: "⊚",
		Ocirc: "Ô",
		ocirc: "ô",
		Ocy: "О",
		ocy: "о",
		odash: "⊝",
		Odblac: "Ő",
		odblac: "ő",
		odiv: "⨸",
		odot: "⊙",
		odsold: "⦼",
		OElig: "Œ",
		oelig: "œ",
		ofcir: "⦿",
		Ofr: "𝔒",
		ofr: "𝔬",
		ogon: "˛",
		Ograve: "Ò",
		ograve: "ò",
		ogt: "⧁",
		ohbar: "⦵",
		ohm: "Ω",
		oint: "∮",
		olarr: "↺",
		olcir: "⦾",
		olcross: "⦻",
		oline: "‾",
		olt: "⧀",
		Omacr: "Ō",
		omacr: "ō",
		Omega: "Ω",
		omega: "ω",
		Omicron: "Ο",
		omicron: "ο",
		omid: "⦶",
		ominus: "⊖",
		Oopf: "𝕆",
		oopf: "𝕠",
		opar: "⦷",
		OpenCurlyDoubleQuote: "“",
		OpenCurlyQuote: "‘",
		operp: "⦹",
		oplus: "⊕",
		Or: "⩔",
		or: "∨",
		orarr: "↻",
		ord: "⩝",
		order: "ℴ",
		orderof: "ℴ",
		ordf: "ª",
		ordm: "º",
		origof: "⊶",
		oror: "⩖",
		orslope: "⩗",
		orv: "⩛",
		oS: "Ⓢ",
		Oscr: "𝒪",
		oscr: "ℴ",
		Oslash: "Ø",
		oslash: "ø",
		osol: "⊘",
		Otilde: "Õ",
		otilde: "õ",
		Otimes: "⨷",
		otimes: "⊗",
		otimesas: "⨶",
		Ouml: "Ö",
		ouml: "ö",
		ovbar: "⌽",
		OverBar: "‾",
		OverBrace: "⏞",
		OverBracket: "⎴",
		OverParenthesis: "⏜",
		par: "∥",
		para: "¶",
		parallel: "∥",
		parsim: "⫳",
		parsl: "⫽",
		part: "∂",
		PartialD: "∂",
		Pcy: "П",
		pcy: "п",
		percnt: "%",
		period: ".",
		permil: "‰",
		perp: "⊥",
		pertenk: "‱",
		Pfr: "𝔓",
		pfr: "𝔭",
		Phi: "Φ",
		phi: "φ",
		phiv: "ϕ",
		phmmat: "ℳ",
		phone: "☎",
		Pi: "Π",
		pi: "π",
		pitchfork: "⋔",
		piv: "ϖ",
		planck: "ℏ",
		planckh: "ℎ",
		plankv: "ℏ",
		plus: "+",
		plusacir: "⨣",
		plusb: "⊞",
		pluscir: "⨢",
		plusdo: "∔",
		plusdu: "⨥",
		pluse: "⩲",
		PlusMinus: "±",
		plusmn: "±",
		plussim: "⨦",
		plustwo: "⨧",
		pm: "±",
		Poincareplane: "ℌ",
		pointint: "⨕",
		Popf: "ℙ",
		popf: "𝕡",
		pound: "£",
		Pr: "⪻",
		pr: "≺",
		prap: "⪷",
		prcue: "≼",
		prE: "⪳",
		pre: "⪯",
		prec: "≺",
		precapprox: "⪷",
		preccurlyeq: "≼",
		Precedes: "≺",
		PrecedesEqual: "⪯",
		PrecedesSlantEqual: "≼",
		PrecedesTilde: "≾",
		preceq: "⪯",
		precnapprox: "⪹",
		precneqq: "⪵",
		precnsim: "⋨",
		precsim: "≾",
		Prime: "″",
		prime: "′",
		primes: "ℙ",
		prnap: "⪹",
		prnE: "⪵",
		prnsim: "⋨",
		prod: "∏",
		Product: "∏",
		profalar: "⌮",
		profline: "⌒",
		profsurf: "⌓",
		prop: "∝",
		Proportion: "∷",
		Proportional: "∝",
		propto: "∝",
		prsim: "≾",
		prurel: "⊰",
		Pscr: "𝒫",
		pscr: "𝓅",
		Psi: "Ψ",
		psi: "ψ",
		puncsp: " ",
		Qfr: "𝔔",
		qfr: "𝔮",
		qint: "⨌",
		Qopf: "ℚ",
		qopf: "𝕢",
		qprime: "⁗",
		Qscr: "𝒬",
		qscr: "𝓆",
		quaternions: "ℍ",
		quatint: "⨖",
		quest: "?",
		questeq: "≟",
		QUOT: "\"",
		quot: "\"",
		rAarr: "⇛",
		race: "∽̱",
		Racute: "Ŕ",
		racute: "ŕ",
		radic: "√",
		raemptyv: "⦳",
		Rang: "⟫",
		rang: "⟩",
		rangd: "⦒",
		range: "⦥",
		rangle: "⟩",
		raquo: "»",
		Rarr: "↠",
		rArr: "⇒",
		rarr: "→",
		rarrap: "⥵",
		rarrb: "⇥",
		rarrbfs: "⤠",
		rarrc: "⤳",
		rarrfs: "⤞",
		rarrhk: "↪",
		rarrlp: "↬",
		rarrpl: "⥅",
		rarrsim: "⥴",
		Rarrtl: "⤖",
		rarrtl: "↣",
		rarrw: "↝",
		rAtail: "⤜",
		ratail: "⤚",
		ratio: "∶",
		rationals: "ℚ",
		RBarr: "⤐",
		rBarr: "⤏",
		rbarr: "⤍",
		rbbrk: "❳",
		rbrace: "}",
		rbrack: "]",
		rbrke: "⦌",
		rbrksld: "⦎",
		rbrkslu: "⦐",
		Rcaron: "Ř",
		rcaron: "ř",
		Rcedil: "Ŗ",
		rcedil: "ŗ",
		rceil: "⌉",
		rcub: "}",
		Rcy: "Р",
		rcy: "р",
		rdca: "⤷",
		rdldhar: "⥩",
		rdquo: "”",
		rdquor: "”",
		rdsh: "↳",
		Re: "ℜ",
		real: "ℜ",
		realine: "ℛ",
		realpart: "ℜ",
		reals: "ℝ",
		rect: "▭",
		REG: "®",
		reg: "®",
		ReverseElement: "∋",
		ReverseEquilibrium: "⇋",
		ReverseUpEquilibrium: "⥯",
		rfisht: "⥽",
		rfloor: "⌋",
		Rfr: "ℜ",
		rfr: "𝔯",
		rHar: "⥤",
		rhard: "⇁",
		rharu: "⇀",
		rharul: "⥬",
		Rho: "Ρ",
		rho: "ρ",
		rhov: "ϱ",
		RightAngleBracket: "⟩",
		RightArrow: "→",
		Rightarrow: "⇒",
		rightarrow: "→",
		RightArrowBar: "⇥",
		RightArrowLeftArrow: "⇄",
		rightarrowtail: "↣",
		RightCeiling: "⌉",
		RightDoubleBracket: "⟧",
		RightDownTeeVector: "⥝",
		RightDownVector: "⇂",
		RightDownVectorBar: "⥕",
		RightFloor: "⌋",
		rightharpoondown: "⇁",
		rightharpoonup: "⇀",
		rightleftarrows: "⇄",
		rightleftharpoons: "⇌",
		rightrightarrows: "⇉",
		rightsquigarrow: "↝",
		RightTee: "⊢",
		RightTeeArrow: "↦",
		RightTeeVector: "⥛",
		rightthreetimes: "⋌",
		RightTriangle: "⊳",
		RightTriangleBar: "⧐",
		RightTriangleEqual: "⊵",
		RightUpDownVector: "⥏",
		RightUpTeeVector: "⥜",
		RightUpVector: "↾",
		RightUpVectorBar: "⥔",
		RightVector: "⇀",
		RightVectorBar: "⥓",
		ring: "˚",
		risingdotseq: "≓",
		rlarr: "⇄",
		rlhar: "⇌",
		rlm: "‏",
		rmoust: "⎱",
		rmoustache: "⎱",
		rnmid: "⫮",
		roang: "⟭",
		roarr: "⇾",
		robrk: "⟧",
		ropar: "⦆",
		Ropf: "ℝ",
		ropf: "𝕣",
		roplus: "⨮",
		rotimes: "⨵",
		RoundImplies: "⥰",
		rpar: ")",
		rpargt: "⦔",
		rppolint: "⨒",
		rrarr: "⇉",
		Rrightarrow: "⇛",
		rsaquo: "›",
		Rscr: "ℛ",
		rscr: "𝓇",
		Rsh: "↱",
		rsh: "↱",
		rsqb: "]",
		rsquo: "’",
		rsquor: "’",
		rthree: "⋌",
		rtimes: "⋊",
		rtri: "▹",
		rtrie: "⊵",
		rtrif: "▸",
		rtriltri: "⧎",
		RuleDelayed: "⧴",
		ruluhar: "⥨",
		rx: "℞",
		Sacute: "Ś",
		sacute: "ś",
		sbquo: "‚",
		Sc: "⪼",
		sc: "≻",
		scap: "⪸",
		Scaron: "Š",
		scaron: "š",
		sccue: "≽",
		scE: "⪴",
		sce: "⪰",
		Scedil: "Ş",
		scedil: "ş",
		Scirc: "Ŝ",
		scirc: "ŝ",
		scnap: "⪺",
		scnE: "⪶",
		scnsim: "⋩",
		scpolint: "⨓",
		scsim: "≿",
		Scy: "С",
		scy: "с",
		sdot: "⋅",
		sdotb: "⊡",
		sdote: "⩦",
		searhk: "⤥",
		seArr: "⇘",
		searr: "↘",
		searrow: "↘",
		sect: "§",
		semi: ";",
		seswar: "⤩",
		setminus: "∖",
		setmn: "∖",
		sext: "✶",
		Sfr: "𝔖",
		sfr: "𝔰",
		sfrown: "⌢",
		sharp: "♯",
		SHCHcy: "Щ",
		shchcy: "щ",
		SHcy: "Ш",
		shcy: "ш",
		ShortDownArrow: "↓",
		ShortLeftArrow: "←",
		shortmid: "∣",
		shortparallel: "∥",
		ShortRightArrow: "→",
		ShortUpArrow: "↑",
		shy: "­",
		Sigma: "Σ",
		sigma: "σ",
		sigmaf: "ς",
		sigmav: "ς",
		sim: "∼",
		simdot: "⩪",
		sime: "≃",
		simeq: "≃",
		simg: "⪞",
		simgE: "⪠",
		siml: "⪝",
		simlE: "⪟",
		simne: "≆",
		simplus: "⨤",
		simrarr: "⥲",
		slarr: "←",
		SmallCircle: "∘",
		smallsetminus: "∖",
		smashp: "⨳",
		smeparsl: "⧤",
		smid: "∣",
		smile: "⌣",
		smt: "⪪",
		smte: "⪬",
		smtes: "⪬︀",
		SOFTcy: "Ь",
		softcy: "ь",
		sol: "/",
		solb: "⧄",
		solbar: "⌿",
		Sopf: "𝕊",
		sopf: "𝕤",
		spades: "♠",
		spadesuit: "♠",
		spar: "∥",
		sqcap: "⊓",
		sqcaps: "⊓︀",
		sqcup: "⊔",
		sqcups: "⊔︀",
		Sqrt: "√",
		sqsub: "⊏",
		sqsube: "⊑",
		sqsubset: "⊏",
		sqsubseteq: "⊑",
		sqsup: "⊐",
		sqsupe: "⊒",
		sqsupset: "⊐",
		sqsupseteq: "⊒",
		squ: "□",
		Square: "□",
		square: "□",
		SquareIntersection: "⊓",
		SquareSubset: "⊏",
		SquareSubsetEqual: "⊑",
		SquareSuperset: "⊐",
		SquareSupersetEqual: "⊒",
		SquareUnion: "⊔",
		squarf: "▪",
		squf: "▪",
		srarr: "→",
		Sscr: "𝒮",
		sscr: "𝓈",
		ssetmn: "∖",
		ssmile: "⌣",
		sstarf: "⋆",
		Star: "⋆",
		star: "☆",
		starf: "★",
		straightepsilon: "ϵ",
		straightphi: "ϕ",
		strns: "¯",
		Sub: "⋐",
		sub: "⊂",
		subdot: "⪽",
		subE: "⫅",
		sube: "⊆",
		subedot: "⫃",
		submult: "⫁",
		subnE: "⫋",
		subne: "⊊",
		subplus: "⪿",
		subrarr: "⥹",
		Subset: "⋐",
		subset: "⊂",
		subseteq: "⊆",
		subseteqq: "⫅",
		SubsetEqual: "⊆",
		subsetneq: "⊊",
		subsetneqq: "⫋",
		subsim: "⫇",
		subsub: "⫕",
		subsup: "⫓",
		succ: "≻",
		succapprox: "⪸",
		succcurlyeq: "≽",
		Succeeds: "≻",
		SucceedsEqual: "⪰",
		SucceedsSlantEqual: "≽",
		SucceedsTilde: "≿",
		succeq: "⪰",
		succnapprox: "⪺",
		succneqq: "⪶",
		succnsim: "⋩",
		succsim: "≿",
		SuchThat: "∋",
		Sum: "∑",
		sum: "∑",
		sung: "♪",
		Sup: "⋑",
		sup: "⊃",
		sup1: "¹",
		sup2: "²",
		sup3: "³",
		supdot: "⪾",
		supdsub: "⫘",
		supE: "⫆",
		supe: "⊇",
		supedot: "⫄",
		Superset: "⊃",
		SupersetEqual: "⊇",
		suphsol: "⟉",
		suphsub: "⫗",
		suplarr: "⥻",
		supmult: "⫂",
		supnE: "⫌",
		supne: "⊋",
		supplus: "⫀",
		Supset: "⋑",
		supset: "⊃",
		supseteq: "⊇",
		supseteqq: "⫆",
		supsetneq: "⊋",
		supsetneqq: "⫌",
		supsim: "⫈",
		supsub: "⫔",
		supsup: "⫖",
		swarhk: "⤦",
		swArr: "⇙",
		swarr: "↙",
		swarrow: "↙",
		swnwar: "⤪",
		szlig: "ß",
		Tab: "	",
		target: "⌖",
		Tau: "Τ",
		tau: "τ",
		tbrk: "⎴",
		Tcaron: "Ť",
		tcaron: "ť",
		Tcedil: "Ţ",
		tcedil: "ţ",
		Tcy: "Т",
		tcy: "т",
		tdot: "⃛",
		telrec: "⌕",
		Tfr: "𝔗",
		tfr: "𝔱",
		there4: "∴",
		Therefore: "∴",
		therefore: "∴",
		Theta: "Θ",
		theta: "θ",
		thetasym: "ϑ",
		thetav: "ϑ",
		thickapprox: "≈",
		thicksim: "∼",
		ThickSpace: "  ",
		thinsp: " ",
		ThinSpace: " ",
		thkap: "≈",
		thksim: "∼",
		THORN: "Þ",
		thorn: "þ",
		Tilde: "∼",
		tilde: "˜",
		TildeEqual: "≃",
		TildeFullEqual: "≅",
		TildeTilde: "≈",
		times: "×",
		timesb: "⊠",
		timesbar: "⨱",
		timesd: "⨰",
		tint: "∭",
		toea: "⤨",
		top: "⊤",
		topbot: "⌶",
		topcir: "⫱",
		Topf: "𝕋",
		topf: "𝕥",
		topfork: "⫚",
		tosa: "⤩",
		tprime: "‴",
		TRADE: "™",
		trade: "™",
		triangle: "▵",
		triangledown: "▿",
		triangleleft: "◃",
		trianglelefteq: "⊴",
		triangleq: "≜",
		triangleright: "▹",
		trianglerighteq: "⊵",
		tridot: "◬",
		trie: "≜",
		triminus: "⨺",
		TripleDot: "⃛",
		triplus: "⨹",
		trisb: "⧍",
		tritime: "⨻",
		trpezium: "⏢",
		Tscr: "𝒯",
		tscr: "𝓉",
		TScy: "Ц",
		tscy: "ц",
		TSHcy: "Ћ",
		tshcy: "ћ",
		Tstrok: "Ŧ",
		tstrok: "ŧ",
		twixt: "≬",
		twoheadleftarrow: "↞",
		twoheadrightarrow: "↠",
		Uacute: "Ú",
		uacute: "ú",
		Uarr: "↟",
		uArr: "⇑",
		uarr: "↑",
		Uarrocir: "⥉",
		Ubrcy: "Ў",
		ubrcy: "ў",
		Ubreve: "Ŭ",
		ubreve: "ŭ",
		Ucirc: "Û",
		ucirc: "û",
		Ucy: "У",
		ucy: "у",
		udarr: "⇅",
		Udblac: "Ű",
		udblac: "ű",
		udhar: "⥮",
		ufisht: "⥾",
		Ufr: "𝔘",
		ufr: "𝔲",
		Ugrave: "Ù",
		ugrave: "ù",
		uHar: "⥣",
		uharl: "↿",
		uharr: "↾",
		uhblk: "▀",
		ulcorn: "⌜",
		ulcorner: "⌜",
		ulcrop: "⌏",
		ultri: "◸",
		Umacr: "Ū",
		umacr: "ū",
		uml: "¨",
		UnderBar: "_",
		UnderBrace: "⏟",
		UnderBracket: "⎵",
		UnderParenthesis: "⏝",
		Union: "⋃",
		UnionPlus: "⊎",
		Uogon: "Ų",
		uogon: "ų",
		Uopf: "𝕌",
		uopf: "𝕦",
		UpArrow: "↑",
		Uparrow: "⇑",
		uparrow: "↑",
		UpArrowBar: "⤒",
		UpArrowDownArrow: "⇅",
		UpDownArrow: "↕",
		Updownarrow: "⇕",
		updownarrow: "↕",
		UpEquilibrium: "⥮",
		upharpoonleft: "↿",
		upharpoonright: "↾",
		uplus: "⊎",
		UpperLeftArrow: "↖",
		UpperRightArrow: "↗",
		Upsi: "ϒ",
		upsi: "υ",
		upsih: "ϒ",
		Upsilon: "Υ",
		upsilon: "υ",
		UpTee: "⊥",
		UpTeeArrow: "↥",
		upuparrows: "⇈",
		urcorn: "⌝",
		urcorner: "⌝",
		urcrop: "⌎",
		Uring: "Ů",
		uring: "ů",
		urtri: "◹",
		Uscr: "𝒰",
		uscr: "𝓊",
		utdot: "⋰",
		Utilde: "Ũ",
		utilde: "ũ",
		utri: "▵",
		utrif: "▴",
		uuarr: "⇈",
		Uuml: "Ü",
		uuml: "ü",
		uwangle: "⦧",
		vangrt: "⦜",
		varepsilon: "ϵ",
		varkappa: "ϰ",
		varnothing: "∅",
		varphi: "ϕ",
		varpi: "ϖ",
		varpropto: "∝",
		vArr: "⇕",
		varr: "↕",
		varrho: "ϱ",
		varsigma: "ς",
		varsubsetneq: "⊊︀",
		varsubsetneqq: "⫋︀",
		varsupsetneq: "⊋︀",
		varsupsetneqq: "⫌︀",
		vartheta: "ϑ",
		vartriangleleft: "⊲",
		vartriangleright: "⊳",
		Vbar: "⫫",
		vBar: "⫨",
		vBarv: "⫩",
		Vcy: "В",
		vcy: "в",
		VDash: "⊫",
		Vdash: "⊩",
		vDash: "⊨",
		vdash: "⊢",
		Vdashl: "⫦",
		Vee: "⋁",
		vee: "∨",
		veebar: "⊻",
		veeeq: "≚",
		vellip: "⋮",
		Verbar: "‖",
		verbar: "|",
		Vert: "‖",
		vert: "|",
		VerticalBar: "∣",
		VerticalLine: "|",
		VerticalSeparator: "❘",
		VerticalTilde: "≀",
		VeryThinSpace: " ",
		Vfr: "𝔙",
		vfr: "𝔳",
		vltri: "⊲",
		vnsub: "⊂⃒",
		vnsup: "⊃⃒",
		Vopf: "𝕍",
		vopf: "𝕧",
		vprop: "∝",
		vrtri: "⊳",
		Vscr: "𝒱",
		vscr: "𝓋",
		vsubnE: "⫋︀",
		vsubne: "⊊︀",
		vsupnE: "⫌︀",
		vsupne: "⊋︀",
		Vvdash: "⊪",
		vzigzag: "⦚",
		Wcirc: "Ŵ",
		wcirc: "ŵ",
		wedbar: "⩟",
		Wedge: "⋀",
		wedge: "∧",
		wedgeq: "≙",
		weierp: "℘",
		Wfr: "𝔚",
		wfr: "𝔴",
		Wopf: "𝕎",
		wopf: "𝕨",
		wp: "℘",
		wr: "≀",
		wreath: "≀",
		Wscr: "𝒲",
		wscr: "𝓌",
		xcap: "⋂",
		xcirc: "◯",
		xcup: "⋃",
		xdtri: "▽",
		Xfr: "𝔛",
		xfr: "𝔵",
		xhArr: "⟺",
		xharr: "⟷",
		Xi: "Ξ",
		xi: "ξ",
		xlArr: "⟸",
		xlarr: "⟵",
		xmap: "⟼",
		xnis: "⋻",
		xodot: "⨀",
		Xopf: "𝕏",
		xopf: "𝕩",
		xoplus: "⨁",
		xotime: "⨂",
		xrArr: "⟹",
		xrarr: "⟶",
		Xscr: "𝒳",
		xscr: "𝓍",
		xsqcup: "⨆",
		xuplus: "⨄",
		xutri: "△",
		xvee: "⋁",
		xwedge: "⋀",
		Yacute: "Ý",
		yacute: "ý",
		YAcy: "Я",
		yacy: "я",
		Ycirc: "Ŷ",
		ycirc: "ŷ",
		Ycy: "Ы",
		ycy: "ы",
		yen: "¥",
		Yfr: "𝔜",
		yfr: "𝔶",
		YIcy: "Ї",
		yicy: "ї",
		Yopf: "𝕐",
		yopf: "𝕪",
		Yscr: "𝒴",
		yscr: "𝓎",
		YUcy: "Ю",
		yucy: "ю",
		Yuml: "Ÿ",
		yuml: "ÿ",
		Zacute: "Ź",
		zacute: "ź",
		Zcaron: "Ž",
		zcaron: "ž",
		Zcy: "З",
		zcy: "з",
		Zdot: "Ż",
		zdot: "ż",
		zeetrf: "ℨ",
		ZeroWidthSpace: "​",
		Zeta: "Ζ",
		zeta: "ζ",
		Zfr: "ℨ",
		zfr: "𝔷",
		ZHcy: "Ж",
		zhcy: "ж",
		zigrarr: "⇝",
		Zopf: "ℤ",
		zopf: "𝕫",
		Zscr: "𝒵",
		zscr: "𝓏",
		zwj: "‍",
		zwnj: "‌"
	}), e.entityMap = e.HTML_ENTITIES;
})), lh = /* @__PURE__ */ a(((e) => {
	var t = oh().NAMESPACE, n = oh().tagNamePattern, r = 0, i = 1, a = 2, o = 3, s = 4, c = 5, l = 6, u = 7;
	function d(e, t) {
		this.message = e, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, d);
	}
	d.prototype = /* @__PURE__ */ Error(), d.prototype.name = d.name;
	function f() {}
	f.prototype = { parse: function(e, t, n) {
		var r = this.domBuilder;
		r.startDocument(), y(t, t = {}), p(e, t, n, r, this.errorHandler), r.endDocument();
	} };
	function p(e, r, i, a, o) {
		function s(e) {
			if (e > 65535) {
				e -= 65536;
				var t = 55296 + (e >> 10), n = 56320 + (e & 1023);
				return String.fromCharCode(t, n);
			}
			return String.fromCharCode(e);
		}
		function c(e) {
			var t = e.slice(1, -1);
			return Object.hasOwnProperty.call(i, t) ? i[t] : t.charAt(0) === "#" ? s(parseInt(t.substr(1).replace("x", "0x"))) : (o.error("entity not found:" + e), e);
		}
		function l(t) {
			if (t > E) {
				var n = e.substring(E, t).replace(/&#?\w+;/g, c);
				C && u(E), a.characters(n, 0, t - E), E = t;
			}
		}
		function u(t, n) {
			for (; t >= p && (n = y.exec(e));) f = n.index, p = f + n[0].length, C.lineNumber++;
			C.columnNumber = t - f + 1;
		}
		for (var f = 0, p = 0, y = /.*(?:\r\n?|\n)|.*$/g, C = a.locator, w = [{ currentNSMap: r }], T = {}, E = 0;;) {
			try {
				var D = e.indexOf("<", E);
				if (D < 0) {
					if (!e.substr(E).match(/^\s*$/)) {
						var O = a.doc, k = O.createTextNode(e.substr(E));
						O.appendChild(k), a.currentElement = k;
					}
					return;
				}
				switch (D > E && l(D), e.charAt(D + 1)) {
					case "/":
						var A = e.indexOf(">", D + 3), j = e.substring(D + 2, A).replace(/^([\s\S]*?[^ \t\n\r])?[ \t\n\r]*$/, "$1"), M = w.pop();
						A < 0 ? (j = e.substring(D + 2).replace(/[\s<].*/, ""), o.error("end tag name: " + j + " is not complete:" + M.tagName), A = D + 1 + j.length) : j.match(/\s</) ? (j = j.replace(/[\s<].*/, ""), o.error("end tag name: " + j + " maybe not complete"), A = D + 1 + j.length) : /[ \t\n\r]/.test(j) && n.test(j.split(/[ \t\n\r]/)[0]) && o.error("end tag name is followed by whitespace and trailing content: \"" + j + "\"");
						var N = M.localNSMap, P = M.tagName == j;
						if (P || M.tagName && M.tagName.toLowerCase() == j.toLowerCase()) {
							if (a.endElement(M.uri, M.localName, j), N) for (var F in N) Object.prototype.hasOwnProperty.call(N, F) && a.endPrefixMapping(F);
							P || o.fatalError("end tag name: " + j + " is not match the current start tagName:" + M.tagName);
						} else w.push(M);
						A++;
						break;
					case "?":
						C && u(D), A = x(e, D, a);
						break;
					case "!":
						C && u(D), A = b(e, D, a, o);
						break;
					default:
						C && u(D);
						var I = new S(), L = w[w.length - 1].currentNSMap, A = h(e, D, I, L, c, o), R = I.length;
						if (!I.closed && v(e, A, I.tagName, T) && (I.closed = !0, i.nbsp || o.warning("unclosed xml attribute")), C && R) {
							for (var z = m(C, {}), B = 0; B < R; B++) {
								var ee = I[B];
								u(ee.offset), ee.locator = m(C, {});
							}
							a.locator = z, g(I, a, L) && w.push(I), a.locator = C;
						} else g(I, a, L) && w.push(I);
						t.isHTML(I.uri) && !I.closed ? A = _(e, A, I.tagName, c, a) : A++;
				}
			} catch (e) {
				if (e instanceof d) throw e;
				o.error("element parse error: " + e), A = -1;
			}
			A > E ? E = A : l(Math.max(D, E) + 1);
		}
	}
	function m(e, t) {
		return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
	}
	function h(e, n, d, f, p, m) {
		function h(e, t, n) {
			d.attributeNames.hasOwnProperty(e) && m.fatalError("Attribute " + e + " redefined"), d.addValue(e, t.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, p), n);
		}
		for (var g, _, v = ++n, y = r;;) {
			var b = e.charAt(v);
			if (y === r && b === "<") throw Error("unexpected < in tag name: " + e.slice(n, v));
			switch (b) {
				case "=":
					if (y === i) g = e.slice(n, v), y = o;
					else if (y === a) y = o;
					else throw Error("attribute equal must after attrName");
					break;
				case "'":
				case "\"":
					if (y === o || y === i) {
						if (y === i && (m.warning("attribute value must after \"=\""), g = e.slice(n, v)), n = v + 1, v = e.indexOf(b, n), v > 0) _ = e.slice(n, v), h(g, _, n - 1), y = c;
						else throw Error("attribute value no end '" + b + "' match");
					} else if (y == s) _ = e.slice(n, v), h(g, _, n), m.warning("attribute \"" + g + "\" missed start quot(" + b + ")!!"), n = v + 1, y = c;
					else throw Error("attribute value must after \"=\"");
					break;
				case "/":
					switch (y) {
						case r: d.setTagName(e.slice(n, v));
						case c:
						case l:
						case u: y = u, d.closed = !0;
						case s:
						case i: break;
						case a:
							d.closed = !0;
							break;
						default: throw Error("attribute invalid close char('/')");
					}
					break;
				case "": return m.error("unexpected end of input"), y == r && d.setTagName(e.slice(n, v)), v;
				case ">":
					switch (y) {
						case r: d.setTagName(e.slice(n, v));
						case c:
						case l:
						case u: break;
						case s:
						case i: _ = e.slice(n, v), _.slice(-1) === "/" && (d.closed = !0, _ = _.slice(0, -1));
						case a:
							y === a && (_ = g), y == s ? (m.warning("attribute \"" + _ + "\" missed quot(\")!"), h(g, _, n)) : ((!t.isHTML(f[""]) || !_.match(/^(?:disabled|checked|selected)$/i)) && m.warning("attribute \"" + _ + "\" missed value!! \"" + _ + "\" instead!!"), h(_, _, n));
							break;
						case o: throw Error("attribute value missed!!");
					}
					return v;
				case "": b = " ";
				default: if (b <= " ") switch (y) {
					case r:
						d.setTagName(e.slice(n, v)), y = l;
						break;
					case i:
						g = e.slice(n, v), y = a;
						break;
					case s:
						var _ = e.slice(n, v);
						m.warning("attribute \"" + _ + "\" missed quot(\")!!"), h(g, _, n);
					case c: y = l;
				}
				else switch (y) {
					case a:
						d.tagName, (!t.isHTML(f[""]) || !g.match(/^(?:disabled|checked|selected)$/i)) && m.warning("attribute \"" + g + "\" missed value!! \"" + g + "\" instead2!!"), h(g, g, n), n = v, y = i;
						break;
					case c: m.warning("attribute space is required\"" + g + "\"!!");
					case l:
						y = i, n = v;
						break;
					case o:
						y = s, n = v;
						break;
					case u: throw Error("elements closed character '/' and '>' must be connected to");
				}
			}
			v++;
		}
	}
	function g(e, n, r) {
		for (var i = e.tagName, a = null, o = e.length; o--;) {
			var s = e[o], c = s.qName, l = s.value, u = c.indexOf(":");
			if (u > 0) var d = s.prefix = c.slice(0, u), f = c.slice(u + 1), p = d === "xmlns" && f;
			else f = c, d = null, p = c === "xmlns" && "";
			s.localName = f, p !== !1 && (a ?? (a = {}, r = Object.create(r)), r[p] = a[p] = l, s.uri = t.XMLNS, n.startPrefixMapping(p, l));
		}
		for (var o = e.length; o--;) {
			s = e[o];
			var d = s.prefix;
			d && (d === "xml" && (s.uri = t.XML), d !== "xmlns" && (s.uri = r[d || ""]));
		}
		var u = i.indexOf(":");
		u > 0 ? (d = e.prefix = i.slice(0, u), f = e.localName = i.slice(u + 1)) : (d = null, f = e.localName = i);
		var m = e.uri = r[d || ""];
		if (n.startElement(m, f, i, e), e.closed) {
			if (n.endElement(m, f, i), a) for (d in a) Object.prototype.hasOwnProperty.call(a, d) && n.endPrefixMapping(d);
		} else return e.currentNSMap = r, e.localNSMap = a, !0;
	}
	function _(e, t, n, r, i) {
		if (/^(?:script|textarea)$/i.test(n)) {
			var a = e.indexOf("</" + n + ">", t), o = e.substring(t + 1, a);
			if (/[&<]/.test(o)) return /^script$/i.test(n) ? (i.characters(o, 0, o.length), a) : (o = o.replace(/&#?\w+;/g, r), i.characters(o, 0, o.length), a);
		}
		return t + 1;
	}
	function v(e, t, n, r) {
		var i = r[n];
		return i ?? (i = e.lastIndexOf("</" + n + ">"), i < t && (i = e.lastIndexOf("</" + n)), r[n] = i), i < t;
	}
	function y(e, t) {
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
	}
	function b(e, t, n, r) {
		switch (e.charAt(t + 2)) {
			case "-":
				if (e.charAt(t + 3) === "-") {
					var i = e.indexOf("-->", t + 4);
					return i > t ? (n.comment(e, t + 4, i - t - 4), i + 3) : (r.error("Unclosed comment"), -1);
				}
				return -1;
			default:
				if (e.substr(t + 3, 6) == "CDATA[") {
					var i = e.indexOf("]]>", t + 9);
					return n.startCDATA(), n.characters(e, t + 9, i - t - 9), n.endCDATA(), i + 3;
				}
				var a = C(e, t), o = a.length;
				if (o > 1 && /!doctype/i.test(a[0][0])) {
					var s = a[1][0], c = !1, l = !1;
					o > 3 && (/^public$/i.test(a[2][0]) ? (c = a[3][0], l = o > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (l = a[3][0]));
					var u = a[o - 1];
					return n.startDTD(s, c, l), n.endDTD(), u.index + u[0].length;
				}
		}
		return -1;
	}
	function x(e, t, n) {
		var r = e.indexOf("?>", t);
		if (r) {
			var i = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)$/);
			return i ? (i[0].length, n.processingInstruction(i[1], i[2]), r + 2) : -1;
		}
		return -1;
	}
	function S() {
		this.attributeNames = {};
	}
	S.prototype = {
		setTagName: function(e) {
			if (!n.test(e)) throw Error("invalid tagName:" + e);
			this.tagName = e;
		},
		addValue: function(e, t, r) {
			if (!n.test(e)) throw Error("invalid attribute:" + e);
			this.attributeNames[e] = this.length, this[this.length++] = {
				qName: e,
				value: t,
				offset: r
			};
		},
		length: 0,
		getLocalName: function(e) {
			return this[e].localName;
		},
		getLocator: function(e) {
			return this[e].locator;
		},
		getQName: function(e) {
			return this[e].qName;
		},
		getURI: function(e) {
			return this[e].uri;
		},
		getValue: function(e) {
			return this[e].value;
		}
	};
	function C(e, t) {
		var n, r = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
		for (i.lastIndex = t, i.exec(e); n = i.exec(e);) if (r.push(n), n[1]) return r;
	}
	e.XMLReader = f, e.ParseError = d;
})), uh = /* @__PURE__ */ a(((e) => {
	var t = oh(), n = sh(), r = ch(), i = lh(), a = n.DOMImplementation, o = t.NAMESPACE, s = i.ParseError, c = i.XMLReader;
	function l(e) {
		return e.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
	}
	function u(e) {
		this.options = e || { locator: {} };
	}
	u.prototype.parseFromString = function(e, t) {
		var n = this.options, i = new c(), a = n.domBuilder || new f(), s = n.errorHandler, u = n.locator, p = n.xmlns || {}, m = /\/x?html?$/.test(t), h = m ? r.HTML_ENTITIES : r.XML_ENTITIES;
		u && a.setDocumentLocator(u), i.errorHandler = d(s, a, u), i.domBuilder = n.domBuilder || a, m && (p[""] = o.HTML), p.xml = p.xml || o.XML;
		var g = n.normalizeLineEndings || l;
		return e && typeof e == "string" ? i.parse(g(e), p, h) : i.errorHandler.error("invalid doc source"), a.doc;
	};
	function d(e, t, n) {
		if (!e) {
			if (t instanceof f) return t;
			e = t;
		}
		var r = {}, i = e instanceof Function;
		n ||= {};
		function a(t) {
			var a = e[t];
			!a && i && (a = e.length == 2 ? function(n) {
				e(t, n);
			} : e), r[t] = a && function(e) {
				a("[xmldom " + t + "]	" + e + m(n));
			} || function() {};
		}
		return a("warning"), a("error"), a("fatalError"), r;
	}
	function f() {
		this.cdata = !1;
	}
	function p(e, t) {
		t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
	}
	f.prototype = {
		startDocument: function() {
			this.doc = new a().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
		},
		startElement: function(e, t, n, r) {
			var i = this.doc, a = i.createElementNS(e, n || t), o = r.length;
			g(this, a), this.currentElement = a, this.locator && p(this.locator, a);
			for (var s = 0; s < o; s++) {
				var e = r.getURI(s), c = r.getValue(s), n = r.getQName(s), l = i.createAttributeNS(e, n);
				this.locator && p(r.getLocator(s), l), l.value = l.nodeValue = c, a.setAttributeNode(l);
			}
		},
		endElement: function(e, t, n) {
			var r = this.currentElement;
			r.tagName, this.currentElement = r.parentNode;
		},
		startPrefixMapping: function(e, t) {},
		endPrefixMapping: function(e) {},
		processingInstruction: function(e, t) {
			var n = this.doc.createProcessingInstruction(e, t);
			this.locator && p(this.locator, n), g(this, n);
		},
		ignorableWhitespace: function(e, t, n) {},
		characters: function(e, t, n) {
			if (e = h.apply(this, arguments), e) {
				if (this.cdata) var r = this.doc.createCDATASection(e);
				else var r = this.doc.createTextNode(e);
				this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), this.locator && p(this.locator, r);
			}
		},
		skippedEntity: function(e) {},
		endDocument: function() {
			this.doc.normalize();
		},
		setDocumentLocator: function(e) {
			(this.locator = e) && (e.lineNumber = 0);
		},
		comment: function(e, t, n) {
			e = h.apply(this, arguments);
			var r = this.doc.createComment(e);
			this.locator && p(this.locator, r), g(this, r);
		},
		startCDATA: function() {
			this.cdata = !0;
		},
		endCDATA: function() {
			this.cdata = !1;
		},
		startDTD: function(e, t, n) {
			var r = this.doc.implementation;
			if (r && r.createDocumentType) {
				var i = r.createDocumentType(e, t, n);
				this.locator && p(this.locator, i), g(this, i), this.doc.doctype = i;
			}
		},
		warning: function(e) {
			console.warn("[xmldom warning]	" + e, m(this.locator));
		},
		error: function(e) {
			console.error("[xmldom error]	" + e, m(this.locator));
		},
		fatalError: function(e) {
			throw new s(e, this.locator);
		}
	};
	function m(e) {
		if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
	}
	function h(e, t, n) {
		return typeof e == "string" ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
	}
	"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
		f.prototype[e] = function() {
			return null;
		};
	});
	function g(e, t) {
		e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
	}
	e.__DOMHandler = f, e.normalizeLineEndings = l, e.DOMParser = u;
})), dh = /* @__PURE__ */ a(((e) => {
	var t = sh();
	e.DOMImplementation = t.DOMImplementation, e.XMLSerializer = t.XMLSerializer, e.DOMParser = uh().DOMParser;
})), fh = /* @__PURE__ */ a(((e) => {
	var t = dh(), n = sh();
	function r(e) {
		var n = null, r = new t.DOMParser({ errorHandler: function(e, t) {
			n = {
				level: e,
				message: t
			};
		} }).parseFromString(e);
		if (n === null) return r;
		throw Error(n.level + ": " + n.message);
	}
	e.parseFromString = r, e.Node = n.Node;
})), ph = /* @__PURE__ */ a(((t) => {
	var n = $m(), r = (Q(), e(Z)), i = fh(), a = ah(), o = a.Element;
	t.readString = c;
	var s = i.Node;
	function c(e, t) {
		t ||= {};
		try {
			var c = i.parseFromString(e, "text/xml");
		} catch (e) {
			return n.reject(e);
		}
		if (c.documentElement.tagName === "parsererror") return n.resolve(Error(c.documentElement.textContent));
		function l(e) {
			switch (e.nodeType) {
				case s.ELEMENT_NODE: return u(e);
				case s.TEXT_NODE: return a.text(e.nodeValue);
			}
		}
		function u(e) {
			var t = d(e), n = [];
			r.forEach(e.childNodes, function(e) {
				var t = l(e);
				t && n.push(t);
			});
			var i = Object.create(null);
			return r.forEach(e.attributes, function(e) {
				i[d(e)] = e.value;
			}), new o(t, i, n);
		}
		function d(e) {
			if (e.namespaceURI) {
				var n = t[e.namespaceURI];
				return (n ? n + ":" : "{" + e.namespaceURI + "}") + e.localName;
			}
			return e.localName;
		}
		return n.resolve(l(c.documentElement));
	}
})), mh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s, c = [].slice, l = {}.hasOwnProperty;
		e = function() {
			var e, t, n, r, i, o = arguments[0];
			if (i = 2 <= arguments.length ? c.call(arguments, 1) : [], a(Object.assign)) Object.assign.apply(null, arguments);
			else for (e = 0, n = i.length; e < n; e++) if (r = i[e], r != null) for (t in r) l.call(r, t) && (o[t] = r[t]);
			return o;
		}, a = function(e) {
			return !!e && Object.prototype.toString.call(e) === "[object Function]";
		}, o = function(e) {
			var t;
			return !!e && ((t = typeof e) == "function" || t === "object");
		}, r = function(e) {
			return a(Array.isArray) ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]";
		}, i = function(e) {
			var t;
			if (r(e)) return !e.length;
			for (t in e) if (l.call(e, t)) return !1;
			return !0;
		}, s = function(e) {
			var t, n;
			return o(e) && (n = Object.getPrototypeOf(e)) && (t = n.constructor) && typeof t == "function" && t instanceof t && Function.prototype.toString.call(t) === Function.prototype.toString.call(Object);
		}, n = function(e) {
			return a(e.valueOf) ? e.valueOf() : e;
		}, t.exports.assign = e, t.exports.isFunction = a, t.exports.isObject = o, t.exports.isArray = r, t.exports.isEmpty = i, t.exports.isPlainObject = s, t.exports.getValue = n;
	}).call(e);
})), hh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		t.exports = (function() {
			function e(e, t, n) {
				if (this.options = e.options, this.stringify = e.stringify, this.parent = e, t == null) throw Error("Missing attribute name. " + this.debugInfo(t));
				if (n == null) throw Error("Missing attribute value. " + this.debugInfo(t));
				this.name = this.stringify.attName(t), this.value = this.stringify.attValue(n);
			}
			return e.prototype.clone = function() {
				return Object.create(this);
			}, e.prototype.toString = function(e) {
				return this.options.writer.set(e).attribute(this);
			}, e.prototype.debugInfo = function(e) {
				return e ||= this.name, e == null ? "parent: <" + this.parent.name + ">" : "attribute: {" + e + "}, parent: <" + this.parent.name + ">";
			}, e;
		})();
	}).call(e);
})), gh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s = function(e, t) {
			for (var n in t) c.call(t, n) && (e[n] = t[n]);
			function r() {
				this.constructor = e;
			}
			return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
		}, c = {}.hasOwnProperty;
		o = mh(), a = o.isObject, i = o.isFunction, r = o.getValue, n = kh(), e = hh(), t.exports = (function(t) {
			s(n, t);
			function n(e, t, r) {
				if (n.__super__.constructor.call(this, e), t == null) throw Error("Missing element name. " + this.debugInfo());
				this.name = this.stringify.eleName(t), this.attributes = {}, r != null && this.attribute(r), e.isDocument && (this.isRoot = !0, this.documentObject = e, e.rootObject = this);
			}
			return n.prototype.clone = function() {
				var e, t, n = Object.create(this), r;
				for (t in n.isRoot && (n.documentObject = null), n.attributes = {}, r = this.attributes, r) c.call(r, t) && (e = r[t], n.attributes[t] = e.clone());
				return n.children = [], this.children.forEach(function(e) {
					var t = e.clone();
					return t.parent = n, n.children.push(t);
				}), n;
			}, n.prototype.attribute = function(t, n) {
				var o, s;
				if (t != null && (t = r(t)), a(t)) for (o in t) c.call(t, o) && (s = t[o], this.attribute(o, s));
				else i(n) && (n = n.apply()), (!this.options.skipNullAttributes || n != null) && (this.attributes[t] = new e(this, t, n));
				return this;
			}, n.prototype.removeAttribute = function(e) {
				var t, n, i;
				if (e == null) throw Error("Missing attribute name. " + this.debugInfo());
				if (e = r(e), Array.isArray(e)) for (n = 0, i = e.length; n < i; n++) t = e[n], delete this.attributes[t];
				else delete this.attributes[e];
				return this;
			}, n.prototype.toString = function(e) {
				return this.options.writer.set(e).element(this);
			}, n.prototype.att = function(e, t) {
				return this.attribute(e, t);
			}, n.prototype.a = function(e, t) {
				return this.attribute(e, t);
			}, n;
		})(n);
	}).call(e);
})), _h = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing CDATA text. " + this.debugInfo());
				this.text = this.stringify.cdata(n);
			}
			return t.prototype.clone = function() {
				return Object.create(this);
			}, t.prototype.toString = function(e) {
				return this.options.writer.set(e).cdata(this);
			}, t;
		})(e);
	}).call(e);
})), vh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing comment text. " + this.debugInfo());
				this.text = this.stringify.comment(n);
			}
			return t.prototype.clone = function() {
				return Object.create(this);
			}, t.prototype.toString = function(e) {
				return this.options.writer.set(e).comment(this);
			}, t;
		})(e);
	}).call(e);
})), yh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r = function(e, t) {
			for (var n in t) i.call(t, n) && (e[n] = t[n]);
			function r() {
				this.constructor = e;
			}
			return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
		}, i = {}.hasOwnProperty;
		n = mh().isObject, e = kh(), t.exports = (function(e) {
			r(t, e);
			function t(e, r, i, a) {
				var o;
				t.__super__.constructor.call(this, e), n(r) && (o = r, r = o.version, i = o.encoding, a = o.standalone), r ||= "1.0", this.version = this.stringify.xmlVersion(r), i != null && (this.encoding = this.stringify.xmlEncoding(i)), a != null && (this.standalone = this.stringify.xmlStandalone(a));
			}
			return t.prototype.toString = function(e) {
				return this.options.writer.set(e).declaration(this);
			}, t;
		})(e);
	}).call(e);
})), bh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n, r, i, a, o) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing DTD element name. " + this.debugInfo());
				if (r == null) throw Error("Missing DTD attribute name. " + this.debugInfo(n));
				if (!i) throw Error("Missing DTD attribute type. " + this.debugInfo(n));
				if (!a) throw Error("Missing DTD attribute default. " + this.debugInfo(n));
				if (a.indexOf("#") !== 0 && (a = "#" + a), !a.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(n));
				if (o && !a.match(/^(#FIXED|#DEFAULT)$/)) throw Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(n));
				this.elementName = this.stringify.eleName(n), this.attributeName = this.stringify.attName(r), this.attributeType = this.stringify.dtdAttType(i), this.defaultValue = this.stringify.dtdAttDefault(o), this.defaultValueType = a;
			}
			return t.prototype.toString = function(e) {
				return this.options.writer.set(e).dtdAttList(this);
			}, t;
		})(e);
	}).call(e);
})), xh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r = function(e, t) {
			for (var n in t) i.call(t, n) && (e[n] = t[n]);
			function r() {
				this.constructor = e;
			}
			return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
		}, i = {}.hasOwnProperty;
		n = mh().isObject, e = kh(), t.exports = (function(e) {
			r(t, e);
			function t(e, r, i, a) {
				if (t.__super__.constructor.call(this, e), i == null) throw Error("Missing DTD entity name. " + this.debugInfo(i));
				if (a == null) throw Error("Missing DTD entity value. " + this.debugInfo(i));
				if (this.pe = !!r, this.name = this.stringify.eleName(i), !n(a)) this.value = this.stringify.dtdEntityValue(a);
				else {
					if (!a.pubID && !a.sysID) throw Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(i));
					if (a.pubID && !a.sysID) throw Error("System identifier is required for a public external entity. " + this.debugInfo(i));
					if (a.pubID != null && (this.pubID = this.stringify.dtdPubID(a.pubID)), a.sysID != null && (this.sysID = this.stringify.dtdSysID(a.sysID)), a.nData != null && (this.nData = this.stringify.dtdNData(a.nData)), this.pe && this.nData) throw Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(i));
				}
			}
			return t.prototype.toString = function(e) {
				return this.options.writer.set(e).dtdEntity(this);
			}, t;
		})(e);
	}).call(e);
})), Sh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n, r) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing DTD element name. " + this.debugInfo());
				r ||= "(#PCDATA)", Array.isArray(r) && (r = "(" + r.join(",") + ")"), this.name = this.stringify.eleName(n), this.value = this.stringify.dtdElementValue(r);
			}
			return t.prototype.toString = function(e) {
				return this.options.writer.set(e).dtdElement(this);
			}, t;
		})(e);
	}).call(e);
})), Ch = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n, r) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing DTD notation name. " + this.debugInfo(n));
				if (!r.pubID && !r.sysID) throw Error("Public or system identifiers are required for an external entity. " + this.debugInfo(n));
				this.name = this.stringify.eleName(n), r.pubID != null && (this.pubID = this.stringify.dtdPubID(r.pubID)), r.sysID != null && (this.sysID = this.stringify.dtdSysID(r.sysID));
			}
			return t.prototype.toString = function(e) {
				return this.options.writer.set(e).dtdNotation(this);
			}, t;
		})(e);
	}).call(e);
})), wh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s = function(e, t) {
			for (var n in t) c.call(t, n) && (e[n] = t[n]);
			function r() {
				this.constructor = e;
			}
			return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
		}, c = {}.hasOwnProperty;
		o = mh().isObject, a = kh(), e = bh(), r = xh(), n = Sh(), i = Ch(), t.exports = (function(t) {
			s(a, t);
			function a(e, t, n) {
				var r, i;
				a.__super__.constructor.call(this, e), this.name = "!DOCTYPE", this.documentObject = e, o(t) && (r = t, t = r.pubID, n = r.sysID), n ?? (i = [t, n], n = i[0], t = i[1]), t != null && (this.pubID = this.stringify.dtdPubID(t)), n != null && (this.sysID = this.stringify.dtdSysID(n));
			}
			return a.prototype.element = function(e, t) {
				var r = new n(this, e, t);
				return this.children.push(r), this;
			}, a.prototype.attList = function(t, n, r, i, a) {
				var o = new e(this, t, n, r, i, a);
				return this.children.push(o), this;
			}, a.prototype.entity = function(e, t) {
				var n = new r(this, !1, e, t);
				return this.children.push(n), this;
			}, a.prototype.pEntity = function(e, t) {
				var n = new r(this, !0, e, t);
				return this.children.push(n), this;
			}, a.prototype.notation = function(e, t) {
				var n = new i(this, e, t);
				return this.children.push(n), this;
			}, a.prototype.toString = function(e) {
				return this.options.writer.set(e).docType(this);
			}, a.prototype.ele = function(e, t) {
				return this.element(e, t);
			}, a.prototype.att = function(e, t, n, r, i) {
				return this.attList(e, t, n, r, i);
			}, a.prototype.ent = function(e, t) {
				return this.entity(e, t);
			}, a.prototype.pent = function(e, t) {
				return this.pEntity(e, t);
			}, a.prototype.not = function(e, t) {
				return this.notation(e, t);
			}, a.prototype.up = function() {
				return this.root() || this.documentObject;
			}, a;
		})(a);
	}).call(e);
})), Th = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing raw text. " + this.debugInfo());
				this.value = this.stringify.raw(n);
			}
			return t.prototype.clone = function() {
				return Object.create(this);
			}, t.prototype.toString = function(e) {
				return this.options.writer.set(e).raw(this);
			}, t;
		})(e);
	}).call(e);
})), Eh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing element text. " + this.debugInfo());
				this.value = this.stringify.eleText(n);
			}
			return t.prototype.clone = function() {
				return Object.create(this);
			}, t.prototype.toString = function(e) {
				return this.options.writer.set(e).text(this);
			}, t;
		})(e);
	}).call(e);
})), Dh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e, n, r) {
				if (t.__super__.constructor.call(this, e), n == null) throw Error("Missing instruction target. " + this.debugInfo());
				this.target = this.stringify.insTarget(n), r && (this.value = this.stringify.insValue(r));
			}
			return t.prototype.clone = function() {
				return Object.create(this);
			}, t.prototype.toString = function(e) {
				return this.options.writer.set(e).processingInstruction(this);
			}, t;
		})(e);
	}).call(e);
})), Oh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n = function(e, t) {
			for (var n in t) r.call(t, n) && (e[n] = t[n]);
			function i() {
				this.constructor = e;
			}
			return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
		}, r = {}.hasOwnProperty;
		e = kh(), t.exports = (function(e) {
			n(t, e);
			function t(e) {
				t.__super__.constructor.call(this, e), this.isDummy = !0;
			}
			return t.prototype.clone = function() {
				return Object.create(this);
			}, t.prototype.toString = function(e) {
				return "";
			}, t;
		})(e);
	}).call(e);
})), kh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s, c, l, u, d, f, p, m, h = {}.hasOwnProperty;
		m = mh(), p = m.isObject, f = m.isFunction, d = m.isEmpty, u = m.getValue, o = null, e = null, n = null, r = null, i = null, c = null, l = null, s = null, a = null, t.exports = (function() {
			function t(t) {
				this.parent = t, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.children = [], o || (o = gh(), e = _h(), n = vh(), r = yh(), i = wh(), c = Th(), l = Eh(), s = Dh(), a = Oh());
			}
			return t.prototype.element = function(e, t, n) {
				var r, i, a, o, s, c = null, l, m, g, _, v;
				if (t === null && n == null && (g = [{}, null], t = g[0], n = g[1]), t ??= {}, t = u(t), p(t) || (_ = [t, n], n = _[0], t = _[1]), e != null && (e = u(e)), Array.isArray(e)) for (a = 0, l = e.length; a < l; a++) i = e[a], c = this.element(i);
				else if (f(e)) c = this.element(e.apply());
				else if (p(e)) {
					for (s in e) if (h.call(e, s)) {
						if (v = e[s], f(v) && (v = v.apply()), p(v) && d(v) && (v = null), !this.options.ignoreDecorators && this.stringify.convertAttKey && s.indexOf(this.stringify.convertAttKey) === 0) c = this.attribute(s.substr(this.stringify.convertAttKey.length), v);
						else if (!this.options.separateArrayItems && Array.isArray(v)) for (o = 0, m = v.length; o < m; o++) i = v[o], r = {}, r[s] = i, c = this.element(r);
						else p(v) ? (c = this.element(s), c.element(v)) : c = this.element(s, v);
					}
				} else c = this.options.skipNullNodes && n === null ? this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && e.indexOf(this.stringify.convertTextKey) === 0 ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && e.indexOf(this.stringify.convertCDataKey) === 0 ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && e.indexOf(this.stringify.convertCommentKey) === 0 ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && e.indexOf(this.stringify.convertRawKey) === 0 ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && e.indexOf(this.stringify.convertPIKey) === 0 ? this.instruction(e.substr(this.stringify.convertPIKey.length), n) : this.node(e, t, n);
				if (c == null) throw Error("Could not create any elements with: " + e + ". " + this.debugInfo());
				return c;
			}, t.prototype.insertBefore = function(e, t, n) {
				var r, i, a;
				if (this.isRoot) throw Error("Cannot insert elements at root level. " + this.debugInfo(e));
				return i = this.parent.children.indexOf(this), a = this.parent.children.splice(i), r = this.parent.element(e, t, n), Array.prototype.push.apply(this.parent.children, a), r;
			}, t.prototype.insertAfter = function(e, t, n) {
				var r, i, a;
				if (this.isRoot) throw Error("Cannot insert elements at root level. " + this.debugInfo(e));
				return i = this.parent.children.indexOf(this), a = this.parent.children.splice(i + 1), r = this.parent.element(e, t, n), Array.prototype.push.apply(this.parent.children, a), r;
			}, t.prototype.remove = function() {
				var e;
				if (this.isRoot) throw Error("Cannot remove the root element. " + this.debugInfo());
				return e = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [e, e - e + 1]), this.parent;
			}, t.prototype.node = function(e, t, n) {
				var r, i;
				return e != null && (e = u(e)), t ||= {}, t = u(t), p(t) || (i = [t, n], n = i[0], t = i[1]), r = new o(this, e, t), n != null && r.text(n), this.children.push(r), r;
			}, t.prototype.text = function(e) {
				var t = new l(this, e);
				return this.children.push(t), this;
			}, t.prototype.cdata = function(t) {
				var n = new e(this, t);
				return this.children.push(n), this;
			}, t.prototype.comment = function(e) {
				var t = new n(this, e);
				return this.children.push(t), this;
			}, t.prototype.commentBefore = function(e) {
				var t = this.parent.children.indexOf(this), n = this.parent.children.splice(t);
				return this.parent.comment(e), Array.prototype.push.apply(this.parent.children, n), this;
			}, t.prototype.commentAfter = function(e) {
				var t = this.parent.children.indexOf(this), n = this.parent.children.splice(t + 1);
				return this.parent.comment(e), Array.prototype.push.apply(this.parent.children, n), this;
			}, t.prototype.raw = function(e) {
				var t = new c(this, e);
				return this.children.push(t), this;
			}, t.prototype.dummy = function() {
				var e = new a(this);
				return this.children.push(e), e;
			}, t.prototype.instruction = function(e, t) {
				var n, r, i, a, o;
				if (e != null && (e = u(e)), t != null && (t = u(t)), Array.isArray(e)) for (a = 0, o = e.length; a < o; a++) n = e[a], this.instruction(n);
				else if (p(e)) for (n in e) h.call(e, n) && (r = e[n], this.instruction(n, r));
				else f(t) && (t = t.apply()), i = new s(this, e, t), this.children.push(i);
				return this;
			}, t.prototype.instructionBefore = function(e, t) {
				var n = this.parent.children.indexOf(this), r = this.parent.children.splice(n);
				return this.parent.instruction(e, t), Array.prototype.push.apply(this.parent.children, r), this;
			}, t.prototype.instructionAfter = function(e, t) {
				var n = this.parent.children.indexOf(this), r = this.parent.children.splice(n + 1);
				return this.parent.instruction(e, t), Array.prototype.push.apply(this.parent.children, r), this;
			}, t.prototype.declaration = function(e, t, n) {
				var i = this.document(), a = new r(i, e, t, n);
				return i.children[0] instanceof r ? i.children[0] = a : i.children.unshift(a), i.root() || i;
			}, t.prototype.doctype = function(e, t) {
				var n, r = this.document(), a = new i(r, e, t), o, s, c, l, u, d = r.children, f;
				for (o = s = 0, l = d.length; s < l; o = ++s) if (n = d[o], n instanceof i) return r.children[o] = a, a;
				for (f = r.children, o = c = 0, u = f.length; c < u; o = ++c) if (n = f[o], n.isRoot) return r.children.splice(o, 0, a), a;
				return r.children.push(a), a;
			}, t.prototype.up = function() {
				if (this.isRoot) throw Error("The root node has no parent. Use doc() if you need to get the document object.");
				return this.parent;
			}, t.prototype.root = function() {
				for (var e = this; e;) if (e.isDocument) return e.rootObject;
				else if (e.isRoot) return e;
				else e = e.parent;
			}, t.prototype.document = function() {
				for (var e = this; e;) if (e.isDocument) return e;
				else e = e.parent;
			}, t.prototype.end = function(e) {
				return this.document().end(e);
			}, t.prototype.prev = function() {
				for (var e = this.parent.children.indexOf(this); e > 0 && this.parent.children[e - 1].isDummy;) --e;
				if (e < 1) throw Error("Already at the first node. " + this.debugInfo());
				return this.parent.children[e - 1];
			}, t.prototype.next = function() {
				for (var e = this.parent.children.indexOf(this); e < this.parent.children.length - 1 && this.parent.children[e + 1].isDummy;) e += 1;
				if (e === -1 || e === this.parent.children.length - 1) throw Error("Already at the last node. " + this.debugInfo());
				return this.parent.children[e + 1];
			}, t.prototype.importDocument = function(e) {
				var t = e.root().clone();
				return t.parent = this, t.isRoot = !1, this.children.push(t), this;
			}, t.prototype.debugInfo = function(e) {
				return e ||= this.name, e == null && !this.parent?.name ? "" : e == null ? "parent: <" + this.parent.name + ">" : this.parent?.name ? "node: <" + e + ">, parent: <" + this.parent.name + ">" : "node: <" + e + ">";
			}, t.prototype.ele = function(e, t, n) {
				return this.element(e, t, n);
			}, t.prototype.nod = function(e, t, n) {
				return this.node(e, t, n);
			}, t.prototype.txt = function(e) {
				return this.text(e);
			}, t.prototype.dat = function(e) {
				return this.cdata(e);
			}, t.prototype.com = function(e) {
				return this.comment(e);
			}, t.prototype.ins = function(e, t) {
				return this.instruction(e, t);
			}, t.prototype.doc = function() {
				return this.document();
			}, t.prototype.dec = function(e, t, n) {
				return this.declaration(e, t, n);
			}, t.prototype.dtd = function(e, t) {
				return this.doctype(e, t);
			}, t.prototype.e = function(e, t, n) {
				return this.element(e, t, n);
			}, t.prototype.n = function(e, t, n) {
				return this.node(e, t, n);
			}, t.prototype.t = function(e) {
				return this.text(e);
			}, t.prototype.d = function(e) {
				return this.cdata(e);
			}, t.prototype.c = function(e) {
				return this.comment(e);
			}, t.prototype.r = function(e) {
				return this.raw(e);
			}, t.prototype.i = function(e, t) {
				return this.instruction(e, t);
			}, t.prototype.u = function() {
				return this.up();
			}, t.prototype.importXMLBuilder = function(e) {
				return this.importDocument(e);
			}, t;
		})();
	}).call(e);
})), Ah = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e = function(e, t) {
			return function() {
				return e.apply(t, arguments);
			};
		}, n = {}.hasOwnProperty;
		t.exports = (function() {
			function t(t) {
				this.assertLegalChar = e(this.assertLegalChar, this);
				var r, i, a;
				for (r in t ||= {}, this.noDoubleEncoding = t.noDoubleEncoding, i = t.stringify || {}, i) n.call(i, r) && (a = i[r], this[r] = a);
			}
			return t.prototype.eleName = function(e) {
				return e = "" + e || "", this.assertLegalChar(e);
			}, t.prototype.eleText = function(e) {
				return e = "" + e || "", this.assertLegalChar(this.elEscape(e));
			}, t.prototype.cdata = function(e) {
				return e = "" + e || "", e = e.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(e);
			}, t.prototype.comment = function(e) {
				if (e = "" + e || "", e.match(/--/)) throw Error("Comment text cannot contain double-hypen: " + e);
				return this.assertLegalChar(e);
			}, t.prototype.raw = function(e) {
				return "" + e || "";
			}, t.prototype.attName = function(e) {
				return e = "" + e || "";
			}, t.prototype.attValue = function(e) {
				return e = "" + e || "", this.attEscape(e);
			}, t.prototype.insTarget = function(e) {
				return "" + e || "";
			}, t.prototype.insValue = function(e) {
				if (e = "" + e || "", e.match(/\?>/)) throw Error("Invalid processing instruction value: " + e);
				return e;
			}, t.prototype.xmlVersion = function(e) {
				if (e = "" + e || "", !e.match(/1\.[0-9]+/)) throw Error("Invalid version number: " + e);
				return e;
			}, t.prototype.xmlEncoding = function(e) {
				if (e = "" + e || "", !e.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw Error("Invalid encoding: " + e);
				return e;
			}, t.prototype.xmlStandalone = function(e) {
				return e ? "yes" : "no";
			}, t.prototype.dtdPubID = function(e) {
				return "" + e || "";
			}, t.prototype.dtdSysID = function(e) {
				return "" + e || "";
			}, t.prototype.dtdElementValue = function(e) {
				return "" + e || "";
			}, t.prototype.dtdAttType = function(e) {
				return "" + e || "";
			}, t.prototype.dtdAttDefault = function(e) {
				return e == null ? e : "" + e || "";
			}, t.prototype.dtdEntityValue = function(e) {
				return "" + e || "";
			}, t.prototype.dtdNData = function(e) {
				return "" + e || "";
			}, t.prototype.convertAttKey = "@", t.prototype.convertPIKey = "?", t.prototype.convertTextKey = "#text", t.prototype.convertCDataKey = "#cdata", t.prototype.convertCommentKey = "#comment", t.prototype.convertRawKey = "#raw", t.prototype.assertLegalChar = function(e) {
				var t = e.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
				if (t) throw Error("Invalid character in string: " + e + " at index " + t.index);
				return e;
			}, t.prototype.elEscape = function(e) {
				var t = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
				return e.replace(t, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
			}, t.prototype.attEscape = function(e) {
				var t = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
				return e.replace(t, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
			}, t;
		})();
	}).call(e);
})), jh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		t.exports = (function() {
			function t(t) {
				var n, r, i;
				for (n in t ||= {}, this.pretty = t.pretty || !1, this.allowEmpty = t.allowEmpty ?? !1, this.pretty ? (this.indent = t.indent ?? "  ", this.newline = t.newline ?? "\n", this.offset = t.offset ?? 0, this.dontprettytextnodes = t.dontprettytextnodes ?? 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = t.spacebeforeslash ?? "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, r = t.writer || {}, r) e.call(r, n) && (i = r[n], this[n] = i);
			}
			return t.prototype.set = function(t) {
				var n, r, i;
				for (n in t ||= {}, "pretty" in t && (this.pretty = t.pretty), "allowEmpty" in t && (this.allowEmpty = t.allowEmpty), this.pretty ? (this.indent = "indent" in t ? t.indent : "  ", this.newline = "newline" in t ? t.newline : "\n", this.offset = "offset" in t ? t.offset : 0, this.dontprettytextnodes = "dontprettytextnodes" in t ? t.dontprettytextnodes : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = "spacebeforeslash" in t ? t.spacebeforeslash : "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, r = t.writer || {}, r) e.call(r, n) && (i = r[n], this[n] = i);
				return this;
			}, t.prototype.space = function(e) {
				var t;
				return this.pretty ? (t = (e || 0) + this.offset + 1, t > 0 ? Array(t).join(this.indent) : "") : "";
			}, t;
		})();
	}).call(e);
})), Mh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s, c, l, u, d, f, p, m, h = function(e, t) {
			for (var n in t) g.call(t, n) && (e[n] = t[n]);
			function r() {
				this.constructor = e;
			}
			return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
		}, g = {}.hasOwnProperty;
		s = yh(), c = wh(), e = _h(), n = vh(), u = gh(), f = Th(), p = Eh(), d = Dh(), l = Oh(), r = bh(), i = Sh(), a = xh(), o = Ch(), m = jh(), t.exports = (function(t) {
			h(m, t);
			function m(e) {
				m.__super__.constructor.call(this, e);
			}
			return m.prototype.document = function(e) {
				var t, r, i, a, o;
				for (this.textispresent = !1, a = "", o = e.children, r = 0, i = o.length; r < i; r++) t = o[r], !(t instanceof l) && (a += (function() {
					switch (!1) {
						case !(t instanceof s): return this.declaration(t);
						case !(t instanceof c): return this.docType(t);
						case !(t instanceof n): return this.comment(t);
						case !(t instanceof d): return this.processingInstruction(t);
						default: return this.element(t, 0);
					}
				}).call(this));
				return this.pretty && a.slice(-this.newline.length) === this.newline && (a = a.slice(0, -this.newline.length)), a;
			}, m.prototype.attribute = function(e) {
				return " " + e.name + "=\"" + e.value + "\"";
			}, m.prototype.cdata = function(e, t) {
				return this.space(t) + "<![CDATA[" + e.text + "]]>" + this.newline;
			}, m.prototype.comment = function(e, t) {
				return this.space(t) + "<!-- " + e.text + " -->" + this.newline;
			}, m.prototype.declaration = function(e, t) {
				var n = this.space(t);
				return n += "<?xml version=\"" + e.version + "\"", e.encoding != null && (n += " encoding=\"" + e.encoding + "\""), e.standalone != null && (n += " standalone=\"" + e.standalone + "\""), n += this.spacebeforeslash + "?>", n += this.newline, n;
			}, m.prototype.docType = function(t, s) {
				var c, l, u, f, p;
				if (s ||= 0, f = this.space(s), f += "<!DOCTYPE " + t.root().name, t.pubID && t.sysID ? f += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"" : t.sysID && (f += " SYSTEM \"" + t.sysID + "\""), t.children.length > 0) {
					for (f += " [", f += this.newline, p = t.children, l = 0, u = p.length; l < u; l++) c = p[l], f += (function() {
						switch (!1) {
							case !(c instanceof r): return this.dtdAttList(c, s + 1);
							case !(c instanceof i): return this.dtdElement(c, s + 1);
							case !(c instanceof a): return this.dtdEntity(c, s + 1);
							case !(c instanceof o): return this.dtdNotation(c, s + 1);
							case !(c instanceof e): return this.cdata(c, s + 1);
							case !(c instanceof n): return this.comment(c, s + 1);
							case !(c instanceof d): return this.processingInstruction(c, s + 1);
							default: throw Error("Unknown DTD node type: " + c.constructor.name);
						}
					}).call(this);
					f += "]";
				}
				return f += this.spacebeforeslash + ">", f += this.newline, f;
			}, m.prototype.element = function(t, r) {
				var i, a, o, s, c, m, h, _, v, y, b, x, S;
				for (h in r ||= 0, S = !1, this.textispresent ? (this.newline = "", this.pretty = !1) : (this.newline = this.newlinedefault, this.pretty = this.prettydefault), x = this.space(r), _ = "", _ += x + "<" + t.name, v = t.attributes, v) g.call(v, h) && (i = v[h], _ += this.attribute(i));
				if (t.children.length === 0 || t.children.every(function(e) {
					return e.value === "";
				})) this.allowEmpty ? _ += "></" + t.name + ">" + this.newline : _ += this.spacebeforeslash + "/>" + this.newline;
				else if (this.pretty && t.children.length === 1 && t.children[0].value != null) _ += ">", _ += t.children[0].value, _ += "</" + t.name + ">" + this.newline;
				else {
					if (this.dontprettytextnodes) {
						for (y = t.children, o = 0, c = y.length; o < c; o++) if (a = y[o], a.value != null) {
							this.textispresent++, S = !0;
							break;
						}
					}
					for (this.textispresent && (this.newline = "", this.pretty = !1, x = this.space(r)), _ += ">" + this.newline, b = t.children, s = 0, m = b.length; s < m; s++) a = b[s], _ += (function() {
						switch (!1) {
							case !(a instanceof e): return this.cdata(a, r + 1);
							case !(a instanceof n): return this.comment(a, r + 1);
							case !(a instanceof u): return this.element(a, r + 1);
							case !(a instanceof f): return this.raw(a, r + 1);
							case !(a instanceof p): return this.text(a, r + 1);
							case !(a instanceof d): return this.processingInstruction(a, r + 1);
							case !(a instanceof l): return "";
							default: throw Error("Unknown XML node type: " + a.constructor.name);
						}
					}).call(this);
					S && this.textispresent--, this.textispresent || (this.newline = this.newlinedefault, this.pretty = this.prettydefault), _ += x + "</" + t.name + ">" + this.newline;
				}
				return _;
			}, m.prototype.processingInstruction = function(e, t) {
				var n = this.space(t) + "<?" + e.target;
				return e.value && (n += " " + e.value), n += this.spacebeforeslash + "?>" + this.newline, n;
			}, m.prototype.raw = function(e, t) {
				return this.space(t) + e.value + this.newline;
			}, m.prototype.text = function(e, t) {
				return this.space(t) + e.value + this.newline;
			}, m.prototype.dtdAttList = function(e, t) {
				var n = this.space(t) + "<!ATTLIST " + e.elementName + " " + e.attributeName + " " + e.attributeType;
				return e.defaultValueType !== "#DEFAULT" && (n += " " + e.defaultValueType), e.defaultValue && (n += " \"" + e.defaultValue + "\""), n += this.spacebeforeslash + ">" + this.newline, n;
			}, m.prototype.dtdElement = function(e, t) {
				return this.space(t) + "<!ELEMENT " + e.name + " " + e.value + this.spacebeforeslash + ">" + this.newline;
			}, m.prototype.dtdEntity = function(e, t) {
				var n = this.space(t) + "<!ENTITY";
				return e.pe && (n += " %"), n += " " + e.name, e.value ? n += " \"" + e.value + "\"" : (e.pubID && e.sysID ? n += " PUBLIC \"" + e.pubID + "\" \"" + e.sysID + "\"" : e.sysID && (n += " SYSTEM \"" + e.sysID + "\""), e.nData && (n += " NDATA " + e.nData)), n += this.spacebeforeslash + ">" + this.newline, n;
			}, m.prototype.dtdNotation = function(e, t) {
				var n = this.space(t) + "<!NOTATION " + e.name;
				return e.pubID && e.sysID ? n += " PUBLIC \"" + e.pubID + "\" \"" + e.sysID + "\"" : e.pubID ? n += " PUBLIC \"" + e.pubID + "\"" : e.sysID && (n += " SYSTEM \"" + e.sysID + "\""), n += this.spacebeforeslash + ">" + this.newline, n;
			}, m.prototype.openNode = function(e, t) {
				var n, r, i, a;
				if (t ||= 0, e instanceof u) {
					for (r in i = this.space(t) + "<" + e.name, a = e.attributes, a) g.call(a, r) && (n = a[r], i += this.attribute(n));
					return i += (e.children ? ">" : "/>") + this.newline, i;
				}
				return i = this.space(t) + "<!DOCTYPE " + e.rootNodeName, e.pubID && e.sysID ? i += " PUBLIC \"" + e.pubID + "\" \"" + e.sysID + "\"" : e.sysID && (i += " SYSTEM \"" + e.sysID + "\""), i += (e.children ? " [" : ">") + this.newline, i;
			}, m.prototype.closeNode = function(e, t) {
				switch (t ||= 0, !1) {
					case !(e instanceof u): return this.space(t) + "</" + e.name + ">" + this.newline;
					case !(e instanceof c): return this.space(t) + "]>" + this.newline;
				}
			}, m;
		})(m);
	}).call(e);
})), Nh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a = function(e, t) {
			for (var n in t) o.call(t, n) && (e[n] = t[n]);
			function r() {
				this.constructor = e;
			}
			return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
		}, o = {}.hasOwnProperty;
		i = mh().isPlainObject, e = kh(), r = Ah(), n = Mh(), t.exports = (function(e) {
			a(t, e);
			function t(e) {
				t.__super__.constructor.call(this, null), this.name = "?xml", e ||= {}, e.writer || (e.writer = new n()), this.options = e, this.stringify = new r(e), this.isDocument = !0;
			}
			return t.prototype.end = function(e) {
				var t;
				return e ? i(e) && (t = e, e = this.options.writer.set(t)) : e = this.options.writer, e.document(this);
			}, t.prototype.toString = function(e) {
				return this.options.writer.set(e).document(this);
			}, t;
		})(e);
	}).call(e);
})), Ph = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x = {}.hasOwnProperty;
		b = mh(), v = b.isObject, _ = b.isFunction, y = b.isPlainObject, g = b.getValue, u = gh(), n = _h(), r = vh(), f = Th(), h = Eh(), d = Dh(), c = yh(), l = wh(), i = bh(), o = xh(), a = Sh(), s = Ch(), e = hh(), m = Ah(), p = Mh(), t.exports = (function() {
			function t(e, t, n) {
				var r;
				this.name = "?xml", e ||= {}, e.writer ? y(e.writer) && (r = e.writer, e.writer = new p(r)) : e.writer = new p(e), this.options = e, this.writer = e.writer, this.stringify = new m(e), this.onDataCallback = t || function() {}, this.onEndCallback = n || function() {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
			}
			return t.prototype.node = function(e, t, n) {
				var r, i;
				if (e == null) throw Error("Missing node name.");
				if (this.root && this.currentLevel === -1) throw Error("Document can only have one root node. " + this.debugInfo(e));
				return this.openCurrent(), e = g(e), t === null && n == null && (r = [{}, null], t = r[0], n = r[1]), t ??= {}, t = g(t), v(t) || (i = [t, n], n = i[0], t = i[1]), this.currentNode = new u(this, e, t), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, n != null && this.text(n), this;
			}, t.prototype.element = function(e, t, n) {
				return this.currentNode && this.currentNode instanceof l ? this.dtdElement.apply(this, arguments) : this.node(e, t, n);
			}, t.prototype.attribute = function(t, n) {
				var r, i;
				if (!this.currentNode || this.currentNode.children) throw Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(t));
				if (t != null && (t = g(t)), v(t)) for (r in t) x.call(t, r) && (i = t[r], this.attribute(r, i));
				else _(n) && (n = n.apply()), (!this.options.skipNullAttributes || n != null) && (this.currentNode.attributes[t] = new e(this, t, n));
				return this;
			}, t.prototype.text = function(e) {
				var t;
				return this.openCurrent(), t = new h(this, e), this.onData(this.writer.text(t, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.cdata = function(e) {
				var t;
				return this.openCurrent(), t = new n(this, e), this.onData(this.writer.cdata(t, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.comment = function(e) {
				var t;
				return this.openCurrent(), t = new r(this, e), this.onData(this.writer.comment(t, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.raw = function(e) {
				var t;
				return this.openCurrent(), t = new f(this, e), this.onData(this.writer.raw(t, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.instruction = function(e, t) {
				var n, r, i, a, o;
				if (this.openCurrent(), e != null && (e = g(e)), t != null && (t = g(t)), Array.isArray(e)) for (n = 0, a = e.length; n < a; n++) r = e[n], this.instruction(r);
				else if (v(e)) for (r in e) x.call(e, r) && (i = e[r], this.instruction(r, i));
				else _(t) && (t = t.apply()), o = new d(this, e, t), this.onData(this.writer.processingInstruction(o, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			}, t.prototype.declaration = function(e, t, n) {
				var r;
				if (this.openCurrent(), this.documentStarted) throw Error("declaration() must be the first node.");
				return r = new c(this, e, t, n), this.onData(this.writer.declaration(r, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.doctype = function(e, t, n) {
				if (this.openCurrent(), e == null) throw Error("Missing root node name.");
				if (this.root) throw Error("dtd() must come before the root node.");
				return this.currentNode = new l(this, t, n), this.currentNode.rootNodeName = e, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
			}, t.prototype.dtdElement = function(e, t) {
				var n;
				return this.openCurrent(), n = new a(this, e, t), this.onData(this.writer.dtdElement(n, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.attList = function(e, t, n, r, a) {
				var o;
				return this.openCurrent(), o = new i(this, e, t, n, r, a), this.onData(this.writer.dtdAttList(o, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.entity = function(e, t) {
				var n;
				return this.openCurrent(), n = new o(this, !1, e, t), this.onData(this.writer.dtdEntity(n, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.pEntity = function(e, t) {
				var n;
				return this.openCurrent(), n = new o(this, !0, e, t), this.onData(this.writer.dtdEntity(n, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.notation = function(e, t) {
				var n;
				return this.openCurrent(), n = new s(this, e, t), this.onData(this.writer.dtdNotation(n, this.currentLevel + 1), this.currentLevel + 1), this;
			}, t.prototype.up = function() {
				if (this.currentLevel < 0) throw Error("The document node has no parent.");
				return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
			}, t.prototype.end = function() {
				for (; this.currentLevel >= 0;) this.up();
				return this.onEnd();
			}, t.prototype.openCurrent = function() {
				if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode);
			}, t.prototype.openNode = function(e) {
				if (!e.isOpen) return !this.root && this.currentLevel === 0 && e instanceof u && (this.root = e), this.onData(this.writer.openNode(e, this.currentLevel), this.currentLevel), e.isOpen = !0;
			}, t.prototype.closeNode = function(e) {
				if (!e.isClosed) return this.onData(this.writer.closeNode(e, this.currentLevel), this.currentLevel), e.isClosed = !0;
			}, t.prototype.onData = function(e, t) {
				return this.documentStarted = !0, this.onDataCallback(e, t + 1);
			}, t.prototype.onEnd = function() {
				return this.documentCompleted = !0, this.onEndCallback();
			}, t.prototype.debugInfo = function(e) {
				return e == null ? "" : "node: <" + e + ">";
			}, t.prototype.ele = function() {
				return this.element.apply(this, arguments);
			}, t.prototype.nod = function(e, t, n) {
				return this.node(e, t, n);
			}, t.prototype.txt = function(e) {
				return this.text(e);
			}, t.prototype.dat = function(e) {
				return this.cdata(e);
			}, t.prototype.com = function(e) {
				return this.comment(e);
			}, t.prototype.ins = function(e, t) {
				return this.instruction(e, t);
			}, t.prototype.dec = function(e, t, n) {
				return this.declaration(e, t, n);
			}, t.prototype.dtd = function(e, t, n) {
				return this.doctype(e, t, n);
			}, t.prototype.e = function(e, t, n) {
				return this.element(e, t, n);
			}, t.prototype.n = function(e, t, n) {
				return this.node(e, t, n);
			}, t.prototype.t = function(e) {
				return this.text(e);
			}, t.prototype.d = function(e) {
				return this.cdata(e);
			}, t.prototype.c = function(e) {
				return this.comment(e);
			}, t.prototype.r = function(e) {
				return this.raw(e);
			}, t.prototype.i = function(e, t) {
				return this.instruction(e, t);
			}, t.prototype.att = function() {
				return this.currentNode && this.currentNode instanceof l ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
			}, t.prototype.a = function() {
				return this.currentNode && this.currentNode instanceof l ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
			}, t.prototype.ent = function(e, t) {
				return this.entity(e, t);
			}, t.prototype.pent = function(e, t) {
				return this.pEntity(e, t);
			}, t.prototype.not = function(e, t) {
				return this.notation(e, t);
			}, t;
		})();
	}).call(e);
})), Fh = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s, c, l, u, d, f, p, m, h = function(e, t) {
			for (var n in t) g.call(t, n) && (e[n] = t[n]);
			function r() {
				this.constructor = e;
			}
			return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
		}, g = {}.hasOwnProperty;
		s = yh(), c = wh(), e = _h(), n = vh(), u = gh(), f = Th(), p = Eh(), d = Dh(), l = Oh(), r = bh(), i = Sh(), a = xh(), o = Ch(), m = jh(), t.exports = (function(t) {
			h(m, t);
			function m(e, t) {
				m.__super__.constructor.call(this, t), this.stream = e;
			}
			return m.prototype.document = function(e) {
				var t, r, i, a, o, u = e.children, f, p;
				for (r = 0, a = u.length; r < a; r++) t = u[r], t.isLastRootNode = !1;
				for (e.children[e.children.length - 1].isLastRootNode = !0, f = e.children, p = [], i = 0, o = f.length; i < o; i++) if (t = f[i], !(t instanceof l)) switch (!1) {
					case !(t instanceof s):
						p.push(this.declaration(t));
						break;
					case !(t instanceof c):
						p.push(this.docType(t));
						break;
					case !(t instanceof n):
						p.push(this.comment(t));
						break;
					case !(t instanceof d):
						p.push(this.processingInstruction(t));
						break;
					default: p.push(this.element(t));
				}
				return p;
			}, m.prototype.attribute = function(e) {
				return this.stream.write(" " + e.name + "=\"" + e.value + "\"");
			}, m.prototype.cdata = function(e, t) {
				return this.stream.write(this.space(t) + "<![CDATA[" + e.text + "]]>" + this.endline(e));
			}, m.prototype.comment = function(e, t) {
				return this.stream.write(this.space(t) + "<!-- " + e.text + " -->" + this.endline(e));
			}, m.prototype.declaration = function(e, t) {
				return this.stream.write(this.space(t)), this.stream.write("<?xml version=\"" + e.version + "\""), e.encoding != null && this.stream.write(" encoding=\"" + e.encoding + "\""), e.standalone != null && this.stream.write(" standalone=\"" + e.standalone + "\""), this.stream.write(this.spacebeforeslash + "?>"), this.stream.write(this.endline(e));
			}, m.prototype.docType = function(t, s) {
				var c, l, u, f;
				if (s ||= 0, this.stream.write(this.space(s)), this.stream.write("<!DOCTYPE " + t.root().name), t.pubID && t.sysID ? this.stream.write(" PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"") : t.sysID && this.stream.write(" SYSTEM \"" + t.sysID + "\""), t.children.length > 0) {
					for (this.stream.write(" ["), this.stream.write(this.endline(t)), f = t.children, l = 0, u = f.length; l < u; l++) switch (c = f[l], !1) {
						case !(c instanceof r):
							this.dtdAttList(c, s + 1);
							break;
						case !(c instanceof i):
							this.dtdElement(c, s + 1);
							break;
						case !(c instanceof a):
							this.dtdEntity(c, s + 1);
							break;
						case !(c instanceof o):
							this.dtdNotation(c, s + 1);
							break;
						case !(c instanceof e):
							this.cdata(c, s + 1);
							break;
						case !(c instanceof n):
							this.comment(c, s + 1);
							break;
						case !(c instanceof d):
							this.processingInstruction(c, s + 1);
							break;
						default: throw Error("Unknown DTD node type: " + c.constructor.name);
					}
					this.stream.write("]");
				}
				return this.stream.write(this.spacebeforeslash + ">"), this.stream.write(this.endline(t));
			}, m.prototype.element = function(t, r) {
				var i, a, o, s, c, m, h, _;
				for (c in r ||= 0, _ = this.space(r), this.stream.write(_ + "<" + t.name), m = t.attributes, m) g.call(m, c) && (i = m[c], this.attribute(i));
				if (t.children.length === 0 || t.children.every(function(e) {
					return e.value === "";
				})) this.allowEmpty ? this.stream.write("></" + t.name + ">") : this.stream.write(this.spacebeforeslash + "/>");
				else if (this.pretty && t.children.length === 1 && t.children[0].value != null) this.stream.write(">"), this.stream.write(t.children[0].value), this.stream.write("</" + t.name + ">");
				else {
					for (this.stream.write(">" + this.newline), h = t.children, o = 0, s = h.length; o < s; o++) switch (a = h[o], !1) {
						case !(a instanceof e):
							this.cdata(a, r + 1);
							break;
						case !(a instanceof n):
							this.comment(a, r + 1);
							break;
						case !(a instanceof u):
							this.element(a, r + 1);
							break;
						case !(a instanceof f):
							this.raw(a, r + 1);
							break;
						case !(a instanceof p):
							this.text(a, r + 1);
							break;
						case !(a instanceof d):
							this.processingInstruction(a, r + 1);
							break;
						case !(a instanceof l): break;
						default: throw Error("Unknown XML node type: " + a.constructor.name);
					}
					this.stream.write(_ + "</" + t.name + ">");
				}
				return this.stream.write(this.endline(t));
			}, m.prototype.processingInstruction = function(e, t) {
				return this.stream.write(this.space(t) + "<?" + e.target), e.value && this.stream.write(" " + e.value), this.stream.write(this.spacebeforeslash + "?>" + this.endline(e));
			}, m.prototype.raw = function(e, t) {
				return this.stream.write(this.space(t) + e.value + this.endline(e));
			}, m.prototype.text = function(e, t) {
				return this.stream.write(this.space(t) + e.value + this.endline(e));
			}, m.prototype.dtdAttList = function(e, t) {
				return this.stream.write(this.space(t) + "<!ATTLIST " + e.elementName + " " + e.attributeName + " " + e.attributeType), e.defaultValueType !== "#DEFAULT" && this.stream.write(" " + e.defaultValueType), e.defaultValue && this.stream.write(" \"" + e.defaultValue + "\""), this.stream.write(this.spacebeforeslash + ">" + this.endline(e));
			}, m.prototype.dtdElement = function(e, t) {
				return this.stream.write(this.space(t) + "<!ELEMENT " + e.name + " " + e.value), this.stream.write(this.spacebeforeslash + ">" + this.endline(e));
			}, m.prototype.dtdEntity = function(e, t) {
				return this.stream.write(this.space(t) + "<!ENTITY"), e.pe && this.stream.write(" %"), this.stream.write(" " + e.name), e.value ? this.stream.write(" \"" + e.value + "\"") : (e.pubID && e.sysID ? this.stream.write(" PUBLIC \"" + e.pubID + "\" \"" + e.sysID + "\"") : e.sysID && this.stream.write(" SYSTEM \"" + e.sysID + "\""), e.nData && this.stream.write(" NDATA " + e.nData)), this.stream.write(this.spacebeforeslash + ">" + this.endline(e));
			}, m.prototype.dtdNotation = function(e, t) {
				return this.stream.write(this.space(t) + "<!NOTATION " + e.name), e.pubID && e.sysID ? this.stream.write(" PUBLIC \"" + e.pubID + "\" \"" + e.sysID + "\"") : e.pubID ? this.stream.write(" PUBLIC \"" + e.pubID + "\"") : e.sysID && this.stream.write(" SYSTEM \"" + e.sysID + "\""), this.stream.write(this.spacebeforeslash + ">" + this.endline(e));
			}, m.prototype.endline = function(e) {
				return e.isLastRootNode ? "" : this.newline;
			}, m;
		})(m);
	}).call(e);
})), Ih = /* @__PURE__ */ a(((e, t) => {
	(function() {
		var e, n, r, i, a, o, s = mh();
		a = s.assign, o = s.isFunction, e = Nh(), n = Ph(), i = Mh(), r = Fh(), t.exports.create = function(t, n, r, i) {
			var o, s;
			if (t == null) throw Error("Root element needs a name.");
			return i = a({}, n, r, i), o = new e(i), s = o.element(t), i.headless || (o.declaration(i), (i.pubID != null || i.sysID != null) && o.doctype(i)), s;
		}, t.exports.begin = function(t, r, i) {
			var a;
			return o(t) && (a = [t, r], r = a[0], i = a[1], t = {}), r ? new n(t, r, i) : new e(t);
		}, t.exports.stringWriter = function(e) {
			return new i(e);
		}, t.exports.streamWriter = function(e, t) {
			return new r(e, t);
		};
	}).call(e);
})), Lh = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = Ih();
	t.writeString = i;
	function i(e, t) {
		var i = n.invert(t), o = {
			element: c,
			text: a
		};
		function s(e, t) {
			return o[t.type](e, t);
		}
		function c(e, t) {
			var n = e.element(l(t.name), t.attributes);
			t.children.forEach(function(e) {
				s(n, e);
			});
		}
		function l(e) {
			var t = /^\{(.*)\}(.*)$/.exec(e);
			if (t) {
				var n = i[t[1]];
				return n + (n === "" ? "" : ":") + t[2];
			}
			return e;
		}
		function u(e) {
			var i = r.create(l(e.name), {
				version: "1.0",
				encoding: "UTF-8",
				standalone: !0
			});
			return n.forEach(t, function(e, t) {
				var n = "xmlns" + (t === "" ? "" : ":" + t);
				i.attribute(n, e);
			}), e.children.forEach(function(e) {
				s(i, e);
			}), i.end();
		}
		return u(e);
	}
	function a(e, t) {
		e.text(t.value);
	}
})), Rh = /* @__PURE__ */ a(((e) => {
	var t = ah();
	e.Element = t.Element, e.element = t.element, e.emptyElement = t.emptyElement, e.text = t.text, e.readString = ph().readString, e.writeString = Lh().writeString;
})), zh = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = $m(), i = Rh();
	t.read = o, t.readXmlFromZipFile = s;
	var a = {
		"http://schemas.openxmlformats.org/wordprocessingml/2006/main": "w",
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships": "r",
		"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing": "wp",
		"http://schemas.openxmlformats.org/drawingml/2006/main": "a",
		"http://schemas.openxmlformats.org/drawingml/2006/picture": "pic",
		"http://purl.oclc.org/ooxml/wordprocessingml/main": "w",
		"http://purl.oclc.org/ooxml/officeDocument/relationships": "r",
		"http://purl.oclc.org/ooxml/drawingml/wordprocessingDrawing": "wp",
		"http://purl.oclc.org/ooxml/drawingml/main": "a",
		"http://purl.oclc.org/ooxml/drawingml/picture": "pic",
		"http://schemas.openxmlformats.org/package/2006/content-types": "content-types",
		"http://schemas.openxmlformats.org/package/2006/relationships": "relationships",
		"http://schemas.openxmlformats.org/markup-compatibility/2006": "mc",
		"urn:schemas-microsoft-com:vml": "v",
		"urn:schemas-microsoft-com:office:word": "office-word",
		"http://schemas.microsoft.com/office/word/2010/wordml": "wordml"
	};
	function o(e) {
		return i.readString(e, a).then(function(e) {
			return l(e)[0];
		});
	}
	function s(e, t) {
		return e.exists(t) ? e.read(t, "utf-8").then(c).then(o) : r.resolve(null);
	}
	function c(e) {
		return e.replace(/^\uFEFF/g, "");
	}
	function l(e) {
		return e.type === "element" ? e.name === "mc:AlternateContent" ? e.firstOrEmpty("mc:Fallback").children : (e.children = n.flatten(e.children.map(l, !0)), [e]) : [e];
	}
})), Bh = /* @__PURE__ */ a(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "32",
			"Dingbat hex": "20",
			"Unicode dec": "32",
			"Unicode hex": "20"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "33",
			"Dingbat hex": "21",
			"Unicode dec": "33",
			"Unicode hex": "21"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "34",
			"Dingbat hex": "22",
			"Unicode dec": "8704",
			"Unicode hex": "2200"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "35",
			"Dingbat hex": "23",
			"Unicode dec": "35",
			"Unicode hex": "23"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "36",
			"Dingbat hex": "24",
			"Unicode dec": "8707",
			"Unicode hex": "2203"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "37",
			"Dingbat hex": "25",
			"Unicode dec": "37",
			"Unicode hex": "25"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "38",
			"Dingbat hex": "26",
			"Unicode dec": "38",
			"Unicode hex": "26"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "39",
			"Dingbat hex": "27",
			"Unicode dec": "8717",
			"Unicode hex": "220D"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "40",
			"Dingbat hex": "28",
			"Unicode dec": "40",
			"Unicode hex": "28"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "41",
			"Dingbat hex": "29",
			"Unicode dec": "41",
			"Unicode hex": "29"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "42",
			"Dingbat hex": "2A",
			"Unicode dec": "42",
			"Unicode hex": "2A"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "43",
			"Dingbat hex": "2B",
			"Unicode dec": "43",
			"Unicode hex": "2B"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "44",
			"Dingbat hex": "2C",
			"Unicode dec": "44",
			"Unicode hex": "2C"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "45",
			"Dingbat hex": "2D",
			"Unicode dec": "8722",
			"Unicode hex": "2212"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "46",
			"Dingbat hex": "2E",
			"Unicode dec": "46",
			"Unicode hex": "2E"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "47",
			"Dingbat hex": "2F",
			"Unicode dec": "47",
			"Unicode hex": "2F"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "48",
			"Dingbat hex": "30",
			"Unicode dec": "48",
			"Unicode hex": "30"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "49",
			"Dingbat hex": "31",
			"Unicode dec": "49",
			"Unicode hex": "31"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "50",
			"Dingbat hex": "32",
			"Unicode dec": "50",
			"Unicode hex": "32"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "51",
			"Dingbat hex": "33",
			"Unicode dec": "51",
			"Unicode hex": "33"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "52",
			"Dingbat hex": "34",
			"Unicode dec": "52",
			"Unicode hex": "34"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "53",
			"Dingbat hex": "35",
			"Unicode dec": "53",
			"Unicode hex": "35"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "54",
			"Dingbat hex": "36",
			"Unicode dec": "54",
			"Unicode hex": "36"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "55",
			"Dingbat hex": "37",
			"Unicode dec": "55",
			"Unicode hex": "37"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "56",
			"Dingbat hex": "38",
			"Unicode dec": "56",
			"Unicode hex": "38"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "57",
			"Dingbat hex": "39",
			"Unicode dec": "57",
			"Unicode hex": "39"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "58",
			"Dingbat hex": "3A",
			"Unicode dec": "58",
			"Unicode hex": "3A"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "59",
			"Dingbat hex": "3B",
			"Unicode dec": "59",
			"Unicode hex": "3B"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "60",
			"Dingbat hex": "3C",
			"Unicode dec": "60",
			"Unicode hex": "3C"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "61",
			"Dingbat hex": "3D",
			"Unicode dec": "61",
			"Unicode hex": "3D"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "62",
			"Dingbat hex": "3E",
			"Unicode dec": "62",
			"Unicode hex": "3E"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "63",
			"Dingbat hex": "3F",
			"Unicode dec": "63",
			"Unicode hex": "3F"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "64",
			"Dingbat hex": "40",
			"Unicode dec": "8773",
			"Unicode hex": "2245"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "65",
			"Dingbat hex": "41",
			"Unicode dec": "913",
			"Unicode hex": "391"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "66",
			"Dingbat hex": "42",
			"Unicode dec": "914",
			"Unicode hex": "392"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "67",
			"Dingbat hex": "43",
			"Unicode dec": "935",
			"Unicode hex": "3A7"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "68",
			"Dingbat hex": "44",
			"Unicode dec": "916",
			"Unicode hex": "394"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "69",
			"Dingbat hex": "45",
			"Unicode dec": "917",
			"Unicode hex": "395"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "70",
			"Dingbat hex": "46",
			"Unicode dec": "934",
			"Unicode hex": "3A6"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "71",
			"Dingbat hex": "47",
			"Unicode dec": "915",
			"Unicode hex": "393"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "72",
			"Dingbat hex": "48",
			"Unicode dec": "919",
			"Unicode hex": "397"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "73",
			"Dingbat hex": "49",
			"Unicode dec": "921",
			"Unicode hex": "399"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "74",
			"Dingbat hex": "4A",
			"Unicode dec": "977",
			"Unicode hex": "3D1"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "75",
			"Dingbat hex": "4B",
			"Unicode dec": "922",
			"Unicode hex": "39A"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "76",
			"Dingbat hex": "4C",
			"Unicode dec": "923",
			"Unicode hex": "39B"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "77",
			"Dingbat hex": "4D",
			"Unicode dec": "924",
			"Unicode hex": "39C"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "78",
			"Dingbat hex": "4E",
			"Unicode dec": "925",
			"Unicode hex": "39D"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "79",
			"Dingbat hex": "4F",
			"Unicode dec": "927",
			"Unicode hex": "39F"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "80",
			"Dingbat hex": "50",
			"Unicode dec": "928",
			"Unicode hex": "3A0"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "81",
			"Dingbat hex": "51",
			"Unicode dec": "920",
			"Unicode hex": "398"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "82",
			"Dingbat hex": "52",
			"Unicode dec": "929",
			"Unicode hex": "3A1"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "83",
			"Dingbat hex": "53",
			"Unicode dec": "931",
			"Unicode hex": "3A3"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "84",
			"Dingbat hex": "54",
			"Unicode dec": "932",
			"Unicode hex": "3A4"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "85",
			"Dingbat hex": "55",
			"Unicode dec": "933",
			"Unicode hex": "3A5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "86",
			"Dingbat hex": "56",
			"Unicode dec": "962",
			"Unicode hex": "3C2"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "87",
			"Dingbat hex": "57",
			"Unicode dec": "937",
			"Unicode hex": "3A9"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "88",
			"Dingbat hex": "58",
			"Unicode dec": "926",
			"Unicode hex": "39E"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "89",
			"Dingbat hex": "59",
			"Unicode dec": "936",
			"Unicode hex": "3A8"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "90",
			"Dingbat hex": "5A",
			"Unicode dec": "918",
			"Unicode hex": "396"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "91",
			"Dingbat hex": "5B",
			"Unicode dec": "91",
			"Unicode hex": "5B"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "92",
			"Dingbat hex": "5C",
			"Unicode dec": "8756",
			"Unicode hex": "2234"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "93",
			"Dingbat hex": "5D",
			"Unicode dec": "93",
			"Unicode hex": "5D"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "94",
			"Dingbat hex": "5E",
			"Unicode dec": "8869",
			"Unicode hex": "22A5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "95",
			"Dingbat hex": "5F",
			"Unicode dec": "95",
			"Unicode hex": "5F"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "96",
			"Dingbat hex": "60",
			"Unicode dec": "8254",
			"Unicode hex": "203E"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "97",
			"Dingbat hex": "61",
			"Unicode dec": "945",
			"Unicode hex": "3B1"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "98",
			"Dingbat hex": "62",
			"Unicode dec": "946",
			"Unicode hex": "3B2"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "99",
			"Dingbat hex": "63",
			"Unicode dec": "967",
			"Unicode hex": "3C7"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "100",
			"Dingbat hex": "64",
			"Unicode dec": "948",
			"Unicode hex": "3B4"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "101",
			"Dingbat hex": "65",
			"Unicode dec": "949",
			"Unicode hex": "3B5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "102",
			"Dingbat hex": "66",
			"Unicode dec": "966",
			"Unicode hex": "3C6"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "103",
			"Dingbat hex": "67",
			"Unicode dec": "947",
			"Unicode hex": "3B3"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "104",
			"Dingbat hex": "68",
			"Unicode dec": "951",
			"Unicode hex": "3B7"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "105",
			"Dingbat hex": "69",
			"Unicode dec": "953",
			"Unicode hex": "3B9"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "106",
			"Dingbat hex": "6A",
			"Unicode dec": "981",
			"Unicode hex": "3D5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "107",
			"Dingbat hex": "6B",
			"Unicode dec": "954",
			"Unicode hex": "3BA"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "108",
			"Dingbat hex": "6C",
			"Unicode dec": "955",
			"Unicode hex": "3BB"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "109",
			"Dingbat hex": "6D",
			"Unicode dec": "956",
			"Unicode hex": "3BC"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "110",
			"Dingbat hex": "6E",
			"Unicode dec": "957",
			"Unicode hex": "3BD"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "111",
			"Dingbat hex": "6F",
			"Unicode dec": "959",
			"Unicode hex": "3BF"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "112",
			"Dingbat hex": "70",
			"Unicode dec": "960",
			"Unicode hex": "3C0"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "113",
			"Dingbat hex": "71",
			"Unicode dec": "952",
			"Unicode hex": "3B8"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "114",
			"Dingbat hex": "72",
			"Unicode dec": "961",
			"Unicode hex": "3C1"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "115",
			"Dingbat hex": "73",
			"Unicode dec": "963",
			"Unicode hex": "3C3"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "116",
			"Dingbat hex": "74",
			"Unicode dec": "964",
			"Unicode hex": "3C4"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "117",
			"Dingbat hex": "75",
			"Unicode dec": "965",
			"Unicode hex": "3C5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "118",
			"Dingbat hex": "76",
			"Unicode dec": "982",
			"Unicode hex": "3D6"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "119",
			"Dingbat hex": "77",
			"Unicode dec": "969",
			"Unicode hex": "3C9"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "120",
			"Dingbat hex": "78",
			"Unicode dec": "958",
			"Unicode hex": "3BE"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "121",
			"Dingbat hex": "79",
			"Unicode dec": "968",
			"Unicode hex": "3C8"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "122",
			"Dingbat hex": "7A",
			"Unicode dec": "950",
			"Unicode hex": "3B6"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "123",
			"Dingbat hex": "7B",
			"Unicode dec": "123",
			"Unicode hex": "7B"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "124",
			"Dingbat hex": "7C",
			"Unicode dec": "124",
			"Unicode hex": "7C"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "125",
			"Dingbat hex": "7D",
			"Unicode dec": "125",
			"Unicode hex": "7D"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "126",
			"Dingbat hex": "7E",
			"Unicode dec": "126",
			"Unicode hex": "7E"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "160",
			"Dingbat hex": "A0",
			"Unicode dec": "8364",
			"Unicode hex": "20AC"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "161",
			"Dingbat hex": "A1",
			"Unicode dec": "978",
			"Unicode hex": "3D2"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "162",
			"Dingbat hex": "A2",
			"Unicode dec": "8242",
			"Unicode hex": "2032"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "163",
			"Dingbat hex": "A3",
			"Unicode dec": "8804",
			"Unicode hex": "2264"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "164",
			"Dingbat hex": "A4",
			"Unicode dec": "8260",
			"Unicode hex": "2044"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "165",
			"Dingbat hex": "A5",
			"Unicode dec": "8734",
			"Unicode hex": "221E"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "166",
			"Dingbat hex": "A6",
			"Unicode dec": "402",
			"Unicode hex": "192"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "167",
			"Dingbat hex": "A7",
			"Unicode dec": "9827",
			"Unicode hex": "2663"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "168",
			"Dingbat hex": "A8",
			"Unicode dec": "9830",
			"Unicode hex": "2666"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "169",
			"Dingbat hex": "A9",
			"Unicode dec": "9829",
			"Unicode hex": "2665"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "170",
			"Dingbat hex": "AA",
			"Unicode dec": "9824",
			"Unicode hex": "2660"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "171",
			"Dingbat hex": "AB",
			"Unicode dec": "8596",
			"Unicode hex": "2194"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "172",
			"Dingbat hex": "AC",
			"Unicode dec": "8592",
			"Unicode hex": "2190"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "173",
			"Dingbat hex": "AD",
			"Unicode dec": "8593",
			"Unicode hex": "2191"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "174",
			"Dingbat hex": "AE",
			"Unicode dec": "8594",
			"Unicode hex": "2192"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "175",
			"Dingbat hex": "AF",
			"Unicode dec": "8595",
			"Unicode hex": "2193"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "176",
			"Dingbat hex": "B0",
			"Unicode dec": "176",
			"Unicode hex": "B0"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "177",
			"Dingbat hex": "B1",
			"Unicode dec": "177",
			"Unicode hex": "B1"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "178",
			"Dingbat hex": "B2",
			"Unicode dec": "8243",
			"Unicode hex": "2033"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "179",
			"Dingbat hex": "B3",
			"Unicode dec": "8805",
			"Unicode hex": "2265"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "180",
			"Dingbat hex": "B4",
			"Unicode dec": "215",
			"Unicode hex": "D7"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "181",
			"Dingbat hex": "B5",
			"Unicode dec": "8733",
			"Unicode hex": "221D"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "182",
			"Dingbat hex": "B6",
			"Unicode dec": "8706",
			"Unicode hex": "2202"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "183",
			"Dingbat hex": "B7",
			"Unicode dec": "8226",
			"Unicode hex": "2022"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "184",
			"Dingbat hex": "B8",
			"Unicode dec": "247",
			"Unicode hex": "F7"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "185",
			"Dingbat hex": "B9",
			"Unicode dec": "8800",
			"Unicode hex": "2260"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "186",
			"Dingbat hex": "BA",
			"Unicode dec": "8801",
			"Unicode hex": "2261"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "187",
			"Dingbat hex": "BB",
			"Unicode dec": "8776",
			"Unicode hex": "2248"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "188",
			"Dingbat hex": "BC",
			"Unicode dec": "8230",
			"Unicode hex": "2026"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "189",
			"Dingbat hex": "BD",
			"Unicode dec": "9168",
			"Unicode hex": "23D0"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "190",
			"Dingbat hex": "BE",
			"Unicode dec": "9135",
			"Unicode hex": "23AF"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "191",
			"Dingbat hex": "BF",
			"Unicode dec": "8629",
			"Unicode hex": "21B5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "192",
			"Dingbat hex": "C0",
			"Unicode dec": "8501",
			"Unicode hex": "2135"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "193",
			"Dingbat hex": "C1",
			"Unicode dec": "8465",
			"Unicode hex": "2111"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "194",
			"Dingbat hex": "C2",
			"Unicode dec": "8476",
			"Unicode hex": "211C"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "195",
			"Dingbat hex": "C3",
			"Unicode dec": "8472",
			"Unicode hex": "2118"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "196",
			"Dingbat hex": "C4",
			"Unicode dec": "8855",
			"Unicode hex": "2297"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "197",
			"Dingbat hex": "C5",
			"Unicode dec": "8853",
			"Unicode hex": "2295"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "198",
			"Dingbat hex": "C6",
			"Unicode dec": "8709",
			"Unicode hex": "2205"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "199",
			"Dingbat hex": "C7",
			"Unicode dec": "8745",
			"Unicode hex": "2229"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "200",
			"Dingbat hex": "C8",
			"Unicode dec": "8746",
			"Unicode hex": "222A"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "201",
			"Dingbat hex": "C9",
			"Unicode dec": "8835",
			"Unicode hex": "2283"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "202",
			"Dingbat hex": "CA",
			"Unicode dec": "8839",
			"Unicode hex": "2287"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "203",
			"Dingbat hex": "CB",
			"Unicode dec": "8836",
			"Unicode hex": "2284"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "204",
			"Dingbat hex": "CC",
			"Unicode dec": "8834",
			"Unicode hex": "2282"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "205",
			"Dingbat hex": "CD",
			"Unicode dec": "8838",
			"Unicode hex": "2286"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "206",
			"Dingbat hex": "CE",
			"Unicode dec": "8712",
			"Unicode hex": "2208"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "207",
			"Dingbat hex": "CF",
			"Unicode dec": "8713",
			"Unicode hex": "2209"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "208",
			"Dingbat hex": "D0",
			"Unicode dec": "8736",
			"Unicode hex": "2220"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "209",
			"Dingbat hex": "D1",
			"Unicode dec": "8711",
			"Unicode hex": "2207"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "210",
			"Dingbat hex": "D2",
			"Unicode dec": "174",
			"Unicode hex": "AE"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "211",
			"Dingbat hex": "D3",
			"Unicode dec": "169",
			"Unicode hex": "A9"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "212",
			"Dingbat hex": "D4",
			"Unicode dec": "8482",
			"Unicode hex": "2122"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "213",
			"Dingbat hex": "D5",
			"Unicode dec": "8719",
			"Unicode hex": "220F"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "214",
			"Dingbat hex": "D6",
			"Unicode dec": "8730",
			"Unicode hex": "221A"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "215",
			"Dingbat hex": "D7",
			"Unicode dec": "8901",
			"Unicode hex": "22C5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "216",
			"Dingbat hex": "D8",
			"Unicode dec": "172",
			"Unicode hex": "AC"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "217",
			"Dingbat hex": "D9",
			"Unicode dec": "8743",
			"Unicode hex": "2227"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "218",
			"Dingbat hex": "DA",
			"Unicode dec": "8744",
			"Unicode hex": "2228"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "219",
			"Dingbat hex": "DB",
			"Unicode dec": "8660",
			"Unicode hex": "21D4"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "220",
			"Dingbat hex": "DC",
			"Unicode dec": "8656",
			"Unicode hex": "21D0"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "221",
			"Dingbat hex": "DD",
			"Unicode dec": "8657",
			"Unicode hex": "21D1"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "222",
			"Dingbat hex": "DE",
			"Unicode dec": "8658",
			"Unicode hex": "21D2"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "223",
			"Dingbat hex": "DF",
			"Unicode dec": "8659",
			"Unicode hex": "21D3"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "224",
			"Dingbat hex": "E0",
			"Unicode dec": "9674",
			"Unicode hex": "25CA"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "225",
			"Dingbat hex": "E1",
			"Unicode dec": "12296",
			"Unicode hex": "3008"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "226",
			"Dingbat hex": "E2",
			"Unicode dec": "174",
			"Unicode hex": "AE"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "227",
			"Dingbat hex": "E3",
			"Unicode dec": "169",
			"Unicode hex": "A9"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "228",
			"Dingbat hex": "E4",
			"Unicode dec": "8482",
			"Unicode hex": "2122"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "229",
			"Dingbat hex": "E5",
			"Unicode dec": "8721",
			"Unicode hex": "2211"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "230",
			"Dingbat hex": "E6",
			"Unicode dec": "9115",
			"Unicode hex": "239B"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "231",
			"Dingbat hex": "E7",
			"Unicode dec": "9116",
			"Unicode hex": "239C"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "232",
			"Dingbat hex": "E8",
			"Unicode dec": "9117",
			"Unicode hex": "239D"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "233",
			"Dingbat hex": "E9",
			"Unicode dec": "9121",
			"Unicode hex": "23A1"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "234",
			"Dingbat hex": "EA",
			"Unicode dec": "9122",
			"Unicode hex": "23A2"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "235",
			"Dingbat hex": "EB",
			"Unicode dec": "9123",
			"Unicode hex": "23A3"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "236",
			"Dingbat hex": "EC",
			"Unicode dec": "9127",
			"Unicode hex": "23A7"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "237",
			"Dingbat hex": "ED",
			"Unicode dec": "9128",
			"Unicode hex": "23A8"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "238",
			"Dingbat hex": "EE",
			"Unicode dec": "9129",
			"Unicode hex": "23A9"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "239",
			"Dingbat hex": "EF",
			"Unicode dec": "9130",
			"Unicode hex": "23AA"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "240",
			"Dingbat hex": "F0",
			"Unicode dec": "63743",
			"Unicode hex": "F8FF"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "241",
			"Dingbat hex": "F1",
			"Unicode dec": "12297",
			"Unicode hex": "3009"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "242",
			"Dingbat hex": "F2",
			"Unicode dec": "8747",
			"Unicode hex": "222B"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "243",
			"Dingbat hex": "F3",
			"Unicode dec": "8992",
			"Unicode hex": "2320"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "244",
			"Dingbat hex": "F4",
			"Unicode dec": "9134",
			"Unicode hex": "23AE"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "245",
			"Dingbat hex": "F5",
			"Unicode dec": "8993",
			"Unicode hex": "2321"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "246",
			"Dingbat hex": "F6",
			"Unicode dec": "9118",
			"Unicode hex": "239E"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "247",
			"Dingbat hex": "F7",
			"Unicode dec": "9119",
			"Unicode hex": "239F"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "248",
			"Dingbat hex": "F8",
			"Unicode dec": "9120",
			"Unicode hex": "23A0"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "249",
			"Dingbat hex": "F9",
			"Unicode dec": "9124",
			"Unicode hex": "23A4"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "250",
			"Dingbat hex": "FA",
			"Unicode dec": "9125",
			"Unicode hex": "23A5"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "251",
			"Dingbat hex": "FB",
			"Unicode dec": "9126",
			"Unicode hex": "23A6"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "252",
			"Dingbat hex": "FC",
			"Unicode dec": "9131",
			"Unicode hex": "23AB"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "253",
			"Dingbat hex": "FD",
			"Unicode dec": "9132",
			"Unicode hex": "23AC"
		},
		{
			"Typeface name": "Symbol",
			"Dingbat dec": "254",
			"Dingbat hex": "FE",
			"Unicode dec": "9133",
			"Unicode hex": "23AD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "32",
			"Dingbat hex": "20",
			"Unicode dec": "32",
			"Unicode hex": "20"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "33",
			"Dingbat hex": "21",
			"Unicode dec": "128375",
			"Unicode hex": "1F577"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "34",
			"Dingbat hex": "22",
			"Unicode dec": "128376",
			"Unicode hex": "1F578"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "35",
			"Dingbat hex": "23",
			"Unicode dec": "128370",
			"Unicode hex": "1F572"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "36",
			"Dingbat hex": "24",
			"Unicode dec": "128374",
			"Unicode hex": "1F576"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "37",
			"Dingbat hex": "25",
			"Unicode dec": "127942",
			"Unicode hex": "1F3C6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "38",
			"Dingbat hex": "26",
			"Unicode dec": "127894",
			"Unicode hex": "1F396"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "39",
			"Dingbat hex": "27",
			"Unicode dec": "128391",
			"Unicode hex": "1F587"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "40",
			"Dingbat hex": "28",
			"Unicode dec": "128488",
			"Unicode hex": "1F5E8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "41",
			"Dingbat hex": "29",
			"Unicode dec": "128489",
			"Unicode hex": "1F5E9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "42",
			"Dingbat hex": "2A",
			"Unicode dec": "128496",
			"Unicode hex": "1F5F0"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "43",
			"Dingbat hex": "2B",
			"Unicode dec": "128497",
			"Unicode hex": "1F5F1"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "44",
			"Dingbat hex": "2C",
			"Unicode dec": "127798",
			"Unicode hex": "1F336"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "45",
			"Dingbat hex": "2D",
			"Unicode dec": "127895",
			"Unicode hex": "1F397"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "46",
			"Dingbat hex": "2E",
			"Unicode dec": "128638",
			"Unicode hex": "1F67E"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "47",
			"Dingbat hex": "2F",
			"Unicode dec": "128636",
			"Unicode hex": "1F67C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "48",
			"Dingbat hex": "30",
			"Unicode dec": "128469",
			"Unicode hex": "1F5D5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "49",
			"Dingbat hex": "31",
			"Unicode dec": "128470",
			"Unicode hex": "1F5D6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "50",
			"Dingbat hex": "32",
			"Unicode dec": "128471",
			"Unicode hex": "1F5D7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "51",
			"Dingbat hex": "33",
			"Unicode dec": "9204",
			"Unicode hex": "23F4"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "52",
			"Dingbat hex": "34",
			"Unicode dec": "9205",
			"Unicode hex": "23F5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "53",
			"Dingbat hex": "35",
			"Unicode dec": "9206",
			"Unicode hex": "23F6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "54",
			"Dingbat hex": "36",
			"Unicode dec": "9207",
			"Unicode hex": "23F7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "55",
			"Dingbat hex": "37",
			"Unicode dec": "9194",
			"Unicode hex": "23EA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "56",
			"Dingbat hex": "38",
			"Unicode dec": "9193",
			"Unicode hex": "23E9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "57",
			"Dingbat hex": "39",
			"Unicode dec": "9198",
			"Unicode hex": "23EE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "58",
			"Dingbat hex": "3A",
			"Unicode dec": "9197",
			"Unicode hex": "23ED"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "59",
			"Dingbat hex": "3B",
			"Unicode dec": "9208",
			"Unicode hex": "23F8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "60",
			"Dingbat hex": "3C",
			"Unicode dec": "9209",
			"Unicode hex": "23F9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "61",
			"Dingbat hex": "3D",
			"Unicode dec": "9210",
			"Unicode hex": "23FA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "62",
			"Dingbat hex": "3E",
			"Unicode dec": "128474",
			"Unicode hex": "1F5DA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "63",
			"Dingbat hex": "3F",
			"Unicode dec": "128499",
			"Unicode hex": "1F5F3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "64",
			"Dingbat hex": "40",
			"Unicode dec": "128736",
			"Unicode hex": "1F6E0"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "65",
			"Dingbat hex": "41",
			"Unicode dec": "127959",
			"Unicode hex": "1F3D7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "66",
			"Dingbat hex": "42",
			"Unicode dec": "127960",
			"Unicode hex": "1F3D8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "67",
			"Dingbat hex": "43",
			"Unicode dec": "127961",
			"Unicode hex": "1F3D9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "68",
			"Dingbat hex": "44",
			"Unicode dec": "127962",
			"Unicode hex": "1F3DA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "69",
			"Dingbat hex": "45",
			"Unicode dec": "127964",
			"Unicode hex": "1F3DC"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "70",
			"Dingbat hex": "46",
			"Unicode dec": "127981",
			"Unicode hex": "1F3ED"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "71",
			"Dingbat hex": "47",
			"Unicode dec": "127963",
			"Unicode hex": "1F3DB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "72",
			"Dingbat hex": "48",
			"Unicode dec": "127968",
			"Unicode hex": "1F3E0"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "73",
			"Dingbat hex": "49",
			"Unicode dec": "127958",
			"Unicode hex": "1F3D6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "74",
			"Dingbat hex": "4A",
			"Unicode dec": "127965",
			"Unicode hex": "1F3DD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "75",
			"Dingbat hex": "4B",
			"Unicode dec": "128739",
			"Unicode hex": "1F6E3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "76",
			"Dingbat hex": "4C",
			"Unicode dec": "128269",
			"Unicode hex": "1F50D"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "77",
			"Dingbat hex": "4D",
			"Unicode dec": "127956",
			"Unicode hex": "1F3D4"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "78",
			"Dingbat hex": "4E",
			"Unicode dec": "128065",
			"Unicode hex": "1F441"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "79",
			"Dingbat hex": "4F",
			"Unicode dec": "128066",
			"Unicode hex": "1F442"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "80",
			"Dingbat hex": "50",
			"Unicode dec": "127966",
			"Unicode hex": "1F3DE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "81",
			"Dingbat hex": "51",
			"Unicode dec": "127957",
			"Unicode hex": "1F3D5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "82",
			"Dingbat hex": "52",
			"Unicode dec": "128740",
			"Unicode hex": "1F6E4"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "83",
			"Dingbat hex": "53",
			"Unicode dec": "127967",
			"Unicode hex": "1F3DF"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "84",
			"Dingbat hex": "54",
			"Unicode dec": "128755",
			"Unicode hex": "1F6F3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "85",
			"Dingbat hex": "55",
			"Unicode dec": "128364",
			"Unicode hex": "1F56C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "86",
			"Dingbat hex": "56",
			"Unicode dec": "128363",
			"Unicode hex": "1F56B"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "87",
			"Dingbat hex": "57",
			"Unicode dec": "128360",
			"Unicode hex": "1F568"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "88",
			"Dingbat hex": "58",
			"Unicode dec": "128264",
			"Unicode hex": "1F508"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "89",
			"Dingbat hex": "59",
			"Unicode dec": "127892",
			"Unicode hex": "1F394"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "90",
			"Dingbat hex": "5A",
			"Unicode dec": "127893",
			"Unicode hex": "1F395"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "91",
			"Dingbat hex": "5B",
			"Unicode dec": "128492",
			"Unicode hex": "1F5EC"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "92",
			"Dingbat hex": "5C",
			"Unicode dec": "128637",
			"Unicode hex": "1F67D"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "93",
			"Dingbat hex": "5D",
			"Unicode dec": "128493",
			"Unicode hex": "1F5ED"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "94",
			"Dingbat hex": "5E",
			"Unicode dec": "128490",
			"Unicode hex": "1F5EA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "95",
			"Dingbat hex": "5F",
			"Unicode dec": "128491",
			"Unicode hex": "1F5EB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "96",
			"Dingbat hex": "60",
			"Unicode dec": "11156",
			"Unicode hex": "2B94"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "97",
			"Dingbat hex": "61",
			"Unicode dec": "10004",
			"Unicode hex": "2714"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "98",
			"Dingbat hex": "62",
			"Unicode dec": "128690",
			"Unicode hex": "1F6B2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "99",
			"Dingbat hex": "63",
			"Unicode dec": "11036",
			"Unicode hex": "2B1C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "100",
			"Dingbat hex": "64",
			"Unicode dec": "128737",
			"Unicode hex": "1F6E1"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "101",
			"Dingbat hex": "65",
			"Unicode dec": "128230",
			"Unicode hex": "1F4E6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "102",
			"Dingbat hex": "66",
			"Unicode dec": "128753",
			"Unicode hex": "1F6F1"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "103",
			"Dingbat hex": "67",
			"Unicode dec": "11035",
			"Unicode hex": "2B1B"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "104",
			"Dingbat hex": "68",
			"Unicode dec": "128657",
			"Unicode hex": "1F691"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "105",
			"Dingbat hex": "69",
			"Unicode dec": "128712",
			"Unicode hex": "1F6C8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "106",
			"Dingbat hex": "6A",
			"Unicode dec": "128745",
			"Unicode hex": "1F6E9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "107",
			"Dingbat hex": "6B",
			"Unicode dec": "128752",
			"Unicode hex": "1F6F0"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "108",
			"Dingbat hex": "6C",
			"Unicode dec": "128968",
			"Unicode hex": "1F7C8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "109",
			"Dingbat hex": "6D",
			"Unicode dec": "128372",
			"Unicode hex": "1F574"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "110",
			"Dingbat hex": "6E",
			"Unicode dec": "11044",
			"Unicode hex": "2B24"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "111",
			"Dingbat hex": "6F",
			"Unicode dec": "128741",
			"Unicode hex": "1F6E5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "112",
			"Dingbat hex": "70",
			"Unicode dec": "128660",
			"Unicode hex": "1F694"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "113",
			"Dingbat hex": "71",
			"Unicode dec": "128472",
			"Unicode hex": "1F5D8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "114",
			"Dingbat hex": "72",
			"Unicode dec": "128473",
			"Unicode hex": "1F5D9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "115",
			"Dingbat hex": "73",
			"Unicode dec": "10067",
			"Unicode hex": "2753"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "116",
			"Dingbat hex": "74",
			"Unicode dec": "128754",
			"Unicode hex": "1F6F2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "117",
			"Dingbat hex": "75",
			"Unicode dec": "128647",
			"Unicode hex": "1F687"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "118",
			"Dingbat hex": "76",
			"Unicode dec": "128653",
			"Unicode hex": "1F68D"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "119",
			"Dingbat hex": "77",
			"Unicode dec": "9971",
			"Unicode hex": "26F3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "120",
			"Dingbat hex": "78",
			"Unicode dec": "10680",
			"Unicode hex": "29B8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "121",
			"Dingbat hex": "79",
			"Unicode dec": "8854",
			"Unicode hex": "2296"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "122",
			"Dingbat hex": "7A",
			"Unicode dec": "128685",
			"Unicode hex": "1F6AD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "123",
			"Dingbat hex": "7B",
			"Unicode dec": "128494",
			"Unicode hex": "1F5EE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "124",
			"Dingbat hex": "7C",
			"Unicode dec": "9168",
			"Unicode hex": "23D0"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "125",
			"Dingbat hex": "7D",
			"Unicode dec": "128495",
			"Unicode hex": "1F5EF"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "126",
			"Dingbat hex": "7E",
			"Unicode dec": "128498",
			"Unicode hex": "1F5F2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "128",
			"Dingbat hex": "80",
			"Unicode dec": "128697",
			"Unicode hex": "1F6B9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "129",
			"Dingbat hex": "81",
			"Unicode dec": "128698",
			"Unicode hex": "1F6BA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "130",
			"Dingbat hex": "82",
			"Unicode dec": "128713",
			"Unicode hex": "1F6C9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "131",
			"Dingbat hex": "83",
			"Unicode dec": "128714",
			"Unicode hex": "1F6CA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "132",
			"Dingbat hex": "84",
			"Unicode dec": "128700",
			"Unicode hex": "1F6BC"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "133",
			"Dingbat hex": "85",
			"Unicode dec": "128125",
			"Unicode hex": "1F47D"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "134",
			"Dingbat hex": "86",
			"Unicode dec": "127947",
			"Unicode hex": "1F3CB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "135",
			"Dingbat hex": "87",
			"Unicode dec": "9975",
			"Unicode hex": "26F7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "136",
			"Dingbat hex": "88",
			"Unicode dec": "127938",
			"Unicode hex": "1F3C2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "137",
			"Dingbat hex": "89",
			"Unicode dec": "127948",
			"Unicode hex": "1F3CC"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "138",
			"Dingbat hex": "8A",
			"Unicode dec": "127946",
			"Unicode hex": "1F3CA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "139",
			"Dingbat hex": "8B",
			"Unicode dec": "127940",
			"Unicode hex": "1F3C4"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "140",
			"Dingbat hex": "8C",
			"Unicode dec": "127949",
			"Unicode hex": "1F3CD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "141",
			"Dingbat hex": "8D",
			"Unicode dec": "127950",
			"Unicode hex": "1F3CE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "142",
			"Dingbat hex": "8E",
			"Unicode dec": "128664",
			"Unicode hex": "1F698"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "143",
			"Dingbat hex": "8F",
			"Unicode dec": "128480",
			"Unicode hex": "1F5E0"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "144",
			"Dingbat hex": "90",
			"Unicode dec": "128738",
			"Unicode hex": "1F6E2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "145",
			"Dingbat hex": "91",
			"Unicode dec": "128176",
			"Unicode hex": "1F4B0"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "146",
			"Dingbat hex": "92",
			"Unicode dec": "127991",
			"Unicode hex": "1F3F7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "147",
			"Dingbat hex": "93",
			"Unicode dec": "128179",
			"Unicode hex": "1F4B3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "148",
			"Dingbat hex": "94",
			"Unicode dec": "128106",
			"Unicode hex": "1F46A"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "149",
			"Dingbat hex": "95",
			"Unicode dec": "128481",
			"Unicode hex": "1F5E1"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "150",
			"Dingbat hex": "96",
			"Unicode dec": "128482",
			"Unicode hex": "1F5E2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "151",
			"Dingbat hex": "97",
			"Unicode dec": "128483",
			"Unicode hex": "1F5E3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "152",
			"Dingbat hex": "98",
			"Unicode dec": "10031",
			"Unicode hex": "272F"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "153",
			"Dingbat hex": "99",
			"Unicode dec": "128388",
			"Unicode hex": "1F584"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "154",
			"Dingbat hex": "9A",
			"Unicode dec": "128389",
			"Unicode hex": "1F585"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "155",
			"Dingbat hex": "9B",
			"Unicode dec": "128387",
			"Unicode hex": "1F583"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "156",
			"Dingbat hex": "9C",
			"Unicode dec": "128390",
			"Unicode hex": "1F586"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "157",
			"Dingbat hex": "9D",
			"Unicode dec": "128441",
			"Unicode hex": "1F5B9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "158",
			"Dingbat hex": "9E",
			"Unicode dec": "128442",
			"Unicode hex": "1F5BA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "159",
			"Dingbat hex": "9F",
			"Unicode dec": "128443",
			"Unicode hex": "1F5BB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "160",
			"Dingbat hex": "A0",
			"Unicode dec": "128373",
			"Unicode hex": "1F575"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "161",
			"Dingbat hex": "A1",
			"Unicode dec": "128368",
			"Unicode hex": "1F570"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "162",
			"Dingbat hex": "A2",
			"Unicode dec": "128445",
			"Unicode hex": "1F5BD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "163",
			"Dingbat hex": "A3",
			"Unicode dec": "128446",
			"Unicode hex": "1F5BE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "164",
			"Dingbat hex": "A4",
			"Unicode dec": "128203",
			"Unicode hex": "1F4CB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "165",
			"Dingbat hex": "A5",
			"Unicode dec": "128466",
			"Unicode hex": "1F5D2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "166",
			"Dingbat hex": "A6",
			"Unicode dec": "128467",
			"Unicode hex": "1F5D3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "167",
			"Dingbat hex": "A7",
			"Unicode dec": "128366",
			"Unicode hex": "1F56E"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "168",
			"Dingbat hex": "A8",
			"Unicode dec": "128218",
			"Unicode hex": "1F4DA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "169",
			"Dingbat hex": "A9",
			"Unicode dec": "128478",
			"Unicode hex": "1F5DE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "170",
			"Dingbat hex": "AA",
			"Unicode dec": "128479",
			"Unicode hex": "1F5DF"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "171",
			"Dingbat hex": "AB",
			"Unicode dec": "128451",
			"Unicode hex": "1F5C3"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "172",
			"Dingbat hex": "AC",
			"Unicode dec": "128450",
			"Unicode hex": "1F5C2"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "173",
			"Dingbat hex": "AD",
			"Unicode dec": "128444",
			"Unicode hex": "1F5BC"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "174",
			"Dingbat hex": "AE",
			"Unicode dec": "127917",
			"Unicode hex": "1F3AD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "175",
			"Dingbat hex": "AF",
			"Unicode dec": "127900",
			"Unicode hex": "1F39C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "176",
			"Dingbat hex": "B0",
			"Unicode dec": "127896",
			"Unicode hex": "1F398"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "177",
			"Dingbat hex": "B1",
			"Unicode dec": "127897",
			"Unicode hex": "1F399"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "178",
			"Dingbat hex": "B2",
			"Unicode dec": "127911",
			"Unicode hex": "1F3A7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "179",
			"Dingbat hex": "B3",
			"Unicode dec": "128191",
			"Unicode hex": "1F4BF"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "180",
			"Dingbat hex": "B4",
			"Unicode dec": "127902",
			"Unicode hex": "1F39E"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "181",
			"Dingbat hex": "B5",
			"Unicode dec": "128247",
			"Unicode hex": "1F4F7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "182",
			"Dingbat hex": "B6",
			"Unicode dec": "127903",
			"Unicode hex": "1F39F"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "183",
			"Dingbat hex": "B7",
			"Unicode dec": "127916",
			"Unicode hex": "1F3AC"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "184",
			"Dingbat hex": "B8",
			"Unicode dec": "128253",
			"Unicode hex": "1F4FD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "185",
			"Dingbat hex": "B9",
			"Unicode dec": "128249",
			"Unicode hex": "1F4F9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "186",
			"Dingbat hex": "BA",
			"Unicode dec": "128254",
			"Unicode hex": "1F4FE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "187",
			"Dingbat hex": "BB",
			"Unicode dec": "128251",
			"Unicode hex": "1F4FB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "188",
			"Dingbat hex": "BC",
			"Unicode dec": "127898",
			"Unicode hex": "1F39A"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "189",
			"Dingbat hex": "BD",
			"Unicode dec": "127899",
			"Unicode hex": "1F39B"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "190",
			"Dingbat hex": "BE",
			"Unicode dec": "128250",
			"Unicode hex": "1F4FA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "191",
			"Dingbat hex": "BF",
			"Unicode dec": "128187",
			"Unicode hex": "1F4BB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "192",
			"Dingbat hex": "C0",
			"Unicode dec": "128421",
			"Unicode hex": "1F5A5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "193",
			"Dingbat hex": "C1",
			"Unicode dec": "128422",
			"Unicode hex": "1F5A6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "194",
			"Dingbat hex": "C2",
			"Unicode dec": "128423",
			"Unicode hex": "1F5A7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "195",
			"Dingbat hex": "C3",
			"Unicode dec": "128377",
			"Unicode hex": "1F579"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "196",
			"Dingbat hex": "C4",
			"Unicode dec": "127918",
			"Unicode hex": "1F3AE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "197",
			"Dingbat hex": "C5",
			"Unicode dec": "128379",
			"Unicode hex": "1F57B"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "198",
			"Dingbat hex": "C6",
			"Unicode dec": "128380",
			"Unicode hex": "1F57C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "199",
			"Dingbat hex": "C7",
			"Unicode dec": "128223",
			"Unicode hex": "1F4DF"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "200",
			"Dingbat hex": "C8",
			"Unicode dec": "128385",
			"Unicode hex": "1F581"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "201",
			"Dingbat hex": "C9",
			"Unicode dec": "128384",
			"Unicode hex": "1F580"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "202",
			"Dingbat hex": "CA",
			"Unicode dec": "128424",
			"Unicode hex": "1F5A8"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "203",
			"Dingbat hex": "CB",
			"Unicode dec": "128425",
			"Unicode hex": "1F5A9"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "204",
			"Dingbat hex": "CC",
			"Unicode dec": "128447",
			"Unicode hex": "1F5BF"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "205",
			"Dingbat hex": "CD",
			"Unicode dec": "128426",
			"Unicode hex": "1F5AA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "206",
			"Dingbat hex": "CE",
			"Unicode dec": "128476",
			"Unicode hex": "1F5DC"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "207",
			"Dingbat hex": "CF",
			"Unicode dec": "128274",
			"Unicode hex": "1F512"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "208",
			"Dingbat hex": "D0",
			"Unicode dec": "128275",
			"Unicode hex": "1F513"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "209",
			"Dingbat hex": "D1",
			"Unicode dec": "128477",
			"Unicode hex": "1F5DD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "210",
			"Dingbat hex": "D2",
			"Unicode dec": "128229",
			"Unicode hex": "1F4E5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "211",
			"Dingbat hex": "D3",
			"Unicode dec": "128228",
			"Unicode hex": "1F4E4"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "212",
			"Dingbat hex": "D4",
			"Unicode dec": "128371",
			"Unicode hex": "1F573"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "213",
			"Dingbat hex": "D5",
			"Unicode dec": "127779",
			"Unicode hex": "1F323"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "214",
			"Dingbat hex": "D6",
			"Unicode dec": "127780",
			"Unicode hex": "1F324"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "215",
			"Dingbat hex": "D7",
			"Unicode dec": "127781",
			"Unicode hex": "1F325"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "216",
			"Dingbat hex": "D8",
			"Unicode dec": "127782",
			"Unicode hex": "1F326"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "217",
			"Dingbat hex": "D9",
			"Unicode dec": "9729",
			"Unicode hex": "2601"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "218",
			"Dingbat hex": "DA",
			"Unicode dec": "127784",
			"Unicode hex": "1F328"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "219",
			"Dingbat hex": "DB",
			"Unicode dec": "127783",
			"Unicode hex": "1F327"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "220",
			"Dingbat hex": "DC",
			"Unicode dec": "127785",
			"Unicode hex": "1F329"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "221",
			"Dingbat hex": "DD",
			"Unicode dec": "127786",
			"Unicode hex": "1F32A"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "222",
			"Dingbat hex": "DE",
			"Unicode dec": "127788",
			"Unicode hex": "1F32C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "223",
			"Dingbat hex": "DF",
			"Unicode dec": "127787",
			"Unicode hex": "1F32B"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "224",
			"Dingbat hex": "E0",
			"Unicode dec": "127772",
			"Unicode hex": "1F31C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "225",
			"Dingbat hex": "E1",
			"Unicode dec": "127777",
			"Unicode hex": "1F321"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "226",
			"Dingbat hex": "E2",
			"Unicode dec": "128715",
			"Unicode hex": "1F6CB"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "227",
			"Dingbat hex": "E3",
			"Unicode dec": "128719",
			"Unicode hex": "1F6CF"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "228",
			"Dingbat hex": "E4",
			"Unicode dec": "127869",
			"Unicode hex": "1F37D"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "229",
			"Dingbat hex": "E5",
			"Unicode dec": "127864",
			"Unicode hex": "1F378"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "230",
			"Dingbat hex": "E6",
			"Unicode dec": "128718",
			"Unicode hex": "1F6CE"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "231",
			"Dingbat hex": "E7",
			"Unicode dec": "128717",
			"Unicode hex": "1F6CD"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "232",
			"Dingbat hex": "E8",
			"Unicode dec": "9413",
			"Unicode hex": "24C5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "233",
			"Dingbat hex": "E9",
			"Unicode dec": "9855",
			"Unicode hex": "267F"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "234",
			"Dingbat hex": "EA",
			"Unicode dec": "128710",
			"Unicode hex": "1F6C6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "235",
			"Dingbat hex": "EB",
			"Unicode dec": "128392",
			"Unicode hex": "1F588"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "236",
			"Dingbat hex": "EC",
			"Unicode dec": "127891",
			"Unicode hex": "1F393"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "237",
			"Dingbat hex": "ED",
			"Unicode dec": "128484",
			"Unicode hex": "1F5E4"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "238",
			"Dingbat hex": "EE",
			"Unicode dec": "128485",
			"Unicode hex": "1F5E5"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "239",
			"Dingbat hex": "EF",
			"Unicode dec": "128486",
			"Unicode hex": "1F5E6"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "240",
			"Dingbat hex": "F0",
			"Unicode dec": "128487",
			"Unicode hex": "1F5E7"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "241",
			"Dingbat hex": "F1",
			"Unicode dec": "128746",
			"Unicode hex": "1F6EA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "242",
			"Dingbat hex": "F2",
			"Unicode dec": "128063",
			"Unicode hex": "1F43F"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "243",
			"Dingbat hex": "F3",
			"Unicode dec": "128038",
			"Unicode hex": "1F426"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "244",
			"Dingbat hex": "F4",
			"Unicode dec": "128031",
			"Unicode hex": "1F41F"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "245",
			"Dingbat hex": "F5",
			"Unicode dec": "128021",
			"Unicode hex": "1F415"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "246",
			"Dingbat hex": "F6",
			"Unicode dec": "128008",
			"Unicode hex": "1F408"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "247",
			"Dingbat hex": "F7",
			"Unicode dec": "128620",
			"Unicode hex": "1F66C"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "248",
			"Dingbat hex": "F8",
			"Unicode dec": "128622",
			"Unicode hex": "1F66E"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "249",
			"Dingbat hex": "F9",
			"Unicode dec": "128621",
			"Unicode hex": "1F66D"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "250",
			"Dingbat hex": "FA",
			"Unicode dec": "128623",
			"Unicode hex": "1F66F"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "251",
			"Dingbat hex": "FB",
			"Unicode dec": "128506",
			"Unicode hex": "1F5FA"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "252",
			"Dingbat hex": "FC",
			"Unicode dec": "127757",
			"Unicode hex": "1F30D"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "253",
			"Dingbat hex": "FD",
			"Unicode dec": "127759",
			"Unicode hex": "1F30F"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "254",
			"Dingbat hex": "FE",
			"Unicode dec": "127758",
			"Unicode hex": "1F30E"
		},
		{
			"Typeface name": "Webdings",
			"Dingbat dec": "255",
			"Dingbat hex": "FF",
			"Unicode dec": "128330",
			"Unicode hex": "1F54A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "32",
			"Dingbat hex": "20",
			"Unicode dec": "32",
			"Unicode hex": "20"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "33",
			"Dingbat hex": "21",
			"Unicode dec": "128393",
			"Unicode hex": "1F589"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "34",
			"Dingbat hex": "22",
			"Unicode dec": "9986",
			"Unicode hex": "2702"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "35",
			"Dingbat hex": "23",
			"Unicode dec": "9985",
			"Unicode hex": "2701"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "36",
			"Dingbat hex": "24",
			"Unicode dec": "128083",
			"Unicode hex": "1F453"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "37",
			"Dingbat hex": "25",
			"Unicode dec": "128365",
			"Unicode hex": "1F56D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "38",
			"Dingbat hex": "26",
			"Unicode dec": "128366",
			"Unicode hex": "1F56E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "39",
			"Dingbat hex": "27",
			"Unicode dec": "128367",
			"Unicode hex": "1F56F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "40",
			"Dingbat hex": "28",
			"Unicode dec": "128383",
			"Unicode hex": "1F57F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "41",
			"Dingbat hex": "29",
			"Unicode dec": "9990",
			"Unicode hex": "2706"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "42",
			"Dingbat hex": "2A",
			"Unicode dec": "128386",
			"Unicode hex": "1F582"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "43",
			"Dingbat hex": "2B",
			"Unicode dec": "128387",
			"Unicode hex": "1F583"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "44",
			"Dingbat hex": "2C",
			"Unicode dec": "128234",
			"Unicode hex": "1F4EA"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "45",
			"Dingbat hex": "2D",
			"Unicode dec": "128235",
			"Unicode hex": "1F4EB"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "46",
			"Dingbat hex": "2E",
			"Unicode dec": "128236",
			"Unicode hex": "1F4EC"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "47",
			"Dingbat hex": "2F",
			"Unicode dec": "128237",
			"Unicode hex": "1F4ED"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "48",
			"Dingbat hex": "30",
			"Unicode dec": "128448",
			"Unicode hex": "1F5C0"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "49",
			"Dingbat hex": "31",
			"Unicode dec": "128449",
			"Unicode hex": "1F5C1"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "50",
			"Dingbat hex": "32",
			"Unicode dec": "128462",
			"Unicode hex": "1F5CE"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "51",
			"Dingbat hex": "33",
			"Unicode dec": "128463",
			"Unicode hex": "1F5CF"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "52",
			"Dingbat hex": "34",
			"Unicode dec": "128464",
			"Unicode hex": "1F5D0"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "53",
			"Dingbat hex": "35",
			"Unicode dec": "128452",
			"Unicode hex": "1F5C4"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "54",
			"Dingbat hex": "36",
			"Unicode dec": "8987",
			"Unicode hex": "231B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "55",
			"Dingbat hex": "37",
			"Unicode dec": "128430",
			"Unicode hex": "1F5AE"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "56",
			"Dingbat hex": "38",
			"Unicode dec": "128432",
			"Unicode hex": "1F5B0"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "57",
			"Dingbat hex": "39",
			"Unicode dec": "128434",
			"Unicode hex": "1F5B2"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "58",
			"Dingbat hex": "3A",
			"Unicode dec": "128435",
			"Unicode hex": "1F5B3"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "59",
			"Dingbat hex": "3B",
			"Unicode dec": "128436",
			"Unicode hex": "1F5B4"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "60",
			"Dingbat hex": "3C",
			"Unicode dec": "128427",
			"Unicode hex": "1F5AB"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "61",
			"Dingbat hex": "3D",
			"Unicode dec": "128428",
			"Unicode hex": "1F5AC"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "62",
			"Dingbat hex": "3E",
			"Unicode dec": "9991",
			"Unicode hex": "2707"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "63",
			"Dingbat hex": "3F",
			"Unicode dec": "9997",
			"Unicode hex": "270D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "64",
			"Dingbat hex": "40",
			"Unicode dec": "128398",
			"Unicode hex": "1F58E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "65",
			"Dingbat hex": "41",
			"Unicode dec": "9996",
			"Unicode hex": "270C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "66",
			"Dingbat hex": "42",
			"Unicode dec": "128399",
			"Unicode hex": "1F58F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "67",
			"Dingbat hex": "43",
			"Unicode dec": "128077",
			"Unicode hex": "1F44D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "68",
			"Dingbat hex": "44",
			"Unicode dec": "128078",
			"Unicode hex": "1F44E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "69",
			"Dingbat hex": "45",
			"Unicode dec": "9756",
			"Unicode hex": "261C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "70",
			"Dingbat hex": "46",
			"Unicode dec": "9758",
			"Unicode hex": "261E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "71",
			"Dingbat hex": "47",
			"Unicode dec": "9757",
			"Unicode hex": "261D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "72",
			"Dingbat hex": "48",
			"Unicode dec": "9759",
			"Unicode hex": "261F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "73",
			"Dingbat hex": "49",
			"Unicode dec": "128400",
			"Unicode hex": "1F590"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "74",
			"Dingbat hex": "4A",
			"Unicode dec": "9786",
			"Unicode hex": "263A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "75",
			"Dingbat hex": "4B",
			"Unicode dec": "128528",
			"Unicode hex": "1F610"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "76",
			"Dingbat hex": "4C",
			"Unicode dec": "9785",
			"Unicode hex": "2639"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "77",
			"Dingbat hex": "4D",
			"Unicode dec": "128163",
			"Unicode hex": "1F4A3"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "78",
			"Dingbat hex": "4E",
			"Unicode dec": "128369",
			"Unicode hex": "1F571"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "79",
			"Dingbat hex": "4F",
			"Unicode dec": "127987",
			"Unicode hex": "1F3F3"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "80",
			"Dingbat hex": "50",
			"Unicode dec": "127985",
			"Unicode hex": "1F3F1"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "81",
			"Dingbat hex": "51",
			"Unicode dec": "9992",
			"Unicode hex": "2708"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "82",
			"Dingbat hex": "52",
			"Unicode dec": "9788",
			"Unicode hex": "263C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "83",
			"Dingbat hex": "53",
			"Unicode dec": "127778",
			"Unicode hex": "1F322"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "84",
			"Dingbat hex": "54",
			"Unicode dec": "10052",
			"Unicode hex": "2744"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "85",
			"Dingbat hex": "55",
			"Unicode dec": "128326",
			"Unicode hex": "1F546"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "86",
			"Dingbat hex": "56",
			"Unicode dec": "10014",
			"Unicode hex": "271E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "87",
			"Dingbat hex": "57",
			"Unicode dec": "128328",
			"Unicode hex": "1F548"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "88",
			"Dingbat hex": "58",
			"Unicode dec": "10016",
			"Unicode hex": "2720"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "89",
			"Dingbat hex": "59",
			"Unicode dec": "10017",
			"Unicode hex": "2721"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "90",
			"Dingbat hex": "5A",
			"Unicode dec": "9770",
			"Unicode hex": "262A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "91",
			"Dingbat hex": "5B",
			"Unicode dec": "9775",
			"Unicode hex": "262F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "92",
			"Dingbat hex": "5C",
			"Unicode dec": "128329",
			"Unicode hex": "1F549"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "93",
			"Dingbat hex": "5D",
			"Unicode dec": "9784",
			"Unicode hex": "2638"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "94",
			"Dingbat hex": "5E",
			"Unicode dec": "9800",
			"Unicode hex": "2648"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "95",
			"Dingbat hex": "5F",
			"Unicode dec": "9801",
			"Unicode hex": "2649"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "96",
			"Dingbat hex": "60",
			"Unicode dec": "9802",
			"Unicode hex": "264A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "97",
			"Dingbat hex": "61",
			"Unicode dec": "9803",
			"Unicode hex": "264B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "98",
			"Dingbat hex": "62",
			"Unicode dec": "9804",
			"Unicode hex": "264C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "99",
			"Dingbat hex": "63",
			"Unicode dec": "9805",
			"Unicode hex": "264D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "100",
			"Dingbat hex": "64",
			"Unicode dec": "9806",
			"Unicode hex": "264E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "101",
			"Dingbat hex": "65",
			"Unicode dec": "9807",
			"Unicode hex": "264F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "102",
			"Dingbat hex": "66",
			"Unicode dec": "9808",
			"Unicode hex": "2650"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "103",
			"Dingbat hex": "67",
			"Unicode dec": "9809",
			"Unicode hex": "2651"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "104",
			"Dingbat hex": "68",
			"Unicode dec": "9810",
			"Unicode hex": "2652"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "105",
			"Dingbat hex": "69",
			"Unicode dec": "9811",
			"Unicode hex": "2653"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "106",
			"Dingbat hex": "6A",
			"Unicode dec": "128624",
			"Unicode hex": "1F670"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "107",
			"Dingbat hex": "6B",
			"Unicode dec": "128629",
			"Unicode hex": "1F675"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "108",
			"Dingbat hex": "6C",
			"Unicode dec": "9899",
			"Unicode hex": "26AB"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "109",
			"Dingbat hex": "6D",
			"Unicode dec": "128318",
			"Unicode hex": "1F53E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "110",
			"Dingbat hex": "6E",
			"Unicode dec": "9724",
			"Unicode hex": "25FC"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "111",
			"Dingbat hex": "6F",
			"Unicode dec": "128911",
			"Unicode hex": "1F78F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "112",
			"Dingbat hex": "70",
			"Unicode dec": "128912",
			"Unicode hex": "1F790"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "113",
			"Dingbat hex": "71",
			"Unicode dec": "10065",
			"Unicode hex": "2751"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "114",
			"Dingbat hex": "72",
			"Unicode dec": "10066",
			"Unicode hex": "2752"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "115",
			"Dingbat hex": "73",
			"Unicode dec": "128927",
			"Unicode hex": "1F79F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "116",
			"Dingbat hex": "74",
			"Unicode dec": "10731",
			"Unicode hex": "29EB"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "117",
			"Dingbat hex": "75",
			"Unicode dec": "9670",
			"Unicode hex": "25C6"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "118",
			"Dingbat hex": "76",
			"Unicode dec": "10070",
			"Unicode hex": "2756"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "119",
			"Dingbat hex": "77",
			"Unicode dec": "11049",
			"Unicode hex": "2B29"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "120",
			"Dingbat hex": "78",
			"Unicode dec": "8999",
			"Unicode hex": "2327"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "121",
			"Dingbat hex": "79",
			"Unicode dec": "11193",
			"Unicode hex": "2BB9"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "122",
			"Dingbat hex": "7A",
			"Unicode dec": "8984",
			"Unicode hex": "2318"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "123",
			"Dingbat hex": "7B",
			"Unicode dec": "127989",
			"Unicode hex": "1F3F5"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "124",
			"Dingbat hex": "7C",
			"Unicode dec": "127990",
			"Unicode hex": "1F3F6"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "125",
			"Dingbat hex": "7D",
			"Unicode dec": "128630",
			"Unicode hex": "1F676"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "126",
			"Dingbat hex": "7E",
			"Unicode dec": "128631",
			"Unicode hex": "1F677"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "127",
			"Dingbat hex": "7F",
			"Unicode dec": "9647",
			"Unicode hex": "25AF"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "128",
			"Dingbat hex": "80",
			"Unicode dec": "127243",
			"Unicode hex": "1F10B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "129",
			"Dingbat hex": "81",
			"Unicode dec": "10112",
			"Unicode hex": "2780"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "130",
			"Dingbat hex": "82",
			"Unicode dec": "10113",
			"Unicode hex": "2781"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "131",
			"Dingbat hex": "83",
			"Unicode dec": "10114",
			"Unicode hex": "2782"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "132",
			"Dingbat hex": "84",
			"Unicode dec": "10115",
			"Unicode hex": "2783"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "133",
			"Dingbat hex": "85",
			"Unicode dec": "10116",
			"Unicode hex": "2784"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "134",
			"Dingbat hex": "86",
			"Unicode dec": "10117",
			"Unicode hex": "2785"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "135",
			"Dingbat hex": "87",
			"Unicode dec": "10118",
			"Unicode hex": "2786"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "136",
			"Dingbat hex": "88",
			"Unicode dec": "10119",
			"Unicode hex": "2787"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "137",
			"Dingbat hex": "89",
			"Unicode dec": "10120",
			"Unicode hex": "2788"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "138",
			"Dingbat hex": "8A",
			"Unicode dec": "10121",
			"Unicode hex": "2789"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "139",
			"Dingbat hex": "8B",
			"Unicode dec": "127244",
			"Unicode hex": "1F10C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "140",
			"Dingbat hex": "8C",
			"Unicode dec": "10122",
			"Unicode hex": "278A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "141",
			"Dingbat hex": "8D",
			"Unicode dec": "10123",
			"Unicode hex": "278B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "142",
			"Dingbat hex": "8E",
			"Unicode dec": "10124",
			"Unicode hex": "278C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "143",
			"Dingbat hex": "8F",
			"Unicode dec": "10125",
			"Unicode hex": "278D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "144",
			"Dingbat hex": "90",
			"Unicode dec": "10126",
			"Unicode hex": "278E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "145",
			"Dingbat hex": "91",
			"Unicode dec": "10127",
			"Unicode hex": "278F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "146",
			"Dingbat hex": "92",
			"Unicode dec": "10128",
			"Unicode hex": "2790"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "147",
			"Dingbat hex": "93",
			"Unicode dec": "10129",
			"Unicode hex": "2791"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "148",
			"Dingbat hex": "94",
			"Unicode dec": "10130",
			"Unicode hex": "2792"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "149",
			"Dingbat hex": "95",
			"Unicode dec": "10131",
			"Unicode hex": "2793"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "150",
			"Dingbat hex": "96",
			"Unicode dec": "128610",
			"Unicode hex": "1F662"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "151",
			"Dingbat hex": "97",
			"Unicode dec": "128608",
			"Unicode hex": "1F660"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "152",
			"Dingbat hex": "98",
			"Unicode dec": "128609",
			"Unicode hex": "1F661"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "153",
			"Dingbat hex": "99",
			"Unicode dec": "128611",
			"Unicode hex": "1F663"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "154",
			"Dingbat hex": "9A",
			"Unicode dec": "128606",
			"Unicode hex": "1F65E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "155",
			"Dingbat hex": "9B",
			"Unicode dec": "128604",
			"Unicode hex": "1F65C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "156",
			"Dingbat hex": "9C",
			"Unicode dec": "128605",
			"Unicode hex": "1F65D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "157",
			"Dingbat hex": "9D",
			"Unicode dec": "128607",
			"Unicode hex": "1F65F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "158",
			"Dingbat hex": "9E",
			"Unicode dec": "8729",
			"Unicode hex": "2219"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "159",
			"Dingbat hex": "9F",
			"Unicode dec": "8226",
			"Unicode hex": "2022"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "160",
			"Dingbat hex": "A0",
			"Unicode dec": "11037",
			"Unicode hex": "2B1D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "161",
			"Dingbat hex": "A1",
			"Unicode dec": "11096",
			"Unicode hex": "2B58"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "162",
			"Dingbat hex": "A2",
			"Unicode dec": "128902",
			"Unicode hex": "1F786"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "163",
			"Dingbat hex": "A3",
			"Unicode dec": "128904",
			"Unicode hex": "1F788"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "164",
			"Dingbat hex": "A4",
			"Unicode dec": "128906",
			"Unicode hex": "1F78A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "165",
			"Dingbat hex": "A5",
			"Unicode dec": "128907",
			"Unicode hex": "1F78B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "166",
			"Dingbat hex": "A6",
			"Unicode dec": "128319",
			"Unicode hex": "1F53F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "167",
			"Dingbat hex": "A7",
			"Unicode dec": "9642",
			"Unicode hex": "25AA"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "168",
			"Dingbat hex": "A8",
			"Unicode dec": "128910",
			"Unicode hex": "1F78E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "169",
			"Dingbat hex": "A9",
			"Unicode dec": "128961",
			"Unicode hex": "1F7C1"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "170",
			"Dingbat hex": "AA",
			"Unicode dec": "128965",
			"Unicode hex": "1F7C5"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "171",
			"Dingbat hex": "AB",
			"Unicode dec": "9733",
			"Unicode hex": "2605"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "172",
			"Dingbat hex": "AC",
			"Unicode dec": "128971",
			"Unicode hex": "1F7CB"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "173",
			"Dingbat hex": "AD",
			"Unicode dec": "128975",
			"Unicode hex": "1F7CF"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "174",
			"Dingbat hex": "AE",
			"Unicode dec": "128979",
			"Unicode hex": "1F7D3"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "175",
			"Dingbat hex": "AF",
			"Unicode dec": "128977",
			"Unicode hex": "1F7D1"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "176",
			"Dingbat hex": "B0",
			"Unicode dec": "11216",
			"Unicode hex": "2BD0"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "177",
			"Dingbat hex": "B1",
			"Unicode dec": "8982",
			"Unicode hex": "2316"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "178",
			"Dingbat hex": "B2",
			"Unicode dec": "11214",
			"Unicode hex": "2BCE"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "179",
			"Dingbat hex": "B3",
			"Unicode dec": "11215",
			"Unicode hex": "2BCF"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "180",
			"Dingbat hex": "B4",
			"Unicode dec": "11217",
			"Unicode hex": "2BD1"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "181",
			"Dingbat hex": "B5",
			"Unicode dec": "10026",
			"Unicode hex": "272A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "182",
			"Dingbat hex": "B6",
			"Unicode dec": "10032",
			"Unicode hex": "2730"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "183",
			"Dingbat hex": "B7",
			"Unicode dec": "128336",
			"Unicode hex": "1F550"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "184",
			"Dingbat hex": "B8",
			"Unicode dec": "128337",
			"Unicode hex": "1F551"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "185",
			"Dingbat hex": "B9",
			"Unicode dec": "128338",
			"Unicode hex": "1F552"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "186",
			"Dingbat hex": "BA",
			"Unicode dec": "128339",
			"Unicode hex": "1F553"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "187",
			"Dingbat hex": "BB",
			"Unicode dec": "128340",
			"Unicode hex": "1F554"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "188",
			"Dingbat hex": "BC",
			"Unicode dec": "128341",
			"Unicode hex": "1F555"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "189",
			"Dingbat hex": "BD",
			"Unicode dec": "128342",
			"Unicode hex": "1F556"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "190",
			"Dingbat hex": "BE",
			"Unicode dec": "128343",
			"Unicode hex": "1F557"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "191",
			"Dingbat hex": "BF",
			"Unicode dec": "128344",
			"Unicode hex": "1F558"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "192",
			"Dingbat hex": "C0",
			"Unicode dec": "128345",
			"Unicode hex": "1F559"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "193",
			"Dingbat hex": "C1",
			"Unicode dec": "128346",
			"Unicode hex": "1F55A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "194",
			"Dingbat hex": "C2",
			"Unicode dec": "128347",
			"Unicode hex": "1F55B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "195",
			"Dingbat hex": "C3",
			"Unicode dec": "11184",
			"Unicode hex": "2BB0"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "196",
			"Dingbat hex": "C4",
			"Unicode dec": "11185",
			"Unicode hex": "2BB1"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "197",
			"Dingbat hex": "C5",
			"Unicode dec": "11186",
			"Unicode hex": "2BB2"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "198",
			"Dingbat hex": "C6",
			"Unicode dec": "11187",
			"Unicode hex": "2BB3"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "199",
			"Dingbat hex": "C7",
			"Unicode dec": "11188",
			"Unicode hex": "2BB4"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "200",
			"Dingbat hex": "C8",
			"Unicode dec": "11189",
			"Unicode hex": "2BB5"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "201",
			"Dingbat hex": "C9",
			"Unicode dec": "11190",
			"Unicode hex": "2BB6"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "202",
			"Dingbat hex": "CA",
			"Unicode dec": "11191",
			"Unicode hex": "2BB7"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "203",
			"Dingbat hex": "CB",
			"Unicode dec": "128618",
			"Unicode hex": "1F66A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "204",
			"Dingbat hex": "CC",
			"Unicode dec": "128619",
			"Unicode hex": "1F66B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "205",
			"Dingbat hex": "CD",
			"Unicode dec": "128597",
			"Unicode hex": "1F655"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "206",
			"Dingbat hex": "CE",
			"Unicode dec": "128596",
			"Unicode hex": "1F654"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "207",
			"Dingbat hex": "CF",
			"Unicode dec": "128599",
			"Unicode hex": "1F657"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "208",
			"Dingbat hex": "D0",
			"Unicode dec": "128598",
			"Unicode hex": "1F656"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "209",
			"Dingbat hex": "D1",
			"Unicode dec": "128592",
			"Unicode hex": "1F650"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "210",
			"Dingbat hex": "D2",
			"Unicode dec": "128593",
			"Unicode hex": "1F651"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "211",
			"Dingbat hex": "D3",
			"Unicode dec": "128594",
			"Unicode hex": "1F652"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "212",
			"Dingbat hex": "D4",
			"Unicode dec": "128595",
			"Unicode hex": "1F653"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "213",
			"Dingbat hex": "D5",
			"Unicode dec": "9003",
			"Unicode hex": "232B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "214",
			"Dingbat hex": "D6",
			"Unicode dec": "8998",
			"Unicode hex": "2326"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "215",
			"Dingbat hex": "D7",
			"Unicode dec": "11160",
			"Unicode hex": "2B98"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "216",
			"Dingbat hex": "D8",
			"Unicode dec": "11162",
			"Unicode hex": "2B9A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "217",
			"Dingbat hex": "D9",
			"Unicode dec": "11161",
			"Unicode hex": "2B99"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "218",
			"Dingbat hex": "DA",
			"Unicode dec": "11163",
			"Unicode hex": "2B9B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "219",
			"Dingbat hex": "DB",
			"Unicode dec": "11144",
			"Unicode hex": "2B88"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "220",
			"Dingbat hex": "DC",
			"Unicode dec": "11146",
			"Unicode hex": "2B8A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "221",
			"Dingbat hex": "DD",
			"Unicode dec": "11145",
			"Unicode hex": "2B89"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "222",
			"Dingbat hex": "DE",
			"Unicode dec": "11147",
			"Unicode hex": "2B8B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "223",
			"Dingbat hex": "DF",
			"Unicode dec": "129128",
			"Unicode hex": "1F868"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "224",
			"Dingbat hex": "E0",
			"Unicode dec": "129130",
			"Unicode hex": "1F86A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "225",
			"Dingbat hex": "E1",
			"Unicode dec": "129129",
			"Unicode hex": "1F869"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "226",
			"Dingbat hex": "E2",
			"Unicode dec": "129131",
			"Unicode hex": "1F86B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "227",
			"Dingbat hex": "E3",
			"Unicode dec": "129132",
			"Unicode hex": "1F86C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "228",
			"Dingbat hex": "E4",
			"Unicode dec": "129133",
			"Unicode hex": "1F86D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "229",
			"Dingbat hex": "E5",
			"Unicode dec": "129135",
			"Unicode hex": "1F86F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "230",
			"Dingbat hex": "E6",
			"Unicode dec": "129134",
			"Unicode hex": "1F86E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "231",
			"Dingbat hex": "E7",
			"Unicode dec": "129144",
			"Unicode hex": "1F878"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "232",
			"Dingbat hex": "E8",
			"Unicode dec": "129146",
			"Unicode hex": "1F87A"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "233",
			"Dingbat hex": "E9",
			"Unicode dec": "129145",
			"Unicode hex": "1F879"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "234",
			"Dingbat hex": "EA",
			"Unicode dec": "129147",
			"Unicode hex": "1F87B"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "235",
			"Dingbat hex": "EB",
			"Unicode dec": "129148",
			"Unicode hex": "1F87C"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "236",
			"Dingbat hex": "EC",
			"Unicode dec": "129149",
			"Unicode hex": "1F87D"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "237",
			"Dingbat hex": "ED",
			"Unicode dec": "129151",
			"Unicode hex": "1F87F"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "238",
			"Dingbat hex": "EE",
			"Unicode dec": "129150",
			"Unicode hex": "1F87E"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "239",
			"Dingbat hex": "EF",
			"Unicode dec": "8678",
			"Unicode hex": "21E6"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "240",
			"Dingbat hex": "F0",
			"Unicode dec": "8680",
			"Unicode hex": "21E8"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "241",
			"Dingbat hex": "F1",
			"Unicode dec": "8679",
			"Unicode hex": "21E7"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "242",
			"Dingbat hex": "F2",
			"Unicode dec": "8681",
			"Unicode hex": "21E9"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "243",
			"Dingbat hex": "F3",
			"Unicode dec": "11012",
			"Unicode hex": "2B04"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "244",
			"Dingbat hex": "F4",
			"Unicode dec": "8691",
			"Unicode hex": "21F3"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "245",
			"Dingbat hex": "F5",
			"Unicode dec": "11009",
			"Unicode hex": "2B01"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "246",
			"Dingbat hex": "F6",
			"Unicode dec": "11008",
			"Unicode hex": "2B00"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "247",
			"Dingbat hex": "F7",
			"Unicode dec": "11011",
			"Unicode hex": "2B03"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "248",
			"Dingbat hex": "F8",
			"Unicode dec": "11010",
			"Unicode hex": "2B02"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "249",
			"Dingbat hex": "F9",
			"Unicode dec": "129196",
			"Unicode hex": "1F8AC"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "250",
			"Dingbat hex": "FA",
			"Unicode dec": "129197",
			"Unicode hex": "1F8AD"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "251",
			"Dingbat hex": "FB",
			"Unicode dec": "128502",
			"Unicode hex": "1F5F6"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "252",
			"Dingbat hex": "FC",
			"Unicode dec": "10003",
			"Unicode hex": "2713"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "253",
			"Dingbat hex": "FD",
			"Unicode dec": "128503",
			"Unicode hex": "1F5F7"
		},
		{
			"Typeface name": "Wingdings",
			"Dingbat dec": "254",
			"Dingbat hex": "FE",
			"Unicode dec": "128505",
			"Unicode hex": "1F5F9"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "32",
			"Dingbat hex": "20",
			"Unicode dec": "32",
			"Unicode hex": "20"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "33",
			"Dingbat hex": "21",
			"Unicode dec": "128394",
			"Unicode hex": "1F58A"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "34",
			"Dingbat hex": "22",
			"Unicode dec": "128395",
			"Unicode hex": "1F58B"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "35",
			"Dingbat hex": "23",
			"Unicode dec": "128396",
			"Unicode hex": "1F58C"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "36",
			"Dingbat hex": "24",
			"Unicode dec": "128397",
			"Unicode hex": "1F58D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "37",
			"Dingbat hex": "25",
			"Unicode dec": "9988",
			"Unicode hex": "2704"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "38",
			"Dingbat hex": "26",
			"Unicode dec": "9984",
			"Unicode hex": "2700"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "39",
			"Dingbat hex": "27",
			"Unicode dec": "128382",
			"Unicode hex": "1F57E"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "40",
			"Dingbat hex": "28",
			"Unicode dec": "128381",
			"Unicode hex": "1F57D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "41",
			"Dingbat hex": "29",
			"Unicode dec": "128453",
			"Unicode hex": "1F5C5"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "42",
			"Dingbat hex": "2A",
			"Unicode dec": "128454",
			"Unicode hex": "1F5C6"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "43",
			"Dingbat hex": "2B",
			"Unicode dec": "128455",
			"Unicode hex": "1F5C7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "44",
			"Dingbat hex": "2C",
			"Unicode dec": "128456",
			"Unicode hex": "1F5C8"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "45",
			"Dingbat hex": "2D",
			"Unicode dec": "128457",
			"Unicode hex": "1F5C9"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "46",
			"Dingbat hex": "2E",
			"Unicode dec": "128458",
			"Unicode hex": "1F5CA"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "47",
			"Dingbat hex": "2F",
			"Unicode dec": "128459",
			"Unicode hex": "1F5CB"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "48",
			"Dingbat hex": "30",
			"Unicode dec": "128460",
			"Unicode hex": "1F5CC"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "49",
			"Dingbat hex": "31",
			"Unicode dec": "128461",
			"Unicode hex": "1F5CD"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "50",
			"Dingbat hex": "32",
			"Unicode dec": "128203",
			"Unicode hex": "1F4CB"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "51",
			"Dingbat hex": "33",
			"Unicode dec": "128465",
			"Unicode hex": "1F5D1"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "52",
			"Dingbat hex": "34",
			"Unicode dec": "128468",
			"Unicode hex": "1F5D4"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "53",
			"Dingbat hex": "35",
			"Unicode dec": "128437",
			"Unicode hex": "1F5B5"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "54",
			"Dingbat hex": "36",
			"Unicode dec": "128438",
			"Unicode hex": "1F5B6"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "55",
			"Dingbat hex": "37",
			"Unicode dec": "128439",
			"Unicode hex": "1F5B7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "56",
			"Dingbat hex": "38",
			"Unicode dec": "128440",
			"Unicode hex": "1F5B8"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "57",
			"Dingbat hex": "39",
			"Unicode dec": "128429",
			"Unicode hex": "1F5AD"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "58",
			"Dingbat hex": "3A",
			"Unicode dec": "128431",
			"Unicode hex": "1F5AF"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "59",
			"Dingbat hex": "3B",
			"Unicode dec": "128433",
			"Unicode hex": "1F5B1"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "60",
			"Dingbat hex": "3C",
			"Unicode dec": "128402",
			"Unicode hex": "1F592"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "61",
			"Dingbat hex": "3D",
			"Unicode dec": "128403",
			"Unicode hex": "1F593"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "62",
			"Dingbat hex": "3E",
			"Unicode dec": "128408",
			"Unicode hex": "1F598"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "63",
			"Dingbat hex": "3F",
			"Unicode dec": "128409",
			"Unicode hex": "1F599"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "64",
			"Dingbat hex": "40",
			"Unicode dec": "128410",
			"Unicode hex": "1F59A"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "65",
			"Dingbat hex": "41",
			"Unicode dec": "128411",
			"Unicode hex": "1F59B"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "66",
			"Dingbat hex": "42",
			"Unicode dec": "128072",
			"Unicode hex": "1F448"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "67",
			"Dingbat hex": "43",
			"Unicode dec": "128073",
			"Unicode hex": "1F449"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "68",
			"Dingbat hex": "44",
			"Unicode dec": "128412",
			"Unicode hex": "1F59C"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "69",
			"Dingbat hex": "45",
			"Unicode dec": "128413",
			"Unicode hex": "1F59D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "70",
			"Dingbat hex": "46",
			"Unicode dec": "128414",
			"Unicode hex": "1F59E"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "71",
			"Dingbat hex": "47",
			"Unicode dec": "128415",
			"Unicode hex": "1F59F"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "72",
			"Dingbat hex": "48",
			"Unicode dec": "128416",
			"Unicode hex": "1F5A0"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "73",
			"Dingbat hex": "49",
			"Unicode dec": "128417",
			"Unicode hex": "1F5A1"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "74",
			"Dingbat hex": "4A",
			"Unicode dec": "128070",
			"Unicode hex": "1F446"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "75",
			"Dingbat hex": "4B",
			"Unicode dec": "128071",
			"Unicode hex": "1F447"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "76",
			"Dingbat hex": "4C",
			"Unicode dec": "128418",
			"Unicode hex": "1F5A2"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "77",
			"Dingbat hex": "4D",
			"Unicode dec": "128419",
			"Unicode hex": "1F5A3"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "78",
			"Dingbat hex": "4E",
			"Unicode dec": "128401",
			"Unicode hex": "1F591"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "79",
			"Dingbat hex": "4F",
			"Unicode dec": "128500",
			"Unicode hex": "1F5F4"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "80",
			"Dingbat hex": "50",
			"Unicode dec": "128504",
			"Unicode hex": "1F5F8"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "81",
			"Dingbat hex": "51",
			"Unicode dec": "128501",
			"Unicode hex": "1F5F5"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "82",
			"Dingbat hex": "52",
			"Unicode dec": "9745",
			"Unicode hex": "2611"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "83",
			"Dingbat hex": "53",
			"Unicode dec": "11197",
			"Unicode hex": "2BBD"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "84",
			"Dingbat hex": "54",
			"Unicode dec": "9746",
			"Unicode hex": "2612"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "85",
			"Dingbat hex": "55",
			"Unicode dec": "11198",
			"Unicode hex": "2BBE"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "86",
			"Dingbat hex": "56",
			"Unicode dec": "11199",
			"Unicode hex": "2BBF"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "87",
			"Dingbat hex": "57",
			"Unicode dec": "128711",
			"Unicode hex": "1F6C7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "88",
			"Dingbat hex": "58",
			"Unicode dec": "10680",
			"Unicode hex": "29B8"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "89",
			"Dingbat hex": "59",
			"Unicode dec": "128625",
			"Unicode hex": "1F671"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "90",
			"Dingbat hex": "5A",
			"Unicode dec": "128628",
			"Unicode hex": "1F674"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "91",
			"Dingbat hex": "5B",
			"Unicode dec": "128626",
			"Unicode hex": "1F672"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "92",
			"Dingbat hex": "5C",
			"Unicode dec": "128627",
			"Unicode hex": "1F673"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "93",
			"Dingbat hex": "5D",
			"Unicode dec": "8253",
			"Unicode hex": "203D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "94",
			"Dingbat hex": "5E",
			"Unicode dec": "128633",
			"Unicode hex": "1F679"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "95",
			"Dingbat hex": "5F",
			"Unicode dec": "128634",
			"Unicode hex": "1F67A"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "96",
			"Dingbat hex": "60",
			"Unicode dec": "128635",
			"Unicode hex": "1F67B"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "97",
			"Dingbat hex": "61",
			"Unicode dec": "128614",
			"Unicode hex": "1F666"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "98",
			"Dingbat hex": "62",
			"Unicode dec": "128612",
			"Unicode hex": "1F664"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "99",
			"Dingbat hex": "63",
			"Unicode dec": "128613",
			"Unicode hex": "1F665"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "100",
			"Dingbat hex": "64",
			"Unicode dec": "128615",
			"Unicode hex": "1F667"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "101",
			"Dingbat hex": "65",
			"Unicode dec": "128602",
			"Unicode hex": "1F65A"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "102",
			"Dingbat hex": "66",
			"Unicode dec": "128600",
			"Unicode hex": "1F658"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "103",
			"Dingbat hex": "67",
			"Unicode dec": "128601",
			"Unicode hex": "1F659"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "104",
			"Dingbat hex": "68",
			"Unicode dec": "128603",
			"Unicode hex": "1F65B"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "105",
			"Dingbat hex": "69",
			"Unicode dec": "9450",
			"Unicode hex": "24EA"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "106",
			"Dingbat hex": "6A",
			"Unicode dec": "9312",
			"Unicode hex": "2460"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "107",
			"Dingbat hex": "6B",
			"Unicode dec": "9313",
			"Unicode hex": "2461"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "108",
			"Dingbat hex": "6C",
			"Unicode dec": "9314",
			"Unicode hex": "2462"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "109",
			"Dingbat hex": "6D",
			"Unicode dec": "9315",
			"Unicode hex": "2463"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "110",
			"Dingbat hex": "6E",
			"Unicode dec": "9316",
			"Unicode hex": "2464"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "111",
			"Dingbat hex": "6F",
			"Unicode dec": "9317",
			"Unicode hex": "2465"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "112",
			"Dingbat hex": "70",
			"Unicode dec": "9318",
			"Unicode hex": "2466"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "113",
			"Dingbat hex": "71",
			"Unicode dec": "9319",
			"Unicode hex": "2467"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "114",
			"Dingbat hex": "72",
			"Unicode dec": "9320",
			"Unicode hex": "2468"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "115",
			"Dingbat hex": "73",
			"Unicode dec": "9321",
			"Unicode hex": "2469"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "116",
			"Dingbat hex": "74",
			"Unicode dec": "9471",
			"Unicode hex": "24FF"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "117",
			"Dingbat hex": "75",
			"Unicode dec": "10102",
			"Unicode hex": "2776"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "118",
			"Dingbat hex": "76",
			"Unicode dec": "10103",
			"Unicode hex": "2777"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "119",
			"Dingbat hex": "77",
			"Unicode dec": "10104",
			"Unicode hex": "2778"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "120",
			"Dingbat hex": "78",
			"Unicode dec": "10105",
			"Unicode hex": "2779"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "121",
			"Dingbat hex": "79",
			"Unicode dec": "10106",
			"Unicode hex": "277A"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "122",
			"Dingbat hex": "7A",
			"Unicode dec": "10107",
			"Unicode hex": "277B"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "123",
			"Dingbat hex": "7B",
			"Unicode dec": "10108",
			"Unicode hex": "277C"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "124",
			"Dingbat hex": "7C",
			"Unicode dec": "10109",
			"Unicode hex": "277D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "125",
			"Dingbat hex": "7D",
			"Unicode dec": "10110",
			"Unicode hex": "277E"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "126",
			"Dingbat hex": "7E",
			"Unicode dec": "10111",
			"Unicode hex": "277F"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "128",
			"Dingbat hex": "80",
			"Unicode dec": "9737",
			"Unicode hex": "2609"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "129",
			"Dingbat hex": "81",
			"Unicode dec": "127765",
			"Unicode hex": "1F315"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "130",
			"Dingbat hex": "82",
			"Unicode dec": "9789",
			"Unicode hex": "263D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "131",
			"Dingbat hex": "83",
			"Unicode dec": "9790",
			"Unicode hex": "263E"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "132",
			"Dingbat hex": "84",
			"Unicode dec": "11839",
			"Unicode hex": "2E3F"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "133",
			"Dingbat hex": "85",
			"Unicode dec": "10013",
			"Unicode hex": "271D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "134",
			"Dingbat hex": "86",
			"Unicode dec": "128327",
			"Unicode hex": "1F547"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "135",
			"Dingbat hex": "87",
			"Unicode dec": "128348",
			"Unicode hex": "1F55C"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "136",
			"Dingbat hex": "88",
			"Unicode dec": "128349",
			"Unicode hex": "1F55D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "137",
			"Dingbat hex": "89",
			"Unicode dec": "128350",
			"Unicode hex": "1F55E"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "138",
			"Dingbat hex": "8A",
			"Unicode dec": "128351",
			"Unicode hex": "1F55F"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "139",
			"Dingbat hex": "8B",
			"Unicode dec": "128352",
			"Unicode hex": "1F560"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "140",
			"Dingbat hex": "8C",
			"Unicode dec": "128353",
			"Unicode hex": "1F561"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "141",
			"Dingbat hex": "8D",
			"Unicode dec": "128354",
			"Unicode hex": "1F562"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "142",
			"Dingbat hex": "8E",
			"Unicode dec": "128355",
			"Unicode hex": "1F563"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "143",
			"Dingbat hex": "8F",
			"Unicode dec": "128356",
			"Unicode hex": "1F564"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "144",
			"Dingbat hex": "90",
			"Unicode dec": "128357",
			"Unicode hex": "1F565"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "145",
			"Dingbat hex": "91",
			"Unicode dec": "128358",
			"Unicode hex": "1F566"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "146",
			"Dingbat hex": "92",
			"Unicode dec": "128359",
			"Unicode hex": "1F567"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "147",
			"Dingbat hex": "93",
			"Unicode dec": "128616",
			"Unicode hex": "1F668"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "148",
			"Dingbat hex": "94",
			"Unicode dec": "128617",
			"Unicode hex": "1F669"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "149",
			"Dingbat hex": "95",
			"Unicode dec": "8901",
			"Unicode hex": "22C5"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "150",
			"Dingbat hex": "96",
			"Unicode dec": "128900",
			"Unicode hex": "1F784"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "151",
			"Dingbat hex": "97",
			"Unicode dec": "10625",
			"Unicode hex": "2981"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "152",
			"Dingbat hex": "98",
			"Unicode dec": "9679",
			"Unicode hex": "25CF"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "153",
			"Dingbat hex": "99",
			"Unicode dec": "9675",
			"Unicode hex": "25CB"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "154",
			"Dingbat hex": "9A",
			"Unicode dec": "128901",
			"Unicode hex": "1F785"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "155",
			"Dingbat hex": "9B",
			"Unicode dec": "128903",
			"Unicode hex": "1F787"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "156",
			"Dingbat hex": "9C",
			"Unicode dec": "128905",
			"Unicode hex": "1F789"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "157",
			"Dingbat hex": "9D",
			"Unicode dec": "8857",
			"Unicode hex": "2299"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "158",
			"Dingbat hex": "9E",
			"Unicode dec": "10687",
			"Unicode hex": "29BF"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "159",
			"Dingbat hex": "9F",
			"Unicode dec": "128908",
			"Unicode hex": "1F78C"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "160",
			"Dingbat hex": "A0",
			"Unicode dec": "128909",
			"Unicode hex": "1F78D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "161",
			"Dingbat hex": "A1",
			"Unicode dec": "9726",
			"Unicode hex": "25FE"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "162",
			"Dingbat hex": "A2",
			"Unicode dec": "9632",
			"Unicode hex": "25A0"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "163",
			"Dingbat hex": "A3",
			"Unicode dec": "9633",
			"Unicode hex": "25A1"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "164",
			"Dingbat hex": "A4",
			"Unicode dec": "128913",
			"Unicode hex": "1F791"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "165",
			"Dingbat hex": "A5",
			"Unicode dec": "128914",
			"Unicode hex": "1F792"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "166",
			"Dingbat hex": "A6",
			"Unicode dec": "128915",
			"Unicode hex": "1F793"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "167",
			"Dingbat hex": "A7",
			"Unicode dec": "128916",
			"Unicode hex": "1F794"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "168",
			"Dingbat hex": "A8",
			"Unicode dec": "9635",
			"Unicode hex": "25A3"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "169",
			"Dingbat hex": "A9",
			"Unicode dec": "128917",
			"Unicode hex": "1F795"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "170",
			"Dingbat hex": "AA",
			"Unicode dec": "128918",
			"Unicode hex": "1F796"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "171",
			"Dingbat hex": "AB",
			"Unicode dec": "128919",
			"Unicode hex": "1F797"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "172",
			"Dingbat hex": "AC",
			"Unicode dec": "128920",
			"Unicode hex": "1F798"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "173",
			"Dingbat hex": "AD",
			"Unicode dec": "11049",
			"Unicode hex": "2B29"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "174",
			"Dingbat hex": "AE",
			"Unicode dec": "11045",
			"Unicode hex": "2B25"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "175",
			"Dingbat hex": "AF",
			"Unicode dec": "9671",
			"Unicode hex": "25C7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "176",
			"Dingbat hex": "B0",
			"Unicode dec": "128922",
			"Unicode hex": "1F79A"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "177",
			"Dingbat hex": "B1",
			"Unicode dec": "9672",
			"Unicode hex": "25C8"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "178",
			"Dingbat hex": "B2",
			"Unicode dec": "128923",
			"Unicode hex": "1F79B"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "179",
			"Dingbat hex": "B3",
			"Unicode dec": "128924",
			"Unicode hex": "1F79C"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "180",
			"Dingbat hex": "B4",
			"Unicode dec": "128925",
			"Unicode hex": "1F79D"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "181",
			"Dingbat hex": "B5",
			"Unicode dec": "128926",
			"Unicode hex": "1F79E"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "182",
			"Dingbat hex": "B6",
			"Unicode dec": "11050",
			"Unicode hex": "2B2A"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "183",
			"Dingbat hex": "B7",
			"Unicode dec": "11047",
			"Unicode hex": "2B27"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "184",
			"Dingbat hex": "B8",
			"Unicode dec": "9674",
			"Unicode hex": "25CA"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "185",
			"Dingbat hex": "B9",
			"Unicode dec": "128928",
			"Unicode hex": "1F7A0"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "186",
			"Dingbat hex": "BA",
			"Unicode dec": "9686",
			"Unicode hex": "25D6"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "187",
			"Dingbat hex": "BB",
			"Unicode dec": "9687",
			"Unicode hex": "25D7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "188",
			"Dingbat hex": "BC",
			"Unicode dec": "11210",
			"Unicode hex": "2BCA"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "189",
			"Dingbat hex": "BD",
			"Unicode dec": "11211",
			"Unicode hex": "2BCB"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "190",
			"Dingbat hex": "BE",
			"Unicode dec": "11200",
			"Unicode hex": "2BC0"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "191",
			"Dingbat hex": "BF",
			"Unicode dec": "11201",
			"Unicode hex": "2BC1"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "192",
			"Dingbat hex": "C0",
			"Unicode dec": "11039",
			"Unicode hex": "2B1F"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "193",
			"Dingbat hex": "C1",
			"Unicode dec": "11202",
			"Unicode hex": "2BC2"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "194",
			"Dingbat hex": "C2",
			"Unicode dec": "11043",
			"Unicode hex": "2B23"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "195",
			"Dingbat hex": "C3",
			"Unicode dec": "11042",
			"Unicode hex": "2B22"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "196",
			"Dingbat hex": "C4",
			"Unicode dec": "11203",
			"Unicode hex": "2BC3"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "197",
			"Dingbat hex": "C5",
			"Unicode dec": "11204",
			"Unicode hex": "2BC4"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "198",
			"Dingbat hex": "C6",
			"Unicode dec": "128929",
			"Unicode hex": "1F7A1"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "199",
			"Dingbat hex": "C7",
			"Unicode dec": "128930",
			"Unicode hex": "1F7A2"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "200",
			"Dingbat hex": "C8",
			"Unicode dec": "128931",
			"Unicode hex": "1F7A3"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "201",
			"Dingbat hex": "C9",
			"Unicode dec": "128932",
			"Unicode hex": "1F7A4"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "202",
			"Dingbat hex": "CA",
			"Unicode dec": "128933",
			"Unicode hex": "1F7A5"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "203",
			"Dingbat hex": "CB",
			"Unicode dec": "128934",
			"Unicode hex": "1F7A6"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "204",
			"Dingbat hex": "CC",
			"Unicode dec": "128935",
			"Unicode hex": "1F7A7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "205",
			"Dingbat hex": "CD",
			"Unicode dec": "128936",
			"Unicode hex": "1F7A8"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "206",
			"Dingbat hex": "CE",
			"Unicode dec": "128937",
			"Unicode hex": "1F7A9"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "207",
			"Dingbat hex": "CF",
			"Unicode dec": "128938",
			"Unicode hex": "1F7AA"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "208",
			"Dingbat hex": "D0",
			"Unicode dec": "128939",
			"Unicode hex": "1F7AB"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "209",
			"Dingbat hex": "D1",
			"Unicode dec": "128940",
			"Unicode hex": "1F7AC"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "210",
			"Dingbat hex": "D2",
			"Unicode dec": "128941",
			"Unicode hex": "1F7AD"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "211",
			"Dingbat hex": "D3",
			"Unicode dec": "128942",
			"Unicode hex": "1F7AE"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "212",
			"Dingbat hex": "D4",
			"Unicode dec": "128943",
			"Unicode hex": "1F7AF"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "213",
			"Dingbat hex": "D5",
			"Unicode dec": "128944",
			"Unicode hex": "1F7B0"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "214",
			"Dingbat hex": "D6",
			"Unicode dec": "128945",
			"Unicode hex": "1F7B1"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "215",
			"Dingbat hex": "D7",
			"Unicode dec": "128946",
			"Unicode hex": "1F7B2"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "216",
			"Dingbat hex": "D8",
			"Unicode dec": "128947",
			"Unicode hex": "1F7B3"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "217",
			"Dingbat hex": "D9",
			"Unicode dec": "128948",
			"Unicode hex": "1F7B4"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "218",
			"Dingbat hex": "DA",
			"Unicode dec": "128949",
			"Unicode hex": "1F7B5"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "219",
			"Dingbat hex": "DB",
			"Unicode dec": "128950",
			"Unicode hex": "1F7B6"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "220",
			"Dingbat hex": "DC",
			"Unicode dec": "128951",
			"Unicode hex": "1F7B7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "221",
			"Dingbat hex": "DD",
			"Unicode dec": "128952",
			"Unicode hex": "1F7B8"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "222",
			"Dingbat hex": "DE",
			"Unicode dec": "128953",
			"Unicode hex": "1F7B9"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "223",
			"Dingbat hex": "DF",
			"Unicode dec": "128954",
			"Unicode hex": "1F7BA"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "224",
			"Dingbat hex": "E0",
			"Unicode dec": "128955",
			"Unicode hex": "1F7BB"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "225",
			"Dingbat hex": "E1",
			"Unicode dec": "128956",
			"Unicode hex": "1F7BC"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "226",
			"Dingbat hex": "E2",
			"Unicode dec": "128957",
			"Unicode hex": "1F7BD"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "227",
			"Dingbat hex": "E3",
			"Unicode dec": "128958",
			"Unicode hex": "1F7BE"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "228",
			"Dingbat hex": "E4",
			"Unicode dec": "128959",
			"Unicode hex": "1F7BF"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "229",
			"Dingbat hex": "E5",
			"Unicode dec": "128960",
			"Unicode hex": "1F7C0"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "230",
			"Dingbat hex": "E6",
			"Unicode dec": "128962",
			"Unicode hex": "1F7C2"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "231",
			"Dingbat hex": "E7",
			"Unicode dec": "128964",
			"Unicode hex": "1F7C4"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "232",
			"Dingbat hex": "E8",
			"Unicode dec": "128966",
			"Unicode hex": "1F7C6"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "233",
			"Dingbat hex": "E9",
			"Unicode dec": "128969",
			"Unicode hex": "1F7C9"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "234",
			"Dingbat hex": "EA",
			"Unicode dec": "128970",
			"Unicode hex": "1F7CA"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "235",
			"Dingbat hex": "EB",
			"Unicode dec": "10038",
			"Unicode hex": "2736"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "236",
			"Dingbat hex": "EC",
			"Unicode dec": "128972",
			"Unicode hex": "1F7CC"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "237",
			"Dingbat hex": "ED",
			"Unicode dec": "128974",
			"Unicode hex": "1F7CE"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "238",
			"Dingbat hex": "EE",
			"Unicode dec": "128976",
			"Unicode hex": "1F7D0"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "239",
			"Dingbat hex": "EF",
			"Unicode dec": "128978",
			"Unicode hex": "1F7D2"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "240",
			"Dingbat hex": "F0",
			"Unicode dec": "10041",
			"Unicode hex": "2739"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "241",
			"Dingbat hex": "F1",
			"Unicode dec": "128963",
			"Unicode hex": "1F7C3"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "242",
			"Dingbat hex": "F2",
			"Unicode dec": "128967",
			"Unicode hex": "1F7C7"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "243",
			"Dingbat hex": "F3",
			"Unicode dec": "10031",
			"Unicode hex": "272F"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "244",
			"Dingbat hex": "F4",
			"Unicode dec": "128973",
			"Unicode hex": "1F7CD"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "245",
			"Dingbat hex": "F5",
			"Unicode dec": "128980",
			"Unicode hex": "1F7D4"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "246",
			"Dingbat hex": "F6",
			"Unicode dec": "11212",
			"Unicode hex": "2BCC"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "247",
			"Dingbat hex": "F7",
			"Unicode dec": "11213",
			"Unicode hex": "2BCD"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "248",
			"Dingbat hex": "F8",
			"Unicode dec": "8251",
			"Unicode hex": "203B"
		},
		{
			"Typeface name": "Wingdings 2",
			"Dingbat dec": "249",
			"Dingbat hex": "F9",
			"Unicode dec": "8258",
			"Unicode hex": "2042"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "32",
			"Dingbat hex": "20",
			"Unicode dec": "32",
			"Unicode hex": "20"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "33",
			"Dingbat hex": "21",
			"Unicode dec": "11104",
			"Unicode hex": "2B60"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "34",
			"Dingbat hex": "22",
			"Unicode dec": "11106",
			"Unicode hex": "2B62"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "35",
			"Dingbat hex": "23",
			"Unicode dec": "11105",
			"Unicode hex": "2B61"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "36",
			"Dingbat hex": "24",
			"Unicode dec": "11107",
			"Unicode hex": "2B63"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "37",
			"Dingbat hex": "25",
			"Unicode dec": "11110",
			"Unicode hex": "2B66"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "38",
			"Dingbat hex": "26",
			"Unicode dec": "11111",
			"Unicode hex": "2B67"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "39",
			"Dingbat hex": "27",
			"Unicode dec": "11113",
			"Unicode hex": "2B69"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "40",
			"Dingbat hex": "28",
			"Unicode dec": "11112",
			"Unicode hex": "2B68"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "41",
			"Dingbat hex": "29",
			"Unicode dec": "11120",
			"Unicode hex": "2B70"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "42",
			"Dingbat hex": "2A",
			"Unicode dec": "11122",
			"Unicode hex": "2B72"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "43",
			"Dingbat hex": "2B",
			"Unicode dec": "11121",
			"Unicode hex": "2B71"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "44",
			"Dingbat hex": "2C",
			"Unicode dec": "11123",
			"Unicode hex": "2B73"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "45",
			"Dingbat hex": "2D",
			"Unicode dec": "11126",
			"Unicode hex": "2B76"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "46",
			"Dingbat hex": "2E",
			"Unicode dec": "11128",
			"Unicode hex": "2B78"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "47",
			"Dingbat hex": "2F",
			"Unicode dec": "11131",
			"Unicode hex": "2B7B"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "48",
			"Dingbat hex": "30",
			"Unicode dec": "11133",
			"Unicode hex": "2B7D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "49",
			"Dingbat hex": "31",
			"Unicode dec": "11108",
			"Unicode hex": "2B64"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "50",
			"Dingbat hex": "32",
			"Unicode dec": "11109",
			"Unicode hex": "2B65"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "51",
			"Dingbat hex": "33",
			"Unicode dec": "11114",
			"Unicode hex": "2B6A"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "52",
			"Dingbat hex": "34",
			"Unicode dec": "11116",
			"Unicode hex": "2B6C"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "53",
			"Dingbat hex": "35",
			"Unicode dec": "11115",
			"Unicode hex": "2B6B"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "54",
			"Dingbat hex": "36",
			"Unicode dec": "11117",
			"Unicode hex": "2B6D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "55",
			"Dingbat hex": "37",
			"Unicode dec": "11085",
			"Unicode hex": "2B4D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "56",
			"Dingbat hex": "38",
			"Unicode dec": "11168",
			"Unicode hex": "2BA0"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "57",
			"Dingbat hex": "39",
			"Unicode dec": "11169",
			"Unicode hex": "2BA1"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "58",
			"Dingbat hex": "3A",
			"Unicode dec": "11170",
			"Unicode hex": "2BA2"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "59",
			"Dingbat hex": "3B",
			"Unicode dec": "11171",
			"Unicode hex": "2BA3"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "60",
			"Dingbat hex": "3C",
			"Unicode dec": "11172",
			"Unicode hex": "2BA4"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "61",
			"Dingbat hex": "3D",
			"Unicode dec": "11173",
			"Unicode hex": "2BA5"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "62",
			"Dingbat hex": "3E",
			"Unicode dec": "11174",
			"Unicode hex": "2BA6"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "63",
			"Dingbat hex": "3F",
			"Unicode dec": "11175",
			"Unicode hex": "2BA7"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "64",
			"Dingbat hex": "40",
			"Unicode dec": "11152",
			"Unicode hex": "2B90"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "65",
			"Dingbat hex": "41",
			"Unicode dec": "11153",
			"Unicode hex": "2B91"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "66",
			"Dingbat hex": "42",
			"Unicode dec": "11154",
			"Unicode hex": "2B92"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "67",
			"Dingbat hex": "43",
			"Unicode dec": "11155",
			"Unicode hex": "2B93"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "68",
			"Dingbat hex": "44",
			"Unicode dec": "11136",
			"Unicode hex": "2B80"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "69",
			"Dingbat hex": "45",
			"Unicode dec": "11139",
			"Unicode hex": "2B83"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "70",
			"Dingbat hex": "46",
			"Unicode dec": "11134",
			"Unicode hex": "2B7E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "71",
			"Dingbat hex": "47",
			"Unicode dec": "11135",
			"Unicode hex": "2B7F"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "72",
			"Dingbat hex": "48",
			"Unicode dec": "11140",
			"Unicode hex": "2B84"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "73",
			"Dingbat hex": "49",
			"Unicode dec": "11142",
			"Unicode hex": "2B86"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "74",
			"Dingbat hex": "4A",
			"Unicode dec": "11141",
			"Unicode hex": "2B85"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "75",
			"Dingbat hex": "4B",
			"Unicode dec": "11143",
			"Unicode hex": "2B87"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "76",
			"Dingbat hex": "4C",
			"Unicode dec": "11151",
			"Unicode hex": "2B8F"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "77",
			"Dingbat hex": "4D",
			"Unicode dec": "11149",
			"Unicode hex": "2B8D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "78",
			"Dingbat hex": "4E",
			"Unicode dec": "11150",
			"Unicode hex": "2B8E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "79",
			"Dingbat hex": "4F",
			"Unicode dec": "11148",
			"Unicode hex": "2B8C"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "80",
			"Dingbat hex": "50",
			"Unicode dec": "11118",
			"Unicode hex": "2B6E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "81",
			"Dingbat hex": "51",
			"Unicode dec": "11119",
			"Unicode hex": "2B6F"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "82",
			"Dingbat hex": "52",
			"Unicode dec": "9099",
			"Unicode hex": "238B"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "83",
			"Dingbat hex": "53",
			"Unicode dec": "8996",
			"Unicode hex": "2324"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "84",
			"Dingbat hex": "54",
			"Unicode dec": "8963",
			"Unicode hex": "2303"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "85",
			"Dingbat hex": "55",
			"Unicode dec": "8997",
			"Unicode hex": "2325"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "86",
			"Dingbat hex": "56",
			"Unicode dec": "9251",
			"Unicode hex": "2423"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "87",
			"Dingbat hex": "57",
			"Unicode dec": "9085",
			"Unicode hex": "237D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "88",
			"Dingbat hex": "58",
			"Unicode dec": "8682",
			"Unicode hex": "21EA"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "89",
			"Dingbat hex": "59",
			"Unicode dec": "11192",
			"Unicode hex": "2BB8"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "90",
			"Dingbat hex": "5A",
			"Unicode dec": "129184",
			"Unicode hex": "1F8A0"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "91",
			"Dingbat hex": "5B",
			"Unicode dec": "129185",
			"Unicode hex": "1F8A1"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "92",
			"Dingbat hex": "5C",
			"Unicode dec": "129186",
			"Unicode hex": "1F8A2"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "93",
			"Dingbat hex": "5D",
			"Unicode dec": "129187",
			"Unicode hex": "1F8A3"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "94",
			"Dingbat hex": "5E",
			"Unicode dec": "129188",
			"Unicode hex": "1F8A4"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "95",
			"Dingbat hex": "5F",
			"Unicode dec": "129189",
			"Unicode hex": "1F8A5"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "96",
			"Dingbat hex": "60",
			"Unicode dec": "129190",
			"Unicode hex": "1F8A6"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "97",
			"Dingbat hex": "61",
			"Unicode dec": "129191",
			"Unicode hex": "1F8A7"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "98",
			"Dingbat hex": "62",
			"Unicode dec": "129192",
			"Unicode hex": "1F8A8"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "99",
			"Dingbat hex": "63",
			"Unicode dec": "129193",
			"Unicode hex": "1F8A9"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "100",
			"Dingbat hex": "64",
			"Unicode dec": "129194",
			"Unicode hex": "1F8AA"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "101",
			"Dingbat hex": "65",
			"Unicode dec": "129195",
			"Unicode hex": "1F8AB"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "102",
			"Dingbat hex": "66",
			"Unicode dec": "129104",
			"Unicode hex": "1F850"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "103",
			"Dingbat hex": "67",
			"Unicode dec": "129106",
			"Unicode hex": "1F852"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "104",
			"Dingbat hex": "68",
			"Unicode dec": "129105",
			"Unicode hex": "1F851"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "105",
			"Dingbat hex": "69",
			"Unicode dec": "129107",
			"Unicode hex": "1F853"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "106",
			"Dingbat hex": "6A",
			"Unicode dec": "129108",
			"Unicode hex": "1F854"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "107",
			"Dingbat hex": "6B",
			"Unicode dec": "129109",
			"Unicode hex": "1F855"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "108",
			"Dingbat hex": "6C",
			"Unicode dec": "129111",
			"Unicode hex": "1F857"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "109",
			"Dingbat hex": "6D",
			"Unicode dec": "129110",
			"Unicode hex": "1F856"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "110",
			"Dingbat hex": "6E",
			"Unicode dec": "129112",
			"Unicode hex": "1F858"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "111",
			"Dingbat hex": "6F",
			"Unicode dec": "129113",
			"Unicode hex": "1F859"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "112",
			"Dingbat hex": "70",
			"Unicode dec": "9650",
			"Unicode hex": "25B2"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "113",
			"Dingbat hex": "71",
			"Unicode dec": "9660",
			"Unicode hex": "25BC"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "114",
			"Dingbat hex": "72",
			"Unicode dec": "9651",
			"Unicode hex": "25B3"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "115",
			"Dingbat hex": "73",
			"Unicode dec": "9661",
			"Unicode hex": "25BD"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "116",
			"Dingbat hex": "74",
			"Unicode dec": "9664",
			"Unicode hex": "25C0"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "117",
			"Dingbat hex": "75",
			"Unicode dec": "9654",
			"Unicode hex": "25B6"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "118",
			"Dingbat hex": "76",
			"Unicode dec": "9665",
			"Unicode hex": "25C1"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "119",
			"Dingbat hex": "77",
			"Unicode dec": "9655",
			"Unicode hex": "25B7"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "120",
			"Dingbat hex": "78",
			"Unicode dec": "9699",
			"Unicode hex": "25E3"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "121",
			"Dingbat hex": "79",
			"Unicode dec": "9698",
			"Unicode hex": "25E2"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "122",
			"Dingbat hex": "7A",
			"Unicode dec": "9700",
			"Unicode hex": "25E4"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "123",
			"Dingbat hex": "7B",
			"Unicode dec": "9701",
			"Unicode hex": "25E5"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "124",
			"Dingbat hex": "7C",
			"Unicode dec": "128896",
			"Unicode hex": "1F780"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "125",
			"Dingbat hex": "7D",
			"Unicode dec": "128898",
			"Unicode hex": "1F782"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "126",
			"Dingbat hex": "7E",
			"Unicode dec": "128897",
			"Unicode hex": "1F781"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "128",
			"Dingbat hex": "80",
			"Unicode dec": "128899",
			"Unicode hex": "1F783"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "129",
			"Dingbat hex": "81",
			"Unicode dec": "11205",
			"Unicode hex": "2BC5"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "130",
			"Dingbat hex": "82",
			"Unicode dec": "11206",
			"Unicode hex": "2BC6"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "131",
			"Dingbat hex": "83",
			"Unicode dec": "11207",
			"Unicode hex": "2BC7"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "132",
			"Dingbat hex": "84",
			"Unicode dec": "11208",
			"Unicode hex": "2BC8"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "133",
			"Dingbat hex": "85",
			"Unicode dec": "11164",
			"Unicode hex": "2B9C"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "134",
			"Dingbat hex": "86",
			"Unicode dec": "11166",
			"Unicode hex": "2B9E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "135",
			"Dingbat hex": "87",
			"Unicode dec": "11165",
			"Unicode hex": "2B9D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "136",
			"Dingbat hex": "88",
			"Unicode dec": "11167",
			"Unicode hex": "2B9F"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "137",
			"Dingbat hex": "89",
			"Unicode dec": "129040",
			"Unicode hex": "1F810"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "138",
			"Dingbat hex": "8A",
			"Unicode dec": "129042",
			"Unicode hex": "1F812"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "139",
			"Dingbat hex": "8B",
			"Unicode dec": "129041",
			"Unicode hex": "1F811"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "140",
			"Dingbat hex": "8C",
			"Unicode dec": "129043",
			"Unicode hex": "1F813"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "141",
			"Dingbat hex": "8D",
			"Unicode dec": "129044",
			"Unicode hex": "1F814"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "142",
			"Dingbat hex": "8E",
			"Unicode dec": "129046",
			"Unicode hex": "1F816"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "143",
			"Dingbat hex": "8F",
			"Unicode dec": "129045",
			"Unicode hex": "1F815"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "144",
			"Dingbat hex": "90",
			"Unicode dec": "129047",
			"Unicode hex": "1F817"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "145",
			"Dingbat hex": "91",
			"Unicode dec": "129048",
			"Unicode hex": "1F818"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "146",
			"Dingbat hex": "92",
			"Unicode dec": "129050",
			"Unicode hex": "1F81A"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "147",
			"Dingbat hex": "93",
			"Unicode dec": "129049",
			"Unicode hex": "1F819"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "148",
			"Dingbat hex": "94",
			"Unicode dec": "129051",
			"Unicode hex": "1F81B"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "149",
			"Dingbat hex": "95",
			"Unicode dec": "129052",
			"Unicode hex": "1F81C"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "150",
			"Dingbat hex": "96",
			"Unicode dec": "129054",
			"Unicode hex": "1F81E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "151",
			"Dingbat hex": "97",
			"Unicode dec": "129053",
			"Unicode hex": "1F81D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "152",
			"Dingbat hex": "98",
			"Unicode dec": "129055",
			"Unicode hex": "1F81F"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "153",
			"Dingbat hex": "99",
			"Unicode dec": "129024",
			"Unicode hex": "1F800"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "154",
			"Dingbat hex": "9A",
			"Unicode dec": "129026",
			"Unicode hex": "1F802"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "155",
			"Dingbat hex": "9B",
			"Unicode dec": "129025",
			"Unicode hex": "1F801"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "156",
			"Dingbat hex": "9C",
			"Unicode dec": "129027",
			"Unicode hex": "1F803"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "157",
			"Dingbat hex": "9D",
			"Unicode dec": "129028",
			"Unicode hex": "1F804"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "158",
			"Dingbat hex": "9E",
			"Unicode dec": "129030",
			"Unicode hex": "1F806"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "159",
			"Dingbat hex": "9F",
			"Unicode dec": "129029",
			"Unicode hex": "1F805"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "160",
			"Dingbat hex": "A0",
			"Unicode dec": "129031",
			"Unicode hex": "1F807"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "161",
			"Dingbat hex": "A1",
			"Unicode dec": "129032",
			"Unicode hex": "1F808"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "162",
			"Dingbat hex": "A2",
			"Unicode dec": "129034",
			"Unicode hex": "1F80A"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "163",
			"Dingbat hex": "A3",
			"Unicode dec": "129033",
			"Unicode hex": "1F809"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "164",
			"Dingbat hex": "A4",
			"Unicode dec": "129035",
			"Unicode hex": "1F80B"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "165",
			"Dingbat hex": "A5",
			"Unicode dec": "129056",
			"Unicode hex": "1F820"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "166",
			"Dingbat hex": "A6",
			"Unicode dec": "129058",
			"Unicode hex": "1F822"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "167",
			"Dingbat hex": "A7",
			"Unicode dec": "129060",
			"Unicode hex": "1F824"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "168",
			"Dingbat hex": "A8",
			"Unicode dec": "129062",
			"Unicode hex": "1F826"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "169",
			"Dingbat hex": "A9",
			"Unicode dec": "129064",
			"Unicode hex": "1F828"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "170",
			"Dingbat hex": "AA",
			"Unicode dec": "129066",
			"Unicode hex": "1F82A"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "171",
			"Dingbat hex": "AB",
			"Unicode dec": "129068",
			"Unicode hex": "1F82C"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "172",
			"Dingbat hex": "AC",
			"Unicode dec": "129180",
			"Unicode hex": "1F89C"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "173",
			"Dingbat hex": "AD",
			"Unicode dec": "129181",
			"Unicode hex": "1F89D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "174",
			"Dingbat hex": "AE",
			"Unicode dec": "129182",
			"Unicode hex": "1F89E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "175",
			"Dingbat hex": "AF",
			"Unicode dec": "129183",
			"Unicode hex": "1F89F"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "176",
			"Dingbat hex": "B0",
			"Unicode dec": "129070",
			"Unicode hex": "1F82E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "177",
			"Dingbat hex": "B1",
			"Unicode dec": "129072",
			"Unicode hex": "1F830"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "178",
			"Dingbat hex": "B2",
			"Unicode dec": "129074",
			"Unicode hex": "1F832"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "179",
			"Dingbat hex": "B3",
			"Unicode dec": "129076",
			"Unicode hex": "1F834"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "180",
			"Dingbat hex": "B4",
			"Unicode dec": "129078",
			"Unicode hex": "1F836"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "181",
			"Dingbat hex": "B5",
			"Unicode dec": "129080",
			"Unicode hex": "1F838"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "182",
			"Dingbat hex": "B6",
			"Unicode dec": "129082",
			"Unicode hex": "1F83A"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "183",
			"Dingbat hex": "B7",
			"Unicode dec": "129081",
			"Unicode hex": "1F839"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "184",
			"Dingbat hex": "B8",
			"Unicode dec": "129083",
			"Unicode hex": "1F83B"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "185",
			"Dingbat hex": "B9",
			"Unicode dec": "129176",
			"Unicode hex": "1F898"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "186",
			"Dingbat hex": "BA",
			"Unicode dec": "129178",
			"Unicode hex": "1F89A"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "187",
			"Dingbat hex": "BB",
			"Unicode dec": "129177",
			"Unicode hex": "1F899"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "188",
			"Dingbat hex": "BC",
			"Unicode dec": "129179",
			"Unicode hex": "1F89B"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "189",
			"Dingbat hex": "BD",
			"Unicode dec": "129084",
			"Unicode hex": "1F83C"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "190",
			"Dingbat hex": "BE",
			"Unicode dec": "129086",
			"Unicode hex": "1F83E"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "191",
			"Dingbat hex": "BF",
			"Unicode dec": "129085",
			"Unicode hex": "1F83D"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "192",
			"Dingbat hex": "C0",
			"Unicode dec": "129087",
			"Unicode hex": "1F83F"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "193",
			"Dingbat hex": "C1",
			"Unicode dec": "129088",
			"Unicode hex": "1F840"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "194",
			"Dingbat hex": "C2",
			"Unicode dec": "129090",
			"Unicode hex": "1F842"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "195",
			"Dingbat hex": "C3",
			"Unicode dec": "129089",
			"Unicode hex": "1F841"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "196",
			"Dingbat hex": "C4",
			"Unicode dec": "129091",
			"Unicode hex": "1F843"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "197",
			"Dingbat hex": "C5",
			"Unicode dec": "129092",
			"Unicode hex": "1F844"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "198",
			"Dingbat hex": "C6",
			"Unicode dec": "129094",
			"Unicode hex": "1F846"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "199",
			"Dingbat hex": "C7",
			"Unicode dec": "129093",
			"Unicode hex": "1F845"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "200",
			"Dingbat hex": "C8",
			"Unicode dec": "129095",
			"Unicode hex": "1F847"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "201",
			"Dingbat hex": "C9",
			"Unicode dec": "11176",
			"Unicode hex": "2BA8"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "202",
			"Dingbat hex": "CA",
			"Unicode dec": "11177",
			"Unicode hex": "2BA9"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "203",
			"Dingbat hex": "CB",
			"Unicode dec": "11178",
			"Unicode hex": "2BAA"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "204",
			"Dingbat hex": "CC",
			"Unicode dec": "11179",
			"Unicode hex": "2BAB"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "205",
			"Dingbat hex": "CD",
			"Unicode dec": "11180",
			"Unicode hex": "2BAC"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "206",
			"Dingbat hex": "CE",
			"Unicode dec": "11181",
			"Unicode hex": "2BAD"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "207",
			"Dingbat hex": "CF",
			"Unicode dec": "11182",
			"Unicode hex": "2BAE"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "208",
			"Dingbat hex": "D0",
			"Unicode dec": "11183",
			"Unicode hex": "2BAF"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "209",
			"Dingbat hex": "D1",
			"Unicode dec": "129120",
			"Unicode hex": "1F860"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "210",
			"Dingbat hex": "D2",
			"Unicode dec": "129122",
			"Unicode hex": "1F862"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "211",
			"Dingbat hex": "D3",
			"Unicode dec": "129121",
			"Unicode hex": "1F861"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "212",
			"Dingbat hex": "D4",
			"Unicode dec": "129123",
			"Unicode hex": "1F863"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "213",
			"Dingbat hex": "D5",
			"Unicode dec": "129124",
			"Unicode hex": "1F864"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "214",
			"Dingbat hex": "D6",
			"Unicode dec": "129125",
			"Unicode hex": "1F865"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "215",
			"Dingbat hex": "D7",
			"Unicode dec": "129127",
			"Unicode hex": "1F867"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "216",
			"Dingbat hex": "D8",
			"Unicode dec": "129126",
			"Unicode hex": "1F866"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "217",
			"Dingbat hex": "D9",
			"Unicode dec": "129136",
			"Unicode hex": "1F870"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "218",
			"Dingbat hex": "DA",
			"Unicode dec": "129138",
			"Unicode hex": "1F872"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "219",
			"Dingbat hex": "DB",
			"Unicode dec": "129137",
			"Unicode hex": "1F871"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "220",
			"Dingbat hex": "DC",
			"Unicode dec": "129139",
			"Unicode hex": "1F873"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "221",
			"Dingbat hex": "DD",
			"Unicode dec": "129140",
			"Unicode hex": "1F874"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "222",
			"Dingbat hex": "DE",
			"Unicode dec": "129141",
			"Unicode hex": "1F875"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "223",
			"Dingbat hex": "DF",
			"Unicode dec": "129143",
			"Unicode hex": "1F877"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "224",
			"Dingbat hex": "E0",
			"Unicode dec": "129142",
			"Unicode hex": "1F876"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "225",
			"Dingbat hex": "E1",
			"Unicode dec": "129152",
			"Unicode hex": "1F880"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "226",
			"Dingbat hex": "E2",
			"Unicode dec": "129154",
			"Unicode hex": "1F882"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "227",
			"Dingbat hex": "E3",
			"Unicode dec": "129153",
			"Unicode hex": "1F881"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "228",
			"Dingbat hex": "E4",
			"Unicode dec": "129155",
			"Unicode hex": "1F883"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "229",
			"Dingbat hex": "E5",
			"Unicode dec": "129156",
			"Unicode hex": "1F884"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "230",
			"Dingbat hex": "E6",
			"Unicode dec": "129157",
			"Unicode hex": "1F885"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "231",
			"Dingbat hex": "E7",
			"Unicode dec": "129159",
			"Unicode hex": "1F887"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "232",
			"Dingbat hex": "E8",
			"Unicode dec": "129158",
			"Unicode hex": "1F886"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "233",
			"Dingbat hex": "E9",
			"Unicode dec": "129168",
			"Unicode hex": "1F890"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "234",
			"Dingbat hex": "EA",
			"Unicode dec": "129170",
			"Unicode hex": "1F892"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "235",
			"Dingbat hex": "EB",
			"Unicode dec": "129169",
			"Unicode hex": "1F891"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "236",
			"Dingbat hex": "EC",
			"Unicode dec": "129171",
			"Unicode hex": "1F893"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "237",
			"Dingbat hex": "ED",
			"Unicode dec": "129172",
			"Unicode hex": "1F894"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "238",
			"Dingbat hex": "EE",
			"Unicode dec": "129174",
			"Unicode hex": "1F896"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "239",
			"Dingbat hex": "EF",
			"Unicode dec": "129173",
			"Unicode hex": "1F895"
		},
		{
			"Typeface name": "Wingdings 3",
			"Dingbat dec": "240",
			"Dingbat hex": "F0",
			"Unicode dec": "129175",
			"Unicode hex": "1F897"
		}
	];
})), Vh = /* @__PURE__ */ a(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.hex = e.dec = e.codePoint = void 0;
	for (var n = t(Bh()), r = {}, i = String.fromCodePoint ? String.fromCodePoint : p, a = 0, o = n.default; a < o.length; a++) {
		var s = o[a], c = parseInt(s["Unicode dec"], 10), l = {
			codePoint: c,
			string: i(c)
		};
		r[s["Typeface name"].toUpperCase() + "_" + s["Dingbat dec"]] = l;
	}
	function u(e, t) {
		return r[e.toUpperCase() + "_" + t];
	}
	e.codePoint = u;
	function d(e, t) {
		return u(e, parseInt(t, 10));
	}
	e.dec = d;
	function f(e, t) {
		return u(e, parseInt(t, 16));
	}
	e.hex = f;
	function p(e) {
		if (e <= 65535) return String.fromCharCode(e);
		var t = Math.floor((e - 65536) / 1024) + 55296, n = (e - 65536) % 1024 + 56320;
		return String.fromCharCode(t, n);
	}
})), Hh = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z));
	t.paragraph = r, t.run = i, t._elements = o, t._elementsOfType = a, t.getDescendantsOfType = s, t.getDescendants = c;
	function r(e) {
		return a("paragraph", e);
	}
	function i(e) {
		return a("run", e);
	}
	function a(e, t) {
		return o(function(n) {
			return n.type === e ? t(n) : n;
		});
	}
	function o(e) {
		return function t(r) {
			if (r.children) {
				var i = n.map(r.children, t);
				r = n.extend(r, { children: i });
			}
			return e(r);
		};
	}
	function s(e, t) {
		return c(e).filter(function(e) {
			return e.type === t;
		});
	}
	function c(e) {
		var t = [];
		return l(e, function(e) {
			t.push(e);
		}), t;
	}
	function l(e, t) {
		e.children && e.children.forEach(function(e) {
			l(e, t), t(e);
		});
	}
})), Uh = /* @__PURE__ */ a(((e) => {
	e.uriToZipEntryName = t, e.replaceFragment = n;
	function t(e, t) {
		return t.charAt(0) === "/" ? t.substr(1) : e + "/" + t;
	}
	function n(e, t) {
		var n = e.indexOf("#");
		return n !== -1 && (e = e.substring(0, n)), e + "#" + t;
	}
})), Wh = /* @__PURE__ */ a(((t) => {
	t.createBodyReader = u, t._readNumberingProperties = f;
	var n = Vh(), r = (Q(), e(Z)), i = eh(), a = th().Result, o = th().warning, s = Rh(), c = Hh(), l = Uh();
	function u(e) {
		return {
			readXmlElement: function(t) {
				return new d(e).readXmlElement(t);
			},
			readXmlElements: function(t) {
				return new d(e).readXmlElements(t);
			}
		};
	}
	function d(e) {
		var t = [], a = [], u = [], d = e.relationships, x = e.contentTypes, S = e.docxFile, C = e.files, w = e.numbering, T = e.styles;
		function E(e) {
			return b(e.map(D));
		}
		function D(e) {
			if (e.type === "element") {
				var t = ie[e.name];
				if (t) return t(e);
				if (!Object.prototype.hasOwnProperty.call(m, e.name)) return h([o("An unrecognised element was ignored: " + e.name)]);
			}
			return g();
		}
		function O(e) {
			return F(e).map(function(t) {
				return {
					type: "paragraphProperties",
					styleId: t.styleId,
					styleName: t.name,
					alignment: e.firstOrEmpty("w:jc").attributes["w:val"],
					numbering: f(t.styleId, e.firstOrEmpty("w:numPr"), w),
					indent: k(e.firstOrEmpty("w:ind"))
				};
			});
		}
		function k(e) {
			return {
				start: e.attributes["w:start"] || e.attributes["w:left"],
				end: e.attributes["w:end"] || e.attributes["w:right"],
				firstLine: e.attributes["w:firstLine"],
				hanging: e.attributes["w:hanging"]
			};
		}
		function A(e) {
			return I(e).map(function(t) {
				var n = e.firstOrEmpty("w:sz").attributes["w:val"], r = /^[0-9]+$/.test(n) ? parseInt(n, 10) / 2 : null;
				return {
					type: "runProperties",
					styleId: t.styleId,
					styleName: t.name,
					verticalAlignment: e.firstOrEmpty("w:vertAlign").attributes["w:val"],
					font: e.firstOrEmpty("w:rFonts").attributes["w:ascii"],
					fontSize: r,
					isBold: M(e.first("w:b")),
					isUnderline: j(e.first("w:u")),
					isItalic: M(e.first("w:i")),
					isStrikethrough: M(e.first("w:strike")),
					isAllCaps: M(e.first("w:caps")),
					isSmallCaps: M(e.first("w:smallCaps")),
					highlight: P(e.firstOrEmpty("w:highlight").attributes["w:val"])
				};
			});
		}
		function j(e) {
			if (e) {
				var t = e.attributes["w:val"];
				return t !== void 0 && t !== "false" && t !== "0" && t !== "none";
			}
			return !1;
		}
		function M(e) {
			if (e) {
				var t = e.attributes["w:val"];
				return t !== "false" && t !== "0";
			}
			return !1;
		}
		function N(e) {
			return e !== "false" && e !== "0";
		}
		function P(e) {
			return !e || e === "none" ? null : e;
		}
		function F(e) {
			return R(e, "w:pStyle", "Paragraph", T.findParagraphStyleById);
		}
		function I(e) {
			return R(e, "w:rStyle", "Run", T.findCharacterStyleById);
		}
		function L(e) {
			return R(e, "w:tblStyle", "Table", T.findTableStyleById);
		}
		function R(e, t, n, r) {
			var i = [], a = e.first(t), o = null, s = null;
			if (a && (o = a.attributes["w:val"], o)) {
				var c = r(o);
				c ? s = c.name : i.push(ve(n, o));
			}
			return v({
				styleId: o,
				name: s
			}, i);
		}
		function z(e) {
			var n = e.attributes["w:fldCharType"];
			if (n === "begin") t.push({
				type: "begin",
				fldChar: e
			}), a = [];
			else if (n === "end") {
				var r = t.pop();
				if (r.type === "begin" && (r = ee(r)), r.type === "checkbox") return _(i.checkbox({ checked: r.checked }));
			} else if (n === "separate") {
				var o = ee(t.pop());
				t.push(o);
			}
			return g();
		}
		function B() {
			var e = r.last(t.filter(function(e) {
				return e.type === "hyperlink";
			}));
			return e ? e.options : null;
		}
		function ee(e) {
			return te(a.join(""), e.type === "begin" ? e.fldChar : s.emptyElement);
		}
		function te(e, t) {
			var n = /^\s*HYPERLINK\s+(\\l\s+)?(?:"(.*)"|([^\\]\S*))/.exec(e);
			if (n) {
				var r = n[2] === void 0 ? n[3] : n[2];
				return {
					type: "hyperlink",
					options: n[1] === void 0 ? { href: r } : { anchor: r }
				};
			}
			if (/\s*FORMCHECKBOX\s*/.exec(e)) {
				var i = t.firstOrEmpty("w:ffData").firstOrEmpty("w:checkBox");
				return {
					type: "checkbox",
					checked: M(i.first("w:checked") ?? i.first("w:default"))
				};
			}
			return { type: "unknown" };
		}
		function V(e) {
			return a.push(e.text()), g();
		}
		function ne(e) {
			var t = e.attributes["w:font"], r = e.attributes["w:char"], a = n.hex(t, r);
			return a == null && /^F0..$/.test(r) && (a = n.hex(t, r.substring(2))), a == null ? h([o("A w:sym element with an unsupported character was ignored: char " + r + " in font " + t)]) : _(new i.Text(a.string));
		}
		function re(e) {
			return function(t) {
				var n = t.attributes["w:id"];
				return _(new i.NoteReference({
					noteType: e,
					noteId: n
				}));
			};
		}
		function H(e) {
			return _(i.commentReference({ commentId: e.attributes["w:id"] }));
		}
		function U(e) {
			return E(e.children);
		}
		var ie = {
			"w:p": function(e) {
				var t = e.firstOrEmpty("w:pPr");
				if (t.firstOrEmpty("w:rPr").first("w:del")) return e.children.forEach(function(e) {
					u.push(e);
				}), g();
				var n = e.children;
				return u.length > 0 && (n = u.concat(n), u = []), y.map(O(t), E(n), function(e, t) {
					return new i.Paragraph(t, e);
				}).insertExtra();
			},
			"w:r": function(e) {
				return y.map(A(e.firstOrEmpty("w:rPr")), E(e.children), function(e, t) {
					var n = B();
					return n !== null && (t = [new i.Hyperlink(t, n)]), new i.Run(t, e);
				});
			},
			"w:fldChar": z,
			"w:instrText": V,
			"w:t": function(e) {
				return _(new i.Text(e.text()));
			},
			"w:tab": function(e) {
				return _(new i.Tab());
			},
			"w:noBreakHyphen": function() {
				return _(new i.Text("‑"));
			},
			"w:softHyphen": function(e) {
				return _(new i.Text("­"));
			},
			"w:sym": ne,
			"w:hyperlink": function(e) {
				var t = e.attributes["r:id"], n = e.attributes["w:anchor"];
				return E(e.children).map(function(a) {
					function o(t) {
						var n = e.attributes["w:tgtFrame"] || null;
						return new i.Hyperlink(a, r.extend({ targetFrame: n }, t));
					}
					if (t) {
						var s = d.findTargetByRelationshipId(t);
						return n && (s = l.replaceFragment(s, n)), o({ href: s });
					}
					return n ? o({ anchor: n }) : a;
				});
			},
			"w:tbl": ae,
			"w:tr": se,
			"w:tc": ce,
			"w:footnoteReference": re("footnote"),
			"w:endnoteReference": re("endnote"),
			"w:commentReference": H,
			"w:br": function(e) {
				var t = e.attributes["w:type"];
				return t == null || t === "textWrapping" ? _(i.lineBreak) : t === "page" ? _(i.pageBreak) : t === "column" ? _(i.columnBreak) : h([o("Unsupported break type: " + t)]);
			},
			"w:bookmarkStart": function(e) {
				var t = e.attributes["w:name"];
				return t === "_GoBack" ? g() : _(new i.BookmarkStart({ name: t }));
			},
			"mc:AlternateContent": function(e) {
				return U(e.firstOrEmpty("mc:Fallback"));
			},
			"w:sdt": function(e) {
				return E(e.firstOrEmpty("w:sdtContent").children).map(function(t) {
					var n = e.firstOrEmpty("w:sdtPr").first("wordml:checkbox");
					if (n) {
						var r = n.first("wordml:checked"), a = !!r && N(r.attributes["wordml:val"]), o = i.checkbox({ checked: a }), s = !1, l = t.map(c._elementsOfType(i.types.text, function(e) {
							return e.value.length > 0 && !s ? (s = !0, o) : e;
						}));
						return s ? l : o;
					}
					return t;
				});
			},
			"w:ins": U,
			"w:object": U,
			"w:smartTag": U,
			"w:drawing": U,
			"w:pict": function(e) {
				return U(e).toExtra();
			},
			"v:roundrect": U,
			"v:shape": U,
			"v:textbox": U,
			"w:txbxContent": U,
			"wp:inline": fe,
			"wp:anchor": fe,
			"v:imagedata": he,
			"v:group": U,
			"v:rect": U
		};
		return {
			readXmlElement: D,
			readXmlElements: E
		};
		function ae(e) {
			var t = oe(e.firstOrEmpty("w:tblPr"));
			return E(e.children).flatMap(ue).flatMap(function(e) {
				return t.map(function(t) {
					return i.Table(e, t);
				});
			});
		}
		function oe(e) {
			return L(e).map(function(e) {
				return {
					styleId: e.styleId,
					styleName: e.name
				};
			});
		}
		function se(e) {
			var t = e.firstOrEmpty("w:trPr");
			if (t.first("w:del")) return g();
			var n = !!t.first("w:tblHeader");
			return E(e.children).map(function(e) {
				return i.TableRow(e, { isHeader: n });
			});
		}
		function ce(e) {
			return E(e.children).map(function(t) {
				var n = e.firstOrEmpty("w:tcPr"), r = n.firstOrEmpty("w:gridSpan").attributes["w:val"], a = r ? parseInt(r, 10) : 1, o = i.TableCell(t, { colSpan: a });
				return o._vMerge = le(n), o;
			});
		}
		function le(e) {
			var t = e.first("w:vMerge");
			if (t) {
				var n = t.attributes["w:val"];
				return n === "continue" || !n;
			}
			return null;
		}
		function ue(e) {
			if (r.any(e, function(e) {
				return e.type !== i.types.tableRow;
			})) return de(e), v(e, [o("unexpected non-row element in table, cell merging may be incorrect")]);
			if (r.any(e, function(e) {
				return r.any(e.children, function(e) {
					return e.type !== i.types.tableCell;
				});
			})) return de(e), v(e, [o("unexpected non-cell element in table row, cell merging may be incorrect")]);
			var t = {};
			return e.forEach(function(e) {
				var n = 0;
				e.children.forEach(function(e) {
					e._vMerge && t[n] ? t[n].rowSpan++ : (t[n] = e, e._vMerge = !1), n += e.colSpan;
				});
			}), e.forEach(function(e) {
				e.children = e.children.filter(function(e) {
					return !e._vMerge;
				}), e.children.forEach(function(e) {
					delete e._vMerge;
				});
			}), _(e);
		}
		function de(e) {
			e.forEach(function(e) {
				c.getDescendantsOfType(e, i.types.tableCell).forEach(function(e) {
					delete e._vMerge;
				});
			});
		}
		function fe(e) {
			return b(e.getElementsByTagName("a:graphic").getElementsByTagName("a:graphicData").getElementsByTagName("pic:pic").getElementsByTagName("pic:blipFill").getElementsByTagName("a:blip").map(pe.bind(null, e)));
		}
		function pe(e, t) {
			var n = e.firstOrEmpty("wp:docPr"), r = n.attributes, a = W(r.descr) ? r.title : r.descr, s = me(t);
			return s === null ? h([o("Could not find image file for a:blip element")]) : _e(s, a).map(function(e) {
				var t = n.firstOrEmpty("a:hlinkClick").attributes["r:id"];
				if (t) {
					var r = d.findTargetByRelationshipId(t);
					return new i.Hyperlink([e], { href: r });
				}
				return e;
			});
		}
		function W(e) {
			return e == null || /^\s*$/.test(e);
		}
		function me(e) {
			var t = e.attributes["r:embed"], n = e.attributes["r:link"];
			if (t) return ge(t);
			if (n) {
				var r = d.findTargetByRelationshipId(n);
				return {
					path: r,
					read: C.read.bind(C, r)
				};
			}
			return null;
		}
		function he(e) {
			var t = e.attributes["r:id"];
			return t ? _e(ge(t), e.attributes["o:title"]) : h([o("A v:imagedata element without a relationship ID was ignored")]);
		}
		function ge(e) {
			var t = l.uriToZipEntryName("word", d.findTargetByRelationshipId(e));
			return {
				path: t,
				read: S.read.bind(S, t)
			};
		}
		function _e(e, t) {
			var n = x.findContentType(e.path);
			return v(i.Image({
				readImage: e.read,
				altText: t,
				contentType: n
			}), p[n] ? [] : o("Image of type " + n + " is unlikely to display in web browsers"));
		}
		function ve(e, t) {
			return o(e + " style with ID " + t + " was referenced but not defined in the document");
		}
	}
	function f(e, t, n) {
		var r = t.firstOrEmpty("w:ilvl").attributes["w:val"], i = t.firstOrEmpty("w:numId").attributes["w:val"];
		if (r !== void 0 && i !== void 0) return n.findLevel(i, r);
		if (e != null) {
			var a = n.findLevelByParagraphStyleId(e);
			if (a != null) return a;
		}
		return i === void 0 ? null : n.findLevel(i, "0");
	}
	var p = {
		"image/png": !0,
		"image/gif": !0,
		"image/jpeg": !0,
		"image/svg+xml": !0,
		"image/tiff": !0
	}, m = {
		"office-word:wrap": !0,
		"v:shadow": !0,
		"v:shapetype": !0,
		"w:annotationRef": !0,
		"w:bookmarkEnd": !0,
		"w:sectPr": !0,
		"w:proofErr": !0,
		"w:lastRenderedPageBreak": !0,
		"w:commentRangeStart": !0,
		"w:commentRangeEnd": !0,
		"w:del": !0,
		"w:footnoteRef": !0,
		"w:endnoteRef": !0,
		"w:pPr": !0,
		"w:rPr": !0,
		"w:tblPr": !0,
		"w:tblGrid": !0,
		"w:trPr": !0,
		"w:tcPr": !0
	};
	function h(e) {
		return new y(null, null, e);
	}
	function g() {
		return new y(null);
	}
	function _(e) {
		return new y(e);
	}
	function v(e, t) {
		return new y(e, null, t);
	}
	function y(e, t, n) {
		this.value = e || [], this.extra = t || [], this._result = new a({
			element: this.value,
			extra: t
		}, n), this.messages = this._result.messages;
	}
	y.prototype.toExtra = function() {
		return new y(null, x(this.extra, this.value), this.messages);
	}, y.prototype.insertExtra = function() {
		var e = this.extra;
		return e && e.length ? new y(x(this.value, e), null, this.messages) : this;
	}, y.prototype.map = function(e) {
		var t = this._result.map(function(t) {
			return e(t.element);
		});
		return new y(t.value, this.extra, t.messages);
	}, y.prototype.flatMap = function(e) {
		var t = this._result.flatMap(function(t) {
			return e(t.element)._result;
		});
		return new y(t.value.element, x(this.extra, t.value.extra), t.messages);
	}, y.map = function(e, t, n) {
		return new y(n(e.value, t.value), x(e.extra, t.extra), e.messages.concat(t.messages));
	};
	function b(e) {
		var t = a.combine(r.pluck(e, "_result"));
		return new y(r.flatten(r.pluck(t.value, "element")), r.filter(r.flatten(r.pluck(t.value, "extra")), S), t.messages);
	}
	function x(e, t) {
		return r.flatten([e, t]);
	}
	function S(e) {
		return e;
	}
})), Gh = /* @__PURE__ */ a(((e) => {
	e.DocumentXmlReader = r;
	var t = eh(), n = th().Result;
	function r(e) {
		var r = e.bodyReader;
		function i(i) {
			var a = i.first("w:body");
			if (a == null) throw Error("Could not find the body element: are you sure this is a docx file?");
			var o = r.readXmlElements(a.children).map(function(n) {
				return new t.Document(n, {
					notes: e.notes,
					comments: e.comments
				});
			});
			return new n(o.value, o.messages);
		}
		return { convertXmlToDocument: i };
	}
})), Kh = /* @__PURE__ */ a(((e) => {
	e.readRelationships = t, e.defaultValue = new n([]), e.Relationships = n;
	function t(e) {
		var t = [];
		return e.children.forEach(function(e) {
			if (e.name === "relationships:Relationship") {
				var n = {
					relationshipId: e.attributes.Id,
					target: e.attributes.Target,
					type: e.attributes.Type
				};
				t.push(n);
			}
		}), new n(t);
	}
	function n(e) {
		var t = Object.create(null);
		e.forEach(function(e) {
			t[e.relationshipId] = e.target;
		});
		var n = Object.create(null);
		return e.forEach(function(e) {
			n[e.type] || (n[e.type] = []), n[e.type].push(e.target);
		}), {
			findTargetByRelationshipId: function(e) {
				return t[e];
			},
			findTargetsByType: function(e) {
				return n[e] || [];
			}
		};
	}
})), qh = /* @__PURE__ */ a(((e) => {
	e.readContentTypesFromXml = n;
	var t = {
		png: "png",
		gif: "gif",
		jpeg: "jpeg",
		jpg: "jpeg",
		tif: "tiff",
		tiff: "tiff",
		bmp: "bmp"
	};
	e.defaultContentTypes = r({}, {});
	function n(e) {
		var t = Object.create(null), n = Object.create(null);
		return e.children.forEach(function(e) {
			if (e.name === "content-types:Default" && (t[e.attributes.Extension] = e.attributes.ContentType), e.name === "content-types:Override") {
				var r = e.attributes.PartName;
				r.charAt(0) === "/" && (r = r.substring(1)), n[r] = e.attributes.ContentType;
			}
		}), r(n, t);
	}
	function r(e, n) {
		return { findContentType: function(r) {
			var i = e[r];
			if (i) return i;
			var a = r.split("."), o = a[a.length - 1];
			if (Object.prototype.hasOwnProperty.call(n, o)) return n[o];
			var s = t[o.toLowerCase()];
			return s ? "image/" + s : null;
		} };
	}
})), Jh = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z));
	t.readNumberingXml = i, t.Numbering = r, t.defaultNumbering = new r({}, {});
	function r(e, t, r) {
		var i = n.flatten(n.values(t).map(function(e) {
			return n.values(e.levels);
		})), a = n.indexBy(i.filter(function(e) {
			return e.paragraphStyleId != null;
		}), "paragraphStyleId");
		function o(e, t) {
			return s(e, t, Object.create(null));
		}
		function s(n, i, a) {
			if (a[n]) return null;
			a[n] = !0;
			var o = e[n];
			if (!o) return null;
			var c = t[o.abstractNumId];
			return c ? c.numStyleLink == null ? t[o.abstractNumId].levels[i] : s(r.findNumberingStyleById(c.numStyleLink).numId, i, a) : null;
		}
		function c(e) {
			return a[e] || null;
		}
		return {
			findLevel: o,
			findLevelByParagraphStyleId: c
		};
	}
	function i(e, t) {
		if (!t || !t.styles) throw Error("styles is missing");
		var n = a(e);
		return new r(s(e, n), n, t.styles);
	}
	function a(e) {
		var t = Object.create(null);
		return e.getElementsByTagName("w:abstractNum").forEach(function(e) {
			var n = e.attributes["w:abstractNumId"];
			t[n] = o(e);
		}), t;
	}
	function o(e) {
		var t = Object.create(null), n = null;
		return e.getElementsByTagName("w:lvl").forEach(function(e) {
			var r = e.attributes["w:ilvl"], i = e.firstOrEmpty("w:numFmt").attributes["w:val"] !== "bullet", a = e.firstOrEmpty("w:pStyle").attributes["w:val"];
			r === void 0 ? n = {
				isOrdered: i,
				level: "0",
				paragraphStyleId: a
			} : t[r] = {
				isOrdered: i,
				level: r,
				paragraphStyleId: a
			};
		}), n !== null && t[n.level] === void 0 && (t[n.level] = n), {
			levels: t,
			numStyleLink: e.firstOrEmpty("w:numStyleLink").attributes["w:val"]
		};
	}
	function s(e) {
		var t = Object.create(null);
		return e.getElementsByTagName("w:num").forEach(function(e) {
			var n = e.attributes["w:numId"];
			t[n] = { abstractNumId: e.first("w:abstractNumId").attributes["w:val"] };
		}), t;
	}
})), Yh = /* @__PURE__ */ a(((e) => {
	e.readStylesXml = n, e.Styles = t, e.defaultStyles = new t({}, {});
	function t(e, t, n, r) {
		return {
			findParagraphStyleById: function(t) {
				return e[t];
			},
			findCharacterStyleById: function(e) {
				return t[e];
			},
			findTableStyleById: function(e) {
				return n[e];
			},
			findNumberingStyleById: function(e) {
				return r[e];
			}
		};
	}
	t.EMPTY = new t({}, {}, {}, {});
	function n(e) {
		var n = Object.create(null), i = Object.create(null), a = Object.create(null), o = Object.create(null);
		return e.getElementsByTagName("w:style").forEach(function(e) {
			var t = r(e), s;
			switch (t.type) {
				case "paragraph":
					s = n;
					break;
				case "character":
					s = i;
					break;
				case "table":
					s = a;
					break;
				case "numbering": s = o;
			}
			s && s[t.styleId] === void 0 && (s[t.styleId] = t);
		}), new t(n, i, a, o);
	}
	function r(e) {
		var t = e.attributes["w:type"];
		return t === "numbering" ? a(t, e) : {
			type: t,
			styleId: o(e),
			name: i(e)
		};
	}
	function i(e) {
		var t = e.first("w:name");
		return t ? t.attributes["w:val"] : null;
	}
	function a(e, t) {
		var n = o(t);
		return {
			type: e,
			numId: t.firstOrEmpty("w:pPr").firstOrEmpty("w:numPr").firstOrEmpty("w:numId").attributes["w:val"],
			styleId: n
		};
	}
	function o(e) {
		return e.attributes["w:styleId"];
	}
})), Xh = /* @__PURE__ */ a(((e) => {
	var t = eh(), n = th().Result;
	e.createFootnotesReader = r.bind(e, "footnote"), e.createEndnotesReader = r.bind(e, "endnote");
	function r(e, r) {
		function i(t) {
			return n.combine(t.getElementsByTagName("w:" + e).filter(a).map(o));
		}
		function a(e) {
			var t = e.attributes["w:type"];
			return t !== "continuationSeparator" && t !== "separator";
		}
		function o(n) {
			var i = n.attributes["w:id"];
			return r.readXmlElements(n.children).map(function(n) {
				return t.Note({
					noteType: e,
					noteId: i,
					body: n
				});
			});
		}
		return i;
	}
})), Zh = /* @__PURE__ */ a(((e) => {
	var t = eh(), n = th().Result;
	function r(e) {
		function r(e) {
			return n.combine(e.getElementsByTagName("w:comment").map(i));
		}
		function i(n) {
			var r = n.attributes["w:id"];
			function i(e) {
				return (n.attributes[e] || "").trim() || null;
			}
			return e.readXmlElements(n.children).map(function(e) {
				return t.comment({
					commentId: r,
					body: e,
					authorName: i("w:author"),
					authorInitials: i("w:initials")
				});
			});
		}
		return r;
	}
	e.createCommentsReader = r;
})), Qh = /* @__PURE__ */ a(((e) => {
	var t = $m();
	e.Files = n;
	function n() {
		function e(e) {
			return t.reject(/* @__PURE__ */ Error("could not open external image: '" + e + "'\ncannot open linked files from a web browser"));
		}
		return { read: e };
	}
})), $h = /* @__PURE__ */ a(((e) => {
	e.read = h, e._findPartPaths = g;
	var t = $m(), n = eh(), r = th().Result, i = ih(), a = zh().readXmlFromZipFile, o = Wh().createBodyReader, s = Gh().DocumentXmlReader, c = Kh(), l = qh(), u = Jh(), d = Yh(), f = Xh(), p = Zh(), m = Qh().Files;
	function h(e, i, a) {
		i ||= {}, a ||= {};
		var o = new m({
			externalFileAccess: a.externalFileAccess,
			relativeToFile: i.path
		});
		return t.props({
			contentTypes: S(e),
			partPaths: g(e),
			docxFile: e,
			files: o
		}).also(function(t) {
			return { styles: w(e, t.partPaths.styles) };
		}).also(function(t) {
			return { numbering: C(e, t.partPaths.numbering, t.styles) };
		}).also(function(e) {
			return {
				footnotes: b(e.partPaths.footnotes, e, function(e, t) {
					return t ? f.createFootnotesReader(e)(t) : new r([]);
				}),
				endnotes: b(e.partPaths.endnotes, e, function(e, t) {
					return t ? f.createEndnotesReader(e)(t) : new r([]);
				}),
				comments: b(e.partPaths.comments, e, function(e, t) {
					return t ? p.createCommentsReader(e)(t) : new r([]);
				})
			};
		}).also(function(e) {
			return { notes: e.footnotes.flatMap(function(t) {
				return e.endnotes.map(function(e) {
					return new n.Notes(t.concat(e));
				});
			}) };
		}).then(function(e) {
			return b(e.partPaths.mainDocument, e, function(t, n) {
				return e.notes.flatMap(function(r) {
					return e.comments.flatMap(function(e) {
						return new s({
							bodyReader: t,
							notes: r,
							comments: e
						}).convertXmlToDocument(n);
					});
				});
			});
		});
	}
	function g(e) {
		return T(e).then(function(t) {
			var n = _({
				docxFile: e,
				relationships: t,
				relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
				basePath: "",
				fallbackPath: "word/document.xml"
			});
			if (!e.exists(n)) throw Error("Could not find main document part. Are you sure this is a valid .docx file?");
			return y({
				filename: x(n),
				readElement: c.readRelationships,
				defaultValue: c.defaultValue
			})(e).then(function(t) {
				function r(r) {
					return _({
						docxFile: e,
						relationships: t,
						relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/" + r,
						basePath: i.splitPath(n).dirname,
						fallbackPath: "word/" + r + ".xml"
					});
				}
				return {
					mainDocument: n,
					comments: r("comments"),
					endnotes: r("endnotes"),
					footnotes: r("footnotes"),
					numbering: r("numbering"),
					styles: r("styles")
				};
			});
		});
	}
	function _(e) {
		var t = e.docxFile, n = e.relationships, r = e.relationshipType, a = e.basePath, o = e.fallbackPath, s = n.findTargetsByType(r).map(function(e) {
			return v(i.joinPath(a, e), "/");
		}).filter(function(e) {
			return t.exists(e);
		});
		return s.length === 0 ? o : s[0];
	}
	function v(e, t) {
		return e.substring(0, t.length) === t ? e.substring(t.length) : e;
	}
	function y(e) {
		return function(t) {
			return a(t, e.filename).then(function(t) {
				return t ? e.readElement(t) : e.defaultValue;
			});
		};
	}
	function b(e, t, n) {
		return y({
			filename: x(e),
			readElement: c.readRelationships,
			defaultValue: c.defaultValue
		})(t.docxFile).then(function(r) {
			var i = new o({
				relationships: r,
				contentTypes: t.contentTypes,
				docxFile: t.docxFile,
				numbering: t.numbering,
				styles: t.styles,
				files: t.files
			});
			return a(t.docxFile, e).then(function(e) {
				return n(i, e);
			});
		});
	}
	function x(e) {
		var t = i.splitPath(e);
		return i.joinPath(t.dirname, "_rels", t.basename + ".rels");
	}
	var S = y({
		filename: "[Content_Types].xml",
		readElement: l.readContentTypesFromXml,
		defaultValue: l.defaultContentTypes
	});
	function C(e, t, n) {
		return y({
			filename: t,
			readElement: function(e) {
				return u.readNumberingXml(e, { styles: n });
			},
			defaultValue: u.defaultNumbering
		})(e);
	}
	function w(e, t) {
		return y({
			filename: t,
			readElement: d.readStylesXml,
			defaultValue: d.defaultStyles
		})(e);
	}
	var T = y({
		filename: "_rels/.rels",
		readElement: c.readRelationships,
		defaultValue: c.defaultValue
	});
})), eg = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = $m(), i = Rh();
	t.writeStyleMap = c, t.readStyleMap = f;
	var a = "http://schemas.zwobble.org/mammoth/style-map", o = "mammoth/style-map", s = "/" + o;
	function c(e, t) {
		return e.write(o, t), l(e).then(function() {
			return u(e);
		});
	}
	function l(e) {
		var t = "word/_rels/document.xml.rels", n = "http://schemas.openxmlformats.org/package/2006/relationships", r = "{" + n + "}Relationship";
		return e.read(t, "utf8").then(i.readString).then(function(o) {
			var c = o.children;
			d(c, r, "Id", {
				Id: "rMammothStyleMap",
				Type: a,
				Target: s
			});
			var l = { "": n };
			return e.write(t, i.writeString(o, l));
		});
	}
	function u(e) {
		var t = "[Content_Types].xml", n = "http://schemas.openxmlformats.org/package/2006/content-types", r = "{" + n + "}Override";
		return e.read(t, "utf8").then(i.readString).then(function(a) {
			var o = a.children;
			d(o, r, "PartName", {
				PartName: s,
				ContentType: "text/prs.mammoth.style-map"
			});
			var c = { "": n };
			return e.write(t, i.writeString(a, c));
		});
	}
	function d(e, t, r, a) {
		var o = n.find(e, function(e) {
			return e.name === t && e.attributes[r] === a[r];
		});
		o ? o.attributes = a : e.push(i.element(t, a));
	}
	function f(e) {
		return e.exists(o) ? e.read(o, "utf8") : r.resolve(null);
	}
})), tg = /* @__PURE__ */ a(((e) => {
	var t = ig();
	function n(e, n, r) {
		return i(t.element(e, n, { fresh: !1 }), r);
	}
	function r(e, n, r) {
		return i(t.element(e, n, { fresh: !0 }), r);
	}
	function i(e, t) {
		return {
			type: "element",
			tag: e,
			children: t || []
		};
	}
	function a(e) {
		return {
			type: "text",
			value: e
		};
	}
	e.freshElement = r, e.nonFreshElement = n, e.elementWithTag = i, e.text = a, e.forceWrite = { type: "forceWrite" };
	var o = {
		br: !0,
		hr: !0,
		img: !0,
		input: !0
	};
	function s(e) {
		return e.children.length === 0 && o[e.tag.tagName];
	}
	e.isVoidElement = s;
})), ng = /* @__PURE__ */ a(((t, n) => {
	var r = (Q(), e(Z)), i = tg();
	function a(e) {
		return o(f(e));
	}
	function o(e) {
		var t = [];
		return e.map(s).forEach(function(e) {
			d(t, e);
		}), t;
	}
	function s(e) {
		return c[e.type](e);
	}
	var c = {
		element: l,
		text: u,
		forceWrite: u
	};
	function l(e) {
		return i.elementWithTag(e.tag, o(e.children));
	}
	function u(e) {
		return e;
	}
	function d(e, t) {
		var n = e[e.length - 1];
		t.type === "element" && !t.tag.fresh && n && n.type === "element" && t.tag.matchesElement(n.tag) ? (t.tag.separator && d(n.children, i.text(t.tag.separator)), t.children.forEach(function(e) {
			d(n.children, e);
		})) : e.push(t);
	}
	function f(e) {
		return p(e, function(e) {
			return m[e.type](e);
		});
	}
	function p(e, t) {
		return r.flatten(r.map(e, t), !0);
	}
	var m = {
		element: g,
		text: _,
		forceWrite: h
	};
	function h(e) {
		return [e];
	}
	function g(e) {
		var t = f(e.children);
		return t.length === 0 && !i.isVoidElement(e) ? [] : [i.elementWithTag(e.tag, t)];
	}
	function _(e) {
		return e.value.length === 0 ? [] : [e];
	}
	n.exports = a;
})), rg = /* @__PURE__ */ a(((e) => {
	var t = tg();
	e.freshElement = t.freshElement, e.nonFreshElement = t.nonFreshElement, e.elementWithTag = t.elementWithTag, e.text = t.text, e.forceWrite = t.forceWrite, e.simplify = ng();
	function n(e, t) {
		t.forEach(function(t) {
			r(e, t);
		});
	}
	function r(e, t) {
		i[t.type](e, t);
	}
	var i = {
		element: a,
		text: o,
		forceWrite: function() {}
	};
	function a(e, r) {
		t.isVoidElement(r) ? e.selfClosing(r.tag.tagName, r.tag.attributes) : (e.open(r.tag.tagName, r.tag.attributes), n(e, r.children), e.close(r.tag.tagName));
	}
	function o(e, t) {
		e.text(t.value);
	}
	e.write = n;
})), ig = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = rg();
	t.topLevelElement = i, t.elements = a, t.element = s;
	function i(e, t) {
		return a([s(e, t, { fresh: !0 })]);
	}
	function a(e) {
		return new o(e.map(function(e) {
			return n.isString(e) ? s(e) : e;
		}));
	}
	function o(e) {
		this._elements = e;
	}
	o.prototype.wrap = function(e) {
		for (var t = e(), n = this._elements.length - 1; n >= 0; n--) t = this._elements[n].wrapNodes(t);
		return t;
	};
	function s(e, t, n) {
		return n ||= {}, new c(e, t, n);
	}
	function c(e, t, r) {
		var i = Object.create(null);
		n.isArray(e) ? (e.forEach(function(e) {
			i[e] = !0;
		}), e = e[0]) : i[e] = !0, this.tagName = e, this.tagNames = i, this.attributes = t || {}, this.fresh = r.fresh, this.separator = r.separator;
	}
	c.prototype.matchesElement = function(e) {
		return this.tagNames[e.tagName] && n.isEqual(this.attributes || {}, e.attributes || {});
	}, c.prototype.wrap = function(e) {
		return this.wrapNodes(e());
	}, c.prototype.wrapNodes = function(e) {
		return [r.elementWithTag(this, e)];
	}, t.empty = a([]), t.ignore = { wrap: function() {
		return [];
	} };
})), ag = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = $m(), i = rg();
	t.imgElement = a;
	function a(e) {
		return function(t, a) {
			return r.when(e(t)).then(function(e) {
				var r = {};
				return t.altText && (r.alt = t.altText), n.extend(r, e), [i.freshElement("img", r)];
			});
		};
	}
	t.inline = t.imgElement, t.dataUri = a(function(e) {
		return e.readAsBase64String().then(function(t) {
			return { src: "data:" + e.contentType + ";base64," + t };
		});
	});
	function o(e) {
		return e.contentType.split(/\/|\\/)[1];
	}
	t.imageFilenameExtension = o;
})), og = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z));
	t.writer = r;
	function r(e) {
		return e ||= {}, e.prettyPrint ? a() : o();
	}
	var i = {
		div: !0,
		p: !0,
		ul: !0,
		li: !0
	};
	function a() {
		var e = 0, t = [], r = !0, a = !1, s = o();
		function c(n, a) {
			i[n] && m(), t.push(n), s.open(n, a), i[n] && e++, r = !1;
		}
		function l(n) {
			i[n] && (e--, m()), t.pop(), s.close(n);
		}
		function u(e) {
			p();
			var t = h() ? e : e.replace("\n", "\n  ");
			s.text(t);
		}
		function d(e, t) {
			m(), s.selfClosing(e, t);
		}
		function f() {
			return t.length === 0 || i[t[t.length - 1]];
		}
		function p() {
			a ||= (m(), !0);
		}
		function m() {
			if (a = !1, !r && f() && !h()) {
				s._append("\n");
				for (var t = 0; t < e; t++) s._append("  ");
			}
		}
		function h() {
			return n.some(t, function(e) {
				return e === "pre";
			});
		}
		return {
			asString: s.asString,
			open: c,
			close: l,
			text: u,
			selfClosing: d
		};
	}
	function o() {
		var e = [];
		function t(t, n) {
			var r = a(n);
			e.push("<" + t + r + ">");
		}
		function r(t) {
			e.push("</" + t + ">");
		}
		function i(t, n) {
			var r = a(n);
			e.push("<" + t + r + " />");
		}
		function a(e) {
			return n.map(e, function(e, t) {
				return " " + t + "=\"" + c(e) + "\"";
			}).join("");
		}
		function o(t) {
			e.push(s(t));
		}
		function l(t) {
			e.push(t);
		}
		function u() {
			return e.join("");
		}
		return {
			asString: u,
			open: t,
			close: r,
			text: o,
			selfClosing: i,
			_append: l
		};
	}
	function s(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
	function c(e) {
		return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
})), sg = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z));
	function r(e) {
		return i(e, e);
	}
	function i(e, t) {
		return function() {
			return {
				start: e,
				end: t
			};
		};
	}
	function a(e) {
		var t = e.href || "";
		return t ? {
			start: "[",
			end: "](" + t + ")",
			anchorPosition: "before"
		} : {};
	}
	function o(e) {
		var t = e.src || "", n = e.alt || "";
		return t || n ? { start: "![" + n + "](" + t + ")" } : {};
	}
	function s(e) {
		return function(t, n) {
			return {
				start: n ? "\n" : "",
				end: n ? "" : "\n",
				list: {
					isOrdered: e.isOrdered,
					indent: n ? n.indent + 1 : 0,
					count: 0
				}
			};
		};
	}
	function c(e, t, n) {
		t ||= {
			indent: 0,
			isOrdered: !1,
			count: 0
		}, t.count++, n.hasClosed = !1;
		var r = t.isOrdered ? t.count + "." : "-";
		return {
			start: u("	", t.indent) + r + " ",
			end: function() {
				if (!n.hasClosed) return n.hasClosed = !0, "\n";
			}
		};
	}
	var l = {
		p: i("", "\n\n"),
		br: i("", "  \n"),
		ul: s({ isOrdered: !1 }),
		ol: s({ isOrdered: !0 }),
		li: c,
		strong: r("__"),
		em: r("*"),
		a,
		img: o
	};
	(function() {
		for (var e = 1; e <= 6; e++) l["h" + e] = i(u("#", e) + " ", "\n\n");
	})();
	function u(e, t) {
		return Array(t + 1).join(e);
	}
	function d() {
		var e = [], t = [], r = null, i = {};
		function a(n, a) {
			a ||= {};
			var s = (l[n] || function() {
				return {};
			})(a, r, i);
			t.push({
				end: s.end,
				list: r
			}), s.list && (r = s.list);
			var c = s.anchorPosition === "before";
			c && o(a), e.push(s.start || ""), c || o(a);
		}
		function o(t) {
			t.id && e.push("<a id=\"" + t.id + "\"></a>");
		}
		function s(i) {
			var a = t.pop();
			r = a.list;
			var o = n.isFunction(a.end) ? a.end() : a.end;
			e.push(o || "");
		}
		function c(e, t) {
			a(e, t), s(e);
		}
		function u(t) {
			e.push(f(t));
		}
		function d() {
			return e.join("");
		}
		return {
			asString: d,
			open: a,
			close: s,
			text: u,
			selfClosing: c
		};
	}
	t.writer = d;
	function f(e) {
		return e.replace(/\\/g, "\\\\").replace(/([\`\*_\{\}\[\]\(\)\#\+\-\.\!])/g, "\\$1");
	}
})), cg = /* @__PURE__ */ a(((e) => {
	var t = og(), n = sg();
	e.writer = r;
	function r(e) {
		return e ||= {}, e.outputFormat === "markdown" ? n.writer() : t.writer(e);
	}
})), lg = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = $m(), i = eh(), a = ig(), o = th(), s = ag(), c = rg(), l = cg();
	t.DocumentConverter = u;
	function u(e) {
		return { convertToHtml: function(t) {
			return new d(e, n.indexBy(t.type === i.types.document ? t.comments : [], "commentId")).convertToHtml(t);
		} };
	}
	function d(e, t) {
		var u = 1, d = [], f = [];
		e = n.extend({ ignoreEmptyParagraphs: !0 }, e);
		var v = e.idPrefix === void 0 ? "" : e.idPrefix, y = e.ignoreEmptyParagraphs, b = a.topLevelElement("p"), x = e.styleMap || [];
		function S(t) {
			var i = [], a = w(t, i, Object.create(null)), s = [];
			g(a, function(e) {
				e.type === "deferred" && s.push(e);
			});
			var u = Object.create(null);
			return r.mapSeries(s, function(e) {
				return e.value().then(function(t) {
					u[e.id] = t;
				});
			}).then(function() {
				function t(e) {
					return h(e, function(e) {
						return e.type === "deferred" ? u[e.id] : e.children ? [n.extend({}, e, { children: t(e.children) })] : [e];
					});
				}
				var r = l.writer({
					prettyPrint: e.prettyPrint,
					outputFormat: e.outputFormat
				});
				return c.write(r, c.simplify(t(a))), new o.Result(r.asString(), i);
			});
		}
		function C(e, t, n) {
			return h(e, function(e) {
				return w(e, t, n);
			});
		}
		function w(e, t, n) {
			if (!n) throw Error("options not set");
			var r = H[e.type];
			return r ? r(e, t, n) : [];
		}
		function T(e, t, n) {
			return E(e, t).wrap(function() {
				var r = C(e.children, t, n);
				return y ? r : [c.forceWrite].concat(r);
			});
		}
		function E(e, t) {
			var n = A(e);
			return n ? n.to : (e.styleId && t.push(m("paragraph", e)), b);
		}
		function D(e, t, n) {
			var r = function() {
				return C(e.children, t, n);
			}, o = [];
			if (e.highlight !== null) {
				var s = k({
					type: "highlight",
					color: e.highlight
				});
				s && o.push(s);
			}
			e.isSmallCaps && o.push(O("smallCaps")), e.isAllCaps && o.push(O("allCaps")), e.isStrikethrough && o.push(O("strikethrough", "s")), e.isUnderline && o.push(O("underline")), e.verticalAlignment === i.verticalAlignment.subscript && o.push(a.element("sub", {}, { fresh: !1 })), e.verticalAlignment === i.verticalAlignment.superscript && o.push(a.element("sup", {}, { fresh: !1 })), e.isItalic && o.push(O("italic", "em")), e.isBold && o.push(O("bold", "strong"));
			var c = a.empty, l = A(e);
			return l ? c = l.to : e.styleId && t.push(m("run", e)), o.push(c), o.forEach(function(e) {
				r = e.wrap.bind(e, r);
			}), r();
		}
		function O(e, t) {
			return k({ type: e }) || (t ? a.element(t, {}, { fresh: !1 }) : a.empty);
		}
		function k(e, t) {
			var n = A(e);
			return n ? n.to : t;
		}
		function A(e) {
			for (var t = 0; t < x.length; t++) if (x[t].from.matches(e)) return x[t];
		}
		function j(e) {
			return function(t, n) {
				return r.attempt(function() {
					return e(t, n);
				}).caught(function(e) {
					return n.push(o.error(e)), [];
				});
			};
		}
		function M(e) {
			return P(e.noteType, e.noteId);
		}
		function N(e) {
			return F(e.noteType, e.noteId);
		}
		function P(e, t) {
			return I(e + "-" + t);
		}
		function F(e, t) {
			return I(e + "-ref-" + t);
		}
		function I(e) {
			return v + e;
		}
		var L = a.elements([a.element("table", {}, { fresh: !0 })]);
		function R(e, t, n) {
			return k(e, L).wrap(function() {
				return z(e, t, n);
			});
		}
		function z(e, t, r) {
			var a = n.findIndex(e.children, function(e) {
				return !e.type === i.types.tableRow || !e.isHeader;
			});
			a === -1 && (a = e.children.length);
			var o;
			if (a === 0) o = C(e.children, t, n.extend({}, r, { isTableHeader: !1 }));
			else {
				var s = C(e.children.slice(0, a), t, n.extend({}, r, { isTableHeader: !0 })), l = C(e.children.slice(a), t, n.extend({}, r, { isTableHeader: !1 }));
				o = [c.freshElement("thead", {}, s), c.freshElement("tbody", {}, l)];
			}
			return [c.forceWrite].concat(o);
		}
		function B(e, t, n) {
			var r = C(e.children, t, n);
			return [c.freshElement("tr", {}, [c.forceWrite].concat(r))];
		}
		function ee(e, t, n) {
			var r = n.isTableHeader ? "th" : "td", i = C(e.children, t, n), a = {};
			return e.colSpan !== 1 && (a.colspan = e.colSpan.toString()), e.rowSpan !== 1 && (a.rowspan = e.rowSpan.toString()), [c.freshElement(r, a, [c.forceWrite].concat(i))];
		}
		function te(e, n, r) {
			return k(e, a.ignore).wrap(function() {
				var n = t[e.commentId], r = f.length + 1, i = "[" + _(n) + r + "]";
				return f.push({
					label: i,
					comment: n
				}), [c.freshElement("a", {
					href: "#" + P("comment", e.commentId),
					id: F("comment", e.commentId)
				}, [c.text(i)])];
			});
		}
		function V(e, t, n) {
			var r = e.label, i = e.comment, a = C(i.body, t, n).concat([c.nonFreshElement("p", {}, [c.text(" "), c.freshElement("a", { href: "#" + F("comment", i.commentId) }, [c.text("↑")])])]);
			return [c.freshElement("dt", { id: P("comment", i.commentId) }, [c.text("Comment " + r)]), c.freshElement("dd", {}, a)];
		}
		function ne(e, t, n) {
			return re(e).wrap(function() {
				return [];
			});
		}
		function re(e) {
			var t = A(e);
			return t ? t.to : e.breakType === "line" ? a.topLevelElement("br") : a.empty;
		}
		var H = {
			document: function(e, t, n) {
				var r = C(e.children, t, n), i = C(d.map(function(t) {
					return e.notes.resolve(t);
				}), t, n);
				return r.concat([c.freshElement("ol", {}, i), c.freshElement("dl", {}, h(f, function(e) {
					return V(e, t, n);
				}))]);
			},
			paragraph: T,
			run: D,
			text: function(e, t, n) {
				return [c.text(e.value)];
			},
			tab: function(e, t, n) {
				return [c.text("	")];
			},
			hyperlink: function(e, t, n) {
				var r = { href: e.anchor ? "#" + I(e.anchor) : e.href };
				e.targetFrame != null && (r.target = e.targetFrame);
				var i = C(e.children, t, n);
				return [c.nonFreshElement("a", r, i)];
			},
			checkbox: function(e) {
				var t = { type: "checkbox" };
				return e.checked && (t.checked = "checked"), [c.freshElement("input", t)];
			},
			bookmarkStart: function(e, t, n) {
				return [c.freshElement("a", { id: I(e.name) }, [c.forceWrite])];
			},
			noteReference: function(e, t, n) {
				d.push(e);
				var r = c.freshElement("a", {
					href: "#" + M(e),
					id: N(e)
				}, [c.text("[" + u++ + "]")]);
				return [c.freshElement("sup", {}, [r])];
			},
			note: function(e, t, n) {
				var r = C(e.body, t, n), i = c.elementWithTag(a.element("p", {}, { fresh: !1 }), [c.text(" "), c.freshElement("a", { href: "#" + N(e) }, [c.text("↑")])]), o = r.concat([i]);
				return c.freshElement("li", { id: M(e) }, o);
			},
			commentReference: te,
			comment: V,
			image: p(j(e.convertImage || s.dataUri)),
			table: R,
			tableRow: B,
			tableCell: ee,
			break: ne
		};
		return { convertToHtml: S };
	}
	var f = 1;
	function p(e) {
		return function(t, n, r) {
			return [{
				type: "deferred",
				id: f++,
				value: function() {
					return e(t, n, r);
				}
			}];
		};
	}
	function m(e, t) {
		return o.warning("Unrecognised " + e + " style: '" + t.styleName + "' (Style ID: " + t.styleId + ")");
	}
	function h(e, t) {
		return n.flatten(e.map(t), !0);
	}
	function g(e, t) {
		e.forEach(function(e) {
			t(e), e.children && g(e.children, t);
		});
	}
	var _ = t.commentAuthorLabel = function(e) {
		return e.authorInitials || "";
	};
})), ug = /* @__PURE__ */ a(((e) => {
	var t = eh();
	function n(e) {
		if (e.type === "text") return e.value;
		if (e.type === t.types.tab) return "	";
		var r = e.type === "paragraph" ? "\n\n" : "";
		return (e.children || []).map(n).join("") + r;
	}
	e.convertElementToRawText = n;
})), dg = /* @__PURE__ */ a(((e, t) => {
	var n = t.exports = function(e, t) {
		this._tokens = e, this._startIndex = t || 0;
	};
	n.prototype.head = function() {
		return this._tokens[this._startIndex];
	}, n.prototype.tail = function(e) {
		return new n(this._tokens, this._startIndex + 1);
	}, n.prototype.toArray = function() {
		return this._tokens.slice(this._startIndex);
	}, n.prototype.end = function() {
		return this._tokens[this._tokens.length - 1];
	}, n.prototype.to = function(e) {
		var t = this.head().source, n = e.head() || e.end();
		return t.to(n.source);
	};
})), fg = /* @__PURE__ */ a(((e) => {
	var t = dg();
	e.Parser = function(e) {
		return { parseTokens: function(e, n) {
			return e(new t(n));
		} };
	};
})), pg = /* @__PURE__ */ a(((e) => {
	e.none = Object.create({
		value: function() {
			throw Error("Called value on none");
		},
		isNone: function() {
			return !0;
		},
		isSome: function() {
			return !1;
		},
		map: function() {
			return e.none;
		},
		flatMap: function() {
			return e.none;
		},
		filter: function() {
			return e.none;
		},
		toArray: function() {
			return [];
		},
		orElse: t,
		valueOrElse: t
	});
	function t(e) {
		return typeof e == "function" ? e() : e;
	}
	e.some = function(e) {
		return new n(e);
	};
	var n = function(e) {
		this._value = e;
	};
	n.prototype.value = function() {
		return this._value;
	}, n.prototype.isNone = function() {
		return !1;
	}, n.prototype.isSome = function() {
		return !0;
	}, n.prototype.map = function(e) {
		return new n(e(this._value));
	}, n.prototype.flatMap = function(e) {
		return e(this._value);
	}, n.prototype.filter = function(t) {
		return t(this._value) ? this : e.none;
	}, n.prototype.toArray = function() {
		return [this._value];
	}, n.prototype.orElse = function(e) {
		return this;
	}, n.prototype.valueOrElse = function(e) {
		return this._value;
	}, e.isOption = function(t) {
		return t === e.none || t instanceof n;
	}, e.fromNullable = function(t) {
		return t == null ? e.none : new n(t);
	};
})), mg = /* @__PURE__ */ a(((e, t) => {
	t.exports = {
		failure: function(e, t) {
			if (e.length < 1) throw Error("Failure must have errors");
			return new n({
				status: "failure",
				remaining: t,
				errors: e
			});
		},
		error: function(e, t) {
			if (e.length < 1) throw Error("Failure must have errors");
			return new n({
				status: "error",
				remaining: t,
				errors: e
			});
		},
		success: function(e, t, r) {
			return new n({
				status: "success",
				value: e,
				source: r,
				remaining: t,
				errors: []
			});
		},
		cut: function(e) {
			return new n({
				status: "cut",
				remaining: e,
				errors: []
			});
		}
	};
	var n = function(e) {
		this._value = e.value, this._status = e.status, this._hasValue = e.value !== void 0, this._remaining = e.remaining, this._source = e.source, this._errors = e.errors;
	};
	n.prototype.map = function(e) {
		return this._hasValue ? new n({
			value: e(this._value, this._source),
			status: this._status,
			remaining: this._remaining,
			source: this._source,
			errors: this._errors
		}) : this;
	}, n.prototype.changeRemaining = function(e) {
		return new n({
			value: this._value,
			status: this._status,
			remaining: e,
			source: this._source,
			errors: this._errors
		});
	}, n.prototype.isSuccess = function() {
		return this._status === "success" || this._status === "cut";
	}, n.prototype.isFailure = function() {
		return this._status === "failure";
	}, n.prototype.isError = function() {
		return this._status === "error";
	}, n.prototype.isCut = function() {
		return this._status === "cut";
	}, n.prototype.value = function() {
		return this._value;
	}, n.prototype.remaining = function() {
		return this._remaining;
	}, n.prototype.source = function() {
		return this._source;
	}, n.prototype.errors = function() {
		return this._errors;
	};
})), hg = /* @__PURE__ */ a(((e) => {
	e.error = function(e) {
		return new t(e);
	};
	var t = function(e) {
		this.expected = e.expected, this.actual = e.actual, this._location = e.location;
	};
	t.prototype.describe = function() {
		return (this._location ? this._location.describe() + ":\n" : "") + "Expected " + this.expected + "\nbut got " + this.actual;
	}, t.prototype.lineNumber = function() {
		return this._location.lineNumber();
	}, t.prototype.characterNumber = function() {
		return this._location.characterNumber();
	};
})), gg = /* @__PURE__ */ a(((e) => {
	e.fromArray = function(e) {
		var n = 0, r = function() {
			return n < e.length;
		};
		return new t({
			hasNext: r,
			next: function() {
				if (r()) return e[n++];
				throw Error("No more elements");
			}
		});
	};
	var t = function(e) {
		this._iterator = e;
	};
	t.prototype.map = function(e) {
		var n = this._iterator;
		return new t({
			hasNext: function() {
				return n.hasNext();
			},
			next: function() {
				return e(n.next());
			}
		});
	}, t.prototype.filter = function(e) {
		var n = this._iterator, r = !1, i = !1, a, o = function() {
			if (!r) for (r = !0, i = !1; n.hasNext() && !i;) a = n.next(), i = e(a);
		};
		return new t({
			hasNext: function() {
				return o(), i;
			},
			next: function() {
				o();
				var e = a;
				return r = !1, e;
			}
		});
	}, t.prototype.first = function() {
		var e = this._iterator;
		return this._iterator.hasNext() ? e.next() : null;
	}, t.prototype.toArray = function() {
		for (var e = []; this._iterator.hasNext();) e.push(this._iterator.next());
		return e;
	};
})), _g = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = pg(), i = mg(), a = hg(), o = gg();
	t.token = function(e, t) {
		var n = t !== void 0;
		return function(r) {
			var a = r.head();
			return a && a.name === e && (!n || a.value === t) ? i.success(a.value, r.tail(), a.source) : f(r, d({
				name: e,
				value: t
			}));
		};
	}, t.tokenOfType = function(e) {
		return t.token(e);
	}, t.firstOf = function(e, t) {
		return n.isArray(t) || (t = Array.prototype.slice.call(arguments, 1)), function(n) {
			return o.fromArray(t).map(function(e) {
				return e(n);
			}).filter(function(e) {
				return e.isSuccess() || e.isError();
			}).first() || f(n, e);
		};
	}, t.then = function(e, t) {
		return function(n) {
			var r = e(n);
			return r.map || console.log(r), r.map(t);
		};
	}, t.sequence = function() {
		var e = Array.prototype.slice.call(arguments, 0), r = function(r) {
			var a = n.foldl(e, function(e, t) {
				var n = e.result, a = e.hasCut;
				if (!n.isSuccess()) return {
					result: n,
					hasCut: a
				};
				var o = t(n.remaining());
				if (o.isCut()) return {
					result: n,
					hasCut: !0
				};
				if (o.isSuccess()) {
					var s = t.isCaptured ? n.value().withValue(t, o.value()) : n.value(), c = o.remaining(), l = r.to(c);
					return {
						result: i.success(s, c, l),
						hasCut: a
					};
				}
				return a ? {
					result: i.error(o.errors(), o.remaining()),
					hasCut: a
				} : {
					result: o,
					hasCut: a
				};
			}, {
				result: i.success(new s(), r),
				hasCut: !1
			}).result, o = r.to(a.remaining());
			return a.map(function(e) {
				return e.withValue(t.sequence.source, o);
			});
		};
		r.head = function() {
			var i = n.find(e, a);
			return t.then(r, t.sequence.extract(i));
		}, r.map = function(e) {
			return t.then(r, function(t) {
				return e.apply(this, t.toArray());
			});
		};
		function a(e) {
			return e.isCaptured;
		}
		return r;
	};
	var s = function(e, t) {
		this._values = e || {}, this._valuesArray = t || [];
	};
	s.prototype.withValue = function(e, t) {
		if (e.captureName && e.captureName in this._values) throw Error("Cannot add second value for capture \"" + e.captureName + "\"");
		var r = n.clone(this._values);
		return r[e.captureName] = t, new s(r, this._valuesArray.concat([t]));
	}, s.prototype.get = function(e) {
		if (e.captureName in this._values) return this._values[e.captureName];
		throw Error("No value for capture \"" + e.captureName + "\"");
	}, s.prototype.toArray = function() {
		return this._valuesArray;
	}, t.sequence.capture = function(e, t) {
		var n = function() {
			return e.apply(this, arguments);
		};
		return n.captureName = t, n.isCaptured = !0, n;
	}, t.sequence.extract = function(e) {
		return function(t) {
			return t.get(e);
		};
	}, t.sequence.applyValues = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return function(n) {
			var r = t.map(function(e) {
				return n.get(e);
			});
			return e.apply(this, r);
		};
	}, t.sequence.source = { captureName: "☃source☃" }, t.sequence.cut = function() {
		return function(e) {
			return i.cut(e);
		};
	}, t.optional = function(e) {
		return function(t) {
			var n = e(t);
			return n.isSuccess() ? n.map(r.some) : n.isFailure() ? i.success(r.none, t) : n;
		};
	}, t.zeroOrMoreWithSeparator = function(e, t) {
		return u(e, t, !1);
	}, t.oneOrMoreWithSeparator = function(e, t) {
		return u(e, t, !0);
	};
	var c = t.zeroOrMore = function(e) {
		return function(t) {
			for (var n = [], r; (r = e(t)) && r.isSuccess();) t = r.remaining(), n.push(r.value());
			return r.isError() ? r : i.success(n, t);
		};
	};
	t.oneOrMore = function(e) {
		return t.oneOrMoreWithSeparator(e, l);
	};
	function l(e) {
		return i.success(null, e);
	}
	var u = function(e, n, r) {
		return function(a) {
			var o = e(a);
			if (o.isSuccess()) {
				var s = t.sequence.capture(e, "main"), l = c(t.then(t.sequence(n, s), t.sequence.extract(s)))(o.remaining());
				return i.success([o.value()].concat(l.value()), l.remaining());
			}
			return r || o.isError() ? o : i.success([], a);
		};
	};
	t.leftAssociative = function(e, n, r) {
		var a = r ? [{
			func: r,
			rule: n
		}] : n;
		a = a.map(function(e) {
			return t.then(e.rule, function(t) {
				return function(n, r) {
					return e.func(n, t, r);
				};
			});
		});
		var o = t.firstOf.apply(null, ["rules"].concat(a));
		return function(t) {
			var n = t, r = e(t);
			if (!r.isSuccess()) return r;
			for (var a = o(r.remaining()); a.isSuccess();) {
				var s = a.remaining(), c = n.to(a.remaining()), l = a.value();
				r = i.success(l(r.value(), c), s, c), a = o(r.remaining());
			}
			return a.isError() ? a : r;
		};
	}, t.leftAssociative.firstOf = function() {
		return Array.prototype.slice.call(arguments, 0);
	}, t.nonConsuming = function(e) {
		return function(t) {
			return e(t).changeRemaining(t);
		};
	};
	var d = function(e) {
		return e.value ? e.name + " \"" + e.value + "\"" : e.name;
	};
	function f(e, t) {
		var n, r = e.head();
		return n = r ? a.error({
			expected: t,
			actual: d(r),
			location: r.source
		}) : a.error({
			expected: t,
			actual: "end of tokens"
		}), i.failure([n], e);
	}
})), vg = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t) {
		return {
			asString: function() {
				return e;
			},
			range: function(r, i) {
				return new n(e, t, r, i);
			}
		};
	};
	var n = function(e, t, n, r) {
		this._string = e, this._description = t, this._startIndex = n, this._endIndex = r;
	};
	n.prototype.to = function(e) {
		return new n(this._string, this._description, this._startIndex, e._endIndex);
	}, n.prototype.describe = function() {
		var e = this._position();
		return (this._description ? this._description + "\n" : "") + "Line number: " + e.lineNumber + "\nCharacter number: " + e.characterNumber;
	}, n.prototype.lineNumber = function() {
		return this._position().lineNumber;
	}, n.prototype.characterNumber = function() {
		return this._position().characterNumber;
	}, n.prototype._position = function() {
		for (var e = this, t = 0, n = function() {
			return e._string.indexOf("\n", t);
		}, r = 1; n() !== -1 && n() < this._startIndex;) t = n() + 1, r += 1;
		var i = this._startIndex - t + 1;
		return {
			lineNumber: r,
			characterNumber: i
		};
	};
})), yg = /* @__PURE__ */ a(((e, t) => {
	t.exports = function(e, t, n) {
		this.name = e, this.value = t, n && (this.source = n);
	};
})), bg = /* @__PURE__ */ a(((e) => {
	var t = _g(), n = mg();
	e.parser = function(e, n, a) {
		var o = {
			rule: u,
			leftAssociative: d,
			rightAssociative: f
		}, s = new r(a.map(l)), c = t.firstOf(e, n);
		function l(e) {
			return {
				name: e.name,
				rule: i(e.ruleBuilder.bind(null, o))
			};
		}
		function u() {
			return p(s);
		}
		function d(e) {
			return p(s.untilExclusive(e));
		}
		function f(e) {
			return p(s.untilInclusive(e));
		}
		function p(e) {
			return m.bind(null, e);
		}
		function m(e, t) {
			var n = c(t);
			return n.isSuccess() ? e.apply(n) : n;
		}
		return o;
	};
	function r(e) {
		function i(t) {
			return new r(e.slice(0, o().indexOf(t)));
		}
		function a(t) {
			return new r(e.slice(0, o().indexOf(t) + 1));
		}
		function o() {
			return e.map(function(e) {
				return e.name;
			});
		}
		function s(e) {
			for (var t, r;;) if (t = c(e.remaining()), t.isSuccess()) r = e.source().to(t.source()), e = n.success(t.value()(e.value(), r), t.remaining(), r);
			else if (t.isFailure()) return e;
			else return t;
		}
		function c(n) {
			return t.firstOf("infix", e.map(function(e) {
				return e.rule;
			}))(n);
		}
		return {
			apply: s,
			untilExclusive: i,
			untilInclusive: a
		};
	}
	e.infix = function(t, n) {
		function r(r) {
			return e.infix(t, function(e) {
				var t = n(e);
				return function(e) {
					return t(e).map(function(e) {
						return function(t, n) {
							return r(t, e, n);
						};
					});
				};
			});
		}
		return {
			name: t,
			ruleBuilder: n,
			map: r
		};
	};
	var i = function(e) {
		var t;
		return function(n) {
			return t ||= e(), t(n);
		};
	};
})), xg = /* @__PURE__ */ a(((e) => {
	var t = yg(), n = vg();
	e.RegexTokeniser = r;
	function r(e) {
		e = e.map(function(e) {
			return {
				name: e.name,
				regex: new RegExp(e.regex.source, "g")
			};
		});
		function r(e, t) {
			for (var r = new n(e, t), o = 0, s = []; o < e.length;) {
				var c = i(e, o, r);
				o = c.endIndex, s.push(c.token);
			}
			return s.push(a(e, r)), s;
		}
		function i(n, r, i) {
			for (var a = 0; a < e.length; a++) {
				var o = e[a].regex;
				o.lastIndex = r;
				var s = o.exec(n);
				if (s) {
					var c = r + s[0].length;
					if (s.index === r && c > r) {
						var l = s[1], u = new t(e[a].name, l, i.range(r, c));
						return {
							token: u,
							endIndex: c
						};
					}
				}
			}
			var c = r + 1, u = new t("unrecognisedCharacter", n.substring(r, c), i.range(r, c));
			return {
				token: u,
				endIndex: c
			};
		}
		function a(e, n) {
			return new t("end", null, n.range(e.length, e.length));
		}
		return { tokenise: r };
	}
})), Sg = /* @__PURE__ */ a(((e) => {
	e.Parser = fg().Parser, e.rules = _g(), e.errors = hg(), e.results = mg(), e.StringSource = vg(), e.Token = yg(), e.bottomUp = bg(), e.RegexTokeniser = xg().RegexTokeniser, e.rule = function(e) {
		var t;
		return function(n) {
			return t ||= e(), t(n);
		};
	};
})), Cg = /* @__PURE__ */ a(((e) => {
	e.paragraph = t, e.run = n, e.table = r, e.bold = new a("bold"), e.italic = new a("italic"), e.underline = new a("underline"), e.strikethrough = new a("strikethrough"), e.allCaps = new a("allCaps"), e.smallCaps = new a("smallCaps"), e.highlight = i, e.commentReference = new a("commentReference"), e.lineBreak = new s({ breakType: "line" }), e.pageBreak = new s({ breakType: "page" }), e.columnBreak = new s({ breakType: "column" }), e.equalTo = l, e.startsWith = u;
	function t(e) {
		return new a("paragraph", e);
	}
	function n(e) {
		return new a("run", e);
	}
	function r(e) {
		return new a("table", e);
	}
	function i(e) {
		return new o(e);
	}
	function a(e, t) {
		t ||= {}, this._elementType = e, this._styleId = t.styleId, this._styleName = t.styleName, t.list && (this._listIndex = t.list.levelIndex, this._listIsOrdered = t.list.isOrdered);
	}
	a.prototype.matches = function(e) {
		return e.type === this._elementType && (this._styleId === void 0 || e.styleId === this._styleId) && (this._styleName === void 0 || e.styleName && this._styleName.operator(this._styleName.operand, e.styleName)) && (this._listIndex === void 0 || c(e, this._listIndex, this._listIsOrdered)) && (this._breakType === void 0 || this._breakType === e.breakType);
	};
	function o(e) {
		e ||= {}, this._color = e.color;
	}
	o.prototype.matches = function(e) {
		return e.type === "highlight" && (this._color === void 0 || e.color === this._color);
	};
	function s(e) {
		e ||= {}, this._breakType = e.breakType;
	}
	s.prototype.matches = function(e) {
		return e.type === "break" && (this._breakType === void 0 || e.breakType === this._breakType);
	};
	function c(e, t, n) {
		return e.numbering && e.numbering.level == t && e.numbering.isOrdered == n;
	}
	function l(e) {
		return {
			operator: d,
			operand: e
		};
	}
	function u(e) {
		return {
			operator: f,
			operand: e
		};
	}
	function d(e, t) {
		return e.toUpperCase() === t.toUpperCase();
	}
	function f(e, t) {
		return t.toUpperCase().indexOf(e.toUpperCase()) === 0;
	}
})), wg = /* @__PURE__ */ a(((e) => {
	var t = Sg().RegexTokeniser;
	e.tokenise = r;
	var n = "'((?:\\\\.|[^'])*)";
	function r(e) {
		var r = "(?:[a-zA-Z\\-_]|\\\\.)";
		return new t([
			{
				name: "identifier",
				regex: RegExp("(" + r + "(?:" + r + "|[0-9])*)")
			},
			{
				name: "dot",
				regex: /\./
			},
			{
				name: "colon",
				regex: /:/
			},
			{
				name: "gt",
				regex: />/
			},
			{
				name: "whitespace",
				regex: /\s+/
			},
			{
				name: "arrow",
				regex: /=>/
			},
			{
				name: "equals",
				regex: /=/
			},
			{
				name: "startsWith",
				regex: /\^=/
			},
			{
				name: "open-paren",
				regex: /\(/
			},
			{
				name: "close-paren",
				regex: /\)/
			},
			{
				name: "open-square-bracket",
				regex: /\[/
			},
			{
				name: "close-square-bracket",
				regex: /\]/
			},
			{
				name: "string",
				regex: RegExp(n + "'")
			},
			{
				name: "unterminated-string",
				regex: new RegExp(n)
			},
			{
				name: "integer",
				regex: /([0-9]+)/
			},
			{
				name: "choice",
				regex: /\|/
			},
			{
				name: "bang",
				regex: /(!)/
			}
		]).tokenise(e);
	}
})), Tg = /* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = Sg(), i = Cg(), a = ig(), o = wg().tokenise, s = th();
	t.readHtmlPath = f, t.readDocumentMatcher = u, t.readStyle = c;
	function c(e) {
		return S(T, e);
	}
	function l() {
		return r.rules.sequence(r.rules.sequence.capture(d()), r.rules.tokenOfType("whitespace"), r.rules.tokenOfType("arrow"), r.rules.sequence.capture(r.rules.optional(r.rules.sequence(r.rules.tokenOfType("whitespace"), r.rules.sequence.capture(p())).head())), r.rules.tokenOfType("end")).map(function(e, t) {
			return {
				from: e,
				to: t.valueOrElse(a.empty)
			};
		});
	}
	function u(e) {
		return S(d(), e);
	}
	function d() {
		var e = r.rules.sequence, t = function(e, t) {
			return r.rules.then(r.rules.token("identifier", e), function() {
				return t;
			});
		}, a = t("p", i.paragraph), o = t("r", i.run), s = r.rules.firstOf("p or r or table", a, o), c = r.rules.sequence(r.rules.tokenOfType("dot"), r.rules.sequence.cut(), r.rules.sequence.capture(m)).map(function(e) {
			return { styleId: e };
		}), l = r.rules.firstOf("style name matcher", r.rules.then(r.rules.sequence(r.rules.tokenOfType("equals"), r.rules.sequence.cut(), r.rules.sequence.capture(g)).head(), function(e) {
			return { styleName: i.equalTo(e) };
		}), r.rules.then(r.rules.sequence(r.rules.tokenOfType("startsWith"), r.rules.sequence.cut(), r.rules.sequence.capture(g)).head(), function(e) {
			return { styleName: i.startsWith(e) };
		})), u = r.rules.sequence(r.rules.tokenOfType("open-square-bracket"), r.rules.sequence.cut(), r.rules.token("identifier", "style-name"), r.rules.sequence.capture(l), r.rules.tokenOfType("close-square-bracket")).head(), d = r.rules.firstOf("list type", t("ordered-list", { isOrdered: !0 }), t("unordered-list", { isOrdered: !1 })), f = e(r.rules.tokenOfType("colon"), e.capture(d), e.cut(), r.rules.tokenOfType("open-paren"), e.capture(h), r.rules.tokenOfType("close-paren")).map(function(e, t) {
			return { list: {
				isOrdered: e.isOrdered,
				levelIndex: t - 1
			} };
		});
		function p(e) {
			var t = r.rules.firstOf.apply(r.rules.firstOf, ["matcher suffix"].concat(e)), i = r.rules.zeroOrMore(t);
			return r.rules.then(i, function(e) {
				var t = {};
				return e.forEach(function(e) {
					n.extend(t, e);
				}), t;
			});
		}
		var _ = e(e.capture(s), e.capture(p([
			c,
			u,
			f
		]))).map(function(e, t) {
			return e(t);
		}), v = e(r.rules.token("identifier", "table"), e.capture(p([c, u]))).map(function(e) {
			return i.table(e);
		}), y = t("b", i.bold), b = t("i", i.italic), x = t("u", i.underline), S = t("strike", i.strikethrough), C = t("all-caps", i.allCaps), w = t("small-caps", i.smallCaps), T = e(r.rules.token("identifier", "highlight"), r.rules.sequence.capture(r.rules.optional(r.rules.sequence(r.rules.tokenOfType("open-square-bracket"), r.rules.sequence.cut(), r.rules.token("identifier", "color"), r.rules.tokenOfType("equals"), r.rules.sequence.capture(g), r.rules.tokenOfType("close-square-bracket")).head()))).map(function(e) {
			return i.highlight({ color: e.valueOrElse(void 0) });
		}), E = t("comment-reference", i.commentReference), D = e(r.rules.token("identifier", "br"), e.cut(), r.rules.tokenOfType("open-square-bracket"), r.rules.token("identifier", "type"), r.rules.tokenOfType("equals"), e.capture(g), r.rules.tokenOfType("close-square-bracket")).map(function(e) {
			switch (e) {
				case "line": return i.lineBreak;
				case "page": return i.pageBreak;
				case "column": return i.columnBreak;
			}
		});
		return r.rules.firstOf("element type", _, v, y, b, x, S, C, w, T, E, D);
	}
	function f(e) {
		return S(p(), e);
	}
	function p() {
		var e = r.rules.sequence.capture, t = r.rules.tokenOfType("whitespace"), n = r.rules.then(r.rules.optional(r.rules.sequence(r.rules.tokenOfType("colon"), r.rules.token("identifier", "fresh"))), function(e) {
			return e.map(function() {
				return !0;
			}).valueOrElse(!1);
		}), i = r.rules.then(r.rules.optional(r.rules.sequence(r.rules.tokenOfType("colon"), r.rules.token("identifier", "separator"), r.rules.tokenOfType("open-paren"), e(g), r.rules.tokenOfType("close-paren")).head()), function(e) {
			return e.valueOrElse("");
		}), o = r.rules.oneOrMoreWithSeparator(m, r.rules.tokenOfType("choice")), s = r.rules.sequence(e(o), e(r.rules.zeroOrMore(x)), e(n), e(i)).map(function(e, t, n, r) {
			var i = Object.create(null), o = {};
			return t.forEach(function(e) {
				e.append && i[e.name] ? i[e.name] += " " + e.value : i[e.name] = e.value;
			}), n && (o.fresh = !0), r && (o.separator = r), a.element(e, i, o);
		});
		return r.rules.firstOf("html path", r.rules.then(r.rules.tokenOfType("bang"), function() {
			return a.ignore;
		}), r.rules.then(r.rules.zeroOrMoreWithSeparator(s, r.rules.sequence(t, r.rules.tokenOfType("gt"), t)), a.elements));
	}
	var m = r.rules.then(r.rules.tokenOfType("identifier"), v), h = r.rules.tokenOfType("integer"), g = r.rules.then(r.rules.tokenOfType("string"), v), _ = {
		n: "\n",
		r: "\r",
		t: "	"
	};
	function v(e) {
		return e.replace(/\\(.)/g, function(e, t) {
			return _[t] || t;
		});
	}
	var y = r.rules.sequence(r.rules.tokenOfType("open-square-bracket"), r.rules.sequence.cut(), r.rules.sequence.capture(m), r.rules.tokenOfType("equals"), r.rules.sequence.capture(g), r.rules.tokenOfType("close-square-bracket")).map(function(e, t) {
		return {
			name: e,
			value: t,
			append: !1
		};
	}), b = r.rules.sequence(r.rules.tokenOfType("dot"), r.rules.sequence.cut(), r.rules.sequence.capture(m)).map(function(e) {
		return {
			name: "class",
			value: e,
			append: !0
		};
	}), x = r.rules.firstOf("attribute or class", y, b);
	function S(e, t) {
		var n = o(t), i = r.Parser().parseTokens(e, n);
		return i.isSuccess() ? s.success(i.value()) : new s.Result(null, [s.warning(C(t, i))]);
	}
	function C(e, t) {
		return "Did not understand this style mapping, so ignored it: " + e + "\n" + t.errors().map(w).join("\n");
	}
	function w(e) {
		return "Error was at character number " + e.characterNumber() + ": Expected " + e.expected + " but got " + e.actual;
	}
	var T = l();
})), Eg = /* @__PURE__ */ a(((t) => {
	t.readOptions = a;
	var n = (Q(), e(Z)), r = t._defaultStyleMap = /* @__PURE__ */ "p.Heading1 => h1:fresh,p.Heading2 => h2:fresh,p.Heading3 => h3:fresh,p.Heading4 => h4:fresh,p.Heading5 => h5:fresh,p.Heading6 => h6:fresh,p[style-name='Heading 1'] => h1:fresh,p[style-name='Heading 2'] => h2:fresh,p[style-name='Heading 3'] => h3:fresh,p[style-name='Heading 4'] => h4:fresh,p[style-name='Heading 5'] => h5:fresh,p[style-name='Heading 6'] => h6:fresh,p[style-name='heading 1'] => h1:fresh,p[style-name='heading 2'] => h2:fresh,p[style-name='heading 3'] => h3:fresh,p[style-name='heading 4'] => h4:fresh,p[style-name='heading 5'] => h5:fresh,p[style-name='heading 6'] => h6:fresh,p.Heading => h1:fresh,p[style-name='Heading'] => h1:fresh,r[style-name='Strong'] => strong,p[style-name='footnote text'] => p:fresh,r[style-name='footnote reference'] =>,p[style-name='endnote text'] => p:fresh,r[style-name='endnote reference'] =>,p[style-name='annotation text'] => p:fresh,r[style-name='annotation reference'] =>,p[style-name='Footnote'] => p:fresh,r[style-name='Footnote anchor'] =>,p[style-name='Endnote'] => p:fresh,r[style-name='Endnote anchor'] =>,p:unordered-list(1) => ul > li:fresh,p:unordered-list(2) => ul|ol > li > ul > li:fresh,p:unordered-list(3) => ul|ol > li > ul|ol > li > ul > li:fresh,p:unordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh,p:unordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh,p:ordered-list(1) => ol > li:fresh,p:ordered-list(2) => ul|ol > li > ol > li:fresh,p:ordered-list(3) => ul|ol > li > ul|ol > li > ol > li:fresh,p:ordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh,p:ordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh,r[style-name='Hyperlink'] =>,p[style-name='Normal'] => p:fresh,p.Body => p:fresh,p[style-name='Body'] => p:fresh".split(","), i = t._standardOptions = {
		externalFileAccess: !1,
		transformDocument: s,
		includeDefaultStyleMap: !0,
		includeEmbeddedStyleMap: !0
	};
	function a(e) {
		return e ||= {}, n.extend({}, i, e, {
			customStyleMap: o(e.styleMap),
			readStyleMap: function() {
				var e = this.customStyleMap;
				return this.includeEmbeddedStyleMap && (e = e.concat(o(this.embeddedStyleMap))), this.includeDefaultStyleMap && (e = e.concat(r)), e;
			}
		});
	}
	function o(e) {
		return e ? n.isString(e) ? e.split("\n").map(function(e) {
			return e.trim();
		}).filter(function(e) {
			return e !== "" && e.charAt(0) !== "#";
		}) : e : [];
	}
	function s(e) {
		return e;
	}
})), Dg = /* @__PURE__ */ a(((e) => {
	var t = $m(), n = ih();
	e.openZip = r;
	function r(e) {
		return e.arrayBuffer ? t.resolve(n.openArrayBuffer(e.arrayBuffer)) : t.reject(/* @__PURE__ */ Error("Could not find file in options"));
	}
})), Og = /* @__PURE__ */ a(((e) => {
	var t = ig(), n = rg();
	e.element = r;
	function r(e) {
		return function(r) {
			return n.elementWithTag(t.element(e), [r]);
		};
	}
})), kg = /* @__PURE__ */ r((/* @__PURE__ */ a(((t) => {
	var n = (Q(), e(Z)), r = $h(), i = eg(), a = lg().DocumentConverter;
	ug().convertElementToRawText;
	var o = Tg().readStyle, s = Eg().readOptions, c = Dg(), l = th().Result;
	t.convertToHtml = u, t.images = ag(), t.transforms = Hh(), t.underline = Og();
	function u(e, t) {
		return d(e, t);
	}
	function d(e, t) {
		return t = s(t), c.openZip(e).tap(function(e) {
			return i.readStyleMap(e).then(function(e) {
				t.embeddedStyleMap = e;
			});
		}).then(function(n) {
			return r.read(n, e, t).then(function(e) {
				return e.map(t.transformDocument);
			}).then(function(e) {
				return f(e, t);
			});
		});
	}
	function f(e, t) {
		var r = p(t.readStyleMap()), i = new a(n.extend({}, t, { styleMap: r.value }));
		return e.flatMapThen(function(e) {
			return r.flatMapThen(function(t) {
				return i.convertToHtml(e);
			});
		});
	}
	function p(e) {
		return l.combine((e || []).map(o)).map(function(e) {
			return e.filter(function(e) {
				return !!e;
			});
		});
	}
})))(), 1), Ag = ({ url: e }) => {
	let [t, n] = u("");
	return l(() => {
		(async () => {
			let t = await (await fetch(e)).arrayBuffer(), r = await kg.convertToHtml({ arrayBuffer: t });
			n(r.value);
		})();
	}, [e]), /* @__PURE__ */ d("div", {
		className: "word-editor__document-content",
		dangerouslySetInnerHTML: { __html: t }
	});
}, jg = ({ url: e }) => {
	let { file: t, editor: n, setEditor: r, loadContent: i, setContent: a } = As(), o = (e) => {
		switch (e) {
			case "heading": return "<h2>New heading</h2>";
			case "paragraph": return "<p>New paragraph</p>";
			case "image": return "<p>[Image]</p>";
			default: return "";
		}
	};
	return l(() => {
		(async () => {
			let t = await (await fetch(e)).arrayBuffer(), n = await kg.convertToHtml({ arrayBuffer: t });
			i(n.value);
		})();
	}, [e, i]), /* @__PURE__ */ d("div", {
		ref: r,
		className: "word-editor__document-content",
		contentEditable: !0,
		suppressContentEditableWarning: !0,
		onInput: (e) => {
			a(e.currentTarget.innerHTML);
		},
		onDragOver: (e) => {
			e.preventDefault(), e.dataTransfer.dropEffect = "copy";
		},
		onDrop: (e) => {
			e.preventDefault();
			let t = e.dataTransfer.getData("application/reactedge-document-block");
			if (!t || !n) return;
			let r = o(t), i = document.caretRangeFromPoint(e.clientX, e.clientY);
			if (!i || !n.contains(i.startContainer)) n.insertAdjacentHTML("beforeend", r);
			else {
				let e = i.createContextualFragment(r);
				i.deleteContents(), i.insertNode(e);
			}
			a(n.innerHTML), n.focus();
		},
		dangerouslySetInnerHTML: { __html: t.content }
	});
}, Mg = ({ error: e }) => /* @__PURE__ */ d("div", {
	className: "word-editor__document word-editor__document--error",
	children: /* @__PURE__ */ f("div", {
		className: "word-editor__error-state",
		children: [
			/* @__PURE__ */ d("div", {
				className: "word-editor__error-icon",
				children: "!"
			}),
			/* @__PURE__ */ d("div", {
				className: "word-editor__error-title",
				children: "Unable to load document"
			}),
			/* @__PURE__ */ d("div", {
				className: "word-editor__error-description",
				children: e
			})
		]
	})
}), Ng = () => {
	let { file: e, error: t } = As();
	if (t) return /* @__PURE__ */ d(Mg, { error: t });
	if (!e.url) return /* @__PURE__ */ d("div", {
		className: "word-editor__document word-editor__document--empty",
		children: /* @__PURE__ */ f("div", {
			className: "word-editor__empty-state",
			children: [
				/* @__PURE__ */ d("div", {
					className: "word-editor__empty-icon",
					children: "＋"
				}),
				/* @__PURE__ */ d("div", {
					className: "word-editor__empty-title",
					children: "No document loaded"
				}),
				/* @__PURE__ */ d("div", {
					className: "word-editor__empty-description",
					children: "Load a document or create a new one to start editing."
				})
			]
		})
	});
	let n;
	switch (e.type) {
		case "pdf":
			n = /* @__PURE__ */ d(Ns, { file: e });
			break;
		case "docx":
			n = /* @__PURE__ */ d(jg, { url: e.url });
			break;
		case "odt":
			n = /* @__PURE__ */ d(Ag, { url: e.url });
			break;
		default: n = null;
	}
	return /* @__PURE__ */ d("div", {
		className: "word-editor__document",
		children: n
	});
}, Pg = class {
	async toPdf(e) {
		if (!e.content) return;
		let t = (await import("./html2pdf-akal6HgV.js").then((e) => /* @__PURE__ */ r(e.default, 1))).default, n = document.createElement("div");
		n.innerHTML = e.content, n.className = "word-editor__pdf-export";
		let i = e.filename.replace(/\.docx$/i, ".pdf");
		await t().from(n).set({
			filename: i,
			margin: 15,
			jsPDF: {
				unit: "mm",
				format: "a4",
				orientation: "portrait"
			}
		}).save();
	}
}, Fg = () => {
	let { file: e } = As();
	return /* @__PURE__ */ f("div", {
		className: "word-editor__save-or-export",
		children: [/* @__PURE__ */ d("button", {
			type: "button",
			disabled: !e.isDirty,
			children: "Save"
		}), /* @__PURE__ */ d("button", {
			type: "button",
			disabled: !e.content,
			onClick: async () => {
				await new Pg().toPdf(e);
			},
			children: "Export PDF"
		})]
	});
}, Ig = ks.Provider, Lg = {
	filename: "",
	content: "",
	url: null,
	type: null,
	isDirty: !1
}, Rg = ({ children: e }) => {
	let [t, n] = u({
		file: Lg,
		error: null
	}), [r, i] = u(null), a = s((e) => {
		n((t) => ({
			...t,
			file: {
				...t.file,
				content: e,
				isDirty: !1
			}
		}));
	}, []), o = s((e) => {
		n((t) => ({
			...t,
			file: {
				...t.file,
				content: e,
				isDirty: !0
			}
		}));
	}, []), c = () => {
		n((e) => ({
			...e,
			file: {
				...e.file,
				isDirty: !1
			}
		}));
	}, l = (e) => {
		n((t) => ({
			...t,
			file: {
				...e,
				isDirty: !1
			},
			error: null
		}));
	}, f = s((e) => {
		n((t) => ({
			...t,
			error: e
		}));
	}, []);
	return /* @__PURE__ */ d(Ig, {
		value: {
			file: t.file,
			error: t.error,
			editor: r,
			setFile: l,
			setError: f,
			setEditor: i,
			loadContent: a,
			setContent: o,
			markSaved: c
		},
		children: e
	});
}, zg = class {
	editor;
	constructor(e) {
		this.editor = e;
	}
	focus() {
		this.editor.focus();
	}
	bold() {
		this.execute("bold");
	}
	italic() {
		this.execute("italic");
	}
	heading() {
		this.execute("formatBlock", "h2");
	}
	bulletList() {
		this.execute("insertUnorderedList");
	}
	undo() {
		this.execute("undo");
	}
	redo() {
		this.execute("redo");
	}
	execute(e, t) {
		this.editor.focus(), document.execCommand(e, !1, t);
	}
}, Bg = () => {
	let { editor: e } = As();
	if (!e) return null;
	let t = new zg(e);
	return /* @__PURE__ */ f("div", {
		className: "word-editor__toolbar",
		role: "toolbar",
		"aria-label": "Document formatting",
		children: [
			/* @__PURE__ */ d("button", {
				type: "button",
				onClick: () => t.bold(),
				"aria-label": "Bold",
				children: /* @__PURE__ */ d("strong", { children: "B" })
			}),
			/* @__PURE__ */ d("button", {
				type: "button",
				onClick: () => t.italic(),
				"aria-label": "Italic",
				children: /* @__PURE__ */ d("em", { children: "I" })
			}),
			/* @__PURE__ */ d("button", {
				type: "button",
				onClick: () => t.heading(),
				children: "Heading"
			}),
			/* @__PURE__ */ d("button", {
				type: "button",
				onClick: () => t.bulletList(),
				children: "List"
			})
		]
	});
}, Vg = [
	{
		type: "heading",
		label: "Heading"
	},
	{
		type: "paragraph",
		label: "Paragraph"
	},
	{
		type: "image",
		label: "Image"
	}
], Hg = () => {
	let e = (e, t) => {
		e.dataTransfer.setData("application/reactedge-document-block", t), e.dataTransfer.effectAllowed = "copy";
	};
	return /* @__PURE__ */ f("aside", {
		className: "word-editor__block-palette",
		children: [/* @__PURE__ */ d("div", {
			className: "word-editor__block-palette-title",
			children: "Blocks"
		}), Vg.map((t) => /* @__PURE__ */ d("div", {
			className: "word-editor__block",
			draggable: !0,
			onDragStart: (n) => e(n, t.type),
			children: t.label
		}, t.type))]
	});
}, Ug = ({ config: e }) => /* @__PURE__ */ d("header", {
	className: "word-editor__header",
	children: /* @__PURE__ */ f("div", { children: [/* @__PURE__ */ d("h1", {
		"data-wordeditor-title": !0,
		className: "word-editor__title",
		style: { color: e.settings.colour },
		children: e.data.title
	}), /* @__PURE__ */ d("p", {
		className: "word-editor__subtitle",
		children: "Create, edit and export documents"
	})] })
}), Wg = ({ config: e }) => /* @__PURE__ */ f(Rg, { children: [
	/* @__PURE__ */ d(Ug, { config: e }),
	/* @__PURE__ */ d(Ms, {}),
	/* @__PURE__ */ d(Bg, {}),
	/* @__PURE__ */ f("div", {
		className: "word-editor__workspace",
		children: [/* @__PURE__ */ d(Hg, {}), /* @__PURE__ */ d("div", {
			className: "word-editor__document-area",
			children: /* @__PURE__ */ d(Ng, {})
		})]
	}),
	/* @__PURE__ */ d(Fg, {})
] });
//#endregion
//#region src/bootstrap/WidgetWrapper.tsx
function Gg({ contract: e, runtime: t }) {
	let n = xs(e, t, Os());
	return n ? /* @__PURE__ */ d(Wg, { config: n }) : null;
}
//#endregion
//#region src/bootstrap/widget-root.tsx
function Kg({ contract: e, runtime: t, hostElement: n }) {
	return /* @__PURE__ */ d("div", {
		className: `reactedge-${bs}`,
		children: /* @__PURE__ */ d(Ds, {
			...n ? { hostElement: n } : {},
			children: /* @__PURE__ */ d(Gg, {
				contract: e,
				runtime: t
			})
		})
	});
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/host.ts
var qg = class {
	styles;
	constructor(e) {
		this.styles = e;
	}
	getMountedHost(e) {
		let t = e.shadowRoot ?? e.attachShadow({ mode: "open" });
		if (Array.isArray(this.styles)) for (let e of this.styles) this.injectStyle(t, e);
		return t;
	}
	injectStyle(e, t) {
		let n = document.createElement("style");
		n.textContent = t, e.appendChild(n);
	}
}, Jg = [
	".reactedge-editorword .word-editor{box-sizing:border-box;flex-direction:column;gap:16px;width:100%;min-height:80vh;display:flex}.reactedge-editorword .word-editor__toolbar{border:1px solid #ddd;border-radius:8px;align-items:center;gap:12px;padding:12px;display:flex}.reactedge-editorword .word-editor__toolbar input{min-width:0;font:inherit;border:1px solid #ccc;border-radius:4px;flex:1;padding:8px 10px}.reactedge-editorword .word-editor__toolbar button,.reactedge-editorword .word-editor__save-or-export button{cursor:pointer;font:inherit;border:1px solid #bbb;border-radius:4px;padding:8px 16px}.reactedge-editorword .word-editor__toolbar button:disabled,.reactedge-editorword .word-editor__save-or-export button:disabled{cursor:default;opacity:.5}.reactedge-editorword .word-editor__document{border:1px solid #ddd;border-radius:8px;flex:1;min-height:0;overflow:hidden}.reactedge-editorword .word-editor__document-frame{border:0;width:100%;height:70vh;display:block}.reactedge-editorword .word-editor__save-or-export{justify-content:flex-end;gap:12px;display:flex}",
	".reactedge-editorword .word-editor__document--empty{box-sizing:border-box;background:#f7f7f7;justify-content:center;align-items:center;min-height:60vh;padding:32px;display:flex}.reactedge-editorword .word-editor__empty-state{box-sizing:border-box;text-align:center;background:#fff;border:1px solid #ddd;border-radius:8px;width:100%;max-width:420px;padding:48px 32px;box-shadow:0 2px 8px #0000000f}.reactedge-editorword .word-editor__empty-icon{border:1px solid #ccc;border-radius:50%;justify-content:center;align-items:center;width:48px;height:48px;margin:0 auto 20px;font-size:24px;display:flex}.reactedge-editorword .word-editor__empty-title{margin-bottom:8px;font-size:18px;font-weight:600}.reactedge-editorword .word-editor__empty-description{color:#666;font-size:14px;line-height:1.5}",
	".reactedge-editorword .word-editor__header{margin-bottom:20px}.reactedge-editorword .word-editor__title{letter-spacing:-.02em;margin:0;font-size:28px;font-weight:600;line-height:1.2}.reactedge-editorword .word-editor__subtitle{color:#666;margin:6px 0 0;font-size:14px;line-height:1.4}",
	".reactedge-editorword .word-editor__document--error{box-sizing:border-box;background:#f7f7f7;justify-content:center;align-items:center;min-height:60vh;padding:32px;display:flex}.reactedge-editorword .word-editor__error-state{box-sizing:border-box;text-align:center;background:snow;border:1px solid #f1b8b8;border-radius:8px;width:100%;max-width:420px;padding:48px 32px;box-shadow:0 2px 8px #0000000f}.reactedge-editorword .word-editor__error-icon{color:#b42318;background:#fef3f2;border:1px solid #f1a7a2;border-radius:50%;justify-content:center;align-items:center;width:48px;height:48px;margin:0 auto 20px;font-size:22px;font-weight:600;display:flex}.reactedge-editorword .word-editor__error-title{color:#b42318;margin-bottom:8px;font-size:18px;font-weight:600}.reactedge-editorword .word-editor__error-description{color:#666;font-size:14px;line-height:1.5}",
	".reactedge-editorword .word-editor__workspace{grid-template-columns:180px minmax(0,1fr);align-items:start;gap:20px;display:grid}.reactedge-editorword .word-editor__block-palette{background:#fff;border:1px solid #ddd;border-radius:8px;padding:16px}.reactedge-editorword .word-editor__block-palette-title{text-transform:uppercase;letter-spacing:.04em;color:#666;margin-bottom:12px;font-size:13px;font-weight:600}.reactedge-editorword .word-editor__block{cursor:grab;-webkit-user-select:none;user-select:none;background:#f7f7f7;border:1px solid #ddd;border-radius:6px;margin-bottom:8px;padding:10px 12px;font-size:14px}.reactedge-editorword .word-editor__block:hover{background:#f1f1f1}.reactedge-editorword .word-editor__block:active{cursor:grabbing}"
];
//#endregion
//#region src/Widget.tsx
function Yg({ container: e, contract: t, runtime: n }) {
	let r = new qg(Jg).getMountedHost(e);
	p(r).render(/* @__PURE__ */ d(Kg, {
		contract: t,
		runtime: n
	}));
}
//#endregion
export { Yg as Widget };
