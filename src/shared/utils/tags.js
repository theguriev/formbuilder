import { get, chain, isString } from 'lodash'
import { uid } from '@/shared/components/repeater/adjacency'
import { item } from './email'

export function email (fields) {
  return chain(fields)
    .filter(
      el => get(el, 'value.type', '') === 'email'
    )
    .map(el => ({
      value: `{id='${el.id}'}`,
      name: el.value.label,
      id: uid()
    }))
    .concat([
      {
        value: '{adminEmail}',
        name: 'Site administrator email',
        id: uid()
      }
    ])
    .value()
}

export function text (fields) {
  return chain(fields)
    .map(
      el => ({
        value: `{id='${el.id}'}`,
        name: el.value.label,
        id: uid()
      })
    )
    .concat(
      {
        value: '{adminEmail}',
        name: 'Site administrator email',
        id: uid()
      },
      {
        value: '{entryID}',
        name: 'Entry ID',
        id: uid()
      },
      {
        value: '{formID}',
        name: 'Form ID',
        id: uid()
      },
      {
        value: '{formTitle}',
        name: 'Form title',
        id: uid()
      },
      {
        value: '{date}',
        name: 'Date',
        id: uid()
      }
    )
    .value()
}

export function textLarge (fields) {
  return text(fields)
    .concat([
      {
        value: '{allFields}',
        name: 'All fields',
        id: uid()
      }
    ])
}

export function prepareRenderTags (form) {
  return [
    {
      tag: '{adminEmail}',
      value: window.beaglApp.adminEmail
    },
    {
      tag: '{formTitle}',
      value: form.title
    },
    {
      tag: '{formID}',
      value: form.id
    },
    {
      tag: '{entryID}',
      value: form.entryID
    },
    {
      tag: '{allFields}',
      value: form.content
        .filter(el => !['columns', 'html-field'].includes(el.control))
        .map(el => item(el.value.label, el.value.final))
        .join('')
    },
    {
      tag: '{date}',
      value: (new Date()).toISOString().split('T')[0]
    }
  ].concat(
    form.content.map(
      el => ({
        tag: `{id='${el.id}'}`,
        value: el.value.final
      })
    )
  )
}

export function render (text, renderTags) {
  return renderTags.reduce(
    (acc, cur) => acc.replace(new RegExp(cur.tag, 'g'), cur.value),
    text
  )
}

export function renderNotification (renderTags) {
  return notification => {
    return {
      ...notification,
      value: chain({ ...notification.value })
        .toPairs()
        .filter(([_key, value]) => isString(value))
        .map(([key, value]) => ([key, render(value, renderTags)]))
        .fromPairs()
        .value()
    }
  }
}
