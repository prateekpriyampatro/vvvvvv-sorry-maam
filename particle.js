class particle{
constructor(x,y,r){
var options= {
restitution:0.6
}
this.x= x;
this.y = y;
this.r = r;
this.body= Bodies.circle(x,y,r,options);
this.color = random(0,255),random(0,255),random(0,255);
}
display(){
    push();
    fill ( this.color);
    translate(this.body.position.x, this.body.position.y);
    elippse(this.body.position.x,this.body.position.y,this.body.r);
    pop();
}
}