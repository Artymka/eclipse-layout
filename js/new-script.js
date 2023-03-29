const mainBlock = document.querySelector(".main-block");
const preFooter = document.querySelector(".pre-footer");

window.addEventListener("scroll", background);
document.addEventListener("DOMContentLoaded", background);

function background() {
	if (
		window.pageYOffset <= mainBlock.offsetTop + mainBlock.offsetHeight &&
		window.pageYOffset + document.documentElement.clientHeight >= mainBlock.offsetTop
	) {
		const mainBlockScroll = (mainBlock.offsetTop - window.pageYOffset) / 2;

		const mainBlockBackground = document.querySelector(".main-block__background");
		mainBlockBackground.classList.remove("background-hidden");
		mainBlockBackground.style.transform = "translate(0px, " + mainBlockScroll + "px)";
	} else {
		const mainBlockBackground = document.querySelector(".main-block__background");
		mainBlockBackground.classList.add("background-hidden");
	}

	if (
		window.pageYOffset <= preFooter.offsetTop + preFooter.offsetHeight &&
		window.pageYOffset + document.documentElement.clientHeight >= preFooter.offsetTop
	) {
		const preFooterScroll = (preFooter.offsetTop - window.pageYOffset) / 2;

		const preFooterBackground = document.querySelector(".pre-footer__background");
		preFooterBackground.classList.remove("background-hidden");
		preFooterBackground.style.transform = "translate(0px, " + preFooterScroll + "px)";
	} else {
		const preFooterBackground = document.querySelector(".pre-footer__background");
		preFooterBackground.classList.add("background-hidden");
	}
}

// ============================================================================

const menuBurger = document.querySelector(".header__icon");
const menuAppendix = document.querySelector(".header__menu-appendix");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const barrier = document.querySelector(".header-barrier");

menuBurger.addEventListener("click", () => {
	menuBurger.classList.toggle("header__icon-active");
	menuAppendix.classList.toggle("header__menu-active");
	menu.classList.toggle("header__menu-active");

	body.classList.toggle("no-scroll");
	barrier.classList.toggle("header-barrier-hidden");
});

barrier.addEventListener("click", (e) => {
	menuBurger.classList.toggle("header__icon-active");
	menuAppendix.classList.toggle("header__menu-active");
	menu.classList.toggle("header__menu-active");

	body.classList.toggle("no-scroll");
	barrier.classList.toggle("header-barrier-hidden");
});

// ============================================================================

const filterButtons = document.querySelectorAll(".guidelines__filter-button");
const filterSelect = document.querySelector(".guidelines__filter-select");
const filterRow = document.querySelector(".guidelines__filter-row");

filterButtons.forEach((filterButton) => {
	filterButton.addEventListener("click", () => {
		filterByData(filterButton.dataset["filter"]);

		if (filterSelect.style.display === "none") {
			selectFilterButton(filterButton.dataset["filter"]);
		} else {
			filterRow.classList.remove("guidelines__filter-row-active");
			filterSelect.innerText = filterButton.innerText;
		}
	});
});

filterSelect.addEventListener("click", () => {
	filterRow.classList.toggle("guidelines__filter-row-active");

	if (!filterRow.classList.contains("guidelines__filter-row-active")) {
		filterSelect.blur();
	}
});

document.addEventListener("click", (e) => {
	if (e.target !== filterSelect) {
		filterRow.classList.remove("guidelines__filter-row-active");
	}
});

filterSelect.addEventListener("keydown", (e) => {
	if (e.key === "Tab" || e.key === "Escape") {
		filterRow.classList.remove("guidelines__filter-row-active");
	}
});

function filterByData(dataFilter) {
	const filterItems = document.querySelectorAll(".guidelines__item");

	filterItems.forEach((item) => {
		if (item.dataset["filter"] === dataFilter) {
			item.classList.remove("item-hidden");
		} else {
			item.classList.add("item-hidden");
		}
	});
}

function selectFilterButton(dataFilter) {
	filterButtons.forEach((filterButton) => {
		if (filterButton.dataset["filter"] === dataFilter) {
			filterButton.classList.add("selected-filter");
		} else {
			filterButton.classList.remove("selected-filter");
		}
	});
}

// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
	const submitButton = document.querySelector(".main-block__button");
	submitButton.addEventListener("click", submitForm);
});

async function submitForm(e) {
	e.preventDefault();
	console.log("submit");

	let hasErrors = false;

	const hiddenSelect = document.querySelector(".main-block__hidden-input");
	const select = document.querySelector(".main-block__pseudo-select");
	if (hiddenSelect.value.trim() === "") {
		hasErrors = true;
		select.classList.add("_error");
	} else {
		select.classList.remove("_error");
	}

	const emailInput = document.querySelector(".main-block__input");
	if (!/.+@.+\..+/i.test(emailInput.value)) {
		hasErrors = true;
		emailInput.classList.add("_error");
	} else {
		emailInput.classList.remove("_error");
	}

	if (hasErrors === true) return;

	const form = document.querySelector(".main-block__form-body");
	const response = await fetch("http://eclipse/vendor/registration.php", {
		method: "POST",
		body: new FormData(form),
	});

	form.reset();
	alert("The form submission is completed!");
}

// ============================================================================

let headerTop;
window.addEventListener("scroll", header);
document.addEventListener("DOMContentLoaded", header);

function header() {
	const header = document.querySelector(".header");
	if (header.classList.contains("_header-absolute")) {
		headerTop = header.offsetTop;
	}

	const appendix = document.querySelector(".header__menu-appendix");
	if (headerTop <= window.pageYOffset) {
		header.classList.remove("_header-absolute");
		header.classList.add("_header-fixed");
		appendix.classList.add("header__menu-appendix-hidden");
	} else {
		header.classList.remove("_header-fixed");
		header.classList.add("_header-absolute");
		appendix.classList.remove("header__menu-appendix-hidden");
	}
}

// ============================================================================

const links = document.querySelectorAll(".link");
links.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
	});
});

// ============================================================================

const scrollArrows = document.querySelectorAll(".scroll-to-arrow");

scrollArrows.forEach((scrollArrow) => {
	scrollArrow.addEventListener("click", () => {
		const scroll = scrollArrow.dataset.scroll;
		const scrollElement = document.querySelector(scroll);
		const scrollTo = scrollElement.offsetTop;

		window.scrollTo({
			top: scrollTo,
			behavior: "smooth",
		});
	});
});

// ============================================================================

const scrollButton = document.querySelector(".scroll-to-top-button");

scrollButton.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

window.addEventListener("scroll", () => {
	const scrollBorder = document.querySelector(".main-block").offsetHeight;

	if (window.pageYOffset >= scrollBorder) {
		scrollButton.classList.add("scroll-to-top-button-active");
	} else {
		scrollButton.classList.remove("scroll-to-top-button-active");
	}
});

// ============================================================================

document.querySelectorAll(".select-dropdown").forEach((selectDropdown) => {
	const pseudoSelect = selectDropdown.querySelector(".pseudo-select");
	const selectList = selectDropdown.querySelector(".select-list");
	const hiddenSelect = selectDropdown.querySelector(".hidden-input");
	const selectItems = selectDropdown.querySelectorAll(".select-item");

	pseudoSelect.addEventListener("click", () => {
		selectList.classList.toggle("select-list-hidden");

		if (selectList.classList.contains("select-list-hidden")) {
			pseudoSelect.blur();
		}
	});

	pseudoSelect.addEventListener("keydown", (e) => {
		if (e.key === "Tab" || e.key === "Escape") {
			selectList.classList.add("select-list-hidden");
		}
	});

	selectItems.forEach((selectItem) => {
		selectItem.addEventListener("click", () => {
			hiddenSelect.value = selectItem.dataset.value;
			pseudoSelect.innerText = selectItem.innerText;
		});
	});

	document.addEventListener("click", (e) => {
		if (e.target !== pseudoSelect) {
			selectList.classList.add("select-list-hidden");
		}
	});
});
