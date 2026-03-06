let p = document.querySelector("p");
let text = p.innerHTML.split("");

const randomText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

p.addEventListener("mousemove", function () {
	const interval = setInterval(() => {
		randomString();
	}, 150);
});
let iteration = 0;
function randomString() {
	let str = text
		.map((elem, index) => {
			if (index < iteration) {
				return elem;
			}

			return randomText.split("")[Math.floor(Math.random() * randomText.length)];
		})
		.join("");
	p.innerHTML = str;
	iteration += 0.2;
}
