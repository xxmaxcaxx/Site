var botao = document.querySelector("#adicionar-pessoa");
botao.addEventListener("click", function(event){										
								
										event.preventDefault();
										
										var campoNome = document.querySelector("#nome");
										var campoEsgrima = document.querySelector("#esg");
										var campoNatacao = document.querySelector("#nat");
										var campoHipismo = document.querySelector("#hip");
										var campoTiro = document.querySelector("#tiro");
										var campoCorrida = document.querySelector("#cor");
										
										//verificando se algum campo está vazio  só fazer se der tempo e no fim
										var total=0;
										var campo = document.querySelectorAll("input");
										for(var i=0;i<campo.length;i++){
											if (campo[i].value == ""){
											total++;}
										}
									
									if (total ==0){
										var pessoaNova = "<tr class='pessoa'>"+
										"<td class='info-nome'>"+ campoNome.value +"</td>"+
										"<td class='info-esg' id='esg-4'>"+ campoEsgrima.value +"</td>"+
										"<td class='info-nat' id='nat-4'>"+ campoNatacao.value +"</td>"+
										"<td class='info-hip' id='hip-4'>"+ campoHipismo.value +"</td>"+
										"<td class='info-tiro' id='tiro-4'>"+ campoTiro.value +"</td>"+
										"<td class='info-cor' id='cor-4'>"+ campoCorrida.value +"</td>"+
										"<td class='info-pf' id='pf-4'>"+
										"<td class='info-situacao' id='forca-4'></td>"+
										"</tr>"
										
										
										var tabela = document.querySelector("table"); 										
										tabela.innerHTML = tabela.innerHTML + pessoaNova;
										
										
										//limpando os campos
										campoNome.value="";
										campoEsgrima.value=""; 
										campoNatacao.value=""; 
										campoHipismo.value=""; 
										campoTiro.value=""; 
										campoCorrida.value=""; 
										
										}
										else{
														alert("Algum campo está vazio....");
										}
										});