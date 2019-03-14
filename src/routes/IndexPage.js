import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import ListBtn from './listBtn'

class IndexPage extends React.Component{
  constructor(props){
    super(props)
    console.log('construture')
    this.state = {
        num:1,
        data:props.data
    }
  }
  componentDidMount(){
    console.log("didMount")
  }
  handClick = ()=>{
    console.log(this)
    this.setState({
      num: this.state.num+1
    })
  }
  btnClick = ()=>{
    this.setState({
      num: this.state.num+2
    })
  }
  render(){
    console.log('render')
    let num = this.state.num
    return (
      <div className={styles.box}>
        <h3>Component Test</h3>
        <div className={styles.List}>
          <div>{num}</div>
          <div>
            <button onClick={this.handClick}>点我</button>（父组件方法）
          </div>
        </div>
        <ListBtn fatherNum={num} childClick={this.btnClick}/>
      </div>
      )
  }
};

// IndexPage.propTypes = {
// };
//
// export default connect()(IndexPage);

export default IndexPage;
