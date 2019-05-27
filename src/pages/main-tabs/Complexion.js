import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import TabContainer from '../../components/TabContainer';
import QuestionHeading from '../../components/QuestionHeading';
import SelectInput from '../../components/SelectInput';

const GRID_WIDTH = { md: 6 };

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
      <Grid container>
        <Grid item {...GRID_WIDTH}>
        What is the color of your tongue
        </Grid>
        <Grid item {...GRID_WIDTH}>
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
        </Grid>
      </Grid>
    </TabContainer>
  );
};

export default Complexion;
