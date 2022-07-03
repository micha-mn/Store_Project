 $(document).ready(function ()
        {
	 createWindow();
	 
	 $("#jqxAddButton").jqxButton({ width: 120, height: 40 });
	 
	 $("#jqxAddButton").on('click', function ()
            {
             $('#window').jqxWindow('open');
            });
	    // initialize jqxGrid
	      var source =
            {
                localdata: [],
                datatype: "json",
                datafields:
                [
                    { name: 'firstName', type: 'string' },
                    { name: 'lastName', type: 'string' },
                    { name: 'address', type: 'string' },
                    { name: 'phone', type: 'string' },
                    { name: 'instagram', type: 'string' }
                ],
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failder.
                    commit(true);
                }
            };
         var dataAdapter = new $.jqx.dataAdapter(source);
         $("#grid").jqxGrid(
            {
                width: '100%',
                source: dataAdapter,
                pageable: true,
                autoheight: true,
                columns: [
                  { text: 'First Name', datafield: 'firstName', width:'18%' },
                  { text: 'Last Name', datafield: 'lastName', width: '18%' },
                  { text: 'Adress', datafield: 'adress', width: '18%' },
                  { text: 'Phone', datafield: 'phone', width:'18%', cellsalign: 'right' },
                  { text: 'Instagram', datafield: 'instagram', width: '18%', cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'Edit', datafield: 'Edit',width: '10%',columntype: 'button', cellsrenderer: function () {
                     return "Edit";
                  }, buttonclick: function (row) {
                     // open the popup window when the user clicks a button.
                     editrow = row;
                     var offset = $("#grid").offset();
                     $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });

                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#grid").jqxGrid('getrowdata', editrow);
                     $("#firstName").val(dataRecord.firstname);
                     $("#lastName").val(dataRecord.lastname);
                     $("#product").val(dataRecord.productname);
                     $("#quantity").jqxNumberInput({ decimal: dataRecord.quantity });
                     $("#price").jqxNumberInput({ decimal: dataRecord.price });

                     // show the popup window.
                     $("#popupWindow").jqxWindow('open');
                 }
                 }
                ]
            });
	 
	});
	
	 
            function createWindow() {
                var jqxWidget = $('#jqxWidget');
                var offset = jqxWidget.offset();

                $('#window').jqxWindow({
                    position: { x: offset.left + 250, y: offset.top + 50} ,
                    showCollapseButton: true, autoOpen: false,height: 425, width: 750,
                    
                });
            };
