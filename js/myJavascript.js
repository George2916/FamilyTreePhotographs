/* activate Previous and Next buttons that appear in the modals */

$("div[id^='myModal']").each(function(){
  
    var currentModal = $(this);
    
    //click next
    currentModal.find('.btn-next').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
    });
    
    //click prev
    currentModal.find('.btn-prev').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
    });
  
  });

  /* activate Previous and Next buttons at bottom of galleries */

  function myFunction1() {
    location.href = "gallery2GAGI.html"
  }
  
  function myFunction2() {
    location.href = "gallery1GAGI.html"
  }

  function myFunction1A() {
    location.href = "gallery2GAGIII.html"
  }
  
  function myFunction2A() {
    location.href = "gallery1GAGIII.html"
  }


