const REGIONS = [
	{ 
		name: "Megamind :( Meme", 
		start: 0, 
		end: 20 
	},
	{ 	
		name: "No Name", 
		start: -1, 
		end: -20 
	},
	{ 	
		name: "No Name", 
		start: 21, 
		end: 150 
	}
];

const PLANETS = [
        {
                w: -179,
                texture: "textures/w-179.png"
        },
        {
                w: -178,
                texture: "textures/w-178.png"
        },
        {
                w: -177,
                texture: "textures/w-177.png"
        },
        {
                w: -176,
                texture: "textures/w-176.png"
        },
        {
                w: -175,
                texture: "textures/w-175.png"
        },
        {
                w: -174,
                texture: "textures/w-174.png"
        },
        {
                w: -173,
                texture: "textures/w-173.png"
        },
        {
                w: -172,
                texture: "textures/w-172.png"
        },
        {
                w: -171,
                texture: "textures/w-171.png"
        },
        {
                w: -170,
                texture: "textures/w-170.png"
        },
        {
                w: -169,
                texture: "textures/w-169.png"
        },
        {
                w: -168,
                texture: "textures/w-168.png"
        },
        {
                w: -167,
                texture: "textures/w-167.png"
        },
        {
                w: -166,
                texture: "textures/w-166.png"
        },
        {
                w: -165,
                texture: "textures/w-165.png"
        },
        {
                w: -164,
                texture: "textures/w-164.png"
        },
        {
                w: -163,
                texture: "textures/w-163.png"
        },
        {
                w: -162,
                texture: "textures/w-162.png"
        },
        {
                w: -161,
                texture: "textures/w-161.png"
        },
        {
                w: -160,
                texture: "textures/w-160.png"
        },
        {
                w: -159,
                texture: "textures/w-159.png"
        },
        {
                w: -158,
                texture: "textures/w-158.png"
        },
        {
                w: -157,
                texture: "textures/w-157.png"
        },
        {
                w: -156,
                texture: "textures/w-156.png"
        },
        {
                w: -155,
                texture: "textures/w-155.png"
        },
        {
                w: -154,
                texture: "textures/w-154.png"
        },
        {
                w: -153,
                texture: "textures/w-153.png"
        },
        {
                w: -152,
                texture: "textures/w-152.png"
        },
        {
                w: -151,
                texture: "textures/w-151.png"
        },
        {
                w: -150,
                texture: "textures/w-150.png"
        },
        {
                w: -149,
                texture: "textures/w-149.png"
        },
        {
                w: -148,
                texture: "textures/w-148.png"
        },
        {
                w: -147,
                texture: "textures/w-147.png"
        },
        {
                w: -146,
                texture: "textures/w-146.png"
        },
        {
                w: -145,
                texture: "textures/w-145.png"
        },
        {
                w: -144,
                texture: "textures/w-144.png"
        },
        {
                w: -143,
                texture: "textures/w-143.png"
        },
        {
                w: -142,
                texture: "textures/w-142.png"
        },
        {
                w: -141,
                texture: "textures/w-141.png"
        },
        {
                w: -140,
                texture: "textures/w-140.png"
        },
        {
                w: -139,
                texture: "textures/w-139.png"
        },
        {
                w: -138,
                texture: "textures/w-138.png"
        },
        {
                w: -137,
                texture: "textures/w-137.png"
        },
        {
                w: -136,
                texture: "textures/w-136.png"
        },
        {
                w: -135,
                texture: "textures/w-135.png"
        },
        {
                w: -134,
                texture: "textures/w-134.png"
        },
        {
                w: -133,
                texture: "textures/w-133.png"
        },
        {
                w: -132,
                texture: "textures/w-132.png"
        },
        {
                w: -131,
                texture: "textures/w-131.png"
        },
        {
                w: -130,
                texture: "textures/w-130.png"
        },
        {
                w: -129,
                texture: "textures/w-129.png"
        },
        {
                w: -128,
                texture: "textures/w-128.png"
        },
        {
                w: -127,
                texture: "textures/w-127.png"
        },
        {
                w: -126,
                texture: "textures/w-126.png"
        },
        {
                w: -125,
                texture: "textures/w-125.png"
        },
        {
                w: -124,
                texture: "textures/w-124.png"
        },
        {
                w: -123,
                texture: "textures/w-123.png"
        },
        {
                w: -122,
                texture: "textures/w-122.png"
        },
        {
                w: -121,
                texture: "textures/w-121.png"
        },
        {
                w: -120,
                texture: "textures/w-120.png"
        },
        {
                w: -119,
                texture: "textures/w-119.png",
                displacement: "displacements/w-119.png"
        },
        {
                w: -118,
                texture: "textures/w-118.png"
        },
        {
                w: -117,
                texture: "textures/w-117.png"
        },
        {
                w: -116,
                texture: "textures/w-116.png"
        },
        {
                w: -115,
                texture: "textures/w-115.png"
        },
        {
                w: -114,
                texture: "textures/w-114.png"
        },
        {
                w: -113,
                texture: "textures/w-113.png"
        },
        {
                w: -112,
                texture: "textures/w-112.png"
        },
        {
                w: -111,
                texture: "textures/w-111.png"
        },
        {
                w: -110,
                texture: "textures/w-110.png",
                displacement: "displacements/w-110.png"
        },
        {
                w: -109,
                texture: "textures/w-109.png"
        },
        {
                w: -108,
                texture: "textures/w-108.png"
        },
        {
                w: -107,
                texture: "textures/w-107.png"
        },
        {
                w: -106,
                texture: "textures/w-106.png"
        },
        {
                w: -105,
                texture: "textures/w-105.png"
        },
        {
                w: -104,
                texture: "textures/w-104.png"
        },
        {
                w: -103,
                texture: "textures/w-103.png"
        },
        {
                w: -102,
                texture: "textures/w-102.png"
        },
        {
                w: -101,
                texture: "textures/w-101.png"
        },
        {
                w: -100,
                texture: "textures/w-100.png"
        },
        {
                w: -99,
                texture: "textures/w-99.png"
        },
        {
                w: -98,
                texture: "textures/w-98.png"
        },
        {
                w: -97,
                texture: "textures/w-97.png"
        },
        {
                name: "Fractal",
                w: -96,
                texture: "textures/fractal-96.png"
        },
        {
                w: -95,
                texture: "textures/w-95.png"
        },
        {
                w: -94,
                texture: "textures/w-94.png"
        },
        {
                w: -93,
                texture: "textures/w-93.png"
        },
        {
                w: -92,
                texture: "textures/w-92.png"
        },
        {
                w: -91,
                texture: "textures/w-91.png"
        },
        {
                w: -90,
                texture: "textures/w-90.png"
        },
        {
                name: "Wyntry",
                w: -89,
                texture: "textures/wyntry-89.png"
        },
        {
                w: -88,
                texture: "textures/w-88.png"
        },
        {
                w: -87,
                texture: "textures/w-87.png"
        },
        {
                w: -86,
                texture: "textures/w-86.png"
        },
        {
                w: -85,
                texture: "textures/w-85.png"
        },
        {
                w: -84,
                texture: "textures/w-84.png"
        },
        {
                w: -83,
                texture: "textures/w-83.png"
        },
        {
                w: -82,
                texture: "textures/w-82.png"
        },
        {
                w: -81,
                texture: "textures/w-81.png"
        },
        {
                w: -80,
                texture: "textures/w-80.png"
        },
        {
                w: -79,
                texture: "textures/w-79.png"
        },
        {
                w: -78,
                texture: "textures/w-78.png"
        },
        {
                w: -77,
                texture: "textures/w-77.png"
        },
        {
                w: -76,
                texture: "textures/w-76.png"
        },
        {
                w: -75,
                texture: "textures/w-75.png"
        },
        {
                w: -74,
                texture: "textures/w-74.png"
        },
        {
                w: -73,
                texture: "textures/w-73.png"
        },
        {
                w: -72,
                texture: "textures/w-72.png"
        },
        {
                w: -71,
                texture: "textures/w-71.png"
        },
        {
                w: -70,
                texture: "textures/w-70.png"
        },
        {
                w: -69,
                texture: "textures/w-69.png"
        },
        {
                w: -68,
                texture: "textures/w-68.png"
        },
        {
                w: -67,
                texture: "textures/w-67.png"
        },
        {
                w: -66,
                texture: "textures/w-66.png"
        },
        {
                w: -65,
                texture: "textures/w-65.png"
        },
        {
                w: -64,
                texture: "textures/w-64.png"
        },
        {
                w: -63,
                texture: "textures/w-63.png"
        },
        {
                w: -62,
                texture: "textures/w-62.png"
        },
        {
                w: -61,
                texture: "textures/w-61.png"
        },
        {
                w: -60,
                texture: "textures/w-60.png"
        },
        {
                w: -59,
                texture: "textures/w-59.png"
        },
        {
                w: -58,
                texture: "textures/w-58.png"
        },
        {
                w: -57,
                texture: "textures/w-57.png"
        },
        {
                w: -56,
                texture: "textures/w-56.png"
        },
        {
                w: -55,
                texture: "textures/w-55.png"
        },
        {
                w: -54,
                texture: "textures/w-54.png"
        },
        {
                w: -53,
                texture: "textures/w-53.png"
        },
        {
                w: -52,
                texture: "textures/w-52.png"
        },
        {
                w: -51,
                texture: "textures/w-51.png"
        },
        {
                w: -50,
                texture: "textures/w-50.png",
                displacement: "displacements/w-50.png"
        },
        {
                w: -49,
                texture: "textures/w-49.png"
        },
        {
                w: -48,
                texture: "textures/w-48.png"
        },
        {
                w: -47,
                texture: "textures/w-47.png"
        },
        {
                w: -46,
                texture: "textures/w-46.png"
        },
        {
                w: -45,
                texture: "textures/w-45.png"
        },
        {
                w: -44,
                texture: "textures/w-44.png"
        },
        {
                w: -43,
                texture: "textures/w-43.png"
        },
        {
                w: -42,
                texture: "textures/w-42.png"
        },
        {
                w: -41,
                texture: "textures/w-41.png"
        },
        {
                w: -40,
                texture: "textures/w-40.png"
        },
        {
                w: -39,
                texture: "textures/w-39.png"
        },
        {
                w: -38,
                texture: "textures/w-38.png"
        },
        {
                w: -37,
                texture: "textures/w-37.png"
        },
        {
                w: -36,
                texture: "textures/w-36.png"
        },
        {
                w: -35,
                texture: "textures/w-35.png"
        },
        {
                w: -34,
                texture: "textures/w-34.png"
        },
        {
                name: "Thalassoma",
                w: -33,
                texture: "textures/thalassoma-33.png"
        },
        {
                w: -32,
                texture: "textures/w-32.png"
        },
        {
                w: -31,
                texture: "textures/w-31.png"
        },
        {
                name: "Rimoris",
                w: -30,
                texture: "textures/rimoris-30.png"
        },
        {
                w: -29,
                texture: "textures/w-29.png"
        },
        {
                w: -28,
                texture: "textures/w-28.png"
        },
        {
                name: "Ventiure",
                w: -27,
                texture: "textures/ventiure-27.png"
        },
        {
                w: -26,
                texture: "textures/w-26.png"
        },
        {
                w: -25,
                texture: "textures/w-25.png"
        },
        {
                w: -24,
                texture: "textures/w-24.png"
        },
        {
                w: -23,
                texture: "textures/w-23.png"
        },
        {
                w: -22,
                texture: "textures/w-22.png"
        },
        {
                w: -21,
                texture: "textures/w-21.png"
        },
        {
                w: -20,
                texture: "textures/w-20.png"
        },
        {
                w: -19,
                texture: "textures/w-19.png"
        },
        {
                w: -18,
                texture: "textures/w-18.png"
        },
        {
                w: -17,
                texture: "textures/w-17.png"
        },
        {
                w: -16,
                texture: "textures/w-16.png"
        },
        {
                w: -15,
                texture: "textures/w-15.png"
        },
        {
                name: "Silvheim",
                w: -14,
                texture: "textures/silvheim-14.png",
                displacement: "displacements/silvheim-14.png",
                inner: "inners/silvheim-14.png"
        },
        {
                w: -13,
                texture: "textures/w-13.png"
        },
        {
                w: -12,
                texture: "textures/w-12.png",
                displacement: "displacements/w-12.png"
        },
        {
                name: "Heralur",
                w: -11,
                texture: "textures/heralur-11.png"
        },
        {
                w: -10,
                texture: "textures/w-10.png"
        },
        {
                name: "Azurius",
                w: -9,
                texture: "textures/azurius-9.png"
        },
        {
                w: -8,
                texture: "textures/w-8.png"
        },
        {
                name: "Agartha",
                w: -7,
                texture: "textures/agartha-7.png",
                inner: "inners/agartha-7.png"
        },
        {
                w: -6,
                texture: "textures/w-6.png"
        },
        {
                name: "Deamflum",
                w: -5,
                texture: "textures/deamflum-5.png"
        },
        {
                w: -4,
                texture: "textures/w-4.png"
        },
        {
                name: "Eavesdrop",
                description: "Eavesdrop, or the Phantom Earth, resembles Earth millions of years ago, when a supercontinent Pangaea split apart. Strangely, there are bridges connecting continents, black monuments scattered over the land, and not a single life. Everything is a fake. Trees, plants, and flowers are created of rocks, cloth, and plastic. Water is nothing but a thick glass.\n\nStrange dark monsters emerge from the monument every night. They go about looking for something. Some say you'll never see the light of day if you glance them in the eyes. Only looking down will give you a glimpse of their feet, which are shadows that reveal a pitch-black sky filled with stars",
                w: -3,
                texture: "textures/eavesdrop-3.png"
        },
        {
                w: -2,
                texture: "textures/w-2.png"
        },
        {
                w: -1,
                texture: "textures/w-1.png"
        },
        {
                name: "Earth",
                w: 0,
                texture: "textures/earth+0.png",
                displacement: "displacements/earth+0.png",
                description: "Home of the maidenless\nAlso known as Cy's abode."
        },
        {
                name: "Archfall",
                w: 1,
                texture: "textures/archfall+1.png"
        },
        {
                w: 2,
                texture: "textures/w+2.png"
        },
        {
                w: 3,
                texture: "textures/w+3.png"
        },
        {
                w: 4,
                texture: "textures/w+4.png"
        },
        {
                w: 5,
                texture: "textures/w+5.png"
        },
        {
                name: "Harken",
                w: 6,
                texture: "textures/harken+6.png"
        },
        {
                name: "Archway",
                w: 7,
                texture: "textures/archway+7.png"
        },
        {
                name: "Elysium",
                w: 8,
                rotateInside: true,
                texture: "textures/elysium+8.png",
                inner: "inners/elysium+8.png"
        },
        {
                w: 9,
                texture: "textures/w+9.png"
        },
        {
                w: 10,
                texture: "textures/w+10.png"
        },
        {
                w: 11,
                texture: "textures/w+11.png"
        },
        {
                w: 12,
                texture: "textures/w+12.png"
        },
        {
                w: 13,
                texture: "textures/w+13.png"
        },
        {
                w: 14,
                texture: "textures/w+14.png"
        },
        {
                w: 15,
                texture: "textures/w+15.png"
        },
        {
                w: 16,
                texture: "textures/w+16.png"
        },
        {
                w: 17,
                texture: "textures/w+17.png"
        },
        {
                name: "Siusune",
                w: 18,
                texture: "textures/siusune+18.png"
        },
        {
                w: 19,
                texture: "textures/w+19.png"
        },
        {
                name: "Challum",
                w: 20,
                texture: "textures/challum+20.png"
        },
        {
                w: 21,
                texture: "textures/w+21.png",
                displacement: "displacements/w+21.png"
        },
        {
                w: 22,
                texture: "textures/w+22.png"
        },
        {
                w: 23,
                texture: "textures/w+23.png",
                displacement: "displacements/w+23.png"
        },
        {
                w: 24,
                texture: "textures/w+24.png",
                displacement: "displacements/w+24.png"
        },
        {
                w: 25,
                texture: "textures/w+25.png"
        },
        {
                w: 26,
                texture: "textures/w+26.png"
        },
        {
                w: 27,
                texture: "textures/w+27.png"
        },
        {
                w: 28,
                texture: "textures/w+28.png",
                displacement: "displacements/w+28.png"
        },
        {
                w: 29,
                texture: "textures/w+29.png"
        },
        {
                w: 30,
                texture: "textures/w+30.png"
        },
        {
                w: 31,
                texture: "textures/w+31.png"
        },
        {
                w: 32,
                texture: "textures/w+32.png"
        },
        {
                w: 33,
                texture: "textures/w+33.png"
        },
        {
                w: 34,
                texture: "textures/w+34.png"
        },
        {
                w: 35,
                texture: "textures/w+35.png"
        },
        {
                w: 36,
                texture: "textures/w+36.png"
        },
        {
                w: 37,
                texture: "textures/w+37.png",
                displacement: "displacements/w+37.png"
        },
        {
                w: 38,
                texture: "textures/w+38.png"
        },
        {
                w: 39,
                texture: "textures/w+39.png"
        },
        {
                w: 40,
                texture: "textures/w+40.png"
        },
        {
                w: 41,
                texture: "textures/w+41.png"
        },
        {
                w: 42,
                texture: "textures/w+42.png"
        },
        {
                w: 43,
                texture: "textures/w+43.png"
        },
        {
                w: 44,
                texture: "textures/w+44.png"
        },
        {
                w: 45,
                texture: "textures/w+45.png"
        },
        {
                w: 46,
                texture: "textures/w+46.png"
        },
        {
                w: 47,
                texture: "textures/w+47.png"
        },
        {
                w: 48,
                texture: "textures/w+48.png"
        },
        {
                w: 49,
                texture: "textures/w+49.png"
        },
        {
                name: "Candelith",
                w: 50,
                texture: "textures/candelith+50.png"
        },
        {
                w: 51,
                texture: "textures/w+51.png"
        },
        {
                name: "Depthral",
                w: 52,
                texture: "textures/depthral+52.png",
                displacement: "displacements/depthral+52.png"
        },
        {
                w: 53,
                texture: "textures/w+53.png"
        },
        {
                w: 54,
                texture: "textures/w+54.png",
                displacement: "displacements/w+54.png"
        },
        {
                w: 55,
                texture: "textures/w+55.png",
                displacement: "displacements/w+55.png"
        },
        {
                w: 56,
                texture: "textures/w+56.png",
                displacement: "displacements/w+56.png"
        },
        {
                w: 57,
                texture: "textures/w+57.png",
                displacement: "displacements/w+57.png"
        },
        {
                w: 58,
                texture: "textures/w+58.png"
        },
        {
                name: "Wister",
                w: 59,
                texture: "textures/wister+59.png"
        },
        {
                w: 60,
                texture: "textures/w+60.png"
        },
        {
                w: 61,
                texture: "textures/w+61.png"
        },
        {
                w: 62,
                texture: "textures/w+62.png"
        },
        {
                w: 63,
                texture: "textures/w+63.png"
        },
        {
                w: 64,
                texture: "textures/w+64.png"
        },
        {
                w: 65,
                texture: "textures/w+65.png"
        },
        {
                w: 66,
                texture: "textures/w+66.png"
        },
        {
                w: 67,
                texture: "textures/w+67.png"
        },
        {
                w: 68,
                texture: "textures/w+68.png"
        },
        {
                w: 69,
                texture: "textures/w+69.png"
        },
        {
                w: 70,
                texture: "textures/w+70.png"
        },
        {
                w: 71,
                texture: "textures/w+71.png"
        },
        {
                w: 72,
                texture: "textures/w+72.png"
        },
        {
                w: 73,
                texture: "textures/w+73.png"
        },
        {
                w: 74,
                texture: "textures/w+74.png"
        },
        {
                name: "Cefour Light",
                w: 75,
                texture: "textures/cefour light+75.png",
                displacement: "displacements/cefour light+75.png"
        },
        {
                w: 76,
                texture: "textures/w+76.png"
        },
        {
                w: 77,
                texture: "textures/w+77.png"
        },
        {
                w: 78,
                texture: "textures/w+78.png"
        },
        {
                w: 79,
                texture: "textures/w+79.png"
        },
        {
                w: 80,
                texture: "textures/w+80.png"
        },
        {
                w: 81,
                texture: "textures/w+81.png"
        },
        {
                w: 82,
                texture: "textures/w+82.png"
        },
        {
                w: 83,
                texture: "textures/w+83.png"
        },
        {
                w: 84,
                texture: "textures/w+84.png"
        },
        {
                w: 85,
                texture: "textures/w+85.png"
        },
        {
                w: 86,
                texture: "textures/w+86.png"
        },
        {
                w: 87,
                texture: "textures/w+87.png"
        },
        {
                w: 88,
                texture: "textures/w+88.png"
        },
        {
                w: 89,
                texture: "textures/w+89.png"
        },
        {
                w: 90,
                texture: "textures/w+90.png"
        },
        {
                w: 91,
                texture: "textures/w+91.png"
        },
        {
                w: 92,
                texture: "textures/w+92.png"
        },
        {
                w: 93,
                texture: "textures/w+93.png"
        },
        {
                w: 94,
                texture: "textures/w+94.png"
        },
        {
                w: 95,
                texture: "textures/w+95.png"
        },
        {
                name: "Selfsought",
                w: 96,
                rotateInside: true,	
                texture: "textures/selfsought+96.png",
                displacement: "displacements/selfsought+96.png",
                inner: "inners/selfsought+96.png"
        },
        {
                name: "Animusere",
                w: 97,
                texture: "textures/animusere+97.png"
        },
        {
                w: 98,
                texture: "textures/w+98.png"
        },
        {
                w: 99,
                texture: "textures/w+99.png"
        },
        {
                w: 100,
                texture: "textures/w+100.png"
        },
        {
                w: 101,
                texture: "textures/w+101.png"
        },
        {
                w: 102,
                texture: "textures/w+102.png",
                displacement: "displacements/w+102.png"
        },
        {
                w: 103,
                texture: "textures/w+103.png",
                displacement: "displacements/w+103.png"
        },
        {
                w: 104,
                texture: "textures/w+104.png"
        },
        {
                w: 105,
                texture: "textures/w+105.png"
        },
        {
                w: 106,
                texture: "textures/w+106.png"
        },
        {
                w: 107,
                texture: "textures/w+107.png"
        },
        {
                w: 108,
                texture: "textures/w+108.png"
        },
        {
                w: 109,
                texture: "textures/w+109.png"
        },
        {
                w: 110,
                texture: "textures/w+110.png"
        },
        {
                w: 111,
                texture: "textures/w+111.png",
                displacement: "displacements/w+111.png"
        },
        {
                w: 112,
                texture: "textures/w+112.png",
                displacement: "displacements/w+112.png"
        },
        {
                w: 113,
                texture: "textures/w+113.png",
                displacement: "displacements/w+113.png"
        },
        {
                w: 114,
                texture: "textures/w+114.png",
                displacement: "displacements/w+114.png"
        },
        {
                w: 115,
                texture: "textures/w+115.png"
        },
        {
                w: 116,
                texture: "textures/w+116.png"
        },
        {
                w: 117,
                texture: "textures/w+117.png",
                displacement: "displacements/w+117.png"
        },
        {
                w: 118,
                texture: "textures/w+118.png",
                displacement: "displacements/w+118.png"
        },
        {
                name: "Warithal",
                w: 119,
                texture: "textures/warithal+119.png",
                displacement: "displacements/warithal+119.png"
        },
        {
                w: 120,
                texture: "textures/w+120.png"
        },
        {
                w: 121,
                texture: "textures/w+121.png"
        },
        {
                w: 122,
                texture: "textures/w+122.png"
        },
        {
                w: 123,
                texture: "textures/w+123.png"
        },
        {
                w: 124,
                texture: "textures/w+124.png"
        },
        {
                w: 125,
                texture: "textures/w+125.png"
        },
        {
                w: 126,
                texture: "textures/w+126.png"
        },
        {
                w: 127,
                texture: "textures/w+127.png",
                displacement: "displacements/w+127.png"
        },
        {
                w: 128,
                texture: "textures/w+128.png"
        },
        {
                w: 129,
                texture: "textures/w+129.png"
        },
        {
                w: 130,
                texture: "textures/w+130.png"
        },
        {
                w: 131,
                texture: "textures/w+131.png"
        },
        {
                w: 132,
                texture: "textures/w+132.png"
        },
        {
                w: 133,
                texture: "textures/w+133.png"
        },
        {
                w: 134,
                texture: "textures/w+134.png"
        },
        {
                w: 135,
                texture: "textures/w+135.png"
        },
        {
                w: 136,
                texture: "textures/w+136.png"
        },
        {
                w: 137,
                texture: "textures/w+137.png"
        },
        {
                w: 138,
                texture: "textures/w+138.png"
        },
        {
                w: 139,
                texture: "textures/w+139.png"
        },
        {
                w: 140,
                texture: "textures/w+140.png"
        },
        {
                w: 141,
                texture: "textures/w+141.png"
        },
        {
                w: 142,
                texture: "textures/w+142.png"
        },
        {
                w: 143,
                texture: "textures/w+143.png"
        },
        {
                w: 144,
                texture: "textures/w+144.png"
        },
        {
                name: "Lyscrint",
                w: 145,
                texture: "textures/lyscrint+145.png"
        },
        {
                w: 146,
                texture: "textures/w+146.png"
        },
        {
                w: 147,
                texture: "textures/w+147.png"
        },
        {
                w: 148,
                texture: "textures/w+148.png"
        },
        {
                w: 149,
                texture: "textures/w+149.png"
        },
        {
                w: 150,
                texture: "textures/w+150.png"
        },
        {
                w: 151,
                texture: "textures/w+151.png"
        },
        {
                w: 152,
                texture: "textures/w+152.png"
        },
        {
                w: 153,
                texture: "textures/w+153.png"
        },
        {
                w: 154,
                texture: "textures/w+154.png"
        },
        {
                w: 155,
                texture: "textures/w+155.png"
        },
        {
                w: 156,
                texture: "textures/w+156.png"
        },
        {
                w: 157,
                texture: "textures/w+157.png"
        },
        {
                w: 158,
                texture: "textures/w+158.png"
        },
        {
                w: 159,
                texture: "textures/w+159.png"
        },
        {
                w: 160,
                texture: "textures/w+160.png"
        },
        {
                w: 161,
                texture: "textures/w+161.png"
        },
        {
                w: 162,
                texture: "textures/w+162.png"
        },
        {
                w: 163,
                texture: "textures/w+163.png"
        },
        {
                w: 164,
                texture: "textures/w+164.png"
        },
        {
                w: 165,
                texture: "textures/w+165.png"
        },
        {
                w: 166,
                texture: "textures/w+166.png"
        },
        {
                w: 167,
                texture: "textures/w+167.png"
        },
        {
                w: 168,
                texture: "textures/w+168.png"
        },
        {
                w: 169,
                texture: "textures/w+169.png"
        },
        {
                w: 170,
                texture: "textures/w+170.png"
        },
        {
                w: 171,
                texture: "textures/w+171.png"
        },
        {
                w: 172,
                texture: "textures/w+172.png"
        },
        {
                w: 173,
                texture: "textures/w+173.png"
        },
        {
                w: 174,
                texture: "textures/w+174.png"
        },
        {
                w: 175,
                texture: "textures/w+175.png"
        },
        {
                w: 176,
                texture: "textures/w+176.png"
        },
        {
                w: 177,
                texture: "textures/w+177.png"
        },
        {
                w: 178,
                texture: "textures/w+178.png"
        },
        {
                w: 179,
                texture: "textures/w+179.png"
        },
        {
                w: 180,
                texture: "textures/w+180.png"
        }
];
