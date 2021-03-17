package com.naver.minsee1234;
//package com.naver.minsee1234;
//package com.naver.minsee1234;
//
//import java.util.ArrayList;
//
//import org.apache.ibatis.session.SqlSession;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import com.naver.minsee1234.dao.Tb_classDao;
//import com.naver.minsee1234.entities.Tb_class;
//import com.naver.minsee1234.entities.Tb_class_professor;
//import com.naver.minsee1234.entities.Tb_department;
//import com.naver.minsee1234.entities.Tb_professor;
//
//@Controller
//public class ClassController {
//
//	@Autowired
//	private SqlSession sqlSession;
//	@Autowired
//	Tb_department tb_department;
//
//	/*               */
//	/* 관리자용 강의 페이지 */
//	/*               */
//	@RequestMapping(value = "/classCancel")
//	public String classCancel() {
//		return "index";
//	}
//
//	@RequestMapping(value = "/classInsert")
//	public String classInsert(Model model) {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		ArrayList<Tb_department> departments = dao.departmentSelectAll();
//		model.addAttribute("departments", departments);
//		ArrayList<Tb_professor> professors = dao.professorSelectAll();
//		model.addAttribute("professors", professors);
//		return "class/class_insert";
//	}
//
//	@RequestMapping(value = "/classAdminListGo")
//	public String classAdminListGo(Model model) {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		ArrayList<Tb_class> classtbs = dao.selectAll();
//		model.addAttribute("classtbs", classtbs);
//
//		return "class/classAdminList";
//	}
//
//	@RequestMapping(value = "/classDeleteAjax", method = RequestMethod.POST)
//	@ResponseBody
//	public String classDeleteAjax(@RequestParam String class_no) throws Exception {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		int professorResult = dao.professorDeleteAjax(class_no);
//		int result = dao.deleteAjax(class_no);
//		if (result > 0 && professorResult > 0) {
//			return "y";
//		} else {
//			return "n.";
//		}
//	}
//
//	@RequestMapping(value = "/classInsertSave")
//	public String classInsertSave(@ModelAttribute Tb_class tb_class,
//			@ModelAttribute Tb_class_professor tb_class_professor) {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		dao.insertRow(tb_class);
//		dao.professorInsertRow(tb_class_professor);
//		return "index";
//	}
//
//	@RequestMapping(value = "/classNumConfirmAjax", method = RequestMethod.POST)
//	@ResponseBody
//	public String classNumConfirmAjax(@RequestParam String class_no) throws Exception {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		Tb_class data = dao.selectOne(class_no);
//		String row = "y";
//		if (data == null) {
//			row = "n";
//		}
//		return row;
//	}
//
//	@RequestMapping(value = "/classAdminUpdateGo")
//	public String classAdminUpdateGo(Model model, @RequestParam String class_no) {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		Tb_class classtb = dao.selectOne(class_no);
//		model.addAttribute("classtb", classtb);
//
//		// 학과검색
//		ArrayList<Tb_department> departments = dao.departmentSelectAll();
//		model.addAttribute("departments", departments);
//		ArrayList<Tb_professor> professors = dao.professorSelectAll();
//		model.addAttribute("professors", professors);
//		return "class/class_update";
//	}
//
//	@RequestMapping(value = "/classUpdateSave")
//	public String classUpdateSave(@ModelAttribute Tb_class tb_class) throws Exception {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		dao.updateRow(tb_class);
//		return "redirect:classAdminListGo";
//
//	}
//	/*                   */
//	/* 관리자용 강의 페이지 end */
//	/*                   */
//
//	/*              */
//	/* 학생용 강의 페이지 */
//	/*              */
//
//	@RequestMapping(value = "/classSearchListGo")
//	public String classSearchListGo(Model model) {
//		Tb_classDao dao = sqlSession.getMapper(Tb_classDao.class);
//		ArrayList<Tb_department> departments = dao.departmentSelectAll();
//		model.addAttribute("departments", departments);
//		return "class/class_search_list";
//	}
//
//}
