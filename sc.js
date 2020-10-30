class sc {
constructor(x,y,r){
var options = {
isStatic:true
}
this.x= x;
this.y = y;
this.r = 10;
this.body= Bodies.circle(x,y,r,options);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    elippse(this.body.position.x,this.body.position.y,this.body.r);
    pop();


}

}