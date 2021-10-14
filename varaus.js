const nappi=document.querySelector('#varaus');
const rekisteri=document.querySelector('#rekisteri');
const etunimi=document.querySelector('#etunimi');
const sukunimi=document.querySelector('#sukunimi');
const osoite=document.querySelector('#osoite');
const puhelin=document.querySelector('#puhelin');
const txt=document.querySelector('#text');

function teeVaraus() {
   var paivanro = Math.floor((Math.random() * 5) + 1);
   var paiva = '';
   var huoltoKlo = 8+Math.floor((Math.random() * 7) + 1) +':00';

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
   
   if ((rekisteri.value != '') && (etunimi.value != '') && (sukunimi.value != '') &&
      (osoite.value != '') && (puhelin.value != '') && (txt.value != ''))
   {
     alert('Sinulle on varattu huolto autolle ['+rekisteri.value+'] ensi viikon ' +paiva+' kello '+huoltoKlo+'. Tervetuloa!'); 
   }
   else
    alert('Kirjoita kaikki tiedot!');  
  }
  
nappi.addEventListener('click', teeVaraus);





