package com.naver.minsee1234.dao;

import com.naver.minsee1234.entities.Member;

public interface MemberDao {
	public int insertRow(Member member);
	
	public Member selectOne(String email);
}