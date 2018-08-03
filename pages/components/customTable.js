import Table from 'antd/lib/table';
import React from 'react';
import PropTypes from 'prop-types';

const CustomTable = ({ data, onRowClickHandler }) => {
  const { dataSource, columns } = getFormattedTableData(data)
  return (dataSource && columns) ? (
    <div className="container">
      <Table dataSource={dataSource} columns={columns}
        onRow={(record) => ({
          onClick: () => onRowClickHandler(record)
        })} />
      <style jsx>{`
      .container {
        padding: 15px;
      }
    `}</style>
    </div>
  ) : (
      <div>An error occured generating the table.</div>
    )
}

CustomTable.propTypes = {
  data: PropTypes.array.isRequired,
  onRowClickHandler: PropTypes.func,
}

const getFormattedTableData = (data) => {
  if (!data.length)
    return {
      dataSource: [],
      columns: []
    }

  const dataSource = data.map((item, index) => {
    return {
      ...item,
      key: index + 1,
    }
  })
  const columns = Object.keys(data[0]).map(key => {
    const titleCapitalized = (key && key.length) ?
      `${key.charAt(0)}${key.substring(1)}` : ''

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

export default CustomTable;
