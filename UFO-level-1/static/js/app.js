// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(ufoReport => {
	var row = tbody.append("tr");
	row.append("td").text(ufoReport.datetime);
	row.append("td").text(ufoReport.city);
	row.append("td").text(ufoReport.state);
	row.append("td").text(ufoReport.country);
	row.append("td").text(ufoReport.shape);
	row.append("td").text(ufoReport.durationMinutes);
	row.append("td").text(ufoReport.comments);
});

var button = d3.select("#filter-btn");





button.on("click", runEnter);


function runEnter() {
	
	
	d3.event.preventDefault();
	tbody.html("");
	var inputElement = d3.select("#datetime");
	
	var inputValue = inputElement.property("value");
	
	console.log(inputValue);
	console.log(tableData);
	var filteredData = tableData.filter( ufo => ufo.datetime === inputValue);
	
	console.log(filteredData);
	
	filteredData.forEach(ufoReport => {
		var filteredRow = tbody.append("tr");
		filteredRow.append("td").text(ufoReport.datetime);
		filteredRow.append("td").text(ufoReport.city);
		filteredRow.append("td").text(ufoReport.state);
		filteredRow.append("td").text(ufoReport.country);
		filteredRow.append("td").text(ufoReport.shape);
		filteredRow.append("td").text(ufoReport.durationMinutes);
		filteredRow.append("td").text(ufoReport.comments);
	});
	
	
};



