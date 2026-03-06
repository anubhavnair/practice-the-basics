let box = document.querySelector(".box");

box.addEventListener("mousemove", function (dets) {
	document.body.style.setProperty("--x", dets.offsetX + "px");
	document.body.style.setProperty("--y", dets.offsetY + "px");
});
