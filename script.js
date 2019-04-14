$(document).ready(readyNow); 

let employee = []; 
let salaryArray = []; 
let monthlySalary = 0; 
let sum = 0; 

function readyNow(){

$('#addEmployee').click('on', addClick );
$('#removeEmployee').click('on', removeClick );

}

//Adds users to the dom
function addClick(){

  //new object taking in values entered on the dom
    let newEmployee = {
        fName: $( '#FName' ).val(),
        lName: $( '#LName' ).val(),
        id: $( '#ID' ).val(),
        title:  $( '#Title' ).val(),
        salary: $( '#ASalary' ).val(),
    }
    //pushing input values to employee array

     //if any input values are not entered
   //an alert is triggered asking user to 
   //fill all input fields 
   if (newEmployee.fName == '' || newEmployee.lName == '' || 
      newEmployee.id == '' || newEmployee.title == '' || newEmployee.salary == ''){
        newEmployee = {}; 
        
        alert ( 'Please enter values for all fields');  
      } else {
        employee.push( newEmployee ); 
        // showEmployee(employee); 
    $('#FName, #LName, #ID, #Title, #ASalary').val(''); 

   //catching new salaries entered on DOM
   //into newSalaryValue
   for( let i = 0; i < employee.length; i++){
        newSalaryValue = employee[i].salary; 
        let el = (parseInt(newSalaryValue));
        sum += el; 
        el = 0
   }  
   showEmployee( employee ); 
   console.log(employee); 
   //pushing salaries to salaryArray array
   salaryArray.push(newSalaryValue); 

      //calculate the monthly salary for all emlpoyees
       monthlySalary = Math.round((sum / 12)); 
       sum = 0; 
     $('#monthly').empty(); 
     $('#monthly').append('Total Monthy : ', monthlySalary ); 
     
     //when monthly salary becomes too high, background will highlight
     if (monthlySalary > 20000){
      $('#monthly').css('background-color', '#FF6600');
     }
    }
}

console.log(employee); 
//function to take in new employee and enter it
//onto the dom
function showEmployee( employees ){
    let newEmp = $('#newEmployee')
   console.log(employees)
    //empty input variable
    newEmp.empty(); 
    
    //for loop to add every employee
    for( let i = 0; i < employees.length; i++){
        const addedEmployee = `<tr> <td> ${ employees[i].fName }</td>,
           <td> ${ employees[i].lName}</td>,
           <td> ${ employees[i].id}</td>,
           <td> ${ employees[i].title}</td>, 
           <td> ${ employees[i].salary} </td> </tr> `;
                
           //add new employee onto the dom
           newEmp.append(addedEmployee);
        }
} 

//Removes users to the dom
function removeClick( employees){
  
let newEmp = $('#newEmployee')
  newEmp.empty(); 
  
const removeEmployee = `<tr> <td> ${ employees.fName }</td>,
    <td> ${ employees.lName}</td>,
    <td> ${ employees.id}</td>,
    <td> ${ employees.title}</td>, 
    <td> ${ employees.salary} </td> </tr> `;
        
    newEmp.remove(addedEmployee);
    console.log(removeEmployee); 
}
