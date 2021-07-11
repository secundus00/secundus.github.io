var snakebiteClicked = false;	//
var poisoncloudClicked = false;
var tButtonClicked = true;
var ctButtonClicked = false;

function navBar(){
	$("#nav-bar").load("navbar.html");
}
function modal(){
	$("#myModal").load("modal.html");
}

function genModal(title, video){
	var title = title;
	var body = video;
	var video = document.getElementById('videoTag');
	$('.modal-title').html(title);
	video.setAttribute("src",body);
	video.load();
}

function snakebiteClick(){
	var snakebite = document.getElementById('SnakebiteButton');
	var poisoncloud = document.getElementById('PoisonCloudButton');
	if(snakebiteClicked==false){//if not clicked already
		snakebiteClicked=true;
		showAllsnakebites();
		if(poisoncloudClicked == false){
			hideAllpoisonclouds();
		}
		if(tButtonClicked==true){
			$('.ctsnakebite').hide();
		}else{
			$('.tsnakebite').hide();
		}
	}else{//if clicked already
		snakebiteClicked=false;
		if(poisoncloudClicked==false){
			showAllNades();
			if(tButtonClicked==true){
				hideCTNades();
			}else{
				hideTNades();
			}
		}else{
			hideAllsnakebites();
		}
	}
}

function poisoncloudClick(){
	var snakebite = document.getElementById('SnakebiteButton');
	var poisoncloud = document.getElementById('PoisonCloudButton');
	if(poisoncloudClicked==false){//if not clicked already
		poisoncloudClicked=true;
		showAllpoisonclouds();
		if(snakebiteClicked == false){
			hideAllsnakebites();
		}
		if(tButtonClicked==true){
			$('.ctpoisoncloud').hide();
		}else{
			$('.tpoisoncloud').hide();
		}
	}else{//if clicked already
		poisoncloudClicked=false;
		if(snakebiteClicked==false){
			showAllNades();
			if(tButtonClicked==true){
				hideCTNades();
			}else{
				hideTNades();
			}
		}else{
			hideAllpoisonclouds();
		}
	}
}

function tClick(){
	ctButtonClicked=false;
	tButtonClicked=true;
	$('.t').show();
	$('.ct').hide();
	if(snakebiteClicked==false&&poisoncloudClicked==false){
		$('.t').show();
		$('.ct').hide();
	}else{ 
		if(snakebiteClicked==true){
			$('.ctsnakebite').hide();
			$('.tsnakebite').show();
		}else{
			$('.snakebites').hide();
		}
		if(poisoncloudClicked==true){
			$('.ctpoisoncloud').hide();
			$('.tpoisoncloud').show();
		}else{
			$('.poisonclouds').hide();
		}
	}
}
function ctClick(){
	tButtonClicked=false;
	ctButtonClicked=true;
	if(snakebiteClicked==false&&poisoncloudClicked==false){
		$('.ct').show();
		$('.t').hide();
	}else{ 
		if(snakebiteClicked==true){
			$('.tsnakebite').hide();
			$('.ctsnakebite').show();
		}else{
			$('.snakebites').hide();
		}
		if(poisoncloudClicked==true){
			$('.tpoisoncloud').hide();
			$('.ctpoisoncloud').show();
		}else{
			$('.poisonclouds').hide();
		}
	}
}
function loaded(){
	tButtonClicked=true;
	ctButtonClicked=false;
	$('.ct').hide();
}
function showAllsnakebites(){
	$('.snakebites').show();
}
function showAllpoisonclouds(){
	$('.poisonclouds').show();
}
function hideAllsnakebites(){
	$('.snakebites').hide();
}
function hideAllpoisonclouds(){
	$('.poisonclouds').hide();
}
function hideTNades(){
	$('.tsnakebite').hide();
	$('.tpoisoncloud').hide();
	$('.tmolly').hide();
}
function hideCTNades(){
	$('.ctsnakebite').hide();
	$('.ctpoisoncloud').hide();
	$('.ctmolly').hide();
}
function showAllNades(){
	$('.snakebites').show();
	$('.poisonclouds').show();
}