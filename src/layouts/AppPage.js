import React from 'react'
import AppFooter from '../containers/AppFooter'
import AppFooterNavbar from '../containers/AppFooterNavbar'
import AppHeader from '../containers/AppHeader'

const AppPage = (props) => {
  return (
    <div id="nimedix-app">
      <AppHeader />
      {props.children}
      <AppFooterNavbar />
      <AppFooter />
    </div>
  )
}

export default AppPage
