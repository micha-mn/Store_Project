 let action = '';
 $(window).on('load', function() {
  $("#buttonContainer").addClass("d-flex");
  $("#windowContainer").removeClass("d-none");
  $("#loginUserName").removeClass("d-none"); 
 });
 $(document).ready(function() {
 var urlBrand = "/brand/getall";
var sourceBrand =
	 {
		 datatype: "json",
		 datafields: [
			 { name: 'id' },
			 { name: 'nameEn' }
		 ], url: urlBrand,
		 async: true
	 };
 var dataAdapterBrand = new $.jqx.dataAdapter(sourceBrand);
 $('#dropdownlistBrand').jqxDropDownList({ selectedIndex: -1,  source: dataAdapterBrand, displayMember: "nameEn" , valueMember: "id",theme: 'material-purple', height: 38, width: '100%'});
			
	 var url = "/supplier/getall";
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
				debugger;
	                var data = $("#dropdownlistSupp").jqxDropDownList('getItems'); 
                    var datarecord = data[index];
                
                    var table = '<table style="min-width: 150px;"><tr><td>' +datarecord.originalItem.suppCode + '</td></tr><tr><td>' + datarecord.originalItem.firstName +' '+ datarecord.originalItem.lastName + '</td></tr></table>';
                    return table;
                }
            });
     $("#consignmentDate").jqxDateTimeInput({ width: '100%', height: '38px',theme: 'material-purple', value:null, formatString : 'dd-MMM-yy HH:mm'  });
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
 	createWindow();
 	$("#firstLastName").append(getFirstLastName())
 	$("#jqxAddButton").jqxButton({
 		width: 120,
 		height: 40
 	});
 	$("#jqxAddButton").on('click', function() {
 		action = 'add';
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
 				name: 'suppCode',
 				type: 'string'
 			},
 			{
 				name: 'brandId',
 				type: 'string'
 			},
 			{
 				name: 'description',
 				type: 'string'
 			},
 			{
 				name: 'inclusions',
 				type: 'string'
 			},
 			{
 				name: 'consignmentPrice',
 				type: 'string'
 			},
 			{
 				name: 'consignmentDate',
 				type: 'string'
			 },
			 {
 				name: 'sellingPrice',
 				type: 'string'
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
 				hidden: true
 			},
 			{
 				text: 'Supplier code',
 				datafield: 'suppCode',
 				width: '8%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Code" });
				  }
 			},
 			{
 				text: 'brand',
 				datafield: 'brandId',
 				width: '10%',
 				  createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Brand" });
				  }
 			},
 			{
 				text: 'description',
 				datafield: 'description',
 				width: '10%',
 				 createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter Description" });
				  }
 			},
 			{
 				text: 'inclusions',
 				datafield: 'inclusions',
 				width: '16%',
                createfilterwidget: function (column, columnElement, widget) {
			    widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter inclusions" });
 			}
 			},
 			{
 				text: 'consignmentPrice',
 				datafield: 'consignmentPrice',
 				width: '12%',
 			    createfilterwidget: function (column, columnElement, widget) {
			    widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter consignmentPrice" });
 			}
 			},
 			{
 				text: 'consignmentDate',
 				datafield: 'consignmentDate',
 				width: '10%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter consignmentDate" });
			}
			 },
			 {
 				text: 'sellingPrice',
 				datafield: 'sellingPrice',
 				width: '10%',
 				createfilterwidget: function (column, columnElement, widget) {
			        widget.jqxInput({ width: '100%', height: 27, placeHolder: "Enter sellingPrice" });
			}
			 },
			 {
 				text: 'Create Date',
			    datafield: 'creationDate',
				width: '12%',
				filtertype: 'date', 
				cellsformat: 'dd-MMM-yy HH:mm' 
			 },
			 {
 				text: 'Edit Date',
				datafield: 'lastModifiedDate',
			    filtertype: 'date', 
				width: '12%',
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

 					$("#id_item").val(dataRecord.id);
 					$("#suppCode").val(dataRecord.suppCode);
 					$("#firstName_u").val(dataRecord.firstName);
 					$("#lastName_u").val(dataRecord.lastName);
 					$("#address_u").val(dataRecord.address);
 					$("#instagram_u").val(dataRecord.instagram);

 					// show the popup window.
 					action = 'update';
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
                 $('#deletedSupplier').append('Supplier : '+dataRecord.firstName+' '+dataRecord.lastName)
                 $('#ConfirmationModal').modal('show'); 
 				}
 			}
 		]
 	});

    $("#deleteItem").on('click', function() {
        var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
        var rowscount = $("#grid").jqxGrid('getdatainformation').rowscount;
        var ItemId = $('#grid').jqxGrid('getrowdata', selectedrowindex).id
        $.ajax({
            type: "DELETE",
            url: "/item/delete/" + ItemId,
            success: function(result) {
                $('#ConfirmationModal').modal('hide');
                if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                    var id = $("#grid").jqxGrid('getrowid', selectedrowindex);
                    var commit = $("#grid").jqxGrid('deleterow', id);
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
 		} else if ($('#jqxInputBrand').val().length === 0) {
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
 					"brandId": $("#jqxInputBrand").val(),
 					"description": $("#description").val(),
 					"inclusions": $("#Inclusions").val(),
 					"consignmentPrice": $("#Consignmentprice").val(),
 					"consignmentDate": $("#consignmentDate").jqxDateTimeInput("getDate"),
 					"sellingPrice": $("#Sellingprice").val()
 					
 				}),
 			};

 			$.ajax(settings).done(function(response) {
 				$("#notificationText").empty();
 				$("#messageNotification").jqxNotification({
 					template: "info"
 				});
 				$("#notificationText").append(response);
 				$("#messageNotification").jqxNotification("open");
 				var dataAdapter = new $.jqx.dataAdapter(source);
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
 		if ($('#dropdownlistSupp_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Supplier Code is required");
 			$("#messageNotification_u").jqxNotification("open");
 		} else if ($('#jqxInputBrand_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Brand is required");
 			$("#messageNotification_u").jqxNotification("open");
 		} else if ($('#description_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("description is required");
 			$("#messageNotification_u").jqxNotification("open");
 		} else if ($('#Inclusions_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Inclusions is required");
 			$("#messageNotification_u").jqxNotification("open");
 		}  else if ($('#Consignmentprice_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Consignmentprice is required");
 			$("#messageNotification_u").jqxNotification("open");
 		}   else if ($('#consignmentDate_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("consignmentDate is required");
 			$("#messageNotification_u").jqxNotification("open");
 		}  
 		  else if ($('#Sellingprice_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Sellingprice is required");
 			$("#messageNotification_u").jqxNotification("open");
 		}   else if ($('#ItemCode_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("ItemCode is required");
 			$("#messageNotification_u").jqxNotification("open");
 		}   
 		
 		else {
 		
 		var settings = {
 			"url": "/supplier/update",
 			"method": "POST",
 			"timeout": 0,
 			"headers": {
 				"Authorization": "Bearer " + getJwt(),
 				"Content-Type": "application/json"
 			},
 			"data": JSON.stringify({
 				"suppCode": $("#dropdownlistSupp_u").val(),
 					"brandId": $("#jqxInputBrand_u").val(),
 					"description": $("#description_u").val(),
 					"inclusions": $("#Inclusions_u").val(),
 					"consignmentPrice": $("#Consignmentprice_u").val(),
 					"consignmentDate": $("#consignmentDate_u").val(),
 					"sellingPrice": $("#Sellingprice_u").val(),
 					"ItemCode": $("#ItemCode_u").val()
 			}),
 		};

 		$.ajax(settings).done(function(response) {
 		        $("#notificationText_u").empty();
 				$("#messageNotification_u").jqxNotification({
 					template: "info"
 				});
 				$("#notificationText_u").append(response);
 				$("#messageNotification_u").jqxNotification("open");
             
        var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
        var rowid = $('#grid').jqxGrid('getrowid', selectedrowindex);
        var rowdata=$('#grid').jqxGrid('getrowdata', selectedrowindex);
        debugger
         $('#grid').jqxGrid('updaterow', rowid, {
                                                    "id": $("#id_supp").val(),
                                                    "suppCode": $("#suppCode").val(),
                                                    "firstName": $("#firstName_u").val(),
                                                    "lastName": $("#lastName_u").val(),
                                                    "address": $("#address_u").val(),
                                                    "phone": $("#phone_u").intlTelInput("getNumber"),
                                                    "instagram": $("#instagram_u").val(),
                                                    "lastModifiedDate": new Date(),
                                                    "creationDate": rowdata.creationDate
                                                }
                                                );
         
 			//$(':input', '#supplier_form_update').val('')
 		});
 		}
 		
     });
     
      $("#CloseSaveItem").on('click', function() {
         $('#window').jqxWindow('close');
      });

       $("#CloseUpdateItem").on('click', function() {
         $('#updatewindow').jqxWindow('close');
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
 		height: 520,
 		width: 750,
 		theme: 'material-purple'

 	});
 };