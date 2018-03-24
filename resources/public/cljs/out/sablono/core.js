// Compiled by ClojureScript 1.10.217 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23904__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23901 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23902 = cljs.core.seq.call(null,vec__23901);
var first__23903 = cljs.core.first.call(null,seq__23902);
var seq__23902__$1 = cljs.core.next.call(null,seq__23902);
var tag = first__23903;
var body = seq__23902__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23905__i = 0, G__23905__a = new Array(arguments.length -  0);
while (G__23905__i < G__23905__a.length) {G__23905__a[G__23905__i] = arguments[G__23905__i + 0]; ++G__23905__i;}
  args = new cljs.core.IndexedSeq(G__23905__a,0,null);
} 
return G__23904__delegate.call(this,args);};
G__23904.cljs$lang$maxFixedArity = 0;
G__23904.cljs$lang$applyTo = (function (arglist__23906){
var args = cljs.core.seq(arglist__23906);
return G__23904__delegate(args);
});
G__23904.cljs$core$IFn$_invoke$arity$variadic = G__23904__delegate;
return G__23904;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4291__auto__ = (function sablono$core$update_arglists_$_iter__23907(s__23908){
return (new cljs.core.LazySeq(null,(function (){
var s__23908__$1 = s__23908;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23908__$1);
if(temp__5457__auto__){
var s__23908__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23908__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__23908__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__23910 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__23909 = (0);
while(true){
if((i__23909 < size__4290__auto__)){
var args = cljs.core._nth.call(null,c__4289__auto__,i__23909);
cljs.core.chunk_append.call(null,b__23910,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23911 = (i__23909 + (1));
i__23909 = G__23911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23910),sablono$core$update_arglists_$_iter__23907.call(null,cljs.core.chunk_rest.call(null,s__23908__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23910),null);
}
} else {
var args = cljs.core.first.call(null,s__23908__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23907.call(null,cljs.core.rest.call(null,s__23908__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4501__auto__ = [];
var len__4498__auto___23917 = arguments.length;
var i__4499__auto___23918 = (0);
while(true){
if((i__4499__auto___23918 < len__4498__auto___23917)){
args__4501__auto__.push((arguments[i__4499__auto___23918]));

var G__23919 = (i__4499__auto___23918 + (1));
i__4499__auto___23918 = G__23919;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4291__auto__ = (function sablono$core$iter__23913(s__23914){
return (new cljs.core.LazySeq(null,(function (){
var s__23914__$1 = s__23914;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23914__$1);
if(temp__5457__auto__){
var s__23914__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23914__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__23914__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__23916 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__23915 = (0);
while(true){
if((i__23915 < size__4290__auto__)){
var style = cljs.core._nth.call(null,c__4289__auto__,i__23915);
cljs.core.chunk_append.call(null,b__23916,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23920 = (i__23915 + (1));
i__23915 = G__23920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23916),sablono$core$iter__23913.call(null,cljs.core.chunk_rest.call(null,s__23914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23916),null);
}
} else {
var style = cljs.core.first.call(null,s__23914__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23913.call(null,cljs.core.rest.call(null,s__23914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23912){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23912));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23921 = (function sablono$core$link_to23921(var_args){
var args__4501__auto__ = [];
var len__4498__auto___23924 = arguments.length;
var i__4499__auto___23925 = (0);
while(true){
if((i__4499__auto___23925 < len__4498__auto___23924)){
args__4501__auto__.push((arguments[i__4499__auto___23925]));

var G__23926 = (i__4499__auto___23925 + (1));
i__4499__auto___23925 = G__23926;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23921.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.link_to23921.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23921.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23921.cljs$lang$applyTo = (function (seq23922){
var G__23923 = cljs.core.first.call(null,seq23922);
var seq23922__$1 = cljs.core.next.call(null,seq23922);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23923,seq23922__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23921);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23927 = (function sablono$core$mail_to23927(var_args){
var args__4501__auto__ = [];
var len__4498__auto___23934 = arguments.length;
var i__4499__auto___23935 = (0);
while(true){
if((i__4499__auto___23935 < len__4498__auto___23934)){
args__4501__auto__.push((arguments[i__4499__auto___23935]));

var G__23936 = (i__4499__auto___23935 + (1));
i__4499__auto___23935 = G__23936;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23927.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.mail_to23927.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23930){
var vec__23931 = p__23930;
var content = cljs.core.nth.call(null,vec__23931,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3921__auto__ = content;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23927.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23927.cljs$lang$applyTo = (function (seq23928){
var G__23929 = cljs.core.first.call(null,seq23928);
var seq23928__$1 = cljs.core.next.call(null,seq23928);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23929,seq23928__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23927);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23937 = (function sablono$core$unordered_list23937(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4291__auto__ = (function sablono$core$unordered_list23937_$_iter__23938(s__23939){
return (new cljs.core.LazySeq(null,(function (){
var s__23939__$1 = s__23939;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23939__$1);
if(temp__5457__auto__){
var s__23939__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23939__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__23939__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__23941 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__23940 = (0);
while(true){
if((i__23940 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__23940);
cljs.core.chunk_append.call(null,b__23941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23942 = (i__23940 + (1));
i__23940 = G__23942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23941),sablono$core$unordered_list23937_$_iter__23938.call(null,cljs.core.chunk_rest.call(null,s__23939__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23941),null);
}
} else {
var x = cljs.core.first.call(null,s__23939__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23937_$_iter__23938.call(null,cljs.core.rest.call(null,s__23939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23937);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23943 = (function sablono$core$ordered_list23943(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4291__auto__ = (function sablono$core$ordered_list23943_$_iter__23944(s__23945){
return (new cljs.core.LazySeq(null,(function (){
var s__23945__$1 = s__23945;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23945__$1);
if(temp__5457__auto__){
var s__23945__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23945__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__23945__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__23947 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__23946 = (0);
while(true){
if((i__23946 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__23946);
cljs.core.chunk_append.call(null,b__23947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23948 = (i__23946 + (1));
i__23946 = G__23948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23947),sablono$core$ordered_list23943_$_iter__23944.call(null,cljs.core.chunk_rest.call(null,s__23945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23947),null);
}
} else {
var x = cljs.core.first.call(null,s__23945__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23943_$_iter__23944.call(null,cljs.core.rest.call(null,s__23945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23943);
/**
 * Create an image element.
 */
sablono.core.image23949 = (function sablono$core$image23949(var_args){
var G__23951 = arguments.length;
switch (G__23951) {
case 1:
return sablono.core.image23949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23949.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23949.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23949.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23949);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23953_SHARP_,p2__23954_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23953_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23954_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23955_SHARP_,p2__23956_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23955_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23956_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23958 = arguments.length;
switch (G__23958) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3921__auto__ = value;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23960 = (function sablono$core$color_field23960(var_args){
var G__23962 = arguments.length;
switch (G__23962) {
case 1:
return sablono.core.color_field23960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23960.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23891__auto__);
});

sablono.core.color_field23960.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.color_field23960.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23960);

/**
 * Creates a date input field.
 */
sablono.core.date_field23963 = (function sablono$core$date_field23963(var_args){
var G__23965 = arguments.length;
switch (G__23965) {
case 1:
return sablono.core.date_field23963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23963.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23891__auto__);
});

sablono.core.date_field23963.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.date_field23963.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23963);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23966 = (function sablono$core$datetime_field23966(var_args){
var G__23968 = arguments.length;
switch (G__23968) {
case 1:
return sablono.core.datetime_field23966.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23966.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23891__auto__);
});

sablono.core.datetime_field23966.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.datetime_field23966.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23966);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23969 = (function sablono$core$datetime_local_field23969(var_args){
var G__23971 = arguments.length;
switch (G__23971) {
case 1:
return sablono.core.datetime_local_field23969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23969.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23891__auto__);
});

sablono.core.datetime_local_field23969.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.datetime_local_field23969.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23969);

/**
 * Creates a email input field.
 */
sablono.core.email_field23972 = (function sablono$core$email_field23972(var_args){
var G__23974 = arguments.length;
switch (G__23974) {
case 1:
return sablono.core.email_field23972.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23972.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23972.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23891__auto__);
});

sablono.core.email_field23972.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.email_field23972.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23972);

/**
 * Creates a file input field.
 */
sablono.core.file_field23975 = (function sablono$core$file_field23975(var_args){
var G__23977 = arguments.length;
switch (G__23977) {
case 1:
return sablono.core.file_field23975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23975.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23891__auto__);
});

sablono.core.file_field23975.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.file_field23975.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23975);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23978 = (function sablono$core$hidden_field23978(var_args){
var G__23980 = arguments.length;
switch (G__23980) {
case 1:
return sablono.core.hidden_field23978.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23978.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23891__auto__);
});

sablono.core.hidden_field23978.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.hidden_field23978.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23978);

/**
 * Creates a month input field.
 */
sablono.core.month_field23981 = (function sablono$core$month_field23981(var_args){
var G__23983 = arguments.length;
switch (G__23983) {
case 1:
return sablono.core.month_field23981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23981.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23891__auto__);
});

sablono.core.month_field23981.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.month_field23981.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23981);

/**
 * Creates a number input field.
 */
sablono.core.number_field23984 = (function sablono$core$number_field23984(var_args){
var G__23986 = arguments.length;
switch (G__23986) {
case 1:
return sablono.core.number_field23984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23984.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23891__auto__);
});

sablono.core.number_field23984.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.number_field23984.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23984);

/**
 * Creates a password input field.
 */
sablono.core.password_field23987 = (function sablono$core$password_field23987(var_args){
var G__23989 = arguments.length;
switch (G__23989) {
case 1:
return sablono.core.password_field23987.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23987.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23987.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23891__auto__);
});

sablono.core.password_field23987.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.password_field23987.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23987);

/**
 * Creates a range input field.
 */
sablono.core.range_field23990 = (function sablono$core$range_field23990(var_args){
var G__23992 = arguments.length;
switch (G__23992) {
case 1:
return sablono.core.range_field23990.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23990.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23990.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23891__auto__);
});

sablono.core.range_field23990.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.range_field23990.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23990);

/**
 * Creates a search input field.
 */
sablono.core.search_field23993 = (function sablono$core$search_field23993(var_args){
var G__23995 = arguments.length;
switch (G__23995) {
case 1:
return sablono.core.search_field23993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23993.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23891__auto__);
});

sablono.core.search_field23993.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.search_field23993.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23993);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23996 = (function sablono$core$tel_field23996(var_args){
var G__23998 = arguments.length;
switch (G__23998) {
case 1:
return sablono.core.tel_field23996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23996.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23891__auto__);
});

sablono.core.tel_field23996.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.tel_field23996.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23996);

/**
 * Creates a text input field.
 */
sablono.core.text_field23999 = (function sablono$core$text_field23999(var_args){
var G__24001 = arguments.length;
switch (G__24001) {
case 1:
return sablono.core.text_field23999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23999.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23891__auto__);
});

sablono.core.text_field23999.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.text_field23999.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23999);

/**
 * Creates a time input field.
 */
sablono.core.time_field24002 = (function sablono$core$time_field24002(var_args){
var G__24004 = arguments.length;
switch (G__24004) {
case 1:
return sablono.core.time_field24002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field24002.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23891__auto__);
});

sablono.core.time_field24002.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.time_field24002.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24002);

/**
 * Creates a url input field.
 */
sablono.core.url_field24005 = (function sablono$core$url_field24005(var_args){
var G__24007 = arguments.length;
switch (G__24007) {
case 1:
return sablono.core.url_field24005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field24005.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23891__auto__);
});

sablono.core.url_field24005.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.url_field24005.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24005);

/**
 * Creates a week input field.
 */
sablono.core.week_field24008 = (function sablono$core$week_field24008(var_args){
var G__24010 = arguments.length;
switch (G__24010) {
case 1:
return sablono.core.week_field24008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field24008.cljs$core$IFn$_invoke$arity$1 = (function (name__23891__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23891__auto__);
});

sablono.core.week_field24008.cljs$core$IFn$_invoke$arity$2 = (function (name__23891__auto__,value__23892__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23891__auto__,value__23892__auto__);
});

sablono.core.week_field24008.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24008);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24028 = (function sablono$core$check_box24028(var_args){
var G__24030 = arguments.length;
switch (G__24030) {
case 1:
return sablono.core.check_box24028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24028.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box24028.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box24028.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24028.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24028.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24028);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24032 = (function sablono$core$radio_button24032(var_args){
var G__24034 = arguments.length;
switch (G__24034) {
case 1:
return sablono.core.radio_button24032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24032.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button24032.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button24032.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24032.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24032.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24032);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24036 = (function sablono$core$select_options24036(coll){
var iter__4291__auto__ = (function sablono$core$select_options24036_$_iter__24037(s__24038){
return (new cljs.core.LazySeq(null,(function (){
var s__24038__$1 = s__24038;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24038__$1);
if(temp__5457__auto__){
var s__24038__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24038__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__24038__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__24040 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__24039 = (0);
while(true){
if((i__24039 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__24039);
cljs.core.chunk_append.call(null,b__24040,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24041 = x;
var text = cljs.core.nth.call(null,vec__24041,(0),null);
var val = cljs.core.nth.call(null,vec__24041,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24041,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24036.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24047 = (i__24039 + (1));
i__24039 = G__24047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24040),sablono$core$select_options24036_$_iter__24037.call(null,cljs.core.chunk_rest.call(null,s__24038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24040),null);
}
} else {
var x = cljs.core.first.call(null,s__24038__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24044 = x;
var text = cljs.core.nth.call(null,vec__24044,(0),null);
var val = cljs.core.nth.call(null,vec__24044,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24044,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24036.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24036_$_iter__24037.call(null,cljs.core.rest.call(null,s__24038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24036);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24048 = (function sablono$core$drop_down24048(var_args){
var G__24050 = arguments.length;
switch (G__24050) {
case 2:
return sablono.core.drop_down24048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24048.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down24048.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24048.call(null,name,options,null);
});

sablono.core.drop_down24048.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24048.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24048);
/**
 * Creates a text area element.
 */
sablono.core.text_area24052 = (function sablono$core$text_area24052(var_args){
var G__24054 = arguments.length;
switch (G__24054) {
case 1:
return sablono.core.text_area24052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area24052.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area24052.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3921__auto__ = value;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area24052.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24052);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24056 = (function sablono$core$label24056(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24056);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24057 = (function sablono$core$submit_button24057(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24057);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24058 = (function sablono$core$reset_button24058(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24058);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24059 = (function sablono$core$form_to24059(var_args){
var args__4501__auto__ = [];
var len__4498__auto___24066 = arguments.length;
var i__4499__auto___24067 = (0);
while(true){
if((i__4499__auto___24067 < len__4498__auto___24066)){
args__4501__auto__.push((arguments[i__4499__auto___24067]));

var G__24068 = (i__4499__auto___24067 + (1));
i__4499__auto___24067 = G__24068;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24059.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.form_to24059.cljs$core$IFn$_invoke$arity$variadic = (function (p__24062,body){
var vec__24063 = p__24062;
var method = cljs.core.nth.call(null,vec__24063,(0),null);
var action = cljs.core.nth.call(null,vec__24063,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24059.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to24059.cljs$lang$applyTo = (function (seq24060){
var G__24061 = cljs.core.first.call(null,seq24060);
var seq24060__$1 = cljs.core.next.call(null,seq24060);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24061,seq24060__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24059);

//# sourceMappingURL=core.js.map?rel=1521885146670
