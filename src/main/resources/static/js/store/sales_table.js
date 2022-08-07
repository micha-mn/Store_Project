 let action = '';
 var config='';
var dataAdapter ;
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
 var dataAdapterpayment = new $.jqx.dataAdapter(source);

   $("#dropdownPaymentMethod").jqxDropDownList({disabled: true, dropDownHeight:220 , selectedIndex: -1,source: dataAdapterpayment,displayMember: "name" , valueMember: "id", theme: 'material-purple', width: '90%',itemHeight: 35, height: '38'});          $('#dropdownPaymentMethod').click(function () {
    if ($('#SelectedItemId').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Item is required");
 			$("#messageNotification").jqxNotification("open");
 		}else {
	 $("#dropdownPaymentMethod").jqxDropDownList({disabled: false});
	 $("#dropdownPaymentMethod").jqxDropDownList('open' ); 
     $("#downPayment").prop( "disabled", false );

	   }
     });
  $('#dropdownPaymentMethod').on('change', function (event)
		 {  var args = event.args;
		    if (args) {              
		    var item = args.item;
			var title = $('#window').jqxWindow('title');
						var price; 
							if (title.includes("Save"))
								{
							     price=$("#SelectedSellingPrice").val(); 
							}else 
						     {      selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
								    rowid = $('#grid').jqxGrid('getrowid', selectedrowindex);
								    rowdata=$('#grid').jqxGrid('getrowdata', selectedrowindex);
									price=rowdata.deferredPayment;
					           } 
		
		    var value = (item!=null)?item.value:null;
		    if(value!=null)
				if (value==3)
				   {
					$("#paymentMethodForm").removeClass("col-md-4").addClass("col-md-3");
					$("#downPaymentForm").removeClass("col-md-4").addClass("col-md-3");
					$("#deferredPaymentForm").removeClass("col-md-4").addClass("col-md-3");
					$("#downPaymentCardInput").removeClass("d-none");
		            $("#downPaymentCard").val(null);
						if($("#downPayment").val().length!=0)
			            {	
							$("#deferredPayment").val(price-($("#downPayment").val()+$("#downPaymentCard").val()));
						    $("#deferredPayment").trigger("change");
						}     
					}
				else
					{
					$("#paymentMethodForm").removeClass("col-md-3").addClass("col-md-4");
					$("#downPaymentForm").removeClass("col-md-3").addClass("col-md-4");
					$("#deferredPaymentForm").removeClass("col-md-3").addClass("col-md-4");
					$("#downPaymentCardInput").addClass("d-none");
					if($("#downPayment").val().length!=0)
			            {
				        $("#deferredPayment").trigger("change");
						$("#deferredPayment").val(price-$("#downPayment").val());
						}  
					}
			
				  
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
 				name: 'paymentStatusDesc',
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
 			}
 		],
 		updaterow: function(rowid, rowdata, commit) {
 			commit(true);
 		}
 	};
    dataAdapter = new $.jqx.dataAdapter(source);
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
		
	var cellclass = function (row, columnfield, value) {
		          if (value.includes("partial")){
                    return 'red';
                }
                else return 'green';
            }

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
 				width: '13%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Client name" });
				  }
 			},
			{
 				text: 'Notes',
				hidden: config.notes,
 				datafield: 'notes',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Notes" });
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
 				width: '10%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Payment Method" });
				  }
 			},
 			{
 				text: 'Down Payment',
				hidden: config.downPayment,
 				datafield: 'downPayment',
 				width: '8%',
			  cellsformat: 'D2',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Down Payment" });
				  }
 			},
 			{
 				text: 'Down Payment Card',
				hidden: config.downPaymentCard,
 				datafield: 'downPaymentCard',
 				width: '8%',
			  cellsformat: 'D2',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Down Payment Card" });
				  }
 			},
 				{
 				text: 'Deferred Payment',
				hidden: config.deferredPayment,
 				datafield: 'deferredPayment',
 				width: '8%',
			  cellsformat: 'D2',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Deferred Payment" });
				  }
 			},
 			{
 				text: 'Total Price',
				hidden: config.totalPrice,
 				datafield: 'totalPrice',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Total Price" });
				  }
 			},
 			{
 				text: '',
				hidden: config.paymentStatus,
 				datafield: 'paymentStatus'
 			},
		   {
 				text: 'Payment Status',
				hidden: config.paymentStatusDesc,
 				datafield: 'paymentStatusDesc',
			   cellclassname: cellclass,
 				width: '18%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Payment Status" });
				  }
 			},
			 {
 				text: 'Create Date',
				hidden: config.createdDate,
			    datafield: 'createdDate',
				width: '10%',
				filtertype: 'date', 
				cellsformat: 'dd-MMM-yy HH:mm' 
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
                filterable: false,
 				cellsrenderer: function(row) {
		          editrow = row;
 				var dataRecord = $("#grid").jqxGrid('getrowdata', editrow);
	                debugger;
					if(dataRecord.paymentStatus=='1')
 					return '<input type="button" value="Edit" id="jqxButton" onclick="editRow('+row+')" style="height: 100%; width: 100%;" class="jqx-rc-all jqx-rc-all-material-purple jqx-button jqx-button-material-purple jqx-widget jqx-widget-material-purple buttonRipple jqx-fill-state-normal jqx-fill-state-normal-material-purple" />';
 				}
 			},
 			/*{
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
 			}*/
 		]
 	});

   });

 $("#Close").on('click', function() {
         $('#window').jqxWindow('close');
      });

 $("#Save").on('click', function() {
	debugger;
	 var selectedrowindex;
     var rowid;
     var rowdata;

	if ($('#SelectedClientNameId').val().length === 0 ) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Client is required");
 			$("#messageNotification").jqxNotification("open");
 		}else if ($('#SelectedItemId').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Item is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($("#dropdownPaymentMethod").val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Payment method is required");
 			$("#messageNotification").jqxNotification("open");
 		}
	    if ($("#downPayment").val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Down payment is required");
 			$("#messageNotification").jqxNotification("open");
 		}
	   else if ($("#dropdownPaymentMethod").val() == 3 && $("#downPaymentCard").val().length === 0) {

 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("All Down Payment are required");
 			$("#messageNotification").jqxNotification("open");
		
 		}else {
	    var json;
        var title = $('#window').jqxWindow('title'); 
		if (title.includes("Save"))
			{
				json = {
				     "itemId": $("#SelectedItemId").val(),
 					 "clientId": $("#SelectedClientNameId").val(),
			         "notes": $("#notes").val(),
					 "paymentMethodId":$("#dropdownPaymentMethod").val(),
				     "downPayment":$("#downPayment").val(),
					 "downPaymentCard":$("#downPaymentCard").val()==''?null:$("#downPaymentCard").val(),
				     "totalPrice":$("#SelectedSellingPrice").val(),
 					 "deferredPayment":$("#deferredPayment").val(),
			         "paymentStatus":$("#deferredPayment").val()>0?'1':'2',
			 		 "action" :'save'
				  }
			}
			else 
			{
				    selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
				    rowid = $('#grid').jqxGrid('getrowid', selectedrowindex);
  				    rowdata=$('#grid').jqxGrid('getrowdata', selectedrowindex);
                    downPaymentCard=eval(isNaN(rowdata.downPaymentCard)?rowdata.downPaymentCard.replaceAll(",",""):rowdata.downPaymentCard)
				json = {
					"id":$("#saleId").val(),
					"action" :'update',
				    "itemId": $("#SelectedItemId").val(),
 				     "clientId": $("#SelectedClientNameId").val(),
			         "notes": $("#notes").val(),
	                 "paymentMethodId":$("#dropdownPaymentMethod").val(),
				     "downPayment":eval(isNaN(rowdata.downPayment)?rowdata.downPayment.replaceAll(",",""):rowdata.downPayment)+eval($("#downPayment").val()),
					 "downPaymentCard":$("#downPaymentCard").val()==''?downPaymentCard:(downPaymentCard!=null?downPaymentCard+eval($("#downPaymentCard").val()):$("#downPaymentCard").val()),
				     "totalPrice":$("#totalPrice").val(),
 					 "deferredPayment":$("#deferredPayment").val(),
			         "paymentStatus":$("#deferredPayment").val()>0?'1':'2',
					 "sellingDate":new Date(rowdata.sellingDate)
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
				if (title.includes("Save"))
 				{$("#notificationText").empty();
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
               }else{
					    var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
				        var rowid = $('#grid').jqxGrid('getrowid', selectedrowindex);
                        var data=response.salesView;
						var dataAdapter = new $.jqx.dataAdapter(source);
					           data.sellingDate =  dataAdapter.formatDate(new Date(data.sellingDate), 'dd-MMM-yy HH:mm' );
							   data.lastModifiedDate =  dataAdapter.formatDate(new Date(data.lastModifiedDate),'dd-MMM-yy HH:mm' );
					           data.downPayment = dataAdapter.formatNumber( data.downPayment,'D2');
							   data.downPaymentCard = dataAdapter.formatNumber(data.downPaymentCard,'D2');
				               data.deferredPayment = dataAdapter.formatNumber(data.deferredPayment,'D2');
					         $('#grid').jqxGrid('updaterow', rowid, data );

				}
                $('#window').jqxWindow('close');
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
					if(data.id != $("#SelectedItemId").val())
					{
					 $("#SelectedItemId").val(data.id);
					 $("#SelectedItemCode").val(data.itemCode);
				     $("#SelectedBrandName").val(data.brandName);
					 $("#SelectedItemDescription").val(data.description);
					 $("#SelectedSellingPrice").val(data.sellingPrice);
				     $('#ItemWindowGrid').jqxWindow('close');
                     if($("#downPayment").val().length != 0)
                        $("#deferredPayment").val($("#SelectedSellingPrice").val()-$("#downPayment").val());
	                }
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
	 			y: offset.top 
	 		},
	 		showCollapseButton: true,
	 		autoOpen: false,
	 		height: 650,
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
	    $("#downPayment").prop( "disabled", true );
		$("#dropdownPaymentMethod").jqxDropDownList({disabled: true ,selectedIndex: -1});
		$("#paymentMethodForm").removeClass("col-md-3").addClass("col-md-4");
		$("#downPaymentForm").removeClass("col-md-3").addClass("col-md-4");
		$("#deferredPaymentForm").removeClass("col-md-3").addClass("col-md-4");
	    $("#downPayment").val(null);
        $("#downPaymentCard").val(null);
        $("#downPaymentCardInput").addClass("d-none");
        $("#TotalPaymentForm").addClass("d-none");
        $("#deferredPayment").val(null);
        $("#isDefered").empty();
     }
	$("#downPayment")[0].addEventListener('input', updateValue);
    $("#downPaymentCard")[0].addEventListener('input', updateValue);
   function updateValue(e) {
	var title = $('#window').jqxWindow('title');
	var price; 
		if (title.includes("Save"))
			{
		     price=$("#SelectedSellingPrice").val(); 
		}else 
	     {      selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
			    rowid = $('#grid').jqxGrid('getrowid', selectedrowindex);
			    rowdata=$('#grid').jqxGrid('getrowdata', selectedrowindex);
				price=rowdata.deferredPayment;
           }      

		if ($("#dropdownPaymentMethod").val()==3)
		{  if(e.currentTarget.id == "downPaymentCard")
		    $("#deferredPayment").val(price-$("#downPayment").val()-e.target.value);
          else if(e.currentTarget.id == "downPayment")
		    $("#deferredPayment").val(price-$("#downPaymentCard").val()-e.target.value);
		}else
	   $("#deferredPayment").val(price-e.target.value);
       $("#deferredPayment").trigger("change");
	}
   
$("#deferredPayment").change(function(){
 if($("#deferredPayment").val()!=0)
			{
				$("#isDefered").empty();
				$("#isDefered").append('<div class="notifyDefered"><i class="fa-solid fa-circle-exclamation"></i>&nbsp;YES</div>');
			}
			else {
				$("#isDefered").empty();
				$("#isDefered").append('<div class="noDefered"><i class="fa-solid fa-circle-check"></i>&nbsp;NO</div>');
			}
});

function editRow(row)
{
		editrow = row;
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
						// $("#dropdownPaymentMethod").jqxDropDownList('selectItem', dataRecord.paymentMethodId ); 
 					    // $("#downPayment").val(dataRecord.downPayment);
						// $("#downPaymentCard").val(dataRecord.downPaymentCard);
						 $("#deferredPayment").val(dataRecord.deferredPayment);
					     $("#totalPrice").val(dataRecord.totalPrice);
					     $("#TotalPayment").val(eval((isNaN(dataRecord.downPayment)?dataRecord.downPayment.replaceAll(",",""):dataRecord.downPayment))+eval(dataRecord.downPaymentCard));
					     $("#TotalPaymentForm").removeClass("d-none");
				     // show the popup window.
 					 openWindow('Update - sale','update');
}