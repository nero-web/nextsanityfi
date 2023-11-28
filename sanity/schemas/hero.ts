export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
    ],

}