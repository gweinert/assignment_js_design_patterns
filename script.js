//Controller
  //window prompt for grid size
  //Dont allow odd numbers
  //each grid different picture - repeat once for each pic
  //tells view when to cover up 
  //when click tell view to render text/picture
  //GAME LOGIC
    //flips over first card
      //if another card is already exposed 
        //check if it matches
        //if matches 
          //keep both exposed
          //green border
          //add to score
          //START LOOP OVER
        //else if it doesn't match
          //cover up both cards - give it timeout - let user see cards
          //Score decreased
      //IF all cards exposed
        //GAME ENDS

      //

//Model
  //will hold number for grid size
  //will hold pictures
  //SCORES
    //increase on successful matching
    //decrease on unsuccesful matching
  //ATTEMPTS
    //Increases everytime you flip at least two cards

var model = {

  gridSize: 0,
  cards: ["1", "2", "3", "4", "5", "6", "7", "8"]
};

//View
  //model passes grid size for rendering  
  //will render the cover up
  //will render text.picture of card when clicked from controller