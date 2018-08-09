import Table from 'antd/lib/table'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
`

const CustomTable = ({ data, onRowClickHandler }) => {
  const { dataSource, columns } = getFormattedTableData(data)
  return (dataSource && columns) ? (
    <Container>
      <Table dataSource={dataSource} columns={columns}
        onRow={(record) => ({
          onClick: () => onRowClickHandler(record)
        })} />
    </Container>
  ) :
    (
      <Container>An error occured generating the table.</Container>
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

export default CustomTable
