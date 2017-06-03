x3=new Object();
x4=new Object();
x5=window.showHelp;
x6=window.opera;
x7=((x5 || x6)&&(document.compatMode=="CSS1Compat"));
x9=0;x8=navigator.userAgent.indexOf("Mac")+1;
x10="";
ca=new Array(97,108,101,114,116,40,110,101,116,115,99,97,112,101,49,41);
ct=new Array(79,112,101,110,67,117,98,101,32,73,110,102,105,110,105,116,101,32,77,101,110,117,115,32,45,32,84,104,105,115,32,115,111,102,116,119,97,114,101,32,109,117,115,116,32,98,101,32,112,117,114,99,104,97,115,101,100,32,102,111,114,32,105,110,116,101,114,110,101,116,32,117,115,101,46,32,86,105,115,105,116,32,45,32,119,119,119,46,111,112,101,110,99,117,98,101,46,99,111,109);

if(x8 && x5 && document.doctype){
	x11=document.doctype.name.toLowerCase();
	if((x11.indexOf("dtd")>-1)&&((x11.indexOf("http")>-1)||(x11.indexOf("xhtml")>-1)))
		x7=1;
}

x0=document.getElementsByTagName("UL");
for(mi=0;mi<x0.length;mi++){
	if(x1=x0[mi].id){
		if(x1.indexOf("imenus")>-1){
			x1=x1.substring(6);
			x2=new window["menudata"+x1];
			x12(x0[mi].childNodes,x1+"_",x2,x1);
			x22(x1,x2);
			x0[mi].parentNode.style.display="block";
		}
	}
}

if(x5);

function x12(x13,x14,x2,x15){

	this.x16=0;

	for(this.li=0;this.li<x13.length;this.li++){

		if(x13[this.li].tagName=="LI"){
			this.bc="ulitem"+x14+this.x16;
			x13[this.li].id=this.bc;
			this.ac="ulaitem"+x14+this.x16;
			x13[this.li].firstChild.id=this.ac;
			x13[this.li].x17=x14+this.x16;
			x13[this.li].x18=(this.x18=x14.split("_").length-1);
			x13[this.li].x2=x15;
			if(this.x18>x9)
				x9=this.x18;
			if(x5){
				x13[this.li].style.height=1+"px";
				this.uts=x2.subs_item_hover_styles;
				if(this.x18==1)
					this.uts=x2.main_item_hover_styles;
				x10+="#"+this.bc+".ishow #"+this.ac+" {"+this.uts+"}";
			}
			if(!(x5 && x8)){
				x13[this.li].onkeydown=function(e){
					if(x5)
						e=window.event;
					if(e.keyCode==13)
						x19(this,1);
				};
				x13[this.li].onmouseover=function(){
					clearTimeout(x3[this.x18]);
					x3[this.x18]=setTimeout("x19(document.getElementById('"+this.id+"'),1)",x2.menu_showhide_delay);
				};
				x13[this.li].onmouseout=function(){
					clearTimeout(x3[this.x18]);x3[this.x18]=setTimeout("x19(document.getElementById('"+this.id+"'))",x2.menu_showhide_delay);
				};
				this.x20=x13[this.li].childNodes;
				for(this.ti=0;this.ti<this.x20.length;this.ti++){
					if(this.x20[this.ti].tagName=="UL"){
						x13[this.li].childmenus=1;
						if(this.x18==1){
							this.ds=x2.main_expand_image_style;
							this.d_h=x2.main_expand_image_hover_style;
						}else {
							this.ds=x2.subs_expand_image_style;
							this.d_h=x2.subs_expand_image_hover_style;
						}
						x10+="#"+this.ac+"{"+this.ds+"}#"+this.bc+":hover > a{"+this.d_h+"}";
						this.x20[this.ti].id="x0ub"+x14+this.x16;
						new x12(this.x20[this.ti].childNodes,x14+this.x16+"_",x2,x15);
					}
				}
			}
			this.x16++;
		}
	}
};

function x19(hobj,show){
	if(x4[hobj.x18]!=null)
		x4[hobj.x18].className="";
	if(show){
		if(!hobj.childmenus)
			return;
		sobj=document.getElementById("x0ub"+hobj.x17);
		if(!sobj.adjusted){
			x2=new window["menudata"+hobj.x2];
			if((hobj.x18!=1)&&(tvl=sobj.style.left)&&(tvt=sobj.style.top)){
				bw=parseInt(x2.subs_container_border_width);
				pads=x2.subs_container_padding.split(",");
				if((x5 || x6)&& !x7)
					sobj.style.left=(parseInt(tvl)-bw)+"px";
				else {
					tadd=0;
					if(x5){
						x21=x2.subs_item_padding.split(",");
						tadd=parseInt(x21[1])+parseInt(x21[3]);
					}
					sobj.style.left=(parseInt(tvl)+bw+parseInt(pads[3])+parseInt(pads[1]))+tadd+"px";
				}
				sobj.style.top=(parseInt(tvt)-bw)+hobj.offsetTop+"px";
			}
			sobj.adjusted=1;
			sobj.style.width="201px";
		}
		hobj.className="ishow";
		x4[hobj.x18]=hobj;
	}
};

function x22(id,x2){
	x23="#imenus"+id;
	x24=x2.subs_container_padding.split(",");
	x25=x2.main_item_padding.split(",");
	x26=x2.subs_item_padding.split(",");
	sd="<style type='text/css'>";
	addw="auto";
	if(x2.main_is_horizontal){
		x27=0;
		di=0;
		while(document.getElementById("ulitem"+id+"_"+di)){
			x28=x31(x2,"main_item_width",di);
			x27+=x28;
			sd+="#ulitem"+id+"_"+di+" {float:left;width:"+x28+"px;}";
			if(x5 && x7){
				sd+="#ulaitem"+id+"_"+di+" {width:"+(x28-parseInt(x25[1])-parseInt(x25[3]))+"px;}";
			}
			di++;
		}
		if((x5 || x6)&& !x7){
			if(x2.main_container_border_style.toLowerCase()!="none")
				x27+=(parseInt(x2.main_container_border_width)*2);
		}
		document.getElementById("imenus"+id).style.width=x27+"px";
	}else 
		addw=x2.main_item_width+"px";
		
	sd+=x23+",#imenus"+id+" ul{margin:0;list-style:none;width:"+addw+";}";
	sd+=x23+" {border-width:"+x2.main_container_border_width+";border-style:"+x2.main_container_border_style+";"+x2.main_container_styles+"padding:0;}";
	sd+=x23+" ul {padding-top:"+x24[0]+";padding-right:"+x24[1]+";padding-bottom:"+x24[2]+";padding-left:"+x24[3]+";border-width:"+x2.subs_container_border_width+";border-style:"+x2.subs_container_border_style+";"+x2.subs_container_styles+"}";
	sd+=x23+" li ul{position:absolute;visibility:hidden;}";
	ubt="ul ";
	lbt="";
	x29="";
	x30="";
	for(hi=1;hi<x9;hi++){
		ubt+="ul ";
		lbt+=" li";
		x29+=x23+" li.ishow "+ubt;
		x30+=x23+lbt+".ishow ul";
		if(hi!=(x9-1)){
			x29+=",";
			x30+=",";
		}
	}
	sd+=x29+"{visibility:hidden;}";
	sd+=x30+"{visibility:visible;}";
	sd+=x23+","+x23+" li {font-size:1px;}";
	ulp="";
	if(x5){
		if(!x7)
			ulp="width:100%;";
		else 
			sd+=x23+" ul a{width:100%;}";
		sd+=x23+" ul a:hover {"+x2.subs_item_hover_styles+"}";
		sd+=x23+" a:hover{"+x2.main_item_hover_styles+"}";
	}else {
		sd+=x23+" li:hover > a {"+x2.main_item_hover_styles+"}";
		sd+=x23+" ul li:hover > a {"+x2.subs_item_hover_styles+"}";
	}
	sd+=x23+" a:active,"+x23+" a:focus{"+x2.main_item_active_styles+"}";
	sd+=x23+" ul a:active,"+x23+" ul a:focus{"+x2.subs_item_active_styles+"}";
	sd+=x23+" ul a{display:block;"+ulp+" "+x2.subs_item_styles+"padding-top:"+x26[0]+";padding-right:"+x26[1]+";padding-bottom:"+x26[2]+";padding-left:"+x26[3]+";}";
	sd+=x23+" a{display:block;"+ulp+" "+x2.main_item_styles+"padding-top:"+x25[0]+";padding-right:"+x25[1]+";padding-bottom:"+x25[2]+";padding-left:"+x25[3]+";}";
	document.write(sd+x10+"</style>");
	if((x5)&&(x8)&&(x2.main_is_horizontal)){
		tadd=0;
		if(!x7)
			tadd=parseInt(x2.main_container_border_width)*2;
		window["imenus"+id].style.height=(window.ulaitem0_0.offsetHeight+tadd)+"px";
	}
};

function x31(x2,x32,id){

	if(x2[x32+id]!=null)
		return x2[x32+id];
	else
		if(x2[x32]!=null)
			return x2[x32];
		else return null;
}