$(document).ready(function() {
	$("#messageNotification").jqxNotification({
                width: '100%', appendContainer: "#container", opacity: 0.9,
                autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 3000, template: "info"
            });
    $('#submit').click(function() {
	
        if ($('#username').val().length === 0) {
              $("#notificationText").empty();
             $("#notificationText").append("Enter your username");
          $("#messageNotification").jqxNotification("open");

        }
         else if ($('#password').val().length === 0) {
         $("#notificationText").empty();
             $("#notificationText").append("Enter your password");
          $("#messageNotification").jqxNotification("open");

        }
        dataParam={"userName":$('#username').val(),
			  "password":$('#password').val()
			 };
		
		debugger;
	   $.ajax({
      	    	        type: "POST",
      	    	        contentType: "application/json",
      	    	        url: "/api/auth/signin",
      	    	        data: JSON.stringify(dataParam),
      	    	        dataType: 'json',
      	    	        async:true,
      	    	        cache: false,
      	    	        timeout: 600000,
      	    	        success: function (data) {
						setJwtToken(data.jwt)
						window.location.href='/store/home'
						  
      	   },
      	    	        error: function (e) {
      	    	        	
      						  console.log("ERROR : ", e);
      	
      	    	        }
      	    	    });
		 
    })
});


