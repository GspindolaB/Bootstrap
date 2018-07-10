$(function() {
    var boton = $('#btn-menu');
    var fondo_enlace = $('#fondo-enlace');
    //Cada que se haga clic en el botón se le colocara la clase active al enlace
    boton.on('click', function() {
        fondo_enlace.toggleClass('active');
        //Coloca la clase active al hacer clic en el boton
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });
    //Cada que se haga clic en el enlace se le quitara la clase active al enlace
    fondo_enlace.on('click', function() {
        fondo_enlace.toggleClass('active');
        //Quita la clase active al hacer clic en el enlace
        $('#barra-lateral-izquierda').toggleClass('active');
    });
});