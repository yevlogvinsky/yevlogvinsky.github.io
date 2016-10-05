/*$('.list-card-image').hover(function() {
      $("#cardScanBox").html($("<img>").attr("src", $(this).attr('title')));
});
*/
/*	$('list-card-image').hover(function() {
		$("#cardScanBox").html($("<img>").attr("src", $(this).attr('title')));
		}, 
		function() {
			$("#cardScanBox").html('');
	});
*/
$(".list-card-image").hover(
    function(){ 
	    $("#cardScanBox").html($("<img>").attr("src", $(this).attr('title')));
        $(this).find("#cardScanBox").show();
        $("#cardScanBox").css("display", "block");
    },
    function(){
	    $("#cardScanBox").html($("<img>").attr("src", ""));     
        $(this).find("#cardScanBox").hide()
        $("#cardScanBox").css("display", "none");
    }
);