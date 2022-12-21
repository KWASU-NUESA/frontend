export default {
    name: "staffData",
    title: "Staff Data",
    type: "document",
    fields: [
        {
            name: "fullname",
            title: "Fullname",
            type: "string"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'fullname',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
          name: 'position',
          title: 'Position',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          title: 'Employment Type',
          name: 'type',
          type: 'string',
          options: {
            list: [
              "Academic", "Non Academic", "Executives"
            ],
          }
        },
        {
          title: 'Stage',
          name: 'stage',
          type: 'string',
          options: {
            list: [
              "Professor", "Doctor", "Other"
            ],
          }
        },{
          title: 'Gender',
          name: 'gender',
          type: 'string',
          options: {
            list: [
              "Male", "Female"
            ],
          }
        }
      ],
      preview: {
        select: {
          title: 'fullname',
          media: 'image',
        }
      },
}