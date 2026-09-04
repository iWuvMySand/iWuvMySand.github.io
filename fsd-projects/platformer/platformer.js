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
    

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
createPlatform(0, 700, 1700, 100, "black")
createPlatform(126, 600, 1, 10)
createPlatform(300, 500, 1, 10)
createPlatform(400, 500, 1400, -90)
createPlatform(620, 400, 1, 10, "black")
createPlatform(400, 300, 1, 100)
createPlatform(100, 400, 1, 10)
createPlatform(300, 300, 1, 10)
createPlatform(800, 300, 1, 10)
createPlatform(1000, 200, 1, 10, "black")
createPlatform(1150, 100, 100, 1, "#000000")
createPlatform(0, 25, 900, 1, "#a8d3d3")
createPlatform(1300, 500, 0, 1110,)
createPlatform(1400, 500, 9000, 0, )
createPlatform(-1400, 700, 9000, 0)
createBadPlatform(-1350, 600, 0, 1000)


    // TODO 3 - Create Collectables
createCollectable("diamond", 1399, 640, 0, 10)
createCollectable("diamond", -26, -30, 0, 0.9)
createCollectable("diamond", -1300, 650, 0, 0.9)


    
    // TODO 4 - Create Cannons
createCannon("top", 100, 456, 10, 17, 100, 1300, 170)
createCannon("left", 100, 917, 10, 10, 100, 600, 90)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
