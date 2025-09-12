$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(650, 150, 200, 15);
    createPlatform(600, 300, 200, 25);
    createPlatform(400, 500, 100, 25);
    createPlatform(200, 600, 300, 10);
    createPlatform(300, 200, 100, 25);
    createPlatform(1000, 500, 100, 15);
    createPlatform(1200, 300, 100, 15);
    createPlatform(850, 600, 15, 300);

    // TODO 3 - Create Collectables
    createCollectable("shoes", 1240, 270);
    createCollectable("medal", 700, 110);
    createCollectable("batton", 853, 595);
    createCollectable("spikes", 350, 175);

    // TODO 4 - Create Cannons
    createCannon("right", 550, 1000);
    createCannon("left", 650, 10);
    createCannon("top", 750, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
