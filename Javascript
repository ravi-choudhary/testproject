<html>
  <head>
    <title>javascript</title>
    <script language="javascript" type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <style>
      
      #demo{position:absolute; color:red;}
      
      
    </style>
    </head>
  
    <script>
  
    $(document).ready(function() {
        
    	
      
      $("#demo").click(function(e){
        
        $(this).animate({left:'500'})
        
      e.preventDefault();
    });
      });
   
  
  </script>
  
  
    <body>
    <div id="demo">Animate</div>
  </body>
  
</html>

