goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32335 = arguments.length;
var i__4865__auto___32336 = (0);
while(true){
if((i__4865__auto___32336 < len__4864__auto___32335)){
args__4870__auto__.push((arguments[i__4865__auto___32336]));

var G__32337 = (i__4865__auto___32336 + (1));
i__4865__auto___32336 = G__32337;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.format.cljs$lang$applyTo = (function (seq32085){
var G__32086 = cljs.core.first(seq32085);
var seq32085__$1 = cljs.core.next(seq32085);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32086,seq32085__$1);
}));


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString = function(){};

var day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$dyn_32338 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$dyn_32338(this$);
}
});

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString["_"] = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["_"] = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.ToString["null"] = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$as_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32339 = arguments.length;
var i__4865__auto___32340 = (0);
while(true){
if((i__4865__auto___32340 < len__4864__auto___32339)){
args__4870__auto__.push((arguments[i__4865__auto___32340]));

var G__32341 = (i__4865__auto___32340 + (1));
i__4865__auto___32340 = G__32341;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str,args));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.as_str.cljs$lang$applyTo = (function (seq32089){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32089));
}));

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$string__GT_int(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32342 = arguments.length;
var i__4865__auto___32343 = (0);
while(true){
if((i__4865__auto___32343 < len__4864__auto___32342)){
args__4870__auto__.push((arguments[i__4865__auto___32343]));

var G__32344 = (i__4865__auto___32343 + (1));
i__4865__auto___32343 = G__32344;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__32109){
var vec__32110 = p__32109;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32110,(0),null);
var radix__$1 = (function (){var or__4253__auto__ = radix;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq32097){
var G__32098 = cljs.core.first(seq32097);
var seq32097__$1 = cljs.core.next(seq32097);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32098,seq32097__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$int__GT_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32345 = arguments.length;
var i__4865__auto___32346 = (0);
while(true){
if((i__4865__auto___32346 < len__4864__auto___32345)){
args__4870__auto__.push((arguments[i__4865__auto___32346]));

var G__32347 = (i__4865__auto___32346 + (1));
i__4865__auto___32346 = G__32347;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__32141){
var vec__32142 = p__32141;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32142,(0),null);
var radix__$1 = (function (){var or__4253__auto__ = radix;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq32135){
var G__32136 = cljs.core.first(seq32135);
var seq32135__$1 = cljs.core.next(seq32135);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32136,seq32135__$1);
}));

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join(xs){
var ys = (function (){var iter__4652__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__32156(s__32157){
return (new cljs.core.LazySeq(null,(function (){
var s__32157__$1 = s__32157;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32157__$1);
if(temp__5753__auto__){
var s__32157__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32157__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__32157__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__32159 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__32158 = (0);
while(true){
if((i__32158 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__32158);
cljs.core.chunk_append(b__32159,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(x)));

var G__32352 = (i__32158 + (1));
i__32158 = G__32352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32159),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__32156(cljs.core.chunk_rest(s__32157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32159),null);
}
} else {
var x = cljs.core.first(s__32157__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(x)),day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$comma_join_$_iter__32156(cljs.core.rest(s__32157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_supports_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_supports_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix(p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4339__auto__ = a;
var y__4340__auto__ = b;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var top = (function (){var x__4336__auto__ = a;
var y__4337__auto__ = b;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$clip(a,b,n){
var vec__32197 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32197,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32197,(1),null);
var x__4336__auto__ = a__$1;
var y__4337__auto__ = (function (){var x__4339__auto__ = b__$1;
var y__4340__auto__ = n;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$average(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32353 = arguments.length;
var i__4865__auto___32354 = (0);
while(true){
if((i__4865__auto___32354 < len__4864__auto___32353)){
args__4870__auto__.push((arguments[i__4865__auto___32354]));

var G__32355 = (i__4865__auto___32354 + (1));
i__4865__auto___32354 = G__32355;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.average.cljs$lang$applyTo = (function (seq32211){
var G__32212 = cljs.core.first(seq32211);
var seq32211__$1 = cljs.core.next(seq32211);
var G__32306 = cljs.core.first(seq32211__$1);
var seq32211__$2 = cljs.core.next(seq32211__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32212,G__32306,seq32211__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$cartesian_product(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32356 = arguments.length;
var i__4865__auto___32357 = (0);
while(true){
if((i__4865__auto___32357 < len__4864__auto___32356)){
args__4870__auto__.push((arguments[i__4865__auto___32357]));

var G__32358 = (i__4865__auto___32357 + (1));
i__4865__auto___32357 = G__32358;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5751__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5751__auto__){
var rst = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__32359 = (i - (1));
var G__32360 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__32359;
v_seqs__$2 = G__32360;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq32328){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32328));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util.js.map
