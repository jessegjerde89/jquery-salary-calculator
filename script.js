$(document).ready (readyNow)

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
   $('#newEmployee').append(employee);

   function showEmployee(employees){
    for( let i = 0; i<employees.length; i++){
        const addedEmployee = `<td> ${ employees[i].fName },
            ${ employees[i].lName},
            ${ employees[i].id},
            ${ employees[i].title}, 
            ${ employees[i].salary} </td>`;
            $('#newEmployeee').push( addedEmployee );
        }
}
    showEmployee(); 

    $('#FName, #LName, #ID, #Title, #ASalary').val(''); 
}

// function showEmployee(employees){
//     for( let i = 0; i<employees.length; i++){
//         const addedEmployee = `<td> ${ employees[i].fName },
//             ${ employees[i].lName},
//             ${ employees[i].id},
//             ${ employees[i].title}, 
//             ${ employees[i].salary} </td>`;
//             $('#newEmployeee').push( addedEmployee );
//         }
// }

//Removes users to the dom
function removeClick(){


}