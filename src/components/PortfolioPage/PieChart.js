// Chart

import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import * as V from 'victory';

/*  props:
    chartDatas: array of chartDatas
    labelY: string, 
    labelX: string
      chartData: {data: array of {x, y}, style: Victory style obj}
*/
export const Chart = ({ chartDatas, height, width, label }) => {
  return (
    <>
      <V.VictoryPie
        standalone={false}
        width={width}
        height={height}
        data={chartDatas}
        colorScale={['#20ce99', '#10684d', '#8aedcf', '#f0fdf9']}
        labels={({ datum }) => {
          if (datum.y === 0) return null;
          else return `${datum.x}\n ${Math.round(100 * datum.y)}%`;
        }}
        style={{
          labels: {
            fill: '#fff',
          },
        }}
      />
    </>
  );
};

// chart fills parent container

const chartWrapper = (ChartComponent) => {
  return (props) => {
    const containerRef = useRef();

    const [dims, setDims] = useState({
      width: 0,
      height: 0,
    });

    const updateDims = () => {
      const current = containerRef.current;
      setDims({
        width: current.clientWidth,
        height: current.clientHeight,
      });
    };

    useLayoutEffect(() => {
      updateDims();
      window.addEventListener('resize', updateDims);

      return () => {
        window.removeEventListener('resize', updateDims);
      };
    }, []);

    return (
      <Container ref={containerRef}>
        <Legend chartDatas={props.chartDatas} />
        <svg
          viewBox={`0 0 ${dims.width} ${dims.height}`}
          preserveAspectRatio="none"
        >
          <ChartComponent {...props} width={dims.width} height={dims.height} />
        </svg>
      </Container>
    );
  };
};

const Container = styled.div`
  height: 325px;
  width: 100%;
`;

const LegendContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  h4 {
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.fontSize[8]};
  }

  h5 {
    margin-bottom: 0.75rem;
  }
`;

const Legend = ({ chartDatas }) => {
  return (
    <LegendContainer>
      <h4>{chartDatas[0].z}</h4>
    </LegendContainer>
  );
};

export default chartWrapper(Chart);
