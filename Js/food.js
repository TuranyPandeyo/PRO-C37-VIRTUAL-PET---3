class Food {
  constructor(){
  this.foodStock=0;
  this.lastFed;
  this.image=loadImage('images/milk.png');
  }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }

 getFedTime(lastFed){
   this.lastFed=lastFed;
 }

 deductFood(){
   if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
   }
  }

  getFoodStock(){
    return this.foodStock;
  }

  display(){
      background(bg);

      fill(255,255,254);
      textSize(15);
      if(lastFed>=12 && lastFed != 0){
          text("Last Feed : "+ lastFed%12 + " PM", 50,30);
      }else{
          text("Last Feed : "+ lastFed + " AM", 50,30);
      }
      var x=110,y=50; 
      imageMode(CENTER);
      if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=110;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }

  bedroom(){
      background(bedroom,550,500);  
  }
    
  garden(){
      background(garden,550,500);  
  } 

  washroom(){
      background(washroom,550,500); 
  }
}
