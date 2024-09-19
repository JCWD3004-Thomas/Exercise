// Question 1 = Callback - Order & Delivery Food
// function orderFood (foodName: string, callback: Function) {
//     console.log(`Memesan Makanan: ${foodName}`);
//     setTimeout(() => {
//         console.log(`Makanan ${foodName} telah dipesan!`)
//         callback(foodName, finishDeliver);
//     }, 3000);
// }

// function deliverFood (foodName: string, callback: Function) {
//     setTimeout(() => {
//         console.log (`Mengantarkan Makanan: ${foodName}`)
//         callback(foodName);
//     }, 2000);   
// }

// function finishDeliver (foodName: string) {
//     setTimeout(() => {
//         console.log(`Makanan ${foodName} telah diantarkan!`);
//     }, 5000);
// }

// orderFood("Pizza", deliverFood);

// Question 2 = Promise - Process Belanja Online

// function addToCart (itemName: string) {
//     console.log (`Menambahkan barang ke keranjang : ${itemName}`);
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (itemName)
//                 resolve(`Barang ${itemName} telah ditambahkan ke keranjang!`);
//             else reject (`Barang gagal ditambahkan ke keranjang.`)
//         }, 2000);
//     })
// }
// function checkoutItem (itemName: string) {
//     console.log (`Memproses Checkout...`);
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (itemName)
//                 resolve(`Checkout Berhasil!`);
//             else reject (`Checkout gagal.`)
//         }, 3000)
//     })
// }

// async function processOrder () {
//     try {
//         const message = await addToCart("Laptop");
//         console.log(message);

//         const result = await checkoutItem("Laptop");
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// processOrder();

// Question 3 - Async/Await - Perencanaan Liburan



// Teacher Solution
// -- Task 1
interface FoodCallback {
    (message: string): void;
    //void: for function that have no return
}

function orderFood (foodName: string, callback: FoodCallback){
    console.log("Memesan Makanan: " + foodName);
    setTimeout(() => {
        callback("Makanan " + foodName + " telah dipesan!")
    }, 3000)
}

function deliverFood (foodName:string, callback: FoodCallback) {
    console.log("Mengantarkan Makanan : " + foodName);
    setTimeout(() => {
        callback("Makanan " + foodName + " telah diantarkan!")
    }, 5000);
}

orderFood("Pizza", (message: string) => {
    console.log(message);
    deliverFood("Pizza", (message: string) => {
        console.log(message);
    });
});

// e.g 2
// jika function memiliki return, maka tipe datanya disesuaikan dengan hasil returnya
// jika function tidak memiliki return, maka menggunakan "void"
interface InputNumber {
    number_a: number;
    number_b: number;
}

function sumBetweenNumber(data: InputNumber): number {
    let result = data.number_a + data.number_b;
    return result;
}

// -- Task 2
// async await = dijalankan secara berurut even kalo ada settimeout yang berbeda
interface PromiseMessage {
    message: string;
}

function addToCartItem(itemName: string): Promise<PromiseMessage> {
    console.log ("Menambahkan barang ke keranjang : " + itemName);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({message: "Barang" + itemName + " telah ditambahkan ke keranjang.",

            });
        }, 2000);
    });
}

function checkoutItem(): Promise<PromiseMessage> {
    console.log("Memproses Checkout...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                message: "Checkout Berhasil!"
            })
        }, 3000);
    });
}

async function processOrderItem(itemName: string) {
    try {
        const cartResult = await addToCartItem(itemName)
        console.log(cartResult.message)

        const checkoutResult = await checkoutItem();
        console.log(checkoutResult.message)
    } catch (error) {
        console.error(error);
    }
}

processOrderItem("Laptop");

//-- task 3
// rizky way

/*
//buat fungsi untuk pesawat dengan promise 3000
//buat fungsi untuk hotel dengan promise 2000
//buat fungsi untuk keduanya (hotel dan pesawat) dengan result pesanan

async function bookFlight(flightName: string) {
  console.log(`memesan penerbangan ke ${flightName}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Penerbangan ke ${flightName} Telah dipesan`);
    }, 3000);
  });
}

async function bookHotel(hotelName: string) {
  console.log(`memesan hotel ke ${hotelName}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hotel ${hotelName} Telah dipesan`);
    }, 2000);
  });
}

async function planVacation(flightName: string, hotelName: string) {
  try {
    
    const bookedFlight = await bookFlight(flightName);
    console.log(bookedFlight); 
    const bookedHotel = await bookHotel(hotelName);
    console.log(bookedHotel);
    
    console.log(
      `Lburan ke ${flightName} , dan menginap di ${hotelName} telah direncanakan`
    );
  } catch (err) {
    console.log(err);
  }
}

planVacation("Bali", "Bali Indah");
*/
