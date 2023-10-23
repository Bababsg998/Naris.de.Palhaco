function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Modelo iniciado!");
}

function draw(){
    image(video, 0, 0, 300, 300); 

    
}

function gotPoses(results){
    if(results.length > 0){
            console.log(results);
            console.log("Naris x =" + results[0].pose.nose.x);
            console.log("Naris y =" + results[0].pose.nose.y);
    }} 

function tirarFoto(){

}

noseX = 0; 
noseY = 0; 

function preload(){  // pré-carrega arquivos de imagens/vídeos/etc
    nariz = loadImage('https://i.postimg.cc/0jXjDVDT/nariz.png'); 
}

function setup(){  // executada apenas 1 vez e é de configuração 
    canvas = createCanvas(300,300); 
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.size(300,300); 
    video.hide(); 
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 
}

function modelLoaded(){
    console.log("Modelo iniciado!");
}

function draw(){  // executada repetidas vezes 
    image(video, 0, 0, 300,300); 
    fill(255,0,0); //(Red, green, blue)
    stroke(255,0,0); 
    //circle(noseX, noseY, 20); //(posição X, posição Y, raio )
    image(nariz, noseX, noseY, 30, 30); 
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results); 
        console.log("Nariz x = " + results[0].pose.nose.x); 
        console.log("Nariz y = " + results[0].pose.nose.y); 
        noseX = results[0].pose.nose.x - 15; 
        noseY = results[0].pose.nose.y - 15; 
    }
}

function tirarFoto(){   
    save('minhaSelfie.png'); 
}