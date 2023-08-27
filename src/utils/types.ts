export type Kids = Record<string, { records: TableRow[] }>

export interface TableRow {
  data: Record<string, string>
  kids: Kids
}
