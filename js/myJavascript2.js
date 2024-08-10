
  /* JAVASCRIPT FOR MISCPHOTOS.HTML */

/* activate Previous and Next buttons that appear in the modals */
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

});



/* change layout of cards depending on screen size */

function smpFunction() {
    
    const cards = document.querySelectorAll('.playingCard');
    
    const myElement1 = document.getElementById('playingCard1');
    const myElement2 = document.getElementById('playingCard2');
    const myElement3 = document.getElementById('playingCard3');
    
    if (window.matchMedia('(max-width: 500px)').matches) {
   
        cards.forEach(item => {
            item.style.width = '300px';
            item.style.height = '480px';
            item.style.display = 'block';
            item.style.marginLeft = 'auto';
            item.style.marginRight = 'auto';
        }); 
        
        myElement1.style.transform = 'rotate(-0deg)';
        myElement2.style.transform = 'rotate(0deg)';
        myElement3.style.transform = 'rotate(0deg)';
            
    }

    else if (window.matchMedia('(max-width: 992px)').matches) {
   
        cards.forEach(item => {
            item.style.width = '400px';
            item.style.height = '480px';
            item.style.display = 'block';
            item.style.marginLeft = 'auto';
            item.style.marginRight = 'auto';
        }); 
        
        myElement1.style.transform = 'rotate(-0deg)';
        myElement2.style.transform = 'rotate(0deg)';
        myElement3.style.transform = 'rotate(0deg)';
            
    }
    
    else {
        cards.forEach(item => {
            item.style.width = '300px';
            item.style.height = '480px';
            item.style.display = 'flex';
            //item.style.marginLeft = 'auto';
            //item.style.marginRight = 'auto';
        });      
        
        
    }   
}

smpFunction();

/* choose picture from Barnes Foundation to display in modal3 */ 

function chooseBarnesPicture() {
    
  var pictures = ["images/sunghee2021-22/us4A.jpg", "images/sunghee2021-22/us4B.jpg", "images/sunghee2021-22/us4C.jpg"];
  
  var randomNum = Math.floor(Math.random() * pictures.length);
 
  document.getElementById("barnesPicture").src = pictures[randomNum];
}
chooseBarnesPicture();

/* choose picture from Clark Art Institute to display in modal3 */ 

function chooseClarkPicture() {
    
  var pictures = ["images/sunghee2021-22/us19A.jpg", "images/sunghee2021-22/us19B.jpg", "images/sunghee2021-22/us19C.jpg"];
  
  var randomNum = Math.floor(Math.random() * pictures.length);
 
  document.getElementById("clarkPicture").src = pictures[randomNum];
}

chooseClarkPicture();

/* activate Previous and Next buttons at bottom of page */

function myFunction2021A() {
  location.href = "sunghee2019-20.html"
}

function myFunction2021B() {
  location.href = "sunghee2023.html"
}