 $(window).on('load', function() {
  $("#loginUserName").removeClass("d-none"); 

 });
 $(document).ready(function() {
	  $("#fromDate").jqxDateTimeInput({ width: '100%', height: '38px',theme: 'material-purple', value:null, formatString : 'yyyy-MM-dd hh:mm'  });
	  $("#toDate").jqxDateTimeInput({ width: '100%', height: '38px',theme: 'material-purple', value:null, formatString : 'yyyy-MM-dd hh:mm' });
	  $("#firstLastName").append(getFirstLastName());
	});
	var data=[
	{"id":1,"name":"Sales Statements Date"},
	{"id":2,"name":"Sales Statements Per Client"},
	{"id":3,"name":"Sales Statements Per Supplier"},
	{"id":4,"name":"Payment Reports"}
]
 $("#pdfreport").on('click', function() {
	if($('#reportdropdown').val()==1)
	{
		var fromDate = $("#fromDate").val();
		var toDate = $("#toDate").val();
		window.open("/report/generatereport?reportManagementDTO="+encodeURIComponent(JSON.stringify({"reportCode": "SALESTATEMENT","param1": fromDate,"param2": toDate})));

	}
});

 var source =
	 {
		 datatype: "json",
		 datafields: [
			 { name: 'id' },
			 { name: 'name' }
		 ], localdata: data
	 };
	  var dataAdapterpayment = new $.jqx.dataAdapter(source);
	    $("#reportdropdown").jqxDropDownList({dropDownHeight:180 , selectedIndex: -1,source: dataAdapterpayment,displayMember: "name" , valueMember: "id", theme: 'material-purple', width: '90%',itemHeight: 35, height: '38'});  
	    $('#reportdropdown').on('change', function (event)
	    
		{ var args = event.args;
		  var item = args.item;
		  var value =item.value;
			if (value==1)
			{
				$("#SalesStatementsDate").removeClass("d-none");
				$("#SalesStatementsClient").addClass("d-none");
            }
			else if (value==2)
			{
				$("#SalesStatementsClient").removeClass("d-none");
           $("#SalesStatementsDate").addClass("d-none");
            }
			else if (value==3)
			{alert(3)}
			else if (value==4)
			{alert(4)}
		});
		 function createWindow() {
 	var jqxWidget = $('#jqxWidget');
 	var offset = jqxWidget.offset();

	 		 $('#ClientWindowGrid').jqxWindow({
	 		position: {
	 			x: offset.left + 300,
	 			y: offset.top 
	 		},
	 		showCollapseButton: true,
	 		autoOpen: false,
	 		height: 650,
	 		width: 575,
	 		theme: 'material-purple'
	
	 	});
	 };