 let action = '';
 $(window).on('load', function() {
 	$('#jqxWidget').show();
 });
 $(document).ready(function() {
     $("#phone").intlTelInput(document.querySelector("#phone"), {
            separateDialCode: true,
            autoPlaceholder: true,
            preferredCountries:["in"],
            hiddenInput: "full",
            utilsScript: "/js/core/intl-tel-input-utils.js"
            });

      $("#phone_u").intlTelInput(document.querySelector("#phone"), {
            separateDialCode: true,
            autoPlaceholder: true,
            preferredCountries:["in"],
            hiddenInput: "full",
            utilsScript: "/js/core/intl-tel-input-utils.js"
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
 		url: '/supplier/getall',
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
 				name: 'firstName',
 				type: 'string'
 			},
 			{
 				name: 'lastName',
 				type: 'string'
 			},
 			{
 				name: 'address',
 				type: 'string'
 			},
 			{
 				name: 'phone',
 				type: 'string'
 			},
 			{
 				name: 'instagram',
 				type: 'string'
 			}
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
 				width: '15%'
 			},
 			{
 				text: 'Name 1',
 				datafield: 'firstName',
 				width: '15%'
 			},
 			{
 				text: 'Name 2',
 				datafield: 'lastName',
 				width: '15%'
 			},
 			{
 				text: 'Adress',
 				datafield: 'address',
 				width: '15%'
 			},
 			{
 				text: 'Phone',
 				datafield: 'phone',
 				width: '15%'
 			},
 			{
 				text: 'Instagram',
 				datafield: 'instagram',
 				width: '15%',
 				cellsformat: 'c2'
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

 					$("#id_supp").val(dataRecord.id);
 					$("#suppCode").val(dataRecord.suppCode);
 					$("#firstName_u").val(dataRecord.firstName);
 					$("#lastName_u").val(dataRecord.lastName);
 					$("#address_u").val(dataRecord.address);
                    $("#phone_u").intlTelInput("setNumber", dataRecord.phone);
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

    $("#deleteSupplier").on('click', function() {
        var selectedrowindex = $('#grid').jqxGrid('getselectedrowindexes');
        var rowscount = $("#grid").jqxGrid('getdatainformation').rowscount;
        var SupplierId = $('#grid').jqxGrid('getrowdata', selectedrowindex).id
        $.ajax({
            type: "DELETE",
            url: "/supplier/delete/" + SupplierId,
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

 	$("#jqxSaveSupplier").on('click', function() {
 		if ($('#firstName').val().length === 0 ) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Name 1 is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#lastName').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Name 2 is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#address').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Address is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if ($('#phone').val().length === 0) {
 			$("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Phone number is required");
 			$("#messageNotification").jqxNotification("open");
 		} else if (!$("#phone").intlTelInput("isValidNumber")){
	        $("#notificationText").empty();
 			$("#messageNotification").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText").append("Invalid phone number.");
 			$("#messageNotification").jqxNotification("open");
 			 }else {
	
 			
 			var settings = {
 				"url": "/supplier/save",
 				"method": "POST",
 				"timeout": 0,
 				"headers": {
 					"Authorization": "Bearer " + getJwt(),
 					"Content-Type": "application/json"
 				},
 				"data": JSON.stringify({
 					"firstName": $("#firstName").val(),
 					"lastName": $("#lastName").val(),
 					"address": $("#address").val(),
 					"phone": $("#phone").intlTelInput("getNumber"),
 					"instagram": $("#instagram").val()
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
     
   
 	$("#jqxUpdateSupplier").on('click', function() {
 		if ($('#firstName_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Name 1 is required");
 			$("#messageNotification_u").jqxNotification("open");
 		} else if ($('#lastName_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Name 2 is required");
 			$("#messageNotification_u").jqxNotification("open");
 		} else if ($('#address_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Address is required");
 			$("#messageNotification_u").jqxNotification("open");
 		} else if ($('#phone_u').val().length === 0) {
 			$("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Phone number is required");
 			$("#messageNotification_u").jqxNotification("open");
 		} else if (!$("#phone_u").intlTelInput("isValidNumber")){
	        $("#notificationText_u").empty();
 			$("#messageNotification_u").jqxNotification({
 				template: "info"
 			});
 			$("#notificationText_u").append("Invalid phone number.");
 			$("#messageNotification_u").jqxNotification("open");
        }else {
 		
 		var settings = {
 			"url": "/supplier/update",
 			"method": "POST",
 			"timeout": 0,
 			"headers": {
 				"Authorization": "Bearer " + getJwt(),
 				"Content-Type": "application/json"
 			},
 			"data": JSON.stringify({
 				"id": $("#id_supp").val(),
 				"suppCode": $("#suppCode").val(),
 				"firstName": $("#firstName_u").val(),
 				"lastName": $("#lastName_u").val(),
 				"address": $("#address_u").val(),
 				"phone": $("#phone_u").intlTelInput("getNumber"),
 				"instagram": $("#instagram_u").val()
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
         $('#grid').jqxGrid('updaterow', rowid, {
                                                    "id": $("#id_supp").val(),
                                                    "suppCode": $("#suppCode").val(),
                                                    "firstName": $("#firstName_u").val(),
                                                    "lastName": $("#lastName_u").val(),
                                                    "address": $("#address_u").val(),
                                                    "phone": $("#phone_u").intlTelInput("getNumber"),
                                                    "instagram": $("#instagram_u").val()
                                                }
                                                );
         
 			//$(':input', '#supplier_form_update').val('')
 		});
 		}
 		
     });
     
      $("#CloseSaveSupplier").on('click', function() {
         $('#window').jqxWindow('close');
      });

       $("#CloseUpdateSupplier").on('click', function() {
         $('#updatewindow').jqxWindow('close');
       });
 });

 function createWindow() {
 	var jqxWidget = $('#jqxWidget');
 	var offset = jqxWidget.offset();

 	$('#window').jqxWindow({
 		position: {
 			x: offset.left + 500,
 			y: offset.top + 50
 		},
 		showCollapseButton: true,
 		autoOpen: false,
 		height: 450,
 		width: 750,
 		theme: 'material-purple'

 	});
 	$('#updatewindow').jqxWindow({
 		position: {
 			x: offset.left + 500,
 			y: offset.top + 50
 		},
 		showCollapseButton: true,
 		autoOpen: false,
 		height: 520,
 		width: 750,
 		theme: 'material-purple'

 	});
 };