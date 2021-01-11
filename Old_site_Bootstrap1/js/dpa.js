$('#ticketsDpa').bind('click', function(){
	window.open('/tasks/ticketsDpa.pdf');
});

$('#blankDpa').bind('click', function(){
	window.open('/tasks/blankDpa.pdf');
});

$('#tasksDpa').bind('click', function(){
	window.open('/tasks/tasksDpa.rar');
});

$('#project').bind('click', function(){
	$('#rightSide').load('/tasks/Project.htm');
});