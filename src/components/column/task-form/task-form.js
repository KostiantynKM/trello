import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../../hooks/use-form';
import styles from './task-form.module.css';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const TaskForm = ({ onSubmit , def, resetFlag }) => {


  const { values, handlers, reset } = useForm({ title: def?.title ??"", content: def?.content ??"" , id: def?.id ??""});

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values);
    if(resetFlag)reset();
  };

  return (
    <div className={styles.taskForm}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>

            <Form.Control
                placeholder={def?.title ??"Title"  }
                className={styles.message}
                {...handlers.title}
            />
          <Form.Control
              placeholder={def?.content ??"Content"}
              className={styles.message}
              {...handlers.content}
          />
            <Button type="submit" variant="outline-secondary" block  size="sm">
              Add
            </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  def: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  resetFlag: PropTypes.bool.isRequired,
};

export default connect(null, (dispatch, props) => ({
  onSubmit: (task) => dispatch(props.action(task, props.droggableId)),
}))(TaskForm);
