export default {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      title: "Resume",
      name: "resumeFile",
      type: "file",
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
