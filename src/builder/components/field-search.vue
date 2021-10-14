<template>
  <div class="fields-search">
    <el-input
      clearable
      autofocus
      placeholder="Search for a field"
      v-model="search"></el-input>
    <el-collapse :value="openedCategories">
      <el-collapse-item
        v-for="(category, index) in fields"
        :key="category.title + index"
        :title="category.title"
        :disabled="category.fields.length === 0"
        :name="category.title">
        <ul v-if="category.fields">
          <li
            v-for="(field, index) in category.fields"
            @click="$emit('selected', field)"
            :key="index">
            <button>
              <icon-base :icon="field.icon.path" :viewBox="field.icon.viewBox" /> <span v-html="highlight(field.title, search)"></span>
            </button>
          </li>
        </ul>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import IconBase from './icon-base'
import highlight from '@/shared/filters/highlight'

export default {
  name: 'fields-search',
  components: {
    IconBase
  },
  props: {
    tree: {
      type: Array,
      default: () => {}
    }
  },
  setup (props) {
    const search = ref('')
    const fields = computed(
      () => props.tree.map(
        category => ({
          ...category,
          fields: category.fields.filter(
            field => field.title.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase()) > -1
          )
        })
      )
    )

    const openedCategories = computed(
      () => {
        if (search.value === '') {
          return []
        } else {
          return fields.value
            .filter(category => category.fields.length > 0)
            .map(category => category.title)
        }
      }
    )
    return {
      search,
      fields,
      highlight,
      openedCategories
    }
  }
}
</script>

<style scoped lang="scss">
.el-collapse{
  max-height: 300px;
  overflow-y: auto;
  margin-top: 12px;
}

ul{
  list-style: none;
  padding: 2px 4;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  li{
    display: block;
    width: 33.33%;
    padding: 0 4px;
    margin: 3px 0 12px;

    button{
      display: flex;
      flex-direction: column;
      width: 100%;
      font-size: 13px;
      color: #32373c;
      padding: 0;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: transparent;
      word-break: break-word;
      border-radius: 4px;
      border: 1px solid transparent;
      transition: all .05s ease-in-out;
      position: relative;

      &:hover{
        background: #f3f4f5;
      }

      svg{
        margin: 12px 0;
      }

      span{
        padding: 4px 2px 8px;
      }
    }
  }
}
</style>
