function kiszamolas() {
    var oldalk = parseInt(document.getElementById('oldal').value);
    var szorzo = 4;

    var oldalt = parseInt(document.getElementById('oldalt').value);

    var oldalkt = parseInt(document.getElementById('oldalkt').value);

    var oldalkf = parseInt(document.getElementById('oldalkf').value);
    var szorzo2 = 6;

    var sugar = parseInt(document.getElementById('sugar').value);

    var sugar1 = parseInt(document.getElementById('sugar1').value);

    var sugar2 = parseInt(document.getElementById('sugar2').value);

    var sugar3 = parseInt(document.getElementById('sugar3').value);

// Mértékegységek

    var megy = document.getElementById('megység').value;

    var megy1 = document.getElementById('megység1').value;

    var megy2 = document.getElementById('megység2').value;

    var megy3 = document.getElementById('megység3').value;

    var megy4 = document.getElementById('megység4').value;

    var megy5 = document.getElementById('megység5').value;

    var megy6 = document.getElementById('megység6').value;

    var megy7 = document.getElementById('megység7').value;

// Négyzet kerülete megy
    if(megy == "mm")
    {
        var megy = " mm"
    }

    if(megy == "cm")
    {
        var megy = " cm"
    }

    if(megy == "dm")
    {
        var megy = " dm"
    }

    if(megy == "m")
    {
        var megy = " m"
    }

    if(megy == "km")
    {
        var megy = " km"
    }

//  Négyzet területe megy

    if(megy1 == "mm")
    {
        var megy1 = " mm"
    }

    if(megy1 == "cm")
    {
        var megy1 = " cm"
    }

    if(megy1 == "dm")
    {
        var megy1 = " dm"
    }

    if(megy1 == "m")
    {
        var megy1 = " m"
    }

    if(megy1 == "km")
    {
        var megy1 = " km"
    }
// Kocka felszíne megy

if(megy2 == "mm")
    {
        var megy2 = " mm"
    }

    if(megy2 == "cm")
    {
        var megy2 = " cm"
    }

    if(megy2 == "dm")
    {
        var megy2 = " dm"
    }

    if(megy2 == "m")
    {
        var megy2 = " m"
    }

    if(megy2 == "km")
    {
        var megy2 = " km"
    }

//  Kocka térfogata megy

    if(megy3 == "mm")
    {
        var megy3 = " mm"
    }

    if(megy3 == "cm")
    {
        var megy3 = " cm"
    }

    if(megy3 == "dm")
    {
        var megy3 = " dm"
    }

    if(megy3 == "m")
    {
        var megy3 = " m"
    }

    if(megy3 == "km")
    {
        var megy3 = " km"
    }

// Kör kerülete megy

    if(megy4 == "mm")
    {
        var megy4 = " mm"
    }

    if(megy4 == "cm")
    {
        var megy4 = " cm"
    }

    if(megy4 == "dm")
    {
        var megy4 = " dm"
    }

    if(megy4 == "m")
    {
        var megy4 = " m"
    }

    if(megy4 == "km")
    {
        var megy4 = " km"
    }

// Kor terulete megy

    if(megy5 == "mm")
    {
        var megy5 = " mm"
    }

    if(megy5 == "cm")
    {
        var megy5 = " cm"
    }

    if(megy5 == "dm")
    {
        var megy5 = " dm"
    }

    if(megy5 == "m")
    {
        var megy5 = " m"
    }

    if(megy5 == "km")
    {
        var megy5 = " km"
    }

// Gömb felszíne megy

if(megy6 == "mm")
    {
        var megy6 = " mm"
    }

    if(megy6 == "cm")
    {
        var megy6 = " cm"
    }

    if(megy6 == "dm")
    {
        var megy6 = " dm"
    }

    if(megy6 == "m")
    {
        var megy6 = " m"
    }

    if(megy6 == "km")
    {
        var megy6 = " km"
    }

// Gömb térfogata megy

    if(megy7 == "mm")
    {
        var megy7 = " mm"
    }

    if(megy7 == "cm")
    {
        var megy7 = " cm"
    }

    if(megy7 == "dm")
    {
        var megy7 = " dm"
    }

    if(megy7 == "m")
    {
        var megy7 = " m"
    }

    if(megy7 == "km")
    {
        var megy7 = " km"
    }


    var nkeredmeny = oldalk * szorzo;
    document.getElementById('nkeredmeny').value = nkeredmeny.toLocaleString() + megy;

    var nteredmeny = oldalt * oldalt;
    document.getElementById('nteredmeny').value = nteredmeny.toLocaleString() + megy1;

    var kferedmeny = oldalkf * oldalkf * szorzo2;
    document.getElementById('kferedmeny').value = kferedmeny.toLocaleString() + megy2;

    var kteredmeny = oldalkt * oldalkt * oldalkt;
    document.getElementById('kteredmeny').value = kteredmeny.toLocaleString() + megy3;

    var korkeredmeny = 2 * sugar * Math.PI;
    document.getElementById('korkeredmeny').value = korkeredmeny.toLocaleString() + megy4;

    var korteredmeny = (sugar1 * sugar1) * Math.PI;
    document.getElementById('korteredmeny').value = korteredmeny.toLocaleString() + megy5;

    var gombferedmeny = 4 * Math.PI * (sugar2 * sugar2);
    document.getElementById('gombferedmeny').value = gombferedmeny.toLocaleString() + megy6;

    var gombteredmeny = (4/3) * Math.PI * (sugar3 * sugar3 * sugar3);
    document.getElementById('gombteredmeny').value = gombteredmeny.toLocaleString() + megy7;
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });