package com.fullstack.week.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.week.domain.GrupoPrioridade;
import com.fullstack.week.repository.GrupoPrioridadeRepository;

@RestController
@RequestMapping(value = "grupos")
public class GrupoPrioridadeResource {
	
	@Autowired
	private GrupoPrioridadeRepository grupo;
	
	@GetMapping
	public List<GrupoPrioridade> listarTodos(){
		return grupo.findAll();
	}
	
	@GetMapping("{codigo}")
	public GrupoPrioridade buscarPeloCodigo(@PathVariable Long codigo) {
		return grupo.findById(codigo).orElse(null);
	}
	
}
