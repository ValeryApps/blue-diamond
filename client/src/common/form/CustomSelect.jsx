import { useField } from "formik";
import React from "react";
import { FormField, Label, Select } from "semantic-ui-react";

const CustomSelect = ({ ...props }) => {
  const [field, meta, helper] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{props.children}</label>
      <Select
        clearable
        value={field.value || null}
        {...props}
        onChange={(e, d) => {
          helper.setValue(d.value);
        }}
        onBlur={() => {
          helper.setTouched(true);
        }}
        options={[{key: 'f', text: 'Female', value: 'female'},
        {key: 'm', text: 'Male', value: 'male'}]}
      />
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default CustomSelect;
