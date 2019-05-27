import React, { useState } from 'react';
import TabContainer from '../../components/TabContainer';
import QuestionHeading from '../../components/QuestionHeading';
import SelectInput from '../../components/SelectInput';
import QuestionRow from './QuestionRow';

const Complexion = () => {
  const [formData, setFormData] = useState({});
  const onChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <TabContainer>
      <QuestionHeading heading="Tongue Body" />
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData.tongueColor}
          onChange={onChange}
          fieldKey="tongueColor"
          options={[
            { label: 'red', value: 'red' },
            { label: 'orange', value: 'orange' },
          ]}
          maxWidth={400}
        />
      </QuestionRow>
      <QuestionRow question="What is the color of your tongue">
        <SelectInput
          value={formData.tongueColor2}
          onChange={onChange}
          fieldKey="tongueColor2"
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

export default Complexion;
