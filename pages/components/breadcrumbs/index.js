import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Breadcrumb from 'antd/lib/breadcrumb';
import itemList from '../sidenav/itemList.json';

const Breadcrumbs = (props) => {
  const splitPath = props.path.split('/').filter(p => p !== '')
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
          padding: 30px;
          padding-top: 45px;
        }
        `}</style>
    </div>
  )
}

Breadcrumbs.propTypes = {
  path: PropTypes.string.isRequired,
}

const getLabelFromLink = (link) => {
  link = '/' + link
  let subItemVal = ''
  const itemVal = itemList.find(item => {
    if (item.link !== link && item.subItems) {
      subItemVal = item.subItems.find(subItem => subItem.link === link)
    }
    return item.link === link
  })
  if (!itemVal && !subItemVal)
    return ''
  return subItemVal.label ? subItemVal.label : itemVal.label
}

export default Breadcrumbs;