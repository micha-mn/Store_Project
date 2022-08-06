 let action = '';
 var config='';

 $(window).on('load', function() {
  $("#buttonContainer").addClass("d-flex");
  $("#windowContainer").removeClass("d-none");
  $("#loginUserName").removeClass("d-none"); 

 });
 $(document).ready(function() {
	
	 var url = "/sales/getpaymentmethods";
	 var source =
	 {
		 datatype: "json",
		 datafields: [
			 { name: 'id' },
			 { name: 'name' }
		 ], url: url,
		 async: true
	 };
 var dataAdapter = new $.jqx.dataAdapter(source);
  $("#dropdownPaymentMethod").jqxDropDownList({ dropDownHeight:220 , selectedIndex: -1,source: dataAdapter,displayMember: "name" , valueMember: "id", theme: 'material-purple', width: '90%',itemHeight: 35, height: '38'});         
  $('#dropdownPaymentMethod').on('change', function (event)
		 {  var args = event.args;
		    if (args) {
		    // index represents the item's index.                      
		    var index = args.index;
		    var item = args.item;
		    // get item's label and value.
		    var label = item.label;
		    var value = item.value;
		if (value==3)
		   $("#downPaymentCardInput").removeClass("d-none");
		else
			$("#downPaymentCardInput").addClass("d-none");
				  
		} 
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
	$("#messageNotification_I").jqxNotification({
 		width: '100%',
 		appendContainer: "#container_I",
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
		  $('#clearfilteringbutton').click(function () {
           $("#grid").jqxGrid('clearfilters');
       });

createWindow();
	$("#firstLastName").append(getFirstLastName());

var source = {
		url: '/sales/getall',
		datatype: "json",
 		datafields: [{
 				name: 'id',
 				type: 'string'
 			},
 			{
 				name: 'itemCode',
 				type: 'string'
 			},
			{
 				name: 'brandName',
 				type: 'string'
 			},
		    {
 				name: 'description',
 				type: 'string'
 			},
		    {
 				name: 'sellingPrice',
 				type: 'string'
 			},
 			{
 				name: 'itemId',
 				type: 'string'
 			},
		    {
 				name: 'clientId',
 				type: 'string'
 			},
 			{
 				name: 'clientName',
 				type: 'string'
 			},
		    {
 				name: 'notes',
 				type: 'string'
 			},
 			 {
 				name: 'paymentMethodId',
 				type: 'string'
 			},
 			{
 				name: 'paymentMethod',
 				type: 'string'
 			},
 			{
 				name: 'downPayment',
 				type: 'float'
 			},
 			{
 				name: 'downPaymentCard',
 				type: 'float'
 			},
 			{
 				name: 'deferredPayment',
 				type: 'float'
 			},
 			{
 				name: 'totalPrice',
 				type: 'float'
 			},
 			{
 				name: 'paymentStatus',
 				type: 'string'
 			},
	   	    {
 				name: 'sellingDate',
 				type: 'date'
 			},
			 {
 				name: 'creationDate',
 				type: 'date'
			 },
			 {
 				name: 'lastModifiedDate',
 				type: 'date'
 			},
		   
 		],
 		updaterow: function(rowid, rowdata, commit) {
 			commit(true);
 		}
 	};
 	var dataAdapter = new $.jqx.dataAdapter(source);
    var settings = {
	  "url": "/config/table/"+"salesView",
	  "method": "GET",
	  "Async": false,
	  "headers": {
	    "Authorization": "Bearer " + getJwt(),
	    "Content-Type": "application/json"
	  },
	};
	$.ajax(settings).done(function (response) {
		config= response;
	
	$("#grid").jqxGrid({
 		width: '100%',
 		source: dataAdapter,
 		pageable: true,
        autoheight: true,
        showfilterrow: true,
        filterable: true,
 		theme: 'material-purple',
 		columns: [{
 				text: '',
 				datafield: 'id',
 				hidden: config.id
 			},
		   {
 				text: '',
 				datafield: 'itemId',
 				hidden:  config.itemId
 			},
		   {
 				text: '',
 				datafield: 'clientId',
 				hidden:  config.clientId
 			},
		   {
 				text: 'brand',
 				datafield: 'brandName',
 				hidden:  config.brandName
 			},
		   {
 				text: 'description',
 				datafield: 'description',
 				hidden:  config.description
 			},
		   {
 				text: 'selling Price',
 				datafield: 'sellingPrice',
 				hidden:  config.sellingPrice
 			},
			{
 				text: 'Item code',
			    hidden: config.itemCode,
 				datafield: 'itemCode',
 				width: '10%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'Client name',
				hidden: config.clientName,
 				datafield: 'clientName',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
		    {
 				text: 'Selling date',
				hidden: config.sellingDate,
 				datafield: 'sellingDate',
				width: '10%',
 				filtertype: 'date', 
				cellsformat: 'dd-MMM-yy HH:mm' 
 			},
			{
 				text: 'Notes',
				hidden: config.notes,
 				datafield: 'notes',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'paymentMethodId',
				hidden: config.paymentMethodId,
 				datafield: 'paymentMethodId'
 			},
 			{
 				text: 'Payment Method',
				hidden: config.paymentMethod,
 				datafield: 'paymentMethod',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'Down Payment',
				hidden: config.downPayment,
 				datafield: 'downPayment',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'Down Payment Card',
				hidden: config.downPaymentCard,
 				datafield: 'downPaymentCard',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 				{
 				text: 'deferred Payment',
				hidden: config.deferredPayment,
 				datafield: 'deferredPayment',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'Total Price',
				hidden: config.totalPrice,
 				datafield: 'totalPrice',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'Payment Status',
				hidden: config.paymentStatus,
 				datafield: 'paymentStatus',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
			 {
 				text: 'Create Date',
				hidden: config.creationDate,
			    datafield: 'creationDate',
				width: '10%',
				filtertype: 'date', 
				cellsformat: 'dd-MMM-yy HH:mm' 
			 },
			 {
 				text: 'Edit Date',
				hidden: config.lastModifiedDate,
				datafield: 'lastModifiedDate',
			    filtertype: 'date', 
				width: '10%',
				cellsformat: 'dd-MMM-yy HH:mm' 
 			},
 			{
 				text: '',
 				datafield: 'Edit',
 				width: '5%',
                columntype: 'button',
                filterable: false,
 				cellsrenderer: function() {
 					return "Edit";
 				},
 				buttonclick: function(row) {
 					// open the popup window when the user clicks a button.
 					editrow = row;
 					var offset = $("#grid").offset();

 					// get the clicked row's data and initialize the input fields.
 					var dataRecord = $("#grid").jqxGrid('getrowdata', editrow);
				
						$("#saleId").val(dataRecord.id);
						$("#SelectedItemId").val(dataRecord.itemId);
						$("#SelectedItemCode").val(dataRecord.itemCode);
						$("#SelectedBrandName").val(dataRecord.brandName);
						$("#SelectedItemDescription").val(dataRecord.description);
						$("#SelectedSellingPrice").val(dataRecord.sellingPrice);
						$("#SelectedClientName").val(dataRecord.clientName);
						$("#SelectedClientNameId").val(dataRecord.clientId);
						$("#notes").val(dataRecord.notes);
 					// show the popup window.
 					 openWindow('Update - sale','update');
 				}
 			},
 			{
 				text: '',
 				datafield: 'Delete',
 				width: '5%',
                columntype: 'button',
                filterable: false,
 				cellsrenderer: function() {
 					return "Delete";
 				},
 				buttonclick: function(row) {
	             deleteRow = row;
                 var dataRecord = $("#grid").jqxGrid('getrowdata', deleteRow);
                 $("#deletedSales").empty();
               //  $('#deletedSales').append('Sales : '+dataRecord.firstName+' '+dataRecord.lastName);
                 $('#ConfirmationModal').modal('show'); 
 				}
 			}
 		]
 	});

   });

 $("#Close").on('click', function() {
         $('#window').jqxWindow('close');
      });

 $("#Save").on('click', function() {
	if ($('#SelectedItemId').val().length === 0 ) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Client is required");
 			$("#messageNotification").jqxNotification("open");
 		}else if ($('#SelectedClientNameId').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Item is required");
 			$("#messageNotification").jqxNotification("open");
 		} else {
	    var json;
        var title = $('#window').jqxWindow('title'); 
		if (title.includes("Save"))
			{
				json = {
				     "itemId": $("#SelectedItemId").val(),
 					 "clientId": $("#SelectedClientNameId").val(),
			         "notes": $("#notes").val(),
			 		 "action" :'save'
				  }
			}
			else 
			{
				json = {
					"id":$("#brandId").val(),
					"action" :'update',
				    "itemId": $("#SelectedItemId").val(),
 				     "clientId": $("#SelectedClientNameId").val(),
			         "notes": $("#notes").val(),
				  }
			};
			
			var settings = {
 				"url": "/sales/save",
 				"method": "POST",
 				"timeout": 0,
 				"headers": {
 					"Authorization": "Bearer " + getJwt(),
 					"Content-Type": "application/json"
 				},
 				"data": JSON.stringify(json),
 			};
			$.ajax(settings).done(function(response) {
 				$("#notificationText").empty();
 				$("#messageNotification").jqxNotification({
 					template: "info"
 				});
 				$("#notificationText").append(response.message);
 				$("#messageNotification").jqxNotification("open");
 				var dataAdapter = new $.jqx.dataAdapter(source);
 				var dataAdapterItemGrid = new $.jqx.dataAdapter(sourceItem);
 				$('#grid').jqxGrid({
 					source: dataAdapter
                 });
                $('#ItemGrid').jqxGrid({
 					source: dataAdapterItemGrid
                 });
                resetFields();
 			}).fail(function(response) {
	         	$("#notificationText").empty();
 				$("#messageNotification").jqxNotification({
 					template: "info"
 				});
 				$("#notificationText").append(response.responseText);
 				$("#messageNotification").jqxNotification("open");
			});
            }
      });
		

    $("#deleteSales").on('click', function() {
        var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
        var rowscount = $("#grid").jqxGrid('getdatainformation').rowscount;
        var ItemId = $('#grid').jqxGrid('getrowdata', selectedrowindex).id
        $.ajax({
            type: "DELETE",
            url: "/sales/delete/" + ItemId,
            success: function(result)  {
	          if (result == "success")
                { $('#ConfirmationModal').modal('hide');
	                if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
	                    var id = $("#grid").jqxGrid('getrowid', selectedrowindex);
	                    var commit = $("#grid").jqxGrid('deleterow', id);
	                }
				}
            },
            error: function(e) {
                console.log(e);
            }
        });
    });



  	var sourceItem = {
		url: '/item/getunsold',
		datatype: "json",
 		datafields: [{
 				name: 'id',
 				type: 'string'
 			},
 			{
 				name: 'brandName',
 				type: 'string'
 			},
		    {
 				name: 'description',
 				type: 'string'
 			},
		    {
 				name: 'sellingPrice',
 				type: 'float'
 			},
		    {
 				name: 'itemCode',
 				type: 'string'
 			}
 		],
 		updaterow: function(rowid, rowdata, commit) {
 			commit(true);
 		}
 	};
 	var dataAdapterItem = new $.jqx.dataAdapter(sourceItem);
    $("#ItemGrid").jqxGrid({
 		width: '100%',
 		source: dataAdapterItem,
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
 				text: 'Item Code',
 				datafield: 'itemCode',
				width: '25%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter code" });
			}},
			  {
 				text: 'brand name',
 				datafield: 'brandName',
				width: '25%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter brand" });
			}},
			 {
 				text: 'Description',
 				datafield: 'description',
				width: '25%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter description" });
			}},
			 {
 				text: 'Selling price',
 				datafield: 'sellingPrice',
				width: '25%',
				 cellsformat: 'D2',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter brand" });
			}},
			]
		});

  $('#jqxSelectItem').on('click', function() {
	debugger
	   var selectedrowindex = $('#ItemGrid').jqxGrid('selectedrowindex'); 
	   var data = $('#ItemGrid').jqxGrid('getrowdata', selectedrowindex);
       if (data==null)
			{
				        $("#notificationText_I").empty();
			 			$("#messageNotification_I").jqxNotification({
			 				template: "info"
			 			});
			 			$("#notificationText_I").append("Please select a Item from the grid");
			 			$("#messageNotification_I").jqxNotification("open");
			}
			else 
			{
				
				 $("#SelectedItemId").val(data.id);
				 $("#SelectedItemCode").val(data.itemCode);
			     $("#SelectedBrandName").val(data.brandName);
				 $("#SelectedItemDescription").val(data.description);
				 $("#SelectedSellingPrice").val(data.sellingPrice);
			     $('#ItemWindowGrid').jqxWindow('close');
			     } 
				
		   
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
 	var dataAdapterBrand = new $.jqx.dataAdapter(sourceClient);
    $("#ClientGrid").jqxGrid({
 		width: '100%',
 		source: dataAdapterBrand,
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

  $('#jqxSelectClient').on('click', function() {
	   var selectedrowindex = $('#ClientGrid').jqxGrid('selectedrowindex'); 
	   var data = $('#ClientGrid').jqxGrid('getrowdata', selectedrowindex);
       if (data==null)
			{
				        $("#notificationText_C").empty();
			 			$("#messageNotification_I").jqxNotification({
			 				template: "info"
			 			});
			 			$("#notificationText_C").append("Please select a Client from the grid");
			 			$("#messageNotification_C").jqxNotification("open");
			}
			else 
			{
				
				 $("#SelectedClientNameId").val(data.id);
				 $("#SelectedClientName").val(data.name);
			     $('#ClientWindowGrid').jqxWindow('close');
              } 
				
		    
	});
	

 });


 function createWindow() {
 	var jqxWidget = $('#jqxWidget');
 	var offset = jqxWidget.offset();

	 	$('#window').jqxWindow({
	 		position: {
	 			x: offset.left + 50,
	 			y: offset.top - 10
	 		},
	 		showCollapseButton: true,
	 		autoOpen: false,
	 		height: 700,
	 		width: 950,
	 		theme: 'material-purple'
	
	 	});
		 $('#ItemWindowGrid').jqxWindow({
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

 function openWindow(title,action) {
	if(action=="save")
	{
	resetFields()
    // reset all input values
	}
    $('#window').jqxWindow({ title: title }); 
	$('#window').jqxWindow('open');
	 };

 function openGridWindow(windowGridId, title)
	 {
   $(windowGridId).jqxWindow({ title: title }); 
   $(windowGridId).jqxWindow('open');
   $(windowGridId).jqxWindow('bringToFront')
		
	}
	
	function resetFields(){
		$("#saleId").val(null);
		$("#SelectedItemId").val(null);
		$("#SelectedItemCode").val(null);
		$("#SelectedBrandName").val(null);
		$("#SelectedItemDescription").val(null);
		$("#SelectedSellingPrice").val(null);
		$("#SelectedClientName").val(null);
		$("#SelectedClientNameId").val(null);
		$("#notes").val(null);
	}