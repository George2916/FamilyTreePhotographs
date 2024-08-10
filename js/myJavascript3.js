 /* JAVASCRIPT FOR SUNGHEE2018.HTML, SUNGHEE2019-20.HTML AND SUNGHEE2024.HTML */

/* activate Previous and Next buttons that appear in the modals */

/* 2018 and 2019-20 */

$("div[id^='myModal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

})

/* 2018 and 2024 */

$("div[id^='niModal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='niModal']").nextAll("div[id^='niModal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='niModal']").prevAll("div[id^='niModal']").first().modal('show'); 
  });

})

$("div[id^='poModal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='poModal']").nextAll("div[id^='poModal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='poModal']").prevAll("div[id^='poModal']").first().modal('show'); 
  });

})

$("div[id^='spModal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='spModal']").nextAll("div[id^='spModal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='spModal']").prevAll("div[id^='spModal']").first().modal('show'); 
  });

})

$("div[id^='usModal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='usModal']").nextAll("div[id^='usModal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='usModal']").prevAll("div[id^='usModal']").first().modal('show'); 
  });

})

/* 2019-20 */

$("div[id^='modal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='modal']").nextAll("div[id^='modal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='modal']").prevAll("div[id^='modal']").first().modal('show'); 
  });

})

/* 2019 - choose picture to appear in second photograph in first row and myModal2 */ 

function choosePicture1() {
    
  var pictures = ["images/sunghee2019-20/2019-2A.jpg", "images/sunghee2019-20/2019-2B.jpg"];
  
  var randomNum = Math.floor(Math.random() * pictures.length);
 
  document.getElementById("familyPicture1").src = pictures[randomNum];
}
choosePicture1();

function choosePicture2() {
    
  var pictures = ["images/sunghee2019-20/2019-2A.jpg", "images/sunghee2019-20/2019-2B.jpg"];
  
  var randomNum = Math.floor(Math.random() * pictures.length);
 
  document.getElementById("familyPicture2").src = pictures[randomNum];
}
choosePicture2();

/* 2019 - choose picture to appear in second photograph in myModal5 */ 

function groupPhoto() {
    
  var pictures = ["images/sunghee2019-20/2019-5A.jpg", "images/sunghee2019-20/2019-5B.jpg"];
  
  var randomNum = Math.floor(Math.random() * pictures.length);
 
  document.getElementById("groupPhoto").src = pictures[randomNum];
}
groupPhoto();

/* activate previous and next buttons that appear at bottom of page */

function myFunction2018B() {
  location.href = "sunghee2019-20.html"
}

function myFunction2019A() {
  location.href = "sunghee2018.html"
}

function myFunction2019B() {
  location.href = "sunghee2021-22.html"
}

function myFunction2024A() {
  location.href = "sunghee2023.html"
}
