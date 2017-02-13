//Ryan Rusiecki - rr1402@bard.edu - February 13th, 2017 - I created this avatar independently. 
function setup() {
    createCanvas(1000,1000);
    background(20,111,220);

}

function draw() {
        
  //3-D Square Head
    stroke(0);  //set stroke to black
    rect (450,100,100,100); //first square
    rect (400,150,100,100); //second square
    line (450,100,400,150); //line 
    line (500,150,550,100);
    line (500,250,550,200);
    
    //neck
    line (425,250,425,300);
    line (475, 250, 475, 300);
    line (425, 300, 475, 300);
    
    //t-shirt
    beginShape();
    fill (220);
    vertex (425,300);//corner with left neck
    vertex (325, 300);//end of left sleeve on top
    vertex (350, 350);//bottom of left sleeve
    vertex (375,340);//left armpit
    vertex (375,500);//bottom left corner of shirt
    vertex (475,300);//corner with right neck
    vertex (575,300);//end of right sleeve on top
    vertex (550,350);//bottom of right sleeve
    vertex (515,340);//right arm pit
    vertex (505,500);//bottom right corner of shirt
    endShape();
    
    //arms
    strokeCap(ROUND);//left arm
    line (340,330,240,400);
    fill (255,209,220);
     strokeWeight(9);
    line (560,330,660,400);  

}
//Using code to create graphics is an interesting approach versus drawing or illustrating in real life on paper. It seems inefficient at first but can eventually have more capabilities than free hand. 