import React from 'react';
import Link from 'next/link';
import Breadcrumb from 'antd/lib/breadcrumb';
import { withRouter } from 'next/router';
import * as navItemList from '../navItemList.json';

const Breadcrumbs = ({ router }) => {
  const splitPath = router && router.asPath ? router.asPath.split('/').filter(p => p !== '') : ''
  return (
    <div className="container">
      <Breadcrumb>
        {splitPath.map((link, index) => (
          <Breadcrumb.Item key={index}>
            <Link href={'/' + splitPath.slice(0, index + 1).join('/')}>
              <a>{getLabelFromLink(link)}</a>
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <style jsx>{`
        .container {
          padding-left: 30px;
        }
        `}</style>
    </div>
  )
}

const getLabelFromLink = (link) => {
  link = '/' + link
  let subItemVal = ''
  const itemVal = navItemList.find(item => {
    if (item.link !== link && item.subItems) {
      subItemVal = item.subItems.find(subItem => subItem.link === link)
    }
    return item.link === link
  })
  if (!itemVal && !subItemVal)
    return ''
  return subItemVal.label ? subItemVal.label : itemVal.label
}

export default withRouter(Breadcrumbs);