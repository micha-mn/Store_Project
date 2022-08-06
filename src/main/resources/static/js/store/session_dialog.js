    $(function () {
		 $.idleHands({
                    activityEvents: 'click',
                    applicationId: 'my_application',
                    dialogMessage: 'Your session is about to expire due to inactivity.',
                    dialogTimeRemainingLabel: 'Time until logout',
                    dialogTitle: 'Session Expiration Warning',
                    documentTitle: 'Warning',
                    heartbeatCallback: (function (data, textStatus, jqXHR) {
                       // console.log('pulse');
                    }),
                    heartbeatUrl: window.location.href,
                    heartRate: 10,
                    inactivityLogoutUrl: '/logout',
                    inactivityDialogDuration: 60,
                    localStoragePrefix: 'my_application',
                    manualLogoutUrl: '/logout',
                    maxInactivitySeconds: 900
                });
  });
