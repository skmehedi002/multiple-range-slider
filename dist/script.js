/*===============Range slider==========*/
$("input.rs-range-line").on('mousemove click',function (e) {
  var curVal = $(this).val();
  var bulletPosition = curVal/$(this).attr('max');
  $(this).siblings('.rs-bullet').html(curVal);
  $(this).siblings('.rs-bullet').css('left',(bulletPosition * 92) + "%");
});