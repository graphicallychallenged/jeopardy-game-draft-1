import React, { Component } from "react";
import Board from "./board";
//because all data is the heatbeat, am i right?

let numberOfQuestions = 6;
let numberOfCategories = 5;
let dataHeartbeat =  "http://jservice.io/api/clues?&category=";

export default class PageLayout extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
    this.createCategories = this.createCategories.bind(this);

  }

componentDidMount(){
  this.createCategories();
}


//let's randomize the categories for the game and set those number is state
createCategories(){
var arr = [];
while(arr.length < (numberOfCategories + 1)){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
this.setState({
  categories: arr
})
}
  render() {
    return (
      <div className="container">
        { this.state.categories && (
          <Board list={this.state.categories} numberOfCategories={numberOfCategories} numberOfQuestions={numberOfQuestions} url={dataHeartbeat} />
        )}
      </div>
    )

  }
}
