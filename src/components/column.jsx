import React, { Component } from "react";

export default class Column extends Component{
  constructor(props){
    super(props);
    this.state = {
      headerName:"",
    }

  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps !== this.props && this.props.rowData ){
      this.setState({
         headerName: this.props.rowData[0].category.title
      })

    }
  }
  render() {
    return (
      <div className="board-column">
        {this.state.headerName && (<div className="header"> {this.state.headerName}</div>)}
        {this.props.rowData && (
         this.props.rowData.map(( listValue, index ) => {
          return (
              <div className="tile">
                {listValue.value}
              </div>

          );
        })
      )}
     </div>
 )  }
}
