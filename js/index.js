
const resources = [
	{
		heading: "This is the first step",
		path: "./img/car.jpg",
		body: "All-electric vehicles (EVs) run on electricity only. The E-car are propelled by one or more electric motors powered by rechargeable battery packs. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Nisl suscipit adipiscing bibendum est ultricies. Elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in. Commodo nulla facilisi nullam vehicula ipsum a arcu. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Leo duis ut diam quam nulla porttitor massa. Ante metus dictum at tempor commodo ullamcorper a lacus. Auctor elit sed vulputate mi sit amet mauris.The E-gas stations have been developped in many countries."
	},
	{
		heading: "This is the second solution",
		path: "./img/plastic.jpg",
		body: "Environemental organizations are seeking clean resources expertise who have the technical understanding to develop innovative solutions that minimize environmental impact, promote geopolitical stability and enable economic diversification. Elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in. Commodo nulla facilisi nullam vehicula ipsum a arcu. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Leo duis ut diam quam nulla porttitor massa. Ante metus dictum at tempor commodo ullamcorper a lacus. Auctor elit sed vulputate mi sit amet mauris.Individuals who have the business insight and interpersonal skills to lead teams and guide change and join the team."
	},
	{
		heading: "This is the third solution",
		path: "./img/wind.jpg",
		body: "Use energy saving electronics. Mattis nunc sed blandit libero. Consequat nisl vel pretium lectus quam id leo in. Nulla pharetra diam sit amet nisl. Euismod nisi porta lorem mollis aliquam ut porttitor. Neque sodales ut etiam sit amet nisl purus.Technology used in applications ranging from CNG for on and off road vehicles, industrial uses, storage, dispensing and virtual pipeline for delivery into remote locations to modular LNG production for vehicular and high horsepower markets (HHP) Marine / Rail / Power Generation / Mining / Oil & Gas"
	}
];


const btn = document.querySelectorAll("button");
const content = document.querySelector(".content");


content.innerHTML = `<article>
							<h3>${resources[0].heading}</h3>
							<img src="${resources[0].path}" style="width:200px height:200px">
							<p>${resources[0].body}</p>
							</article>`;


function contentLoader(ev){
	let evTarget = ev.target;
	console.log(ev.currentTarget.textContent);

	if(evTarget.textContent === "btn1"){
		content.innerHTML = `<article>
							<h3>${resources[0].heading}</h3>
							<img src="${resources[0].path}">
							<p>${resources[0].body}</p>
							</article>`;

	} else if (evTarget.textContent === "btn2") {
		content.innerHTML = `<article>
							<h3>${resources[1].heading}</h3>
							<img src="${resources[1].path}">
							<p>${resources[1].body}</p>
							</article>`;

	} else if (evTarget.textContent === "btn3") {
		content.innerHTML = `<article>
							<h3>${resources[2].heading}</h3>
							<img src="${resources[2].path}">
							<p>${resources[2].body}</p>
							</article>`;
	}
		for (let button of btn) {
			if(button.id) {
				button.removeAttribute("id");
			}

		}
		ev.currentTarget.id = "active";
}

btn[0].addEventListener("click", contentLoader);
btn[1].addEventListener("click", contentLoader);
btn[2].addEventListener("click", contentLoader);

//eventlisterner --------solution 2----------------------------------
// for(var i = 0; i < btn.length; i++){
// 	btn[i].addEventListener("click", contentLoader);
// }