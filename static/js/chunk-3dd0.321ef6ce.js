(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3dd0"],{"69Bj":function(e,t,a){"use strict";var i=a("tw8V");a.n(i).a},OnRN:function(e,t,a){"use strict";a.r(t);var i=a("14Xm"),n=a.n(i),r=a("D3Ub"),d=a.n(r),o=a("gLgb"),g=a("zgVM"),c=a("V47a"),u=a("cWz8"),s=a("cyzc"),l=a("/C5K"),w=a("xSk4"),p=a("GWHw"),h=a("mlo3"),b=a("rMB3"),m=a("FyWN"),f=a("tHtw"),v=a("S+MY"),k=a("MOy9"),y=a("jmgl"),C=a("kq3f"),W=a("U6Wy"),x=a("QUbe"),S=a("+3Gg"),B=a("FxKO"),L=a("Ur0O"),M=a("4rp5"),_=a("Whq1"),H=a("xVz9"),I=a("pizJ"),O=a("zii7"),z=a("4Zv2"),V=a("n/6M"),j=a("dHPb"),D=a("VHqX"),N={name:"WidgetTemp",components:{widgetHref:o.a,widgetText:g.a,WidgetMarquee:c.a,widgetTime:u.a,widgetImage:s.a,widgetSlider:l.a,widgetVideo:w.a,WidgetIframe:p.a,widgetBarchart:h.a,widgetGradientColorBarchart:f.a,widgetLinechart:b.a,widgetBarlinechart:m.a,WidgetPiechart:v.a,WidgetFunnel:k.a,WidgetGauge:y.a,WidgetPieNightingaleRoseArea:C.a,widgetTable:W.a,widgetLineMap:x.a,widgetPiePercentageChart:S.a,widgetAirBubbleMap:B.a,widgetBarStackChart:L.a,widgetLineStackChart:M.a,widgetBarCompareChart:_.a,widgetLineCompareChart:H.a,widgetDecoratePieChart:I.a,widgetMoreBarLineChart:O.a,widgetWordCloud:z.a,widgetHeatmap:V.a,widgetRadar:j.a,widgetBarLineStackChart:D.a},model:{prop:"value",event:"input"},props:{type:String,value:{type:[Object],default:function(){}}},data:function(){return{}},mounted:function(){},methods:{}},P=(a("wLwD"),a("KHd+")),U=Object(P.a)(N,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t(this.type,{tag:"component",attrs:{value:this.value,ispreview:!0}})],1)},[],!1,null,"768f4434",null);U.options.__file="temp.vue";var q=U.exports,A=(a("ba/L"),a("NNru")),G={name:"Login",components:{widget:q},data:function(){return{bigScreenStyle:{},widgets:[]}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;return d()(n.a.mark(function t(){var a,i,r,d;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$route.query.reportCode,a=A.code,i=A.data,200==a){t.next=5;break}return t.abrupt("return");case 5:r=document.body.clientWidth,d=r/i.dashboard.width,e.bigScreenStyle={width:i.dashboard.width+"px",height:i.dashboard.height+"px","background-color":i.dashboard.backgroundColor,"background-image":"url("+e.setImage(i.dashboard.backgroundImage)+")","background-position":"0% 0%","background-size":"100% 100%","background-repeat":"initial","background-attachment":"initial","background-origin":"initial","background-clip":"initial",transform:"scale("+d+", "+d+")","transform-origin":"0 0"},e.widgets=i.dashboard.widgets;case 9:case"end":return t.stop()}},t,e)}))()},setImage:function(e){if(-1!==e.indexOf("@/assets/lineImage")){var t=e.replace("@/assets/lineImage","");return a("tH7N")("./lineImage"+t+".png")}}}},T=(a("69Bj"),Object(P.a)(G,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout"},[a("div",{style:e.bigScreenStyle},e._l(e.widgets,function(t,i){return a("widget",{key:i,attrs:{type:t.type},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"widget.value"}})}),1)])},[],!1,null,"80d24fa6",null));T.options.__file="index.vue";t.default=T.exports},UQ1A:function(e,t,a){},tw8V:function(e,t,a){},wLwD:function(e,t,a){"use strict";var i=a("UQ1A");a.n(i).a}}]);