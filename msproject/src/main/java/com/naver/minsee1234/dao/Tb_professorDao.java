package com.naver.minsee1234.dao;

import java.util.ArrayList;

import com.naver.minsee1234.entities.Tb_professor;

public interface Tb_professorDao {
	public int insertRow(Tb_professor professor);

	public Tb_professor selectOne(String professor_no);

	public ArrayList<Tb_professor> selectAll() throws Exception;

	public int updateRow(Tb_professor professor) throws Exception;

	public int deleteAjax(String Professor_No) throws Exception;

	public void deleteOne(Tb_professor professor);
}