// node_modules imports
import React, { useState, useContext } from 'react';
import styled from 'styled-components';

// project imports
import { ROACH_OPTIONS, BENCHMARK_OPTIONS } from 'config.js';
import PortfoliosContext from 'context';
import Button from 'components/Common/Button.styled';
import RoachRebalanceFieldset from 'components/PortfolioPage/RoachFieldset';
import BenchmarkWeightsFieldset from 'components/PortfolioPage/BenchmarkFieldset';

/*
  Form for portfolio page.
  Gets data from context.
  Holds form state.
*/
const Form = (props) => {
  // get values from context
  const { portfolios, getPortfolios, loading } = useContext(PortfoliosContext);

  // set form state with data from context
  const [state, setState] = useState({
    roach: String(portfolios.roach.key.strategy),
    benchmark: portfolios.benchmark.key.weights.map((w) => Number(w)),
  });

  // handle changing form components
  const handleChange = (index, event) => {
    let { name, value } = event.target;

    //validate changes and update form state
    if (name === 'roach') {
      value = String(value);
      if (
        typeof value !== 'string' &&
        (value !== 'equalWeight' || value !== 'minimumVariance')
      )
        return;
      setState({ ...state, roach: value });
    } else if (name === 'benchmark') {
      value = Number(value);

      if (typeof value !== 'number' || value < 0 || value > 100) return;

      const copy = [...state.benchmark];
      copy[index] = value / 100;
      setState({
        ...state,
        benchmark: copy,
      });

      // validation timeout to force input validation
      setTimeout(() => {
        if (
          (state.benchmark[index] * 100) % 5 !== 0 &&
          state.benchmark[index] * 100 + 5 !== value
        ) {
          copy[index] = (Math.ceil(value / 5) * 5) / 100;
          setState({
            ...state,
            benchmark: copy,
          });
        }
      }, 800);
    }
  };

  // validate whether form state is submittable - used for disabling button
  let validSubmit =
    !loading &&
    Math.round(100 * state.benchmark.reduce((a, v) => a + v, 0)) / 100 === 1;

  // send form state to app component to update portfolios
  const handleSubmit = async (event) => {
    event.preventDefault();

    getPortfolios(state.roach, state.benchmark);
  };

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <RoachFieldset
          change={handleChange}
          options={ROACH_OPTIONS}
          value={state.roach}
        />
        <BenchmarkFieldset
          change={handleChange}
          options={BENCHMARK_OPTIONS}
          value={state.benchmark}
        />
        <SubmitFieldset>
          <SubmitButton disabled={!validSubmit} type="submit">
            3. Simulate
          </SubmitButton>
        </SubmitFieldset>
      </form>
    </Section>
  );
};

// private styled components
const Section = styled.section`
  grid-area: form;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: -100px auto 0 auto;
  padding: 0rem 1rem 1rem 1rem;

  form {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    width: 100%;
    background-color: ${({ theme }) => theme.color.grey[8]};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.boxShadow[3]};

    display: grid;
    grid-template-areas:
      'roach'
      'benchmark'
      'submit';

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      grid-template-columns: 3fr 3fr 2fr;
      grid-template-areas: 'roach benchmark submit';
    }
  }
`;

const RoachFieldset = styled(RoachRebalanceFieldset)`
  grid-area: roach;
  background-color: red;
  border-right: 1px solid black;
`;

const BenchmarkFieldset = styled(BenchmarkWeightsFieldset)`
  padding: 0.5rem;
  grid-area: benchmark;
  background-color: blue;
  border: 1px solid black;
`;

const SubmitFieldset = styled.fieldset`
  padding: 0.5rem;
  grid-area: submit;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  font-size: 18px;
  letter-spacing: 0.5px;

  disabled {
    animation: none;
  }
`;

export default Form;
