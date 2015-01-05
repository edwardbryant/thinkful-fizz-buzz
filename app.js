$(document).ready(function(){
    $('#guts').text(" Starting ... ");
    for (var i=1;i<=100;i++){
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                var x = '<span style="color:red;font-weight:bold;">fizz-buzz</span>';
            } else {
                var x = '<span style="color:red;">fizz</span>';
            }
        } else if (i % 5 == 0) {
            var x = '<span style="color:red;">buzz</span>';    
        } else {
            var x = i;
        }
        if (i == 100) {
            var node = $('<span>'+x+'.</span>'); 
        } else {
            var node = $('<span>'+x+', </span>'); 
        }
        $('#guts').append(node);
    }
})