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
  	  
  	function  refreshTime3() {
    	  const dateDisplay = document.getElementById("date2");
    	  const dateString = new Date().toLocaleDateString();
    	  dateDisplay.textContent = dateString;
    	 
    	}
    	  setInterval(refreshTime3, 1000);
    	  
    	  function  refreshTime4() {
    	  	  const dateDisplay = document.getElementById("date3");
    	  	  const dateString = new Date().toLocaleDateString();
    	  	  dateDisplay.textContent = dateString;
    	  	 
    	  	}
    	  	  setInterval(refreshTime4, 1000);
    	  	  
    	  	function  refreshTime5() {
    	    	  const dateDisplay = document.getElementById("date4");
    	    	  const dateString = new Date().toLocaleDateString();
    	    	  dateDisplay.textContent = dateString;
    	    	 
    	    	}
    	    	  setInterval(refreshTime5, 1000);
    	    	  
        //dialog box time	  
  	  function  refreshTime6() {
  		  const timeDisplay = document.getElementById("time1");
  		  const timeString = new Date().toLocaleTimeString([],{
  			  hourCycle: 'h23',
  		  hour: '2-digit',
  		  minute: '2-digit'
  		  });
  		  timeDisplay.textContent=timeString;
  		 
  		}
  		  setInterval(refreshTime6, 1000);
  		  
  		function  refreshTime7() {
    		  const timeDisplay = document.getElementById("time2");
    		  const timeString = new Date().toLocaleTimeString([],{
    			  hourCycle: 'h23',
    		  hour: '2-digit',
    		  minute: '2-digit'
    		  });
    		  timeDisplay.textContent=timeString;
    		 
    		}
    		  setInterval(refreshTime7, 1000);
    		  
    		  function  refreshTime8() {
    	  		  const timeDisplay = document.getElementById("time3");
    	  		  const timeString = new Date().toLocaleTimeString([],{
    	  			  hourCycle: 'h23',
    	  		  hour: '2-digit',
    	  		  minute: '2-digit'
    	  		  });
    	  		  timeDisplay.textContent=timeString;
    	  		 
    	  		}
    	  		  setInterval(refreshTime8, 1000);
    	  		  
    	  		function  refreshTime9() {
    	    		  const timeDisplay = document.getElementById("time4");
    	    		  const timeString = new Date().toLocaleTimeString([],{
    	    			  hourCycle: 'h23',
    	    		  hour: '2-digit',
    	    		  minute: '2-digit'
    	    		  });
    	    		  timeDisplay.textContent=timeString;
    	    		 
    	    		}
    	    		  setInterval(refreshTime9, 1000);
//hover Effect
  		$(document).ready(function(){  
  		  $("#general").click(function(){
  			  $("#general1").toggle();
  		  })
  		})
  		  $(document).ready(function(){  
  		  $("#cardiac").click(function(){
  			  $("#general1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#respiratory").click(function(){
  			  $("#general1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#neuro").click(function(){
  			  $("#general1").hide();
  		  })
  		})
  		  
  		$(document).ready(function(){  
  		  $("#cardiac").click(function(){
  			  $("#cardiac1").toggle();
  		  })
  		})
  		 $(document).ready(function(){  
  		  $("#general").click(function(){
  			  $("#cardiac1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#respiratory").click(function(){
  			  $("#cardiac1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#neuro").click(function(){
  			  $("#cardiac1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#respiratory").click(function(){
  			  $("#respiratory1").toggle();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#general").click(function(){
  			  $("#respiratory1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#cardiac").click(function(){
  			  $("#respiratory1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#neuro").click(function(){
  			  $("#respiratory1").hide();
  		  })
  		})
  		 
  		$(document).ready(function(){  
  		  $("#neuro").click(function(){
  			  $("#neuro1").toggle();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#general").click(function(){
  			  $("#neuro1").hide();
  		  })
  		})
  		  $(document).ready(function(){  
  		  $("#cardiac").click(function(){
  			  $("#neuro1").hide();
  		  })
  		})
  		$(document).ready(function(){  
  		  $("#respiratory").click(function(){
  			  $("#neuro1").hide();
  		  })
  		})
  		$(document).ready(function (){
  			$(".nav-link active").click(function(){
  				$(this).css("height","5px");
  			})
  		})
  		
  		
  		$(document).ready(function (){
  			$("#cancel1").click(function(){
  				$("#form1")[0].reset();
  			})
  		})
  		$(document).ready(function (){
  			$("#cancel2").click(function(){
  				$("#form2")[0].reset();
  			})
  		})
  		$(document).ready(function (){
  			$("#cancel3").click(function(){
  				$("#form3")[0].reset();
  			})
  		})
  		$(document).ready(function (){
  			$("#cancel4").click(function(){
  				$("#form4")[0].reset();
  			})
  		})
  	$(document).ready(function (){
  			$("#submit1").click(function(){
  				alert("Submitted Successfully");
  			})
  		})
  		$(document).ready(function (){
  			$("#submit2").click(function(){
  				alert("Submitted Successfully");
  			})
  		})
  		$(document).ready(function (){
  			$("#submit3").click(function(){
  				alert("Submitted Successfully");
  			})
  		})
  		$(document).ready(function (){
  			$("#submit4").click(function(){
  				alert("Submitted Successfully");
  			})
  		})
  		function formValidation(){
  			var frmvalid = $("#form1").valid();
  			if(!frmvalid){
  				return false;
  			}
  			else{
  				alert("Submitted Successfully");
  				location.href="sample.html";
  			}
  		}
  		function formValidation2(){
  			var frmvalid = $("#form2").valid();
  			if(!frmvalid){
  				return false;
  			}
  			else{
  				alert("Submitted Successfully");
  				location.href="sample.html";
  			}
  		}
  		function formValidation3(){
  			var frmvalid = $("#form3").valid();
  			if(!frmvalid){
  				return false;
  			}
  			else{
  				alert("Submitted Successfully");
  				location.href="sample.html";
  			}
  		}
  		function formValidation4(){
  			var frmvalid = $("#form4").valid();
  			if(!frmvalid){
  				return false;
  			}
  			else{
  				alert("Submitted Successfully");
  				location.href="sample.html";
  			}
  		}
  		$("li.nav-item").click(function(){
  			$(this).addClass("active");
  		
  		})
  		