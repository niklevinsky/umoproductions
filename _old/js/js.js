function colorize(){
	var randomNumber = Math.random();
	var randomHue = Math.random();
	
	if (randomNumber < .5) {
		var mainColor = $.Color( [randomHue, 0.1, .4], 'HSL' ).toRGB()
		var mainColorText = $.Color( [randomHue, 0.1, .1], 'HSL' ).toCSS()
		var mainColorBG = $.Color( [randomHue, 0.3, .92], 'HSL' ).toCSS()
		var mainColorAlternate = $.Color( [randomHue, 0.05, .7], 'HSL' ).toCSS()
		var mainColorPageBG = $.Color( [randomHue, 0.1, .2], 'HSL' ).toCSS()
		var complementaryColor = mainColor.complementary().toCSS()
	} else{
		var mainColor = $.Color( [randomHue, 0.1, .6], 'HSL' ).toRGB()
		var mainColorText = $.Color( [randomHue, 0, .9], 'HSL' ).toCSS()
		var mainColorBG = $.Color( [randomHue, 0.2, .13], 'HSL' ).toCSS()
		var mainColorAlternate = $.Color( [randomHue, 0.01, .3], 'HSL' ).toCSS()
		var mainColorPageBG = $.Color( [randomHue, 0.1, .85], 'HSL' ).toCSS()
		var complementaryColor = mainColor.complementary().toCSS()
	};
	$('body').css("backgroundColor",mainColorBG);
	$('body').css("color",mainColorText);
	$('a').css("color", complementaryColor);
	// $('#container').css("border", "1px solid " + mainColorAlternate);
	// $('#container').css("backgroundColor", mainColorBG);
	$('h1').css("color", mainColorText);
	$('#nav').css("color", mainColorText);
	$('.navItem a').css("color", mainColorText);
	$('#trackPercent').css("color", mainColorAlternate);
	$('#copyright').css("color", mainColorAlternate);
	$('#copyright a').css("color", mainColorAlternate);
}

$(function() {
	$('.hide').css("display", "none");
	
	$("#recolorize").click(function() {
		colorize();
		return false;
	});
	
	$("#logo").click(function() {
		$("#nav").toggle("fast");
		return false;
	});
	$("#liMusic").click(function() {
		$("#music").toggle("fast");
		return false;
	});
	$("#liDesign").click(function() {
		$("#design").toggle("fast");
		return false;
	});
	
	$("#showAll").click(function() {
		$("#nav").show("fast");
		$(".hide").show("fast");
		return false;
	});
	
	$("#hideAll").click(function() {
		$(".hide").hide("slow");
		return false;
	});

   
	$("a.box").fancybox({
		'overlayOpacity':0.9,
		'overlayColor':'#ffffff'
	});
	
	
	
	
			$("#mp3Player").jPlayer({
			ready: function () {
				customCssIds: true;
			}
		})
		$("#mp3Player").jPlayer("cssId", "play", "play");
		$("#mp3Player").jPlayer("cssId", "pause", "pause");
		$("#mp3Player").jPlayer("cssId", "stop", "stop");
		$("#mp3Player").jPlayer("onProgressChange", function(lp,ppr,ppa,pt,tt) {
	 		$("#trackPercent").text(parseInt(ppa)+"%");
		});
		
		$("#stop").click(function() {
			$("#player").hide("fast");
		});
	
		$("#playOutline").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_ish.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/ish-outline.mp3').jPlayer("play");
			return false;
		});
		$("#playFreshlySeasoned").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_ish.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/ish-freshlySeasoned.mp3').jPlayer("play");
			return false;
		});
		$("#playItCanGoDown").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_knocean.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/Knocean-It_Can_Go_Down.mp3').jPlayer("play");
			return false;
		});
		$("#playInnocentOnes").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_knocean.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/Knocean-Innocent_Ones.mp3').jPlayer("play");
			return false;
		});
		$("#playYellowRaincoat").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_bload.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/12_Cents_for_Marvin-Yellow_Raincoat.mp3').jPlayer("play");
			return false;
		});
		$("#playOneByOne").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_change.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/12_Cents_for_Marvin-One_By_One.mp3').jPlayer("play");
			return false;
		});
		$("#playWarriors").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_jpq.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/John_P_Qwik_and_Professor_Umo-Warriors.mp3').jPlayer("play");
			return false;
		});
		$("#playOrigins").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_jpq.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/John_P_Qwik_and_Professor_Umo-Origins.mp3').jPlayer("play");
			return false;
		});
		$("#playBitterRiver").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_ylem.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/ylem-bitter_river.mp3').jPlayer("play");
			return false;
		});
		$("#playFoundYouOut").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_punchout.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/Punch_Out-Found_You_Out.mp3').jPlayer("play");
			return false;
		});
		$("#playNeedToKnow").click(function() {
			$("#player").show("fast");
			$("#trackname").text($(this).text());
			$("#cdArt").html("<img src='images/thumb_punchout.jpg' border='0' />");
			$("#mp3Player").jPlayer("setFile", 'music/Punch_Out-Need_To_Know.mp3').jPlayer("play");
			return false;
		});
});