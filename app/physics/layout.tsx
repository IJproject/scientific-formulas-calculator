import React from 'react';
import { CommonLayout } from '@/components/common/layout/CommonLayout';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <CommonLayout color='success' title='物理'>
      {props.children}
    </CommonLayout>
  );
};

export default Layout;
