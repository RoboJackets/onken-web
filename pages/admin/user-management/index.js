import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Modal from 'antd/lib/modal'
import Select from 'antd/lib/select'
import { CustomTable, PageHeader } from '../../components'
import { fetchTableData } from './fetch'
import message from 'antd/lib/message'

const ROLES = [
  'Administrator',
  'Project Manager',
  'Requestor',
  'Read-Only',
]

const CustomSelect = styled(Select)`
  width: 100%;
`

class UserManagement extends Component {
  static async getInitialProps() {
    const res = await fetchTableData()
    return {
      tableData: res,
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      tableData: props.tableData,
      modalData: {},
      modalVisible: false,
      modalConfirmLoading: false,
      modalSelectedRole: '',
    }
  }
  onRowClickHandler = (data) => {
    this.setState({
      modalSelectedRole: data.Role,
      modalData: data,
      modalVisible: true,
    })
  }

  saveContent = () => {
    var currentContext = this
    return new Promise((resolve) => {
      const { modalSelectedRole, modalData, tableData } = currentContext.state
      const newTableData = tableData.map((item, index) =>
        index === modalData.key - 1 ? { ...item, Role: modalSelectedRole } : item)
        setTimeout(() => resolve(newTableData), 2000)
    })
  }

  onModalSave = () => {
    message.loading("updating...")
    
    this.setState({
      modalVisible: false,
    })
    
    this.saveContent().then((result) => {
      this.setState({
        tableData: result,
      })
      message.destroy()
      message.success("Role updated successfully")
    })
  }

  onModalCancel = () => {
    this.setState({
      modalVisible: false,
    })
  }
  onModalRoleSelected = (value) => {
    this.setState({
      modalSelectedRole: value,
    })
  }
  render() {
    const { modalVisible, modalConfirmLoading, modalSelectedRole, tableData, modalData } = this.state
    return (
      <React.Fragment>
        <PageHeader name="User Management" />
        <CustomTable data={tableData} onRowClickHandler={this.onRowClickHandler} />
        <Modal title={modalData.Username}
          visible={modalVisible}
          confirmLoading={modalConfirmLoading}
          onOk={this.onModalSave}
          onCancel={this.onModalCancel}>

          <CustomSelect value={modalSelectedRole} onChange={this.onModalRoleSelected}>
            {ROLES.map((role, index) =>
              <Select.Option key={index} value={role}>{role}</Select.Option>)}
          </CustomSelect>
        </Modal>
      </React.Fragment>
    )
  }
}

UserManagement.propTypes = {
  tableData: PropTypes.object.isRequired,
}

export default UserManagement