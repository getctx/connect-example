// Compiled by ClojureScript 1.10.217 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4501__auto__ = [];
var len__4498__auto___24074 = arguments.length;
var i__4499__auto___24075 = (0);
while(true){
if((i__4499__auto___24075 < len__4498__auto___24074)){
args__4501__auto__.push((arguments[i__4499__auto___24075]));

var G__24076 = (i__4499__auto___24075 + (1));
i__4499__auto___24075 = G__24076;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((2) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4502__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq24071){
var G__24072 = cljs.core.first.call(null,seq24071);
var seq24071__$1 = cljs.core.next.call(null,seq24071);
var G__24073 = cljs.core.first.call(null,seq24071__$1);
var seq24071__$2 = cljs.core.next.call(null,seq24071__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24072,G__24073,seq24071__$2);
});


//# sourceMappingURL=util.js.map?rel=1521885146787
