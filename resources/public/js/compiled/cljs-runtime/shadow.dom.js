goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46289 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46289(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46295 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46295(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45396 = coll;
var G__45397 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45396,G__45397) : shadow.dom.lazy_native_coll_seq.call(null,G__45396,G__45397));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45495 = arguments.length;
switch (G__45495) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45503 = arguments.length;
switch (G__45503) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45512 = arguments.length;
switch (G__45512) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45521 = arguments.length;
switch (G__45521) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45585 = arguments.length;
switch (G__45585) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45600 = arguments.length;
switch (G__45600) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45621){if((e45621 instanceof Object)){
var e = e45621;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45621;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45657 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45676 = null;
var count__45678 = (0);
var i__45679 = (0);
while(true){
if((i__45679 < count__45678)){
var el = chunk__45676.cljs$core$IIndexed$_nth$arity$2(null,i__45679);
var handler_46320__$1 = ((function (seq__45657,chunk__45676,count__45678,i__45679,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45657,chunk__45676,count__45678,i__45679,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46320__$1);


var G__46323 = seq__45657;
var G__46324 = chunk__45676;
var G__46325 = count__45678;
var G__46326 = (i__45679 + (1));
seq__45657 = G__46323;
chunk__45676 = G__46324;
count__45678 = G__46325;
i__45679 = G__46326;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45657);
if(temp__5753__auto__){
var seq__45657__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45657__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45657__$1);
var G__46327 = cljs.core.chunk_rest(seq__45657__$1);
var G__46328 = c__4679__auto__;
var G__46329 = cljs.core.count(c__4679__auto__);
var G__46330 = (0);
seq__45657 = G__46327;
chunk__45676 = G__46328;
count__45678 = G__46329;
i__45679 = G__46330;
continue;
} else {
var el = cljs.core.first(seq__45657__$1);
var handler_46331__$1 = ((function (seq__45657,chunk__45676,count__45678,i__45679,el,seq__45657__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45657,chunk__45676,count__45678,i__45679,el,seq__45657__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46331__$1);


var G__46338 = cljs.core.next(seq__45657__$1);
var G__46339 = null;
var G__46340 = (0);
var G__46341 = (0);
seq__45657 = G__46338;
chunk__45676 = G__46339;
count__45678 = G__46340;
i__45679 = G__46341;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45793 = arguments.length;
switch (G__45793) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45799 = cljs.core.seq(events);
var chunk__45800 = null;
var count__45801 = (0);
var i__45802 = (0);
while(true){
if((i__45802 < count__45801)){
var vec__45815 = chunk__45800.cljs$core$IIndexed$_nth$arity$2(null,i__45802);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45815,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46349 = seq__45799;
var G__46350 = chunk__45800;
var G__46351 = count__45801;
var G__46352 = (i__45802 + (1));
seq__45799 = G__46349;
chunk__45800 = G__46350;
count__45801 = G__46351;
i__45802 = G__46352;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45799);
if(temp__5753__auto__){
var seq__45799__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45799__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45799__$1);
var G__46353 = cljs.core.chunk_rest(seq__45799__$1);
var G__46354 = c__4679__auto__;
var G__46355 = cljs.core.count(c__4679__auto__);
var G__46356 = (0);
seq__45799 = G__46353;
chunk__45800 = G__46354;
count__45801 = G__46355;
i__45802 = G__46356;
continue;
} else {
var vec__45818 = cljs.core.first(seq__45799__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45818,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46357 = cljs.core.next(seq__45799__$1);
var G__46358 = null;
var G__46359 = (0);
var G__46360 = (0);
seq__45799 = G__46357;
chunk__45800 = G__46358;
count__45801 = G__46359;
i__45802 = G__46360;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45822 = cljs.core.seq(styles);
var chunk__45823 = null;
var count__45824 = (0);
var i__45825 = (0);
while(true){
if((i__45825 < count__45824)){
var vec__45833 = chunk__45823.cljs$core$IIndexed$_nth$arity$2(null,i__45825);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45833,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46361 = seq__45822;
var G__46362 = chunk__45823;
var G__46363 = count__45824;
var G__46364 = (i__45825 + (1));
seq__45822 = G__46361;
chunk__45823 = G__46362;
count__45824 = G__46363;
i__45825 = G__46364;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45822);
if(temp__5753__auto__){
var seq__45822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45822__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45822__$1);
var G__46365 = cljs.core.chunk_rest(seq__45822__$1);
var G__46366 = c__4679__auto__;
var G__46367 = cljs.core.count(c__4679__auto__);
var G__46368 = (0);
seq__45822 = G__46365;
chunk__45823 = G__46366;
count__45824 = G__46367;
i__45825 = G__46368;
continue;
} else {
var vec__45836 = cljs.core.first(seq__45822__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45836,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46369 = cljs.core.next(seq__45822__$1);
var G__46370 = null;
var G__46371 = (0);
var G__46372 = (0);
seq__45822 = G__46369;
chunk__45823 = G__46370;
count__45824 = G__46371;
i__45825 = G__46372;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45840_46374 = key;
var G__45840_46375__$1 = (((G__45840_46374 instanceof cljs.core.Keyword))?G__45840_46374.fqn:null);
switch (G__45840_46375__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46379 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_46379,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_46379,"aria-");
}
})())){
el.setAttribute(ks_46379,value);
} else {
(el[ks_46379] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45844){
var map__45845 = p__45844;
var map__45845__$1 = cljs.core.__destructure_map(map__45845);
var props = map__45845__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45845__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45846 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45849 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45849,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45849;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45851 = arguments.length;
switch (G__45851) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45852){
var vec__45853 = p__45852;
var seq__45854 = cljs.core.seq(vec__45853);
var first__45855 = cljs.core.first(seq__45854);
var seq__45854__$1 = cljs.core.next(seq__45854);
var nn = first__45855;
var first__45855__$1 = cljs.core.first(seq__45854__$1);
var seq__45854__$2 = cljs.core.next(seq__45854__$1);
var np = first__45855__$1;
var nc = seq__45854__$2;
var node = vec__45853;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45856 = nn;
var G__45857 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45856,G__45857) : create_fn.call(null,G__45856,G__45857));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45858 = nn;
var G__45859 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45858,G__45859) : create_fn.call(null,G__45858,G__45859));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45861 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45861,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45861,(1),null);
var seq__45864_46398 = cljs.core.seq(node_children);
var chunk__45865_46399 = null;
var count__45866_46400 = (0);
var i__45867_46401 = (0);
while(true){
if((i__45867_46401 < count__45866_46400)){
var child_struct_46402 = chunk__45865_46399.cljs$core$IIndexed$_nth$arity$2(null,i__45867_46401);
var children_46403 = shadow.dom.dom_node(child_struct_46402);
if(cljs.core.seq_QMARK_(children_46403)){
var seq__45883_46404 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46403));
var chunk__45885_46405 = null;
var count__45886_46406 = (0);
var i__45887_46407 = (0);
while(true){
if((i__45887_46407 < count__45886_46406)){
var child_46408 = chunk__45885_46405.cljs$core$IIndexed$_nth$arity$2(null,i__45887_46407);
if(cljs.core.truth_(child_46408)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46408);


var G__46409 = seq__45883_46404;
var G__46410 = chunk__45885_46405;
var G__46411 = count__45886_46406;
var G__46412 = (i__45887_46407 + (1));
seq__45883_46404 = G__46409;
chunk__45885_46405 = G__46410;
count__45886_46406 = G__46411;
i__45887_46407 = G__46412;
continue;
} else {
var G__46413 = seq__45883_46404;
var G__46414 = chunk__45885_46405;
var G__46415 = count__45886_46406;
var G__46416 = (i__45887_46407 + (1));
seq__45883_46404 = G__46413;
chunk__45885_46405 = G__46414;
count__45886_46406 = G__46415;
i__45887_46407 = G__46416;
continue;
}
} else {
var temp__5753__auto___46417 = cljs.core.seq(seq__45883_46404);
if(temp__5753__auto___46417){
var seq__45883_46418__$1 = temp__5753__auto___46417;
if(cljs.core.chunked_seq_QMARK_(seq__45883_46418__$1)){
var c__4679__auto___46419 = cljs.core.chunk_first(seq__45883_46418__$1);
var G__46420 = cljs.core.chunk_rest(seq__45883_46418__$1);
var G__46421 = c__4679__auto___46419;
var G__46422 = cljs.core.count(c__4679__auto___46419);
var G__46423 = (0);
seq__45883_46404 = G__46420;
chunk__45885_46405 = G__46421;
count__45886_46406 = G__46422;
i__45887_46407 = G__46423;
continue;
} else {
var child_46424 = cljs.core.first(seq__45883_46418__$1);
if(cljs.core.truth_(child_46424)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46424);


var G__46426 = cljs.core.next(seq__45883_46418__$1);
var G__46427 = null;
var G__46428 = (0);
var G__46429 = (0);
seq__45883_46404 = G__46426;
chunk__45885_46405 = G__46427;
count__45886_46406 = G__46428;
i__45887_46407 = G__46429;
continue;
} else {
var G__46430 = cljs.core.next(seq__45883_46418__$1);
var G__46431 = null;
var G__46432 = (0);
var G__46433 = (0);
seq__45883_46404 = G__46430;
chunk__45885_46405 = G__46431;
count__45886_46406 = G__46432;
i__45887_46407 = G__46433;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46403);
}


var G__46434 = seq__45864_46398;
var G__46435 = chunk__45865_46399;
var G__46436 = count__45866_46400;
var G__46437 = (i__45867_46401 + (1));
seq__45864_46398 = G__46434;
chunk__45865_46399 = G__46435;
count__45866_46400 = G__46436;
i__45867_46401 = G__46437;
continue;
} else {
var temp__5753__auto___46438 = cljs.core.seq(seq__45864_46398);
if(temp__5753__auto___46438){
var seq__45864_46442__$1 = temp__5753__auto___46438;
if(cljs.core.chunked_seq_QMARK_(seq__45864_46442__$1)){
var c__4679__auto___46443 = cljs.core.chunk_first(seq__45864_46442__$1);
var G__46444 = cljs.core.chunk_rest(seq__45864_46442__$1);
var G__46445 = c__4679__auto___46443;
var G__46446 = cljs.core.count(c__4679__auto___46443);
var G__46447 = (0);
seq__45864_46398 = G__46444;
chunk__45865_46399 = G__46445;
count__45866_46400 = G__46446;
i__45867_46401 = G__46447;
continue;
} else {
var child_struct_46448 = cljs.core.first(seq__45864_46442__$1);
var children_46449 = shadow.dom.dom_node(child_struct_46448);
if(cljs.core.seq_QMARK_(children_46449)){
var seq__45894_46450 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46449));
var chunk__45896_46451 = null;
var count__45897_46452 = (0);
var i__45898_46453 = (0);
while(true){
if((i__45898_46453 < count__45897_46452)){
var child_46457 = chunk__45896_46451.cljs$core$IIndexed$_nth$arity$2(null,i__45898_46453);
if(cljs.core.truth_(child_46457)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46457);


var G__46458 = seq__45894_46450;
var G__46459 = chunk__45896_46451;
var G__46460 = count__45897_46452;
var G__46461 = (i__45898_46453 + (1));
seq__45894_46450 = G__46458;
chunk__45896_46451 = G__46459;
count__45897_46452 = G__46460;
i__45898_46453 = G__46461;
continue;
} else {
var G__46462 = seq__45894_46450;
var G__46463 = chunk__45896_46451;
var G__46464 = count__45897_46452;
var G__46465 = (i__45898_46453 + (1));
seq__45894_46450 = G__46462;
chunk__45896_46451 = G__46463;
count__45897_46452 = G__46464;
i__45898_46453 = G__46465;
continue;
}
} else {
var temp__5753__auto___46466__$1 = cljs.core.seq(seq__45894_46450);
if(temp__5753__auto___46466__$1){
var seq__45894_46467__$1 = temp__5753__auto___46466__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45894_46467__$1)){
var c__4679__auto___46468 = cljs.core.chunk_first(seq__45894_46467__$1);
var G__46469 = cljs.core.chunk_rest(seq__45894_46467__$1);
var G__46470 = c__4679__auto___46468;
var G__46471 = cljs.core.count(c__4679__auto___46468);
var G__46472 = (0);
seq__45894_46450 = G__46469;
chunk__45896_46451 = G__46470;
count__45897_46452 = G__46471;
i__45898_46453 = G__46472;
continue;
} else {
var child_46473 = cljs.core.first(seq__45894_46467__$1);
if(cljs.core.truth_(child_46473)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46473);


var G__46474 = cljs.core.next(seq__45894_46467__$1);
var G__46475 = null;
var G__46476 = (0);
var G__46477 = (0);
seq__45894_46450 = G__46474;
chunk__45896_46451 = G__46475;
count__45897_46452 = G__46476;
i__45898_46453 = G__46477;
continue;
} else {
var G__46478 = cljs.core.next(seq__45894_46467__$1);
var G__46479 = null;
var G__46480 = (0);
var G__46481 = (0);
seq__45894_46450 = G__46478;
chunk__45896_46451 = G__46479;
count__45897_46452 = G__46480;
i__45898_46453 = G__46481;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46449);
}


var G__46482 = cljs.core.next(seq__45864_46442__$1);
var G__46483 = null;
var G__46484 = (0);
var G__46485 = (0);
seq__45864_46398 = G__46482;
chunk__45865_46399 = G__46483;
count__45866_46400 = G__46484;
i__45867_46401 = G__46485;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45908 = cljs.core.seq(node);
var chunk__45909 = null;
var count__45910 = (0);
var i__45911 = (0);
while(true){
if((i__45911 < count__45910)){
var n = chunk__45909.cljs$core$IIndexed$_nth$arity$2(null,i__45911);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46486 = seq__45908;
var G__46487 = chunk__45909;
var G__46488 = count__45910;
var G__46489 = (i__45911 + (1));
seq__45908 = G__46486;
chunk__45909 = G__46487;
count__45910 = G__46488;
i__45911 = G__46489;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45908);
if(temp__5753__auto__){
var seq__45908__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45908__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45908__$1);
var G__46490 = cljs.core.chunk_rest(seq__45908__$1);
var G__46491 = c__4679__auto__;
var G__46492 = cljs.core.count(c__4679__auto__);
var G__46493 = (0);
seq__45908 = G__46490;
chunk__45909 = G__46491;
count__45910 = G__46492;
i__45911 = G__46493;
continue;
} else {
var n = cljs.core.first(seq__45908__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46494 = cljs.core.next(seq__45908__$1);
var G__46495 = null;
var G__46496 = (0);
var G__46497 = (0);
seq__45908 = G__46494;
chunk__45909 = G__46495;
count__45910 = G__46496;
i__45911 = G__46497;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45913 = arguments.length;
switch (G__45913) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45915 = arguments.length;
switch (G__45915) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45919 = arguments.length;
switch (G__45919) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46501 = arguments.length;
var i__4865__auto___46502 = (0);
while(true){
if((i__4865__auto___46502 < len__4864__auto___46501)){
args__4870__auto__.push((arguments[i__4865__auto___46502]));

var G__46505 = (i__4865__auto___46502 + (1));
i__4865__auto___46502 = G__46505;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45928_46512 = cljs.core.seq(nodes);
var chunk__45929_46513 = null;
var count__45930_46514 = (0);
var i__45931_46515 = (0);
while(true){
if((i__45931_46515 < count__45930_46514)){
var node_46516 = chunk__45929_46513.cljs$core$IIndexed$_nth$arity$2(null,i__45931_46515);
fragment.appendChild(shadow.dom._to_dom(node_46516));


var G__46517 = seq__45928_46512;
var G__46518 = chunk__45929_46513;
var G__46519 = count__45930_46514;
var G__46520 = (i__45931_46515 + (1));
seq__45928_46512 = G__46517;
chunk__45929_46513 = G__46518;
count__45930_46514 = G__46519;
i__45931_46515 = G__46520;
continue;
} else {
var temp__5753__auto___46522 = cljs.core.seq(seq__45928_46512);
if(temp__5753__auto___46522){
var seq__45928_46523__$1 = temp__5753__auto___46522;
if(cljs.core.chunked_seq_QMARK_(seq__45928_46523__$1)){
var c__4679__auto___46524 = cljs.core.chunk_first(seq__45928_46523__$1);
var G__46525 = cljs.core.chunk_rest(seq__45928_46523__$1);
var G__46526 = c__4679__auto___46524;
var G__46527 = cljs.core.count(c__4679__auto___46524);
var G__46528 = (0);
seq__45928_46512 = G__46525;
chunk__45929_46513 = G__46526;
count__45930_46514 = G__46527;
i__45931_46515 = G__46528;
continue;
} else {
var node_46531 = cljs.core.first(seq__45928_46523__$1);
fragment.appendChild(shadow.dom._to_dom(node_46531));


var G__46532 = cljs.core.next(seq__45928_46523__$1);
var G__46533 = null;
var G__46534 = (0);
var G__46535 = (0);
seq__45928_46512 = G__46532;
chunk__45929_46513 = G__46533;
count__45930_46514 = G__46534;
i__45931_46515 = G__46535;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45925){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45925));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45935_46539 = cljs.core.seq(scripts);
var chunk__45936_46540 = null;
var count__45937_46541 = (0);
var i__45938_46542 = (0);
while(true){
if((i__45938_46542 < count__45937_46541)){
var vec__45950_46544 = chunk__45936_46540.cljs$core$IIndexed$_nth$arity$2(null,i__45938_46542);
var script_tag_46545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45950_46544,(0),null);
var script_body_46546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45950_46544,(1),null);
eval(script_body_46546);


var G__46547 = seq__45935_46539;
var G__46548 = chunk__45936_46540;
var G__46549 = count__45937_46541;
var G__46550 = (i__45938_46542 + (1));
seq__45935_46539 = G__46547;
chunk__45936_46540 = G__46548;
count__45937_46541 = G__46549;
i__45938_46542 = G__46550;
continue;
} else {
var temp__5753__auto___46553 = cljs.core.seq(seq__45935_46539);
if(temp__5753__auto___46553){
var seq__45935_46554__$1 = temp__5753__auto___46553;
if(cljs.core.chunked_seq_QMARK_(seq__45935_46554__$1)){
var c__4679__auto___46555 = cljs.core.chunk_first(seq__45935_46554__$1);
var G__46556 = cljs.core.chunk_rest(seq__45935_46554__$1);
var G__46557 = c__4679__auto___46555;
var G__46558 = cljs.core.count(c__4679__auto___46555);
var G__46559 = (0);
seq__45935_46539 = G__46556;
chunk__45936_46540 = G__46557;
count__45937_46541 = G__46558;
i__45938_46542 = G__46559;
continue;
} else {
var vec__45960_46561 = cljs.core.first(seq__45935_46554__$1);
var script_tag_46562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960_46561,(0),null);
var script_body_46563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960_46561,(1),null);
eval(script_body_46563);


var G__46564 = cljs.core.next(seq__45935_46554__$1);
var G__46565 = null;
var G__46566 = (0);
var G__46567 = (0);
seq__45935_46539 = G__46564;
chunk__45936_46540 = G__46565;
count__45937_46541 = G__46566;
i__45938_46542 = G__46567;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45965){
var vec__45968 = p__45965;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45968,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45968,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45973 = arguments.length;
switch (G__45973) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45978 = cljs.core.seq(style_keys);
var chunk__45979 = null;
var count__45980 = (0);
var i__45981 = (0);
while(true){
if((i__45981 < count__45980)){
var it = chunk__45979.cljs$core$IIndexed$_nth$arity$2(null,i__45981);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46569 = seq__45978;
var G__46575 = chunk__45979;
var G__46576 = count__45980;
var G__46577 = (i__45981 + (1));
seq__45978 = G__46569;
chunk__45979 = G__46575;
count__45980 = G__46576;
i__45981 = G__46577;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45978);
if(temp__5753__auto__){
var seq__45978__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45978__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45978__$1);
var G__46579 = cljs.core.chunk_rest(seq__45978__$1);
var G__46580 = c__4679__auto__;
var G__46581 = cljs.core.count(c__4679__auto__);
var G__46582 = (0);
seq__45978 = G__46579;
chunk__45979 = G__46580;
count__45980 = G__46581;
i__45981 = G__46582;
continue;
} else {
var it = cljs.core.first(seq__45978__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46583 = cljs.core.next(seq__45978__$1);
var G__46584 = null;
var G__46585 = (0);
var G__46586 = (0);
seq__45978 = G__46583;
chunk__45979 = G__46584;
count__45980 = G__46585;
i__45981 = G__46586;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45983,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45995 = k45983;
var G__45995__$1 = (((G__45995 instanceof cljs.core.Keyword))?G__45995.fqn:null);
switch (G__45995__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45983,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45996){
var vec__45997 = p__45996;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45997,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45997,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45982){
var self__ = this;
var G__45982__$1 = this;
return (new cljs.core.RecordIter((0),G__45982__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45984,other45985){
var self__ = this;
var this45984__$1 = this;
return (((!((other45985 == null)))) && ((((this45984__$1.constructor === other45985.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45984__$1.x,other45985.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45984__$1.y,other45985.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45984__$1.__extmap,other45985.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45983){
var self__ = this;
var this__4509__auto____$1 = this;
var G__46005 = k45983;
var G__46005__$1 = (((G__46005 instanceof cljs.core.Keyword))?G__46005.fqn:null);
switch (G__46005__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45983);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45982){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__46008 = cljs.core.keyword_identical_QMARK_;
var expr__46009 = k__4511__auto__;
if(cljs.core.truth_((pred__46008.cljs$core$IFn$_invoke$arity$2 ? pred__46008.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46009) : pred__46008.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46009)))){
return (new shadow.dom.Coordinate(G__45982,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46008.cljs$core$IFn$_invoke$arity$2 ? pred__46008.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46009) : pred__46008.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46009)))){
return (new shadow.dom.Coordinate(self__.x,G__45982,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45982),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45982){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45982,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45990){
var extmap__4542__auto__ = (function (){var G__46019 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45990,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45990)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46019);
} else {
return G__46019;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45990),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45990),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k46025,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__46037 = k46025;
var G__46037__$1 = (((G__46037 instanceof cljs.core.Keyword))?G__46037.fqn:null);
switch (G__46037__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46025,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__46042){
var vec__46045 = p__46042;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46045,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46045,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46024){
var self__ = this;
var G__46024__$1 = this;
return (new cljs.core.RecordIter((0),G__46024__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46026,other46027){
var self__ = this;
var this46026__$1 = this;
return (((!((other46027 == null)))) && ((((this46026__$1.constructor === other46027.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46026__$1.w,other46027.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46026__$1.h,other46027.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46026__$1.__extmap,other46027.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k46025){
var self__ = this;
var this__4509__auto____$1 = this;
var G__46060 = k46025;
var G__46060__$1 = (((G__46060 instanceof cljs.core.Keyword))?G__46060.fqn:null);
switch (G__46060__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46025);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__46024){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__46061 = cljs.core.keyword_identical_QMARK_;
var expr__46062 = k__4511__auto__;
if(cljs.core.truth_((pred__46061.cljs$core$IFn$_invoke$arity$2 ? pred__46061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46062) : pred__46061.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46062)))){
return (new shadow.dom.Size(G__46024,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46061.cljs$core$IFn$_invoke$arity$2 ? pred__46061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46062) : pred__46061.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46062)))){
return (new shadow.dom.Size(self__.w,G__46024,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__46024),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__46024){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46024,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46031){
var extmap__4542__auto__ = (function (){var G__46081 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46031,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46031)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46081);
} else {
return G__46081;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46031),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46031),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__46612 = (i + (1));
var G__46613 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46612;
ret = G__46613;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46105){
var vec__46106 = p__46105;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46106,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46116 = arguments.length;
switch (G__46116) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46618 = ps;
var G__46619 = (i + (1));
el__$1 = G__46618;
i = G__46619;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46127 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46127,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46127,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46127,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46130_46624 = cljs.core.seq(props);
var chunk__46131_46625 = null;
var count__46132_46626 = (0);
var i__46133_46627 = (0);
while(true){
if((i__46133_46627 < count__46132_46626)){
var vec__46141_46628 = chunk__46131_46625.cljs$core$IIndexed$_nth$arity$2(null,i__46133_46627);
var k_46629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46141_46628,(0),null);
var v_46630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46141_46628,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_46629);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46629),v_46630);


var G__46631 = seq__46130_46624;
var G__46632 = chunk__46131_46625;
var G__46633 = count__46132_46626;
var G__46634 = (i__46133_46627 + (1));
seq__46130_46624 = G__46631;
chunk__46131_46625 = G__46632;
count__46132_46626 = G__46633;
i__46133_46627 = G__46634;
continue;
} else {
var temp__5753__auto___46635 = cljs.core.seq(seq__46130_46624);
if(temp__5753__auto___46635){
var seq__46130_46639__$1 = temp__5753__auto___46635;
if(cljs.core.chunked_seq_QMARK_(seq__46130_46639__$1)){
var c__4679__auto___46640 = cljs.core.chunk_first(seq__46130_46639__$1);
var G__46641 = cljs.core.chunk_rest(seq__46130_46639__$1);
var G__46642 = c__4679__auto___46640;
var G__46643 = cljs.core.count(c__4679__auto___46640);
var G__46644 = (0);
seq__46130_46624 = G__46641;
chunk__46131_46625 = G__46642;
count__46132_46626 = G__46643;
i__46133_46627 = G__46644;
continue;
} else {
var vec__46144_46645 = cljs.core.first(seq__46130_46639__$1);
var k_46646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46144_46645,(0),null);
var v_46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46144_46645,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_46646);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46646),v_46647);


var G__46648 = cljs.core.next(seq__46130_46639__$1);
var G__46649 = null;
var G__46650 = (0);
var G__46651 = (0);
seq__46130_46624 = G__46648;
chunk__46131_46625 = G__46649;
count__46132_46626 = G__46650;
i__46133_46627 = G__46651;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46148 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46148,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46148,(1),null);
var seq__46151_46656 = cljs.core.seq(node_children);
var chunk__46153_46657 = null;
var count__46154_46658 = (0);
var i__46155_46659 = (0);
while(true){
if((i__46155_46659 < count__46154_46658)){
var child_struct_46660 = chunk__46153_46657.cljs$core$IIndexed$_nth$arity$2(null,i__46155_46659);
if((!((child_struct_46660 == null)))){
if(typeof child_struct_46660 === 'string'){
var text_46661 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46661),child_struct_46660].join(''));
} else {
var children_46662 = shadow.dom.svg_node(child_struct_46660);
if(cljs.core.seq_QMARK_(children_46662)){
var seq__46177_46663 = cljs.core.seq(children_46662);
var chunk__46179_46664 = null;
var count__46180_46665 = (0);
var i__46181_46666 = (0);
while(true){
if((i__46181_46666 < count__46180_46665)){
var child_46667 = chunk__46179_46664.cljs$core$IIndexed$_nth$arity$2(null,i__46181_46666);
if(cljs.core.truth_(child_46667)){
node.appendChild(child_46667);


var G__46668 = seq__46177_46663;
var G__46669 = chunk__46179_46664;
var G__46670 = count__46180_46665;
var G__46671 = (i__46181_46666 + (1));
seq__46177_46663 = G__46668;
chunk__46179_46664 = G__46669;
count__46180_46665 = G__46670;
i__46181_46666 = G__46671;
continue;
} else {
var G__46672 = seq__46177_46663;
var G__46673 = chunk__46179_46664;
var G__46674 = count__46180_46665;
var G__46675 = (i__46181_46666 + (1));
seq__46177_46663 = G__46672;
chunk__46179_46664 = G__46673;
count__46180_46665 = G__46674;
i__46181_46666 = G__46675;
continue;
}
} else {
var temp__5753__auto___46676 = cljs.core.seq(seq__46177_46663);
if(temp__5753__auto___46676){
var seq__46177_46677__$1 = temp__5753__auto___46676;
if(cljs.core.chunked_seq_QMARK_(seq__46177_46677__$1)){
var c__4679__auto___46678 = cljs.core.chunk_first(seq__46177_46677__$1);
var G__46679 = cljs.core.chunk_rest(seq__46177_46677__$1);
var G__46680 = c__4679__auto___46678;
var G__46681 = cljs.core.count(c__4679__auto___46678);
var G__46682 = (0);
seq__46177_46663 = G__46679;
chunk__46179_46664 = G__46680;
count__46180_46665 = G__46681;
i__46181_46666 = G__46682;
continue;
} else {
var child_46683 = cljs.core.first(seq__46177_46677__$1);
if(cljs.core.truth_(child_46683)){
node.appendChild(child_46683);


var G__46684 = cljs.core.next(seq__46177_46677__$1);
var G__46685 = null;
var G__46686 = (0);
var G__46687 = (0);
seq__46177_46663 = G__46684;
chunk__46179_46664 = G__46685;
count__46180_46665 = G__46686;
i__46181_46666 = G__46687;
continue;
} else {
var G__46688 = cljs.core.next(seq__46177_46677__$1);
var G__46689 = null;
var G__46690 = (0);
var G__46691 = (0);
seq__46177_46663 = G__46688;
chunk__46179_46664 = G__46689;
count__46180_46665 = G__46690;
i__46181_46666 = G__46691;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46662);
}
}


var G__46692 = seq__46151_46656;
var G__46693 = chunk__46153_46657;
var G__46694 = count__46154_46658;
var G__46695 = (i__46155_46659 + (1));
seq__46151_46656 = G__46692;
chunk__46153_46657 = G__46693;
count__46154_46658 = G__46694;
i__46155_46659 = G__46695;
continue;
} else {
var G__46696 = seq__46151_46656;
var G__46697 = chunk__46153_46657;
var G__46698 = count__46154_46658;
var G__46699 = (i__46155_46659 + (1));
seq__46151_46656 = G__46696;
chunk__46153_46657 = G__46697;
count__46154_46658 = G__46698;
i__46155_46659 = G__46699;
continue;
}
} else {
var temp__5753__auto___46700 = cljs.core.seq(seq__46151_46656);
if(temp__5753__auto___46700){
var seq__46151_46701__$1 = temp__5753__auto___46700;
if(cljs.core.chunked_seq_QMARK_(seq__46151_46701__$1)){
var c__4679__auto___46702 = cljs.core.chunk_first(seq__46151_46701__$1);
var G__46703 = cljs.core.chunk_rest(seq__46151_46701__$1);
var G__46704 = c__4679__auto___46702;
var G__46705 = cljs.core.count(c__4679__auto___46702);
var G__46706 = (0);
seq__46151_46656 = G__46703;
chunk__46153_46657 = G__46704;
count__46154_46658 = G__46705;
i__46155_46659 = G__46706;
continue;
} else {
var child_struct_46707 = cljs.core.first(seq__46151_46701__$1);
if((!((child_struct_46707 == null)))){
if(typeof child_struct_46707 === 'string'){
var text_46708 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46708),child_struct_46707].join(''));
} else {
var children_46709 = shadow.dom.svg_node(child_struct_46707);
if(cljs.core.seq_QMARK_(children_46709)){
var seq__46187_46711 = cljs.core.seq(children_46709);
var chunk__46189_46712 = null;
var count__46190_46713 = (0);
var i__46191_46714 = (0);
while(true){
if((i__46191_46714 < count__46190_46713)){
var child_46718 = chunk__46189_46712.cljs$core$IIndexed$_nth$arity$2(null,i__46191_46714);
if(cljs.core.truth_(child_46718)){
node.appendChild(child_46718);


var G__46719 = seq__46187_46711;
var G__46720 = chunk__46189_46712;
var G__46721 = count__46190_46713;
var G__46722 = (i__46191_46714 + (1));
seq__46187_46711 = G__46719;
chunk__46189_46712 = G__46720;
count__46190_46713 = G__46721;
i__46191_46714 = G__46722;
continue;
} else {
var G__46723 = seq__46187_46711;
var G__46724 = chunk__46189_46712;
var G__46725 = count__46190_46713;
var G__46726 = (i__46191_46714 + (1));
seq__46187_46711 = G__46723;
chunk__46189_46712 = G__46724;
count__46190_46713 = G__46725;
i__46191_46714 = G__46726;
continue;
}
} else {
var temp__5753__auto___46727__$1 = cljs.core.seq(seq__46187_46711);
if(temp__5753__auto___46727__$1){
var seq__46187_46728__$1 = temp__5753__auto___46727__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46187_46728__$1)){
var c__4679__auto___46729 = cljs.core.chunk_first(seq__46187_46728__$1);
var G__46730 = cljs.core.chunk_rest(seq__46187_46728__$1);
var G__46731 = c__4679__auto___46729;
var G__46732 = cljs.core.count(c__4679__auto___46729);
var G__46733 = (0);
seq__46187_46711 = G__46730;
chunk__46189_46712 = G__46731;
count__46190_46713 = G__46732;
i__46191_46714 = G__46733;
continue;
} else {
var child_46734 = cljs.core.first(seq__46187_46728__$1);
if(cljs.core.truth_(child_46734)){
node.appendChild(child_46734);


var G__46735 = cljs.core.next(seq__46187_46728__$1);
var G__46736 = null;
var G__46737 = (0);
var G__46738 = (0);
seq__46187_46711 = G__46735;
chunk__46189_46712 = G__46736;
count__46190_46713 = G__46737;
i__46191_46714 = G__46738;
continue;
} else {
var G__46739 = cljs.core.next(seq__46187_46728__$1);
var G__46740 = null;
var G__46741 = (0);
var G__46742 = (0);
seq__46187_46711 = G__46739;
chunk__46189_46712 = G__46740;
count__46190_46713 = G__46741;
i__46191_46714 = G__46742;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46709);
}
}


var G__46743 = cljs.core.next(seq__46151_46701__$1);
var G__46744 = null;
var G__46745 = (0);
var G__46746 = (0);
seq__46151_46656 = G__46743;
chunk__46153_46657 = G__46744;
count__46154_46658 = G__46745;
i__46155_46659 = G__46746;
continue;
} else {
var G__46747 = cljs.core.next(seq__46151_46701__$1);
var G__46748 = null;
var G__46749 = (0);
var G__46750 = (0);
seq__46151_46656 = G__46747;
chunk__46153_46657 = G__46748;
count__46154_46658 = G__46749;
i__46155_46659 = G__46750;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46751 = arguments.length;
var i__4865__auto___46752 = (0);
while(true){
if((i__4865__auto___46752 < len__4864__auto___46751)){
args__4870__auto__.push((arguments[i__4865__auto___46752]));

var G__46753 = (i__4865__auto___46752 + (1));
i__4865__auto___46752 = G__46753;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46210){
var G__46211 = cljs.core.first(seq46210);
var seq46210__$1 = cljs.core.next(seq46210);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46211,seq46210__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46214 = arguments.length;
switch (G__46214) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__42883__auto___46765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42884__auto__ = (function (){var switch__42660__auto__ = (function (state_46232){
var state_val_46233 = (state_46232[(1)]);
if((state_val_46233 === (1))){
var state_46232__$1 = state_46232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46232__$1,(2),once_or_cleanup);
} else {
if((state_val_46233 === (2))){
var inst_46229 = (state_46232[(2)]);
var inst_46230 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46232__$1 = (function (){var statearr_46234 = state_46232;
(statearr_46234[(7)] = inst_46229);

return statearr_46234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46232__$1,inst_46230);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42661__auto__ = null;
var shadow$dom$state_machine__42661__auto____0 = (function (){
var statearr_46239 = [null,null,null,null,null,null,null,null];
(statearr_46239[(0)] = shadow$dom$state_machine__42661__auto__);

(statearr_46239[(1)] = (1));

return statearr_46239;
});
var shadow$dom$state_machine__42661__auto____1 = (function (state_46232){
while(true){
var ret_value__42662__auto__ = (function (){try{while(true){
var result__42663__auto__ = switch__42660__auto__(state_46232);
if(cljs.core.keyword_identical_QMARK_(result__42663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42663__auto__;
}
break;
}
}catch (e46251){var ex__42664__auto__ = e46251;
var statearr_46252_46822 = state_46232;
(statearr_46252_46822[(2)] = ex__42664__auto__);


if(cljs.core.seq((state_46232[(4)]))){
var statearr_46255_46824 = state_46232;
(statearr_46255_46824[(1)] = cljs.core.first((state_46232[(4)])));

} else {
throw ex__42664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46825 = state_46232;
state_46232 = G__46825;
continue;
} else {
return ret_value__42662__auto__;
}
break;
}
});
shadow$dom$state_machine__42661__auto__ = function(state_46232){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42661__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42661__auto____1.call(this,state_46232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42661__auto____0;
shadow$dom$state_machine__42661__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42661__auto____1;
return shadow$dom$state_machine__42661__auto__;
})()
})();
var state__42885__auto__ = (function (){var statearr_46259 = f__42884__auto__();
(statearr_46259[(6)] = c__42883__auto___46765);

return statearr_46259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42885__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
