import { createContext as e, useContext as t, useEffect as n, useId as r, useRef as i, useState as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import { createRoot as l } from "react-dom/client";
//#region ../../node_modules/zod/v4/core/util.js
function u(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function d(e, t = "|") {
	return e.map((e) => ue(e)).join(t);
}
function f(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
var p = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		let e = this._getter;
		return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
	}
};
function m(e) {
	return new p(e);
}
function h(e) {
	return e == null;
}
function g(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function _(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function v(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function y(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function b(e) {
	return y(e._zod.def) ?? e._zod.def.shape;
}
function x(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return v(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function S(e, t, n) {
	t in e ? v(e, t, n) : e[t] = n;
}
function C(e, t, n, r) {
	let i = b(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? x(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : S(e, a, r ? r(n.value, a) : n.value));
	}
}
function ee(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? x(e, n, () => t[n]) : S(e, n, r.value));
	}
}
function w(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function te(e) {
	return JSON.stringify(e);
}
function ne(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var re = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function ie(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var ae = /* @__PURE__*/ m(() => {
	if (P.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function oe(e) {
	if (ie(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return ie(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function se(e) {
	return oe(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var ce = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function le(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function T(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function E(e) {
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
function ue(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function de(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var fe = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, pe = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function me(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return C(i, e, he(e, t)), T(e, w(n, {
		shape: i,
		checks: []
	}));
}
function he(e, t) {
	let n = b(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function ge(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(he(e, t)), a = {};
	return C(a, e, Reflect.ownKeys(b(e)).filter((e) => !i.has(e))), T(e, w(n, {
		shape: a,
		checks: []
	}));
}
function _e(e, t) {
	if (!oe(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = b(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return T(e, w(e._zod.def, { shape: ve(e, t) }));
}
function ve(e, t) {
	let n = {};
	return C(n, e, Reflect.ownKeys(b(e))), ee(n, t), n;
}
function ye(e, t) {
	if (!oe(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return T(e, w(e._zod.def, { shape: ve(e, t) }));
}
function be(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return C(n, e, Reflect.ownKeys(b(e))), C(n, t, Reflect.ownKeys(b(t))), T(e, w(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function xe(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(he(t, n)) : void 0, o = {};
	return C(o, t, Reflect.ownKeys(b(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), T(t, w(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function Se(e, t, n) {
	let r = n ? new Set(he(t, n)) : void 0, i = {};
	return C(i, t, Reflect.ownKeys(b(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), T(t, w(t._zod.def, { shape: i }));
}
function D(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Ce(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function we(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Te(e) {
	return typeof e == "string" ? e : e?.message;
}
function Ee(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function O(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : Te(e.inst?._zod.def?.error?.(e)) ?? Te(a?.(e)) ?? Te(t?.error?.(e)) ?? Te(n.customError?.(e)) ?? Te(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
var De = /[\uD800-\uDBFF]/;
function Oe(e) {
	let t = e.length;
	if (!De.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function ke(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Ae(e) {
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
function je(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function Me(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Fe(e, n, r.value);
	}
}
function k(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function Ne(e, t, n) {
	return k(e, t, n, !1);
}
function Pe(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return k(this, n, r(this));
			},
			set(e) {
				k(this, n, e);
			}
		});
	}
	return t;
}
function Fe(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : k(this, t, n.bind(this));
		},
		set(e) {
			k(this, t, e);
		}
	});
}
function Ie(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var Le, A = !1, Re = {
	configurable: !0,
	get() {
		A = !0;
	}
};
function j(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Le !== e._zod) {
		Le = void 0;
		return;
	}
	Le = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Re);
			let e = A;
			A = !1;
			try {
				let r = n(this);
				return A ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), A ||= e, r;
			} catch (n) {
				throw delete this[t], A ||= e, n;
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
function ze(e, t, n, r) {
	let i = Ie(e, t);
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
var Be = "~constantCatch";
function Ve(e) {
	let t = () => e;
	return t[Be] = !0, t;
}
//#endregion
//#region ../../node_modules/zod/v4/core/core.js
var He, Ue = {
	value: void 0,
	enumerable: !1
}, We = "captureStackTrace" in Error ? Error : null;
function Ge(e) {
	let t = We;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return We = null, new e();
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
function M(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Ue.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Ue);
			} finally {
				Ue.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), Me(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? Ge(u) : this;
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
var N = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Ke = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(He = globalThis).__zod_globalConfig ?? (He.__zod_globalConfig = {});
var P = globalThis.__zod_globalConfig;
function F(e) {
	return e && Object.assign(P, e), P;
}
//#endregion
//#region ../../node_modules/zod/v4/core/errors.js
function qe() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, f, 2), e.message;
}
function Je(e) {
	this._zod.message = e;
}
var Ye = {
	get: qe,
	set: Je,
	enumerable: !0,
	configurable: !0
}, Xe = {
	value: void 0,
	enumerable: !1
}, Ze = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Qe = (e, t) => {
	e.name = "$ZodError", Xe.value = t, Object.defineProperty(e, "issues", Xe), Xe.value = void 0, Object.defineProperty(e, "message", Ye);
	let n = Object.getPrototypeOf(e);
	Ze.has(n) || (Ze.add(n), Object.defineProperty(n, "toString", {
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
}, $e = M("$ZodError", Qe);
M("$ZodError", Qe, void 0, { Parent: Error });
function et(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function tt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? et(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function nt(e, t = (e) => e.message) {
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
function rt(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var it = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new N();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => O(e, o, F())));
			throw re(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, at = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => O(e, o, F())));
			throw re(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, ot = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new N();
	return a.issues.length ? st(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
};
function st(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => O(e, n, F()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
var ct = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? st(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
}, lt = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), ut = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), dt = ((e, t, n) => {
	let r = e._zod.bag.validator;
	if (r !== void 0) {
		if (r(t) !== lt) return !0;
		if (r.definite === !0 && n === void 0) return !1;
	}
	return ft(e, t, n);
});
function ft(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[ut] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new N();
	return a.issues.length === 0;
}
var pt = async (e, t, n) => {
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
}, mt = (e) => {
	let t = it(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, rt(n, a));
	};
	return n;
}, ht = (e) => {
	let t = it(e), n = (e, r, i, a) => t(e, r, i, rt(n, a));
	return n;
}, gt = (e) => {
	let t = at(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, rt(n, a));
	};
	return n;
}, _t = (e) => {
	let t = at(e), n = async (e, r, i, a) => await t(e, r, i, rt(n, a));
	return n;
}, vt = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return ot(e)(t, n, i);
}, yt = (e) => (t, n, r) => ot(e)(t, n, r), bt = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return ct(e)(t, n, i);
}, xt = (e) => async (t, n, r) => ct(e)(t, n, r), St = /^[cC][0-9a-z]{6,}$/, Ct = /^[0-9a-z]+$/, wt = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Tt = /^[0-9a-vA-V]{20}$/, Et = /^[A-Za-z0-9]{27}$/, Dt = /^[a-zA-Z0-9_-]{21}$/;
function Ot(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var kt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, At = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, jt = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Mt = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Nt = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Pt() {
	return new RegExp(Nt, "u");
}
var Ft = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, It = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Lt = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Rt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, zt = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Bt = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Vt = /^https?$/, Ht = /^\+[1-9]\d{6,14}$/, Ut = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function Wt(e) {
	return RegExp(`^${e}$`);
}
var Gt = /*@__PURE__*/ Wt(Ut);
function Kt(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function qt(e) {
	return RegExp(`^${Kt(e)}$`);
}
function Jt(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Kt({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Kt({ precision: e.precision })}` : n;
	return RegExp(`^${Ut}T(?:${r})$`);
}
var Yt = /^[\s\S]{0,}$/, Xt = /^-?\d+(?:\.\d+)?$/, Zt = /^[^A-Z]*$/, Qt = /^[^a-z]*$/, I = /*@__PURE__*/ M("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), $t = (e) => {
	let t = e.value;
	return !h(t) && t.length !== void 0;
}, en = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, tn = /*@__PURE__*/ M("$ZodCheckLessThan", (e, t) => {
	I.init(e, t);
	let n = en[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: en[typeof r.value] ?? n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), nn = /*@__PURE__*/ M("$ZodCheckGreaterThan", (e, t) => {
	I.init(e, t);
	let n = en[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: en[typeof r.value] ?? n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), rn = /*@__PURE__*/ M("$ZodCheckMultipleOf", (e, t) => {
	I.init(e, t), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : _(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), an = /*@__PURE__*/ M("$ZodCheckNumberFormat", (e, t) => {
	I.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = fe[t.format];
	e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), on = /*@__PURE__*/ M("$ZodCheckMaxLength", (e, t) => {
	var n;
	I.init(e, t), (n = e._zod.def).when ?? (n.when = $t), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? Oe(r) : i) <= t.maximum) return;
		let a = ke(r);
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
}), sn = /*@__PURE__*/ M("$ZodCheckMinLength", (e, t) => {
	var n;
	I.init(e, t), (n = e._zod.def).when ?? (n.when = $t), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? Oe(r) : i) >= t.minimum) return;
		let a = ke(r);
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
}), cn = /*@__PURE__*/ M("$ZodCheckLengthEquals", (e, t) => {
	var n;
	I.init(e, t), (n = e._zod.def).when ?? (n.when = $t), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? Oe(r) : i;
		if (a === t.length) return;
		let o = ke(r), s = a > t.length;
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
}), ln = /*@__PURE__*/ M("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	I.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
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
}), un = /*@__PURE__*/ M("$ZodCheckRegex", (e, t) => {
	ln.init(e, t), e._zod.check = (n) => {
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
}), dn = /*@__PURE__*/ M("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= Zt, ln.init(e, t);
}), fn = /*@__PURE__*/ M("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= Qt, ln.init(e, t);
}), pn = /*@__PURE__*/ M("$ZodCheckIncludes", (e, t) => {
	I.init(e, t);
	let n = le(t.includes);
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
}), mn = /*@__PURE__*/ M("$ZodCheckStartsWith", (e, t) => {
	I.init(e, t);
	let n = RegExp(`^${le(t.prefix)}.*`);
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
}), hn = /*@__PURE__*/ M("$ZodCheckEndsWith", (e, t) => {
	I.init(e, t);
	let n = RegExp(`.*${le(t.suffix)}$`);
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
}), gn = /*@__PURE__*/ M("$ZodCheckOverwrite", (e, t) => {
	I.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), _n = class {
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
}, vn = {
	major: 4,
	minor: 6,
	patch: 5
}, L = /*@__PURE__*/ M("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = vn;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = D(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (Ce(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new N();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (Ee(t.issues, n, e), i ||= D(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					Ee(t.issues, n, e), i ||= D(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (D(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new N();
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
				if (a.async === !1) throw new N();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return Ne(this, "~standard", xn(this));
	},
	set "~standard"(e) {
		k(this, "~standard", e);
	}
}), yn = (e, t) => e.issues.length ? { issues: e.issues.map((e) => O(e, t, F())) } : { value: e.value };
async function bn(e, t) {
	let n = { async: !0 };
	return yn(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function xn(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return yn(r, n);
			} catch {}
			return bn(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
var Sn = /*@__PURE__*/ M("$ZodString", (e, t) => {
	L.init(e, t), e._zod.pattern = t.pattern ?? Yt, e._zod.parse = (n, r) => {
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
}), R = /*@__PURE__*/ M("$ZodStringFormat", (e, t) => {
	ln.init(e, t), Sn.init(e, t);
}), Cn = /*@__PURE__*/ M("$ZodGUID", (e, t) => {
	t.pattern ??= At, R.init(e, t);
}), wn = /*@__PURE__*/ M("$ZodUUID", (e, t) => {
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
		t.pattern ??= jt(e);
	} else t.pattern ??= jt();
	R.init(e, t);
}), Tn = /*@__PURE__*/ M("$ZodEmail", (e, t) => {
	t.pattern ??= Mt, R.init(e, t);
});
function En(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Dn(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? En(e) || 2 : On(e, t);
}
function On(e, t) {
	if (!t.normalize && t.protocol?.source === Vt.source && !/^https?:\/\//i.test(e)) return 1;
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
var kn = /[\t\n\r]/g;
function An(e) {
	return e.replace(kn, "");
}
function jn(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Mn(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var Nn = /*@__PURE__*/ M("$ZodURL", (e, t) => {
	R.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = Dn(r, t);
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
				n.value = An(r);
				return;
			}
			t.hostname && !jn(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !Mn(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : An(r);
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
}), Pn = /*@__PURE__*/ M("$ZodEmoji", (e, t) => {
	t.pattern ??= Pt(), R.init(e, t);
}), Fn = /*@__PURE__*/ M("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? Dt : Ot(t.length), R.init(e, t);
}), In = /*@__PURE__*/ M("$ZodCUID", (e, t) => {
	t.pattern ??= St, R.init(e, t);
}), Ln = /*@__PURE__*/ M("$ZodCUID2", (e, t) => {
	t.pattern ??= Ct, R.init(e, t);
}), Rn = /*@__PURE__*/ M("$ZodULID", (e, t) => {
	t.pattern ??= wt, R.init(e, t);
}), zn = /*@__PURE__*/ M("$ZodXID", (e, t) => {
	t.pattern ??= Tt, R.init(e, t);
}), Bn = /*@__PURE__*/ M("$ZodKSUID", (e, t) => {
	t.pattern ??= Et, R.init(e, t);
}), Vn = /*@__PURE__*/ M("$ZodISODateTime", (e, t) => {
	t.pattern ??= Jt(t), R.init(e, t);
}), Hn = /*@__PURE__*/ M("$ZodISODate", (e, t) => {
	t.pattern ??= Gt, R.init(e, t);
}), Un = /*@__PURE__*/ M("$ZodISOTime", (e, t) => {
	t.pattern ??= qt(t), R.init(e, t);
}), Wn = /*@__PURE__*/ M("$ZodISODuration", (e, t) => {
	t.pattern ??= kt, R.init(e, t);
}), Gn = /*@__PURE__*/ M("$ZodIPv4", (e, t) => {
	t.pattern ??= Ft, R.init(e, t);
}), Kn = /^[0-9a-fA-F:.]+$/;
function qn(e) {
	return Kn.test(e) ? En(`http://[${e}]`) : !1;
}
var Jn = /*@__PURE__*/ M("$ZodIPv6", (e, t) => {
	t.pattern ??= It, R.init(e, t), e._zod.check = (n) => {
		qn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Yn = /*@__PURE__*/ M("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Lt, R.init(e, t);
});
function Xn(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : qn(n);
}
var Zn = /*@__PURE__*/ M("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Rt, R.init(e, t), e._zod.check = (n) => {
		Xn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Qn(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var $n = /^[0-9a-zA-Z+/]*={0,2}$/, er = /*@__PURE__*/ M("$ZodBase64", (e, t) => {
	t.pattern ??= $n, R.init(e, t), e._zod.check = (n) => {
		Qn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), tr = /^[A-Za-z0-9_-]*$/;
function nr(e) {
	if (!tr.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Qn(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var rr = /*@__PURE__*/ M("$ZodBase64URL", (e, t) => {
	t.pattern ??= tr, R.init(e, t), e._zod.check = (n) => {
		nr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ir = /*@__PURE__*/ M("$ZodE164", (e, t) => {
	t.pattern ??= Ht, R.init(e, t);
});
function ar(e, t = null) {
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
var or = /*@__PURE__*/ M("$ZodJWT", (e, t) => {
	R.init(e, t), e._zod.check = (n) => {
		ar(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), sr = /*@__PURE__*/ M("$ZodNumber", (e, t) => {
	L.init(e, t), e._zod.pattern = Xt, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), cr = /*@__PURE__*/ M("$ZodNumberFormat", (e, t) => {
	an.init(e, t), sr.init(e, t);
}), lr = /*@__PURE__*/ M("$ZodUnknown", (e, t) => {
	L.init(e, t), e._zod.parse = (e) => e;
}), ur = /*@__PURE__*/ M("$ZodNever", (e, t) => {
	L.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function dr(e, t, n) {
	e.issues.length && t.issues.push(...we(n, e.issues)), t.value[n] = e.value;
}
var fr = /*@__PURE__*/ M("$ZodArray", (e, t) => {
	L.init(e, t);
	let n = P.memoizer;
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
			if (c instanceof Promise) o.push(c.then((t) => dr(t, r, e)));
			else if (dr(c, r, e), s && c.issues.length !== 0 && D(c)) break;
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
});
function pr(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...we(n, e.issues));
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
var mr = [];
function hr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : mr, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = de(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function gr(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (D(n, p)) break;
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
		a instanceof Promise ? e.push(a.then((e) => pr(e, n, i, t, d, f))) : pr(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var _r = /*@__PURE__*/ M("$ZodObject", (e, t) => {
	L.init(e, t);
	let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
	if (r) {
		let e = () => {
			let n = { ...r };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = r, Object.defineProperty(t, "shape", { get: e });
	}
	let i = m(() => hr(t));
	j(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || v(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let a = ie, o = t.catchall, s, c = P.memoizer;
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
				if (D(t, f)) break;
				f = t.issues.length;
			}
			if (e === "__proto__") continue;
			let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
				value: r[e],
				issues: []
			}, n);
			s instanceof Promise ? l.push(s.then((n) => pr(n, t, e, r, a, o))) : pr(s, t, e, r, a, o);
		}
		return o ? gr(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), vr = /*@__PURE__*/ M("$ZodObjectJIT", (e, t) => {
	_r.init(e, t);
	let n = e._zod.parse, r = m(() => hr(t)), i = P.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new _n(["payload", "ctx"], {
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
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : te(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
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
	}, o, s = ie, c = !P.jitless, l = c && ae.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? gr([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function yr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !D(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => O(e, r, F())))
	}), t);
}
var br = /*@__PURE__*/ M("$ZodUnion", (e, t) => {
	L.init(e, t), j(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), j(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), j(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), j(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => g(e.source)).join("|")})$`);
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
		return a ? Promise.all(o).then((t) => yr(t, r, e, i)) : yr(o, r, e, i);
	};
}), xr = /*@__PURE__*/ M("$ZodIntersection", (e, t) => {
	L.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Cr(e, t, n)) : Cr(e, i, a);
	};
});
function Sr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (oe(e) && oe(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Sr(e[n], t[n]);
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
			let i = e[r], a = t[r], o = Sr(i, a);
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
function Cr(e, t, n) {
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
	let c = Sr(t.value, n.value);
	if (!c.valid) {
		if (D(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var wr = /*@__PURE__*/ M("$ZodEnum", (e, t) => {
	L.init(e, t);
	let n = u(t.entries), r = new Set(n);
	e._zod.values = r, j(e, "pattern", (e) => {
		let t = u(e.def.entries).filter((e) => ce.has(typeof e));
		return RegExp(t.length ? `^(${t.map((e) => le(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), Tr = /*@__PURE__*/ M("$ZodTransform", (e, t) => {
	L.init(e, t), e._zod.optin = "optional", P.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Ke(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new N();
		return n.value = i, n;
	};
});
function Er(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var Dr = /*@__PURE__*/ M("$ZodOptional", (e, t) => {
	L.init(e, t), j(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", j(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), j(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${g(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => Er(e, t)) : Er(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), Or = /*@__PURE__*/ M("$ZodExactOptional", (e, t) => {
	Dr.init(e, t), j(e, "values", (e) => e.def.innerType._zod.values), j(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), kr = /*@__PURE__*/ M("$ZodNullable", (e, t) => {
	L.init(e, t), j(e, "optin", (e) => e.def.innerType._zod.optin), j(e, "optout", (e) => e.def.innerType._zod.optout), j(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${g(t.source)}|null)$`) : void 0;
	}), j(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Ar = /*@__PURE__*/ M("$ZodDefault", (e, t) => {
	L.init(e, t), e._zod.optin = "defaulted", j(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => jr(e, t)) : jr(r, t);
	};
});
function jr(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Mr = /*@__PURE__*/ M("$ZodPrefault", (e, t) => {
	L.init(e, t), e._zod.optin = "defaulted", j(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Nr = /*@__PURE__*/ M("$ZodNonOptional", (e, t) => {
	L.init(e, t), j(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Pr(t, e)) : Pr(i, e);
	};
});
function Pr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Fr(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => O(e, r, F())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var Ir = /*@__PURE__*/ M("$ZodCatch", (e, t) => {
	L.init(e, t), j(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), j(e, "optout", (e) => e.def.innerType._zod.optout), j(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => Fr(e, r, t, n)) : Fr(e, r, t, n);
	};
}), Lr = /*@__PURE__*/ M("$ZodPipe", (e, t) => {
	L.init(e, t), j(e, "values", (e) => e.def.in._zod.values), j(e, "optin", (e) => e.def.in._zod.optin), j(e, "optout", (e) => e.def.out._zod.optout), j(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Rr(e, t.in, n)) : Rr(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Rr(e, t.out, n)) : Rr(r, t.out, n);
	};
});
function Rr(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var zr = /*@__PURE__*/ M("$ZodReadonly", (e, t) => {
	L.init(e, t), j(e, "propValues", (e) => e.def.innerType._zod.propValues), j(e, "values", (e) => e.def.innerType._zod.values), j(e, "optin", (e) => e.def.innerType?._zod?.optin), j(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Br) : Br(r);
	};
});
function Br(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var Vr = /*@__PURE__*/ M("$ZodCustom", (e, t) => {
	I.init(e, t), L.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Hr(t, n, r, e));
		Hr(i, n, r, e);
	};
});
function Hr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(je(e));
	}
}
//#endregion
//#region ../../node_modules/zod/v4/core/memoizer.js
var Ur = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, Wr = "~memo", Gr = [];
function Kr(e) {
	return typeof e == "object" && !!e;
}
function qr(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var Jr = /*@__PURE__*/ new WeakMap(), z = 0, Yr = 1, Xr = 2;
function Zr(e, t, n) {
	let r = Jr.get(e);
	if (r !== void 0) return r ? Xr : z;
	if (t.has(e)) return Xr;
	t.add(e);
	let i = z, a = (e) => {
		if (i !== Xr && e?._zod) {
			let r = Zr(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = z;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? Yr : o.value?._zod ? Zr(o.value, t, n) : z;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = y(c);
			s(e ? o(e, !0) : Yr), a(c.catchall);
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
			s(r ? Zr(r, t, !1) : Yr);
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
	return t.delete(e), Qr(e, i);
}
function Qr(e, t) {
	return t !== Yr && Jr.set(e, t === Xr), t;
}
function $r(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
var ei, ti = [], ni = {
	alloc(e, t, n) {
		let r = ei;
		if (!r) return n;
		ei = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), ti.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && ii(n, e.value)) throw new Ur();
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
					let i = Zr(e, /* @__PURE__ */ new Set(), !1);
					if (i === z) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
					i === Xr || r ? n = !0 : r = !0;
				}
				let l = s.value;
				if (!Kr(l)) return t(s, c);
				let u = c[Wr];
				u || (u = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[Wr] = u);
				let d;
				i === c ? d = a : (d = $r(u, e), i = c, a = d);
				let f = d.get(l);
				if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...qr(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
				ei = d;
				let p = ti.length, m = t(s, c);
				ei = void 0;
				let h = ti.length > p ? ti.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? qr(e.issues) : Gr), e)) : (h && (h.issues = m.issues.length ? qr(m.issues) : Gr), m);
			};
			e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
		});
	}
};
function ri() {
	return ni;
}
function ii(e, t) {
	let n = e[Wr]?.backEdges;
	return n !== void 0 && Kr(t) && n.has(t);
}
//#endregion
//#region ../../node_modules/zod/v4/locales/en.js
var ai = () => {
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
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(Ae(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${ue(e.values[0])}` : `Invalid option: expected one of ${d(e.values, "|")}`;
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
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${d(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function oi() {
	return { localeError: ai() };
}
//#endregion
//#region ../../node_modules/zod/v4/core/registries.js
var si, ci = class {
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
function li() {
	return new ci();
}
(si = globalThis).__zod_globalRegistry ?? (si.__zod_globalRegistry = li());
var ui = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
function di(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function fi(e, t) {
	return new e(di({
		type: "string",
		...E(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function pi(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mi(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function hi(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function gi(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _i(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vi(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function yi(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function bi(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xi(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wi(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ti(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Di(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ai(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ji(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Mi(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pi(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fi(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ii(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Li(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ri(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zi(e, t) {
	return new e(di({
		type: "number",
		checks: [],
		...E(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Hi(e, t) {
	return new e({
		type: "never",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t) {
	return new tn({
		check: "less_than",
		...E(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Wi(e, t) {
	return new tn({
		check: "less_than",
		...E(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Gi(e, t) {
	return new nn({
		check: "greater_than",
		...E(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t) {
	return new nn({
		check: "greater_than",
		...E(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function qi(e, t) {
	return new rn({
		check: "multiple_of",
		...E(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ji(e, t) {
	return new on({
		check: "max_length",
		...E(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Yi(e, t) {
	return new sn({
		check: "min_length",
		...E(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
	return new cn({
		check: "length_equals",
		...E(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Zi(e, t) {
	return new un({
		check: "string_format",
		format: "regex",
		...E(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
	return new dn({
		check: "string_format",
		format: "lowercase",
		...E(e)
	});
}
// @__NO_SIDE_EFFECTS__
function $i(e) {
	return new fn({
		check: "string_format",
		format: "uppercase",
		...E(e)
	});
}
// @__NO_SIDE_EFFECTS__
function ea(e, t) {
	return new pn({
		check: "string_format",
		format: "includes",
		...E(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function ta(e, t) {
	return new mn({
		check: "string_format",
		format: "starts_with",
		...E(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function na(e, t) {
	return new hn({
		check: "string_format",
		format: "ends_with",
		...E(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	return new gn({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function ra(e) {
	return /* @__PURE__ */ B((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function ia() {
	return /* @__PURE__ */ B((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function aa() {
	return /* @__PURE__ */ B((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function oa() {
	return /* @__PURE__ */ B((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function sa() {
	return /* @__PURE__ */ B((e) => ne(e));
}
// @__NO_SIDE_EFFECTS__
function ca(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...E(n)
	});
}
// @__NO_SIDE_EFFECTS__
function la(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...E(n)
	});
}
// @__NO_SIDE_EFFECTS__
function ua(e, t) {
	let n = /* @__PURE__ */ da((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(je(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(je(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function da(e, t) {
	let n = new I({
		check: "custom",
		...E(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function fa(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && v(e, t, n[t]);
	return e;
}
function pa(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? ui,
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
function V(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function H(e, t, n = {
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
		a && (o.ref ||= a, H(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && fa(o.schema, c), t.io === "input" && U(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function ma(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ha(e, t) {
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
				ref: `${i("__shared")}#/${r}/${ma(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + ma(a)
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
function ga(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		ga(e);
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
var _a = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), va = ["oneOf", "anyOf"];
function ya(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function ba(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!_a.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? ya(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			v(n, r, e.length === 1 ? e[0] : ba(e) ?? { allOf: e });
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
			let t = ya(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function xa(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of _a) if (t in e) return;
	let n = t.filter((e) => va.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = ba(t);
	else {
		let e = n[0], i = va.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => ba([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, fa(e, r));
}
function Sa(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : fa(i, s), fa(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
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
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) ga(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) xa(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	fa(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, v(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: wa(t, "input", e.processors),
					output: wa(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function U(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return U(r.element, n);
	if (r.type === "set") return U(r.valueType, n);
	if (r.type === "lazy") return U(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return U(r.innerType, n);
	if (r.type === "intersection") return U(r.left, n) || U(r.right, n);
	if (r.type === "record" || r.type === "map") return U(r.keyType, n) || U(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : U(r.in, n) || U(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (U(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (U(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (U(e, n)) return !0;
		return !!(r.rest && U(r.rest, n));
	}
	return !1;
}
var Ca = (e, t = {}) => (n) => {
	let r = pa({
		...n,
		processors: t
	});
	return H(e, r), ha(r, e), Sa(r, e);
}, wa = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = pa({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return H(e, o), ha(o, e), Sa(o, e);
}, W = (e, t, n) => {
	(e[t] === void 0 || n > e[t]) && (e[t] = n);
}, G = (e, t, n) => {
	(e[t] === void 0 || n < e[t]) && (e[t] = n);
}, Ta = (e, t) => {
	W(e, "minimum", t), G(e, "maximum", t);
}, Ea = (e, t) => {
	e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Da = (e, t) => {
	e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
}, Oa = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, ka = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, Aa = (e, t) => W(e, "minimum", t.minimum), ja = (e, t) => G(e, "maximum", t.maximum), Ma = (e) => (t, n) => {
	ka(t, n.format);
	let [r, i] = e[n.format];
	W(t, "minimum", r), G(t, "maximum", i);
}, Na = {
	greater_than: (e, t) => W(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => G(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => Ea(e, t.value),
	number_format: Ma(fe),
	bigint_format: Ma(pe),
	min_length: Aa,
	max_length: ja,
	length_equals: (e, t) => Ta(e, t.length),
	min_size: Aa,
	max_size: ja,
	size_equals: (e, t) => Ta(e, t.size),
	string_format: (e, t) => {
		ka(e, t.format), t.pattern && Da(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => Oa(e, t.mime)
};
function K(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) Na[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && W(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && W(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && G(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && G(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && Ea(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && Oa(t, i.mime);
	for (let e of i.patterns ?? []) Da(t, e);
	return t;
}
var Pa = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Fa = /* @__PURE__ */ new Map([[$n, zt], [tr, Bt]]), Ia = (e) => Fa.get(e) ?? e, La = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = K(e);
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Pa[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c].map(Ia);
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Ra = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, multipleOf: s, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = K(e);
	i.type = u ? "integer" : "number";
	let d = typeof l == "number" && l >= (a ?? -Infinity), f = typeof c == "number" && c <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	if (d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), s) {
		let n = /* @__PURE__ */ new Set();
		for (let a of s) Number.isFinite(a) && a !== 0 ? n.add(Math.abs(a)) : V(e, t, i, r, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
		let [a, ...o] = n;
		a !== void 0 && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ?? [], ...o.map((e) => ({ multipleOf: e }))]);
	}
}, za = (e, t, n, r) => {
	n.not = {};
}, Ba = (e, t, n, r) => {
	let i = e._zod.def, a = u(i.entries);
	if (a.length === 0) {
		n.not = {};
		return;
	}
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Va = (e, t, n, r) => {
	V(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, Ha = (e, t, n, r) => {
	V(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, Ua = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = K(e);
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = H(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function Wa(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Wa(t.out) : t.type === "catch" ? Wa(t.innerType) : e._zod.optin;
}
var Ga = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && V(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) v(i.properties, e, H(o[e], t, {
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
		(t.io === "input" ? Wa(n) === void 0 : n._zod.optout === void 0) && s.push(e);
	}
	s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = H(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Ka = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => H(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, qa = (e, t, n, r) => {
	let i = e._zod.def, a = H(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = H(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, Ja = (e, t, n, r) => {
	let i = e._zod.def, a = H(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Ya = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Xa = Symbol();
function Za(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (V(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Xa) : JSON.parse(o);
}
var Qa = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = Za(i.defaultValue, e, t, n, r);
	o !== Xa && (n.default = o);
}, $a = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = Za(i.defaultValue, e, t, n, r);
	o !== Xa && (n._prefault = o);
}, eo = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		V(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, to = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	H(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, no = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, ro = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, io = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function ao(e, t, n) {
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
var q = /*@__PURE__*/ M("ZodError", (e, t) => {
	$e.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	io.has(n) || (io.add(n), ao(n, "format", (e) => (t) => nt(e, t)), ao(n, "flatten", (e) => (t) => tt(e, t)), ao(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, f, 2);
	}), ao(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, f, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), oo = /* @__PURE__ */ it(q), so = /* @__PURE__ */ at(q), co = /* @__PURE__ */ ot(q), lo = /* @__PURE__ */ ct(q), uo = /* @__PURE__ */ mt(q), fo = /* @__PURE__ */ ht(q), po = /* @__PURE__ */ gt(q), mo = /* @__PURE__ */ _t(q), ho = /* @__PURE__ */ vt(q), go = /* @__PURE__ */ yt(q), _o = /* @__PURE__ */ bt(q), vo = /* @__PURE__ */ xt(q);
//#endregion
//#region ../../node_modules/zod/v4/classic/schemas.js
function yo() {
	P.localeError || F(oi());
}
function bo() {
	P.memoizer || F({ memoizer: ri() });
}
var J = /*@__PURE__*/ M("ZodType", (e, t) => (yo(), L.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(w(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return T(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(js(e, t));
	},
	superRefine(e, t) {
		return this.check(Ms(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ B(e));
	},
	optional() {
		return ps(this);
	},
	exactOptional() {
		return hs(this);
	},
	nullable() {
		return _s(this);
	},
	nullish() {
		return ps(_s(this));
	},
	nonoptional(e) {
		return Cs(this, e);
	},
	array() {
		return ns(this);
	},
	or(e) {
		return as([this, e]);
	},
	and(e) {
		return ss(this, e);
	},
	transform(e) {
		return Ds(this, ds(e));
	},
	default(e) {
		return ys(this, e);
	},
	prefault(e) {
		return xs(this, e);
	},
	catch(e) {
		return Ts(this, e);
	},
	pipe(e) {
		return Ds(this, e);
	},
	readonly() {
		return ks(this);
	},
	describe(e) {
		let t = this.clone();
		return ui.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return ui.get(this);
		let t = this.clone();
		return ui.add(t, e[0]), t;
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
		return Ne(this, "~standard", {
			...xn(this),
			jsonSchema: {
				input: wa(this, "input"),
				output: wa(this, "output")
			}
		});
	},
	set "~standard"(e) {
		k(this, "~standard", e);
	},
	parse: function e(t, n) {
		return oo(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await so(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return co(this, e, t);
	},
	async safeParseAsync(e, t) {
		return lo(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		k(this, "spa", e);
	},
	validate(e, t) {
		return dt(this, e, t);
	},
	validateAsync(e, t) {
		return pt(this, e, t);
	},
	encode: function e(t, n) {
		return uo(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return fo(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await po(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await mo(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return ho(this, e, t);
	},
	safeDecode(e, t) {
		return go(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return _o(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return vo(this, e, t);
	},
	toJSONSchema(e) {
		return Ca(this, {})(e);
	},
	get description() {
		return ui.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), xo = /*@__PURE__*/ M("_ZodString", (e, t) => {
	Sn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => La(e, t, n, r);
}, /*@__PURE__*/ Pe({
	format: (e) => K(e).format ?? null,
	minLength: (e) => K(e).minimum ?? null,
	maxLength: (e) => K(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ Zi(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ ea(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ ta(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ na(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ Yi(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ Ji(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ Xi(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ Yi(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ Qi(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ $i(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ ia());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ ra(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ aa());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ oa());
	},
	slugify() {
		return this.check(/* @__PURE__ */ sa());
	}
})), So = /*@__PURE__*/ M("ZodString", (e, t) => {
	Sn.init(e, t), xo.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ pi(Do, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ yi(Ao, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ Pi(Ko, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ bi(Mo, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ mi(Oo, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ hi(Z, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ gi(Z, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ _i(Z, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ vi(Z, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ xi(No, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ Si(Po, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ Ci(Fo, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ wi(Io, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ ji(Uo, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ Mi(Wo, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ Ti(Lo, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ Ei(Ro, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ Di(zo, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ Oi(Bo, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ ki(Vo, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ Ai(Ho, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ Ni(Go, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ Fi(Co, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ Ii(wo, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ Li(To, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ Ri(Eo, e));
	}
});
function Y(e) {
	return /* @__PURE__ */ fi(So, e);
}
var X = /*@__PURE__*/ M("ZodStringFormat", (e, t) => {
	R.init(e, t), xo.init(e, t);
}), Co = /*@__PURE__*/ M("ZodISODateTime", (e, t) => {
	Vn.init(e, t), X.init(e, t);
}), wo = /*@__PURE__*/ M("ZodISODate", (e, t) => {
	Hn.init(e, t), X.init(e, t);
}), To = /*@__PURE__*/ M("ZodISOTime", (e, t) => {
	Un.init(e, t), X.init(e, t);
}), Eo = /*@__PURE__*/ M("ZodISODuration", (e, t) => {
	Wn.init(e, t), X.init(e, t);
}), Do = /*@__PURE__*/ M("ZodEmail", (e, t) => {
	Tn.init(e, t), X.init(e, t);
}), Oo = /*@__PURE__*/ M("ZodGUID", (e, t) => {
	Cn.init(e, t), X.init(e, t);
}), Z = /*@__PURE__*/ M("ZodUUID", (e, t) => {
	wn.init(e, t), X.init(e, t);
});
function ko(e) {
	return /* @__PURE__ */ hi(Z, e);
}
var Ao = /*@__PURE__*/ M("ZodURL", (e, t) => {
	Nn.init(e, t), X.init(e, t);
});
function jo(e) {
	return /* @__PURE__ */ yi(Ao, e);
}
var Mo = /*@__PURE__*/ M("ZodEmoji", (e, t) => {
	Pn.init(e, t), X.init(e, t);
}), No = /*@__PURE__*/ M("ZodNanoID", (e, t) => {
	Fn.init(e, t), X.init(e, t);
}), Po = /*@__PURE__*/ M("ZodCUID", (e, t) => {
	In.init(e, t), X.init(e, t);
}), Fo = /*@__PURE__*/ M("ZodCUID2", (e, t) => {
	Ln.init(e, t), X.init(e, t);
}), Io = /*@__PURE__*/ M("ZodULID", (e, t) => {
	Rn.init(e, t), X.init(e, t);
}), Lo = /*@__PURE__*/ M("ZodXID", (e, t) => {
	zn.init(e, t), X.init(e, t);
}), Ro = /*@__PURE__*/ M("ZodKSUID", (e, t) => {
	Bn.init(e, t), X.init(e, t);
}), zo = /*@__PURE__*/ M("ZodIPv4", (e, t) => {
	Gn.init(e, t), X.init(e, t);
}), Bo = /*@__PURE__*/ M("ZodIPv6", (e, t) => {
	Jn.init(e, t), X.init(e, t);
}), Vo = /*@__PURE__*/ M("ZodCIDRv4", (e, t) => {
	Yn.init(e, t), X.init(e, t);
}), Ho = /*@__PURE__*/ M("ZodCIDRv6", (e, t) => {
	Zn.init(e, t), X.init(e, t);
}), Uo = /*@__PURE__*/ M("ZodBase64", (e, t) => {
	er.init(e, t), X.init(e, t);
}), Wo = /*@__PURE__*/ M("ZodBase64URL", (e, t) => {
	rr.init(e, t), X.init(e, t);
}), Go = /*@__PURE__*/ M("ZodE164", (e, t) => {
	ir.init(e, t), X.init(e, t);
}), Ko = /*@__PURE__*/ M("ZodJWT", (e, t) => {
	or.init(e, t), X.init(e, t);
}), qo = /*@__PURE__*/ M("ZodNumber", (e, t) => {
	sr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ra(e, t, n, r), e.isFinite = !0;
}, /*@__PURE__*/ Pe({
	minValue: (e) => {
		let { minimum: t, exclusiveMinimum: n } = K(e);
		return Math.max(t ?? -Infinity, n ?? -Infinity);
	},
	maxValue: (e) => {
		let { maximum: t, exclusiveMaximum: n } = K(e);
		return Math.min(t ?? Infinity, n ?? Infinity);
	},
	isInt: (e) => {
		let { isInt: t, multipleOf: n } = K(e);
		return !!t || !!n?.some(Number.isSafeInteger);
	},
	format: (e) => K(e).format ?? null
}, {
	gt(e, t) {
		return this.check(/* @__PURE__ */ Gi(e, t));
	},
	gte(e, t) {
		return this.check(/* @__PURE__ */ Ki(e, t));
	},
	min(e, t) {
		return this.check(/* @__PURE__ */ Ki(e, t));
	},
	lt(e, t) {
		return this.check(/* @__PURE__ */ Ui(e, t));
	},
	lte(e, t) {
		return this.check(/* @__PURE__ */ Wi(e, t));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Wi(e, t));
	},
	int(e) {
		return this.check(Xo(e));
	},
	safe(e) {
		return this.check(Xo(e));
	},
	positive(e) {
		return this.check(/* @__PURE__ */ Gi(0, e));
	},
	nonnegative(e) {
		return this.check(/* @__PURE__ */ Ki(0, e));
	},
	negative(e) {
		return this.check(/* @__PURE__ */ Ui(0, e));
	},
	nonpositive(e) {
		return this.check(/* @__PURE__ */ Wi(0, e));
	},
	multipleOf(e, t) {
		return this.check(/* @__PURE__ */ qi(e, t));
	},
	step(e, t) {
		return this.check(/* @__PURE__ */ qi(e, t));
	},
	finite() {
		return this;
	}
}));
function Jo(e) {
	return /* @__PURE__ */ zi(qo, e);
}
var Yo = /*@__PURE__*/ M("ZodNumberFormat", (e, t) => {
	cr.init(e, t), qo.init(e, t);
});
function Xo(e) {
	return /* @__PURE__ */ Bi(Yo, e);
}
var Zo = /*@__PURE__*/ M("ZodUnknown", (e, t) => {
	lr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Qo() {
	return /* @__PURE__ */ Vi(Zo);
}
var $o = /*@__PURE__*/ M("ZodNever", (e, t) => {
	ur.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => za(e, t, n, r);
});
function es(e) {
	return /* @__PURE__ */ Hi($o, e);
}
var ts = /*@__PURE__*/ M("ZodArray", (e, t) => {
	bo(), fr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ua(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ Yi(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ Yi(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Ji(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ Xi(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function ns(e, t) {
	return /* @__PURE__ */ ca(ts, e, t);
}
var rs = /*@__PURE__*/ M("ZodObject", (e, t) => {
	bo(), vr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ga(e, t, n, r), ze(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return ls(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(w(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(w(this._zod.def, { catchall: Qo() }));
	},
	loose() {
		return this.clone(w(this._zod.def, { catchall: Qo() }));
	},
	strict() {
		return this.clone(w(this._zod.def, { catchall: es() }));
	},
	strip() {
		return this.clone(w(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return _e(this, e);
	},
	safeExtend(e) {
		return ye(this, e);
	},
	merge(e) {
		return be(this, e);
	},
	pick(e) {
		return me(this, e);
	},
	omit(e) {
		return ge(this, e);
	},
	partial(...e) {
		return xe(fs, this, e[0]);
	},
	exactPartial(...e) {
		return xe(ms, this, e[0], "exactPartial");
	},
	required(...e) {
		return Se(Ss, this, e[0]);
	}
});
function Q(e, t) {
	return new rs({
		type: "object",
		shape: e ?? {},
		...E(t)
	});
}
var is = /*@__PURE__*/ M("ZodUnion", (e, t) => {
	br.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ka(e, t, n, r), e.options = t.options;
});
function as(e, t) {
	return new is({
		type: "union",
		options: e,
		...E(t)
	});
}
var os = /*@__PURE__*/ M("ZodIntersection", (e, t) => {
	xr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => qa(e, t, n, r);
});
function ss(e, t) {
	return new os({
		type: "intersection",
		left: e,
		right: t
	});
}
var cs = /*@__PURE__*/ M("ZodEnum", (e, t) => {
	wr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ba(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new cs({
			...t,
			checks: [],
			...E(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new cs({
			...t,
			checks: [],
			...E(r),
			entries: i
		});
	};
});
function ls(e, t) {
	return new cs({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...E(t)
	});
}
var us = /*@__PURE__*/ M("ZodTransform", (e, t) => {
	bo(), Tr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ha(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Ke(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(je(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(je(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function ds(e) {
	return new us({
		type: "transform",
		transform: e
	});
}
var fs = /*@__PURE__*/ M("ZodOptional", (e, t) => {
	Dr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => ro(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ps(e) {
	return new fs({
		type: "optional",
		innerType: e
	});
}
var ms = /*@__PURE__*/ M("ZodExactOptional", (e, t) => {
	Or.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => ro(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function hs(e) {
	return new ms({
		type: "optional",
		innerType: e
	});
}
var gs = /*@__PURE__*/ M("ZodNullable", (e, t) => {
	kr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ja(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function _s(e) {
	return new gs({
		type: "nullable",
		innerType: e
	});
}
var vs = /*@__PURE__*/ M("ZodDefault", (e, t) => {
	Ar.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qa(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ys(e, t) {
	return new vs({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : se(t);
		}
	});
}
var bs = /*@__PURE__*/ M("ZodPrefault", (e, t) => {
	Mr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => $a(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function xs(e, t) {
	return new bs({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : se(t);
		}
	});
}
var Ss = /*@__PURE__*/ M("ZodNonOptional", (e, t) => {
	Nr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ya(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Cs(e, t) {
	return new Ss({
		type: "nonoptional",
		innerType: e,
		...E(t)
	});
}
var ws = /*@__PURE__*/ M("ZodCatch", (e, t) => {
	Ir.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => eo(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Ts(e, t) {
	return new ws({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Ve(t)
	});
}
var Es = /*@__PURE__*/ M("ZodPipe", (e, t) => {
	Lr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => to(e, t, n, r), e.in = t.in, e.out = t.out;
});
function Ds(e, t) {
	return new Es({
		type: "pipe",
		in: e,
		out: t
	});
}
var Os = /*@__PURE__*/ M("ZodReadonly", (e, t) => {
	zr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => no(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ks(e) {
	return new Os({
		type: "readonly",
		innerType: e
	});
}
var As = /*@__PURE__*/ M("ZodCustom", (e, t) => {
	Vr.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Va(e, t, n, r);
});
function js(e, t = {}) {
	return /* @__PURE__ */ la(As, e, t);
}
function Ms(e, t) {
	return /* @__PURE__ */ ua(e, t);
}
//#endregion
//#region src/ConfigSchema.ts
var Ns = Y(), Ps = Q({
	data: Q({ title: Y() }),
	settings: Q({ colour: Y() }),
	integration: Q({ requires: ns(Ns) }).optional()
}).strict();
function Fs(e) {
	return Ps.parse(e);
}
//#endregion
//#region src/ConfigSchemaRuntime.ts
var Is = Q({
	integrations: Q({}).default({}),
	context: Q({ sellerId: Y().trim().min(1).max(128).optional() }).default({})
});
function Ls(e) {
	return Is.parse(e);
}
//#endregion
//#region src/Config.ts
var Rs = "createlisting";
function zs(e, t, n) {
	try {
		let r = Bs(Fs(e), Ls(t));
		return n?.log("bootstrap", "Config resolved", r), Object.freeze(r);
	} catch (e) {
		throw n?.log("bootstrap", "Invalid widget contract", e instanceof Error ? e.message : e, "error"), e;
	}
}
function Bs(e, t) {
	return {
		data: e.data,
		settings: e.settings,
		runtime: Vs(t),
		integrations: t.integrations
	};
}
function Vs(e) {
	return e.context.sellerId === void 0 ? {} : { sellerId: e.context.sellerId };
}
//#endregion
//#region src/activity/Context/ActivityContext.tsx
var Hs = e(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/activity.guard.ts
function Us() {
	if (typeof window > "u") return [];
	let e = new URLSearchParams(window.location.search).get("reactedge_debug");
	return e ? e === "1" || e === "all" ? ["all"] : e.split(",").map((e) => e.trim().toLowerCase()) : null;
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/index.ts
var Ws = class {
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
		let e = Us();
		return e !== null && (e.includes("all") || e.includes(this.widgetId.toLowerCase()));
	}
	setCorrelationId(e) {
		this.correlationId = e;
	}
	getCorrelationId() {
		return this.correlationId;
	}
}, Gs = Hs.Provider, Ks = ({ children: e, hostElement: t }) => {
	let n = new Ws(Rs, (t ?? document.documentElement).dataset.instance);
	return /* @__PURE__ */ s(Gs, {
		value: n,
		children: e
	});
};
//#endregion
//#region src/activity/Context/useActivityContext.ts
function qs() {
	let e = t(Hs);
	if (!e) throw Error("useInstanceState must be used within InstanceStateProvider");
	return e;
}
//#endregion
//#region src/components/global/Circle.tsx
function Js({ size: e = 40 }) {
	return /* @__PURE__ */ s("svg", {
		width: e,
		height: e,
		viewBox: "0 0 50 50",
		"aria-hidden": "true",
		children: /* @__PURE__ */ s("circle", {
			cx: "25",
			cy: "25",
			r: "20",
			fill: "none",
			stroke: "#d3cdcd",
			strokeWidth: "2",
			strokeDasharray: "20 80",
			strokeLinecap: "round",
			children: /* @__PURE__ */ s("animateTransform", {
				attributeName: "transform",
				type: "rotate",
				from: "0 25 25",
				to: "360 25 25",
				dur: "0.8s",
				repeatCount: "indefinite"
			})
		})
	});
}
//#endregion
//#region src/components/global/StandardSpinner.tsx
function Ys({ size: e = 40 }) {
	return /* @__PURE__ */ s("div", {
		className: "standard-widget-loader-wrapper",
		role: "status",
		"aria-label": "Loading",
		children: /* @__PURE__ */ s(Js, { size: e })
	});
}
//#endregion
//#region src/components/global/SpinnerOverlay.tsx
var Xs = () => /* @__PURE__ */ s(Ys, {}), Zs = Q({ error: Y() });
function Qs(e) {
	let t = e.headers.get("content-type")?.includes("application/json") === !0;
	if (e.status === 404 && !t) return /* @__PURE__ */ Error("The listing service route is unavailable.");
	if ([
		502,
		503,
		504
	].includes(e.status)) return /* @__PURE__ */ Error("The listing service is unavailable.");
	if (e.status >= 500) return /* @__PURE__ */ Error(t ? "The listing service could not read or save its records." : "The listing service is unavailable.");
}
async function $s(e) {
	try {
		return await e.json();
	} catch {
		throw Error("The listing service returned an invalid response.");
	}
}
async function $(e, t) {
	let n;
	try {
		n = await fetch(e, t);
	} catch {
		throw Error("Cannot reach the listing service.");
	}
	let r = Qs(n);
	if (r) throw r;
	if (n.status === 204) return;
	let i = await $s(n);
	if (!n.ok) {
		let e = Zs.safeParse(i);
		throw Error(e.success ? e.data.error : "The listing request failed.");
	}
	return i;
}
//#endregion
//#region src/Model/Listing.ts
var ec = Y().trim().min(1).max(128), tc = ls([
	"active",
	"disable",
	"inreview"
]), nc = Q({
	name: Y().trim().min(1).max(50),
	status: tc.default("active")
}).strict(), rc = nc.extend({ sellerId: ec }).strict(), ic = nc.extend({ sellerId: ec }).strict(), ac = nc.extend({
	id: ko(),
	sellerId: ec.optional()
}), oc = new class {
	url;
	constructor(e = "http://127.0.0.1:4180") {
		this.url = `${e.replace(/\/+$/, "")}/listingrecord/listings`;
	}
	async list() {
		let e = ns(ac).safeParse(await $(this.url, { cache: "no-store" }));
		if (!e.success) throw Error("The listing service returned invalid records.");
		return e.data;
	}
	create(e) {
		return this.save(this.url, "POST", rc.parse(e));
	}
	update(e, t) {
		return this.save(this.recordUrl(e), "PUT", ic.parse(t));
	}
	async delete(e) {
		await $(this.recordUrl(e), { method: "DELETE" });
	}
	recordUrl(e) {
		return `${this.url}/${ko().parse(e)}`;
	}
	async save(e, t, n) {
		let r = ac.safeParse(await $(e, {
			method: t,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(n)
		}));
		if (!r.success) throw Error("The listing service returned an invalid record.");
		return r.data;
	}
}();
function sc(e) {
	let [t, r] = a(null), [i, o] = a(""), [s, c] = a(!1), [l, u] = a([]), [d, f] = a(!0), [p, m] = a(""), [h, g] = a(""), _ = l.find((e) => e.id === i);
	return n(() => {
		let e = !0;
		return oc.list().then((t) => {
			e && u(t);
		}).catch((t) => {
			e && m(t instanceof Error ? t.message : "Unable to load saved listings.");
		}).finally(() => {
			e && f(!1);
		}), () => {
			e = !1;
		};
	}, []), {
		mode: t,
		listings: l,
		selected: _,
		selectedId: i,
		busy: s,
		loading: d,
		error: p,
		message: h,
		disabled: s || d,
		begin: (e) => {
			r(e), o(""), g(""), m("");
		},
		select: (e) => {
			o(e), m("");
		},
		cancel: () => {
			r(null), o("");
		},
		save: async (n) => {
			g(""), c(!0);
			try {
				let i = t === "edit" && _ ? await oc.update(_.id, {
					...n,
					sellerId: cc(e)
				}) : await oc.create({
					...n,
					sellerId: cc(e)
				});
				u((e) => t === "edit" ? e.map((e) => e.id === i.id ? i : e) : [...e, i]), g(`Listing “${i.name}” saved.`), m(""), t === "edit" && (r(null), o(""));
			} finally {
				c(!1);
			}
		},
		remove: async () => {
			if (_) {
				c(!0), m(""), g("");
				try {
					await oc.delete(_.id), u((e) => e.filter((e) => e.id !== _.id)), g(`Listing “${_.name}” deleted.`), o(""), r(null);
				} catch (e) {
					m(e instanceof Error ? e.message : "Unable to delete listing.");
				} finally {
					c(!1);
				}
			}
		}
	};
}
function cc(e) {
	let t = e?.trim();
	if (!t) throw Error("No authenticated seller is available for this listing.");
	return t;
}
//#endregion
//#region src/Model/Product.ts
var lc = Q({
	url: jo(),
	publicId: Y().trim().min(1).max(500)
}).strict(), uc = ls([
	"active",
	"disable",
	"inreview"
]), dc = Q({
	listingId: ko(),
	sku: Y().trim().min(1).max(15).regex(/^[A-Za-z0-9-]+$/, "SKU may contain only letters, numbers and hyphens"),
	title: Y().trim().min(1).max(150).regex(/^[^<>]*$/, "Title must not contain HTML"),
	description: Y().trim().min(1).max(5e3),
	price: Jo().finite().nonnegative().multipleOf(.01),
	status: uc.default("active"),
	images: ns(lc).max(10)
}).strict(), fc = dc.extend({ id: ko() }), pc = ns(fc), mc = new class {
	url;
	constructor(e = "http://127.0.0.1:4180") {
		this.url = `${e.replace(/\/+$/, "")}/listingrecord/products`;
	}
	async list() {
		let e = pc.safeParse(await $(this.url, { cache: "no-store" }));
		if (!e.success) throw Error("The listing service returned invalid products.");
		return e.data;
	}
	create(e) {
		return this.save(this.url, "POST", e);
	}
	update(e, t) {
		return this.save(this.recordUrl(e), "PUT", t);
	}
	async delete(e) {
		await $(this.recordUrl(e), { method: "DELETE" });
	}
	recordUrl(e) {
		return `${this.url}/${ko().parse(e)}`;
	}
	async save(e, t, n) {
		let r = dc.parse(n), i = fc.safeParse(await $(e, {
			method: t,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(r)
		}));
		if (!i.success) throw Error("The listing service returned an invalid product.");
		return i.data;
	}
}();
function hc() {
	let [e, t] = a(null), [r, i] = a([]), [o, s] = a(""), [c, l] = a(!1), [u, d] = a(!0), [f, p] = a(""), [m, h] = a(""), g = r.find((e) => e.id === o);
	n(() => {
		let e = !0;
		return mc.list().then((t) => {
			e && i(t);
		}).catch((t) => {
			e && p(t instanceof Error ? t.message : "Unable to load saved products.");
		}).finally(() => {
			e && d(!1);
		}), () => {
			e = !1;
		};
	}, []);
	let _ = (e) => {
		t(e), s(""), S();
	}, v = (e) => {
		s(e), S();
	}, y = () => {
		t(null), s(""), S();
	}, b = async (t) => {
		l(!0), S();
		try {
			let n = e === "edit" && g ? await mc.update(g.id, t) : await mc.create(t);
			return i((t) => e === "edit" ? t.map((e) => e.id === n.id ? n : e) : [...t, n]), h(`Product “${n.title}” saved.`), e === "edit" && s(n.id), n;
		} catch (e) {
			throw p(e instanceof Error ? e.message : "Unable to save product."), e;
		} finally {
			l(!1);
		}
	}, x = async () => {
		if (g) {
			l(!0), S();
			try {
				await mc.delete(g.id), i((e) => e.filter((e) => e.id !== g.id)), h(`Product “${g.title}” deleted.`), s("");
			} catch (e) {
				p(e instanceof Error ? e.message : "Unable to delete product.");
			} finally {
				l(!1);
			}
		}
	}, S = () => {
		p(""), h("");
	};
	return {
		mode: e,
		products: r,
		selected: g,
		selectedId: o,
		busy: c,
		loading: u,
		error: f,
		message: m,
		disabled: c || u,
		begin: _,
		select: v,
		cancel: y,
		save: b,
		remove: x,
		clearFeedback: S
	};
}
//#endregion
//#region src/components/ListingCapabilities.tsx
var gc = [
	{
		action: "create",
		label: "Create listing"
	},
	{
		action: "edit",
		label: "Edit listing"
	},
	{
		action: "delete",
		label: "Delete listing"
	}
], _c = ({ mode: e, disabled: t, onChoose: n, children: r }) => /* @__PURE__ */ c("aside", {
	className: "word-editor__block-palette",
	"aria-label": "Listing capabilities",
	children: [/* @__PURE__ */ s("h2", {
		className: "word-editor__block-palette-title",
		children: "Capabilities"
	}), /* @__PURE__ */ c("ul", {
		className: "listing-workspace__capabilities",
		children: [gc.map(({ action: r, label: i }) => /* @__PURE__ */ s("li", { children: /* @__PURE__ */ s("button", {
			type: "button",
			className: "word-editor__block",
			"aria-pressed": e === r,
			disabled: t,
			onClick: () => n(r),
			children: i
		}) }, r)), r]
	})]
}), vc = (e) => {
	let { onSave: t, initialName: o = "", initialStatus: l = "active", editing: u = !1, onCancel: d } = e, [f, p] = a(o), [m, h] = a(l), [g, _] = a(!1), [v, y] = a(""), b = r(), x = r(), S = i(null);
	n(() => {
		S.current?.focus();
	}, []);
	let C = async (e) => {
		e.preventDefault();
		let n = f.trim();
		if (!n || n.length > 50) {
			y("Enter a listing name between 1 and 50 characters.");
			return;
		}
		_(!0), y("");
		try {
			await t({
				name: n,
				status: m
			}), u || (p(""), h("active")), S.current?.focus();
		} catch (e) {
			let t = e instanceof Error ? e.message : "Unable to save the listing.";
			y(`${t} Your entered details have been kept.`);
		} finally {
			_(!1);
		}
	};
	return /* @__PURE__ */ c("form", {
		className: "listing-workspace__form",
		onSubmit: (e) => {
			C(e);
		},
		children: [
			/* @__PURE__ */ s("h2", { children: u ? "Edit listing" : "Create listing" }),
			/* @__PURE__ */ s("label", {
				htmlFor: b,
				children: "Listing name"
			}),
			/* @__PURE__ */ s("input", {
				ref: S,
				id: b,
				value: f,
				maxLength: 50,
				required: !0,
				disabled: g,
				onChange: (e) => p(e.target.value)
			}),
			/* @__PURE__ */ s("label", {
				htmlFor: x,
				children: "Status"
			}),
			/* @__PURE__ */ c("select", {
				id: x,
				value: m,
				disabled: g,
				onChange: (e) => h(e.target.value),
				children: [
					/* @__PURE__ */ s("option", {
						value: "active",
						children: "Active"
					}),
					/* @__PURE__ */ s("option", {
						value: "disable",
						children: "Disabled"
					}),
					/* @__PURE__ */ s("option", {
						value: "inreview",
						children: "In review"
					})
				]
			}),
			v && /* @__PURE__ */ s("p", {
				role: "alert",
				children: v
			}),
			/* @__PURE__ */ c("div", {
				className: "word-editor__save-or-export",
				children: [/* @__PURE__ */ s("button", {
					type: "submit",
					disabled: g,
					children: g ? "Saving…" : "Save listing"
				}), /* @__PURE__ */ s("button", {
					type: "button",
					disabled: g,
					onClick: d,
					children: "Cancel"
				})]
			})
		]
	});
}, yc = ({ listings: e, selectedId: t, action: n, disabled: i, onSelect: a }) => {
	let o = r(), l = `${o}-hint`;
	return /* @__PURE__ */ c("div", {
		className: "listing-workspace__selector",
		children: [
			/* @__PURE__ */ c("label", {
				htmlFor: o,
				children: ["Select listing to ", n]
			}),
			/* @__PURE__ */ c("select", {
				id: o,
				value: t,
				disabled: i || e.length === 0,
				"aria-describedby": l,
				onChange: (e) => a(e.target.value),
				children: [/* @__PURE__ */ s("option", {
					value: "",
					children: "Choose a listing"
				}), e.map((e) => /* @__PURE__ */ s("option", {
					value: e.id,
					children: e.name
				}, e.id))]
			}),
			/* @__PURE__ */ s("p", {
				id: l,
				children: e.length === 0 ? "No saved listings yet." : n === "edit" ? "Choose a listing to change its name." : "Choose a listing, then confirm its deletion."
			})
		]
	});
}, bc = (e) => {
	let { listing: t, productCount: n, busy: r, onConfirm: i, onCancel: a } = e, o = n > 0;
	return /* @__PURE__ */ c("section", {
		className: "listing-workspace__confirmation",
		"aria-label": "Confirm deletion",
		children: [
			/* @__PURE__ */ s("p", { children: o ? `Listing “${t.name}” contains ${n} ${n === 1 ? "product" : "products"}. Delete its products before deleting this listing.` : `Delete listing “${t.name}”? This cannot be undone.` }),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "listing-workspace__danger",
				disabled: r || o,
				onClick: () => {
					i();
				},
				children: r ? "Deleting…" : "Confirm delete"
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				disabled: r,
				onClick: a,
				children: "Cancel"
			})
		]
	});
}, xc = ({ controller: e, selectedProductCount: t }) => {
	let { mode: n, listings: r, selectedId: i, selected: a, disabled: l, busy: u, select: d, save: f, remove: p, cancel: m } = e;
	return n === "create" ? /* @__PURE__ */ s(vc, {
		onSave: f,
		onCancel: m
	}, "create") : n ? /* @__PURE__ */ c(o, { children: [
		/* @__PURE__ */ s(yc, {
			listings: r,
			selectedId: i,
			action: n,
			disabled: l,
			onSelect: d
		}),
		n === "edit" && a && /* @__PURE__ */ s(vc, {
			editing: !0,
			initialName: a.name,
			initialStatus: a.status,
			onSave: f,
			onCancel: m
		}, a.id),
		n === "delete" && a && /* @__PURE__ */ s(bc, {
			listing: a,
			productCount: t,
			busy: u,
			onConfirm: p,
			onCancel: m
		})
	] }) : null;
}, Sc = ({ loading: e, mode: t, message: n, error: r }) => /* @__PURE__ */ c(o, { children: [
	e && /* @__PURE__ */ s("p", {
		role: "status",
		children: "Loading listings…"
	}),
	!e && !t && /* @__PURE__ */ s("p", {
		className: "listing-workspace__intro",
		children: "Choose a capability to create, edit or delete a listing."
	}),
	n && /* @__PURE__ */ s("p", {
		className: "listing-workspace__status",
		role: "status",
		children: n
	}),
	r && /* @__PURE__ */ s("p", {
		className: "listing-workspace__error",
		role: "alert",
		children: r
	})
] }), Cc = {
	active: "Active",
	disable: "Disabled",
	inreview: "In review"
}, wc = ({ listings: e, products: t }) => {
	if (e.length === 0) return null;
	let n = (e) => t.filter((t) => t.listingId === e).length;
	return /* @__PURE__ */ c("section", {
		className: "listing-workspace__saved",
		"aria-label": "Saved listings",
		children: [/* @__PURE__ */ c("h2", { children: ["Saved listings ", /* @__PURE__ */ s("span", {
			className: "listing-workspace__count",
			children: e.length
		})] }), /* @__PURE__ */ s("ul", { children: e.map((e) => {
			let t = n(e.id);
			return /* @__PURE__ */ c("li", { children: [/* @__PURE__ */ c("div", {
				className: "listing-workspace__listing-summary",
				children: [/* @__PURE__ */ s("span", { children: e.name }), /* @__PURE__ */ s("span", {
					className: `listing-workspace__status-flag listing-workspace__status-flag--${e.status}`,
					children: Cc[e.status]
				})]
			}), /* @__PURE__ */ c("span", {
				className: "listing-workspace__product-count",
				children: [
					t,
					" ",
					t === 1 ? "product" : "products"
				]
			})] }, e.id);
		}) })]
	});
}, Tc = [
	{
		mode: "create",
		label: "Add product"
	},
	{
		mode: "edit",
		label: "Edit product"
	},
	{
		mode: "delete",
		label: "Delete product"
	}
], Ec = ({ mode: e, disabled: t = !1, onChoose: n }) => /* @__PURE__ */ s(o, { children: Tc.map((r) => /* @__PURE__ */ s("li", {
	className: r.mode === "create" ? "listing-workspace__product-capability" : void 0,
	children: /* @__PURE__ */ s("button", {
		type: "button",
		className: "word-editor__block",
		"aria-pressed": e === r.mode,
		disabled: t,
		onClick: () => n(r.mode),
		children: r.label
	})
}, r.mode)) }), Dc = ({ product: e, disabled: t = !1, onConfirm: n, onCancel: r }) => /* @__PURE__ */ c("section", {
	className: "listing-workspace__product-delete",
	"aria-label": "Confirm product deletion",
	children: [/* @__PURE__ */ c("p", { children: [
		"Delete product “",
		e.title,
		"” and its ",
		e.images.length,
		" uploaded",
		e.images.length === 1 ? " image" : " images",
		"? This cannot be undone."
	] }), /* @__PURE__ */ c("div", {
		className: "word-editor__save-or-export",
		children: [/* @__PURE__ */ s("button", {
			type: "button",
			disabled: t,
			onClick: () => {
				n();
			},
			children: t ? "Deleting…" : "Confirm delete"
		}), /* @__PURE__ */ s("button", {
			type: "button",
			disabled: t,
			onClick: r,
			children: "Cancel"
		})]
	})]
}), Oc = Q({
	cloudName: Y().min(1),
	apiKey: Y().min(1),
	timestamp: Jo().int().positive(),
	folder: Y().min(1),
	signature: Y().min(1)
}).strict(), kc = Q({
	secure_url: jo(),
	public_id: Y().min(1)
}).passthrough(), Ac = new class {
	signatureUrl;
	constructor(e = "http://127.0.0.1:4180") {
		this.signatureUrl = `${e.replace(/\/+$/, "")}/listingrecord/product-images/signature`;
	}
	async upload(e) {
		this.validate(e);
		let t = Oc.parse(await $(this.signatureUrl, { method: "POST" }));
		return Promise.all(e.map((e) => this.uploadOne(e, t)));
	}
	async uploadOne(e, t) {
		let n = await fetch(`https://api.cloudinary.com/v1_1/${encodeURIComponent(t.cloudName)}/image/upload`, {
			method: "POST",
			body: this.formData(e, t)
		}), r;
		try {
			r = await n.json();
		} catch {
			throw Error("Cloudinary returned an invalid response.");
		}
		if (!n.ok) throw Error("Unable to upload a product image.");
		let i = kc.safeParse(r);
		if (!i.success) throw Error("Cloudinary returned an invalid image record.");
		return {
			url: i.data.secure_url,
			publicId: i.data.public_id
		};
	}
	validate(e) {
		if (e.length === 0) throw Error("Choose at least one image.");
		if (e.length > 10) throw Error("Choose no more than 10 images.");
		if (e.some((e) => !e.type.startsWith("image/"))) throw Error("Choose image files only.");
		if (e.some((e) => e.size > 10485760)) throw Error("Choose images smaller than 10 MB each.");
	}
	formData(e, t) {
		let n = new FormData();
		return n.append("file", e), n.append("api_key", t.apiKey), n.append("timestamp", String(t.timestamp)), n.append("folder", t.folder), n.append("signature", t.signature), n;
	}
}(), jc = 10;
function Mc() {
	let [e, t] = a(!1), [n, r] = a("");
	return {
		busy: e,
		error: n,
		upload: async (e, n = 0) => {
			if (n + e.length > jc) {
				let e = /* @__PURE__ */ Error(`Choose no more than ${jc} images in total.`);
				throw r(e.message), e;
			}
			t(!0), r("");
			try {
				return await Ac.upload(e);
			} catch (e) {
				throw r(e instanceof Error ? e.message : "Unable to upload images."), e;
			} finally {
				t(!1);
			}
		},
		clear: () => r("")
	};
}
//#endregion
//#region src/components/product/ProductImageField.tsx
var Nc = ({ value: e, disabled: t = !1, onChange: n }) => {
	let i = r(), a = Mc(), o = async (t) => {
		let r = t ? Array.from(t) : [];
		if (r.length !== 0) {
			a.clear();
			try {
				let t = await a.upload(r, e.length);
				n([...e, ...t]);
			} catch {}
		}
	};
	return /* @__PURE__ */ c("div", {
		className: "listing-workspace__product-image",
		children: [
			/* @__PURE__ */ s("label", {
				htmlFor: i,
				children: "Images"
			}),
			/* @__PURE__ */ s("input", {
				id: i,
				name: "imageFiles",
				type: "file",
				accept: "image/*",
				multiple: !0,
				disabled: t || a.busy || e.length >= 10,
				required: e.length === 0,
				onChange: (e) => {
					o(e.target.files);
				}
			}),
			/* @__PURE__ */ s("p", {
				className: "listing-workspace__product-image-hint",
				children: "Select additional images from one folder, up to 10 images in total."
			}),
			a.busy && /* @__PURE__ */ s("p", {
				role: "status",
				children: "Uploading images…"
			}),
			a.error && /* @__PURE__ */ s("p", {
				role: "alert",
				children: a.error
			}),
			e.length > 0 && /* @__PURE__ */ s("div", {
				className: "listing-workspace__product-image-previews",
				"aria-label": "Uploaded product images",
				children: e.map((e, t) => /* @__PURE__ */ c("figure", {
					className: "listing-workspace__product-image-preview",
					children: [/* @__PURE__ */ s("img", {
						src: e.url,
						alt: `Product preview ${t + 1}`
					}), /* @__PURE__ */ c("figcaption", { children: ["Image ", t + 1] })]
				}, e.publicId))
			})
		]
	});
};
//#endregion
//#region src/components/product/ProductForm.tsx
function Pc(e) {
	return {
		sku: e ? e.sku : "",
		title: e ? e.title : "",
		description: e ? e.description : "",
		price: e ? String(e.price) : "",
		status: e ? e.status : "active",
		images: e ? e.images : []
	};
}
var Fc = (e) => {
	let { listingId: t, initial: i, onCancel: o, onSave: l } = e, u = e.disabled === !0, d = Pc(i), [f, p] = a(d.sku), [m, h] = a(d.title), [g, _] = a(d.description), [v, y] = a(d.price), [b, x] = a(d.status), [S, C] = a(d.images), ee = r(), w = r(), te = r(), ne = r(), re = r();
	n(() => {
		let e = Pc(i);
		p(e.sku), h(e.title), _(e.description), y(e.price), x(e.status), C(e.images);
	}, [i]);
	let ie = async (e) => {
		e.preventDefault(), await l({
			listingId: t,
			sku: f,
			title: m,
			description: g,
			price: Number(v),
			status: b,
			images: S
		});
	};
	return /* @__PURE__ */ c("form", {
		className: "listing-workspace__product-form",
		onSubmit: (e) => {
			ie(e);
		},
		children: [
			/* @__PURE__ */ s("h3", { children: i ? "Edit product" : "Product details" }),
			/* @__PURE__ */ s("label", {
				htmlFor: ee,
				children: "SKU"
			}),
			/* @__PURE__ */ s("input", {
				id: ee,
				name: "sku",
				type: "text",
				autoComplete: "off",
				value: f,
				onChange: (e) => p(e.target.value),
				disabled: u,
				required: !0
			}),
			/* @__PURE__ */ s("label", {
				htmlFor: w,
				children: "Title"
			}),
			/* @__PURE__ */ s("input", {
				id: w,
				name: "title",
				type: "text",
				value: m,
				onChange: (e) => h(e.target.value),
				disabled: u,
				required: !0
			}),
			/* @__PURE__ */ s("label", {
				htmlFor: te,
				children: "Description"
			}),
			/* @__PURE__ */ s("textarea", {
				id: te,
				name: "description",
				rows: 5,
				value: g,
				onChange: (e) => _(e.target.value),
				disabled: u,
				required: !0
			}),
			/* @__PURE__ */ s("label", {
				htmlFor: ne,
				children: "Price"
			}),
			/* @__PURE__ */ s("input", {
				id: ne,
				name: "price",
				type: "number",
				min: "0",
				step: "0.01",
				inputMode: "decimal",
				value: v,
				onChange: (e) => y(e.target.value),
				disabled: u,
				required: !0
			}),
			/* @__PURE__ */ s("label", {
				htmlFor: re,
				children: "Status"
			}),
			/* @__PURE__ */ c("select", {
				id: re,
				value: b,
				disabled: u,
				onChange: (e) => x(e.target.value),
				children: [
					/* @__PURE__ */ s("option", {
						value: "active",
						children: "Active"
					}),
					/* @__PURE__ */ s("option", {
						value: "disable",
						children: "Disabled"
					}),
					/* @__PURE__ */ s("option", {
						value: "inreview",
						children: "In review"
					})
				]
			}),
			/* @__PURE__ */ s(Nc, {
				value: S,
				disabled: u,
				onChange: C
			}),
			/* @__PURE__ */ c("div", {
				className: "word-editor__save-or-export",
				children: [/* @__PURE__ */ s("button", {
					type: "submit",
					disabled: u || S.length === 0,
					children: u ? "Saving…" : "Save product"
				}), /* @__PURE__ */ s("button", {
					type: "button",
					disabled: u,
					onClick: o,
					children: "Cancel"
				})]
			})
		]
	});
}, Ic = {
	active: "Active",
	disable: "Disabled",
	inreview: "In review"
}, Lc = ({ products: e, selectedId: t, disabled: n = !1, onSelect: i }) => {
	let a = r(), l = e.find((e) => e.id === t);
	return /* @__PURE__ */ c(o, { children: [
		/* @__PURE__ */ s("label", {
			htmlFor: a,
			children: "Product"
		}),
		/* @__PURE__ */ c("select", {
			id: a,
			value: t,
			disabled: n || e.length === 0,
			onChange: (e) => i(e.target.value),
			children: [/* @__PURE__ */ s("option", {
				value: "",
				children: "Choose a product"
			}), e.map((e) => /* @__PURE__ */ c("option", {
				value: e.id,
				children: [
					e.title,
					" (",
					e.sku,
					")"
				]
			}, e.id))]
		}),
		l && /* @__PURE__ */ s("span", {
			className: `listing-workspace__status-flag listing-workspace__status-flag--${l.status}`,
			children: Ic[l.status]
		}),
		e.length === 0 && /* @__PURE__ */ s("p", { children: "No products saved for this listing yet." })
	] });
};
//#endregion
//#region src/components/product/ProductWorkspace.tsx
function Rc(e) {
	return e === "create" ? "Add product" : e === "edit" ? "Edit product" : "Delete product";
}
function zc({ listing: e, selected: t, controller: n }) {
	return e ? n.mode === "create" ? /* @__PURE__ */ s(Fc, {
		listingId: e.id,
		disabled: n.disabled,
		onCancel: n.cancel,
		onSave: n.save
	}) : n.mode === "edit" && t ? /* @__PURE__ */ s(Fc, {
		listingId: e.id,
		initial: t,
		disabled: n.disabled,
		onCancel: n.cancel,
		onSave: n.save
	}) : n.mode === "delete" && t ? /* @__PURE__ */ s(Dc, {
		product: t,
		disabled: n.disabled,
		onConfirm: n.remove,
		onCancel: n.cancel
	}) : null : null;
}
var Bc = ({ listings: e, controller: t }) => {
	let [n, i] = a(""), o = r(), l = e.find((e) => e.id === n), u = t.products.filter((e) => e.listingId === n), d = u.find((e) => e.id === t.selectedId);
	return /* @__PURE__ */ c("section", {
		className: "listing-workspace__product",
		"aria-label": "Product management",
		children: [
			/* @__PURE__ */ s("h2", { children: Rc(t.mode) }),
			/* @__PURE__ */ s("label", {
				htmlFor: o,
				children: "Listing"
			}),
			/* @__PURE__ */ c("select", {
				id: o,
				value: n,
				disabled: t.disabled || e.length === 0,
				onChange: (e) => {
					i(e.target.value), t.select("");
				},
				children: [/* @__PURE__ */ s("option", {
					value: "",
					children: "Choose a listing"
				}), e.map((e) => /* @__PURE__ */ s("option", {
					value: e.id,
					children: e.name
				}, e.id))]
			}),
			e.length === 0 && /* @__PURE__ */ s("p", { children: "No saved listings yet. Create a listing first." }),
			l && (t.mode === "edit" || t.mode === "delete") && /* @__PURE__ */ c("div", {
				className: "listing-workspace__product-details",
				children: [/* @__PURE__ */ s(Lc, {
					products: u,
					selectedId: t.selectedId,
					disabled: t.disabled,
					onSelect: t.select
				}), /* @__PURE__ */ s(zc, {
					listing: l,
					selected: d,
					controller: t
				})]
			}),
			l && t.mode === "create" && /* @__PURE__ */ s(zc, {
				listing: l,
				selected: d,
				controller: t
			}),
			t.message && /* @__PURE__ */ s("p", {
				role: "status",
				children: t.message
			}),
			t.error && /* @__PURE__ */ s("p", {
				role: "alert",
				children: t.error
			})
		]
	});
}, Vc = ({ config: e }) => {
	let t = sc(e.runtime.sellerId), n = hc(), r = (e) => {
		n.cancel(), t.begin(e);
	}, i = (e) => {
		t.cancel(), n.begin(e);
	}, a = n.mode !== null, l = t.selected ? n.products.filter((e) => e.listingId === t.selected?.id).length : 0;
	return /* @__PURE__ */ c("section", {
		className: "word-editor listing-workspace",
		children: [/* @__PURE__ */ c("header", {
			className: "word-editor__header",
			children: [/* @__PURE__ */ s("h1", {
				"data-createlisting-title": !0,
				className: "word-editor__title",
				style: { color: e.settings.colour },
				children: e.data.title
			}), /* @__PURE__ */ s("p", {
				className: "word-editor__subtitle",
				children: "Listing capabilities"
			})]
		}), /* @__PURE__ */ c("div", {
			className: "word-editor__workspace",
			children: [/* @__PURE__ */ s(_c, {
				mode: t.mode,
				disabled: t.disabled,
				onChoose: r,
				children: /* @__PURE__ */ s(Ec, {
					mode: n.mode,
					disabled: t.disabled || n.disabled,
					onChoose: i
				})
			}), /* @__PURE__ */ s("div", {
				className: "word-editor__document-area",
				children: /* @__PURE__ */ c("div", {
					className: "word-editor__document listing-workspace__content",
					children: [a ? /* @__PURE__ */ s(Bc, {
						listings: t.listings,
						controller: n
					}) : /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s(xc, {
						controller: t,
						selectedProductCount: l
					}), /* @__PURE__ */ s(Sc, {
						loading: t.loading,
						mode: t.mode,
						message: t.message,
						error: t.error
					})] }), /* @__PURE__ */ s(wc, {
						listings: t.listings,
						products: n.products
					})]
				})
			})]
		})]
	});
};
//#endregion
//#region src/bootstrap/WidgetWrapper.tsx
function Hc({ contract: e, runtime: t }) {
	let r = qs(), [i, o] = a(!1), c = zs(e, t, r);
	return n(() => {
		c && requestAnimationFrame(() => {
			o(!0);
		});
	}, [c]), c ? i ? /* @__PURE__ */ s(Vc, { config: c }) : /* @__PURE__ */ s(Xs, {}) : null;
}
//#endregion
//#region src/bootstrap/widget-root.tsx
function Uc({ contract: e, runtime: t, hostElement: n }) {
	return /* @__PURE__ */ s("div", {
		className: `reactedge-${Rs}`,
		children: /* @__PURE__ */ s(Ks, {
			...n ? { hostElement: n } : {},
			children: /* @__PURE__ */ s(Hc, {
				contract: e,
				runtime: t
			})
		})
	});
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/host.ts
var Wc = class {
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
}, Gc = [
	".reactedge-createlisting .word-editor{box-sizing:border-box;flex-direction:column;gap:16px;width:100%;min-height:80vh;display:flex}.reactedge-createlisting .word-editor__toolbar{border:1px solid #ddd;border-radius:8px;align-items:center;gap:12px;padding:12px;display:flex}.reactedge-createlisting .word-editor__toolbar input{min-width:0;font:inherit;border:1px solid #ccc;border-radius:4px;flex:1;padding:8px 10px}.reactedge-createlisting .word-editor__toolbar button,.reactedge-createlisting .word-editor__save-or-export button{cursor:pointer;font:inherit;border:1px solid #bbb;border-radius:4px;padding:8px 16px}.reactedge-createlisting .word-editor__toolbar button:disabled,.reactedge-createlisting .word-editor__save-or-export button:disabled{cursor:default;opacity:.5}.reactedge-createlisting .word-editor__document{border:1px solid #ddd;border-radius:8px;flex:1;min-height:0;overflow:hidden}.reactedge-createlisting .word-editor__document-frame{border:0;width:100%;height:70vh;display:block}.reactedge-createlisting .word-editor__save-or-export{justify-content:flex-end;gap:12px;display:flex}",
	".reactedge-createlisting .word-editor__header{margin-bottom:20px}.reactedge-createlisting .word-editor__title{letter-spacing:-.02em;margin:0;font-size:28px;font-weight:600;line-height:1.2}.reactedge-createlisting .word-editor__subtitle{color:#666;margin:6px 0 0;font-size:14px;line-height:1.4}",
	".reactedge-createlisting .word-editor__workspace{grid-template-columns:180px minmax(0,1fr);align-items:start;gap:20px;display:grid}.reactedge-createlisting .word-editor__block-palette{background:#fff;border:1px solid #ddd;border-radius:8px;padding:16px}.reactedge-createlisting .word-editor__block-palette-title{text-transform:uppercase;letter-spacing:.04em;color:#666;margin-bottom:12px;font-size:13px;font-weight:600}.reactedge-createlisting .word-editor__block{cursor:grab;-webkit-user-select:none;user-select:none;background:#f7f7f7;border:1px solid #ddd;border-radius:6px;margin-bottom:8px;padding:10px 12px;font-size:14px}.reactedge-createlisting .word-editor__block:hover{background:#f1f1f1}.reactedge-createlisting .word-editor__block:active{cursor:grabbing}",
	".reactedge-createlisting .listing-workspace{color:#1f2937;font-family:system-ui,sans-serif;line-height:1.5}.reactedge-createlisting .listing-workspace *,.reactedge-createlisting .listing-workspace :before,.reactedge-createlisting .listing-workspace :after{box-sizing:border-box}.reactedge-createlisting .listing-workspace__capabilities{margin:0;padding:0;list-style:none}.reactedge-createlisting .listing-workspace .word-editor__block-palette-title{margin-top:0}.reactedge-createlisting .listing-workspace__capabilities button.word-editor__block{width:100%;font:inherit;text-align:left;cursor:pointer;display:block}.reactedge-createlisting .listing-workspace__capabilities button[aria-pressed=true]{color:#1e40af;background:#eff6ff;border-color:#93c5fd}.reactedge-createlisting .listing-workspace__content{background:#fff;min-height:280px;padding:24px}.reactedge-createlisting .listing-workspace__content h2{margin:0 0 16px;font-size:18px}.reactedge-createlisting .listing-workspace__form,.reactedge-createlisting .listing-workspace__selector{flex-direction:column;gap:8px;margin-bottom:24px;display:flex}.reactedge-createlisting .listing-workspace__form h2{margin-bottom:8px}.reactedge-createlisting .listing-workspace__form label,.reactedge-createlisting .listing-workspace__selector label{font-size:14px;font-weight:600}.reactedge-createlisting .listing-workspace__form input,.reactedge-createlisting .listing-workspace__form select,.reactedge-createlisting .listing-workspace__selector select{width:100%;min-width:0;min-height:46px;color:inherit;font:inherit;background-color:#fff;border:1px solid #94a3b8;border-radius:8px;padding:10px 14px}.reactedge-createlisting .listing-workspace__form select,.reactedge-createlisting .listing-workspace__selector select{appearance:none;cursor:pointer;text-overflow:ellipsis;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%23475569' stroke-width='1.5'%3E%3Cpath d='m5 8 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 14px center;background-repeat:no-repeat;padding-right:40px}.reactedge-createlisting .listing-workspace__selector p,.reactedge-createlisting .listing-workspace__intro{color:#64748b;margin:0;font-size:14px}.reactedge-createlisting .listing-workspace button:focus-visible,.reactedge-createlisting .listing-workspace input:focus-visible,.reactedge-createlisting .listing-workspace select:focus-visible{outline-offset:3px;outline:3px solid #2563eb}.reactedge-createlisting .listing-workspace__content button{color:#334155;cursor:pointer;min-height:40px;font:inherit;background:#fff;border:1px solid #cbd5e1;border-radius:6px;padding:8px 16px}.reactedge-createlisting .listing-workspace__form button[type=submit]{color:#fff;background:#1d4ed8;border-color:#1d4ed8}.reactedge-createlisting .listing-workspace__content button:hover:not(:disabled){filter:brightness(.95)}.reactedge-createlisting .listing-workspace button:disabled,.reactedge-createlisting .listing-workspace select:disabled,.reactedge-createlisting .listing-workspace input:disabled{cursor:default;opacity:.6}.reactedge-createlisting .listing-workspace__confirmation{background:#fff7f7;border:1px solid #fecaca;border-radius:8px;margin-bottom:24px;padding:16px}.reactedge-createlisting .listing-workspace__confirmation p{overflow-wrap:anywhere;margin:0 0 16px}.reactedge-createlisting .listing-workspace__content button.listing-workspace__danger{color:#fff;background:#b91c1c;border-color:#b91c1c;margin-right:8px}.reactedge-createlisting .listing-workspace__saved{border-top:1px solid #e2e8f0;margin-top:24px;padding-top:24px}.reactedge-createlisting .listing-workspace__saved ul{margin:0;padding:0;list-style:none}.reactedge-createlisting .listing-workspace__saved li{overflow-wrap:anywhere;border-bottom:1px solid #f1f5f9;justify-content:space-between;align-items:center;gap:16px;padding:12px 0;display:flex}.reactedge-createlisting .listing-workspace__product-count{color:#64748b;flex:none;font-size:13px}.reactedge-createlisting .listing-workspace__count{color:#475569;vertical-align:middle;background:#f1f5f9;border-radius:12px;margin-left:6px;padding:2px 8px;font-size:13px;font-weight:500}.reactedge-createlisting .listing-workspace__status,.reactedge-createlisting .listing-workspace__error,.reactedge-createlisting .listing-workspace__form [role=alert]{overflow-wrap:anywhere;border-radius:6px;padding:12px 16px}.reactedge-createlisting .listing-workspace__status{color:#166534;background:#f0fdf4}.reactedge-createlisting .listing-workspace__error,.reactedge-createlisting .listing-workspace__form [role=alert]{color:#991b1b;background:#fef2f2}@media (width<=600px){.reactedge-createlisting .listing-workspace .word-editor__workspace{grid-template-columns:1fr}.reactedge-createlisting .listing-workspace__content{padding:16px}.reactedge-createlisting .listing-workspace .word-editor__save-or-export{flex-wrap:wrap}}.reactedge-createlisting .listing-workspace__listing-summary{align-items:center;gap:10px;min-width:0;display:flex}.reactedge-createlisting .listing-workspace__status-flag{border-radius:12px;flex:none;padding:2px 8px;font-size:12px;font-weight:600}.reactedge-createlisting .listing-workspace__status-flag--active{color:#166534;background:#dcfce7}.reactedge-createlisting .listing-workspace__status-flag--disable{color:#475569;background:#e2e8f0}.reactedge-createlisting .listing-workspace__status-flag--inreview{color:#92400e;background:#fef3c7}",
	".reactedge-createlisting .listing-workspace__product-capability{border-top:1px solid #ddd;margin-top:18px;padding-top:18px}.reactedge-createlisting .listing-workspace__product{flex-direction:column;gap:12px;margin-bottom:24px;display:flex}.reactedge-createlisting .listing-workspace__product h2,.reactedge-createlisting .listing-workspace__product h3{margin:0}.reactedge-createlisting .listing-workspace__product select,.reactedge-createlisting .listing-workspace__product-form input,.reactedge-createlisting .listing-workspace__product-form select,.reactedge-createlisting .listing-workspace__product-form textarea{width:100%;min-width:0;min-height:46px;color:inherit;box-sizing:border-box;font:inherit;background:#fff;border:1px solid #94a3b8;border-radius:8px;padding:10px 14px}.reactedge-createlisting .listing-workspace__product-form textarea{resize:vertical}.reactedge-createlisting .listing-workspace__product-details{border-top:1px solid #ddd;flex-direction:column;gap:12px;margin-top:8px;padding-top:16px;display:flex}.reactedge-createlisting .listing-workspace__product-details>p{margin:0}.reactedge-createlisting .listing-workspace__product-form{border:1px solid #ddd;border-radius:8px;flex-direction:column;gap:10px;margin-top:16px;padding:16px;display:flex}.reactedge-createlisting .listing-workspace__product-form label{font-size:14px;font-weight:600}.reactedge-createlisting .listing-workspace__product-delete{background:#fff7f7;border:1px solid #fecaca;border-radius:8px;padding:16px}.reactedge-createlisting .listing-workspace__product-delete p{margin:0 0 16px}.reactedge-createlisting .listing-workspace__product-image{flex-direction:column;gap:10px;display:flex}.reactedge-createlisting .listing-workspace__product-image-hint{color:#64748b;margin:0;font-size:13px}.reactedge-createlisting .listing-workspace__product-image-previews{grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:12px;display:grid}.reactedge-createlisting .listing-workspace__product-image-preview{margin:0}.reactedge-createlisting .listing-workspace__product-image-preview img{aspect-ratio:1;object-fit:cover;border:1px solid #ddd;border-radius:8px;width:100%;display:block}.reactedge-createlisting .listing-workspace__product-image-preview figcaption{color:#64748b;margin-top:6px;font-size:12px}.reactedge-createlisting .listing-workspace__product select,.reactedge-createlisting .listing-workspace__product-form select{appearance:none;cursor:pointer;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%23475569' stroke-width='1.5'%3E%3Cpath d='m5 8 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 14px center;background-repeat:no-repeat;padding-right:40px}"
];
//#endregion
//#region src/Widget.tsx
function Kc({ container: e, contract: t, runtime: n }) {
	let r = new Wc(Gc).getMountedHost(e);
	l(r).render(/* @__PURE__ */ s(Uc, {
		contract: t,
		runtime: n
	}));
}
//#endregion
export { Kc as Widget };
