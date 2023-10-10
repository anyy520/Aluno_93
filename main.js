// Crie o elemento canvas:
var canvas = new fabric.Canvas('myCanvas');

// defina as coordenadas x e y da imagem do personagem
player_x = 10;
player_y = 10;

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

}
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

// Programar o evento addEventListener da função keydown:


//Programar a criação da função e os valores de keyCode:

function my_keydown(e)

{


//Programar a condição de pressionamento das teclas C e Shift:-ATENÇAÕ ESTE CÓDIGO ESTÁ COMPLETO

if(e.shiftKey == true && keyPressed == '67')
{
	console.log("C e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width + 10;//aumentará a largura e altura dos blocos
	block_image_height = block_image_height + 10;//aumentar a largura e altura dos blocos
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
//Programar a condição de pressionamento das teclas D e Shift:
if(e.shiftKey && keyPressed == '68')
{
	console.log("D e Shift pressionadas ao mesmo tempo");
	
	
}
        // Chamar a função up():

	if()
	{
		
		console.log();
	}
	//Chamar a função down()
	if()
	{
		
		console.log();
	}
	//Chamar a função left():
	if()
	{
		
		console.log();
	}
	//Chamar a função right():
	if()
	{
		
		console.log();
	}
	// 93Programar as imagens que serão enviadas ao canvas quando as teclas p, g, v, m, t,
    //a, e, u, n forem pressionadas:

	

