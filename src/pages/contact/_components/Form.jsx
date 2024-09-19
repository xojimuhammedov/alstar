import { Box, Button, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function Form() {
  return (
    <Box {...css.form}>
      <Box className="container-mix">
        <Heading {...css.title}>Here you get all our attention</Heading>
        <Text {...css.text}>
          Would you like more information about ALSTAR? Then write to us. Please fill in the contact
          form below and send it to us. Our experts will take care of your request as soon as
          possible and will be happy to answer your questions. Here you get all our attention.
        </Text>

        <Text m={'24px 0'} {...css.text}>
          Do you have any questions or suggestions?
        </Text>
        <Text mb={'24px'} {...css.text}>
          We will be happy to help you. Use our contact form and send us your inquiry. You will
          receive an answer from us as soon as possible. Choose from the following options the way
          you would like to receive information from us - completely according to your individual
          wishes.
        </Text>

        <form action="">
          <SimpleGrid columns={3} gap="24px">
            <label className="form-label" htmlFor="">
              First name*
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              Last name*
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              Company*
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              email*
              <Input {...css.input} type="email" />
            </label>
            <label className="form-label" htmlFor="">
              Street
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              Location / Town
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              Country
              <Input {...css.input} type="text" />
            </label>
            <label className="form-label" htmlFor="">
              Phone number
              <Input {...css.input} type="text" />
            </label>
          </SimpleGrid>
          <Button type="submit" {...css.button}>Submit</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Form;

const css = {
  form: {
    padding: '36px 0'
  },
  title: {
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    fontWeight: '200',
    color: '#111'
  },
  input: {
    padding: '8px 12px',
    outline: 'none'
  },
  button: {
    background: '#111',
    color:"#fff",
    height:"40px",
    width:"120px",
    fontSize:"16px",
    lineHeight:"25px",
    borderRadius:"6px",
    marginTop:"24px",
    cursor:"pointer"
  }
};
