import React from "react";
import { connect } from 'react-redux';
import Column from "../column";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import PropTypes from "prop-types";
import {changeColumn, changeTaskIn, changeTaskOut} from "../../redux/actions";
import { createStructuredSelector } from 'reselect';
import { columnOrderSelector } from '../../redux/selectors';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Header from "../header";

class Lists extends React.PureComponent {
    static propTypes = {
        columnOrder: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    };


    onDragEnd = result => {
        const {destination, source, draggableId,type } = result;

        if(!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if(type === 'column') {
            this.props.changeColumn(source.index,destination.index,draggableId);
            return
        }
        const home= source.droppableId;
        const foreign= destination.droppableId;
        if (home === foreign) {
            this.props.changeTaskIn(source.droppableId,source.index,destination.index,draggableId);
            return ;
        }
        if (home !== foreign) {
            this.props.changeTaskOut(source.droppableId,destination.droppableId,source.index,destination.index,draggableId);
        }
    }

    render() {
        return (

            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable
                    droppableId="all-columns"
                    direction="horizontal"
                    type="column"
                >
                    {provided => (
                        <Container
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <Header></Header>
                            <Row xs={4} md={4}>
                            {this.props.columnOrder.map((column, index) => {
                                return  <Column key={column} columnId={column} index={index}/>;
                            })}

                            {provided.placeholder}
                        </Row>
                        </Container>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    columnOrder: columnOrderSelector,
});

const mapDispatchToProps = {
    changeColumn,
    changeTaskIn,
    changeTaskOut,
};
export default connect(mapStateToProps,mapDispatchToProps)(Lists);
