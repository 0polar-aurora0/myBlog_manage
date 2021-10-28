/*
 * @Author: fuzhenghao
 * @Date: 2021-10-25 17:20:46
 * @LastEditTime: 2021-10-27 15:06:14
 * @LastEditors: fuzhenghao
 * @Description: 拖拽模态框表头
 * @FilePath: \myBlog_frontEnd\src\components\DragHeader\index.tsx
 */

import React from 'react';
import { Drag } from '../index';

interface IProps {
  title: any;
}

export interface updateTransform {
  (transformStr: string): void;
}

export default class DragHeader extends React.Component<IProps> {
  public modalDom!: HTMLElement;

  componentDidMount() {
    const modalList = document.getElementsByClassName('ant-modal'); //modal的class是ant-modal
    this.modalDom = modalList[modalList.length - 1] as HTMLElement;
  }

  /**
   * @description: 用于更新整个模态框的拖动状态
   * @param {string} transformStr transform拖动,传入变换后的css样式
   * @return {*}
   */
  updateTransform: updateTransform = (transformStr: string) => {
    this.modalDom.style.transform = transformStr;
  };

  render() {
    const { title } = this.props;
    return (
      <Drag updateTransform={this.updateTransform}>
        <div>{title}</div>
      </Drag>
    );
  }
}
