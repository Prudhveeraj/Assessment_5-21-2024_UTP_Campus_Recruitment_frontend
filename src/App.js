import './App.css';
//ignoring the case where we are updating the parent row, as it is unclear on how to update the values of the child rows.
//data is representated in the form of arrays and with the help of the desired functions calls we update the values of the array accordingly.
const col0 = ["Electronics", "Phones", "Laptops","Furniture","Tables","Chairs"];
const col1 = [1500, 800, 700,1000,300,700];
const col2 = ["","","","","",""];
const col3 = [0,0,0,0,0,0];
const col4 = ["","","","","",""];
const col5 = [0,0,0,0,0,0];

//function for updating the allocation percentage, paramters are index and value ,where index represents the row and value is the percentage number
function changecol3(index, val){
  
  var ini=col1[index];
  col3[index]=val;
  
  col1[index]=col1[index]+(val*col1[index])/100;
  //calculating the variance
  col5[index]=Math.abs(col1[index]-ini)/ini*100;

  //updating the parent row val and variance
  if(index==1 || index==2){
    const temp=col1[0];
    col1[0]=col1[1]+col1[2];
    col5[0]=Math.abs(col1[0]-temp)/temp*100;
  }
   
  //updating the parent row val and variance
  if(index==4 || index==5){
    const temp=col1[3];
    col1[3]=col1[4]+col1[5];
    col5[3]=Math.abs(col1[3]-temp)/temp*100;
  }

  return;
}


//function for updating the val by value itself, here the parameters to the function call are index and value, where index is representing the row number and value is value we want to assign 
function changecol4(index, val){
  const ini=col1[index];
  col1[index]=val;
  col4[index]=val;
  //calculating the variance
  col5[index]=Math.abs(col1[index]-ini)/ini*100;
  
//updating the parent row val and variance
  if(index==1 || index==2){
    const temp=col1[0];
    col1[0]=col1[1]+col1[2];
    col5[0]=Math.abs(col1[0]-temp)/temp*100;
  }

  //updating the parent row val and variance
   
  if(index==4 || index==5){
    const temp=col1[3];
    col1[3]=col1[4]+col1[5];
    col5[3]=Math.abs(col1[3]-temp)/temp*100;
  }

  return;
}



function App() {
  return (
    
    <div className="App">
    <table>
        <tr>
            <th>Label</th>
            <th>Value</th>
            <th>Input</th>
            <th>Allocation %</th>
            <th>Allocation Value</th>
            <th>Variance</th>
        </tr>
        <tr>
            <td>{col0[0]}</td>
            <td>{col1[0]}</td>
            <td>{col2[0]}</td>
            <td>{col3[0]}</td>
            <td>{col4[0]}</td>
            <td>{col5[0]}</td>
            

        </tr>
        <tr>
        <td>{col0[1]}</td>
            <td>{col1[1]}</td>
            <td>{col2[1]}</td>
            <td>{col3[1]}</td>
            <td>{col4[1]}</td>
            <td>{col5[1]}</td>
        </tr>
        <tr>
        <td>{col0[2]}</td>
            <td>{col1[2]}</td>
            <td>{col2[2]}</td>
            <td>{col3[2]}</td>
            <td>{col4[2]}</td>
            <td>{col5[2]}</td>
        </tr>

        <tr>
            <td>{col0[3]}</td>
            <td>{col1[3]}</td>
            <td>{col2[3]}</td>
            <td>{col3[3]}</td>
            <td>{col4[3]}</td>
            <td>{col5[3]}</td>
            

        </tr>

        <tr>
            <td>{col0[4]}</td>
            <td>{col1[4]}</td>
            <td>{col2[4]}</td>
            <td>{col3[4]}</td>
            <td>{col4[4]}</td>
            <td>{col5[4]}</td>
            

        </tr>

        <tr>
            <td>{col0[5]}</td>
            <td>{col1[5]}</td>
            <td>{col2[5]}</td>
            <td>{col3[5]}</td>
            <td>{col4[5]}</td>
            <td>{col5[5]}</td>
        </tr>



        
    </table>

    {changecol3(1,1)};
    {changecol4(2,100)};
    </div>
  );
}

export default App;
