// elements click eventes all blender models

// document.getElementById("js--spuit").addEventListener("click", bandjealert);
// document.getElementById("js--giraffe").addEventListener("click", bandjealert);



let collect_bandje = 0;


function start_spel(){
  document.getElementById("dialoog").addEventListener("click", bandje_loop);
  if (0 == 1) {} else{ start_spel();}
}
// bericht geladen 1ste bericht
function bandje_loop(){
  document.getElementById("dialoog").src = "../img/dialoog2.png";
  document.getElementById("js--bandje").addEventListener("click", bandjealert);
  if (0 == 1) {} else{ bandje_loop();}
}
function watjes_loop(){
  document.getElementById("js--bandje").addEventListener("click", bandjealert);
  if (0 == 1) {} else{ watjes_loop();}
}



function bandjealert(){
    collect_bandje = collect_bandje + 1;
    document.getElementById('js--bandje').remove();
    document.getElementById("dialoog").src = "../img/dialoog3.png";
}



start_spel();
