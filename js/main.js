function rotate (className, degreeGranularity) {

    var $rota = document.querySelector(className),
        degree = 0;

    function spin() {
        $rota.style.transform = 'rotate(' + degree + 'deg)';
		let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		let randAngle = degreeGranularity * plusOrMinus;
        let randDelay = Math.floor(3000 + Math.random() * 2000);
        setTimeout(function() {
            degree += randAngle;
            spin(); // loop it
        }, randDelay);
    }

    spin();    // run it!

};

rotate ('.r', 90);
rotate ('.i', 180);