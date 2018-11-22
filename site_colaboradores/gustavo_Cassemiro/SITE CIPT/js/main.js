
$(document).ready(function(){
	$("#open").click(function(event){
	  event.preventDefault();
	  $("#capaefectos").hide("slow");
	});
 
	$("#closebtn").click(function(event){
	  event.preventDefault();
	  $("#capaefectos").show(3000);
	});
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
}

function openNav() {
			document.getElementById("mySidenav").style.width = "50%";
		}
		function closeNav() {
			document.getElementById("mySidenav").style.width = "0";
		}

var swiper = new Swiper('.s1', {
     centeredSlides: true,
     loop: true,
     autoplay: {
          delay: 5000,
          disableOnInteraction: false,
     },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
});
		