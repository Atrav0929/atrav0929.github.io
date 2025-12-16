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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 20;

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

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var enemyImage = draw.bitmap("img/tackle.png");
      enemyImage.x = -70;
      enemyImage.y = -25;
      enemy.addChild(enemyImage);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);

      enemy.velocityX = -2.8;

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      };

      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      };
    }

    function createReward(x, y, image) {
      var reward = game.createGameItem("reward", 25);
      var rewardImage = draw.bitmap(image);
      rewardImage.x = -60;
      rewardImage.y = -15;
      reward.addChild(rewardImage);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);

      reward.velocityX = -2.0;

      reward.onPlayerCollision = function () {
        game.increaseScore(150);
        game.changeIntegrity(30);
        reward.fadeOut();
      };

      reward.onProjectileCollision = function () {
        reward.fadeOut();
      };
    }

    function createMarker(x, y) {
      var endMarker = game.createGameItem("endMarker", 50);
      var endMarkerImage = draw.bitmap("img/ball.png");
      endMarkerImage.x = -65;
      endMarkerImage.y = -35;
      endMarker.addChild(endMarkerImage);
      endMarker.x = x;
      endMarker.y = y;
      game.addGameItem(endMarker);

      endMarker.velocityX = -1.5;

      endMarker.onPlayerCollision = function () {
        startLevel();
        endMarker.fadeOut();
      };

      endMarker.onProjectileCollision = function () {
        startLevel();
        endMarker.fadeOut();
      }
    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
        var obj = levelObjects[i];
        if (obj.type === "sawblade") {
          createSawBlade(obj.x, obj.y);
        } else if (obj.type === "enemy") {
          createEnemy(obj.x, obj.y);
        } else if (obj.type === "reward") {
          createReward(obj.x, obj.y, "img/Super.png");
        } else if (obj.type === "endMarker") {
          createMarker(obj.x, obj.y);
        }
      }

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
