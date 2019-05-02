$('#dis1').click(function(){
  $.ajax({
   type: 'POST',
   url: 'distancia.php',
   data:{distancia: $(".usu").val()},
   success: function(data) {
     console.log('HOLA');
  	$(".tabla_dist").html(data);
   }
  });
})
