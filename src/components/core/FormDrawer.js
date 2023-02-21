import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import React from 'react';
const FormDrawer = ({
  isOpen,
  onClose,
  title,
  initialValues,
  data = [],
  onSubmit,
  formId,
  isLoading,
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={values => onSubmit(values)}>
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit} id={formId}>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="gray.800" borderLeftRadius="xl">
              <DrawerCloseButton />
              <DrawerHeader>{title}</DrawerHeader>

              <DrawerBody>
                <Stack gap="15px">
                  {data?.map(item => {
                    if (item?.type === 'select')
                      return (
                        <FormControl>
                          <FormLabel>{item.label}</FormLabel>
                          {item?.isLoading ? (
                            <Spinner />
                          ) : (
                            <Field as={Select} id={item?.name} name={item.name}>
                              {item?.option.map(val => (
                                <option key={val.name} value={val.id}>
                                  {val?.name}
                                </option>
                              ))}
                            </Field>
                          )}
                        </FormControl>
                      );

                    return (
                      <FormControl
                        isInvalid={
                          !!errors[`${item?.name}`] && touched[`${item?.name}`]
                        }
                      >
                        <FormLabel>{item?.label}</FormLabel>
                        <Field
                          as={Input}
                          id={item?.name}
                          name={item?.name}
                          type="text"
                          validate={value => {
                            let error;

                            if (value.length < 6 && item.type === 'text') {
                              error = `${item?.label}  must contain at least 6 characters`;
                            }

                            if (value.length < 1 && item.type === 'number') {
                              error = `${item?.label}  must contain at least 1 characters`;
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>
                          {errors[`${item?.name}`]}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  })}
                </Stack>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  form={formId}
                  isLoading={isLoading}
                >
                  Add
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </form>
      )}
    </Formik>
  );
};

export default FormDrawer;
