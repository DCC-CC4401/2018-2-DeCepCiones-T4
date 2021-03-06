function jumpTo(anchor) {
	document.getElementById(anchor).scrollIntoView();
}

function actualizarVariables(idCoev, idEvaluado, idEvaluador, nombreEvaluado) {
	document.getElementById("formCoevID").value = idCoev;
	document.getElementById("formEvaluadoID").value = idEvaluado;
	document.getElementById("formEvaluadorID").value = idEvaluador;
	document.getElementById("nombreEvaluado").innerHTML = nombreEvaluado;
}

/* Home page */

function addCoev() {
    document.getElementById("add-coev-form").style.display = "block";
    document.getElementById("add-curso-form").style.display = "none";
    document.getElementById("add-coev-btn").classList.add("active");
    document.getElementById("add-curso-btn").classList.remove("active");
}

function addCurso() {
    document.getElementById("add-coev-form").style.display = "none";
    document.getElementById("add-curso-form").style.display = "block";
    document.getElementById("add-coev-btn").classList.remove("active");
    document.getElementById("add-curso-btn").classList.add("active");
}

function cancelAdd() {
    document.getElementById("add-coev-form").style.display = "none";
    document.getElementById("add-curso-form").style.display = "none";
    document.getElementById("add-coev-btn").classList.remove("active");
    document.getElementById("add-curso-btn").classList.remove("active");
}

/* Perfil */

function changePass() {
    document.getElementById("cambiar-contrasena").style.display = "block";
    document.getElementById("notas-resumen").style.display = "none";
    document.getElementById("notas-placeholder").style.display = "none";
    document.getElementById("change-pass-btn").classList.add("active");
    document.getElementById("row-btn").classList.remove("active");
}

function showNotas() {
    document.getElementById("cambiar-contrasena").style.display = "none";
    document.getElementById("notas-resumen").style.display = "block";
    document.getElementById("notas-placeholder").style.display = "none";
    //document.getElementById("row-btn").classList.add("active");
    var changePass = document.getElementById("change-pass-btn");
    if (changePass !== null) changePass.classList.remove("active");
}

function setNotas(nombre, notas) {
    var tBod = $('#tablaNotas > tbody');
    tBod.empty();
    var cursoNom = $('#currentCurso').empty();
    cursoNom.append(nombre);

    notas.forEach(function(ele) {
       tBod.append("<tr><td class='td-fecha'>" + ele.publicada + "</td><td>" +
           ele.nombre + "</td><td class='td-nota'>" + ele.nota + "</td></tr>")
    });
}

function cancelPass() {
    document.getElementById("cambiar-contrasena").style.display = "none";
    document.getElementById("notas-resumen").style.display = "none";
    document.getElementById("change-pass-btn").classList.add("active");
    document.getElementById("notas-placeholder").style.display = "block";
}

/* Gestión Curso */

function showNewCoevaluacion(idCurso) {
    document.getElementById('tablaCoevs').style.display = "none";
    document.getElementById('nuevaCoev').style.display = "block";
    document.getElementById('formCursoID').value = idCurso;
}

function showTablaCoev() {
    document.getElementById('tablaCoevs').style.display = "block";
    document.getElementById('nuevaCoev').style.display = "none";
}

function showGestionEstudiante() {
    document.getElementById("gestion-grupo").style.display = "none";
    document.getElementById("gestion-estudiante").style.display = "block";
    document.getElementById("gestion-placeholder").style.display = "none";
    document.getElementById("active-estudiante").classList.add("active");
    document.getElementById("active-grupo").classList.remove("active");
}

function showGestionGrupo() {
    document.getElementById("gestion-grupo").style.display = "block";
    document.getElementById("gestion-estudiante").style.display = "none";
    document.getElementById("gestion-placeholder").style.display = "none";
    document.getElementById("active-grupo").classList.add("active");
    document.getElementById("active-estudiante").classList.remove("active");
}