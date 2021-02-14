function eliminar(id){
	swal({
  title: "Estas seguro?",
  text: "Once deleted, you will not be able to recover this registry!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
  $.ajax({
  url:"/eliminar/" + id,
  success: function(res){
  			console.log(res);
  				}
  });
    swal("Poof! Your registry has been deleted!", {
      icon: "success",
    }).then((ok)=>{
    	if(ok){
    		location.href="/listar";
    	}
    });
  } else {
    swal("Your registry is safe!");
  }
});
}