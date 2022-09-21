function tinhSinhNhat() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    if(day == "" || month == ""){
        document.getElementById("vungChua").innerHTML =  '<div class="alert alert-danger">"Chưa nhập thông tin mà đòi tìm sinh nhật ? wtf"</div>';
    }else if(day<=0 || day>31 || month<=0 || month>12){
        document.getElementById("vungChua").innerHTML =  '<div class="alert alert-warning">'+"Bạn sinh ngày "+day+" tháng "+month+" à ? Ảo vcl thế, anh méo tin."+'</div>';
    }
    else{
        document.getElementById("vungChua").innerHTML =  '<div class="alert alert-info">'+"Sinh nhật của bạn là ngày "+ day +"/"+ month +" đúng chứ ^^ , thấy tôi giỏi không."+'</div>';
    }
}

function xemChiTiet(){
    alert("Tôi đã phát hiện bạn mang giới tính nữ. Bạn không có quyền được xem ^^");
}