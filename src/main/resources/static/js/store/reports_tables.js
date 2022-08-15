 $(window).on('load', function() {
  $("#loginUserName").removeClass("d-none"); 

 });
 $(document).ready(function() {
	  $("#fromDate").jqxDateTimeInput({ width: '100%', height: '38px',theme: 'material-purple', value:null, formatString : 'yyyy-MM-dd'  });
	  $("#toDate").jqxDateTimeInput({ width: '100%', height: '38px',theme: 'material-purple', value:null, formatString : 'yyyy-MM-dd' });
	  $("#firstLastName").append(getFirstLastName());
	});
	$("#messageNotification").jqxNotification({
 		width: '100%',
 		appendContainer: "#container",
 		opacity: 0.9,
 		autoOpen: false,
 		animationOpenDelay: 800,
 		autoClose: true,
 		autoCloseDelay: 2000,
 		template: "info"
 	});
		$("#messageNotification_C").jqxNotification({
 		width: '100%',
 		appendContainer: "#container_C",
 		opacity: 0.9,
 		autoOpen: false,
 		animationOpenDelay: 800,
 		autoClose: true,
 		autoCloseDelay: 2000,
 		template: "info"
 	});
		var sourceClient = {
		url: '/client/getallsorted',
		datatype: "json",
 		datafields: [{
 				name: 'id',
 				type: 'string'
 			},
 			{
 				name: 'name',
 				type: 'string'
 			},
		   
 		],
 		updaterow: function(rowid, rowdata, commit) {
 			commit(true);
 		}
 	};

 	var dataAdapterClient = new $.jqx.dataAdapter(sourceClient);
    $("#ClientGrid").jqxGrid({
 		width: '100%',
 		source: dataAdapterClient,
 		pageable: true,
        autoheight: true,
        showfilterrow: true,
        pagesize: 5,
        filterable: true,
 		theme: 'material-purple',
 		columns: [{
 				text: '',
 				datafield: 'id',
 				hidden: true
 			},
		   {
 				text: 'Client Name',
 				datafield: 'name',
				width: '100%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter name" });
			}}
		
			]
		});
	$("#messageNotification_s").jqxNotification({
 		width: '100%',
 		appendContainer: "#container_s",
 		opacity: 0.9,
 		autoOpen: false,
 		animationOpenDelay: 800,
 		autoClose: true,
 		autoCloseDelay: 2000,
 		template: "info"
 	});
		var sourceSupp = {
		url: '/supplier/getallsorted',
		datatype: "json",
 		datafields: [
 			{
 				name: 'suppCode',
 				type: 'string'
 			},
			{
 				name: 'firstName',
 				type: 'string'
 			},
			{
 				name: 'lastName',
 				type: 'string'
 			},
		   
 		],
 		updaterow: function(rowid, rowdata, commit) {
 			commit(true);
 		}
 	};

 	var dataAdapterSupp = new $.jqx.dataAdapter(sourceSupp);
    $("#SupplierGrid").jqxGrid({
 		width: '100%',
 		source: dataAdapterSupp,
 		pageable: true,
        autoheight: true,
        showfilterrow: true,
        pagesize: 5,
        filterable: true,
 		theme: 'material-purple',
 		columns: [
			{
 				text: 'Supplier code',
 				datafield: 'suppCode',
 				width: '33.3%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'Name 1',
 				datafield: 'firstName',
 				width: '33.3%',
 				  createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Name 1" });
				  }
 			},
 			{
 				text: 'Name 2',
 				datafield: 'lastName',
 				width: '33.3%',
 				 createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Name 2" });
				  }
 			},
			]
		});
createWindow();
  $('#jqxSelectClient').on('click', function() {
	   var selectedrowindex = $('#ClientGrid').jqxGrid('selectedrowindex'); 
	   var data = $('#ClientGrid').jqxGrid('getrowdata', selectedrowindex);
       if (data==null)
			{
				        $("#notificationText_C").empty();
			 			$("#messageNotification_C").jqxNotification({
			 				template: "info"
			 			});
			 			$("#notificationText_C").append("Please select a Client from the grid");
			 			$("#messageNotification_C").jqxNotification("open");
			}
			else 
			{
				
				 $("#SelectedClientNameId").val(data.id);
				 $("#SelectedClientName").val(data.name);
			     $('#ClientWindow').jqxWindow('close');
              } 
				
		    
	});
	
$('#jqxSelectSupplier').on('click', function() {
	   var selectedrowindex = $('#SupplierGrid').jqxGrid('selectedrowindex'); 
	   var data = $('#SupplierGrid').jqxGrid('getrowdata', selectedrowindex);
       if (data==null)
			{
				        $("#notificationText_s").empty();
			 			$("#messageNotification_s").jqxNotification({
			 				template: "info"
			 			});
			 			$("#notificationText_s").append("Please select a Client from the grid");
			 			$("#messageNotification_s").jqxNotification("open");
			}
			else 
			{
				
				 $("#SelectedSuppCode").val(data.suppCode);
			     $('#SuppliertWindow').jqxWindow('close');
              } 
				
		    
	});
	
	 var url = "/sales/getpaymentmethods";
	 var sourcep =
	 {
		 datatype: "json",
		 datafields: [
			 { name: 'id' },
			 { name: 'name' }
		 ], url: url,
		 async: true
	 };
 var dataAdapterpayment = new $.jqx.dataAdapter(sourcep);

   $("#dropdownPaymentMethod").jqxDropDownList({dropDownHeight:220 , selectedIndex: -1,source: dataAdapterpayment,displayMember: "name" , valueMember: "name", theme: 'material-purple', width: '90%',itemHeight: 35, height: '38'});  
   

	var data=[
	{"id":1,"name":"Sales Statements Date"},
	{"id":2,"name":"Sales Statements Per Client"},
	{"id":3,"name":"Sales Statements Per Supplier"},
	{"id":4,"name":"Payment Reports"}
];
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
				$("#PaymentMethod").addClass("d-none");
				$("#SalesStatementsSupplier").addClass("d-none");
            }
			else if (value==2)
			{
				$("#SalesStatementsClient").removeClass("d-none");
                $("#SalesStatementsDate").addClass("d-none");
				$("#PaymentMethod").addClass("d-none");
				$("#SalesStatementsSupplier").addClass("d-none");

            }
			else if (value==3)
			{
				$("#SalesStatementsClient").addClass("d-none");
                $("#SalesStatementsDate").addClass("d-none");
				$("#PaymentMethod").addClass("d-none");
				$("#SalesStatementsSupplier").removeClass("d-none");
            }
			else if (value==4)
			{
				$("#SalesStatementsClient").addClass("d-none");
                $("#SalesStatementsDate").addClass("d-none");
				$("#SalesStatementsSupplier").addClass("d-none");
				$("#PaymentMethod").removeClass("d-none");
            }
		});
function createWindow() {
 	var jqxWidget = $('#jqxWidget');
 	var offset = jqxWidget.offset();

	 	$('#ClientWindow').jqxWindow({
	 		position: {
	 			x: offset.left + 250,
	 			y: offset.top 
	 		},
	 		showCollapseButton: true,
	 		autoOpen: false,
	 		height: 650,
	 		width: 600,
			minWidth: 400,
			theme: 'material-purple'
	
	 	});
	$('#SuppliertWindow').jqxWindow({
	 		position: {
	 			x: offset.left + 250,
	 			y: offset.top 
	 		},
	 		showCollapseButton: true,
	 		autoOpen: false,
	 		height: 650,
	 		width: 600,
			minWidth: 400,
			theme: 'material-purple'
	
	 	});
	 };

 function openGridWindow(windowGridId, title)
	 {
   $(windowGridId).jqxWindow({ title: title }); 
   $(windowGridId).jqxWindow('open');
   $(windowGridId).jqxWindow('bringToFront')
	}
	
function generateReport(isExcel){
	if($('#reportdropdown').val()==1)
	{
		if ($("#fromDate").val()=='' || $("#toDate").val()=='')
		{
				sendNotification("#notificationText","#messageNotification","please fill from and to date")       
		}else{
		var fromDate = $("#fromDate").val()+' 00:00';
		var toDate = $("#toDate").val()+' 23:59';
		var reportFileName="Sales_Statements_Date";
		window.open("/report/generatereport?reportManagementDTO="+encodeURIComponent(JSON.stringify({"reportCode": "SALESTATEMENT","param1": fromDate,"param2": toDate,"reportFileName":reportFileName,"isExcel":isExcel})));
        }     
     }else if($('#reportdropdown').val()==2)
	{
	if ($("#SelectedClientName").val()=='')
		{
				sendNotification("#notificationText","#messageNotification","please select a client")       
		}else{
		var clientName = $("#SelectedClientName").val();
		var reportFileName="Sales_Statements_Client";
		window.open("/report/generatereport?reportManagementDTO="+encodeURIComponent(JSON.stringify({"reportCode": "SSCLIENT","param1": clientName,"reportFileName":reportFileName,"isExcel":isExcel})));
     }
     }else if($('#reportdropdown').val()==3)
	{
		if ($("#SelectedSuppCode").val()=='')
		{
				sendNotification("#notificationText","#messageNotification","please select a supplier")       
		}else{
		var suppCode =  $("#SelectedSuppCode").val();
		var reportFileName="Sales_Statements_Supplier";
		window.open("/report/generatereport?reportManagementDTO="+encodeURIComponent(JSON.stringify({"reportCode": "SSSUPPLIER","param1": suppCode,"reportFileName":reportFileName,"isExcel":isExcel})));
     }
    }
	else if($('#reportdropdown').val()==4)
	{
		if ($("#dropdownPaymentMethod").val()=='')
		{
				sendNotification("#notificationText","#messageNotification","please select a payment method")       
		}else{
		var payment_method =  $("#dropdownPaymentMethod").val();
		var reportFileName="Payment_Method";
		window.open("/report/generatereport?reportManagementDTO="+encodeURIComponent(JSON.stringify({"reportCode": "PAYMENTREPORT","param1": payment_method,"reportFileName":reportFileName,"isExcel":isExcel})));
     }
}	
}

function sendNotification(text,notification,message)
{
	 $(text).empty();
	$(notification).jqxNotification({
			 				template: "info"
			 			});
	$(text).append(message);
	$(notification).jqxNotification("open");
}