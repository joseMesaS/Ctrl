import * as React from 'react'
import { DragSource, ConnectDragSource } from 'react-dnd'
import {ItemTypes} from '../../constants'

const style = {
    width: '150px',
    height: '200px',
	position: 'absolute',
    backgroundColor: 'yellow',
    border: '1px solid black',
	padding: '0.5rem 1rem',
	cursor: 'move',
}

const boxSource = {
	beginDrag(props) {
		const { id, left, top } = props
		return { id, left, top }
	}
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
}

class PostSticks extends React.Component{
	render() {
		const {
			hideSourceOnDrag,
			left,
			top,
			connectDragSource,
			isDragging,
			children,
		} = this.props
		if (isDragging && hideSourceOnDrag) {
			return null
		}

		return (
			connectDragSource &&
			connectDragSource(<div style={{ ...style, left, top }}>{children}</div>)
		)
	}
}

export default DragSource(ItemTypes.POSTSTICKS, boxSource, collect)(PostSticks)