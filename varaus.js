const nappi=document.querySelector('#varaus');
const rekisteri=document.querySelector('#rekisteri');

function teeVaraus() {
   var paivanro = Math.floor((Math.random() * 5) + 1);
   var paiva = '';
   var huoltoKlo = 8+Math.floor((Math.random() * 7) + 1) +':00';
   var reknro=rekisteri.value;

  switch (paivanro) {
  
     case 1:
    
        paiva = 'maanantaina';
 
        break;   
     case 2:

        paiva = 'tiistaina';
        break;
     case 3:

        paiva = 'keskiviikkona';
        break;
     case 4:
    
        paiva = 'torstaina';
   
        break; 
     case 5:

        paiva = 'perjantaina';
        break;
    }

   if (reknro != '')
   {
     alert('Sinulle on varattu huolto autolle ['+reknro+'] ensi viikon ' +paiva+' kello '+huoltoKlo+'. Tervetuloa!'); 
   }
   else
    alert('Anna auton rekisterinumero');  
  }
  
nappi.addEventListener('click', teeVaraus);





