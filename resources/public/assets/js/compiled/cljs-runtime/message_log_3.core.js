goog.provide('message_log_3.core');
message_log_3.core.dev_setup = (function message_log_3$core$dev_setup(){
if(message_log_3.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
message_log_3.core.mount_root = (function message_log_3$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_log_3.views.main_panel], null),root_el);
});
message_log_3.core.init = (function message_log_3$core$init(){
message_log_3.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","initialize-db","message-log-3.events/initialize-db",46490873)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message-log-3.events","read-msg-txt","message-log-3.events/read-msg-txt",-113939833)], null));

message_log_3.core.dev_setup();

return message_log_3.core.mount_root();
});

//# sourceMappingURL=message_log_3.core.js.map
