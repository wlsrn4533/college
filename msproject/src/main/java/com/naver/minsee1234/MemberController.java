//package com.naver.minsee1234;
//
//import javax.servlet.http.HttpSession;
//
//import org.apache.ibatis.session.SqlSession;
//import org.mindrot.jbcrypt.BCrypt;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//import com.naver.minsee1234.dao.MemberDao;
//import com.naver.minsee1234.entities.Member;
//
//@Controller
//public class MemberController {
//	@Autowired
//	private SqlSession sqlSession;
//
//	@Autowired
//	Member member;
//
//	@RequestMapping(value = "/logout", method = RequestMethod.GET)
//	public String logout(HttpSession session) {
//		session.invalidate();
//		return "redirect:index";
//
//	}
//
//	@RequestMapping(value = "/join", method = RequestMethod.GET)
//	public String join() {
//		return "member/member_insert";
//	}
//
//	@RequestMapping(value = "/memberinsertsave", method = RequestMethod.POST)
//	public String memberinsert(Model model, @ModelAttribute Member member) {
//		// getMapper는 인터페이스를 받아옴
//		MemberDao dao = sqlSession.getMapper(MemberDao.class);
//		// 사진
//		if (member.getPhoto() == null) {
//			member.setPhoto("/images/noimage.png");
//		}
//		// 비밀번호 암호화
//		String encodepassword = hashPassword(member.getPassword());
//		member.setPassword(encodepassword);
//
//		dao.insertRow(member);
//		return "member/member_insert";
//	}
//
//	@RequestMapping(value = "/loginUp", method = RequestMethod.POST)
//	public String loginUp(Model model, @ModelAttribute Member member, HttpSession session) {
//		MemberDao dao = sqlSession.getMapper(MemberDao.class);
//		Member data = dao.selectOne(member.getEmail());
//		if (data == null) {
//			return "login/login";
//		} else {
//			boolean passchk = BCrypt.checkpw(member.getPassword(), data.getPassword());
//			if (passchk) {
//				session.setAttribute("sessionemail", data.getEmail());
//				session.setAttribute("sessionname", data.getName());
//				session.setAttribute("sessionphoto", data.getPhoto());
//				session.setAttribute("sessionlevel", data.getMemlevel());
//				return "index";
//			} else {
//				return "login/login";
//			}
//		}
//	}
//
//	private String hashPassword(String plainTextPassword) {
//		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
//	}
//
//	@RequestMapping(value = "/login", method = RequestMethod.GET)
//	public String login() {
//		return "login/login";
//	}
//
//}
