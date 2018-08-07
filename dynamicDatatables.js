var dynamicColumns = {
	// Column definitions use this pattern: "Name of Column from Ajax":[0 if visible/1 for invisible, "Displayed Column Name"]
	"id":[],
	"name":["Patient Name"],
}

function initDataTable() {
	table = $('#dataTable').DataTable( {
		paging: true,
		orderCellsTop: true,
		"oLanguage": {
			"sSearch": "",
			"sEmptyTable": "No Data found based on parameters"
		},
		"sDom": '<"top"lpif>t<"bottom"><"clear">',
		"ajax": "objects.txt",
		"columns": buildDynamicDataTable($('#dataTable'), dynamicColumns),
		// Conditional formatting for undelivered messages to look grayed out
		rowCallback: function(row, data, index) {
			
		}
	});
}

function buildDynamicDataTable(table, list) {
	var dict = list
	var ths;
	// Build headers
	for (var key in dict){

		if (typeof list[key][0] == 'undefined') {
			ths += "<th>"+key+"</th>"
		}
		else ths += "<th>"+list[key]+"</th>"
	}
	// Build footers
	var foot = "<tfoot><tr>"
	for (var key in dict){
		if (typeof list[key][0] == 'undefined') {
			foot += "<th>"+key+"</th>"
		}
		else foot += "<th>"+list[key]+"</th>"
	}
	foot += "</tr></tfoot>"
		
	table.append("<thead></thead>").append("<tr></tr>").append(ths)
	table.append(foot)
	
	// Programatic generation of datatable columns
	var columns = '[{"column":['
	for(var key in list) {
	    columns += '{data:"'+key+'"},'
	}
	columns = columns.slice(0, -1)
	columns += ']}]'
	columns = eval(columns)

	var dynamicColumns = []

	columns[0].column.forEach(function(i) {
		dynamicColumns.push(i)
	})
	return dynamicColumns
}