// Compiled by ClojureScript 1.10.217 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30604){
var map__30605 = p__30604;
var map__30605__$1 = ((((!((map__30605 == null)))?(((((map__30605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30605):map__30605);
var m = map__30605__$1;
var n = cljs.core.get.call(null,map__30605__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30607_30629 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30608_30630 = null;
var count__30609_30631 = (0);
var i__30610_30632 = (0);
while(true){
if((i__30610_30632 < count__30609_30631)){
var f_30633 = cljs.core._nth.call(null,chunk__30608_30630,i__30610_30632);
cljs.core.println.call(null,"  ",f_30633);


var G__30634 = seq__30607_30629;
var G__30635 = chunk__30608_30630;
var G__30636 = count__30609_30631;
var G__30637 = (i__30610_30632 + (1));
seq__30607_30629 = G__30634;
chunk__30608_30630 = G__30635;
count__30609_30631 = G__30636;
i__30610_30632 = G__30637;
continue;
} else {
var temp__5457__auto___30638 = cljs.core.seq.call(null,seq__30607_30629);
if(temp__5457__auto___30638){
var seq__30607_30639__$1 = temp__5457__auto___30638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30607_30639__$1)){
var c__4318__auto___30640 = cljs.core.chunk_first.call(null,seq__30607_30639__$1);
var G__30641 = cljs.core.chunk_rest.call(null,seq__30607_30639__$1);
var G__30642 = c__4318__auto___30640;
var G__30643 = cljs.core.count.call(null,c__4318__auto___30640);
var G__30644 = (0);
seq__30607_30629 = G__30641;
chunk__30608_30630 = G__30642;
count__30609_30631 = G__30643;
i__30610_30632 = G__30644;
continue;
} else {
var f_30645 = cljs.core.first.call(null,seq__30607_30639__$1);
cljs.core.println.call(null,"  ",f_30645);


var G__30646 = cljs.core.next.call(null,seq__30607_30639__$1);
var G__30647 = null;
var G__30648 = (0);
var G__30649 = (0);
seq__30607_30629 = G__30646;
chunk__30608_30630 = G__30647;
count__30609_30631 = G__30648;
i__30610_30632 = G__30649;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30650 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3921__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30650);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30650)))?cljs.core.second.call(null,arglists_30650):arglists_30650));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30611_30651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30612_30652 = null;
var count__30613_30653 = (0);
var i__30614_30654 = (0);
while(true){
if((i__30614_30654 < count__30613_30653)){
var vec__30615_30655 = cljs.core._nth.call(null,chunk__30612_30652,i__30614_30654);
var name_30656 = cljs.core.nth.call(null,vec__30615_30655,(0),null);
var map__30618_30657 = cljs.core.nth.call(null,vec__30615_30655,(1),null);
var map__30618_30658__$1 = ((((!((map__30618_30657 == null)))?(((((map__30618_30657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30618_30657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30618_30657):map__30618_30657);
var doc_30659 = cljs.core.get.call(null,map__30618_30658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30660 = cljs.core.get.call(null,map__30618_30658__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30656);

cljs.core.println.call(null," ",arglists_30660);

if(cljs.core.truth_(doc_30659)){
cljs.core.println.call(null," ",doc_30659);
} else {
}


var G__30661 = seq__30611_30651;
var G__30662 = chunk__30612_30652;
var G__30663 = count__30613_30653;
var G__30664 = (i__30614_30654 + (1));
seq__30611_30651 = G__30661;
chunk__30612_30652 = G__30662;
count__30613_30653 = G__30663;
i__30614_30654 = G__30664;
continue;
} else {
var temp__5457__auto___30665 = cljs.core.seq.call(null,seq__30611_30651);
if(temp__5457__auto___30665){
var seq__30611_30666__$1 = temp__5457__auto___30665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30611_30666__$1)){
var c__4318__auto___30667 = cljs.core.chunk_first.call(null,seq__30611_30666__$1);
var G__30668 = cljs.core.chunk_rest.call(null,seq__30611_30666__$1);
var G__30669 = c__4318__auto___30667;
var G__30670 = cljs.core.count.call(null,c__4318__auto___30667);
var G__30671 = (0);
seq__30611_30651 = G__30668;
chunk__30612_30652 = G__30669;
count__30613_30653 = G__30670;
i__30614_30654 = G__30671;
continue;
} else {
var vec__30620_30672 = cljs.core.first.call(null,seq__30611_30666__$1);
var name_30673 = cljs.core.nth.call(null,vec__30620_30672,(0),null);
var map__30623_30674 = cljs.core.nth.call(null,vec__30620_30672,(1),null);
var map__30623_30675__$1 = ((((!((map__30623_30674 == null)))?(((((map__30623_30674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30623_30674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30623_30674):map__30623_30674);
var doc_30676 = cljs.core.get.call(null,map__30623_30675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30677 = cljs.core.get.call(null,map__30623_30675__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30673);

cljs.core.println.call(null," ",arglists_30677);

if(cljs.core.truth_(doc_30676)){
cljs.core.println.call(null," ",doc_30676);
} else {
}


var G__30678 = cljs.core.next.call(null,seq__30611_30666__$1);
var G__30679 = null;
var G__30680 = (0);
var G__30681 = (0);
seq__30611_30651 = G__30678;
chunk__30612_30652 = G__30679;
count__30613_30653 = G__30680;
i__30614_30654 = G__30681;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30625 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30626 = null;
var count__30627 = (0);
var i__30628 = (0);
while(true){
if((i__30628 < count__30627)){
var role = cljs.core._nth.call(null,chunk__30626,i__30628);
var temp__5457__auto___30682__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30682__$1)){
var spec_30683 = temp__5457__auto___30682__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30683));
} else {
}


var G__30684 = seq__30625;
var G__30685 = chunk__30626;
var G__30686 = count__30627;
var G__30687 = (i__30628 + (1));
seq__30625 = G__30684;
chunk__30626 = G__30685;
count__30627 = G__30686;
i__30628 = G__30687;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30625);
if(temp__5457__auto____$1){
var seq__30625__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30625__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__30625__$1);
var G__30688 = cljs.core.chunk_rest.call(null,seq__30625__$1);
var G__30689 = c__4318__auto__;
var G__30690 = cljs.core.count.call(null,c__4318__auto__);
var G__30691 = (0);
seq__30625 = G__30688;
chunk__30626 = G__30689;
count__30627 = G__30690;
i__30628 = G__30691;
continue;
} else {
var role = cljs.core.first.call(null,seq__30625__$1);
var temp__5457__auto___30692__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30692__$2)){
var spec_30693 = temp__5457__auto___30692__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30693));
} else {
}


var G__30694 = cljs.core.next.call(null,seq__30625__$1);
var G__30695 = null;
var G__30696 = (0);
var G__30697 = (0);
seq__30625 = G__30694;
chunk__30626 = G__30695;
count__30627 = G__30696;
i__30628 = G__30697;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521885158204
