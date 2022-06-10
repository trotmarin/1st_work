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

      document.querySelector('.house').appendChild(this.mainElem);
      this.mainElem.style.left = info.xPos + '%';
      console.log("xpos: "+info.xPos);
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
