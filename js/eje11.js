function mostrarAlerta() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var chamba = document.getElementById("chamba").value;
    
    alert("Bienvenido: " + nombre + 
        "\nal curso de Java, tienes: " + edad + 
        "\ny eres " + chamba);
}

document.getElementById("btn").addEventListener("click", mostrarAlerta);