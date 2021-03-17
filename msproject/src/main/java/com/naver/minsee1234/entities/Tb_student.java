package com.naver.minsee1234.entities;

import java.sql.Date;

import org.springframework.stereotype.Component;

@Component
public class Tb_student {
	private String student_no;
	private String department_no;
	private String student_name;
	private String student_ssn;
	private String student_address;
	private Date entrance_date;
	private String absence_yn;
	private String coach_professor_no;

	public String getStudent_no() {
		return student_no;
	}

	public void setStudent_no(String student_no) {
		this.student_no = student_no;
	}

	public String getDepartment_no() {
		return department_no;
	}

	public void setDepartment_no(String department_no) {
		this.department_no = department_no;
	}

	public String getStudent_name() {
		return student_name;
	}

	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}

	public String getStudent_ssn() {
		return student_ssn;
	}

	public void setStudent_ssn(String student_ssn) {
		this.student_ssn = student_ssn;
	}

	public String getStudent_address() {
		return student_address;
	}

	public void setStudent_address(String student_address) {
		this.student_address = student_address;
	}

	public Date getEntrance_date() {
		return entrance_date;
	}

	public void setEntrance_date(Date entrance_date) {
		this.entrance_date = entrance_date;
	}

	public String getAbsence_yn() {
		return absence_yn;
	}

	public void setAbsence_yn(String absence_yn) {
		this.absence_yn = absence_yn;
	}

	public String getCoach_professor_No() {
		return coach_professor_no;
	}

	public void setCoach_professor_No(String coach_professor_No) {
		this.coach_professor_no = coach_professor_No;
	}

}
