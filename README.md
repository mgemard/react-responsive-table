# react-responsive-table

A simple component to make responsive table (with [react-hot-loader](http://gaearon.github.io/react-hot-loader/))
```javascript
var COLUMNS = {column1: 'Name', column2: 'Quantity', column3: 'Price',
	 column4: 'Total'};
var LINES = [
  {column1: 'Cup', column2: 5, column3: '5$', column4: '25$'},
  {column1: 'Ball', column2: 2, column3: '15$', column4: '30$'},
  {column1: 'TV', column2: 1, column3: '200$', column4: '200$'}
];
ReactDOM.render(<App columns={COLUMNS} lines={LINES} wrap={1} width={700}/>, document.getElementById('root'));
```

This code will create the following table


| Name       | Quantity    |  Price      |  Total
|:-----------|:------------|:------------|:----------
| Cup        | 5           | 5$          | 25$
| Ball       | 2           | 15$         | 30$
| TV         | 1           | 200$        | 200$

and on small device (width < 700px), the last column will be wraped like this

| Name       | Quantity    |  Price      
|:-----------|:------------|:------------
| Cup        | 5           | 5$      
| Ball       | 2           | 15$      
| TV         | 1           | 200$       

if we now click on Cup, we will know the total

| Name       | Quantity    |  Price      
|:-----------|:------------|:------------
| Cup        | 5           | 5$      
| Total 25$  |             |       
| Ball       | 2           | 15$      
| TV         | 1           | 200$        





