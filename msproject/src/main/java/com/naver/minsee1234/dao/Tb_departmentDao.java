package com.naver.minsee1234.dao;

import java.util.ArrayList;

import com.naver.minsee1234.entities.Tb_department;

public interface Tb_departmentDao {
	public int insertRow(Tb_department department);

	public Tb_department selectOne(String Department_No);

	public ArrayList<Tb_department> selectAll() throws Exception;

	public int updateRow(Tb_department department) throws Exception;
}