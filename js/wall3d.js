(function () {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');
    const mousePos = { x: 0, y: 0 };
    let maxScrollValue;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;

    }

    window.addEventListener('scroll', function () {
        const scrollPer = pageYOffset / maxScrollValue;
        console.log('-----------------------')
        console.log('pageYOffset'+pageYOffset);
        console.log('maxScrollValue'+maxScrollValue);
        console.log('scrollPer'+scrollPer);
        const zMove = scrollPer* 200 - 100;

        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

        wallAElem = document.querySelector('.wall-front-a');
        var wallAStyle = window.getComputedStyle(wallAElem);
        var wallAMatrix = new WebKitCSSMatrix(wallAStyle.transform);

        wallBElem = document.querySelector('.wall-front-b');
        var wallBStyle = window.getComputedStyle(wallBElem);
        var wallBMatrix = new WebKitCSSMatrix(wallBStyle.transform);

        console.log('houseElem.translateZ:'+zMove);
        console.log('wallA.translateZ:'+wallAMatrix.m41);
        console.log('wallB.translateZ:'+wallBMatrix.m41);
        console.log('-----------------------')

        // progress bar
        // barElem.style.width = scrollPer * 100 + '%';
    });

    window.addEventListener('mousemove', function (e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);



    stageElem.addEventListener('click', function (e) {
        // new Character({
        //     xPos: e.clientX / window.innerWidth * 100,
        //     speed: Math.random() * 0.5 + 0.2
        // });
        (function () {
            charElem = document.querySelector('.character');
            // stageElem = document.querySelector('.stage');

            styleCharElem = charElem.style.left;

            console.log("from: "+styleCharElem);
            console.log("e.clinetX: "+e.clientX);
            console.log("e.offsetX:"+e.offsetX);
            console.log("stage.innerWidth(): "+$('.stage').innerWidth());
            console.log("window.innerWidth: "+window.innerWidth);
            console.log("to: "+e.clientX/window.innerWidth*100+"%");
            // console.log("to_new:"+e.clinetX/stageElem.innerWidth);
            // console.log("stage_width:"+stageElem.innerWidth);
        })();

    });



    // selectCharacterElem.addEventListener('click', function (e) {
    //     const value = e.target.getAttribute('data-char');
    //     document.body.setAttribute('data-char', value);
    // });

    resizeHandler();

})();
