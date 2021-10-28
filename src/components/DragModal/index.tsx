/*
 * @Author: fuzhenghao
 * @Date: 2021-10-21 14:07:55
 * @LastEditTime: 2021-10-27 15:06:41
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\components\DragModal\index.tsx
 */

import React from 'react';
import { Modal, ModalProps } from 'antd';

import { DragHeader } from '../index';

interface DragModalProps {
  drag?: boolean;
}

type IProps = DragModalProps & ModalProps;

export default class DragModal extends React.Component<IProps> {
  static defaultProps = {
    drag: true,
    destroyOnClose: true,
  };

  render() {
    const { drag, visible, title, destroyOnClose, children, ...restProps } =
      this.props;

    //是否可拖拽
    const _title = title && drag ? <DragHeader title={title} /> : title;
    // TODO 合并解决React.cloneElement问题,简化组件写法
    return (
      <Modal
        centered
        visible={visible}
        title={_title}
        destroyOnClose={destroyOnClose}
        {...restProps}
      >
        {children}
      </Modal>
    );
  }
}
