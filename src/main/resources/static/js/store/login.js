$(document).ready(function() {
	$("#messageNotification").jqxNotification({
                width: '100%', appendContainer: "#container", opacity: 0.9,
                autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 3000, template: "info"
            });
    $('#submit').click(function() {
	debugger;
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
    })
});