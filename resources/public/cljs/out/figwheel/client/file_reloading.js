// Compiled by ClojureScript 1.10.217 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3921__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3921__auto__){
return or__3921__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3921__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
var or__3921__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3921__auto____$1)){
return or__3921__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29169_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29169_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29170 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29171 = null;
var count__29172 = (0);
var i__29173 = (0);
while(true){
if((i__29173 < count__29172)){
var n = cljs.core._nth.call(null,chunk__29171,i__29173);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29174 = seq__29170;
var G__29175 = chunk__29171;
var G__29176 = count__29172;
var G__29177 = (i__29173 + (1));
seq__29170 = G__29174;
chunk__29171 = G__29175;
count__29172 = G__29176;
i__29173 = G__29177;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29170);
if(temp__5457__auto__){
var seq__29170__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29170__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__29170__$1);
var G__29178 = cljs.core.chunk_rest.call(null,seq__29170__$1);
var G__29179 = c__4318__auto__;
var G__29180 = cljs.core.count.call(null,c__4318__auto__);
var G__29181 = (0);
seq__29170 = G__29178;
chunk__29171 = G__29179;
count__29172 = G__29180;
i__29173 = G__29181;
continue;
} else {
var n = cljs.core.first.call(null,seq__29170__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29182 = cljs.core.next.call(null,seq__29170__$1);
var G__29183 = null;
var G__29184 = (0);
var G__29185 = (0);
seq__29170 = G__29182;
chunk__29171 = G__29183;
count__29172 = G__29184;
i__29173 = G__29185;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29195_29203 = cljs.core.seq.call(null,deps);
var chunk__29196_29204 = null;
var count__29197_29205 = (0);
var i__29198_29206 = (0);
while(true){
if((i__29198_29206 < count__29197_29205)){
var dep_29207 = cljs.core._nth.call(null,chunk__29196_29204,i__29198_29206);
topo_sort_helper_STAR_.call(null,dep_29207,(depth + (1)),state);


var G__29208 = seq__29195_29203;
var G__29209 = chunk__29196_29204;
var G__29210 = count__29197_29205;
var G__29211 = (i__29198_29206 + (1));
seq__29195_29203 = G__29208;
chunk__29196_29204 = G__29209;
count__29197_29205 = G__29210;
i__29198_29206 = G__29211;
continue;
} else {
var temp__5457__auto___29212 = cljs.core.seq.call(null,seq__29195_29203);
if(temp__5457__auto___29212){
var seq__29195_29213__$1 = temp__5457__auto___29212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29195_29213__$1)){
var c__4318__auto___29214 = cljs.core.chunk_first.call(null,seq__29195_29213__$1);
var G__29215 = cljs.core.chunk_rest.call(null,seq__29195_29213__$1);
var G__29216 = c__4318__auto___29214;
var G__29217 = cljs.core.count.call(null,c__4318__auto___29214);
var G__29218 = (0);
seq__29195_29203 = G__29215;
chunk__29196_29204 = G__29216;
count__29197_29205 = G__29217;
i__29198_29206 = G__29218;
continue;
} else {
var dep_29219 = cljs.core.first.call(null,seq__29195_29213__$1);
topo_sort_helper_STAR_.call(null,dep_29219,(depth + (1)),state);


var G__29220 = cljs.core.next.call(null,seq__29195_29213__$1);
var G__29221 = null;
var G__29222 = (0);
var G__29223 = (0);
seq__29195_29203 = G__29220;
chunk__29196_29204 = G__29221;
count__29197_29205 = G__29222;
i__29198_29206 = G__29223;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29199){
var vec__29200 = p__29199;
var seq__29201 = cljs.core.seq.call(null,vec__29200);
var first__29202 = cljs.core.first.call(null,seq__29201);
var seq__29201__$1 = cljs.core.next.call(null,seq__29201);
var x = first__29202;
var xs = seq__29201__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29200,seq__29201,first__29202,seq__29201__$1,x,xs,get_deps__$1){
return (function (p1__29186_SHARP_){
return clojure.set.difference.call(null,p1__29186_SHARP_,x);
});})(vec__29200,seq__29201,first__29202,seq__29201__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29224 = cljs.core.seq.call(null,provides);
var chunk__29225 = null;
var count__29226 = (0);
var i__29227 = (0);
while(true){
if((i__29227 < count__29226)){
var prov = cljs.core._nth.call(null,chunk__29225,i__29227);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29228_29236 = cljs.core.seq.call(null,requires);
var chunk__29229_29237 = null;
var count__29230_29238 = (0);
var i__29231_29239 = (0);
while(true){
if((i__29231_29239 < count__29230_29238)){
var req_29240 = cljs.core._nth.call(null,chunk__29229_29237,i__29231_29239);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29240,prov);


var G__29241 = seq__29228_29236;
var G__29242 = chunk__29229_29237;
var G__29243 = count__29230_29238;
var G__29244 = (i__29231_29239 + (1));
seq__29228_29236 = G__29241;
chunk__29229_29237 = G__29242;
count__29230_29238 = G__29243;
i__29231_29239 = G__29244;
continue;
} else {
var temp__5457__auto___29245 = cljs.core.seq.call(null,seq__29228_29236);
if(temp__5457__auto___29245){
var seq__29228_29246__$1 = temp__5457__auto___29245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29228_29246__$1)){
var c__4318__auto___29247 = cljs.core.chunk_first.call(null,seq__29228_29246__$1);
var G__29248 = cljs.core.chunk_rest.call(null,seq__29228_29246__$1);
var G__29249 = c__4318__auto___29247;
var G__29250 = cljs.core.count.call(null,c__4318__auto___29247);
var G__29251 = (0);
seq__29228_29236 = G__29248;
chunk__29229_29237 = G__29249;
count__29230_29238 = G__29250;
i__29231_29239 = G__29251;
continue;
} else {
var req_29252 = cljs.core.first.call(null,seq__29228_29246__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29252,prov);


var G__29253 = cljs.core.next.call(null,seq__29228_29246__$1);
var G__29254 = null;
var G__29255 = (0);
var G__29256 = (0);
seq__29228_29236 = G__29253;
chunk__29229_29237 = G__29254;
count__29230_29238 = G__29255;
i__29231_29239 = G__29256;
continue;
}
} else {
}
}
break;
}


var G__29257 = seq__29224;
var G__29258 = chunk__29225;
var G__29259 = count__29226;
var G__29260 = (i__29227 + (1));
seq__29224 = G__29257;
chunk__29225 = G__29258;
count__29226 = G__29259;
i__29227 = G__29260;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29224);
if(temp__5457__auto__){
var seq__29224__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29224__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__29224__$1);
var G__29261 = cljs.core.chunk_rest.call(null,seq__29224__$1);
var G__29262 = c__4318__auto__;
var G__29263 = cljs.core.count.call(null,c__4318__auto__);
var G__29264 = (0);
seq__29224 = G__29261;
chunk__29225 = G__29262;
count__29226 = G__29263;
i__29227 = G__29264;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29224__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29232_29265 = cljs.core.seq.call(null,requires);
var chunk__29233_29266 = null;
var count__29234_29267 = (0);
var i__29235_29268 = (0);
while(true){
if((i__29235_29268 < count__29234_29267)){
var req_29269 = cljs.core._nth.call(null,chunk__29233_29266,i__29235_29268);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29269,prov);


var G__29270 = seq__29232_29265;
var G__29271 = chunk__29233_29266;
var G__29272 = count__29234_29267;
var G__29273 = (i__29235_29268 + (1));
seq__29232_29265 = G__29270;
chunk__29233_29266 = G__29271;
count__29234_29267 = G__29272;
i__29235_29268 = G__29273;
continue;
} else {
var temp__5457__auto___29274__$1 = cljs.core.seq.call(null,seq__29232_29265);
if(temp__5457__auto___29274__$1){
var seq__29232_29275__$1 = temp__5457__auto___29274__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29232_29275__$1)){
var c__4318__auto___29276 = cljs.core.chunk_first.call(null,seq__29232_29275__$1);
var G__29277 = cljs.core.chunk_rest.call(null,seq__29232_29275__$1);
var G__29278 = c__4318__auto___29276;
var G__29279 = cljs.core.count.call(null,c__4318__auto___29276);
var G__29280 = (0);
seq__29232_29265 = G__29277;
chunk__29233_29266 = G__29278;
count__29234_29267 = G__29279;
i__29235_29268 = G__29280;
continue;
} else {
var req_29281 = cljs.core.first.call(null,seq__29232_29275__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29281,prov);


var G__29282 = cljs.core.next.call(null,seq__29232_29275__$1);
var G__29283 = null;
var G__29284 = (0);
var G__29285 = (0);
seq__29232_29265 = G__29282;
chunk__29233_29266 = G__29283;
count__29234_29267 = G__29284;
i__29235_29268 = G__29285;
continue;
}
} else {
}
}
break;
}


var G__29286 = cljs.core.next.call(null,seq__29224__$1);
var G__29287 = null;
var G__29288 = (0);
var G__29289 = (0);
seq__29224 = G__29286;
chunk__29225 = G__29287;
count__29226 = G__29288;
i__29227 = G__29289;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29290_29294 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29291_29295 = null;
var count__29292_29296 = (0);
var i__29293_29297 = (0);
while(true){
if((i__29293_29297 < count__29292_29296)){
var ns_29298 = cljs.core._nth.call(null,chunk__29291_29295,i__29293_29297);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29298);


var G__29299 = seq__29290_29294;
var G__29300 = chunk__29291_29295;
var G__29301 = count__29292_29296;
var G__29302 = (i__29293_29297 + (1));
seq__29290_29294 = G__29299;
chunk__29291_29295 = G__29300;
count__29292_29296 = G__29301;
i__29293_29297 = G__29302;
continue;
} else {
var temp__5457__auto___29303 = cljs.core.seq.call(null,seq__29290_29294);
if(temp__5457__auto___29303){
var seq__29290_29304__$1 = temp__5457__auto___29303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29290_29304__$1)){
var c__4318__auto___29305 = cljs.core.chunk_first.call(null,seq__29290_29304__$1);
var G__29306 = cljs.core.chunk_rest.call(null,seq__29290_29304__$1);
var G__29307 = c__4318__auto___29305;
var G__29308 = cljs.core.count.call(null,c__4318__auto___29305);
var G__29309 = (0);
seq__29290_29294 = G__29306;
chunk__29291_29295 = G__29307;
count__29292_29296 = G__29308;
i__29293_29297 = G__29309;
continue;
} else {
var ns_29310 = cljs.core.first.call(null,seq__29290_29304__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29310);


var G__29311 = cljs.core.next.call(null,seq__29290_29304__$1);
var G__29312 = null;
var G__29313 = (0);
var G__29314 = (0);
seq__29290_29294 = G__29311;
chunk__29291_29295 = G__29312;
count__29292_29296 = G__29313;
i__29293_29297 = G__29314;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3921__auto__ = goog.require__;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29315__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29316__i = 0, G__29316__a = new Array(arguments.length -  0);
while (G__29316__i < G__29316__a.length) {G__29316__a[G__29316__i] = arguments[G__29316__i + 0]; ++G__29316__i;}
  args = new cljs.core.IndexedSeq(G__29316__a,0,null);
} 
return G__29315__delegate.call(this,args);};
G__29315.cljs$lang$maxFixedArity = 0;
G__29315.cljs$lang$applyTo = (function (arglist__29317){
var args = cljs.core.seq(arglist__29317);
return G__29315__delegate(args);
});
G__29315.cljs$core$IFn$_invoke$arity$variadic = G__29315__delegate;
return G__29315;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29318_SHARP_,p2__29319_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29318_SHARP_)].join('')),p2__29319_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29320_SHARP_,p2__29321_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29320_SHARP_)].join(''),p2__29321_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29322 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29322.addCallback(((function (G__29322){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29322))
);

G__29322.addErrback(((function (G__29322){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29322))
);

return G__29322;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29323 = cljs.core._EQ_;
var expr__29324 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29323.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29324))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__29323,expr__29324){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__29323,expr__29324))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__29323,expr__29324){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29326){if((e29326 instanceof Error)){
var e = e29326;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29326;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__29323,expr__29324))
} else {
if(cljs.core.truth_(pred__29323.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29324))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__29323.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__29324))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__29323.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29324))){
return ((function (pred__29323,expr__29324){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29327){if((e29327 instanceof Error)){
var e = e29327;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29327;

}
}})());
});
;})(pred__29323,expr__29324))
} else {
return ((function (pred__29323,expr__29324){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29323,expr__29324))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29328,callback){
var map__29329 = p__29328;
var map__29329__$1 = ((((!((map__29329 == null)))?(((((map__29329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29329):map__29329);
var file_msg = map__29329__$1;
var request_url = cljs.core.get.call(null,map__29329__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29329,map__29329__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29329,map__29329__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__){
return (function (state_29353){
var state_val_29354 = (state_29353[(1)]);
if((state_val_29354 === (7))){
var inst_29349 = (state_29353[(2)]);
var state_29353__$1 = state_29353;
var statearr_29355_29372 = state_29353__$1;
(statearr_29355_29372[(2)] = inst_29349);

(statearr_29355_29372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (1))){
var state_29353__$1 = state_29353;
var statearr_29356_29373 = state_29353__$1;
(statearr_29356_29373[(2)] = null);

(statearr_29356_29373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (4))){
var inst_29333 = (state_29353[(7)]);
var inst_29333__$1 = (state_29353[(2)]);
var state_29353__$1 = (function (){var statearr_29357 = state_29353;
(statearr_29357[(7)] = inst_29333__$1);

return statearr_29357;
})();
if(cljs.core.truth_(inst_29333__$1)){
var statearr_29358_29374 = state_29353__$1;
(statearr_29358_29374[(1)] = (5));

} else {
var statearr_29359_29375 = state_29353__$1;
(statearr_29359_29375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (6))){
var state_29353__$1 = state_29353;
var statearr_29360_29376 = state_29353__$1;
(statearr_29360_29376[(2)] = null);

(statearr_29360_29376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (3))){
var inst_29351 = (state_29353[(2)]);
var state_29353__$1 = state_29353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29353__$1,inst_29351);
} else {
if((state_val_29354 === (2))){
var state_29353__$1 = state_29353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29353__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29354 === (11))){
var inst_29345 = (state_29353[(2)]);
var state_29353__$1 = (function (){var statearr_29361 = state_29353;
(statearr_29361[(8)] = inst_29345);

return statearr_29361;
})();
var statearr_29362_29377 = state_29353__$1;
(statearr_29362_29377[(2)] = null);

(statearr_29362_29377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (9))){
var inst_29339 = (state_29353[(9)]);
var inst_29337 = (state_29353[(10)]);
var inst_29341 = inst_29339.call(null,inst_29337);
var state_29353__$1 = state_29353;
var statearr_29363_29378 = state_29353__$1;
(statearr_29363_29378[(2)] = inst_29341);

(statearr_29363_29378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (5))){
var inst_29333 = (state_29353[(7)]);
var inst_29335 = figwheel.client.file_reloading.blocking_load.call(null,inst_29333);
var state_29353__$1 = state_29353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29353__$1,(8),inst_29335);
} else {
if((state_val_29354 === (10))){
var inst_29337 = (state_29353[(10)]);
var inst_29343 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29337);
var state_29353__$1 = state_29353;
var statearr_29364_29379 = state_29353__$1;
(statearr_29364_29379[(2)] = inst_29343);

(statearr_29364_29379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29354 === (8))){
var inst_29333 = (state_29353[(7)]);
var inst_29339 = (state_29353[(9)]);
var inst_29337 = (state_29353[(2)]);
var inst_29338 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29339__$1 = cljs.core.get.call(null,inst_29338,inst_29333);
var state_29353__$1 = (function (){var statearr_29365 = state_29353;
(statearr_29365[(9)] = inst_29339__$1);

(statearr_29365[(10)] = inst_29337);

return statearr_29365;
})();
if(cljs.core.truth_(inst_29339__$1)){
var statearr_29366_29380 = state_29353__$1;
(statearr_29366_29380[(1)] = (9));

} else {
var statearr_29367_29381 = state_29353__$1;
(statearr_29367_29381[(1)] = (10));

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
});})(c__25979__auto__))
;
return ((function (switch__25889__auto__,c__25979__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25890__auto__ = null;
var figwheel$client$file_reloading$state_machine__25890__auto____0 = (function (){
var statearr_29368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29368[(0)] = figwheel$client$file_reloading$state_machine__25890__auto__);

(statearr_29368[(1)] = (1));

return statearr_29368;
});
var figwheel$client$file_reloading$state_machine__25890__auto____1 = (function (state_29353){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_29353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e29369){if((e29369 instanceof Object)){
var ex__25893__auto__ = e29369;
var statearr_29370_29382 = state_29353;
(statearr_29370_29382[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29383 = state_29353;
state_29353 = G__29383;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25890__auto__ = function(state_29353){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25890__auto____1.call(this,state_29353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25890__auto____0;
figwheel$client$file_reloading$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25890__auto____1;
return figwheel$client$file_reloading$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__))
})();
var state__25981__auto__ = (function (){var statearr_29371 = f__25980__auto__.call(null);
(statearr_29371[(6)] = c__25979__auto__);

return statearr_29371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__))
);

return c__25979__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29384,callback){
var map__29385 = p__29384;
var map__29385__$1 = ((((!((map__29385 == null)))?(((((map__29385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29385):map__29385);
var file_msg = map__29385__$1;
var namespace = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29385,map__29385__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29385,map__29385__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29387){
var map__29388 = p__29387;
var map__29388__$1 = ((((!((map__29388 == null)))?(((((map__29388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29388):map__29388);
var file_msg = map__29388__$1;
var namespace = cljs.core.get.call(null,map__29388__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29390){
var map__29391 = p__29390;
var map__29391__$1 = ((((!((map__29391 == null)))?(((((map__29391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);
var file_msg = map__29391__$1;
var namespace = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3910__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3910__auto__){
var or__3921__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
var or__3921__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3921__auto____$1)){
return or__3921__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3910__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29393,callback){
var map__29394 = p__29393;
var map__29394__$1 = ((((!((map__29394 == null)))?(((((map__29394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29394):map__29394);
var file_msg = map__29394__$1;
var request_url = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25979__auto___29444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___29444,out){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___29444,out){
return (function (state_29429){
var state_val_29430 = (state_29429[(1)]);
if((state_val_29430 === (1))){
var inst_29403 = cljs.core.seq.call(null,files);
var inst_29404 = cljs.core.first.call(null,inst_29403);
var inst_29405 = cljs.core.next.call(null,inst_29403);
var inst_29406 = files;
var state_29429__$1 = (function (){var statearr_29431 = state_29429;
(statearr_29431[(7)] = inst_29404);

(statearr_29431[(8)] = inst_29406);

(statearr_29431[(9)] = inst_29405);

return statearr_29431;
})();
var statearr_29432_29445 = state_29429__$1;
(statearr_29432_29445[(2)] = null);

(statearr_29432_29445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (2))){
var inst_29406 = (state_29429[(8)]);
var inst_29412 = (state_29429[(10)]);
var inst_29411 = cljs.core.seq.call(null,inst_29406);
var inst_29412__$1 = cljs.core.first.call(null,inst_29411);
var inst_29413 = cljs.core.next.call(null,inst_29411);
var inst_29414 = (inst_29412__$1 == null);
var inst_29415 = cljs.core.not.call(null,inst_29414);
var state_29429__$1 = (function (){var statearr_29433 = state_29429;
(statearr_29433[(11)] = inst_29413);

(statearr_29433[(10)] = inst_29412__$1);

return statearr_29433;
})();
if(inst_29415){
var statearr_29434_29446 = state_29429__$1;
(statearr_29434_29446[(1)] = (4));

} else {
var statearr_29435_29447 = state_29429__$1;
(statearr_29435_29447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (3))){
var inst_29427 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29429__$1,inst_29427);
} else {
if((state_val_29430 === (4))){
var inst_29412 = (state_29429[(10)]);
var inst_29417 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29412);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29429__$1,(7),inst_29417);
} else {
if((state_val_29430 === (5))){
var inst_29423 = cljs.core.async.close_BANG_.call(null,out);
var state_29429__$1 = state_29429;
var statearr_29436_29448 = state_29429__$1;
(statearr_29436_29448[(2)] = inst_29423);

(statearr_29436_29448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (6))){
var inst_29425 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29437_29449 = state_29429__$1;
(statearr_29437_29449[(2)] = inst_29425);

(statearr_29437_29449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (7))){
var inst_29413 = (state_29429[(11)]);
var inst_29419 = (state_29429[(2)]);
var inst_29420 = cljs.core.async.put_BANG_.call(null,out,inst_29419);
var inst_29406 = inst_29413;
var state_29429__$1 = (function (){var statearr_29438 = state_29429;
(statearr_29438[(8)] = inst_29406);

(statearr_29438[(12)] = inst_29420);

return statearr_29438;
})();
var statearr_29439_29450 = state_29429__$1;
(statearr_29439_29450[(2)] = null);

(statearr_29439_29450[(1)] = (2));


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
});})(c__25979__auto___29444,out))
;
return ((function (switch__25889__auto__,c__25979__auto___29444,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto____0 = (function (){
var statearr_29440 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29440[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto__);

(statearr_29440[(1)] = (1));

return statearr_29440;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto____1 = (function (state_29429){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_29429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e29441){if((e29441 instanceof Object)){
var ex__25893__auto__ = e29441;
var statearr_29442_29451 = state_29429;
(statearr_29442_29451[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29452 = state_29429;
state_29429 = G__29452;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto__ = function(state_29429){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto____1.call(this,state_29429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___29444,out))
})();
var state__25981__auto__ = (function (){var statearr_29443 = f__25980__auto__.call(null);
(statearr_29443[(6)] = c__25979__auto___29444);

return statearr_29443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___29444,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29453,opts){
var map__29454 = p__29453;
var map__29454__$1 = ((((!((map__29454 == null)))?(((((map__29454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29454):map__29454);
var eval_body = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3910__auto__ = eval_body;
if(cljs.core.truth_(and__3910__auto__)){
return typeof eval_body === 'string';
} else {
return and__3910__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29456){var e = e29456;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29457_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29457_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29458){
var vec__29459 = p__29458;
var k = cljs.core.nth.call(null,vec__29459,(0),null);
var v = cljs.core.nth.call(null,vec__29459,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29462){
var vec__29463 = p__29462;
var k = cljs.core.nth.call(null,vec__29463,(0),null);
var v = cljs.core.nth.call(null,vec__29463,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29469,p__29470){
var map__29471 = p__29469;
var map__29471__$1 = ((((!((map__29471 == null)))?(((((map__29471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29471):map__29471);
var opts = map__29471__$1;
var before_jsload = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29472 = p__29470;
var map__29472__$1 = ((((!((map__29472 == null)))?(((((map__29472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29472):map__29472);
var msg = map__29472__$1;
var files = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29626){
var state_val_29627 = (state_29626[(1)]);
if((state_val_29627 === (7))){
var inst_29486 = (state_29626[(7)]);
var inst_29487 = (state_29626[(8)]);
var inst_29488 = (state_29626[(9)]);
var inst_29489 = (state_29626[(10)]);
var inst_29494 = cljs.core._nth.call(null,inst_29487,inst_29489);
var inst_29495 = figwheel.client.file_reloading.eval_body.call(null,inst_29494,opts);
var inst_29496 = (inst_29489 + (1));
var tmp29628 = inst_29486;
var tmp29629 = inst_29487;
var tmp29630 = inst_29488;
var inst_29486__$1 = tmp29628;
var inst_29487__$1 = tmp29629;
var inst_29488__$1 = tmp29630;
var inst_29489__$1 = inst_29496;
var state_29626__$1 = (function (){var statearr_29631 = state_29626;
(statearr_29631[(7)] = inst_29486__$1);

(statearr_29631[(8)] = inst_29487__$1);

(statearr_29631[(9)] = inst_29488__$1);

(statearr_29631[(10)] = inst_29489__$1);

(statearr_29631[(11)] = inst_29495);

return statearr_29631;
})();
var statearr_29632_29715 = state_29626__$1;
(statearr_29632_29715[(2)] = null);

(statearr_29632_29715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (20))){
var inst_29529 = (state_29626[(12)]);
var inst_29537 = figwheel.client.file_reloading.sort_files.call(null,inst_29529);
var state_29626__$1 = state_29626;
var statearr_29633_29716 = state_29626__$1;
(statearr_29633_29716[(2)] = inst_29537);

(statearr_29633_29716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (27))){
var state_29626__$1 = state_29626;
var statearr_29634_29717 = state_29626__$1;
(statearr_29634_29717[(2)] = null);

(statearr_29634_29717[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (1))){
var inst_29478 = (state_29626[(13)]);
var inst_29475 = before_jsload.call(null,files);
var inst_29476 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29477 = (function (){return ((function (inst_29478,inst_29475,inst_29476,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29466_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29466_SHARP_);
});
;})(inst_29478,inst_29475,inst_29476,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29478__$1 = cljs.core.filter.call(null,inst_29477,files);
var inst_29479 = cljs.core.not_empty.call(null,inst_29478__$1);
var state_29626__$1 = (function (){var statearr_29635 = state_29626;
(statearr_29635[(14)] = inst_29475);

(statearr_29635[(15)] = inst_29476);

(statearr_29635[(13)] = inst_29478__$1);

return statearr_29635;
})();
if(cljs.core.truth_(inst_29479)){
var statearr_29636_29718 = state_29626__$1;
(statearr_29636_29718[(1)] = (2));

} else {
var statearr_29637_29719 = state_29626__$1;
(statearr_29637_29719[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (24))){
var state_29626__$1 = state_29626;
var statearr_29638_29720 = state_29626__$1;
(statearr_29638_29720[(2)] = null);

(statearr_29638_29720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (39))){
var inst_29579 = (state_29626[(16)]);
var state_29626__$1 = state_29626;
var statearr_29639_29721 = state_29626__$1;
(statearr_29639_29721[(2)] = inst_29579);

(statearr_29639_29721[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (46))){
var inst_29621 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29640_29722 = state_29626__$1;
(statearr_29640_29722[(2)] = inst_29621);

(statearr_29640_29722[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (4))){
var inst_29523 = (state_29626[(2)]);
var inst_29524 = cljs.core.List.EMPTY;
var inst_29525 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29524);
var inst_29526 = (function (){return ((function (inst_29523,inst_29524,inst_29525,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29467_SHARP_){
var and__3910__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29467_SHARP_);
if(cljs.core.truth_(and__3910__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29467_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29467_SHARP_))));
} else {
return and__3910__auto__;
}
});
;})(inst_29523,inst_29524,inst_29525,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29527 = cljs.core.filter.call(null,inst_29526,files);
var inst_29528 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29529 = cljs.core.concat.call(null,inst_29527,inst_29528);
var state_29626__$1 = (function (){var statearr_29641 = state_29626;
(statearr_29641[(12)] = inst_29529);

(statearr_29641[(17)] = inst_29525);

(statearr_29641[(18)] = inst_29523);

return statearr_29641;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29642_29723 = state_29626__$1;
(statearr_29642_29723[(1)] = (16));

} else {
var statearr_29643_29724 = state_29626__$1;
(statearr_29643_29724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (15))){
var inst_29513 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29644_29725 = state_29626__$1;
(statearr_29644_29725[(2)] = inst_29513);

(statearr_29644_29725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (21))){
var inst_29539 = (state_29626[(19)]);
var inst_29539__$1 = (state_29626[(2)]);
var inst_29540 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29539__$1);
var state_29626__$1 = (function (){var statearr_29645 = state_29626;
(statearr_29645[(19)] = inst_29539__$1);

return statearr_29645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29626__$1,(22),inst_29540);
} else {
if((state_val_29627 === (31))){
var inst_29624 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29626__$1,inst_29624);
} else {
if((state_val_29627 === (32))){
var inst_29579 = (state_29626[(16)]);
var inst_29584 = inst_29579.cljs$lang$protocol_mask$partition0$;
var inst_29585 = (inst_29584 & (64));
var inst_29586 = inst_29579.cljs$core$ISeq$;
var inst_29587 = (cljs.core.PROTOCOL_SENTINEL === inst_29586);
var inst_29588 = ((inst_29585) || (inst_29587));
var state_29626__$1 = state_29626;
if(cljs.core.truth_(inst_29588)){
var statearr_29646_29726 = state_29626__$1;
(statearr_29646_29726[(1)] = (35));

} else {
var statearr_29647_29727 = state_29626__$1;
(statearr_29647_29727[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (40))){
var inst_29601 = (state_29626[(20)]);
var inst_29600 = (state_29626[(2)]);
var inst_29601__$1 = cljs.core.get.call(null,inst_29600,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29602 = cljs.core.get.call(null,inst_29600,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29603 = cljs.core.not_empty.call(null,inst_29601__$1);
var state_29626__$1 = (function (){var statearr_29648 = state_29626;
(statearr_29648[(21)] = inst_29602);

(statearr_29648[(20)] = inst_29601__$1);

return statearr_29648;
})();
if(cljs.core.truth_(inst_29603)){
var statearr_29649_29728 = state_29626__$1;
(statearr_29649_29728[(1)] = (41));

} else {
var statearr_29650_29729 = state_29626__$1;
(statearr_29650_29729[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (33))){
var state_29626__$1 = state_29626;
var statearr_29651_29730 = state_29626__$1;
(statearr_29651_29730[(2)] = false);

(statearr_29651_29730[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (13))){
var inst_29499 = (state_29626[(22)]);
var inst_29503 = cljs.core.chunk_first.call(null,inst_29499);
var inst_29504 = cljs.core.chunk_rest.call(null,inst_29499);
var inst_29505 = cljs.core.count.call(null,inst_29503);
var inst_29486 = inst_29504;
var inst_29487 = inst_29503;
var inst_29488 = inst_29505;
var inst_29489 = (0);
var state_29626__$1 = (function (){var statearr_29652 = state_29626;
(statearr_29652[(7)] = inst_29486);

(statearr_29652[(8)] = inst_29487);

(statearr_29652[(9)] = inst_29488);

(statearr_29652[(10)] = inst_29489);

return statearr_29652;
})();
var statearr_29653_29731 = state_29626__$1;
(statearr_29653_29731[(2)] = null);

(statearr_29653_29731[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (22))){
var inst_29547 = (state_29626[(23)]);
var inst_29539 = (state_29626[(19)]);
var inst_29542 = (state_29626[(24)]);
var inst_29543 = (state_29626[(25)]);
var inst_29542__$1 = (state_29626[(2)]);
var inst_29543__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29542__$1);
var inst_29544 = (function (){var all_files = inst_29539;
var res_SINGLEQUOTE_ = inst_29542__$1;
var res = inst_29543__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29547,inst_29539,inst_29542,inst_29543,inst_29542__$1,inst_29543__$1,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29468_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29468_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29547,inst_29539,inst_29542,inst_29543,inst_29542__$1,inst_29543__$1,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29545 = cljs.core.filter.call(null,inst_29544,inst_29542__$1);
var inst_29546 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29547__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29546);
var inst_29548 = cljs.core.not_empty.call(null,inst_29547__$1);
var state_29626__$1 = (function (){var statearr_29654 = state_29626;
(statearr_29654[(23)] = inst_29547__$1);

(statearr_29654[(24)] = inst_29542__$1);

(statearr_29654[(25)] = inst_29543__$1);

(statearr_29654[(26)] = inst_29545);

return statearr_29654;
})();
if(cljs.core.truth_(inst_29548)){
var statearr_29655_29732 = state_29626__$1;
(statearr_29655_29732[(1)] = (23));

} else {
var statearr_29656_29733 = state_29626__$1;
(statearr_29656_29733[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (36))){
var state_29626__$1 = state_29626;
var statearr_29657_29734 = state_29626__$1;
(statearr_29657_29734[(2)] = false);

(statearr_29657_29734[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (41))){
var inst_29601 = (state_29626[(20)]);
var inst_29605 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29606 = cljs.core.map.call(null,inst_29605,inst_29601);
var inst_29607 = cljs.core.pr_str.call(null,inst_29606);
var inst_29608 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29607)].join('');
var inst_29609 = figwheel.client.utils.log.call(null,inst_29608);
var state_29626__$1 = state_29626;
var statearr_29658_29735 = state_29626__$1;
(statearr_29658_29735[(2)] = inst_29609);

(statearr_29658_29735[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (43))){
var inst_29602 = (state_29626[(21)]);
var inst_29612 = (state_29626[(2)]);
var inst_29613 = cljs.core.not_empty.call(null,inst_29602);
var state_29626__$1 = (function (){var statearr_29659 = state_29626;
(statearr_29659[(27)] = inst_29612);

return statearr_29659;
})();
if(cljs.core.truth_(inst_29613)){
var statearr_29660_29736 = state_29626__$1;
(statearr_29660_29736[(1)] = (44));

} else {
var statearr_29661_29737 = state_29626__$1;
(statearr_29661_29737[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (29))){
var inst_29547 = (state_29626[(23)]);
var inst_29539 = (state_29626[(19)]);
var inst_29542 = (state_29626[(24)]);
var inst_29543 = (state_29626[(25)]);
var inst_29579 = (state_29626[(16)]);
var inst_29545 = (state_29626[(26)]);
var inst_29575 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29578 = (function (){var all_files = inst_29539;
var res_SINGLEQUOTE_ = inst_29542;
var res = inst_29543;
var files_not_loaded = inst_29545;
var dependencies_that_loaded = inst_29547;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29579,inst_29545,inst_29575,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29577){
var map__29662 = p__29577;
var map__29662__$1 = ((((!((map__29662 == null)))?(((((map__29662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29662):map__29662);
var namespace = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29579,inst_29545,inst_29575,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29579__$1 = cljs.core.group_by.call(null,inst_29578,inst_29545);
var inst_29581 = (inst_29579__$1 == null);
var inst_29582 = cljs.core.not.call(null,inst_29581);
var state_29626__$1 = (function (){var statearr_29664 = state_29626;
(statearr_29664[(28)] = inst_29575);

(statearr_29664[(16)] = inst_29579__$1);

return statearr_29664;
})();
if(inst_29582){
var statearr_29665_29738 = state_29626__$1;
(statearr_29665_29738[(1)] = (32));

} else {
var statearr_29666_29739 = state_29626__$1;
(statearr_29666_29739[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (44))){
var inst_29602 = (state_29626[(21)]);
var inst_29615 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29602);
var inst_29616 = cljs.core.pr_str.call(null,inst_29615);
var inst_29617 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29616)].join('');
var inst_29618 = figwheel.client.utils.log.call(null,inst_29617);
var state_29626__$1 = state_29626;
var statearr_29667_29740 = state_29626__$1;
(statearr_29667_29740[(2)] = inst_29618);

(statearr_29667_29740[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (6))){
var inst_29520 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29668_29741 = state_29626__$1;
(statearr_29668_29741[(2)] = inst_29520);

(statearr_29668_29741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (28))){
var inst_29545 = (state_29626[(26)]);
var inst_29572 = (state_29626[(2)]);
var inst_29573 = cljs.core.not_empty.call(null,inst_29545);
var state_29626__$1 = (function (){var statearr_29669 = state_29626;
(statearr_29669[(29)] = inst_29572);

return statearr_29669;
})();
if(cljs.core.truth_(inst_29573)){
var statearr_29670_29742 = state_29626__$1;
(statearr_29670_29742[(1)] = (29));

} else {
var statearr_29671_29743 = state_29626__$1;
(statearr_29671_29743[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (25))){
var inst_29543 = (state_29626[(25)]);
var inst_29559 = (state_29626[(2)]);
var inst_29560 = cljs.core.not_empty.call(null,inst_29543);
var state_29626__$1 = (function (){var statearr_29672 = state_29626;
(statearr_29672[(30)] = inst_29559);

return statearr_29672;
})();
if(cljs.core.truth_(inst_29560)){
var statearr_29673_29744 = state_29626__$1;
(statearr_29673_29744[(1)] = (26));

} else {
var statearr_29674_29745 = state_29626__$1;
(statearr_29674_29745[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (34))){
var inst_29595 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
if(cljs.core.truth_(inst_29595)){
var statearr_29675_29746 = state_29626__$1;
(statearr_29675_29746[(1)] = (38));

} else {
var statearr_29676_29747 = state_29626__$1;
(statearr_29676_29747[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (17))){
var state_29626__$1 = state_29626;
var statearr_29677_29748 = state_29626__$1;
(statearr_29677_29748[(2)] = recompile_dependents);

(statearr_29677_29748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (3))){
var state_29626__$1 = state_29626;
var statearr_29678_29749 = state_29626__$1;
(statearr_29678_29749[(2)] = null);

(statearr_29678_29749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (12))){
var inst_29516 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29679_29750 = state_29626__$1;
(statearr_29679_29750[(2)] = inst_29516);

(statearr_29679_29750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (2))){
var inst_29478 = (state_29626[(13)]);
var inst_29485 = cljs.core.seq.call(null,inst_29478);
var inst_29486 = inst_29485;
var inst_29487 = null;
var inst_29488 = (0);
var inst_29489 = (0);
var state_29626__$1 = (function (){var statearr_29680 = state_29626;
(statearr_29680[(7)] = inst_29486);

(statearr_29680[(8)] = inst_29487);

(statearr_29680[(9)] = inst_29488);

(statearr_29680[(10)] = inst_29489);

return statearr_29680;
})();
var statearr_29681_29751 = state_29626__$1;
(statearr_29681_29751[(2)] = null);

(statearr_29681_29751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (23))){
var inst_29547 = (state_29626[(23)]);
var inst_29539 = (state_29626[(19)]);
var inst_29542 = (state_29626[(24)]);
var inst_29543 = (state_29626[(25)]);
var inst_29545 = (state_29626[(26)]);
var inst_29550 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29552 = (function (){var all_files = inst_29539;
var res_SINGLEQUOTE_ = inst_29542;
var res = inst_29543;
var files_not_loaded = inst_29545;
var dependencies_that_loaded = inst_29547;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29545,inst_29550,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29551){
var map__29682 = p__29551;
var map__29682__$1 = ((((!((map__29682 == null)))?(((((map__29682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29682):map__29682);
var request_url = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29545,inst_29550,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29553 = cljs.core.reverse.call(null,inst_29547);
var inst_29554 = cljs.core.map.call(null,inst_29552,inst_29553);
var inst_29555 = cljs.core.pr_str.call(null,inst_29554);
var inst_29556 = figwheel.client.utils.log.call(null,inst_29555);
var state_29626__$1 = (function (){var statearr_29684 = state_29626;
(statearr_29684[(31)] = inst_29550);

return statearr_29684;
})();
var statearr_29685_29752 = state_29626__$1;
(statearr_29685_29752[(2)] = inst_29556);

(statearr_29685_29752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (35))){
var state_29626__$1 = state_29626;
var statearr_29686_29753 = state_29626__$1;
(statearr_29686_29753[(2)] = true);

(statearr_29686_29753[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (19))){
var inst_29529 = (state_29626[(12)]);
var inst_29535 = figwheel.client.file_reloading.expand_files.call(null,inst_29529);
var state_29626__$1 = state_29626;
var statearr_29687_29754 = state_29626__$1;
(statearr_29687_29754[(2)] = inst_29535);

(statearr_29687_29754[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (11))){
var state_29626__$1 = state_29626;
var statearr_29688_29755 = state_29626__$1;
(statearr_29688_29755[(2)] = null);

(statearr_29688_29755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (9))){
var inst_29518 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29689_29756 = state_29626__$1;
(statearr_29689_29756[(2)] = inst_29518);

(statearr_29689_29756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (5))){
var inst_29488 = (state_29626[(9)]);
var inst_29489 = (state_29626[(10)]);
var inst_29491 = (inst_29489 < inst_29488);
var inst_29492 = inst_29491;
var state_29626__$1 = state_29626;
if(cljs.core.truth_(inst_29492)){
var statearr_29690_29757 = state_29626__$1;
(statearr_29690_29757[(1)] = (7));

} else {
var statearr_29691_29758 = state_29626__$1;
(statearr_29691_29758[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (14))){
var inst_29499 = (state_29626[(22)]);
var inst_29508 = cljs.core.first.call(null,inst_29499);
var inst_29509 = figwheel.client.file_reloading.eval_body.call(null,inst_29508,opts);
var inst_29510 = cljs.core.next.call(null,inst_29499);
var inst_29486 = inst_29510;
var inst_29487 = null;
var inst_29488 = (0);
var inst_29489 = (0);
var state_29626__$1 = (function (){var statearr_29692 = state_29626;
(statearr_29692[(7)] = inst_29486);

(statearr_29692[(8)] = inst_29487);

(statearr_29692[(9)] = inst_29488);

(statearr_29692[(10)] = inst_29489);

(statearr_29692[(32)] = inst_29509);

return statearr_29692;
})();
var statearr_29693_29759 = state_29626__$1;
(statearr_29693_29759[(2)] = null);

(statearr_29693_29759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (45))){
var state_29626__$1 = state_29626;
var statearr_29694_29760 = state_29626__$1;
(statearr_29694_29760[(2)] = null);

(statearr_29694_29760[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (26))){
var inst_29547 = (state_29626[(23)]);
var inst_29539 = (state_29626[(19)]);
var inst_29542 = (state_29626[(24)]);
var inst_29543 = (state_29626[(25)]);
var inst_29545 = (state_29626[(26)]);
var inst_29562 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29564 = (function (){var all_files = inst_29539;
var res_SINGLEQUOTE_ = inst_29542;
var res = inst_29543;
var files_not_loaded = inst_29545;
var dependencies_that_loaded = inst_29547;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29545,inst_29562,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29563){
var map__29695 = p__29563;
var map__29695__$1 = ((((!((map__29695 == null)))?(((((map__29695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695):map__29695);
var namespace = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29545,inst_29562,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29565 = cljs.core.map.call(null,inst_29564,inst_29543);
var inst_29566 = cljs.core.pr_str.call(null,inst_29565);
var inst_29567 = figwheel.client.utils.log.call(null,inst_29566);
var inst_29568 = (function (){var all_files = inst_29539;
var res_SINGLEQUOTE_ = inst_29542;
var res = inst_29543;
var files_not_loaded = inst_29545;
var dependencies_that_loaded = inst_29547;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29545,inst_29562,inst_29564,inst_29565,inst_29566,inst_29567,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29547,inst_29539,inst_29542,inst_29543,inst_29545,inst_29562,inst_29564,inst_29565,inst_29566,inst_29567,state_val_29627,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29569 = setTimeout(inst_29568,(10));
var state_29626__$1 = (function (){var statearr_29697 = state_29626;
(statearr_29697[(33)] = inst_29567);

(statearr_29697[(34)] = inst_29562);

return statearr_29697;
})();
var statearr_29698_29761 = state_29626__$1;
(statearr_29698_29761[(2)] = inst_29569);

(statearr_29698_29761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (16))){
var state_29626__$1 = state_29626;
var statearr_29699_29762 = state_29626__$1;
(statearr_29699_29762[(2)] = reload_dependents);

(statearr_29699_29762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (38))){
var inst_29579 = (state_29626[(16)]);
var inst_29597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29579);
var state_29626__$1 = state_29626;
var statearr_29700_29763 = state_29626__$1;
(statearr_29700_29763[(2)] = inst_29597);

(statearr_29700_29763[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (30))){
var state_29626__$1 = state_29626;
var statearr_29701_29764 = state_29626__$1;
(statearr_29701_29764[(2)] = null);

(statearr_29701_29764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (10))){
var inst_29499 = (state_29626[(22)]);
var inst_29501 = cljs.core.chunked_seq_QMARK_.call(null,inst_29499);
var state_29626__$1 = state_29626;
if(inst_29501){
var statearr_29702_29765 = state_29626__$1;
(statearr_29702_29765[(1)] = (13));

} else {
var statearr_29703_29766 = state_29626__$1;
(statearr_29703_29766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (18))){
var inst_29533 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
if(cljs.core.truth_(inst_29533)){
var statearr_29704_29767 = state_29626__$1;
(statearr_29704_29767[(1)] = (19));

} else {
var statearr_29705_29768 = state_29626__$1;
(statearr_29705_29768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (42))){
var state_29626__$1 = state_29626;
var statearr_29706_29769 = state_29626__$1;
(statearr_29706_29769[(2)] = null);

(statearr_29706_29769[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (37))){
var inst_29592 = (state_29626[(2)]);
var state_29626__$1 = state_29626;
var statearr_29707_29770 = state_29626__$1;
(statearr_29707_29770[(2)] = inst_29592);

(statearr_29707_29770[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29627 === (8))){
var inst_29486 = (state_29626[(7)]);
var inst_29499 = (state_29626[(22)]);
var inst_29499__$1 = cljs.core.seq.call(null,inst_29486);
var state_29626__$1 = (function (){var statearr_29708 = state_29626;
(statearr_29708[(22)] = inst_29499__$1);

return statearr_29708;
})();
if(inst_29499__$1){
var statearr_29709_29771 = state_29626__$1;
(statearr_29709_29771[(1)] = (10));

} else {
var statearr_29710_29772 = state_29626__$1;
(statearr_29710_29772[(1)] = (11));

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
});})(c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25889__auto__,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto____0 = (function (){
var statearr_29711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29711[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto__);

(statearr_29711[(1)] = (1));

return statearr_29711;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto____1 = (function (state_29626){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_29626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e29712){if((e29712 instanceof Object)){
var ex__25893__auto__ = e29712;
var statearr_29713_29773 = state_29626;
(statearr_29713_29773[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29774 = state_29626;
state_29626 = G__29774;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto__ = function(state_29626){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto____1.call(this,state_29626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25981__auto__ = (function (){var statearr_29714 = f__25980__auto__.call(null);
(statearr_29714[(6)] = c__25979__auto__);

return statearr_29714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__,map__29471,map__29471__$1,opts,before_jsload,on_jsload,reload_dependents,map__29472,map__29472__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25979__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29777,link){
var map__29778 = p__29777;
var map__29778__$1 = ((((!((map__29778 == null)))?(((((map__29778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29778):map__29778);
var file = cljs.core.get.call(null,map__29778__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29778,map__29778__$1,file){
return (function (p1__29775_SHARP_,p2__29776_SHARP_){
if(cljs.core._EQ_.call(null,p1__29775_SHARP_,p2__29776_SHARP_)){
return p1__29775_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29778,map__29778__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29781){
var map__29782 = p__29781;
var map__29782__$1 = ((((!((map__29782 == null)))?(((((map__29782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29782):map__29782);
var match_length = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29780_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29780_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29784_SHARP_,p2__29785_SHARP_){
return cljs.core.assoc.call(null,p1__29784_SHARP_,cljs.core.get.call(null,p2__29785_SHARP_,key),p2__29785_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29786 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29786);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29786);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29787,p__29788){
var map__29789 = p__29787;
var map__29789__$1 = ((((!((map__29789 == null)))?(((((map__29789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29789):map__29789);
var on_cssload = cljs.core.get.call(null,map__29789__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29790 = p__29788;
var map__29790__$1 = ((((!((map__29790 == null)))?(((((map__29790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29790):map__29790);
var files_msg = map__29790__$1;
var files = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521885155267
