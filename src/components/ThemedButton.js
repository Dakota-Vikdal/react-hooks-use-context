import React, {useContext} from "react";
import {ThemeContext} from '../context/theme'

function ThemedButton({...props }) {

  const {theme} = useContext(ThemeContext)
  console.log(theme)

  return <button className={theme} {...props} />;
}

export default ThemedButton;
