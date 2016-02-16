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
ReactDOM.render(<App columns={COLUMNS} lines={LINES} wrap={2} width={700}/>, document.getElementById('root'));
```
This code will create the following table

| Name       | Quantity    |  Price      |  Total
|:-----------|:------------|:------------|:----------
| Cup        | 5           | 5$          | 25$
| Ball       | 2           | 15$         | 30$
| TV         | 1           | 200$        | 200$

and on small device (width < 700px), the two last column will be wraped like this

| Name       | Quantity    
|:-----------|:------------
| Cup        | 5               
| Ball       | 2                
| TV         | 1                

if we now click on Cup, we will know the price and the total

<table>
  <tr>
    <td>Name</td>
    <td>Quantity</td>
  </tr>
  <tr>
    <td>Cup</td>
    <td>5</td>
  </tr>
  <tr>
    <td colspan="3">Price 5$, Total 25$</td>
  </tr>
  <tr>
    <td>Ball</td>
    <td>2</td>
  </tr>
  <tr>
    <td>TV</td>
    <td>1</td>
  </tr>
</table>




