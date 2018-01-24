function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype = {

	insert: function(value) {
		let insertNode = new Node(value);
			currentNode = this.root;

		if (!this.root) {
			this.root = insertNode;
			return;
		}
		while(true)
			if (value >= currentNode.value) {
				if (currentNode.right === null) {
					currentNode.right = insertNode;
					break;
				}
				else {
					currentNode = currentNode.right;
				}
			}
			else {
				if (currentNode.left === null) {
					currentNode.left = insertNode;
					break;
				}
				else {
					currentNode = currentNode.left;
				}
			}
	},

	remove: function(value, root = this.root) {
		if (!root) {
			return root;
		}
		if (value < root.value) {
			root.left = this.remove(value, root.left);
		}
		else if (value > root.value) {
			root.right = this.remove(value, root.right);
		}
		else if (root.left !== null && root.right !== null) {
			root.value = this.min(root.right);
			root.right = this.remove(root.value, root.right);
		} 
		else if (root.left !== null) {
			root = root.left;
		} 
		else {
			root = root.right;
		}
		return root;
	},

	maxNode: function(root = this.root) {
		while (root.right !== null) {
			root = root.right;
		}
		return root;
	},

	minNode: function(root = this.root) {
		while (root.left !== null) {
			root = root.left;
		}
		return root;
	},

	max: function(root = this.root) {
		return this.maxNode(root).value;
	},

	min: function(root = this.root) {
		return this.minNode(root).value;
	},

	inorderTraversal: function(root = this.root, acc = []) {
		if (!root) {
			inorderTraversal(root.left, acc);
			acc.push(root.value);
			inorderTraversal(root.right, acc);
		}
		if (this.root === root) {
			return acc;
		}
	},

	preorderTraversal: function(root = this.root, acc = []) {
		if (!root) {
			acc.push(root.value);
			preorderTraversal(root.left, acc);
			preorderTraversal(root.right, acc);
		}
		if (this.root === root) {
			return acc;
		}
	},

	postorderTraversal: function(root = this.root, acc = []) {
		if (!root) {
			postorderTraversal(root.left, acc);
			postorderTraversal(root.right, acc);
			acc.push(root.value);
		}
		if (this.root === root) {
			return acc;
		}
	},

	search: function(value) {
		if (!this.root) return false;

		currentNode = this.root;
		while (true) {
			if (currentNode === null) {
				return false
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				return true;
			}
		}
	},

	isBinarySearchTree: function(root = this.root) {

		function check(root, min, max) {
			if (root === null) return true;
			if (root.value <= min || max <= root.value) return false
			return check(root.left, min, root.value) && check(root.right, root.key, max)
		}

 		return check(root, -Infinity, Infinity)
	},

	countNodes: function(root = this.root) {
		let left, right;

		if (!root) {
			return 0;
		}
		if (!root.left && !root.right) {
			return 1;
		}
		if (root.left) {
			left = this.countNodes(root.left);
		}
		else {
			left = 0;
		}
		if (root.right) {
			right = this.countNodes(root.right);
		} 
		else { 
			right = 0;
		}

		return left + right + 1;
	}
}
