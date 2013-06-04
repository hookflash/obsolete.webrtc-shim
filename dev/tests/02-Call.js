/*!markdown

Should check that calls can be placed.

*/
define(["webrtc-shim"], function (shim) {
  var ws = null;

  test('WebSocket should be created', function () {
    ws = HELPERS.getWSConnection();
    expect(ws).to.exist;
  });

});