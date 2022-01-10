// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
    if (list1.length === 0) { return list2 }
    if (list2.length === 0) { return list1 }
    let list3 = [];
    for (let i = 0; i < list1.length; i++) {
        for (let k = 0; k < list2.length; k++) {
            if (list2[k] <= list1[i]) {
                list1.splice(i, 0, list2[k]);
                list2.splice(k,1)
            }
        }
    }
    return list1;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([-4, -2, -1], [-4, -3, -1]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))


// var mergeTwoLists = function(list1, list2) {
//     let list3 = list1.concat(list2);
//     list3.sort(function(a,b){return a - b})
//     console.log(list3);    
// };


// var mergeTwoLists = function(list1, list2) {
//     let list3 = [... list1, ...list2];
//     list3.sort(function(a,b){return a - b})
//     console.log(list3);    
// };
