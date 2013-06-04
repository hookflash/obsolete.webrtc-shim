
((function() {

	requirejs.config({
		paths: {
			q: "/lib/q",
			tests: "/tests",
      fixtures: "/fixtures",
			"webrtc-shim": "/lib/webrtc-shim"
		}
	});

	var ready = Q.defer();

	window.__TestHarnessReady = ready.promise;

	require([
		"q/q",
		"webrtc-shim"
	], function(Q, WebRTCshim) {

		window.HELPERS = {
      getWSConnection: function(){
        var wsHost = "ws://"+window.location.host.replace(/:.*/, '');
        if (window.location.port.length > 0) wsHost += ":"+window.location.port;
        return new WebSocket(wsHost);
      }
		};

		// Wait for DOM to be ready.
		$(document).ready(function() {

			$("BUTTON.link-rerun").click(function() {
				location.reload(true);
			});

			// Signal that everything is ready for use.
			ready.resolve();
		});
	});

})());
