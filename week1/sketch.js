let video;
let classifier;


function setup() {
  createCanvas(windowWidth, 100);

  video = createCapture(VIDEO);

  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
}

function modelReady() {
  console.log('our model is ready!!!');
  classifier.predict(gotResult);
}

function gotResult(err, results) {
  if (results) {
    console.log('results: ', results);
    select('#result').html(results[0].className);
    select('#probability').html(results[0].probability);
    classifier.predict(gotResult);
    if (results[0].className === 'wooden spoon') {
      background(255, 215, 0);
      gif_loadImg = loadImage("blink.gif");
      gif_createImg = createImg("blink.gif");
    } else {
      background(139, 137, 137);

    }
  }
}
