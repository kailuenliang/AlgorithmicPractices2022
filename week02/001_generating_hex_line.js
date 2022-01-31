// basic program to generate a single line
// REMEMBER, we build the hexagram from the bottom 
// https://ichingpsychics.com/how-to-consult-the-i-ching-using-3-coins/

// http://iching123.com/64_hexagrams_chart_text.htm

// heads = 3 tails = 2;

let toss01, toss02, toss03;
let toss04, toss05, toss06;
let toss07, toss08, toss09;

let line01, line02, line03;


function setup() {
  createCanvas(400, 400);
  
  toss01 = floor(random(2,4));
  toss02 = floor(random(2,4));
  toss03 = floor(random(2,4));
  toss04 = floor(random(2,4));
  toss05 = floor(random(2,4));
  toss06 = floor(random(2,4));
  toss07 = floor(random(2,4));
  toss08 = floor(random(2,4));
  toss09 = floor(random(2,4));

}

function draw() {
  background(220);
  noLoop();
  
  
  myLine = toss01 + toss02 + toss03;
  

  if(myLine == 6){
    // 3 tails = 6 , changing yin line
    print("-- -- -- o -- -- --");
    print("Changing yin line")
    
  }
  else if(myLine == 7){
    print("-------------------");
    print("yang line");
  }
  else if(myLine == 8){
    print("-- -- --   -- -- --");
    print("yin line");
    
  }
  else if(myLine == 9){
    // 3 heads = 9 Changing Yang line
    print("---------x---------");
    print("Changing yang line");
    
  }
  else{
    print("ERROR! Number is not 7,8,or 9!")
  } 
  
}