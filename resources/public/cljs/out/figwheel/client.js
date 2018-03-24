// Compiled by ClojureScript 1.10.217 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30892){if((e30892 instanceof Error)){
var e = e30892;
return "Error: Unable to stringify";
} else {
throw e30892;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30895 = arguments.length;
switch (G__30895) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30893_SHARP_){
if(typeof p1__30893_SHARP_ === 'string'){
return p1__30893_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30893_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30898 = arguments.length;
var i__4499__auto___30899 = (0);
while(true){
if((i__4499__auto___30899 < len__4498__auto___30898)){
args__4501__auto__.push((arguments[i__4499__auto___30899]));

var G__30900 = (i__4499__auto___30899 + (1));
i__4499__auto___30899 = G__30900;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30897){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30897));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4501__auto__ = [];
var len__4498__auto___30902 = arguments.length;
var i__4499__auto___30903 = (0);
while(true){
if((i__4499__auto___30903 < len__4498__auto___30902)){
args__4501__auto__.push((arguments[i__4499__auto___30903]));

var G__30904 = (i__4499__auto___30903 + (1));
i__4499__auto___30903 = G__30904;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30901){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30901));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30905){
var map__30906 = p__30905;
var map__30906__$1 = ((((!((map__30906 == null)))?(((((map__30906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30906):map__30906);
var message = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3921__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3910__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3910__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3910__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25979__auto___30985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___30985,ch){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___30985,ch){
return (function (state_30957){
var state_val_30958 = (state_30957[(1)]);
if((state_val_30958 === (7))){
var inst_30953 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30959_30986 = state_30957__$1;
(statearr_30959_30986[(2)] = inst_30953);

(statearr_30959_30986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (1))){
var state_30957__$1 = state_30957;
var statearr_30960_30987 = state_30957__$1;
(statearr_30960_30987[(2)] = null);

(statearr_30960_30987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (4))){
var inst_30910 = (state_30957[(7)]);
var inst_30910__$1 = (state_30957[(2)]);
var state_30957__$1 = (function (){var statearr_30961 = state_30957;
(statearr_30961[(7)] = inst_30910__$1);

return statearr_30961;
})();
if(cljs.core.truth_(inst_30910__$1)){
var statearr_30962_30988 = state_30957__$1;
(statearr_30962_30988[(1)] = (5));

} else {
var statearr_30963_30989 = state_30957__$1;
(statearr_30963_30989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (15))){
var inst_30917 = (state_30957[(8)]);
var inst_30932 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30917);
var inst_30933 = cljs.core.first.call(null,inst_30932);
var inst_30934 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30933);
var inst_30935 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30934)].join('');
var inst_30936 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30935);
var state_30957__$1 = state_30957;
var statearr_30964_30990 = state_30957__$1;
(statearr_30964_30990[(2)] = inst_30936);

(statearr_30964_30990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (13))){
var inst_30941 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30965_30991 = state_30957__$1;
(statearr_30965_30991[(2)] = inst_30941);

(statearr_30965_30991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (6))){
var state_30957__$1 = state_30957;
var statearr_30966_30992 = state_30957__$1;
(statearr_30966_30992[(2)] = null);

(statearr_30966_30992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (17))){
var inst_30939 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30967_30993 = state_30957__$1;
(statearr_30967_30993[(2)] = inst_30939);

(statearr_30967_30993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (3))){
var inst_30955 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30957__$1,inst_30955);
} else {
if((state_val_30958 === (12))){
var inst_30916 = (state_30957[(9)]);
var inst_30930 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30916,opts);
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30930)){
var statearr_30968_30994 = state_30957__$1;
(statearr_30968_30994[(1)] = (15));

} else {
var statearr_30969_30995 = state_30957__$1;
(statearr_30969_30995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (2))){
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30957__$1,(4),ch);
} else {
if((state_val_30958 === (11))){
var inst_30917 = (state_30957[(8)]);
var inst_30922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30923 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30917);
var inst_30924 = cljs.core.async.timeout.call(null,(1000));
var inst_30925 = [inst_30923,inst_30924];
var inst_30926 = (new cljs.core.PersistentVector(null,2,(5),inst_30922,inst_30925,null));
var state_30957__$1 = state_30957;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30957__$1,(14),inst_30926);
} else {
if((state_val_30958 === (9))){
var inst_30917 = (state_30957[(8)]);
var inst_30943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30944 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30917);
var inst_30945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30944);
var inst_30946 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30945)].join('');
var inst_30947 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30946);
var state_30957__$1 = (function (){var statearr_30970 = state_30957;
(statearr_30970[(10)] = inst_30943);

return statearr_30970;
})();
var statearr_30971_30996 = state_30957__$1;
(statearr_30971_30996[(2)] = inst_30947);

(statearr_30971_30996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (5))){
var inst_30910 = (state_30957[(7)]);
var inst_30912 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30913 = (new cljs.core.PersistentArrayMap(null,2,inst_30912,null));
var inst_30914 = (new cljs.core.PersistentHashSet(null,inst_30913,null));
var inst_30915 = figwheel.client.focus_msgs.call(null,inst_30914,inst_30910);
var inst_30916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30915);
var inst_30917 = cljs.core.first.call(null,inst_30915);
var inst_30918 = figwheel.client.autoload_QMARK_.call(null);
var state_30957__$1 = (function (){var statearr_30972 = state_30957;
(statearr_30972[(8)] = inst_30917);

(statearr_30972[(9)] = inst_30916);

return statearr_30972;
})();
if(cljs.core.truth_(inst_30918)){
var statearr_30973_30997 = state_30957__$1;
(statearr_30973_30997[(1)] = (8));

} else {
var statearr_30974_30998 = state_30957__$1;
(statearr_30974_30998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (14))){
var inst_30928 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30975_30999 = state_30957__$1;
(statearr_30975_30999[(2)] = inst_30928);

(statearr_30975_30999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (16))){
var state_30957__$1 = state_30957;
var statearr_30976_31000 = state_30957__$1;
(statearr_30976_31000[(2)] = null);

(statearr_30976_31000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (10))){
var inst_30949 = (state_30957[(2)]);
var state_30957__$1 = (function (){var statearr_30977 = state_30957;
(statearr_30977[(11)] = inst_30949);

return statearr_30977;
})();
var statearr_30978_31001 = state_30957__$1;
(statearr_30978_31001[(2)] = null);

(statearr_30978_31001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (8))){
var inst_30916 = (state_30957[(9)]);
var inst_30920 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30916,opts);
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30920)){
var statearr_30979_31002 = state_30957__$1;
(statearr_30979_31002[(1)] = (11));

} else {
var statearr_30980_31003 = state_30957__$1;
(statearr_30980_31003[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25979__auto___30985,ch))
;
return ((function (switch__25889__auto__,c__25979__auto___30985,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25890__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25890__auto____0 = (function (){
var statearr_30981 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30981[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25890__auto__);

(statearr_30981[(1)] = (1));

return statearr_30981;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25890__auto____1 = (function (state_30957){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_30957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e30982){if((e30982 instanceof Object)){
var ex__25893__auto__ = e30982;
var statearr_30983_31004 = state_30957;
(statearr_30983_31004[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31005 = state_30957;
state_30957 = G__31005;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25890__auto__ = function(state_30957){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25890__auto____1.call(this,state_30957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25890__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25890__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___30985,ch))
})();
var state__25981__auto__ = (function (){var statearr_30984 = f__25980__auto__.call(null);
(statearr_30984[(6)] = c__25979__auto___30985);

return statearr_30984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___30985,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31006_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31006_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31008 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31008){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31007){if((e31007 instanceof Error)){
var e = e31007;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31008], null));
} else {
var e = e31007;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31008))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31009){
var map__31010 = p__31009;
var map__31010__$1 = ((((!((map__31010 == null)))?(((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31010):map__31010);
var opts = map__31010__$1;
var build_id = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31010,map__31010__$1,opts,build_id){
return (function (p__31012){
var vec__31013 = p__31012;
var seq__31014 = cljs.core.seq.call(null,vec__31013);
var first__31015 = cljs.core.first.call(null,seq__31014);
var seq__31014__$1 = cljs.core.next.call(null,seq__31014);
var map__31016 = first__31015;
var map__31016__$1 = ((((!((map__31016 == null)))?(((((map__31016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31016):map__31016);
var msg = map__31016__$1;
var msg_name = cljs.core.get.call(null,map__31016__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31014__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31013,seq__31014,first__31015,seq__31014__$1,map__31016,map__31016__$1,msg,msg_name,_,map__31010,map__31010__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31013,seq__31014,first__31015,seq__31014__$1,map__31016,map__31016__$1,msg,msg_name,_,map__31010,map__31010__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31010,map__31010__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31018){
var vec__31019 = p__31018;
var seq__31020 = cljs.core.seq.call(null,vec__31019);
var first__31021 = cljs.core.first.call(null,seq__31020);
var seq__31020__$1 = cljs.core.next.call(null,seq__31020);
var map__31022 = first__31021;
var map__31022__$1 = ((((!((map__31022 == null)))?(((((map__31022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31022):map__31022);
var msg = map__31022__$1;
var msg_name = cljs.core.get.call(null,map__31022__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31020__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31024){
var map__31025 = p__31024;
var map__31025__$1 = ((((!((map__31025 == null)))?(((((map__31025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31025):map__31025);
var on_compile_warning = cljs.core.get.call(null,map__31025__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31025__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31025,map__31025__$1,on_compile_warning,on_compile_fail){
return (function (p__31027){
var vec__31028 = p__31027;
var seq__31029 = cljs.core.seq.call(null,vec__31028);
var first__31030 = cljs.core.first.call(null,seq__31029);
var seq__31029__$1 = cljs.core.next.call(null,seq__31029);
var map__31031 = first__31030;
var map__31031__$1 = ((((!((map__31031 == null)))?(((((map__31031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31031):map__31031);
var msg = map__31031__$1;
var msg_name = cljs.core.get.call(null,map__31031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31029__$1;
var pred__31033 = cljs.core._EQ_;
var expr__31034 = msg_name;
if(cljs.core.truth_(pred__31033.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31034))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31033.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31034))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31025,map__31025__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__,msg_hist,msg_names,msg){
return (function (state_31123){
var state_val_31124 = (state_31123[(1)]);
if((state_val_31124 === (7))){
var inst_31043 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31043)){
var statearr_31125_31172 = state_31123__$1;
(statearr_31125_31172[(1)] = (8));

} else {
var statearr_31126_31173 = state_31123__$1;
(statearr_31126_31173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (20))){
var inst_31117 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31127_31174 = state_31123__$1;
(statearr_31127_31174[(2)] = inst_31117);

(statearr_31127_31174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (27))){
var inst_31113 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31128_31175 = state_31123__$1;
(statearr_31128_31175[(2)] = inst_31113);

(statearr_31128_31175[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (1))){
var inst_31036 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31036)){
var statearr_31129_31176 = state_31123__$1;
(statearr_31129_31176[(1)] = (2));

} else {
var statearr_31130_31177 = state_31123__$1;
(statearr_31130_31177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (24))){
var inst_31115 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31131_31178 = state_31123__$1;
(statearr_31131_31178[(2)] = inst_31115);

(statearr_31131_31178[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (4))){
var inst_31121 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31123__$1,inst_31121);
} else {
if((state_val_31124 === (15))){
var inst_31119 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31132_31179 = state_31123__$1;
(statearr_31132_31179[(2)] = inst_31119);

(statearr_31132_31179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (21))){
var inst_31072 = (state_31123[(2)]);
var inst_31073 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31074 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31073);
var state_31123__$1 = (function (){var statearr_31133 = state_31123;
(statearr_31133[(7)] = inst_31072);

return statearr_31133;
})();
var statearr_31134_31180 = state_31123__$1;
(statearr_31134_31180[(2)] = inst_31074);

(statearr_31134_31180[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (31))){
var inst_31102 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31102)){
var statearr_31135_31181 = state_31123__$1;
(statearr_31135_31181[(1)] = (34));

} else {
var statearr_31136_31182 = state_31123__$1;
(statearr_31136_31182[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (32))){
var inst_31111 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31137_31183 = state_31123__$1;
(statearr_31137_31183[(2)] = inst_31111);

(statearr_31137_31183[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (33))){
var inst_31098 = (state_31123[(2)]);
var inst_31099 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31100 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31099);
var state_31123__$1 = (function (){var statearr_31138 = state_31123;
(statearr_31138[(8)] = inst_31098);

return statearr_31138;
})();
var statearr_31139_31184 = state_31123__$1;
(statearr_31139_31184[(2)] = inst_31100);

(statearr_31139_31184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (13))){
var inst_31057 = figwheel.client.heads_up.clear.call(null);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(16),inst_31057);
} else {
if((state_val_31124 === (22))){
var inst_31078 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31079 = figwheel.client.heads_up.append_warning_message.call(null,inst_31078);
var state_31123__$1 = state_31123;
var statearr_31140_31185 = state_31123__$1;
(statearr_31140_31185[(2)] = inst_31079);

(statearr_31140_31185[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (36))){
var inst_31109 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31141_31186 = state_31123__$1;
(statearr_31141_31186[(2)] = inst_31109);

(statearr_31141_31186[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (29))){
var inst_31089 = (state_31123[(2)]);
var inst_31090 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31091 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31090);
var state_31123__$1 = (function (){var statearr_31142 = state_31123;
(statearr_31142[(9)] = inst_31089);

return statearr_31142;
})();
var statearr_31143_31187 = state_31123__$1;
(statearr_31143_31187[(2)] = inst_31091);

(statearr_31143_31187[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (6))){
var inst_31038 = (state_31123[(10)]);
var state_31123__$1 = state_31123;
var statearr_31144_31188 = state_31123__$1;
(statearr_31144_31188[(2)] = inst_31038);

(statearr_31144_31188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (28))){
var inst_31085 = (state_31123[(2)]);
var inst_31086 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31087 = figwheel.client.heads_up.display_warning.call(null,inst_31086);
var state_31123__$1 = (function (){var statearr_31145 = state_31123;
(statearr_31145[(11)] = inst_31085);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(29),inst_31087);
} else {
if((state_val_31124 === (25))){
var inst_31083 = figwheel.client.heads_up.clear.call(null);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(28),inst_31083);
} else {
if((state_val_31124 === (34))){
var inst_31104 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(37),inst_31104);
} else {
if((state_val_31124 === (17))){
var inst_31063 = (state_31123[(2)]);
var inst_31064 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31065 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31064);
var state_31123__$1 = (function (){var statearr_31146 = state_31123;
(statearr_31146[(12)] = inst_31063);

return statearr_31146;
})();
var statearr_31147_31189 = state_31123__$1;
(statearr_31147_31189[(2)] = inst_31065);

(statearr_31147_31189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (3))){
var inst_31055 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31055)){
var statearr_31148_31190 = state_31123__$1;
(statearr_31148_31190[(1)] = (13));

} else {
var statearr_31149_31191 = state_31123__$1;
(statearr_31149_31191[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (12))){
var inst_31051 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31150_31192 = state_31123__$1;
(statearr_31150_31192[(2)] = inst_31051);

(statearr_31150_31192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (2))){
var inst_31038 = (state_31123[(10)]);
var inst_31038__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31123__$1 = (function (){var statearr_31151 = state_31123;
(statearr_31151[(10)] = inst_31038__$1);

return statearr_31151;
})();
if(cljs.core.truth_(inst_31038__$1)){
var statearr_31152_31193 = state_31123__$1;
(statearr_31152_31193[(1)] = (5));

} else {
var statearr_31153_31194 = state_31123__$1;
(statearr_31153_31194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (23))){
var inst_31081 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31081)){
var statearr_31154_31195 = state_31123__$1;
(statearr_31154_31195[(1)] = (25));

} else {
var statearr_31155_31196 = state_31123__$1;
(statearr_31155_31196[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (35))){
var state_31123__$1 = state_31123;
var statearr_31156_31197 = state_31123__$1;
(statearr_31156_31197[(2)] = null);

(statearr_31156_31197[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (19))){
var inst_31076 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31076)){
var statearr_31157_31198 = state_31123__$1;
(statearr_31157_31198[(1)] = (22));

} else {
var statearr_31158_31199 = state_31123__$1;
(statearr_31158_31199[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (11))){
var inst_31047 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31159_31200 = state_31123__$1;
(statearr_31159_31200[(2)] = inst_31047);

(statearr_31159_31200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (9))){
var inst_31049 = figwheel.client.heads_up.clear.call(null);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(12),inst_31049);
} else {
if((state_val_31124 === (5))){
var inst_31040 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31123__$1 = state_31123;
var statearr_31160_31201 = state_31123__$1;
(statearr_31160_31201[(2)] = inst_31040);

(statearr_31160_31201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (14))){
var inst_31067 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31067)){
var statearr_31161_31202 = state_31123__$1;
(statearr_31161_31202[(1)] = (18));

} else {
var statearr_31162_31203 = state_31123__$1;
(statearr_31162_31203[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (26))){
var inst_31093 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31123__$1 = state_31123;
if(cljs.core.truth_(inst_31093)){
var statearr_31163_31204 = state_31123__$1;
(statearr_31163_31204[(1)] = (30));

} else {
var statearr_31164_31205 = state_31123__$1;
(statearr_31164_31205[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (16))){
var inst_31059 = (state_31123[(2)]);
var inst_31060 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31061 = figwheel.client.heads_up.display_exception.call(null,inst_31060);
var state_31123__$1 = (function (){var statearr_31165 = state_31123;
(statearr_31165[(13)] = inst_31059);

return statearr_31165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(17),inst_31061);
} else {
if((state_val_31124 === (30))){
var inst_31095 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31096 = figwheel.client.heads_up.display_warning.call(null,inst_31095);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(33),inst_31096);
} else {
if((state_val_31124 === (10))){
var inst_31053 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31166_31206 = state_31123__$1;
(statearr_31166_31206[(2)] = inst_31053);

(statearr_31166_31206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (18))){
var inst_31069 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31070 = figwheel.client.heads_up.display_exception.call(null,inst_31069);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(21),inst_31070);
} else {
if((state_val_31124 === (37))){
var inst_31106 = (state_31123[(2)]);
var state_31123__$1 = state_31123;
var statearr_31167_31207 = state_31123__$1;
(statearr_31167_31207[(2)] = inst_31106);

(statearr_31167_31207[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31124 === (8))){
var inst_31045 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31123__$1 = state_31123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31123__$1,(11),inst_31045);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25979__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25889__auto__,c__25979__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto____0 = (function (){
var statearr_31168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31168[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto__);

(statearr_31168[(1)] = (1));

return statearr_31168;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto____1 = (function (state_31123){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_31123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e31169){if((e31169 instanceof Object)){
var ex__25893__auto__ = e31169;
var statearr_31170_31208 = state_31123;
(statearr_31170_31208[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31209 = state_31123;
state_31123 = G__31209;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto__ = function(state_31123){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto____1.call(this,state_31123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__,msg_hist,msg_names,msg))
})();
var state__25981__auto__ = (function (){var statearr_31171 = f__25980__auto__.call(null);
(statearr_31171[(6)] = c__25979__auto__);

return statearr_31171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__,msg_hist,msg_names,msg))
);

return c__25979__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25979__auto___31238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___31238,ch){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___31238,ch){
return (function (state_31224){
var state_val_31225 = (state_31224[(1)]);
if((state_val_31225 === (1))){
var state_31224__$1 = state_31224;
var statearr_31226_31239 = state_31224__$1;
(statearr_31226_31239[(2)] = null);

(statearr_31226_31239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (2))){
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31224__$1,(4),ch);
} else {
if((state_val_31225 === (3))){
var inst_31222 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31224__$1,inst_31222);
} else {
if((state_val_31225 === (4))){
var inst_31212 = (state_31224[(7)]);
var inst_31212__$1 = (state_31224[(2)]);
var state_31224__$1 = (function (){var statearr_31227 = state_31224;
(statearr_31227[(7)] = inst_31212__$1);

return statearr_31227;
})();
if(cljs.core.truth_(inst_31212__$1)){
var statearr_31228_31240 = state_31224__$1;
(statearr_31228_31240[(1)] = (5));

} else {
var statearr_31229_31241 = state_31224__$1;
(statearr_31229_31241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (5))){
var inst_31212 = (state_31224[(7)]);
var inst_31214 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31212);
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31224__$1,(8),inst_31214);
} else {
if((state_val_31225 === (6))){
var state_31224__$1 = state_31224;
var statearr_31230_31242 = state_31224__$1;
(statearr_31230_31242[(2)] = null);

(statearr_31230_31242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (7))){
var inst_31220 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
var statearr_31231_31243 = state_31224__$1;
(statearr_31231_31243[(2)] = inst_31220);

(statearr_31231_31243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (8))){
var inst_31216 = (state_31224[(2)]);
var state_31224__$1 = (function (){var statearr_31232 = state_31224;
(statearr_31232[(8)] = inst_31216);

return statearr_31232;
})();
var statearr_31233_31244 = state_31224__$1;
(statearr_31233_31244[(2)] = null);

(statearr_31233_31244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__25979__auto___31238,ch))
;
return ((function (switch__25889__auto__,c__25979__auto___31238,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25890__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25890__auto____0 = (function (){
var statearr_31234 = [null,null,null,null,null,null,null,null,null];
(statearr_31234[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25890__auto__);

(statearr_31234[(1)] = (1));

return statearr_31234;
});
var figwheel$client$heads_up_plugin_$_state_machine__25890__auto____1 = (function (state_31224){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_31224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e31235){if((e31235 instanceof Object)){
var ex__25893__auto__ = e31235;
var statearr_31236_31245 = state_31224;
(statearr_31236_31245[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31246 = state_31224;
state_31224 = G__31246;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25890__auto__ = function(state_31224){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25890__auto____1.call(this,state_31224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25890__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25890__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___31238,ch))
})();
var state__25981__auto__ = (function (){var statearr_31237 = f__25980__auto__.call(null);
(statearr_31237[(6)] = c__25979__auto___31238);

return statearr_31237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___31238,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__){
return (function (state_31252){
var state_val_31253 = (state_31252[(1)]);
if((state_val_31253 === (1))){
var inst_31247 = cljs.core.async.timeout.call(null,(3000));
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31252__$1,(2),inst_31247);
} else {
if((state_val_31253 === (2))){
var inst_31249 = (state_31252[(2)]);
var inst_31250 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31252__$1 = (function (){var statearr_31254 = state_31252;
(statearr_31254[(7)] = inst_31249);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31252__$1,inst_31250);
} else {
return null;
}
}
});})(c__25979__auto__))
;
return ((function (switch__25889__auto__,c__25979__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25890__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25890__auto____0 = (function (){
var statearr_31255 = [null,null,null,null,null,null,null,null];
(statearr_31255[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25890__auto__);

(statearr_31255[(1)] = (1));

return statearr_31255;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25890__auto____1 = (function (state_31252){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_31252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e31256){if((e31256 instanceof Object)){
var ex__25893__auto__ = e31256;
var statearr_31257_31259 = state_31252;
(statearr_31257_31259[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31260 = state_31252;
state_31252 = G__31260;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25890__auto__ = function(state_31252){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25890__auto____1.call(this,state_31252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25890__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25890__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__))
})();
var state__25981__auto__ = (function (){var statearr_31258 = f__25980__auto__.call(null);
(statearr_31258[(6)] = c__25979__auto__);

return statearr_31258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__))
);

return c__25979__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31267){
var state_val_31268 = (state_31267[(1)]);
if((state_val_31268 === (1))){
var inst_31261 = cljs.core.async.timeout.call(null,(2000));
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31267__$1,(2),inst_31261);
} else {
if((state_val_31268 === (2))){
var inst_31263 = (state_31267[(2)]);
var inst_31264 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31265 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31264);
var state_31267__$1 = (function (){var statearr_31269 = state_31267;
(statearr_31269[(7)] = inst_31263);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31267__$1,inst_31265);
} else {
return null;
}
}
});})(c__25979__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25889__auto__,c__25979__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto____0 = (function (){
var statearr_31270 = [null,null,null,null,null,null,null,null];
(statearr_31270[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto__);

(statearr_31270[(1)] = (1));

return statearr_31270;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto____1 = (function (state_31267){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_31267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e31271){if((e31271 instanceof Object)){
var ex__25893__auto__ = e31271;
var statearr_31272_31274 = state_31267;
(statearr_31272_31274[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31275 = state_31267;
state_31267 = G__31275;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto__ = function(state_31267){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto____1.call(this,state_31267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25981__auto__ = (function (){var statearr_31273 = f__25980__auto__.call(null);
(statearr_31273[(6)] = c__25979__auto__);

return statearr_31273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__,figwheel_version,temp__5457__auto__))
);

return c__25979__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31276){
var map__31277 = p__31276;
var map__31277__$1 = ((((!((map__31277 == null)))?(((((map__31277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31277):map__31277);
var file = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31279 = "";
var G__31279__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31279),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31279);
var G__31279__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31279__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31279__$1);
if(cljs.core.truth_((function (){var and__3910__auto__ = line;
if(cljs.core.truth_(and__3910__auto__)){
return column;
} else {
return and__3910__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31279__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31279__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31280){
var map__31281 = p__31280;
var map__31281__$1 = ((((!((map__31281 == null)))?(((((map__31281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31281):map__31281);
var ed = map__31281__$1;
var formatted_exception = cljs.core.get.call(null,map__31281__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31281__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31281__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31283_31287 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31284_31288 = null;
var count__31285_31289 = (0);
var i__31286_31290 = (0);
while(true){
if((i__31286_31290 < count__31285_31289)){
var msg_31291 = cljs.core._nth.call(null,chunk__31284_31288,i__31286_31290);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31291);


var G__31292 = seq__31283_31287;
var G__31293 = chunk__31284_31288;
var G__31294 = count__31285_31289;
var G__31295 = (i__31286_31290 + (1));
seq__31283_31287 = G__31292;
chunk__31284_31288 = G__31293;
count__31285_31289 = G__31294;
i__31286_31290 = G__31295;
continue;
} else {
var temp__5457__auto___31296 = cljs.core.seq.call(null,seq__31283_31287);
if(temp__5457__auto___31296){
var seq__31283_31297__$1 = temp__5457__auto___31296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31283_31297__$1)){
var c__4318__auto___31298 = cljs.core.chunk_first.call(null,seq__31283_31297__$1);
var G__31299 = cljs.core.chunk_rest.call(null,seq__31283_31297__$1);
var G__31300 = c__4318__auto___31298;
var G__31301 = cljs.core.count.call(null,c__4318__auto___31298);
var G__31302 = (0);
seq__31283_31287 = G__31299;
chunk__31284_31288 = G__31300;
count__31285_31289 = G__31301;
i__31286_31290 = G__31302;
continue;
} else {
var msg_31303 = cljs.core.first.call(null,seq__31283_31297__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31303);


var G__31304 = cljs.core.next.call(null,seq__31283_31297__$1);
var G__31305 = null;
var G__31306 = (0);
var G__31307 = (0);
seq__31283_31287 = G__31304;
chunk__31284_31288 = G__31305;
count__31285_31289 = G__31306;
i__31286_31290 = G__31307;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31308){
var map__31309 = p__31308;
var map__31309__$1 = ((((!((map__31309 == null)))?(((((map__31309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31309):map__31309);
var w = map__31309__$1;
var message = cljs.core.get.call(null,map__31309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3910__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3910__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3910__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31311 = cljs.core.seq.call(null,plugins);
var chunk__31312 = null;
var count__31313 = (0);
var i__31314 = (0);
while(true){
if((i__31314 < count__31313)){
var vec__31315 = cljs.core._nth.call(null,chunk__31312,i__31314);
var k = cljs.core.nth.call(null,vec__31315,(0),null);
var plugin = cljs.core.nth.call(null,vec__31315,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31321 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31311,chunk__31312,count__31313,i__31314,pl_31321,vec__31315,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31321.call(null,msg_hist);
});})(seq__31311,chunk__31312,count__31313,i__31314,pl_31321,vec__31315,k,plugin))
);
} else {
}


var G__31322 = seq__31311;
var G__31323 = chunk__31312;
var G__31324 = count__31313;
var G__31325 = (i__31314 + (1));
seq__31311 = G__31322;
chunk__31312 = G__31323;
count__31313 = G__31324;
i__31314 = G__31325;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31311);
if(temp__5457__auto__){
var seq__31311__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31311__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__31311__$1);
var G__31326 = cljs.core.chunk_rest.call(null,seq__31311__$1);
var G__31327 = c__4318__auto__;
var G__31328 = cljs.core.count.call(null,c__4318__auto__);
var G__31329 = (0);
seq__31311 = G__31326;
chunk__31312 = G__31327;
count__31313 = G__31328;
i__31314 = G__31329;
continue;
} else {
var vec__31318 = cljs.core.first.call(null,seq__31311__$1);
var k = cljs.core.nth.call(null,vec__31318,(0),null);
var plugin = cljs.core.nth.call(null,vec__31318,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31330 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31311,chunk__31312,count__31313,i__31314,pl_31330,vec__31318,k,plugin,seq__31311__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31330.call(null,msg_hist);
});})(seq__31311,chunk__31312,count__31313,i__31314,pl_31330,vec__31318,k,plugin,seq__31311__$1,temp__5457__auto__))
);
} else {
}


var G__31331 = cljs.core.next.call(null,seq__31311__$1);
var G__31332 = null;
var G__31333 = (0);
var G__31334 = (0);
seq__31311 = G__31331;
chunk__31312 = G__31332;
count__31313 = G__31333;
i__31314 = G__31334;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31336 = arguments.length;
switch (G__31336) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31337_31342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31338_31343 = null;
var count__31339_31344 = (0);
var i__31340_31345 = (0);
while(true){
if((i__31340_31345 < count__31339_31344)){
var msg_31346 = cljs.core._nth.call(null,chunk__31338_31343,i__31340_31345);
figwheel.client.socket.handle_incoming_message.call(null,msg_31346);


var G__31347 = seq__31337_31342;
var G__31348 = chunk__31338_31343;
var G__31349 = count__31339_31344;
var G__31350 = (i__31340_31345 + (1));
seq__31337_31342 = G__31347;
chunk__31338_31343 = G__31348;
count__31339_31344 = G__31349;
i__31340_31345 = G__31350;
continue;
} else {
var temp__5457__auto___31351 = cljs.core.seq.call(null,seq__31337_31342);
if(temp__5457__auto___31351){
var seq__31337_31352__$1 = temp__5457__auto___31351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31337_31352__$1)){
var c__4318__auto___31353 = cljs.core.chunk_first.call(null,seq__31337_31352__$1);
var G__31354 = cljs.core.chunk_rest.call(null,seq__31337_31352__$1);
var G__31355 = c__4318__auto___31353;
var G__31356 = cljs.core.count.call(null,c__4318__auto___31353);
var G__31357 = (0);
seq__31337_31342 = G__31354;
chunk__31338_31343 = G__31355;
count__31339_31344 = G__31356;
i__31340_31345 = G__31357;
continue;
} else {
var msg_31358 = cljs.core.first.call(null,seq__31337_31352__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31358);


var G__31359 = cljs.core.next.call(null,seq__31337_31352__$1);
var G__31360 = null;
var G__31361 = (0);
var G__31362 = (0);
seq__31337_31342 = G__31359;
chunk__31338_31343 = G__31360;
count__31339_31344 = G__31361;
i__31340_31345 = G__31362;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4501__auto__ = [];
var len__4498__auto___31367 = arguments.length;
var i__4499__auto___31368 = (0);
while(true){
if((i__4499__auto___31368 < len__4498__auto___31367)){
args__4501__auto__.push((arguments[i__4499__auto___31368]));

var G__31369 = (i__4499__auto___31368 + (1));
i__4499__auto___31368 = G__31369;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31364){
var map__31365 = p__31364;
var map__31365__$1 = ((((!((map__31365 == null)))?(((((map__31365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31365):map__31365);
var opts = map__31365__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31363){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31363));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31370){if((e31370 instanceof Error)){
var e = e31370;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31370;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31371){
var map__31372 = p__31371;
var map__31372__$1 = ((((!((map__31372 == null)))?(((((map__31372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372):map__31372);
var msg_name = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521885159150
