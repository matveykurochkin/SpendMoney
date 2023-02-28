const products = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro Max",
        price: 130000,
        image: "https://cdn.citilink.ru/-zqOm3tjcgGdnJ-3qLjO3EglNlIMYVIKBi0FOCr4qk4/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1895984_v01_b.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 2,
        name: "Apple AirPods Pro",
        price: 16000,
        image: "https://avatars.mds.yandex.net/get-mpic/5241173/img_id7095765708916818250.jpeg/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 3,
        name: "Apple Macbook Pro 16",
        price: 190790,
        image: "https://avatars.mds.yandex.net/get-mpic/5032583/img_id3683841579270874537.jpeg/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 4,
        name: "Apple iPad Air 2022",
        price: 79990,
        image: "https://cdn.citilink.ru/otHSmZbbasI_xm7tSjV-xo9lFWeZCufwyrueh5EAiPQ/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1848556_v01_b.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 5,
        name: "Mac Pro Top",
        price: 861999,
        image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/12/iW0dgHf1-mac-1.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 6,
        name: "Samsung Galaxy S23 Ultra",
        price: 147900,
        image: "https://avatars.mds.yandex.net/get-mpic/1336510/img_id5193470031453206464.png/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 7,
        name: "Samsung Tab S8 Ultra",
        price: 129990,
        image: "https://holod.ru/pics/clean/big/85/845085_0.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 8,
        name: "Samsung Book2 Pro",
        price: 239590,
        image: "https://avatars.mds.yandex.net/get-mpic/4397559/img_id7018322268197419546.jpeg/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 9,
        name: "PlayStation 5",
        price: 62999,
        image: "https://c.dns-shop.ru/thumb/st1/fit/0/0/046bc1ff14b43a741f6f93a90206a248/1a0124c174c38b4258bc826bbefa9bac880e59d27b57dbb29afbd55c2511f9e1.jpg.webp",
        count: 0,
        totalPrice: 0
    },
    {
        id: 10,
        name: "Xbox Series X",
        price: 66990,
        image: "https://avatars.mds.yandex.net/get-mpic/5323566/img_id6472143200699646946.jpeg/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 11,
        name: "Gaming PC",
        price: 571000,
        image: "https://i.pinimg.com/originals/49/11/af/4911aff4af7e001e06b47c89dd86f163.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 12,
        name: "RTX 4090",
        price: 247000,
        image: "https://avatars.mds.yandex.net/get-mpic/7150546/img_id3418954759661600105.jpeg/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 13,
        name: "Samsung 85' Neo QLED",
        price: 549990,
        image: "https://cdn.citilink.ru/H5jjBpLUimVAInGwnt0TgdZWqcbnGGDvEr80BItzWVw/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1879380_v01_b.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 14,
        name: "Lamborghini Urus",
        price: 49000000,
        image: "https://ivanglazunov.ru/wp-content/uploads/6/8/7/68746e9691c2bd63856b99833ca78742.jpeg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 15,
        name: "Bugatti Veyron",
        price: 112200000,
        image: "https://autonewsmake.ru/wp-content/uploads/2016/12/bugatti-veyron-16-4.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 16,
        name: "Tesla Model S Plaid",
        price: 9868320,
        image: "https://motor.ru/imgs/2021/07/02/12/4746281/f7224b7480f0f8c4943a990c043da89b3027764f.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 17,
        name: "McLaren Senna",
        price: 118464000,
        image: "https://images.drive.ru/i/0/5e96ebb3ec05c4b21400001f.jpeg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 18,
        name: "Lamborghini Countach",
        price: 185000000,
        image: "https://kolesa-uploads.ru/-/f8a2166a-31af-4fba-b7a7-7f94874c4346/lamborghini-countach-lpi-800-4.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 19,
        name: "Bugatti Centodieci",
        price: 973774080,
        image: "https://cdn.motor1.com/images/mgl/91k7y/s1/concepts-bugatti-a-molsheim.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 20,
        name: "Lamborghini Sian",
        price: 279871200,
        image: "https://4kwallpapers.com/images/wallpapers/lamborghini-si-n-fkp-37-2021-5k-5120x2880-4426.jpeg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 21,
        name: "Mega Yatch",
        price: 22428000000,
        image: "https://i.pinimg.com/originals/b5/97/42/b59742cefa4c5f3c1447c4a8a439035d.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 22,
        name: "Monalisa by da Vinci",
        price: 53827200000,
        image: "https://enotnavolge.ru/wp-content/uploads/e/d/a/edae373ffd2a36f75dd9a183907d6f97.jpeg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 23,
        name: "Jewel Royale",
        price: 725592000,
        image: "https://sachmatas.lt/wp-content/uploads/2020/09/tb_file_544_file.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 24,
        name: "Rolex Datejust",
        price: 980000,
        image: "https://avatars.mds.yandex.net/get-goods_pic/6413880/picd143e10d8db91dbc22e8d3c1e1f46849/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 25,
        name: "Airbus A380",
        price: 44856000000,
        image: "https://regnum.ru/uploads/pictures/news/2016/10/11/regnum_picture_147618588576860_normal.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 26,
        name: "Diamond",
        price: 1388858900,
        image: "https://kartinkin.net/uploads/posts/2022-03/1646783121_36-kartinkin-net-p-kartinki-almaza-41.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 27,
        name: "Skyscraper",
        price: 7142948390,
        image: "https://susanintop.com/wp-content/uploads/2019/01/Уиллис-тауэр.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 28,
        name: "Twitter",
        price: 328724000000,
        image: "https://www.liveauctioneers.com/news/wp-content/uploads/2021/03/acn-032321-twitter-featured.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 29,
        name: "Helicopter",
        price: 1120650000,
        image: "https://www.biz-jet.ru/files/files/RAN_squirrel_helicopter_at_melb_GP_08.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 30,
        name: "Gold Bar",
        price: 4632020,
        image: "https://cdn1.ozone.ru/s3/multimedia-7/6241285759.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 31,
        name: "Air Jordan",
        price: 49990,
        image: "https://avatars.mds.yandex.net/get-mpic/4343092/img_id2017183844608819069.png/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 32,
        name: "Burger",
        price: 299,
        image: "http://clipart-library.com/images/yTkrqbggc.jpg",
        count: 0,
        totalPrice: 0
    },
    {
        id: 33,
        name: "Diamond Ring",
        price: 754300,
        image: "https://avatars.mds.yandex.net/get-mpic/1749547/img_id8796248814112556600.jpeg/orig",
        count: 0,
        totalPrice: 0
    },
    {
        id: 34,
        name: "Coke",
        price: 150,
        image: "https://shawarmagrill.ru/assets/images/products/312/26289119-digital-image.png",
        count: 0,
        totalPrice: 0
    },
    {
        id: 35,
        name: "Bike",
        price: 55000,
        image: "https://vamvelosiped.ru/images/product_images/popup_images/-000114285_p_s.jpg",
        count: 0,
        totalPrice: 0
    }
];