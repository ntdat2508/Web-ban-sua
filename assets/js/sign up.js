var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/  
var filter = /^[0-9-+]+$/
$('#submit_btn').click(function(){
    if($('#username').val().length == 0 || $('#password').val().length == 0 || $('#number').val().length ==0 || $('#email').val().length ==0) {
        alert('Hãy nhập đầy đủ thông tin')
    }
    else if(filter.test($('#number').val())==false){
        alert('Số điện thoại không hợp lệ')
    }
    else if(emailRegex.test($('#email').val())==false){
        alert('Email không hợp lệ')
    }
    else if($("#password").val()!=$("#confirmpassword").val()){
        alert('Mật khẩu không khớp')
    }
    else{
        alert('Đăng ký thành công')
        window.location.replace('http://127.0.0.1:5500/User/signin.html')
    }
});