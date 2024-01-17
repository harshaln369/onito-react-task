import { useEffect, useRef } from "react"
import DataTables from "datatables.net-dt"
import type { Config } from "datatables.net-dt"

export function ReactDataTables({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null)

  useEffect(() => {
    const dt = new DataTables(tableRef.current!, props)
    return () => {
      dt.destroy()
    }
  }, [props])

  return (
    <table ref={tableRef} style={{ margin: "10px auto", padding: 10 }}></table>
  )
}

export default ReactDataTables
