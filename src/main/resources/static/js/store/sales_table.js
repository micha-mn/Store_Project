 let action = '';
 var config='';

 $(window).on('load', function() {
  $("#buttonContainer").addClass("d-flex");
  $("#windowContainer").removeClass("d-none");
  $("#loginUserName").removeClass("d-none"); 

 });
 $(document).ready(function() {
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
		  $('#clearfilteringbutton').click(function () {
           $("#grid").jqxGrid('clearfilters');
       });

createWindow();
	$("#firstLastName").append(getFirstLastName())

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
 				text: 'notes',
				hidden: config.notes,
 				datafield: 'notes',
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
                 $('#deletedSales').append('Supplier : '+dataRecord.firstName+' '+dataRecord.lastName);
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
	    var json;
        var title = $('#window').jqxWindow('title'); 
		if (title.includes("Save"))
			{
				json = {
				    "I": name==''?null:name,
					 "action" :'save'
				  }
			}
			else 
			{
				json = {
					"id":$("#brandId").val(),
				    "nameEn": name==''?null:name,
					"action" :'update'
				  }
			};
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
		url: '/item/getall',
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
 				type: 'string'
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
 	var dataAdapterBrand = new $.jqx.dataAdapter(sourceItem);
    $("#ItemGrid").jqxGrid({
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
			 			$("#notificationText_I").append("Please select a brand from the grid");
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

  $('#jqxSelectItems').on('click', function() {
	   var selectedrowindex = $('#ItemGrid').jqxGrid('selectedrowindex'); 
	   var data = $('#ItemGrid').jqxGrid('getrowdata', selectedrowindex);
       if (data==null)
			{
				        $("#notificationText_I").empty();
			 			$("#messageNotification_I").jqxNotification({
			 				template: "info"
			 			});
			 			$("#notificationText_I").append("Please select a brand from the grid");
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
	

 });


 function createWindow() {
 	var jqxWidget = $('#jqxWidget');
 	var offset = jqxWidget.offset();

	 	$('#window').jqxWindow({
	 		position: {
	 			x: offset.left + 200,
	 			y: offset.top + 30
	 		},
	 		showCollapseButton: true,
	 		autoOpen: false,
	 		height: 605,
	 		width: 750,
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