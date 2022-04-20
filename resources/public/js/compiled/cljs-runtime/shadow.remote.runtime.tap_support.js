goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43894,p__43895){
var map__43896 = p__43894;
var map__43896__$1 = cljs.core.__destructure_map(map__43896);
var svc = map__43896__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43896__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43896__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43896__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43897 = p__43895;
var map__43897__$1 = cljs.core.__destructure_map(map__43897);
var msg = map__43897__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43897__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43897__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43897__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43897__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43898,p__43899){
var map__43900 = p__43898;
var map__43900__$1 = cljs.core.__destructure_map(map__43900);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43900__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43901 = p__43899;
var map__43901__$1 = cljs.core.__destructure_map(map__43901);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43901__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43905,p__43906){
var map__43907 = p__43905;
var map__43907__$1 = cljs.core.__destructure_map(map__43907);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43907__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43907__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43908 = p__43906;
var map__43908__$1 = cljs.core.__destructure_map(map__43908);
var msg = map__43908__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43908__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43913,tid){
var map__43914 = p__43913;
var map__43914__$1 = cljs.core.__destructure_map(map__43914);
var svc = map__43914__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43914__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43981 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43985 = null;
var count__43986 = (0);
var i__43987 = (0);
while(true){
if((i__43987 < count__43986)){
var vec__44031 = chunk__43985.cljs$core$IIndexed$_nth$arity$2(null,i__43987);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44031,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44031,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44044 = seq__43981;
var G__44045 = chunk__43985;
var G__44046 = count__43986;
var G__44047 = (i__43987 + (1));
seq__43981 = G__44044;
chunk__43985 = G__44045;
count__43986 = G__44046;
i__43987 = G__44047;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43981);
if(temp__5753__auto__){
var seq__43981__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43981__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43981__$1);
var G__44048 = cljs.core.chunk_rest(seq__43981__$1);
var G__44049 = c__4679__auto__;
var G__44050 = cljs.core.count(c__4679__auto__);
var G__44051 = (0);
seq__43981 = G__44048;
chunk__43985 = G__44049;
count__43986 = G__44050;
i__43987 = G__44051;
continue;
} else {
var vec__44034 = cljs.core.first(seq__43981__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44034,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44034,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44052 = cljs.core.next(seq__43981__$1);
var G__44053 = null;
var G__44054 = (0);
var G__44055 = (0);
seq__43981 = G__44052;
chunk__43985 = G__44053;
count__43986 = G__44054;
i__43987 = G__44055;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43918_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43918_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43922_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43922_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43933_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43933_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43935_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43935_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44037){
var map__44038 = p__44037;
var map__44038__$1 = cljs.core.__destructure_map(map__44038);
var svc = map__44038__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44038__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
