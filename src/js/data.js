var structure = {
	US: ['Apple','Windows','Dell','IBM'],
	Japan: ['Casio','Toshiba','Sony'],
	Korea: ['Samsung']
}

var data = {
	Apple: [
			{model: 'MacBook Pro 15 Retina ', price: 74400 , img:'../img/goods/apple/retina15.jpeg' },
			{model: 'MacBook 12" Custom Rose', price: 53000, img:'../img/goods/apple/custom-rose12.png'},
			{model: 'APPLE iPhone 7 128GB', price: 25054, img:'../img/goods/apple/iphone7.jpg'},
			{model: 'Phone 5S 16Gb ', price: 9000, img:'../img/goods/apple/iphone5s.jpg'},
			{model: 'iPad mini with Retina display', price: 15530, img:'../img/goods/apple/ipadmini.jpg'}
			],

	Windows: [
			{model: 'Windows XP SP3', price: 4400 , img:'../img/goods/windows/xp.jpg' },
			{model: 'Windows 7 Ultimate', price: 5000, img:'../img/goods/windows/7.jpg'},
			{model: 'Windows phone', price: 25054, img:'../img/goods/windows/phone.png'},
			],

	Dell: [
			{model: 'Dell Inspiron 5559', price: 23300, img:'../img/goods/dell/dell1.jpg'},
			{model: 'Dell Silver 2038', price: 15530, img:'../img/goods/dell/dell2.jpg'}
			],

	IBM: [
			{model: 'IBM 5150', price: 3200, img:'../img/goods/ibm/ibm1.jpg'}
			],

	Sony: [
			{model: 'Sony 10293', price: 23573, img:'../img/goods/sony/1.jpg'},
			{model: 'Sony 5885', price: 2111, img: '../img/goods/sony/2.jpg'},
			{model: 'S 569 ny2', price: 3939, img: '../img/goods/sony/3.jpg'},
			{model: 'S 569 ny3', price: 4939, img: '../img/goods/sony/4.jpg'},
			{model: 'S 4X69 y2', price: 3419, img: '../img/goods/sony/5.jpg'},
			{model: 'ZT S69 52', price: 3919, img: '../img/goods/sony/6.jpg'}
			],

	Toshiba: [
			{model: 'Tosh d0293', price: 23573, img:'../img/goods/toshiba/1.jpg'},
			{model: 'T 58s85', price: 2111, img: '../img/goods/toshiba/2.jpg'},
			{model: 's^Y 569 ny2', price: 7239, img: '../img/goods/toshiba/3.jpg'},
			{model: 'TOI 569 ny3', price: 4939, img: '../img/goods/toshiba/4.jpg'},	
			],

	Casio: [
			{model: 's^Y 56', price: 739, img: '../img/goods/casio/1.jpg'},
			{model: 'TOI ny3', price: 4939, img: '../img/goods/casio/2.jpg'},
			],

	Samsung: [
			{model: 'Samsung note7', price: 23573, img:'../img/goods/samsung1.jpg'},
			{model: 'Samsung  585', price: 2111, img: '../img/goods/samsung/2.jpg'},
			{model: 'Samsung 9 n2', price: 3939, img: '../img/goods/samsung/3.jpg'},
			{model: 'Samsung 9 n3', price: 4939, img: '../img/goods/samsung/4.jpg'},
			]

}


/*
var dataInServer = [
	{country: 'US', makers: [
		{Apple: [
			{model: 'MacBook Pro 15 Retina ', price: 74400 , img:'../img/goods/apple/retina15.jpeg' },
			{model: 'MacBook 12" Custom Rose', price: 53000, img:'../img/goods/apple/custom-rose12.png'},
			{model: 'APPLE iPhone 7 128GB', price: 25054, img:'../img/goods/apple/iphone7.jpg'},
			{model: 'Phone 5S 16Gb ', price: 9000, img:'../img/goods/apple/iphone5s.jpg'},
			{model: 'iPad mini with Retina display', price: 15530, img:'../img/goods/apple/ipadmini.jpg'}
			]
		},
		{Windows: [
			{model: 'Windows XP SP3', price: 4400 , img:'../img/goods/windows/xp.jpg' },
			{model: 'Windows 7 Ultimate', price: 5000, img:'../img/goods/windows/7.jpg'},
			{model: 'Windows phone', price: 25054, img:'../img/goods/windows/phone.png'},
			]
		},
		{Dell: [
			{model: 'Dell Inspiron 5559', price: 23300, img:'../img/goods/dell/dell1.jpg'},
			{model: 'Dell Silver 2038', price: 15530, img:'../img/goods/dell/dell2.jpg'}
			]
		},
		{IBM: [
			{model: 'IBM 5150', price: 3200, img:'../img/goods/ibm/ibm1.jpg'}
			]
		}
		]
	}, //US
	{country: 'Japan', makers: [
		{Sony: [
			{model: 'Sony 10293', price: 23573, img:'../img/goods/sony/1.jpg'},
			{model: 'Sony 5885', price: 2111, img: '../img/goods/sony/2.jpg'},
			{model: 'S 569 ny2', price: 3939, img: '../img/goods/sony/3.jpg'},
			{model: 'S 569 ny3', price: 4939, img: '../img/goods/sony/4.jpg'},
			{model: 'S 4X69 y2', price: 3419, img: '../img/goods/sony/5.jpg'},
			{model: 'ZT S69 52', price: 3919, img: '../img/goods/sony/6.jpg'}
			]
		},
		{Toshiba: [
			{model: 'Tosh d0293', price: 23573, img:'../img/goods/toshiba/1.jpg'},
			{model: 'T 58s85', price: 2111, img: '../img/goods/toshiba/2.jpg'},
			{model: 's^Y 569 ny2', price: 7239, img: '../img/goods/toshiba/3.jpg'},
			{model: 'TOI 569 ny3', price: 4939, img: '../img/goods/toshiba/4.jpg'},	
			]
		},
		{Casio: [
			{model: 's^Y 56', price: 739, img: '../img/goods/casio/1.jpg'},
			{model: 'TOI ny3', price: 4939, img: '../img/goods/casio/2.jpg'},
			]
		}
	]
	},//Japan
	{country: 'Korea', makers: [
		{Samsung: [
			{model: 'Samsung note7', price: 23573, img:'../img/goods/samsung1.jpg'},
			{model: 'Samsung  585', price: 2111, img: '../img/goods/samsung/2.jpg'},
			{model: 'Samsung 9 n2', price: 3939, img: '../img/goods/samsung/3.jpg'},
			{model: 'Samsung 9 n3', price: 4939, img: '../img/goods/samsung/4.jpg'},
			]
		}	
	]
	}// Korea
];



*/