import React from "react";
import { ErrorMessage } from "formik";
import { Text } from "@chakra-ui/react";
import { theme } from "chakra/theme";

interface FormErrorMessageInterface {
  name: string;
}

const FormErrorMessage: React.FC<FormErrorMessageInterface> = ({ name }) => {
  return (
    <Text as={"div"} mb={1} maxWidth={"250px"} color={theme.colors.error}>
      <ErrorMessage component="div" name={name} />
    </Text>
  );
};

export default FormErrorMessage;
