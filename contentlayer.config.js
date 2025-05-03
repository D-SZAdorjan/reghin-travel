import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

const computedFields = {
  url: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: 'string',
    resolve: (doc) => `${doc._raw.sourceFileName.replace('.mdx', '')}`,
  },
  lang: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
  },
}

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: false },
    lead: { type: 'string', required: false },
    image: { type: 'string', required: true },
    createDate: { type: 'date', required: true },
    updateDate: { type: 'date', required: true },
    category: { type: 'string', required: false },
    timeToRead: { type: 'number', required: false }, // in minutes
    priority: { type: 'number', required: false }, // in minute
    published: { type: 'boolean', required: true },
  },

  computedFields,
}))

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `work/**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    technologies: {
      type: 'list',
      of: { type: 'string' },
    },
    color: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    coverImage: { type: 'string', required: true },
    projectURL: { type: 'string', required: true },
    description: { type: 'string', required: true },
    projectDuration: { type: 'string', required: true },
    collaborationTime: { type: 'string', required: false },
    client: { type: 'json', required: true },
    statisticText: { type: 'string', required: false },
    statisticValue: { type: 'string', required: false },
    containerClass: { type: 'string', required: false },
    priority: { type: 'number', required: false },
  },

  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Article, CaseStudy],
  mdx: {
    remarkPlugins: [remarkGfm]
  },
})
