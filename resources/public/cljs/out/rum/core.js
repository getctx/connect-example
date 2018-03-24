// Compiled by ClojureScript 1.10.217 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__24472 = cljs.core.seq.call(null,props);
var chunk__24474 = null;
var count__24475 = (0);
var i__24476 = (0);
while(true){
if((i__24476 < count__24475)){
var vec__24478 = cljs.core._nth.call(null,chunk__24474,i__24476);
var k = cljs.core.nth.call(null,vec__24478,(0),null);
var v = cljs.core.nth.call(null,vec__24478,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24484 = seq__24472;
var G__24485 = chunk__24474;
var G__24486 = count__24475;
var G__24487 = (i__24476 + (1));
seq__24472 = G__24484;
chunk__24474 = G__24485;
count__24475 = G__24486;
i__24476 = G__24487;
continue;
} else {
var G__24488 = seq__24472;
var G__24489 = chunk__24474;
var G__24490 = count__24475;
var G__24491 = (i__24476 + (1));
seq__24472 = G__24488;
chunk__24474 = G__24489;
count__24475 = G__24490;
i__24476 = G__24491;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24472);
if(temp__5457__auto__){
var seq__24472__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24472__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__24472__$1);
var G__24492 = cljs.core.chunk_rest.call(null,seq__24472__$1);
var G__24493 = c__4318__auto__;
var G__24494 = cljs.core.count.call(null,c__4318__auto__);
var G__24495 = (0);
seq__24472 = G__24492;
chunk__24474 = G__24493;
count__24475 = G__24494;
i__24476 = G__24495;
continue;
} else {
var vec__24481 = cljs.core.first.call(null,seq__24472__$1);
var k = cljs.core.nth.call(null,vec__24481,(0),null);
var v = cljs.core.nth.call(null,vec__24481,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24496 = cljs.core.next.call(null,seq__24472__$1);
var G__24497 = null;
var G__24498 = (0);
var G__24499 = (0);
seq__24472 = G__24496;
chunk__24474 = G__24497;
count__24475 = G__24498;
i__24476 = G__24499;
continue;
} else {
var G__24500 = cljs.core.next.call(null,seq__24472__$1);
var G__24501 = null;
var G__24502 = (0);
var G__24503 = (0);
seq__24472 = G__24500;
chunk__24474 = G__24501;
count__24475 = G__24502;
i__24476 = G__24503;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__24505_SHARP_,p2__24504_SHARP_){
return p2__24504_SHARP_.call(null,p1__24505_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24507_SHARP_,p2__24506_SHARP_){
return p2__24506_SHARP_.call(null,old_state,p1__24507_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3921__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24508_SHARP_){
return p1__24508_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__24510 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24510,(0),null);
var next_state = cljs.core.nth.call(null,vec__24510,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24509_SHARP_){
return p1__24509_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__24513__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__24513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24514__i = 0, G__24514__a = new Array(arguments.length -  0);
while (G__24514__i < G__24514__a.length) {G__24514__a[G__24514__i] = arguments[G__24514__i + 0]; ++G__24514__i;}
  args = new cljs.core.IndexedSeq(G__24514__a,0,null);
} 
return G__24513__delegate.call(this,args);};
G__24513.cljs$lang$maxFixedArity = 0;
G__24513.cljs$lang$applyTo = (function (arglist__24515){
var args = cljs.core.seq(arglist__24515);
return G__24513__delegate(args);
});
G__24513.cljs$core$IFn$_invoke$arity$variadic = G__24513__delegate;
return G__24513;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__24516__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__24516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24517__i = 0, G__24517__a = new Array(arguments.length -  0);
while (G__24517__i < G__24517__a.length) {G__24517__a[G__24517__i] = arguments[G__24517__i + 0]; ++G__24517__i;}
  args = new cljs.core.IndexedSeq(G__24517__a,0,null);
} 
return G__24516__delegate.call(this,args);};
G__24516.cljs$lang$maxFixedArity = 0;
G__24516.cljs$lang$applyTo = (function (arglist__24518){
var args = cljs.core.seq(arglist__24518);
return G__24516__delegate(args);
});
G__24516.cljs$core$IFn$_invoke$arity$variadic = G__24516__delegate;
return G__24516;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__24519__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__24519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24520__i = 0, G__24520__a = new Array(arguments.length -  0);
while (G__24520__i < G__24520__a.length) {G__24520__a[G__24520__i] = arguments[G__24520__i + 0]; ++G__24520__i;}
  args = new cljs.core.IndexedSeq(G__24520__a,0,null);
} 
return G__24519__delegate.call(this,args);};
G__24519.cljs$lang$maxFixedArity = 0;
G__24519.cljs$lang$applyTo = (function (arglist__24521){
var args = cljs.core.seq(arglist__24521);
return G__24519__delegate(args);
});
G__24519.cljs$core$IFn$_invoke$arity$variadic = G__24519__delegate;
return G__24519;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3921__auto__ = (function (){var and__3910__auto__ = typeof window !== 'undefined';
if(and__3910__auto__){
var or__3921__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
var or__3921__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3921__auto____$1)){
return or__3921__auto____$1;
} else {
var or__3921__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3921__auto____$2)){
return or__3921__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3910__auto__;
}
})();
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return ((function (or__3921__auto__){
return (function (p1__24522_SHARP_){
return setTimeout(p1__24522_SHARP_,(16));
});
;})(or__3921__auto__))
}
})();
rum.core.batch = (function (){var or__3921__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
var or__3921__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3921__auto____$1)){
return or__3921__auto____$1;
} else {
return ((function (or__3921__auto____$1,or__3921__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3921__auto____$1,or__3921__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__24523 = cljs.core.seq.call(null,queue);
var chunk__24525 = null;
var count__24526 = (0);
var i__24527 = (0);
while(true){
if((i__24527 < count__24526)){
var comp = cljs.core._nth.call(null,chunk__24525,i__24527);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24529 = seq__24523;
var G__24530 = chunk__24525;
var G__24531 = count__24526;
var G__24532 = (i__24527 + (1));
seq__24523 = G__24529;
chunk__24525 = G__24530;
count__24526 = G__24531;
i__24527 = G__24532;
continue;
} else {
var G__24533 = seq__24523;
var G__24534 = chunk__24525;
var G__24535 = count__24526;
var G__24536 = (i__24527 + (1));
seq__24523 = G__24533;
chunk__24525 = G__24534;
count__24526 = G__24535;
i__24527 = G__24536;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24523);
if(temp__5457__auto__){
var seq__24523__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24523__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__24523__$1);
var G__24537 = cljs.core.chunk_rest.call(null,seq__24523__$1);
var G__24538 = c__4318__auto__;
var G__24539 = cljs.core.count.call(null,c__4318__auto__);
var G__24540 = (0);
seq__24523 = G__24537;
chunk__24525 = G__24538;
count__24526 = G__24539;
i__24527 = G__24540;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24523__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24541 = cljs.core.next.call(null,seq__24523__$1);
var G__24542 = null;
var G__24543 = (0);
var G__24544 = (0);
seq__24523 = G__24541;
chunk__24525 = G__24542;
count__24526 = G__24543;
i__24527 = G__24544;
continue;
} else {
var G__24545 = cljs.core.next.call(null,seq__24523__$1);
var G__24546 = null;
var G__24547 = (0);
var G__24548 = (0);
seq__24523 = G__24545;
chunk__24525 = G__24546;
count__24526 = G__24547;
i__24527 = G__24548;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__24550 = arguments.length;
switch (G__24550) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24552 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24553 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24553,(0),null);
var next_state = cljs.core.nth.call(null,vec__24553,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24556_24568 = cljs.core.seq.call(null,old_reactions);
var chunk__24557_24569 = null;
var count__24558_24570 = (0);
var i__24559_24571 = (0);
while(true){
if((i__24559_24571 < count__24558_24570)){
var ref_24572 = cljs.core._nth.call(null,chunk__24557_24569,i__24559_24571);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24572)){
} else {
cljs.core.remove_watch.call(null,ref_24572,key);
}


var G__24573 = seq__24556_24568;
var G__24574 = chunk__24557_24569;
var G__24575 = count__24558_24570;
var G__24576 = (i__24559_24571 + (1));
seq__24556_24568 = G__24573;
chunk__24557_24569 = G__24574;
count__24558_24570 = G__24575;
i__24559_24571 = G__24576;
continue;
} else {
var temp__5457__auto___24577 = cljs.core.seq.call(null,seq__24556_24568);
if(temp__5457__auto___24577){
var seq__24556_24578__$1 = temp__5457__auto___24577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24556_24578__$1)){
var c__4318__auto___24579 = cljs.core.chunk_first.call(null,seq__24556_24578__$1);
var G__24580 = cljs.core.chunk_rest.call(null,seq__24556_24578__$1);
var G__24581 = c__4318__auto___24579;
var G__24582 = cljs.core.count.call(null,c__4318__auto___24579);
var G__24583 = (0);
seq__24556_24568 = G__24580;
chunk__24557_24569 = G__24581;
count__24558_24570 = G__24582;
i__24559_24571 = G__24583;
continue;
} else {
var ref_24584 = cljs.core.first.call(null,seq__24556_24578__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24584)){
} else {
cljs.core.remove_watch.call(null,ref_24584,key);
}


var G__24585 = cljs.core.next.call(null,seq__24556_24578__$1);
var G__24586 = null;
var G__24587 = (0);
var G__24588 = (0);
seq__24556_24568 = G__24585;
chunk__24557_24569 = G__24586;
count__24558_24570 = G__24587;
i__24559_24571 = G__24588;
continue;
}
} else {
}
}
break;
}

var seq__24560_24589 = cljs.core.seq.call(null,new_reactions);
var chunk__24561_24590 = null;
var count__24562_24591 = (0);
var i__24563_24592 = (0);
while(true){
if((i__24563_24592 < count__24562_24591)){
var ref_24593 = cljs.core._nth.call(null,chunk__24561_24590,i__24563_24592);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24593)){
} else {
cljs.core.add_watch.call(null,ref_24593,key,((function (seq__24560_24589,chunk__24561_24590,count__24562_24591,i__24563_24592,ref_24593,comp,old_reactions,vec__24553,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24552){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24560_24589,chunk__24561_24590,count__24562_24591,i__24563_24592,ref_24593,comp,old_reactions,vec__24553,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24552))
);
}


var G__24594 = seq__24560_24589;
var G__24595 = chunk__24561_24590;
var G__24596 = count__24562_24591;
var G__24597 = (i__24563_24592 + (1));
seq__24560_24589 = G__24594;
chunk__24561_24590 = G__24595;
count__24562_24591 = G__24596;
i__24563_24592 = G__24597;
continue;
} else {
var temp__5457__auto___24598 = cljs.core.seq.call(null,seq__24560_24589);
if(temp__5457__auto___24598){
var seq__24560_24599__$1 = temp__5457__auto___24598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24560_24599__$1)){
var c__4318__auto___24600 = cljs.core.chunk_first.call(null,seq__24560_24599__$1);
var G__24601 = cljs.core.chunk_rest.call(null,seq__24560_24599__$1);
var G__24602 = c__4318__auto___24600;
var G__24603 = cljs.core.count.call(null,c__4318__auto___24600);
var G__24604 = (0);
seq__24560_24589 = G__24601;
chunk__24561_24590 = G__24602;
count__24562_24591 = G__24603;
i__24563_24592 = G__24604;
continue;
} else {
var ref_24605 = cljs.core.first.call(null,seq__24560_24599__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24605)){
} else {
cljs.core.add_watch.call(null,ref_24605,key,((function (seq__24560_24589,chunk__24561_24590,count__24562_24591,i__24563_24592,ref_24605,seq__24560_24599__$1,temp__5457__auto___24598,comp,old_reactions,vec__24553,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24552){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24560_24589,chunk__24561_24590,count__24562_24591,i__24563_24592,ref_24605,seq__24560_24599__$1,temp__5457__auto___24598,comp,old_reactions,vec__24553,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24552))
);
}


var G__24606 = cljs.core.next.call(null,seq__24560_24599__$1);
var G__24607 = null;
var G__24608 = (0);
var G__24609 = (0);
seq__24560_24589 = G__24606;
chunk__24561_24590 = G__24607;
count__24562_24591 = G__24608;
i__24563_24592 = G__24609;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_24552;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24610 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24564_24611 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24565_24612 = null;
var count__24566_24613 = (0);
var i__24567_24614 = (0);
while(true){
if((i__24567_24614 < count__24566_24613)){
var ref_24615 = cljs.core._nth.call(null,chunk__24565_24612,i__24567_24614);
cljs.core.remove_watch.call(null,ref_24615,key_24610);


var G__24616 = seq__24564_24611;
var G__24617 = chunk__24565_24612;
var G__24618 = count__24566_24613;
var G__24619 = (i__24567_24614 + (1));
seq__24564_24611 = G__24616;
chunk__24565_24612 = G__24617;
count__24566_24613 = G__24618;
i__24567_24614 = G__24619;
continue;
} else {
var temp__5457__auto___24620 = cljs.core.seq.call(null,seq__24564_24611);
if(temp__5457__auto___24620){
var seq__24564_24621__$1 = temp__5457__auto___24620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24564_24621__$1)){
var c__4318__auto___24622 = cljs.core.chunk_first.call(null,seq__24564_24621__$1);
var G__24623 = cljs.core.chunk_rest.call(null,seq__24564_24621__$1);
var G__24624 = c__4318__auto___24622;
var G__24625 = cljs.core.count.call(null,c__4318__auto___24622);
var G__24626 = (0);
seq__24564_24611 = G__24623;
chunk__24565_24612 = G__24624;
count__24566_24613 = G__24625;
i__24567_24614 = G__24626;
continue;
} else {
var ref_24627 = cljs.core.first.call(null,seq__24564_24621__$1);
cljs.core.remove_watch.call(null,ref_24627,key_24610);


var G__24628 = cljs.core.next.call(null,seq__24564_24621__$1);
var G__24629 = null;
var G__24630 = (0);
var G__24631 = (0);
seq__24564_24611 = G__24628;
chunk__24565_24612 = G__24629;
count__24566_24613 = G__24630;
i__24567_24614 = G__24631;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4501__auto__ = [];
var len__4498__auto___24638 = arguments.length;
var i__4499__auto___24639 = (0);
while(true){
if((i__4499__auto___24639 < len__4498__auto___24638)){
args__4501__auto__.push((arguments[i__4499__auto___24639]));

var G__24640 = (i__4499__auto___24639 + (1));
i__4499__auto___24639 = G__24640;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((2) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4502__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__24635){
var map__24636 = p__24635;
var map__24636__$1 = ((((!((map__24636 == null)))?(((((map__24636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24636):map__24636);
var options = map__24636__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq24632){
var G__24633 = cljs.core.first.call(null,seq24632);
var seq24632__$1 = cljs.core.next.call(null,seq24632);
var G__24634 = cljs.core.first.call(null,seq24632__$1);
var seq24632__$2 = cljs.core.next.call(null,seq24632__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24633,G__24634,seq24632__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4501__auto__ = [];
var len__4498__auto___24644 = arguments.length;
var i__4499__auto___24645 = (0);
while(true){
if((i__4499__auto___24645 < len__4498__auto___24644)){
args__4501__auto__.push((arguments[i__4499__auto___24645]));

var G__24646 = (i__4499__auto___24645 + (1));
i__4499__auto___24645 = G__24646;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((2) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4502__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq24641){
var G__24642 = cljs.core.first.call(null,seq24641);
var seq24641__$1 = cljs.core.next.call(null,seq24641);
var G__24643 = cljs.core.first.call(null,seq24641__$1);
var seq24641__$2 = cljs.core.next.call(null,seq24641__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24642,G__24643,seq24641__$2);
});


//# sourceMappingURL=core.js.map?rel=1521885147273
