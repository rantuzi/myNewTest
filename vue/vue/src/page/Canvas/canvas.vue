<template>
    <div class="y-z-m">
        <div class="contant">
                <!-- <canvas id="sliderBlock"></!-->
            <canvas id="codeImg"></canvas>
            <canvas id="NcodeImg" width="320" height="320"></canvas>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            //拼图验证码初始化
            canvasInit(bg) {
                //生成指定区间的随机数
                const random = (min, max) => {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                };
                //x: 254, y: 109
                let mx = random(127, 244),
                    bx = random(10, 128),
                    y = random(10, 99);

                this.slider = { mx, bx };
                this.draw(mx, bx, y);
            },
            draw(mx, bx, y) {
                let codeImg = document.querySelector('#NcodeImg');
                let bg = codeImg.getContext('2d');
                bg.beginPath();
                bg.moveTo(50,50);
                bg.lineTo(70,50);
                bg.stroke();
                bg.closePath();
                bg.beginPath();
                bg.arc(80,50, 10, 0, Math.PI, false)
                // bg.stroke();
                // bg.closePath();
                // bg.beginPath();
                bg.moveTo(90,50);
                bg.lineTo(110,50);
                // bg.lineTo(110,70);
                // bg.stroke();
                // bg.closePath();
                // bg.beginPath();
                bg.arc(110,80, 10, 1.5*Math.PI, 2.5*Math.PI)
                // bg.stroke();
                // bg.closePath();
                // bg.beginPath();
                // bg.moveTo(110,90);
                bg.lineTo(110,110);
                bg.lineTo(90,110);
                // bg.stroke();
                // bg.closePath();

                // bg.beginPath();
                bg.arc(80,110, 10, 0, 1*Math.PI)
                // bg.stroke();
                // bg.closePath();

                // bg.beginPath();
                // bg.moveTo(70,110);
                bg.lineTo(50,110);
                // bg.lineTo(50,90);
                // bg.stroke();

                // bg.beginPath();
                bg.arc(50,80, 10, 0.5*Math.PI, 1.5*Math.PI, true)
                // bg.stroke();
                // bg.closePath();

                // bg.beginPath();
                // bg.moveTo(50,70);
                bg.lineTo(50,50);
                // bg.stroke();
                // bg.closePath();
                
                bg.fillStyle = '#0000ff'
                bg.fill();
                bg.stroke(); 
                // bg.globalCompositeOperation = "xor";
                // bg.fillRect(20,20,150,100);
            },
            drawBg () {
                let codeImg = document.querySelector('#codeImg');
                let bg = codeImg.getContext('2d');
                let imgBg = require('./img/dog.jpg');
                let img = document.createElement('img');
                img.src = imgBg;
                img.onload = function() {
                    bg.drawImage(img, 0, 0, 300, 150)
                }
                this.canvasInit(bg)
            }
        },
        mounted() {
            this.drawBg()
        }
    }
</script>
<style>
    html, body, #app {
        width: 100%;
        height: 100%;
    }
   .y-z-m {
       background-image: url('./img/time.jpg');
       background-size: 100% 100%;
       width: 100%;
       height: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
   } 
   .contant {
       width: 320px;
       height: 320px;
       background: #ffffff;
       position: absolute;
   }
   #codeImg {
       width: 100%;
       height: 100%;
   }
   #NcodeImg {
        position: absolute;
        left: 0;
        top: 0;
   }
</style>