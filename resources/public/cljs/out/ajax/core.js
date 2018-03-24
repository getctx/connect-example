// Compiled by ClojureScript 1.10.217 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4501__auto__ = [];
var len__4498__auto___31991 = arguments.length;
var i__4499__auto___31992 = (0);
while(true){
if((i__4499__auto___31992 < len__4498__auto___31991)){
args__4501__auto__.push((arguments[i__4499__auto___31992]));

var G__31993 = (i__4499__auto___31992 + (1));
i__4499__auto___31992 = G__31993;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.GET.cljs$lang$applyTo = (function (seq31989){
var G__31990 = cljs.core.first.call(null,seq31989);
var seq31989__$1 = cljs.core.next.call(null,seq31989);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31990,seq31989__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4501__auto__ = [];
var len__4498__auto___31996 = arguments.length;
var i__4499__auto___31997 = (0);
while(true){
if((i__4499__auto___31997 < len__4498__auto___31996)){
args__4501__auto__.push((arguments[i__4499__auto___31997]));

var G__31998 = (i__4499__auto___31997 + (1));
i__4499__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.HEAD.cljs$lang$applyTo = (function (seq31994){
var G__31995 = cljs.core.first.call(null,seq31994);
var seq31994__$1 = cljs.core.next.call(null,seq31994);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31995,seq31994__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4501__auto__ = [];
var len__4498__auto___32001 = arguments.length;
var i__4499__auto___32002 = (0);
while(true){
if((i__4499__auto___32002 < len__4498__auto___32001)){
args__4501__auto__.push((arguments[i__4499__auto___32002]));

var G__32003 = (i__4499__auto___32002 + (1));
i__4499__auto___32002 = G__32003;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.POST.cljs$lang$applyTo = (function (seq31999){
var G__32000 = cljs.core.first.call(null,seq31999);
var seq31999__$1 = cljs.core.next.call(null,seq31999);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32000,seq31999__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4501__auto__ = [];
var len__4498__auto___32006 = arguments.length;
var i__4499__auto___32007 = (0);
while(true){
if((i__4499__auto___32007 < len__4498__auto___32006)){
args__4501__auto__.push((arguments[i__4499__auto___32007]));

var G__32008 = (i__4499__auto___32007 + (1));
i__4499__auto___32007 = G__32008;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PUT.cljs$lang$applyTo = (function (seq32004){
var G__32005 = cljs.core.first.call(null,seq32004);
var seq32004__$1 = cljs.core.next.call(null,seq32004);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32005,seq32004__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4501__auto__ = [];
var len__4498__auto___32011 = arguments.length;
var i__4499__auto___32012 = (0);
while(true){
if((i__4499__auto___32012 < len__4498__auto___32011)){
args__4501__auto__.push((arguments[i__4499__auto___32012]));

var G__32013 = (i__4499__auto___32012 + (1));
i__4499__auto___32012 = G__32013;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.DELETE.cljs$lang$applyTo = (function (seq32009){
var G__32010 = cljs.core.first.call(null,seq32009);
var seq32009__$1 = cljs.core.next.call(null,seq32009);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32010,seq32009__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4501__auto__ = [];
var len__4498__auto___32016 = arguments.length;
var i__4499__auto___32017 = (0);
while(true){
if((i__4499__auto___32017 < len__4498__auto___32016)){
args__4501__auto__.push((arguments[i__4499__auto___32017]));

var G__32018 = (i__4499__auto___32017 + (1));
i__4499__auto___32017 = G__32018;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq32014){
var G__32015 = cljs.core.first.call(null,seq32014);
var seq32014__$1 = cljs.core.next.call(null,seq32014);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32015,seq32014__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4501__auto__ = [];
var len__4498__auto___32021 = arguments.length;
var i__4499__auto___32022 = (0);
while(true){
if((i__4499__auto___32022 < len__4498__auto___32021)){
args__4501__auto__.push((arguments[i__4499__auto___32022]));

var G__32023 = (i__4499__auto___32022 + (1));
i__4499__auto___32022 = G__32023;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.TRACE.cljs$lang$applyTo = (function (seq32019){
var G__32020 = cljs.core.first.call(null,seq32019);
var seq32019__$1 = cljs.core.next.call(null,seq32019);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32020,seq32019__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4501__auto__ = [];
var len__4498__auto___32026 = arguments.length;
var i__4499__auto___32027 = (0);
while(true){
if((i__4499__auto___32027 < len__4498__auto___32026)){
args__4501__auto__.push((arguments[i__4499__auto___32027]));

var G__32028 = (i__4499__auto___32027 + (1));
i__4499__auto___32027 = G__32028;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PATCH.cljs$lang$applyTo = (function (seq32024){
var G__32025 = cljs.core.first.call(null,seq32024);
var seq32024__$1 = cljs.core.next.call(null,seq32024);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32025,seq32024__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4501__auto__ = [];
var len__4498__auto___32031 = arguments.length;
var i__4499__auto___32032 = (0);
while(true){
if((i__4499__auto___32032 < len__4498__auto___32031)){
args__4501__auto__.push((arguments[i__4499__auto___32032]));

var G__32033 = (i__4499__auto___32032 + (1));
i__4499__auto___32032 = G__32033;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31588__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__31588__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31588__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PURGE.cljs$lang$applyTo = (function (seq32029){
var G__32030 = cljs.core.first.call(null,seq32029);
var seq32029__$1 = cljs.core.next.call(null,seq32029);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32030,seq32029__$1);
});


//# sourceMappingURL=core.js.map?rel=1521885210262
