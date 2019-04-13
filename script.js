$(document).ready(readyNow); 

let employee = []

function readyNow(){

$('#addEmployee').click('on', addClick );
$('#removeEmployee').click('on', removeClick );
showEmployee( employee )
}

//Adds users to the dom
function addClick(){

    const newEmployee = {
        fName: $( '#FName' ).val(),
        lName: $( '#LName' ).val(),
        id: $( '#ID' ).val(),
        title:  $( '#Title' ).val(),
        salary: $( '#ASalary' ).val(),
    }

    //<tb id="tableBody"></tb>
    
   employee.push(newEmployee); 
   console.log(employee);
   if (employee.fName === '' || employee.lName === '' || 
      employee.id === '' || employee.title === '' || employee.salary === ''){
        alert ( 'Please enter values for all fields'); 
      } else{
    showEmployee(employee); 
    $('#FName, #LName, #ID, #Title, #ASalary').val(''); 
      }
}

function showEmployee( employees ){
    let newEmp = $('#newEmployee')
    newEmp.empty(); 
    
    for( let i = 0; i < employees.length; i++){
        const addedEmployee = `<tr> <td> ${ employees[i].fName }</td>,
           <td> ${ employees[i].lName}</td>,
           <td> ${ employees[i].id}</td>,
           <td> ${ employees[i].title}</td>, 
           <td> ${ employees[i].salary} </td> </tr> `;
           
        
           newEmp.append(addedEmployee);
        }
} 

//Removes users to the dom
function removeClick(){


}