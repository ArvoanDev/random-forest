// Random Forest Regression error 'input must not be empty' when fed text frequency array training set #9

const RF = require('../random-forest.js');

// 18 features used
// data from the issue
var trainingSet = [
  [
    0.1111111111111111, 0.05555555555555555, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0.1111111111111111, 0, 0, 0, 0.041666666666666664, 0.041666666666666664, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0.1111111111111111, 0.05555555555555555, 0, 0, 0, 0, 0.25, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0, 0.041666666666666664, 0, 0, 0.1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3333333333333333, 0.25, 1, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [0, 0.05555555555555555, 0, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0.041666666666666664, 0, 0.1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0.05555555555555555, 0, 0, 0, 0, 0, 0, 0, 0.3333333333333333, 0.25, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0.1111111111111111, 0.05555555555555555, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0.05555555555555555, 0, 0, 0, 0.041666666666666664, 0, 0.1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0.25, 0, 0,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0.05555555555555555, 0, 0, 0, 0.041666666666666664, 0, 0.1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0.1111111111111111, 0.05555555555555555, 0, 0, 0, 0.041666666666666664, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0, 0, 0, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.3333333333333333, 0],
  [0, 0.05555555555555555, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0.1111111111111111, 0.05555555555555555, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0, 0, 0.25, 0, 0, 0, 0, 0, 0, 0.034482758620689655, 0, 0, 0,
    0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0.05555555555555555, 0, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0,
    0.3333333333333333, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0.041666666666666664, 0, 0.1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0.05555555555555555, 0, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0,
    0.3333333333333333, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [0, 0.05555555555555555, 0.2, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0.25, 0, 0,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0.1111111111111111, 0.05555555555555555, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0.3333333333333333, 0, 0,
    0.07692307692307693, 0, 0, 0, 0, 0,
  ],
  [0, 0, 0, 0.125, 0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0.05555555555555555, 0, 0, 0, 0, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0],
  [0, 0, 0.2, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0.05555555555555555, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0.1111111111111111, 0.05555555555555555, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ],
  [
    0.1111111111111111, 0, 0, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0.07692307692307693,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0.07692307692307693,
  ],
  [0, 0, 0, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0.05555555555555555, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0.041666666666666664, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0.041666666666666664, 0, 0, 0, 0, 0, 0, 0.07692307692307693,
    0.034482758620689655, 0, 0, 0, 0,
  ],
];

var trainingValues = [
  7, 10, 8, 9, 7, 3, 7, 7, 10, 7, 5, 6, 7, 9, 8, 7, 7, 7, 9, 8, 7, 6, 8, 8, 10,
  8, 7, 5, 5, 8, 6, 5, 6, 8, 8, 2, 6, 8, 7, 6, 6, 5, 9, 6, 6, 10, 7, 7, 6, 6,
  10, 8, 9, 7, 8, 6, 8, 9, 9, 7, 6, 9, 7, 6, 7, 7,
];

// 280 features used
// source : https://archive.ics.uci.edu/ml/datasets/BlogFeedback
var biggerTrainingSet = [
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 1.0, 0.0, 1.0, 1.0, -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 39.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 1.0, 0.0, 1.0, 1.0, -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 39.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 401.0, 3.0, 21.0, 378.0, -18.0, 1.0, 0.0, 0.0, 1.0, 0.0, 64.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 1.0, 0.0, 1.0, 1.0, -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 39.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 63.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 63.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 63.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 7.0, 7.0, 0.0, 7.0, 7.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 21.0, 14.0, 7.0, 10.0, 7.0, 1.0, 1.0, 0.0, 1.0, 1.0, 31.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 33.0, 12.0, 14.0, 10.0, -2.0, 1.0, 0.0, 1.0, 1.0, -1.0, 55.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
  [
    40.30467, 53.845657, 0.0, 401.0, 15.0, 15.52416, 32.44188, 0.0, 377.0, 3.0,
    14.044226, 32.615417, 0.0, 377.0, 2.0, 34.567566, 48.475178, 0.0, 378.0,
    12.0, 1.4799345, 46.18691, -356.0, 377.0, 0.0, 1.0761671, 1.795416, 0.0,
    11.0, 0.0, 0.4004914, 1.0780969, 0.0, 9.0, 0.0, 0.37755936, 1.07421, 0.0,
    9.0, 0.0, 0.972973, 1.704671, 0.0, 10.0, 0.0, 0.022932023, 1.521174, -8.0,
    9.0, 0.0, 2.0, 2.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 14.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ],
];

var biggerTrainingValues = [
  0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 14.0, 12.0, 7.0, 0.0,
];

let options = {
  seed: 3,
  maxFeatures: 1.0,
  replacement: true,
  nEstimators: 50,
  treeOptions: undefined,
  useSampleBagging: false,
};

let regressor = new RF.RandomForestRegression(options);

regressor.train(trainingSet, trainingValues);
let result = regressor.predict(trainingSet);
console.log('Result for original set with 10 attributes is:', result);

regressor.train(biggerTrainingSet, biggerTrainingValues);
let resultLarger = regressor.predict(biggerTrainingSet);
console.log('Result for larger set with 280 attributes is:', resultLarger);