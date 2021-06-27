class tree
{
    constructor(x,y,z)
    {var options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8
    }

   this.x=x;
   this.y=y;
   this.r=r


    }
    isplay()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
