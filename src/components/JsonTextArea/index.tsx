import React, { ChangeEvent, useCallback, useState } from 'react';
import { Box } from "@material-ui/core";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { addItems } from "../../core/Grill";
import { red } from "@material-ui/core/colors";

const errorColor = red[500];

const JsonTextArea = () => {
  const styles = useStyles();
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setValue(text);

    try {
      const data = JSON.parse(text);
      dispatch(addItems(data.grill));
      setError('');
    } catch (e) {
      setError('Incorrect format');
    }
  }, [dispatch]);

  return (
    <Box>
      <textarea rows={30} className={styles.textArea} value={value} onChange={handleChange} >
      </textarea>
      <Box color={errorColor} display={error ? 'block': 'hidden'}>
        {error}
      </Box>
    </Box>
  );
};

export default JsonTextArea;