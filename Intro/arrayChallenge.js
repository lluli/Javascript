// You are helping your friend, who owns a candies business, with their website. 
// Every order placed on the website gets assigned an order ID, such as 1274.

// Your friend would like to create batches of five order IDs. 
// They ask you if you could give a hand and write a small program to do this.

// To complete this exercise you will have to find out:

// how to add elements to an array with the .concat method
// how to get the length of an array

let orderIds = [1274, 1275, 1276, 1278, 1279, 1280, 1281, 1282, 1283, 1280]

function groupedBatches (orderIds) {
    batches = []

    for (let i=0 ; i < orderIds.length ; i += 5) {

        let batch = orderIds.slice(i, i+5)

        batches.push(batch)
    } 
    return batches
}

let by5 = groupedBatches(orderIds)

console.log(by5)