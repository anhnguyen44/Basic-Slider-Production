$(document).ready(function(){
	$("#show img").attr("src",$("#list-thumb li:first-child img").attr("src"));
	$("#list-thumb li:first-child img").addClass("active");
	$("#list-thumb li img").click(function(){
		$("#list-thumb li img").removeClass("active");
		var a=$(this).attr("src");
		$("#show img").attr("src",a);
		$(this).addClass("active")
		return false;
	});
});