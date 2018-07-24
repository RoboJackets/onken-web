import React, { Component } from 'react';
import { fetchAdmin } from './fetch';
import Modal from 'antd/lib/modal';
import Select from 'antd/lib/select';
import { CustomTable, PageHeader } from '../../components';

const MODAL_TITLE = "Manage user permissions"

const ROLES = [
  "Administrator",
  "Project Manager",
  "Requestor",
  "Read-Only",
]

export default class UserManagement extends Component {
  constructor() {
    super()
    this.state = {
      modalData: {},
      modalVisible: false,
      modalConfirmLoading: false,
      modalSelectedRole: '',
    }
  }
  static async getInitialProps() {
    const res = await fetchAdmin()
    return {
      jsonResult: res,
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
    console.table(this.state)
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
    const { jsonResult } = this.props
    const { modalVisible, modalConfirmLoading, modalSelectedRole, modalData } = this.state
    return (
      <React.Fragment>
        <PageHeader name="User Management" />
        <CustomTable data={jsonResult} onRowClickHandler={this.onRowClickHandler} />
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
