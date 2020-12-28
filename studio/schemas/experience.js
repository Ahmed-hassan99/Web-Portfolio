export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Position Title",
      type: "string",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
    {
      name: "jobDescription",
      title: "Job Description",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: "End Date, New",
      name: "endDateDesc",
      by: [{ field: "endDate", direction: "desc" }],
    },
    {
      title: "End Date, Old",
      name: "endDateAsc",
      by: [{ field: "endDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
