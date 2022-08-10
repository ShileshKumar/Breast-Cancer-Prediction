var SZCD = SZCD || {
	// public
	vendor: "",
	campID: 0,
	fallbackVTID: "", 
	UID: "", 
	VTID: "", 
	LID: "",			
	userfound: 0, 
	userpath: "",
	status: "notstarted", 

	isMultiCampaign: false,
	multiCampaignCount: 0,
	campaignsLeft: [],
	campaignIndex: 0,
	campaignStateValues: {},
	
	debug: 0,
	local: 0,
	method: "append",
	acsAttemptsDefault: 100,
	acsAttempts: 100,
	iframeAttempts: 100,
	sleep: 50,
		
	callback: null,
	eventElement: null,
	eventName: null,
	event: null,
	
	// private
	startTime: "",
	endTime: "",
	tagStartTime: "",
	tagEndTime: "",
		
	ds_protocol: "",
	bs_protocol: "https://",
	scriptBase: "",
	scriptProc: "SizmekPhoneConvProcess_Generic.js",
	scriptRun: "",
	
	// temporary vars
	cv: "",
	sz: "",
	li: "",
	sz_fromiframe_received: false,
	sz_fromiframe: "",
	ebRand: 0,
	
	// debugging
	adTest: "",
	adBlockerEnabled: "nottested",
	cookiesEnabled: "",
	exception: "",
	
	e: function (m) {
		//if (this.debug) {
			console.log('[ERROR] '+m);
		//}
	},

	l: function (m) {
		if (this.debug) {
			console.log('[LOG] '+m);
		}
	}
};



SZCD.getQSParam = function (u, p) {
    var v = '';
    var i = u.indexOf(p + '=');
    //var ip = u.indexOf('pltag=');
    if (i >= 0) {
		var e = u.indexOf('&', i);
		if (e >= 0) {
			v = u.substring(i + p.length + 1, u.indexOf('&', i));
		} else {
			v = u.substring(i + p.length + 1);
		}
    }
    //alert('p='+p+'\ni='+i+'\ip='+ip+'\nv='+v);
    return v;
}


SZCD.writeTag = function(url) {
	this.l('writing tag '+url+' using method: '+this.method);
	
	if (this.method == "append") {
		var head = document.getElementsByTagName("head")[0];
		var scr = document.createElement('script');
		scr.setAttribute('src', url);
		head.appendChild(scr);
		
	} else {
		getTagUrl = "<scr" + "ipt src=\""+url+"\"></scr" + "ipt>";
		document.write(getTagUrl);
	}
}


SZCD.getCreativeState = function ()
{
	var c = "";
	if(this.isMultiCampaign && this.campaignsLeft.length > 0){
		this.status = "try_viewthru" + (this.campaignIndex + 1);
		c = this.campaignsLeft[0];
		this.campaignsLeft.shift();
	} else {
		this.status = "try_viewthru";
		c = this.campID;
	}

    var cmpidvalue=encodeURIComponent(c);
	var tagURL = this.bs_protocol+"bs.serving-sys.com/BurstingPipe/adServer.bs?cn=gs&campaignid=" + cmpidvalue + "&rnd=" + this.ebRand;
	
	this.tagStartTime = Date.now();
	this.writeTag(tagURL);
	//ebCreativeState="sz.lkdjafdjkl-lakdjfajkdf-3298u2-alkjdf+cv.200002";
	//ebCreativeState="sz.lkdjafdjkl-lakdjfajkdf-3298u2-alkjdf+cv.200002+li.linevalue";
	this.l('getCreativeState() FIN');
}


SZCD.getParamsFromUrl = function () {
	this.status = "try_clickthru";

    try {
		var url = document.URL;
		
		// Removed li check
		// || url.indexOf("li=") < 0
		if (!url || url.indexOf('cv=') < 0 || url.indexOf('sz=') < 0) {
			//script query string empty, fatal error, cannot show default tag
			//another fail case that should never happen
			this.l('not a clickthru case, url does not contain inputs');
			return;
		} else {
			//get the parameteter 
			this.cv = this.getQSParam(url, 'cv');
			this.sz = this.getQSParam(url, 'sz');
			this.li = this.getQSParam(url, 'li');
			this.l('is a clickthru case, url HAS params');
		}
				
    } catch (err) {
        //should never get to this, but just in case
        //if (mdmdDebug) alert("early parse exception! " + err);
		this.e('exception: ' + err);
        return;
    }
}

SZCD.getParamsFromCS = function() {
	this.tagEndTime = Date.now();
	this.l('CS tag completed.  start: '+this.tagStartTime+' finish: '+this.tagEndTime+' elapsed: '+(this.tagEndTime-this.tagStartTime)+'ms');
	this.l('getting params from creative state');
	// expected CS value=cv.10000001+sz.2cafa715-a3be-4367-ba99-4dc7059f3356 
	// removed check for li in creative state
	// || ebCreativeState.indexOf("li") == 0
    if (typeof ebCreativeState !== 'undefined' && ebCreativeState != null && (ebCreativeState.indexOf("cv") == 0 || ebCreativeState.indexOf("sz") == 0)) {
		var csArr = ebCreativeState.split("+");
		for (var i = 0; i <  csArr.length; i++) {
			this.l('i: '+i+' csArr: ' + csArr[i]);
			var varArr = csArr[i].split(".");
			if (varArr[0] == "cv") {
				this.cv = (this.cv != "") ? this.cv + "|" + varArr[1] : varArr[1];
			} else if (varArr[0] == "sz") {
				this.sz = varArr[1];
			} else if (varArr[0] == "li") {
				this.li = varArr[1];
			}
		}
	} else {
		this.l('creative state does not contain expected value');
	}
}

SZCD.checkReady = function() {

	this.l('checking if values have arrived... try '+this.acsAttempts);
	if (typeof ebCreativeState == 'undefined' || ebCreativeState == null) {
		if (this.acsAttempts > 0) {
			this.acsAttempts--;
			setTimeout(this.checkReady.bind(this), this.sleep);
		} else {
			if(!this.isMultiCampaign){
				this.e('maximum attempts exceeded, could not wait for CreativeState anymore');
				this.status = "failedMaxCreativeStateSingleCampaign";
				this.failed();
			} else {
				if(this.campaignsLeft > 0){
					this.acsAttempts = this.acsAttemptsDefault;
					ebCreativeState = null;
					this.l('get creative state and try to get params/viewthru case');
					this.getCreativeState();
					this.checkReady();
				} else {
					this.e('maximum attempts exceeded, could not wait for CreativeState anymore');
					this.status = "failedMaxCreativeStateMultiCampaign" + this.campaignsLeft + "Left";
					this.failed();
				}
			}
		}
	} else {
		this.l('values have arrived!');
		this.getParamsFromCS();
		if(this.campaignsLeft > 0){
			this.acsAttempts = this.acsAttemptsDefault;
			ebCreativeState = null;
			this.l('get creative state and try to get params/viewthru case');
			this.getCreativeState();
			this.checkReady();
		} else {
			this.checkValues();
		}
	}
}

SZCD.checkReadyIframe = function() {
	this.l('checking if values have arrived via iframe... try '+this.iframeAttempts);
	//if (this.sz_fromiframe == '') {
	if(!this.sz_fromiframe_received) {
		if (this.iframeAttempts > 0) {
			this.iframeAttempts--;
			setTimeout(this.checkReadyIframe.bind(this), this.sleep);
		} else {
			this.e('maximum attempts exceeded, could not wait for iframe anymore');
			this.status = "failedMaxIFrame";
			this.failed();
		}
	} else {
		this.l('values have arrived!');
		this.checkValuesIframe();
	}
}

SZCD.callRunScript = function() {
	//var tagURL = this.szScriptRun;
	this.writeTag(this.scriptRun);
	this.l('callRunScript() FIN');
}

SZCD.checkValues = function() {
	
	if (this.sz.length > 10) {
		this.UID = 'u2='+this.sz;
		this.VTID = this.cv.indexOf("|") > -1 ? this.cv.split("|") : this.cv;
		if(typeof(this.VTID) == "object"){
			var tempvt = [];
			for(var t in this.VTID){
				var found = false;
				for(var i in tempvt){
					if(this.VTID[t] == tempvt[i]){found = true;}
				}
				if(!found){tempvt.push(this.VTID[t]);}
			}
			this.VTID = tempvt;
		}
		this.LID = this.li;

		if(this.vendor == "DialogTech"){
			window._st_custom_id = this.UID;
			window._st_custom_value = this.VTID;
		}			

		this.userfound = 1;
		
		this.l('found user szUID '+this.UID+' and szVTID '+this.VTID+' and szLID ' + this.LID);
		this.status = "complete";
		this.endTime = Date.now();
		this.l('all scripts completed.  start: '+this.startTime+' finish: '+this.endTime+' elapsed: '+(this.endTime-this.startTime)+'ms');
		this.completed();
	} else {
		this.l('no user found for viewthru. getting user via iframe');
		this.status = "try_iframe";
		this.userpath = "search";
		this.writeiFrame();
		this.checkReadyIframe();
	}
}

SZCD.checkValuesIframe = function() {
	if(this.sz_fromiframe.length > 10){
		this.UID = 'u2='+this.sz_fromiframe;
		this.userfound = 1;
		this.status = "complete";
		this.l('found user szUID '+this.UID+' and szVTID '+this.VTID+' and szLID ' + this.LID);
	} else {
		this.UID = "";
		this.userfound = 0;
		this.status = "completeNoUser";
		this.l('no user found');
	}

	this.VTID = this.fallbackVTID;

	if(this.vendor == "DialogTech"){
		window._st_custom_id = this.UID;
		window._st_custom_value = this.fallbackVTID; // 9285 is the hardcoded value
	}
	
	this.completed();
}

SZCD.completed = function (){
	
	this.endTime = Date.now();
	this.l('all scripts completed.  start: '+this.startTime+' finish: '+this.endTime+' elapsed: '+(this.endTime-this.startTime)+'ms');
	
	if(typeof(this.callback) == "function"){
		this.callback();	
	}
	if(this.event != null){
		if(this.eventElement != null){
			this.eventElement.dispatchEvent(this.event);
		} else {
			window.dispatchEvent(this.event);
		}
	}

	if(this.vendor == "DialogTech"){
		this.sourceTrak();
	}
}

SZCD.failed = function (){
	this.endTime = Date.now();
	this.l('workflow failed.  start: '+this.startTime+' finish: '+this.endTime+' elapsed: '+(this.endTime-this.startTime)+'ms');
	trackingQuery = "?";
	trackingQuery += "rand="+this.ebRand;
	trackingQuery += "&status=" + this.status;
	trackingQuery += "&path=" + this.userpath;
	trackingQuery += "&uid=" + this.UID;
	trackingQuery += "&vtid=" + this.VTID;
	trackingQuery += "&lid=" + this.LID;
	trackingQuery += "&cookies=" + this.cookiesEnabled;
	trackingQuery += "&blocker=" + this.adBlockerEnabled;
	trackingQuery += "&time=" + (this.endTime-this.startTime);
	trackingQuery += "&exception=" + encodeURI(this.exception);

	
	if(typeof(this.callback) == "function"){
		this.callback();	
	}
	if(this.event != null){
		if(this.eventElement != null){
			this.eventElement.dispatchEvent(this.event);
		} else {
			window.dispatchEvent(this.event);
		}
	}

	if(this.vendor == "DialogTech"){
		this.sourceTrak();
	}
}


SZCD.sourceTrak = function(){
	(function(){
        var a=document, b=a.createElement("script"); b.type="text/javascript";
        b.async=!0; b.src=('https:'==document.location.protocol ? 'https://' :
        'http://') + 'd31y97ze264gaa.cloudfront.net/assets/st/js/st.js';
        a=a.getElementsByTagName("script")[0]; a.parentNode.insertBefore(b,a);
    })();
}


SZCD.writeiFrame = function(){
	if (this.method == "append") {
		var proto = (("https:" == document.location.protocol) ? "https://" : "http://");
		var f = document.createElement('iframe');
		f.id = "szChildFrame";
		f.width = '0';
		f.height = '0';
		f.frameBorder = '0';
		f.src = proto + "services.serving-sys.com/custprojassets/prd/features/domain/cookie.html?domain="+proto+document.domain;
		//p.parent[p.parent.length-1].appendChild(f);
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(f);
	} else {
		var proto = (("https:" == document.location.protocol) ? "https://" : "http://");
		var url = proto + "services.serving-sys.com/custprojassets/prd/features/domain/cookie.html?domain="+proto+document.domain;
		var getTagUrl = "<ifr" + "ame src=\""+url+"\"></ifr" + "ame>";
		document.write(getTagUrl);
	}
}


SZCD.run = function () {
	this.status = "running";

	try {

		if(!this.isMultiCampaign){
			if (!(this.campID > 0)) {
				this.e("no campaign id defined!");
				this.status = "failedMissingCampaignID";
				this.failed();
				return;
			}
		} else {
			if(this.campID.length == 0){
				this.e("no campaign id defined!");
				this.status = "failedMssingCampaignID";
				this.failed();
				return;
			}
		}
		
		this.l('try to get params from url/clickthru case');
		this.getParamsFromUrl();
		
		if (this.cv && this.sz) {
			this.userpath = "click";
			
			this.l('values have arrived!');
			this.checkValues();
		} else {
			//If no parameter is found then call ViewThrough method
			this.userpath = "view";
			
			this.l('get creative state and try to get params/viewthru case');
			this.getCreativeState();
			
			if (this.method == "append") {
				this.checkReady();
			} else {
				this.callRunScript();
			}
		}


	} catch (err) {
		 //in case of error
		this.status = "failedRuntimeError";
		this.exception = err;
		this.e('exception: ' + err);
		this.failed();
	}
}

SZCD.canSetCookies = function() {
	var cookieEnabled = navigator.cookieEnabled;
    if (!cookieEnabled){ 
		document.cookie = "testcookie=1";
        cookieEnabled = document.cookie.indexOf("testcookie")!=-1;
		// delete cookie
		document.cookie = "testcookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
	return cookieEnabled;
}

SZCD.adBlockTestInit = function(){
	var adBannerId = "adBanner";
	this.adTest = document.createElement("DIV");
	this.adTest.id = adBannerId;
	this.adTest.style.position = "absolute";
	this.adTest.style.left = "-999px";
	this.adTest.appendChild(document.createTextNode("&nbsp;"));
	document.body.appendChild(this.adTest); // add test ad to body

	if(this.adTest){
		setTimeout(this.adBlockTestComplete.bind(this), 100);
	}
}

SZCD.adBlockTestComplete = function(){
	this.adBlockerEnabled = (this.adTest.clientHeight == 0);
	document.body.removeChild(this.adTest);
}

SZCD.init = function(cfgObj) {
	
	this.status = "initializing";
    this.startTime = Date.now();
	this.ebRand = Math.random()+ ' ';
	this.ebRand = this.ebRand * 1000000;
	
	/* CONFIG SECTION */
	
	this.cfg = cfgObj || {};

	if (typeof this.cfg.vendor != 'undefined') {
		this.vendor = this.cfg.vendor;

		if(this.vendor == "DialogTech"){
			window._stk = "";
			window._st_custom_id = "";
			window._st_custom_value = "";	
		}
	}

	if (typeof this.cfg._stk != 'undefined') {
		window._stk = this.cfg._stk;
	}

	if (typeof this.cfg.debug != 'undefined') {
		this.debug = this.cfg.debug;
	}

	if (typeof this.cfg.campID != 'undefined') {
		this.campID = this.cfg.campID;
		if(typeof this.campID == 'object'){
			this.isMultiCampaign = true;
			this.multiCampaignCount = this.campID.length;
			this.campaignsLeft = this.campID.join("|").split("|");
		}
	}

	if (typeof this.cfg.fallbackVTID != 'undefined') {
		this.fallbackVTID = this.cfg.fallbackVTID;
	}
	
	if (typeof this.cfg.local != 'undefined') {
		this.local = this.cfg.local;
	}

	if (typeof this.cfg.method != 'undefined') {
		this.method = this.cfg.method;
	}

	if (typeof this.cfg.acsAttempts != 'undefined') {
		this.acsAttempts = this.cfg.acsAttempts;
		this.acsAttemptsDefault = this.cfg.acsAttempts;
	}

	if (typeof this.cfg.iframeAttempts != 'undefined') {
		this.iframeAttempts = this.cfg.iframeAttempts;
	}

	if (typeof this.cfg.sleep != 'undefined') {
		this.sleep = this.cfg.sleep;
	}

	if(typeof this.cfg.callback == 'function'){
		this.callback = this.cfg.callback;
	}

	if(typeof this.cfg.eventElement != 'undefined'){
		this.eventElement = this.cfg.eventElement;
	}
	
	if (typeof this.cfg.eventName != 'undefined'){
		this.eventName = this.cfg.eventName;
		this.event = document.createEvent('Event');
		this.event.initEvent(this.eventName, true, true);
	}
	
	

	this.bs_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");

	if (!this.local) {
		this.ds_protocol = (("https:" == document.location.protocol) ? "https://secure-" : "http://");
		this.scriptBase = "ds.serving-sys.com/burstingres/CustomScripts/";
	}

	this.scriptRun = this.ds_protocol + this.scriptBase + this.scriptProc;

	
	/* end CONFIG SECTION */
	
	
	this.run();
};

window.addEventListener("message", window.getSizmekCookie, false);
function getSizmekCookie(event){
	var proto = (("https:" == document.location.protocol) ? "https://" : "http://");
	if (event.origin !== proto + "services.serving-sys.com"){
		return;
	}
	SZCD.sz_fromiframe_received = true;
	SZCD.sz_fromiframe = event.data;
}