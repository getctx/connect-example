// Compiled by ClojureScript 1.10.217 {}
goog.provide('ajax.protocols');
goog.require('cljs.core');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null))))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$,request,handler);
} else {
var m__4211__auto____$1 = (ajax.protocols._js_ajax_request["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$,request,handler);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null))))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._abort[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$);
} else {
var m__4211__auto____$1 = (ajax.protocols._abort["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null))))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._status[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$);
} else {
var m__4211__auto____$1 = (ajax.protocols._status["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null))))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._status_text[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$);
} else {
var m__4211__auto____$1 = (ajax.protocols._status_text["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns all headers as a map.
 */
ajax.protocols._get_all_headers = (function ajax$protocols$_get_all_headers(this$){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 == null))))){
return this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1(this$);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._get_all_headers[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$);
} else {
var m__4211__auto____$1 = (ajax.protocols._get_all_headers["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-all-headers",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null))))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._body[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$);
} else {
var m__4211__auto____$1 = (ajax.protocols._body["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null))))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$,header);
} else {
var m__4211__auto____$1 = (ajax.protocols._get_response_header["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if(((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null))))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$);
} else {
var m__4211__auto____$1 = (ajax.protocols._was_aborted["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if(((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null))))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._process_request[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$,request);
} else {
var m__4211__auto____$1 = (ajax.protocols._process_request["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$,request);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-request",this$);
}
}
}
});

/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if(((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null))))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__4210__auto__ = (((this$ == null))?null:this$);
var m__4211__auto__ = (ajax.protocols._process_response[goog.typeOf(x__4210__auto__)]);
if(!((m__4211__auto__ == null))){
return m__4211__auto__.call(null,this$,response);
} else {
var m__4211__auto____$1 = (ajax.protocols._process_response["_"]);
if(!((m__4211__auto____$1 == null))){
return m__4211__auto____$1.call(null,this$,response);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-response",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.AjaxResponse}
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
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4171__auto__,k__4172__auto__){
var self__ = this;
var this__4171__auto____$1 = this;
return this__4171__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4172__auto__,null);
});

ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4173__auto__,k31387,else__4174__auto__){
var self__ = this;
var this__4173__auto____$1 = this;
var G__31391 = k31387;
var G__31391__$1 = (((G__31391 instanceof cljs.core.Keyword))?G__31391.fqn:null);
switch (G__31391__$1) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31387,else__4174__auto__);

}
});

ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4185__auto__,writer__4186__auto__,opts__4187__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
var pr_pair__4188__auto__ = ((function (this__4185__auto____$1){
return (function (keyval__4189__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4186__auto__,cljs.core.pr_writer,""," ","",opts__4187__auto__,keyval__4189__auto__);
});})(this__4185__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4186__auto__,pr_pair__4188__auto__,"#ajax.protocols.Response{",", ","}",opts__4187__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31386){
var self__ = this;
var G__31386__$1 = this;
return (new cljs.core.RecordIter((0),G__31386__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4169__auto__){
var self__ = this;
var this__4169__auto____$1 = this;
return self__.__meta;
});

ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4166__auto__){
var self__ = this;
var this__4166__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4175__auto__){
var self__ = this;
var this__4175__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
var h__4029__auto__ = self__.__hash;
if(!((h__4029__auto__ == null))){
return h__4029__auto__;
} else {
var h__4029__auto____$1 = ((function (h__4029__auto__,this__4167__auto____$1){
return (function (coll__4168__auto__){
return (-473222333 ^ cljs.core.hash_unordered_coll.call(null,coll__4168__auto__));
});})(h__4029__auto__,this__4167__auto____$1))
.call(null,this__4167__auto____$1);
self__.__hash = h__4029__auto____$1;

return h__4029__auto____$1;
}
});

ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31388,other31389){
var self__ = this;
var this31388__$1 = this;
return ((!((other31389 == null))) && ((this31388__$1.constructor === other31389.constructor)) && (cljs.core._EQ_.call(null,this31388__$1.status,other31389.status)) && (cljs.core._EQ_.call(null,this31388__$1.body,other31389.body)) && (cljs.core._EQ_.call(null,this31388__$1.status_text,other31389.status_text)) && (cljs.core._EQ_.call(null,this31388__$1.headers,other31389.headers)) && (cljs.core._EQ_.call(null,this31388__$1.was_aborted,other31389.was_aborted)) && (cljs.core._EQ_.call(null,this31388__$1.__extmap,other31389.__extmap)));
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4180__auto__,k__4181__auto__){
var self__ = this;
var this__4180__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__4181__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4180__auto____$1),self__.__meta),k__4181__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4181__auto__)),null));
}
});

ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4178__auto__,k__4179__auto__,G__31386){
var self__ = this;
var this__4178__auto____$1 = this;
var pred__31392 = cljs.core.keyword_identical_QMARK_;
var expr__31393 = k__4179__auto__;
if(cljs.core.truth_(pred__31392.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__31393))){
return (new ajax.protocols.Response(G__31386,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31392.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__31393))){
return (new ajax.protocols.Response(self__.status,G__31386,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31392.call(null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__31393))){
return (new ajax.protocols.Response(self__.status,self__.body,G__31386,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31392.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__31393))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__31386,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31392.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__31393))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__31386,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4179__auto__,G__31386),null));
}
}
}
}
}
});

ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4183__auto__){
var self__ = this;
var this__4183__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status","status",-1997798413),self__.status,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted,null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4170__auto__,G__31386){
var self__ = this;
var this__4170__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__31386,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4176__auto__,entry__4177__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4177__auto__)){
return this__4176__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4177__auto__,(0)),cljs.core._nth.call(null,entry__4177__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4176__auto____$1,entry__4177__auto__);
}
});

ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"status-text","status-text",-193703951,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"was-aborted","was-aborted",-479553301,null)], null);
});

ajax.protocols.Response.cljs$lang$type = true;

ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__4207__auto__){
return (new cljs.core.List(null,"ajax.protocols/Response",null,(1),null));
});

ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__){
return cljs.core._write.call(null,writer__4208__auto__,"ajax.protocols/Response");
});

/**
 * Positional factory function for ajax.protocols/Response.
 */
ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

/**
 * Factory function for ajax.protocols/Response, taking a map of keywords to field values.
 */
ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__31390){
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__31390),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__31390),new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(G__31390),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__31390),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(G__31390),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31390,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828))),null));
});


//# sourceMappingURL=protocols.js.map?rel=1521885208404
