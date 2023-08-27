<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    table-class-name="customize-table"
    header-text-direction="left"
    body-text-direction="left"
  >
    <template #expand="item">
      <div v-if="item.kids">
        <h4>{{ item.kidsTitle.toUpperCase() }}</h4>
        <Table :tableData="item.kids" />
      </div>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import type { Header } from 'vue3-easy-data-table'
import type { TableRow, Kids } from '@/utils/types'
import type { PropType } from 'vue'

import Table from '@/components/Table.vue'

const props = defineProps({
  tableData: {
    type: Array as PropType<TableRow[]>,
    required: true
  }
})

const headers: Header[] = Object.keys(props?.tableData[0].data).map((key) => ({
  text: key,
  value: key
}))

const getItems = (data: TableRow[]): Array<any> =>
  data.map((item) => {
    const kidsTitle = Object.keys(item.kids)[0]
    const kids = item.kids[kidsTitle]?.records
    return { ...item.data, kids, kidsTitle }
  })
const items = getItems(props.tableData)
</script>
