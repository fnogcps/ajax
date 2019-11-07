function getToken(){
        $.ajax({
        url: 'http://localhost/token-temporario/api.php',
        method: 'post',
        processData: false,
        contentType: false,
        success: function(e) {
            $('#token').text(e)
        }
    })
}
