import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectoneusingtwowaydatabinding';
  messageone="Enter your answer"
  getNameOne(){
    console.log('1st Question Answer is');
    console.log(this.messageone)
  }
  messagetwo="Enter your answer"
  getNameTwo(){
    console.log('2nd Question Answer is');
    console.log(this.messagetwo)
  }
  messagethree="Enter your answer"
  getNameThree(){
    console.log('3rd Question Answer is');
    console.log(this.messagethree)
  }
  messagefour="Enter your answer"
  getNameFour(){
    console.log('4th Question Answer is');
    console.log(this.messagefour)
  }
  messagefive="Enter your answer"
  getNameFive(){
    console.log('5th Question Answer is');
    console.log(this.messagefive)
  }
  messagesix="Enter your answer"
  getNameSix(){
    console.log('6th Question Answer is');
    console.log(this.messagefive)
  }


}
