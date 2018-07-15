// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';

// Instruments
import Styles from './styles.m.css';
import { composer } from '../../bus/forms/shapes';

export default class Composer extends Component {
    formikForm = createRef();

    _submitForm = (formData, actions) => {
        this._createPost(formData);
        actions.resetForm();
    };

    _createPost = ({ comment }) => {
        if (!comment) {
            return null;
        }

        this.props.actions.createPostAsync(comment);
    };

    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    render () {
        const { profile } = this.props;

        return (
            <Formik
                initialValues = { composer.shape }
                ref = { this.formikForm }
                render = { () => {
                    return (
                        <section className = { Styles.composer }>
                            <img src = { profile.get('avatar') } />
                            <Form>
                                <Field
                                    component = 'textarea'
                                    name = 'comment'
                                    placeholder = { `What's on your mind, ${profile.get('firstName')}?` }
                                    type = 'text'
                                    onKeyPress = { this._submitFormOnEnter }
                                />
                                <input type = 'submit' value = 'Запостить' />
                            </Form>
                        </section>
                    );
                } }
                validationSchema = { composer.schema }
                onSubmit = { this._submitForm }
            />
        );
    }
}
