


function calculate (){
    a1 = Number(document.getElementById("pa1").value)
    a2 = Number(document.getElementById("pa2").value)
    a3 = Number(document.getElementById("pa3").value)
    a4 = Number(document.getElementById("pa4").value)
    a5 = Number(document.getElementById("pa5").value)
    a6 = Number(document.getElementById("pa6").value)
    a7 = Number(document.getElementById("pa7").value)
    a8 = Number(document.getElementById("pa8").value)
    a9 = Number(document.getElementById("pa9").value)
    a10 = Number(document.getElementById("pa10").value)

    t1 = Number(document.getElementById("pt1").value)
    t2 = Number(document.getElementById("pt2").value)
    t3 = Number(document.getElementById("pt3").value)
    t4 = Number(document.getElementById("pt4").value)
    t5 = Number(document.getElementById("pt5").value)
    t6 = Number(document.getElementById("pt6").value)
    t7 = Number(document.getElementById("pt7").value)
    t8 = Number(document.getElementById("pt8").value)
    t9 = Number(document.getElementById("pt9").value)
    t10 = Number(document.getElementById("pt10").value)
    var totalhour = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10
    var attendhour = a1+a2+a3+a4+a5+a6+a7+a8+a9+a10
    var per = (attendhour/totalhour)*100
    document.getElementById("total-hours").innerHTML = totalhour;
    document.getElementById("total-attend-hours").innerHTML = attendhour;
    document.getElementById("total-average-percent").innerHTML = Math.round(per);    
    
}