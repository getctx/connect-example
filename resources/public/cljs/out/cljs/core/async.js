// Compiled by ClojureScript 1.10.217 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26039 = arguments.length;
switch (G__26039) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26040 = (function (f,blockable,meta26041){
this.f = f;
this.blockable = blockable;
this.meta26041 = meta26041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26042,meta26041__$1){
var self__ = this;
var _26042__$1 = this;
return (new cljs.core.async.t_cljs$core$async26040(self__.f,self__.blockable,meta26041__$1));
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26042){
var self__ = this;
var _26042__$1 = this;
return self__.meta26041;
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26041","meta26041",195253548,null)], null);
});

cljs.core.async.t_cljs$core$async26040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26040";

cljs.core.async.t_cljs$core$async26040.cljs$lang$ctorPrWriter = (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async26040");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26040.
 */
cljs.core.async.__GT_t_cljs$core$async26040 = (function cljs$core$async$__GT_t_cljs$core$async26040(f__$1,blockable__$1,meta26041){
return (new cljs.core.async.t_cljs$core$async26040(f__$1,blockable__$1,meta26041));
});

}

return (new cljs.core.async.t_cljs$core$async26040(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26046 = arguments.length;
switch (G__26046) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26049 = arguments.length;
switch (G__26049) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26052 = arguments.length;
switch (G__26052) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26054 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26054);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26054,ret){
return (function (){
return fn1.call(null,val_26054);
});})(val_26054,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26056 = arguments.length;
switch (G__26056) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4375__auto___26058 = n;
var x_26059 = (0);
while(true){
if((x_26059 < n__4375__auto___26058)){
(a[x_26059] = (0));

var G__26060 = (x_26059 + (1));
x_26059 = G__26060;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26061 = (i + (1));
i = G__26061;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26062 = (function (flag,meta26063){
this.flag = flag;
this.meta26063 = meta26063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26064,meta26063__$1){
var self__ = this;
var _26064__$1 = this;
return (new cljs.core.async.t_cljs$core$async26062(self__.flag,meta26063__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26064){
var self__ = this;
var _26064__$1 = this;
return self__.meta26063;
});})(flag))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26062.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26063","meta26063",-1222896173,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26062";

cljs.core.async.t_cljs$core$async26062.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async26062");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26062.
 */
cljs.core.async.__GT_t_cljs$core$async26062 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26062(flag__$1,meta26063){
return (new cljs.core.async.t_cljs$core$async26062(flag__$1,meta26063));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26062(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26065 = (function (flag,cb,meta26066){
this.flag = flag;
this.cb = cb;
this.meta26066 = meta26066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26067,meta26066__$1){
var self__ = this;
var _26067__$1 = this;
return (new cljs.core.async.t_cljs$core$async26065(self__.flag,self__.cb,meta26066__$1));
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26067){
var self__ = this;
var _26067__$1 = this;
return self__.meta26066;
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26066","meta26066",-810905774,null)], null);
});

cljs.core.async.t_cljs$core$async26065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26065";

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorPrWriter = (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async26065");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26065.
 */
cljs.core.async.__GT_t_cljs$core$async26065 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26065(flag__$1,cb__$1,meta26066){
return (new cljs.core.async.t_cljs$core$async26065(flag__$1,cb__$1,meta26066));
});

}

return (new cljs.core.async.t_cljs$core$async26065(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26068_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26068_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26069_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26069_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3921__auto__ = wport;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26070 = (i + (1));
i = G__26070;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3921__auto__ = ret;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3910__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3910__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3910__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4501__auto__ = [];
var len__4498__auto___26076 = arguments.length;
var i__4499__auto___26077 = (0);
while(true){
if((i__4499__auto___26077 < len__4498__auto___26076)){
args__4501__auto__.push((arguments[i__4499__auto___26077]));

var G__26078 = (i__4499__auto___26077 + (1));
i__4499__auto___26077 = G__26078;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26073){
var map__26074 = p__26073;
var map__26074__$1 = ((((!((map__26074 == null)))?(((((map__26074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26074):map__26074);
var opts = map__26074__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26071){
var G__26072 = cljs.core.first.call(null,seq26071);
var seq26071__$1 = cljs.core.next.call(null,seq26071);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26072,seq26071__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26080 = arguments.length;
switch (G__26080) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25979__auto___26126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___26126){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___26126){
return (function (state_26104){
var state_val_26105 = (state_26104[(1)]);
if((state_val_26105 === (7))){
var inst_26100 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26106_26127 = state_26104__$1;
(statearr_26106_26127[(2)] = inst_26100);

(statearr_26106_26127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (1))){
var state_26104__$1 = state_26104;
var statearr_26107_26128 = state_26104__$1;
(statearr_26107_26128[(2)] = null);

(statearr_26107_26128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (4))){
var inst_26083 = (state_26104[(7)]);
var inst_26083__$1 = (state_26104[(2)]);
var inst_26084 = (inst_26083__$1 == null);
var state_26104__$1 = (function (){var statearr_26108 = state_26104;
(statearr_26108[(7)] = inst_26083__$1);

return statearr_26108;
})();
if(cljs.core.truth_(inst_26084)){
var statearr_26109_26129 = state_26104__$1;
(statearr_26109_26129[(1)] = (5));

} else {
var statearr_26110_26130 = state_26104__$1;
(statearr_26110_26130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (13))){
var state_26104__$1 = state_26104;
var statearr_26111_26131 = state_26104__$1;
(statearr_26111_26131[(2)] = null);

(statearr_26111_26131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (6))){
var inst_26083 = (state_26104[(7)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26104__$1,(11),to,inst_26083);
} else {
if((state_val_26105 === (3))){
var inst_26102 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26104__$1,inst_26102);
} else {
if((state_val_26105 === (12))){
var state_26104__$1 = state_26104;
var statearr_26112_26132 = state_26104__$1;
(statearr_26112_26132[(2)] = null);

(statearr_26112_26132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (2))){
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26104__$1,(4),from);
} else {
if((state_val_26105 === (11))){
var inst_26093 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26093)){
var statearr_26113_26133 = state_26104__$1;
(statearr_26113_26133[(1)] = (12));

} else {
var statearr_26114_26134 = state_26104__$1;
(statearr_26114_26134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (9))){
var state_26104__$1 = state_26104;
var statearr_26115_26135 = state_26104__$1;
(statearr_26115_26135[(2)] = null);

(statearr_26115_26135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (5))){
var state_26104__$1 = state_26104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26116_26136 = state_26104__$1;
(statearr_26116_26136[(1)] = (8));

} else {
var statearr_26117_26137 = state_26104__$1;
(statearr_26117_26137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (14))){
var inst_26098 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26118_26138 = state_26104__$1;
(statearr_26118_26138[(2)] = inst_26098);

(statearr_26118_26138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (10))){
var inst_26090 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26119_26139 = state_26104__$1;
(statearr_26119_26139[(2)] = inst_26090);

(statearr_26119_26139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (8))){
var inst_26087 = cljs.core.async.close_BANG_.call(null,to);
var state_26104__$1 = state_26104;
var statearr_26120_26140 = state_26104__$1;
(statearr_26120_26140[(2)] = inst_26087);

(statearr_26120_26140[(1)] = (10));


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
});})(c__25979__auto___26126))
;
return ((function (switch__25889__auto__,c__25979__auto___26126){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_26121 = [null,null,null,null,null,null,null,null];
(statearr_26121[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_26121[(1)] = (1));

return statearr_26121;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_26104){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26122){if((e26122 instanceof Object)){
var ex__25893__auto__ = e26122;
var statearr_26123_26141 = state_26104;
(statearr_26123_26141[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26142 = state_26104;
state_26104 = G__26142;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_26104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_26104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___26126))
})();
var state__25981__auto__ = (function (){var statearr_26124 = f__25980__auto__.call(null);
(statearr_26124[(6)] = c__25979__auto___26126);

return statearr_26124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___26126))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26143){
var vec__26144 = p__26143;
var v = cljs.core.nth.call(null,vec__26144,(0),null);
var p = cljs.core.nth.call(null,vec__26144,(1),null);
var job = vec__26144;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25979__auto___26315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___26315,res,vec__26144,v,p,job,jobs,results){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___26315,res,vec__26144,v,p,job,jobs,results){
return (function (state_26151){
var state_val_26152 = (state_26151[(1)]);
if((state_val_26152 === (1))){
var state_26151__$1 = state_26151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26151__$1,(2),res,v);
} else {
if((state_val_26152 === (2))){
var inst_26148 = (state_26151[(2)]);
var inst_26149 = cljs.core.async.close_BANG_.call(null,res);
var state_26151__$1 = (function (){var statearr_26153 = state_26151;
(statearr_26153[(7)] = inst_26148);

return statearr_26153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26151__$1,inst_26149);
} else {
return null;
}
}
});})(c__25979__auto___26315,res,vec__26144,v,p,job,jobs,results))
;
return ((function (switch__25889__auto__,c__25979__auto___26315,res,vec__26144,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0 = (function (){
var statearr_26154 = [null,null,null,null,null,null,null,null];
(statearr_26154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__);

(statearr_26154[(1)] = (1));

return statearr_26154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1 = (function (state_26151){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26155){if((e26155 instanceof Object)){
var ex__25893__auto__ = e26155;
var statearr_26156_26316 = state_26151;
(statearr_26156_26316[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26317 = state_26151;
state_26151 = G__26317;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = function(state_26151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1.call(this,state_26151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___26315,res,vec__26144,v,p,job,jobs,results))
})();
var state__25981__auto__ = (function (){var statearr_26157 = f__25980__auto__.call(null);
(statearr_26157[(6)] = c__25979__auto___26315);

return statearr_26157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___26315,res,vec__26144,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26158){
var vec__26159 = p__26158;
var v = cljs.core.nth.call(null,vec__26159,(0),null);
var p = cljs.core.nth.call(null,vec__26159,(1),null);
var job = vec__26159;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4375__auto___26318 = n;
var __26319 = (0);
while(true){
if((__26319 < n__4375__auto___26318)){
var G__26162_26320 = type;
var G__26162_26321__$1 = (((G__26162_26320 instanceof cljs.core.Keyword))?G__26162_26320.fqn:null);
switch (G__26162_26321__$1) {
case "compute":
var c__25979__auto___26323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26319,c__25979__auto___26323,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (__26319,c__25979__auto___26323,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async){
return (function (state_26175){
var state_val_26176 = (state_26175[(1)]);
if((state_val_26176 === (1))){
var state_26175__$1 = state_26175;
var statearr_26177_26324 = state_26175__$1;
(statearr_26177_26324[(2)] = null);

(statearr_26177_26324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (2))){
var state_26175__$1 = state_26175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26175__$1,(4),jobs);
} else {
if((state_val_26176 === (3))){
var inst_26173 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26175__$1,inst_26173);
} else {
if((state_val_26176 === (4))){
var inst_26165 = (state_26175[(2)]);
var inst_26166 = process.call(null,inst_26165);
var state_26175__$1 = state_26175;
if(cljs.core.truth_(inst_26166)){
var statearr_26178_26325 = state_26175__$1;
(statearr_26178_26325[(1)] = (5));

} else {
var statearr_26179_26326 = state_26175__$1;
(statearr_26179_26326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (5))){
var state_26175__$1 = state_26175;
var statearr_26180_26327 = state_26175__$1;
(statearr_26180_26327[(2)] = null);

(statearr_26180_26327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (6))){
var state_26175__$1 = state_26175;
var statearr_26181_26328 = state_26175__$1;
(statearr_26181_26328[(2)] = null);

(statearr_26181_26328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (7))){
var inst_26171 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26182_26329 = state_26175__$1;
(statearr_26182_26329[(2)] = inst_26171);

(statearr_26182_26329[(1)] = (3));


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
});})(__26319,c__25979__auto___26323,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async))
;
return ((function (__26319,switch__25889__auto__,c__25979__auto___26323,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0 = (function (){
var statearr_26183 = [null,null,null,null,null,null,null];
(statearr_26183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__);

(statearr_26183[(1)] = (1));

return statearr_26183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1 = (function (state_26175){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26184){if((e26184 instanceof Object)){
var ex__25893__auto__ = e26184;
var statearr_26185_26330 = state_26175;
(statearr_26185_26330[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26331 = state_26175;
state_26175 = G__26331;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = function(state_26175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1.call(this,state_26175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__;
})()
;})(__26319,switch__25889__auto__,c__25979__auto___26323,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async))
})();
var state__25981__auto__ = (function (){var statearr_26186 = f__25980__auto__.call(null);
(statearr_26186[(6)] = c__25979__auto___26323);

return statearr_26186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(__26319,c__25979__auto___26323,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async))
);


break;
case "async":
var c__25979__auto___26332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26319,c__25979__auto___26332,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (__26319,c__25979__auto___26332,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async){
return (function (state_26199){
var state_val_26200 = (state_26199[(1)]);
if((state_val_26200 === (1))){
var state_26199__$1 = state_26199;
var statearr_26201_26333 = state_26199__$1;
(statearr_26201_26333[(2)] = null);

(statearr_26201_26333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (2))){
var state_26199__$1 = state_26199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26199__$1,(4),jobs);
} else {
if((state_val_26200 === (3))){
var inst_26197 = (state_26199[(2)]);
var state_26199__$1 = state_26199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26199__$1,inst_26197);
} else {
if((state_val_26200 === (4))){
var inst_26189 = (state_26199[(2)]);
var inst_26190 = async.call(null,inst_26189);
var state_26199__$1 = state_26199;
if(cljs.core.truth_(inst_26190)){
var statearr_26202_26334 = state_26199__$1;
(statearr_26202_26334[(1)] = (5));

} else {
var statearr_26203_26335 = state_26199__$1;
(statearr_26203_26335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (5))){
var state_26199__$1 = state_26199;
var statearr_26204_26336 = state_26199__$1;
(statearr_26204_26336[(2)] = null);

(statearr_26204_26336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (6))){
var state_26199__$1 = state_26199;
var statearr_26205_26337 = state_26199__$1;
(statearr_26205_26337[(2)] = null);

(statearr_26205_26337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (7))){
var inst_26195 = (state_26199[(2)]);
var state_26199__$1 = state_26199;
var statearr_26206_26338 = state_26199__$1;
(statearr_26206_26338[(2)] = inst_26195);

(statearr_26206_26338[(1)] = (3));


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
});})(__26319,c__25979__auto___26332,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async))
;
return ((function (__26319,switch__25889__auto__,c__25979__auto___26332,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0 = (function (){
var statearr_26207 = [null,null,null,null,null,null,null];
(statearr_26207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__);

(statearr_26207[(1)] = (1));

return statearr_26207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1 = (function (state_26199){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26208){if((e26208 instanceof Object)){
var ex__25893__auto__ = e26208;
var statearr_26209_26339 = state_26199;
(statearr_26209_26339[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26340 = state_26199;
state_26199 = G__26340;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = function(state_26199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1.call(this,state_26199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__;
})()
;})(__26319,switch__25889__auto__,c__25979__auto___26332,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async))
})();
var state__25981__auto__ = (function (){var statearr_26210 = f__25980__auto__.call(null);
(statearr_26210[(6)] = c__25979__auto___26332);

return statearr_26210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(__26319,c__25979__auto___26332,G__26162_26320,G__26162_26321__$1,n__4375__auto___26318,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26162_26321__$1)].join('')));

}

var G__26341 = (__26319 + (1));
__26319 = G__26341;
continue;
} else {
}
break;
}

var c__25979__auto___26342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___26342,jobs,results,process,async){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___26342,jobs,results,process,async){
return (function (state_26232){
var state_val_26233 = (state_26232[(1)]);
if((state_val_26233 === (1))){
var state_26232__$1 = state_26232;
var statearr_26234_26343 = state_26232__$1;
(statearr_26234_26343[(2)] = null);

(statearr_26234_26343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26233 === (2))){
var state_26232__$1 = state_26232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26232__$1,(4),from);
} else {
if((state_val_26233 === (3))){
var inst_26230 = (state_26232[(2)]);
var state_26232__$1 = state_26232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26232__$1,inst_26230);
} else {
if((state_val_26233 === (4))){
var inst_26213 = (state_26232[(7)]);
var inst_26213__$1 = (state_26232[(2)]);
var inst_26214 = (inst_26213__$1 == null);
var state_26232__$1 = (function (){var statearr_26235 = state_26232;
(statearr_26235[(7)] = inst_26213__$1);

return statearr_26235;
})();
if(cljs.core.truth_(inst_26214)){
var statearr_26236_26344 = state_26232__$1;
(statearr_26236_26344[(1)] = (5));

} else {
var statearr_26237_26345 = state_26232__$1;
(statearr_26237_26345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26233 === (5))){
var inst_26216 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26232__$1 = state_26232;
var statearr_26238_26346 = state_26232__$1;
(statearr_26238_26346[(2)] = inst_26216);

(statearr_26238_26346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26233 === (6))){
var inst_26218 = (state_26232[(8)]);
var inst_26213 = (state_26232[(7)]);
var inst_26218__$1 = cljs.core.async.chan.call(null,(1));
var inst_26219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26220 = [inst_26213,inst_26218__$1];
var inst_26221 = (new cljs.core.PersistentVector(null,2,(5),inst_26219,inst_26220,null));
var state_26232__$1 = (function (){var statearr_26239 = state_26232;
(statearr_26239[(8)] = inst_26218__$1);

return statearr_26239;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26232__$1,(8),jobs,inst_26221);
} else {
if((state_val_26233 === (7))){
var inst_26228 = (state_26232[(2)]);
var state_26232__$1 = state_26232;
var statearr_26240_26347 = state_26232__$1;
(statearr_26240_26347[(2)] = inst_26228);

(statearr_26240_26347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26233 === (8))){
var inst_26218 = (state_26232[(8)]);
var inst_26223 = (state_26232[(2)]);
var state_26232__$1 = (function (){var statearr_26241 = state_26232;
(statearr_26241[(9)] = inst_26223);

return statearr_26241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26232__$1,(9),results,inst_26218);
} else {
if((state_val_26233 === (9))){
var inst_26225 = (state_26232[(2)]);
var state_26232__$1 = (function (){var statearr_26242 = state_26232;
(statearr_26242[(10)] = inst_26225);

return statearr_26242;
})();
var statearr_26243_26348 = state_26232__$1;
(statearr_26243_26348[(2)] = null);

(statearr_26243_26348[(1)] = (2));


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
});})(c__25979__auto___26342,jobs,results,process,async))
;
return ((function (switch__25889__auto__,c__25979__auto___26342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0 = (function (){
var statearr_26244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__);

(statearr_26244[(1)] = (1));

return statearr_26244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1 = (function (state_26232){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26245){if((e26245 instanceof Object)){
var ex__25893__auto__ = e26245;
var statearr_26246_26349 = state_26232;
(statearr_26246_26349[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26350 = state_26232;
state_26232 = G__26350;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = function(state_26232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1.call(this,state_26232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___26342,jobs,results,process,async))
})();
var state__25981__auto__ = (function (){var statearr_26247 = f__25980__auto__.call(null);
(statearr_26247[(6)] = c__25979__auto___26342);

return statearr_26247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___26342,jobs,results,process,async))
);


var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__,jobs,results,process,async){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__,jobs,results,process,async){
return (function (state_26285){
var state_val_26286 = (state_26285[(1)]);
if((state_val_26286 === (7))){
var inst_26281 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26287_26351 = state_26285__$1;
(statearr_26287_26351[(2)] = inst_26281);

(statearr_26287_26351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (20))){
var state_26285__$1 = state_26285;
var statearr_26288_26352 = state_26285__$1;
(statearr_26288_26352[(2)] = null);

(statearr_26288_26352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (1))){
var state_26285__$1 = state_26285;
var statearr_26289_26353 = state_26285__$1;
(statearr_26289_26353[(2)] = null);

(statearr_26289_26353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (4))){
var inst_26250 = (state_26285[(7)]);
var inst_26250__$1 = (state_26285[(2)]);
var inst_26251 = (inst_26250__$1 == null);
var state_26285__$1 = (function (){var statearr_26290 = state_26285;
(statearr_26290[(7)] = inst_26250__$1);

return statearr_26290;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26291_26354 = state_26285__$1;
(statearr_26291_26354[(1)] = (5));

} else {
var statearr_26292_26355 = state_26285__$1;
(statearr_26292_26355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (15))){
var inst_26263 = (state_26285[(8)]);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26285__$1,(18),to,inst_26263);
} else {
if((state_val_26286 === (21))){
var inst_26276 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26293_26356 = state_26285__$1;
(statearr_26293_26356[(2)] = inst_26276);

(statearr_26293_26356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (13))){
var inst_26278 = (state_26285[(2)]);
var state_26285__$1 = (function (){var statearr_26294 = state_26285;
(statearr_26294[(9)] = inst_26278);

return statearr_26294;
})();
var statearr_26295_26357 = state_26285__$1;
(statearr_26295_26357[(2)] = null);

(statearr_26295_26357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (6))){
var inst_26250 = (state_26285[(7)]);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26285__$1,(11),inst_26250);
} else {
if((state_val_26286 === (17))){
var inst_26271 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
if(cljs.core.truth_(inst_26271)){
var statearr_26296_26358 = state_26285__$1;
(statearr_26296_26358[(1)] = (19));

} else {
var statearr_26297_26359 = state_26285__$1;
(statearr_26297_26359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (3))){
var inst_26283 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26285__$1,inst_26283);
} else {
if((state_val_26286 === (12))){
var inst_26260 = (state_26285[(10)]);
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26285__$1,(14),inst_26260);
} else {
if((state_val_26286 === (2))){
var state_26285__$1 = state_26285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26285__$1,(4),results);
} else {
if((state_val_26286 === (19))){
var state_26285__$1 = state_26285;
var statearr_26298_26360 = state_26285__$1;
(statearr_26298_26360[(2)] = null);

(statearr_26298_26360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (11))){
var inst_26260 = (state_26285[(2)]);
var state_26285__$1 = (function (){var statearr_26299 = state_26285;
(statearr_26299[(10)] = inst_26260);

return statearr_26299;
})();
var statearr_26300_26361 = state_26285__$1;
(statearr_26300_26361[(2)] = null);

(statearr_26300_26361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (9))){
var state_26285__$1 = state_26285;
var statearr_26301_26362 = state_26285__$1;
(statearr_26301_26362[(2)] = null);

(statearr_26301_26362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (5))){
var state_26285__$1 = state_26285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26302_26363 = state_26285__$1;
(statearr_26302_26363[(1)] = (8));

} else {
var statearr_26303_26364 = state_26285__$1;
(statearr_26303_26364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (14))){
var inst_26263 = (state_26285[(8)]);
var inst_26265 = (state_26285[(11)]);
var inst_26263__$1 = (state_26285[(2)]);
var inst_26264 = (inst_26263__$1 == null);
var inst_26265__$1 = cljs.core.not.call(null,inst_26264);
var state_26285__$1 = (function (){var statearr_26304 = state_26285;
(statearr_26304[(8)] = inst_26263__$1);

(statearr_26304[(11)] = inst_26265__$1);

return statearr_26304;
})();
if(inst_26265__$1){
var statearr_26305_26365 = state_26285__$1;
(statearr_26305_26365[(1)] = (15));

} else {
var statearr_26306_26366 = state_26285__$1;
(statearr_26306_26366[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (16))){
var inst_26265 = (state_26285[(11)]);
var state_26285__$1 = state_26285;
var statearr_26307_26367 = state_26285__$1;
(statearr_26307_26367[(2)] = inst_26265);

(statearr_26307_26367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (10))){
var inst_26257 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26308_26368 = state_26285__$1;
(statearr_26308_26368[(2)] = inst_26257);

(statearr_26308_26368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (18))){
var inst_26268 = (state_26285[(2)]);
var state_26285__$1 = state_26285;
var statearr_26309_26369 = state_26285__$1;
(statearr_26309_26369[(2)] = inst_26268);

(statearr_26309_26369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26286 === (8))){
var inst_26254 = cljs.core.async.close_BANG_.call(null,to);
var state_26285__$1 = state_26285;
var statearr_26310_26370 = state_26285__$1;
(statearr_26310_26370[(2)] = inst_26254);

(statearr_26310_26370[(1)] = (10));


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
});})(c__25979__auto__,jobs,results,process,async))
;
return ((function (switch__25889__auto__,c__25979__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0 = (function (){
var statearr_26311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__);

(statearr_26311[(1)] = (1));

return statearr_26311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1 = (function (state_26285){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26312){if((e26312 instanceof Object)){
var ex__25893__auto__ = e26312;
var statearr_26313_26371 = state_26285;
(statearr_26313_26371[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26372 = state_26285;
state_26285 = G__26372;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__ = function(state_26285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1.call(this,state_26285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__,jobs,results,process,async))
})();
var state__25981__auto__ = (function (){var statearr_26314 = f__25980__auto__.call(null);
(statearr_26314[(6)] = c__25979__auto__);

return statearr_26314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__,jobs,results,process,async))
);

return c__25979__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26374 = arguments.length;
switch (G__26374) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26377 = arguments.length;
switch (G__26377) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26380 = arguments.length;
switch (G__26380) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25979__auto___26429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___26429,tc,fc){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___26429,tc,fc){
return (function (state_26406){
var state_val_26407 = (state_26406[(1)]);
if((state_val_26407 === (7))){
var inst_26402 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26408_26430 = state_26406__$1;
(statearr_26408_26430[(2)] = inst_26402);

(statearr_26408_26430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (1))){
var state_26406__$1 = state_26406;
var statearr_26409_26431 = state_26406__$1;
(statearr_26409_26431[(2)] = null);

(statearr_26409_26431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (4))){
var inst_26383 = (state_26406[(7)]);
var inst_26383__$1 = (state_26406[(2)]);
var inst_26384 = (inst_26383__$1 == null);
var state_26406__$1 = (function (){var statearr_26410 = state_26406;
(statearr_26410[(7)] = inst_26383__$1);

return statearr_26410;
})();
if(cljs.core.truth_(inst_26384)){
var statearr_26411_26432 = state_26406__$1;
(statearr_26411_26432[(1)] = (5));

} else {
var statearr_26412_26433 = state_26406__$1;
(statearr_26412_26433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (13))){
var state_26406__$1 = state_26406;
var statearr_26413_26434 = state_26406__$1;
(statearr_26413_26434[(2)] = null);

(statearr_26413_26434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (6))){
var inst_26383 = (state_26406[(7)]);
var inst_26389 = p.call(null,inst_26383);
var state_26406__$1 = state_26406;
if(cljs.core.truth_(inst_26389)){
var statearr_26414_26435 = state_26406__$1;
(statearr_26414_26435[(1)] = (9));

} else {
var statearr_26415_26436 = state_26406__$1;
(statearr_26415_26436[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (3))){
var inst_26404 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26406__$1,inst_26404);
} else {
if((state_val_26407 === (12))){
var state_26406__$1 = state_26406;
var statearr_26416_26437 = state_26406__$1;
(statearr_26416_26437[(2)] = null);

(statearr_26416_26437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (2))){
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26406__$1,(4),ch);
} else {
if((state_val_26407 === (11))){
var inst_26383 = (state_26406[(7)]);
var inst_26393 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26406__$1,(8),inst_26393,inst_26383);
} else {
if((state_val_26407 === (9))){
var state_26406__$1 = state_26406;
var statearr_26417_26438 = state_26406__$1;
(statearr_26417_26438[(2)] = tc);

(statearr_26417_26438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (5))){
var inst_26386 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26387 = cljs.core.async.close_BANG_.call(null,fc);
var state_26406__$1 = (function (){var statearr_26418 = state_26406;
(statearr_26418[(8)] = inst_26386);

return statearr_26418;
})();
var statearr_26419_26439 = state_26406__$1;
(statearr_26419_26439[(2)] = inst_26387);

(statearr_26419_26439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (14))){
var inst_26400 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26420_26440 = state_26406__$1;
(statearr_26420_26440[(2)] = inst_26400);

(statearr_26420_26440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (10))){
var state_26406__$1 = state_26406;
var statearr_26421_26441 = state_26406__$1;
(statearr_26421_26441[(2)] = fc);

(statearr_26421_26441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (8))){
var inst_26395 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
if(cljs.core.truth_(inst_26395)){
var statearr_26422_26442 = state_26406__$1;
(statearr_26422_26442[(1)] = (12));

} else {
var statearr_26423_26443 = state_26406__$1;
(statearr_26423_26443[(1)] = (13));

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
});})(c__25979__auto___26429,tc,fc))
;
return ((function (switch__25889__auto__,c__25979__auto___26429,tc,fc){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_26424 = [null,null,null,null,null,null,null,null,null];
(statearr_26424[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_26424[(1)] = (1));

return statearr_26424;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_26406){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26425){if((e26425 instanceof Object)){
var ex__25893__auto__ = e26425;
var statearr_26426_26444 = state_26406;
(statearr_26426_26444[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26445 = state_26406;
state_26406 = G__26445;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_26406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_26406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___26429,tc,fc))
})();
var state__25981__auto__ = (function (){var statearr_26427 = f__25980__auto__.call(null);
(statearr_26427[(6)] = c__25979__auto___26429);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___26429,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__){
return (function (state_26466){
var state_val_26467 = (state_26466[(1)]);
if((state_val_26467 === (7))){
var inst_26462 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26468_26486 = state_26466__$1;
(statearr_26468_26486[(2)] = inst_26462);

(statearr_26468_26486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (1))){
var inst_26446 = init;
var state_26466__$1 = (function (){var statearr_26469 = state_26466;
(statearr_26469[(7)] = inst_26446);

return statearr_26469;
})();
var statearr_26470_26487 = state_26466__$1;
(statearr_26470_26487[(2)] = null);

(statearr_26470_26487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (4))){
var inst_26449 = (state_26466[(8)]);
var inst_26449__$1 = (state_26466[(2)]);
var inst_26450 = (inst_26449__$1 == null);
var state_26466__$1 = (function (){var statearr_26471 = state_26466;
(statearr_26471[(8)] = inst_26449__$1);

return statearr_26471;
})();
if(cljs.core.truth_(inst_26450)){
var statearr_26472_26488 = state_26466__$1;
(statearr_26472_26488[(1)] = (5));

} else {
var statearr_26473_26489 = state_26466__$1;
(statearr_26473_26489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (6))){
var inst_26453 = (state_26466[(9)]);
var inst_26449 = (state_26466[(8)]);
var inst_26446 = (state_26466[(7)]);
var inst_26453__$1 = f.call(null,inst_26446,inst_26449);
var inst_26454 = cljs.core.reduced_QMARK_.call(null,inst_26453__$1);
var state_26466__$1 = (function (){var statearr_26474 = state_26466;
(statearr_26474[(9)] = inst_26453__$1);

return statearr_26474;
})();
if(inst_26454){
var statearr_26475_26490 = state_26466__$1;
(statearr_26475_26490[(1)] = (8));

} else {
var statearr_26476_26491 = state_26466__$1;
(statearr_26476_26491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (3))){
var inst_26464 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26466__$1,inst_26464);
} else {
if((state_val_26467 === (2))){
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26466__$1,(4),ch);
} else {
if((state_val_26467 === (9))){
var inst_26453 = (state_26466[(9)]);
var inst_26446 = inst_26453;
var state_26466__$1 = (function (){var statearr_26477 = state_26466;
(statearr_26477[(7)] = inst_26446);

return statearr_26477;
})();
var statearr_26478_26492 = state_26466__$1;
(statearr_26478_26492[(2)] = null);

(statearr_26478_26492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (5))){
var inst_26446 = (state_26466[(7)]);
var state_26466__$1 = state_26466;
var statearr_26479_26493 = state_26466__$1;
(statearr_26479_26493[(2)] = inst_26446);

(statearr_26479_26493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (10))){
var inst_26460 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26480_26494 = state_26466__$1;
(statearr_26480_26494[(2)] = inst_26460);

(statearr_26480_26494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (8))){
var inst_26453 = (state_26466[(9)]);
var inst_26456 = cljs.core.deref.call(null,inst_26453);
var state_26466__$1 = state_26466;
var statearr_26481_26495 = state_26466__$1;
(statearr_26481_26495[(2)] = inst_26456);

(statearr_26481_26495[(1)] = (10));


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
});})(c__25979__auto__))
;
return ((function (switch__25889__auto__,c__25979__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25890__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25890__auto____0 = (function (){
var statearr_26482 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26482[(0)] = cljs$core$async$reduce_$_state_machine__25890__auto__);

(statearr_26482[(1)] = (1));

return statearr_26482;
});
var cljs$core$async$reduce_$_state_machine__25890__auto____1 = (function (state_26466){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26483){if((e26483 instanceof Object)){
var ex__25893__auto__ = e26483;
var statearr_26484_26496 = state_26466;
(statearr_26484_26496[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26497 = state_26466;
state_26466 = G__26497;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25890__auto__ = function(state_26466){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25890__auto____1.call(this,state_26466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25890__auto____0;
cljs$core$async$reduce_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25890__auto____1;
return cljs$core$async$reduce_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__))
})();
var state__25981__auto__ = (function (){var statearr_26485 = f__25980__auto__.call(null);
(statearr_26485[(6)] = c__25979__auto__);

return statearr_26485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__))
);

return c__25979__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__,f__$1){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__,f__$1){
return (function (state_26503){
var state_val_26504 = (state_26503[(1)]);
if((state_val_26504 === (1))){
var inst_26498 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26503__$1,(2),inst_26498);
} else {
if((state_val_26504 === (2))){
var inst_26500 = (state_26503[(2)]);
var inst_26501 = f__$1.call(null,inst_26500);
var state_26503__$1 = state_26503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26503__$1,inst_26501);
} else {
return null;
}
}
});})(c__25979__auto__,f__$1))
;
return ((function (switch__25889__auto__,c__25979__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25890__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25890__auto____0 = (function (){
var statearr_26505 = [null,null,null,null,null,null,null];
(statearr_26505[(0)] = cljs$core$async$transduce_$_state_machine__25890__auto__);

(statearr_26505[(1)] = (1));

return statearr_26505;
});
var cljs$core$async$transduce_$_state_machine__25890__auto____1 = (function (state_26503){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26506){if((e26506 instanceof Object)){
var ex__25893__auto__ = e26506;
var statearr_26507_26509 = state_26503;
(statearr_26507_26509[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26510 = state_26503;
state_26503 = G__26510;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25890__auto__ = function(state_26503){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25890__auto____1.call(this,state_26503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25890__auto____0;
cljs$core$async$transduce_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25890__auto____1;
return cljs$core$async$transduce_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__,f__$1))
})();
var state__25981__auto__ = (function (){var statearr_26508 = f__25980__auto__.call(null);
(statearr_26508[(6)] = c__25979__auto__);

return statearr_26508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__,f__$1))
);

return c__25979__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26512 = arguments.length;
switch (G__26512) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__){
return (function (state_26537){
var state_val_26538 = (state_26537[(1)]);
if((state_val_26538 === (7))){
var inst_26519 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
var statearr_26539_26560 = state_26537__$1;
(statearr_26539_26560[(2)] = inst_26519);

(statearr_26539_26560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (1))){
var inst_26513 = cljs.core.seq.call(null,coll);
var inst_26514 = inst_26513;
var state_26537__$1 = (function (){var statearr_26540 = state_26537;
(statearr_26540[(7)] = inst_26514);

return statearr_26540;
})();
var statearr_26541_26561 = state_26537__$1;
(statearr_26541_26561[(2)] = null);

(statearr_26541_26561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (4))){
var inst_26514 = (state_26537[(7)]);
var inst_26517 = cljs.core.first.call(null,inst_26514);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26537__$1,(7),ch,inst_26517);
} else {
if((state_val_26538 === (13))){
var inst_26531 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
var statearr_26542_26562 = state_26537__$1;
(statearr_26542_26562[(2)] = inst_26531);

(statearr_26542_26562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (6))){
var inst_26522 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
if(cljs.core.truth_(inst_26522)){
var statearr_26543_26563 = state_26537__$1;
(statearr_26543_26563[(1)] = (8));

} else {
var statearr_26544_26564 = state_26537__$1;
(statearr_26544_26564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (3))){
var inst_26535 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26537__$1,inst_26535);
} else {
if((state_val_26538 === (12))){
var state_26537__$1 = state_26537;
var statearr_26545_26565 = state_26537__$1;
(statearr_26545_26565[(2)] = null);

(statearr_26545_26565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (2))){
var inst_26514 = (state_26537[(7)]);
var state_26537__$1 = state_26537;
if(cljs.core.truth_(inst_26514)){
var statearr_26546_26566 = state_26537__$1;
(statearr_26546_26566[(1)] = (4));

} else {
var statearr_26547_26567 = state_26537__$1;
(statearr_26547_26567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (11))){
var inst_26528 = cljs.core.async.close_BANG_.call(null,ch);
var state_26537__$1 = state_26537;
var statearr_26548_26568 = state_26537__$1;
(statearr_26548_26568[(2)] = inst_26528);

(statearr_26548_26568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (9))){
var state_26537__$1 = state_26537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26549_26569 = state_26537__$1;
(statearr_26549_26569[(1)] = (11));

} else {
var statearr_26550_26570 = state_26537__$1;
(statearr_26550_26570[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (5))){
var inst_26514 = (state_26537[(7)]);
var state_26537__$1 = state_26537;
var statearr_26551_26571 = state_26537__$1;
(statearr_26551_26571[(2)] = inst_26514);

(statearr_26551_26571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (10))){
var inst_26533 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
var statearr_26552_26572 = state_26537__$1;
(statearr_26552_26572[(2)] = inst_26533);

(statearr_26552_26572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (8))){
var inst_26514 = (state_26537[(7)]);
var inst_26524 = cljs.core.next.call(null,inst_26514);
var inst_26514__$1 = inst_26524;
var state_26537__$1 = (function (){var statearr_26553 = state_26537;
(statearr_26553[(7)] = inst_26514__$1);

return statearr_26553;
})();
var statearr_26554_26573 = state_26537__$1;
(statearr_26554_26573[(2)] = null);

(statearr_26554_26573[(1)] = (2));


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
});})(c__25979__auto__))
;
return ((function (switch__25889__auto__,c__25979__auto__){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_26555 = [null,null,null,null,null,null,null,null];
(statearr_26555[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_26555[(1)] = (1));

return statearr_26555;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_26537){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26556){if((e26556 instanceof Object)){
var ex__25893__auto__ = e26556;
var statearr_26557_26574 = state_26537;
(statearr_26557_26574[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26575 = state_26537;
state_26537 = G__26575;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_26537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_26537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__))
})();
var state__25981__auto__ = (function (){var statearr_26558 = f__25980__auto__.call(null);
(statearr_26558[(6)] = c__25979__auto__);

return statearr_26558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__))
);

return c__25979__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4210__auto__ = (((_ == null))?null:_);
var m__4211__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,_);
} else {
var m__4211__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4211__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m,ch);
} else {
var m__4211__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m);
} else {
var m__4211__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26576 = (function (ch,cs,meta26577){
this.ch = ch;
this.cs = cs;
this.meta26577 = meta26577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26578,meta26577__$1){
var self__ = this;
var _26578__$1 = this;
return (new cljs.core.async.t_cljs$core$async26576(self__.ch,self__.cs,meta26577__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26578){
var self__ = this;
var _26578__$1 = this;
return self__.meta26577;
});})(cs))
;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26576.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26576.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26577","meta26577",1575442916,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26576";

cljs.core.async.t_cljs$core$async26576.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async26576");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26576.
 */
cljs.core.async.__GT_t_cljs$core$async26576 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26576(ch__$1,cs__$1,meta26577){
return (new cljs.core.async.t_cljs$core$async26576(ch__$1,cs__$1,meta26577));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26576(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25979__auto___26798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___26798,cs,m,dchan,dctr,done){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___26798,cs,m,dchan,dctr,done){
return (function (state_26713){
var state_val_26714 = (state_26713[(1)]);
if((state_val_26714 === (7))){
var inst_26709 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26715_26799 = state_26713__$1;
(statearr_26715_26799[(2)] = inst_26709);

(statearr_26715_26799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (20))){
var inst_26612 = (state_26713[(7)]);
var inst_26624 = cljs.core.first.call(null,inst_26612);
var inst_26625 = cljs.core.nth.call(null,inst_26624,(0),null);
var inst_26626 = cljs.core.nth.call(null,inst_26624,(1),null);
var state_26713__$1 = (function (){var statearr_26716 = state_26713;
(statearr_26716[(8)] = inst_26625);

return statearr_26716;
})();
if(cljs.core.truth_(inst_26626)){
var statearr_26717_26800 = state_26713__$1;
(statearr_26717_26800[(1)] = (22));

} else {
var statearr_26718_26801 = state_26713__$1;
(statearr_26718_26801[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (27))){
var inst_26654 = (state_26713[(9)]);
var inst_26661 = (state_26713[(10)]);
var inst_26656 = (state_26713[(11)]);
var inst_26581 = (state_26713[(12)]);
var inst_26661__$1 = cljs.core._nth.call(null,inst_26654,inst_26656);
var inst_26662 = cljs.core.async.put_BANG_.call(null,inst_26661__$1,inst_26581,done);
var state_26713__$1 = (function (){var statearr_26719 = state_26713;
(statearr_26719[(10)] = inst_26661__$1);

return statearr_26719;
})();
if(cljs.core.truth_(inst_26662)){
var statearr_26720_26802 = state_26713__$1;
(statearr_26720_26802[(1)] = (30));

} else {
var statearr_26721_26803 = state_26713__$1;
(statearr_26721_26803[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (1))){
var state_26713__$1 = state_26713;
var statearr_26722_26804 = state_26713__$1;
(statearr_26722_26804[(2)] = null);

(statearr_26722_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (24))){
var inst_26612 = (state_26713[(7)]);
var inst_26631 = (state_26713[(2)]);
var inst_26632 = cljs.core.next.call(null,inst_26612);
var inst_26590 = inst_26632;
var inst_26591 = null;
var inst_26592 = (0);
var inst_26593 = (0);
var state_26713__$1 = (function (){var statearr_26723 = state_26713;
(statearr_26723[(13)] = inst_26593);

(statearr_26723[(14)] = inst_26592);

(statearr_26723[(15)] = inst_26590);

(statearr_26723[(16)] = inst_26591);

(statearr_26723[(17)] = inst_26631);

return statearr_26723;
})();
var statearr_26724_26805 = state_26713__$1;
(statearr_26724_26805[(2)] = null);

(statearr_26724_26805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (39))){
var state_26713__$1 = state_26713;
var statearr_26728_26806 = state_26713__$1;
(statearr_26728_26806[(2)] = null);

(statearr_26728_26806[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (4))){
var inst_26581 = (state_26713[(12)]);
var inst_26581__$1 = (state_26713[(2)]);
var inst_26582 = (inst_26581__$1 == null);
var state_26713__$1 = (function (){var statearr_26729 = state_26713;
(statearr_26729[(12)] = inst_26581__$1);

return statearr_26729;
})();
if(cljs.core.truth_(inst_26582)){
var statearr_26730_26807 = state_26713__$1;
(statearr_26730_26807[(1)] = (5));

} else {
var statearr_26731_26808 = state_26713__$1;
(statearr_26731_26808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (15))){
var inst_26593 = (state_26713[(13)]);
var inst_26592 = (state_26713[(14)]);
var inst_26590 = (state_26713[(15)]);
var inst_26591 = (state_26713[(16)]);
var inst_26608 = (state_26713[(2)]);
var inst_26609 = (inst_26593 + (1));
var tmp26725 = inst_26592;
var tmp26726 = inst_26590;
var tmp26727 = inst_26591;
var inst_26590__$1 = tmp26726;
var inst_26591__$1 = tmp26727;
var inst_26592__$1 = tmp26725;
var inst_26593__$1 = inst_26609;
var state_26713__$1 = (function (){var statearr_26732 = state_26713;
(statearr_26732[(13)] = inst_26593__$1);

(statearr_26732[(14)] = inst_26592__$1);

(statearr_26732[(15)] = inst_26590__$1);

(statearr_26732[(16)] = inst_26591__$1);

(statearr_26732[(18)] = inst_26608);

return statearr_26732;
})();
var statearr_26733_26809 = state_26713__$1;
(statearr_26733_26809[(2)] = null);

(statearr_26733_26809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (21))){
var inst_26635 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26737_26810 = state_26713__$1;
(statearr_26737_26810[(2)] = inst_26635);

(statearr_26737_26810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (31))){
var inst_26661 = (state_26713[(10)]);
var inst_26665 = done.call(null,null);
var inst_26666 = cljs.core.async.untap_STAR_.call(null,m,inst_26661);
var state_26713__$1 = (function (){var statearr_26738 = state_26713;
(statearr_26738[(19)] = inst_26665);

return statearr_26738;
})();
var statearr_26739_26811 = state_26713__$1;
(statearr_26739_26811[(2)] = inst_26666);

(statearr_26739_26811[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (32))){
var inst_26654 = (state_26713[(9)]);
var inst_26653 = (state_26713[(20)]);
var inst_26655 = (state_26713[(21)]);
var inst_26656 = (state_26713[(11)]);
var inst_26668 = (state_26713[(2)]);
var inst_26669 = (inst_26656 + (1));
var tmp26734 = inst_26654;
var tmp26735 = inst_26653;
var tmp26736 = inst_26655;
var inst_26653__$1 = tmp26735;
var inst_26654__$1 = tmp26734;
var inst_26655__$1 = tmp26736;
var inst_26656__$1 = inst_26669;
var state_26713__$1 = (function (){var statearr_26740 = state_26713;
(statearr_26740[(22)] = inst_26668);

(statearr_26740[(9)] = inst_26654__$1);

(statearr_26740[(20)] = inst_26653__$1);

(statearr_26740[(21)] = inst_26655__$1);

(statearr_26740[(11)] = inst_26656__$1);

return statearr_26740;
})();
var statearr_26741_26812 = state_26713__$1;
(statearr_26741_26812[(2)] = null);

(statearr_26741_26812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (40))){
var inst_26681 = (state_26713[(23)]);
var inst_26685 = done.call(null,null);
var inst_26686 = cljs.core.async.untap_STAR_.call(null,m,inst_26681);
var state_26713__$1 = (function (){var statearr_26742 = state_26713;
(statearr_26742[(24)] = inst_26685);

return statearr_26742;
})();
var statearr_26743_26813 = state_26713__$1;
(statearr_26743_26813[(2)] = inst_26686);

(statearr_26743_26813[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (33))){
var inst_26672 = (state_26713[(25)]);
var inst_26674 = cljs.core.chunked_seq_QMARK_.call(null,inst_26672);
var state_26713__$1 = state_26713;
if(inst_26674){
var statearr_26744_26814 = state_26713__$1;
(statearr_26744_26814[(1)] = (36));

} else {
var statearr_26745_26815 = state_26713__$1;
(statearr_26745_26815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (13))){
var inst_26602 = (state_26713[(26)]);
var inst_26605 = cljs.core.async.close_BANG_.call(null,inst_26602);
var state_26713__$1 = state_26713;
var statearr_26746_26816 = state_26713__$1;
(statearr_26746_26816[(2)] = inst_26605);

(statearr_26746_26816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (22))){
var inst_26625 = (state_26713[(8)]);
var inst_26628 = cljs.core.async.close_BANG_.call(null,inst_26625);
var state_26713__$1 = state_26713;
var statearr_26747_26817 = state_26713__$1;
(statearr_26747_26817[(2)] = inst_26628);

(statearr_26747_26817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (36))){
var inst_26672 = (state_26713[(25)]);
var inst_26676 = cljs.core.chunk_first.call(null,inst_26672);
var inst_26677 = cljs.core.chunk_rest.call(null,inst_26672);
var inst_26678 = cljs.core.count.call(null,inst_26676);
var inst_26653 = inst_26677;
var inst_26654 = inst_26676;
var inst_26655 = inst_26678;
var inst_26656 = (0);
var state_26713__$1 = (function (){var statearr_26748 = state_26713;
(statearr_26748[(9)] = inst_26654);

(statearr_26748[(20)] = inst_26653);

(statearr_26748[(21)] = inst_26655);

(statearr_26748[(11)] = inst_26656);

return statearr_26748;
})();
var statearr_26749_26818 = state_26713__$1;
(statearr_26749_26818[(2)] = null);

(statearr_26749_26818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (41))){
var inst_26672 = (state_26713[(25)]);
var inst_26688 = (state_26713[(2)]);
var inst_26689 = cljs.core.next.call(null,inst_26672);
var inst_26653 = inst_26689;
var inst_26654 = null;
var inst_26655 = (0);
var inst_26656 = (0);
var state_26713__$1 = (function (){var statearr_26750 = state_26713;
(statearr_26750[(9)] = inst_26654);

(statearr_26750[(20)] = inst_26653);

(statearr_26750[(21)] = inst_26655);

(statearr_26750[(11)] = inst_26656);

(statearr_26750[(27)] = inst_26688);

return statearr_26750;
})();
var statearr_26751_26819 = state_26713__$1;
(statearr_26751_26819[(2)] = null);

(statearr_26751_26819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (43))){
var state_26713__$1 = state_26713;
var statearr_26752_26820 = state_26713__$1;
(statearr_26752_26820[(2)] = null);

(statearr_26752_26820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (29))){
var inst_26697 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26753_26821 = state_26713__$1;
(statearr_26753_26821[(2)] = inst_26697);

(statearr_26753_26821[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (44))){
var inst_26706 = (state_26713[(2)]);
var state_26713__$1 = (function (){var statearr_26754 = state_26713;
(statearr_26754[(28)] = inst_26706);

return statearr_26754;
})();
var statearr_26755_26822 = state_26713__$1;
(statearr_26755_26822[(2)] = null);

(statearr_26755_26822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (6))){
var inst_26645 = (state_26713[(29)]);
var inst_26644 = cljs.core.deref.call(null,cs);
var inst_26645__$1 = cljs.core.keys.call(null,inst_26644);
var inst_26646 = cljs.core.count.call(null,inst_26645__$1);
var inst_26647 = cljs.core.reset_BANG_.call(null,dctr,inst_26646);
var inst_26652 = cljs.core.seq.call(null,inst_26645__$1);
var inst_26653 = inst_26652;
var inst_26654 = null;
var inst_26655 = (0);
var inst_26656 = (0);
var state_26713__$1 = (function (){var statearr_26756 = state_26713;
(statearr_26756[(30)] = inst_26647);

(statearr_26756[(9)] = inst_26654);

(statearr_26756[(20)] = inst_26653);

(statearr_26756[(21)] = inst_26655);

(statearr_26756[(11)] = inst_26656);

(statearr_26756[(29)] = inst_26645__$1);

return statearr_26756;
})();
var statearr_26757_26823 = state_26713__$1;
(statearr_26757_26823[(2)] = null);

(statearr_26757_26823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (28))){
var inst_26653 = (state_26713[(20)]);
var inst_26672 = (state_26713[(25)]);
var inst_26672__$1 = cljs.core.seq.call(null,inst_26653);
var state_26713__$1 = (function (){var statearr_26758 = state_26713;
(statearr_26758[(25)] = inst_26672__$1);

return statearr_26758;
})();
if(inst_26672__$1){
var statearr_26759_26824 = state_26713__$1;
(statearr_26759_26824[(1)] = (33));

} else {
var statearr_26760_26825 = state_26713__$1;
(statearr_26760_26825[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (25))){
var inst_26655 = (state_26713[(21)]);
var inst_26656 = (state_26713[(11)]);
var inst_26658 = (inst_26656 < inst_26655);
var inst_26659 = inst_26658;
var state_26713__$1 = state_26713;
if(cljs.core.truth_(inst_26659)){
var statearr_26761_26826 = state_26713__$1;
(statearr_26761_26826[(1)] = (27));

} else {
var statearr_26762_26827 = state_26713__$1;
(statearr_26762_26827[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (34))){
var state_26713__$1 = state_26713;
var statearr_26763_26828 = state_26713__$1;
(statearr_26763_26828[(2)] = null);

(statearr_26763_26828[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (17))){
var state_26713__$1 = state_26713;
var statearr_26764_26829 = state_26713__$1;
(statearr_26764_26829[(2)] = null);

(statearr_26764_26829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (3))){
var inst_26711 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26713__$1,inst_26711);
} else {
if((state_val_26714 === (12))){
var inst_26640 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26765_26830 = state_26713__$1;
(statearr_26765_26830[(2)] = inst_26640);

(statearr_26765_26830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (2))){
var state_26713__$1 = state_26713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26713__$1,(4),ch);
} else {
if((state_val_26714 === (23))){
var state_26713__$1 = state_26713;
var statearr_26766_26831 = state_26713__$1;
(statearr_26766_26831[(2)] = null);

(statearr_26766_26831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (35))){
var inst_26695 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26767_26832 = state_26713__$1;
(statearr_26767_26832[(2)] = inst_26695);

(statearr_26767_26832[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (19))){
var inst_26612 = (state_26713[(7)]);
var inst_26616 = cljs.core.chunk_first.call(null,inst_26612);
var inst_26617 = cljs.core.chunk_rest.call(null,inst_26612);
var inst_26618 = cljs.core.count.call(null,inst_26616);
var inst_26590 = inst_26617;
var inst_26591 = inst_26616;
var inst_26592 = inst_26618;
var inst_26593 = (0);
var state_26713__$1 = (function (){var statearr_26768 = state_26713;
(statearr_26768[(13)] = inst_26593);

(statearr_26768[(14)] = inst_26592);

(statearr_26768[(15)] = inst_26590);

(statearr_26768[(16)] = inst_26591);

return statearr_26768;
})();
var statearr_26769_26833 = state_26713__$1;
(statearr_26769_26833[(2)] = null);

(statearr_26769_26833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (11))){
var inst_26590 = (state_26713[(15)]);
var inst_26612 = (state_26713[(7)]);
var inst_26612__$1 = cljs.core.seq.call(null,inst_26590);
var state_26713__$1 = (function (){var statearr_26770 = state_26713;
(statearr_26770[(7)] = inst_26612__$1);

return statearr_26770;
})();
if(inst_26612__$1){
var statearr_26771_26834 = state_26713__$1;
(statearr_26771_26834[(1)] = (16));

} else {
var statearr_26772_26835 = state_26713__$1;
(statearr_26772_26835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (9))){
var inst_26642 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26773_26836 = state_26713__$1;
(statearr_26773_26836[(2)] = inst_26642);

(statearr_26773_26836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (5))){
var inst_26588 = cljs.core.deref.call(null,cs);
var inst_26589 = cljs.core.seq.call(null,inst_26588);
var inst_26590 = inst_26589;
var inst_26591 = null;
var inst_26592 = (0);
var inst_26593 = (0);
var state_26713__$1 = (function (){var statearr_26774 = state_26713;
(statearr_26774[(13)] = inst_26593);

(statearr_26774[(14)] = inst_26592);

(statearr_26774[(15)] = inst_26590);

(statearr_26774[(16)] = inst_26591);

return statearr_26774;
})();
var statearr_26775_26837 = state_26713__$1;
(statearr_26775_26837[(2)] = null);

(statearr_26775_26837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (14))){
var state_26713__$1 = state_26713;
var statearr_26776_26838 = state_26713__$1;
(statearr_26776_26838[(2)] = null);

(statearr_26776_26838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (45))){
var inst_26703 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26777_26839 = state_26713__$1;
(statearr_26777_26839[(2)] = inst_26703);

(statearr_26777_26839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (26))){
var inst_26645 = (state_26713[(29)]);
var inst_26699 = (state_26713[(2)]);
var inst_26700 = cljs.core.seq.call(null,inst_26645);
var state_26713__$1 = (function (){var statearr_26778 = state_26713;
(statearr_26778[(31)] = inst_26699);

return statearr_26778;
})();
if(inst_26700){
var statearr_26779_26840 = state_26713__$1;
(statearr_26779_26840[(1)] = (42));

} else {
var statearr_26780_26841 = state_26713__$1;
(statearr_26780_26841[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (16))){
var inst_26612 = (state_26713[(7)]);
var inst_26614 = cljs.core.chunked_seq_QMARK_.call(null,inst_26612);
var state_26713__$1 = state_26713;
if(inst_26614){
var statearr_26781_26842 = state_26713__$1;
(statearr_26781_26842[(1)] = (19));

} else {
var statearr_26782_26843 = state_26713__$1;
(statearr_26782_26843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (38))){
var inst_26692 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26783_26844 = state_26713__$1;
(statearr_26783_26844[(2)] = inst_26692);

(statearr_26783_26844[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (30))){
var state_26713__$1 = state_26713;
var statearr_26784_26845 = state_26713__$1;
(statearr_26784_26845[(2)] = null);

(statearr_26784_26845[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (10))){
var inst_26593 = (state_26713[(13)]);
var inst_26591 = (state_26713[(16)]);
var inst_26601 = cljs.core._nth.call(null,inst_26591,inst_26593);
var inst_26602 = cljs.core.nth.call(null,inst_26601,(0),null);
var inst_26603 = cljs.core.nth.call(null,inst_26601,(1),null);
var state_26713__$1 = (function (){var statearr_26785 = state_26713;
(statearr_26785[(26)] = inst_26602);

return statearr_26785;
})();
if(cljs.core.truth_(inst_26603)){
var statearr_26786_26846 = state_26713__$1;
(statearr_26786_26846[(1)] = (13));

} else {
var statearr_26787_26847 = state_26713__$1;
(statearr_26787_26847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (18))){
var inst_26638 = (state_26713[(2)]);
var state_26713__$1 = state_26713;
var statearr_26788_26848 = state_26713__$1;
(statearr_26788_26848[(2)] = inst_26638);

(statearr_26788_26848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (42))){
var state_26713__$1 = state_26713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26713__$1,(45),dchan);
} else {
if((state_val_26714 === (37))){
var inst_26681 = (state_26713[(23)]);
var inst_26581 = (state_26713[(12)]);
var inst_26672 = (state_26713[(25)]);
var inst_26681__$1 = cljs.core.first.call(null,inst_26672);
var inst_26682 = cljs.core.async.put_BANG_.call(null,inst_26681__$1,inst_26581,done);
var state_26713__$1 = (function (){var statearr_26789 = state_26713;
(statearr_26789[(23)] = inst_26681__$1);

return statearr_26789;
})();
if(cljs.core.truth_(inst_26682)){
var statearr_26790_26849 = state_26713__$1;
(statearr_26790_26849[(1)] = (39));

} else {
var statearr_26791_26850 = state_26713__$1;
(statearr_26791_26850[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (8))){
var inst_26593 = (state_26713[(13)]);
var inst_26592 = (state_26713[(14)]);
var inst_26595 = (inst_26593 < inst_26592);
var inst_26596 = inst_26595;
var state_26713__$1 = state_26713;
if(cljs.core.truth_(inst_26596)){
var statearr_26792_26851 = state_26713__$1;
(statearr_26792_26851[(1)] = (10));

} else {
var statearr_26793_26852 = state_26713__$1;
(statearr_26793_26852[(1)] = (11));

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
});})(c__25979__auto___26798,cs,m,dchan,dctr,done))
;
return ((function (switch__25889__auto__,c__25979__auto___26798,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25890__auto__ = null;
var cljs$core$async$mult_$_state_machine__25890__auto____0 = (function (){
var statearr_26794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26794[(0)] = cljs$core$async$mult_$_state_machine__25890__auto__);

(statearr_26794[(1)] = (1));

return statearr_26794;
});
var cljs$core$async$mult_$_state_machine__25890__auto____1 = (function (state_26713){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e26795){if((e26795 instanceof Object)){
var ex__25893__auto__ = e26795;
var statearr_26796_26853 = state_26713;
(statearr_26796_26853[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26854 = state_26713;
state_26713 = G__26854;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25890__auto__ = function(state_26713){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25890__auto____1.call(this,state_26713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25890__auto____0;
cljs$core$async$mult_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25890__auto____1;
return cljs$core$async$mult_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___26798,cs,m,dchan,dctr,done))
})();
var state__25981__auto__ = (function (){var statearr_26797 = f__25980__auto__.call(null);
(statearr_26797[(6)] = c__25979__auto___26798);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___26798,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26856 = arguments.length;
switch (G__26856) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m,ch);
} else {
var m__4211__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m,ch);
} else {
var m__4211__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m);
} else {
var m__4211__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m,state_map);
} else {
var m__4211__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4210__auto__ = (((m == null))?null:m);
var m__4211__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,m,mode);
} else {
var m__4211__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4501__auto__ = [];
var len__4498__auto___26868 = arguments.length;
var i__4499__auto___26869 = (0);
while(true){
if((i__4499__auto___26869 < len__4498__auto___26868)){
args__4501__auto__.push((arguments[i__4499__auto___26869]));

var G__26870 = (i__4499__auto___26869 + (1));
i__4499__auto___26869 = G__26870;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((3) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4502__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26862){
var map__26863 = p__26862;
var map__26863__$1 = ((((!((map__26863 == null)))?(((((map__26863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26863):map__26863);
var opts = map__26863__$1;
var statearr_26865_26871 = state;
(statearr_26865_26871[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__26863,map__26863__$1,opts){
return (function (val){
var statearr_26866_26872 = state;
(statearr_26866_26872[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26863,map__26863__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26867_26873 = state;
(statearr_26867_26873[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26858){
var G__26859 = cljs.core.first.call(null,seq26858);
var seq26858__$1 = cljs.core.next.call(null,seq26858);
var G__26860 = cljs.core.first.call(null,seq26858__$1);
var seq26858__$2 = cljs.core.next.call(null,seq26858__$1);
var G__26861 = cljs.core.first.call(null,seq26858__$2);
var seq26858__$3 = cljs.core.next.call(null,seq26858__$2);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26859,G__26860,G__26861,seq26858__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26874 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26875){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26875 = meta26875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26876,meta26875__$1){
var self__ = this;
var _26876__$1 = this;
return (new cljs.core.async.t_cljs$core$async26874(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26875__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26876){
var self__ = this;
var _26876__$1 = this;
return self__.meta26875;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26875","meta26875",5781486,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26874";

cljs.core.async.t_cljs$core$async26874.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async26874");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26874.
 */
cljs.core.async.__GT_t_cljs$core$async26874 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26874(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26875){
return (new cljs.core.async.t_cljs$core$async26874(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26875));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26874(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25979__auto___27038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26978){
var state_val_26979 = (state_26978[(1)]);
if((state_val_26979 === (7))){
var inst_26893 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_26980_27039 = state_26978__$1;
(statearr_26980_27039[(2)] = inst_26893);

(statearr_26980_27039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (20))){
var inst_26905 = (state_26978[(7)]);
var state_26978__$1 = state_26978;
var statearr_26981_27040 = state_26978__$1;
(statearr_26981_27040[(2)] = inst_26905);

(statearr_26981_27040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (27))){
var state_26978__$1 = state_26978;
var statearr_26982_27041 = state_26978__$1;
(statearr_26982_27041[(2)] = null);

(statearr_26982_27041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (1))){
var inst_26880 = (state_26978[(8)]);
var inst_26880__$1 = calc_state.call(null);
var inst_26882 = (inst_26880__$1 == null);
var inst_26883 = cljs.core.not.call(null,inst_26882);
var state_26978__$1 = (function (){var statearr_26983 = state_26978;
(statearr_26983[(8)] = inst_26880__$1);

return statearr_26983;
})();
if(inst_26883){
var statearr_26984_27042 = state_26978__$1;
(statearr_26984_27042[(1)] = (2));

} else {
var statearr_26985_27043 = state_26978__$1;
(statearr_26985_27043[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (24))){
var inst_26952 = (state_26978[(9)]);
var inst_26938 = (state_26978[(10)]);
var inst_26929 = (state_26978[(11)]);
var inst_26952__$1 = inst_26929.call(null,inst_26938);
var state_26978__$1 = (function (){var statearr_26986 = state_26978;
(statearr_26986[(9)] = inst_26952__$1);

return statearr_26986;
})();
if(cljs.core.truth_(inst_26952__$1)){
var statearr_26987_27044 = state_26978__$1;
(statearr_26987_27044[(1)] = (29));

} else {
var statearr_26988_27045 = state_26978__$1;
(statearr_26988_27045[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (4))){
var inst_26896 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26896)){
var statearr_26989_27046 = state_26978__$1;
(statearr_26989_27046[(1)] = (8));

} else {
var statearr_26990_27047 = state_26978__$1;
(statearr_26990_27047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (15))){
var inst_26923 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26923)){
var statearr_26991_27048 = state_26978__$1;
(statearr_26991_27048[(1)] = (19));

} else {
var statearr_26992_27049 = state_26978__$1;
(statearr_26992_27049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (21))){
var inst_26928 = (state_26978[(12)]);
var inst_26928__$1 = (state_26978[(2)]);
var inst_26929 = cljs.core.get.call(null,inst_26928__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26930 = cljs.core.get.call(null,inst_26928__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26931 = cljs.core.get.call(null,inst_26928__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26978__$1 = (function (){var statearr_26993 = state_26978;
(statearr_26993[(12)] = inst_26928__$1);

(statearr_26993[(11)] = inst_26929);

(statearr_26993[(13)] = inst_26930);

return statearr_26993;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26978__$1,(22),inst_26931);
} else {
if((state_val_26979 === (31))){
var inst_26960 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26960)){
var statearr_26994_27050 = state_26978__$1;
(statearr_26994_27050[(1)] = (32));

} else {
var statearr_26995_27051 = state_26978__$1;
(statearr_26995_27051[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (32))){
var inst_26937 = (state_26978[(14)]);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26978__$1,(35),out,inst_26937);
} else {
if((state_val_26979 === (33))){
var inst_26928 = (state_26978[(12)]);
var inst_26905 = inst_26928;
var state_26978__$1 = (function (){var statearr_26996 = state_26978;
(statearr_26996[(7)] = inst_26905);

return statearr_26996;
})();
var statearr_26997_27052 = state_26978__$1;
(statearr_26997_27052[(2)] = null);

(statearr_26997_27052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (13))){
var inst_26905 = (state_26978[(7)]);
var inst_26912 = inst_26905.cljs$lang$protocol_mask$partition0$;
var inst_26913 = (inst_26912 & (64));
var inst_26914 = inst_26905.cljs$core$ISeq$;
var inst_26915 = (cljs.core.PROTOCOL_SENTINEL === inst_26914);
var inst_26916 = ((inst_26913) || (inst_26915));
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26916)){
var statearr_26998_27053 = state_26978__$1;
(statearr_26998_27053[(1)] = (16));

} else {
var statearr_26999_27054 = state_26978__$1;
(statearr_26999_27054[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (22))){
var inst_26937 = (state_26978[(14)]);
var inst_26938 = (state_26978[(10)]);
var inst_26936 = (state_26978[(2)]);
var inst_26937__$1 = cljs.core.nth.call(null,inst_26936,(0),null);
var inst_26938__$1 = cljs.core.nth.call(null,inst_26936,(1),null);
var inst_26939 = (inst_26937__$1 == null);
var inst_26940 = cljs.core._EQ_.call(null,inst_26938__$1,change);
var inst_26941 = ((inst_26939) || (inst_26940));
var state_26978__$1 = (function (){var statearr_27000 = state_26978;
(statearr_27000[(14)] = inst_26937__$1);

(statearr_27000[(10)] = inst_26938__$1);

return statearr_27000;
})();
if(cljs.core.truth_(inst_26941)){
var statearr_27001_27055 = state_26978__$1;
(statearr_27001_27055[(1)] = (23));

} else {
var statearr_27002_27056 = state_26978__$1;
(statearr_27002_27056[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (36))){
var inst_26928 = (state_26978[(12)]);
var inst_26905 = inst_26928;
var state_26978__$1 = (function (){var statearr_27003 = state_26978;
(statearr_27003[(7)] = inst_26905);

return statearr_27003;
})();
var statearr_27004_27057 = state_26978__$1;
(statearr_27004_27057[(2)] = null);

(statearr_27004_27057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (29))){
var inst_26952 = (state_26978[(9)]);
var state_26978__$1 = state_26978;
var statearr_27005_27058 = state_26978__$1;
(statearr_27005_27058[(2)] = inst_26952);

(statearr_27005_27058[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (6))){
var state_26978__$1 = state_26978;
var statearr_27006_27059 = state_26978__$1;
(statearr_27006_27059[(2)] = false);

(statearr_27006_27059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (28))){
var inst_26948 = (state_26978[(2)]);
var inst_26949 = calc_state.call(null);
var inst_26905 = inst_26949;
var state_26978__$1 = (function (){var statearr_27007 = state_26978;
(statearr_27007[(7)] = inst_26905);

(statearr_27007[(15)] = inst_26948);

return statearr_27007;
})();
var statearr_27008_27060 = state_26978__$1;
(statearr_27008_27060[(2)] = null);

(statearr_27008_27060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (25))){
var inst_26974 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_27009_27061 = state_26978__$1;
(statearr_27009_27061[(2)] = inst_26974);

(statearr_27009_27061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (34))){
var inst_26972 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_27010_27062 = state_26978__$1;
(statearr_27010_27062[(2)] = inst_26972);

(statearr_27010_27062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (17))){
var state_26978__$1 = state_26978;
var statearr_27011_27063 = state_26978__$1;
(statearr_27011_27063[(2)] = false);

(statearr_27011_27063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (3))){
var state_26978__$1 = state_26978;
var statearr_27012_27064 = state_26978__$1;
(statearr_27012_27064[(2)] = false);

(statearr_27012_27064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (12))){
var inst_26976 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26978__$1,inst_26976);
} else {
if((state_val_26979 === (2))){
var inst_26880 = (state_26978[(8)]);
var inst_26885 = inst_26880.cljs$lang$protocol_mask$partition0$;
var inst_26886 = (inst_26885 & (64));
var inst_26887 = inst_26880.cljs$core$ISeq$;
var inst_26888 = (cljs.core.PROTOCOL_SENTINEL === inst_26887);
var inst_26889 = ((inst_26886) || (inst_26888));
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26889)){
var statearr_27013_27065 = state_26978__$1;
(statearr_27013_27065[(1)] = (5));

} else {
var statearr_27014_27066 = state_26978__$1;
(statearr_27014_27066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (23))){
var inst_26937 = (state_26978[(14)]);
var inst_26943 = (inst_26937 == null);
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26943)){
var statearr_27015_27067 = state_26978__$1;
(statearr_27015_27067[(1)] = (26));

} else {
var statearr_27016_27068 = state_26978__$1;
(statearr_27016_27068[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (35))){
var inst_26963 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26963)){
var statearr_27017_27069 = state_26978__$1;
(statearr_27017_27069[(1)] = (36));

} else {
var statearr_27018_27070 = state_26978__$1;
(statearr_27018_27070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (19))){
var inst_26905 = (state_26978[(7)]);
var inst_26925 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26905);
var state_26978__$1 = state_26978;
var statearr_27019_27071 = state_26978__$1;
(statearr_27019_27071[(2)] = inst_26925);

(statearr_27019_27071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (11))){
var inst_26905 = (state_26978[(7)]);
var inst_26909 = (inst_26905 == null);
var inst_26910 = cljs.core.not.call(null,inst_26909);
var state_26978__$1 = state_26978;
if(inst_26910){
var statearr_27020_27072 = state_26978__$1;
(statearr_27020_27072[(1)] = (13));

} else {
var statearr_27021_27073 = state_26978__$1;
(statearr_27021_27073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (9))){
var inst_26880 = (state_26978[(8)]);
var state_26978__$1 = state_26978;
var statearr_27022_27074 = state_26978__$1;
(statearr_27022_27074[(2)] = inst_26880);

(statearr_27022_27074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (5))){
var state_26978__$1 = state_26978;
var statearr_27023_27075 = state_26978__$1;
(statearr_27023_27075[(2)] = true);

(statearr_27023_27075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (14))){
var state_26978__$1 = state_26978;
var statearr_27024_27076 = state_26978__$1;
(statearr_27024_27076[(2)] = false);

(statearr_27024_27076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (26))){
var inst_26938 = (state_26978[(10)]);
var inst_26945 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26938);
var state_26978__$1 = state_26978;
var statearr_27025_27077 = state_26978__$1;
(statearr_27025_27077[(2)] = inst_26945);

(statearr_27025_27077[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (16))){
var state_26978__$1 = state_26978;
var statearr_27026_27078 = state_26978__$1;
(statearr_27026_27078[(2)] = true);

(statearr_27026_27078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (38))){
var inst_26968 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_27027_27079 = state_26978__$1;
(statearr_27027_27079[(2)] = inst_26968);

(statearr_27027_27079[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (30))){
var inst_26938 = (state_26978[(10)]);
var inst_26929 = (state_26978[(11)]);
var inst_26930 = (state_26978[(13)]);
var inst_26955 = cljs.core.empty_QMARK_.call(null,inst_26929);
var inst_26956 = inst_26930.call(null,inst_26938);
var inst_26957 = cljs.core.not.call(null,inst_26956);
var inst_26958 = ((inst_26955) && (inst_26957));
var state_26978__$1 = state_26978;
var statearr_27028_27080 = state_26978__$1;
(statearr_27028_27080[(2)] = inst_26958);

(statearr_27028_27080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (10))){
var inst_26880 = (state_26978[(8)]);
var inst_26901 = (state_26978[(2)]);
var inst_26902 = cljs.core.get.call(null,inst_26901,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26903 = cljs.core.get.call(null,inst_26901,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26904 = cljs.core.get.call(null,inst_26901,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26905 = inst_26880;
var state_26978__$1 = (function (){var statearr_27029 = state_26978;
(statearr_27029[(16)] = inst_26903);

(statearr_27029[(17)] = inst_26902);

(statearr_27029[(18)] = inst_26904);

(statearr_27029[(7)] = inst_26905);

return statearr_27029;
})();
var statearr_27030_27081 = state_26978__$1;
(statearr_27030_27081[(2)] = null);

(statearr_27030_27081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (18))){
var inst_26920 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_27031_27082 = state_26978__$1;
(statearr_27031_27082[(2)] = inst_26920);

(statearr_27031_27082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (37))){
var state_26978__$1 = state_26978;
var statearr_27032_27083 = state_26978__$1;
(statearr_27032_27083[(2)] = null);

(statearr_27032_27083[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (8))){
var inst_26880 = (state_26978[(8)]);
var inst_26898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26880);
var state_26978__$1 = state_26978;
var statearr_27033_27084 = state_26978__$1;
(statearr_27033_27084[(2)] = inst_26898);

(statearr_27033_27084[(1)] = (10));


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
});})(c__25979__auto___27038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25889__auto__,c__25979__auto___27038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25890__auto__ = null;
var cljs$core$async$mix_$_state_machine__25890__auto____0 = (function (){
var statearr_27034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27034[(0)] = cljs$core$async$mix_$_state_machine__25890__auto__);

(statearr_27034[(1)] = (1));

return statearr_27034;
});
var cljs$core$async$mix_$_state_machine__25890__auto____1 = (function (state_26978){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_26978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27035){if((e27035 instanceof Object)){
var ex__25893__auto__ = e27035;
var statearr_27036_27085 = state_26978;
(statearr_27036_27085[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27086 = state_26978;
state_26978 = G__27086;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25890__auto__ = function(state_26978){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25890__auto____1.call(this,state_26978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25890__auto____0;
cljs$core$async$mix_$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25890__auto____1;
return cljs$core$async$mix_$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25981__auto__ = (function (){var statearr_27037 = f__25980__auto__.call(null);
(statearr_27037[(6)] = c__25979__auto___27038);

return statearr_27037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4210__auto__ = (((p == null))?null:p);
var m__4211__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4211__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4210__auto__ = (((p == null))?null:p);
var m__4211__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,p,v,ch);
} else {
var m__4211__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27088 = arguments.length;
switch (G__27088) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4210__auto__ = (((p == null))?null:p);
var m__4211__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,p);
} else {
var m__4211__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4210__auto__ = (((p == null))?null:p);
var m__4211__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,p,v);
} else {
var m__4211__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27092 = arguments.length;
switch (G__27092) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3921__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3921__auto__,mults){
return (function (p1__27090_SHARP_){
if(cljs.core.truth_(p1__27090_SHARP_.call(null,topic))){
return p1__27090_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27090_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3921__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27093 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27094){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27094 = meta27094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27095,meta27094__$1){
var self__ = this;
var _27095__$1 = this;
return (new cljs.core.async.t_cljs$core$async27093(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27094__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27095){
var self__ = this;
var _27095__$1 = this;
return self__.meta27094;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27094","meta27094",668495318,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27093";

cljs.core.async.t_cljs$core$async27093.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async27093");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27093.
 */
cljs.core.async.__GT_t_cljs$core$async27093 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27093(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27094){
return (new cljs.core.async.t_cljs$core$async27093(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27094));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27093(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25979__auto___27213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27213,mults,ensure_mult,p){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27213,mults,ensure_mult,p){
return (function (state_27167){
var state_val_27168 = (state_27167[(1)]);
if((state_val_27168 === (7))){
var inst_27163 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27169_27214 = state_27167__$1;
(statearr_27169_27214[(2)] = inst_27163);

(statearr_27169_27214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (20))){
var state_27167__$1 = state_27167;
var statearr_27170_27215 = state_27167__$1;
(statearr_27170_27215[(2)] = null);

(statearr_27170_27215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (1))){
var state_27167__$1 = state_27167;
var statearr_27171_27216 = state_27167__$1;
(statearr_27171_27216[(2)] = null);

(statearr_27171_27216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (24))){
var inst_27146 = (state_27167[(7)]);
var inst_27155 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27146);
var state_27167__$1 = state_27167;
var statearr_27172_27217 = state_27167__$1;
(statearr_27172_27217[(2)] = inst_27155);

(statearr_27172_27217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (4))){
var inst_27098 = (state_27167[(8)]);
var inst_27098__$1 = (state_27167[(2)]);
var inst_27099 = (inst_27098__$1 == null);
var state_27167__$1 = (function (){var statearr_27173 = state_27167;
(statearr_27173[(8)] = inst_27098__$1);

return statearr_27173;
})();
if(cljs.core.truth_(inst_27099)){
var statearr_27174_27218 = state_27167__$1;
(statearr_27174_27218[(1)] = (5));

} else {
var statearr_27175_27219 = state_27167__$1;
(statearr_27175_27219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (15))){
var inst_27140 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27176_27220 = state_27167__$1;
(statearr_27176_27220[(2)] = inst_27140);

(statearr_27176_27220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (21))){
var inst_27160 = (state_27167[(2)]);
var state_27167__$1 = (function (){var statearr_27177 = state_27167;
(statearr_27177[(9)] = inst_27160);

return statearr_27177;
})();
var statearr_27178_27221 = state_27167__$1;
(statearr_27178_27221[(2)] = null);

(statearr_27178_27221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (13))){
var inst_27122 = (state_27167[(10)]);
var inst_27124 = cljs.core.chunked_seq_QMARK_.call(null,inst_27122);
var state_27167__$1 = state_27167;
if(inst_27124){
var statearr_27179_27222 = state_27167__$1;
(statearr_27179_27222[(1)] = (16));

} else {
var statearr_27180_27223 = state_27167__$1;
(statearr_27180_27223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (22))){
var inst_27152 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
if(cljs.core.truth_(inst_27152)){
var statearr_27181_27224 = state_27167__$1;
(statearr_27181_27224[(1)] = (23));

} else {
var statearr_27182_27225 = state_27167__$1;
(statearr_27182_27225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (6))){
var inst_27148 = (state_27167[(11)]);
var inst_27146 = (state_27167[(7)]);
var inst_27098 = (state_27167[(8)]);
var inst_27146__$1 = topic_fn.call(null,inst_27098);
var inst_27147 = cljs.core.deref.call(null,mults);
var inst_27148__$1 = cljs.core.get.call(null,inst_27147,inst_27146__$1);
var state_27167__$1 = (function (){var statearr_27183 = state_27167;
(statearr_27183[(11)] = inst_27148__$1);

(statearr_27183[(7)] = inst_27146__$1);

return statearr_27183;
})();
if(cljs.core.truth_(inst_27148__$1)){
var statearr_27184_27226 = state_27167__$1;
(statearr_27184_27226[(1)] = (19));

} else {
var statearr_27185_27227 = state_27167__$1;
(statearr_27185_27227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (25))){
var inst_27157 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27186_27228 = state_27167__$1;
(statearr_27186_27228[(2)] = inst_27157);

(statearr_27186_27228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (17))){
var inst_27122 = (state_27167[(10)]);
var inst_27131 = cljs.core.first.call(null,inst_27122);
var inst_27132 = cljs.core.async.muxch_STAR_.call(null,inst_27131);
var inst_27133 = cljs.core.async.close_BANG_.call(null,inst_27132);
var inst_27134 = cljs.core.next.call(null,inst_27122);
var inst_27108 = inst_27134;
var inst_27109 = null;
var inst_27110 = (0);
var inst_27111 = (0);
var state_27167__$1 = (function (){var statearr_27187 = state_27167;
(statearr_27187[(12)] = inst_27108);

(statearr_27187[(13)] = inst_27109);

(statearr_27187[(14)] = inst_27133);

(statearr_27187[(15)] = inst_27111);

(statearr_27187[(16)] = inst_27110);

return statearr_27187;
})();
var statearr_27188_27229 = state_27167__$1;
(statearr_27188_27229[(2)] = null);

(statearr_27188_27229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (3))){
var inst_27165 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27167__$1,inst_27165);
} else {
if((state_val_27168 === (12))){
var inst_27142 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27189_27230 = state_27167__$1;
(statearr_27189_27230[(2)] = inst_27142);

(statearr_27189_27230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (2))){
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27167__$1,(4),ch);
} else {
if((state_val_27168 === (23))){
var state_27167__$1 = state_27167;
var statearr_27190_27231 = state_27167__$1;
(statearr_27190_27231[(2)] = null);

(statearr_27190_27231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (19))){
var inst_27148 = (state_27167[(11)]);
var inst_27098 = (state_27167[(8)]);
var inst_27150 = cljs.core.async.muxch_STAR_.call(null,inst_27148);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27167__$1,(22),inst_27150,inst_27098);
} else {
if((state_val_27168 === (11))){
var inst_27108 = (state_27167[(12)]);
var inst_27122 = (state_27167[(10)]);
var inst_27122__$1 = cljs.core.seq.call(null,inst_27108);
var state_27167__$1 = (function (){var statearr_27191 = state_27167;
(statearr_27191[(10)] = inst_27122__$1);

return statearr_27191;
})();
if(inst_27122__$1){
var statearr_27192_27232 = state_27167__$1;
(statearr_27192_27232[(1)] = (13));

} else {
var statearr_27193_27233 = state_27167__$1;
(statearr_27193_27233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (9))){
var inst_27144 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27194_27234 = state_27167__$1;
(statearr_27194_27234[(2)] = inst_27144);

(statearr_27194_27234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (5))){
var inst_27105 = cljs.core.deref.call(null,mults);
var inst_27106 = cljs.core.vals.call(null,inst_27105);
var inst_27107 = cljs.core.seq.call(null,inst_27106);
var inst_27108 = inst_27107;
var inst_27109 = null;
var inst_27110 = (0);
var inst_27111 = (0);
var state_27167__$1 = (function (){var statearr_27195 = state_27167;
(statearr_27195[(12)] = inst_27108);

(statearr_27195[(13)] = inst_27109);

(statearr_27195[(15)] = inst_27111);

(statearr_27195[(16)] = inst_27110);

return statearr_27195;
})();
var statearr_27196_27235 = state_27167__$1;
(statearr_27196_27235[(2)] = null);

(statearr_27196_27235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (14))){
var state_27167__$1 = state_27167;
var statearr_27200_27236 = state_27167__$1;
(statearr_27200_27236[(2)] = null);

(statearr_27200_27236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (16))){
var inst_27122 = (state_27167[(10)]);
var inst_27126 = cljs.core.chunk_first.call(null,inst_27122);
var inst_27127 = cljs.core.chunk_rest.call(null,inst_27122);
var inst_27128 = cljs.core.count.call(null,inst_27126);
var inst_27108 = inst_27127;
var inst_27109 = inst_27126;
var inst_27110 = inst_27128;
var inst_27111 = (0);
var state_27167__$1 = (function (){var statearr_27201 = state_27167;
(statearr_27201[(12)] = inst_27108);

(statearr_27201[(13)] = inst_27109);

(statearr_27201[(15)] = inst_27111);

(statearr_27201[(16)] = inst_27110);

return statearr_27201;
})();
var statearr_27202_27237 = state_27167__$1;
(statearr_27202_27237[(2)] = null);

(statearr_27202_27237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (10))){
var inst_27108 = (state_27167[(12)]);
var inst_27109 = (state_27167[(13)]);
var inst_27111 = (state_27167[(15)]);
var inst_27110 = (state_27167[(16)]);
var inst_27116 = cljs.core._nth.call(null,inst_27109,inst_27111);
var inst_27117 = cljs.core.async.muxch_STAR_.call(null,inst_27116);
var inst_27118 = cljs.core.async.close_BANG_.call(null,inst_27117);
var inst_27119 = (inst_27111 + (1));
var tmp27197 = inst_27108;
var tmp27198 = inst_27109;
var tmp27199 = inst_27110;
var inst_27108__$1 = tmp27197;
var inst_27109__$1 = tmp27198;
var inst_27110__$1 = tmp27199;
var inst_27111__$1 = inst_27119;
var state_27167__$1 = (function (){var statearr_27203 = state_27167;
(statearr_27203[(12)] = inst_27108__$1);

(statearr_27203[(13)] = inst_27109__$1);

(statearr_27203[(17)] = inst_27118);

(statearr_27203[(15)] = inst_27111__$1);

(statearr_27203[(16)] = inst_27110__$1);

return statearr_27203;
})();
var statearr_27204_27238 = state_27167__$1;
(statearr_27204_27238[(2)] = null);

(statearr_27204_27238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (18))){
var inst_27137 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27205_27239 = state_27167__$1;
(statearr_27205_27239[(2)] = inst_27137);

(statearr_27205_27239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (8))){
var inst_27111 = (state_27167[(15)]);
var inst_27110 = (state_27167[(16)]);
var inst_27113 = (inst_27111 < inst_27110);
var inst_27114 = inst_27113;
var state_27167__$1 = state_27167;
if(cljs.core.truth_(inst_27114)){
var statearr_27206_27240 = state_27167__$1;
(statearr_27206_27240[(1)] = (10));

} else {
var statearr_27207_27241 = state_27167__$1;
(statearr_27207_27241[(1)] = (11));

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
});})(c__25979__auto___27213,mults,ensure_mult,p))
;
return ((function (switch__25889__auto__,c__25979__auto___27213,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27208[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27208[(1)] = (1));

return statearr_27208;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27167){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27209){if((e27209 instanceof Object)){
var ex__25893__auto__ = e27209;
var statearr_27210_27242 = state_27167;
(statearr_27210_27242[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27243 = state_27167;
state_27167 = G__27243;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27213,mults,ensure_mult,p))
})();
var state__25981__auto__ = (function (){var statearr_27211 = f__25980__auto__.call(null);
(statearr_27211[(6)] = c__25979__auto___27213);

return statearr_27211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27213,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27245 = arguments.length;
switch (G__27245) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27248 = arguments.length;
switch (G__27248) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27251 = arguments.length;
switch (G__27251) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25979__auto___27318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27290){
var state_val_27291 = (state_27290[(1)]);
if((state_val_27291 === (7))){
var state_27290__$1 = state_27290;
var statearr_27292_27319 = state_27290__$1;
(statearr_27292_27319[(2)] = null);

(statearr_27292_27319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (1))){
var state_27290__$1 = state_27290;
var statearr_27293_27320 = state_27290__$1;
(statearr_27293_27320[(2)] = null);

(statearr_27293_27320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (4))){
var inst_27254 = (state_27290[(7)]);
var inst_27256 = (inst_27254 < cnt);
var state_27290__$1 = state_27290;
if(cljs.core.truth_(inst_27256)){
var statearr_27294_27321 = state_27290__$1;
(statearr_27294_27321[(1)] = (6));

} else {
var statearr_27295_27322 = state_27290__$1;
(statearr_27295_27322[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (15))){
var inst_27286 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27296_27323 = state_27290__$1;
(statearr_27296_27323[(2)] = inst_27286);

(statearr_27296_27323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (13))){
var inst_27279 = cljs.core.async.close_BANG_.call(null,out);
var state_27290__$1 = state_27290;
var statearr_27297_27324 = state_27290__$1;
(statearr_27297_27324[(2)] = inst_27279);

(statearr_27297_27324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (6))){
var state_27290__$1 = state_27290;
var statearr_27298_27325 = state_27290__$1;
(statearr_27298_27325[(2)] = null);

(statearr_27298_27325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (3))){
var inst_27288 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27290__$1,inst_27288);
} else {
if((state_val_27291 === (12))){
var inst_27276 = (state_27290[(8)]);
var inst_27276__$1 = (state_27290[(2)]);
var inst_27277 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27276__$1);
var state_27290__$1 = (function (){var statearr_27299 = state_27290;
(statearr_27299[(8)] = inst_27276__$1);

return statearr_27299;
})();
if(cljs.core.truth_(inst_27277)){
var statearr_27300_27326 = state_27290__$1;
(statearr_27300_27326[(1)] = (13));

} else {
var statearr_27301_27327 = state_27290__$1;
(statearr_27301_27327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (2))){
var inst_27253 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27254 = (0);
var state_27290__$1 = (function (){var statearr_27302 = state_27290;
(statearr_27302[(9)] = inst_27253);

(statearr_27302[(7)] = inst_27254);

return statearr_27302;
})();
var statearr_27303_27328 = state_27290__$1;
(statearr_27303_27328[(2)] = null);

(statearr_27303_27328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (11))){
var inst_27254 = (state_27290[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27290,(10),Object,null,(9));
var inst_27263 = chs__$1.call(null,inst_27254);
var inst_27264 = done.call(null,inst_27254);
var inst_27265 = cljs.core.async.take_BANG_.call(null,inst_27263,inst_27264);
var state_27290__$1 = state_27290;
var statearr_27304_27329 = state_27290__$1;
(statearr_27304_27329[(2)] = inst_27265);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27290__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (9))){
var inst_27254 = (state_27290[(7)]);
var inst_27267 = (state_27290[(2)]);
var inst_27268 = (inst_27254 + (1));
var inst_27254__$1 = inst_27268;
var state_27290__$1 = (function (){var statearr_27305 = state_27290;
(statearr_27305[(7)] = inst_27254__$1);

(statearr_27305[(10)] = inst_27267);

return statearr_27305;
})();
var statearr_27306_27330 = state_27290__$1;
(statearr_27306_27330[(2)] = null);

(statearr_27306_27330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (5))){
var inst_27274 = (state_27290[(2)]);
var state_27290__$1 = (function (){var statearr_27307 = state_27290;
(statearr_27307[(11)] = inst_27274);

return statearr_27307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(12),dchan);
} else {
if((state_val_27291 === (14))){
var inst_27276 = (state_27290[(8)]);
var inst_27281 = cljs.core.apply.call(null,f,inst_27276);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27290__$1,(16),out,inst_27281);
} else {
if((state_val_27291 === (16))){
var inst_27283 = (state_27290[(2)]);
var state_27290__$1 = (function (){var statearr_27308 = state_27290;
(statearr_27308[(12)] = inst_27283);

return statearr_27308;
})();
var statearr_27309_27331 = state_27290__$1;
(statearr_27309_27331[(2)] = null);

(statearr_27309_27331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (10))){
var inst_27258 = (state_27290[(2)]);
var inst_27259 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27290__$1 = (function (){var statearr_27310 = state_27290;
(statearr_27310[(13)] = inst_27258);

return statearr_27310;
})();
var statearr_27311_27332 = state_27290__$1;
(statearr_27311_27332[(2)] = inst_27259);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27290__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (8))){
var inst_27272 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27312_27333 = state_27290__$1;
(statearr_27312_27333[(2)] = inst_27272);

(statearr_27312_27333[(1)] = (5));


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
});})(c__25979__auto___27318,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25889__auto__,c__25979__auto___27318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27313[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27313[(1)] = (1));

return statearr_27313;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27290){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27314){if((e27314 instanceof Object)){
var ex__25893__auto__ = e27314;
var statearr_27315_27334 = state_27290;
(statearr_27315_27334[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27335 = state_27290;
state_27290 = G__27335;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27318,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25981__auto__ = (function (){var statearr_27316 = f__25980__auto__.call(null);
(statearr_27316[(6)] = c__25979__auto___27318);

return statearr_27316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27318,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27338 = arguments.length;
switch (G__27338) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25979__auto___27392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27392,out){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27392,out){
return (function (state_27370){
var state_val_27371 = (state_27370[(1)]);
if((state_val_27371 === (7))){
var inst_27350 = (state_27370[(7)]);
var inst_27349 = (state_27370[(8)]);
var inst_27349__$1 = (state_27370[(2)]);
var inst_27350__$1 = cljs.core.nth.call(null,inst_27349__$1,(0),null);
var inst_27351 = cljs.core.nth.call(null,inst_27349__$1,(1),null);
var inst_27352 = (inst_27350__$1 == null);
var state_27370__$1 = (function (){var statearr_27372 = state_27370;
(statearr_27372[(9)] = inst_27351);

(statearr_27372[(7)] = inst_27350__$1);

(statearr_27372[(8)] = inst_27349__$1);

return statearr_27372;
})();
if(cljs.core.truth_(inst_27352)){
var statearr_27373_27393 = state_27370__$1;
(statearr_27373_27393[(1)] = (8));

} else {
var statearr_27374_27394 = state_27370__$1;
(statearr_27374_27394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (1))){
var inst_27339 = cljs.core.vec.call(null,chs);
var inst_27340 = inst_27339;
var state_27370__$1 = (function (){var statearr_27375 = state_27370;
(statearr_27375[(10)] = inst_27340);

return statearr_27375;
})();
var statearr_27376_27395 = state_27370__$1;
(statearr_27376_27395[(2)] = null);

(statearr_27376_27395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (4))){
var inst_27340 = (state_27370[(10)]);
var state_27370__$1 = state_27370;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27370__$1,(7),inst_27340);
} else {
if((state_val_27371 === (6))){
var inst_27366 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27377_27396 = state_27370__$1;
(statearr_27377_27396[(2)] = inst_27366);

(statearr_27377_27396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (3))){
var inst_27368 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27370__$1,inst_27368);
} else {
if((state_val_27371 === (2))){
var inst_27340 = (state_27370[(10)]);
var inst_27342 = cljs.core.count.call(null,inst_27340);
var inst_27343 = (inst_27342 > (0));
var state_27370__$1 = state_27370;
if(cljs.core.truth_(inst_27343)){
var statearr_27379_27397 = state_27370__$1;
(statearr_27379_27397[(1)] = (4));

} else {
var statearr_27380_27398 = state_27370__$1;
(statearr_27380_27398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (11))){
var inst_27340 = (state_27370[(10)]);
var inst_27359 = (state_27370[(2)]);
var tmp27378 = inst_27340;
var inst_27340__$1 = tmp27378;
var state_27370__$1 = (function (){var statearr_27381 = state_27370;
(statearr_27381[(10)] = inst_27340__$1);

(statearr_27381[(11)] = inst_27359);

return statearr_27381;
})();
var statearr_27382_27399 = state_27370__$1;
(statearr_27382_27399[(2)] = null);

(statearr_27382_27399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (9))){
var inst_27350 = (state_27370[(7)]);
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27370__$1,(11),out,inst_27350);
} else {
if((state_val_27371 === (5))){
var inst_27364 = cljs.core.async.close_BANG_.call(null,out);
var state_27370__$1 = state_27370;
var statearr_27383_27400 = state_27370__$1;
(statearr_27383_27400[(2)] = inst_27364);

(statearr_27383_27400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (10))){
var inst_27362 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27384_27401 = state_27370__$1;
(statearr_27384_27401[(2)] = inst_27362);

(statearr_27384_27401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (8))){
var inst_27351 = (state_27370[(9)]);
var inst_27350 = (state_27370[(7)]);
var inst_27340 = (state_27370[(10)]);
var inst_27349 = (state_27370[(8)]);
var inst_27354 = (function (){var cs = inst_27340;
var vec__27345 = inst_27349;
var v = inst_27350;
var c = inst_27351;
return ((function (cs,vec__27345,v,c,inst_27351,inst_27350,inst_27340,inst_27349,state_val_27371,c__25979__auto___27392,out){
return (function (p1__27336_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27336_SHARP_);
});
;})(cs,vec__27345,v,c,inst_27351,inst_27350,inst_27340,inst_27349,state_val_27371,c__25979__auto___27392,out))
})();
var inst_27355 = cljs.core.filterv.call(null,inst_27354,inst_27340);
var inst_27340__$1 = inst_27355;
var state_27370__$1 = (function (){var statearr_27385 = state_27370;
(statearr_27385[(10)] = inst_27340__$1);

return statearr_27385;
})();
var statearr_27386_27402 = state_27370__$1;
(statearr_27386_27402[(2)] = null);

(statearr_27386_27402[(1)] = (2));


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
});})(c__25979__auto___27392,out))
;
return ((function (switch__25889__auto__,c__25979__auto___27392,out){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27387 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27387[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27387[(1)] = (1));

return statearr_27387;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27370){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27388){if((e27388 instanceof Object)){
var ex__25893__auto__ = e27388;
var statearr_27389_27403 = state_27370;
(statearr_27389_27403[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27404 = state_27370;
state_27370 = G__27404;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27392,out))
})();
var state__25981__auto__ = (function (){var statearr_27390 = f__25980__auto__.call(null);
(statearr_27390[(6)] = c__25979__auto___27392);

return statearr_27390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27392,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27406 = arguments.length;
switch (G__27406) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25979__auto___27451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27451,out){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27451,out){
return (function (state_27430){
var state_val_27431 = (state_27430[(1)]);
if((state_val_27431 === (7))){
var inst_27412 = (state_27430[(7)]);
var inst_27412__$1 = (state_27430[(2)]);
var inst_27413 = (inst_27412__$1 == null);
var inst_27414 = cljs.core.not.call(null,inst_27413);
var state_27430__$1 = (function (){var statearr_27432 = state_27430;
(statearr_27432[(7)] = inst_27412__$1);

return statearr_27432;
})();
if(inst_27414){
var statearr_27433_27452 = state_27430__$1;
(statearr_27433_27452[(1)] = (8));

} else {
var statearr_27434_27453 = state_27430__$1;
(statearr_27434_27453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (1))){
var inst_27407 = (0);
var state_27430__$1 = (function (){var statearr_27435 = state_27430;
(statearr_27435[(8)] = inst_27407);

return statearr_27435;
})();
var statearr_27436_27454 = state_27430__$1;
(statearr_27436_27454[(2)] = null);

(statearr_27436_27454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (4))){
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27430__$1,(7),ch);
} else {
if((state_val_27431 === (6))){
var inst_27425 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27437_27455 = state_27430__$1;
(statearr_27437_27455[(2)] = inst_27425);

(statearr_27437_27455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (3))){
var inst_27427 = (state_27430[(2)]);
var inst_27428 = cljs.core.async.close_BANG_.call(null,out);
var state_27430__$1 = (function (){var statearr_27438 = state_27430;
(statearr_27438[(9)] = inst_27427);

return statearr_27438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27430__$1,inst_27428);
} else {
if((state_val_27431 === (2))){
var inst_27407 = (state_27430[(8)]);
var inst_27409 = (inst_27407 < n);
var state_27430__$1 = state_27430;
if(cljs.core.truth_(inst_27409)){
var statearr_27439_27456 = state_27430__$1;
(statearr_27439_27456[(1)] = (4));

} else {
var statearr_27440_27457 = state_27430__$1;
(statearr_27440_27457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (11))){
var inst_27407 = (state_27430[(8)]);
var inst_27417 = (state_27430[(2)]);
var inst_27418 = (inst_27407 + (1));
var inst_27407__$1 = inst_27418;
var state_27430__$1 = (function (){var statearr_27441 = state_27430;
(statearr_27441[(8)] = inst_27407__$1);

(statearr_27441[(10)] = inst_27417);

return statearr_27441;
})();
var statearr_27442_27458 = state_27430__$1;
(statearr_27442_27458[(2)] = null);

(statearr_27442_27458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (9))){
var state_27430__$1 = state_27430;
var statearr_27443_27459 = state_27430__$1;
(statearr_27443_27459[(2)] = null);

(statearr_27443_27459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (5))){
var state_27430__$1 = state_27430;
var statearr_27444_27460 = state_27430__$1;
(statearr_27444_27460[(2)] = null);

(statearr_27444_27460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (10))){
var inst_27422 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27445_27461 = state_27430__$1;
(statearr_27445_27461[(2)] = inst_27422);

(statearr_27445_27461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (8))){
var inst_27412 = (state_27430[(7)]);
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27430__$1,(11),out,inst_27412);
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
});})(c__25979__auto___27451,out))
;
return ((function (switch__25889__auto__,c__25979__auto___27451,out){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27446[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27446[(1)] = (1));

return statearr_27446;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27430){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27447){if((e27447 instanceof Object)){
var ex__25893__auto__ = e27447;
var statearr_27448_27462 = state_27430;
(statearr_27448_27462[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27463 = state_27430;
state_27430 = G__27463;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27451,out))
})();
var state__25981__auto__ = (function (){var statearr_27449 = f__25980__auto__.call(null);
(statearr_27449[(6)] = c__25979__auto___27451);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27451,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27465 = (function (f,ch,meta27466){
this.f = f;
this.ch = ch;
this.meta27466 = meta27466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27467,meta27466__$1){
var self__ = this;
var _27467__$1 = this;
return (new cljs.core.async.t_cljs$core$async27465(self__.f,self__.ch,meta27466__$1));
});

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27467){
var self__ = this;
var _27467__$1 = this;
return self__.meta27466;
});

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27468 = (function (f,ch,meta27466,_,fn1,meta27469){
this.f = f;
this.ch = ch;
this.meta27466 = meta27466;
this._ = _;
this.fn1 = fn1;
this.meta27469 = meta27469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27470,meta27469__$1){
var self__ = this;
var _27470__$1 = this;
return (new cljs.core.async.t_cljs$core$async27468(self__.f,self__.ch,self__.meta27466,self__._,self__.fn1,meta27469__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27470){
var self__ = this;
var _27470__$1 = this;
return self__.meta27469;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27464_SHARP_){
return f1.call(null,(((p1__27464_SHARP_ == null))?null:self__.f.call(null,p1__27464_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27468.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27466","meta27466",1432802410,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27465","cljs.core.async/t_cljs$core$async27465",1085194420,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27469","meta27469",324085671,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27468";

cljs.core.async.t_cljs$core$async27468.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async27468");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27468.
 */
cljs.core.async.__GT_t_cljs$core$async27468 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27468(f__$1,ch__$1,meta27466__$1,___$2,fn1__$1,meta27469){
return (new cljs.core.async.t_cljs$core$async27468(f__$1,ch__$1,meta27466__$1,___$2,fn1__$1,meta27469));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27468(self__.f,self__.ch,self__.meta27466,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3910__auto__ = ret;
if(cljs.core.truth_(and__3910__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3910__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27466","meta27466",1432802410,null)], null);
});

cljs.core.async.t_cljs$core$async27465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27465";

cljs.core.async.t_cljs$core$async27465.cljs$lang$ctorPrWriter = (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async27465");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27465.
 */
cljs.core.async.__GT_t_cljs$core$async27465 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27465(f__$1,ch__$1,meta27466){
return (new cljs.core.async.t_cljs$core$async27465(f__$1,ch__$1,meta27466));
});

}

return (new cljs.core.async.t_cljs$core$async27465(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27471 = (function (f,ch,meta27472){
this.f = f;
this.ch = ch;
this.meta27472 = meta27472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27473,meta27472__$1){
var self__ = this;
var _27473__$1 = this;
return (new cljs.core.async.t_cljs$core$async27471(self__.f,self__.ch,meta27472__$1));
});

cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27473){
var self__ = this;
var _27473__$1 = this;
return self__.meta27472;
});

cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27472","meta27472",987645624,null)], null);
});

cljs.core.async.t_cljs$core$async27471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27471";

cljs.core.async.t_cljs$core$async27471.cljs$lang$ctorPrWriter = (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async27471");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27471.
 */
cljs.core.async.__GT_t_cljs$core$async27471 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27471(f__$1,ch__$1,meta27472){
return (new cljs.core.async.t_cljs$core$async27471(f__$1,ch__$1,meta27472));
});

}

return (new cljs.core.async.t_cljs$core$async27471(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27474 = (function (p,ch,meta27475){
this.p = p;
this.ch = ch;
this.meta27475 = meta27475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27476,meta27475__$1){
var self__ = this;
var _27476__$1 = this;
return (new cljs.core.async.t_cljs$core$async27474(self__.p,self__.ch,meta27475__$1));
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27476){
var self__ = this;
var _27476__$1 = this;
return self__.meta27475;
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27475","meta27475",-799131289,null)], null);
});

cljs.core.async.t_cljs$core$async27474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27474";

cljs.core.async.t_cljs$core$async27474.cljs$lang$ctorPrWriter = (function (this__4160__auto__,writer__4161__auto__,opt__4162__auto__){
return cljs.core._write.call(null,writer__4161__auto__,"cljs.core.async/t_cljs$core$async27474");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27474.
 */
cljs.core.async.__GT_t_cljs$core$async27474 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27474(p__$1,ch__$1,meta27475){
return (new cljs.core.async.t_cljs$core$async27474(p__$1,ch__$1,meta27475));
});

}

return (new cljs.core.async.t_cljs$core$async27474(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27478 = arguments.length;
switch (G__27478) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25979__auto___27518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27518,out){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27518,out){
return (function (state_27499){
var state_val_27500 = (state_27499[(1)]);
if((state_val_27500 === (7))){
var inst_27495 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27501_27519 = state_27499__$1;
(statearr_27501_27519[(2)] = inst_27495);

(statearr_27501_27519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (1))){
var state_27499__$1 = state_27499;
var statearr_27502_27520 = state_27499__$1;
(statearr_27502_27520[(2)] = null);

(statearr_27502_27520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (4))){
var inst_27481 = (state_27499[(7)]);
var inst_27481__$1 = (state_27499[(2)]);
var inst_27482 = (inst_27481__$1 == null);
var state_27499__$1 = (function (){var statearr_27503 = state_27499;
(statearr_27503[(7)] = inst_27481__$1);

return statearr_27503;
})();
if(cljs.core.truth_(inst_27482)){
var statearr_27504_27521 = state_27499__$1;
(statearr_27504_27521[(1)] = (5));

} else {
var statearr_27505_27522 = state_27499__$1;
(statearr_27505_27522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (6))){
var inst_27481 = (state_27499[(7)]);
var inst_27486 = p.call(null,inst_27481);
var state_27499__$1 = state_27499;
if(cljs.core.truth_(inst_27486)){
var statearr_27506_27523 = state_27499__$1;
(statearr_27506_27523[(1)] = (8));

} else {
var statearr_27507_27524 = state_27499__$1;
(statearr_27507_27524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (3))){
var inst_27497 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27499__$1,inst_27497);
} else {
if((state_val_27500 === (2))){
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27499__$1,(4),ch);
} else {
if((state_val_27500 === (11))){
var inst_27489 = (state_27499[(2)]);
var state_27499__$1 = state_27499;
var statearr_27508_27525 = state_27499__$1;
(statearr_27508_27525[(2)] = inst_27489);

(statearr_27508_27525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (9))){
var state_27499__$1 = state_27499;
var statearr_27509_27526 = state_27499__$1;
(statearr_27509_27526[(2)] = null);

(statearr_27509_27526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (5))){
var inst_27484 = cljs.core.async.close_BANG_.call(null,out);
var state_27499__$1 = state_27499;
var statearr_27510_27527 = state_27499__$1;
(statearr_27510_27527[(2)] = inst_27484);

(statearr_27510_27527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (10))){
var inst_27492 = (state_27499[(2)]);
var state_27499__$1 = (function (){var statearr_27511 = state_27499;
(statearr_27511[(8)] = inst_27492);

return statearr_27511;
})();
var statearr_27512_27528 = state_27499__$1;
(statearr_27512_27528[(2)] = null);

(statearr_27512_27528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27500 === (8))){
var inst_27481 = (state_27499[(7)]);
var state_27499__$1 = state_27499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27499__$1,(11),out,inst_27481);
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
});})(c__25979__auto___27518,out))
;
return ((function (switch__25889__auto__,c__25979__auto___27518,out){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27513 = [null,null,null,null,null,null,null,null,null];
(statearr_27513[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27513[(1)] = (1));

return statearr_27513;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27499){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27514){if((e27514 instanceof Object)){
var ex__25893__auto__ = e27514;
var statearr_27515_27529 = state_27499;
(statearr_27515_27529[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27530 = state_27499;
state_27499 = G__27530;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27518,out))
})();
var state__25981__auto__ = (function (){var statearr_27516 = f__25980__auto__.call(null);
(statearr_27516[(6)] = c__25979__auto___27518);

return statearr_27516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27518,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27532 = arguments.length;
switch (G__27532) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto__){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto__){
return (function (state_27595){
var state_val_27596 = (state_27595[(1)]);
if((state_val_27596 === (7))){
var inst_27591 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27597_27635 = state_27595__$1;
(statearr_27597_27635[(2)] = inst_27591);

(statearr_27597_27635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (20))){
var inst_27561 = (state_27595[(7)]);
var inst_27572 = (state_27595[(2)]);
var inst_27573 = cljs.core.next.call(null,inst_27561);
var inst_27547 = inst_27573;
var inst_27548 = null;
var inst_27549 = (0);
var inst_27550 = (0);
var state_27595__$1 = (function (){var statearr_27598 = state_27595;
(statearr_27598[(8)] = inst_27549);

(statearr_27598[(9)] = inst_27572);

(statearr_27598[(10)] = inst_27547);

(statearr_27598[(11)] = inst_27548);

(statearr_27598[(12)] = inst_27550);

return statearr_27598;
})();
var statearr_27599_27636 = state_27595__$1;
(statearr_27599_27636[(2)] = null);

(statearr_27599_27636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (1))){
var state_27595__$1 = state_27595;
var statearr_27600_27637 = state_27595__$1;
(statearr_27600_27637[(2)] = null);

(statearr_27600_27637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (4))){
var inst_27536 = (state_27595[(13)]);
var inst_27536__$1 = (state_27595[(2)]);
var inst_27537 = (inst_27536__$1 == null);
var state_27595__$1 = (function (){var statearr_27601 = state_27595;
(statearr_27601[(13)] = inst_27536__$1);

return statearr_27601;
})();
if(cljs.core.truth_(inst_27537)){
var statearr_27602_27638 = state_27595__$1;
(statearr_27602_27638[(1)] = (5));

} else {
var statearr_27603_27639 = state_27595__$1;
(statearr_27603_27639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (15))){
var state_27595__$1 = state_27595;
var statearr_27607_27640 = state_27595__$1;
(statearr_27607_27640[(2)] = null);

(statearr_27607_27640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (21))){
var state_27595__$1 = state_27595;
var statearr_27608_27641 = state_27595__$1;
(statearr_27608_27641[(2)] = null);

(statearr_27608_27641[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (13))){
var inst_27549 = (state_27595[(8)]);
var inst_27547 = (state_27595[(10)]);
var inst_27548 = (state_27595[(11)]);
var inst_27550 = (state_27595[(12)]);
var inst_27557 = (state_27595[(2)]);
var inst_27558 = (inst_27550 + (1));
var tmp27604 = inst_27549;
var tmp27605 = inst_27547;
var tmp27606 = inst_27548;
var inst_27547__$1 = tmp27605;
var inst_27548__$1 = tmp27606;
var inst_27549__$1 = tmp27604;
var inst_27550__$1 = inst_27558;
var state_27595__$1 = (function (){var statearr_27609 = state_27595;
(statearr_27609[(8)] = inst_27549__$1);

(statearr_27609[(10)] = inst_27547__$1);

(statearr_27609[(11)] = inst_27548__$1);

(statearr_27609[(14)] = inst_27557);

(statearr_27609[(12)] = inst_27550__$1);

return statearr_27609;
})();
var statearr_27610_27642 = state_27595__$1;
(statearr_27610_27642[(2)] = null);

(statearr_27610_27642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (22))){
var state_27595__$1 = state_27595;
var statearr_27611_27643 = state_27595__$1;
(statearr_27611_27643[(2)] = null);

(statearr_27611_27643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (6))){
var inst_27536 = (state_27595[(13)]);
var inst_27545 = f.call(null,inst_27536);
var inst_27546 = cljs.core.seq.call(null,inst_27545);
var inst_27547 = inst_27546;
var inst_27548 = null;
var inst_27549 = (0);
var inst_27550 = (0);
var state_27595__$1 = (function (){var statearr_27612 = state_27595;
(statearr_27612[(8)] = inst_27549);

(statearr_27612[(10)] = inst_27547);

(statearr_27612[(11)] = inst_27548);

(statearr_27612[(12)] = inst_27550);

return statearr_27612;
})();
var statearr_27613_27644 = state_27595__$1;
(statearr_27613_27644[(2)] = null);

(statearr_27613_27644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (17))){
var inst_27561 = (state_27595[(7)]);
var inst_27565 = cljs.core.chunk_first.call(null,inst_27561);
var inst_27566 = cljs.core.chunk_rest.call(null,inst_27561);
var inst_27567 = cljs.core.count.call(null,inst_27565);
var inst_27547 = inst_27566;
var inst_27548 = inst_27565;
var inst_27549 = inst_27567;
var inst_27550 = (0);
var state_27595__$1 = (function (){var statearr_27614 = state_27595;
(statearr_27614[(8)] = inst_27549);

(statearr_27614[(10)] = inst_27547);

(statearr_27614[(11)] = inst_27548);

(statearr_27614[(12)] = inst_27550);

return statearr_27614;
})();
var statearr_27615_27645 = state_27595__$1;
(statearr_27615_27645[(2)] = null);

(statearr_27615_27645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (3))){
var inst_27593 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27595__$1,inst_27593);
} else {
if((state_val_27596 === (12))){
var inst_27581 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27616_27646 = state_27595__$1;
(statearr_27616_27646[(2)] = inst_27581);

(statearr_27616_27646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (2))){
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27595__$1,(4),in$);
} else {
if((state_val_27596 === (23))){
var inst_27589 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27617_27647 = state_27595__$1;
(statearr_27617_27647[(2)] = inst_27589);

(statearr_27617_27647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (19))){
var inst_27576 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27618_27648 = state_27595__$1;
(statearr_27618_27648[(2)] = inst_27576);

(statearr_27618_27648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (11))){
var inst_27547 = (state_27595[(10)]);
var inst_27561 = (state_27595[(7)]);
var inst_27561__$1 = cljs.core.seq.call(null,inst_27547);
var state_27595__$1 = (function (){var statearr_27619 = state_27595;
(statearr_27619[(7)] = inst_27561__$1);

return statearr_27619;
})();
if(inst_27561__$1){
var statearr_27620_27649 = state_27595__$1;
(statearr_27620_27649[(1)] = (14));

} else {
var statearr_27621_27650 = state_27595__$1;
(statearr_27621_27650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (9))){
var inst_27583 = (state_27595[(2)]);
var inst_27584 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27595__$1 = (function (){var statearr_27622 = state_27595;
(statearr_27622[(15)] = inst_27583);

return statearr_27622;
})();
if(cljs.core.truth_(inst_27584)){
var statearr_27623_27651 = state_27595__$1;
(statearr_27623_27651[(1)] = (21));

} else {
var statearr_27624_27652 = state_27595__$1;
(statearr_27624_27652[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (5))){
var inst_27539 = cljs.core.async.close_BANG_.call(null,out);
var state_27595__$1 = state_27595;
var statearr_27625_27653 = state_27595__$1;
(statearr_27625_27653[(2)] = inst_27539);

(statearr_27625_27653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (14))){
var inst_27561 = (state_27595[(7)]);
var inst_27563 = cljs.core.chunked_seq_QMARK_.call(null,inst_27561);
var state_27595__$1 = state_27595;
if(inst_27563){
var statearr_27626_27654 = state_27595__$1;
(statearr_27626_27654[(1)] = (17));

} else {
var statearr_27627_27655 = state_27595__$1;
(statearr_27627_27655[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (16))){
var inst_27579 = (state_27595[(2)]);
var state_27595__$1 = state_27595;
var statearr_27628_27656 = state_27595__$1;
(statearr_27628_27656[(2)] = inst_27579);

(statearr_27628_27656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27596 === (10))){
var inst_27548 = (state_27595[(11)]);
var inst_27550 = (state_27595[(12)]);
var inst_27555 = cljs.core._nth.call(null,inst_27548,inst_27550);
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27595__$1,(13),out,inst_27555);
} else {
if((state_val_27596 === (18))){
var inst_27561 = (state_27595[(7)]);
var inst_27570 = cljs.core.first.call(null,inst_27561);
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27595__$1,(20),out,inst_27570);
} else {
if((state_val_27596 === (8))){
var inst_27549 = (state_27595[(8)]);
var inst_27550 = (state_27595[(12)]);
var inst_27552 = (inst_27550 < inst_27549);
var inst_27553 = inst_27552;
var state_27595__$1 = state_27595;
if(cljs.core.truth_(inst_27553)){
var statearr_27629_27657 = state_27595__$1;
(statearr_27629_27657[(1)] = (10));

} else {
var statearr_27630_27658 = state_27595__$1;
(statearr_27630_27658[(1)] = (11));

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
});})(c__25979__auto__))
;
return ((function (switch__25889__auto__,c__25979__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25890__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25890__auto____0 = (function (){
var statearr_27631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27631[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25890__auto__);

(statearr_27631[(1)] = (1));

return statearr_27631;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25890__auto____1 = (function (state_27595){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27632){if((e27632 instanceof Object)){
var ex__25893__auto__ = e27632;
var statearr_27633_27659 = state_27595;
(statearr_27633_27659[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27660 = state_27595;
state_27595 = G__27660;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25890__auto__ = function(state_27595){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25890__auto____1.call(this,state_27595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25890__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25890__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto__))
})();
var state__25981__auto__ = (function (){var statearr_27634 = f__25980__auto__.call(null);
(statearr_27634[(6)] = c__25979__auto__);

return statearr_27634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto__))
);

return c__25979__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27662 = arguments.length;
switch (G__27662) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27665 = arguments.length;
switch (G__27665) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27668 = arguments.length;
switch (G__27668) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25979__auto___27715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27715,out){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27715,out){
return (function (state_27692){
var state_val_27693 = (state_27692[(1)]);
if((state_val_27693 === (7))){
var inst_27687 = (state_27692[(2)]);
var state_27692__$1 = state_27692;
var statearr_27694_27716 = state_27692__$1;
(statearr_27694_27716[(2)] = inst_27687);

(statearr_27694_27716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (1))){
var inst_27669 = null;
var state_27692__$1 = (function (){var statearr_27695 = state_27692;
(statearr_27695[(7)] = inst_27669);

return statearr_27695;
})();
var statearr_27696_27717 = state_27692__$1;
(statearr_27696_27717[(2)] = null);

(statearr_27696_27717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (4))){
var inst_27672 = (state_27692[(8)]);
var inst_27672__$1 = (state_27692[(2)]);
var inst_27673 = (inst_27672__$1 == null);
var inst_27674 = cljs.core.not.call(null,inst_27673);
var state_27692__$1 = (function (){var statearr_27697 = state_27692;
(statearr_27697[(8)] = inst_27672__$1);

return statearr_27697;
})();
if(inst_27674){
var statearr_27698_27718 = state_27692__$1;
(statearr_27698_27718[(1)] = (5));

} else {
var statearr_27699_27719 = state_27692__$1;
(statearr_27699_27719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (6))){
var state_27692__$1 = state_27692;
var statearr_27700_27720 = state_27692__$1;
(statearr_27700_27720[(2)] = null);

(statearr_27700_27720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (3))){
var inst_27689 = (state_27692[(2)]);
var inst_27690 = cljs.core.async.close_BANG_.call(null,out);
var state_27692__$1 = (function (){var statearr_27701 = state_27692;
(statearr_27701[(9)] = inst_27689);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27692__$1,inst_27690);
} else {
if((state_val_27693 === (2))){
var state_27692__$1 = state_27692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27692__$1,(4),ch);
} else {
if((state_val_27693 === (11))){
var inst_27672 = (state_27692[(8)]);
var inst_27681 = (state_27692[(2)]);
var inst_27669 = inst_27672;
var state_27692__$1 = (function (){var statearr_27702 = state_27692;
(statearr_27702[(10)] = inst_27681);

(statearr_27702[(7)] = inst_27669);

return statearr_27702;
})();
var statearr_27703_27721 = state_27692__$1;
(statearr_27703_27721[(2)] = null);

(statearr_27703_27721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (9))){
var inst_27672 = (state_27692[(8)]);
var state_27692__$1 = state_27692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27692__$1,(11),out,inst_27672);
} else {
if((state_val_27693 === (5))){
var inst_27669 = (state_27692[(7)]);
var inst_27672 = (state_27692[(8)]);
var inst_27676 = cljs.core._EQ_.call(null,inst_27672,inst_27669);
var state_27692__$1 = state_27692;
if(inst_27676){
var statearr_27705_27722 = state_27692__$1;
(statearr_27705_27722[(1)] = (8));

} else {
var statearr_27706_27723 = state_27692__$1;
(statearr_27706_27723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (10))){
var inst_27684 = (state_27692[(2)]);
var state_27692__$1 = state_27692;
var statearr_27707_27724 = state_27692__$1;
(statearr_27707_27724[(2)] = inst_27684);

(statearr_27707_27724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27693 === (8))){
var inst_27669 = (state_27692[(7)]);
var tmp27704 = inst_27669;
var inst_27669__$1 = tmp27704;
var state_27692__$1 = (function (){var statearr_27708 = state_27692;
(statearr_27708[(7)] = inst_27669__$1);

return statearr_27708;
})();
var statearr_27709_27725 = state_27692__$1;
(statearr_27709_27725[(2)] = null);

(statearr_27709_27725[(1)] = (2));


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
});})(c__25979__auto___27715,out))
;
return ((function (switch__25889__auto__,c__25979__auto___27715,out){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27710[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27710[(1)] = (1));

return statearr_27710;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27692){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27711){if((e27711 instanceof Object)){
var ex__25893__auto__ = e27711;
var statearr_27712_27726 = state_27692;
(statearr_27712_27726[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27727 = state_27692;
state_27692 = G__27727;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27715,out))
})();
var state__25981__auto__ = (function (){var statearr_27713 = f__25980__auto__.call(null);
(statearr_27713[(6)] = c__25979__auto___27715);

return statearr_27713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27715,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27729 = arguments.length;
switch (G__27729) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25979__auto___27795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27795,out){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27795,out){
return (function (state_27767){
var state_val_27768 = (state_27767[(1)]);
if((state_val_27768 === (7))){
var inst_27763 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
var statearr_27769_27796 = state_27767__$1;
(statearr_27769_27796[(2)] = inst_27763);

(statearr_27769_27796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (1))){
var inst_27730 = (new Array(n));
var inst_27731 = inst_27730;
var inst_27732 = (0);
var state_27767__$1 = (function (){var statearr_27770 = state_27767;
(statearr_27770[(7)] = inst_27731);

(statearr_27770[(8)] = inst_27732);

return statearr_27770;
})();
var statearr_27771_27797 = state_27767__$1;
(statearr_27771_27797[(2)] = null);

(statearr_27771_27797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (4))){
var inst_27735 = (state_27767[(9)]);
var inst_27735__$1 = (state_27767[(2)]);
var inst_27736 = (inst_27735__$1 == null);
var inst_27737 = cljs.core.not.call(null,inst_27736);
var state_27767__$1 = (function (){var statearr_27772 = state_27767;
(statearr_27772[(9)] = inst_27735__$1);

return statearr_27772;
})();
if(inst_27737){
var statearr_27773_27798 = state_27767__$1;
(statearr_27773_27798[(1)] = (5));

} else {
var statearr_27774_27799 = state_27767__$1;
(statearr_27774_27799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (15))){
var inst_27757 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
var statearr_27775_27800 = state_27767__$1;
(statearr_27775_27800[(2)] = inst_27757);

(statearr_27775_27800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (13))){
var state_27767__$1 = state_27767;
var statearr_27776_27801 = state_27767__$1;
(statearr_27776_27801[(2)] = null);

(statearr_27776_27801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (6))){
var inst_27732 = (state_27767[(8)]);
var inst_27753 = (inst_27732 > (0));
var state_27767__$1 = state_27767;
if(cljs.core.truth_(inst_27753)){
var statearr_27777_27802 = state_27767__$1;
(statearr_27777_27802[(1)] = (12));

} else {
var statearr_27778_27803 = state_27767__$1;
(statearr_27778_27803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (3))){
var inst_27765 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27767__$1,inst_27765);
} else {
if((state_val_27768 === (12))){
var inst_27731 = (state_27767[(7)]);
var inst_27755 = cljs.core.vec.call(null,inst_27731);
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27767__$1,(15),out,inst_27755);
} else {
if((state_val_27768 === (2))){
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27767__$1,(4),ch);
} else {
if((state_val_27768 === (11))){
var inst_27747 = (state_27767[(2)]);
var inst_27748 = (new Array(n));
var inst_27731 = inst_27748;
var inst_27732 = (0);
var state_27767__$1 = (function (){var statearr_27779 = state_27767;
(statearr_27779[(7)] = inst_27731);

(statearr_27779[(10)] = inst_27747);

(statearr_27779[(8)] = inst_27732);

return statearr_27779;
})();
var statearr_27780_27804 = state_27767__$1;
(statearr_27780_27804[(2)] = null);

(statearr_27780_27804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (9))){
var inst_27731 = (state_27767[(7)]);
var inst_27745 = cljs.core.vec.call(null,inst_27731);
var state_27767__$1 = state_27767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27767__$1,(11),out,inst_27745);
} else {
if((state_val_27768 === (5))){
var inst_27731 = (state_27767[(7)]);
var inst_27735 = (state_27767[(9)]);
var inst_27740 = (state_27767[(11)]);
var inst_27732 = (state_27767[(8)]);
var inst_27739 = (inst_27731[inst_27732] = inst_27735);
var inst_27740__$1 = (inst_27732 + (1));
var inst_27741 = (inst_27740__$1 < n);
var state_27767__$1 = (function (){var statearr_27781 = state_27767;
(statearr_27781[(12)] = inst_27739);

(statearr_27781[(11)] = inst_27740__$1);

return statearr_27781;
})();
if(cljs.core.truth_(inst_27741)){
var statearr_27782_27805 = state_27767__$1;
(statearr_27782_27805[(1)] = (8));

} else {
var statearr_27783_27806 = state_27767__$1;
(statearr_27783_27806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (14))){
var inst_27760 = (state_27767[(2)]);
var inst_27761 = cljs.core.async.close_BANG_.call(null,out);
var state_27767__$1 = (function (){var statearr_27785 = state_27767;
(statearr_27785[(13)] = inst_27760);

return statearr_27785;
})();
var statearr_27786_27807 = state_27767__$1;
(statearr_27786_27807[(2)] = inst_27761);

(statearr_27786_27807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (10))){
var inst_27751 = (state_27767[(2)]);
var state_27767__$1 = state_27767;
var statearr_27787_27808 = state_27767__$1;
(statearr_27787_27808[(2)] = inst_27751);

(statearr_27787_27808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27768 === (8))){
var inst_27731 = (state_27767[(7)]);
var inst_27740 = (state_27767[(11)]);
var tmp27784 = inst_27731;
var inst_27731__$1 = tmp27784;
var inst_27732 = inst_27740;
var state_27767__$1 = (function (){var statearr_27788 = state_27767;
(statearr_27788[(7)] = inst_27731__$1);

(statearr_27788[(8)] = inst_27732);

return statearr_27788;
})();
var statearr_27789_27809 = state_27767__$1;
(statearr_27789_27809[(2)] = null);

(statearr_27789_27809[(1)] = (2));


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
});})(c__25979__auto___27795,out))
;
return ((function (switch__25889__auto__,c__25979__auto___27795,out){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27790[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27790[(1)] = (1));

return statearr_27790;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27767){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27791){if((e27791 instanceof Object)){
var ex__25893__auto__ = e27791;
var statearr_27792_27810 = state_27767;
(statearr_27792_27810[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27811 = state_27767;
state_27767 = G__27811;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27767);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27795,out))
})();
var state__25981__auto__ = (function (){var statearr_27793 = f__25980__auto__.call(null);
(statearr_27793[(6)] = c__25979__auto___27795);

return statearr_27793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27795,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27813 = arguments.length;
switch (G__27813) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25979__auto___27883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25979__auto___27883,out){
return (function (){
var f__25980__auto__ = (function (){var switch__25889__auto__ = ((function (c__25979__auto___27883,out){
return (function (state_27855){
var state_val_27856 = (state_27855[(1)]);
if((state_val_27856 === (7))){
var inst_27851 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27857_27884 = state_27855__$1;
(statearr_27857_27884[(2)] = inst_27851);

(statearr_27857_27884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (1))){
var inst_27814 = [];
var inst_27815 = inst_27814;
var inst_27816 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27855__$1 = (function (){var statearr_27858 = state_27855;
(statearr_27858[(7)] = inst_27815);

(statearr_27858[(8)] = inst_27816);

return statearr_27858;
})();
var statearr_27859_27885 = state_27855__$1;
(statearr_27859_27885[(2)] = null);

(statearr_27859_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (4))){
var inst_27819 = (state_27855[(9)]);
var inst_27819__$1 = (state_27855[(2)]);
var inst_27820 = (inst_27819__$1 == null);
var inst_27821 = cljs.core.not.call(null,inst_27820);
var state_27855__$1 = (function (){var statearr_27860 = state_27855;
(statearr_27860[(9)] = inst_27819__$1);

return statearr_27860;
})();
if(inst_27821){
var statearr_27861_27886 = state_27855__$1;
(statearr_27861_27886[(1)] = (5));

} else {
var statearr_27862_27887 = state_27855__$1;
(statearr_27862_27887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (15))){
var inst_27845 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27863_27888 = state_27855__$1;
(statearr_27863_27888[(2)] = inst_27845);

(statearr_27863_27888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (13))){
var state_27855__$1 = state_27855;
var statearr_27864_27889 = state_27855__$1;
(statearr_27864_27889[(2)] = null);

(statearr_27864_27889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (6))){
var inst_27815 = (state_27855[(7)]);
var inst_27840 = inst_27815.length;
var inst_27841 = (inst_27840 > (0));
var state_27855__$1 = state_27855;
if(cljs.core.truth_(inst_27841)){
var statearr_27865_27890 = state_27855__$1;
(statearr_27865_27890[(1)] = (12));

} else {
var statearr_27866_27891 = state_27855__$1;
(statearr_27866_27891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (3))){
var inst_27853 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27855__$1,inst_27853);
} else {
if((state_val_27856 === (12))){
var inst_27815 = (state_27855[(7)]);
var inst_27843 = cljs.core.vec.call(null,inst_27815);
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27855__$1,(15),out,inst_27843);
} else {
if((state_val_27856 === (2))){
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27855__$1,(4),ch);
} else {
if((state_val_27856 === (11))){
var inst_27823 = (state_27855[(10)]);
var inst_27819 = (state_27855[(9)]);
var inst_27833 = (state_27855[(2)]);
var inst_27834 = [];
var inst_27835 = inst_27834.push(inst_27819);
var inst_27815 = inst_27834;
var inst_27816 = inst_27823;
var state_27855__$1 = (function (){var statearr_27867 = state_27855;
(statearr_27867[(11)] = inst_27833);

(statearr_27867[(7)] = inst_27815);

(statearr_27867[(8)] = inst_27816);

(statearr_27867[(12)] = inst_27835);

return statearr_27867;
})();
var statearr_27868_27892 = state_27855__$1;
(statearr_27868_27892[(2)] = null);

(statearr_27868_27892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (9))){
var inst_27815 = (state_27855[(7)]);
var inst_27831 = cljs.core.vec.call(null,inst_27815);
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27855__$1,(11),out,inst_27831);
} else {
if((state_val_27856 === (5))){
var inst_27823 = (state_27855[(10)]);
var inst_27819 = (state_27855[(9)]);
var inst_27816 = (state_27855[(8)]);
var inst_27823__$1 = f.call(null,inst_27819);
var inst_27824 = cljs.core._EQ_.call(null,inst_27823__$1,inst_27816);
var inst_27825 = cljs.core.keyword_identical_QMARK_.call(null,inst_27816,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27826 = ((inst_27824) || (inst_27825));
var state_27855__$1 = (function (){var statearr_27869 = state_27855;
(statearr_27869[(10)] = inst_27823__$1);

return statearr_27869;
})();
if(cljs.core.truth_(inst_27826)){
var statearr_27870_27893 = state_27855__$1;
(statearr_27870_27893[(1)] = (8));

} else {
var statearr_27871_27894 = state_27855__$1;
(statearr_27871_27894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (14))){
var inst_27848 = (state_27855[(2)]);
var inst_27849 = cljs.core.async.close_BANG_.call(null,out);
var state_27855__$1 = (function (){var statearr_27873 = state_27855;
(statearr_27873[(13)] = inst_27848);

return statearr_27873;
})();
var statearr_27874_27895 = state_27855__$1;
(statearr_27874_27895[(2)] = inst_27849);

(statearr_27874_27895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (10))){
var inst_27838 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27875_27896 = state_27855__$1;
(statearr_27875_27896[(2)] = inst_27838);

(statearr_27875_27896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (8))){
var inst_27823 = (state_27855[(10)]);
var inst_27819 = (state_27855[(9)]);
var inst_27815 = (state_27855[(7)]);
var inst_27828 = inst_27815.push(inst_27819);
var tmp27872 = inst_27815;
var inst_27815__$1 = tmp27872;
var inst_27816 = inst_27823;
var state_27855__$1 = (function (){var statearr_27876 = state_27855;
(statearr_27876[(14)] = inst_27828);

(statearr_27876[(7)] = inst_27815__$1);

(statearr_27876[(8)] = inst_27816);

return statearr_27876;
})();
var statearr_27877_27897 = state_27855__$1;
(statearr_27877_27897[(2)] = null);

(statearr_27877_27897[(1)] = (2));


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
});})(c__25979__auto___27883,out))
;
return ((function (switch__25889__auto__,c__25979__auto___27883,out){
return (function() {
var cljs$core$async$state_machine__25890__auto__ = null;
var cljs$core$async$state_machine__25890__auto____0 = (function (){
var statearr_27878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27878[(0)] = cljs$core$async$state_machine__25890__auto__);

(statearr_27878[(1)] = (1));

return statearr_27878;
});
var cljs$core$async$state_machine__25890__auto____1 = (function (state_27855){
while(true){
var ret_value__25891__auto__ = (function (){try{while(true){
var result__25892__auto__ = switch__25889__auto__.call(null,state_27855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25892__auto__;
}
break;
}
}catch (e27879){if((e27879 instanceof Object)){
var ex__25893__auto__ = e27879;
var statearr_27880_27898 = state_27855;
(statearr_27880_27898[(5)] = ex__25893__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27899 = state_27855;
state_27855 = G__27899;
continue;
} else {
return ret_value__25891__auto__;
}
break;
}
});
cljs$core$async$state_machine__25890__auto__ = function(state_27855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25890__auto____1.call(this,state_27855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25890__auto____0;
cljs$core$async$state_machine__25890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25890__auto____1;
return cljs$core$async$state_machine__25890__auto__;
})()
;})(switch__25889__auto__,c__25979__auto___27883,out))
})();
var state__25981__auto__ = (function (){var statearr_27881 = f__25980__auto__.call(null);
(statearr_27881[(6)] = c__25979__auto___27883);

return statearr_27881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25981__auto__);
});})(c__25979__auto___27883,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521885150503
