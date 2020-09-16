// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		console.log("It is currently grey")
// 		//turn it black
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		})
// 	}
// 	//if li is black
// 	else{
// 		//turn it back
// 		console.log("It is black");
// 		$(this).css({
// 		color:"grey",
// 		textDecoration:"line-through"
// 	})

// 	}

	
// });

//we can do above to show completed task with grey color i.e rgb(128, 128, 128) and cross it
//or we can create a class in css and toggle it
$("ul").on("click", "li", function(){
	$(this).toggleClass('completed');
});

//click on x to delete the todo
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();

	});
	event.stopPropagation();
});
$('input[type=text]').keypress(function(event){
	if(event.which === 13){
		//grabbing new todo list
		var todos =$(this).val();
		$(this).val("");
		//create a new li and append it to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+todos+"</li>");
	}
});

$('.fa-plus').on("click",function(){
	$('input[type=text]').fadeToggle(500);
})
