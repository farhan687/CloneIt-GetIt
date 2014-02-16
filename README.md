CloneIt-GetIt JQuery Plugin
=============

Add the clone of any html element ,and fatch the values of some form elements ( input-text,number, select, checkbox, radio, textarea supported)

It contains only 3 methods
1)  //Apply Clone
        
        $('.container').cloneit({
        'target':'.abc',
        'add_btn':false
      });
      
      //contianer is the class that you want to clone
      //Target is required. without target function would take body tag as target
      //add_btn is optional.(by default it's true) if set it to true, auto add btn would be provide, 
      otherwise you can apply copyit() function in your own way
          
2) Add Button (only if you have pass add_btn argument false)
  
        //use this function to clone your container
          $().copyit();  
        
3) Fatch Values        
    
    //fatch all values
        var fatchall = $().fatchIt();
    
