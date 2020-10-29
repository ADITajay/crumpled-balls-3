class Bird{
    
    constructor(x,y,radius)
        {
            var options={
                isStatic:false,
               density:1.2,
               friction:0.5,
               restitution:0.3,
            }
        //this.body = Bodies.ellipse(x,y,width,height,options)
        this.body = Bodies.circle(x,y,radius/2,options) 
        this.radius=radius;
        this.image=loadImage("paper.png")
        
        World.add(world,this.body)
        }
    
    display()
      {
          
         var pos = this.body.position;
        image (this.image,pos.x,pos.y,this.radius/2,this.radius/2);
      }
    
    
              }
             