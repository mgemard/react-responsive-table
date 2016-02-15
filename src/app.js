import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    //here we calculate how many column are shown on small device
    this.nbColumnMax = Object.keys(this.props.columns).length;
    var showDetails = [];
    this.props.lines.forEach( function(line, key) {
      showDetails[key] = false;
    });
    this.state = {
    	width: window.innerWidth, 
    	height: window.innerHeight, 
      nbColumn: window.innerWidth > this.props.width ? 
      	this.nbColumnMax: this.nbColumnMax - this.props.wrap,
        showDetails: showDetails};
  }
  render() {
  	var rowHeader = [];
  	var rowBody = [];

  	var row = [];

    //we render the headers to be shown
    //on small device, not all columns will appear
		for (let i = 0; i < this.state.nbColumn; i++) {
			let column = Object.keys(this.props.columns)[i];
      rowHeader.push(<td key={column}>{this.props.columns[column]}</td>);
    }
    rowHeader = <tr>{rowHeader}</tr>;

    //we render the lines
		this.props.lines.forEach( (line, key) => {

  		var wrapedColumn = "";

      //same loop than for the headers
			for (let i = 0; i < this.state.nbColumn; i++) {
				let column = Object.keys(this.props.columns)[i];
	      row.push(<td key={key+"-"+column}>{line[column]}</td>);

	    }
    	rowBody.push(<tr onClick={this.handleClick.bind(this,key)} key={key}>{row}</tr>);
    	row = [];

      //on small device, we loop for the last columns of the line
			if(this.state.nbColumn < this.nbColumnMax) {
	    	for (let i = this.state.nbColumn; i < this.nbColumnMax; i++) {
					let column = Object.keys(this.props.columns)[i];
		      wrapedColumn += this.props.columns[column] + " " + line[column];
		    }
        //we show the line if the row above has been clicked
        if (this.state.showDetails[key]) {
  		    rowBody.push(
  		    	<tr key={key+"-wrap"}>
  		    		<td colSpan={this.state.nbColumn}> {wrapedColumn}</td>
  		    	</tr>);
        } 
		  }

		});

    return (
      <table>
        <thead>
	        {rowHeader}
        </thead>
        <tbody>
	        {rowBody}
        </tbody>
      </table>
    );
  }
  handleClick(key) {
    var showDetails = this.state.showDetails;
    showDetails[key] = !showDetails[key];
      this.setState({showDetails: showDetails});
   }
  updateDimensions() {
    //on small device (width < this.props.width),
    //the last n (n=this.props.wrap) columns will not be shown
    this.setState({width: window.innerWidth,
    	nbColumn: window.innerWidth > this.props.width ? 
      	this.nbColumnMax: this.nbColumnMax - this.props.wrap});
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
}
