import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectProperty } from '../../redux/actions';
import TabContainer from '../../components/TabContainer';
import QuestionHeading from '../../components/QuestionHeading';
import SelectInput from '../../components/SelectInput';
import QuestionRow from './QuestionRow';
import {
  getOptions,
  TONGUE_COLOR_OF_TONGUE,
  TONGUE_COLOR_OF_TONGUE2,
  TONGUE_COLOR_OF_TONGUE3,
  TONGUE_COLOR_OF_TONGUE4,
} from '../../services/questionData';

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
          value={formData[TONGUE_COLOR_OF_TONGUE]}
          onChange={onChange}
          fieldKey={TONGUE_COLOR_OF_TONGUE}
          options={getOptions(TONGUE_COLOR_OF_TONGUE)}
          maxWidth={400}
        />
      </QuestionRow>
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData[TONGUE_COLOR_OF_TONGUE2]}
          onChange={onChange}
          fieldKey={TONGUE_COLOR_OF_TONGUE2}
          options={getOptions(TONGUE_COLOR_OF_TONGUE2)}
          maxWidth={400}
        />
      </QuestionRow>
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData[TONGUE_COLOR_OF_TONGUE3]}
          onChange={onChange}
          fieldKey={TONGUE_COLOR_OF_TONGUE3}
          options={getOptions(TONGUE_COLOR_OF_TONGUE3)}
          maxWidth={400}
        />
      </QuestionRow>
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData[TONGUE_COLOR_OF_TONGUE4]}
          onChange={onChange}
          fieldKey={TONGUE_COLOR_OF_TONGUE4}
          options={getOptions(TONGUE_COLOR_OF_TONGUE4)}
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
