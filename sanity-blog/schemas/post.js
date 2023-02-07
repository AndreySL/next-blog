export default {
  name: 'post',
  type: 'document',
  title: 'Post 1',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'content',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body content',
      group: 'content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
