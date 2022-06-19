$('.btnad').click(function(){
    if($('#id').val().length == 0 || $('#name').val().length == 0) {
        alert('Hãy nhập đầy đủ thông tin')
    }
    else{
        alert('Chỉnh sửa thành công')
    }
});