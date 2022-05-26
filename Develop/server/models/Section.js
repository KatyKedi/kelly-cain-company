const { Schema, model } = require('mongoose');

const SectionSchema = new Schema(
    {
        name: {
            type: String
        },
        full: {
            type: Boolean
        },
        items: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Item'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
);

// get total count of items on retrieval
SectionSchema.virtual('itemCount').get(function() {
    return this.items.length
});

const Section = model('Section', SectionSchema);

module.exports = Section;