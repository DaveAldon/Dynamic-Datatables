# Dynamic-Datatables
Javascript datatables with a bit more dynamism for easy changes and re-usability.

A problem with datatables in many cases is that you have to define your columns and data in more than one location. 
Usually it's in the html structure and the ajax call. My goal has always been to subdue the logic and make data
defined in only one location, but still allow flexibility for overriding default content, adding call backs,
and basically whatever you're used to doing when manipulating datatable output.

But we also don't want to care about changing anything on the source end, because not everyone can dictate in what
format they'll receive their data.

Currently our only data definition is a javascript dictionary, which can contain any amount of information on specific
columns if we so choose. In this example, our value of the dictionary is the display value for our column.

var dynamicColumns = {
	"id":[],
	"name":["Patient Name"],
}

If it's blank, it defaults to the column's actual name. In the future, I'll be adding more complexity to this method
and make it better and easier to throw in a datatable and change its columns on the fly, by simply plopping in
the tag we know and love, without anything inside of it:

<table id="dataTable" class="display compact wrap" cellspacing="0" width="100%"></table>
