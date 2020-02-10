import React from 'react';
import { connect } from 'dva';
import uuidv1 from 'uuid/v1';
import { Button, Divider, Popconfirm } from 'antd';
import { IColumn } from '@/utils/interfaces';
import Form from './components/Form';
import TableBase from '@/components/Table/Table';
import { IBase } from '@/utils/base';

type Props = {
  PAGE_NAME: IBase,
  loading: boolean,
  dispatch: Function,
}

@connect(({ PAGE_NAME, loading }) => ({
  PAGE_NAME,
  loading: loading.models.PAGE_NAME,
}))
class PAGE_NAME_UPPER_CAMEL_CASE extends React.Component<Props> {
  state = {
  };

  componentDidMount() {
  }

  handleEdit = record => {
    this.props.dispatch({
      type: 'PAGE_NAME/changeState',
      payload: {
        showDrawer: true,
        edit: true,
        record,
        key: uuidv1(),
        isTouched: false,
      },
    });
  };

  handleDel = _id => {
    this.props.dispatch({
      type: 'PAGE_NAME/del',
      payload: {
        _id,
        key: uuidv1(),
      },
    });
  };

  render() {
    const renderLast = (value, record) => (
      <React.Fragment>
        <Button
          type="primary"
          shape="circle"
          icon="edit"
          onClick={() => this.handleEdit(record)}
          title="Chỉnh sửa"
        />

        <Divider type="vertical" />

        <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={() => this.handleDel(record._id)}>
          <Button type="danger" shape="circle" icon="delete" title="Xóa" />
        </Popconfirm>

      </React.Fragment>
    )

    const columns: IColumn[] = [
      {
        title: 'STT',
        dataIndex: 'index',
        align: 'center',
        width: '150px',
      },
      {
        title: 'Thao tác',
        align: 'center',
        render: (value, record) => renderLast(value, record),
        fixed: 'right',
        width: 110,
      }
    ];

    return (
      <TableBase
        model={this.props.PAGE_NAME}
        modelName="PAGE_NAME"
        loading={this.props.loading}
        dispatch={this.props.dispatch}
        columns={columns}
        cond={{}}
        Form={Form}
        title={'Chưa cập nhật'}
        hasCreate
        tableProp={{
          scroll: { x: 1000 }
        }}
      />
    );
  }
}

export default PAGE_NAME_UPPER_CAMEL_CASE;
