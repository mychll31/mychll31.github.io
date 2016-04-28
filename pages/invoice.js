new Vue({
	el: '#tasks',

	data: {
        tasks: [],
        ctr: 0,
        newModule: '',
		newDesc: '',
		newCost: '',
		costTotal: 0
    },

    methods: {
    	addTask: function(e) {
    		e.preventDefault();
    		this.ctr += 1;
    		this.tasks.push({
    			no: this.ctr,
    			module: this.newModule,
				desc: this.newDesc,
				cost: this.newCost
    		});

    		this.costTotal += parseFloat(this.newCost);
    		this.newModule = '';
			this.newDesc = '';
			this.newCost = '';

    	},
    }

});