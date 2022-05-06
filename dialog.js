/**
 * 
 */
//first page date
function  refreshTime1() {
	  const timeDisplay = document.getElementById("date");
	  const dateString = new Date().toLocaleString();
	  const formattedString = dateString.split(",")[0];
	  timeDisplay.textContent = formattedString;
	 
	}
	  setInterval(refreshTime1, 1000);
	//dialog box date	  
      function  refreshTime2() {
  	  const dateDisplay = document.getElementById("date1");
  	  const dateString = new Date().toLocaleDateString();
  	  dateDisplay.textContent = dateString;
  	 
  	}
  	  setInterval(refreshTime2, 1000);
        //dialog box time	  
  	  function  refreshTime3() {
  		  const timeDisplay = document.getElementById("time");
  		  const timeString = new Date().toLocaleTimeString([],{
  			  hourCycle: 'h23',
  		  hour: '2-digit',
  		  minute: '2-digit'
  		  });
  		  timeDisplay.textContent=timeString;
  		 
  		}
  		  setInterval(refreshTime3, 1000);
		  		  
//hover Effect
  		$(document).ready(function(){  
  		  $("#general").click(function(){
  			  $("#general1").toggle();
  		  })
  		})
  		  
  		$(document).ready(function(){  
  		  $("#cardiac").click(function(){
  			  $("#cardiac1").toggle();
  		  })
  		})
  		 
  		$(document).ready(function(){  
  		  $("#respiratory").click(function(){
  			  $("#respiratory1").toggle();
  		  })
  		})
  		 
  		$(document).ready(function(){  
  		  $("#neuro").click(function(){
  			  $("#neuro1").toggle();
  		  })
  		})
  		  
  		$(document).ready(function (){
  			$(".nav-link active").click(function(){
  				$(this).css("height","5px");
  			})
  		})
  		
  		function alert1(){
  			alert("Submitted Successfully");
  		}