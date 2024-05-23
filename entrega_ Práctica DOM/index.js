const products = [
	{
		name: "Sylethertine",
		imgage: "./assets/sylthe.png",
		description: "stylish cafe chair",
		price: 20,
		isExprice: true,
		exprice: 25,
		alt: "Sylethertine",
		category: "chair",
		seller: "funiro"
	},
	{
		name: "Lolito",
		imgage: "./assets/lolito.png",
		description: "Luxury big sofa",
		price: 300,
		isExprice: true,
		exprice: 400,
		alt: "Lolito",
		category:"sofa",
		seller: "funiro"
	},
	{
		name: "Leviosa",
		imgage: "./assets/leviosa.png",
		description: "stylish cafe chair",
		price: 20,
		isExprice: false,
		exprice: null,
		alt: "Leviosa",
		category: "chair",
		seller: "funiro"
	},
	{
		name: "Respira",
		imgage: "./assets/respira.png",
		description: "Outdoor bar table stool",
		price: 10,
		isExprice: true,
		exprice: 15,
		alt: "Respira",
		category:"table",
		seller: "funiro"
	},
	{
		name: "Grifo",
		imgage: "./assets/grifo.png",
		description: "Night lamp",
		price: 80,
		isExprice: false,
		exprice: null,
		alt: "Grifo",
		category:"lamp",
		seller: "funiro"
	},
	{
		name: "Muggo",
		imgage: "./assets/muggo.png",
		description: "small table",
		price: 20,
		isExprice: false,
		exprice: null,
		alt: "Muggo",
		category:"table",
		seller: "funiro"
	},
	{
		name: "Pingky",
		imgage: "./assets/pingky.png",
		description: "Cute bed sofa",
		price: 10,
		isExprice: true,
		exprice: 15,
		alt: "Pingky",
		category: "sofa",
		seller: "funiro"
	},
	{
		name: "Potty",
		imgage: "./assets/potty.png",
		description: "Minimalist flower pot",
		price: 5,
		isExprice: false,
		exprice: null,
		alt: "Potty",
		category: "lamp",
		seller: "funiro"
	},
	{
		name: "Greece",
		imgage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
		description: "sofa with beautiful color",
		price: 300,
		isExprice: false,
		exprice: null,
		alt: "Greece",
		category:"sofa",
		seller: "funiro"
	},
	{
		name: "Grantham",
		imgage: "https://i.etsystatic.com/17248553/r/il/2f9006/3320423286/il_570xN.3320423286_hug7.jpg",
		description: "wooden dining table",
		price: 100,
		isExprice: false,
		exprice: null,
		alt: "Grantham",
		category: "table",
		seller: "funiro"
	},
	{
		name: "Sheesham",
		imgage: "https://mysleepyhead.com/media/catalog/product/m/e/menu_coffee_table.jpg",
		description: "cute tea table",
		price: 80,
		isExprice: true,
		exprice: 90,
		alt: "Sheesham",
		category: "table",
		seller: "funiro"
	},
	{
		name: "Flavia",
		imgage: "https://cdn.decornation.in/wp-content/uploads/2020/05/contemporary-style-drawer-laptop-table.jpg",
		description: "classic desk for working",
		price: 100,
		isExprice: false,
		exprice: null,
		alt: "Flavia",
		category: "table",
		seller: "funiro"
	},
];
let data = [...products];

function paintingPage(products){
	const ul = document.querySelector('.produc_list');
	const busca_ul = document.querySelector('.busca-list');

	data.map((product) => {
		let li = document.createElement('li');
		if(product.isExprice){
		li.innerHTML = `
		<img class="produc-img" src=${product.imgage} alt=${product.alt}>
		<article>
			<h4 class="nameofpro">${product.name}</h4>
			<p class="description">${product.description}</p>
			<p class="price">${product.price} euro <span class="exprice">${product.exprice} euro</span></p>
			<p><span class="selling">selling for</span> ${product.seller}</p>
		</article>
		`;
		}else{
			li.innerHTML = `
		<img class="produc-img" src=${product.imgage} alt=${product.alt}>
		<article>
			<h4 class="nameofpro">${product.name}</h4>
			<p class="description">${product.description}</p>
			<p class="price">${product.price} euro</p>
			<p><span class="selling">selling for</span> ${product.seller}</p>
		</article>
		`;
		}
		ul.appendChild(li);
	});

	function sideBar(products){
		let result = products.reduce((acc, item) =>{
			acc[item.category] = (acc[item.category] || 0) + 1;
			return acc
		},{});
		//console.log(result)
	
		for(let key in result){
			let sideBarLi = document.createElement('li');
			sideBarLi.innerHTML = `
			${key} (${result[key]})
			`;
			sideBarLi.classList.add('sideBarLi');
			busca_ul.appendChild(sideBarLi);
		}	
	};
	sideBar(data);

	const span = document.createElement('span');
	span.innerHTML = ` ${data.length} results`
	const showing = document.querySelector('.showing')
	showing.appendChild(span)
	
};

paintingPage(data);

