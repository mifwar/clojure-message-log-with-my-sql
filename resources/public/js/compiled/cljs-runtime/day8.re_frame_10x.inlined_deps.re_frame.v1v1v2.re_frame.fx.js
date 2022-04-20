goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32090 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32091 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32091);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32225 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32225)){
var new_db_32226 = temp__5753__auto___32225;
var fexpr__32099_32227 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32099_32227.cljs$core$IFn$_invoke$arity$1 ? fexpr__32099_32227.cljs$core$IFn$_invoke$arity$1(new_db_32226) : fexpr__32099_32227.call(null,new_db_32226));
} else {
}

var seq__32100 = cljs.core.seq(effects_without_db);
var chunk__32102 = null;
var count__32103 = (0);
var i__32104 = (0);
while(true){
if((i__32104 < count__32103)){
var vec__32129 = chunk__32102.cljs$core$IIndexed$_nth$arity$2(null,i__32104);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32129,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32129,(1),null);
var temp__5751__auto___32228 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32228)){
var effect_fn_32229 = temp__5751__auto___32228;
(effect_fn_32229.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32229.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32229.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32230 = seq__32100;
var G__32231 = chunk__32102;
var G__32232 = count__32103;
var G__32233 = (i__32104 + (1));
seq__32100 = G__32230;
chunk__32102 = G__32231;
count__32103 = G__32232;
i__32104 = G__32233;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32100);
if(temp__5753__auto__){
var seq__32100__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32100__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32100__$1);
var G__32234 = cljs.core.chunk_rest(seq__32100__$1);
var G__32235 = c__4679__auto__;
var G__32236 = cljs.core.count(c__4679__auto__);
var G__32237 = (0);
seq__32100 = G__32234;
chunk__32102 = G__32235;
count__32103 = G__32236;
i__32104 = G__32237;
continue;
} else {
var vec__32137 = cljs.core.first(seq__32100__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32137,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32137,(1),null);
var temp__5751__auto___32238 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32238)){
var effect_fn_32239 = temp__5751__auto___32238;
(effect_fn_32239.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32239.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32239.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32241 = cljs.core.next(seq__32100__$1);
var G__32242 = null;
var G__32243 = (0);
var G__32244 = (0);
seq__32100 = G__32241;
chunk__32102 = G__32242;
count__32103 = G__32243;
i__32104 = G__32244;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__31456__auto___32245 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__31457__auto___32246 = (end__31456__auto___32245 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31457__auto___32246,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__31456__auto___32245);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32090);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32247 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32247)){
var new_db_32248 = temp__5753__auto___32247;
var fexpr__32140_32249 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32140_32249.cljs$core$IFn$_invoke$arity$1 ? fexpr__32140_32249.cljs$core$IFn$_invoke$arity$1(new_db_32248) : fexpr__32140_32249.call(null,new_db_32248));
} else {
}

var seq__32145 = cljs.core.seq(effects_without_db);
var chunk__32146 = null;
var count__32147 = (0);
var i__32148 = (0);
while(true){
if((i__32148 < count__32147)){
var vec__32163 = chunk__32146.cljs$core$IIndexed$_nth$arity$2(null,i__32148);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32163,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32163,(1),null);
var temp__5751__auto___32250 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32250)){
var effect_fn_32251 = temp__5751__auto___32250;
(effect_fn_32251.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32251.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32251.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32252 = seq__32145;
var G__32253 = chunk__32146;
var G__32254 = count__32147;
var G__32255 = (i__32148 + (1));
seq__32145 = G__32252;
chunk__32146 = G__32253;
count__32147 = G__32254;
i__32148 = G__32255;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32145);
if(temp__5753__auto__){
var seq__32145__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32145__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32145__$1);
var G__32256 = cljs.core.chunk_rest(seq__32145__$1);
var G__32257 = c__4679__auto__;
var G__32258 = cljs.core.count(c__4679__auto__);
var G__32259 = (0);
seq__32145 = G__32256;
chunk__32146 = G__32257;
count__32147 = G__32258;
i__32148 = G__32259;
continue;
} else {
var vec__32171 = cljs.core.first(seq__32145__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171,(1),null);
var temp__5751__auto___32260 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32260)){
var effect_fn_32261 = temp__5751__auto___32260;
(effect_fn_32261.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32261.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32261.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32262 = cljs.core.next(seq__32145__$1);
var G__32263 = null;
var G__32264 = (0);
var G__32265 = (0);
seq__32145 = G__32262;
chunk__32146 = G__32263;
count__32147 = G__32264;
i__32148 = G__32265;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32175){
var map__32176 = p__32175;
var map__32176__$1 = cljs.core.__destructure_map(map__32176);
var effect = map__32176__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32176__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32176__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__32177 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32178 = null;
var count__32179 = (0);
var i__32180 = (0);
while(true){
if((i__32180 < count__32179)){
var effect = chunk__32178.cljs$core$IIndexed$_nth$arity$2(null,i__32180);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32266 = seq__32177;
var G__32267 = chunk__32178;
var G__32268 = count__32179;
var G__32269 = (i__32180 + (1));
seq__32177 = G__32266;
chunk__32178 = G__32267;
count__32179 = G__32268;
i__32180 = G__32269;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32177);
if(temp__5753__auto__){
var seq__32177__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32177__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32177__$1);
var G__32270 = cljs.core.chunk_rest(seq__32177__$1);
var G__32271 = c__4679__auto__;
var G__32272 = cljs.core.count(c__4679__auto__);
var G__32273 = (0);
seq__32177 = G__32270;
chunk__32178 = G__32271;
count__32179 = G__32272;
i__32180 = G__32273;
continue;
} else {
var effect = cljs.core.first(seq__32177__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32274 = cljs.core.next(seq__32177__$1);
var G__32275 = null;
var G__32276 = (0);
var G__32277 = (0);
seq__32177 = G__32274;
chunk__32178 = G__32275;
count__32179 = G__32276;
i__32180 = G__32277;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32181 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32182 = null;
var count__32183 = (0);
var i__32184 = (0);
while(true){
if((i__32184 < count__32183)){
var vec__32191 = chunk__32182.cljs$core$IIndexed$_nth$arity$2(null,i__32184);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32191,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32191,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32278 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32278)){
var effect_fn_32279 = temp__5751__auto___32278;
(effect_fn_32279.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32279.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32279.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32280 = seq__32181;
var G__32281 = chunk__32182;
var G__32282 = count__32183;
var G__32283 = (i__32184 + (1));
seq__32181 = G__32280;
chunk__32182 = G__32281;
count__32183 = G__32282;
i__32184 = G__32283;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32181);
if(temp__5753__auto__){
var seq__32181__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32181__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32181__$1);
var G__32284 = cljs.core.chunk_rest(seq__32181__$1);
var G__32285 = c__4679__auto__;
var G__32286 = cljs.core.count(c__4679__auto__);
var G__32287 = (0);
seq__32181 = G__32284;
chunk__32182 = G__32285;
count__32183 = G__32286;
i__32184 = G__32287;
continue;
} else {
var vec__32194 = cljs.core.first(seq__32181__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32194,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32194,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32288 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32288)){
var effect_fn_32289 = temp__5751__auto___32288;
(effect_fn_32289.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32289.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32289.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32290 = cljs.core.next(seq__32181__$1);
var G__32291 = null;
var G__32292 = (0);
var G__32293 = (0);
seq__32181 = G__32290;
chunk__32182 = G__32291;
count__32183 = G__32292;
i__32184 = G__32293;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32200 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32201 = null;
var count__32202 = (0);
var i__32203 = (0);
while(true){
if((i__32203 < count__32202)){
var event = chunk__32201.cljs$core$IIndexed$_nth$arity$2(null,i__32203);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32294 = seq__32200;
var G__32295 = chunk__32201;
var G__32296 = count__32202;
var G__32297 = (i__32203 + (1));
seq__32200 = G__32294;
chunk__32201 = G__32295;
count__32202 = G__32296;
i__32203 = G__32297;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32200);
if(temp__5753__auto__){
var seq__32200__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32200__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32200__$1);
var G__32298 = cljs.core.chunk_rest(seq__32200__$1);
var G__32299 = c__4679__auto__;
var G__32300 = cljs.core.count(c__4679__auto__);
var G__32301 = (0);
seq__32200 = G__32298;
chunk__32201 = G__32299;
count__32202 = G__32300;
i__32203 = G__32301;
continue;
} else {
var event = cljs.core.first(seq__32200__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32302 = cljs.core.next(seq__32200__$1);
var G__32303 = null;
var G__32304 = (0);
var G__32305 = (0);
seq__32200 = G__32302;
chunk__32201 = G__32303;
count__32202 = G__32304;
i__32203 = G__32305;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32213 = cljs.core.seq(value);
var chunk__32214 = null;
var count__32215 = (0);
var i__32216 = (0);
while(true){
if((i__32216 < count__32215)){
var event = chunk__32214.cljs$core$IIndexed$_nth$arity$2(null,i__32216);
clear_event(event);


var G__32307 = seq__32213;
var G__32308 = chunk__32214;
var G__32309 = count__32215;
var G__32310 = (i__32216 + (1));
seq__32213 = G__32307;
chunk__32214 = G__32308;
count__32215 = G__32309;
i__32216 = G__32310;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32213);
if(temp__5753__auto__){
var seq__32213__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32213__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32213__$1);
var G__32311 = cljs.core.chunk_rest(seq__32213__$1);
var G__32312 = c__4679__auto__;
var G__32313 = cljs.core.count(c__4679__auto__);
var G__32314 = (0);
seq__32213 = G__32311;
chunk__32214 = G__32312;
count__32215 = G__32313;
i__32216 = G__32314;
continue;
} else {
var event = cljs.core.first(seq__32213__$1);
clear_event(event);


var G__32315 = cljs.core.next(seq__32213__$1);
var G__32316 = null;
var G__32317 = (0);
var G__32318 = (0);
seq__32213 = G__32315;
chunk__32214 = G__32316;
count__32215 = G__32317;
i__32216 = G__32318;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
