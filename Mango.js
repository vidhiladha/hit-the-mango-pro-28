class Mango {
       constructor(x,y,r)
    {

        var option ={
            isStatic:true,
            restitution :0,
            friction :1,
            }
        this.x=x;
        this.y=y;
        this.r=r
        this.image = loadImage("mango.png");
        this.body =Bodies .circle(this.x, this.y, this.r, option)
        World.add(world, this.body);

       }
       display(){
      
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }





}