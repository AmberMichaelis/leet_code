// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
    // If either list is empty, return the other list's node
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    // If l1 is lower
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    // If l2 is lower
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([-4, -2, -1], [-4, -3, -1]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))


/* The following three functions work for arrays but not linked lists: 

var mergeTwoLists = function (list1, list2) {
    if (list1.length === 0) { return list2 }
    if (list2.length === 0) { return list1 }
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


var mergeTwoLists = function(list1, list2) {
    let list3 = list1.concat(list2);
    list3.sort(function(a,b){return a - b})
    console.log(list3);    
};


var mergeTwoLists = function(list1, list2) {
    let list3 = [... list1, ...list2];
    list3.sort(function(a,b){return a - b})
    console.log(list3);    
};

*/
