$(document).ready(function() {
	document.querySelector('#password').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
   	 $( "#submit" ).trigger( "click" );
    };
});
	document.querySelector('#username').addEventListener('keypress', function (e) {
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

		if ($('#username').val().length === 0) {
			$("#notificationText").empty();
			$("#messageNotification").jqxNotification({
				template: "info"
			});
			$("#notificationText").append("Enter your username");
			$("#messageNotification").jqxNotification("open");

		} else if ($('#password').val().length === 0) {
			$("#notificationText").empty();
			$("#messageNotification").jqxNotification({
				template: "info"
			});
			$("#notificationText").append("Enter your password");
			$("#messageNotification").jqxNotification("open");

		} else {
			dataParam = {
				"userName": $('#username').val(),
				"password": $('#password').val()
			};

			
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/api/auth/signin",
				data: JSON.stringify(dataParam),
				dataType: 'json',
				async: true,
				cache: false,
				timeout: 600000,
				success: function(data) {

					setJwt(data.jwt);
					setFirstLastName(data.firstName, data.lastName, data.username);
					if (data.firstLogin)
					{
							
					var settings = {
						"url": "/retail/welcome",
						"method": "POST",
						"timeout": 0,
						"headers": {
							"Authorization": "Bearer " + data.jwt
						},
					};

					$.ajax(settings).done(function(response) {
						window.location.href = '/retail/welcome'
						console.log(response);
					});
					}
					else {
					
					var settings = {
						"url": "/retail/supplier",
						"method": "POST",
						"timeout": 0,
						"headers": {
							"Authorization": "Bearer " + data.jwt
						},
					};

					$.ajax(settings).done(function(response) {
						window.location.href = '/retail/supplier'
						console.log(response);
					});
					
					}
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