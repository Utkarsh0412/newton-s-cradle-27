class Rope{
    constructor(body1,pointB){
        
       var options={
           bodyA:body1,
           pointB:pointB,

           length:200
         }
         this.pointB=pointB
         this.rope=Constraint.create(options)   
         World.add(world,this.rope)
    }
   display(){
       var pointA=this.rope.bodyA.position
       var pointB=this.pointB
              strokeWeight(2)
       var Anchor1X=pointA.x
       var Anchor1Y=pointA.y
       line(pointA.x,pointA.y,pointB.x,pointB.y)
   
   }
   }
   