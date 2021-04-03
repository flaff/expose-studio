// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import siteSettings from './documents/siteSettings'
import project from './documents/project'
import artPiece from './documents/artPiece'
import artTechnique from './documents/artTechnique'
import exhibition from './documents/exhibition'
import achievement from './documents/achievement'
import aboutMe from './documents/aboutMe'
import translation from './documents/translation'

// Object types
import figure from './objects/figure'
import projectPortableText from './objects/projectPortableText'
import localeString from './objects/localeString'
import localeText from './objects/localeText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    figure,
    projectPortableText,
    localeString,
    localeText,
    // The following are document types which will appear
    // in the studio.

    project,
    artPiece,
    artTechnique,
    exhibition,
    achievement,
    translation,

    aboutMe,
    siteSettings
  ])
})
