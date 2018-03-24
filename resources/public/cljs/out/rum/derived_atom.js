// Compiled by ClojureScript 1.10.217 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__22154 = arguments.length;
switch (G__22154) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__22155 = opts;
var map__22155__$1 = ((((!((map__22155 == null)))?(((((map__22155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22155):map__22155);
var ref = cljs.core.get.call(null,map__22155__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__22155__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__22157 = cljs.core.count.call(null,refs);
switch (G__22157) {
case (1):
var vec__22158 = refs;
var a = cljs.core.nth.call(null,vec__22158,(0),null);
return ((function (vec__22158,a,G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__22158,a,G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__22161 = refs;
var a = cljs.core.nth.call(null,vec__22161,(0),null);
var b = cljs.core.nth.call(null,vec__22161,(1),null);
return ((function (vec__22161,a,b,G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__22161,a,b,G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__22164 = refs;
var a = cljs.core.nth.call(null,vec__22164,(0),null);
var b = cljs.core.nth.call(null,vec__22164,(1),null);
var c = cljs.core.nth.call(null,vec__22164,(2),null);
return ((function (vec__22164,a,b,c,G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__22164,a,b,c,G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__22157,map__22155,map__22155__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__22167 = ref;
cljs.core.reset_BANG_.call(null,G__22167,recalc.call(null));

return G__22167;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__22155,map__22155__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__22155,map__22155__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__22155,map__22155__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__22155,map__22155__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__22168_22174 = cljs.core.seq.call(null,refs);
var chunk__22169_22175 = null;
var count__22170_22176 = (0);
var i__22171_22177 = (0);
while(true){
if((i__22171_22177 < count__22170_22176)){
var ref_22178__$1 = cljs.core._nth.call(null,chunk__22169_22175,i__22171_22177);
cljs.core.add_watch.call(null,ref_22178__$1,key,watch);


var G__22179 = seq__22168_22174;
var G__22180 = chunk__22169_22175;
var G__22181 = count__22170_22176;
var G__22182 = (i__22171_22177 + (1));
seq__22168_22174 = G__22179;
chunk__22169_22175 = G__22180;
count__22170_22176 = G__22181;
i__22171_22177 = G__22182;
continue;
} else {
var temp__5457__auto___22183 = cljs.core.seq.call(null,seq__22168_22174);
if(temp__5457__auto___22183){
var seq__22168_22184__$1 = temp__5457__auto___22183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22168_22184__$1)){
var c__4318__auto___22185 = cljs.core.chunk_first.call(null,seq__22168_22184__$1);
var G__22186 = cljs.core.chunk_rest.call(null,seq__22168_22184__$1);
var G__22187 = c__4318__auto___22185;
var G__22188 = cljs.core.count.call(null,c__4318__auto___22185);
var G__22189 = (0);
seq__22168_22174 = G__22186;
chunk__22169_22175 = G__22187;
count__22170_22176 = G__22188;
i__22171_22177 = G__22189;
continue;
} else {
var ref_22190__$1 = cljs.core.first.call(null,seq__22168_22184__$1);
cljs.core.add_watch.call(null,ref_22190__$1,key,watch);


var G__22191 = cljs.core.next.call(null,seq__22168_22184__$1);
var G__22192 = null;
var G__22193 = (0);
var G__22194 = (0);
seq__22168_22174 = G__22191;
chunk__22169_22175 = G__22192;
count__22170_22176 = G__22193;
i__22171_22177 = G__22194;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1521885144637
