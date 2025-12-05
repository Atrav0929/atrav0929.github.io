var background = function (window) {
  "use strict";

  window.opspark = window.opspark || {};
  var draw = window.opspark.draw;
  var createjs = window.createjs;

  /*
   * Create a background view for our game application
   */
  window.opspark.makeBackground = function (app, ground) {
    /* Error Checking - DO NOT DELETE */
    if (!app) {
      throw new Error("Invalid app argument");
    }
    if (!ground || typeof ground.y == "undefined") {
      throw new Error("Invalid ground argument");
    }

    // useful variables
    var canvasWidth = app.canvas.width;
    var canvasHeight = app.canvas.height;
    var groundY = ground.y;

    // container which will be returned
    var background;

    //////////////////////////////////////////////////////////////////
    // ANIMATION VARIABLES HERE //////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // TODO (several):

    // called at the start of game and whenever the page is resized
    // add objects for display in background. draws each image added to the background once
    function render() {
      background.removeAllChildren();

      // TODO 1:
      // this currently fills the background with an obnoxious yellow;
      // you should modify both the height and color to suit your game
      var backgroundFill = draw.bitmap("img/stands.png");
      backgroundFill.x = 0.1
      backgroundFill.y = 0
      backgroundFill.scaleX = 1.25
      backgroundFill.scaleY = 0.9
      background.addChild(backgroundFill)
      var stand2 = draw.bitmap("img/stands.png");
      stand2.x = 700
      stand2.y = 0.5
      stand2.scaleX = 2
      stand2.scaleY = 1
      background.addChild(stand2)
      var groundFill = draw.rect(canvasWidth, canvasHeight - groundY, "green");
      groundFill.x = 0;
      groundFill.y = groundY;
      background.addChild(groundFill);
      // TODO 2: - Add a moon and starfield
      var Ref = draw.bitmap("img/ref.png");
      Ref.x = 1000;
      Ref.y = -15;
      Ref.scaleX = 1.0;
      Ref.scaleY = 1.0;
      background.addChild(Ref);
      
      // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?

      // TODO 3: Part 1 - Add a tree
    } // end of render function - DO NOT DELETE

    // Perform background animation
    // called on each timer "tick" - 60 times per second
    function update() {
      // useful variables
      var canvasWidth = app.canvas.width;
      var canvasHeight = app.canvas.height;
      var groundY = ground.y;

      // TODO 3: Part 2 - Move the tree!

      // TODO 4: Part 2 - Parallax
    } // end of update function - DO NOT DELETE

    /* Make a createjs Container for the background and let it know about the render and upate functions*/
    background = new createjs.Container();
    background.resize = render;
    background.update = update;

    /* make the background able to respond to resizing and timer updates*/
    app.addResizeable(background);
    app.addUpdateable(background);

    /* render and return the background */
    render();
    return background;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = background;
}
