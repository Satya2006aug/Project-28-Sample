class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.2,
          isStatic:false
      }
      this.image = loadImage("sprites/stone.png");
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      image(this.image,0,0,this.width,this.height);
      push();
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };