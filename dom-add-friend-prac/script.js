let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.innerHTML === "Remove Friend") button.innerHTML = "Add Friend";
		else button.innerHTML = "Remove Friend";
	});
});
