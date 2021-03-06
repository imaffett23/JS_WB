// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.
const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new window.FaceDetector();

const options = {
  SIZE: 10,
  SCALE: 1.5,
};

const optionInputs = document.querySelectorAll('.controls input[type="range"]');

function handleOption(event) {
  const { name, value } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionInputs.forEach((input) => input.addEventListener('input', handleOption));

// Write a function that populates user's video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  video.srcObject = stream;
  await video.play();

  // Size the canvases to be the same size as video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // Ask the browser when the next animation frame is and run detect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // Draw the small face
  faceCtx.drawImage(
    // 5 source args
    video, // where does the source come from
    face.x, // where do we start the source pull from
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing
    face.y,
    options.SIZE,
    options.SIZE
  );

  // Take that face back out and draw at normal size
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x,
    face.y,
    options.SIZE,
    options.SIZE,
    // drawing arguements
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
