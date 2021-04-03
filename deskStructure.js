import S from '@sanity/desk-tool/structure-builder'
import Gear from 'react-bootstrap-icons/dist/icons/gear'

import CardImage from 'react-bootstrap-icons/dist/icons/card-image'
import Trophy from 'react-bootstrap-icons/dist/icons/trophy'
import ChatLeftQuote from 'react-bootstrap-icons/dist/icons/chat-left-quote'
import Droplet from 'react-bootstrap-icons/dist/icons/droplet'
import Eye from 'react-bootstrap-icons/dist/icons/eye'
import ColumnsGap from 'react-bootstrap-icons/dist/icons/columns-gap'
import PersonCircle from 'react-bootstrap-icons/dist/icons/person-circle'

const createItem = id =>
  S.listItem()
    .schemaType(id)
    .child(S.documentTypeList(id))

const items = [
  createItem('project')
    .title('Projekty')
    .icon(ColumnsGap),
  createItem('artPiece')
    .title('Dzieła')
    .icon(CardImage),

  createItem('artTechnique')
    .title('Techniki')
    .icon(Droplet),
  createItem('exhibition')
    .title('Wystawy')
    .icon(Eye),
  createItem('achievement')
    .title('Osiągnięcia')
    .icon(Trophy),

  createItem('translation')
    .title('Tłumaczenia interfejsu')
    .icon(ChatLeftQuote)
]

const hiddenDocTypes = listItem => ![...items.map(item => item?.spec?.schemaType), 'siteSettings', 'aboutMe'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Treść')
    .items([
      S.listItem()
        .title('O mnie')
        .child(
          S.editor()
            .id('aboutMe')
            .schemaType('aboutMe')
            .documentId('aboutMe')
        )
        .icon(PersonCircle),
      ...items,
      S.listItem()
        .title('Ustawienia strony')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(Gear),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
