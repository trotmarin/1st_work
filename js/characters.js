new Character({
    // xPos: Math.random() *100,
    xPos: 0,
    speed: Math.random() * 0.5 + 0.2
});


function Character(info) {
    this.mainElem = document.createElement('div');
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML = ''

      + '<div class="character-face-con character-head">'
        + '<div class="character-face character-head-face face-front"></div>'
        + '<div class="character-face character-head-face face-back"></div>'
      + '</div>'

      + '<div class="character-face-con character-torso">'
        + '<div class="character-face character-torso-face face-front"></div>'
        + '<div class="character-face character-torso-face face-back"></div>'
      + '</div>'

      + '<div class="character-face-con character-arm character-arm-right">'
        + '<div class="character-face character-arm-face face-front"></div>'
        + '<div class="character-face character-arm-face face-back"></div>'
      + '</div>'

      + '<div class="character-face-con character-arm character-arm-left">'
        + '<div class="character-face character-arm-face face-front"></div>'
        + '<div class="character-face character-arm-face face-back"></div>'
      + '</div>'

      + '<div class="character-face-con character-leg character-leg-right">'
        + '<div class="character-face character-leg-face face-front"></div>'
        + '<div class="character-face character-leg-face face-back"></div>'
      + '</div>'

      + '<div class="character-face-con character-leg character-leg-left">'
        + '<div class="character-face character-leg-face face-front"></div>'
        + '<div class="character-face character-leg-face face-back"></div>'
      + '</div>';

      document.querySelector('.stage').appendChild(this.mainElem);
      this.mainElem.style.left = info.xPos + '%';
      // this.mainElem.style.left = info.xPos;
      // 스크롤중인지 아닌지 확인
      this.scrollState = false;
      //마지막 스크롤 위치
      this.lastScrollTop =0;
      this.xPos = info.xPos;
      this.speed = 0.3;
      this.direction;
      //좌우 이동 중인지 아닌지 판if
      this.runningState = false;
      this.rafId;
      // this.init();
}

Character.prototype = {
  constructor: Character,
  init: function() {
    const self = this;
    window.addEventListener('scroll', function() {
      clearTimeout(self.scrollState);

      if(!self.scrollState) {
        self.mainElem.classList.add('running');
        console.log('running marked')
      }
      self.scrollState = setTimeout(function() {
        self.scrollState = false;
        self.mainElem.classList.remove('running');
      }, 500);

      // 이전 스크로 ㄹ위치와 현재 스크롤 위치를 비교
      if(self.lastScrollTop > pageYOffset) {
          //스크롤 올림
         self.mainElem.setAttribute('data-direction', 'backward');
      } else {
        //스크롤 내림
        self.mainElem.setAttribute('data-direction', 'forward');

      }

      // console.log('lastScrollTop: '+ self.lastScrollTop);
      // console.log('pageYOffset: '+ pageYOffset)
      self.lastScrollTop = pageYOffset;

      window.addEventListener('keydown', function(e){
        if(self.runningState) return;
        if(e.keyCode == 37) {
          self.direction = 'left';
          self.mainElem.setAttribute('data-direction', 'left');
          self.mainElem.classList.add('running');
          self.run(self);
          self.runningState = true;
          // self.xPos = self.xPos - self.speed;
          // self.mainElem.style.left = self.xPos + '%';

        } else if (e.keyCode == 39) {
          self.direction = 'right';
          self.mainElem.setAttribute('data-direction', 'right');
          self.mainElem.classList.add('running');
          self.run(self);
          self.runningState = true;
        }
      });

      window.addEventListener('keyup', function(e) {
        self.mainElem.classList.remove('running');
        cancelAnimationFrame(self.rafId);
        self.runningState = false;
      });
    }
    )},
    run: function(self) {
      console.log(self.xPos);
      // const self = this;


      if(self.direction == 'left') {
        self.xPos -= self.speed;
      } else if (self.direction == 'right') {
        self.xPos += self.speed;
      }

      if(self.xPos < 2) self.xPos =2;
      if(self.xPos > 88) self.xPos =88;
      self.mainElem.style.left = self.xPos + '%';
      self.rafId = requestAnimationFrame(function() {
        self.run(self);
      });

    }
}
