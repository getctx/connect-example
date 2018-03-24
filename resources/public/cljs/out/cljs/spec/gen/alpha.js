// Compiled by ClojureScript 1.10.217 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined'))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29810 = arguments.length;
var i__4499__auto___29811 = (0);
while(true){
if((i__4499__auto___29811 < len__4498__auto___29810)){
args__4501__auto__.push((arguments[i__4499__auto___29811]));

var G__29812 = (i__4499__auto___29811 + (1));
i__4499__auto___29811 = G__29812;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq29809){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29809));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined'))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29814 = arguments.length;
var i__4499__auto___29815 = (0);
while(true){
if((i__4499__auto___29815 < len__4498__auto___29814)){
args__4501__auto__.push((arguments[i__4499__auto___29815]));

var G__29816 = (i__4499__auto___29815 + (1));
i__4499__auto___29815 = G__29816;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq29813){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29813));
});

var g_QMARK__29817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined'))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_29818 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29817){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined'))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__29817))
,null));
var mkg_29819 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29817,g_29818){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined'))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__29817,g_29818))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__29817,g_29818,mkg_29819){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29817).call(null,x);
});})(g_QMARK__29817,g_29818,mkg_29819))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__29817,g_29818,mkg_29819){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_29819).call(null,gfn);
});})(g_QMARK__29817,g_29818,mkg_29819))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__29817,g_29818,mkg_29819){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_29818).call(null,generator);
});})(g_QMARK__29817,g_29818,mkg_29819))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21360__auto___29839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined'))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__21360__auto___29839){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29840 = arguments.length;
var i__4499__auto___29841 = (0);
while(true){
if((i__4499__auto___29841 < len__4498__auto___29840)){
args__4501__auto__.push((arguments[i__4499__auto___29841]));

var G__29842 = (i__4499__auto___29841 + (1));
i__4499__auto___29841 = G__29842;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29839))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29839),args);
});})(g__21360__auto___29839))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21360__auto___29839){
return (function (seq29820){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29820));
});})(g__21360__auto___29839))
;


var g__21360__auto___29843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined'))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__21360__auto___29843){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29844 = arguments.length;
var i__4499__auto___29845 = (0);
while(true){
if((i__4499__auto___29845 < len__4498__auto___29844)){
args__4501__auto__.push((arguments[i__4499__auto___29845]));

var G__29846 = (i__4499__auto___29845 + (1));
i__4499__auto___29845 = G__29846;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29843))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29843),args);
});})(g__21360__auto___29843))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21360__auto___29843){
return (function (seq29821){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29821));
});})(g__21360__auto___29843))
;


var g__21360__auto___29847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined'))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__21360__auto___29847){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29848 = arguments.length;
var i__4499__auto___29849 = (0);
while(true){
if((i__4499__auto___29849 < len__4498__auto___29848)){
args__4501__auto__.push((arguments[i__4499__auto___29849]));

var G__29850 = (i__4499__auto___29849 + (1));
i__4499__auto___29849 = G__29850;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29847))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29847),args);
});})(g__21360__auto___29847))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21360__auto___29847){
return (function (seq29822){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29822));
});})(g__21360__auto___29847))
;


var g__21360__auto___29851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined'))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__21360__auto___29851){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29852 = arguments.length;
var i__4499__auto___29853 = (0);
while(true){
if((i__4499__auto___29853 < len__4498__auto___29852)){
args__4501__auto__.push((arguments[i__4499__auto___29853]));

var G__29854 = (i__4499__auto___29853 + (1));
i__4499__auto___29853 = G__29854;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29851))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29851),args);
});})(g__21360__auto___29851))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21360__auto___29851){
return (function (seq29823){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29823));
});})(g__21360__auto___29851))
;


var g__21360__auto___29855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined'))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__21360__auto___29855){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29856 = arguments.length;
var i__4499__auto___29857 = (0);
while(true){
if((i__4499__auto___29857 < len__4498__auto___29856)){
args__4501__auto__.push((arguments[i__4499__auto___29857]));

var G__29858 = (i__4499__auto___29857 + (1));
i__4499__auto___29857 = G__29858;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29855))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29855),args);
});})(g__21360__auto___29855))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21360__auto___29855){
return (function (seq29824){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29824));
});})(g__21360__auto___29855))
;


var g__21360__auto___29859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined'))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__21360__auto___29859){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29860 = arguments.length;
var i__4499__auto___29861 = (0);
while(true){
if((i__4499__auto___29861 < len__4498__auto___29860)){
args__4501__auto__.push((arguments[i__4499__auto___29861]));

var G__29862 = (i__4499__auto___29861 + (1));
i__4499__auto___29861 = G__29862;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29859))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29859),args);
});})(g__21360__auto___29859))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21360__auto___29859){
return (function (seq29825){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29825));
});})(g__21360__auto___29859))
;


var g__21360__auto___29863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined'))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__21360__auto___29863){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29864 = arguments.length;
var i__4499__auto___29865 = (0);
while(true){
if((i__4499__auto___29865 < len__4498__auto___29864)){
args__4501__auto__.push((arguments[i__4499__auto___29865]));

var G__29866 = (i__4499__auto___29865 + (1));
i__4499__auto___29865 = G__29866;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29863))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29863),args);
});})(g__21360__auto___29863))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21360__auto___29863){
return (function (seq29826){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29826));
});})(g__21360__auto___29863))
;


var g__21360__auto___29867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined'))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__21360__auto___29867){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29868 = arguments.length;
var i__4499__auto___29869 = (0);
while(true){
if((i__4499__auto___29869 < len__4498__auto___29868)){
args__4501__auto__.push((arguments[i__4499__auto___29869]));

var G__29870 = (i__4499__auto___29869 + (1));
i__4499__auto___29869 = G__29870;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29867))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29867),args);
});})(g__21360__auto___29867))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21360__auto___29867){
return (function (seq29827){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29827));
});})(g__21360__auto___29867))
;


var g__21360__auto___29871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined'))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__21360__auto___29871){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29872 = arguments.length;
var i__4499__auto___29873 = (0);
while(true){
if((i__4499__auto___29873 < len__4498__auto___29872)){
args__4501__auto__.push((arguments[i__4499__auto___29873]));

var G__29874 = (i__4499__auto___29873 + (1));
i__4499__auto___29873 = G__29874;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29871))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29871),args);
});})(g__21360__auto___29871))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21360__auto___29871){
return (function (seq29828){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29828));
});})(g__21360__auto___29871))
;


var g__21360__auto___29875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined'))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__21360__auto___29875){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29876 = arguments.length;
var i__4499__auto___29877 = (0);
while(true){
if((i__4499__auto___29877 < len__4498__auto___29876)){
args__4501__auto__.push((arguments[i__4499__auto___29877]));

var G__29878 = (i__4499__auto___29877 + (1));
i__4499__auto___29877 = G__29878;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29875))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29875),args);
});})(g__21360__auto___29875))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21360__auto___29875){
return (function (seq29829){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29829));
});})(g__21360__auto___29875))
;


var g__21360__auto___29879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined'))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__21360__auto___29879){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29880 = arguments.length;
var i__4499__auto___29881 = (0);
while(true){
if((i__4499__auto___29881 < len__4498__auto___29880)){
args__4501__auto__.push((arguments[i__4499__auto___29881]));

var G__29882 = (i__4499__auto___29881 + (1));
i__4499__auto___29881 = G__29882;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29879))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29879),args);
});})(g__21360__auto___29879))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21360__auto___29879){
return (function (seq29830){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29830));
});})(g__21360__auto___29879))
;


var g__21360__auto___29883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined'))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__21360__auto___29883){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29884 = arguments.length;
var i__4499__auto___29885 = (0);
while(true){
if((i__4499__auto___29885 < len__4498__auto___29884)){
args__4501__auto__.push((arguments[i__4499__auto___29885]));

var G__29886 = (i__4499__auto___29885 + (1));
i__4499__auto___29885 = G__29886;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29883))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29883),args);
});})(g__21360__auto___29883))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21360__auto___29883){
return (function (seq29831){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29831));
});})(g__21360__auto___29883))
;


var g__21360__auto___29887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined'))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__21360__auto___29887){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29888 = arguments.length;
var i__4499__auto___29889 = (0);
while(true){
if((i__4499__auto___29889 < len__4498__auto___29888)){
args__4501__auto__.push((arguments[i__4499__auto___29889]));

var G__29890 = (i__4499__auto___29889 + (1));
i__4499__auto___29889 = G__29890;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29887))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29887),args);
});})(g__21360__auto___29887))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21360__auto___29887){
return (function (seq29832){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29832));
});})(g__21360__auto___29887))
;


var g__21360__auto___29891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined'))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__21360__auto___29891){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29892 = arguments.length;
var i__4499__auto___29893 = (0);
while(true){
if((i__4499__auto___29893 < len__4498__auto___29892)){
args__4501__auto__.push((arguments[i__4499__auto___29893]));

var G__29894 = (i__4499__auto___29893 + (1));
i__4499__auto___29893 = G__29894;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29891))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29891),args);
});})(g__21360__auto___29891))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21360__auto___29891){
return (function (seq29833){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29833));
});})(g__21360__auto___29891))
;


var g__21360__auto___29895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined'))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__21360__auto___29895){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29896 = arguments.length;
var i__4499__auto___29897 = (0);
while(true){
if((i__4499__auto___29897 < len__4498__auto___29896)){
args__4501__auto__.push((arguments[i__4499__auto___29897]));

var G__29898 = (i__4499__auto___29897 + (1));
i__4499__auto___29897 = G__29898;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29895))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29895),args);
});})(g__21360__auto___29895))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21360__auto___29895){
return (function (seq29834){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29834));
});})(g__21360__auto___29895))
;


var g__21360__auto___29899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined'))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__21360__auto___29899){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29900 = arguments.length;
var i__4499__auto___29901 = (0);
while(true){
if((i__4499__auto___29901 < len__4498__auto___29900)){
args__4501__auto__.push((arguments[i__4499__auto___29901]));

var G__29902 = (i__4499__auto___29901 + (1));
i__4499__auto___29901 = G__29902;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29899))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29899),args);
});})(g__21360__auto___29899))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21360__auto___29899){
return (function (seq29835){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29835));
});})(g__21360__auto___29899))
;


var g__21360__auto___29903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined'))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21360__auto___29903){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29904 = arguments.length;
var i__4499__auto___29905 = (0);
while(true){
if((i__4499__auto___29905 < len__4498__auto___29904)){
args__4501__auto__.push((arguments[i__4499__auto___29905]));

var G__29906 = (i__4499__auto___29905 + (1));
i__4499__auto___29905 = G__29906;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29903))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29903),args);
});})(g__21360__auto___29903))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21360__auto___29903){
return (function (seq29836){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29836));
});})(g__21360__auto___29903))
;


var g__21360__auto___29907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined'))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21360__auto___29907){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29908 = arguments.length;
var i__4499__auto___29909 = (0);
while(true){
if((i__4499__auto___29909 < len__4498__auto___29908)){
args__4501__auto__.push((arguments[i__4499__auto___29909]));

var G__29910 = (i__4499__auto___29909 + (1));
i__4499__auto___29909 = G__29910;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29907))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29907),args);
});})(g__21360__auto___29907))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21360__auto___29907){
return (function (seq29837){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29837));
});})(g__21360__auto___29907))
;


var g__21360__auto___29911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined'))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__21360__auto___29911){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29912 = arguments.length;
var i__4499__auto___29913 = (0);
while(true){
if((i__4499__auto___29913 < len__4498__auto___29912)){
args__4501__auto__.push((arguments[i__4499__auto___29913]));

var G__29914 = (i__4499__auto___29913 + (1));
i__4499__auto___29913 = G__29914;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21360__auto___29911))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21360__auto___29911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21360__auto___29911),args);
});})(g__21360__auto___29911))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21360__auto___29911){
return (function (seq29838){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29838));
});})(g__21360__auto___29911))
;

var g__21373__auto___29936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined'))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__21373__auto___29936){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29937 = arguments.length;
var i__4499__auto___29938 = (0);
while(true){
if((i__4499__auto___29938 < len__4498__auto___29937)){
args__4501__auto__.push((arguments[i__4499__auto___29938]));

var G__29939 = (i__4499__auto___29938 + (1));
i__4499__auto___29938 = G__29939;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29936))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29936){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29936);
});})(g__21373__auto___29936))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21373__auto___29936){
return (function (seq29915){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29915));
});})(g__21373__auto___29936))
;


var g__21373__auto___29940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined'))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__21373__auto___29940){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29941 = arguments.length;
var i__4499__auto___29942 = (0);
while(true){
if((i__4499__auto___29942 < len__4498__auto___29941)){
args__4501__auto__.push((arguments[i__4499__auto___29942]));

var G__29943 = (i__4499__auto___29942 + (1));
i__4499__auto___29942 = G__29943;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29940))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29940){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29940);
});})(g__21373__auto___29940))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21373__auto___29940){
return (function (seq29916){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29916));
});})(g__21373__auto___29940))
;


var g__21373__auto___29944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined'))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__21373__auto___29944){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29945 = arguments.length;
var i__4499__auto___29946 = (0);
while(true){
if((i__4499__auto___29946 < len__4498__auto___29945)){
args__4501__auto__.push((arguments[i__4499__auto___29946]));

var G__29947 = (i__4499__auto___29946 + (1));
i__4499__auto___29946 = G__29947;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29944))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29944){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29944);
});})(g__21373__auto___29944))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21373__auto___29944){
return (function (seq29917){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29917));
});})(g__21373__auto___29944))
;


var g__21373__auto___29948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined'))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__21373__auto___29948){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29949 = arguments.length;
var i__4499__auto___29950 = (0);
while(true){
if((i__4499__auto___29950 < len__4498__auto___29949)){
args__4501__auto__.push((arguments[i__4499__auto___29950]));

var G__29951 = (i__4499__auto___29950 + (1));
i__4499__auto___29950 = G__29951;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29948))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29948){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29948);
});})(g__21373__auto___29948))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21373__auto___29948){
return (function (seq29918){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29918));
});})(g__21373__auto___29948))
;


var g__21373__auto___29952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined'))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__21373__auto___29952){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29953 = arguments.length;
var i__4499__auto___29954 = (0);
while(true){
if((i__4499__auto___29954 < len__4498__auto___29953)){
args__4501__auto__.push((arguments[i__4499__auto___29954]));

var G__29955 = (i__4499__auto___29954 + (1));
i__4499__auto___29954 = G__29955;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29952))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29952){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29952);
});})(g__21373__auto___29952))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21373__auto___29952){
return (function (seq29919){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29919));
});})(g__21373__auto___29952))
;


var g__21373__auto___29956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21373__auto___29956){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29957 = arguments.length;
var i__4499__auto___29958 = (0);
while(true){
if((i__4499__auto___29958 < len__4498__auto___29957)){
args__4501__auto__.push((arguments[i__4499__auto___29958]));

var G__29959 = (i__4499__auto___29958 + (1));
i__4499__auto___29958 = G__29959;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29956))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29956){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29956);
});})(g__21373__auto___29956))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21373__auto___29956){
return (function (seq29920){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29920));
});})(g__21373__auto___29956))
;


var g__21373__auto___29960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined'))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__21373__auto___29960){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29961 = arguments.length;
var i__4499__auto___29962 = (0);
while(true){
if((i__4499__auto___29962 < len__4498__auto___29961)){
args__4501__auto__.push((arguments[i__4499__auto___29962]));

var G__29963 = (i__4499__auto___29962 + (1));
i__4499__auto___29962 = G__29963;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29960))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29960){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29960);
});})(g__21373__auto___29960))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21373__auto___29960){
return (function (seq29921){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29921));
});})(g__21373__auto___29960))
;


var g__21373__auto___29964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined'))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__21373__auto___29964){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29965 = arguments.length;
var i__4499__auto___29966 = (0);
while(true){
if((i__4499__auto___29966 < len__4498__auto___29965)){
args__4501__auto__.push((arguments[i__4499__auto___29966]));

var G__29967 = (i__4499__auto___29966 + (1));
i__4499__auto___29966 = G__29967;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29964))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29964){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29964);
});})(g__21373__auto___29964))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21373__auto___29964){
return (function (seq29922){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29922));
});})(g__21373__auto___29964))
;


var g__21373__auto___29968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined'))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__21373__auto___29968){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29969 = arguments.length;
var i__4499__auto___29970 = (0);
while(true){
if((i__4499__auto___29970 < len__4498__auto___29969)){
args__4501__auto__.push((arguments[i__4499__auto___29970]));

var G__29971 = (i__4499__auto___29970 + (1));
i__4499__auto___29970 = G__29971;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29968))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29968){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29968);
});})(g__21373__auto___29968))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21373__auto___29968){
return (function (seq29923){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29923));
});})(g__21373__auto___29968))
;


var g__21373__auto___29972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined'))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__21373__auto___29972){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29973 = arguments.length;
var i__4499__auto___29974 = (0);
while(true){
if((i__4499__auto___29974 < len__4498__auto___29973)){
args__4501__auto__.push((arguments[i__4499__auto___29974]));

var G__29975 = (i__4499__auto___29974 + (1));
i__4499__auto___29974 = G__29975;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29972))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29972){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29972);
});})(g__21373__auto___29972))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21373__auto___29972){
return (function (seq29924){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29924));
});})(g__21373__auto___29972))
;


var g__21373__auto___29976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined'))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__21373__auto___29976){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29977 = arguments.length;
var i__4499__auto___29978 = (0);
while(true){
if((i__4499__auto___29978 < len__4498__auto___29977)){
args__4501__auto__.push((arguments[i__4499__auto___29978]));

var G__29979 = (i__4499__auto___29978 + (1));
i__4499__auto___29978 = G__29979;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29976))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29976){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29976);
});})(g__21373__auto___29976))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21373__auto___29976){
return (function (seq29925){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29925));
});})(g__21373__auto___29976))
;


var g__21373__auto___29980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined'))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__21373__auto___29980){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29981 = arguments.length;
var i__4499__auto___29982 = (0);
while(true){
if((i__4499__auto___29982 < len__4498__auto___29981)){
args__4501__auto__.push((arguments[i__4499__auto___29982]));

var G__29983 = (i__4499__auto___29982 + (1));
i__4499__auto___29982 = G__29983;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29980))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29980){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29980);
});})(g__21373__auto___29980))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21373__auto___29980){
return (function (seq29926){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29926));
});})(g__21373__auto___29980))
;


var g__21373__auto___29984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined'))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__21373__auto___29984){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29985 = arguments.length;
var i__4499__auto___29986 = (0);
while(true){
if((i__4499__auto___29986 < len__4498__auto___29985)){
args__4501__auto__.push((arguments[i__4499__auto___29986]));

var G__29987 = (i__4499__auto___29986 + (1));
i__4499__auto___29986 = G__29987;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29984))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29984){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29984);
});})(g__21373__auto___29984))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21373__auto___29984){
return (function (seq29927){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29927));
});})(g__21373__auto___29984))
;


var g__21373__auto___29988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined'))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__21373__auto___29988){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29989 = arguments.length;
var i__4499__auto___29990 = (0);
while(true){
if((i__4499__auto___29990 < len__4498__auto___29989)){
args__4501__auto__.push((arguments[i__4499__auto___29990]));

var G__29991 = (i__4499__auto___29990 + (1));
i__4499__auto___29990 = G__29991;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29988))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29988){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29988);
});})(g__21373__auto___29988))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21373__auto___29988){
return (function (seq29928){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29928));
});})(g__21373__auto___29988))
;


var g__21373__auto___29992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined'))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21373__auto___29992){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29993 = arguments.length;
var i__4499__auto___29994 = (0);
while(true){
if((i__4499__auto___29994 < len__4498__auto___29993)){
args__4501__auto__.push((arguments[i__4499__auto___29994]));

var G__29995 = (i__4499__auto___29994 + (1));
i__4499__auto___29994 = G__29995;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29992))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29992){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29992);
});})(g__21373__auto___29992))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21373__auto___29992){
return (function (seq29929){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29929));
});})(g__21373__auto___29992))
;


var g__21373__auto___29996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined'))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__21373__auto___29996){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4501__auto__ = [];
var len__4498__auto___29997 = arguments.length;
var i__4499__auto___29998 = (0);
while(true){
if((i__4499__auto___29998 < len__4498__auto___29997)){
args__4501__auto__.push((arguments[i__4499__auto___29998]));

var G__29999 = (i__4499__auto___29998 + (1));
i__4499__auto___29998 = G__29999;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___29996))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___29996){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___29996);
});})(g__21373__auto___29996))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21373__auto___29996){
return (function (seq29930){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29930));
});})(g__21373__auto___29996))
;


var g__21373__auto___30000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined'))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__21373__auto___30000){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30001 = arguments.length;
var i__4499__auto___30002 = (0);
while(true){
if((i__4499__auto___30002 < len__4498__auto___30001)){
args__4501__auto__.push((arguments[i__4499__auto___30002]));

var G__30003 = (i__4499__auto___30002 + (1));
i__4499__auto___30002 = G__30003;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___30000))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___30000){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___30000);
});})(g__21373__auto___30000))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21373__auto___30000){
return (function (seq29931){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29931));
});})(g__21373__auto___30000))
;


var g__21373__auto___30004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21373__auto___30004){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30005 = arguments.length;
var i__4499__auto___30006 = (0);
while(true){
if((i__4499__auto___30006 < len__4498__auto___30005)){
args__4501__auto__.push((arguments[i__4499__auto___30006]));

var G__30007 = (i__4499__auto___30006 + (1));
i__4499__auto___30006 = G__30007;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___30004))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___30004){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___30004);
});})(g__21373__auto___30004))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21373__auto___30004){
return (function (seq29932){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29932));
});})(g__21373__auto___30004))
;


var g__21373__auto___30008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined'))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__21373__auto___30008){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30009 = arguments.length;
var i__4499__auto___30010 = (0);
while(true){
if((i__4499__auto___30010 < len__4498__auto___30009)){
args__4501__auto__.push((arguments[i__4499__auto___30010]));

var G__30011 = (i__4499__auto___30010 + (1));
i__4499__auto___30010 = G__30011;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___30008))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___30008){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___30008);
});})(g__21373__auto___30008))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21373__auto___30008){
return (function (seq29933){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29933));
});})(g__21373__auto___30008))
;


var g__21373__auto___30012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined'))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__21373__auto___30012){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30013 = arguments.length;
var i__4499__auto___30014 = (0);
while(true){
if((i__4499__auto___30014 < len__4498__auto___30013)){
args__4501__auto__.push((arguments[i__4499__auto___30014]));

var G__30015 = (i__4499__auto___30014 + (1));
i__4499__auto___30014 = G__30015;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___30012))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___30012){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___30012);
});})(g__21373__auto___30012))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21373__auto___30012){
return (function (seq29934){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29934));
});})(g__21373__auto___30012))
;


var g__21373__auto___30016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined'))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__21373__auto___30016){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30017 = arguments.length;
var i__4499__auto___30018 = (0);
while(true){
if((i__4499__auto___30018 < len__4498__auto___30017)){
args__4501__auto__.push((arguments[i__4499__auto___30018]));

var G__30019 = (i__4499__auto___30018 + (1));
i__4499__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});})(g__21373__auto___30016))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21373__auto___30016){
return (function (args){
return cljs.core.deref.call(null,g__21373__auto___30016);
});})(g__21373__auto___30016))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21373__auto___30016){
return (function (seq29935){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29935));
});})(g__21373__auto___30016))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30022 = arguments.length;
var i__4499__auto___30023 = (0);
while(true){
if((i__4499__auto___30023 < len__4498__auto___30022)){
args__4501__auto__.push((arguments[i__4499__auto___30023]));

var G__30024 = (i__4499__auto___30023 + (1));
i__4499__auto___30023 = G__30024;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__30020_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30020_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq30021){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30021));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__30025_SHARP_){
return (new Date(p1__30025_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1521885156018
