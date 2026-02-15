import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true }
          }
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true }
        }),
        projectUrl: fields.url({
          label: 'Project URL'
        }),
        content: fields.markdoc({
          label: 'Content'
        })
      }
    })
  }
});
