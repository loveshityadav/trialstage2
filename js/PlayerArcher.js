class PlayerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      Matter.Body.setAngle(this.body,-PI/2)
  
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/playerArcher.png");
  
          World.add(world, this.body);
    }
  
     display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      if (keyIsDown(RIGHT_ARROW) && angle < 0.35) {
       angle += 0.02;
       Matter.Body.setAngle(this.body,angle)
      }
  
      if (keyIsDown(LEFT_ARROW) && angle > -1.45) {
        angle -= 0.02;
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }