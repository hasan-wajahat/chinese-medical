import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectProperty } from '../../redux/actions';
import TabContainer from '../../components/TabContainer';
import QuestionHeading from '../../components/QuestionHeading';
import SelectInput from '../../components/SelectInput';
import QuestionRow from './QuestionRow';

const Complexion = ({
  formData,
  selectProperty: updateProperty,
}) => {
  // save the selected property to Store
  const onChange = (key, value) => {
    updateProperty({ key, value });
  };

  return (
    <TabContainer>
      <QuestionHeading heading="Tongue Body" />
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData.tongueColorOfTongue}
          onChange={onChange}
          fieldKey="tongueColorOfTongue"
          options={[
            { label: 'red', value: 'red' },
            { label: 'orange', value: 'orange' },
          ]}
          maxWidth={400}
        />
      </QuestionRow>
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData.tongueColorOfTongue2}
          onChange={onChange}
          fieldKey="tongueColorOfTongue2"
          options={[
            { label: 'red', value: 'red' },
            { label: 'orange', value: 'orange' },
          ]}
          maxWidth={400}
        />
      </QuestionRow>
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData.tongueColorOfTongue3}
          onChange={onChange}
          fieldKey="tongueColorOfTongue3"
          options={[
            { label: 'red', value: 'red' },
            { label: 'orange', value: 'orange' },
          ]}
          maxWidth={400}
        />
      </QuestionRow>
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData.tongueColorOfTongue4}
          onChange={onChange}
          fieldKey="tongueColorOfTongue4"
          options={[
            { label: 'red', value: 'red' },
            { label: 'orange', value: 'orange' },
          ]}
          maxWidth={400}
        />
      </QuestionRow>
    </TabContainer>
  );
};

Complexion.propTypes = {
  selectProperty: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.any,
  }).isRequired,
};

// gets selected properties
const mapStateToProps = state => ({
  formData: state.properties,
});

export default connect(
  mapStateToProps,
  { selectProperty },
)(Complexion);
