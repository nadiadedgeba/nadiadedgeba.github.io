function alert_name() {
    //Create name vriable
    var name = "Nadia";
    alert("My name is " + name);
    console.log("Test 123");
}

function change_image(){
  var image = document.getElementById('beach_id');
  image.src = "viewpoint.jpg";
}
function increase_size(){
  var image = document.getElementById('beach_id');
  image.style.width = "800px"
}

function normal_size(){
  var image = document.getElementById('beach_id');
  image.style.width = "200px"
}
