var header = document.getElementById('header');
    var menuBtn = document.getElementById('menu');
    var headerHeight = header.clientHeight;

        menuBtn.onclick = function() {
            var isClosed = header.clientHeight === headerHeight;
            if (isClosed) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }