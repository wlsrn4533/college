
// 검색시 주소 뛰우기
function zipcodeFind() {

	new daum.Postcode({

		oncomplete: function(data) {

			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

			// 각 주소의 노출 규칙에 따라 주소를 조합한다.

			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.

			var fullAddr = ''; // 최종 주소 변수

			var extraAddr = ''; // 조합형 주소 변수

			// 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.

			if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우

				fullAddr = data.roadAddress;

			} else { // 사용자가 지번 주소를 선택했을 경우(J)

				fullAddr = data.jibunAddress;

			}

			// 사용자가 선택한 주소가 도로명 타입일때 조합한다.

			if (data.userSelectedType === 'R') {

				//법정동명이 있을 경우 추가한다.

				if (data.bname !== '') {

					extraAddr += data.bname;

				}

				// 건물명이 있을 경우 추가한다.

				if (data.buildingName !== '') {

					extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);

				}

				// 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.

				fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');

			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다.

			//                document.getElementById('zipcode').value = data.zonecode; //5자리 새우편번호 사용

			document.getElementById('addr1').value = fullAddr;

			// 커서를 상세주소 필드로 이동한다.

			//                document.getElementById('addr2').focus();

		}

	}).open();

}
//드랍다운 열기 
window.onload = function() {
	$('.ui.dropdown').dropdown();
};
//jsp시작 
$(document).ready(function() {

	// fix main menu to page on passing
	$('.main.menu').visibility({
		type: 'fixed'
	});
	$('.overlay').visibility({
		type: 'fixed',
		offset: 80
	});

	// lazy load images
	$('.image').visibility({
		type: 'image',
		transition: 'vertical flip in',
		duration: 500
	});

	// show dropdown on hover
	$('.main.menu  .ui.dropdown').dropdown({
		on: 'hover'
	});
	$('#professorexample').DataTable({
		aaSorting: [],
		deferRender: true,
		scrollY: 400,
		scrollCollapse: true,
		scroller: true
	})
	$('#departmentexample').DataTable({
		aaSorting: [],
		deferRender: true,
		scrollY: 400,
		scrollCollapse: true,
		scroller: true
	});
	$(document).on('click', '#professorexample td #deletebtn', function() {

		var row = $(this).closest('tr');
		var td = row.children();
		var professor_no = td.eq(0).text();

		$('.ui.modal.delete').modal('show');

		$('#deleteok').on('click', function() {
			$.ajax({
				type: 'POST',
				data: { Professor_No: professor_no },
				datatype: 'json',
				url: 'professorDeleteAjax',
				success: function(data) {
					if (data == "y") {
						row.remove();
						$('#resultmessage').text("삭제 되었습니다.");
					} else {
						$('#resultmessage').text("삭제 되지 않았습니다.");
					}

					$('#successmessage').css('display', "block").delay(1200).queue(function() {
						$('#successmessage').css('display', "none").dequeue();
					});
					$('.ui.modal.delete').modal('hide');
				},
				error: function(xhr, status, error) {
					alert('ajax error' + xhr.status);
				}
			});

		});
		$('#deletecancel').on('click', function(){
			$('.ui.modal.delete').modal('hide')
		});

	});
	$('.professorConfirm').on('click', function() {
		var professor_no = $('#professor_no').val();
		if (professor_no == "") {
			$('.description').text("교수번호를 입력하세요");
			$('.professrConfirmyy').modal('show');
			return;
		} else {
			var professor_no = professor_no;
			$.ajax({
				type: 'POST',
				data: "professor_no=" + professor_no,
				datatype: 'json',
				url: 'Professor_NoConfirmAjax',
				success: function(data) {
					var msg = "";
					if (data == "y") {
						msg = "사용중인 번호입니다!";
						$('.confirmyn').val('n');
						$('.description').text(msg);
						$('.professrConfirmyy').modal('show');
						$('#professor_no').val('');
						$('#professor_no').focus();
					} else {
						$('.confirmyn').val('y');
						msg = "사용 가능한 번호입니다."
						$('.description').text(msg);
						$('.professrConfirmyy').modal('show');
					}

				},
				error: function(xhr, status, error) {
					alert('ajax error' + xhr.status);
				}
			});

		}

		$('.ui.black.deny.button').modal('hide');

	});
	$('#departmentExample').DataTable({
		aaSorting: [],
		deferRender: true,
		scrollY: 400,
		scrollCollapse: true,
		scroller: true
	})
	$('#classproExample').DataTable({
		aaSorting: [],
		deferRender: true,
		scrollY: 400,
		scrollCollapse: true,
		scroller: true
	});
	$('.bbtn').on('click', function() {
		$('.ui.department.search.tiny.modal').modal('show');
	});
	$("#departmentExample").on('click', '#departmentSelect', 'td', function() {
		var row = $(this).closest('tr');
		var td = row.children();
		var departmentNum = td.eq(0).text();
		var departmentName = td.eq(1).text();

		$('#department_name').val(departmentName);
		$('#department_no').val(departmentNum);
		$('#departmentModalInput').val(departmentName);
	});
	$('.ctn').on('click', function() {
		$('.ui.classyo.search.tiny.modal').modal('show');
	});
	$("#classproExample").on('click', '#classSelect', 'td', function() {
		var row = $(this).closest('tr');
		var td = row.children();
		var classnum = td.eq(0).text();
		var pronum = td.eq(1).text();
		$('#class_no').val(classnum);
		$('#professor_no').val(pronum);
		$('#proModalInput').val(classnum);
	});
	$('.deletebro').on('click', function() {

		$(".ui.small.modal.tbprodelete").modal('show');

	});
	$('#tbprobtnok').on('click', function() {
		$("#tbform").attr("action", "classProfessorlist");
		$("#tbform").submit();
	});
	$('#classnoExample').DataTable({
		aaSorting: [],
		deferRender: true,
		scrollY: 400,
		scrollCollapse: true,
		scroller: true
	});
	$('.tbproconfig').on('click', function() {
		$('.ui.classyo.search.tinyabc.modal').modal('show');
	});
	$("#classnoExample").on('click', '#classnoSelect', 'td', function() {
		var row = $(this).closest('tr');
		var td = row.children();
		var classNum = td.eq(0).text();
		var className = td.eq(1).text();

		$('#class_no').val(classNum);
		$('#classnnModalInput').val(classNum);
	});
	$('.promodify').on('click', function() {
		$("#tbform").attr("action", "professorUpdateSave");
		$(".ui.small.modal.professrModify").modal('show').delay(900).queue(function() {
			$(".ui.small.modal.professrModify").modal('hide');
			$("#tbform").submit();
		});


	});
	$('.deaprtno').on('click', function() {
		var class_no = $('#class_no').val();
		var professor_no = $('#professor_no').val();
		if (class_no == "") {
			$('.description').text("강의번호를 입력하세요");
			$('.professrClassNoabcConfirmyy').modal('show');
			return;
		} else {
			$.ajax({
				type: 'POST',
				data: { class_no: class_no, professor_no: professor_no },
				datatype: 'json',
				url: 'Professor_classConfirmAjax',
				success: function(data) {
					var msg = "";
					if (data == "y") {
						msg = "사용중인 번호입니다!";
						$('.description').text(msg);
						$('.professrClassNoabcConfirmyy').modal('show');
						$('#class_no').val('');
						$('#class_no').focus();
					} else {
						msg = "사용가능한번호입니다."
						$('.description').text(msg);
						$('.professrClassNoabcConfirmyy').modal('show');
					}

				},
				error: function(xhr, status, error) {
					alert('ajax error' + xhr.status);
				}
			});

		}

		$('.ui.black.deny.button').modal('hide');

	});
	$('.classdelete').on('click', function() {
		$('.ui.modal.classnoDelete').modal('show')

	});
	$('#classnodeleteokbutton').on('click', function() {
		var class_no = $('#class_no').val();
		if (class_no == "") {
			$('.ui.modal.classnoDelete').modal('hide');
			$('.ui.modal.classnoselectb').modal('show').delay(950).queue(function(){
				$('.ui.modal.classnoselectb').modal('hide')
			})
		} else {
			$("#deleteclassnoform").attr("action", "professorclassdelete");
			$("#deleteclassnoform").submit();
		}
		
	});
	$('#ClassNoDeleteButton').on('click', function() {
		$('.ui.modal.classnoDelete').modal('hide')
	});
	
	$('.professordeletebtn').on('click',function(){
		var class_no = $('#class_no').val();
		var professor_no = $('#professor_no').val();
		 
		if(class_no == "") {
			document.location.href = "professorDelete?professor_no=" + professor_no;
		} 
	});
	
	

});
