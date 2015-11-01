(function($) {
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch(b) {}
	var calIfrm,calIfrmdoc;
    var c = /\b(\w)\b/g,
    d, e, f, g, h, i, k, l, m, n, o, p, q, r, s, t, u, v = $.browser.msie && $.browser.version < 7 ? !0 : !1,
    w = v ? '<iframe id="lhgcal_iframe" hideFocus="true" frameborder="0" src="about:blank" style="position:absolute;z-index:-1;width:100%;top:0px;left:0px;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>': "",lhgcalendar,ft,lt
    tmpl = ['<div id="lhgcalendar" class="lhgcal" style="display:block;z-index:9999;">', '<table border="0" cellspacing="0" cellpadding="0" width="100%">', "<tr>", '<td class="lhgcal_leftTop"></td>', '<td class="lhgcal_top"></td>', '<td class="lhgcal_rightTop"></td>', "</tr>", "<tr>", '<td class="lhgcal_left"></td>', "<td>", '<div class="lhgcal_head">', '<div class="lhgcal_head_preyear"><a id="lhgPreYear" href="javascript:;"></a></div>', '<div class="lhgcal_head_premonth"><a id="lhgPreMonth" href="javascript:;"></a></div>', '<div class="lhgcal_head_year"><input id="lhgYearBox" maxlength="4"/></div>', '<div class="lhgcal_head_month"><input id="lhgMonthBox" maxlength="2"/></div>', '<div class="lhgcal_head_nextyear"><a id="lhgNextYear" href="javascript:;"></a></div>', '<div class="lhgcal_head_nextmonth"><a id="lhgNextMonth" href="javascript:;"></a></div>', '<div id="lhgYearList" class="lhgcal_yearlist" style="display:none">', '<table width="73" cellspacing="1" cellpadding="0" border="0">', '<tbody id="yearListBox"></tbody>', "</table>", "</div>", '<div id="lhgMonthList" class="lhgcal_monthlist" style="display:none">', '<table width="73" cellspacing="1" cellpadding="0" border="0">', '<tbody id="monthListBox"></tbody>', "</table>", "</div>", "</div>", '<div class="lhgcal_body">', '<table width="100%" cellspacing="1" cellpadding="0" border="0">', "<thead><tr>", "<td>\u65e5</td><td>\u4e00</td><td>\u4e8c</td><td>\u4e09</td><td>\u56db</td><td>\u4e94</td><td>\u516d</td>", "</tr></thead>", '<tbody id="lhgDayBox">', "</tbody>", "</table>", "</div>", '<div class="lhgcal_foot">', '<table width="100%" cellspacing="0" cellpadding="0" border="0">', "<tr>", '<td align="center" class="lhgcal_foot_time"><input id="lhgHourBox" maxlength="2"/>:<input id="lhgMinuteBox" maxlength="2"/>:<input id="lhgSecondBox" maxlength="2"/></td>', '<td align="center" class="lhgcal_foot_confirm"><a id="lhgDelBox" class="lhgcal_btn" href="javascript:;">确定</a><a class="lhgcal_btn delbtn">清空</a></td>', "</tr>", "</table>", "</div><div id='foot_btn' style='padding:5px 5px 5px 0;float:right;'><a id='lhgTodayBox' class='lhgcal_btn'>今天</a><a class='lhgcal_btn delbtn'>清空</a></div>", "</td>", '<td class="lhgcal_right"></td>', "</tr>", "<tr>", '<td class="lhgcal_leftBottom"></td>', '<td class="lhgcal_bottom"></td>', '<td class="lhgcal_rightBottom"></td>', "</tr>", "</table>", w, "</div>"].join(""),
    y = function() {
        if ($.browser.msie) return window.event;
        var b = y.caller;
        while (b != null) {
            var c = b.arguments[0];
            if (c && (c + "").indexOf("Event") >= 0) return c;
            b = b.caller
        }
        return null
    },
    z = function($) {
		
        var key = $.keyCode || $.charCode;
        return key >= 48 && key <= 57 || key >= 37 && key <= 40 || key == 8 || key == 46
    },
    A = function($) {
        $ = $ || document;
        return $.compatMode === "CSS1Compat" ? $.documentElement: $.body
    },
    B = function() {

        var win = $(document);
        return {
            w: win.clientWidth || 0,
            h: win.clientHeight || 0
        }
    },
    C = function() {
        var _body = $(document);
        return {
            w: Math.max(_body.scrollWidth, _body.clientWidth || 0),
            h: Math.max(_body.scrollHeight, _body.clientHeight || 0),
            x: $.pageXOffset || _body.scrollLeft || 0,
            y: $.pageYOffset || _body.scrollTop || 0
        }
    },
    D = function() {
        var script = $("script"),
        c = "",
        d = 0,
        e = script.length,
        f = /lhgcalendar(?:\.min)?\.js/i;
        for (; d < e; d++) if (f.test(script[d].src)) {
            c = !document.querySelector ? script[d].getAttribute("src", 4) : script[d].src;
            break
        }
        return c.substr(0, c.lastIndexOf("/") + 1)
    },
    E = function(b, d) {
        var date = new Date;
        /%/.test(b) ? b = b.replace(/%y/, date.getFullYear()).replace(/%M/, date.getMonth() + 1).replace(/%d/, date.getDate()).replace(/%H/, date.getHours()).replace(/%m/, date.getMinutes()).replace(/%s/, date.getSeconds()).replace(c, "0$1") : /^#[\w-]+$/.test(b) && (b = $.trim($(b).val()), b.length > 0 && d && (b = G.call(F(b, d), "yyyy-MM-dd")));
        return b
    },
    F = function(b, c) {
        function q($) {
            var b = [],
            c = 0,
            d;
            yi = $.indexOf("yyyy"),
            yi < 0 && (yi = $.indexOf("yy")),
            yi >= 0 && (b[c] = yi, c++),
            Mi = $.indexOf("MM"),
            Mi < 0 && (Mi = $.indexOf("M")),
            Mi >= 0 && (b[c] = Mi, c++),
            di = $.indexOf("dd"),
            di < 0 && (di = $.indexOf("d")),
            di >= 0 && (b[c] = di, c++),
            Hi = $.indexOf("HH"),
            Hi < 0 && (Hi = $.indexOf("H")),
            Hi >= 0 && (b[c] = Hi, c++),
            mi = $.indexOf("mm"),
            mi < 0 && (mi = $.indexOf("m")),
            mi >= 0 && (b[c] = mi, c++),
            si = $.indexOf("ss"),
            si < 0 && (si = $.indexOf("s")),
            si >= 0 && (b[c] = si, c++),
            d = [yi, Mi, di, Hi, mi, si];
            for (c = 0; c < b.length - 1; c++) for (j = 0; j < b.length - 1 - c; j++) if (b[j] > b[j + 1]) {
                var e = b[j];
                b[j] = b[j + 1],
                b[j + 1] = e
            }
            for (c = 0; c < b.length; c++) for (j = 0; j < d.length; j++) b[c] == d[j] && (d[j] = c);
            return d
        }
        function p(b, c) {
            sting = $.trim(b);
            if (b !== "") {
                c = c.replace(/yyyy/, y4).replace(/yy/, y2).replace(/MM/, M2).replace(/M/, M1).replace(/dd/, d2).replace(/d/, d1).replace(/HH/, H2).replace(/H/, H1).replace(/mm/, m2).replace(/m/, m1).replace(/ss/, s2).replace(/s/, s1),
                c = new RegExp("^" + c + "$"),
                d = c;
                return c.test(b)
            }
        }
        var d, e = new Date;
        y4 = "([0-9]{4})",
        y2 = "([0-9]{2})",
        yi = -1,
        M2 = "(0[1-9]|1[0-2])",
        M1 = "([1-9]|1[0-2])",
        Mi = -1,
        d2 = "(0[1-9]|[1-2][0-9]|30|31)",
        d1 = "([1-9]|[1-2][0-9]|30|31)",
        di = -1,
        H2 = "([0-1][0-9]|20|21|22|23)",
        H1 = "([0-9]|1[0-9]|20|21|22|23)",
        Hi = -1,
        m2 = "([0-5][0-9])",
        m1 = "([0-9]|[1-5][0-9])",
        mi = -1,
        s2 = "([0-5][0-9])",
        s1 = "([0-9]|[1-5][0-9])",
        si = -1;
        if (p(b, c)) {
            var f = d.exec(b),
            g = q(c),
            h = g[0] >= 0 ? f[g[0] + 1] : e.getFullYear(),
            i = g[1] >= 0 ? f[g[1] + 1] - 1 : e.getMonth(),
            k = g[2] >= 0 ? f[g[2] + 1] : e.getDate(),
            l = g[3] >= 0 ? f[g[3] + 1] : e.getHours(),
            m = g[4] >= 0 ? f[g[4] + 1] : e.getMinutes(),
            n = g[5] >= 0 ? f[g[5] + 1] : e.getSeconds(),
            o;
            o = new Date(h, i, k, l, m, n);
            return o.getDate() == k ? o: e
        }
        return e
    },
    G = function($) {
        var b = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
            "H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            w: "0123456".indexOf(this.getDay()),
            S: this.getMilliseconds()
        };
        /(y+)/.test($) && ($ = $.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));


        for (var c in b)(new RegExp("(" + c + ")")).test($) && ($ = $.replace(RegExp.$1, RegExp.$1.length == 1 ? b[c] : ("00" + b[c]).substr(("" + b[c]).length)));
        return $
    },
    H = function() {
			
        var b = this,j, w, x, A, D, H, I;
				
		var K = function(b) {
            var d = [],
            f,
            g,
            k,
            l,
            m,
            n,
            o = 0,
            p;
            w = b.getFullYear(),
            x = b.getMonth() + 1,
            A = b.getDate(),
            $(h).val(w),
            $(i).val(x),
            f = (new Date(w, x - 1, 1)).getDay(),
            g = (new Date(w, x - 1, 0)).getDate(),
            k = (new Date(w, x, 0)).getDate();
            for (var q = 0; q < f; q++) d.push(g),
            g--;
            d.reverse();
            for (var q = 1; q <= k; q++) d.push(q);
            for (var q = 1; q <= 42 - k - f; q++) d.push(q);
            l = parent.califrm.document.createDocumentFragment();
			
			if(j.format=='yyyy-MM-dd')
			{
				calIfrmdoc.find('.lhgcal_foot').hide();
				calIfrmdoc.find('#foot_btn').show();
				$(calIfrmdoc).find("#lhgDelBox").hide();
			}
			else
			{
				calIfrmdoc.find('.lhgcal_foot').show();
				calIfrmdoc.find('#foot_btn').hide();
				$(calIfrmdoc).find("#lhgDelBox").show();
			}
			
			
            for (var q = 0; q < 6; q++) {
                m = parent.califrm.document.createElement("tr");
                for (var r = 0; r < 7; r++) {
                    n = parent.califrm.document.createElement("td"),
                    p = (w + "-" + x + "-" + d[o]).replace(c, "0$1");
					if(j.format=='yyyy-MM-dd HH:mm:ss' || j.format=='yyyy-MM-dd HH:mm')
					{
					if(j.minDate) p=p+" 24:00:00";
					if(j.maxDate) p=p+" 00:00:00";
					}
					
                    if (o < f || o >= k + f || j.minDate && j.minDate > p || j.maxDate && j.maxDate < p || j.disWeek && j.disWeek.indexOf(r) >= 0) N(n, d[o]);
                    else if (j.disDate) {
                        for (var s = 0,t = j.disDate.length; s < t; s++) 
						{ / %/.test(j.disDate[s])&&(j.disDate[s]=E(j.disDate[s]));
							var u=new RegExp(j.disDate[s]),v=j.enDate?!u.test(p):u.test(p);
							if(v)break
						}v?N(n,d[o]):N(n,d[o],!0)
					}else N(n,d[o],!0);
					m.appendChild(n);
					o++;
				}
				l.appendChild(m)
			}
				$(e).empty().append(l)
		};
		var L=function () {
			var b,c,d;
			d=parent.califrm.document.createDocumentFragment();
			for(var e=1900;e<2051;e++)
			{
				b=parent.califrm.document.createElement("tr");
				c=parent.califrm.document.createElement("td");
				$(c).hover(function () {
					this.style.backgroundColor="#3991d1";
					this.style.color="#fff";
				},function () {
					this.style.backgroundColor="#fff";
					this.style.color="#000";
				}).html(e+"\u5e74").bind("mousedown",function ($) {
					h.value=this.innerHTML;
					K(new Date(parseInt(h.value,10),x-1,A));
					r.style.display="none"
				});
				b.appendChild(c);
				d.appendChild(b);
			}
			$(s).empty().append(d);
		};
		var M=function () {
			var b,c,d;
			d=parent.califrm.document.createDocumentFragment();
			for(var j=1;j<13;j++)
			{
				b=parent.califrm.document.createElement("tr");
				c=parent.califrm.document.createElement("td");
				$(c).hover(function () {
					this.style.backgroundColor="#3991d1";
					this.style.color="#fff";
				},function () {
					this.style.backgroundColor="#fff";
					this.style.color="#000";
				}).html(j+"\u6708").bind("mousedown",function ($) {
					i.value=this.innerHTML;
					K(new Date(w,parseInt(i.value,10)-1,A));
					t.style.display="none"
				});
				b.appendChild(c);
				d.appendChild(b);
			}
			$(u).empty().append(d)
		};
		
		var N=function (b,c,d) {
			
			d?($(b).html(c+"").click(function(){
				$(e).find('td').removeClass('lhgcal_td_back').removeClass('lhgcal_td_today');
				$(this).addClass('lhgcal_td_today');
			}
			).bind("click",U),c==A&&$(b).addClass("lhgcal_td_today")):$(b).html(c+"").css({'color':'#999'});
		};

		var O=function ($) {
			K(new Date(w-1,x-1,A)),$.preventDefault()
		};
		var P=function ($) {
			K(new Date(w,x-2,A)),$.preventDefault()
		};
		var Q=function ($) {
			K(new Date(w+1,x-1,A)),$.preventDefault()
		};
		var R=function ($) {
			K(new Date(w,x,A));
		};
		var S=function () {
			$(this).addClass("lhgcal_td_back")
		};
		var T=function () {
			$(this).removeClass("lhgcal_td_back")
		};
		var U=function () {
			var c=parseInt(this.innerHTML,10);
			var d=new Date(w,x-1,c);
			if(j.format.indexOf("H")>=0) {
				var e=parseInt($(o).value,10),f=parseInt($(p).val(),10),g=parseInt($(q).val(),10);
				d=new Date(w,x-1,c,e,f,g)
			}
			A=c;
			$(this).removeClass("lhg_td_back");
			j.onSetDate&&j.onSetDate.call(b);
			if(j.format=='yyyy-MM-dd') //如果不需要精确到分秒
				{
					b.inpObj.value=G.call(d,j.format);
					b.hideCalendar();
				}
			//b.inpObj.value=G.call(d,j.format);
			if(j.real) {
				var h=j.format.indexOf("H")>=0?"yyyy-MM-dd HH:mm:ss":"yyyy-MM-dd";
				//$("#"+j.real).val(G.call(d,h));
				
			}
			//b.hideCalendar(),
			j.linkageObj&&$(j.linkageObj).bind("click",function ($) {
				$.stopPropagation()
			})[0].focus()
		};
		
		b.cal=$(lhgcalendar).bind("click",function ($) {
			$.stopPropagation()
			
		}).bind("contextmenu",function ($) {
			$.preventDefault()
		})[0];
	
			s=(calIfrmdoc.find('#yearListBox'))[0] ;
			u=(calIfrmdoc.find('#monthListBox'))[0] ;
			t=(calIfrmdoc.find("#lhgMonthList"))[0] ;
			d=lhgcalendar=(calIfrmdoc.find("#lhgcalendar"))[0] ;
			ft=(calIfrmdoc.find('.lhgcal_foot'))[0] ;
			f=(calIfrmdoc.find("#lhgPreYear"))[0] ;
			g=(calIfrmdoc.find("#lhgPreMonth"))[0] ;
			h=(calIfrmdoc.find("#lhgYearBox"))[0] ;
			i=(calIfrmdoc.find("#lhgMonthBox"))[0] ;
			k=(calIfrmdoc.find("#lhgNextYear"))[0] ;
			l=(calIfrmdoc.find("#lhgNextMonth"))[0] ;
			m=(calIfrmdoc.find("#lhgTodayBox"))[0] ;
			n=(calIfrmdoc.find("#lhgDelBox"))[0] ;
			e=(calIfrmdoc.find("#lhgDayBox"))[0] ;
			o=(calIfrmdoc.find("#lhgHourBox"))[0] ;
			p=(calIfrmdoc.find("#lhgMinuteBox"))[0] ;
			q=(calIfrmdoc.find("#lhgSecondBox"))[0] ;
			r=(calIfrmdoc.find("#lhgYearList"))[0] ;
			delbtn=(calIfrmdoc.find(".delbtn"))[0] ;
			
			b.Show=function (e) {
			var f=y(),g=f.srcElement||f.target,h,i,k,l,m,n;
			j=$.extend({
				id:null,
				format:"yyyy-MM-dd",
				minDate:null,
				maxDate:null,
				btnBar:!0,
				targetFormat:null,
				disWeek:null,
				onSetDate:null,
				real:null,
				disDate:null,
				enDate:!1,
				linkageObj:null
			},e||{
			}),b.inpObj=j.id?$("#"+j.id)[0]:g;
			if(!b.inpObj||b.inpObj.type!=="text")alert("\u4f60\u6240\u6307\u5b9a\u7684\u8f93\u5165\u65e5\u671f\u7684\u6587\u672c\u6846\u5143\u7d20\u4e0d\u5b58\u6216\u4e0d\u662f\u6587\u672c\u6846");
			else {
				j.btnBar?$(ft,calIfrm).css("display","block"):$(ft,calIfrm).css("display","none");
				j.minDate&&(j.minDate=E(j.minDate,j.targetFormat));
				j.maxDate&&(j.maxDate=E(j.maxDate,j.targetFormat));
				h=$.trim(b.inpObj.value);
				h.length>0?i=F(h,j.format):i=new Date;
				K(i);
				I=i.getSeconds();
				D=i.getHours();
				H=i.getMinutes();
				//q.value=(I+"").replace(c,"0$1");
				//alert(typeof(j.minDate));
				if(b.inpObj.value!="")
				{
					q.value=(I+"").replace(c,"0$1");
					o.value=(D+"").replace(c,"0$1");
					p.value=(H+"").replace(c,"0$1");
				}
				else
				{
				if(typeof(j.maxDate)=="string"){o.value="00";p.value="00",q.value="00"}else{o.value="23";p.value="59";q.value="59"};
				}
				//o.value=(D+"").replace(c,"0$1");
				//p.value=(H+"").replace(c,"0$1");
				$(ft).find('.lhgcal_foot_time input').attr("disabled",j.format.indexOf("H")>=0?!1:!0);
				calIfrm.show();
				var r=d.offsetHeight;
				v&&$("#lhgcal_iframe").css("height",r+"px");
				k=$(g).position();
				var yy=$(g).position().top+23;
				var xx=$(g).position().left;
				var   a   =parent.document.activeElement;  
				if   (a.tagName.toLowerCase()=="iframe")
				{ 
				var   e   =   get_position(a);
				clickx=e.x;
				clicky=e.y;
				xx=parseInt($(g).position().left)+parseInt(clickx);
				
				yy=parseInt($(g).position().top)+parseInt(clicky)+23-$(document).scrollTop();
				}
				m=B();
				if((xx+183)>parent.document.documentElement.clientWidth)
				{
					xx=parent.document.documentElement.clientWidth-183;
				}
				solSize=C();
				calIfrm.css({
					left:xx+"px",top:yy+"px"
				});
				f.stopPropagation?f.stopPropagation():f.cancelBubble=!0
			}
		};
		b.hideCalendar=function () {
			r.style.display="none";
			t.style.display="none";
			calIfrm.hide();


		};
		b.getDateStr=function ($) {
			var b=parseInt(o.value,10),c=parseInt(p.value,10),d=parseInt(q.value,10);
			if(w===""&&x===""&&A==="")return "";
			switch($) {
				case "y":return w;
				case "M":return x;
				case "d":return A;
				case "H":return b;
				case "m":return c;
				case "s":return d;
				case "date":return w+"-"+x+"-"+A;
				case "dateTime":return w+"-"+x+"-"+A+" "+b+":"+c+":"+d
			}
		};
		b.formatDate=function ($,b) {
			return G.call($,b)
		};
		

			
			$(f).unbind("click").bind("click",O);
			$(g).unbind("click").bind("click",P);
			$(k).unbind("click").bind("click",Q);
			$(l).unbind("click").bind("click",function(){
				
				var yy=$(h).val();
				var MM=$(i).val();
				var dd=$('.lhgcal_td_back').html();
				if(dd==null)
					dd=$('.lhgcal_td_today').html();
				var mydate=yy+'-'+MM+'-'+dd;
				if(A>=30&&x==1) A=1; //考虑2月份
				if(isLastDay(mydate)) A=1;//判断是否该月份最后一天
				K(new Date(w,x,A));
			});
			
				var clickx;
				var clicky;
				function   get_position(e){  
				var l=e.offsetLeft;
				var t=e.offsetTop;    
				while(e=e.offsetParent){  
				t+=e.offsetTop;  
				l+=e.offsetLeft;  
				};   return   {x:   l,   y:   t};  
				}  
				
			
			var isLastDay=function(inputDate)
			{ 
				var arys = new Array();
				arys = inputDate.split('-');
				var d = new Date(arys[0],arys[1]-1,arys[2]); 
				var nd = new Date(arys[0],arys[1]-1,arys[2]); 
				nd.setDate(nd.getDate()+1);
				return ((parseInt(d.getMonth())+1)!=(parseInt(nd.getMonth())+1)) 
			} ;
			
			$(h).unbind("focus").bind("focus",function () {
			r.style.display="";
			this.style.border="1px solid #999";
		}).bind("blur",function () {
			this.style.border="1px solid #fff";
			K(new Date(parseInt(this.value,10),x-1,A));
		}).bind("keypress",z);
		
		$(i).unbind("focus").bind("focus",function () {
			t.style.display="";
			this.style.border="1px solid #999";
		}).bind("blur",function () {
			this.style.border="1px solid #fff";
			K(new Date(w,parseInt(this.value,10)-1,A));
		}).bind("keypress",z);
		
		$(o).unbind("keyup").bind("keyup",function()
		{
			$(this).val($(this).val().replace(/\D/g,''))
		});
		
		$(q).unbind("keyup").bind("keyup",function()
		{
			$(this).val($(this).val().replace(/\D/g,''))
		});
		
		$(p).unbind("keyup").bind("keyup",function()
		{
			$(this).val($(this).val().replace(/\D/g,''))
		});
		
		$(q).unbind("keypress").bind("keypress",z);
		$(o).unbind("keypress").bind("keypress",z);
		$(p).unbind("keypress").bind("keypress",z);
		$(n).unbind("click").bind("click",function (e) {
			j.onSetDate&&(w="",x="",A="",j.onSetDate.call(b));
			var yy=$(h).val();
			var MM=$(i).val()-1;
			var dd=calIfrmdoc.find('.lhgcal_td_back').html();
				if(dd==null)
					dd=calIfrmdoc.find('.lhgcal_td_today').html();
			var hh=$(o).val();
			var mm=$(p).val();
			var ss=$(q).val();
			if(parseInt(MM)<10) MM='0'+MM;
			if(parseInt(dd)<10) dd='0'+dd;
			var mydate=new Date(yy,MM,dd,hh,mm,ss);
			if(dd==null)return;
			b.inpObj.value=G.call(mydate,j.format);
			b.hideCalendar();
		});
		
			calIfrmdoc.find('.delbtn').unbind("click").bind("click",function()
			{
				b.inpObj.value='';
				b.hideCalendar();
			});
		
		
		$(m).unbind("click").bind("click",function (e) {
			if(j.onSetDate) {
				var c=new Date;
				var w=c.getFullYear();
				var x=c.getMonth()+1;

				var A=c.getDate();
				j.onSetDate.call(b)
			}
			b.inpObj.value=G.call(new Date,j.format);
			b.hideCalendar();
			//$.preventDefault()
		});
		L();
		M();
		$(r).bind("mousedown",function ($) {
			$.stopPropagation()
		});
		$(t).bind("mousedown",function ($) {
			$.stopPropagation()
		});
		$(d).bind("mousedown",function () {
			r.style.display="none";
			t.style.display="none";
			//calIfrm.hide();
		});
		$(document).bind("click",b.hideCalendar);
		document.compatMode!=="CSS1Compat"&&($(h).css({
			height:"16px",width:"49px"
		}),$(i).css({
			height:"16px",width:"30px"
		}),$(".lhgcal_foot_time input").css({
			height:"19px",width:"22px"
		}));
		$(window).bind("unload",function () {
			
			f=g=h=i=k=l=m=n=e=o=p=q=r=s=t=u=d=b.inpObj=null;
		})
		
	};
	$.fn.position=function () {
		if(this[0]) {
			var a=this[0].getBoundingClientRect(),b=this[0].ownerDocument.documentElement,c=this[0].ownerDocument.body,d=b.clientTop||c.clientTop||0,e=b.clientLeft||c.clientLeft||0,f=a.top+(self.pageYOffset||b.scrollTop||c.scrollTop)-d,g=a.left+(self.pageXOffset||b.scrollLeft||c.scrollLeft)-e;
			return {
				top:f,left:g
			}
		}return this
	};
	
	$.fn.calendar=function (b) {
		this[0]&&$(this[0]).bind("click",function () {
			
			$.calendar=new H;
			$.calendar.Show(b);
			
		});
		return this;
	};
	
	
	var alnk=function(c,win) {
            if ($.browser.msie) return win.createStyleSheet(c).owningElement;
            else {
                var e = win.createElement('link');
                e.rel = 'stylesheet';
                e.type = 'text/css';
                e.href = c;
                win.getElementsByTagName('head')[0].appendChild(e);
                return e
            }
        }
		
	$(window).bind("unload",function () {
		calIfrm.hide();
		$.calendar=null;
	})
		
	$(function () {
			if(self==top)
			{
			var _win=window;
            var a, doc, r_win = [_win];
                while (_win.parent && _win.parent != _win) {
                    try {
                        if (_win.parent.document.domain != document.domain) break
                    } catch(e) {
                        break
                    }
                    _win = _win.parent;
                    r_win.push(_win)
                }
			if(!_win.parent) return;
            a =_win.document.createElement('iframe');
            $(a).attr({
                src: 'javascript:void(0)',
                frameBorder: 0,
                scrolling: 'no',
				id:'califrm',
				name:'califrm'
            }).css({
                display: 'none',
                position: 'absolute',
                zIndex: 19700,
				width:182,
				height:229,
				'left':'96px',
				'top':'218px'
            });
            $(_win.document.body).append(a);
            doc = a.contentWindow.document;
            doc.open();
            doc.write('<html><head><\/head><body style="margin:0px;padding:0px;">'+tmpl+'<\/body><\/html>');
			alnk(D() + 'lhgcalendar.css',doc);
			doc.close();
			}
			try
			{
			calIfrm=parent.$("#califrm");
			calIfrmdoc=parent.$("#califrm").contents();
			}catch(error){}
	});
})(window.lhgcore||window.jQuery);