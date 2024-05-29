let data = []
  
  function initTableau(data) {
      
      const tbody = document.querySelector( '#table-facture' ).querySelector( 'tbody');
    
      for ( let i = 0; i < data.length; i++ )
      {
        const ligne = tbody.insertRow();
    
        // cellules activitÃ©s
        let cellNOM = ligne.insertCell();
        cellNOM.innerHTML = data[i].Nom;
    
        // cellules cotisations
        let cellDURÉE = ligne.insertCell();
        cellDURÉE.innerHTML = data[i].Duree;
    
        // cellules tarifs
        let cellNB = ligne.insertCell();
        cellNB.innerHTML = data[i].Nb;
  
        let cellDURÉETOT = ligne.insertCell();
        cellDURÉETOT.innerHTML = data[i].Duree * data[i].Nb;
  
        let cellNOTE = ligne.insertCell();
        cellNOTE.innerHTML = data[i].Note;
      }
    }
  
  initTableau(data)
  
  function AjoutLiensTRs()
  {
      // si les méthodes n'existent pas, on sort...
      if(!document.getElementById || !document.getElementsByTagName)
      {
          return;
      }
  
      // Pour chaque dernier TD de chaque TR...
      var oTable = document.getElementById("table-facture");
      var oTRs = oTable.getElementsByTagName("tr");
    var iteration = 0;
      for(var iI = 1; iI < oTRs.length; iI++){
          var lien = oTable.rows[iI].cells[0];
          var url = data[iteration].Lien;
          // Ajout d'un évènement onclick sur la cellule
          lien.onclick= new Function("window.location.href='"+url+"'");
      iteration ++;
      }
  }
  AjoutLiensTRs();
  
  const compare = function(ids, asc){
    return function(row1, row2){
      const tdValue = function(row, ids){
        return row.children[ids].textContent;
      }
      const tri = function(v1, v2){
        if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)){
          return v1 - v2;
        }
        else {
          return v1.toString().localeCompare(v2);
        }
        return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
      };
      return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
    }
  }
  
  const tbody = document.querySelector('tbody');
  const thx = document.querySelectorAll('th');
  const trxb = tbody.querySelectorAll('tr');
  thx.forEach(function(th){
    th.addEventListener('click', function(){
      let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
      classe.forEach(function(tr){
         tbody.appendChild(tr)
      });
    })
  });
  
  console.log(document.getElementById("table-facture").rows[1].cells[1].textContent);