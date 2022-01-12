class Form {
  constructor() {
    this.input = createInput("name");
    this.message = createInput("Enter a Message");
    this.playButton = createButton("SUBMIT");
    this.greeting = createElement("h2")
  }
  display() {
    this.input.position(590,280);
    this.input.class("customInput");
    

    this.message.position(100,130);
    this.message.class("customInputBox");
    

    this.playButton.position(220,370);
    this.playButton.class("customButton");
    this.playButton.mousePressed(()=>{
      friend.name= this.input.value();
      friend.message= this.message.value();
      console.log(friend.name);
      console.log(friend.message);
      this.input.hide();
     // this.playButton.hide();
      this.message.hide();
      playerCount +=1;
      friend.index =playerCount;
      console.log(playerCount);
      friend.updateCount(friend.index);
      friend.addFriends();
      page.update(1);
    })
  }

  end(){
    this.playButton.hide();
    this.greeting.html("Thank you for your message, you are the best");
    this.greeting.class("greeting")
    this.greeting.position(100,130);
    var closebutton = createButton("Close")
    closebutton.position(220,370);
    closebutton.class("customButton");
    closebutton.mousePressed(()=>{
      this.greeting.hide();
      page.update(0);
      window.location.reload();
    })
  }

}
