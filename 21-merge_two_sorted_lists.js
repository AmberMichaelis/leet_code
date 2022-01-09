// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function(list1, list2) {
    let list3 = [... list1, ...list2];
    list3.sort(function(a,b){return a - b})
    console.log(list3);    
};

mergeTwoLists([1,2,4],[1,3,4])
mergeTwoLists([-1,-2,-4],[-1,-3,-4])
mergeTwoLists([],[])
mergeTwoLists([],[0])


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
