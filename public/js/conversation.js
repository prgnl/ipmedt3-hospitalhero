// start spel pas tot dat de gebruiker op tekst ballon heeft geklikt

  document.getElementById("dialoog").addEventListener("click", start_spel);

function start_spel(){
  document.getElementById("dialoog").src = "../img/2stebericht.png";
  document.getElementById("dialoog").addEventListener("click", bandje_loop);
  if (0 == 1) {} else{ start_spel();}
}


// loop per item om te blijven zoeken tot dat ze hem hebben gevonden + tekst om actie te ondernemen
function bandje_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardeband.png";
  document.getElementById("js--bandje").addEventListener("click", bandje_collect);
  setTimeout(() => console.log("wacht"), 500);
  if (0 == 1) {} else{ bandje_loop();}
}
function watjes_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardewatje.png";
  document.getElementById("js--watje").addEventListener("click", watjes_collect);
  setTimeout(() => console.log("wacht"), 500);
  if (0 == 1) {} else{ watjes_loop();}
}
function spuit_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardespuit.png";
  document.getElementById("js--spuit").addEventListener("click", spuit_collect);
  setTimeout(() => console.log("wacht"), 500);
  if (0 == 1) {} else{ spuit_loop();}
}
function pleister_loop(){
  document.getElementById("dialoog").src = "../img/1steopzoeknaardepleister.png";
  document.getElementById("js--pleister").addEventListener("click", pleister_collect);
  setTimeout(() => console.log("wacht"), 500);
  if (0 == 1) {} else{ pleister_loop();}
}
function giraf_loop(){
  document.getElementById("dialoog").src = "../img/eennalaatstebericht.png";

  document.getElementById("dialoog").addEventListener("click", giraf2_loop);
  
  if (0 == 1) {} else{ giraf_loop();}
}
function giraf2_loop(){
  document.getElementById("dialoog").src = "../img/laatstebericht.png";
  document.getElementById("dialoog").addEventListener("click",laast);
  if (0 == 1) {} else{ giraf2_loop();}
}
function laast(){
  document.getElementById("dialoog").addEventListener("click", window.open("/eindscherm.html"));
}



//delete element and compliment tekst voor gebruiker
function bandje_collect(){
    document.getElementById('js--bandje').remove();
    watjes_loop();
}
function watjes_collect(){
    document.getElementById('js--watje').remove();
    spuit_loop()
}
function spuit_collect(){
    document.getElementById('js--spuit').remove();
    pleister_loop();
}
function pleister_collect(){
    document.getElementById('js--pleister').remove();
    giraf_loop();

}

AFRAME.registerComponent("transformeren", {
  init:function() {
    let giraffe = document.getElementById('js--giraffe');
    let superHero = document.getElementById('js--supergiraffe');
},
  update:function(){

    this.el.addEventListener('click', () => {
      //giraffe.setAttribute('visible', 'false');
        let entity = this.el;
        entity.parentNode.removeAttribute('gltf-model');
        alert('SUPER goed geholpen. NU HEB IK SUPERKRACHTEN!!!! ');
        document.getElementById('js--supergiraffe').object3D.visible = true


      });

  },
  tick:function(){
  },
  pause:function(){},
  play:function(){}
});
