import React from 'react'
import MUIButton from "./components/MUIButton"
import MUIInput from "./components/MUIInput"
import AntdInput from "./components/AntdButton"

const App = () => {
  return (
    <div>
      {/* <MUIButton text="SMIT Class" variant="outlined" color="error" />
      <MUIButton text="SMIT Summercamp" variant="contained" color="success" />
      <MUIButton text="SMIT Summercamp" variant="text" color="primary" />
      <MUIInput label="Username" variant="outlined" color="secondary" />
      <MUIInput label="Email" variant="filled" color="error" /> */}
      <AntdInput placeholder="placeholder 1 is here... " />
      <AntdInput placeholder="placeholder 2 is here... " />
      <AntdInput placeholder="placeholder 3 is here... " />
      <AntdInput placeholder="placeholder 4 is here... " />
    </div>
  )
}

export default App