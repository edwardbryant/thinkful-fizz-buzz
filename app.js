
$(document).ready(function(){
    $('#guts').text(" Counting ... ");
    for (var i=0;i<=100;i++){        
        if (i == 100) {
            var node = $('<span>'+i+'.</span>'); 
        } else {
            var node = $('<span>'+i+', </span>'); 
        }
        $('#guts').append(node);
    }
})

function checkForFizz(num) {
    
}

function checkForBuzz(num) {
    
}

function checkForFizzBuzz(num) {
    
}
