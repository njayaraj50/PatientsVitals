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
  		  $("#general").mouseenter(function(){
  			  $("#general1").show();
  		  })
  		})
  		  $(document).ready(function(){  
  		  $("#general1").mouseleave(function(){
  			  $("#general1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#cardiac").mouseenter(function(){
  			  $("#cardiac1").show();
  		  })
  		})
  		  $(document).ready(function(){  
  		  $("#cardiac1").mouseleave(function(){
  			  $("#cardiac1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#respiratory").mouseenter(function(){
  			  $("#respiratory1").show();
  		  })
  		})
  		  $(document).ready(function(){  
  		  $("#respiratory1").mouseleave(function(){
  			  $("#respiratory1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#neuro").mouseenter(function(){
  			  $("#neuro1").show();
  		  })
  		})
  		  $(document).ready(function(){  
  		  $("#neuro1").mouseleave(function(){
  			  $("#neuro1").hide();
  		  })
  		})
  		$(document).ready(function (){
  			$(".nav-link active").click(function(){
  				$(this).css("height","5px");
  			})
  		})
  		
/*$(document).ready(function(){
	$('#general2').click(function(){
		$('#dialog1').
})

});*/