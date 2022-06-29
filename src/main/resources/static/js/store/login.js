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
						
					
					   var settings = {
						  "url": "/store/home",
						  "method": "POST",
						  "timeout": 0,
						  "headers": {
						    "Authorization": "Bearer "+data.jwt
						  },
						};
						
						$.ajax(settings).done(function (response) {
							wind
						  console.log(response);
						});
      	   },
      	    	        error: function (e) {
      	    	        	
      						  console.log("ERROR : ", e);
      	
      	    	        }
      	    	    });
		 
    })
});


/* async function handleLogin(dataParam) {
  // Call login method in API
  // The server handler is responsible for setting user fingerprint cookie during this as well
  const { jwtToken } = await login(dataParam)
  setJwtToken(jwtToken)
 // setRefreshToken(refreshToken)

  // If you like, you may redirect the user now
  Router.push("/some-url")
}*/

