function add(){
	var itemValue = document.getElementById("itemValue").value;
	
	if(itemValue != ""){
		var myList =document.getElementById("myList");
		var node = document.createElement("LI");
		var newItem = document.getElementById("myList").appendChild(node);
		newItem.innerHTML=itemValue;
		document.getElementById("itemValue").value = "";

		newItem.addEventListener("click",function(){
			itemValue.valueL=newItem;
			myList.removeChild(newItem);

		});
	}

	


}