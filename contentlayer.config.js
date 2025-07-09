import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
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
  locale: {
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
    subTitle: { type: 'string', required: false },
    lead: { type: 'string', required: false },
    showOnHomePage: { type: 'boolean', required: false },
    author: {type: 'string', required: false},
    coverImage: { type: 'string', required: true },
    heroImage: { type: 'string', required: false },
    createDate: { type: 'date', required: true },
    updateDate: { type: 'date', required: true },
    category: { type: 'string', required: false },
    timeToRead: { type: 'number', required: false }, // in minutes
    priority: { type: 'number', required: false }, // descendent
    published: { type: 'boolean', required: true },
  },

  computedFields,
}))

export const Monument = defineDocumentType(() => ({
  name: 'Monument',
  filePathPattern: `monuments/**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    coverImage: { type: 'string', required: true },
    heroImage: { type: 'string', required: false },
    imageGallery: { type: 'list', of: { type: 'string' }, required: false },
    category: { type: 'string', required: true },
    openHours: { type: 'string', required: false },
    address: { type: 'string', required: true },
    contactInfo: { type: 'string', required: false },
    isVisitable: { type: 'boolean', required: false },
    createDate: { type: 'date', required: true },
    updateDate: { type: 'date', required: true },
    priority: { type: 'number', required: false }, // descendent
    published: { type: 'boolean', required: true },
  },

  computedFields,
}))

export const Church = defineDocumentType(() => ({
  name: 'Church',
  filePathPattern: `churches/**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string', required: true },
    category: { type: 'string', required: true },
    openHours: { type: 'string', required: false },
    address: { type: 'string', required: true },
    contactInfo: { type: 'string', required: false },
    isVisitable: { type: 'boolean', required: false },
    createDate: { type: 'date', required: true },
    updateDate: { type: 'date', required: true },
    priority: { type: 'number', required: false }, // descendent
    published: { type: 'boolean', required: true },
  },

  computedFields,
}))

export const NotablePersonality = defineDocumentType(() => ({
  name: 'NotablePersonality',
  filePathPattern: `notable-personalities/**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    occupation: { type: 'string', required: true },
    heroImage: { type: 'string', required: true },
    coverImage: { type: 'string', required: false },
    createDate: { type: 'date', required: true },
    updateDate: { type: 'date', required: true },
    priority: { type: 'number', required: false }, // descendent
    published: { type: 'boolean', required: true },
  },

  computedFields,
}))

export const TripSuggestion = defineDocumentType(() => ({
  name: 'TripSuggestion',
  filePathPattern: `trip-suggestions/**/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    subTitle: { type: 'string', required: false },
    lead: { type: 'string', required: false },
    image: { type: 'string', required: true },
    createDate: { type: 'date', required: true },
    updateDate: { type: 'date', required: true },
    category: { type: 'string', required: false },
    timeToRead: { type: 'number', required: false }, // in minutes
    priority: { type: 'number', required: false }, // descendent
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
  documentTypes: [Article, Monument, Church, NotablePersonality, TripSuggestion, CaseStudy],
  mdx: {
    remarkPlugins: [remarkGfm]
  },
})
