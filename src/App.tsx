import React from 'react';
import { Button } from 'antd';
import { connect} from 'react-redux';
import './index.less';

const mapStateToProps = (state: any) => {
  console.log(">>>>>>>>>>>>>state", state);
  return {
    state: state
  }
}

const App = (props: any) => {
  console.log(">>>>>>>>>>>>>>>props", props)
  return (
    <div className='white'>
      <Button>NBIHAO </Button>
    </div>
  );
};

export default  connect(mapStateToProps, null)(App);
