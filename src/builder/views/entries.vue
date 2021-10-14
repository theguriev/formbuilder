<template>
  <div>
    <tool-bar>
      <template v-slot:left>
        <button
          @click="back"
          title="Back"
          class="bgl-toolbar-button">
          <i class="el-icon-arrow-left"></i>
        </button>
        <div class="divider"></div>
        <h1 class="mr2 ml1">Entries</h1>
        <el-autocomplete
          class="autocomplete"
          :fetch-suggestions="querySearch"
          placeholder="Please Input"
          :clearable="true"
          size="small"
          v-model="formSelected.title"
          @select="handleSelect">
          <template slot-scope="{ item }">
            <div class="value flex justify-between">
              <span><b>#{{ item.id }}</b> - {{ item.value }}</span>
              <b>{{ item.count }}</b>
            </div>
          </template>
        </el-autocomplete>
        <div class="button-wrapper ml2">
          <el-button
            v-if="selectedItems.length"
            plain
            @click="deleteItems"
            size="small"
            type="danger">Delete</el-button>
        </div>
      </template>
    </tool-bar>
    <div class="content">
      <tables>
        <div class="bgl-table">
          <div
            v-if="columns.length === 0"
            class="no-data flex flex-column items-center p4 mt4">
            <img
              alt="No Data"
              class="mb1"
              width="100"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQgMzEuNjcpIj4KICAgICAgPGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIuOCIgZmlsbD0iI0Y1RjVGNyIgY3g9IjY3Ljc5NyIgY3k9IjEwNi44OSIgcng9IjY3Ljc5NyIgcnk9IjEyLjY2OCIvPgogICAgICA8cGF0aCBkPSJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0eiIgZmlsbD0iI0FFQjhDMiIvPgogICAgICA8cGF0aCBkPSJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy41NikiLz4KICAgICAgPHBhdGggZD0iTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWxsPSIjRjVGNUY3Ii8+CiAgICAgIDxwYXRoIGQ9Ik00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5eiIgZmlsbD0iI0RDRTBFNiIvPgogICAgPC9nPgogICAgPHBhdGggZD0iTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnoiIGZpbGw9IiNEQ0UwRTYiLz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0OS42NSAxNS4zODMpIiBmaWxsPSIjRkZGIj4KICAgICAgPGVsbGlwc2UgY3g9IjIwLjY1NCIgY3k9IjMuMTY3IiByeD0iMi44NDkiIHJ5PSIyLjgxNSIvPgogICAgICA8cGF0aCBkPSJNNS42OTggNS42M0gwTDIuODk4LjcwNHpNOS4yNTkuNzA0aDQuOTg1VjUuNjNIOS4yNTl6Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K">
            <span>No entries</span>
          </div>
          <el-table
            v-if="columns.length !== 0"
            ref="multipleTable"
            :data="entries"
            :stripe="true"
            :fit="true"
            style="width: 100%"
            @selection-change="selectedItems = $event">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="#"
              sortable
              width="95">
              <template slot-scope="scope">
                <router-link :to="{ name: 'entry', params: { id: scope.row.id }}" class="el-link el-link--primary is-underline">{{ scope.row.id }}</router-link>
              </template>
            </el-table-column>
            <el-table-column
              label="Date"
              sortable
              width="155">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              v-for="col in columns"
              sortable
              :key="col.id"
              :label="col.value.label">
              <template slot-scope="{ row }">
                {{ row | getFinal(col.id) }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </tables>
    </div>
  </div>
</template>

<script>
import { all, delEntries } from '@/shared/api/entries'
import { all as allForms } from '@/shared/api/forms'
import { ref } from '@vue/composition-api'
import { chain } from 'lodash'
import ToolBar from './tool-bar'
import Tables from './tables'

let beforeRouteData = null

function getFinal (form, id) {
  return chain(form)
    .get('content.content', [])
    .find(el => el.id === id)
    .thru(el => el || Object.create(null))
    .get('value.final', '')
    .value()
}

function getColumns (entries) {
  return chain(entries)
    .map(el => el.content.content)
    .map(el => el.filter(el => el.name !== 'columns'))
    .sort((a, b) => a.length < b.length ? 1 : -1)
    .shift()
    .thru(el => el || [])
    .value()
}

function fetchData (id) {
  return Promise.all([
    allForms(),
    all(id)
  ])
    .then(res => Promise.all(res))
    .then(res => res.map(el => el.data || []))
    .then(
      res => {
        const selected = res[0].find(
          el => el.id === id
        )
        if (selected === undefined) {
          return Promise.reject(new Error('Form not found!'))
        }
        return {
          selected: selected,
          forms: res[0],
          entries: res[1],
          columns: getColumns(res[1])
        }
      }
    )
}

export default {
  name: 'entries',
  filters: {
    getFinal
  },
  components: {
    ToolBar,
    Tables
  },
  beforeRouteEnter (to, from, next) {
    fetchData(parseInt(to.params.id, 10))
      .then(data => {
        beforeRouteData = data
        next()
      })
      .catch(
        err => {
          console.log(err)
          next('/')
        }
      )
  },
  beforeRouteUpdate (to, from, next) {
    fetchData(parseInt(to.params.id, 10))
      .then(from.matched[0].instances.default.updateData)
      .then(data => next())
      .catch(
        err => {
          console.log(err)
          next('/')
        }
      )
  },
  setup (props, { parent, root }) {
    const selectedItems = ref([])
    const formSelected = ref(beforeRouteData.selected)
    const columns = ref(beforeRouteData.columns)
    const entries = ref(beforeRouteData.entries)
    const forms = ref(beforeRouteData.forms)

    function updateData (data) {
      formSelected.value = data.selected
      columns.value = data.columns
      entries.value = data.entries
      forms.value = data.forms
    }

    function filterByQuery (queryStr) {
      return el => {
        queryStr = (queryStr || '').toLowerCase().trim()
        return el.title.toLowerCase().includes(queryStr) || ('' + el.id).includes(queryStr)
      }
    }

    function querySearch (queryString, cb) {
      cb(
        forms.value
          .filter(filterByQuery(queryString))
          .filter(el => el.id !== formSelected.value.id)
          .map(
            el => ({
              value: el.title,
              id: el.id,
              count: el.count
            })
          )
      )
    }

    function handleSelect ($event) {
      if (formSelected.value.id !== $event.id) {
        parent.$router.push(`/entries/${$event.id}`)
      }
    }
    function back () {
      root.$router.push('/')
    }

    function deleteItems () {
      delEntries(selectedItems.value.map(el => el.id))
        .then(() => all(formSelected.value.id))
        .then(res => res.data)
        .then(data => {
          entries.value = data
          columns.value = getColumns(data)
        })
    }

    return {
      back,
      querySearch,
      formSelected,
      handleSelect,
      entries,
      selectedItems,
      columns,
      updateData,
      deleteItems
    }
  }
}
</script>

<style scoped lang="scss">
.autocomplete{
  min-width: 400px;
}
.content{
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
