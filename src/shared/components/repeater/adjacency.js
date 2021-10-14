export function uid () {
  return (Math.random() + Date.now()).toString(36)
}

export function prepareInsertingObject (obj) {
  return {
    parent: 0,
    ...obj,
    id: uid()
  }
}

export function remove (tree, id) {
  return tree.filter(el => el.id !== id && el.parent !== id)
}

export function parents (arr, id, acc = []) {
  if (id === 0) {
    return acc
  }
  const parent = arr.find(el => el.id === id)
  acc = [...acc, parent]
  return parents(arr, parent.parent, acc)
}

function inBranch (branch, id) {
  return branch.some(el => el.id === id)
}

export function move (arr, id, to, parent = 0) {
  if (!inBranch(parents(arr, parent), id)) {
    const from = arr.findIndex(el => el.id === id)
    const el = arr.splice(from, 1)
    if (from !== -1) {
      el[0].parent = parent
      arr.splice(to, 0, el[0])
    }
  }
  return arr
}

export function add (arr, value, index = -1) {
  if (index === -1) {
    index = arr.length
  }
  arr.splice(index, 0, value)
  return arr
}

export function children (arr, parent) {
  return arr.filter(
    el => el.parent === parent
  ).reduce(
    (acc, el) => ([...acc, el, ...children(arr, el.id)]),
    []
  )
}

export function updateIDs (branch) {
  return branch.reduce(
    (acc, curr) => replaceID(acc, curr.id, uid()),
    branch
  ).reduce(
    (acc, curr) => replaceID(acc, curr.parent, uid()),
    branch
  )
}

export function replaceID (arr, oldID, newID) {
  return arr.map(
    el => {
      if (el.id === oldID) {
        el.id = newID
      }

      if (el.parent === oldID) {
        el.parent = newID
      }
      return el
    }
  )
}

export function duplicate (arr, id) {
  const root = arr.find(el => el.id === id)
  const savedParent = root.parent
  if (root) {
    const duplicated = updateIDs([root, ...children(arr, root.id)])
    duplicated[0].parent = savedParent
    return duplicated.map(el => ({ ...el, active: false }))
  }
  return arr
}

// Maybe it will be needed in the future
//
// export function update (arr, id, newField) {
//   return arr.map(
//     el => {
//       if (el.id === id) {
//         return newField
//       }
//       return el
//     }
//   )
// }
