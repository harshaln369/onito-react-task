import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

type HeaderProps = {
  onPage: "registration" | "users"
}

const Header: React.FC<HeaderProps> = ({ onPage }) => {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: t => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" noWrap>
          <strong>ONITO Technologies</strong> React js Coding Task
        </Typography>

        <Typography variant="h6" color="inherit" noWrap>
          <Link
            to={onPage === "registration" ? "/users" : "/"}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid blue",
              padding: "4px 20px",
              background: "deepskyblue",
              borderRadius: "5px",
            }}
          >
            {onPage === "registration" ? "Users" : "Register"}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
