package com.naver.minsee1234.dao;

import java.util.ArrayList;
import java.util.HashMap;

import com.naver.minsee1234.entities.Tb_classprofessor;

public interface Tb_classprofessorDao {
	public int insertRow(Tb_classprofessor classpro);

	public ArrayList<Tb_classprofessor> selectOne(String professor_no);

	public ArrayList<Tb_classprofessor> selectTwo(String class_no);

	public int selectClassPro(HashMap<String, String> classpro_no);

	public ArrayList<Tb_classprofessor> selectOne2(String professor_no);

	public ArrayList<Tb_classprofessor> selectAll() throws Exception;

	public int professordeleteAjax(String Professor_No) throws Exception;

	public int classnodeleteAjax(String class_no) throws Exception;

}