class Node {

	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

}


class BinarySearchTree {

	constructor() {
		this.root = null;
	}

	insert(value) {
		let insertNode = new Node(value),
			currentNode = this.root;

		if (!this.root) {
			this.root = insertNode;
			return;
		}
		while(true) {
			if (value >= currentNode.value) {
				if (currentNode.right === null) {
					currentNode.right = insertNode;
					break;
				} else {
					currentNode = currentNode.right;
				}
			} else {
				if (currentNode.left === null) {
					currentNode.left = insertNode;
					break;
				} else {
					currentNode = currentNode.left;
				}
			}
		}
	}

	remove(value, root = this.root) {
		if (!root) {
			return root;
		}
		if (value < root.value) {
			root.left = this.remove(value, root.left);
		} else if (value > root.value) {
			root.right = this.remove(value, root.right);
		} else if (root.left !== null && root.right !== null) {
			root.value = this.min(root.right);
			root.right = this.remove(root.value, root.right);
		} else if (root.left !== null) {
			root = root.left;
		} else {
			root = root.right;
		}
		return root;
	}

	maxNode(root = this.root) {
		while (root.right !== null) {
			root = root.right;
		}
		return root;
	}

	minNode(root = this.root) {
		while (root.left !== null) {
			root = root.left;
		}
		return root;
	}

	max(root = this.root) {
		return this.maxNode(root).value;
	}

	min(root = this.root) {
		return this.minNode(root).value;
	}

	inorderTraversal(root = this.root, acc = []) {
		if (root) {
			this.inorderTraversal(root.left, acc);
			acc.push(root.value);
			this.inorderTraversal(root.right, acc);
		}
		if (this.root === root) {
			return acc;
		}
	}

	preorderTraversal(root = this.root, acc = []) {
		if (root) {
			acc.push(root.value);
			this.preorderTraversal(root.left, acc);
			this.preorderTraversal(root.right, acc);
		}
		if (this.root === root) {
			return acc;
		}
	}

	postorderTraversal(root = this.root, acc = []) {
		if (root) {
			this.postorderTraversal(root.left, acc);
			this.postorderTraversal(root.right, acc);
			acc.push(root.value);
		}
		if (this.root === root) {
			return acc;
		}
	}

	search(value) {
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
	}

	isBinarySearchTree(root = this.root) {

		function check(root, min, max) {
			if (root === null) return true;
			if (root.value <= min || max <= root.value) return false
			return this.check(root.left, min, root.value) && this.check(root.right, root.key, max)
		}

 		return check(root, -Infinity, Infinity)
	}

	countNodes(root = this.root) {
		let left, right;

		if (!root) {
			return 0;
		}
		if (!root.left && !root.right) {
			return 1;
		}
		if (root.left) {
			left = this.countNodes(root.left);
		} else {
			left = 0;
		}
		if (root.right) {
			right = this.countNodes(root.right);
		} else { 
			right = 0;
		}

		return left + right + 1;
	}
}