function task1(parent) {
	var keys = [];
	for (var j = 1; j <= 9; j++) {
		for (var i = 1;i <= 9;i++) { 
			keys.push((j*i).toString());
		}
	}
	var counter = 0;
	var table = document.createElement("table");
	table.setAttribute("cellpadding", 10);
	table.setAttribute("align", "center");
	for (var i = 0; i < 9;i++) {
		var tr = document.createElement("tr");
		for (var j = 0;j < 9;j++) {
			var td = document.createElement("td");
			td.innerText = keys[counter];
			tr.appendChild(td);
				if (keys[counter] % 2 == 0){
					td.setAttribute("bgcolor", "yellow");
				} else {
					td.setAttribute("bgcolor", "white");
				}
			counter++;
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}
