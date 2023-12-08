export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Bags', value: 'Bags'},
          {title: 'Jewelry', value: 'Jewelry'},
          {title: 'Crafts', value: 'Crafts'},
          // {title: "Male", value: "Male"},
          // {title: "Kids", value: "Kids"}
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'string',
      options: {
        list: [
          {title: 'Tote bags', value: 'Tote bags'},
          {title: 'Earrings', value: 'Earrings'},
          {title: 'Piercings', value: 'Piercings'},
          {title: 'Crafts mini', value: 'Crafts mini'},
        ],
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'care',
      title: 'Care',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
