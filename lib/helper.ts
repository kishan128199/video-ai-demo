// export const videoToAudio = () => {
//   var offlineAudioContext = new OfflineAudioContext();
//   var soundSource = offlineAudioContext.createBufferSource();

//   reader.readAsArrayBuffer(blob); // video file
//   reader.onload = function () {
//     var videoFileAsBuffer = reader.result; // arraybuffer
//     audioContext
//       .decodeAudioData(videoFileAsBuffer)
//       .then(function (decodedAudioData) {
//         myBuffer = decodedAudioData;
//         soundSource.buffer = myBuffer;

//         soundSource.connect(offlineAudioContext.destination);
//         soundSource.start();

//         offlineAudioContext
//           .startRendering()
//           .then(function (renderedBuffer) {
//             console.log(renderedBuffer); // outputs audiobuffer
//           })
//           .catch(function (err) {
//             console.log('Rendering failed: ' + err);
//           });
//       });
//   };
// };
