function printa(){
	let nome = "<h1 style='color: blue;'>CFB Cursos</h1> ";
	let ano = 2017;
	let numero = 7;
	let texto = nome + "<br />" + ano + numero + "<br />";
	let texto_soma = nome + "<br />" + (ano + numero);
	document.write("se ouver alguma string no conjunto da variavel toda a variavel se torma uma string");
	document.write(texto + "<br />");
	document.write("para passar para inteiro deve colocar () ex: (ano + numero)");
	document.write(texto_soma);
}
//printa();
//const e uma variavel com valor fixo, que não pode ser alterado
//variavel declarada com var fica global, let e declarada dentro do escopo apenas

function alerta(){
	let curso = "Curso CFB";
	let ano = 2017;
	//segunda string no prompt seta valor padrão 
	let nome = prompt("Digite seu nome: ", "Bruno")
	document.write("<br>" + nome);
	//alert(curso + "\n" + ano);
}
//prompt caixa de interação com o usuario
//alerta();

function confirma(){
	let com = confirm("deseja continuar?");
	if(com == true){
		document.write("Vamos continuar")
	}else{
		document.write("Paramos por aque")
	}
}
//retorna True se clicado em ok e False se clicado em cancel
//confirma();

function operadoresLogicos(){
	let num = 60
	let num2 = 50
	if(num > num2 && num == 60){
		//&& => e 
		document.write("todas as condições são verdadeiras &&")
	}
	if(num < num2 || num > num2){
		// || => ou
		document.write("uma das condições e verdadeira ||")
	}

	if(((num >= 30) && (num <= 40)) || ((num >= 42)&&(num <= 70))){
		document.write("uma das codições separadas por || foi verdadeira")
	}
}
//operadoresLogicos();

function multiIf(){
	let nota = 50;
	if(nota >= 60){
		document.write("Aprovado")
	}else if((nota >= 40) && (nota < 60)){
		document.write("Recuperação")
	}else{
		document.write("Reprovado")
	}
}
//multiIf();

function casos(){
	var pos, msg, pontos;
	pontos = 300;
	if(pontos >= 1000){
		pos = 1;
	}else if(pontos >= 800){
		pos = 2;
	}else if(pontos >= 600){
		pos = 3;
	}else{
		pos = 0;
	}
	switch(pos){
		case 1://caso pos retorn 1 execute:
			msg = "Primeiro lugar<br />Medalha de ouro";
			break
		case 2://caso pos retorn 2 execute:
			msg = "Segundo lugar<br />Medalha de prata";
			break
		case 3:
			msg = "Terceiro Lugar<br />Medalha de bronse";
			break
		default://caso contrario execute:
			msg = "não recebera medalha";
	}
	switch(pos){
		case 1:
		case 2:
		case 3://caso pos retorn 1 2 ou 3 execute:
			msg += "<br />Subiu ao podio";
			break
		default://caso contrario execute:
			msg += "<br />Não subiu ao podio";
	}

	document.write(msg);	
}
//casos();

function array(){
	let cor, pessoa, lista, pos;
	cor = [];
	pessoa = ["joão","jose","maria","joana","rafael"];

	cor.push("amarelo"); //push adiciona o elemento no final do array
	cor.push("vermelho");
	cor.push("azul");
	cor.unshift("verde"); //unshift adiciona elemento no inicio do array
	cor.pop(); //pop remove ultimo elemento do array no caso o "azul"
	cor.shift(); //shift remove o primeiro elemento no caso o "verde"
	cor.splice(0,1); //remover elementos do array cor.splice(0, 1) remove o amarelo por causa do unshit e shift
	//splice(posi inic, qtd de elementos)
	pos = cor.indexOf("vermelho") //procurar elemento dentro do array cor.indexOf("vermelho") retorna a posição do elemento no array
	//se elemento não estiver no array retorna -1 
	cores = cor.join(); //join transforma o array em string
	lista = cor.concat(pessoa); //lista recebe a junção do array cor com o array pessoa
	tamanho = lista.length;
	cor.sort(function(a,b){return a - b});//sort ordena array do menor pra o maior cor.sort(function(a,b){return a - b})
	
	//reverse ordena array do maior para o menor cor.reverse()	

	document.write("<br />" + "tamanho da lista: " + tamanho);
	document.write("<br />" + lista);
	document.write("<br />" + cores);
	document.write("<br />" + cor);
	document.write("<br />" + cor[0]);
}
//array();

function matriz(){
	let mochila = [];
	//				 0	1				1  1			   2  1				   3   1		
	let item1= ["corda",1], item2= ["faca",2], item3= ["cura",5], item4= ["prego",50];

	mochila.push(item1);//adiciona o elemento item1 ao array mochila
	mochila.push(item2);//adiciona o elemento item2 ao array mochila
	mochila.push(item3);
	mochila.push(item4);

	document.write(mochila[0][0] + " - " + mochila[0][1] + "<br />")
	document.write(mochila[1][0] + " - " + mochila[1][1] + "<br />")
	document.write(mochila[2][0] + " - " + mochila[2][1] + "<br />")
	document.write(mochila[3][0] + " - " + mochila[3][1] + "<br />")
}
//matriz()

function encremento(){
	let num;
	num = 10;num = num + 1;++num;//encrementa antes da leitura da variavel;
	num++;//encrementa depois da leitura da variavel num++;
	num += 2;num -= 2;num *= 2;
	num *= -1;//passa o numero para negativo, -num altera somente no momento em que foi usada 
} 
//encremento();

function repetcao(){
	let lista = [["corda", 3],["faca",1],["chinelo",2],["prego",50]];
	//percorre as linhas
	for(let t=0;t<lista.length;t++){
		//percorre as colunas
		for(let c=0;c<2;c++){
			document.write(lista[t][c] + " ");
		}
		document.write("<br />");
	}
	let num = 0;
	while(num < 10){
		document.while(num + " ");
		num++;
	}
	do{
		document.white("Executa o (do) mesmo a condição sendo falsa");
	}while(num == 1){
		document.white("não executa por causa da condição ser falsa");
	}

}
//repetcao();

function trataErro(){
	let num = 10;
	//tente
	try{
		num = prompt("Digite um valor");
		if(num > 10){
			throw new Error("Valor invalido");
		}
	//caso der erro armazene o erro na variavel (e) e execute esses comandos  
	}catch(e){
		document.write("Motivo do erro: " + e.message);
	//finally vai ser executado dando erro ou não
	}finally{
		document.write("Fim do tratamento");
	}
}
//trataErro();

function manipulaTexto(){
	let texto = document.getElementById('nome').style;//seleciona o elemento HTML com id nome e seta o style 
	texto.color="blue";//altera a cor
	texto.fontSize="40px";//altera a fonte

	let ctx=document.getElementById('texto').value="Bruno";//seta o value do elemento HTML com id (texto) como bruno 
	let tex=document.getElementById('nome').innerHTML="Aula de innerHTML";//altera o conteudo html que esta dentro do elemento id (nome)

	let tag2 = document.getElementsByTagName('*');//seleciona todas as tags apartir da tag html
	tag2[8].style.color="blue";//altera a cor do elemento na posição 8 do array tag2
	tag2[7].innerHTML="Novo texto";	//altera o conteudo HTML que esta na posição 7 do array tag2
	let tag = document.getElementsByTagName('p');//seleciona todas as tags P 
	for(var i=0;i<tag.length;i++){//percorre todos as tags P dentro do html
		tag[i].style.color="red";//altera a cor do elemento que esta na posição i dentro do array tag
	}

	let qc = document.querySelectorAll('p.titulo, h3');//seleciona todas as tags P com classe (titulo) ou com tag h3
	for(var i=0;i<qc.length;i++){

		document.write("<br />" + qc[i].innerHTML);
	}

	let qcd = document.querySelectorAll("div > p");//todas as tags P que estiverem dentro de DIV
	for(var i=0;i<qcd.length;i++){
		qcd[i].style.color="green";
	}
}
//manipulaTexto();

function manipulaForm(){
	/*
	let fm = document.forms[0].id;
	let fm = document.forms.item(0).id;
	let fm = document.forms.namedItem("curso1").id;
	let fm = document.forms.namedItem("curso1").innerHTML;
	let fm = document.forms["curso1"].elements[0].value; conta apenas os inputs 
	*/
	document.write(fm);
}
//manipulaForm();

function data(){
	var data = new Date(); //Date() retorna a data completa com horario
//getDay()getDate()getMonth()getFullYear()getHours()getMinutes()getSeconds()toDateString()toLocaleString()
	document.write(data);
}
//data();

function Matematica(){
	var valor = 10;
	Math.PI;
	Math.abs(valor);//valor absoluto	
	Math.ceil(valor);//arredonda para cima
	Math.floor(valor);//arredonda pra baixo	 
	Math.round(valor);//arrendonda pela decimal
	Math.pow(valor, 2);//elevação (valor elevado a 2) 2*2 3*2

}	
//Matematica();

function arrowFunction(){
	const mostraSegundo = () => new Date().getSeconds();//sem parametros
	const palavra = frase => frase.split(' ').length;//com 1 parametro
	const soma = (num1, num2) => num1 + num2;//com 2 parametros
	const objetoUsuario = (id, nome) => ({id: id, nome: nome});//objeto  	
}
//arrowFunction();

function funcao(palavra){
	document.write(palavra);
}
//funcao("jose");

var cor = "vermelho"; //inicialiou a variavel cor com vermelho
function escopo(){
	var cor = "azul"; // usando o var antes da variavel, so altera ela dentro do escopo {}
	//nesse caso fora da função a variavel cor continua sendo vermelho 
	document.write(cor + "<br>");
	//usando o this. pega a variavel global no caso a variavel cor agora e vermelho
	document.write(this.cor + "<br>");
}
//escopo();

function funcao(){
	function mudaCor(obj,cor){
		obj.style.backgroundColor=cor;
	}
}
//funcao();

function setas(){
	var px = 0;//x = posição horizontal	(esquerda, direita)
	var py = 0;//y = posição vertical (cima, baixo)
	var obj;
	function move(event){
		//37-esquerda 38-cima 39-direita 40-baixo
		var tecla = event.keyCode;//keyCode (codigo da tecla precionada)
		if(tecla==37){
			px -= 10;//posição x vai mover 10 pixels
			obj.style.left=px+"px";//movimento por CSS
		}else if(tecla == 38){
			py -=10;//posição y vai mover 10 pixels
			obj.style.top=py+"px";//movimento por CSS
		}else if(tecla == 39){		
			px +=10;//posição x vai mover 10 pixels
			obj.style.left=px+"px";
		}else if(tecla == 40){		
			py +=10;
			obj.style.top=py+"px";
		}else if(tecla == 13){//tecla ENTER 
			obj.style.backgroundColor="#fff";//muda a cor
			alert("Evento keydown finalizado");//msg
			//remove o evento keydown e chama a função move 
			document.removeEventListener("keydown",move);
		}
	}
	function addClique(){//inicia o movimento
		//adiciona o evento keydown e chama função move 
		document.addEventListener("keydown",move);//keydown pega a tecla precionada
		obj.style.backgroundColor="#f00";//muda a cor
	}
	function iniciar(){
		obj=document.getElementById("dv1");//aponta para objeto com id dv1
		obj.addEventListener("click",addClique);//adiciona o evento keydown e chama função addClique
	}
	window.addEventListener("load",iniciar);//quando a pagina for totalmente carregada chama função iniciar
}
//setas();

function manipulaTempo(){
	var tmp;
	function mudaCor(){
		var obj = document.getElementById("dv2");
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
	}
	/*
	(callback,tempo) callback = função
	var tmp = setTimeout(mudaCor, 1000);//milisegundos 1s
	var tmp = setInterval(mudaCor, 1000);//chama função a cada 1s
	window.addEventListener("load",mudaCor);
	*/
	function iniciar(){
		tmp = setInterval(mudaCor,1000);//chama a função mudaCor a cada 1000 milisegundo (1s)
	}
	function parar(){
		clearInterval(tmp);//remove o intervalo no caso para de mudar a cor 
	}
	function ponta(){
		document.getElementById('bt1').addEventListener("click",iniciar);//ao clicar no botão id bt1 chame função iniciar
		document.getElementById('bt2').addEventListener("click",parar);//ao clicar no botao id bt2 chame função parar
	}
	window.addEventListener("load",ponta);// ao carregar a pagina chame a função ponta 
}
//manipulaTempo();

function movimento(){
	var dx=0;
	var dy=0;
	var px=0; 
	var py=0;
	var tmp;
	var vel=1;
	var obj;
	
	function iniciar(){
		obj = document.getElementById("dv3");
		document.addEventListener("keydown",teclaDw);//quando ocorrer o evento de keydown chame a função teclaDw
		document.addEventListener("keyup",teclaUp);//quando ocorrer o evento de keyup chame a função teclaUp
		tmp = setInterval(enterFrame,20);//chama a função enterFrame a cada 20 milesimos 
	}
	function teclaDw(){
		var tecla=event.keyCode;//keyCode pega a tecla precionada 
		if(tecla == 37){
			dx=-1;
		}else if (tecla == 38){
			dy=-1;
		}else if (tecla == 39){
			dx=1;
		}else if (tecla == 40){
			dy=1
		}
	}
	function teclaUp(){
		var tecla=event.keyCode;//evento que pega a tecla precionada 
		if(tecla == 37){
			dx=0;
		}else if (tecla == 38){
			dy=0;
		}else if (tecla == 39){
			dx=0;
		}else if (tecla == 40){
			dy=0;
		}
	}
	function enterFrame(){
		px=dx*vel;
		py=dy*vel;
		obj.style.left=px+"px";
		obj.style.top=py+"py";
	}
	window.addEventListener("load",iniciar);
}
//movimento();

function relogioDigital(){
	let data = new Date();
	let hora = data.getHours();
	let minuto = data.getMinutes();
	let segundo = data.getSeconds();

	if(hora<10){//se a hora for menor que 10 acrecente o 0 antes 
		hora="0"+hora;
	}
	if(minuto<10){
		minuto = "0"+minuto;
	}
	if(segundo<10){
		segundo="0"+segundo;
	}

	var tempo = hora+":"+minuto+":"+segundo;
	document.getElementById('relogio').innerHTML=tempo;
}
//let atualiza=setInterval(relogioDigital, 1000);

/*
function hrefImagem(){
	onclick="window.location.href='MegaSenaJS/MegaSena.html';"
}*/
function frameAnimacao(){
	var anima;
	var dx;
	var dy;
	var px;
	var py;
	var vel;
	var jog;
	var estado;
	function inicia(){
		vel=5;
		dx=1;
		dy=0;
		px=0;
		py=0;
		jog=document.getElementById("jogador");//seleciona a div id (jogador)
		ini=document.getElementById("inicia").addEventListener("click",game);//quando clicar no botão com id (inicia) chame a func (game)
		para=document.getElementById("parar").addEventListener("click",function(){cancelAnimationFrame(anima);});//quando clicado cancele		
	}
	function game(){
		px+=(dx*vel);//seta a posição x com o resultado da multiplicação
		jog.style.left=px+"px";//adiciona o valor de px ao left 		
		if(px > 1000){//confere se a posição da div na tela e maior que 1000
			dx=-1 //se for decremente 
		}else if(px < 0){
			dx=1;
		}
		anima=requestAnimationFrame(game);//recursividade, chama a função game entrando em loop  
	}
	window.addEventListener("load",inicia);//quando a pagina for carregada chame a função (inicia)
}
//frameAnimacao();

function recursividade(){
	var obj=document.getElementById("quad");//aponta para o elemento com id (quad)
	var angulo=0;//o valor do angulo inicial
	var anima;
	function gira(){
		obj.style.transform="rotate("+angulo+"deg)";//faz a rotação com o valor passado em angulo
		angulo+=2;//encrementa em 2 o angulo em cada interação
		if(angulo > 360){angulo=0;}//confere se o angulo ta em 360
		anima=requestAnimationFrame(gira);//recursividade loop de chamada da função
	}
	gira();
}
//recursividade();

function somaNotaFinal(){
	var tabela=document.getElementById("tabela");//seleciona o elemento com id(tabela)
	var nota;

	for(var i=1;i<tabela.rows.length;i++){//percorre as linhas da tabela
		nota=parseFloat(tabela.rows[i].cells[1].innerHTML)+parseFloat(tabela.rows[i].cells[2].innerHTML);
		//soma os valores que estão na mesma linha
		tabela.rows[i].cells[3].innerHTML=nota;//atribui o valor da soma a celula 3 
	}

	var resul=[];//array com os valores das celulas que estão nos id's
	resul[0]=document.getElementById("n1");
	resul[1]=document.getElementById("n2");
	resul[2]=document.getElementById("n3");
	resul[3]=document.getElementById("n4");
	for(var i=0;i<resul.length;i++){//enquanto i for menor que o tamanho do array resul
		if(resul[i].innerHTML<70){//percorre as posições do array e verifica se o valor e menor que 70  
			resul[i].style.color="red";//se verdade colora de vermelho
		}else{
			resul[i].style.color="blue";//se não colora de azul
		}
	}
}
//somaNotaFinal();

function alunoNotaDinamica(){
	var table=document.getElementById("table");//aponta para o elemento com id (table)
	var adiciona=document.getElementById("adiciona");//aponta para o elemento com id (adiciona)
	var aluno=1;
	var qtAluno=document.getElementById("qtAlunos").value;//aponta para o elemento com id (qtAlunos) e pega o value 
	function adc(){
		for(var i=0;i<qtAluno;i++){	//pega o valor do input e cria as linhas da tabela	
			table.innerHTML+='<tr><td>Al'+aluno+'</td><td><input type="text" id="v1" value=""></td><td><input type="text" id="v2" value=""></td><td><input type="text" id="resul"</td></tr>'
			aluno++;//adiciona +1 para cada interação 
		}
	}

	adiciona.addEventListener("click", adc);//ao clicar no botão chame a função adc

	nota1=document.getElementById("v1").value;//pega o valor do elemento com id v1
	nota2=document.getElementById("v2").value;//pega o valor do elemento com id v2

	//document.write(nota1+" "+nota2);
}
//alunoNotaDinamica();

function atoa(){
	var resultado;
	var row=document.getElementById('resultado');
	var valor1=document.getElementById('v1').value;
	var valor2=document.getElementById('v2').value;
	var botao=document.getElementById('resulta').addEventListener('click',function(){resultado=parseInt(valor1)+parseInt(valor2);row.value=resultado});
}
//atoa();
function slider(){
	var imgs=[];
	var slider;
	var imgAtual;
	var maxImg;
	var tmp;
	var tempoTroca=2000;

	function preCarregamento(){
		var s=1;
		for(var i=0;i<3;i++){//adiciona as imagens ao array imgs[]
			imgs[i]=new Image();
			//adicione a imagem que esta no caminho "" incrementando o S para pegar todas as imagens 
			imgs[i].src="imagem/imagem"+s+".png";
			s++;
		}
	}

	function carregaImg(img){
		//coloca a imagem passada pelo array imgs[] na posição img como background da div 
		slider.style.backgroundImage="url('"+imgs[img].src+"')";
	}

	function inicia(){
		preCarregamento();//chama a função para carregar as imagens 
		imgAtual=0;
		maxImg=imgs.length-1;
		slider=document.getElementById("dvslider");//aponta para a div id (dvslider)
		carregaImg(imgAtual);//chama a função passando imgAtual como posição no array imgs[] 
		tmp=setInterval(troca,tempoTroca);//faz a chamada da função troca para mudar a imagem 
	}

	function troca(){
		imgAtual++;//adiciona a cada interação 
		if(imgAtual>maxImg){//verifica se ja passou todas as imagens 
			imgAtual=0;
		}
		carregaImg(imgAtual);//chama novamente imgAtual para trocar a imagem
	}

	window.addEventListener("load",inicia);//quando a pagina for carregada chame a função inicia 
}
//slider();

function manipulaHtml(){
	var obj=document.getElementById("carro");//aponta para o elemento com id (carro)
	var bt1;var bt2; var bt3;var bt4;var bt5=document.getElementById('btn5');
	function trocaCarro(c){
		if(c==1){//se C for 1 
			obj.setAttribute("class","im1");//adicione o atributo class ao elemento id carro com a class .im1
		}else if(c==2){//se C for 2
			obj.setAttribute("class","im2");//adicione o atributo class ao elemento id carro com a class .im2
		}else if(c==3){//se C for 3
			obj.setAttribute("class","im3");//adicione o atributo class ao elemento id carro com a class .im3
		}
	}
	//ao clicar no elemento com id btn1++ chame a função que ira adicionar o atributo class 
	bt1=document.getElementById('btn1').addEventListener("click",function(){obj.setAttribute("class","im1")});
	bt2=document.getElementById('btn2').addEventListener("click",function(){obj.setAttribute("class","im2")});
	bt3=document.getElementById('btn3').addEventListener("click",function(){obj.setAttribute("class","im3")});
	//ao clicar no elemento com id btn4 chame a função que ira remover o atributo class do elemento obj
	bt4=document.getElementById('btn4').addEventListener("click",function(){obj.removeAttribute("class")});
	//ao clicar no elemento com id btn5 chame a função que ira verificar se o atrbituo class existe na tag 
	bt5.addEventListener("click",function(){if(obj.hasAttribute("class")){alert("atributo existe na tag")};});
}
//window.addEventListener("load",manipulaHtml);
//manipulaHtml();

function formataString(){
	var txt=document.getElementById("texto").innerHTML;//pega o conteudo do elemento com id (texto)
	var txt2="complementando a string com o metodo concat"
	var res=txt.match("aula");//verifica se a palavra existe dentro do conteudo do elemento 
	/*
	res.lenght mostra quantas veses foi encontrado a palavra; padrão(case-sensitive)
	txt.match(/aula/g)modificador g: encontar todas as ocorrencias sem parar na primeira
	txt.match(/aula/i)"" i: remove o case sensitive;  txt.match(/aula/gim) pode ser usado mais de um modifi
	txt.match(/aula/m)"" m: pesquisa normal mais não armazena em um array
	txt.match(/[oa]/ig) pesquisa a letra O e a letra A;
	txt.match(/[^oa]/ig) exlui a letra O e a letra A;
	txt.match(/[a-g]/ig) pesquisa todas as letras que estão entre A e G; 
	txt.match(/[*a-g]/ig) remove as letras entre A e G;
	txt.search(/cursos/i) retorna a posição inicial da palavra (cursos) no caso retorna 4
	txt.replace(/cursos/i,"aulas") troca a palavra (cursos) por (aula) para modificar todas usa modfi(g)
	txt.charAt(2) retorna string que esta na posição(2)
	txt.charCodeAt(11) retorna o codigo ASCII da string na posição 11
	String.fromCharCode(67) retorna a string que tem o codigo 67 retorna (C)
	txt.concat(txt2)
	txt.indexOf("J") procura a string passada(J) e retorna a posição, se não encontrar retorna -1
	txt.lastIndexOf("C") retorna a posição da ultima string(C) encontrada (case-sensitive)
	txt.localeCompare(txt) compara as strings, retorna 0 se forem iguais
	txt.slice(3,10) retorna a sting que começa na posição 3 e termina na posição 10
	txt.split(" ") armazena em um vetor todas as strings menos o (espaço " ")
	txt.substr(4,6) pega a posição inicial(4) e conta 6 posições apos a posição 4
	txt.toLowerCase() passa tudo para minusculo
	txt.toUpperCase() passa tudo para maiusculo
	txt.toString() converte para string toString(2)passa para binario (8)oct (16) hexa 
	txt.trim() remove o espaço do inicio e do fim da string
	"CFB Cursos - \"Curso\" de javascript" barra invertida para imprimir o caracter
	*/
	
	document.write(res);//se não encontrar a sting, retorna null
	document.write(res[0]);//armazena o resultado em um array e pega a string da posição 0
}
//formataString();

function janela(){
	/*
	"cfb" abre a nova pagina no elemento HTML com name='cfb'
	var minhaJanela = window.open("tmp.html","cfb","width=300,height=300"); abre uma nova janela 
	minhaJanela.close() fecha a janela
	window.innerWidth pega a largura da janela sem contar a barra da rolagem
	window.innerHeight pega a altura da janela       ""
	window.screenX pega a posição horizontal da janela em relação a tela do pc começando do left
	window.screenY pega a posição vertical da janela         ""  começando do top
	window.scrollBy(x,y) rola o scroll da janela x = total de pixels na horizontal y = vertical
	var qtde=window.length; conta quantos iFrames tem no HTML
	window.frames[0].location="http://cfbcursos.com.br" exibi a pagina no frame que esta na posição 0
	parent.document.body.style.backgroundColor='#f00'; muda a cor do body na pagina Pãe raiz;
	*/
}
//janela();

function navegador(){
	/*
	navigator.appName; pega o nome do browser usado no momento 
		"".appVersion; pega a versão atual do browser
		"".cookieEnabled; verifica se o cookie esta habilitado
		function localizar(pos){
			var cordenadas=pos.coords; pega as cordenadas para localizar
			painel.innerHTML+="latitude "+cordenadas.latitude+" longitude "+cordenadas.longitude; 
		}
		"".geolocation; retorna o objeto 
		"".geolocation.CurrentPosition(localizar,"segunda função caso der erro","");   
		"".language; retorna a linguagem utilizada no browser
		"".onLine; retorna se o browser esta online 
		"".platform; retorna o S.O usado 
		"".product;	retorna a engine usada no browser 
		"".userAgent; retorna o agente usado (browser, "Mozilla/5.0 (Windows NT 10.0 ....")
	*/
}
//navegador();

function infoResolucaoTela(){
	/*
	screen.width; retorna a largura da tela (px)
	screen.height; retorna a altura da tela (px)
	screen.availWidth; retorna a largura disponivel (para utilização, remova as barras...)
	screen.availHeight; retorna a altura disponivel (para utilização, remove as barras...)
	screen.colorDepth; profundidade de cores para imagens em bits 
	screen.pixelDepth; retorna a info da resolução da tela por pixel em bits
	*/
}
//infoResolucaoTela();

function historico(){
	/*
	history.length; retorna total de paginas clicadas
	window.history.back(); volta para a pagina anterior (botão do browser para retornar a pagina anterior)
	window.history.forward(); avança para a proxima paginas(botão do browser para avança a proxima pagina)
	window.history.go(-2); volta pulando 2 paginas ,(2) avança 2 paginas a frente
	*/
}
//historico();

function manipulaUrl(){
	/*
	location.hash; retorna os parametros com # passados na url (p2.html#cfbcurso#curso_javascript)
	location.hash.split('#'); divide removendo # e armazena em array(começando na posição [1])
	location.hostname; retorna o endereço do host, Ex: www.youtube.com
	location.href; retorna a url, caminho 
	location.href='https://www.youtube.com/cfbcursos'; redireciona para a url passada
	location.origin; retorna o protocolo, hostname, porta Ex: https://youtube.com/cfbcursos/443
	location.pathname; retorna o caminho apos o protocolo
	location.port; retorna a porta usada
	location.protocol; retorna o protocolo usado Ex: http, https
	location.search; faz a separação por ?
	location.assign('https://www.youtube.com'); redireciona para url passada
	location.replace('https://www.youtube.com'); redireciona (porem remove o historico apenas online)
	location.reload; recarrega a pagina   
	*/
}
//manipulaUrl();

function armazenaChaveValor(){
	/*
	localStorage.setItem(chave, valor) Ex:("canal", "cfbCursos") armazena no browser sem expiração apenas com delete
	localStorage.removeItem(chave) Ex:("canal") remove a chave e o conteudo 
	localStorage.getItem(chave) Ex:("canal") retorna o valor que esta armazenado na chave localStorage.canal tem o mesmo retorno
	if(typeof(Storage)!="undefine"){verifica se o browser suporta WebStorage}else{"browser não suporta WebStorage"}
	if(localStorage.visitas){localStorage.visitas+=1}else{localStorage.visitas=1;}
	*/
}
//armazenaChaveValor();

function criaElementoHtml(){
	/*
	var p=document.createELement("p"); cria o elemento (p)
	var t=document.createTextNode('Aula de JavaScript');
	p.appendChild(t); 
	p.textContent('Cfb Cursos'); adiciona no elemento a texto ('Cfb Cursos')
	document.body.appendChild(p); adiciona o conteudo da variavel (p) no (body)
	insertBefore(t, p.childNodes[0]); adiciona o conteudo da variavel p antes do conteudo na posição 0
	replaceChild("novo elemento", "elemento que vai ser substituido");
	elemento.parentNode; pega o elemento Pae Ex:(<div><p></p></div>) o elemento pae do (p) e o (div)
	elemento.remove(); remove o elemento 
	elemento.childNodes; pega os elementos filho 
	getElementById('cfbcurso').removeChild(elemento[0]); remove o elemento filho da posição 0
	*/
	/*
	document.getElementById('btnAdd').addEventListener('click',()=>{
		var lista=document.getElementById('listaElementos');
		var texto=document.getElementById('fnovo');
		var li=document.createElement('li');
		li.textContent=texto.value; adiciona dentro da variavel li o conteudo de texto 
		lista.appendChild(li); adiciona o conteudo de li dentro de lista 
		texto.value=""; depois de adicionar tudo limpe o input 
		texto.focus(); depois de adicionar mantenha o input em focu
	})
	*/
}
//criaElementoHtml();

function criaAtributo(){
	/*
	document.getElementById('btnDestaca').addEventListener('click',() => {
		var num=document.getElementById('fnum').value;
		var p=document.getElementsByTagName('p'); recupera elemento HTML todos os p
		for(var i=0;i<p.length;i++){p[i].removeAttribute('style');} rodar todos os p e remover o atributo
		var at=document.createAttribute('style'); cria o elemento style
		at.value="color:#f00;";	passa o CSS atraves do .value para a variavel at
		p[num].setAttributeNode(at); adiciona o conteudo ao elemento (p) da variavel (at)
	});
	getElementById('p1').getAttribute("class"); pega o atributo passado('') do elemento (p1);
	*/
}
//criaAtributo();

function foco(){
	/*
	document.hasFocus(); retorna True,False se a pagina esta em focu ou não
	*/
}
//foco();

function dataSet(){
	/* adiciona atributo ao elemento data-(nome do atributo)="valor" 
	Ex: <p id="c1" class="carro"><img src="carro1.png" data-cor="branco" data-pot="110"></p>
	
	document.getElementById('c1').addEventListener('click', ()=>{
		var obj=event.target.dataset.cor; recupera o data-cor
		console.log(obj); exibi "branco";
	});
	*/
}
//dataSet();

function rolaPagina(){
	/*
	.scrollIntoView(); rola a pagina para o elemento setado
	var obj=document.getElementById('c2').scrollIntoView();

	function focu(){
		var obj=event.target.dataset.nome; evento de alvo (click) pega o valor do dataset "nome"
		document.getElementById(obj).scrollView(); passa o valor de obj para pegar o id do elemento clicado
	}

	function inicia(){
		document.getElementById('btnc1').addEventListener('click',foco);
		document.getElementById('btnc2').addEventListener('click',foco);
		document.getElementById('btnc3').addEventListener('click',foco);
		document.getElementById('btnc4').addEventListener('click',foco);
	}

	window.addEventListener('load',inicia);
	
	<img id='btnc1' data-nome="c1" src="c1.png" class="menu_item">

	*/
}
//rolaPagina();

function ocultaELemento(){
	/*
	document.getElementById('bruno').hidden=true; oculta o elemento
	false não oculta, desolcuta o elemento; 
	*/
}
//ocultaElemento();