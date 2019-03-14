import React from 'react'
import styles from './listBtn.less'

class listBtn extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state={
      fatherNum:props.fatherNum
    }
  }
  render() {
    console.log(this.props)
    let fatherNum = this.props.fatherNum
    let childClick = this.props.childClick
    return (
      <div className={styles.listBtn}>
        <button className={styles.Btn} onClick={childClick}>add item({fatherNum})</button>
      </div>
    )
  }
}
export default listBtn
