$(document).ready (readyNow)



function readyNow(){

$('#addEmployee').click('on', addClick );
$('#removeEmployee').click('on', removeClick );
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
    console.log(newEmployee); 
    $('#tableBody').push(newEmployee); 

    $('#FName, #LName, #ID, #Title, #ASalary').val(''); 
}

//Removes users to the dom
function removeClick(){


}