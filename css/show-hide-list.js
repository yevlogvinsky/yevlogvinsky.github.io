jQuery(document).ready(function() {
	jQuery('#hideshow').live('click', function(event) {        
         jQuery('.have').toggle('show');
         jQuery('.list-card-image').toggle('show');
    });
});