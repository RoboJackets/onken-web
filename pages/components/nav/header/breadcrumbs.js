import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Breadcrumb from 'antd/lib/breadcrumb'
import { withRouter } from 'next/router'
import { navItems } from '../index'

const Container = styled.div`
  padding-left: 30px;
`

const Breadcrumbs = ({ router }) => {
  const splitPath = router && router.asPath ? router.asPath.split('/').filter(p => p !== '') : ''
  return (
    <Container>
      <Breadcrumb>
        {splitPath.map((link, index) => (
          <Breadcrumb.Item key={index}>
            <Link href={'/' + splitPath.slice(0, index + 1).join('/')}>
              <a>{getLabelFromLink(link)}</a>
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Container>
  )
}

const getLabelFromLink = (link) => {
  link = '/' + link
  let subItemVal = ''
  const itemVal = navItems.find(item => {
    if (item.link !== link && item.subItems) {
      subItemVal = item.subItems.find(subItem => subItem.link === link)
    }
    return item.link === link
  })
  if (!itemVal && !subItemVal)
    return ''
  return subItemVal.label ? subItemVal.label : itemVal.label
}

Breadcrumbs.propTypes = {
  router: PropTypes.object.isRequired,
}

export default withRouter(Breadcrumbs)