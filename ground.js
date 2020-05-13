class ground{

constructor (x,y) {
    
var o ={
    isStatic:true
}
this.Body = Bodies.rectangle(x,y,400,10,o)
this.width=400
this.height=10;
World.add(world,this.Body)
}
display(){
    rectMode(CENTER)
    rect(this.Body.position.x,this.Body.position.y,this.width,this.height)
}
}