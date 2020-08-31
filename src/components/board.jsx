import React, { Component } from "react";
import Column from "./column";


export default class Board extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
    }
    this.fetchCategories = this.fetchCategories.bind(this);
    this.removeItemAll = this.removeItemAll.bind(this);
  }
  componentDidMount(){
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.list !== this.props.list){
      this.fetchCategories(this.props);
    }
  }

//there seem to be items coming back that's don't have a dollar value, we need to remove those
removeItemAll(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i].value === null) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

  //let's go get data for those categories - by using those numbers we set in state
  fetchCategories(props) {
    for(let i = 0 ; i < props.list.length; i++) {
     let val = props.list[i];
     let keyname = "Category_" + i;

      // This is the data, go fetch the questions!
      fetch(props.url +  val )
        .then(response => response.json())
        .then(data =>
          this.setState({
            data: {
              ...this.state.data,
          [keyname]:  data.slice(0, parseInt(props.numberOfQuestions) - 1 ),
        }
          }
        )
        )
        // Catch any errors we hit and put them in the console
          // TODO: create loading state based on error
        .catch(error => console.log(error));

  };
  }



  render() {
    return (
      // todo: find a better way to do this
      <div className="board" style={ { maxWidth: '100%'} }>
        <Column rowData={this.state.data.Category_0} />
        { this.props.list.length > 2 && (
       <Column rowData={this.state.data.Category_1} />)
      }
        { this.props.list.length > 3 && (
       <Column rowData={this.state.data.Category_2} />)
      }
        { this.props.list.length > 4 && (
       <Column rowData={this.state.data.Category_3} />)
      }
        { this.props.list.length > 5 && (
       <Column rowData={this.state.data.Category_4} />)
      }
        { this.props.list.length > 6 && (
        <Column rowData={this.state.data.Category_5} />)
        }
    </div>
 )  }
}
