var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);
function countDownToJune26() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let target = new Date(`${currentYear}-06-26T00:00:00`);

    // Nếu đã qua ngày 26/6 trong năm hiện tại, đếm đến 26/6 năm sau
    if (now > target) {
        target = new Date(`${currentYear + 1}-06-26T00:00:00`);
    }

    const seconds = Math.floor((target - now) / 1000);

    if (seconds <= 0) {
        document.getElementById("clock").innerHTML = "Đã đến ngày 26/6!";
        return;
    }

    const days = Math.floor(seconds / (3600 * 24));
    const hours = String(Math.floor((seconds % (3600 * 24)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');

    const result = `<span class="digit">${days}</span> ngày 
                    <span class="digit">${hours}</span> giờ 
                    <span class="digit">${minutes}</span> phút 
                    <span class="digit">${secs}</span> giây`;

    document.getElementById("clock").innerHTML = result;
}

// Gọi mỗi giây
setInterval(countDownToJune26, 1000);