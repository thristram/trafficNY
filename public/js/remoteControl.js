function control(value){
	let name = $("#name").val();
	if(!name){
		alert("Please enter your name");
	}   else {
		$.ajax({
			type: "GET",
			url: "/api/add",
			data: {
				name: name,
				value: value
			},
			success: {

			}
		});
	}
}
$(document).ready(function () {
	setInterval(function () {
		$.get( "/api/control/get", function( data ) {

			if(data && parseInt(data.number)){

				$("#controlCarNumber").html(data.number)
			}
		});
	},500)
})
