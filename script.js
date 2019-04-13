$(document).ready(readyNow); 

let employee = []; 
let salaryArray = []; 
let monthlySalary = 0; 
let sum = 0; 

function readyNow(){

$('#addEmployee').click('on', addClick );
$('#removeEmployee').click('on', removeClick );
showEmployee( employee ); 
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
    
   employee.push( newEmployee ); 
   console.log(employee); 

   for( let i = 0; i < employee.length; i++){
        newSalaryValue = employee[i].salary; 
   }
   salaryArray.push(newSalaryValue); 

   if (employee.fName == ' ' || employee.lName == ' ' || 
      employee.id == ' ' || employee.title == ' ' || employee.salary == ' '){
        alert ( 'Please enter values for all fields'); 
      } else {
    showEmployee(employee); 
    $('#FName, #LName, #ID, #Title, #ASalary').val(''); 
      }

       for (let i = 0; i < salaryArray.length; i++){
           let el = parseInt(salaryArray[i]); 
           console.log(el); 
          sum += el; 
           el = 0; 
       }
      
       monthlySalary = Math.round(((sum / salaryArray.length) / 12)); 
       console.log(monthlySalary); 
       sum = 0; 
     $('#monthly').empty(); 
     $('#monthly').append('Total Monthy : ', monthlySalary ); 
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