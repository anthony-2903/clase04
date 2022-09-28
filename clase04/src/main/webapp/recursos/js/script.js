$(document).ready(function(){
	alert("roja");
	listar();
});

function listar(){
	$.get("http://localhost:8080/api/alumno_se_matricula_asignatura/all",function(data){
		//let x = JSON.stringify(data);
		alert(data);
		for(let i=0;i<data.length;i++){
			$("#datos").append("<option>"+data[i].title+"</optiop>");
		}

	});
}