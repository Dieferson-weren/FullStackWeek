package com.fullstack.week.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.week.domain.Pessoa;
import com.fullstack.week.repository.PessoaRepository;

@RestController
@RequestMapping(value = "/pessoas")
@CrossOrigin(origins = {"*"})
public class PessoaResource {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@GetMapping
	public List<Pessoa> listarTodos(){
		return pessoaRepository.findAll();
	}
	
	@GetMapping(value = "/{codigo}")
	public Optional<Pessoa> listarPorId(@PathVariable Long codigo) {
		return pessoaRepository.findById(codigo);
	}
	
	@PostMapping
	public Pessoa cadastrarPessoa(@RequestBody Pessoa pessoa) {
		Pessoa pessoaCadastrada = pessoaRepository.save(pessoa);
		pessoaCadastrada.setIsVacine(false);
		return pessoaRepository.save(pessoaCadastrada);
	}
	
	@PutMapping(value = "/{codigo}")
	public Pessoa atualizarPessoa(@PathVariable("codigo") Long codigo, @RequestBody Pessoa pessoa) {
		return pessoaRepository.findById(codigo).map(record -> {
			record.setCpf(pessoa.getCpf());
			record.setNome(pessoa.getNome());
			record.setEmail(pessoa.getEmail());
			record.setDataNasc(pessoa.getDataNasc());
			record.setIdade(pessoa.getIdade());
			record.setTelefone(pessoa.getTelefone());
			record.setIsVacine(pessoa.getIsVacine());
			return pessoaRepository.save(record);
		}).orElse(null);
	}
}
