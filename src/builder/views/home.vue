<template>
  <div>
    <tool-bar>
      <template v-slot:left>
        <el-popover
          ref="popperTemplates"
          trigger="click"
          width="400">
          <templates
            v-on:choose="choose"
            :templates="templates"></templates>
        </el-popover>
        <h1 class="mr2 ml1">All forms</h1>
        <el-button
          plain
          v-popover:popperTemplates
          size="small">Add form</el-button>
        <el-button v-if="selectedItems.length" plain @click="deleteItems(selectedItems)" size="small" type="danger">Delete</el-button>
      </template>
    </tool-bar>
    <div class="content">
      <tables>
        <div class="bgl-table">
          <el-table
            ref="multipleTable"
            :data="tableData"
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
              property="id"
              sortable
              width="95">
            </el-table-column>
            <el-table-column
              sortable
              label="Title">
              <template slot-scope="scope">
                <router-link :to="{ name: 'builder', params: { id: scope.row.id }}" class="el-link el-link--primary is-underline">{{ scope.row.title }}</router-link>
              </template>
            </el-table-column>
            <el-table-column
              property="date"
              sortable
              label="Date">
            </el-table-column>
            <el-table-column
              property="count"
              sortable
              label="Entries">
              <template slot-scope="scope">
                <router-link
                  v-if="scope.row.count > 0"
                  :to="{ name: 'entries', params: { id: scope.row.id }}"
                  class="el-link el-link--primary is-underline">{{ scope.row.count }}</router-link>
                <span v-if="scope.row.count <= 0">{{ scope.row.count }}</span>
              </template>
            </el-table-column>
            <el-table-column
              property="count"
              sortable
              label="Permalink">
              <template slot-scope="scope">
                <permalink :settings="scope.row.settings" />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </tables>
    </div>
  </div>
</template>

<script>
import { all, delForms } from '@/shared/api/forms'
import { ref } from '@vue/composition-api'
import Permalink from '../components/permalink'
import useTemplates from '@/shared/composables/useTemplates'
import ToolBar from './tool-bar'
import Tables from './tables'

let beforeRouteData = null

export default {
  name: 'home',
  components: {
    ToolBar,
    Tables,
    Permalink
  },
  beforeRouteEnter (to, from, next) {
    all()
      .then(res => res.data || [])
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
  setup (props, { parent, root }) {
    const tableData = ref(beforeRouteData)
    const selectedItems = ref([])

    function setData (table) {
      tableData.value = table
    }

    function deleteItems (items) {
      delForms(items.map(el => el.id))
        .then(all)
        .then(res => res.data)
        .then(setData)
    }

    function back () {
      root.$router.go(-1)
    }

    return {
      ...useTemplates(parent),
      tableData,
      selectedItems,
      setData,
      deleteItems,
      back
    }
  }
}
</script>

<style scoped lang="scss">

.bgl-table{
  width: 100%;
  flex: 1;
}

.content{
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
