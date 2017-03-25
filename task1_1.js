function getFibonacciSequence(n) {
		main_t.innerText = "";
		var fibonacci = [0, 1]; 
		for (var i = 2; i < n; i ++) {
  		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
		}
		var fiboSequence = fibonacci.slice(0,n);

	function printFiboSequence(parent) {
	var keys = fiboSequence;
	var arr = [];
		for (var i = 0; i < keys.length; i++) {
			arr[i] = i;
		}
	var counter5 = 0; counter4 = 0, counter3 = 0, counter2 = 0, counter1 = 0, counter = 0;
	var table = document.createElement("table");
	table.setAttribute("cellpadding", 10);
		for (var i = 0; i < 6;i++) {
			var tr = document.createElement("tr");
			if (i == 0) {
				for (var j = 0; j < keys.length; j++) {
					var td = document.createElement("td")
					td.innerText = "F" + arr[counter];
					tr.appendChild(td);
					counter++;
				}
				counter = 0;
			} 
			if (i == 1) {
				for (var j = 0;j < keys.length;j++) {

					var td = document.createElement("td");

					td.innerText = keys[counter];
					tr.appendChild(td);
					counter++;
				}
				counter = 0;
			}
			if (i == 2) {
				for (var j = 0;j < keys.length;j++) {

					var td = document.createElement("td");
					var k = keys[counter].toString();
					if (k[0]%2 == 0) {
					td.innerText = keys[counter];
					} else { td.innerText = ""; }
					tr.appendChild(td);
					counter++;
				}
				counter = 0;
			}
			if (i == 3) {
				for (var j = 0;j < keys.length;j++) {

					var td = document.createElement("td");
					var k = keys[counter].toString();
					if (k[(k.length-1)]%2 == 0) {
					td.innerText = keys[counter];
					} else { td.innerText = ""; }
					tr.appendChild(td);
					counter++;
				}
				counter = 0;
			}
			if (i == 4) {
				for (var j = 0;j < keys.length;j++) {

					var td = document.createElement("td");
					var k = keys[counter].toString();
					if (k[0]%2 == 1) {
					td.innerText = keys[counter];
					} else { td.innerText = ""; }
					tr.appendChild(td);
					counter++;
				}
				counter = 0;
			}
			if (i == 5) {
				for (var j = 0;j < keys.length;j++) {

					var td = document.createElement("td");
					var k = keys[counter].toString();
					if (k[(k.length-1)]%2 == 1) {
					td.innerText = keys[counter];
					} else { td.innerText = ""; }
					tr.appendChild(td);
					counter++;
				}
				counter = 0;
			}
			table.appendChild(tr);
		}
	parent.appendChild(table);
	table.style.fontFamily = "Courier";
	}
printFiboSequence(document.getElementById("main_t"));
}