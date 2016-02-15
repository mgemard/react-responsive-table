import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';




var COLUMNS = {column1: 'Name', column2: 'Quantity', column3: 'Price',
	 column4: 'Total'};

var LINES = [
  {column1: 'Cup', column2: 5, column3: '5$', column4: '25$'},
  {column1: 'Ball', column2: 2, column3: '15$', column4: '30$'},
  {column1: 'TV', column2: 1, column3: '200$', column4: '200$'}
];



ReactDOM.render(<App columns={COLUMNS} lines={LINES} wrap={1} width={700}/>, document.getElementById('root'));


