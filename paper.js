class paper
{
    constructor(x,y)

	{
        var option={
            isStatic: false,
            restitution : 0.3,
            friction: 0,
            density: 1.2,
        }

        this.x=x;
		this.y=y;
        this.r=r;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y)
        World.add(world, this.body);

    }
        keyPressed() {
            if (keyCode === UP_ARROW){
                Matter.Body.applyforce(paperObject.body, paperObject.body.position,{x:130,y:-145});
            }  

        }
        
        display(){
            var paperpos=this.body.position;
             push() 
             translate(paperpos.x, paperpos.y); 
            rectMode(CENTER)
             //strokeWeight(4);
              fill(255,0,255) 
              imageMode(CENTER); 
              image(this.image, 0,0,this.r, this.r) 
              //ellipse(0,0,this.r, this.r);
             pop()
            
        }
}