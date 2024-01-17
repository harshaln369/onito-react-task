import { useAppSelector } from "../../app/hooks"
import { selectUsers } from "../../features/users/usersSlice"
import Header from "../../components/Header"
import ReactDataTables from "../../components/ReactDataTables"
import "datatables.net-dt/css/jquery.dataTables.css"
import { Link } from "react-router-dom"

const columns = [
  { data: "name", title: "Name" },
  { data: "age", title: "Age" },
  { data: "sex", title: "Sex" },
  { data: "mobile", title: "Mobile" },
  { data: "govtIdType", title: "Govt Id Type" },
  { data: "govtId", title: "govt Id" },
  { data: "address", title: "Address" },
  { data: "state", title: "State" },
  { data: "city", title: "City" },
  { data: "country", title: "Country" },
  { data: "pincode", title: "Pin Code" },
]
const DatatablesList: React.FC = () => {
  const users = useAppSelector(selectUsers)
  console.log("users", users)

  return (
    <>
      <Header onPage="users" />
      {users.length > 0 ? (
        <>
          <h1 style={{ textAlign: "center" }}>All Users</h1>
          <div
            style={{
              width: "fit-content",
              margin: "20px auto",
              border: "1px solid",
              padding: 20,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <ReactDataTables data={users} columns={columns} />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ textAlign: "center", fontSize: 28 }}>No Users Found.</p>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid blue",
              padding: "4px 20px",
              background: "deepskyblue",
              borderRadius: "5px",
            }}
          >
            Register
          </Link>
        </div>
      )}
    </>
  )
}

export default DatatablesList
