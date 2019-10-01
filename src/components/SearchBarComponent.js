import React from 'react'
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 4rem;
  width: 20rem;
  text-align: center;
  margin-top: 3rem;
  font-size: 1.5rem;
  border: 0.3rem solid #ffce00;
  border-radius: 0.5rem;
  transition-duration: 0.1s;

  :focus {
    border-color: #09aded;
  }
`;


function SearchBarComponent(props) {
    return (
      <>
        <form onSubmit={props.handleSubmit}>
          <InputWrapper>
            <Input
                id="searchbar"
              type="text"
              name="firstName"
              placeholder="Input the first name to search"
              ref={props.input}
            />
          </InputWrapper>
        </form>
      </>
    );
}

export default SearchBarComponent