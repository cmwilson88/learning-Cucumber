'use strict';


let groceryList = {
	addItem(item) {
		this.list.push(item)
	},
	getAll() {
		return this.list;
	}
}

module.exports = {
	create() {
		return Object.create(groceryList, {
			'list': {
				value: [],
				writable: false,
				enumerable: true
			}
		})
	}
}