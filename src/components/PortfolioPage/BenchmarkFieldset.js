import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BenchmarkFieldset = (props) => {
  const total = Math.round(100 * props.value.reduce((a, v) => a + v, 0));
  return (
    <Fieldset>
      <Legend>
        <h3>2. Set Benchmark Weights</h3>
        <h4>
          <i>must sum to 100%</i>
        </h4>
      </Legend>
      <Inputs>
        {props.options.map((option, index) => {
          //const selected = props.value === option;
          return (
            <Label htmlFor={option} key={index}>
              <h4>{option}</h4>
              <Input
                onChange={(e) => props.change(index, e)}
                value={Math.round(props.value[index] * 100)}
                type="number"
                name="benchmark"
                step={5}
                min={0}
                max={100}
                aria-label={option}
                aria-required="true"
                id="option"
              />
            </Label>
          );
        })}
        <div></div>
        <div></div>
        <div></div>
        <Total total={total}>total: {total}%</Total>
      </Inputs>
    </Fieldset>
  );
};

BenchmarkFieldset.propTypes = {};

// custom styled components

const Fieldset = styled.fieldset``;

const Legend = styled.legend`
  text-align: center;
  width: 100%;
  margin: 0;
  h3 {
    margin-bottom: 0.25rem;
  }
  h4 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.grey[1]};
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
  }
`;

//display: grid;
//grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));

const Inputs = styled.div`
  margin: 0;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  position: relative;
`;

const Label = styled.label`
  text-align: center;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-family: ${({ theme }) => theme.fontFamily.dinot.regular};
    color: ${({ theme }) => theme.color.primary.light};
    margin-bottom: 0.25rem;
  }

  &::after {
    content: '%';
    margin-left: 1px;
    font-family: ${({ theme }) => theme.fontFamily.dinot.regular};
    color: ${({ theme }) => theme.color.grey[1]};
  }

  svg {
    margin-bottom: 1rem;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const Input = styled.input`
  width: 75%;
  height: 30px;
  padding-right: 0.25rem;
  text-align: right;
  background-color: ${({ theme }) => theme.color.grey[6]};
  color: ${({ theme }) => theme.color.grey[1]};
  font-family: ${({ theme }) => theme.fontFamily.dinot.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow[1]};
  display: inline-block;
  position: relative;

  &:focus,
  &[focus] {
    animation: anim-glow 3s ease infinite;
    box-shadow: 0 0 ${({ theme }) => theme.color.primary.light};
    outline: none;
    border: none;
  }
`;

const Total = styled.div`
  color: ${({ total, theme }) =>
    total === 100 ? theme.color.primary.light : theme.color.accent.red};
  font-family: ${({ theme }) => theme.fontFamily.dinot.bold};
  text-align: right;
  margin: auto auto;
  width: 40px;
`;

export default BenchmarkFieldset;
