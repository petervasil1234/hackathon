import {Message} from './message'

export class Chat {
  heading = 'Chat';
  sender = '';
  message = '';
  chooses = ["one","two","three"];
  selected = 'one';
  listOfMessage = [];
  
 sendMessage() {
	if(!this.validateEmail(this.sender)){
		alert('Enter valid email address.');
	}
	else if(this.message.trim() == ''){
		alert('Enter some text.');
	}
	else{
		var message = new Message(this.selected, this.sender, this.message);
		this.listOfMessage.push(message);
		this.sender = '';
		this.message = '';
	}
  }
  
  showMessages(){
	  var texts = '';
	  for(var i = 0; i < this.listOfMessage.length; i++){
		 texts += "<hr style=\"border-color:black;\"><div class=\"row\"><div class=\"col-md-2\"><label>Channel: </label></div><div class=\"col-md-10\">"+ this.listOfMessage[i].channel +"</div></div><div class=\"row\"><div class=\"col-md-2\"><label>From: </label></div><div class=\"col-md-10\">"+ this.listOfMessage[i].sender +"</div></div><div class=\"row\"><div class=\"col-md-2\"><label>Message: </label></div><div class=\"col-md-10\">"+ this.listOfMessage[i].message +"</div></div><hr style=\"border-color:black;\">";
	  }
	   document.getElementById("messageArea").innerHTML = texts;
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
  }
}