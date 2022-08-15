 let action = '';
 var config='';

 $(window).on('load', function() {
  $("#buttonContainer").addClass("d-flex");
  $("#windowContainer").removeClass("d-none");
  $("#loginUserName").removeClass("d-none"); 
 });
 $(document).ready(function() {
                var source = [
                    "New",
                    "Very Good",
                    "Fair",
                    "Like New",
                    "Excellent"
		        ];

                // Create a jqxDropDownList
    $("#conditionDropDown").jqxDropDownList({ dropDownHeight:200 , selectedIndex: -1,source: source,theme: 'material-purple', width: '100%',itemHeight: 35, height: '38'});
    $("#conditionDropDown_u").jqxDropDownList({ dropDownHeight:200, selectedIndex: -1,source: source,theme: 'material-purple', width: '100%',itemHeight: 35, height: '38'});
	 var url = "/supplier/getallsorted";
	 var sourceSupp =
	 {
		 datatype: "json",
		 datafields: [
			 { name: 'suppCode' },
			 { name: 'firstName' },
			 { name: 'lastName' }
		 ], url: url,
		 async: true
	 };
 var dataAdapterSupp = new $.jqx.dataAdapter(sourceSupp);
             $('#dropdownlistSupp').jqxDropDownList({ selectedIndex: -1,  source: dataAdapterSupp, displayMember: "suppCode" , valueMember: "suppCode",theme: 'material-purple', itemHeight: 50, height: 38, width: '100%',
                renderer: function (index, label, value) {
				
	                var data = $("#dropdownlistSupp").jqxDropDownList('getItems'); 
                    var datarecord = data[index];
                
                    var table = '<table style="min-width: 150px;"><tr><td>' +datarecord.originalItem.suppCode + '</td></tr><tr><td>' + datarecord.originalItem.firstName +' '+ datarecord.originalItem.lastName + '</td></tr></table>';
                    return table;
                }
            });
            $('#dropdownlistSupp_u').jqxDropDownList({ selectedIndex: -1,  source: dataAdapterSupp, displayMember: "suppCode" , valueMember: "suppCode",theme: 'material-purple', itemHeight: 50, height: 38, width: '100%',
                renderer: function (index, label, value) {
				
	                var data = $("#dropdownlistSupp_u").jqxDropDownList('getItems'); 
                    var datarecord = data[index];
                
                    var table = '<table style="min-width: 150px;"><tr><td>' +datarecord.originalItem.suppCode + '</td></tr><tr><td>' + datarecord.originalItem.firstName +' '+ datarecord.originalItem.lastName + '</td></tr></table>';
                    return table;
                }
            });
     $("#consignmentDate").jqxDateTimeInput({ width: '100%', height: '38px',theme: 'material-purple', value:null, formatString : 'dd-MMM-yy'  });
     $("#consignmentDate_u").jqxDateTimeInput({ width: '100%', height: '38px',theme: 'material-purple', value:null, formatString : 'dd-MMM-yy'  });
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
 	$("#messageNotification_u").jqxNotification({
 		width: '100%',
 		appendContainer: "#container_u",
 		opacity: 0.9,
 		autoOpen: false,
 		animationOpenDelay: 800,
 		autoClose: true,
 		autoCloseDelay: 2000,
 		template: "info"
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
$("#messageNotification_b").jqxNotification({
 		width: '100%',
 		appendContainer: "#container_b",
 		opacity: 0.9,
 		autoOpen: false,
 		animationOpenDelay: 800,
 		autoClose: true,
 		autoCloseDelay: 2000,
 		template: "info"
 	});
 	createWindow();
 	$("#firstLastName").append(getFirstLastName())
 	$("#jqxAddButton").jqxButton({
 		width: 120,
 		height: 40
 	});
 	$("#jqxAddButton").on('click', function() {
 		$('#window').jqxWindow('open');
 	});
 	 $('#clearfilteringbutton').click(function () {
           $("#grid").jqxGrid('clearfilters');
       });
 	// initialize jqxGrid
 	var source = {
		url: '/item/getall',
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
 				name: 'suppCode',
 				type: 'string'
 			},
 			{
 				name: 'brandId',
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
 		   		name: 'isSold',
 				type: 'string'
 			},
 			{
 				name: 'inclusions',
 				type: 'string'
 			},
 			{
 				name: 'consignmentPrice',
 				type: 'float'
 			},
 			{
 				name: 'consignmentDate',
 				type: 'date'
			 },
			 {
 				name: 'sellingPrice',
 				type: 'float'
			 },
			 {
 				name: 'creationDate',
 				type: 'date'
			 },
			 {
 				name: 'lastModifiedDate',
 				type: 'date'
 			},
		    {
 				name: 'condition',
 				type: 'string'
 			},
		
 		],
 		updaterow: function(rowid, rowdata, commit) {
 			commit(true);
 		}
 	};
 	var dataAdapter = new $.jqx.dataAdapter(source);
 var settings = {
	  "url": "/config/table/"+"itemsView",
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
 				datafield: 'brandId',
 				hidden:  config.brandId
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
 				text: 'Supplier code',
				hidden: config.suppCode,
 				datafield: 'suppCode',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'description',
				hidden: config.description,
 				datafield: 'description',
 				width: '10%',
 				 createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Description" });
				  }
 			},
 			{
 				text: 'brand',
				hidden: config.brandName,
 				datafield: 'brandName',
 				width: '14%',
 				  createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Brand" });
				  }
 			},
 			{
 				text: 'inclusions',
				hidden: config.inclusions,
 				datafield: 'inclusions',
 				width: '16%',
                createfilterwidget: function (column, columnElement, widget) {
			    widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter inclusions" });
 			}
 			},
 			{
 				text: 'consignment Price (EUR)',
				hidden: config.consignmentPrice,
 				datafield: 'consignmentPrice',
 				width: '10%',
			    cellsformat: 'D2',
 			    createfilterwidget: function (column, columnElement, widget) {
			    widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter consignmentPrice " });
 			}
 			},
 			{
 				text: 'consignment Date',
				hidden: config.consignmentDate,
 				datafield: 'consignmentDate',
 				width: '7%',
				filtertype: 'date',
				cellsformat: 'dd-MMM-yy' 
			 },
		    {
 				text: 'Condition',
				hidden: config.condition,
 				datafield: 'condition',
 				width: '7%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter condition" });
			}
			 },
			  {
	 				text: 'isSold',
					hidden: config.isSold,
	 				datafield: 'isSold',
	 				width: '10%'
			 },
			 {
 				text: 'selling Price(EUR)',
				hidden: config.sellingPrice,
 				datafield: 'sellingPrice',
			    cellsformat: 'D2',
 				width: '9%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter sellingPrice" });
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
 				datafield: 'Barcode',
 				width: '5%',
                columntype: 'button',
                filterable: false,
 				cellsrenderer: function() {
 					return 'barcode';
 				},
 				buttonclick: function(row) {
 					// open the popup window when the user clicks a button.
 					editrow = row;
 					var offset = $("#grid").offset();
 					var dataRecord = $("#grid").jqxGrid('getrowdata', editrow);
			
				
				window.open("/report/generatereport?reportManagementDTO="+encodeURIComponent(JSON.stringify({"reportCode": "ITEMBARCODE","param1": dataRecord.id,"isExcel":"false"})));
				
 				}
 			},
 			{
 				text: '',
 				datafield: 'Edit',
 				width: '3%',
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
				  
 					$("#id_item").val(dataRecord.id);
				    $("#isSold").val(dataRecord.isSold);
					$("#itemCode").val(dataRecord.itemCode);
				
 					$("#dropdownlistSupp_u").jqxDropDownList('selectItem', dataRecord.suppCode ); 
				    $("#dropdownlistSupp_u").jqxDropDownList({disabled: true});
				    $("#conditionDropDown_u").jqxDropDownList('selectItem', dataRecord.condition ); 

		 			$("#SelectedBrandId_u").val(dataRecord.brandId);
 					$("#SelectedBrandName_u").val(dataRecord.brandName);

 					$("#description_u").val(dataRecord.description);
 					$("#Inclusions_u").val(dataRecord.inclusions);

 					$("#Consignmentprice_u").val(isNaN(dataRecord.consignmentPrice)?dataRecord.consignmentPrice.replaceAll(",",""):dataRecord.consignmentPrice);
				    $("#consignmentDate_u").jqxDateTimeInput('setDate',dataRecord.consignmentDate);
 					$("#Sellingprice_u").val(isNaN(dataRecord.sellingPrice)?dataRecord.sellingPrice.replaceAll(",",""):dataRecord.sellingPrice);

 					// show the popup window.
 					$('#updatewindow').jqxWindow('open');
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
                 $("#deletedSupplier").empty();
                 $('#deletedSupplier').append('Supplier : '+dataRecord.firstName+' '+dataRecord.lastName);
                 $("#deletedItemMessage").empty();
                 $("#deletedItemMessage").addClass("d-none");
                 $('#ConfirmationModal').modal('show'); 
 				}
 			}
 		]
 	});
		});
 	
  	var sourceBrand = {
		url: '/brand/getall',
		datatype: "json",
 		datafields: [{
 				name: 'id',
 				type: 'string'
 			},
 			{
 				name: 'nameEn',
 				type: 'string'
 			}
 		],
 		updaterow: function(rowid, rowdata, commit) {
 			commit(true);
 		}
 	};
 	var dataAdapterBrand = new $.jqx.dataAdapter(sourceBrand);
    $("#brandGrid").jqxGrid({
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
 				text: 'Brand',
 				datafield: 'nameEn',
				width: '75%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter brand" });
			}
 			},
 				{
 				text: '',
 				datafield: 'Edit',
 				width: '10%',
                columntype: 'button',
                filterable: false,
 				cellsrenderer: function() {
 					return "Edit";
 				},
 				buttonclick: function(row) {
 					// open the popup window when the user clicks a button.
 					editrow = row;
 					var offset = $("#brandGrid").offset();

 					// get the clicked row's data and initialize the input fields.
 					var dataRecord = $("#brandGrid").jqxGrid('getrowdata', editrow);
 					
					$("#brandId").val(dataRecord.id);
					$("#brandName").val(dataRecord.nameEn);
					
 				 openBrandWindow('Update - brand','update');
				  
 				}
 			},
			{
 				text: '',
 				datafield: 'Delete',
 				width: '15%',
                columntype: 'button',
                filterable: false,
 				cellsrenderer: function() {
 					return "Delete";
 				},
 				buttonclick: function(row) {
	             deleteRow = row;
                 var dataRecord = $("#brandGrid").jqxGrid('getrowdata', deleteRow);
                 $("#deletedBrand").empty();
                 $('#deletedBrand').append('Brand : '+dataRecord.nameEn);
				 $("#deletedBrandMessage").empty();
                 $("#deletedBrandMessage").addClass("d-none");
                 $('#ConfirmationModalBrand').modal('show'); 
 				}
 			}]
		});
  $('#jqxSelectBrand').on('click', function() {
	   var title = $('#brandwindowGrid').jqxWindow('title'); 
	   var selectedrowindex = $('#brandGrid').jqxGrid('selectedrowindex'); 
	   var data = $('#brandGrid').jqxGrid('getrowdata', selectedrowindex);
       if (data==null)
			{
				        $("#notificationText_s").empty();
			 			$("#messageNotification_s").jqxNotification({
			 				template: "info"
			 			});
			 			$("#notificationText_s").append("Please select a brand from the grid");
			 			$("#messageNotification_s").jqxNotification("open");
			}
			else 
			{
				if (title.includes("Save"))
				{
				 $("#SelectedBrandId").val(data.id);
				 $("#SelectedBrandName").val(data.nameEn);
			     } 
				else {
				 $("#SelectedBrandId_u").val(data.id);
				 $("#SelectedBrandName_u").val(data.nameEn);
			     } 
		     $('#brandwindowGrid').jqxWindow('close');
			}
	});
    $("#deleteItem").on('click', function() {
        var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
        var rowscount = $("#grid").jqxGrid('getdatainformation').rowscount;
        var ItemId = $('#grid').jqxGrid('getrowdata', selectedrowindex).id
        $.ajax({
            type: "DELETE",
            url: "/item/delete/" + ItemId,
            success: function(result)  {
	          if (result == "success")
                { $('#ConfirmationModal').modal('hide');
	                if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
	                    var id = $("#grid").jqxGrid('getrowid', selectedrowindex);
	                    var commit = $("#grid").jqxGrid('deleterow', id);
	                }
				}else {
				 $("#deletedItemMessage").removeClass("d-none");
			     $("#deletedItemMessage").empty();
                 $('#deletedItemMessage').append(result);
				}
            },
            error: function(e) {
                console.log(e);
            }
        });
    });
 $("#deleteBrand").on('click', function() {
        var selectedrowindex = $('#brandGrid').jqxGrid('getselectedrowindexes');
        var rowscount = $("#brandGrid").jqxGrid('getdatainformation').rowscount;
        var BrandId = $('#brandGrid').jqxGrid('getrowdata', selectedrowindex).id
        $.ajax({
            type: "DELETE",
            url: "/brand/delete/" + BrandId,
            success: function(result) {
                if (result == "success")
                { $('#ConfirmationModalBrand').modal('hide');
	                if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
	                    var id = $("#brandGrid").jqxGrid('getrowid', selectedrowindex);
	                    var commit = $("#brandGrid").jqxGrid('deleterow', id);
	                }
				}else {
				 $("#deletedBrandMessage").removeClass("d-none");
			     $("#deletedBrandMessage").empty();
                 $('#deletedBrandMessage').append(result);
				}
            },
            error: function(e) {
                console.log(e);
            }
        });
    });

 	$("#jqxSaveItem").on('click', function() {
 		if ($('#dropdownlistSupp').val().length === 0 ) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("SupplierCode is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#SelectedBrandName').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Brand is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#description').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Description is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#Inclusions').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Inclusions is required");
 			$("#messageNotification").jqxNotification("open");
 		}else if ($('#Consignmentprice').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("consignmentPrice is required");
 			$("#messageNotification").jqxNotification("open");
 		}
 	      else if ($('#consignmentDate').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("consignmentDate is required");
 			$("#messageNotification").jqxNotification("open");
 		}
 		 else if ($('#Sellingprice').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Selling Price is required");
 			$("#messageNotification").jqxNotification("open");
 		}
 		
 		else {
	
 			
 			var settings = {
 				"url": "/item/save",
 				"method": "POST",
 				"timeout": 0,
 				"headers": {
 					"Authorization": "Bearer " + getJwt(),
 					"Content-Type": "application/json"
 				},
 				"data": JSON.stringify({
				"action":"save",
 					"suppCode": $("#dropdownlistSupp").val(),
 					"brandId": $("#SelectedBrandId").val(),
 					"description": $("#description").val(),
 					"inclusions": $("#Inclusions").val(),
 					"consignmentPrice": $("#Consignmentprice").val(),
 					"consignmentDate": $("#consignmentDate").jqxDateTimeInput("getDate"),
 					"sellingPrice": $("#Sellingprice").val(),
 					"condition": $("#conditionDropDown").val()
 				}),
 			};

 			$.ajax(settings).done(function(response) {
 				$("#notificationText").empty();
 				$("#messageNotification").jqxNotification({
 					template: "info"
 				});
 				$("#notificationText").append(response.message);
 				$("#messageNotification").jqxNotification("open");
 				var dataAdapter = new $.jqx.dataAdapter(source);
 				 $('#dropdownlistSupp').jqxDropDownList({ selectedIndex: -1});
		         $('#conditionDropDown').jqxDropDownList({ selectedIndex: -1});
 				$('#grid').jqxGrid({
 					source: dataAdapter
                 });
                 $(':input', '#supplier_form').val('');
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
     
   
 		$("#jqxUpdateItem").on('click', function() {
 		if ($('#dropdownlistSupp_u').val().length === 0 ) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("SupplierCode is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#SelectedBrandName_u').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Brand is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#description_u').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Description is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#Inclusions_u').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Inclusions is required");
 			$("#messageNotification").jqxNotification("open");
 		}else if ($('#Consignmentprice_u').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("consignmentPrice is required");
 			$("#messageNotification").jqxNotification("open");
 		}
 	      else if ($('#consignmentDate_u').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("consignmentDate is required");
 			$("#messageNotification").jqxNotification("open");
 		}
 		 else if ($('#Sellingprice_u').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Selling Price is required");
 			$("#messageNotification").jqxNotification("open");
 		}
 		
 		else {
 		var settings = {
 			"url": "/item/save",
 			"method": "POST",
 			"timeout": 0,
 			"headers": {
 				"Authorization": "Bearer " + getJwt(),
 				"Content-Type": "application/json"
 			},
 			"data": JSON.stringify({
		            "action":"update",
 					"id":$("#id_item").val(),
				     "isSold":$("#isSold").val(),
				    "itemCode": $("#itemCode").val(),
 				    "suppCode": $("#dropdownlistSupp_u").val(),
 					"brandId": $("#SelectedBrandId_u").val(),
 					"description": $("#description_u").val(),
 					"inclusions": $("#Inclusions_u").val(),
 					"consignmentPrice": $("#Consignmentprice_u").val(),
 					"consignmentDate": $("#consignmentDate_u").jqxDateTimeInput("getDate"),
 					"sellingPrice": $("#Sellingprice_u").val(),
				    "condition": $("#conditionDropDown_u").val(),
					"isSold":false
 			}),
 		};

 		$.ajax(settings).done(function(response) {
	debugger
 		        $("#notificationText_u").empty();
 				$("#messageNotification_u").jqxNotification({
 					template: "info"
 				});
 				$("#notificationText_u").append(response.message);
 				$("#messageNotification_u").jqxNotification("open");
             
        var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
        var rowid = $('#grid').jqxGrid('getrowid', selectedrowindex);
        var data= response.itemsView;
           data.consignmentDate =  dataAdapter.formatDate(new Date(data.consignmentDate), 'dd-MMM-yy');
		   data.creationDate =  dataAdapter.formatDate(new Date(data.creationDate), 'dd-MMM-yy HH:mm' );
		   data.lastModifiedDate =  dataAdapter.formatDate(new Date(data.lastModifiedDate),'dd-MMM-yy HH:mm' );
           data.consignmentPrice = dataAdapter.formatNumber( data.consignmentPrice,'D2');
		   data.sellingPrice = dataAdapter.formatNumber(data.sellingPrice,'D2');
         $('#grid').jqxGrid('updaterow', rowid, data );
         
 			//$(':input', '#supplier_form_update').val('')
 		});
 		}
 		
     });
      $("#jqxSaveBrand").on('click', function() {
		saveBrand($("#brandName").val());
      });
	 $("#jqxSaveBrand_u").on('click', function() {
		saveBrand($("#brandName_u").val(),"#dropdownlistBrand_u","#dropdownlistBrand",'#brandwindow_u');
	      });
      $("#CloseSaveItem").on('click', function() {
         $('#window').jqxWindow('close');
      });

       $("#CloseUpdateItem").on('click', function() {
         $('#updatewindow').jqxWindow('close');
       });

	 $("#CloseSaveBrand").on('click', function() {
         $('#brandwindow').jqxWindow('close');
      });
	 $("#CloseSaveBrand_u").on('click', function() {
	         $('#brandwindow_u').jqxWindow('close');
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
 	$('#updatewindow').jqxWindow({
 		position: {
 			x: offset.left + 200,
 			y: offset.top + 50
 		},
 		showCollapseButton: true,
 		autoOpen: false,
 		height: 535,
 		width: 750,
 		theme: 'material-purple'

 	});

 $('#brandwindow').jqxWindow({
 		position: {
 			x: offset.left + 375,
 			y: offset.top + 100
 		},
 		showCollapseButton: true,
 		autoOpen: false,
 		height: 360,
 		width: 375,
 		theme: 'material-purple'

 	}); 
$('#brandwindow_u').jqxWindow({
 		position: {
 			x: offset.left + 375,
 			y: offset.top + 100
 		},
 		showCollapseButton: true,
 		autoOpen: false,
 		height: 260,
 		width: 375,
 		theme: 'material-purple'

 	}); 
 	
 $('#brandwindowGrid').jqxWindow({
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
 
 function openBrandWindow(title,action)
 { if(action=="save")
	{
	$("#brandId").val(null);
	$("#brandName").val(null);
	}
	$('#brandwindow').jqxWindow({ title: title }); 
				
   $('#brandwindow').jqxWindow('open');
   $("#brandwindow").jqxWindow('bringToFront')
 }
function openGridBrandWindow(title)
 {
   $('#brandwindowGrid').jqxWindow({ title: title }); 
   $('#brandwindowGrid').jqxWindow('open');
   $("#brandwindowGrid").jqxWindow('bringToFront')
 }
function openBrandWindow_u()
 {
   $('#brandwindow_u').jqxWindow('open');
   $("#brandwindow_u").jqxWindow('bringToFront')
 }
async function saveBrand(name)
{   var json;
	var title = $('#brandwindow').jqxWindow('title'); 
	
	if (title.includes("Save"))
	{
		json = {
		    "nameEn": name==''?null:name,
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
	
	var settings = {
		  "url": "/brand/save",
		  "method": "POST",
		  "timeout": 0,
		  "headers": {
		    "Authorization": "Bearer " + getJwt(),
		    "Content-Type": "application/json"
		  },
		  "data": JSON.stringify(json),
		};

			$.ajax(settings).done(function (response) {
				if (response.brand== null)
				{
					    $("#notificationText_b").empty();
			 			$("#messageNotification_b").jqxNotification({
			 				template: "info"
			 			});
			 			$("#notificationText_b").append(response.message);
			 			$("#messageNotification_b").jqxNotification("open");
				}
			else {
				if (json.action=='save'){
				$('#brandGrid').jqxGrid('addrow', null, response.brand, 'first');
				$("#brandwindow").jqxWindow('close');
				}
				else {
					 var selectedrowindex = $('#brandGrid').jqxGrid('getselectedrowindexes');
			         var rowid = $('#brandGrid').jqxGrid('getrowid', selectedrowindex);
			         $('#brandGrid').jqxGrid('updaterow', rowid,response.brand);
	                 $("#brandwindow").jqxWindow('close');
				}
				}
				
			});
}
