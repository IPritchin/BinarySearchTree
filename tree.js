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

	insert(value, root = this.root) {
		if (root === null) {
			if (root === this.root) {
				this.root = new Node(value);
			} else {
				return new Node(value);
			}
		} else if (value < root.value) {
			root.left = this.insert(value, root.left)
		} else if (value > root.value) {
			root.right = this.insert(value, root.right)
		} 
		return root;
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

	searchNode(value, root = this.root) {
		if (root === null || value === root.value) {
			return root;
		} 
		if (value < root.value) {
			return this.searchNode(value, root.left)
		} else {
			return this.searchNode(value, root.right)
		}
	}

	search(value) {
		return this.searchNode(value) !== null;
	}

	isBinarySearchTree(root = this.root) {

		function check(root, min, max) {
			if (root === null) return true;
			if (root.value <= min || max <= root.value) return false
			return check(root.left, min, root.value) && check(root.right, root.key, max)
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