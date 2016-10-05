$(".thumbnail img").hover(
    function(){ 
	    $("#cardDesignFrame").html($("<img>").attr("src", $(this).attr('title')));
        $(this).find("#cardDesignFrame").show();
        $("#cardDesignFrame").css("display", "block");	    
	}
);

/*$("img").hover(
    function(){ 
	    $("#cardDesignFrame").html($("<img>").attr("src", $(this).attr('title')));
        $(this).find("#cardDesignFrame").show();
        $("#cardDesignFrame").css("display", "block");
    },
    function(){
	    $("#cardDesignFrame").html($("<img>").attr("src", ""));     
        $(this).find("#cardDesignFrame").hide()
        $("#cardDesignFrame").css("display", "none");
    }
);*/