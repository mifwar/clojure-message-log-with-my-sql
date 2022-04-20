goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48789 = arguments.length;
var i__4865__auto___48790 = (0);
while(true){
if((i__4865__auto___48790 < len__4864__auto___48789)){
args__4870__auto__.push((arguments[i__4865__auto___48790]));

var G__48798 = (i__4865__auto___48790 + (1));
i__4865__auto___48790 = G__48798;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47824){
var G__47825 = cljs.core.first(seq47824);
var seq47824__$1 = cljs.core.next(seq47824);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47825,seq47824__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47831 = cljs.core.seq(sources);
var chunk__47832 = null;
var count__47833 = (0);
var i__47834 = (0);
while(true){
if((i__47834 < count__47833)){
var map__47857 = chunk__47832.cljs$core$IIndexed$_nth$arity$2(null,i__47834);
var map__47857__$1 = cljs.core.__destructure_map(map__47857);
var src = map__47857__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47858){var e_48806 = e47858;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48806);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48806.message)].join('')));
}

var G__48807 = seq__47831;
var G__48808 = chunk__47832;
var G__48809 = count__47833;
var G__48810 = (i__47834 + (1));
seq__47831 = G__48807;
chunk__47832 = G__48808;
count__47833 = G__48809;
i__47834 = G__48810;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47831);
if(temp__5753__auto__){
var seq__47831__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47831__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47831__$1);
var G__48811 = cljs.core.chunk_rest(seq__47831__$1);
var G__48812 = c__4679__auto__;
var G__48813 = cljs.core.count(c__4679__auto__);
var G__48814 = (0);
seq__47831 = G__48811;
chunk__47832 = G__48812;
count__47833 = G__48813;
i__47834 = G__48814;
continue;
} else {
var map__47860 = cljs.core.first(seq__47831__$1);
var map__47860__$1 = cljs.core.__destructure_map(map__47860);
var src = map__47860__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47860__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47860__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47860__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47860__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47861){var e_48815 = e47861;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48815);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48815.message)].join('')));
}

var G__48816 = cljs.core.next(seq__47831__$1);
var G__48817 = null;
var G__48818 = (0);
var G__48819 = (0);
seq__47831 = G__48816;
chunk__47832 = G__48817;
count__47833 = G__48818;
i__47834 = G__48819;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47865 = cljs.core.seq(js_requires);
var chunk__47866 = null;
var count__47867 = (0);
var i__47868 = (0);
while(true){
if((i__47868 < count__47867)){
var js_ns = chunk__47866.cljs$core$IIndexed$_nth$arity$2(null,i__47868);
var require_str_48820 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48820);


var G__48822 = seq__47865;
var G__48823 = chunk__47866;
var G__48824 = count__47867;
var G__48825 = (i__47868 + (1));
seq__47865 = G__48822;
chunk__47866 = G__48823;
count__47867 = G__48824;
i__47868 = G__48825;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47865);
if(temp__5753__auto__){
var seq__47865__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47865__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47865__$1);
var G__48826 = cljs.core.chunk_rest(seq__47865__$1);
var G__48827 = c__4679__auto__;
var G__48828 = cljs.core.count(c__4679__auto__);
var G__48829 = (0);
seq__47865 = G__48826;
chunk__47866 = G__48827;
count__47867 = G__48828;
i__47868 = G__48829;
continue;
} else {
var js_ns = cljs.core.first(seq__47865__$1);
var require_str_48830 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48830);


var G__48831 = cljs.core.next(seq__47865__$1);
var G__48832 = null;
var G__48833 = (0);
var G__48834 = (0);
seq__47865 = G__48831;
chunk__47866 = G__48832;
count__47867 = G__48833;
i__47868 = G__48834;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47872){
var map__47873 = p__47872;
var map__47873__$1 = cljs.core.__destructure_map(map__47873);
var msg = map__47873__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47878(s__47879){
return (new cljs.core.LazySeq(null,(function (){
var s__47879__$1 = s__47879;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47879__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__47888 = cljs.core.first(xs__6308__auto__);
var map__47888__$1 = cljs.core.__destructure_map(map__47888);
var src = map__47888__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47888__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47888__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__47879__$1,map__47888,map__47888__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47873,map__47873__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47878_$_iter__47880(s__47881){
return (new cljs.core.LazySeq(null,((function (s__47879__$1,map__47888,map__47888__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47873,map__47873__$1,msg,info,reload_info){
return (function (){
var s__47881__$1 = s__47881;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47881__$1);
if(temp__5753__auto____$1){
var s__47881__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47881__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__47881__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__47883 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__47882 = (0);
while(true){
if((i__47882 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__47882);
cljs.core.chunk_append(b__47883,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48836 = (i__47882 + (1));
i__47882 = G__48836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47883),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47878_$_iter__47880(cljs.core.chunk_rest(s__47881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47883),null);
}
} else {
var warning = cljs.core.first(s__47881__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47878_$_iter__47880(cljs.core.rest(s__47881__$2)));
}
} else {
return null;
}
break;
}
});})(s__47879__$1,map__47888,map__47888__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47873,map__47873__$1,msg,info,reload_info))
,null,null));
});})(s__47879__$1,map__47888,map__47888__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47873,map__47873__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47878(cljs.core.rest(s__47879__$1)));
} else {
var G__48840 = cljs.core.rest(s__47879__$1);
s__47879__$1 = G__48840;
continue;
}
} else {
var G__48841 = cljs.core.rest(s__47879__$1);
s__47879__$1 = G__48841;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47915_48842 = cljs.core.seq(warnings);
var chunk__47916_48843 = null;
var count__47917_48844 = (0);
var i__47918_48845 = (0);
while(true){
if((i__47918_48845 < count__47917_48844)){
var map__47924_48846 = chunk__47916_48843.cljs$core$IIndexed$_nth$arity$2(null,i__47918_48845);
var map__47924_48847__$1 = cljs.core.__destructure_map(map__47924_48846);
var w_48848 = map__47924_48847__$1;
var msg_48849__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47924_48847__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47924_48847__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47924_48847__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47924_48847__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48852)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48850),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48851),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48849__$1)].join(''));


var G__48855 = seq__47915_48842;
var G__48856 = chunk__47916_48843;
var G__48857 = count__47917_48844;
var G__48858 = (i__47918_48845 + (1));
seq__47915_48842 = G__48855;
chunk__47916_48843 = G__48856;
count__47917_48844 = G__48857;
i__47918_48845 = G__48858;
continue;
} else {
var temp__5753__auto___48859 = cljs.core.seq(seq__47915_48842);
if(temp__5753__auto___48859){
var seq__47915_48860__$1 = temp__5753__auto___48859;
if(cljs.core.chunked_seq_QMARK_(seq__47915_48860__$1)){
var c__4679__auto___48861 = cljs.core.chunk_first(seq__47915_48860__$1);
var G__48862 = cljs.core.chunk_rest(seq__47915_48860__$1);
var G__48863 = c__4679__auto___48861;
var G__48864 = cljs.core.count(c__4679__auto___48861);
var G__48865 = (0);
seq__47915_48842 = G__48862;
chunk__47916_48843 = G__48863;
count__47917_48844 = G__48864;
i__47918_48845 = G__48865;
continue;
} else {
var map__47925_48866 = cljs.core.first(seq__47915_48860__$1);
var map__47925_48867__$1 = cljs.core.__destructure_map(map__47925_48866);
var w_48868 = map__47925_48867__$1;
var msg_48869__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47925_48867__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47925_48867__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47925_48867__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47925_48867__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48872)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48870),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48871),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48869__$1)].join(''));


var G__48873 = cljs.core.next(seq__47915_48860__$1);
var G__48874 = null;
var G__48875 = (0);
var G__48876 = (0);
seq__47915_48842 = G__48873;
chunk__47916_48843 = G__48874;
count__47917_48844 = G__48875;
i__47918_48845 = G__48876;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47871_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47871_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47941){
var map__47942 = p__47941;
var map__47942__$1 = cljs.core.__destructure_map(map__47942);
var msg = map__47942__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47942__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47942__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47944 = cljs.core.seq(updates);
var chunk__47947 = null;
var count__47948 = (0);
var i__47949 = (0);
while(true){
if((i__47949 < count__47948)){
var path = chunk__47947.cljs$core$IIndexed$_nth$arity$2(null,i__47949);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48239_48877 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48243_48878 = null;
var count__48244_48879 = (0);
var i__48245_48880 = (0);
while(true){
if((i__48245_48880 < count__48244_48879)){
var node_48881 = chunk__48243_48878.cljs$core$IIndexed$_nth$arity$2(null,i__48245_48880);
if(cljs.core.not(node_48881.shadow$old)){
var path_match_48882 = shadow.cljs.devtools.client.browser.match_paths(node_48881.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48882)){
var new_link_48883 = (function (){var G__48526 = node_48881.cloneNode(true);
G__48526.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48882),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48526;
})();
(node_48881.shadow$old = true);

(new_link_48883.onload = ((function (seq__48239_48877,chunk__48243_48878,count__48244_48879,i__48245_48880,seq__47944,chunk__47947,count__47948,i__47949,new_link_48883,path_match_48882,node_48881,path,map__47942,map__47942__$1,msg,updates,reload_info){
return (function (e){
var seq__48528_48884 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48530_48885 = null;
var count__48531_48886 = (0);
var i__48532_48887 = (0);
while(true){
if((i__48532_48887 < count__48531_48886)){
var map__48551_48888 = chunk__48530_48885.cljs$core$IIndexed$_nth$arity$2(null,i__48532_48887);
var map__48551_48889__$1 = cljs.core.__destructure_map(map__48551_48888);
var task_48890 = map__48551_48889__$1;
var fn_str_48891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48551_48889__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48551_48889__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48893 = goog.getObjectByName(fn_str_48891,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48892)].join(''));

(fn_obj_48893.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48893.cljs$core$IFn$_invoke$arity$2(path,new_link_48883) : fn_obj_48893.call(null,path,new_link_48883));


var G__48894 = seq__48528_48884;
var G__48895 = chunk__48530_48885;
var G__48896 = count__48531_48886;
var G__48897 = (i__48532_48887 + (1));
seq__48528_48884 = G__48894;
chunk__48530_48885 = G__48895;
count__48531_48886 = G__48896;
i__48532_48887 = G__48897;
continue;
} else {
var temp__5753__auto___48898 = cljs.core.seq(seq__48528_48884);
if(temp__5753__auto___48898){
var seq__48528_48899__$1 = temp__5753__auto___48898;
if(cljs.core.chunked_seq_QMARK_(seq__48528_48899__$1)){
var c__4679__auto___48900 = cljs.core.chunk_first(seq__48528_48899__$1);
var G__48901 = cljs.core.chunk_rest(seq__48528_48899__$1);
var G__48902 = c__4679__auto___48900;
var G__48903 = cljs.core.count(c__4679__auto___48900);
var G__48904 = (0);
seq__48528_48884 = G__48901;
chunk__48530_48885 = G__48902;
count__48531_48886 = G__48903;
i__48532_48887 = G__48904;
continue;
} else {
var map__48553_48905 = cljs.core.first(seq__48528_48899__$1);
var map__48553_48906__$1 = cljs.core.__destructure_map(map__48553_48905);
var task_48907 = map__48553_48906__$1;
var fn_str_48908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553_48906__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553_48906__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48911 = goog.getObjectByName(fn_str_48908,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48909)].join(''));

(fn_obj_48911.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48911.cljs$core$IFn$_invoke$arity$2(path,new_link_48883) : fn_obj_48911.call(null,path,new_link_48883));


var G__48912 = cljs.core.next(seq__48528_48899__$1);
var G__48913 = null;
var G__48914 = (0);
var G__48915 = (0);
seq__48528_48884 = G__48912;
chunk__48530_48885 = G__48913;
count__48531_48886 = G__48914;
i__48532_48887 = G__48915;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48881);
});})(seq__48239_48877,chunk__48243_48878,count__48244_48879,i__48245_48880,seq__47944,chunk__47947,count__47948,i__47949,new_link_48883,path_match_48882,node_48881,path,map__47942,map__47942__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48882], 0));

goog.dom.insertSiblingAfter(new_link_48883,node_48881);


var G__48916 = seq__48239_48877;
var G__48917 = chunk__48243_48878;
var G__48918 = count__48244_48879;
var G__48919 = (i__48245_48880 + (1));
seq__48239_48877 = G__48916;
chunk__48243_48878 = G__48917;
count__48244_48879 = G__48918;
i__48245_48880 = G__48919;
continue;
} else {
var G__48920 = seq__48239_48877;
var G__48921 = chunk__48243_48878;
var G__48922 = count__48244_48879;
var G__48923 = (i__48245_48880 + (1));
seq__48239_48877 = G__48920;
chunk__48243_48878 = G__48921;
count__48244_48879 = G__48922;
i__48245_48880 = G__48923;
continue;
}
} else {
var G__48924 = seq__48239_48877;
var G__48925 = chunk__48243_48878;
var G__48926 = count__48244_48879;
var G__48927 = (i__48245_48880 + (1));
seq__48239_48877 = G__48924;
chunk__48243_48878 = G__48925;
count__48244_48879 = G__48926;
i__48245_48880 = G__48927;
continue;
}
} else {
var temp__5753__auto___48928 = cljs.core.seq(seq__48239_48877);
if(temp__5753__auto___48928){
var seq__48239_48929__$1 = temp__5753__auto___48928;
if(cljs.core.chunked_seq_QMARK_(seq__48239_48929__$1)){
var c__4679__auto___48930 = cljs.core.chunk_first(seq__48239_48929__$1);
var G__48931 = cljs.core.chunk_rest(seq__48239_48929__$1);
var G__48932 = c__4679__auto___48930;
var G__48933 = cljs.core.count(c__4679__auto___48930);
var G__48934 = (0);
seq__48239_48877 = G__48931;
chunk__48243_48878 = G__48932;
count__48244_48879 = G__48933;
i__48245_48880 = G__48934;
continue;
} else {
var node_48935 = cljs.core.first(seq__48239_48929__$1);
if(cljs.core.not(node_48935.shadow$old)){
var path_match_48936 = shadow.cljs.devtools.client.browser.match_paths(node_48935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48936)){
var new_link_48937 = (function (){var G__48562 = node_48935.cloneNode(true);
G__48562.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48936),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48562;
})();
(node_48935.shadow$old = true);

(new_link_48937.onload = ((function (seq__48239_48877,chunk__48243_48878,count__48244_48879,i__48245_48880,seq__47944,chunk__47947,count__47948,i__47949,new_link_48937,path_match_48936,node_48935,seq__48239_48929__$1,temp__5753__auto___48928,path,map__47942,map__47942__$1,msg,updates,reload_info){
return (function (e){
var seq__48563_48940 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48565_48941 = null;
var count__48566_48942 = (0);
var i__48567_48943 = (0);
while(true){
if((i__48567_48943 < count__48566_48942)){
var map__48576_48944 = chunk__48565_48941.cljs$core$IIndexed$_nth$arity$2(null,i__48567_48943);
var map__48576_48945__$1 = cljs.core.__destructure_map(map__48576_48944);
var task_48946 = map__48576_48945__$1;
var fn_str_48947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48576_48945__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48576_48945__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48950 = goog.getObjectByName(fn_str_48947,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48948)].join(''));

(fn_obj_48950.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48950.cljs$core$IFn$_invoke$arity$2(path,new_link_48937) : fn_obj_48950.call(null,path,new_link_48937));


var G__48951 = seq__48563_48940;
var G__48952 = chunk__48565_48941;
var G__48953 = count__48566_48942;
var G__48954 = (i__48567_48943 + (1));
seq__48563_48940 = G__48951;
chunk__48565_48941 = G__48952;
count__48566_48942 = G__48953;
i__48567_48943 = G__48954;
continue;
} else {
var temp__5753__auto___48955__$1 = cljs.core.seq(seq__48563_48940);
if(temp__5753__auto___48955__$1){
var seq__48563_48956__$1 = temp__5753__auto___48955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48563_48956__$1)){
var c__4679__auto___48957 = cljs.core.chunk_first(seq__48563_48956__$1);
var G__48958 = cljs.core.chunk_rest(seq__48563_48956__$1);
var G__48959 = c__4679__auto___48957;
var G__48960 = cljs.core.count(c__4679__auto___48957);
var G__48961 = (0);
seq__48563_48940 = G__48958;
chunk__48565_48941 = G__48959;
count__48566_48942 = G__48960;
i__48567_48943 = G__48961;
continue;
} else {
var map__48585_48962 = cljs.core.first(seq__48563_48956__$1);
var map__48585_48963__$1 = cljs.core.__destructure_map(map__48585_48962);
var task_48964 = map__48585_48963__$1;
var fn_str_48965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48585_48963__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48585_48963__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48967 = goog.getObjectByName(fn_str_48965,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48966)].join(''));

(fn_obj_48967.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48967.cljs$core$IFn$_invoke$arity$2(path,new_link_48937) : fn_obj_48967.call(null,path,new_link_48937));


var G__48969 = cljs.core.next(seq__48563_48956__$1);
var G__48970 = null;
var G__48971 = (0);
var G__48972 = (0);
seq__48563_48940 = G__48969;
chunk__48565_48941 = G__48970;
count__48566_48942 = G__48971;
i__48567_48943 = G__48972;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48935);
});})(seq__48239_48877,chunk__48243_48878,count__48244_48879,i__48245_48880,seq__47944,chunk__47947,count__47948,i__47949,new_link_48937,path_match_48936,node_48935,seq__48239_48929__$1,temp__5753__auto___48928,path,map__47942,map__47942__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48936], 0));

goog.dom.insertSiblingAfter(new_link_48937,node_48935);


var G__48974 = cljs.core.next(seq__48239_48929__$1);
var G__48975 = null;
var G__48976 = (0);
var G__48977 = (0);
seq__48239_48877 = G__48974;
chunk__48243_48878 = G__48975;
count__48244_48879 = G__48976;
i__48245_48880 = G__48977;
continue;
} else {
var G__48978 = cljs.core.next(seq__48239_48929__$1);
var G__48979 = null;
var G__48980 = (0);
var G__48981 = (0);
seq__48239_48877 = G__48978;
chunk__48243_48878 = G__48979;
count__48244_48879 = G__48980;
i__48245_48880 = G__48981;
continue;
}
} else {
var G__48982 = cljs.core.next(seq__48239_48929__$1);
var G__48983 = null;
var G__48984 = (0);
var G__48985 = (0);
seq__48239_48877 = G__48982;
chunk__48243_48878 = G__48983;
count__48244_48879 = G__48984;
i__48245_48880 = G__48985;
continue;
}
}
} else {
}
}
break;
}


var G__48986 = seq__47944;
var G__48987 = chunk__47947;
var G__48988 = count__47948;
var G__48989 = (i__47949 + (1));
seq__47944 = G__48986;
chunk__47947 = G__48987;
count__47948 = G__48988;
i__47949 = G__48989;
continue;
} else {
var G__48990 = seq__47944;
var G__48991 = chunk__47947;
var G__48992 = count__47948;
var G__48993 = (i__47949 + (1));
seq__47944 = G__48990;
chunk__47947 = G__48991;
count__47948 = G__48992;
i__47949 = G__48993;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47944);
if(temp__5753__auto__){
var seq__47944__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47944__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47944__$1);
var G__48994 = cljs.core.chunk_rest(seq__47944__$1);
var G__48995 = c__4679__auto__;
var G__48996 = cljs.core.count(c__4679__auto__);
var G__48997 = (0);
seq__47944 = G__48994;
chunk__47947 = G__48995;
count__47948 = G__48996;
i__47949 = G__48997;
continue;
} else {
var path = cljs.core.first(seq__47944__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48589_48998 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48593_48999 = null;
var count__48594_49000 = (0);
var i__48595_49001 = (0);
while(true){
if((i__48595_49001 < count__48594_49000)){
var node_49006 = chunk__48593_48999.cljs$core$IIndexed$_nth$arity$2(null,i__48595_49001);
if(cljs.core.not(node_49006.shadow$old)){
var path_match_49008 = shadow.cljs.devtools.client.browser.match_paths(node_49006.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49008)){
var new_link_49009 = (function (){var G__48654 = node_49006.cloneNode(true);
G__48654.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49008),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48654;
})();
(node_49006.shadow$old = true);

(new_link_49009.onload = ((function (seq__48589_48998,chunk__48593_48999,count__48594_49000,i__48595_49001,seq__47944,chunk__47947,count__47948,i__47949,new_link_49009,path_match_49008,node_49006,path,seq__47944__$1,temp__5753__auto__,map__47942,map__47942__$1,msg,updates,reload_info){
return (function (e){
var seq__48656_49010 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48658_49011 = null;
var count__48659_49012 = (0);
var i__48660_49013 = (0);
while(true){
if((i__48660_49013 < count__48659_49012)){
var map__48668_49014 = chunk__48658_49011.cljs$core$IIndexed$_nth$arity$2(null,i__48660_49013);
var map__48668_49015__$1 = cljs.core.__destructure_map(map__48668_49014);
var task_49016 = map__48668_49015__$1;
var fn_str_49017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48668_49015__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48668_49015__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49019 = goog.getObjectByName(fn_str_49017,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49018)].join(''));

(fn_obj_49019.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49019.cljs$core$IFn$_invoke$arity$2(path,new_link_49009) : fn_obj_49019.call(null,path,new_link_49009));


var G__49020 = seq__48656_49010;
var G__49021 = chunk__48658_49011;
var G__49022 = count__48659_49012;
var G__49023 = (i__48660_49013 + (1));
seq__48656_49010 = G__49020;
chunk__48658_49011 = G__49021;
count__48659_49012 = G__49022;
i__48660_49013 = G__49023;
continue;
} else {
var temp__5753__auto___49024__$1 = cljs.core.seq(seq__48656_49010);
if(temp__5753__auto___49024__$1){
var seq__48656_49025__$1 = temp__5753__auto___49024__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48656_49025__$1)){
var c__4679__auto___49026 = cljs.core.chunk_first(seq__48656_49025__$1);
var G__49027 = cljs.core.chunk_rest(seq__48656_49025__$1);
var G__49028 = c__4679__auto___49026;
var G__49029 = cljs.core.count(c__4679__auto___49026);
var G__49030 = (0);
seq__48656_49010 = G__49027;
chunk__48658_49011 = G__49028;
count__48659_49012 = G__49029;
i__48660_49013 = G__49030;
continue;
} else {
var map__48677_49031 = cljs.core.first(seq__48656_49025__$1);
var map__48677_49032__$1 = cljs.core.__destructure_map(map__48677_49031);
var task_49033 = map__48677_49032__$1;
var fn_str_49034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48677_49032__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48677_49032__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49036 = goog.getObjectByName(fn_str_49034,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49035)].join(''));

(fn_obj_49036.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49036.cljs$core$IFn$_invoke$arity$2(path,new_link_49009) : fn_obj_49036.call(null,path,new_link_49009));


var G__49037 = cljs.core.next(seq__48656_49025__$1);
var G__49038 = null;
var G__49039 = (0);
var G__49040 = (0);
seq__48656_49010 = G__49037;
chunk__48658_49011 = G__49038;
count__48659_49012 = G__49039;
i__48660_49013 = G__49040;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49006);
});})(seq__48589_48998,chunk__48593_48999,count__48594_49000,i__48595_49001,seq__47944,chunk__47947,count__47948,i__47949,new_link_49009,path_match_49008,node_49006,path,seq__47944__$1,temp__5753__auto__,map__47942,map__47942__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49008], 0));

goog.dom.insertSiblingAfter(new_link_49009,node_49006);


var G__49041 = seq__48589_48998;
var G__49042 = chunk__48593_48999;
var G__49043 = count__48594_49000;
var G__49044 = (i__48595_49001 + (1));
seq__48589_48998 = G__49041;
chunk__48593_48999 = G__49042;
count__48594_49000 = G__49043;
i__48595_49001 = G__49044;
continue;
} else {
var G__49045 = seq__48589_48998;
var G__49046 = chunk__48593_48999;
var G__49047 = count__48594_49000;
var G__49048 = (i__48595_49001 + (1));
seq__48589_48998 = G__49045;
chunk__48593_48999 = G__49046;
count__48594_49000 = G__49047;
i__48595_49001 = G__49048;
continue;
}
} else {
var G__49049 = seq__48589_48998;
var G__49050 = chunk__48593_48999;
var G__49051 = count__48594_49000;
var G__49052 = (i__48595_49001 + (1));
seq__48589_48998 = G__49049;
chunk__48593_48999 = G__49050;
count__48594_49000 = G__49051;
i__48595_49001 = G__49052;
continue;
}
} else {
var temp__5753__auto___49053__$1 = cljs.core.seq(seq__48589_48998);
if(temp__5753__auto___49053__$1){
var seq__48589_49054__$1 = temp__5753__auto___49053__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48589_49054__$1)){
var c__4679__auto___49055 = cljs.core.chunk_first(seq__48589_49054__$1);
var G__49056 = cljs.core.chunk_rest(seq__48589_49054__$1);
var G__49057 = c__4679__auto___49055;
var G__49058 = cljs.core.count(c__4679__auto___49055);
var G__49059 = (0);
seq__48589_48998 = G__49056;
chunk__48593_48999 = G__49057;
count__48594_49000 = G__49058;
i__48595_49001 = G__49059;
continue;
} else {
var node_49060 = cljs.core.first(seq__48589_49054__$1);
if(cljs.core.not(node_49060.shadow$old)){
var path_match_49061 = shadow.cljs.devtools.client.browser.match_paths(node_49060.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49061)){
var new_link_49062 = (function (){var G__48678 = node_49060.cloneNode(true);
G__48678.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49061),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48678;
})();
(node_49060.shadow$old = true);

(new_link_49062.onload = ((function (seq__48589_48998,chunk__48593_48999,count__48594_49000,i__48595_49001,seq__47944,chunk__47947,count__47948,i__47949,new_link_49062,path_match_49061,node_49060,seq__48589_49054__$1,temp__5753__auto___49053__$1,path,seq__47944__$1,temp__5753__auto__,map__47942,map__47942__$1,msg,updates,reload_info){
return (function (e){
var seq__48679_49063 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48681_49064 = null;
var count__48682_49065 = (0);
var i__48683_49066 = (0);
while(true){
if((i__48683_49066 < count__48682_49065)){
var map__48690_49067 = chunk__48681_49064.cljs$core$IIndexed$_nth$arity$2(null,i__48683_49066);
var map__48690_49068__$1 = cljs.core.__destructure_map(map__48690_49067);
var task_49069 = map__48690_49068__$1;
var fn_str_49070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690_49068__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690_49068__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49072 = goog.getObjectByName(fn_str_49070,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49071)].join(''));

(fn_obj_49072.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49072.cljs$core$IFn$_invoke$arity$2(path,new_link_49062) : fn_obj_49072.call(null,path,new_link_49062));


var G__49073 = seq__48679_49063;
var G__49074 = chunk__48681_49064;
var G__49075 = count__48682_49065;
var G__49076 = (i__48683_49066 + (1));
seq__48679_49063 = G__49073;
chunk__48681_49064 = G__49074;
count__48682_49065 = G__49075;
i__48683_49066 = G__49076;
continue;
} else {
var temp__5753__auto___49077__$2 = cljs.core.seq(seq__48679_49063);
if(temp__5753__auto___49077__$2){
var seq__48679_49078__$1 = temp__5753__auto___49077__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48679_49078__$1)){
var c__4679__auto___49079 = cljs.core.chunk_first(seq__48679_49078__$1);
var G__49080 = cljs.core.chunk_rest(seq__48679_49078__$1);
var G__49081 = c__4679__auto___49079;
var G__49082 = cljs.core.count(c__4679__auto___49079);
var G__49083 = (0);
seq__48679_49063 = G__49080;
chunk__48681_49064 = G__49081;
count__48682_49065 = G__49082;
i__48683_49066 = G__49083;
continue;
} else {
var map__48695_49084 = cljs.core.first(seq__48679_49078__$1);
var map__48695_49085__$1 = cljs.core.__destructure_map(map__48695_49084);
var task_49086 = map__48695_49085__$1;
var fn_str_49087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48695_49085__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48695_49085__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49089 = goog.getObjectByName(fn_str_49087,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49088)].join(''));

(fn_obj_49089.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49089.cljs$core$IFn$_invoke$arity$2(path,new_link_49062) : fn_obj_49089.call(null,path,new_link_49062));


var G__49090 = cljs.core.next(seq__48679_49078__$1);
var G__49091 = null;
var G__49092 = (0);
var G__49093 = (0);
seq__48679_49063 = G__49090;
chunk__48681_49064 = G__49091;
count__48682_49065 = G__49092;
i__48683_49066 = G__49093;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49060);
});})(seq__48589_48998,chunk__48593_48999,count__48594_49000,i__48595_49001,seq__47944,chunk__47947,count__47948,i__47949,new_link_49062,path_match_49061,node_49060,seq__48589_49054__$1,temp__5753__auto___49053__$1,path,seq__47944__$1,temp__5753__auto__,map__47942,map__47942__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49061], 0));

goog.dom.insertSiblingAfter(new_link_49062,node_49060);


var G__49094 = cljs.core.next(seq__48589_49054__$1);
var G__49095 = null;
var G__49096 = (0);
var G__49097 = (0);
seq__48589_48998 = G__49094;
chunk__48593_48999 = G__49095;
count__48594_49000 = G__49096;
i__48595_49001 = G__49097;
continue;
} else {
var G__49098 = cljs.core.next(seq__48589_49054__$1);
var G__49099 = null;
var G__49100 = (0);
var G__49101 = (0);
seq__48589_48998 = G__49098;
chunk__48593_48999 = G__49099;
count__48594_49000 = G__49100;
i__48595_49001 = G__49101;
continue;
}
} else {
var G__49102 = cljs.core.next(seq__48589_49054__$1);
var G__49103 = null;
var G__49104 = (0);
var G__49105 = (0);
seq__48589_48998 = G__49102;
chunk__48593_48999 = G__49103;
count__48594_49000 = G__49104;
i__48595_49001 = G__49105;
continue;
}
}
} else {
}
}
break;
}


var G__49106 = cljs.core.next(seq__47944__$1);
var G__49107 = null;
var G__49108 = (0);
var G__49109 = (0);
seq__47944 = G__49106;
chunk__47947 = G__49107;
count__47948 = G__49108;
i__47949 = G__49109;
continue;
} else {
var G__49110 = cljs.core.next(seq__47944__$1);
var G__49111 = null;
var G__49112 = (0);
var G__49113 = (0);
seq__47944 = G__49110;
chunk__47947 = G__49111;
count__47948 = G__49112;
i__47949 = G__49113;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48705){
var map__48706 = p__48705;
var map__48706__$1 = cljs.core.__destructure_map(map__48706);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48706__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48740){
var map__48741 = p__48740;
var map__48741__$1 = cljs.core.__destructure_map(map__48741);
var _ = map__48741__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48741__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48742,done,error){
var map__48743 = p__48742;
var map__48743__$1 = cljs.core.__destructure_map(map__48743);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48744,done,error){
var map__48745 = p__48744;
var map__48745__$1 = cljs.core.__destructure_map(map__48745);
var msg = map__48745__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48750){
var map__48751 = p__48750;
var map__48751__$1 = cljs.core.__destructure_map(map__48751);
var src = map__48751__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48751__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48756 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48756) : done.call(null,G__48756));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48768){
var map__48769 = p__48768;
var map__48769__$1 = cljs.core.__destructure_map(map__48769);
var msg__$1 = map__48769__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48769__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48770){var ex = e48770;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48772){
var map__48773 = p__48772;
var map__48773__$1 = cljs.core.__destructure_map(map__48773);
var env = map__48773__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48773__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48779){
var map__48780 = p__48779;
var map__48780__$1 = cljs.core.__destructure_map(map__48780);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48780__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48780__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48781){
var map__48782 = p__48781;
var map__48782__$1 = cljs.core.__destructure_map(map__48782);
var svc = map__48782__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48782__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
