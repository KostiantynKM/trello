(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{25:function(t,e,n){t.exports={taskForm:"task-form_taskForm__1gREc",taskFormItem:"task-form_taskFormItem__1GC_n"}},38:function(t,e,n){t.exports={header:"header_header__1AAQQ"}},45:function(t,e,n){t.exports=n(59)},55:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=n(6),i=(n(55),n(33)),s=n(34),d=n(44),u=n(42),k=n(18),m=n(22),b=n(5),p=n(24),g=n(11),f=function(t,e){return{type:"ADD_TASK",payload:{task:t,columnId:e},generateId:["taskId"]}},E=function(t,e){return{type:"CHANGE_TASK",payload:{task:t,columnId:e}}},O=n(13),v=n(25),j=n.n(v),I=n(14),h=n(15),y=Object(o.b)(null,(function(t,e){return{onSubmit:function(n){return t(e.action(n,e.droggableId))}}}))((function(t){var e,n,c,l,o,i=t.onSubmit,s=t.def,d=t.resetFlag,u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(a.useState)(t),n=Object(k.a)(e,2),r=n[0],c=n[1],l=function(t,e){return c(Object(b.a)(Object(b.a)({},r),{},Object(O.a)({},t,e)))},o=function(t){return function(e){return l(t,e.target?e.target.value:e)}};return{values:r,reset:function(){return c(t)},handlers:Object.keys(r).reduce((function(t,e){return Object(b.a)(Object(b.a)({},t),{},Object(O.a)({},e,{value:r[e],onChange:o(e)}))}),{})}}({title:null!==(e=null===s||void 0===s?void 0:s.title)&&void 0!==e?e:"",content:null!==(n=null===s||void 0===s?void 0:s.content)&&void 0!==n?n:"",id:null!==(c=null===s||void 0===s?void 0:s.id)&&void 0!==c?c:""}),m=u.values,p=u.handlers,g=u.reset;return r.a.createElement("div",{className:j.a.taskForm},r.a.createElement(h.a,{onSubmit:function(t){t.preventDefault(),i(m),d&&g()}},r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Control,Object.assign({placeholder:null!==(l=null===s||void 0===s?void 0:s.title)&&void 0!==l?l:"Title",className:j.a.message},p.title)),r.a.createElement(h.a.Control,Object.assign({placeholder:null!==(o=null===s||void 0===s?void 0:s.content)&&void 0!==o?o:"Content",className:j.a.message},p.content)),r.a.createElement(I.a,{type:"submit",variant:"secondary",block:!0,size:"sm"},"Add"))))})),A=n(12),C=n(20);function T(){var t=Object(m.a)(["\n background-color: ",";\n transition: background-color 0.2s ease;\n"]);return T=function(){return t},t}var _=p.a.div(T(),(function(t){return t.isDragging?"rgb(56 132 208 / 0.5)":"rgb(157 119 224 / 0.5)"})),x=Object(A.a)({task:function(t,e){return t.tasks[e.taskId]}}),D={deleteTask:function(t,e,n){return{type:"DELETE_TASK",payload:{id:t,columnId:n,index:e}}}},S=Object(o.b)(x,D)(r.a.memo((function(t){var e=t.task,n=t.index,c=t.column,l=t.deleteTask,o=Object(a.useState)({edit:!1,editable:!1}),i=Object(k.a)(o,2),s=i[0],d=i[1];return r.a.createElement(g.b,{draggableId:e.id,index:n},(function(t,a){return r.a.createElement(_,Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef,isDragging:a.isDragging}),r.a.createElement(r.a.Fragment,null,s.edit||s.editable?null:r.a.createElement(C.a,{onClick:function(){d(Object(b.a)(Object(b.a)({},s),{},{edit:!0}))},onClose:function(){return l(e.id,n,c)}},r.a.createElement(C.a.Header,null,r.a.createElement("div",{className:"mr-auto"},e.title))),s.edit?r.a.createElement(C.a,{onClick:function(){d(Object(b.a)(Object(b.a)({},s),{},{edit:!1}))},onClose:function(){return l(e.id,n,c)}},r.a.createElement(C.a.Header,null,r.a.createElement("div",{className:"mr-auto"},e.title)),r.a.createElement(C.a.Body,null,r.a.createElement("div",{className:"mr-auto"},e.content),r.a.createElement(I.a,{size:"sm",variant:"secondary",onClick:function(t){t.stopPropagation(),d(Object(b.a)(Object(b.a)({},s),{},{edit:!1,editable:!0}))}},"Edit")," ")):null,s.editable?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{def:e,action:E,resetFlag:!1}),r.a.createElement(I.a,{block:!0,size:"sm",variant:"secondary",onClick:function(t){return d(Object(b.a)(Object(b.a)({},s),{},{edit:!1,editable:!1}))}},"Back")):null))}))}))),N=n(23),H=n(28);function w(){var t=Object(m.a)(["\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 100px;\n"]);return w=function(){return t},t}var K=p.a.div(w(),(function(t){return t.isDraggingOver?"lightyellow":"inherit"})),F=Object(A.a)({column:function(t,e){return t.columns[e.columnId]}}),G=Object(o.b)(F)(r.a.memo((function(t){var e=t.column,n=t.index,c=Object(a.useState)(!1),l=Object(k.a)(c,2),o=l[0],i=l[1];return r.a.createElement(g.b,{draggableId:e.id,index:n},(function(t){return r.a.createElement(N.a,Object.assign({},t.draggableProps,{ref:t.innerRef}),r.a.createElement(H.a,null,r.a.createElement(H.a.Header,Object.assign({as:"h5"},t.dragHandleProps),null===e||void 0===e?void 0:e.title),r.a.createElement(g.c,{droppableId:e.id,type:"task"},(function(t,n){return r.a.createElement(K,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:n.isDraggingOver}),e.taskIds.map((function(t,n){return r.a.createElement(S,{key:t,index:n,taskId:t,column:e.id})})),t.placeholder)})),o?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{droggableId:e.id,action:f,resetFlag:!0}),r.a.createElement(I.a,{size:"sm",variant:"secondary",onClick:function(){return i(!1)}},"Close")):r.a.createElement(h.a.Control,{type:"text",placeholder:"Add a card...",readOnly:!0,onClick:function(){return i(!0)}})))}))}))),P=(n(58),n(40)),L=n(39),R=function(){return r.a.createElement("h4",{color:"white"},"SIMPLE TRELLO")},z=n(38),B=n.n(z),M=function(){return r.a.createElement("header",{className:B.a.header},r.a.createElement(R,null))},U=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).onDragEnd=function(e){var n=e.destination,a=e.source,r=e.draggableId,c=e.type;if(n&&(n.droppableId!==a.droppableId||n.index!==a.index))if("column"!==c){var l=a.droppableId,o=n.droppableId;l!==o?l!==o&&t.props.changeTaskOut(a.droppableId,n.droppableId,a.index,n.index,r):t.props.changeTaskIn(a.droppableId,a.index,n.index,r)}else t.props.changeColumn(a.index,n.index,r)},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(g.a,{onDragEnd:this.onDragEnd},r.a.createElement(g.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(e){return r.a.createElement(L.a,Object.assign({},e.droppableProps,{ref:e.innerRef}),r.a.createElement(M,null),r.a.createElement(P.a,null,t.props.columnOrder.map((function(t,e){return r.a.createElement(G,{key:t,columnId:t,index:e})})),e.placeholder))})))}}]),n}(r.a.PureComponent),J=Object(A.a)({columnOrder:function(t){return t.columnOrder}}),Q={changeColumn:function(t,e,n){return{type:"CHANGE_COLUMN",payload:{start:t,end:e,id:n}}},changeTaskIn:function(t,e,n,a){return{type:"CHANGE_TASKIN",payload:{column:t,start:e,end:n,id:a}}},changeTaskOut:function(t,e,n,a,r){return{type:"CHANGE_TASKOUT",payload:{columnStart:t,columnEnd:e,start:n,end:a,id:r}}}},W=Object(o.b)(J,Q)(U),q=function(){return r.a.createElement("div",null,r.a.createElement(W,null))},V=n(7),X=n(41),Y=n(17),Z={tasks:{"task-1":{id:"task-1",content:"task-1-content",title:"task-1-title"},"task-2":{id:"task-2",content:"task-2-content",title:"task-2-title"},"task-3":{id:"task-3",content:"task-3-content",title:"task-3-title"},"task-4":{id:"task-4",content:"task-4-content",title:"task-4-title"},"task-5":{id:"task-5",content:"task-5-content",title:"task-5-title"},"task-6":{id:"task-6",content:"task-6-content",title:"task-6-title"},"task-7":{id:"task-7",content:"task-7-content",title:"task-7-title"},"task-8":{id:"task-8",content:"task-8-content",title:"task-8-title"},"task-9":{id:"task-9",content:"task-9-content",title:"task-9-title"},"task-10":{id:"task-10",content:"task-10-content",title:"task-10-title"},"task-11":{id:"task-11",content:"task-11-content",title:"task-11-title"},"task-12":{id:"task-12",content:"task-12-content",title:"task-12-title"},"task-13":{id:"task-13",content:"task-13-content",title:"task-13-title"},"task-14":{id:"task-14",content:"task-14-content",title:"task-14-title"},"task-15":{id:"task-15",content:"task-15-content",title:"task-15-title"},"task-16":{id:"task-16",content:"task-16-content",title:"task-16-title"}},columns:{"column-1":{id:"column-1",title:"Backlog",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"ToDo",taskIds:["task-5","task-6","task-7","task-8"]},"column-3":{id:"column-3",title:"InProgress",taskIds:["task-9","task-10","task-11","task-12"]},"column-4":{id:"column-4",title:"Done",taskIds:["task-13","task-14","task-15","task-16"]}},columnOrder:["column-1","column-2","column-3","column-4"]},$=Object(Y.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.columnOrder,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"CHANGE_COLUMN":t.splice(a.start,1),t.splice(a.end,0,a.id);break;default:return t}})),tt=Object(Y.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.columns,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload,r=e.taskId;switch(n){case"CHANGE_TASKIN":t[a.column].taskIds.splice(a.start,1),t[a.column].taskIds.splice(a.end,0,a.id);break;case"CHANGE_TASKOUT":t[a.columnStart].taskIds.splice(a.start,1),t[a.columnEnd].taskIds.splice(a.end,0,a.id);break;case"DELETE_TASK":t[a.columnId].taskIds.splice(a.index,1);break;case"ADD_TASK":t[a.columnId].taskIds.push(r);break;default:return t}})),et=Object(Y.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.tasks,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload,r=e.taskId;switch(console.log("reducer",n),n){case"DELETE_TASK":delete t[a.id];break;case"ADD_TASK":t[r]=a.task,t[r].id=r;break;case"CHANGE_TASK":t[a.task.id]=a.task;break;default:return t}})),nt=Object(V.combineReducers)({columnOrder:$,columns:tt,tasks:et}),at=n(43),rt=n(62),ct=Object(V.applyMiddleware)((function(t){return function(t){return function(e){if(!e.generateId)return t(e);var n=e.generateId,a=Object(at.a)(e,["generateId"]);t(Object(b.a)(Object(b.a)({},a),n.reduce((function(t,e){return Object(b.a)(Object(b.a)({},t),{},Object(O.a)({},e,Object(rt.a)()))}),{})))}}}),(function(t){return function(t){return function(e){t(e)}}})),lt=Object(V.createStore)(nt,Object(X.composeWithDevTools)(ct));window.store=lt,l.a.render(r.a.createElement(o.a,{store:lt},r.a.createElement(q,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cab88254.chunk.js.map