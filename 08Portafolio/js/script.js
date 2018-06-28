$(function() {
    //Accedemos a los elementos con la clase galeria y contenedor imagen  y les colocamos el evento click
    $('.galeria .contenedor-imagen').on('click', function() {
        //Para ele elemento con el id modal le ponemos el evento modal
        $('#modal').modal;
        //La variable contendra la ruta del elemento this y lo colocara en el atributo src
        var ruta_imagen = ($(this).find('img').attr('src'));
        //El elemento con el id imagen-modal es inicialicado con la variable declarada anteriotmente
        $('#imagen-modal').attr('src', ruta_imagen);
    });

    $('#modal').on('click', function() {
        $('#modal').modal('hide');
    });
});