<script>
var som
var q=14
var k=[]
var ç=[]
var quantidade2=1
var disparo = false;
var xd, yd;
var xj, yj;
var vidas = 3;
var pontos = 0;
var x = [], y = [];
var quantidade = 1; 
var mx = 1;
var my = 1;
var easing = 0.05;
var radius = 20;
var edge = 2;
var inner = edge + radius;
var raio2=20;
var raio=10;
var branco= true;
var encontro=false;
var p=14
var img;
var img2;
var img3;
var img4;
var tela=1; 
function preload(){
	som=loadSound("arquivo.mp3");
	som.setVolume(0.3);
	som.loop();
	}
function setup() {
    createCanvas(500, 500); 	  
    //disparo
    xj = p;
    xd = xj;
    yj = height-20;
    yd = yj;
    img4=loadImage("https://i.imgur.com/UiZ6Cac.png"); 
    img3=loadImage("https://i.imgur.com/f3E2TGw.png");
    img2=loadImage("https://i.imgur.com/h6CFfjj.png");
	img1= loadImage("https://i.imgur.com/UukTM0q.png");
    frameRate(100);
    ellipseMode(RADIUS);
   	for (i=0; i <quantidade; i++)
    {
        x[i] = random(500,0);//aleatorio
        y[i] = -random(0,500);//aleatorio
    }

	for (i=0; i <quantidade2; i++)
    {
        k[i] = random(500,0);
        ç[i] = -random(0,500);
    }

}

// parte da repetição
  
function draw()
{

        image(img1, 0, 0);
    if ( tela == 1)
    {
        if (keyIsDown(ENTER) )
        {
            tela = 2;
        }
    }
    if ( tela == 2)
    {
	           
		background(135)
		fill(230,230,0)
		rect(250,q,50)
		q=q+10
		if(q>height){
			q = random(-500,-50);
		}
        strokeWeight(4);
        image(img4,p-128,345,250,250);
        for ( i=0; i<quantidade; i++)
        {
    	fill(230,230,0);
	rect(245,q,20,80)
	q=q+2
if(q>height){
q = random(-500,-50); // gera um valor aleatório entre -500 e -50 (min e max)
}
	ellipse(x[i], y[i], 20, 20);
            y[i]=y[i]+4;
            if ( y[i] > 500 )
            {
                x[i] =  random(500,0);
                y[i] = -random(0,500);
            }
        }
	for ( i=0; i<quantidade2; i++){
		if(pontos%3==0)
		{
			for ( i=0; i<quantidade2; i++)
        {
	    ellipse(k[i], ç[i], 20, 20);
	         ç[i]=ç[i]+4;
            if ( ç[i] > 500 )
            {
                k[i] =  random(500,0);
                ç[i] = -random(0,500);
            }
        }
	for ( i=0; i<quantidade2; i++)
        {
            if ( dist(p,height-20,k[i],ç[i] ) > 20)
            {
		if ( encontro == false)
                {
                    branco = !branco;
                    encontro = true;
                }
            }
            else
            {
                encontro = false;
		vidas = vidas +1 
                k[i] =  random(500,0);
                ç[i] = -random(0,500);
            }

            if ( branco )
            {
               fill(230,230,0);
            }
            else
            {
               fill(230,230,0) 
            }
            
	    ellipse(k[i], ç[i], 20, 20);
        }
			}
		}
        for ( i=0; i<quantidade; i++)
        {
            if ( dist(p,height-20||yd,x[i],y[i] ) > 20)
            {
                if ( encontro == false)
                {
                    branco = !branco;
                    encontro = true;
                }
            }
            else
            {
                encontro = false;
		vidas = vidas - 1
                x[i] =  random(500,0);
                y[i] = -random(0,500);
            }

            if ( branco )
            {
                fill(255);
            }
            else
            {
                fill(255,0,0);
            }
            ellipse(x[i], y[i], 20, 20)
        }
        for ( i=0; i<quantidade; i++)
        {
            if ( dist(xd,yd,x[i],y[i] ) > 20)
            {
                if ( encontro == false)
                {
                    branco = !branco;
                    encontro = true;
                }
            }
            else
            {
                encontro = false;
                pontos=pontos+1
                if(pontos%5 == 0){
                    quantidade = quantidade+1
                     }				
                x[i] =  random(500,0);
                y[i] = -random(0,500);
            }

            if ( branco )
            {
                fill(255);
            }
            else
            {
                fill(255,0,0);
            }
            ellipse(x[i], y[i], 20, 20)
        }
        p = constrain(p, inner, width - inner);
        p = constrain(p, inner, height - inner);
        fill(230,230,0);
        if ( keyIsDown (RIGHT_ARROW))
        {
            p = p +  3 ;
        }
        if ( keyIsDown (LEFT_ARROW))
        {
            p = p - 3 ;
        }
//contagem de vidas
        textSize(18);
        fill(135,206,235);
        text("Vidas: "+vidas, 10, 60);
        text("Pontos: "+pontos, 10, 90);
        xj = p;
        xd = xj;
        if (keyIsDown(BACKSPACE) && (! disparo) )
        {
            disparo = true;
            xd = xj;
            yd = yj;
        }
        if (disparo)
        {
            // movimenta o disparo / tiro
            yd = yd -20;
            // se o disparo sumir na tela
            if (yd < 0 )
            {
              disparo = false;
		yd=yd-500
		xd=0
            }
        }
        if (disparo)
        {
            ellipse(xd,yd,8,8);

        }
	}

    if (vidas <= 0)
    {
      
        image(img3,0,0)
        if (keyIsDown(LEFT_ARROW))
        {
            tela = 1
                   vidas=3
					pontos = 0
						quantidade=10
							setup(false)
        }
    }
}
