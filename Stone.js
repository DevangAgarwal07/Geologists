class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction':0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x,y,80,80,options);
      this.width =80;
      this.height =80;
      this.image =  loadImage("stone.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('darkblue')
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };
  