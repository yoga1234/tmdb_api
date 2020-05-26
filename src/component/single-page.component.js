import React, { Component } from 'react';

import Back from './single-page/back.component';
import DataCard from './single-page/data-card.component';

class SingleComponent extends Component {
  render() {
    return (
      <div>
        <Back />
        <DataCard />
      </div>
    )
  }
}

export default SingleComponent;