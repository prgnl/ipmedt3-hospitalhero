
//gemaakt door alex
console.log('hero transformeren');



AFRAME.registerComponent("transformeren", {
  init:function() {
    let giraffe = document.getElementById('js--giraffe');
    let superHero = document.getElementById('js--supergiraffe');
},
  update:function(){
    this.el.addEventListener('click', () => {
      function click() {
        let entity = this.el;
        entity.parentNode.removeChild(entity);
      //  entity.setAttribute('gltf-model', '#supergiraffe');
        alert('superheld komt aan');
      }
      click();

      if(click) {
        superHero.setAttribute('visible', 'true');
      }
        //entity.parentNode.removeChild(entity);
        //entity.parentNode.setAttribute('gltf-model', '#supergiraffe');
      //  entity1.parentNode.appendChild(entity1);
        //test

      //  element = '<a-entity class="clickable" gesture-handler position="0 0 0" class="item" id="js--supergiraffe" gltf-model="#supergiraffe" scale="1 1 1"></a-entity>';
      //  element.appendChild(element);
      //  element.parentNode.appendChild(element);

      });

  },
  tick:function(){
  },
  pause:function(){},
  play:function(){}
});
