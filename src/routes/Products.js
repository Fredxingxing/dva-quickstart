import React from 'react';
import { connect } from 'dva';


const Products = (props) => (
  <h2>List of Products</h2>
);

export default connect()(Products);
