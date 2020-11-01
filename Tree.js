class Tree {
    constructor(x, y, width) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width,20, options);
      this.width = width;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };