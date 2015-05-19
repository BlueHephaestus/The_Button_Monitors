
var page = require("webpage").create(),
    url = "http://www.reddit.com/r/thebutton";

function onPageReady() {
	var low = 60
	setInterval(function(){
		var tens = page.evaluate(function() {
		  return document.getElementById('thebutton-s-10s').textContent;
		});
		var ones = page.evaluate(function() {
		  return document.getElementById('thebutton-s-1s').textContent;
		});
		var hundms = page.evaluate(function() {
		  return document.getElementById('thebutton-s-100ms').textContent;
		});
		var tenms = page.evaluate(function() {
		  return document.getElementById('thebutton-s-10ms').textContent;
		});
		var time = tens + ones + hundms + tenms
		var time = parseInt(time);
		var time = time / 100
		if (time < low){
			low = time;
		}
		/*var participants = page.evaluate(function() {
		  return document.getElementByClassName('thebutton-participants').textContent;
		});*/
		//console.log(tens + ones + "." + hundms + tenms + "        " + low);
		//console.log('exec color 6');
		console.log("Current: "  + time + "\t Low: " + low);
	}, 1);
}

page.open(url, function (status) {
    function checkReadyState() {
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.readyState;
            });

            if ("complete" === readyState) {
                onPageReady();
            } else {
                checkReadyState();
            }
        }, 2000);
    }

    checkReadyState();
});