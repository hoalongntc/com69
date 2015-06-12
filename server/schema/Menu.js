Schemas.Menu = new SimpleSchema({
	PRD_ID: {
		type: String,
		regEx: /^PRD\d{4}$/
	},
    MNU_DT: {
    	type: String,
    	regEx: /^20\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
	},    
    CRE_USR: {
    	type: String,
    	optional: true 
    },
    CRE_DT: {
    	type: Date,
    	optional: true
    },
    UPD_USR: {
    	type: Boolean,
    	optional: true
    },
    UPD_DT: {
    	type: Date,
    	optional: true
    }
});

Menu.attachSchema(Schemas.Menu);