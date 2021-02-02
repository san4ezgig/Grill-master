import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Box } from "@material-ui/core";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { addItems } from "../../core/Grill";
import { red500 } from "../../styles/colors";

const defaultValue = `{
  "grill": {
    "width": 500,
    "height": 200,
    "grillItems": [{
      "width": 50,
      "height": 30,
      "count": 15,
      "title": "Steak"
    }, {
      "width": 140,
      "height": 140,
      "count": 2,
      "title": "Sausage"
    }, {
      "width": 130,
      "height": 60,
      "count": 4,
      "title": "Tomato"
    }, {
      "width": 20,
      "height": 10,
      "count": 37,
      "title": "Veal"
    }]
  }
}`;

const JsonTextArea = () => {
  const styles = useStyles();
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback((text: string) => {
    setValue(text);

    try {
      const data = JSON.parse(text);
      dispatch(addItems(data.grill));
      setError('');
    } catch (e) {
      setError(text ? e.toString() : '');
    }
  }, [dispatch]);

  const handleTextAreaChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    handleChange(text);
  }, [handleChange]);

  useEffect(() => {
    handleChange(defaultValue);
  }, [handleChange]);

  return (
    <Box>
      <textarea rows={30} className={styles.textArea} value={value}
                onChange={handleTextAreaChange}>
      </textarea>
      <Box color={red500} display={error ? 'block' : 'hidden'}>
        {error}
      </Box>
    </Box>
  );
};

export default JsonTextArea;