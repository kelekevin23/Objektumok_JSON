/*var termekek = [
    {
        ID: 1,
        termek: "Napszemüveg",
        szin: "fehér",
        ar: "7990",
        marka: "adidas"
    },
    {
        ID: 2,
        termek: "Futócipő",
        szin: "fekete",
        ar: "14990",
        marka: "puma"
    },
    {
        ID: 3,
        termek: "Kapuskesztyű",
        szin: "vörös",
        ar: "6490",
        marka: "nike"
    }

];
*/
var szovegJSON = '[{"ID": 1, "termek": "Napszemüveg", "szin": "fehér","ar": "7990","marka": "adidas"},{"ID": 2,"termek": "Futócipő","szin": "fekete","ar": "14990","marka": "puma"},{"ID": 3,"termek": "Kapuskesztyű","szin": "vörös","ar": "6490","marka": "nike"}]';

var nev = true;
var kor = true;
var fajta = true;
var id = 0;
var szovegbolObjektum = JSON.parse(szovegJSON);
$(function () {
    
//    $("article").append(szovegJSON+"<br>");
//szövegből objektum
    
//    $("article").append(szovegbolObjektum+"<br>");
//    console.log(szovegbolObjektum);
    
    kiir();
    $("#kuld").click(ment);
    $(".torol").click(torles);
});

function ment(){
    var ujtermek = {};
    ujtermek.ID = $("#id").val();
    ujtermek.termek = $("#tnev").val();
    ujtermek.szin = $("#szin").val();
    ujtermek.ar = $("#ar").val();
    ujtermek.marka = $("#marka").val();
    
//    console.log(ujtermek);
    szovegbolObjektum.push(ujtermek);
//    console.log(szovegbolObjektum);
    kiir();
   
}
function torles(){
    
    var ez = szovegbolObjektum.indexOf();
    
//    szovegbolObjektum.splice(ez);
//    kiir();
    console.log(szovegbolObjektum);
}
function feltolt() {
    var azon = this.id;
    rendez(azon);
}

function rendez(szam) {
    if (szam === "0") {
        if (nev === true) {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["ID"] > b["ID"]) - 0.5;
            });
            nev = false;
        } else {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["ID"] < b["ID"]) - 0.5;
            });
            nev = true;
        }
        kiir();

    } else if (szam === "1") {
        if (kor === true) {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["termek"] > b["termek"]) - 0.5;
            });
            kor = false;
        } else {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["termek"] < b["termek"]) - 0.5;
            });
            kor = true;
        }
        kiir();
    } else if (szam === "2") {
        if (fajta === true) {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["szin"] > b["szin"]) - 0.5;
            });
            fajta = false;
        } else {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["szin"] < b["szin"]) - 0.5;
            });
            fajta = true;
        }
        kiir();
    } else if (szam === "3") {
        if (fajta === true) {
            szovegbolObjektum.sort(function (a, b) {
                return a["ar"] - b["ar"];
            });
            fajta = false;
        } else {
            szovegbolObjektum.sort(function (a, b) {
                return b["ar"] - a["ar"];
            });
            fajta = true;
        }
        kiir();
    } else if (szam === "4") {
        if (fajta === true) {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["gyarto"] > b["gyarto"]) - 0.5;
            });
            fajta = false;
        } else {
            szovegbolObjektum.sort(function (a, b) {
                return Number(a["gyarto"] < b["gyarto"]) - 0.5;
            });
            fajta = true;
        }
        kiir();
    }

}

function kiir() {
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>ID</th><th>Termék neve</th><th>Szín</th><th>Ár</th><th>Márka</th></tr>");
    for (var i = 0; i < szovegbolObjektum.length; i++) {
        $("article table").append("<tr></tr>");

        for (var item in szovegbolObjektum[i]) {
            $("article table tr").eq(i + 1).append("<td>" + szovegbolObjektum[i][item] + "</td>");
        }
        $("article table tr").eq(i + 1).append('<td><input type="button" class="torol" value="Töröl"></td>');
    }
    for (var i = 0; i <= $("article table tr").length; i++) {
        $("article table tr th").eq(i).attr('id', i);
    }

    
    $("article table tr th").click(feltolt);
}