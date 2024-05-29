let data = [
    {
      "Game" : "Trackmania 2020",
      "Rank" : "Master",
      "RankTotal" : "10/13",
      "A" : 10,
      "B" : 13,
      "Heure" : "445H",
      "Pourcent" : '0.28 %',
      "Date" : "08 / 12 / 2023",
      "Systeme" : "Rank"
    }
  ]
  
  function initTableau(data) {
      
      const tbody = document.querySelector( '#table-facture' ).querySelector( 'tbody');
    
      for ( let i = 0; i < data.length; i++ )
      {
        const ligne = tbody.insertRow();
    
        // cellules activitÃ©s
        let cellNOM = ligne.insertCell();
        cellNOM.innerHTML = data[i].Game;
    
        // cellules cotisations
        let cellDURÉE = ligne.insertCell();
        cellDURÉE.innerHTML = data[i].Rank;
    
        // cellules tarifs
        let cellNB = ligne.insertCell();
        cellNB.innerHTML = data[i].RankTotal;
  
        let cellDURÉETOT = ligne.insertCell();
        cellDURÉETOT.innerHTML = (data[i].A / data[i].B) * 100;
  
        let cellNOTE = ligne.insertCell();
        cellNOTE.innerHTML = data[i].Heure;

        let cellPOURCENT = ligne.insertCell();
        cellPOURCENT.innerHTML = data[i].Pourcent;

        let cellDATE = ligne.insertCell();
        cellDATE.innerHTML = data[i].Date;
      }
    }
  
  initTableau(data)
  
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