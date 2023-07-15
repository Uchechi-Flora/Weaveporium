//line 1 to line 32, refers to signup page
const crochet = $("#crochet");
const buyer = $("#buyer");

//HERE I SET THE INITIAL STATE TO BE REMOVED; THAT MEANS THE HIGHLIGHT IS OFF HERE
$(".signup_box").removeClass('highlight')
$(".buyer_box").toggleClass('highlight')

//TOGGLE CLASS HIGHLIGHT FOR HIGHLIGHTTED SHADOW
crochet.click(function() {
    $(".signup_box").toggleClass('highlight')
})

buyer.click(function() {
    $(".buyer_box").toggleClass('highlight')

});

//AFTER SIGNING UP FOR THE CROTCHETER, ALL INFO HAS TO DISAPPER THEN THE SUCCESS MESSAGE APPEARS
const success = $(".crotchet_success")
success.hide()
$("#crotchet_submit").click(function(){
    $("#crocheter_info").hide()
    $(success).show()
})

const buyer_success = $(".buyer_success")
buyer_success.hide()
$("#buyer_submit").click(function(){
    $("#buyer_info").hide()
    $(buyer_success).show()
})
  
//SIGN UP PAGE JS
