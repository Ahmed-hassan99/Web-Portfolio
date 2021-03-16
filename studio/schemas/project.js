export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "work", title: "Work" },
          { value: "school", title: "School" },
        ],
      },
    },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "blockContent",
    },

    {
      name: "comingSoon",
      title: "Coming Soon ?",
      type: "boolean",
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "gitLink",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
  initialValue: {
    link: "#",
    gitLink: "#",
  },
};
