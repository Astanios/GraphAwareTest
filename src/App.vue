<script setup lang="ts">
import Table from './components/Table.vue'
import type { TableRow, Kids } from '@/utils/types'
import { useTableDataStore } from '@/stores/tableData'

const data: TableRow[] = useTableDataStore().data
</script>

<template>
  <Table :tableData="data" />
</template>
