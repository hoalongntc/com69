Schemas.Product = new SimpleSchema({
	PRD_ID: {
		type: String,
		regEx: /^PRD\d{4}$/,
		unique: true
	},
    PRD_NM: {
    	type: String,    	
	},
    PRD_IMG: {
    	type: String,
    	regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    PRD_CAT_ID: {
    	type: String,
		regEx: /^CAT\d{4}$/
    },
    PRD_UNT: {
    	type: String,    	
    },
    PRD_UNT_PRC: {
    	type: Number ,
    	min: 0
    },
    PRD_PRC: {
    	type: Number,
    	min: 0
    },
    SPLR_ID: {
    	type: Number,
    	min: 1
    },
    DEL_FLG: {
    	type: Boolean,
    	optional: true,
    	blackbox: true
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

Product.attachSchema(Schemas.Product)