import React, { Component, MouseEventHandler } from 'react';
import { DragModal } from '../index';
import { Button, message } from 'antd';

interface IProps {
  visible: boolean;
  close: MouseEventHandler<HTMLElement>;
}

// export interface MessageApi extends MessageInstance {
//   warn(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
//   config(options: ConfigOptions): void;
//   destroy(messageKey?: React.Key): void;
//   useMessage(): [MessageInstance, React.ReactElement];
// }
export default class index extends Component<IProps> {
  login = () => {
    console.log('登录');
  };

  render() {
    const { visible, close } = this.props;
    return (
      <DragModal
        className="md-md2"
        title="登录"
        width={800}
        destroyOnClose={true}
        maskClosable={false}
        visible={visible}
        onCancel={close}
        footer={[
          <Button key="addCancelKey" onClick={this.login}>
            登录
          </Button>,
          <Button key="addCancelKey" onClick={close}>
            关闭
          </Button>,
        ]}
      >
        123456
      </DragModal>
    );
  }
}
