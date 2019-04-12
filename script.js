$(document).ready (readyNow)

let employee = []

function readyNow(){

$('#addEmployee').click('on', addClick );
$('#removeEmployee').click('on', removeClick );
showEmployee( newEmployee )
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
    emlpoyee.push(newEmployee); 

    $('#FName, #LName, #ID, #Title, #ASalary').val(''); 
}

function showEmployee(employees){
    for( let i = 0; i<emlpoyee.length; i++){
        const addedEmployee = `<li>${ arrayToShow[i].size },
            ${ emlpoyees[i].color }: 
            ${ employees[i].description }</li>`;
        $(' tb ').append( addedEmployee );
    }
}

//Removes users to the dom
function removeClick(){


}