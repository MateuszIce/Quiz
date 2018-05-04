$(document).ready(function() {

//reload page after answer
function reload(){
    setInterval(function(){
        location.reload();
    }, 3000);
}


//lock to click and hover after answer    
function lock(){
     $('.ans').removeClass('ans-1').removeClass('ans-2').removeClass('ans-3').removeClass('ans-4').css('cursor','default');
}
  
//if answer is right
function is_ok(x){
    $(x).css('background-color', 'green');
    lock();
    reload();
}; 
//if answer is wrong
function not_ok(x){
    $(x).css('background-color', 'red');
    lock();
    reload();
};     
    
    //dataFill - load question and answers into \
     $.getJSON("questions.json", function(data){ 
    
     let min = 0;
     let max = (data.q.length)-1;
     let i = Math.floor(Math.random() * (max - min + 1)) + min;
     
     $('.question').text(data.q[i].que);
    //add randomizing answers!
     $('.ans-1').text(data.q[i].ans1);
     $('.ans-2').text(data.q[i].ans2);
     $('.ans-3').text(data.q[i].ans3);
     $('.ans-4').text(data.q[i].ans4);
         
     $ok_ans = data.q[i].ansok;            
        });
    
//check clicked answer
    //variables for questions
    let a = '.ans-1';
    let b = '.ans-2';
    let c = '.ans-3';
    let d = '.ans-4';
    
    //if clicked ans1
    $(a).click(function() {
    $ans_1 = $(a).clone();
        if($ans_1.text()==$ok_ans){
            is_ok(a);
        }
        else {
            not_ok(a);
        }
    });
    
    //if clicked ans2
    $(b).click(function() {
    $ans_2 = $(b).clone();
        if($ans_2.text()==$ok_ans){
            is_ok(b);
        }
        else {
            not_ok(b);
        }
    });
    
    //if clicked ans3
    $(c).click(function() {
    $ans_3 = $(c).clone();
        if($ans_3.text()==$ok_ans){
            is_ok(c);
        }
        else {
            not_ok(c);
        }
    });
    
    //if clicked ans4
    $(d).click(function() {
    $ans_4 = $(d).clone();
        if($ans_4.text()==$ok_ans){
            is_ok(d);
        }
        else {
            not_ok(d);
        }
    });

    
});