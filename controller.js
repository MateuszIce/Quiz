$(document).ready(function() {
    
var question;

var i=1;//random number - it will be function later


//dataFill - load question and answers into 
function dataFill() {        
        $.getJSON("questions.json", function(data){   
        $('.question').text(data.q[i].que);
        $('.ans-1').text(data.q[i].ans1);
        $('.ans-2').text(data.q[i].ans2);
        $('.ans-3').text(data.q[i].ans3);
        $('.ans-4').text(data.q[i].ans4);
            
        });
    
};

function checkClick(){
    $( ".ans" ).click(function() {
    b = $('.ans-1').clone();
    alert( b.text() );
});
}
    
    
checkClick();
dataFill();

});