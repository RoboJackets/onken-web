import Table from 'antd/lib/table';
import React, { Component } from 'react';
import css from './styles.less';

export default class CustomTable extends Component {
  getFormattedTableData = () => {
    const { data } = this.props

    if (!data || !data.length)
      return

    const dataSource = data.map((item, index) => {
      return {
        ...item,
        key: index + 1,
      }
    })
    const columns = Object.keys(data[0]).map(key => {
      const titleCapitalized = key && typeof key === 'string' ?
        `${key.charAt(0)}${key.substring(1)}` :
        ''
      return {
        title: titleCapitalized,
        dataIndex: key,
        key: key,
      }
    })

    return {
      columns: columns,
      dataSource: dataSource,
    }
  }

  render() {
    const { onRowClickHandler } = this.props
    const { dataSource, columns } = this.getFormattedTableData()

    return (dataSource && columns) ? (
      <div className={css.container}>
        <Table dataSource={dataSource} columns={columns}
          onRow={(record) => ({
            onClick: () => onRowClickHandler(record)
          })} />
      </div>
    ) : (
        <div>An error occured generating the table.</div>
      )
  }
}
