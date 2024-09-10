// Data Structure & Algorithm Add On Question
// Monday, 9 September 2024


// Question 1 - Sharing Photo App - Single Linked List
// class Node {
//     constructor(photo) {
//         this.photo = photo;
//         this.next = null;
//     }
// };

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     addImage(photo) {
//         let newNode = new Node(photo);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }
//     viewStory() {
//         let current = this.head;
//         if (!current) {
//             console.log("No Image");
//             return;
//         }
//         while (current) {
//             console.log("Viewing: " + current.photo);
//             current = current.next;
//         }
//     };
// };

// // const myStory = new LinkedList();

// // myStory.addImage("Image 1.jpg");
// // myStory.addImage("Image 2.jpg");
// // myStory.addImage("Image 3.jpg");

// // myStory.viewStory();


// // Question 2 - Music Player App - Double Linked List

// // class Playlist {
// //     constructor(value) {
// //         this.value = value;
// //         this.prev = null;
// //         this.next = null;
// //         this.current = null;
// //     }
// // }

// // class DoublyLinkedList {
// //     constructor(){
// //         this.head = null;
// //         this.tail = null;
// //         this.current = null;
// //     }
// //     append(value) {

// //     }
// // }


// // const myPlaylist = new Playlist();
// // myPlaylist.addSong("song1.mp3");
// // myPlaylist.addSong("song2.mp3");
// // myPlaylist.addSong("song3.mp3");    

// // myPlaylist.playForward();
// // myPlaylist.playBackward();




// // Question 3 - Undo-Redo Text Editor - Stack
// // Write Text Hello World -> undo remove world -> redo undone undo
// class TextEditor {
//     constructor(){
//         this.words = [];    //array untuk menyimpan new/current text
//         this.history = [];  //array untuk menyimpan text yang di undo -> untuk di redo kembali
//     }
//     pushItem(text) {        //function pushItem = untuk menambahkan text ke dalam array this.words
//         this.words.push(text);
//         this.history = [];  //reset history setiap new text ditambahkan
//     }
//     undo() {
//         if (this.words.length > 0) {    //check if there are any words length (> 0), on this.words
//             this.history.push(this.words.pop());
//             // array text [Hello, World]
//             // this.words = ["Hello"] -> pop "world" dari .words
//             // this.history = ["World"] -> push "world" ke .history
//         } else {
//             console.log("Nothing to undo");
//         }
//     }
//     redo() {
//         if (this.history.length > 0) {  //check if there are any words in history 
//             this.words.push(this.history.pop());
//             // kalo ada text di history makan push kembali ke words dan remove history
//         } else {
//             console.log("Nothing to redo");
//         }
//     }
//     peekItem() {
//         return this.words.join(" "); // mengembalikan array > string dan menambahkan spasi
//     };
// };

// let newTextEditor = new TextEditor();
// newTextEditor.pushItem("Hello");
// newTextEditor.pushItem("World");
// newTextEditor.undo();
// // console.log("after undo: " + newTextEditor.peekItem());
// newTextEditor.redo();
// // console.log("after redo: " + newTextEditor.peekItem());



// Question 4 - Organizing Library of Books - Sorting (Bubble Sort)
// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 swapped = true;
//             }
//         }
//     } while (swapped); 
//     return arr;
// }

// let bookPrices = [35000, 12000, 70000, 24000, 15000, 56000, 45000];
// // console.log("After Sorted : ", bubbleSort(bookPrices));


// // Question 5 - Finding Perfect item in Dota - Sorting





// Teacher Solution

// Question 1 - Photo Collection (Single Linked List) (only forward no back)
class PhotoNode {
    constructor(photoUrl) {
        this.photoUrl = photoUrl;
        this.next = null;
    }
}

class Story {
    constructor() {
        this.head = null;
    }
    addPhoto(photoUrl){
        const newPhoto = new PhotoNode(photoUrl);
        if (this.head == null) {
            this.head = newPhoto;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newPhoto;
        }
    }
    viewStory() {
        let current = this.head;
        if (current === null) {
            console.log("Story not found");
            return;
        }
        while (current !== null) {
            console.log("Viewing story : " + current.photoUrl);
            current = current.next;
        }
        console.log("You have reached the end of the story.");
    }
}

const myStoryVar = new Story();

myStoryVar.addPhoto("photo1.jpg");
myStoryVar.addPhoto("photo2.jpg");
myStoryVar.addPhoto("photo3.jpg");
myStoryVar.addPhoto("photo4.jpg");

// myStoryVar.viewStory();


// Question 2 - Music Player App (Double Linked List) (can move back & forward)
class SongNode {
    constructor(songTitle) {
        this.songTitle = songTitle;
        this.next = null;
        this.prev = null;
    }
}

class Playlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }
    addSong(songTitle) {
        const newSong = new SongNode(songTitle);
        if (this.head === null) {
            this.head = this.tail = this.current = newSong;
        } else {
            this.tail.next = newSong;
            newSong.prev = this.tail;
            this.tail = newSong;
        }
    }
    playForward() {
        if (this.current == null) {
            console.log("Playlist is empty");
            return;
        }
        if (this.current.next == null) {
            console.log("This is a last song in the playlist");
            return;
        }
        this.current = this.current.next;
        console.log("Playing Song : ", this.current.songTitle);
    }
    playBackward() {
        if (this.current == null) {
            console.log("Playlist is empty");
            return;
        }
        if (this.current.prev == null) {
            console.log("This is a last song in the playlist");
            return;
        }
        this.current = this.current.prev;
        console.log("Playing Song : ", this.current.songTitle);
    }
}

const myPlaylist = new Playlist();
myPlaylist.addSong("Lagu 1");
myPlaylist.addSong("Lagu 2");
myPlaylist.addSong("Lagu 3");

// myPlaylist.playForward();
// myPlaylist.playForward();
// myPlaylist.playBackward();
// myPlaylist.playBackward();


// Question 3 - Undo-Redo Text Editor (Stack)
class TextEditor {
    constructor(){
        this.content = "";
        this.undoStack = [];
        this.redoStack = [];
    }
    write(text) {
        this.undoStack.push(this.content);
        this.content += text;
        this.redoStack = [];
        console.log("After write " + text + " -> text content : " + this.content);
    }
    undo () {
        if (this.undoStack.length > 0) {
            this.redoStack.push(this.content);
            this.content = this.undoStack.pop();
            console.log("After undo -> text content : " + this.content);
        } else {
            console.log("Nothing to undo");
        }
    }
    redo() {
        if(this.redoStack.length > 0) {
            this.undoStack.push(this.content);
            this.content = this.redoStack.pop();
            console.log("After redo -> text content : " + this.content);
        } else {
            console.log("Nothing to redo");
        }
    };
};

const editor = new TextEditor();
editor.write("Hello");
editor.write("World");
// editor.undo();


// Question 4 - Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped); 
    return arr;
}

let bookPrices = [35000, 12000, 70000, 24000, 15000, 50000, 45000];

console.log(bubbleSort(bookPrices));

// Question 5 - Dota 2 Sort Item - Binary Search
function binarySearchItem(items, targetCost) {
    let low = 0
    let high = items.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midItem = items[mid];

        if (midItem.cost === targetCost) {
            return midItem;
        } else if (midItem.cost < targetCost) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

const items = [
{
    name: "Magic Stick",
    cost: 200,
},
{
    name: "Boots of Speed",
    cost: 500,
},
{
    name: "Helm of Iron Will",
    cost: 950,
},
{
    name: "Broadsword",
    cost: 1200,
},
{
    name: "Claymore",
    cost: 1400,
},
{
    name: "Battlefury",
    cost: 4200,
},

];

const foundItem = binarySearchItem(items, targetCost);
if (foundItem && availableGold >= foundItem.cost) {
    console.log("Item Found : Yes, " + foundItem.name + " is found and you have enough gold to purchase it")
}
else if (foundItem) {
    console.log("Item Found : Yes, " + foundItem.name + " is found but you don't have enough gold to purchase it")
} else {
    console.log("Item Not Found on the shop")
};


