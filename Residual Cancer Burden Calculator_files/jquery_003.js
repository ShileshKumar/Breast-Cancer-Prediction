
(function($) { 
	$.fn.cornerMe = function(vars) {
		vars = jQuery.extend({
			topLeft : "top-left corner top-bottom",
			topRight : "top-right corner",
			right : "right side",
			bottomRight : "bottom-right corner",
			bottomLeft : "bottom-left corner top-bottom",
			left : "left side",
			thisBox : false,
			corners	: false,	// are we doing just corners?
			caps : false,		// are we doing just end-caps (fixed width)?
			capTop : "cap-top cap",
			capBottom : "cap-bottom cap"
		}, vars);

		// NOTE: haven't reconciled the ability to pass in custom css classes for these 
		//		sections above vs. the "indexOf()" operations below
		//	ALSO NOTE: same with the $.browser.msie hacks down below...
		// console.log(vars)
		return this.each(function() {

			// hmmmmmm .... this gets me every time and is required for ANY of this to 
			// 		work. This basically means this can't be used on Absolutely positioned elements ... 
			$(this).css("position", "relative");

			if (vars.thisBox != "") {
				$(this).addClass(vars.thisBox);
			}
			var stuff = "";
			if (vars.caps) {
				stuff += '<div class="' + vars.capTop + '"></div>';
				stuff += '<div class="' + vars.capBottom + '"></div>';
			} else {
				for (x in vars) {
					if (vars.corners) { // if is corners
						if (typeof vars[x] != "boolean") {
							// see "note" above
							if ($.trim(vars[x]).indexOf("corner") != -1) {
								if ( $(this).children("div[class='" + $.trim(vars[x]) + "']").size() < 1 ) { // if not there already
									stuff += '<div class="' + $.trim(vars[x]) + '"></div>';
								}
							}
						}
					} else { // any other type
						if (typeof vars[x] != "boolean") {
							// see "note" above
							if ($.trim(vars[x]).indexOf("cap") == -1) {
								if ( $(this).children("div[class='" + $.trim(vars[x]) + "']").size() < 1 ) { // if not there already
									stuff += '<div class="' + $.trim(vars[x]) + '"></div>';
								}
							}
						}
					}
				}
			}
			$(this).append(stuff);

			// need to set height's dynamically in IE6, since abs pos won't calc parent's height
			if ($.browser.msie && $.browser.version < 7) {
				if (!vars.corners || vars.caps) {
					$("div.side", this).height($(this).innerHeight() + "px");
					$("div.top-bottom", this).width($(this).innerWidth() + "px");
				}
			}
		});
	};

})(jQuery);

