/** @jsx jsx */
import { jsx } from "theme-ui"

const ListItem = ({ children }) => (
  <span
    sx={{
      width: "70%",
      variant: "listItem.ingredient"
    }}
  >
    {children}
  </span>
)
export default ListItem
