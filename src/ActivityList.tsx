import * as React from 'react';
import { connect } from 'react-redux';
import { getFormValues, log } from './util';
import { push_a } from 'demutx';

interface Props {
  addItem: (itemName: string) => { type: 'addItem', payload: void }
}

class ActivityList extends React.Component<Props, {}> {
  render() {
    let { addItem } = this.props;

    return (
      <div>
        <form onSubmit={e => addItem(getFormValues(e).itemName)}>
          <input name="itemName" type="text" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

const addItem = (name: string) => ({ type: 'addItem', payload: push_a('items', name)});

export default connect(_ => ({}), {addItem})(ActivityList)