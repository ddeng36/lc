/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const ListNode = function(val, next)  {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const array = [7,7]
const head = new ListNode(array[0])
const buildList = function(array) {
    const len = array.length;
    let cur = head;
    for(let i = 1; i < len;i++) {
        const node = new ListNode(array[i])
        cur.next = node;
        cur = cur.next;
    }
}

var removeElements = function(head, val) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let cur = dummy;
    while(cur){
        let temp = cur.next;
        while(temp && temp.val === val) {
            temp = temp.next;
        }
        cur.next = temp;
        cur = cur.next;
    }
    return dummy.next;
};
buildList(array);
console.log(removeElements(head, 7))
// @lc code=end

