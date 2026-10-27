import { createContext as e, useContext as t, useEffect as n, useEffectEvent as r, useId as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { createRoot as l, hydrateRoot as u } from "react-dom/client";
//#region ../../node_modules/zod/v4/core/util.js
function d(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function f(e, t = "|") {
	return e.map((e) => pe(e)).join(t);
}
function p(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
var m = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		let e = this._getter;
		return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
	}
};
function h(e) {
	return new m(e);
}
function ee(e) {
	return e == null;
}
function g(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function _(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function te(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function v(e) {
	return te(e._zod.def) ?? e._zod.def.shape;
}
function ne(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return _(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function re(e, t, n) {
	t in e ? _(e, t, n) : e[t] = n;
}
function y(e, t, n, r) {
	let i = v(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? ne(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : re(e, a, r ? r(n.value, a) : n.value));
	}
}
function ie(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? ne(e, n, () => t[n]) : re(e, n, r.value));
	}
}
function b(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function ae(e) {
	return JSON.stringify(e);
}
function oe(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var se = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function ce(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var le = /* @__PURE__*/ h(() => {
	if (N.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function x(e) {
	if (ce(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return ce(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function ue(e) {
	return x(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var de = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function fe(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function S(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function C(e) {
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
function pe(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function me(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var he = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, ge = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function _e(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return y(i, e, ve(e, t)), S(e, b(n, {
		shape: i,
		checks: []
	}));
}
function ve(e, t) {
	let n = v(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function ye(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(ve(e, t)), a = {};
	return y(a, e, Reflect.ownKeys(v(e)).filter((e) => !i.has(e))), S(e, b(n, {
		shape: a,
		checks: []
	}));
}
function be(e, t) {
	if (!x(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = v(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return S(e, b(e._zod.def, { shape: xe(e, t) }));
}
function xe(e, t) {
	let n = {};
	return y(n, e, Reflect.ownKeys(v(e))), ie(n, t), n;
}
function Se(e, t) {
	if (!x(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return S(e, b(e._zod.def, { shape: xe(e, t) }));
}
function Ce(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return y(n, e, Reflect.ownKeys(v(e))), y(n, t, Reflect.ownKeys(v(t))), S(e, b(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function we(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(ve(t, n)) : void 0, o = {};
	return y(o, t, Reflect.ownKeys(v(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), S(t, b(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function Te(e, t, n) {
	let r = n ? new Set(ve(t, n)) : void 0, i = {};
	return y(i, t, Reflect.ownKeys(v(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), S(t, b(t._zod.def, { shape: i }));
}
function w(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Ee(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function De(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function T(e) {
	return typeof e == "string" ? e : e?.message;
}
function Oe(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function E(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : T(e.inst?._zod.def?.error?.(e)) ?? T(a?.(e)) ?? T(t?.error?.(e)) ?? T(n.customError?.(e)) ?? T(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
var ke = /[\uD800-\uDBFF]/;
function Ae(e) {
	let t = e.length;
	if (!ke.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function je(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Me(e) {
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
function D(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function Ne(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Ie(e, n, r.value);
	}
}
function O(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function Pe(e, t, n) {
	return O(e, t, n, !1);
}
function Fe(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return O(this, n, r(this));
			},
			set(e) {
				O(this, n, e);
			}
		});
	}
	return t;
}
function Ie(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : O(this, t, n.bind(this));
		},
		set(e) {
			O(this, t, e);
		}
	});
}
function Le(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var Re, k = !1, ze = {
	configurable: !0,
	get() {
		k = !0;
	}
};
function A(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Re !== e._zod) {
		Re = void 0;
		return;
	}
	Re = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, ze);
			let e = k;
			k = !1;
			try {
				let r = n(this);
				return k ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), k ||= e, r;
			} catch (n) {
				throw delete this[t], k ||= e, n;
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
function Be(e, t, n, r) {
	let i = Le(e, t);
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
var Ve = "~constantCatch";
function He(e) {
	let t = () => e;
	return t[Ve] = !0, t;
}
//#endregion
//#region ../../node_modules/zod/v4/core/core.js
var Ue, We = {
	value: void 0,
	enumerable: !1
}, Ge = "captureStackTrace" in Error ? Error : null;
function Ke(e) {
	let t = Ge;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Ge = null, new e();
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
function j(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			We.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", We);
			} finally {
				We.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), Ne(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? Ke(u) : this;
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
var M = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, qe = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(Ue = globalThis).__zod_globalConfig ?? (Ue.__zod_globalConfig = {});
var N = globalThis.__zod_globalConfig;
function P(e) {
	return e && Object.assign(N, e), N;
}
//#endregion
//#region ../../node_modules/zod/v4/core/errors.js
function Je() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, p, 2), e.message;
}
function Ye(e) {
	this._zod.message = e;
}
var Xe = {
	get: Je,
	set: Ye,
	enumerable: !0,
	configurable: !0
}, Ze = {
	value: void 0,
	enumerable: !1
}, Qe = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), $e = (e, t) => {
	e.name = "$ZodError", Ze.value = t, Object.defineProperty(e, "issues", Ze), Ze.value = void 0, Object.defineProperty(e, "message", Xe);
	let n = Object.getPrototypeOf(e);
	Qe.has(n) || (Qe.add(n), Object.defineProperty(n, "toString", {
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
}, et = j("$ZodError", $e);
j("$ZodError", $e, void 0, { Parent: Error });
function tt(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function nt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? tt(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function rt(e, t = (e) => e.message) {
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
function it(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var at = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new M();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => E(e, o, P())));
			throw se(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, ot = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => E(e, o, P())));
			throw se(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, st = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new M();
	return a.issues.length ? ct(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
};
function ct(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => E(e, n, P()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
var lt = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? ct(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
}, ut = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), dt = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), ft = ((e, t, n) => {
	let r = e._zod.bag.validator;
	if (r !== void 0) {
		if (r(t) !== ut) return !0;
		if (r.definite === !0 && n === void 0) return !1;
	}
	return pt(e, t, n);
});
function pt(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[dt] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new M();
	return a.issues.length === 0;
}
var mt = async (e, t, n) => {
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
}, ht = (e) => {
	let t = at(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, it(n, a));
	};
	return n;
}, gt = (e) => {
	let t = at(e), n = (e, r, i, a) => t(e, r, i, it(n, a));
	return n;
}, _t = (e) => {
	let t = ot(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, it(n, a));
	};
	return n;
}, vt = (e) => {
	let t = ot(e), n = async (e, r, i, a) => await t(e, r, i, it(n, a));
	return n;
}, yt = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return st(e)(t, n, i);
}, bt = (e) => (t, n, r) => st(e)(t, n, r), xt = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return lt(e)(t, n, i);
}, St = (e) => async (t, n, r) => lt(e)(t, n, r), Ct = /^[cC][0-9a-z]{6,}$/, wt = /^[0-9a-z]+$/, Tt = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Et = /^[0-9a-vA-V]{20}$/, Dt = /^[A-Za-z0-9]{27}$/, Ot = /^[a-zA-Z0-9_-]{21}$/;
function kt(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var At = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, jt = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Mt = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Nt = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Pt = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Ft() {
	return new RegExp(Pt, "u");
}
var It = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Lt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Rt = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, zt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Bt = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Vt = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Ht = /^https?$/, Ut = /^\+[1-9]\d{6,14}$/, Wt = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function Gt(e) {
	return RegExp(`^${e}$`);
}
var Kt = /*@__PURE__*/ Gt(Wt);
function qt(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Jt(e) {
	return RegExp(`^${qt(e)}$`);
}
function Yt(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${qt({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${qt({ precision: e.precision })}` : n;
	return RegExp(`^${Wt}T(?:${r})$`);
}
var Xt = /^[\s\S]{0,}$/, Zt = /^[^A-Z]*$/, Qt = /^[^a-z]*$/, F = /*@__PURE__*/ j("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), $t = (e) => {
	let t = e.value;
	return !ee(t) && t.length !== void 0;
}, en = /*@__PURE__*/ j("$ZodCheckMaxLength", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = $t), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? Ae(r) : i) <= t.maximum) return;
		let a = je(r);
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
}), tn = /*@__PURE__*/ j("$ZodCheckMinLength", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = $t), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? Ae(r) : i) >= t.minimum) return;
		let a = je(r);
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
}), nn = /*@__PURE__*/ j("$ZodCheckLengthEquals", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = $t), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? Ae(r) : i;
		if (a === t.length) return;
		let o = je(r), s = a > t.length;
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
}), rn = /*@__PURE__*/ j("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	F.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
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
}), an = /*@__PURE__*/ j("$ZodCheckRegex", (e, t) => {
	rn.init(e, t), e._zod.check = (n) => {
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
}), on = /*@__PURE__*/ j("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= Zt, rn.init(e, t);
}), sn = /*@__PURE__*/ j("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= Qt, rn.init(e, t);
}), cn = /*@__PURE__*/ j("$ZodCheckIncludes", (e, t) => {
	F.init(e, t);
	let n = fe(t.includes);
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
}), ln = /*@__PURE__*/ j("$ZodCheckStartsWith", (e, t) => {
	F.init(e, t);
	let n = RegExp(`^${fe(t.prefix)}.*`);
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
}), un = /*@__PURE__*/ j("$ZodCheckEndsWith", (e, t) => {
	F.init(e, t);
	let n = RegExp(`.*${fe(t.suffix)}$`);
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
}), dn = /*@__PURE__*/ j("$ZodCheckOverwrite", (e, t) => {
	F.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), fn = class {
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
}, pn = {
	major: 4,
	minor: 6,
	patch: 5
}, I = /*@__PURE__*/ j("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = pn;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = w(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (Ee(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new M();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (Oe(t.issues, n, e), i ||= w(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					Oe(t.issues, n, e), i ||= w(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (w(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new M();
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
				if (a.async === !1) throw new M();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return Pe(this, "~standard", gn(this));
	},
	set "~standard"(e) {
		O(this, "~standard", e);
	}
}), mn = (e, t) => e.issues.length ? { issues: e.issues.map((e) => E(e, t, P())) } : { value: e.value };
async function hn(e, t) {
	let n = { async: !0 };
	return mn(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function gn(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return mn(r, n);
			} catch {}
			return hn(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
var _n = /*@__PURE__*/ j("$ZodString", (e, t) => {
	I.init(e, t), e._zod.pattern = t.pattern ?? Xt, e._zod.parse = (n, r) => {
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
}), L = /*@__PURE__*/ j("$ZodStringFormat", (e, t) => {
	rn.init(e, t), _n.init(e, t);
}), vn = /*@__PURE__*/ j("$ZodGUID", (e, t) => {
	t.pattern ??= jt, L.init(e, t);
}), yn = /*@__PURE__*/ j("$ZodUUID", (e, t) => {
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
		t.pattern ??= Mt(e);
	} else t.pattern ??= Mt();
	L.init(e, t);
}), bn = /*@__PURE__*/ j("$ZodEmail", (e, t) => {
	t.pattern ??= Nt, L.init(e, t);
});
function xn(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Sn(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? xn(e) || 2 : Cn(e, t);
}
function Cn(e, t) {
	if (!t.normalize && t.protocol?.source === Ht.source && !/^https?:\/\//i.test(e)) return 1;
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
var wn = /[\t\n\r]/g;
function Tn(e) {
	return e.replace(wn, "");
}
function En(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Dn(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var On = /*@__PURE__*/ j("$ZodURL", (e, t) => {
	L.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = Sn(r, t);
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
				n.value = Tn(r);
				return;
			}
			t.hostname && !En(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !Dn(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : Tn(r);
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
}), kn = /*@__PURE__*/ j("$ZodEmoji", (e, t) => {
	t.pattern ??= Ft(), L.init(e, t);
}), An = /*@__PURE__*/ j("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? Ot : kt(t.length), L.init(e, t);
}), jn = /*@__PURE__*/ j("$ZodCUID", (e, t) => {
	t.pattern ??= Ct, L.init(e, t);
}), Mn = /*@__PURE__*/ j("$ZodCUID2", (e, t) => {
	t.pattern ??= wt, L.init(e, t);
}), Nn = /*@__PURE__*/ j("$ZodULID", (e, t) => {
	t.pattern ??= Tt, L.init(e, t);
}), Pn = /*@__PURE__*/ j("$ZodXID", (e, t) => {
	t.pattern ??= Et, L.init(e, t);
}), Fn = /*@__PURE__*/ j("$ZodKSUID", (e, t) => {
	t.pattern ??= Dt, L.init(e, t);
}), In = /*@__PURE__*/ j("$ZodISODateTime", (e, t) => {
	t.pattern ??= Yt(t), L.init(e, t);
}), Ln = /*@__PURE__*/ j("$ZodISODate", (e, t) => {
	t.pattern ??= Kt, L.init(e, t);
}), Rn = /*@__PURE__*/ j("$ZodISOTime", (e, t) => {
	t.pattern ??= Jt(t), L.init(e, t);
}), zn = /*@__PURE__*/ j("$ZodISODuration", (e, t) => {
	t.pattern ??= At, L.init(e, t);
}), Bn = /*@__PURE__*/ j("$ZodIPv4", (e, t) => {
	t.pattern ??= It, L.init(e, t);
}), Vn = /^[0-9a-fA-F:.]+$/;
function Hn(e) {
	return Vn.test(e) ? xn(`http://[${e}]`) : !1;
}
var Un = /*@__PURE__*/ j("$ZodIPv6", (e, t) => {
	t.pattern ??= Lt, L.init(e, t), e._zod.check = (n) => {
		Hn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Wn = /*@__PURE__*/ j("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Rt, L.init(e, t);
});
function Gn(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Hn(n);
}
var Kn = /*@__PURE__*/ j("$ZodCIDRv6", (e, t) => {
	t.pattern ??= zt, L.init(e, t), e._zod.check = (n) => {
		Gn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function qn(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Jn = /^[0-9a-zA-Z+/]*={0,2}$/, Yn = /*@__PURE__*/ j("$ZodBase64", (e, t) => {
	t.pattern ??= Jn, L.init(e, t), e._zod.check = (n) => {
		qn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Xn = /^[A-Za-z0-9_-]*$/;
function Zn(e) {
	if (!Xn.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return qn(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Qn = /*@__PURE__*/ j("$ZodBase64URL", (e, t) => {
	t.pattern ??= Xn, L.init(e, t), e._zod.check = (n) => {
		Zn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), $n = /*@__PURE__*/ j("$ZodE164", (e, t) => {
	t.pattern ??= Ut, L.init(e, t);
});
function er(e, t = null) {
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
var tr = /*@__PURE__*/ j("$ZodJWT", (e, t) => {
	L.init(e, t), e._zod.check = (n) => {
		er(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), nr = /*@__PURE__*/ j("$ZodUnknown", (e, t) => {
	I.init(e, t), e._zod.parse = (e) => e;
}), rr = /*@__PURE__*/ j("$ZodNever", (e, t) => {
	I.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function ir(e, t, n) {
	e.issues.length && t.issues.push(...De(n, e.issues)), t.value[n] = e.value;
}
var ar = /*@__PURE__*/ j("$ZodArray", (e, t) => {
	I.init(e, t);
	let n = N.memoizer;
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
			if (c instanceof Promise) o.push(c.then((t) => ir(t, r, e)));
			else if (ir(c, r, e), s && c.issues.length !== 0 && w(c)) break;
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
});
function or(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...De(n, e.issues));
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
var sr = [];
function cr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : sr, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = me(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function lr(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (w(n, p)) break;
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
		a instanceof Promise ? e.push(a.then((e) => or(e, n, i, t, d, f))) : or(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var ur = /*@__PURE__*/ j("$ZodObject", (e, t) => {
	I.init(e, t);
	let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
	if (r) {
		let e = () => {
			let n = { ...r };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = r, Object.defineProperty(t, "shape", { get: e });
	}
	let i = h(() => cr(t));
	A(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || _(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let a = ce, o = t.catchall, s, c = N.memoizer;
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
				if (w(t, f)) break;
				f = t.issues.length;
			}
			if (e === "__proto__") continue;
			let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
				value: r[e],
				issues: []
			}, n);
			s instanceof Promise ? l.push(s.then((n) => or(n, t, e, r, a, o))) : or(s, t, e, r, a, o);
		}
		return o ? lr(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), dr = /*@__PURE__*/ j("$ZodObjectJIT", (e, t) => {
	ur.init(e, t);
	let n = e._zod.parse, r = h(() => cr(t)), i = N.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new fn(["payload", "ctx"], {
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
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : ae(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
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
	}, o, s = ce, c = !N.jitless, l = c && le.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? lr([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function fr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !w(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => E(e, r, P())))
	}), t);
}
var pr = /*@__PURE__*/ j("$ZodUnion", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), A(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), A(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), A(e, "pattern", (e) => {
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
		return a ? Promise.all(o).then((t) => fr(t, r, e, i)) : fr(o, r, e, i);
	};
}), mr = /*@__PURE__*/ j("$ZodIntersection", (e, t) => {
	I.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => gr(e, t, n)) : gr(e, i, a);
	};
});
function hr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (x(e) && x(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = hr(e[n], t[n]);
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
			let i = e[r], a = t[r], o = hr(i, a);
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
function gr(e, t, n) {
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
	let c = hr(t.value, n.value);
	if (!c.valid) {
		if (w(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var _r = /*@__PURE__*/ j("$ZodEnum", (e, t) => {
	I.init(e, t);
	let n = d(t.entries), r = new Set(n);
	e._zod.values = r, A(e, "pattern", (e) => {
		let t = d(e.def.entries).filter((e) => de.has(typeof e));
		return RegExp(t.length ? `^(${t.map((e) => fe(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), vr = /*@__PURE__*/ j("$ZodTransform", (e, t) => {
	I.init(e, t), e._zod.optin = "optional", N.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new qe(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new M();
		return n.value = i, n;
	};
});
function yr(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var br = /*@__PURE__*/ j("$ZodOptional", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", A(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), A(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${g(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => yr(e, t)) : yr(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), xr = /*@__PURE__*/ j("$ZodExactOptional", (e, t) => {
	br.init(e, t), A(e, "values", (e) => e.def.innerType._zod.values), A(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Sr = /*@__PURE__*/ j("$ZodNullable", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.innerType._zod.optin), A(e, "optout", (e) => e.def.innerType._zod.optout), A(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${g(t.source)}|null)$`) : void 0;
	}), A(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Cr = /*@__PURE__*/ j("$ZodDefault", (e, t) => {
	I.init(e, t), e._zod.optin = "defaulted", A(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => wr(e, t)) : wr(r, t);
	};
});
function wr(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Tr = /*@__PURE__*/ j("$ZodPrefault", (e, t) => {
	I.init(e, t), e._zod.optin = "defaulted", A(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Er = /*@__PURE__*/ j("$ZodNonOptional", (e, t) => {
	I.init(e, t), A(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Dr(t, e)) : Dr(i, e);
	};
});
function Dr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Or(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => E(e, r, P())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var kr = /*@__PURE__*/ j("$ZodCatch", (e, t) => {
	I.init(e, t), A(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), A(e, "optout", (e) => e.def.innerType._zod.optout), A(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => Or(e, r, t, n)) : Or(e, r, t, n);
	};
}), Ar = /*@__PURE__*/ j("$ZodPipe", (e, t) => {
	I.init(e, t), A(e, "values", (e) => e.def.in._zod.values), A(e, "optin", (e) => e.def.in._zod.optin), A(e, "optout", (e) => e.def.out._zod.optout), A(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => jr(e, t.in, n)) : jr(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => jr(e, t.out, n)) : jr(r, t.out, n);
	};
});
function jr(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Mr = /*@__PURE__*/ j("$ZodReadonly", (e, t) => {
	I.init(e, t), A(e, "propValues", (e) => e.def.innerType._zod.propValues), A(e, "values", (e) => e.def.innerType._zod.values), A(e, "optin", (e) => e.def.innerType?._zod?.optin), A(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Nr) : Nr(r);
	};
});
function Nr(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var Pr = /*@__PURE__*/ j("$ZodCustom", (e, t) => {
	F.init(e, t), I.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Fr(t, n, r, e));
		Fr(i, n, r, e);
	};
});
function Fr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(D(e));
	}
}
//#endregion
//#region ../../node_modules/zod/v4/core/memoizer.js
var Ir = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, Lr = "~memo", Rr = [];
function zr(e) {
	return typeof e == "object" && !!e;
}
function Br(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var Vr = /*@__PURE__*/ new WeakMap(), R = 0, Hr = 1, z = 2;
function Ur(e, t, n) {
	let r = Vr.get(e);
	if (r !== void 0) return r ? z : R;
	if (t.has(e)) return z;
	t.add(e);
	let i = R, a = (e) => {
		if (i !== z && e?._zod) {
			let r = Ur(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = R;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? Hr : o.value?._zod ? Ur(o.value, t, n) : R;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = te(c);
			s(e ? o(e, !0) : Hr), a(c.catchall);
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
			s(r ? Ur(r, t, !1) : Hr);
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
	return t.delete(e), Wr(e, i);
}
function Wr(e, t) {
	return t !== Hr && Vr.set(e, t === z), t;
}
function Gr(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
var Kr, qr = [], Jr = {
	alloc(e, t, n) {
		let r = Kr;
		if (!r) return n;
		Kr = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), qr.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && Xr(n, e.value)) throw new Ir();
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
					let i = Ur(e, /* @__PURE__ */ new Set(), !1);
					if (i === R) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
					i === z || r ? n = !0 : r = !0;
				}
				let l = s.value;
				if (!zr(l)) return t(s, c);
				let u = c[Lr];
				u || (u = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[Lr] = u);
				let d;
				i === c ? d = a : (d = Gr(u, e), i = c, a = d);
				let f = d.get(l);
				if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...Br(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
				Kr = d;
				let p = qr.length, m = t(s, c);
				Kr = void 0;
				let h = qr.length > p ? qr.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? Br(e.issues) : Rr), e)) : (h && (h.issues = m.issues.length ? Br(m.issues) : Rr), m);
			};
			e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
		});
	}
};
function Yr() {
	return Jr;
}
function Xr(e, t) {
	let n = e[Lr]?.backEdges;
	return n !== void 0 && zr(t) && n.has(t);
}
//#endregion
//#region ../../node_modules/zod/v4/locales/en.js
var Zr = () => {
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
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(Me(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${pe(e.values[0])}` : `Invalid option: expected one of ${f(e.values, "|")}`;
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
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${f(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function Qr() {
	return { localeError: Zr() };
}
//#endregion
//#region ../../node_modules/zod/v4/core/registries.js
var $r, ei = class {
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
function ti() {
	return new ei();
}
($r = globalThis).__zod_globalRegistry ?? ($r.__zod_globalRegistry = ti());
var B = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
function ni(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function ri(e, t) {
	return new e(ni({
		type: "string",
		...C(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function ii(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ai(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function oi(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function si(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ci(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function li(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ui(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function di(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function fi(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function pi(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mi(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function hi(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function gi(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _i(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vi(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function yi(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function bi(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xi(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wi(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ti(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Di(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ai(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function ji(e, t) {
	return new e({
		type: "never",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Mi(e, t) {
	return new en({
		check: "max_length",
		...C(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t) {
	return new tn({
		check: "min_length",
		...C(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Pi(e, t) {
	return new nn({
		check: "length_equals",
		...C(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Fi(e, t) {
	return new an({
		check: "string_format",
		format: "regex",
		...C(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ii(e) {
	return new on({
		check: "string_format",
		format: "lowercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Li(e) {
	return new sn({
		check: "string_format",
		format: "uppercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Ri(e, t) {
	return new cn({
		check: "string_format",
		format: "includes",
		...C(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function zi(e, t) {
	return new ln({
		check: "string_format",
		format: "starts_with",
		...C(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t) {
	return new un({
		check: "string_format",
		format: "ends_with",
		...C(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function V(e) {
	return new dn({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
	return /* @__PURE__ */ V((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Hi() {
	return /* @__PURE__ */ V((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Ui() {
	return /* @__PURE__ */ V((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Wi() {
	return /* @__PURE__ */ V((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Gi() {
	return /* @__PURE__ */ V((e) => oe(e));
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function qi(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Ji(e, t) {
	let n = /* @__PURE__ */ Yi((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(D(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(D(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Yi(e, t) {
	let n = new F({
		check: "custom",
		...C(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function H(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && _(e, t, n[t]);
	return e;
}
function Xi(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? B,
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
function U(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function W(e, t, n = {
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
		a && (o.ref ||= a, W(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && H(o.schema, c), t.io === "input" && G(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
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
			_(n, r, e.length === 1 ? e[0] : ra(e) ?? { allOf: e });
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
	r && (delete e.allOf, H(e, r));
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
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : H(i, s), H(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
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
	H(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, _(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: sa(t, "input", e.processors),
					output: sa(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function G(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return G(r.element, n);
	if (r.type === "set") return G(r.valueType, n);
	if (r.type === "lazy") return G(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return G(r.innerType, n);
	if (r.type === "intersection") return G(r.left, n) || G(r.right, n);
	if (r.type === "record" || r.type === "map") return G(r.keyType, n) || G(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : G(r.in, n) || G(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (G(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (G(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (G(e, n)) return !0;
		return !!(r.rest && G(r.rest, n));
	}
	return !1;
}
var oa = (e, t = {}) => (n) => {
	let r = Xi({
		...n,
		processors: t
	});
	return W(e, r), Qi(r, e), aa(r, e);
}, sa = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Xi({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return W(e, o), Qi(o, e), aa(o, e);
}, K = (e, t, n) => {
	(e[t] === void 0 || n > e[t]) && (e[t] = n);
}, q = (e, t, n) => {
	(e[t] === void 0 || n < e[t]) && (e[t] = n);
}, ca = (e, t) => {
	K(e, "minimum", t), q(e, "maximum", t);
}, la = (e, t) => {
	e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
}, ua = (e, t) => {
	e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
}, da = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, fa = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, pa = (e, t) => K(e, "minimum", t.minimum), ma = (e, t) => q(e, "maximum", t.maximum), ha = (e) => (t, n) => {
	fa(t, n.format);
	let [r, i] = e[n.format];
	K(t, "minimum", r), q(t, "maximum", i);
}, ga = {
	greater_than: (e, t) => K(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => q(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => la(e, t.value),
	number_format: ha(he),
	bigint_format: ha(ge),
	min_length: pa,
	max_length: ma,
	length_equals: (e, t) => ca(e, t.length),
	min_size: pa,
	max_size: ma,
	size_equals: (e, t) => ca(e, t.size),
	string_format: (e, t) => {
		fa(e, t.format), t.pattern && ua(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => da(e, t.mime)
};
function J(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) ga[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && K(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && K(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && q(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && q(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && la(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && da(t, i.mime);
	for (let e of i.patterns ?? []) ua(t, e);
	return t;
}
var _a = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, va = /* @__PURE__ */ new Map([[Jn, Bt], [Xn, Vt]]), ya = (e) => va.get(e) ?? e, ba = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = J(e);
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = _a[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c].map(ya);
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, xa = (e, t, n, r) => {
	n.not = {};
}, Sa = (e, t, n, r) => {
	let i = e._zod.def, a = d(i.entries);
	if (a.length === 0) {
		n.not = {};
		return;
	}
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Ca = (e, t, n, r) => {
	U(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, wa = (e, t, n, r) => {
	U(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, Ta = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = J(e);
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = W(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function Ea(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Ea(t.out) : t.type === "catch" ? Ea(t.innerType) : e._zod.optin;
}
var Da = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && U(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) _(i.properties, e, W(o[e], t, {
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
		(t.io === "input" ? Ea(n) === void 0 : n._zod.optout === void 0) && s.push(e);
	}
	s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = W(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Oa = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => W(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, ka = (e, t, n, r) => {
	let i = e._zod.def, a = W(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = W(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, Aa = (e, t, n, r) => {
	let i = e._zod.def, a = W(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, ja = (e, t, n, r) => {
	let i = e._zod.def;
	W(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Ma = Symbol();
function Na(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (U(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Ma) : JSON.parse(o);
}
var Pa = (e, t, n, r) => {
	let i = e._zod.def;
	W(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = Na(i.defaultValue, e, t, n, r);
	o !== Ma && (n.default = o);
}, Fa = (e, t, n, r) => {
	let i = e._zod.def;
	W(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = Na(i.defaultValue, e, t, n, r);
	o !== Ma && (n._prefault = o);
}, Ia = (e, t, n, r) => {
	let i = e._zod.def;
	W(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		U(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, La = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	W(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Ra = (e, t, n, r) => {
	let i = e._zod.def;
	W(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, za = (e, t, n, r) => {
	let i = e._zod.def;
	W(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Ba = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Va(e, t, n) {
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
var Y = /*@__PURE__*/ j("ZodError", (e, t) => {
	et.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	Ba.has(n) || (Ba.add(n), Va(n, "format", (e) => (t) => rt(e, t)), Va(n, "flatten", (e) => (t) => nt(e, t)), Va(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, p, 2);
	}), Va(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, p, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), Ha = /* @__PURE__ */ at(Y), Ua = /* @__PURE__ */ ot(Y), Wa = /* @__PURE__ */ st(Y), Ga = /* @__PURE__ */ lt(Y), Ka = /* @__PURE__ */ ht(Y), qa = /* @__PURE__ */ gt(Y), Ja = /* @__PURE__ */ _t(Y), Ya = /* @__PURE__ */ vt(Y), Xa = /* @__PURE__ */ yt(Y), Za = /* @__PURE__ */ bt(Y), Qa = /* @__PURE__ */ xt(Y), $a = /* @__PURE__ */ St(Y);
//#endregion
//#region ../../node_modules/zod/v4/classic/schemas.js
function eo() {
	N.localeError || P(Qr());
}
function to() {
	N.memoizer || P({ memoizer: Yr() });
}
var X = /*@__PURE__*/ j("ZodType", (e, t) => (eo(), I.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(b(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return S(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(us(e, t));
	},
	superRefine(e, t) {
		return this.check(ds(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ V(e));
	},
	optional() {
		return Ko(this);
	},
	exactOptional() {
		return Jo(this);
	},
	nullable() {
		return Xo(this);
	},
	nullish() {
		return Ko(Xo(this));
	},
	nonoptional(e) {
		return ns(this, e);
	},
	array() {
		return Po(this);
	},
	or(e) {
		return Ro([this, e]);
	},
	and(e) {
		return Bo(this, e);
	},
	transform(e) {
		return os(this, Wo(e));
	},
	default(e) {
		return Qo(this, e);
	},
	prefault(e) {
		return es(this, e);
	},
	catch(e) {
		return is(this, e);
	},
	pipe(e) {
		return os(this, e);
	},
	readonly() {
		return cs(this);
	},
	describe(e) {
		let t = this.clone();
		return B.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return B.get(this);
		let t = this.clone();
		return B.add(t, e[0]), t;
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
		return Pe(this, "~standard", {
			...gn(this),
			jsonSchema: {
				input: sa(this, "input"),
				output: sa(this, "output")
			}
		});
	},
	set "~standard"(e) {
		O(this, "~standard", e);
	},
	parse: function e(t, n) {
		return Ha(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await Ua(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return Wa(this, e, t);
	},
	async safeParseAsync(e, t) {
		return Ga(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		O(this, "spa", e);
	},
	validate(e, t) {
		return ft(this, e, t);
	},
	validateAsync(e, t) {
		return mt(this, e, t);
	},
	encode: function e(t, n) {
		return Ka(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return qa(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await Ja(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await Ya(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return Xa(this, e, t);
	},
	safeDecode(e, t) {
		return Za(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return Qa(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return $a(this, e, t);
	},
	toJSONSchema(e) {
		return oa(this, {})(e);
	},
	get description() {
		return B.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), no = /*@__PURE__*/ j("_ZodString", (e, t) => {
	_n.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => ba(e, t, n, r);
}, /*@__PURE__*/ Fe({
	format: (e) => J(e).format ?? null,
	minLength: (e) => J(e).minimum ?? null,
	maxLength: (e) => J(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ Fi(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ Ri(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ zi(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ Bi(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ Ni(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ Mi(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ Pi(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ Ni(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ Ii(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ Li(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ Hi());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ Vi(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ Ui());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ Wi());
	},
	slugify() {
		return this.check(/* @__PURE__ */ Gi());
	}
})), ro = /*@__PURE__*/ j("ZodString", (e, t) => {
	_n.init(e, t), no.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ ii(lo, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ ui(po, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ Ti(Oo, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ di(mo, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ ai(uo, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ oi(fo, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ si(fo, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ ci(fo, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ li(fo, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ fi(ho, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ pi(go, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ mi(_o, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ hi(vo, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ Si(To, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ Ci(Eo, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ gi(yo, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ _i(bo, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ vi(xo, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ yi(So, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ bi(Co, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ xi(wo, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ wi(Do, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ Ei(ao, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ Di(oo, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ Oi(so, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ ki(co, e));
	}
});
function io(e) {
	return /* @__PURE__ */ ri(ro, e);
}
var Z = /*@__PURE__*/ j("ZodStringFormat", (e, t) => {
	L.init(e, t), no.init(e, t);
}), ao = /*@__PURE__*/ j("ZodISODateTime", (e, t) => {
	In.init(e, t), Z.init(e, t);
}), oo = /*@__PURE__*/ j("ZodISODate", (e, t) => {
	Ln.init(e, t), Z.init(e, t);
}), so = /*@__PURE__*/ j("ZodISOTime", (e, t) => {
	Rn.init(e, t), Z.init(e, t);
}), co = /*@__PURE__*/ j("ZodISODuration", (e, t) => {
	zn.init(e, t), Z.init(e, t);
}), lo = /*@__PURE__*/ j("ZodEmail", (e, t) => {
	bn.init(e, t), Z.init(e, t);
}), uo = /*@__PURE__*/ j("ZodGUID", (e, t) => {
	vn.init(e, t), Z.init(e, t);
}), fo = /*@__PURE__*/ j("ZodUUID", (e, t) => {
	yn.init(e, t), Z.init(e, t);
}), po = /*@__PURE__*/ j("ZodURL", (e, t) => {
	On.init(e, t), Z.init(e, t);
}), mo = /*@__PURE__*/ j("ZodEmoji", (e, t) => {
	kn.init(e, t), Z.init(e, t);
}), ho = /*@__PURE__*/ j("ZodNanoID", (e, t) => {
	An.init(e, t), Z.init(e, t);
}), go = /*@__PURE__*/ j("ZodCUID", (e, t) => {
	jn.init(e, t), Z.init(e, t);
}), _o = /*@__PURE__*/ j("ZodCUID2", (e, t) => {
	Mn.init(e, t), Z.init(e, t);
}), vo = /*@__PURE__*/ j("ZodULID", (e, t) => {
	Nn.init(e, t), Z.init(e, t);
}), yo = /*@__PURE__*/ j("ZodXID", (e, t) => {
	Pn.init(e, t), Z.init(e, t);
}), bo = /*@__PURE__*/ j("ZodKSUID", (e, t) => {
	Fn.init(e, t), Z.init(e, t);
}), xo = /*@__PURE__*/ j("ZodIPv4", (e, t) => {
	Bn.init(e, t), Z.init(e, t);
}), So = /*@__PURE__*/ j("ZodIPv6", (e, t) => {
	Un.init(e, t), Z.init(e, t);
}), Co = /*@__PURE__*/ j("ZodCIDRv4", (e, t) => {
	Wn.init(e, t), Z.init(e, t);
}), wo = /*@__PURE__*/ j("ZodCIDRv6", (e, t) => {
	Kn.init(e, t), Z.init(e, t);
}), To = /*@__PURE__*/ j("ZodBase64", (e, t) => {
	Yn.init(e, t), Z.init(e, t);
}), Eo = /*@__PURE__*/ j("ZodBase64URL", (e, t) => {
	Qn.init(e, t), Z.init(e, t);
}), Do = /*@__PURE__*/ j("ZodE164", (e, t) => {
	$n.init(e, t), Z.init(e, t);
}), Oo = /*@__PURE__*/ j("ZodJWT", (e, t) => {
	tr.init(e, t), Z.init(e, t);
}), ko = /*@__PURE__*/ j("ZodUnknown", (e, t) => {
	nr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Ao() {
	return /* @__PURE__ */ Ai(ko);
}
var jo = /*@__PURE__*/ j("ZodNever", (e, t) => {
	rr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => xa(e, t, n, r);
});
function Mo(e) {
	return /* @__PURE__ */ ji(jo, e);
}
var No = /*@__PURE__*/ j("ZodArray", (e, t) => {
	to(), ar.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ta(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ Ni(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ Ni(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ Mi(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ Pi(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function Po(e, t) {
	return /* @__PURE__ */ Ki(No, e, t);
}
var Fo = /*@__PURE__*/ j("ZodObject", (e, t) => {
	to(), dr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Da(e, t, n, r), Be(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return Ho(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(b(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(b(this._zod.def, { catchall: Ao() }));
	},
	loose() {
		return this.clone(b(this._zod.def, { catchall: Ao() }));
	},
	strict() {
		return this.clone(b(this._zod.def, { catchall: Mo() }));
	},
	strip() {
		return this.clone(b(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return be(this, e);
	},
	safeExtend(e) {
		return Se(this, e);
	},
	merge(e) {
		return Ce(this, e);
	},
	pick(e) {
		return _e(this, e);
	},
	omit(e) {
		return ye(this, e);
	},
	partial(...e) {
		return we(Go, this, e[0]);
	},
	exactPartial(...e) {
		return we(qo, this, e[0], "exactPartial");
	},
	required(...e) {
		return Te(ts, this, e[0]);
	}
});
function Io(e, t) {
	return new Fo({
		type: "object",
		shape: e ?? {},
		...C(t)
	});
}
var Lo = /*@__PURE__*/ j("ZodUnion", (e, t) => {
	pr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Oa(e, t, n, r), e.options = t.options;
});
function Ro(e, t) {
	return new Lo({
		type: "union",
		options: e,
		...C(t)
	});
}
var zo = /*@__PURE__*/ j("ZodIntersection", (e, t) => {
	mr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => ka(e, t, n, r);
});
function Bo(e, t) {
	return new zo({
		type: "intersection",
		left: e,
		right: t
	});
}
var Vo = /*@__PURE__*/ j("ZodEnum", (e, t) => {
	_r.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Sa(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new Vo({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new Vo({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	};
});
function Ho(e, t) {
	return new Vo({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...C(t)
	});
}
var Uo = /*@__PURE__*/ j("ZodTransform", (e, t) => {
	to(), vr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => wa(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new qe(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(D(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(D(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function Wo(e) {
	return new Uo({
		type: "transform",
		transform: e
	});
}
var Go = /*@__PURE__*/ j("ZodOptional", (e, t) => {
	br.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => za(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ko(e) {
	return new Go({
		type: "optional",
		innerType: e
	});
}
var qo = /*@__PURE__*/ j("ZodExactOptional", (e, t) => {
	xr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => za(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Jo(e) {
	return new qo({
		type: "optional",
		innerType: e
	});
}
var Yo = /*@__PURE__*/ j("ZodNullable", (e, t) => {
	Sr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Aa(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Xo(e) {
	return new Yo({
		type: "nullable",
		innerType: e
	});
}
var Zo = /*@__PURE__*/ j("ZodDefault", (e, t) => {
	Cr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pa(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Qo(e, t) {
	return new Zo({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : ue(t);
		}
	});
}
var $o = /*@__PURE__*/ j("ZodPrefault", (e, t) => {
	Tr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fa(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function es(e, t) {
	return new $o({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : ue(t);
		}
	});
}
var ts = /*@__PURE__*/ j("ZodNonOptional", (e, t) => {
	Er.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => ja(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ns(e, t) {
	return new ts({
		type: "nonoptional",
		innerType: e,
		...C(t)
	});
}
var rs = /*@__PURE__*/ j("ZodCatch", (e, t) => {
	kr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ia(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function is(e, t) {
	return new rs({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : He(t)
	});
}
var as = /*@__PURE__*/ j("ZodPipe", (e, t) => {
	Ar.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => La(e, t, n, r), e.in = t.in, e.out = t.out;
});
function os(e, t) {
	return new as({
		type: "pipe",
		in: e,
		out: t
	});
}
var ss = /*@__PURE__*/ j("ZodReadonly", (e, t) => {
	Mr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ra(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function cs(e) {
	return new ss({
		type: "readonly",
		innerType: e
	});
}
var ls = /*@__PURE__*/ j("ZodCustom", (e, t) => {
	Pr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ca(e, t, n, r);
});
function us(e, t = {}) {
	return /* @__PURE__ */ qi(ls, e, t);
}
function ds(e, t) {
	return /* @__PURE__ */ Ji(e, t);
}
var fs = Io({
	data: Io({
		title: io().min(1),
		image: Io({
			src: io().min(1),
			alt: io().min(1)
		}).strict()
	}),
	settings: Io({ colour: io() })
}).strict();
function ps(e) {
	return fs.parse(e);
}
//#endregion
//#region src/Config.ts
var ms = "imagezoom";
function hs(e, t) {
	try {
		let n = ps(e);
		return t?.log("bootstrap", "Config resolved", n), Object.freeze(n);
	} catch (e) {
		throw t?.log("bootstrap", "Invalid widget contract", e instanceof Error ? e.message : e, "error"), e;
	}
}
//#endregion
//#region src/activity/Context/ActivityContext.tsx
var gs = e(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/activity.guard.ts
function _s() {
	if (typeof window > "u") return [];
	let e = new URLSearchParams(window.location.search).get("reactedge_debug");
	return e ? e === "1" || e === "all" ? ["all"] : e.split(",").map((e) => e.trim().toLowerCase()) : null;
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/index.ts
var vs = class {
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
		let e = _s();
		return e !== null && (e.includes("all") || e.includes(this.widgetId.toLowerCase()));
	}
	setCorrelationId(e) {
		this.correlationId = e;
	}
	getCorrelationId() {
		return this.correlationId;
	}
}, ys = gs.Provider, bs = ({ children: e, hostElement: t }) => {
	let n = new vs(ms, (t ?? document.documentElement).dataset.instance);
	return /* @__PURE__ */ s(ys, {
		value: n,
		children: e
	});
}, xs = ({ title: e, titleId: t, zoom: n, onClose: r, onPrevious: i, onNext: a, closeDataAttribute: o }) => /* @__PURE__ */ c("header", {
	className: "imagezoom__toolbar",
	children: [/* @__PURE__ */ s("h2", {
		id: t,
		"data-imagezoom-title": !0,
		children: e
	}), /* @__PURE__ */ c("div", {
		className: "imagezoom__controls",
		"aria-label": "Image controls",
		children: [
			i && /* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control",
				"aria-label": "Previous image",
				title: "Previous image",
				onClick: i,
				"data-gallery-prev": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "←"
				})
			}),
			a && /* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control",
				"aria-label": "Next image",
				title: "Next image",
				onClick: a,
				"data-gallery-next": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "→"
				})
			}),
			/* @__PURE__ */ s("span", {
				className: "imagezoom__divider",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control",
				"aria-label": "Move image left",
				title: "Move left",
				onClick: () => n.panBy(-48, 0),
				disabled: n.scale === 1,
				"data-imagezoom-pan-left": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "⇤"
				})
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control",
				"aria-label": "Move image up",
				title: "Move up",
				onClick: () => n.panBy(0, -48),
				disabled: n.scale === 1,
				"data-imagezoom-pan-up": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "↑"
				})
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control",
				"aria-label": "Move image down",
				title: "Move down",
				onClick: () => n.panBy(0, 48),
				disabled: n.scale === 1,
				"data-imagezoom-pan-down": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "↓"
				})
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control",
				"aria-label": "Move image right",
				title: "Move right",
				onClick: () => n.panBy(48, 0),
				disabled: n.scale === 1,
				"data-imagezoom-pan-right": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "⇥"
				})
			}),
			/* @__PURE__ */ s("span", {
				className: "imagezoom__divider",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control imagezoom__zoom-button",
				"aria-label": "Zoom out",
				title: "Zoom out",
				onClick: n.zoomOut,
				disabled: n.scale === 1,
				"data-imagezoom-zoom-out": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "−"
				})
			}),
			/* @__PURE__ */ c("output", {
				className: "imagezoom__scale",
				"aria-live": "polite",
				"data-imagezoom-scale": !0,
				children: [Math.round(n.scale * 100), "%"]
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__control imagezoom__zoom-button",
				"aria-label": "Zoom in",
				title: "Zoom in",
				onClick: n.zoomIn,
				disabled: n.scale === 4,
				"data-imagezoom-zoom-in": !0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "+"
				})
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__reset",
				onClick: n.reset,
				disabled: n.scale === 1 && n.offset.x === 0 && n.offset.y === 0,
				"data-imagezoom-reset": !0,
				children: "Reset"
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				className: "imagezoom__close",
				"aria-label": "Close image zoom",
				onClick: r,
				"data-imagezoom-close": !0,
				"data-gallery-minify": o ? "" : void 0,
				children: /* @__PURE__ */ s("span", {
					"aria-hidden": "true",
					children: "×"
				})
			})
		]
	})]
}), Q = 1, Ss = 4, Cs = .5;
function $(e, t) {
	return Math.max(-t, Math.min(t, e));
}
function ws(e, t) {
	let n = e.querySelector("img");
	return n ? {
		x: Math.max(0, (n.offsetWidth * t - e.clientWidth) / 2),
		y: Math.max(0, (n.offsetHeight * t - e.clientHeight) / 2)
	} : {
		x: 0,
		y: 0
	};
}
function Ts(e) {
	let [t, n] = o(Q), [r, i] = o({
		x: 0,
		y: 0
	}), s = a(null), c = (t) => {
		let r = Math.max(Q, Math.min(Ss, t));
		if (n(r), r === Q) i({
			x: 0,
			y: 0
		});
		else if (e.current) {
			let t = ws(e.current, r);
			i((e) => ({
				x: $(e.x, t.x),
				y: $(e.y, t.y)
			}));
		}
	};
	return {
		scale: t,
		offset: r,
		zoomIn: () => c(t + Cs),
		zoomOut: () => c(t - Cs),
		reset: () => {
			n(Q), i({
				x: 0,
				y: 0
			}), s.current = null;
		},
		panBy: (n, r) => {
			let a = e.current;
			if (!a || t === Q) return;
			let o = ws(a, t);
			i((e) => ({
				x: $(e.x + n, o.x),
				y: $(e.y + r, o.y)
			}));
		},
		startPan: (e) => {
			t !== Q && e.button === 0 && (e.currentTarget.setPointerCapture(e.pointerId), s.current = {
				pointerId: e.pointerId,
				startX: e.clientX,
				startY: e.clientY,
				offsetX: r.x,
				offsetY: r.y
			});
		},
		movePan: (e) => {
			let n = s.current;
			if (!n || n.pointerId !== e.pointerId) return;
			let r = ws(e.currentTarget, t);
			i({
				x: $(n.offsetX + e.clientX - n.startX, r.x),
				y: $(n.offsetY + e.clientY - n.startY, r.y)
			});
		},
		stopPan: (e) => {
			s.current?.pointerId === e.pointerId && (s.current = null);
		}
	};
}
//#endregion
//#region ../../packages/image-zoom/src/ImageZoomDialog.tsx
var Es = ({ image: e, title: t, open: l, onClose: u, onPrevious: d, onNext: f }) => {
	let p = a(null), m = a(null), [h, ee] = o(!1), [g, _] = o(!1), te = i(), v = Ts(m), ne = r(v.reset);
	return n(() => {
		let e = p.current;
		e && (l && !e.open ? e.showModal() : !l && e.open && e.close());
	}, [l]), n(() => {
		ee(!1), _(!1), ne();
	}, [e.src]), l ? /* @__PURE__ */ s("dialog", {
		className: "imagezoom__dialog",
		ref: p,
		"aria-labelledby": te,
		onClose: () => {
			v.reset(), u();
		},
		onClick: (e) => {
			e.target === e.currentTarget && p.current?.close();
		},
		"data-imagezoom-dialog": !0,
		"data-gallery-zoom": !0,
		children: /* @__PURE__ */ c("div", {
			className: "imagezoom__modal",
			children: [/* @__PURE__ */ s(xs, {
				title: t,
				titleId: te,
				zoom: v,
				onClose: () => p.current?.close(),
				onPrevious: d,
				onNext: f,
				closeDataAttribute: "data-gallery-minify"
			}), /* @__PURE__ */ c("div", {
				className: `imagezoom__stage${v.scale > 1 ? " is-zoomed" : ""}`,
				ref: m,
				onPointerDown: v.startPan,
				onPointerMove: v.movePan,
				onPointerUp: v.stopPan,
				onPointerCancel: v.stopPan,
				onLostPointerCapture: v.stopPan,
				"data-imagezoom-stage": !0,
				children: [!h && !g && /* @__PURE__ */ s("p", {
					className: "imagezoom__status",
					role: "status",
					children: "Loading image…"
				}), g ? /* @__PURE__ */ s("p", {
					className: "imagezoom__status",
					role: "alert",
					children: "This image could not be loaded."
				}) : /* @__PURE__ */ s("img", {
					className: `imagezoom__image${h ? " is-loaded" : ""}`,
					src: e.src,
					alt: e.alt ?? "",
					draggable: "false",
					onLoad: () => ee(!0),
					onError: () => _(!0),
					style: { transform: `translate(${v.offset.x}px, ${v.offset.y}px) scale(${v.scale})` },
					"data-imagezoom-image": !0,
					"data-gallery-main": !0
				}, e.src)]
			})]
		})
	}) : null;
}, Ds = ({ config: e }) => {
	let [t, n] = o(!1);
	return /* @__PURE__ */ c("section", {
		className: "imagezoom",
		"aria-label": e.data.title,
		children: [/* @__PURE__ */ c("button", {
			className: "imagezoom__preview",
			type: "button",
			"aria-label": `Open image zoom: ${e.data.image.alt}`,
			"aria-haspopup": "dialog",
			onClick: () => n(!0),
			"data-imagezoom-open": !0,
			children: [/* @__PURE__ */ s("img", {
				src: e.data.image.src,
				alt: e.data.image.alt,
				loading: "lazy"
			}), /* @__PURE__ */ c("span", {
				className: "imagezoom__preview-action",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ s("span", {
					className: "imagezoom__magnifier",
					children: "+"
				}), "Zoom image"]
			})]
		}), /* @__PURE__ */ s(Es, {
			image: e.data.image,
			title: e.data.title,
			open: t,
			onClose: () => n(!1)
		})]
	});
};
//#endregion
//#region src/activity/Context/useActivityContext.ts
function Os() {
	let e = t(gs);
	if (!e) throw Error("useInstanceState must be used within InstanceStateProvider");
	return e;
}
//#endregion
//#region src/bootstrap/WidgetWrapper.tsx
var ks = ({ contract: e }) => {
	let t = hs(e, Os());
	return t ? /* @__PURE__ */ s(Ds, { config: t }) : null;
};
//#endregion
//#region src/bootstrap/widget-root.tsx
function As({ contract: e, bootstrap: t, hostElement: n }) {
	return /* @__PURE__ */ s("div", {
		className: `reactedge-${ms}`,
		children: /* @__PURE__ */ s(bs, {
			...n ? { hostElement: n } : {},
			children: /* @__PURE__ */ s(ks, {
				contract: e,
				bootstrap: t
			})
		})
	});
}
//#endregion
//#region src/Widget.tsx
function js({ container: e, contract: t, bootstrap: n, hydrate: r = !1 }) {
	let i = /* @__PURE__ */ s(As, {
		contract: t,
		bootstrap: n
	});
	r ? u(e, i) : l(e).render(i);
}
//#endregion
//#region src/WidgetView.tsx
var Ms = ({ contract: e }) => {
	let t = hs(e);
	return t ? /* @__PURE__ */ s(Ds, { config: t }) : null;
};
//#endregion
//#region src/bootstrap/widget-ssr-component.tsx
function Ns({ contract: e }) {
	return /* @__PURE__ */ s("div", {
		className: `reactedge-${ms}`,
		children: /* @__PURE__ */ s(Ms, { contract: e })
	});
}
//#endregion
export { js as Widget, Ns as WidgetComponent };
