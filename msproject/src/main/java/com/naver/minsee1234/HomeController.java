package com.naver.minsee1234;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {


	@RequestMapping(value = "/index")
	public String index(Model model) {
		model.addAttribute("message", "thymeleaf  message");
		return "index";
	}
}
