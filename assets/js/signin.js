var username = ['admin']
var password = ['khanh12345']
$('#submit_btn').click(function(){
    if($('#username').val().length === 0 && $('#password').val().length === 0) {
        alert('Hãy nhập đầy đủ thông tin')
    }
    else {
        var check = 0;
        for (var i=0;i<username.length;i++){
            if ($('#username').val()==username[i] && $('#password').val()==password[i])
                check = 1
        }
        if(check==0) {
            alert('Tài khoản hoặc mật khẩu bị sai')
        }
        else { 
            window.location.replace("http://127.0.0.1:5500/User/admin.html")
        }
    } 
});