    
function ejecutar (){
    let opciones = $('#opciones').val();
    let valor1 = Number($('#valor1').val());
    let mensaje='';
    let resultado =0;

    switch(opciones){
        case '1':
            resultado= (valor1 / 862535.55);
            mensaje = 'puedes comprar : ' + resultado + ' con: ' + valor1;
            break;
        case '2':
            resultado= (valor1 / 26897.87);
            mensaje = 'puedes comprar: ' + resultado +' con: ' + valor1;
            break;
        case '3':
            resultado = (valor1 / 1.24);
            mensaje = 'puedes comprar:' + resultado + ' con: ' + valor1;
            break;
        case '4':
            resultado = (valor1 / 9.56);
            mensaje = 'puedes comprar: ' + resultado + ' con: ' + valor1;
            break;
        default:
            alert('no esxite esta opcion');
            breack;
    }
    swal(mensaje.toString(), 'success');
}
$('#btnEjecutar').click(function(){
    $('#btnEjecutar').click(function(){
        ejecutar();
    });
});