// Crie o elemento canvas:

var canvas = new fabric.Canvas('myCanvas');
// defina as coordenadas x e y da imagem do personagem

player_x = 10;
player_y = 10;
// defina a width e height do bloco imagem
block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";
// Função para adicionar playerUpdate():
function player_update()
{
	
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
// Função para adicionar a imagem do bloco
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

	
}
//acima aula 92
//abaixo aula93

//Programar o evento addEventListener da função keydown:
window.addEventListener("keydown", my_keydown);
//Programar a criação da função e os valores de keyCode:
function my_keydown(e)
keyPressed = e.keyCode;
console.log(keyPressed);
//Programar a condição de pressionamento das teclas C e Shift
if(e.shiftKey == true && keyPressed == '67')
{
	console.log("C e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
// Programar a condição de pressionamento das teclas D e Shift:
if(e.shiftKey && keyPressed == '68')
{
	console.log("D e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
       //Chamar a função up():

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	//Chamar a função down()
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	//Chamar a função left():
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	//Chamar a função right():
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	// 93Programar as imagens que serão enviadas ao canvas quando as teclas p, g, v, m, t,
    //a, e, u, n forem pressionadas:

	if(keyPressed == '80')
	{
		new_image('parede.jpg'); 
		console.log("p");
	}
	if(keyPressed == '71')
	{
		new_image('grama.png'); 
		console.log("g");
	}
	if(keyPressed == '86')
	{
		new_image('verde_claro.png'); 
		console.log("v");
	}
	if(keyPressed == '77')
	{
		new_image('madeira_tronco.jpg'); 
		console.log("m");
	}
	if(keyPressed == '84')
	{
		new_image('telhado.jpg'); 
		console.log("t");
	}
	if(keyPressed == '65')
	{
		new_image('parede_amarela.png'); 
		console.log("a");
	}
	if(keyPressed == '69')
	{
		new_image('verde_escuro.png'); 
		console.log("e");
	}
	if(keyPressed == '85')
	{
		new_image('unico.png'); 
		console.log("u");
	}
	if(keyPressed == '78')
	{
		new_image('nuvem.jpg'); 
		console.log("n");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para baixo é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta esquerda é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta direita é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
