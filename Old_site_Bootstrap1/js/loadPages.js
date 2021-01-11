		function clickLectTask(event){
			$('#lectTask').addClass('active');
			$('#pupils').removeClass('active');
			$('#parents').removeClass('active');
			$('#culture').removeClass('active');
			$('#content').empty();
			$('#content').load('lecturesTasks.html');
		}
		
		function clickPupils(event){
			$('#pupils').addClass('active');
			$('#lectTask').removeClass('active');
			$('#parents').removeClass('active');
			$('#culture').removeClass('active');
			$('#content').empty();
			$('#content').load('forPupils.html'); 
		}
		
		function clickParents(event){
			$('#parents').addClass('active');
			$('#lectTask').removeClass('active');
			$('#pupils').removeClass('active');
			$('#culture').removeClass('active');
			$('#content').empty();
			$('#content').load('forParents.html');
		}
		
		function clickCulture(event){
			$('#culture').addClass('active');
			$('#lectTask').removeClass('active');
			$('#pupils').removeClass('active');
			$('#parents').removeClass('active');
			$('#content').empty();
			$('#content').load('culture.html');
		}
		
		$(document).ready(function(){
			$('#author').tooltip({
				   background : '#0e8f8f',
			       placement : 'bottom',
			       title : ' Повідомлення про помилки та неточності надсилайте за адресою <a href="mailto:informaticlpml13@gmail.com">informaticlpml13 @gmail.com</a> ',
			       html : true,
			       trigger : 'click'
				 });
			$('#lectTask').click(clickLectTask);
			$('#pupils').click(clickPupils);
			$('#parents').click(clickParents);
			$('#culture').click(clickCulture);
			
			$('#lectTaskLink').click();
		});