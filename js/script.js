function IE(e) {
    if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
        alert('OPPS!  selam codır ab zahmet etme githubda açık kaynak buluncaktır.');
        return false;
    }
}

function NS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == "2" || e.which == "3") {
            alert('OPPS!  selam codır ab zahmet etme githubda açık kaynak buluncaktır.');
            return false;
        }
    }
}
document.onmousedown = IE;
document.onmouseup = NS;
document.oncontextmenu = new Function("return false");