export default {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "resumeFile",
      type: "file",
      title: "Resume File",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
      ],
    },
  ],
};
