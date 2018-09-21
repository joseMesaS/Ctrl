import * as React from 'react';
import {DropTarget,	DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import flow from 'lodash/flow';
import {ItemTypes} from '../../constants';
import PostSticks from '../PostSticks/PostSticks';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const boxTarget = {
	drop(
		props,
		monitor,
		component,
	) {
		if (!component) {
			return;
		}
		const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
		const left = Math.round(item.left + delta.x);
		const top = Math.round(item.top + delta.y);

		component.moveBox(item.id, left, top);
	}
};

const styles = {
	width: '100vw',
  height: '100vh',
  backgroundColor: '#e0e0e0'
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class DashBoard extends React.Component {

  state = {
    boxes: {
      1: { top: 100, left: 480, title: '' },
      2: { top: 180, left: 420, title: '' },
    },
    count: 3,
    text: ''
	};
	

  moveBox = (id, left, top) => {
		this.setState(
			update(this.state, {
				boxes: {
					[id]: {
						$merge: { left, top },
					},
				},
			}),
		)
  }

  createPostStick = (e) => {
    this.setState({
      count: this.state.count + 1,
      boxes: {...this.state.boxes, [this.state.count]: { top: 180, left: 420, title: '' }}
    }, ()=>{console.log(this.state.boxes)});
  }

  handleChange = (e) => {
    this.setState({
      boxes: {...this.state.boxes, 
        [e.target.name]: {top: this.state.boxes[e.target.name].top, 
                          left: this.state.boxes[e.target.name].left, 
                          title: e.target.value}}
    });
  }
  
	render() {
		const { hideSourceOnDrag, connectDropTarget } = this.props;
		const { boxes } = this.state;

		return (connectDropTarget &&
        connectDropTarget(
          <div style={styles}>
            <Tooltip title="Create a new PostStick">
              <Button variant="fab" mini color="secondary" aria-label="Add" onClick={this.createPostStick}>
                <AddIcon />
              </Button>
            </Tooltip>
            {Object.keys(boxes).map(key => {
              const { left, top, title } = boxes[key]
              return (
                <PostSticks
                  key={key}
                  id={key}
                  left={left}
                  top={top}
                  hideSourceOnDrag={hideSourceOnDrag}
                >
                  <form >
                    <TextField
                      id="filled-multiline-static"
                      label="Note"
                      multiline
                      rows="6"
                      name={key}
                      value={title}
                      margin="normal"
                      variant="filled"
                      onChange={this.handleChange}
                      style={{width: '150px', fontSize: '0.6em'}}
                    />
                  </form>
                </PostSticks>
              )
            })}
          </div>
			)
		)
	}
}

export default flow(DropTarget(ItemTypes.POSTSTICKS, boxTarget, collect),DragDropContext(HTML5Backend))(DashBoard)