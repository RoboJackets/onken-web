import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import Select from 'antd/lib/select';
import { CustomTable, PageHeader } from '../../components';
import { fetchTableData } from './fetch';

const MODAL_TITLE = "Manage user permissions"

const ROLES = [
  "Administrator",
  "Project Manager",
  "Requestor",
  "Read-Only",
]

export default class UserManagement extends Component {
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
  onModalSave = () => {
    const { modalSelectedRole, modalData, tableData } = this.state
    const newTableData = tableData.map((item, index) =>
      index === modalData.key - 1 ? { ...item, Role: modalSelectedRole } : item)
    this.setState({
      tableData: newTableData,
    })
    console.table(this.state.tableData)
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

          <Select value={modalSelectedRole} onChange={this.onModalRoleSelected} style={{ width: "100%" }}>
            {ROLES.map((role, index) =>
              <Select.Option key={index} value={role}>{role}</Select.Option>)}
          </Select>
        </Modal>
      </React.Fragment>
    )
  }
}
