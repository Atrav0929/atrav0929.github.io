var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 10;

    function createSawBlade(x, y) {
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/football.png");
      obstacleImage.x = -25;
      obstacleImage.y = -15;
      sawBladeHitZone.addChild(obstacleImage);
    }

    createSawBlade(400, 250);
    createSawBlade(800, groundY);
    createSawBlade(1200, 250);
    createSawBlade(1600, 300);
    createSawBlade(2000, 300);

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var enemyImage = draw.bitmap("img/tackle.png");
      enemyImage.x = -25;
      enemyImage.y = -25;
      enemy.addChild(enemyImage);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);

      enemy.velocityX = -2.2;
      enemy.rotationalVelocity = 8;

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      };

      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      };
    }

    createEnemy(600, groundY - 40);
    createEnemy(1000, groundY - 50);
    createEnemy(1300, groundY - 60);
    createEnemy(1700, groundY - 45);
    createEnemy(1900, groundY - 55);

    function createReward(x, y, image) {
      var reward = game.createGameItem("reward", 25);
      var rewardImage = draw.bitmap(image);
      rewardImage.x = -25;
      rewardImage.y = -25;
      reward.addChild(rewardImage);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);

      reward.velocityX = -1.5;

      reward.onPlayerCollision = function () {
        game.increaseScore(50);
        game.changeIntegrity(10);
        reward.fadeOut();
      };

      reward.onProjectileCollision = function () {
        reward.fadeOut();
      };
    }

    createReward(1800, groundY - 50, "img/Super.png");
    

   
    var endMarker = game.createGameItem("endMarker", 50);
    var endMarkerImage = draw.bitmap("img/ball.png");
    endMarkerImage.x = -70;
    endMarkerImage.y = -70;
    endMarker.addChild(endMarkerImage);
    endMarker.x = 1600;
    endMarker.y = groundY - 100;
    game.addGameItem(endMarker);

    endMarker.velocityX = -1.05;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    
    function startLevel() {
      // TODO 13 goes below here

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
