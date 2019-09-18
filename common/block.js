// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function(){
    console.log(myGameArea.message.docIsReady);
    window.myGameArea.start(); //window.myGameArea.start()
   this.myGamePiece = new this.Component(30,30,"red",10,120);
}


// 환경정보를 가진 객체 
var myGameArea = {
    canvas : document.createElement("canvas"),
    message : {
        
        docIsReady : "문서가 준비되었습니다."

    },

    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        document.body.insertBefore(this.canvas, documnet.body.childNodes[0]);

    }





}

//컴포넌트 생성자 함수
function Component(w , h, c, x, y){

            this.x = x;
            this.y = y;
            this.c = c;
            this.w = w;
            this.h = h;

            ctx = myGameArea.context;
            ctx.fillStyle= c;
            ctx.fillRect(this.x,this.y,this.w,this.h);
}