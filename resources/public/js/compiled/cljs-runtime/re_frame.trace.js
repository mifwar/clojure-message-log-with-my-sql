goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34817){
var map__34818 = p__34817;
var map__34818__$1 = cljs.core.__destructure_map(map__34818);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34818__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__34821_34850 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__34822_34851 = null;
var count__34823_34852 = (0);
var i__34824_34853 = (0);
while(true){
if((i__34824_34853 < count__34823_34852)){
var vec__34835_34854 = chunk__34822_34851.cljs$core$IIndexed$_nth$arity$2(null,i__34824_34853);
var k_34855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34835_34854,(0),null);
var cb_34856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34835_34854,(1),null);
try{var G__34839_34857 = cljs.core.deref(re_frame.trace.traces);
(cb_34856.cljs$core$IFn$_invoke$arity$1 ? cb_34856.cljs$core$IFn$_invoke$arity$1(G__34839_34857) : cb_34856.call(null,G__34839_34857));
}catch (e34838){var e_34858 = e34838;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34855,"while storing",cljs.core.deref(re_frame.trace.traces),e_34858], 0));
}

var G__34859 = seq__34821_34850;
var G__34860 = chunk__34822_34851;
var G__34861 = count__34823_34852;
var G__34862 = (i__34824_34853 + (1));
seq__34821_34850 = G__34859;
chunk__34822_34851 = G__34860;
count__34823_34852 = G__34861;
i__34824_34853 = G__34862;
continue;
} else {
var temp__5753__auto___34863 = cljs.core.seq(seq__34821_34850);
if(temp__5753__auto___34863){
var seq__34821_34864__$1 = temp__5753__auto___34863;
if(cljs.core.chunked_seq_QMARK_(seq__34821_34864__$1)){
var c__4679__auto___34865 = cljs.core.chunk_first(seq__34821_34864__$1);
var G__34866 = cljs.core.chunk_rest(seq__34821_34864__$1);
var G__34867 = c__4679__auto___34865;
var G__34868 = cljs.core.count(c__4679__auto___34865);
var G__34869 = (0);
seq__34821_34850 = G__34866;
chunk__34822_34851 = G__34867;
count__34823_34852 = G__34868;
i__34824_34853 = G__34869;
continue;
} else {
var vec__34840_34870 = cljs.core.first(seq__34821_34864__$1);
var k_34871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34840_34870,(0),null);
var cb_34872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34840_34870,(1),null);
try{var G__34844_34873 = cljs.core.deref(re_frame.trace.traces);
(cb_34872.cljs$core$IFn$_invoke$arity$1 ? cb_34872.cljs$core$IFn$_invoke$arity$1(G__34844_34873) : cb_34872.call(null,G__34844_34873));
}catch (e34843){var e_34874 = e34843;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34871,"while storing",cljs.core.deref(re_frame.trace.traces),e_34874], 0));
}

var G__34875 = cljs.core.next(seq__34821_34864__$1);
var G__34876 = null;
var G__34877 = (0);
var G__34878 = (0);
seq__34821_34850 = G__34875;
chunk__34822_34851 = G__34876;
count__34823_34852 = G__34877;
i__34824_34853 = G__34878;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
