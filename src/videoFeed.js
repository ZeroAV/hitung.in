var hasilGestur;
    const config = {
        video: { width: 640, height: 480, fps: 30 }
      };
  
      const landmarkColors = {
        thumb: 'red',
        indexFinger: 'blue',
        middleFinger: 'yellow',
        ringFinger: 'green',
        pinky: 'pink',
        palmBase: 'white'
      };
  
      const gestureStrings = {
        'thumbs_up': '👍',
        'victory': '2',
        'zero' : '0',
        'one' : '1',
        'two' : '2',
        'three' : '3',
        'four' : '4',
        'five' : '5',
        'six' : '👆'
      };
  
      async function main() {
  
        const video = document.querySelector("#pose-video");
        const canvas = document.querySelector("#pose-canvas");
        const ctx = canvas.getContext("2d");
        const resultLayer = document.querySelector("#pose-result");
        
        // configure gesture estimator
        // add "✌🏻" and "👍" as sample gestures
        const knownGestures = [
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          fp.Gestures.zero,
          fp.Gestures.one,
          fp.Gestures.three,
          fp.Gestures.four,
          fp.Gestures.five,
          fp.Gestures.six
        ];
        const GE = new fp.GestureEstimator(knownGestures);
  
        // load handpose model
        const model = await handpose.load();
        console.log("Handpose model loaded");
  
        // main estimation loop
        const estimateHands = async () => {
  
          // clear canvas overlay
          ctx.clearRect(0, 0, config.video.width, config.video.height);
          resultLayer.innerText = '';
  
          // get hand landmarks from video
          // Note: Handpose currently only detects one hand at a time
          // Therefore the maximum number of predictions is 1
          const predictions = await model.estimateHands(video, true);
  
          for(let i = 0; i < predictions.length; i++) {
  
            // draw colored dots at each predicted joint position
            for(let part in predictions[i].annotations) {
              for(let point of predictions[i].annotations[part]) {
                drawPoint(ctx, point[0], point[1], 3, landmarkColors[part]);
              }
            }
  
            // now estimate gestures based on landmarks
            // using a minimum confidence of 7.5 (out of 10)
            const est = GE.estimate(predictions[i].landmarks, 7.5);
  
            if(est.gestures.length > 0) {
  
              // find gesture with highest confidence
              let result = est.gestures.reduce((p, c) => { 
                return (p.confidence > c.confidence) ? p : c;
              });
  
              resultLayer.innerText = gestureStrings[result.name];
              hasilGestur = gestureStrings[result.name];
            }
          }
  
          // ...and so on
          setTimeout(() => { estimateHands(); }, 1000 / config.video.fps);
        };
  
        estimateHands();
        console.log("Starting predictions");
        document.getElementById("loading").style.display = "none";
      }
  
      async function initCamera(width, height, fps) {
  
        const constraints = {
          audio: false,
          video: {
            facingMode: "user",
            width: width,
            height: height,
            frameRate: { max: fps }
          }
        };
  
        const video = document.querySelector("#pose-video");
        video.width = width;
        video.height = height;
  
        // get video stream
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
  
        return new Promise(resolve => {
          video.onloadedmetadata = () => { resolve(video) };
        });
      }
  
      function drawPoint(ctx, x, y, r, color) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
      }
  
      window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("startCamera").onclick = function () {
          document.getElementById("loading").style.display = "block";
          initCamera(
            config.video.width, config.video.height, config.video.fps
          ).then(video => {
            video.play();
            video.addEventListener("loadeddata", event => {
              console.log("Camera is ready");
              main();
            });
          });
          navigator.getMedia = ( navigator.getUserMedia || // use the proper vendor prefix
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
          document.getElementById("startCamera").style.display = "none";
          document.getElementById("page-one").style.display = "inline";
          document.getElementById("tutorial").style.display = "none";

          navigator.getMedia({video: true}, function() {
            const canvas = document.querySelector("#pose-canvas");
            canvas.width = config.video.width;
            canvas.height = config.video.height;
            console.log("Canvas initialized");
            var music = document.getElementById("music");
            music.volume = 0.2;
            music.loop = true;
            music.play();
          }, function() {
            alert("Kamera tidak ditemukan. Silahkan sambungkan kamera, pastikan browser diperbolehkan mengakses kamera, dan refresh game. \n\nCamera not found. Please connect camera, allow browser access to the camera, and refresh the game.");
          });
         
        }
      });