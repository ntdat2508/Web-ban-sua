var filter = /^[1-9-+]+$/
$('.btnad').click(function(){
    if($('#id').val().length == 0 || $('#name').val().length == 0 || $('#brandname').val().length ==0 || $('#number').val().length ==0 || $('#unit').val().length ==0) {
        alert('Hãy nhập đầy đủ thông tin')
    }
    else if(filter.test($('#number').val())==false){
        alert('Số lượng không hợp lệ')
    }
    else{
        alert('Chỉnh sửa thành công')
    }
});