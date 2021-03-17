window.onload = function() {
	$('.ui.dropdown').dropdown();
};

$(document).ready(function() {

	//class_no 중복검사
	$('#classNumConfirm').on('click', function() {
		var class_no = $('#class_no').val();
		if (class_no == "") {
			$('.classmodal.content').text("강의번호를 입력하세요!")
			$('.ui.mini.classNumconfirm.modal').modal('show');
		} else {
			$.ajax({
				type: 'POST',
				data: { class_no: class_no },
				datatype: 'json',
				url: 'classNumConfirmAjax',
				contentType: 'application/x-www-form-urlencoded; charset=euc-kr',
				success: function(data) {
					var msg = "";
					if (data == "y") {
						msg = "사용중인 강의번호입니다"
						$('.classmodal.content').text(msg)
						$('.ui.mini.classNumconfirm.modal').modal('show');
						$('#class_no').val('');
						$('#class_no').focus();
					} else {
						msg = "사용 가능한 강의번호입니다"
						$('.classmodal.content').text(msg)
						$('.ui.mini.classNumconfirm.modal').modal('show');
					}

				},
				error: function(xhr, status, error) {
					alert('ajax error' + xhr.status);
				}
			});
		}
	})

	//학과검색버튼
	$('#departmentSeachInsert').on('click', function() {
		$('.ui.department.search.modal').modal('show');
	})

	//학과리스트
	$('#departmentExample').DataTable({
		lengthChange: false,
		deferRender: true,
		autoWidth: true,
		displayLength: 5,

		"dom": '<"top"f>rt<"bottom"lp><"clear">', // Positions table elements
		"language": {
			"search": "_INPUT_",            // Removes the 'Search' field label
			"searchPlaceholder": "Search"   // Placeholder for the search box
		},

		"fnDrawCallback": function() {
			$("input[type='search']").attr("id", "searchBox");
			$('#dialPlanListTable').css('cssText', "margin-top: 0px !important;");
			$("select[name='dialPlanListTable_length'], #searchBox").removeClass("input-sm");
			$('#searchBox').css("width", "500px").focus();
			$('#searchBox').css("height", "40px").focus();
			$('#dialPlanListTable_filter').removeClass('dataTables_filter');
		}
	});
	//강의 관리용 리스트
	$('#classAdminListexample').DataTable({
		lengthChange: false,
		deferRender: true,
		autoWidth: true,
		displayLength: 10,

		"dom": '<"top"f>rt<"bottom"lp><"clear">', // Positions table elements
		"language": {
			"search": "_INPUT_",            // Removes the 'Search' field label
			"searchPlaceholder": "Search"   // Placeholder for the search box
		},

		"fnDrawCallback": function() {
			$("input[type='search']").attr("id", "searchBox");
			$('#dialPlanListTable').css('cssText', "margin-top: 0px !important;");
			$("select[name='dialPlanListTable_length'], #searchBox").removeClass("input-sm");
			$('#searchBox').css("width", "700px").focus();
			$('#searchBox').css("margin", "20px").focus();
			$('#searchBox').css("margin-right", "130px").focus();
			$('#searchBox').css("height", "40px").focus();
			$('#dialPlanListTable_filter').removeClass('dataTables_filter');
		}
	});

	//강의 관리용 리스트에서 삭제버튼
	$("#classAdminListexample").on('click', '#classAdminDeleteBtn', 'td', function() {
		var row = $(this).closest('tr');
		var td = row.children();
		var class_no = td.eq(0).text();
		$('.ui.mini.classDelete.modal').modal('show');
		
		$('#classDeleteOkBtn').on('click', function() {
			$.ajax({
				type: 'POST',
				data: { class_no: class_no },
				datatype: 'json',
				url: 'classDeleteAjax',
				contentType: 'application/x-www-form-urlencoded; charset=euc-kr',
				success: function(data) {
					if (data == "y") {
						row.remove();
						$('#resultmessage').text("삭제 되었습니다.");
					} else {
						$('#resultmessage').text("삭제 되지 않았습니다.");
					}
					$('#successmessage').css('display', "block")
						.delay(1200).queue(function() {
							$('#successmessage').css('display', "none").dequeue();
						});
					$('.ui.mini.classDelete.modal').modal('hide');
				},
				error: function(xhr, status, error) {
					alert('ajax error' + xhr.status);
				}
			});
		})
	});

	//학과 리스트에서 누르면
	$("#departmentExample").on('click', '#departmentSelect', 'td', function() {
		var row = $(this).closest('tr');
		var td = row.children();
		var departmentNum = td.eq(0).text();
		var departmentName = td.eq(1).text();
		$('#department_name').val(departmentName);
		$('#department_no').val(departmentNum);
		$('#departmentModalInput').val(departmentName);
	})

	//학과검색모달에서 취소버튼
	$('#departmentSearchCancelBtn').on('click', function() {
		$('#department_no').val(" ");
		$('#department_name').val(" ");
		$('#departmentModalInput').val(" ");
	})
	
	//교수검색버튼
	$("#professorField").on('click', '#professorSeachInsert', 'td', function() {
		$('.ui.professor.search.modal').modal('show');
	})
	
	/*//교수 리스트에서 누르면
	$("#professorExample").on('click', '#professorSelect', 'td', function() {
		var row = $(this).closest('tr');
		var td = row.children();
		var professorNum = td.eq(0).text();
		var professorName = td.eq(1).text();
		$('#professor_name').val(professorName);
		$('#professor_no').val(professorNum);
		$('#professorModalInput').val(professorName);
	})*/

	//교수검색모달에서 취소버튼
	$('#professorSearchCancelBtn').on('click', function() {
		$('#professor_no').val(" ");
		$('#professor_name').val(" ");
		$('#professorModalInput').val(" ");
	})
	//교수 리스트
	$('#professorExample').DataTable({
		lengthChange: false,
		deferRender: true,
		autoWidth: true,
		displayLength: 5,

		"dom": '<"top"f>rt<"bottom"lp><"clear">', // Positions table elements
		"language": {
			"search": "_INPUT_",            // Removes the 'Search' field label
			"searchPlaceholder": "Search"   // Placeholder for the search box
		},

		"fnDrawCallback2": function() {
			$("input[type='search']").attr("id", "searchBox");
			$('#dialPlanListTable').css('cssText', "margin-top: 0px !important;");
			$("select[name='dialPlanListTable_length'], #searchBox").removeClass("input-sm");
			$('#searchBox').css("width", "700px").focus();
			$('#searchBox').css("margin", "20px").focus();
			$('#searchBox').css("margin-right", "130px").focus();
			$('#searchBox').css("height", "40px").focus();
			$('#dialPlanListTable_filter').removeClass('dataTables_filter');
		}
	});
	


});