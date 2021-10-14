<template>
  <div class="form-settings">
    <el-collapse>
      <el-collapse-item title="Base">
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Form CSS Classes</label>
          <el-input
            v-model="className"
            @input="input"
            placeholder="Enter CSS class names"></el-input>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Confirmations" class="settings-repeater">
        <div class="subtitle pl2 pr2">
          <small>If there is no confirmation, the default will be used. If there are several confirmations, then we will use the first one.</small>
        </div>
        <div v-if="!confirmations.length" class="no-confirmations flex flex-column items-center center mt2 mb2">
          <button
            @click.stop="addConfirmation"
            title="Add confirmation"
            class="mb1">
            <i class="el-icon-circle-plus-outline"></i>
          </button>
          <small class="ml3 mr3">Add confirmation</small>
        </div>
        <repeater
          v-if="confirmations.length"
          @change="input"
          v-model="confirmations" />
      </el-collapse-item>
      <el-collapse-item title="Notifications" class="settings-repeater">
        <div v-if="!notifications.length" class="no-confirmations flex flex-column items-center center mt2 mb2">
          <button
            @click.stop="addNotification"
            title="Add notification"
            class="mb1">
            <i class="el-icon-circle-plus-outline"></i>
          </button>
          <small class="ml3 mr3">Add notification</small>
        </div>
        <repeater
          v-if="notifications.length"
          @change="input"
          v-model="notifications" />
      </el-collapse-item>
      <el-collapse-item title="Permalink">
        <div class="flex flex-column mb2">
          <label class="mb1" for="">URL Slug</label>
          <el-autocomplete
            placeholder="Please input your slug"
            :fetch-suggestions="possibleSlugs"
            v-model="slug"
            @input="input">
            <i
              v-if="slug !== ''"
              @click="goToURL"
              class="el-icon-link el-input__icon"
              slot="suffix"
            />
          </el-autocomplete>
          <small class="mt1" v-if="slug === ''">Leave this field blank to disable <b>Form page</b> functionality.</small>
          <small v-if="slug !== ''" class="mt1">
            Preview
            <el-link
              class="smaller-link"
              :href="formUrl"
            >{{ formUrl }}</el-link>
          </small>
        </div>
        <!-- <div class="flex mb2 items-center">
          <el-color-picker
            @change="input"
            size="mini"
            v-model="color"
          />
          <label
            class="ml1"
            for="">Color scheme</label>
        </div>
        <div class="flex flex-column mb2">
          <el-checkbox
            v-model="hideBranding"
            @change="input"
          >
            Hide <b>beagl</b> branding
          </el-checkbox>
        </div> -->
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { ref, watch, computed } from '@vue/composition-api'
import { kebabCase } from 'lodash'
import Repeater from '@/shared/components/repeater/'
import { defaults } from '@/shared/utils/prepareForm'
import FormConfirmation from '@/shared/components/fields/form-confirmation/'
import FormNotification from '@/shared/components/fields/form-notification/'

export default {
  name: 'form-settings',
  props: {
    value: {
      default: () => {}
    },
    form: {
      type: Object
    }
  },
  components: {
    Repeater
  },
  setup (props, { emit }) {
    const className = ref(props.value.className || '')
    const confirmations = ref(props.value.confirmations)
    const notifications = ref(props.value.notifications)
    const slug = ref(props.value.slug || '')
    const formUrl = computed(() => window.beaglApp.homeUrl + '/' + slug.value)

    function addConfirmation () {
      confirmations.value = defaults(FormConfirmation.data)
    }

    function addNotification () {
      notifications.value = defaults(FormNotification.data)
    }

    function possibleSlugs (query, cb) {
      const items = [
        {
          value: props.form.name
        },
        {
          value: kebabCase(props.form.title)
        }
      ]
      cb(items)
    }

    function input () {
      emit(
        'input',
        {
          className: className.value,
          confirmations: confirmations.value,
          notifications: notifications.value,
          slug: slug.value
        }
      )
    }

    function goToURL () {
      window.location.href = formUrl.value
    }

    watch(
      () => props.value,
      (newVal, oldVal) => {
        className.value = newVal.className
        confirmations.value = newVal.confirmations
        notifications.value = newVal.notifications
      }
    )

    return {
      className,
      confirmations,
      addConfirmation,
      addNotification,
      notifications,
      input,
      slug,
      formUrl,
      possibleSlugs,
      goToURL
    }
  }
}
</script>

<style lang="scss">
body .el-collapse-item.settings-repeater{
  .el-collapse-item__content{
    padding: 0;
  }
  .el-collapse-item__wrap{
    overflow: visible;
  }
}
</style>

<style scoped lang="scss">
.repeater{
  margin-bottom: 24px;
}

button{
  cursor: pointer;
  font-size: 26px;
  border: 0;
  background: var(--white);

  &:hover{
    color: var(--primary);
  }
}

small{
  color: var(--text-secondary);
}

.subtitle{
  line-height: 1.2;
}

.el-autocomplete{
  i{
    cursor: pointer;
  }
}

.smaller-link{
  font-size: unset;
}
</style>
