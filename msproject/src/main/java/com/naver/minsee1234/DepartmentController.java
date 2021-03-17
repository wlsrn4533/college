package com.naver.minsee1234;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.naver.minsee1234.dao.Tb_departmentDao;
import com.naver.minsee1234.entities.Tb_department;

@Controller
public class DepartmentController {
	@Autowired
	private SqlSession sqlSession;
	@Autowired
	Tb_department tb_department;

	@RequestMapping(value = "/departmentList", method = RequestMethod.GET)
	public String departmentList(Model model, @ModelAttribute Tb_department tb_department) throws Exception {
		Tb_departmentDao dao = sqlSession.getMapper(Tb_departmentDao.class);
		ArrayList<Tb_department> departments = dao.selectAll();
		model.addAttribute("departments", departments);

		return "department/department_list";
	}
}
