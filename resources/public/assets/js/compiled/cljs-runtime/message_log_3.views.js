goog.provide('message_log_3.views');
message_log_3.views.display_messages = (function message_log_3$views$display_messages(p__35453){
var map__35454 = p__35453;
var map__35454__$1 = cljs.core.__destructure_map(map__35454);
var unix_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35454__$1,new cljs.core.Keyword(null,"unix-time","unix-time",-781363207));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35454__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),unix_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null);
});
message_log_3.views.text_input = (function message_log_3$views$text_input(id,label){
var value = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.subs","form","message-log-3.subs/form",-613443396),id], null));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35455_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","update-db","message-log-3.events/update-db",704340530),id,p1__35455_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type here"], null)], null);
});
message_log_3.views.button_send = (function message_log_3$views$button_send(id,label){
var value = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.subs","form","message-log-3.subs/form",-613443396),id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.count(cljs.core.deref(value)) === (0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","update-list","message-log-3.events/update-list",807824651),id], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","submit","message-log-3.events/submit",-200247638)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","clear-input","message-log-3.events/clear-input",-445007564)], null));
})], null),label], null);
});
message_log_3.views.home_panel = (function message_log_3$views$home_panel(){
var messages = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.subs","messages","message-log-3.subs/messages",1372608821)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_log_3.views.text_input,new cljs.core.Keyword(null,"message","message",-406056002),"message"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_log_3.views.button_send,new cljs.core.Keyword(null,"message","message",-406056002),"submit"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(message_log_3.views.display_messages,cljs.core.deref(messages))], null);
});
message_log_3.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_log_3.views.home_panel], null);
}));
message_log_3.views.main_panel = (function message_log_3$views$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.subs","active-panel","message-log-3.subs/active-panel",-817331015)], null));
return message_log_3.routes.panels.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(active_panel));
});

//# sourceMappingURL=message_log_3.views.js.map
