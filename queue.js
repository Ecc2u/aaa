var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = null
}