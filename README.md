<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
    <link type="text/css" rel="stylesheet" href="./asset/style.css">
    <script type="text/javascript" src="./asset/jquery.min.js"></script>
    <script type="text/javascript" src="./asset/jscex.min.js"></script>
    <script type="text/javascript" src="./asset/jscex-parser.js"></script>
    <script type="text/javascript" src="./asset/jscex-jit.js"></script>
    <script type="text/javascript" src="./asset/jscex-builderbase.min.js"></script>
    <script type="text/javascript" src="./asset/jscex-async.min.js"></script>
    <script type="text/javascript" src="./asset/jscex-async-powerpack.min.js"></script>
    <script type="text/javascript" src="./asset/functions.js" charset="utf-8"></script>
    <script type="text/javascript" src="./asset/love.js" charset="utf-8"></script>
</head>
</head>
    <body>
 
			<audio autoplay="autoplay" >
					<source src="music/nhac.mp3" type="audio/mp3" />
            </audio> 

          

        <div id="main">
            <div id="error">(<a href="http://www.google.cn/chrome">Chrome</a>) và (<a href="http://firefox.com/download/">Firefox</a>)</div>
             <div id="wrap">
                <div id="text" style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;">
			        <div id="code">
			      <font color="#000" ><span class="say">Halo thầy Thắng và thầy Ngọc Anh và cả team TYHH. Như vậy là chặng đường cuối của gia đình LOVEVIP đã gần đến rồi nhưng những gì em nhận được từ hai thầy và đại gia đình TYHH sẽ luôn đọng lại rất lâu trong lòng em.</span><br>
						<span class="say"> </span><br>
						<span class="say">Đầu tiên, em xin kính gửi lời cám ơn đến sự nghiêm khắc và xen lẫn âm nhạc trong việc giảng dạy của thầy Thắng để cho mọi người có thể tiếp nhận bài học 1 cách dễ dàng và vui vẻ. Em cảm ơn thầy Ngọc Anh luôn cho cảm nhận được sự gần gũi, tận tình và rất bao dung. Em đặc biệt biết ơn thầy vì những lần sẵn sàng hỗ trợ học sinh ngoài giờ, dù muộn đến đâu.  </span><br>
						<span class="say">Dù không phải học sinh nổi bật, hay phát biểu trong live nhưng  em vẫn luôn trân trọng từng cơ hội được học với hai thầy. Em cũng xin cảm ơn team TYHH – những người luôn âm thầm đứng sau hỗ trợ chúng em từng chút một.</span><br>
						<span class="say">Mong rằng mọi người trong đại gia đình LOVEVIP có thể làm bài thi thuận buồm xuôi gió và đỗ NV1 nhé !! Cảm ơn Thầy Thắng và Thầy Ngọc vì đã đồng hành cùng em trên chặng đường thanh xuân này, luôn động viên chúng em sau mỗi buổi học</span><br>
                        <span class="say"><span class="space"><img src="image/tym.png" alt=""><br>
                        <span class="say"><span class="space"></span> -keobogn-</span>
			  </font></p>
      </div>
                </div>
                <div id="clock-box">
                    <span class="STYLE1"></span><font color="#FF0000">Đếm ngược ngày thi TN THPT 2025</font>
<!-- <span class="STYLE1"> Time of love...</span> -->
                  <div id="clock"></div>
              </div>
                <canvas id="canvas" width="1100" height="680"></canvas>
            </div>
            
        </div>
        <audio id="myAudio" autoplay="autoplay">
        <source src="music/nhac.mp3" type="audio/mp3" />
    </audio>

</body>
<script src="./asset/script.js"></script>
    
    <script>
    </script>

    <script>
    (function(){
        var canvas = $('#canvas');
		
        if (!canvas[0].getContext) {
            $("#error").show();
            return false;        }

        var width = canvas.width();
        var height = canvas.height();        
        canvas.attr("width", width);
        canvas.attr("height", height);
        var opts = {
            seed: {
                x: width / 2 - 20,
                color: "rgb(190, 26, 37)",
                scale: 2
            },
            branch: [
                [535, 680, 570, 250, 500, 200, 30, 100, [
                    [540, 500, 455, 417, 340, 400, 13, 100, [
                        [450, 435, 434, 430, 394, 395, 2, 40]
                    ]],
                    [550, 445, 600, 356, 680, 345, 12, 100, [
                        [578, 400, 648, 409, 661, 426, 3, 80]
                    ]],
                    [539, 281, 537, 248, 534, 217, 3, 40],
                    [546, 397, 413, 247, 328, 244, 9, 80, [
                        [427, 286, 383, 253, 371, 205, 2, 40],
                        [498, 345, 435, 315, 395, 330, 4, 60]
                    ]],
                    [546, 357, 608, 252, 678, 221, 6, 100, [
                        [590, 293, 646, 277, 648, 271, 2, 80]
                    ]]
                ]] 
            ],
            bloom: {
                num: 700,
                width: 1080,
                height: 650,
            },
            footer: {
                width: 1200,
                height: 5,
                speed: 10,
            }
        }

        var tree = new Tree(canvas[0], width, height, opts);
        var seed = tree.seed;
        var foot = tree.footer;
        var hold = 1;

        canvas.click(function(e) {
            var offset = canvas.offset(), x, y;
            x = e.pageX - offset.left;
            y = e.pageY - offset.top;
            if (seed.hover(x, y)) {
                hold = 0; 
                canvas.unbind("click");
                canvas.unbind("mousemove");
                canvas.removeClass('hand');
            }
        }).mousemove(function(e){
            var offset = canvas.offset(), x, y;
            x = e.pageX - offset.left;
            y = e.pageY - offset.top;
            canvas.toggleClass('hand', seed.hover(x, y));
        });

        var seedAnimate = eval(Jscex.compile("async", function () {
            seed.draw();
            while (hold) {
                $await(Jscex.Async.sleep(10));
            }
            while (seed.canScale()) {
                seed.scale(0.95);
                $await(Jscex.Async.sleep(10));
            }
            while (seed.canMove()) {
                seed.move(0, 2);
                foot.draw();
                $await(Jscex.Async.sleep(10));
            }
        }));

        var growAnimate = eval(Jscex.compile("async", function () {
            do {
    	        tree.grow();
                $await(Jscex.Async.sleep(10));
            } while (tree.canGrow());
        }));

        var flowAnimate = eval(Jscex.compile("async", function () {
            do {
    	        tree.flower(2);
                $await(Jscex.Async.sleep(10));
            } while (tree.canFlower());
        }));

        var moveAnimate = eval(Jscex.compile("async", function () {
            tree.snapshot("p1", 240, 0, 610, 680);
            while (tree.move("p1", 500, 0)) {
                foot.draw();
                $await(Jscex.Async.sleep(10));
            }
            foot.draw();
            tree.snapshot("p2", 500, 0, 610, 680);

            canvas.parent().css("background", "url(" + tree.toDataURL('image/png') + ")");
            canvas.css("background", "#ffe");
            $await(Jscex.Async.sleep(300));
            canvas.css("background", "none");
        }));

        var jumpAnimate = eval(Jscex.compile("async", function () {
            var ctx = tree.ctx;
            while (true) {
                tree.ctx.clearRect(0, 0, width, height);
                tree.jump();
                foot.draw();
                $await(Jscex.Async.sleep(25));
            }
        }));

        var textAnimate = eval(Jscex.compile("async", function () {
		    var together = new Date();
		    together.setFullYear(2018,2 , 8); 			
		    together.setHours(0);							
		    together.setMinutes(0);				
		    together.setSeconds(0);					
            together.setMilliseconds(0);
            
           

		    $("#code").show().typewriter();
            $("#clock-box").fadeIn(500);
            while (true) {
                timeElapse(together);
                $await(Jscex.Async.sleep(1000));
            }
        }));

        var runAsync = eval(Jscex.compile("async", function () {
            $await(seedAnimate());
            $await(growAnimate());
            $await(flowAnimate());
            $await(moveAnimate());

            textAnimate().start();

            $await(jumpAnimate());
        }));

        runAsync().start();
    })();
    </script>

</html>
