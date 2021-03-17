package com.naver.minsee1234.dao;

import java.util.ArrayList;

import com.naver.minsee1234.entities.Tb_class;

public interface Tb_classDao {
	public int insertRow(Tb_class clase);

	public Tb_class selectOne(String department_no);

	public Tb_class selecttwo(String class_no);

	public ArrayList<Tb_class> selectClass(String department_no);

	public ArrayList<Tb_class> selectAll() throws Exception;

	public int deleteAjax(String cass) throws Exception;
}