package com.fullstack.week.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.week.domain.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

}
