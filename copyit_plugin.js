(function($){
	var count = 1;
	var tt;
	var body;
	var ids =[];
	var default_id = 'defaultId';
	var default_class = 'defaultClass';
	$.fn.cloneit = function(obj){
		var bd = obj.target;
		var add_btn = obj.add_btn;
		if(typeof bd === 'undefined')
		{
			var div = $('<div>').addClass('clone_container');
			$('body').append(div);
			bd = '.clone_container';
		}	
		if(typeof add_btn === 'undefined')
		{
			add_btn = true;
		}
		 tt = $(this).clone();
		body = bd;
		check_class = $(this).attr('class');
		if(typeof check_class !== 'undefined' && check_class !== false)
		{
			default_class = check_class;
		}		
		check_id = $(this).attr('id');
		if(typeof check_id !== 'undefined' && check_id !== false)
		{
			
			default_id = check_id;
			$(this).attr('id',default_id+'_0');
		}
		else
		{
			$(this).attr('id','defaultId_0');
		}

		$(this).find('*').each(function(k,eve){
				var check_id = $(this).attr('id');
				if(typeof check_id !== 'undefined' && check_id !== false)
				{
					ids.push($(this).attr('id'));
				}
			});
		var del = $("<button>").attr('class','fatchDelete').text('X').attr('delete','0');
		$(del).on('click',function(){
				$(del).copyDelete();	
			});
		$(this).append(del);
		if(add_btn)
		{	
			var add = $("<button>").attr('class','addme').text('Add');
			$(add).on('click',function(){
					$(add).copyit();	
				});
			$(this).append(add);
		}
	}

	$.fn.copyit = function(){
		var tt1 = $(tt).clone();
			current_class = default_class+'_'+count;
			current_id = default_id+'_'+count;
			$(tt1).attr('id',current_id);
			tt1.appendTo(body);
			var del = $("<button>").attr('class','fatchDelete').text('X').attr('delete',count);
			$(del).on('click',function(){
				$(del).copyDelete();	
			})
			$(tt1).append(del);
			total = $('#'+current_id).find('*').each(function(k,eve){
				var check_id = $(this).attr('id');
				var i =0;
				if(typeof check_id !== 'undefined' && check_id !== false)
				{
					id_name = $(this).attr('id');
					$(this).attr('id',ids[i]+'_'+count);
					i++;
				}
			});
			count++;
	}
	//Fatch All values
	$.fn.fatchIt = function(){
		var fullar = [];
		for(var j =0;j<=count;j++)
		{
			check_id = default_id+'_'+j;
			check_id1 = $('#'+check_id).attr('id');
			if(typeof check_id1 !== 'undefined' && check_id1 !== false)
			{
				var ar =[];
				$('#'+check_id).find('*').each(function(k,eve){
						var name = $(this).attr('name');
						var id = $(this).attr('id');
						var a = $(this).prop('tagName');
						var pushit = false;
							if(a == "INPUT")
							{
								if($(this).attr('type') == 'radio'  || $(this).attr('type') == 'checkbox' )
								{
									if($(this).attr('type') == 'checkbox')
									{
										val = $(this).prop('checked');
									}
									if($(this).attr('type') == 'radio')
									{
										if($(this).prop('checked'))
										{
											val = $(this).val();
										}
									}
								}
								else
								{
									val = $(this).val();
								}
								if($(this).attr('type') == 'text')
								{
									val = $(this).val();
								}
								var obj = {name:name,value:val};	
								pushit = true;
							}
							if(a == "TEXTAREA")
							{
								val = $(this).val();
								name = name;
								var obj = {name:name,value:val};	
								pushit = true;
							}
							if(a == "SELECT")
							{
								val = $(this).val();
								var obj = {name:name,value:val};	
								pushit = true;
							}
							
					//push id to array
					if(pushit)
					{
						ar.push(obj);					
					}
				});
				fullar.push(ar);
			}

		}
		return fullar;
	}
	//Delet Clone
	$.fn.copyDelete = function(){
  	del_id = $(this).attr('delete');
      $('#'+default_id+'_'+del_id).remove();
    }	
	
})(jQuery);