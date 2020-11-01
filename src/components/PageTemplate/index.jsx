import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'
import Header from '../Header'
import Sidebar from '../Sidebar'

const Container = styled.div`
  padding: 15px;
`

function PageTemplate({ children, className }) {
  const [isOpenSidebar, setSidebarOpen] = React.useState(false)
  return (
    <>
      <Header
        onMenuBtnClick={() => setSidebarOpen(true)}
      />
      <Sidebar
        isOpen={isOpenSidebar}
        onCloseBtnClick={() => setSidebarOpen(false)}
      />
      <Container className={className}>{children}</Container>
    </>
  )
}
PageTemplate.propTypes = {
  children: node.isRequired,
  className: string,
}
export default PageTemplate
