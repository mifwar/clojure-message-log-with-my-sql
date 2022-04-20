goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42945 = arguments.length;
switch (G__42945) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42946 = (function (f,blockable,meta42947){
this.f = f;
this.blockable = blockable;
this.meta42947 = meta42947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42948,meta42947__$1){
var self__ = this;
var _42948__$1 = this;
return (new cljs.core.async.t_cljs$core$async42946(self__.f,self__.blockable,meta42947__$1));
}));

(cljs.core.async.t_cljs$core$async42946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42948){
var self__ = this;
var _42948__$1 = this;
return self__.meta42947;
}));

(cljs.core.async.t_cljs$core$async42946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42947","meta42947",-838891994,null)], null);
}));

(cljs.core.async.t_cljs$core$async42946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42946");

(cljs.core.async.t_cljs$core$async42946.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42946.
 */
cljs.core.async.__GT_t_cljs$core$async42946 = (function cljs$core$async$__GT_t_cljs$core$async42946(f__$1,blockable__$1,meta42947){
return (new cljs.core.async.t_cljs$core$async42946(f__$1,blockable__$1,meta42947));
});

}

return (new cljs.core.async.t_cljs$core$async42946(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__42951 = arguments.length;
switch (G__42951) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42955 = arguments.length;
switch (G__42955) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__42961 = arguments.length;
switch (G__42961) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45251 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45251) : fn1.call(null,val_45251));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45251) : fn1.call(null,val_45251));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42968 = arguments.length;
switch (G__42968) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___45257 = n;
var x_45260 = (0);
while(true){
if((x_45260 < n__4741__auto___45257)){
(a[x_45260] = x_45260);

var G__45261 = (x_45260 + (1));
x_45260 = G__45261;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42971 = (function (flag,meta42972){
this.flag = flag;
this.meta42972 = meta42972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42973,meta42972__$1){
var self__ = this;
var _42973__$1 = this;
return (new cljs.core.async.t_cljs$core$async42971(self__.flag,meta42972__$1));
}));

(cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42973){
var self__ = this;
var _42973__$1 = this;
return self__.meta42972;
}));

(cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42972","meta42972",1491666999,null)], null);
}));

(cljs.core.async.t_cljs$core$async42971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42971");

(cljs.core.async.t_cljs$core$async42971.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42971.
 */
cljs.core.async.__GT_t_cljs$core$async42971 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42971(flag__$1,meta42972){
return (new cljs.core.async.t_cljs$core$async42971(flag__$1,meta42972));
});

}

return (new cljs.core.async.t_cljs$core$async42971(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42974 = (function (flag,cb,meta42975){
this.flag = flag;
this.cb = cb;
this.meta42975 = meta42975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42976,meta42975__$1){
var self__ = this;
var _42976__$1 = this;
return (new cljs.core.async.t_cljs$core$async42974(self__.flag,self__.cb,meta42975__$1));
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42976){
var self__ = this;
var _42976__$1 = this;
return self__.meta42975;
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42975","meta42975",1134621572,null)], null);
}));

(cljs.core.async.t_cljs$core$async42974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42974");

(cljs.core.async.t_cljs$core$async42974.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42974.
 */
cljs.core.async.__GT_t_cljs$core$async42974 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42974(flag__$1,cb__$1,meta42975){
return (new cljs.core.async.t_cljs$core$async42974(flag__$1,cb__$1,meta42975));
});

}

return (new cljs.core.async.t_cljs$core$async42974(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42978_SHARP_){
var G__42980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42978_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42980) : fret.call(null,G__42980));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42979_SHARP_){
var G__42981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42979_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42981) : fret.call(null,G__42981));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45268 = (i + (1));
i = G__45268;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4870__auto__ = [];
var len__4864__auto___45271 = arguments.length;
var i__4865__auto___45273 = (0);
while(true){
if((i__4865__auto___45273 < len__4864__auto___45271)){
args__4870__auto__.push((arguments[i__4865__auto___45273]));

var G__45274 = (i__4865__auto___45273 + (1));
i__4865__auto___45273 = G__45274;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42989){
var map__42990 = p__42989;
var map__42990__$1 = cljs.core.__destructure_map(map__42990);
var opts = map__42990__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42987){
var G__42988 = cljs.core.first(seq42987);
var seq42987__$1 = cljs.core.next(seq42987);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42988,seq42987__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__42996 = arguments.length;
switch (G__42996) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42883__auto___45276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43050){
var state_val_43051 = (state_43050[(1)]);
if((state_val_43051 === (7))){
var inst_43032 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
var statearr_43076_45277 = state_43050__$1;
(statearr_43076_45277[(2)] = inst_43032);

(statearr_43076_45277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (1))){
var state_43050__$1 = state_43050;
var statearr_43077_45278 = state_43050__$1;
(statearr_43077_45278[(2)] = null);

(statearr_43077_45278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (4))){
var inst_43012 = (state_43050[(7)]);
var inst_43012__$1 = (state_43050[(2)]);
var inst_43013 = (inst_43012__$1 == null);
var state_43050__$1 = (function (){var statearr_43085 = state_43050;
(statearr_43085[(7)] = inst_43012__$1);

return statearr_43085;
})();
if(cljs.core.truth_(inst_43013)){
var statearr_43094_45279 = state_43050__$1;
(statearr_43094_45279[(1)] = (5));

} else {
var statearr_43095_45280 = state_43050__$1;
(statearr_43095_45280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (13))){
var state_43050__$1 = state_43050;
var statearr_43097_45281 = state_43050__$1;
(statearr_43097_45281[(2)] = null);

(statearr_43097_45281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (6))){
var inst_43012 = (state_43050[(7)]);
var state_43050__$1 = state_43050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43050__$1,(11),to,inst_43012);
} else {
if((state_val_43051 === (3))){
var inst_43038 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43050__$1,inst_43038);
} else {
if((state_val_43051 === (12))){
var state_43050__$1 = state_43050;
var statearr_43106_45282 = state_43050__$1;
(statearr_43106_45282[(2)] = null);

(statearr_43106_45282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (2))){
var state_43050__$1 = state_43050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43050__$1,(4),from);
} else {
if((state_val_43051 === (11))){
var inst_43025 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
if(cljs.core.truth_(inst_43025)){
var statearr_43107_45283 = state_43050__$1;
(statearr_43107_45283[(1)] = (12));

} else {
var statearr_43108_45284 = state_43050__$1;
(statearr_43108_45284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (9))){
var state_43050__$1 = state_43050;
var statearr_43109_45285 = state_43050__$1;
(statearr_43109_45285[(2)] = null);

(statearr_43109_45285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (5))){
var state_43050__$1 = state_43050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43114_45286 = state_43050__$1;
(statearr_43114_45286[(1)] = (8));

} else {
var statearr_43115_45287 = state_43050__$1;
(statearr_43115_45287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (14))){
var inst_43030 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
var statearr_43119_45288 = state_43050__$1;
(statearr_43119_45288[(2)] = inst_43030);

(statearr_43119_45288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (10))){
var inst_43022 = (state_43050[(2)]);
var state_43050__$1 = state_43050;
var statearr_43122_45289 = state_43050__$1;
(statearr_43122_45289[(2)] = inst_43022);

(statearr_43122_45289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43051 === (8))){
var inst_43019 = cljs.core.async.close_BANG_(to);
var state_43050__$1 = state_43050;
var statearr_43123_45290 = state_43050__$1;
(statearr_43123_45290[(2)] = inst_43019);

(statearr_43123_45290[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_43127 = [null,null,null,null,null,null,null,null];
(statearr_43127[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_43127[(1)] = (1));

return statearr_43127;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_43050){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43050);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43129){var ex__42664__auto__ = e43129;
var statearr_43131_45291 = state_43050;
(statearr_43131_45291[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43050[(4)]))){
var statearr_43135_45292 = state_43050;
(statearr_43135_45292[(1)] = cljs.core.first((state_43050[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45294 = state_43050;
state_43050 = G__45294;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_43050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_43050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43136 = f__42884__auto__();
(statearr_43136[(6)] = c__42883__auto___45276);

return statearr_43136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43144){
var vec__43145 = p__43144;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43145,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43145,(1),null);
var job = vec__43145;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42883__auto___45300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43167){
var state_val_43169 = (state_43167[(1)]);
if((state_val_43169 === (1))){
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43167__$1,(2),res,v);
} else {
if((state_val_43169 === (2))){
var inst_43164 = (state_43167[(2)]);
var inst_43165 = cljs.core.async.close_BANG_(res);
var state_43167__$1 = (function (){var statearr_43192 = state_43167;
(statearr_43192[(7)] = inst_43164);

return statearr_43192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43167__$1,inst_43165);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0 = (function (){
var statearr_43195 = [null,null,null,null,null,null,null,null];
(statearr_43195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__);

(statearr_43195[(1)] = (1));

return statearr_43195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1 = (function (state_43167){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43167);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43196){var ex__42664__auto__ = e43196;
var statearr_43197_45301 = state_43167;
(statearr_43197_45301[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43167[(4)]))){
var statearr_43199_45302 = state_43167;
(statearr_43199_45302[(1)] = cljs.core.first((state_43167[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45303 = state_43167;
state_43167 = G__45303;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = function(state_43167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1.call(this,state_43167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43212 = f__42884__auto__();
(statearr_43212[(6)] = c__42883__auto___45300);

return statearr_43212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43224){
var vec__43225 = p__43224;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43225,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43225,(1),null);
var job = vec__43225;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___45304 = n;
var __45305 = (0);
while(true){
if((__45305 < n__4741__auto___45304)){
var G__43237_45306 = type;
var G__43237_45307__$1 = (((G__43237_45306 instanceof cljs.core.Keyword))?G__43237_45306.fqn:null);
switch (G__43237_45307__$1) {
case "compute":
var c__42883__auto___45309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45305,c__42883__auto___45309,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async){
return (function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = ((function (__45305,c__42883__auto___45309,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async){
return (function (state_43250){
var state_val_43251 = (state_43250[(1)]);
if((state_val_43251 === (1))){
var state_43250__$1 = state_43250;
var statearr_43291_45310 = state_43250__$1;
(statearr_43291_45310[(2)] = null);

(statearr_43291_45310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (2))){
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43250__$1,(4),jobs);
} else {
if((state_val_43251 === (3))){
var inst_43248 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43250__$1,inst_43248);
} else {
if((state_val_43251 === (4))){
var inst_43240 = (state_43250[(2)]);
var inst_43241 = process(inst_43240);
var state_43250__$1 = state_43250;
if(cljs.core.truth_(inst_43241)){
var statearr_43302_45311 = state_43250__$1;
(statearr_43302_45311[(1)] = (5));

} else {
var statearr_43303_45312 = state_43250__$1;
(statearr_43303_45312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (5))){
var state_43250__$1 = state_43250;
var statearr_43304_45313 = state_43250__$1;
(statearr_43304_45313[(2)] = null);

(statearr_43304_45313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (6))){
var state_43250__$1 = state_43250;
var statearr_43327_45314 = state_43250__$1;
(statearr_43327_45314[(2)] = null);

(statearr_43327_45314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (7))){
var inst_43246 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
var statearr_43328_45315 = state_43250__$1;
(statearr_43328_45315[(2)] = inst_43246);

(statearr_43328_45315[(1)] = (3));


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
});})(__45305,c__42883__auto___45309,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async))
;
return ((function (__45305,switch__42660__auto__,c__42883__auto___45309,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0 = (function (){
var statearr_43339 = [null,null,null,null,null,null,null];
(statearr_43339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__);

(statearr_43339[(1)] = (1));

return statearr_43339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1 = (function (state_43250){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43250);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43340){var ex__42664__auto__ = e43340;
var statearr_43341_45316 = state_43250;
(statearr_43341_45316[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43250[(4)]))){
var statearr_43346_45317 = state_43250;
(statearr_43346_45317[(1)] = cljs.core.first((state_43250[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45318 = state_43250;
state_43250 = G__45318;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = function(state_43250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1.call(this,state_43250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__;
})()
;})(__45305,switch__42660__auto__,c__42883__auto___45309,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async))
})();
var state__42885__auto__ = (function (){var statearr_43403 = f__42884__auto__();
(statearr_43403[(6)] = c__42883__auto___45309);

return statearr_43403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
});})(__45305,c__42883__auto___45309,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async))
);


break;
case "async":
var c__42883__auto___45319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45305,c__42883__auto___45319,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async){
return (function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = ((function (__45305,c__42883__auto___45319,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async){
return (function (state_43418){
var state_val_43419 = (state_43418[(1)]);
if((state_val_43419 === (1))){
var state_43418__$1 = state_43418;
var statearr_43422_45320 = state_43418__$1;
(statearr_43422_45320[(2)] = null);

(statearr_43422_45320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (2))){
var state_43418__$1 = state_43418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43418__$1,(4),jobs);
} else {
if((state_val_43419 === (3))){
var inst_43414 = (state_43418[(2)]);
var state_43418__$1 = state_43418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43418__$1,inst_43414);
} else {
if((state_val_43419 === (4))){
var inst_43406 = (state_43418[(2)]);
var inst_43407 = async(inst_43406);
var state_43418__$1 = state_43418;
if(cljs.core.truth_(inst_43407)){
var statearr_43425_45321 = state_43418__$1;
(statearr_43425_45321[(1)] = (5));

} else {
var statearr_43426_45322 = state_43418__$1;
(statearr_43426_45322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (5))){
var state_43418__$1 = state_43418;
var statearr_43427_45323 = state_43418__$1;
(statearr_43427_45323[(2)] = null);

(statearr_43427_45323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (6))){
var state_43418__$1 = state_43418;
var statearr_43428_45324 = state_43418__$1;
(statearr_43428_45324[(2)] = null);

(statearr_43428_45324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (7))){
var inst_43412 = (state_43418[(2)]);
var state_43418__$1 = state_43418;
var statearr_43455_45325 = state_43418__$1;
(statearr_43455_45325[(2)] = inst_43412);

(statearr_43455_45325[(1)] = (3));


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
});})(__45305,c__42883__auto___45319,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async))
;
return ((function (__45305,switch__42660__auto__,c__42883__auto___45319,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0 = (function (){
var statearr_43513 = [null,null,null,null,null,null,null];
(statearr_43513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__);

(statearr_43513[(1)] = (1));

return statearr_43513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1 = (function (state_43418){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43418);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43514){var ex__42664__auto__ = e43514;
var statearr_43515_45326 = state_43418;
(statearr_43515_45326[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43418[(4)]))){
var statearr_43516_45327 = state_43418;
(statearr_43516_45327[(1)] = cljs.core.first((state_43418[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45328 = state_43418;
state_43418 = G__45328;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = function(state_43418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1.call(this,state_43418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__;
})()
;})(__45305,switch__42660__auto__,c__42883__auto___45319,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async))
})();
var state__42885__auto__ = (function (){var statearr_43517 = f__42884__auto__();
(statearr_43517[(6)] = c__42883__auto___45319);

return statearr_43517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
});})(__45305,c__42883__auto___45319,G__43237_45306,G__43237_45307__$1,n__4741__auto___45304,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43237_45307__$1)].join('')));

}

var G__45329 = (__45305 + (1));
__45305 = G__45329;
continue;
} else {
}
break;
}

var c__42883__auto___45330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43543){
var state_val_43544 = (state_43543[(1)]);
if((state_val_43544 === (7))){
var inst_43539 = (state_43543[(2)]);
var state_43543__$1 = state_43543;
var statearr_43554_45331 = state_43543__$1;
(statearr_43554_45331[(2)] = inst_43539);

(statearr_43554_45331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43544 === (1))){
var state_43543__$1 = state_43543;
var statearr_43555_45332 = state_43543__$1;
(statearr_43555_45332[(2)] = null);

(statearr_43555_45332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43544 === (4))){
var inst_43520 = (state_43543[(7)]);
var inst_43520__$1 = (state_43543[(2)]);
var inst_43521 = (inst_43520__$1 == null);
var state_43543__$1 = (function (){var statearr_43560 = state_43543;
(statearr_43560[(7)] = inst_43520__$1);

return statearr_43560;
})();
if(cljs.core.truth_(inst_43521)){
var statearr_43561_45333 = state_43543__$1;
(statearr_43561_45333[(1)] = (5));

} else {
var statearr_43562_45334 = state_43543__$1;
(statearr_43562_45334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43544 === (6))){
var inst_43520 = (state_43543[(7)]);
var inst_43525 = (state_43543[(8)]);
var inst_43525__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43531 = [inst_43520,inst_43525__$1];
var inst_43532 = (new cljs.core.PersistentVector(null,2,(5),inst_43530,inst_43531,null));
var state_43543__$1 = (function (){var statearr_43563 = state_43543;
(statearr_43563[(8)] = inst_43525__$1);

return statearr_43563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43543__$1,(8),jobs,inst_43532);
} else {
if((state_val_43544 === (3))){
var inst_43541 = (state_43543[(2)]);
var state_43543__$1 = state_43543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43543__$1,inst_43541);
} else {
if((state_val_43544 === (2))){
var state_43543__$1 = state_43543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43543__$1,(4),from);
} else {
if((state_val_43544 === (9))){
var inst_43536 = (state_43543[(2)]);
var state_43543__$1 = (function (){var statearr_43565 = state_43543;
(statearr_43565[(9)] = inst_43536);

return statearr_43565;
})();
var statearr_43566_45335 = state_43543__$1;
(statearr_43566_45335[(2)] = null);

(statearr_43566_45335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43544 === (5))){
var inst_43523 = cljs.core.async.close_BANG_(jobs);
var state_43543__$1 = state_43543;
var statearr_43567_45336 = state_43543__$1;
(statearr_43567_45336[(2)] = inst_43523);

(statearr_43567_45336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43544 === (8))){
var inst_43525 = (state_43543[(8)]);
var inst_43534 = (state_43543[(2)]);
var state_43543__$1 = (function (){var statearr_43568 = state_43543;
(statearr_43568[(10)] = inst_43534);

return statearr_43568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43543__$1,(9),results,inst_43525);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0 = (function (){
var statearr_43569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__);

(statearr_43569[(1)] = (1));

return statearr_43569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1 = (function (state_43543){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43543);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43570){var ex__42664__auto__ = e43570;
var statearr_43571_45337 = state_43543;
(statearr_43571_45337[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43543[(4)]))){
var statearr_43572_45338 = state_43543;
(statearr_43572_45338[(1)] = cljs.core.first((state_43543[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45339 = state_43543;
state_43543 = G__45339;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = function(state_43543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1.call(this,state_43543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43573 = f__42884__auto__();
(statearr_43573[(6)] = c__42883__auto___45330);

return statearr_43573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


var c__42883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43611){
var state_val_43612 = (state_43611[(1)]);
if((state_val_43612 === (7))){
var inst_43607 = (state_43611[(2)]);
var state_43611__$1 = state_43611;
var statearr_43614_45340 = state_43611__$1;
(statearr_43614_45340[(2)] = inst_43607);

(statearr_43614_45340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (20))){
var state_43611__$1 = state_43611;
var statearr_43617_45341 = state_43611__$1;
(statearr_43617_45341[(2)] = null);

(statearr_43617_45341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (1))){
var state_43611__$1 = state_43611;
var statearr_43618_45342 = state_43611__$1;
(statearr_43618_45342[(2)] = null);

(statearr_43618_45342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (4))){
var inst_43576 = (state_43611[(7)]);
var inst_43576__$1 = (state_43611[(2)]);
var inst_43577 = (inst_43576__$1 == null);
var state_43611__$1 = (function (){var statearr_43619 = state_43611;
(statearr_43619[(7)] = inst_43576__$1);

return statearr_43619;
})();
if(cljs.core.truth_(inst_43577)){
var statearr_43620_45343 = state_43611__$1;
(statearr_43620_45343[(1)] = (5));

} else {
var statearr_43621_45344 = state_43611__$1;
(statearr_43621_45344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (15))){
var inst_43589 = (state_43611[(8)]);
var state_43611__$1 = state_43611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43611__$1,(18),to,inst_43589);
} else {
if((state_val_43612 === (21))){
var inst_43602 = (state_43611[(2)]);
var state_43611__$1 = state_43611;
var statearr_43624_45345 = state_43611__$1;
(statearr_43624_45345[(2)] = inst_43602);

(statearr_43624_45345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (13))){
var inst_43604 = (state_43611[(2)]);
var state_43611__$1 = (function (){var statearr_43625 = state_43611;
(statearr_43625[(9)] = inst_43604);

return statearr_43625;
})();
var statearr_43626_45346 = state_43611__$1;
(statearr_43626_45346[(2)] = null);

(statearr_43626_45346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (6))){
var inst_43576 = (state_43611[(7)]);
var state_43611__$1 = state_43611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43611__$1,(11),inst_43576);
} else {
if((state_val_43612 === (17))){
var inst_43597 = (state_43611[(2)]);
var state_43611__$1 = state_43611;
if(cljs.core.truth_(inst_43597)){
var statearr_43628_45347 = state_43611__$1;
(statearr_43628_45347[(1)] = (19));

} else {
var statearr_43630_45348 = state_43611__$1;
(statearr_43630_45348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (3))){
var inst_43609 = (state_43611[(2)]);
var state_43611__$1 = state_43611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43611__$1,inst_43609);
} else {
if((state_val_43612 === (12))){
var inst_43586 = (state_43611[(10)]);
var state_43611__$1 = state_43611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43611__$1,(14),inst_43586);
} else {
if((state_val_43612 === (2))){
var state_43611__$1 = state_43611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43611__$1,(4),results);
} else {
if((state_val_43612 === (19))){
var state_43611__$1 = state_43611;
var statearr_43632_45349 = state_43611__$1;
(statearr_43632_45349[(2)] = null);

(statearr_43632_45349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (11))){
var inst_43586 = (state_43611[(2)]);
var state_43611__$1 = (function (){var statearr_43634 = state_43611;
(statearr_43634[(10)] = inst_43586);

return statearr_43634;
})();
var statearr_43635_45350 = state_43611__$1;
(statearr_43635_45350[(2)] = null);

(statearr_43635_45350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (9))){
var state_43611__$1 = state_43611;
var statearr_43636_45351 = state_43611__$1;
(statearr_43636_45351[(2)] = null);

(statearr_43636_45351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (5))){
var state_43611__$1 = state_43611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43637_45352 = state_43611__$1;
(statearr_43637_45352[(1)] = (8));

} else {
var statearr_43638_45353 = state_43611__$1;
(statearr_43638_45353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (14))){
var inst_43591 = (state_43611[(11)]);
var inst_43589 = (state_43611[(8)]);
var inst_43589__$1 = (state_43611[(2)]);
var inst_43590 = (inst_43589__$1 == null);
var inst_43591__$1 = cljs.core.not(inst_43590);
var state_43611__$1 = (function (){var statearr_43639 = state_43611;
(statearr_43639[(11)] = inst_43591__$1);

(statearr_43639[(8)] = inst_43589__$1);

return statearr_43639;
})();
if(inst_43591__$1){
var statearr_43640_45354 = state_43611__$1;
(statearr_43640_45354[(1)] = (15));

} else {
var statearr_43641_45355 = state_43611__$1;
(statearr_43641_45355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (16))){
var inst_43591 = (state_43611[(11)]);
var state_43611__$1 = state_43611;
var statearr_43642_45356 = state_43611__$1;
(statearr_43642_45356[(2)] = inst_43591);

(statearr_43642_45356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (10))){
var inst_43583 = (state_43611[(2)]);
var state_43611__$1 = state_43611;
var statearr_43643_45357 = state_43611__$1;
(statearr_43643_45357[(2)] = inst_43583);

(statearr_43643_45357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (18))){
var inst_43594 = (state_43611[(2)]);
var state_43611__$1 = state_43611;
var statearr_43644_45358 = state_43611__$1;
(statearr_43644_45358[(2)] = inst_43594);

(statearr_43644_45358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43612 === (8))){
var inst_43580 = cljs.core.async.close_BANG_(to);
var state_43611__$1 = state_43611;
var statearr_43645_45359 = state_43611__$1;
(statearr_43645_45359[(2)] = inst_43580);

(statearr_43645_45359[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0 = (function (){
var statearr_43647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__);

(statearr_43647[(1)] = (1));

return statearr_43647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1 = (function (state_43611){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43611);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43648){var ex__42664__auto__ = e43648;
var statearr_43649_45360 = state_43611;
(statearr_43649_45360[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43611[(4)]))){
var statearr_43650_45361 = state_43611;
(statearr_43650_45361[(1)] = cljs.core.first((state_43611[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45363 = state_43611;
state_43611 = G__45363;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__ = function(state_43611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1.call(this,state_43611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43651 = f__42884__auto__();
(statearr_43651[(6)] = c__42883__auto__);

return statearr_43651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));

return c__42883__auto__;
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
var G__43656 = arguments.length;
switch (G__43656) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__43674 = arguments.length;
switch (G__43674) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__43688 = arguments.length;
switch (G__43688) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42883__auto___45374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43714){
var state_val_43715 = (state_43714[(1)]);
if((state_val_43715 === (7))){
var inst_43710 = (state_43714[(2)]);
var state_43714__$1 = state_43714;
var statearr_43716_45375 = state_43714__$1;
(statearr_43716_45375[(2)] = inst_43710);

(statearr_43716_45375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (1))){
var state_43714__$1 = state_43714;
var statearr_43717_45376 = state_43714__$1;
(statearr_43717_45376[(2)] = null);

(statearr_43717_45376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (4))){
var inst_43691 = (state_43714[(7)]);
var inst_43691__$1 = (state_43714[(2)]);
var inst_43692 = (inst_43691__$1 == null);
var state_43714__$1 = (function (){var statearr_43718 = state_43714;
(statearr_43718[(7)] = inst_43691__$1);

return statearr_43718;
})();
if(cljs.core.truth_(inst_43692)){
var statearr_43719_45377 = state_43714__$1;
(statearr_43719_45377[(1)] = (5));

} else {
var statearr_43720_45378 = state_43714__$1;
(statearr_43720_45378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (13))){
var state_43714__$1 = state_43714;
var statearr_43721_45379 = state_43714__$1;
(statearr_43721_45379[(2)] = null);

(statearr_43721_45379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (6))){
var inst_43691 = (state_43714[(7)]);
var inst_43697 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43691) : p.call(null,inst_43691));
var state_43714__$1 = state_43714;
if(cljs.core.truth_(inst_43697)){
var statearr_43722_45380 = state_43714__$1;
(statearr_43722_45380[(1)] = (9));

} else {
var statearr_43723_45381 = state_43714__$1;
(statearr_43723_45381[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (3))){
var inst_43712 = (state_43714[(2)]);
var state_43714__$1 = state_43714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43714__$1,inst_43712);
} else {
if((state_val_43715 === (12))){
var state_43714__$1 = state_43714;
var statearr_43726_45382 = state_43714__$1;
(statearr_43726_45382[(2)] = null);

(statearr_43726_45382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (2))){
var state_43714__$1 = state_43714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43714__$1,(4),ch);
} else {
if((state_val_43715 === (11))){
var inst_43691 = (state_43714[(7)]);
var inst_43701 = (state_43714[(2)]);
var state_43714__$1 = state_43714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43714__$1,(8),inst_43701,inst_43691);
} else {
if((state_val_43715 === (9))){
var state_43714__$1 = state_43714;
var statearr_43728_45383 = state_43714__$1;
(statearr_43728_45383[(2)] = tc);

(statearr_43728_45383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (5))){
var inst_43694 = cljs.core.async.close_BANG_(tc);
var inst_43695 = cljs.core.async.close_BANG_(fc);
var state_43714__$1 = (function (){var statearr_43729 = state_43714;
(statearr_43729[(8)] = inst_43694);

return statearr_43729;
})();
var statearr_43730_45384 = state_43714__$1;
(statearr_43730_45384[(2)] = inst_43695);

(statearr_43730_45384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (14))){
var inst_43708 = (state_43714[(2)]);
var state_43714__$1 = state_43714;
var statearr_43731_45385 = state_43714__$1;
(statearr_43731_45385[(2)] = inst_43708);

(statearr_43731_45385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (10))){
var state_43714__$1 = state_43714;
var statearr_43732_45386 = state_43714__$1;
(statearr_43732_45386[(2)] = fc);

(statearr_43732_45386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43715 === (8))){
var inst_43703 = (state_43714[(2)]);
var state_43714__$1 = state_43714;
if(cljs.core.truth_(inst_43703)){
var statearr_43733_45387 = state_43714__$1;
(statearr_43733_45387[(1)] = (12));

} else {
var statearr_43734_45388 = state_43714__$1;
(statearr_43734_45388[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_43735 = [null,null,null,null,null,null,null,null,null];
(statearr_43735[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_43735[(1)] = (1));

return statearr_43735;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_43714){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43714);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43736){var ex__42664__auto__ = e43736;
var statearr_43737_45390 = state_43714;
(statearr_43737_45390[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43714[(4)]))){
var statearr_43738_45391 = state_43714;
(statearr_43738_45391[(1)] = cljs.core.first((state_43714[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45392 = state_43714;
state_43714 = G__45392;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_43714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_43714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43739 = f__42884__auto__();
(statearr_43739[(6)] = c__42883__auto___45374);

return statearr_43739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43769){
var state_val_43770 = (state_43769[(1)]);
if((state_val_43770 === (7))){
var inst_43764 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43771_45393 = state_43769__$1;
(statearr_43771_45393[(2)] = inst_43764);

(statearr_43771_45393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (1))){
var inst_43740 = init;
var inst_43741 = inst_43740;
var state_43769__$1 = (function (){var statearr_43772 = state_43769;
(statearr_43772[(7)] = inst_43741);

return statearr_43772;
})();
var statearr_43773_45394 = state_43769__$1;
(statearr_43773_45394[(2)] = null);

(statearr_43773_45394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (4))){
var inst_43744 = (state_43769[(8)]);
var inst_43744__$1 = (state_43769[(2)]);
var inst_43745 = (inst_43744__$1 == null);
var state_43769__$1 = (function (){var statearr_43774 = state_43769;
(statearr_43774[(8)] = inst_43744__$1);

return statearr_43774;
})();
if(cljs.core.truth_(inst_43745)){
var statearr_43775_45395 = state_43769__$1;
(statearr_43775_45395[(1)] = (5));

} else {
var statearr_43776_45398 = state_43769__$1;
(statearr_43776_45398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (6))){
var inst_43744 = (state_43769[(8)]);
var inst_43741 = (state_43769[(7)]);
var inst_43748 = (state_43769[(9)]);
var inst_43748__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43741,inst_43744) : f.call(null,inst_43741,inst_43744));
var inst_43749 = cljs.core.reduced_QMARK_(inst_43748__$1);
var state_43769__$1 = (function (){var statearr_43779 = state_43769;
(statearr_43779[(9)] = inst_43748__$1);

return statearr_43779;
})();
if(inst_43749){
var statearr_43781_45399 = state_43769__$1;
(statearr_43781_45399[(1)] = (8));

} else {
var statearr_43783_45400 = state_43769__$1;
(statearr_43783_45400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (3))){
var inst_43766 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43769__$1,inst_43766);
} else {
if((state_val_43770 === (2))){
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43769__$1,(4),ch);
} else {
if((state_val_43770 === (9))){
var inst_43748 = (state_43769[(9)]);
var inst_43741 = inst_43748;
var state_43769__$1 = (function (){var statearr_43788 = state_43769;
(statearr_43788[(7)] = inst_43741);

return statearr_43788;
})();
var statearr_43789_45401 = state_43769__$1;
(statearr_43789_45401[(2)] = null);

(statearr_43789_45401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (5))){
var inst_43741 = (state_43769[(7)]);
var state_43769__$1 = state_43769;
var statearr_43790_45402 = state_43769__$1;
(statearr_43790_45402[(2)] = inst_43741);

(statearr_43790_45402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (10))){
var inst_43762 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43791_45403 = state_43769__$1;
(statearr_43791_45403[(2)] = inst_43762);

(statearr_43791_45403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (8))){
var inst_43748 = (state_43769[(9)]);
var inst_43758 = cljs.core.deref(inst_43748);
var state_43769__$1 = state_43769;
var statearr_43792_45404 = state_43769__$1;
(statearr_43792_45404[(2)] = inst_43758);

(statearr_43792_45404[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42661__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42661__auto____0 = (function (){
var statearr_43795 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43795[(0)] = cljs$core$async$reduce_$_state_machine__42661__auto__);

(statearr_43795[(1)] = (1));

return statearr_43795;
});
var cljs$core$async$reduce_$_state_machine__42661__auto____1 = (function (state_43769){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43769);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43796){var ex__42664__auto__ = e43796;
var statearr_43797_45405 = state_43769;
(statearr_43797_45405[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43769[(4)]))){
var statearr_43798_45406 = state_43769;
(statearr_43798_45406[(1)] = cljs.core.first((state_43769[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45407 = state_43769;
state_43769 = G__45407;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42661__auto__ = function(state_43769){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42661__auto____1.call(this,state_43769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42661__auto____0;
cljs$core$async$reduce_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42661__auto____1;
return cljs$core$async$reduce_$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43803 = f__42884__auto__();
(statearr_43803[(6)] = c__42883__auto__);

return statearr_43803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));

return c__42883__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43809){
var state_val_43810 = (state_43809[(1)]);
if((state_val_43810 === (1))){
var inst_43804 = cljs.core.async.reduce(f__$1,init,ch);
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43809__$1,(2),inst_43804);
} else {
if((state_val_43810 === (2))){
var inst_43806 = (state_43809[(2)]);
var inst_43807 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43806) : f__$1.call(null,inst_43806));
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43809__$1,inst_43807);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42661__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42661__auto____0 = (function (){
var statearr_43815 = [null,null,null,null,null,null,null];
(statearr_43815[(0)] = cljs$core$async$transduce_$_state_machine__42661__auto__);

(statearr_43815[(1)] = (1));

return statearr_43815;
});
var cljs$core$async$transduce_$_state_machine__42661__auto____1 = (function (state_43809){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43809);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43816){var ex__42664__auto__ = e43816;
var statearr_43817_45408 = state_43809;
(statearr_43817_45408[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43809[(4)]))){
var statearr_43819_45409 = state_43809;
(statearr_43819_45409[(1)] = cljs.core.first((state_43809[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45410 = state_43809;
state_43809 = G__45410;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42661__auto__ = function(state_43809){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42661__auto____1.call(this,state_43809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42661__auto____0;
cljs$core$async$transduce_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42661__auto____1;
return cljs$core$async$transduce_$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43823 = f__42884__auto__();
(statearr_43823[(6)] = c__42883__auto__);

return statearr_43823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));

return c__42883__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__43826 = arguments.length;
switch (G__43826) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_43857){
var state_val_43858 = (state_43857[(1)]);
if((state_val_43858 === (7))){
var inst_43839 = (state_43857[(2)]);
var state_43857__$1 = state_43857;
var statearr_43859_45412 = state_43857__$1;
(statearr_43859_45412[(2)] = inst_43839);

(statearr_43859_45412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (1))){
var inst_43831 = cljs.core.seq(coll);
var inst_43832 = inst_43831;
var state_43857__$1 = (function (){var statearr_43864 = state_43857;
(statearr_43864[(7)] = inst_43832);

return statearr_43864;
})();
var statearr_43865_45413 = state_43857__$1;
(statearr_43865_45413[(2)] = null);

(statearr_43865_45413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (4))){
var inst_43832 = (state_43857[(7)]);
var inst_43837 = cljs.core.first(inst_43832);
var state_43857__$1 = state_43857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43857__$1,(7),ch,inst_43837);
} else {
if((state_val_43858 === (13))){
var inst_43851 = (state_43857[(2)]);
var state_43857__$1 = state_43857;
var statearr_43866_45414 = state_43857__$1;
(statearr_43866_45414[(2)] = inst_43851);

(statearr_43866_45414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (6))){
var inst_43842 = (state_43857[(2)]);
var state_43857__$1 = state_43857;
if(cljs.core.truth_(inst_43842)){
var statearr_43867_45415 = state_43857__$1;
(statearr_43867_45415[(1)] = (8));

} else {
var statearr_43868_45416 = state_43857__$1;
(statearr_43868_45416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (3))){
var inst_43855 = (state_43857[(2)]);
var state_43857__$1 = state_43857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43857__$1,inst_43855);
} else {
if((state_val_43858 === (12))){
var state_43857__$1 = state_43857;
var statearr_43870_45417 = state_43857__$1;
(statearr_43870_45417[(2)] = null);

(statearr_43870_45417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (2))){
var inst_43832 = (state_43857[(7)]);
var state_43857__$1 = state_43857;
if(cljs.core.truth_(inst_43832)){
var statearr_43872_45418 = state_43857__$1;
(statearr_43872_45418[(1)] = (4));

} else {
var statearr_43873_45419 = state_43857__$1;
(statearr_43873_45419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (11))){
var inst_43848 = cljs.core.async.close_BANG_(ch);
var state_43857__$1 = state_43857;
var statearr_43874_45420 = state_43857__$1;
(statearr_43874_45420[(2)] = inst_43848);

(statearr_43874_45420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (9))){
var state_43857__$1 = state_43857;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43875_45421 = state_43857__$1;
(statearr_43875_45421[(1)] = (11));

} else {
var statearr_43876_45422 = state_43857__$1;
(statearr_43876_45422[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (5))){
var inst_43832 = (state_43857[(7)]);
var state_43857__$1 = state_43857;
var statearr_43877_45423 = state_43857__$1;
(statearr_43877_45423[(2)] = inst_43832);

(statearr_43877_45423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (10))){
var inst_43853 = (state_43857[(2)]);
var state_43857__$1 = state_43857;
var statearr_43880_45424 = state_43857__$1;
(statearr_43880_45424[(2)] = inst_43853);

(statearr_43880_45424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43858 === (8))){
var inst_43832 = (state_43857[(7)]);
var inst_43844 = cljs.core.next(inst_43832);
var inst_43832__$1 = inst_43844;
var state_43857__$1 = (function (){var statearr_43881 = state_43857;
(statearr_43881[(7)] = inst_43832__$1);

return statearr_43881;
})();
var statearr_43883_45425 = state_43857__$1;
(statearr_43883_45425[(2)] = null);

(statearr_43883_45425[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_43885 = [null,null,null,null,null,null,null,null];
(statearr_43885[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_43885[(1)] = (1));

return statearr_43885;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_43857){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_43857);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e43886){var ex__42664__auto__ = e43886;
var statearr_43887_45426 = state_43857;
(statearr_43887_45426[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_43857[(4)]))){
var statearr_43888_45427 = state_43857;
(statearr_43888_45427[(1)] = cljs.core.first((state_43857[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45428 = state_43857;
state_43857 = G__45428;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_43857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_43857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_43889 = f__42884__auto__();
(statearr_43889[(6)] = c__42883__auto__);

return statearr_43889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));

return c__42883__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43891 = arguments.length;
switch (G__43891) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45430 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45430(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45431 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45431(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45432 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45432(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45433 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45433(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43902 = (function (ch,cs,meta43903){
this.ch = ch;
this.cs = cs;
this.meta43903 = meta43903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43904,meta43903__$1){
var self__ = this;
var _43904__$1 = this;
return (new cljs.core.async.t_cljs$core$async43902(self__.ch,self__.cs,meta43903__$1));
}));

(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43904){
var self__ = this;
var _43904__$1 = this;
return self__.meta43903;
}));

(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43902.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43903","meta43903",582269416,null)], null);
}));

(cljs.core.async.t_cljs$core$async43902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43902");

(cljs.core.async.t_cljs$core$async43902.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43902.
 */
cljs.core.async.__GT_t_cljs$core$async43902 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43902(ch__$1,cs__$1,meta43903){
return (new cljs.core.async.t_cljs$core$async43902(ch__$1,cs__$1,meta43903));
});

}

return (new cljs.core.async.t_cljs$core$async43902(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42883__auto___45434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44101){
var state_val_44102 = (state_44101[(1)]);
if((state_val_44102 === (7))){
var inst_44097 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44103_45435 = state_44101__$1;
(statearr_44103_45435[(2)] = inst_44097);

(statearr_44103_45435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (20))){
var inst_43972 = (state_44101[(7)]);
var inst_43988 = cljs.core.first(inst_43972);
var inst_43989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43988,(0),null);
var inst_43990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43988,(1),null);
var state_44101__$1 = (function (){var statearr_44104 = state_44101;
(statearr_44104[(8)] = inst_43989);

return statearr_44104;
})();
if(cljs.core.truth_(inst_43990)){
var statearr_44105_45436 = state_44101__$1;
(statearr_44105_45436[(1)] = (22));

} else {
var statearr_44106_45437 = state_44101__$1;
(statearr_44106_45437[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (27))){
var inst_44020 = (state_44101[(9)]);
var inst_44018 = (state_44101[(10)]);
var inst_43940 = (state_44101[(11)]);
var inst_44039 = (state_44101[(12)]);
var inst_44039__$1 = cljs.core._nth(inst_44018,inst_44020);
var inst_44040 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44039__$1,inst_43940,done);
var state_44101__$1 = (function (){var statearr_44107 = state_44101;
(statearr_44107[(12)] = inst_44039__$1);

return statearr_44107;
})();
if(cljs.core.truth_(inst_44040)){
var statearr_44108_45438 = state_44101__$1;
(statearr_44108_45438[(1)] = (30));

} else {
var statearr_44109_45439 = state_44101__$1;
(statearr_44109_45439[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (1))){
var state_44101__$1 = state_44101;
var statearr_44110_45440 = state_44101__$1;
(statearr_44110_45440[(2)] = null);

(statearr_44110_45440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (24))){
var inst_43972 = (state_44101[(7)]);
var inst_43995 = (state_44101[(2)]);
var inst_43996 = cljs.core.next(inst_43972);
var inst_43949 = inst_43996;
var inst_43950 = null;
var inst_43951 = (0);
var inst_43952 = (0);
var state_44101__$1 = (function (){var statearr_44111 = state_44101;
(statearr_44111[(13)] = inst_43949);

(statearr_44111[(14)] = inst_43952);

(statearr_44111[(15)] = inst_43950);

(statearr_44111[(16)] = inst_43951);

(statearr_44111[(17)] = inst_43995);

return statearr_44111;
})();
var statearr_44112_45441 = state_44101__$1;
(statearr_44112_45441[(2)] = null);

(statearr_44112_45441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (39))){
var state_44101__$1 = state_44101;
var statearr_44116_45442 = state_44101__$1;
(statearr_44116_45442[(2)] = null);

(statearr_44116_45442[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (4))){
var inst_43940 = (state_44101[(11)]);
var inst_43940__$1 = (state_44101[(2)]);
var inst_43941 = (inst_43940__$1 == null);
var state_44101__$1 = (function (){var statearr_44117 = state_44101;
(statearr_44117[(11)] = inst_43940__$1);

return statearr_44117;
})();
if(cljs.core.truth_(inst_43941)){
var statearr_44118_45443 = state_44101__$1;
(statearr_44118_45443[(1)] = (5));

} else {
var statearr_44119_45444 = state_44101__$1;
(statearr_44119_45444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (15))){
var inst_43949 = (state_44101[(13)]);
var inst_43952 = (state_44101[(14)]);
var inst_43950 = (state_44101[(15)]);
var inst_43951 = (state_44101[(16)]);
var inst_43968 = (state_44101[(2)]);
var inst_43969 = (inst_43952 + (1));
var tmp44113 = inst_43949;
var tmp44114 = inst_43950;
var tmp44115 = inst_43951;
var inst_43949__$1 = tmp44113;
var inst_43950__$1 = tmp44114;
var inst_43951__$1 = tmp44115;
var inst_43952__$1 = inst_43969;
var state_44101__$1 = (function (){var statearr_44120 = state_44101;
(statearr_44120[(13)] = inst_43949__$1);

(statearr_44120[(14)] = inst_43952__$1);

(statearr_44120[(18)] = inst_43968);

(statearr_44120[(15)] = inst_43950__$1);

(statearr_44120[(16)] = inst_43951__$1);

return statearr_44120;
})();
var statearr_44121_45445 = state_44101__$1;
(statearr_44121_45445[(2)] = null);

(statearr_44121_45445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (21))){
var inst_43999 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44125_45446 = state_44101__$1;
(statearr_44125_45446[(2)] = inst_43999);

(statearr_44125_45446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (31))){
var inst_44039 = (state_44101[(12)]);
var inst_44043 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44039);
var state_44101__$1 = state_44101;
var statearr_44126_45447 = state_44101__$1;
(statearr_44126_45447[(2)] = inst_44043);

(statearr_44126_45447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (32))){
var inst_44019 = (state_44101[(19)]);
var inst_44020 = (state_44101[(9)]);
var inst_44017 = (state_44101[(20)]);
var inst_44018 = (state_44101[(10)]);
var inst_44057 = (state_44101[(2)]);
var inst_44058 = (inst_44020 + (1));
var tmp44122 = inst_44019;
var tmp44123 = inst_44017;
var tmp44124 = inst_44018;
var inst_44017__$1 = tmp44123;
var inst_44018__$1 = tmp44124;
var inst_44019__$1 = tmp44122;
var inst_44020__$1 = inst_44058;
var state_44101__$1 = (function (){var statearr_44127 = state_44101;
(statearr_44127[(19)] = inst_44019__$1);

(statearr_44127[(9)] = inst_44020__$1);

(statearr_44127[(20)] = inst_44017__$1);

(statearr_44127[(10)] = inst_44018__$1);

(statearr_44127[(21)] = inst_44057);

return statearr_44127;
})();
var statearr_44128_45448 = state_44101__$1;
(statearr_44128_45448[(2)] = null);

(statearr_44128_45448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (40))){
var inst_44070 = (state_44101[(22)]);
var inst_44074 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44070);
var state_44101__$1 = state_44101;
var statearr_44129_45449 = state_44101__$1;
(statearr_44129_45449[(2)] = inst_44074);

(statearr_44129_45449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (33))){
var inst_44061 = (state_44101[(23)]);
var inst_44063 = cljs.core.chunked_seq_QMARK_(inst_44061);
var state_44101__$1 = state_44101;
if(inst_44063){
var statearr_44130_45450 = state_44101__$1;
(statearr_44130_45450[(1)] = (36));

} else {
var statearr_44131_45451 = state_44101__$1;
(statearr_44131_45451[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (13))){
var inst_43962 = (state_44101[(24)]);
var inst_43965 = cljs.core.async.close_BANG_(inst_43962);
var state_44101__$1 = state_44101;
var statearr_44132_45452 = state_44101__$1;
(statearr_44132_45452[(2)] = inst_43965);

(statearr_44132_45452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (22))){
var inst_43989 = (state_44101[(8)]);
var inst_43992 = cljs.core.async.close_BANG_(inst_43989);
var state_44101__$1 = state_44101;
var statearr_44133_45453 = state_44101__$1;
(statearr_44133_45453[(2)] = inst_43992);

(statearr_44133_45453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (36))){
var inst_44061 = (state_44101[(23)]);
var inst_44065 = cljs.core.chunk_first(inst_44061);
var inst_44066 = cljs.core.chunk_rest(inst_44061);
var inst_44067 = cljs.core.count(inst_44065);
var inst_44017 = inst_44066;
var inst_44018 = inst_44065;
var inst_44019 = inst_44067;
var inst_44020 = (0);
var state_44101__$1 = (function (){var statearr_44134 = state_44101;
(statearr_44134[(19)] = inst_44019);

(statearr_44134[(9)] = inst_44020);

(statearr_44134[(20)] = inst_44017);

(statearr_44134[(10)] = inst_44018);

return statearr_44134;
})();
var statearr_44135_45454 = state_44101__$1;
(statearr_44135_45454[(2)] = null);

(statearr_44135_45454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (41))){
var inst_44061 = (state_44101[(23)]);
var inst_44076 = (state_44101[(2)]);
var inst_44077 = cljs.core.next(inst_44061);
var inst_44017 = inst_44077;
var inst_44018 = null;
var inst_44019 = (0);
var inst_44020 = (0);
var state_44101__$1 = (function (){var statearr_44136 = state_44101;
(statearr_44136[(19)] = inst_44019);

(statearr_44136[(9)] = inst_44020);

(statearr_44136[(20)] = inst_44017);

(statearr_44136[(10)] = inst_44018);

(statearr_44136[(25)] = inst_44076);

return statearr_44136;
})();
var statearr_44137_45456 = state_44101__$1;
(statearr_44137_45456[(2)] = null);

(statearr_44137_45456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (43))){
var state_44101__$1 = state_44101;
var statearr_44138_45457 = state_44101__$1;
(statearr_44138_45457[(2)] = null);

(statearr_44138_45457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (29))){
var inst_44085 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44139_45458 = state_44101__$1;
(statearr_44139_45458[(2)] = inst_44085);

(statearr_44139_45458[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (44))){
var inst_44094 = (state_44101[(2)]);
var state_44101__$1 = (function (){var statearr_44140 = state_44101;
(statearr_44140[(26)] = inst_44094);

return statearr_44140;
})();
var statearr_44141_45460 = state_44101__$1;
(statearr_44141_45460[(2)] = null);

(statearr_44141_45460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (6))){
var inst_44009 = (state_44101[(27)]);
var inst_44008 = cljs.core.deref(cs);
var inst_44009__$1 = cljs.core.keys(inst_44008);
var inst_44010 = cljs.core.count(inst_44009__$1);
var inst_44011 = cljs.core.reset_BANG_(dctr,inst_44010);
var inst_44016 = cljs.core.seq(inst_44009__$1);
var inst_44017 = inst_44016;
var inst_44018 = null;
var inst_44019 = (0);
var inst_44020 = (0);
var state_44101__$1 = (function (){var statearr_44142 = state_44101;
(statearr_44142[(19)] = inst_44019);

(statearr_44142[(9)] = inst_44020);

(statearr_44142[(27)] = inst_44009__$1);

(statearr_44142[(20)] = inst_44017);

(statearr_44142[(10)] = inst_44018);

(statearr_44142[(28)] = inst_44011);

return statearr_44142;
})();
var statearr_44143_45462 = state_44101__$1;
(statearr_44143_45462[(2)] = null);

(statearr_44143_45462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (28))){
var inst_44017 = (state_44101[(20)]);
var inst_44061 = (state_44101[(23)]);
var inst_44061__$1 = cljs.core.seq(inst_44017);
var state_44101__$1 = (function (){var statearr_44144 = state_44101;
(statearr_44144[(23)] = inst_44061__$1);

return statearr_44144;
})();
if(inst_44061__$1){
var statearr_44145_45463 = state_44101__$1;
(statearr_44145_45463[(1)] = (33));

} else {
var statearr_44146_45464 = state_44101__$1;
(statearr_44146_45464[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (25))){
var inst_44019 = (state_44101[(19)]);
var inst_44020 = (state_44101[(9)]);
var inst_44022 = (inst_44020 < inst_44019);
var inst_44023 = inst_44022;
var state_44101__$1 = state_44101;
if(cljs.core.truth_(inst_44023)){
var statearr_44147_45465 = state_44101__$1;
(statearr_44147_45465[(1)] = (27));

} else {
var statearr_44149_45466 = state_44101__$1;
(statearr_44149_45466[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (34))){
var state_44101__$1 = state_44101;
var statearr_44151_45467 = state_44101__$1;
(statearr_44151_45467[(2)] = null);

(statearr_44151_45467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (17))){
var state_44101__$1 = state_44101;
var statearr_44152_45468 = state_44101__$1;
(statearr_44152_45468[(2)] = null);

(statearr_44152_45468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (3))){
var inst_44099 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44101__$1,inst_44099);
} else {
if((state_val_44102 === (12))){
var inst_44004 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44153_45471 = state_44101__$1;
(statearr_44153_45471[(2)] = inst_44004);

(statearr_44153_45471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (2))){
var state_44101__$1 = state_44101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44101__$1,(4),ch);
} else {
if((state_val_44102 === (23))){
var state_44101__$1 = state_44101;
var statearr_44157_45472 = state_44101__$1;
(statearr_44157_45472[(2)] = null);

(statearr_44157_45472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (35))){
var inst_44083 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44158_45473 = state_44101__$1;
(statearr_44158_45473[(2)] = inst_44083);

(statearr_44158_45473[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (19))){
var inst_43972 = (state_44101[(7)]);
var inst_43976 = cljs.core.chunk_first(inst_43972);
var inst_43977 = cljs.core.chunk_rest(inst_43972);
var inst_43978 = cljs.core.count(inst_43976);
var inst_43949 = inst_43977;
var inst_43950 = inst_43976;
var inst_43951 = inst_43978;
var inst_43952 = (0);
var state_44101__$1 = (function (){var statearr_44160 = state_44101;
(statearr_44160[(13)] = inst_43949);

(statearr_44160[(14)] = inst_43952);

(statearr_44160[(15)] = inst_43950);

(statearr_44160[(16)] = inst_43951);

return statearr_44160;
})();
var statearr_44161_45474 = state_44101__$1;
(statearr_44161_45474[(2)] = null);

(statearr_44161_45474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (11))){
var inst_43949 = (state_44101[(13)]);
var inst_43972 = (state_44101[(7)]);
var inst_43972__$1 = cljs.core.seq(inst_43949);
var state_44101__$1 = (function (){var statearr_44162 = state_44101;
(statearr_44162[(7)] = inst_43972__$1);

return statearr_44162;
})();
if(inst_43972__$1){
var statearr_44163_45475 = state_44101__$1;
(statearr_44163_45475[(1)] = (16));

} else {
var statearr_44164_45476 = state_44101__$1;
(statearr_44164_45476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (9))){
var inst_44006 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44165_45477 = state_44101__$1;
(statearr_44165_45477[(2)] = inst_44006);

(statearr_44165_45477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (5))){
var inst_43947 = cljs.core.deref(cs);
var inst_43948 = cljs.core.seq(inst_43947);
var inst_43949 = inst_43948;
var inst_43950 = null;
var inst_43951 = (0);
var inst_43952 = (0);
var state_44101__$1 = (function (){var statearr_44167 = state_44101;
(statearr_44167[(13)] = inst_43949);

(statearr_44167[(14)] = inst_43952);

(statearr_44167[(15)] = inst_43950);

(statearr_44167[(16)] = inst_43951);

return statearr_44167;
})();
var statearr_44168_45478 = state_44101__$1;
(statearr_44168_45478[(2)] = null);

(statearr_44168_45478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (14))){
var state_44101__$1 = state_44101;
var statearr_44169_45479 = state_44101__$1;
(statearr_44169_45479[(2)] = null);

(statearr_44169_45479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (45))){
var inst_44091 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44170_45480 = state_44101__$1;
(statearr_44170_45480[(2)] = inst_44091);

(statearr_44170_45480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (26))){
var inst_44009 = (state_44101[(27)]);
var inst_44087 = (state_44101[(2)]);
var inst_44088 = cljs.core.seq(inst_44009);
var state_44101__$1 = (function (){var statearr_44171 = state_44101;
(statearr_44171[(29)] = inst_44087);

return statearr_44171;
})();
if(inst_44088){
var statearr_44172_45481 = state_44101__$1;
(statearr_44172_45481[(1)] = (42));

} else {
var statearr_44173_45482 = state_44101__$1;
(statearr_44173_45482[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (16))){
var inst_43972 = (state_44101[(7)]);
var inst_43974 = cljs.core.chunked_seq_QMARK_(inst_43972);
var state_44101__$1 = state_44101;
if(inst_43974){
var statearr_44176_45483 = state_44101__$1;
(statearr_44176_45483[(1)] = (19));

} else {
var statearr_44177_45484 = state_44101__$1;
(statearr_44177_45484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (38))){
var inst_44080 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44179_45485 = state_44101__$1;
(statearr_44179_45485[(2)] = inst_44080);

(statearr_44179_45485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (30))){
var state_44101__$1 = state_44101;
var statearr_44180_45486 = state_44101__$1;
(statearr_44180_45486[(2)] = null);

(statearr_44180_45486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (10))){
var inst_43952 = (state_44101[(14)]);
var inst_43950 = (state_44101[(15)]);
var inst_43961 = cljs.core._nth(inst_43950,inst_43952);
var inst_43962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43961,(0),null);
var inst_43963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43961,(1),null);
var state_44101__$1 = (function (){var statearr_44181 = state_44101;
(statearr_44181[(24)] = inst_43962);

return statearr_44181;
})();
if(cljs.core.truth_(inst_43963)){
var statearr_44182_45487 = state_44101__$1;
(statearr_44182_45487[(1)] = (13));

} else {
var statearr_44183_45488 = state_44101__$1;
(statearr_44183_45488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (18))){
var inst_44002 = (state_44101[(2)]);
var state_44101__$1 = state_44101;
var statearr_44185_45489 = state_44101__$1;
(statearr_44185_45489[(2)] = inst_44002);

(statearr_44185_45489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (42))){
var state_44101__$1 = state_44101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44101__$1,(45),dchan);
} else {
if((state_val_44102 === (37))){
var inst_44070 = (state_44101[(22)]);
var inst_44061 = (state_44101[(23)]);
var inst_43940 = (state_44101[(11)]);
var inst_44070__$1 = cljs.core.first(inst_44061);
var inst_44071 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44070__$1,inst_43940,done);
var state_44101__$1 = (function (){var statearr_44186 = state_44101;
(statearr_44186[(22)] = inst_44070__$1);

return statearr_44186;
})();
if(cljs.core.truth_(inst_44071)){
var statearr_44187_45490 = state_44101__$1;
(statearr_44187_45490[(1)] = (39));

} else {
var statearr_44188_45491 = state_44101__$1;
(statearr_44188_45491[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44102 === (8))){
var inst_43952 = (state_44101[(14)]);
var inst_43951 = (state_44101[(16)]);
var inst_43954 = (inst_43952 < inst_43951);
var inst_43955 = inst_43954;
var state_44101__$1 = state_44101;
if(cljs.core.truth_(inst_43955)){
var statearr_44189_45492 = state_44101__$1;
(statearr_44189_45492[(1)] = (10));

} else {
var statearr_44192_45493 = state_44101__$1;
(statearr_44192_45493[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__42661__auto__ = null;
var cljs$core$async$mult_$_state_machine__42661__auto____0 = (function (){
var statearr_44196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44196[(0)] = cljs$core$async$mult_$_state_machine__42661__auto__);

(statearr_44196[(1)] = (1));

return statearr_44196;
});
var cljs$core$async$mult_$_state_machine__42661__auto____1 = (function (state_44101){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44101);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44197){var ex__42664__auto__ = e44197;
var statearr_44198_45496 = state_44101;
(statearr_44198_45496[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44101[(4)]))){
var statearr_44200_45497 = state_44101;
(statearr_44200_45497[(1)] = cljs.core.first((state_44101[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45499 = state_44101;
state_44101 = G__45499;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42661__auto__ = function(state_44101){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42661__auto____1.call(this,state_44101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42661__auto____0;
cljs$core$async$mult_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42661__auto____1;
return cljs$core$async$mult_$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_44203 = f__42884__auto__();
(statearr_44203[(6)] = c__42883__auto___45434);

return statearr_44203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44207 = arguments.length;
switch (G__44207) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45501 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45501(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45504 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45504(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45509 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45509(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45510 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45510(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45513 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45513(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45514 = arguments.length;
var i__4865__auto___45515 = (0);
while(true){
if((i__4865__auto___45515 < len__4864__auto___45514)){
args__4870__auto__.push((arguments[i__4865__auto___45515]));

var G__45516 = (i__4865__auto___45515 + (1));
i__4865__auto___45515 = G__45516;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44229){
var map__44233 = p__44229;
var map__44233__$1 = cljs.core.__destructure_map(map__44233);
var opts = map__44233__$1;
var statearr_44234_45517 = state;
(statearr_44234_45517[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44235_45518 = state;
(statearr_44235_45518[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_44236_45519 = state;
(statearr_44236_45519[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44223){
var G__44224 = cljs.core.first(seq44223);
var seq44223__$1 = cljs.core.next(seq44223);
var G__44225 = cljs.core.first(seq44223__$1);
var seq44223__$2 = cljs.core.next(seq44223__$1);
var G__44226 = cljs.core.first(seq44223__$2);
var seq44223__$3 = cljs.core.next(seq44223__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44224,G__44225,G__44226,seq44223__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44237 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44238){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44238 = meta44238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44239,meta44238__$1){
var self__ = this;
var _44239__$1 = this;
return (new cljs.core.async.t_cljs$core$async44237(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44238__$1));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44239){
var self__ = this;
var _44239__$1 = this;
return self__.meta44238;
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44238","meta44238",-711829142,null)], null);
}));

(cljs.core.async.t_cljs$core$async44237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44237");

(cljs.core.async.t_cljs$core$async44237.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44237.
 */
cljs.core.async.__GT_t_cljs$core$async44237 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44237(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44238){
return (new cljs.core.async.t_cljs$core$async44237(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44238));
});

}

return (new cljs.core.async.t_cljs$core$async44237(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42883__auto___45522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44318){
var state_val_44319 = (state_44318[(1)]);
if((state_val_44319 === (7))){
var inst_44277 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
if(cljs.core.truth_(inst_44277)){
var statearr_44323_45523 = state_44318__$1;
(statearr_44323_45523[(1)] = (8));

} else {
var statearr_44324_45524 = state_44318__$1;
(statearr_44324_45524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (20))){
var inst_44270 = (state_44318[(7)]);
var state_44318__$1 = state_44318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44318__$1,(23),out,inst_44270);
} else {
if((state_val_44319 === (1))){
var inst_44253 = calc_state();
var inst_44254 = cljs.core.__destructure_map(inst_44253);
var inst_44255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44254,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44254,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44254,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44258 = inst_44253;
var state_44318__$1 = (function (){var statearr_44327 = state_44318;
(statearr_44327[(8)] = inst_44257);

(statearr_44327[(9)] = inst_44255);

(statearr_44327[(10)] = inst_44256);

(statearr_44327[(11)] = inst_44258);

return statearr_44327;
})();
var statearr_44328_45525 = state_44318__$1;
(statearr_44328_45525[(2)] = null);

(statearr_44328_45525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (24))){
var inst_44261 = (state_44318[(12)]);
var inst_44258 = inst_44261;
var state_44318__$1 = (function (){var statearr_44329 = state_44318;
(statearr_44329[(11)] = inst_44258);

return statearr_44329;
})();
var statearr_44330_45526 = state_44318__$1;
(statearr_44330_45526[(2)] = null);

(statearr_44330_45526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (4))){
var inst_44272 = (state_44318[(13)]);
var inst_44270 = (state_44318[(7)]);
var inst_44269 = (state_44318[(2)]);
var inst_44270__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44269,(0),null);
var inst_44271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44269,(1),null);
var inst_44272__$1 = (inst_44270__$1 == null);
var state_44318__$1 = (function (){var statearr_44331 = state_44318;
(statearr_44331[(14)] = inst_44271);

(statearr_44331[(13)] = inst_44272__$1);

(statearr_44331[(7)] = inst_44270__$1);

return statearr_44331;
})();
if(cljs.core.truth_(inst_44272__$1)){
var statearr_44332_45527 = state_44318__$1;
(statearr_44332_45527[(1)] = (5));

} else {
var statearr_44333_45528 = state_44318__$1;
(statearr_44333_45528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (15))){
var inst_44262 = (state_44318[(15)]);
var inst_44291 = (state_44318[(16)]);
var inst_44291__$1 = cljs.core.empty_QMARK_(inst_44262);
var state_44318__$1 = (function (){var statearr_44334 = state_44318;
(statearr_44334[(16)] = inst_44291__$1);

return statearr_44334;
})();
if(inst_44291__$1){
var statearr_44335_45529 = state_44318__$1;
(statearr_44335_45529[(1)] = (17));

} else {
var statearr_44336_45530 = state_44318__$1;
(statearr_44336_45530[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (21))){
var inst_44261 = (state_44318[(12)]);
var inst_44258 = inst_44261;
var state_44318__$1 = (function (){var statearr_44339 = state_44318;
(statearr_44339[(11)] = inst_44258);

return statearr_44339;
})();
var statearr_44340_45531 = state_44318__$1;
(statearr_44340_45531[(2)] = null);

(statearr_44340_45531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (13))){
var inst_44284 = (state_44318[(2)]);
var inst_44285 = calc_state();
var inst_44258 = inst_44285;
var state_44318__$1 = (function (){var statearr_44343 = state_44318;
(statearr_44343[(11)] = inst_44258);

(statearr_44343[(17)] = inst_44284);

return statearr_44343;
})();
var statearr_44344_45532 = state_44318__$1;
(statearr_44344_45532[(2)] = null);

(statearr_44344_45532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (22))){
var inst_44311 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
var statearr_44345_45533 = state_44318__$1;
(statearr_44345_45533[(2)] = inst_44311);

(statearr_44345_45533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (6))){
var inst_44271 = (state_44318[(14)]);
var inst_44275 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44271,change);
var state_44318__$1 = state_44318;
var statearr_44347_45534 = state_44318__$1;
(statearr_44347_45534[(2)] = inst_44275);

(statearr_44347_45534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (25))){
var state_44318__$1 = state_44318;
var statearr_44349_45535 = state_44318__$1;
(statearr_44349_45535[(2)] = null);

(statearr_44349_45535[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (17))){
var inst_44263 = (state_44318[(18)]);
var inst_44271 = (state_44318[(14)]);
var inst_44293 = (inst_44263.cljs$core$IFn$_invoke$arity$1 ? inst_44263.cljs$core$IFn$_invoke$arity$1(inst_44271) : inst_44263.call(null,inst_44271));
var inst_44294 = cljs.core.not(inst_44293);
var state_44318__$1 = state_44318;
var statearr_44350_45536 = state_44318__$1;
(statearr_44350_45536[(2)] = inst_44294);

(statearr_44350_45536[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (3))){
var inst_44315 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44318__$1,inst_44315);
} else {
if((state_val_44319 === (12))){
var state_44318__$1 = state_44318;
var statearr_44351_45537 = state_44318__$1;
(statearr_44351_45537[(2)] = null);

(statearr_44351_45537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (2))){
var inst_44258 = (state_44318[(11)]);
var inst_44261 = (state_44318[(12)]);
var inst_44261__$1 = cljs.core.__destructure_map(inst_44258);
var inst_44262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44261__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44261__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44261__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44318__$1 = (function (){var statearr_44352 = state_44318;
(statearr_44352[(18)] = inst_44263);

(statearr_44352[(15)] = inst_44262);

(statearr_44352[(12)] = inst_44261__$1);

return statearr_44352;
})();
return cljs.core.async.ioc_alts_BANG_(state_44318__$1,(4),inst_44264);
} else {
if((state_val_44319 === (23))){
var inst_44302 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
if(cljs.core.truth_(inst_44302)){
var statearr_44353_45538 = state_44318__$1;
(statearr_44353_45538[(1)] = (24));

} else {
var statearr_44354_45539 = state_44318__$1;
(statearr_44354_45539[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (19))){
var inst_44297 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
var statearr_44355_45540 = state_44318__$1;
(statearr_44355_45540[(2)] = inst_44297);

(statearr_44355_45540[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (11))){
var inst_44271 = (state_44318[(14)]);
var inst_44281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44271);
var state_44318__$1 = state_44318;
var statearr_44356_45541 = state_44318__$1;
(statearr_44356_45541[(2)] = inst_44281);

(statearr_44356_45541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (9))){
var inst_44271 = (state_44318[(14)]);
var inst_44288 = (state_44318[(19)]);
var inst_44262 = (state_44318[(15)]);
var inst_44288__$1 = (inst_44262.cljs$core$IFn$_invoke$arity$1 ? inst_44262.cljs$core$IFn$_invoke$arity$1(inst_44271) : inst_44262.call(null,inst_44271));
var state_44318__$1 = (function (){var statearr_44357 = state_44318;
(statearr_44357[(19)] = inst_44288__$1);

return statearr_44357;
})();
if(cljs.core.truth_(inst_44288__$1)){
var statearr_44360_45543 = state_44318__$1;
(statearr_44360_45543[(1)] = (14));

} else {
var statearr_44362_45544 = state_44318__$1;
(statearr_44362_45544[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (5))){
var inst_44272 = (state_44318[(13)]);
var state_44318__$1 = state_44318;
var statearr_44363_45545 = state_44318__$1;
(statearr_44363_45545[(2)] = inst_44272);

(statearr_44363_45545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (14))){
var inst_44288 = (state_44318[(19)]);
var state_44318__$1 = state_44318;
var statearr_44364_45546 = state_44318__$1;
(statearr_44364_45546[(2)] = inst_44288);

(statearr_44364_45546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (26))){
var inst_44307 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
var statearr_44365_45547 = state_44318__$1;
(statearr_44365_45547[(2)] = inst_44307);

(statearr_44365_45547[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (16))){
var inst_44299 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
if(cljs.core.truth_(inst_44299)){
var statearr_44366_45548 = state_44318__$1;
(statearr_44366_45548[(1)] = (20));

} else {
var statearr_44367_45549 = state_44318__$1;
(statearr_44367_45549[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (10))){
var inst_44313 = (state_44318[(2)]);
var state_44318__$1 = state_44318;
var statearr_44368_45550 = state_44318__$1;
(statearr_44368_45550[(2)] = inst_44313);

(statearr_44368_45550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (18))){
var inst_44291 = (state_44318[(16)]);
var state_44318__$1 = state_44318;
var statearr_44369_45551 = state_44318__$1;
(statearr_44369_45551[(2)] = inst_44291);

(statearr_44369_45551[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44319 === (8))){
var inst_44270 = (state_44318[(7)]);
var inst_44279 = (inst_44270 == null);
var state_44318__$1 = state_44318;
if(cljs.core.truth_(inst_44279)){
var statearr_44370_45552 = state_44318__$1;
(statearr_44370_45552[(1)] = (11));

} else {
var statearr_44371_45553 = state_44318__$1;
(statearr_44371_45553[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__42661__auto__ = null;
var cljs$core$async$mix_$_state_machine__42661__auto____0 = (function (){
var statearr_44374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44374[(0)] = cljs$core$async$mix_$_state_machine__42661__auto__);

(statearr_44374[(1)] = (1));

return statearr_44374;
});
var cljs$core$async$mix_$_state_machine__42661__auto____1 = (function (state_44318){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44318);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44375){var ex__42664__auto__ = e44375;
var statearr_44376_45554 = state_44318;
(statearr_44376_45554[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44318[(4)]))){
var statearr_44377_45555 = state_44318;
(statearr_44377_45555[(1)] = cljs.core.first((state_44318[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45556 = state_44318;
state_44318 = G__45556;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42661__auto__ = function(state_44318){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42661__auto____1.call(this,state_44318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42661__auto____0;
cljs$core$async$mix_$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42661__auto____1;
return cljs$core$async$mix_$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_44380 = f__42884__auto__();
(statearr_44380[(6)] = c__42883__auto___45522);

return statearr_44380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45558 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45558(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45560 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45560(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45561 = (function() {
var G__45562 = null;
var G__45562__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45562__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45562 = function(p,v){
switch(arguments.length){
case 1:
return G__45562__1.call(this,p);
case 2:
return G__45562__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45562.cljs$core$IFn$_invoke$arity$1 = G__45562__1;
G__45562.cljs$core$IFn$_invoke$arity$2 = G__45562__2;
return G__45562;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44393 = arguments.length;
switch (G__44393) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45561(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45561(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__44405 = arguments.length;
switch (G__44405) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44403_SHARP_){
if(cljs.core.truth_((p1__44403_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44403_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44403_SHARP_.call(null,topic)))){
return p1__44403_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44403_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44408 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44409){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44409 = meta44409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44410,meta44409__$1){
var self__ = this;
var _44410__$1 = this;
return (new cljs.core.async.t_cljs$core$async44408(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44409__$1));
}));

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44410){
var self__ = this;
var _44410__$1 = this;
return self__.meta44409;
}));

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44409","meta44409",-118480188,null)], null);
}));

(cljs.core.async.t_cljs$core$async44408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44408");

(cljs.core.async.t_cljs$core$async44408.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44408.
 */
cljs.core.async.__GT_t_cljs$core$async44408 = (function cljs$core$async$__GT_t_cljs$core$async44408(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44409){
return (new cljs.core.async.t_cljs$core$async44408(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44409));
});

}

return (new cljs.core.async.t_cljs$core$async44408(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42883__auto___45567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44485){
var state_val_44486 = (state_44485[(1)]);
if((state_val_44486 === (7))){
var inst_44481 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44487_45568 = state_44485__$1;
(statearr_44487_45568[(2)] = inst_44481);

(statearr_44487_45568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (20))){
var state_44485__$1 = state_44485;
var statearr_44488_45569 = state_44485__$1;
(statearr_44488_45569[(2)] = null);

(statearr_44488_45569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (1))){
var state_44485__$1 = state_44485;
var statearr_44489_45570 = state_44485__$1;
(statearr_44489_45570[(2)] = null);

(statearr_44489_45570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (24))){
var inst_44464 = (state_44485[(7)]);
var inst_44473 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44464);
var state_44485__$1 = state_44485;
var statearr_44490_45571 = state_44485__$1;
(statearr_44490_45571[(2)] = inst_44473);

(statearr_44490_45571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (4))){
var inst_44414 = (state_44485[(8)]);
var inst_44414__$1 = (state_44485[(2)]);
var inst_44415 = (inst_44414__$1 == null);
var state_44485__$1 = (function (){var statearr_44491 = state_44485;
(statearr_44491[(8)] = inst_44414__$1);

return statearr_44491;
})();
if(cljs.core.truth_(inst_44415)){
var statearr_44492_45572 = state_44485__$1;
(statearr_44492_45572[(1)] = (5));

} else {
var statearr_44493_45573 = state_44485__$1;
(statearr_44493_45573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (15))){
var inst_44458 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44494_45574 = state_44485__$1;
(statearr_44494_45574[(2)] = inst_44458);

(statearr_44494_45574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (21))){
var inst_44478 = (state_44485[(2)]);
var state_44485__$1 = (function (){var statearr_44495 = state_44485;
(statearr_44495[(9)] = inst_44478);

return statearr_44495;
})();
var statearr_44496_45575 = state_44485__$1;
(statearr_44496_45575[(2)] = null);

(statearr_44496_45575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (13))){
var inst_44440 = (state_44485[(10)]);
var inst_44442 = cljs.core.chunked_seq_QMARK_(inst_44440);
var state_44485__$1 = state_44485;
if(inst_44442){
var statearr_44497_45576 = state_44485__$1;
(statearr_44497_45576[(1)] = (16));

} else {
var statearr_44498_45577 = state_44485__$1;
(statearr_44498_45577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (22))){
var inst_44470 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44470)){
var statearr_44499_45578 = state_44485__$1;
(statearr_44499_45578[(1)] = (23));

} else {
var statearr_44500_45579 = state_44485__$1;
(statearr_44500_45579[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (6))){
var inst_44466 = (state_44485[(11)]);
var inst_44464 = (state_44485[(7)]);
var inst_44414 = (state_44485[(8)]);
var inst_44464__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44414) : topic_fn.call(null,inst_44414));
var inst_44465 = cljs.core.deref(mults);
var inst_44466__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44465,inst_44464__$1);
var state_44485__$1 = (function (){var statearr_44501 = state_44485;
(statearr_44501[(11)] = inst_44466__$1);

(statearr_44501[(7)] = inst_44464__$1);

return statearr_44501;
})();
if(cljs.core.truth_(inst_44466__$1)){
var statearr_44502_45580 = state_44485__$1;
(statearr_44502_45580[(1)] = (19));

} else {
var statearr_44503_45581 = state_44485__$1;
(statearr_44503_45581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (25))){
var inst_44475 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44504_45582 = state_44485__$1;
(statearr_44504_45582[(2)] = inst_44475);

(statearr_44504_45582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (17))){
var inst_44440 = (state_44485[(10)]);
var inst_44449 = cljs.core.first(inst_44440);
var inst_44450 = cljs.core.async.muxch_STAR_(inst_44449);
var inst_44451 = cljs.core.async.close_BANG_(inst_44450);
var inst_44452 = cljs.core.next(inst_44440);
var inst_44426 = inst_44452;
var inst_44427 = null;
var inst_44428 = (0);
var inst_44429 = (0);
var state_44485__$1 = (function (){var statearr_44505 = state_44485;
(statearr_44505[(12)] = inst_44426);

(statearr_44505[(13)] = inst_44429);

(statearr_44505[(14)] = inst_44428);

(statearr_44505[(15)] = inst_44451);

(statearr_44505[(16)] = inst_44427);

return statearr_44505;
})();
var statearr_44506_45584 = state_44485__$1;
(statearr_44506_45584[(2)] = null);

(statearr_44506_45584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (3))){
var inst_44483 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44485__$1,inst_44483);
} else {
if((state_val_44486 === (12))){
var inst_44460 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44507_45586 = state_44485__$1;
(statearr_44507_45586[(2)] = inst_44460);

(statearr_44507_45586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (2))){
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44485__$1,(4),ch);
} else {
if((state_val_44486 === (23))){
var state_44485__$1 = state_44485;
var statearr_44508_45587 = state_44485__$1;
(statearr_44508_45587[(2)] = null);

(statearr_44508_45587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (19))){
var inst_44466 = (state_44485[(11)]);
var inst_44414 = (state_44485[(8)]);
var inst_44468 = cljs.core.async.muxch_STAR_(inst_44466);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44485__$1,(22),inst_44468,inst_44414);
} else {
if((state_val_44486 === (11))){
var inst_44426 = (state_44485[(12)]);
var inst_44440 = (state_44485[(10)]);
var inst_44440__$1 = cljs.core.seq(inst_44426);
var state_44485__$1 = (function (){var statearr_44509 = state_44485;
(statearr_44509[(10)] = inst_44440__$1);

return statearr_44509;
})();
if(inst_44440__$1){
var statearr_44510_45588 = state_44485__$1;
(statearr_44510_45588[(1)] = (13));

} else {
var statearr_44511_45589 = state_44485__$1;
(statearr_44511_45589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (9))){
var inst_44462 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44512_45590 = state_44485__$1;
(statearr_44512_45590[(2)] = inst_44462);

(statearr_44512_45590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (5))){
var inst_44423 = cljs.core.deref(mults);
var inst_44424 = cljs.core.vals(inst_44423);
var inst_44425 = cljs.core.seq(inst_44424);
var inst_44426 = inst_44425;
var inst_44427 = null;
var inst_44428 = (0);
var inst_44429 = (0);
var state_44485__$1 = (function (){var statearr_44513 = state_44485;
(statearr_44513[(12)] = inst_44426);

(statearr_44513[(13)] = inst_44429);

(statearr_44513[(14)] = inst_44428);

(statearr_44513[(16)] = inst_44427);

return statearr_44513;
})();
var statearr_44514_45591 = state_44485__$1;
(statearr_44514_45591[(2)] = null);

(statearr_44514_45591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (14))){
var state_44485__$1 = state_44485;
var statearr_44518_45592 = state_44485__$1;
(statearr_44518_45592[(2)] = null);

(statearr_44518_45592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (16))){
var inst_44440 = (state_44485[(10)]);
var inst_44444 = cljs.core.chunk_first(inst_44440);
var inst_44445 = cljs.core.chunk_rest(inst_44440);
var inst_44446 = cljs.core.count(inst_44444);
var inst_44426 = inst_44445;
var inst_44427 = inst_44444;
var inst_44428 = inst_44446;
var inst_44429 = (0);
var state_44485__$1 = (function (){var statearr_44519 = state_44485;
(statearr_44519[(12)] = inst_44426);

(statearr_44519[(13)] = inst_44429);

(statearr_44519[(14)] = inst_44428);

(statearr_44519[(16)] = inst_44427);

return statearr_44519;
})();
var statearr_44520_45593 = state_44485__$1;
(statearr_44520_45593[(2)] = null);

(statearr_44520_45593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (10))){
var inst_44426 = (state_44485[(12)]);
var inst_44429 = (state_44485[(13)]);
var inst_44428 = (state_44485[(14)]);
var inst_44427 = (state_44485[(16)]);
var inst_44434 = cljs.core._nth(inst_44427,inst_44429);
var inst_44435 = cljs.core.async.muxch_STAR_(inst_44434);
var inst_44436 = cljs.core.async.close_BANG_(inst_44435);
var inst_44437 = (inst_44429 + (1));
var tmp44515 = inst_44426;
var tmp44516 = inst_44428;
var tmp44517 = inst_44427;
var inst_44426__$1 = tmp44515;
var inst_44427__$1 = tmp44517;
var inst_44428__$1 = tmp44516;
var inst_44429__$1 = inst_44437;
var state_44485__$1 = (function (){var statearr_44521 = state_44485;
(statearr_44521[(12)] = inst_44426__$1);

(statearr_44521[(13)] = inst_44429__$1);

(statearr_44521[(14)] = inst_44428__$1);

(statearr_44521[(17)] = inst_44436);

(statearr_44521[(16)] = inst_44427__$1);

return statearr_44521;
})();
var statearr_44522_45595 = state_44485__$1;
(statearr_44522_45595[(2)] = null);

(statearr_44522_45595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (18))){
var inst_44455 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44523_45596 = state_44485__$1;
(statearr_44523_45596[(2)] = inst_44455);

(statearr_44523_45596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (8))){
var inst_44429 = (state_44485[(13)]);
var inst_44428 = (state_44485[(14)]);
var inst_44431 = (inst_44429 < inst_44428);
var inst_44432 = inst_44431;
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44432)){
var statearr_44525_45597 = state_44485__$1;
(statearr_44525_45597[(1)] = (10));

} else {
var statearr_44526_45598 = state_44485__$1;
(statearr_44526_45598[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_44527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44527[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_44527[(1)] = (1));

return statearr_44527;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_44485){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44485);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44529){var ex__42664__auto__ = e44529;
var statearr_44531_45601 = state_44485;
(statearr_44531_45601[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44485[(4)]))){
var statearr_44532_45602 = state_44485;
(statearr_44532_45602[(1)] = cljs.core.first((state_44485[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45603 = state_44485;
state_44485 = G__45603;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_44485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_44485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_44535 = f__42884__auto__();
(statearr_44535[(6)] = c__42883__auto___45567);

return statearr_44535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44538 = arguments.length;
switch (G__44538) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44543 = arguments.length;
switch (G__44543) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__44548 = arguments.length;
switch (G__44548) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42883__auto___45609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44594){
var state_val_44597 = (state_44594[(1)]);
if((state_val_44597 === (7))){
var state_44594__$1 = state_44594;
var statearr_44601_45610 = state_44594__$1;
(statearr_44601_45610[(2)] = null);

(statearr_44601_45610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (1))){
var state_44594__$1 = state_44594;
var statearr_44603_45611 = state_44594__$1;
(statearr_44603_45611[(2)] = null);

(statearr_44603_45611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (4))){
var inst_44554 = (state_44594[(7)]);
var inst_44555 = (state_44594[(8)]);
var inst_44557 = (inst_44555 < inst_44554);
var state_44594__$1 = state_44594;
if(cljs.core.truth_(inst_44557)){
var statearr_44605_45612 = state_44594__$1;
(statearr_44605_45612[(1)] = (6));

} else {
var statearr_44606_45613 = state_44594__$1;
(statearr_44606_45613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (15))){
var inst_44580 = (state_44594[(9)]);
var inst_44585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44580);
var state_44594__$1 = state_44594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44594__$1,(17),out,inst_44585);
} else {
if((state_val_44597 === (13))){
var inst_44580 = (state_44594[(9)]);
var inst_44580__$1 = (state_44594[(2)]);
var inst_44581 = cljs.core.some(cljs.core.nil_QMARK_,inst_44580__$1);
var state_44594__$1 = (function (){var statearr_44607 = state_44594;
(statearr_44607[(9)] = inst_44580__$1);

return statearr_44607;
})();
if(cljs.core.truth_(inst_44581)){
var statearr_44608_45614 = state_44594__$1;
(statearr_44608_45614[(1)] = (14));

} else {
var statearr_44609_45615 = state_44594__$1;
(statearr_44609_45615[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (6))){
var state_44594__$1 = state_44594;
var statearr_44610_45616 = state_44594__$1;
(statearr_44610_45616[(2)] = null);

(statearr_44610_45616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (17))){
var inst_44587 = (state_44594[(2)]);
var state_44594__$1 = (function (){var statearr_44616 = state_44594;
(statearr_44616[(10)] = inst_44587);

return statearr_44616;
})();
var statearr_44617_45617 = state_44594__$1;
(statearr_44617_45617[(2)] = null);

(statearr_44617_45617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (3))){
var inst_44592 = (state_44594[(2)]);
var state_44594__$1 = state_44594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44594__$1,inst_44592);
} else {
if((state_val_44597 === (12))){
var _ = (function (){var statearr_44619 = state_44594;
(statearr_44619[(4)] = cljs.core.rest((state_44594[(4)])));

return statearr_44619;
})();
var state_44594__$1 = state_44594;
var ex44613 = (state_44594__$1[(2)]);
var statearr_44620_45618 = state_44594__$1;
(statearr_44620_45618[(5)] = ex44613);


if((ex44613 instanceof Object)){
var statearr_44621_45619 = state_44594__$1;
(statearr_44621_45619[(1)] = (11));

(statearr_44621_45619[(5)] = null);

} else {
throw ex44613;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (2))){
var inst_44553 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44554 = cnt;
var inst_44555 = (0);
var state_44594__$1 = (function (){var statearr_44624 = state_44594;
(statearr_44624[(7)] = inst_44554);

(statearr_44624[(8)] = inst_44555);

(statearr_44624[(11)] = inst_44553);

return statearr_44624;
})();
var statearr_44625_45622 = state_44594__$1;
(statearr_44625_45622[(2)] = null);

(statearr_44625_45622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (11))){
var inst_44559 = (state_44594[(2)]);
var inst_44560 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44594__$1 = (function (){var statearr_44626 = state_44594;
(statearr_44626[(12)] = inst_44559);

return statearr_44626;
})();
var statearr_44627_45623 = state_44594__$1;
(statearr_44627_45623[(2)] = inst_44560);

(statearr_44627_45623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (9))){
var inst_44555 = (state_44594[(8)]);
var _ = (function (){var statearr_44628 = state_44594;
(statearr_44628[(4)] = cljs.core.cons((12),(state_44594[(4)])));

return statearr_44628;
})();
var inst_44566 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44555) : chs__$1.call(null,inst_44555));
var inst_44567 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44555) : done.call(null,inst_44555));
var inst_44568 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44566,inst_44567);
var ___$1 = (function (){var statearr_44629 = state_44594;
(statearr_44629[(4)] = cljs.core.rest((state_44594[(4)])));

return statearr_44629;
})();
var state_44594__$1 = state_44594;
var statearr_44630_45627 = state_44594__$1;
(statearr_44630_45627[(2)] = inst_44568);

(statearr_44630_45627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (5))){
var inst_44578 = (state_44594[(2)]);
var state_44594__$1 = (function (){var statearr_44631 = state_44594;
(statearr_44631[(13)] = inst_44578);

return statearr_44631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44594__$1,(13),dchan);
} else {
if((state_val_44597 === (14))){
var inst_44583 = cljs.core.async.close_BANG_(out);
var state_44594__$1 = state_44594;
var statearr_44632_45628 = state_44594__$1;
(statearr_44632_45628[(2)] = inst_44583);

(statearr_44632_45628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (16))){
var inst_44590 = (state_44594[(2)]);
var state_44594__$1 = state_44594;
var statearr_44633_45629 = state_44594__$1;
(statearr_44633_45629[(2)] = inst_44590);

(statearr_44633_45629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (10))){
var inst_44555 = (state_44594[(8)]);
var inst_44571 = (state_44594[(2)]);
var inst_44572 = (inst_44555 + (1));
var inst_44555__$1 = inst_44572;
var state_44594__$1 = (function (){var statearr_44634 = state_44594;
(statearr_44634[(8)] = inst_44555__$1);

(statearr_44634[(14)] = inst_44571);

return statearr_44634;
})();
var statearr_44635_45630 = state_44594__$1;
(statearr_44635_45630[(2)] = null);

(statearr_44635_45630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44597 === (8))){
var inst_44576 = (state_44594[(2)]);
var state_44594__$1 = state_44594;
var statearr_44636_45631 = state_44594__$1;
(statearr_44636_45631[(2)] = inst_44576);

(statearr_44636_45631[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_44637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44637[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_44637[(1)] = (1));

return statearr_44637;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_44594){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44594);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44638){var ex__42664__auto__ = e44638;
var statearr_44639_45632 = state_44594;
(statearr_44639_45632[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44594[(4)]))){
var statearr_44640_45633 = state_44594;
(statearr_44640_45633[(1)] = cljs.core.first((state_44594[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45634 = state_44594;
state_44594 = G__45634;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_44594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_44594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_44641 = f__42884__auto__();
(statearr_44641[(6)] = c__42883__auto___45609);

return statearr_44641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44644 = arguments.length;
switch (G__44644) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42883__auto___45636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44677){
var state_val_44679 = (state_44677[(1)]);
if((state_val_44679 === (7))){
var inst_44657 = (state_44677[(7)]);
var inst_44656 = (state_44677[(8)]);
var inst_44656__$1 = (state_44677[(2)]);
var inst_44657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44656__$1,(0),null);
var inst_44658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44656__$1,(1),null);
var inst_44659 = (inst_44657__$1 == null);
var state_44677__$1 = (function (){var statearr_44681 = state_44677;
(statearr_44681[(9)] = inst_44658);

(statearr_44681[(7)] = inst_44657__$1);

(statearr_44681[(8)] = inst_44656__$1);

return statearr_44681;
})();
if(cljs.core.truth_(inst_44659)){
var statearr_44682_45637 = state_44677__$1;
(statearr_44682_45637[(1)] = (8));

} else {
var statearr_44683_45638 = state_44677__$1;
(statearr_44683_45638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (1))){
var inst_44645 = cljs.core.vec(chs);
var inst_44646 = inst_44645;
var state_44677__$1 = (function (){var statearr_44684 = state_44677;
(statearr_44684[(10)] = inst_44646);

return statearr_44684;
})();
var statearr_44685_45639 = state_44677__$1;
(statearr_44685_45639[(2)] = null);

(statearr_44685_45639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (4))){
var inst_44646 = (state_44677[(10)]);
var state_44677__$1 = state_44677;
return cljs.core.async.ioc_alts_BANG_(state_44677__$1,(7),inst_44646);
} else {
if((state_val_44679 === (6))){
var inst_44673 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44686_45641 = state_44677__$1;
(statearr_44686_45641[(2)] = inst_44673);

(statearr_44686_45641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (3))){
var inst_44675 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44677__$1,inst_44675);
} else {
if((state_val_44679 === (2))){
var inst_44646 = (state_44677[(10)]);
var inst_44648 = cljs.core.count(inst_44646);
var inst_44649 = (inst_44648 > (0));
var state_44677__$1 = state_44677;
if(cljs.core.truth_(inst_44649)){
var statearr_44688_45642 = state_44677__$1;
(statearr_44688_45642[(1)] = (4));

} else {
var statearr_44689_45643 = state_44677__$1;
(statearr_44689_45643[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (11))){
var inst_44646 = (state_44677[(10)]);
var inst_44666 = (state_44677[(2)]);
var tmp44687 = inst_44646;
var inst_44646__$1 = tmp44687;
var state_44677__$1 = (function (){var statearr_44690 = state_44677;
(statearr_44690[(10)] = inst_44646__$1);

(statearr_44690[(11)] = inst_44666);

return statearr_44690;
})();
var statearr_44691_45644 = state_44677__$1;
(statearr_44691_45644[(2)] = null);

(statearr_44691_45644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (9))){
var inst_44657 = (state_44677[(7)]);
var state_44677__$1 = state_44677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44677__$1,(11),out,inst_44657);
} else {
if((state_val_44679 === (5))){
var inst_44671 = cljs.core.async.close_BANG_(out);
var state_44677__$1 = state_44677;
var statearr_44692_45645 = state_44677__$1;
(statearr_44692_45645[(2)] = inst_44671);

(statearr_44692_45645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (10))){
var inst_44669 = (state_44677[(2)]);
var state_44677__$1 = state_44677;
var statearr_44693_45646 = state_44677__$1;
(statearr_44693_45646[(2)] = inst_44669);

(statearr_44693_45646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (8))){
var inst_44658 = (state_44677[(9)]);
var inst_44646 = (state_44677[(10)]);
var inst_44657 = (state_44677[(7)]);
var inst_44656 = (state_44677[(8)]);
var inst_44661 = (function (){var cs = inst_44646;
var vec__44652 = inst_44656;
var v = inst_44657;
var c = inst_44658;
return (function (p1__44642_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44642_SHARP_);
});
})();
var inst_44662 = cljs.core.filterv(inst_44661,inst_44646);
var inst_44646__$1 = inst_44662;
var state_44677__$1 = (function (){var statearr_44694 = state_44677;
(statearr_44694[(10)] = inst_44646__$1);

return statearr_44694;
})();
var statearr_44695_45647 = state_44677__$1;
(statearr_44695_45647[(2)] = null);

(statearr_44695_45647[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_44696 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44696[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_44696[(1)] = (1));

return statearr_44696;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_44677){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44677);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44697){var ex__42664__auto__ = e44697;
var statearr_44698_45648 = state_44677;
(statearr_44698_45648[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44677[(4)]))){
var statearr_44699_45649 = state_44677;
(statearr_44699_45649[(1)] = cljs.core.first((state_44677[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45650 = state_44677;
state_44677 = G__45650;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_44677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_44677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_44700 = f__42884__auto__();
(statearr_44700[(6)] = c__42883__auto___45636);

return statearr_44700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44702 = arguments.length;
switch (G__44702) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42883__auto___45652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44726){
var state_val_44727 = (state_44726[(1)]);
if((state_val_44727 === (7))){
var inst_44708 = (state_44726[(7)]);
var inst_44708__$1 = (state_44726[(2)]);
var inst_44709 = (inst_44708__$1 == null);
var inst_44710 = cljs.core.not(inst_44709);
var state_44726__$1 = (function (){var statearr_44728 = state_44726;
(statearr_44728[(7)] = inst_44708__$1);

return statearr_44728;
})();
if(inst_44710){
var statearr_44729_45653 = state_44726__$1;
(statearr_44729_45653[(1)] = (8));

} else {
var statearr_44730_45654 = state_44726__$1;
(statearr_44730_45654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (1))){
var inst_44703 = (0);
var state_44726__$1 = (function (){var statearr_44731 = state_44726;
(statearr_44731[(8)] = inst_44703);

return statearr_44731;
})();
var statearr_44732_45655 = state_44726__$1;
(statearr_44732_45655[(2)] = null);

(statearr_44732_45655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (4))){
var state_44726__$1 = state_44726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44726__$1,(7),ch);
} else {
if((state_val_44727 === (6))){
var inst_44721 = (state_44726[(2)]);
var state_44726__$1 = state_44726;
var statearr_44733_45656 = state_44726__$1;
(statearr_44733_45656[(2)] = inst_44721);

(statearr_44733_45656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (3))){
var inst_44723 = (state_44726[(2)]);
var inst_44724 = cljs.core.async.close_BANG_(out);
var state_44726__$1 = (function (){var statearr_44734 = state_44726;
(statearr_44734[(9)] = inst_44723);

return statearr_44734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44726__$1,inst_44724);
} else {
if((state_val_44727 === (2))){
var inst_44703 = (state_44726[(8)]);
var inst_44705 = (inst_44703 < n);
var state_44726__$1 = state_44726;
if(cljs.core.truth_(inst_44705)){
var statearr_44735_45658 = state_44726__$1;
(statearr_44735_45658[(1)] = (4));

} else {
var statearr_44736_45659 = state_44726__$1;
(statearr_44736_45659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (11))){
var inst_44703 = (state_44726[(8)]);
var inst_44713 = (state_44726[(2)]);
var inst_44714 = (inst_44703 + (1));
var inst_44703__$1 = inst_44714;
var state_44726__$1 = (function (){var statearr_44737 = state_44726;
(statearr_44737[(10)] = inst_44713);

(statearr_44737[(8)] = inst_44703__$1);

return statearr_44737;
})();
var statearr_44738_45660 = state_44726__$1;
(statearr_44738_45660[(2)] = null);

(statearr_44738_45660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (9))){
var state_44726__$1 = state_44726;
var statearr_44739_45661 = state_44726__$1;
(statearr_44739_45661[(2)] = null);

(statearr_44739_45661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (5))){
var state_44726__$1 = state_44726;
var statearr_44740_45662 = state_44726__$1;
(statearr_44740_45662[(2)] = null);

(statearr_44740_45662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (10))){
var inst_44718 = (state_44726[(2)]);
var state_44726__$1 = state_44726;
var statearr_44741_45663 = state_44726__$1;
(statearr_44741_45663[(2)] = inst_44718);

(statearr_44741_45663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (8))){
var inst_44708 = (state_44726[(7)]);
var state_44726__$1 = state_44726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44726__$1,(11),out,inst_44708);
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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_44742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44742[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_44742[(1)] = (1));

return statearr_44742;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_44726){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44726);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44743){var ex__42664__auto__ = e44743;
var statearr_44744_45664 = state_44726;
(statearr_44744_45664[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44726[(4)]))){
var statearr_44745_45665 = state_44726;
(statearr_44745_45665[(1)] = cljs.core.first((state_44726[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45666 = state_44726;
state_44726 = G__45666;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_44726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_44726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_44746 = f__42884__auto__();
(statearr_44746[(6)] = c__42883__auto___45652);

return statearr_44746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44748 = (function (f,ch,meta44749){
this.f = f;
this.ch = ch;
this.meta44749 = meta44749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44750,meta44749__$1){
var self__ = this;
var _44750__$1 = this;
return (new cljs.core.async.t_cljs$core$async44748(self__.f,self__.ch,meta44749__$1));
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44750){
var self__ = this;
var _44750__$1 = this;
return self__.meta44749;
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44751 = (function (f,ch,meta44749,_,fn1,meta44752){
this.f = f;
this.ch = ch;
this.meta44749 = meta44749;
this._ = _;
this.fn1 = fn1;
this.meta44752 = meta44752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44753,meta44752__$1){
var self__ = this;
var _44753__$1 = this;
return (new cljs.core.async.t_cljs$core$async44751(self__.f,self__.ch,self__.meta44749,self__._,self__.fn1,meta44752__$1));
}));

(cljs.core.async.t_cljs$core$async44751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44753){
var self__ = this;
var _44753__$1 = this;
return self__.meta44752;
}));

(cljs.core.async.t_cljs$core$async44751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44747_SHARP_){
var G__44756 = (((p1__44747_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44747_SHARP_) : self__.f.call(null,p1__44747_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44756) : f1.call(null,G__44756));
});
}));

(cljs.core.async.t_cljs$core$async44751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44749","meta44749",-1784819172,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44748","cljs.core.async/t_cljs$core$async44748",1824338073,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44752","meta44752",196107534,null)], null);
}));

(cljs.core.async.t_cljs$core$async44751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44751");

(cljs.core.async.t_cljs$core$async44751.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44751.
 */
cljs.core.async.__GT_t_cljs$core$async44751 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44751(f__$1,ch__$1,meta44749__$1,___$2,fn1__$1,meta44752){
return (new cljs.core.async.t_cljs$core$async44751(f__$1,ch__$1,meta44749__$1,___$2,fn1__$1,meta44752));
});

}

return (new cljs.core.async.t_cljs$core$async44751(self__.f,self__.ch,self__.meta44749,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44761 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44761) : self__.f.call(null,G__44761));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44749","meta44749",-1784819172,null)], null);
}));

(cljs.core.async.t_cljs$core$async44748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44748");

(cljs.core.async.t_cljs$core$async44748.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44748.
 */
cljs.core.async.__GT_t_cljs$core$async44748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44748(f__$1,ch__$1,meta44749){
return (new cljs.core.async.t_cljs$core$async44748(f__$1,ch__$1,meta44749));
});

}

return (new cljs.core.async.t_cljs$core$async44748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44767 = (function (f,ch,meta44768){
this.f = f;
this.ch = ch;
this.meta44768 = meta44768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44769,meta44768__$1){
var self__ = this;
var _44769__$1 = this;
return (new cljs.core.async.t_cljs$core$async44767(self__.f,self__.ch,meta44768__$1));
}));

(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44769){
var self__ = this;
var _44769__$1 = this;
return self__.meta44768;
}));

(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44768","meta44768",1816347239,null)], null);
}));

(cljs.core.async.t_cljs$core$async44767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44767");

(cljs.core.async.t_cljs$core$async44767.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44767.
 */
cljs.core.async.__GT_t_cljs$core$async44767 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44767(f__$1,ch__$1,meta44768){
return (new cljs.core.async.t_cljs$core$async44767(f__$1,ch__$1,meta44768));
});

}

return (new cljs.core.async.t_cljs$core$async44767(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44776 = (function (p,ch,meta44777){
this.p = p;
this.ch = ch;
this.meta44777 = meta44777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44778,meta44777__$1){
var self__ = this;
var _44778__$1 = this;
return (new cljs.core.async.t_cljs$core$async44776(self__.p,self__.ch,meta44777__$1));
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44778){
var self__ = this;
var _44778__$1 = this;
return self__.meta44777;
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44777","meta44777",476218445,null)], null);
}));

(cljs.core.async.t_cljs$core$async44776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44776");

(cljs.core.async.t_cljs$core$async44776.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44776.
 */
cljs.core.async.__GT_t_cljs$core$async44776 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44776(p__$1,ch__$1,meta44777){
return (new cljs.core.async.t_cljs$core$async44776(p__$1,ch__$1,meta44777));
});

}

return (new cljs.core.async.t_cljs$core$async44776(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44790 = arguments.length;
switch (G__44790) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42883__auto___45680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44816){
var state_val_44817 = (state_44816[(1)]);
if((state_val_44817 === (7))){
var inst_44812 = (state_44816[(2)]);
var state_44816__$1 = state_44816;
var statearr_44819_45681 = state_44816__$1;
(statearr_44819_45681[(2)] = inst_44812);

(statearr_44819_45681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (1))){
var state_44816__$1 = state_44816;
var statearr_44820_45682 = state_44816__$1;
(statearr_44820_45682[(2)] = null);

(statearr_44820_45682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (4))){
var inst_44798 = (state_44816[(7)]);
var inst_44798__$1 = (state_44816[(2)]);
var inst_44799 = (inst_44798__$1 == null);
var state_44816__$1 = (function (){var statearr_44825 = state_44816;
(statearr_44825[(7)] = inst_44798__$1);

return statearr_44825;
})();
if(cljs.core.truth_(inst_44799)){
var statearr_44826_45683 = state_44816__$1;
(statearr_44826_45683[(1)] = (5));

} else {
var statearr_44827_45684 = state_44816__$1;
(statearr_44827_45684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (6))){
var inst_44798 = (state_44816[(7)]);
var inst_44803 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44798) : p.call(null,inst_44798));
var state_44816__$1 = state_44816;
if(cljs.core.truth_(inst_44803)){
var statearr_44828_45685 = state_44816__$1;
(statearr_44828_45685[(1)] = (8));

} else {
var statearr_44830_45686 = state_44816__$1;
(statearr_44830_45686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (3))){
var inst_44814 = (state_44816[(2)]);
var state_44816__$1 = state_44816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44816__$1,inst_44814);
} else {
if((state_val_44817 === (2))){
var state_44816__$1 = state_44816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44816__$1,(4),ch);
} else {
if((state_val_44817 === (11))){
var inst_44806 = (state_44816[(2)]);
var state_44816__$1 = state_44816;
var statearr_44833_45687 = state_44816__$1;
(statearr_44833_45687[(2)] = inst_44806);

(statearr_44833_45687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (9))){
var state_44816__$1 = state_44816;
var statearr_44836_45688 = state_44816__$1;
(statearr_44836_45688[(2)] = null);

(statearr_44836_45688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (5))){
var inst_44801 = cljs.core.async.close_BANG_(out);
var state_44816__$1 = state_44816;
var statearr_44837_45689 = state_44816__$1;
(statearr_44837_45689[(2)] = inst_44801);

(statearr_44837_45689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (10))){
var inst_44809 = (state_44816[(2)]);
var state_44816__$1 = (function (){var statearr_44838 = state_44816;
(statearr_44838[(8)] = inst_44809);

return statearr_44838;
})();
var statearr_44840_45690 = state_44816__$1;
(statearr_44840_45690[(2)] = null);

(statearr_44840_45690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44817 === (8))){
var inst_44798 = (state_44816[(7)]);
var state_44816__$1 = state_44816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44816__$1,(11),out,inst_44798);
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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_44843 = [null,null,null,null,null,null,null,null,null];
(statearr_44843[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_44843[(1)] = (1));

return statearr_44843;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_44816){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44816);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44846){var ex__42664__auto__ = e44846;
var statearr_44847_45691 = state_44816;
(statearr_44847_45691[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44816[(4)]))){
var statearr_44848_45692 = state_44816;
(statearr_44848_45692[(1)] = cljs.core.first((state_44816[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45693 = state_44816;
state_44816 = G__45693;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_44816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_44816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_44850 = f__42884__auto__();
(statearr_44850[(6)] = c__42883__auto___45680);

return statearr_44850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44857 = arguments.length;
switch (G__44857) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42883__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_44939){
var state_val_44940 = (state_44939[(1)]);
if((state_val_44940 === (7))){
var inst_44935 = (state_44939[(2)]);
var state_44939__$1 = state_44939;
var statearr_44941_45695 = state_44939__$1;
(statearr_44941_45695[(2)] = inst_44935);

(statearr_44941_45695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (20))){
var inst_44905 = (state_44939[(7)]);
var inst_44916 = (state_44939[(2)]);
var inst_44917 = cljs.core.next(inst_44905);
var inst_44877 = inst_44917;
var inst_44878 = null;
var inst_44879 = (0);
var inst_44880 = (0);
var state_44939__$1 = (function (){var statearr_44942 = state_44939;
(statearr_44942[(8)] = inst_44879);

(statearr_44942[(9)] = inst_44916);

(statearr_44942[(10)] = inst_44878);

(statearr_44942[(11)] = inst_44877);

(statearr_44942[(12)] = inst_44880);

return statearr_44942;
})();
var statearr_44943_45696 = state_44939__$1;
(statearr_44943_45696[(2)] = null);

(statearr_44943_45696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (1))){
var state_44939__$1 = state_44939;
var statearr_44944_45697 = state_44939__$1;
(statearr_44944_45697[(2)] = null);

(statearr_44944_45697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (4))){
var inst_44865 = (state_44939[(13)]);
var inst_44865__$1 = (state_44939[(2)]);
var inst_44866 = (inst_44865__$1 == null);
var state_44939__$1 = (function (){var statearr_44945 = state_44939;
(statearr_44945[(13)] = inst_44865__$1);

return statearr_44945;
})();
if(cljs.core.truth_(inst_44866)){
var statearr_44946_45698 = state_44939__$1;
(statearr_44946_45698[(1)] = (5));

} else {
var statearr_44947_45699 = state_44939__$1;
(statearr_44947_45699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (15))){
var state_44939__$1 = state_44939;
var statearr_44951_45700 = state_44939__$1;
(statearr_44951_45700[(2)] = null);

(statearr_44951_45700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (21))){
var state_44939__$1 = state_44939;
var statearr_44952_45701 = state_44939__$1;
(statearr_44952_45701[(2)] = null);

(statearr_44952_45701[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (13))){
var inst_44879 = (state_44939[(8)]);
var inst_44878 = (state_44939[(10)]);
var inst_44877 = (state_44939[(11)]);
var inst_44880 = (state_44939[(12)]);
var inst_44889 = (state_44939[(2)]);
var inst_44902 = (inst_44880 + (1));
var tmp44948 = inst_44879;
var tmp44949 = inst_44878;
var tmp44950 = inst_44877;
var inst_44877__$1 = tmp44950;
var inst_44878__$1 = tmp44949;
var inst_44879__$1 = tmp44948;
var inst_44880__$1 = inst_44902;
var state_44939__$1 = (function (){var statearr_44953 = state_44939;
(statearr_44953[(8)] = inst_44879__$1);

(statearr_44953[(10)] = inst_44878__$1);

(statearr_44953[(11)] = inst_44877__$1);

(statearr_44953[(14)] = inst_44889);

(statearr_44953[(12)] = inst_44880__$1);

return statearr_44953;
})();
var statearr_44956_45702 = state_44939__$1;
(statearr_44956_45702[(2)] = null);

(statearr_44956_45702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (22))){
var state_44939__$1 = state_44939;
var statearr_44958_45703 = state_44939__$1;
(statearr_44958_45703[(2)] = null);

(statearr_44958_45703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (6))){
var inst_44865 = (state_44939[(13)]);
var inst_44875 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44865) : f.call(null,inst_44865));
var inst_44876 = cljs.core.seq(inst_44875);
var inst_44877 = inst_44876;
var inst_44878 = null;
var inst_44879 = (0);
var inst_44880 = (0);
var state_44939__$1 = (function (){var statearr_44960 = state_44939;
(statearr_44960[(8)] = inst_44879);

(statearr_44960[(10)] = inst_44878);

(statearr_44960[(11)] = inst_44877);

(statearr_44960[(12)] = inst_44880);

return statearr_44960;
})();
var statearr_44961_45704 = state_44939__$1;
(statearr_44961_45704[(2)] = null);

(statearr_44961_45704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (17))){
var inst_44905 = (state_44939[(7)]);
var inst_44909 = cljs.core.chunk_first(inst_44905);
var inst_44910 = cljs.core.chunk_rest(inst_44905);
var inst_44911 = cljs.core.count(inst_44909);
var inst_44877 = inst_44910;
var inst_44878 = inst_44909;
var inst_44879 = inst_44911;
var inst_44880 = (0);
var state_44939__$1 = (function (){var statearr_44962 = state_44939;
(statearr_44962[(8)] = inst_44879);

(statearr_44962[(10)] = inst_44878);

(statearr_44962[(11)] = inst_44877);

(statearr_44962[(12)] = inst_44880);

return statearr_44962;
})();
var statearr_44963_45705 = state_44939__$1;
(statearr_44963_45705[(2)] = null);

(statearr_44963_45705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (3))){
var inst_44937 = (state_44939[(2)]);
var state_44939__$1 = state_44939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44939__$1,inst_44937);
} else {
if((state_val_44940 === (12))){
var inst_44925 = (state_44939[(2)]);
var state_44939__$1 = state_44939;
var statearr_44964_45706 = state_44939__$1;
(statearr_44964_45706[(2)] = inst_44925);

(statearr_44964_45706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (2))){
var state_44939__$1 = state_44939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44939__$1,(4),in$);
} else {
if((state_val_44940 === (23))){
var inst_44933 = (state_44939[(2)]);
var state_44939__$1 = state_44939;
var statearr_44969_45707 = state_44939__$1;
(statearr_44969_45707[(2)] = inst_44933);

(statearr_44969_45707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (19))){
var inst_44920 = (state_44939[(2)]);
var state_44939__$1 = state_44939;
var statearr_44970_45708 = state_44939__$1;
(statearr_44970_45708[(2)] = inst_44920);

(statearr_44970_45708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (11))){
var inst_44905 = (state_44939[(7)]);
var inst_44877 = (state_44939[(11)]);
var inst_44905__$1 = cljs.core.seq(inst_44877);
var state_44939__$1 = (function (){var statearr_44975 = state_44939;
(statearr_44975[(7)] = inst_44905__$1);

return statearr_44975;
})();
if(inst_44905__$1){
var statearr_44976_45710 = state_44939__$1;
(statearr_44976_45710[(1)] = (14));

} else {
var statearr_44977_45711 = state_44939__$1;
(statearr_44977_45711[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (9))){
var inst_44927 = (state_44939[(2)]);
var inst_44928 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44939__$1 = (function (){var statearr_44978 = state_44939;
(statearr_44978[(15)] = inst_44927);

return statearr_44978;
})();
if(cljs.core.truth_(inst_44928)){
var statearr_44979_45712 = state_44939__$1;
(statearr_44979_45712[(1)] = (21));

} else {
var statearr_44980_45713 = state_44939__$1;
(statearr_44980_45713[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (5))){
var inst_44869 = cljs.core.async.close_BANG_(out);
var state_44939__$1 = state_44939;
var statearr_44981_45715 = state_44939__$1;
(statearr_44981_45715[(2)] = inst_44869);

(statearr_44981_45715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (14))){
var inst_44905 = (state_44939[(7)]);
var inst_44907 = cljs.core.chunked_seq_QMARK_(inst_44905);
var state_44939__$1 = state_44939;
if(inst_44907){
var statearr_44982_45716 = state_44939__$1;
(statearr_44982_45716[(1)] = (17));

} else {
var statearr_44983_45717 = state_44939__$1;
(statearr_44983_45717[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (16))){
var inst_44923 = (state_44939[(2)]);
var state_44939__$1 = state_44939;
var statearr_44984_45718 = state_44939__$1;
(statearr_44984_45718[(2)] = inst_44923);

(statearr_44984_45718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44940 === (10))){
var inst_44878 = (state_44939[(10)]);
var inst_44880 = (state_44939[(12)]);
var inst_44885 = cljs.core._nth(inst_44878,inst_44880);
var state_44939__$1 = state_44939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44939__$1,(13),out,inst_44885);
} else {
if((state_val_44940 === (18))){
var inst_44905 = (state_44939[(7)]);
var inst_44914 = cljs.core.first(inst_44905);
var state_44939__$1 = state_44939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44939__$1,(20),out,inst_44914);
} else {
if((state_val_44940 === (8))){
var inst_44879 = (state_44939[(8)]);
var inst_44880 = (state_44939[(12)]);
var inst_44882 = (inst_44880 < inst_44879);
var inst_44883 = inst_44882;
var state_44939__$1 = state_44939;
if(cljs.core.truth_(inst_44883)){
var statearr_44989_45719 = state_44939__$1;
(statearr_44989_45719[(1)] = (10));

} else {
var statearr_44990_45720 = state_44939__$1;
(statearr_44990_45720[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42661__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42661__auto____0 = (function (){
var statearr_44994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44994[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42661__auto__);

(statearr_44994[(1)] = (1));

return statearr_44994;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42661__auto____1 = (function (state_44939){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_44939);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e44995){var ex__42664__auto__ = e44995;
var statearr_44999_45721 = state_44939;
(statearr_44999_45721[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_44939[(4)]))){
var statearr_45000_45722 = state_44939;
(statearr_45000_45722[(1)] = cljs.core.first((state_44939[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45723 = state_44939;
state_44939 = G__45723;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42661__auto__ = function(state_44939){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42661__auto____1.call(this,state_44939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42661__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42661__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_45001 = f__42884__auto__();
(statearr_45001[(6)] = c__42883__auto__);

return statearr_45001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));

return c__42883__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45009 = arguments.length;
switch (G__45009) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45011 = arguments.length;
switch (G__45011) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45014 = arguments.length;
switch (G__45014) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42883__auto___45727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_45042){
var state_val_45043 = (state_45042[(1)]);
if((state_val_45043 === (7))){
var inst_45037 = (state_45042[(2)]);
var state_45042__$1 = state_45042;
var statearr_45044_45729 = state_45042__$1;
(statearr_45044_45729[(2)] = inst_45037);

(statearr_45044_45729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45043 === (1))){
var inst_45019 = null;
var state_45042__$1 = (function (){var statearr_45045 = state_45042;
(statearr_45045[(7)] = inst_45019);

return statearr_45045;
})();
var statearr_45046_45730 = state_45042__$1;
(statearr_45046_45730[(2)] = null);

(statearr_45046_45730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45043 === (4))){
var inst_45022 = (state_45042[(8)]);
var inst_45022__$1 = (state_45042[(2)]);
var inst_45023 = (inst_45022__$1 == null);
var inst_45024 = cljs.core.not(inst_45023);
var state_45042__$1 = (function (){var statearr_45047 = state_45042;
(statearr_45047[(8)] = inst_45022__$1);

return statearr_45047;
})();
if(inst_45024){
var statearr_45048_45731 = state_45042__$1;
(statearr_45048_45731[(1)] = (5));

} else {
var statearr_45049_45732 = state_45042__$1;
(statearr_45049_45732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45043 === (6))){
var state_45042__$1 = state_45042;
var statearr_45050_45733 = state_45042__$1;
(statearr_45050_45733[(2)] = null);

(statearr_45050_45733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45043 === (3))){
var inst_45039 = (state_45042[(2)]);
var inst_45040 = cljs.core.async.close_BANG_(out);
var state_45042__$1 = (function (){var statearr_45051 = state_45042;
(statearr_45051[(9)] = inst_45039);

return statearr_45051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45042__$1,inst_45040);
} else {
if((state_val_45043 === (2))){
var state_45042__$1 = state_45042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45042__$1,(4),ch);
} else {
if((state_val_45043 === (11))){
var inst_45022 = (state_45042[(8)]);
var inst_45031 = (state_45042[(2)]);
var inst_45019 = inst_45022;
var state_45042__$1 = (function (){var statearr_45052 = state_45042;
(statearr_45052[(10)] = inst_45031);

(statearr_45052[(7)] = inst_45019);

return statearr_45052;
})();
var statearr_45053_45734 = state_45042__$1;
(statearr_45053_45734[(2)] = null);

(statearr_45053_45734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45043 === (9))){
var inst_45022 = (state_45042[(8)]);
var state_45042__$1 = state_45042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45042__$1,(11),out,inst_45022);
} else {
if((state_val_45043 === (5))){
var inst_45022 = (state_45042[(8)]);
var inst_45019 = (state_45042[(7)]);
var inst_45026 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45022,inst_45019);
var state_45042__$1 = state_45042;
if(inst_45026){
var statearr_45058_45735 = state_45042__$1;
(statearr_45058_45735[(1)] = (8));

} else {
var statearr_45059_45737 = state_45042__$1;
(statearr_45059_45737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45043 === (10))){
var inst_45034 = (state_45042[(2)]);
var state_45042__$1 = state_45042;
var statearr_45060_45738 = state_45042__$1;
(statearr_45060_45738[(2)] = inst_45034);

(statearr_45060_45738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45043 === (8))){
var inst_45019 = (state_45042[(7)]);
var tmp45054 = inst_45019;
var inst_45019__$1 = tmp45054;
var state_45042__$1 = (function (){var statearr_45061 = state_45042;
(statearr_45061[(7)] = inst_45019__$1);

return statearr_45061;
})();
var statearr_45062_45739 = state_45042__$1;
(statearr_45062_45739[(2)] = null);

(statearr_45062_45739[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_45063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45063[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_45063[(1)] = (1));

return statearr_45063;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_45042){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_45042);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e45064){var ex__42664__auto__ = e45064;
var statearr_45065_45740 = state_45042;
(statearr_45065_45740[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_45042[(4)]))){
var statearr_45066_45741 = state_45042;
(statearr_45066_45741[(1)] = cljs.core.first((state_45042[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45742 = state_45042;
state_45042 = G__45742;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_45042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_45042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_45067 = f__42884__auto__();
(statearr_45067[(6)] = c__42883__auto___45727);

return statearr_45067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45069 = arguments.length;
switch (G__45069) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42883__auto___45744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_45110){
var state_val_45111 = (state_45110[(1)]);
if((state_val_45111 === (7))){
var inst_45106 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45114_45745 = state_45110__$1;
(statearr_45114_45745[(2)] = inst_45106);

(statearr_45114_45745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (1))){
var inst_45071 = (new Array(n));
var inst_45072 = inst_45071;
var inst_45073 = (0);
var state_45110__$1 = (function (){var statearr_45115 = state_45110;
(statearr_45115[(7)] = inst_45073);

(statearr_45115[(8)] = inst_45072);

return statearr_45115;
})();
var statearr_45116_45746 = state_45110__$1;
(statearr_45116_45746[(2)] = null);

(statearr_45116_45746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (4))){
var inst_45078 = (state_45110[(9)]);
var inst_45078__$1 = (state_45110[(2)]);
var inst_45079 = (inst_45078__$1 == null);
var inst_45080 = cljs.core.not(inst_45079);
var state_45110__$1 = (function (){var statearr_45118 = state_45110;
(statearr_45118[(9)] = inst_45078__$1);

return statearr_45118;
})();
if(inst_45080){
var statearr_45120_45747 = state_45110__$1;
(statearr_45120_45747[(1)] = (5));

} else {
var statearr_45121_45748 = state_45110__$1;
(statearr_45121_45748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (15))){
var inst_45100 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45122_45749 = state_45110__$1;
(statearr_45122_45749[(2)] = inst_45100);

(statearr_45122_45749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (13))){
var state_45110__$1 = state_45110;
var statearr_45123_45750 = state_45110__$1;
(statearr_45123_45750[(2)] = null);

(statearr_45123_45750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (6))){
var inst_45073 = (state_45110[(7)]);
var inst_45096 = (inst_45073 > (0));
var state_45110__$1 = state_45110;
if(cljs.core.truth_(inst_45096)){
var statearr_45126_45751 = state_45110__$1;
(statearr_45126_45751[(1)] = (12));

} else {
var statearr_45127_45752 = state_45110__$1;
(statearr_45127_45752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (3))){
var inst_45108 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45110__$1,inst_45108);
} else {
if((state_val_45111 === (12))){
var inst_45072 = (state_45110[(8)]);
var inst_45098 = cljs.core.vec(inst_45072);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45110__$1,(15),out,inst_45098);
} else {
if((state_val_45111 === (2))){
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45110__$1,(4),ch);
} else {
if((state_val_45111 === (11))){
var inst_45090 = (state_45110[(2)]);
var inst_45091 = (new Array(n));
var inst_45072 = inst_45091;
var inst_45073 = (0);
var state_45110__$1 = (function (){var statearr_45130 = state_45110;
(statearr_45130[(7)] = inst_45073);

(statearr_45130[(8)] = inst_45072);

(statearr_45130[(10)] = inst_45090);

return statearr_45130;
})();
var statearr_45131_45753 = state_45110__$1;
(statearr_45131_45753[(2)] = null);

(statearr_45131_45753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (9))){
var inst_45072 = (state_45110[(8)]);
var inst_45088 = cljs.core.vec(inst_45072);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45110__$1,(11),out,inst_45088);
} else {
if((state_val_45111 === (5))){
var inst_45073 = (state_45110[(7)]);
var inst_45083 = (state_45110[(11)]);
var inst_45072 = (state_45110[(8)]);
var inst_45078 = (state_45110[(9)]);
var inst_45082 = (inst_45072[inst_45073] = inst_45078);
var inst_45083__$1 = (inst_45073 + (1));
var inst_45084 = (inst_45083__$1 < n);
var state_45110__$1 = (function (){var statearr_45136 = state_45110;
(statearr_45136[(11)] = inst_45083__$1);

(statearr_45136[(12)] = inst_45082);

return statearr_45136;
})();
if(cljs.core.truth_(inst_45084)){
var statearr_45137_45754 = state_45110__$1;
(statearr_45137_45754[(1)] = (8));

} else {
var statearr_45138_45755 = state_45110__$1;
(statearr_45138_45755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (14))){
var inst_45103 = (state_45110[(2)]);
var inst_45104 = cljs.core.async.close_BANG_(out);
var state_45110__$1 = (function (){var statearr_45142 = state_45110;
(statearr_45142[(13)] = inst_45103);

return statearr_45142;
})();
var statearr_45143_45756 = state_45110__$1;
(statearr_45143_45756[(2)] = inst_45104);

(statearr_45143_45756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (10))){
var inst_45094 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45145_45757 = state_45110__$1;
(statearr_45145_45757[(2)] = inst_45094);

(statearr_45145_45757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (8))){
var inst_45083 = (state_45110[(11)]);
var inst_45072 = (state_45110[(8)]);
var tmp45140 = inst_45072;
var inst_45072__$1 = tmp45140;
var inst_45073 = inst_45083;
var state_45110__$1 = (function (){var statearr_45146 = state_45110;
(statearr_45146[(7)] = inst_45073);

(statearr_45146[(8)] = inst_45072__$1);

return statearr_45146;
})();
var statearr_45147_45758 = state_45110__$1;
(statearr_45147_45758[(2)] = null);

(statearr_45147_45758[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_45148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45148[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_45148[(1)] = (1));

return statearr_45148;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_45110){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_45110);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e45149){var ex__42664__auto__ = e45149;
var statearr_45150_45759 = state_45110;
(statearr_45150_45759[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_45110[(4)]))){
var statearr_45151_45760 = state_45110;
(statearr_45151_45760[(1)] = cljs.core.first((state_45110[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45761 = state_45110;
state_45110 = G__45761;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_45110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_45110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_45152 = f__42884__auto__();
(statearr_45152[(6)] = c__42883__auto___45744);

return statearr_45152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45158 = arguments.length;
switch (G__45158) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42883__auto___45763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_45203){
var state_val_45204 = (state_45203[(1)]);
if((state_val_45204 === (7))){
var inst_45199 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45206_45764 = state_45203__$1;
(statearr_45206_45764[(2)] = inst_45199);

(statearr_45206_45764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (1))){
var inst_45159 = [];
var inst_45160 = inst_45159;
var inst_45161 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45203__$1 = (function (){var statearr_45207 = state_45203;
(statearr_45207[(7)] = inst_45161);

(statearr_45207[(8)] = inst_45160);

return statearr_45207;
})();
var statearr_45208_45765 = state_45203__$1;
(statearr_45208_45765[(2)] = null);

(statearr_45208_45765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (4))){
var inst_45164 = (state_45203[(9)]);
var inst_45164__$1 = (state_45203[(2)]);
var inst_45165 = (inst_45164__$1 == null);
var inst_45166 = cljs.core.not(inst_45165);
var state_45203__$1 = (function (){var statearr_45209 = state_45203;
(statearr_45209[(9)] = inst_45164__$1);

return statearr_45209;
})();
if(inst_45166){
var statearr_45210_45766 = state_45203__$1;
(statearr_45210_45766[(1)] = (5));

} else {
var statearr_45211_45767 = state_45203__$1;
(statearr_45211_45767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (15))){
var inst_45160 = (state_45203[(8)]);
var inst_45191 = cljs.core.vec(inst_45160);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45203__$1,(18),out,inst_45191);
} else {
if((state_val_45204 === (13))){
var inst_45186 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45212_45768 = state_45203__$1;
(statearr_45212_45768[(2)] = inst_45186);

(statearr_45212_45768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (6))){
var inst_45160 = (state_45203[(8)]);
var inst_45188 = inst_45160.length;
var inst_45189 = (inst_45188 > (0));
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45189)){
var statearr_45213_45769 = state_45203__$1;
(statearr_45213_45769[(1)] = (15));

} else {
var statearr_45214_45770 = state_45203__$1;
(statearr_45214_45770[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (17))){
var inst_45196 = (state_45203[(2)]);
var inst_45197 = cljs.core.async.close_BANG_(out);
var state_45203__$1 = (function (){var statearr_45215 = state_45203;
(statearr_45215[(10)] = inst_45196);

return statearr_45215;
})();
var statearr_45216_45771 = state_45203__$1;
(statearr_45216_45771[(2)] = inst_45197);

(statearr_45216_45771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (3))){
var inst_45201 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45203__$1,inst_45201);
} else {
if((state_val_45204 === (12))){
var inst_45160 = (state_45203[(8)]);
var inst_45179 = cljs.core.vec(inst_45160);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45203__$1,(14),out,inst_45179);
} else {
if((state_val_45204 === (2))){
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45203__$1,(4),ch);
} else {
if((state_val_45204 === (11))){
var inst_45164 = (state_45203[(9)]);
var inst_45168 = (state_45203[(11)]);
var inst_45160 = (state_45203[(8)]);
var inst_45176 = inst_45160.push(inst_45164);
var tmp45218 = inst_45160;
var inst_45160__$1 = tmp45218;
var inst_45161 = inst_45168;
var state_45203__$1 = (function (){var statearr_45220 = state_45203;
(statearr_45220[(7)] = inst_45161);

(statearr_45220[(8)] = inst_45160__$1);

(statearr_45220[(12)] = inst_45176);

return statearr_45220;
})();
var statearr_45221_45772 = state_45203__$1;
(statearr_45221_45772[(2)] = null);

(statearr_45221_45772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (9))){
var inst_45161 = (state_45203[(7)]);
var inst_45172 = cljs.core.keyword_identical_QMARK_(inst_45161,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45203__$1 = state_45203;
var statearr_45222_45773 = state_45203__$1;
(statearr_45222_45773[(2)] = inst_45172);

(statearr_45222_45773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (5))){
var inst_45161 = (state_45203[(7)]);
var inst_45164 = (state_45203[(9)]);
var inst_45169 = (state_45203[(13)]);
var inst_45168 = (state_45203[(11)]);
var inst_45168__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45164) : f.call(null,inst_45164));
var inst_45169__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45168__$1,inst_45161);
var state_45203__$1 = (function (){var statearr_45223 = state_45203;
(statearr_45223[(13)] = inst_45169__$1);

(statearr_45223[(11)] = inst_45168__$1);

return statearr_45223;
})();
if(inst_45169__$1){
var statearr_45225_45774 = state_45203__$1;
(statearr_45225_45774[(1)] = (8));

} else {
var statearr_45226_45775 = state_45203__$1;
(statearr_45226_45775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (14))){
var inst_45164 = (state_45203[(9)]);
var inst_45168 = (state_45203[(11)]);
var inst_45181 = (state_45203[(2)]);
var inst_45182 = [];
var inst_45183 = inst_45182.push(inst_45164);
var inst_45160 = inst_45182;
var inst_45161 = inst_45168;
var state_45203__$1 = (function (){var statearr_45227 = state_45203;
(statearr_45227[(7)] = inst_45161);

(statearr_45227[(14)] = inst_45181);

(statearr_45227[(15)] = inst_45183);

(statearr_45227[(8)] = inst_45160);

return statearr_45227;
})();
var statearr_45228_45776 = state_45203__$1;
(statearr_45228_45776[(2)] = null);

(statearr_45228_45776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (16))){
var state_45203__$1 = state_45203;
var statearr_45229_45777 = state_45203__$1;
(statearr_45229_45777[(2)] = null);

(statearr_45229_45777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (10))){
var inst_45174 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45174)){
var statearr_45232_45778 = state_45203__$1;
(statearr_45232_45778[(1)] = (11));

} else {
var statearr_45233_45779 = state_45203__$1;
(statearr_45233_45779[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (18))){
var inst_45193 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45235_45780 = state_45203__$1;
(statearr_45235_45780[(2)] = inst_45193);

(statearr_45235_45780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (8))){
var inst_45169 = (state_45203[(13)]);
var state_45203__$1 = state_45203;
var statearr_45236_45781 = state_45203__$1;
(statearr_45236_45781[(2)] = inst_45169);

(statearr_45236_45781[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__42661__auto__ = null;
var cljs$core$async$state_machine__42661__auto____0 = (function (){
var statearr_45237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45237[(0)] = cljs$core$async$state_machine__42661__auto__);

(statearr_45237[(1)] = (1));

return statearr_45237;
});
var cljs$core$async$state_machine__42661__auto____1 = (function (state_45203){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_45203);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e45241){var ex__42664__auto__ = e45241;
var statearr_45242_45782 = state_45203;
(statearr_45242_45782[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_45203[(4)]))){
var statearr_45243_45783 = state_45203;
(statearr_45243_45783[(1)] = cljs.core.first((state_45203[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45784 = state_45203;
state_45203 = G__45784;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
cljs$core$async$state_machine__42661__auto__ = function(state_45203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42661__auto____1.call(this,state_45203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42661__auto____0;
cljs$core$async$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42661__auto____1;
return cljs$core$async$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_45244 = f__42884__auto__();
(statearr_45244[(6)] = c__42883__auto___45763);

return statearr_45244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
