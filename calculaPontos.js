

	function calculaPontos(){
		var todasPessoas= document.getElementsByClassName("pessoa");
		for(var i =0; i<todasPessoas.length; i++){
			
			var pessoaAtual = todasPessoas[i];			
			var esgPessoa = pessoaAtual.getElementsByClassName("info-esg")[0];
			var natPessoa = pessoaAtual.getElementsByClassName("info-nat")[0];
			var hipPessoa = pessoaAtual.getElementsByClassName("info-hip")[0];
			var tiroPessoa = pessoaAtual.getElementsByClassName("info-tiro")[0];
			var corPessoa = pessoaAtual.getElementsByClassName("info-cor")[0];
			var pfPessoa = pessoaAtual.getElementsByClassName("info-pf")[0];
			var situacaoPessoa = pessoaAtual.getElementsByClassName("info-situacao")[0];
			
			var pessoa ={
			 esg : parseFloat(esgPessoa.textContent),
			 nat : parseFloat(natPessoa.textContent),
			 hip : parseFloat(hipPessoa.textContent),
			 tiro : parseFloat(tiroPessoa.textContent),
			 cor : parseFloat(corPessoa.textContent),
			  pegaPF :
						function(){  //funcao anonima
								var pf = (this.esg + this.nat + this.hip + this.tiro + this.cor).toFixed(2);			
								return pf; },								
	
	calculaSituacao:
						function(){
						var pfPessoa = pf;
						var resultado ="";
							if(pfPessoa <=800){
							resultado = "Muito ruim.";
							}
							else if(pfPessoa <=1000){
							resultado = "Ruim.";
							}
							else if(pfPessoa <=1300){
							resultado = "Normal.";
							}
							else if(pfPessoa <=1600){
							resultado = "Bom.";
							}
							else if(pfPessoa <=2400){
							resultado = "Muito bom.";
							}
							else{
							resultado = "Excepcional!";
							}
							return resultado;
						}
								
			 }
			 var pf = pessoa.pegaPF();
			 pfPessoa.textContent = pf;
			 
			var situacao = pessoa.calculaSituacao();
			 situacaoPessoa.textContent = situacao;	 
			 
		}
	}
	
	
	var botao = document.getElementById("calcula-pf");
	botao.addEventListener("click",calculaPontos);