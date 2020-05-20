// node_modules imports
import React from 'react';
import styled from 'styled-components';

const RoachFieldset = (props) => {
  return (
    <fieldset>
      <Legend>
        <h3 id="group_label_1">1. Choose Roach Strategy</h3>
        <h4>
          <i>equal weight or minimum variance</i>
        </h4>
      </Legend>
      <Inputs role="radiogroup" aria-labelledby="group_label_1">
        {props.options.map((option, index) => {
          const selected = props.value === option;
          return (
            <Label htmlFor={option} key={index} selected={selected}>
              <CustomRadio selected={selected} />

              <h4>
                {option === 'equalWeight' ? 'Equal Weight' : 'Min Variance'}
              </h4>
              <h5>
                {option === 'equalWeight'
                  ? '25% stocks, bonds, gold, and futures'
                  : 'changes with market volatility'}
              </h5>
              <Input
                name="roach"
                onChange={(e) => props.change(index, e)}
                value={option}
                checked={selected}
                type="radio"
                aria-label={option}
                id="option"
              />
              <FocusHighlight />
            </Label>
          );
        })}
      </Inputs>
    </fieldset>
  );
};

// private styled components
const Legend = styled.legend`
  text-align: center;
  width: 100%;
  h3 {
    margin-bottom: 0.25rem;
  }
  h4 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.grey[1]};
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
  }
`;

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

const FocusHighlight = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  ${Input}:focus & {
    animation: anim-glow 3s ease infinite;
    box-shadow: 0 0 ${({ theme }) => theme.color.primary.light};
    outline: none;
    border: none;
  }
`;

const CustomRadio = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;

  border: 1px solid ${({ theme }) => theme.color.primary.light};
  background-color: ${({ theme }) => theme.color.grey[7]};
  border-radius: 50%;
  margin-bottom: 0.5rem;

  ${Input}:focus & {
    background-color: greenyellow;
    color: black;
  }

  ${({ selected, theme }) =>
    selected
      ? `&:after {
    content: '';
    display: inline-block;
    text-align: center;
    vertical-align: baseline;
    margin-bottom: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.color.primary.light};

  }`
      : ``};
`;

const Label = styled.label`
  font-size: 18px;
  width: 100%;
  height: auto;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.color.grey[7]};

  border: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.color.primary.light}` : 'none'};

  border-radius: ${({ theme }) => theme.borderRadius.small};

  box-shadow: ${({ selected, theme }) => {
    return selected ? theme.boxShadow[2] : theme.boxShadow[1];
  }};

  h5 {
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.color.grey[1]};
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
  }

  & ${Input}:focus + ${FocusHighlight} {
    animation: anim-glow 3s ease infinite;
    box-shadow: 0 0 ${({ theme }) => theme.color.primary.light};
    outline: none;
    border: none;
  }
`;

const Inputs = styled.div`
  margin: 0;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
`;

export default RoachFieldset;
