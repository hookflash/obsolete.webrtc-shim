/*!markdown

Should check that vendor prefixes were aliased.

*/
define(["webrtc-shim"], function (shim) {

  test('PeerConnection should exist', function () {
    expect(shim).to.have.ownProperty('PeerConnection');
    expect(shim.PeerConnection).to.exist;
  });

  test('IceCandidate should exist', function () {
    expect(shim).to.have.ownProperty('IceCandidate');
    expect(shim.IceCandidate).to.exist;
  });

  test('SessionDescription should exist', function () {
    expect(shim).to.have.ownProperty('SessionDescription');
    expect(shim.SessionDescription).to.exist;
  });

  test('MediaStream should exist', function () {
    expect(shim).to.have.ownProperty('MediaStream');
    expect(shim.MediaStream).to.exist;
  });

  test('getUserMedia should exist', function () {
    expect(shim).to.have.ownProperty('getUserMedia');
    expect(shim.getUserMedia).to.exist;
  });

  test('URL should exist', function () {
    expect(shim).to.have.ownProperty('URL');
    expect(shim.URL).to.exist;
  });
});