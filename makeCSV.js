


$(document).ready(function () {

	$("body").on("click",".print",function () {
		
		var data = []
		$("tr.person").each(function() {
			var newData = []
			$(this).each(function(){
				newData.push($(this).text())
				
			});
			data.push(newData)
            });
		
		
		var csvContent = "data:text/csv;charset=utf-8,";
		
		var arrayLength = data.length;
		for (var i = 0; i < arrayLength; i++) {
		    dataString = data[i].join();
		    csvContent +=  dataString + "\n";
		}

		var encodedUri = encodeURI(csvContent);
		window.open(encodedUri);
		
	}

);
});
