let data = [
    {
      "Nom" : "Schumacher Michael",
      "Race" :{
        "Melbourne" : 4,
        "Interlagos" : 5,
        "Imola" : "DNF",
        "Silverstone" : 2,
        "Barcelone" : 2
      },
      "Qualifs" : {
        "Melbourne" : "1:20.405",
        "Interlagos" : "1:04.572",
        "Imola" : "1:16.964",
        "Silverstone" : "1:21.448",
      },
      "Time" : {
        "Melbourne" : [1,2,0,4,0,5],
        "Interlagos" : [1,0,4,5,7,2],
        "Imola" : [1,1,6,9,6,4],
        "Silverstone" : [1,2,1,4,4,8]
      },
      "Pôles" : 0,
      "Ecurie" : "Ferrari"
    },
    {
        "Nom" : "Häkkinen Mika",
        "Race" :{
          "Melbourne" : "DNF",
          "Interlagos" : 1,
          "Imola" : "DNF",
          "Silverstone" : 3,
          "Barcelone" : "DNF"
        },
        "Qualifs" : {
          "Melbourne" : "1:19.922",
          "Interlagos" : "1:04.772",
          "Imola" : "1:17.400",
          "Silverstone" : "1:21.442",
        },
        "Time" : {
          "Melbourne" : [1,1,9,9,2,2],
          "Interlagos" : [1,0,4,7,7,2],
          "Imola" : [1,1,7,4,0,0],
          "Silverstone" : [1,2,1,4,4,2]
        },
        "Pôles" : 0,
        "Ecurie" : "McLaren - Mercedes"
      },
      {
        "Nom" : "Frentzen Heinz-Harald",
        "Race" :{
          "Melbourne" : 2,
          "Interlagos" : 16,
          "Imola" : 3,
          "Silverstone" : "DNF",
          "Barcelone" : 4
        },
        "Qualifs" : {
          "Melbourne" : "1:20.400",
          "Interlagos" : "1:04.894",
          "Imola" : "1:17.366",
          "Silverstone" : "1:21.767",
        },
        "Time" : {
          "Melbourne" : [1,2,0,4,0,0],
          "Interlagos" : [1,0,4,8,9,4],
          "Imola" : [1,1,7,3,6,6],
          "Silverstone" : [1,2,1,7,6,7]
        },
        "Pôles" : 0,
        "Ecurie" : "Jordan Honda"
      },
      {
        "Nom" : "Coulthard David",
        "Race" :{
          "Melbourne" : 5,
          "Interlagos" : 3,
          "Imola" : 2,
          "Silverstone" : 4,
          "Barcelone" : "DNF"
        },
        "Qualifs" : {
          "Melbourne" : "1:20.402",
          "Interlagos" : "1:04.892",
          "Imola" : "1:17.484",
          "Silverstone" : "1:21.640",
        },
        "Time" : {
          "Melbourne" : [1,2,0,4,0,2],
          "Interlagos" : [1,0,4,8,9,2],
          "Imola" : [1,1,7,4,8,4],
          "Silverstone" : [1,2,1,6,4,0]
        },
        "Pôles" : 0,
        "Ecurie" : "McLaren - Mercedes"
      },{
        "Nom" : "Barrichello Rubens",
        "Race" :{
          "Melbourne" : 16,
          "Interlagos" : "DNF",
          "Imola" : 4,
          "Silverstone" : 6,
          "Barcelone" : 5
        },
        "Qualifs" : {
          "Melbourne" : "1:20.602",
          "Interlagos" : "1:08.324",
          "Imola" : "1:17.804",
          "Silverstone" : "1:21.882",
        },
        "Time" : {
          "Melbourne" : [1,2,0,6,0,2],
          "Interlagos" : [1,0,8,3,2,4],
          "Imola" : [1,1,7,8,0,4],
          "Silverstone" : [1,2,1,8,8,2]
        },
        "Pôles" : 0,
        "Ecurie" : "Ferrari"
      },
      {
        "Nom" : "Zonta Ricardo",
        "Race" :{
          "Melbourne" : 3,
          "Interlagos" : "DNF",
          "Imola" : 8,
          "Silverstone" : 8,
          "Barcelone" : 6
        },
        "Qualifs" : {
          "Melbourne" : "1:21.000",
          "Interlagos" : "1:08.645",
          "Imola" : "1:18.167",
          "Silverstone" : "1:22.522",
        },
        "Time" : {
          "Melbourne" : [1,2,1,0,0,0],
          "Interlagos" : [1,0,8,6,4,5],
          "Imola" : [1,1,8,1,6,7],
          "Silverstone" : [1,2,2,5,2,2]
        },
        "Pôles" : 0,
        "Ecurie" : "Bar - Honda"
      },
      {
        "Nom" : "Schumacher Ralph",
        "Race" :{
          "Melbourne" : "DNF",
          "Interlagos" : 10,
          "Imola" : "DNF",
          "Silverstone" : 9,
          "Barcelone" : 10
        },
        "Qualifs" : {
          "Melbourne" : "1:21.001",
          "Interlagos" : "1:08.840",
          "Imola" : "1:17.849",
          "Silverstone" : "1:22.081",
        },
        "Time" : {
          "Melbourne" : [1,2,1,0,0,1],
          "Interlagos" : [1,0,8,8,4,0],
          "Imola" : [1,1,7,8,4,9],
          "Silverstone" : [1,2,2,0,8,1]
        },
        "Pôles" : 0,
        "Ecurie" : "Williams - BMW"
      },
      {
        "Nom" : "Trulli Jarno",
        "Race" :{
          "Melbourne" : 7,
          "Interlagos" : 2,
          "Imola" : 15,
          "Silverstone" : "DNF",
          "Barcelone" : 7
        },
        "Qualifs" : {
          "Melbourne" : "1:21.001",
          "Interlagos" : "1:05.413",
          "Imola" : "1:18.042",
          "Silverstone" : "1:22.040",
        },
        "Time" : {
          "Melbourne" : [1,2,1,0,0,1],
          "Interlagos" : [1,0,5,4,1,3],
          "Imola" : [1,1,8,0,4,2],
          "Silverstone" : [1,2,2,0,4,0]
        },
        "Pôles" : 0,
        "Ecurie" : "Jordan Honda"
      },
      {
        "Nom" : "Irvine Eddie",
        "Race" :{
          "Melbourne" : 8,
          "Interlagos" : "DNF",
          "Imola" : 7,
          "Silverstone" : 13,
          "Barcelone" : 9
        },
        "Qualifs" : {
          "Melbourne" : "1:21.002",
          "Interlagos" : "1:05.411",
          "Imola" : "1:18.241",
          "Silverstone" : "1:22.489",
        },
        "Time" : {
          "Melbourne" : [1,2,1,0,0,2],
          "Interlagos" : [1,0,5,4,1,1],
          "Imola" : [1,1,8,2,4,1],
          "Silverstone" : [1,2,2,4,8,9]
        },
        "Pôles" : 0,
        "Ecurie" : "Jaguar - Ford"
      },
      {
        "Nom" : "Villeneuve Jacques",
        "Race" :{
          "Melbourne" : 6,
          "Interlagos" : 6,
          "Imola" : 5,
          "Silverstone" : 5,
          "Barcelone" : 3
        },
        "Qualifs" : {
          "Melbourne" : "1:21.002",
          "Interlagos" : "1:08.725",
          "Imola" : "1:18.001",
          "Silverstone" : "1:22.043",
        },
        "Time" : {
          "Melbourne" : [1,2,1,0,0,2],
          "Interlagos" : [1,0,8,7,2,5],
          "Imola" : [1,1,8,0,0,1],
          "Silverstone" : [1,2,2,0,4,3]
        },
        "Pôles" : 0,
        "Ecurie" : "Bar - Honda"
      },
      {
        "Nom" : "Fisichella Giancarlo",
        "Race" :{
          "Melbourne" : 11,
          "Interlagos" : 9,
          "Imola" : 6,
          "Silverstone" : "DNF",
          "Barcelone" : 11
        },
        "Qualifs" : {
          "Melbourne" : "1:21.004",
          "Interlagos" : "1:08.841",
          "Imola" : "1:17.963",
          "Silverstone" : "1:22.282",
        },
        "Time" : {
          "Melbourne" : [1,2,1,0,0,4],
          "Interlagos" : [1,0,8,8,4,1],
          "Imola" : [1,1,7,9,6,3],
          "Silverstone" : [1,2,2,2,8,2]
        },
        "Pôles" : 0,
        "Ecurie" : "Benetton"
      },
      {
        "Nom" : "De La Rosa Pedro",
        "Race" :{
          "Melbourne" : 13,
          "Interlagos" : 15,
          "Imola" : 11,
          "Silverstone" : "DNF",
          "Barcelone" : 14
        },
        "Qualifs" : {
          "Melbourne" : "1:21.162",
          "Interlagos" : "1:09.160",
          "Imola" : "1:18.844",
          "Silverstone" : "1:22.929",
        },
        "Time" : {
          "Melbourne" : [1,2,1,1,6,2],
          "Interlagos" : [1,0,9,1,6,0],
          "Imola" : [1,1,8,8,4,4],
          "Silverstone" : [1,2,2,9,2,9]
        },
        "Pôles" : 0,
        "Ecurie" : "Arrows"
      },
      {
        "Nom" : "Herbert Johnny",
        "Race" :{
          "Melbourne" : 9,
          "Interlagos" : "DNF",
          "Imola" : "DNF",
          "Silverstone" : "DNF",
          "Barcelone" : 8
        },
        "Qualifs" : {
          "Melbourne" : "1:21.203",
          "Interlagos" : "1:05.535",
          "Imola" : "1:18.241",
          "Silverstone" : "1:22.080",
        },
        "Time" : {
          "Melbourne" : [1,2,1,2,0,3],
          "Interlagos" : [1,0,5,5,3,5],
          "Imola" : [1,1,8,2,4,1],
          "Silverstone" : [1,2,2,0,8,0]
        },
        "Pôles" : 0,
        "Ecurie" : "Jaguar - Ford"
      },
      {
        "Nom" : "Alesi Jean",
        "Race" :{
          "Melbourne" : "DNF",
          "Interlagos" : 4,
          "Imola" : 9,
          "Silverstone" : "DNF",
          "Barcelone" : 13
        },
        "Qualifs" : {
          "Melbourne" : "1:21.206",
          "Interlagos" : "1:05.420",
          "Imola" : "1:17.967",
          "Silverstone" : "1:22.281",
        },
        "Time" : {
          "Melbourne" : [1,2,1,2,0,6],
          "Interlagos" : [1,0,5,4,2,0],
          "Imola" : [1,1,7,9,6,5],
          "Silverstone" : [1,2,2,2,8,1]
        },
        "Pôles" : 0,
        "Ecurie" : "Prost Peugeot"
      },
      {
        "Nom" : "Wurz Alexander",
        "Race" :{
          "Melbourne" : 10,
          "Interlagos" : 7,
          "Imola" : 13,
          "Silverstone" : 7,
          "Barcelone" : 12
        },
        "Qualifs" : {
          "Melbourne" : "1:21.209",
          "Interlagos" : "1:08.968",
          "Imola" : "1:18.606",
          "Silverstone" : "1:22.481",
        },
        "Time" : {
          "Melbourne" : [1,2,1,2,0,9],
          "Interlagos" : [1,0,8,9,6,8],
          "Imola" : [1,1,8,6,0,6],
          "Silverstone" : [1,2,2,4,8,1]
        },
        "Pôles" : 0,
        "Ecurie" : "Benetton"
      },
      {
        "Nom" : "Verstappen Jos",
        "Race" :{
          "Melbourne" : 12,
          "Interlagos" : 11,
          "Imola" : 12,
          "Silverstone" : 10,
          "Barcelone" : "DNF"
        },
        "Qualifs" : {
          "Melbourne" : "1:21.242",
          "Interlagos" : "1:08.961",
          "Imola" : "1:18.608",
          "Silverstone" : "1:22.727",
        },
        "Time" : {
          "Melbourne" : [1,2,1,2,4,2],
          "Interlagos" : [1,0,8,9,6,1],
          "Imola" : [1,1,8,6,0,8],
          "Silverstone" : [1,2,2,7,2,7]
        },
        "Pôles" : 0,
        "Ecurie" : "Arrows"
      },
      {
        "Nom" : "Salo Mika",
        "Race" :{
          "Melbourne" : "DNF",
          "Interlagos" : 8,
          "Imola" : "DNF",
          "Silverstone" : 15,
          "Barcelone" : "DNF"
        },
        "Qualifs" : {
          "Melbourne" : "1:21.443",
          "Interlagos" : "1:09.129",
          "Imola" : "1:18.641",
          "Silverstone" : "1:22.923",
        },
        "Time" : {
          "Melbourne" : [1,2,1,4,4,3],
          "Interlagos" : [1,0,9,1,2,9],
          "Imola" : [1,1,8,6,4,1],
          "Silverstone" : [1,2,2,9,2,3]
        },
        "Pôles" : 0,
        "Ecurie" : "Sauber Petronas"
      },
      {
        "Nom" : "Diniz Pedro",
        "Race" :{
          "Melbourne" : 15,
          "Interlagos" : "DNF",
          "Imola" : "DNF",
          "Silverstone" : 11,
          "Barcelone" : 15
        },
        "Qualifs" : {
          "Melbourne" : "1:21.443",
          "Interlagos" : "1:08.841",
          "Imola" : "1:18.840",
          "Silverstone" : "1:22.522",
        },
        "Time" : {
          "Melbourne" : [1,2,1,4,4,3],
          "Interlagos" : [1,0,8,8,4,1],
          "Imola" : [1,1,8,8,4,0],
          "Silverstone" : [1,2,2,5,2,2]
        },
        "Pôles" : 0,
        "Ecurie" : "Sauber Petronas"
      },
      {
        "Nom" : "Button Jenson",
        "Race" :{
          "Melbourne" : "DNF",
          "Interlagos" : 13,
          "Imola" : "DNF",
          "Silverstone" : 14,
          "Barcelone" : 16
        },
        "Qualifs" : {
          "Melbourne" : "1:21.640",
          "Interlagos" : "1:09.246",
          "Imola" : "1:18.844",
          "Silverstone" : "1:23.123",
        },
        "Time" : {
          "Melbourne" : [1,2,1,6,4,0],
          "Interlagos" : [1,0,9,2,4,6],
          "Imola" : [1,1,8,8,4,4],
          "Silverstone" : [1,2,3,1,2,3]
        },
        "Pôles" : 0,
        "Ecurie" : "Williams - BMW"
      },
      {
        "Nom" : "Mazzacane Gaston",
        "Race" :{
          "Melbourne" : 14,
          "Interlagos" : 12,
          "Imola" : 10,
          "Silverstone" : 12,
          "Barcelone" : 17
        },
        "Qualifs" : {
          "Melbourne" : "1:21.641",
          "Interlagos" : "1:09.320",
          "Imola" : "1:19.044",
          "Silverstone" : "1:23.360",
        },
        "Time" : {
          "Melbourne" : [1,2,1,6,4,1],
          "Interlagos" : [1,0,9,3,2,0],
          "Imola" : [1,1,9,0,4,4],
          "Silverstone" : [1,2,3,3,6,0]
        },
        "Pôles" : 0,
        "Ecurie" : "Minardi"
      },
      {
        "Nom" : "Gené Marc",
        "Race" :{
          "Melbourne" : "DNF",
          "Interlagos" : 14,
          "Imola" : 14,
          "Silverstone" : "DNF",
          "Barcelone" : 18
        },
        "Qualifs" : {
          "Melbourne" : "1:21.644",
          "Interlagos" : "1:09.321",
          "Imola" : "1:19.048",
          "Silverstone" : "1:23.163",
        },
        "Time" : {
          "Melbourne" : [1,2,1,6,4,4],
          "Interlagos" : [1,0,9,3,2,1],
          "Imola" : [1,1,9,0,4,8],
          "Silverstone" : [1,2,3,1,6,3]
        },
        "Pôles" : 0,
        "Ecurie" : "Minardi"
      },
      {
        "Nom" : "Heidfeld Nick",
        "Race" :{
          "Melbourne" : 1,
          "Interlagos" : "DNF",
          "Imola" : 1,
          "Silverstone" : 1,
          "Barcelone" : 1
        },
        "Qualifs" : {
          "Melbourne" : "1:10.686",
          "Interlagos" : "1:03.604",
          "Imola" : "1:06.507",
          "Silverstone" : "1:16.361",
          "Barcelone" : "1:05.047"
        },
        "Time" : {
          "Melbourne" : [1,1,0,6,8,6],
          "Interlagos" : [1,0,3,6,0,4],
          "Imola" : [1,0,6,5,0,7],
          "Silverstone" : [1,1,6,3,6,1]
        },
        "Pôles" : 4,
        "Ecurie" : "Prost Peugeot"
      }
  ]

let newpoint = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let oldpoint = [10, 6, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


function comptage(runner){
    let scoring = 0;
    for (const property in runner) {
        if (`${runner[property]}` === 'DNF')
            {
                scoring = scoring + 0
            }
        else
            {
                scoring = scoring + newpoint[parseInt(`${runner[property]}`)-1]
            }
      }
    return scoring
}

function oldcomptage(runner){
    let scoring = 0;
    for (const property in runner) {
        if (`${runner[property]}` === 'DNF')
            {
                scoring = scoring + 0
            }
        else
            {
                scoring = scoring + oldpoint[parseInt(`${runner[property]}`)-1]
            }
      }
    return scoring
}


function totalTime(timer){
    let milli3 = 0;
    let milli2 = 0;
    let milli1 = 0;
    let sec2 = 0;
    let sec1 = 0;
    let min = 0;
    for (const property in timer){
        milli3 = milli3 + parseInt(`${timer[property]}`[10]);
        milli2 = milli2 + parseInt(`${timer[property]}`[8]);
        milli1 = milli1 + parseInt(`${timer[property]}`[6]);
        sec2 = sec2 + parseInt(`${timer[property]}`[4]);
        sec1 = sec1 + parseInt(`${timer[property]}`[2]);
        min = min + parseInt(`${timer[property]}`[0]);
    }
    while (milli3 > 9){
        milli3 = milli3 - 10;
        milli2 = milli2 + 1;
    }
    while (milli2 > 9){
        milli2 = milli2 - 10;
        milli1 = milli1 + 1;
    }
    while (milli1 > 9){
        milli1 = milli1 - 10;
        sec2 = sec2 + 1;
    }
    while (sec2 > 9){
        sec2 = sec2 - 10;
        sec1 = sec1 + 1;
    }
    while (sec1 > 5){
        sec1 = sec1 - 6;
        min = min + 1;
    }
    return min + ":" + sec1 + sec2 + "." + milli1 + milli2 + milli3
}
  
  function initTableau(data) {
      
      const tbody = document.querySelector( '#table-facture' ).querySelector( 'tbody');
    
      for ( let i = 0; i < data.length; i++ )
      {
        const ligne = tbody.insertRow();
    
        // cellules activitÃ©s
        let cellNOM = ligne.insertCell();
        cellNOM.innerHTML = data[i].Nom;
    
        // cellules cotisations
        let cellDURÉE = ligne.insertCell()
        cellDURÉE.innerHTML = comptage(data[i].Race);
    
        // cellules tarifs
        let cellNB = ligne.insertCell();
        cellNB.innerHTML = oldcomptage(data[i].Race);
  
        let cellDURÉETOT = ligne.insertCell();
        cellDURÉETOT.innerHTML = totalTime(data[i].Time);
  
        let cellPOLES = ligne.insertCell();
        cellPOLES.innerHTML = data[i].Pôles;

        let cellNOTE = ligne.insertCell();
        cellNOTE.innerHTML = data[i].Ecurie;
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