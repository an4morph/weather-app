import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { device } from '../../styles/devices'

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media ${device.sm} {
    max-width: 540px;
  }
  @media ${device.md} {
    max-width: 720px;
  }
  @media ${device.lg} {
    max-width: 960px;
  }
  @media ${device.xl} {
    max-width: 1140px;
  }
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
