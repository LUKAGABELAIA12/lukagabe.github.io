

      var deathDates = ["15 ივლისი<br>","13 იანვარი<br>",  "8 მარტი<br>", "2 მაისი<br>", "1 აგვისტო<br>", "15<br>ნოემბერი<br>"]; // თარიღები 
      var deathReasons = [" დაიხრჩობი" , "კორონა<br>" , "თვით<br>მკვლელობა", "ვაქცინას<br> გაიკეთებ <br>შემდეგ ზომბად<br> გადაიქცევი<br> და სხვა<br> მოგკლავს"] // სიკვდილის მიზეზები
      
      function death(){
        var reason= Math.floor(Math.random()*3);  
          
          var date= Math.floor(Math.random()*6); 
       
        document.getElementById("button").innerHTML = deathDates[date] + deathReasons[reason];


      }
    
    