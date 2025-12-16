var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: 250 },
          { type: "sawblade", x: 800, y: groundY },
          { type: "sawblade", x: 1200, y: 250 },
          { type: "sawblade", x: 1600, y: 300 },
          { type: "sawblade", x: 2000, y: 300 },
          { type: "enemy", x: 600, y: groundY - 40 },
          { type: "enemy", x: 1000, y: groundY - 50 },
          { type: "enemy", x: 1300, y: groundY - 60 },
          { type: "enemy", x: 1700, y: groundY - 45 },
          { type: "enemy", x: 1900, y: groundY - 55 },
          { type: "reward", x: 1800, y: groundY - 50 },
          { type: "endMarker", x: 1600, y: groundY - 100 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          
          { type: "sawblade", x: 1200, y: 250 },
          { type: "sawblade", x: 1600, y: 300 },
          { type: "sawblade", x: 2000, y: 300 },
          { type: "enemy", x: 600, y: groundY - 40 },
          { type: "enemy", x: 1000, y: groundY - 50 },
          { type: "enemy", x: 1300, y: groundY - 60 },
          { type: "enemy", x: 1700, y: groundY - 45 },
          
          { type: "endMarker", x: 1600, y: groundY - 100 },
        ],
      },
      {
        name: "Cant beat this",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 800, y: 250 },
          { type: "sawblade", x: 1200, y: groundY },
          { type: "enemy", x: 70, y: groundY - 40 },
          { type: "enemy", x: 1100, y: groundY - 50 },
          { type: "reward", x: 1600, y: groundY - 50 },
          { type: "endMarker", x: 1800, y: groundY - 100 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
