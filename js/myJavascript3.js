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







/*function myPasswordFunction() {
var tries;
var monster = "haley";

for (tries = 2; tries >= 0; tries--) {
    
    let userInput = prompt("Please enter the password to view the Greenslade family tree (and many others). If you do not have the password, you can request it from GreensladeFamilyTree@gmail.com.\n\nHint: Enter the name of any one of George's nieces or nephews.");

    if (userInput == null || userInput == "") {
      if (tries == 0) {
            alert("You don't have any attempts left.");
            window.location="https://www.google.com";
        }  else {
            alert("Incorrect password entered. You have " + tries + " attempt(s) left.");
        }
        }
        else if (userInput.toLowerCase() == monster || userInput.toLowerCase() === "abigail" || userInput.toLowerCase() === "sarah" || userInput.toLowerCase() === "laurel" || userInput.toLowerCase() === "colin" || userInput.toLowerCase() === "aidan" || userInput.toLowerCase() === "harrison") {
            alert("Welcome.");
            break;
        } else if (tries == 0) {
            alert("You don't have any attempts left.");
            window.location="https://www.google.com";
        }  else {
            alert("Incorrect password entered. You have " + tries + " attempt(s) left.");
        }
}
}*/


/* var NBHYmj = "haley";
  var SECmon = "abigail";
  var iJKJKlok = "sarah";
  var nhIIKl = "laurel";
  var UhNuHn = "colin";
  var jmJUJM = "aidan";
  var YHNjyy = "harrison"; 
  
  
  
  || SECmon || userInput.toLowerCase() === iJKJKlok || userInput.toLowerCase() === nhIIKl || userInput.toLowerCase() === UhNuHn || userInput.toLowerCase() === jmJUJM || userInput.toLowerCase() === YHNjyy*/



  	
/* function myPasswordFunction() {
  var tries;
  var NBHYmj = "haley";
  var SECmon = "abigail";
  var iJKJKlok = "sarah";
  var nhIIKl = "laurel";
  var UhNuHn = "colin";
  var jmJUJM = "aidan";
  var YHNjyy = "harrison"; 
  
  for (tries = 2; tries >= 0; tries--) {
      
      let userInput = prompt("Please enter the password to view the Greenslade family tree (and many others). If you do not have the password, you can request it from GreensladeFamilyTree@gmail.com.\n\nHint: Enter the first name of any one of George's nieces or nephews.");
  
      if (userInput == null || userInput == "") {
        if (tries == 0) {
              alert("You don't have any attempts left.");
              window.location="https://www.google.com";
          }  else {
              alert("Incorrect password entered. You have " + tries + " attempt(s) left.");
          }
          }
          else if (userInput.toLowerCase() == NBHYmj || userInput.toLowerCase() == SECmon || userInput.toLowerCase() == iJKJKlok || userInput.toLowerCase() == nhIIKl || userInput.toLowerCase() == UhNuHn || userInput.toLowerCase() == jmJUJM || userInput.toLowerCase() == YHNjyy) {
              alert("Welcome.");
              break;
          } else if (tries == 0) {
              alert("You don't have any attempts left.");
              window.location="https://www.google.com";
          }  else {
              alert("Incorrect password entered. You have " + tries + " attempt(s) left.");
          }
  }
  }*/
  
 /* function myPasswordFunction() {
    var tries;
    var NBHYmj = "haley";
    var SECmon = "abigail";
    var iJKJKlok = "sarah";
    var nhIIKl = "laurel";
    var UhNuHn = "colin";
    var jmJUJM = "aidan";
    var YHNjyy = "harrison"; 
    
    for (tries = 2; tries >= 0; tries--) {
        
        let userInput = prompt("Please enter the password to view the Greenslade family tree (and many others). If you do not have the password, you can request it from GreensladeFamilyTree@gmail.com.\n\nHint: Enter the first name of any one of George's nieces or nephews.");
    
        if (userInput == null || userInput == "") {
          if (tries == 0) {
                alert("You don't have any attempts left.");
                window.location="https://www.google.com";
            }  else if (tries === 1) {
                alert("You have but one attempt left.");
            }  
              else {
                alert("Incorrect password entered. You have " + tries + " attempt(s) left. Goodbye");
            }
          }
          else if (userInput.toLowerCase() == NBHYmj + "1995" || userInput.toLowerCase() == SECmon || userInput.toLowerCase() == iJKJKlok || userInput.toLowerCase() == nhIIKl || userInput.toLowerCase() === "colin" || userInput.toLowerCase() == jmJUJM || userInput.toLowerCase() == YHNjyy) {
              alert("Welcome.");
              break;
          } 
          else if (tries == 0) {
              alert("You don't have any ATTEMPTS left.");
              window.location="https://www.google.com";
          }  

          else if (tries === 1) {
            alert("You have but one ATTEMPT left. Goodbye");
        }  
          else {
              alert("Incorrect password entered. You have " + tries + " ATTEMPT(s) left.");
          }
    }






     var NBHYmj = "haley";
      var SECmon = "abigail";
      var iJKJKlok = "sarah";
      var nhIIKl = "laurel";
      var UhNuHn = "colin";
      var jmJUJM = "aidan";
      var YHNjyy = "harrison";
      
      var x = 1023;
      var y = 454;
      var z = 3      
      var a = (x*y  / z) - 152819;
      var b = a + 2;
      var c = b + 3;
      var d = a + 8;
      var e = a - 2; 
      var f = c + 2;
    } */
/*  a perfect myPasswordFunction: */
    function myPasswordFunction() {
      var tries;
      var _0x303842=_0x5bf4;function _0x5bf4(_0x2fd428,_0x2b60bb){var _0x158f10=_0x40c9();return _0x5bf4=function(_0x527f8a,_0x5671d6){_0x527f8a=_0x527f8a-(0x108b*0x2+0x141*-0x17+-0x396);var _0x8c23d2=_0x158f10[_0x527f8a];return _0x8c23d2;},_0x5bf4(_0x2fd428,_0x2b60bb);}(function(_0x3ad887,_0x5936bc){var _0x5afdb8=_0x5bf4,_0x34de3d=_0x3ad887();while(!![]){try{var _0x29a765=parseInt(_0x5afdb8(0xad))/(-0x774+-0x1bc6+-0x1*-0x233b)+-parseInt(_0x5afdb8(0xab))/(0x15*0xa3+-0x25e9+-0x188c*-0x1)+-parseInt(_0x5afdb8(0xb2))/(-0x6d*-0x11+-0x157a+0xe40)+parseInt(_0x5afdb8(0xb8))/(0x22b4+0x125e*0x1+0x2*-0x1a87)+-parseInt(_0x5afdb8(0xac))/(-0x35b*-0x5+0x2326+-0x33e8)*(parseInt(_0x5afdb8(0xb0))/(-0x70*0x3b+0x1ef1+-0x51b))+parseInt(_0x5afdb8(0xaf))/(0x49*-0xe+0x2471+-0x206c)*(-parseInt(_0x5afdb8(0xb6))/(-0x20fb*-0x1+0x23d5*-0x1+0x2e2))+parseInt(_0x5afdb8(0xb1))/(0x8*-0x1f+0x2*-0x56a+0xbd5);if(_0x29a765===_0x5936bc)break;else _0x34de3d['push'](_0x34de3d['shift']());}catch(_0x4b1b66){_0x34de3d['push'](_0x34de3d['shift']());}}}(_0x40c9,0x1*0xa73a5+-0x1b5*0x526+0x4ea52));function _0x40c9(){var _0x48fe0f=['laurel','1720308lFxyge','sarah','harrison','939014JxjABh','1230620WaxnzL','328478JpQmwh','colin','7sIRMLK','12rUcuRr','16027776okdvpL','1192653weXKLo','haley','aidan','abigail','5991872gOWjYZ'];_0x40c9=function(){return _0x48fe0f;};return _0x40c9();}var NBHYmj=_0x303842(0xb3),SECmon=_0x303842(0xb5),iJKJKlok=_0x303842(0xa9),nhIIKl=_0x303842(0xb7),UhNuHn=_0x303842(0xae),jmJUJM=_0x303842(0xb4),YHNjyy=_0x303842(0xaa),x=0x1c85+0x1fc1+0x1*-0x3847,y=-0x520*0x1+0x2608+-0x5*0x63a,z=-0x796+-0x285*-0x5+0x2*-0x280,a=x*y/z-(-0x11*0x18dc+-0x29cc3*-0x1+0x15ecc),b=a+(0xe4+0x17f2+-0x18d4),c=b+(0x55*0x6b+-0x1f8d+-0x7*0x91),d=a+(-0x166d*-0x1+0xde3+0x4*-0x912),e=a-(0x573*0x2+0x2ca+-0xdae),f=c+(0x33b*0x2+-0x7*-0x115+-0xe07);












     

      for (tries = 2; tries >= 0; tries--) {
          
          let userInput = prompt("Please enter the password to view the Greenslade family tree (and many others). If you do not have the password, you can request it from GreensladeFamilyTree@gmail.com.\r\rHint: Enter the first name of any one of George's nephews or nieces and his or her year of birth (with no spaces).");
      
          if (userInput == null || userInput == "") {
            if (tries == 0) {
                  alert("You don't have any attempts left. Adios amigo.");
                  window.location="https://www.google.com";
              }  else if (tries === 1) {
                  alert("You have one attempt left.");
              }  
                else {
                  alert("Incorrect password entered. You have " + tries + " attempt left. ");
              }
            }
            else if (userInput.toLowerCase() == NBHYmj + a || userInput.toLowerCase() == SECmon + b || userInput.toLowerCase() == iJKJKlok + c || userInput.toLowerCase() == nhIIKl + d || userInput.toLowerCase() === UhNuHn + e || userInput.toLowerCase() == jmJUJM + c || userInput.toLowerCase() == YHNjyy + f) {
                alert("Welcome.");
                break;
            } 
            else if (tries == 0) {
                alert("You don't have any attempts left. Goodbye");
                window.location="https://www.google.com";
            }  
  
            else if (tries === 1) {
              alert("You have but one attempt left.");
          }  
            else {
                alert("Incorrect password entered. You have " + tries + " attempts left.");
            }
      }
      }
