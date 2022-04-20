goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36606 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36607 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36607);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__36615 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36616 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36616);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36615);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36606);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36618 = arguments.length;
switch (G__36618) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__36627 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36627,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__36652_36709 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__36653_36710 = null;
var count__36654_36711 = (0);
var i__36655_36712 = (0);
while(true){
if((i__36655_36712 < count__36654_36711)){
var vec__36679_36713 = chunk__36653_36710.cljs$core$IIndexed$_nth$arity$2(null,i__36655_36712);
var container_36714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36679_36713,(0),null);
var comp_36715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36679_36713,(1),null);
reagent.dom.re_render_component(comp_36715,container_36714);


var G__36716 = seq__36652_36709;
var G__36717 = chunk__36653_36710;
var G__36718 = count__36654_36711;
var G__36719 = (i__36655_36712 + (1));
seq__36652_36709 = G__36716;
chunk__36653_36710 = G__36717;
count__36654_36711 = G__36718;
i__36655_36712 = G__36719;
continue;
} else {
var temp__5753__auto___36721 = cljs.core.seq(seq__36652_36709);
if(temp__5753__auto___36721){
var seq__36652_36722__$1 = temp__5753__auto___36721;
if(cljs.core.chunked_seq_QMARK_(seq__36652_36722__$1)){
var c__4679__auto___36723 = cljs.core.chunk_first(seq__36652_36722__$1);
var G__36724 = cljs.core.chunk_rest(seq__36652_36722__$1);
var G__36725 = c__4679__auto___36723;
var G__36726 = cljs.core.count(c__4679__auto___36723);
var G__36727 = (0);
seq__36652_36709 = G__36724;
chunk__36653_36710 = G__36725;
count__36654_36711 = G__36726;
i__36655_36712 = G__36727;
continue;
} else {
var vec__36686_36731 = cljs.core.first(seq__36652_36722__$1);
var container_36732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36686_36731,(0),null);
var comp_36733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36686_36731,(1),null);
reagent.dom.re_render_component(comp_36733,container_36732);


var G__36734 = cljs.core.next(seq__36652_36722__$1);
var G__36735 = null;
var G__36736 = (0);
var G__36737 = (0);
seq__36652_36709 = G__36734;
chunk__36653_36710 = G__36735;
count__36654_36711 = G__36736;
i__36655_36712 = G__36737;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
