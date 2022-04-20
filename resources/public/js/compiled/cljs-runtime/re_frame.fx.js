goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35227 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35228 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35228);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35315 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35315)){
var new_db_35316 = temp__5753__auto___35315;
var fexpr__35244_35317 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35244_35317.cljs$core$IFn$_invoke$arity$1 ? fexpr__35244_35317.cljs$core$IFn$_invoke$arity$1(new_db_35316) : fexpr__35244_35317.call(null,new_db_35316));
} else {
}

var seq__35245 = cljs.core.seq(effects_without_db);
var chunk__35246 = null;
var count__35247 = (0);
var i__35248 = (0);
while(true){
if((i__35248 < count__35247)){
var vec__35255 = chunk__35246.cljs$core$IIndexed$_nth$arity$2(null,i__35248);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,(1),null);
var temp__5751__auto___35318 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35318)){
var effect_fn_35319 = temp__5751__auto___35318;
(effect_fn_35319.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35319.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35319.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35320 = seq__35245;
var G__35321 = chunk__35246;
var G__35322 = count__35247;
var G__35323 = (i__35248 + (1));
seq__35245 = G__35320;
chunk__35246 = G__35321;
count__35247 = G__35322;
i__35248 = G__35323;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35245);
if(temp__5753__auto__){
var seq__35245__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35245__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35245__$1);
var G__35324 = cljs.core.chunk_rest(seq__35245__$1);
var G__35325 = c__4679__auto__;
var G__35326 = cljs.core.count(c__4679__auto__);
var G__35327 = (0);
seq__35245 = G__35324;
chunk__35246 = G__35325;
count__35247 = G__35326;
i__35248 = G__35327;
continue;
} else {
var vec__35258 = cljs.core.first(seq__35245__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35258,(1),null);
var temp__5751__auto___35328 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35328)){
var effect_fn_35329 = temp__5751__auto___35328;
(effect_fn_35329.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35329.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35329.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35330 = cljs.core.next(seq__35245__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__35245 = G__35330;
chunk__35246 = G__35331;
count__35247 = G__35332;
i__35248 = G__35333;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__34795__auto___35334 = re_frame.interop.now();
var duration__34796__auto___35335 = (end__34795__auto___35334 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34796__auto___35335,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__34795__auto___35334);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35227);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35336 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35336)){
var new_db_35337 = temp__5753__auto___35336;
var fexpr__35261_35338 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35261_35338.cljs$core$IFn$_invoke$arity$1 ? fexpr__35261_35338.cljs$core$IFn$_invoke$arity$1(new_db_35337) : fexpr__35261_35338.call(null,new_db_35337));
} else {
}

var seq__35262 = cljs.core.seq(effects_without_db);
var chunk__35263 = null;
var count__35264 = (0);
var i__35265 = (0);
while(true){
if((i__35265 < count__35264)){
var vec__35273 = chunk__35263.cljs$core$IIndexed$_nth$arity$2(null,i__35265);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35273,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35273,(1),null);
var temp__5751__auto___35339 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35339)){
var effect_fn_35340 = temp__5751__auto___35339;
(effect_fn_35340.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35340.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35340.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35341 = seq__35262;
var G__35342 = chunk__35263;
var G__35343 = count__35264;
var G__35344 = (i__35265 + (1));
seq__35262 = G__35341;
chunk__35263 = G__35342;
count__35264 = G__35343;
i__35265 = G__35344;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35262);
if(temp__5753__auto__){
var seq__35262__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35262__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35262__$1);
var G__35345 = cljs.core.chunk_rest(seq__35262__$1);
var G__35346 = c__4679__auto__;
var G__35347 = cljs.core.count(c__4679__auto__);
var G__35348 = (0);
seq__35262 = G__35345;
chunk__35263 = G__35346;
count__35264 = G__35347;
i__35265 = G__35348;
continue;
} else {
var vec__35276 = cljs.core.first(seq__35262__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(1),null);
var temp__5751__auto___35349 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35349)){
var effect_fn_35350 = temp__5751__auto___35349;
(effect_fn_35350.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35350.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35350.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35351 = cljs.core.next(seq__35262__$1);
var G__35352 = null;
var G__35353 = (0);
var G__35354 = (0);
seq__35262 = G__35351;
chunk__35263 = G__35352;
count__35264 = G__35353;
i__35265 = G__35354;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35279){
var map__35280 = p__35279;
var map__35280__$1 = cljs.core.__destructure_map(map__35280);
var effect = map__35280__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35281 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35282 = null;
var count__35283 = (0);
var i__35284 = (0);
while(true){
if((i__35284 < count__35283)){
var effect = chunk__35282.cljs$core$IIndexed$_nth$arity$2(null,i__35284);
re_frame.fx.dispatch_later(effect);


var G__35355 = seq__35281;
var G__35356 = chunk__35282;
var G__35357 = count__35283;
var G__35358 = (i__35284 + (1));
seq__35281 = G__35355;
chunk__35282 = G__35356;
count__35283 = G__35357;
i__35284 = G__35358;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35281);
if(temp__5753__auto__){
var seq__35281__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35281__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35281__$1);
var G__35359 = cljs.core.chunk_rest(seq__35281__$1);
var G__35360 = c__4679__auto__;
var G__35361 = cljs.core.count(c__4679__auto__);
var G__35362 = (0);
seq__35281 = G__35359;
chunk__35282 = G__35360;
count__35283 = G__35361;
i__35284 = G__35362;
continue;
} else {
var effect = cljs.core.first(seq__35281__$1);
re_frame.fx.dispatch_later(effect);


var G__35363 = cljs.core.next(seq__35281__$1);
var G__35364 = null;
var G__35365 = (0);
var G__35366 = (0);
seq__35281 = G__35363;
chunk__35282 = G__35364;
count__35283 = G__35365;
i__35284 = G__35366;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35285 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35286 = null;
var count__35287 = (0);
var i__35288 = (0);
while(true){
if((i__35288 < count__35287)){
var vec__35295 = chunk__35286.cljs$core$IIndexed$_nth$arity$2(null,i__35288);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35295,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35295,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35367 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35367)){
var effect_fn_35368 = temp__5751__auto___35367;
(effect_fn_35368.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35368.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35368.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35369 = seq__35285;
var G__35370 = chunk__35286;
var G__35371 = count__35287;
var G__35372 = (i__35288 + (1));
seq__35285 = G__35369;
chunk__35286 = G__35370;
count__35287 = G__35371;
i__35288 = G__35372;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35285);
if(temp__5753__auto__){
var seq__35285__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35285__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35285__$1);
var G__35373 = cljs.core.chunk_rest(seq__35285__$1);
var G__35374 = c__4679__auto__;
var G__35375 = cljs.core.count(c__4679__auto__);
var G__35376 = (0);
seq__35285 = G__35373;
chunk__35286 = G__35374;
count__35287 = G__35375;
i__35288 = G__35376;
continue;
} else {
var vec__35298 = cljs.core.first(seq__35285__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35298,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35298,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35377 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35377)){
var effect_fn_35378 = temp__5751__auto___35377;
(effect_fn_35378.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35378.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35378.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35379 = cljs.core.next(seq__35285__$1);
var G__35380 = null;
var G__35381 = (0);
var G__35382 = (0);
seq__35285 = G__35379;
chunk__35286 = G__35380;
count__35287 = G__35381;
i__35288 = G__35382;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35305 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35306 = null;
var count__35307 = (0);
var i__35308 = (0);
while(true){
if((i__35308 < count__35307)){
var event = chunk__35306.cljs$core$IIndexed$_nth$arity$2(null,i__35308);
re_frame.router.dispatch(event);


var G__35383 = seq__35305;
var G__35384 = chunk__35306;
var G__35385 = count__35307;
var G__35386 = (i__35308 + (1));
seq__35305 = G__35383;
chunk__35306 = G__35384;
count__35307 = G__35385;
i__35308 = G__35386;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35305);
if(temp__5753__auto__){
var seq__35305__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35305__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35305__$1);
var G__35387 = cljs.core.chunk_rest(seq__35305__$1);
var G__35388 = c__4679__auto__;
var G__35389 = cljs.core.count(c__4679__auto__);
var G__35390 = (0);
seq__35305 = G__35387;
chunk__35306 = G__35388;
count__35307 = G__35389;
i__35308 = G__35390;
continue;
} else {
var event = cljs.core.first(seq__35305__$1);
re_frame.router.dispatch(event);


var G__35391 = cljs.core.next(seq__35305__$1);
var G__35392 = null;
var G__35393 = (0);
var G__35394 = (0);
seq__35305 = G__35391;
chunk__35306 = G__35392;
count__35307 = G__35393;
i__35308 = G__35394;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35311 = cljs.core.seq(value);
var chunk__35312 = null;
var count__35313 = (0);
var i__35314 = (0);
while(true){
if((i__35314 < count__35313)){
var event = chunk__35312.cljs$core$IIndexed$_nth$arity$2(null,i__35314);
clear_event(event);


var G__35395 = seq__35311;
var G__35396 = chunk__35312;
var G__35397 = count__35313;
var G__35398 = (i__35314 + (1));
seq__35311 = G__35395;
chunk__35312 = G__35396;
count__35313 = G__35397;
i__35314 = G__35398;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35311);
if(temp__5753__auto__){
var seq__35311__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35311__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35311__$1);
var G__35399 = cljs.core.chunk_rest(seq__35311__$1);
var G__35400 = c__4679__auto__;
var G__35401 = cljs.core.count(c__4679__auto__);
var G__35402 = (0);
seq__35311 = G__35399;
chunk__35312 = G__35400;
count__35313 = G__35401;
i__35314 = G__35402;
continue;
} else {
var event = cljs.core.first(seq__35311__$1);
clear_event(event);


var G__35403 = cljs.core.next(seq__35311__$1);
var G__35404 = null;
var G__35405 = (0);
var G__35406 = (0);
seq__35311 = G__35403;
chunk__35312 = G__35404;
count__35313 = G__35405;
i__35314 = G__35406;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
