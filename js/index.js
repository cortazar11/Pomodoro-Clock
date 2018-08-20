$(document).ready(function(){
  
  /* Global variables */
      
    
    var active=true;
    var activeBreak=false;
    var running=false;
  
    var min=25;
     var secs=60;
  
    var minBreak=5;
     var secsBreak=60;
 
   
  /********function to set Break****************************/
        function setBreak(elem){
               $("#breakContent").html(elem);
        }
 
  /***********Function to set Session**************************************/
  
      function setSession(min,secs){
       
        $("#seContent").html(min);
        if(running==false){
            $("#timer").html(min);
        } else  {
            $("#timer").html(min+":"+secs);
        }
        
      }
  
  /******Click Session Length****************/ 
      
      
      
      $("#seMinus").click(function(){
          if(running==false){
            
          if(min>0){
            min--;
            secs=60;
            setSession(min);
          }
          else {
            setSession(1);
          }
        }
          
          
       
     })
  
      $("#sePlus").click(function(){
        if(running==false){
          min++;
          secs=60;
          setSession(min);
        }
        
     })
       /*****Click Break ********************/
  
      $("#breakMinus").click(function(){
          if(running==false){
            
          if(minBreak>0){
            minBreak--;
            secsBreak=60;
            setBreak(minBreak);
          }
          else {
            setBreak(1);
          }
          }
          
          
       
     })
  
      $("#breakPlus").click(function(){
        if(running==false){
          minBreak++;
          secsBreak=60;
          setBreak(minBreak);
        }
        
     })
     
      
        
   /* Function for the countdown ****************************/
      function countDown (){
        
            if(activeBreak==false){
                  if(active==true && running==true){
                        secs--;
        
                        if(min>0 && secs==59){
                              min--;
                            }
                        else if(min>0 && secs<0){
                              min--;
                              secs=59;
                            }
                        else if(min==0 && secs==0){
            
                              active=false;
                              activeBreak=true;
                              running=true;
                              //minBreak=5;
                              secsBreak=60;
             
                              //return;
                                 }
                     $("#text").html("SESSION");
                    var secsF=secs.toLocaleString(undefined, {minimumIntegerDigits: 2});
                     setSession(min,secsF);
                     setTimeout(countDown,1000);
                    
             }
              
          } else if(activeBreak==true){
              if(running==true){
                       secsBreak--;
         
                       if(minBreak>0 && secsBreak==59){
                                    minBreak--;
                              }
                       else if(minBreak>0 && secsBreak<0){
                                minBreak--;
                                secsBreak=59;
                          }
                        else if(minBreak==0 && secsBreak==0){
             
                               active=true;
                               activeBreak=false;
              
                              //min=25;
                              secs=60;
                              //return;
            
                        }
                      $("#text").html("BREAK!");
                      var secsBreakF=secsBreak.toLocaleString(undefined, {minimumIntegerDigits: 2});
                      $("#timer").html(minBreak+":"+secsBreakF);
                      setTimeout(countDown,1000);
              }
                  
            }
        
       
     
     }
        
   
    
  
   /************** Function for the state******************************/
   function changeState(){
     if(active==true && activeBreak==false){
         if(running==false){
          running=true;
          countDown();
        }
        else if(running==true) {
          running=false;
        }
     }
     else if (active==false && activeBreak==true) {
        if(running==true){
          running=false;
        }
        else if(running==false){
          running=true;
          countDown();
        }
     }
        
        
       
      }
  
     
  
     
  
    /***********Click circle****************/
      
     $("#circle").click(function(){
      
          changeState();
     });
  
      
})