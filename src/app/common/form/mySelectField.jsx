import React from "react";
import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

const MySelectField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormField>
      <label>{label}</label>
      <Select
        clearable
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      ></Select>
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MySelectField;
