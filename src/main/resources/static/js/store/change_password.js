$(document).ready(function() {
	document.querySelector('#newPassword').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
   	 $( "#submit" ).trigger( "click" );
    };
});
	document.querySelector('#confirmNewPassword').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
   	 $( "#submit" ).trigger( "click" );
    };
});
	
	$("#messageNotification").jqxNotification({
		width: '100%',
		appendContainer: "#container",
		opacity: 0.9,
		autoOpen: false,
		animationOpenDelay: 800,
		autoClose: true,
		autoCloseDelay: 3000,
		template: "info"
	});
	$('#submit').click(function() {
		if ($('#newPassword').val().length === 0 || $('#confirmNewPassword').val().length === 0)
		{
			$("#notificationText").empty();
			$("#messageNotification").jqxNotification({
				template: "danger"
			});
			$("#notificationText").append("Please enter your new password and confrim new password");
			$("#messageNotification").jqxNotification("open");
		}else if ($('#newPassword').val()!=$('#confirmNewPassword').val())
		{
			$("#notificationText").empty();
			$("#messageNotification").jqxNotification({
				template: "danger"
			});
			$("#notificationText").append("New password and confirm password do not match");
			$("#messageNotification").jqxNotification("open");
		}
		else{
			dataParam = {
				"userName": getUsername(),
				"password": $('#confirmNewPassword').val()
			};
			
				$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/api/auth/changepassword",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(data) {

					
					var settings = {
						"url": "/retail/supplier",
						"method": "POST",
						"timeout": 0,
						"headers": {
							"Authorization": "Bearer " + getJwt()
						},
					};

					$.ajax(settings).done(function(response) {
						window.location.href = '/retail/supplier'
						console.log(response);
					});
					
				},
				error: function(e) {
					if (e.status = 401) {
						$("#notificationText").empty();
						$("#messageNotification").jqxNotification({
							template: "danger"
						});
						$("#notificationText").append("invalid username or password");
						$("#messageNotification").jqxNotification("open");
					}

					console.log("ERROR : ", e);

				}
			});
		}
	});
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