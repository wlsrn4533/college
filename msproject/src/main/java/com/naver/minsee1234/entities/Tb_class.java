package com.naver.minsee1234.entities;

import org.springframework.stereotype.Component;

@Component
public class Tb_class {
	private String class_no;
	private String department_no;
	private String preattending_class_no;
	private String class_name;
	private String class_type;
	private int credit;

	public String getClass_no() {
		return class_no;
	}

	public void setClass_no(String class_no) {
		this.class_no = class_no;
	}

	public String getDepartment_no() {
		return department_no;
	}

	public void setDepartment_no(String department_no) {
		this.department_no = department_no;
	}

	public String getPreattending_class_no() {
		return preattending_class_no;
	}

	public void setPreattending_class_no(String preattending_class_no) {
		this.preattending_class_no = preattending_class_no;
	}

	public String getClass_name() {
		return class_name;
	}

	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}

	public String getClass_type() {
		return class_type;
	}

	public void setClass_type(String class_type) {
		this.class_type = class_type;
	}

	public int getCredit() {
		return credit;
	}

	public void setCredit(int credit) {
		this.credit = credit;
	}

}
