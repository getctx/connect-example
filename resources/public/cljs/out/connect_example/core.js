// Compiled by ClojureScript 1.10.217 {}
goog.provide('connect_example.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('ajax.core');
connect_example.core.fetch_issues = (function connect_example$core$fetch_issues(handler){
return ajax.core.GET.call(null,"/events",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
connect_example.core.heading = rum.core.build_defc.call(null,(function (){
return React.createElement("h1",null,"JIRA Activity Feed");
}),null,"heading");
connect_example.core.issue = rum.core.build_defc.call(null,(function (p__29972){
var map__29973 = p__29972;
var map__29973__$1 = ((((!((map__29973 == null)))?(((((map__29973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);
var issue = map__29973__$1;
var id = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var summary = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var type = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var user = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var timestamp = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
return React.createElement("div",({"className": "issue"}),(function (){var attrs29975 = id;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29975))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id"], null)], null),attrs29975)):({"className": "id"})),((cljs.core.map_QMARK_.call(null,attrs29975))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29975)], null)));
})(),React.createElement("div",({"className": "info"}),(function (){var attrs29976 = summary;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29976))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["summary"], null)], null),attrs29976)):({"className": "summary"})),((cljs.core.map_QMARK_.call(null,attrs29976))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29976)], null)));
})(),(function (){var attrs29977 = clojure.string.capitalize.call(null,cljs.core.second.call(null,clojure.string.split.call(null,type,/_/)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29977))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["detail"], null)], null),attrs29977)):({"className": "detail"})),((cljs.core.map_QMARK_.call(null,attrs29977))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" by ",sablono.interpreter.interpret.call(null,user)," at ",sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date(timestamp)).toLocaleString())].join(''))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29977)," by ",sablono.interpreter.interpret.call(null,user)," at ",sablono.interpreter.interpret.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date(timestamp)).toLocaleString())].join(''))], null)));
})()));
}),null,"issue");
connect_example.core.issues = rum.core.build_defc.call(null,(function (is){
var attrs29978 = cljs.core.map.call(null,connect_example.core.issue,is);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29978))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["issues"], null)], null),attrs29978)):({"className": "issues"})),((cljs.core.map_QMARK_.call(null,attrs29978))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29978)], null)));
}),null,"issues");
connect_example.core.content = rum.core.build_defc.call(null,(function (data){
var attrs29979 = connect_example.core.heading.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29979))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container"], null)], null),attrs29979)):({"className": "container"})),((cljs.core.map_QMARK_.call(null,attrs29979))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(data)?sablono.interpreter.interpret.call(null,connect_example.core.issues.call(null,data)):React.createElement("div",null,"No activity found in feed."))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29979),(cljs.core.truth_(data)?sablono.interpreter.interpret.call(null,connect_example.core.issues.call(null,data)):React.createElement("div",null,"No activity found in feed."))], null)));
}),null,"content");
connect_example.core.handler = (function connect_example$core$handler(data){
return rum.core.mount.call(null,connect_example.core.content.call(null,data),document.getElementById("content"));
});
connect_example.core.fetch_issues.call(null,connect_example.core.handler);
setInterval((function (){
return connect_example.core.fetch_issues.call(null,connect_example.core.handler);
}),(5000));

//# sourceMappingURL=core.js.map?rel=1521899429045
