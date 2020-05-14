// node_modules imports
import React, { useState, useRef, useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import * as V from 'victory';
import { ThemeContext } from 'styled-components';

/*
  Chart component renders Victory Line chart with chart datas.
  Fills parent component with useRef.
  Displays legend. 
*/
export const Chart = ({
  chartDatas,
  height,
  width,
  labelX,
  labelY,
  tickFormatX,
  tickFormatY,
  scaleX,
  scaleY,
  domainX,
  domainY,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <V.VictoryChart
      height={height}
      width={width}
      scale={{ x: scaleX, y: scaleY }}
      padding={{ top: 0, left: 0, bottom: 25, right: 35 }}
      domainPadding={{ x: 10, y: 10 }}
      domain={{ x: domainX, y: domainY }}
      standalone={true}
      containerComponent={
        <V.VictoryVoronoiContainer
          responsive={false}
          height={height}
          width={width}
          labels={({ datum }) => `${datum.x}, ${datum.y}`}
        />
      }
    >
      {chartDatas.map((cd, i) => (
        <V.VictoryLine
          data={cd.data}
          x="x"
          y="y"
          key={i}
          style={cd.style}
          interpolation="natural"
        />
      ))}

      <V.VictoryAxis
        tickFormat={tickFormatX}
        label={labelX}
        orientation={'bottom'}
        offsetY={25}
        style={{
          axis: { stroke: 'none' },
          tickLabels: { fill: theme.color.grey[1] },
        }}
      />
      <V.VictoryAxis
        dependentAxis
        orientation={'right'}
        tickFormat={tickFormatY}
        offsetX={35}
        labelY={labelY}
        style={{
          axis: { stroke: 'none' },
          tickLabels: { fill: theme.color.primary.light },
        }}
      />
    </V.VictoryChart>
  );
};

// chart fills parent container with useRef
const chartWrapper = (ChartComponent) => {
  return (props) => {
    // get chart container
    const containerRef = useRef();

    // create state for dimensions
    const [dims, setDims] = useState({
      width: 0,
      height: 0,
    });

    // updates state dimensions
    const updateDims = () => {
      const current = containerRef.current;
      setDims({
        width: current.clientWidth,
        height: current.clientHeight,
      });
    };

    // avoid "flicker" by updating dims after DOM update but before render
    useLayoutEffect(() => {
      updateDims();
      window.addEventListener('resize', updateDims);

      // clean up event listener
      return () => {
        window.removeEventListener('resize', updateDims);
      };
    }, []);

    return (
      <Container>
        <Legend chartDatas={props.chartDatas} />
        <ChartContainer ref={containerRef}>
          <ChartComponent {...props} width={dims.width} height={dims.height} />
        </ChartContainer>
      </Container>
    );
  };
};

// legend for chart component
const Legend = ({ chartDatas }) => {
  return (
    <LegendContainer>
      <h3>Hypothetical Investment Growth</h3>
      <h5>
        <i>
          {new Date(chartDatas[0].data[0].x).toDateString()} to{' '}
          {new Date(
            chartDatas[0].data[chartDatas[0].data.length - 1].x
          ).toDateString()}
        </i>
      </h5>
      <div>
        {chartDatas.map((cd, i) => (
          <Item key={i}>
            <h4>{cd.name}</h4>
            <Line color={cd.style.data.stroke} />
          </Item>
        ))}
      </div>
    </LegendContainer>
  );
};

// private styled components
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h2 {
    display: inline-block;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LegendContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;

  h3 {
    margin-bottom: 0.5rem;
  }

  h5 {
    color: ${({ theme }) => theme.color.grey[1]};
    margin-bottom: 0.75rem;
  }

  h4 {
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.fontSize[8]};
  }

  div {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Item = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 35px;

  background-color: ${({ color }) => color};
  align-self: center;
  margin: auto 0;
  height: 5px;
  margin-left: 0.5rem;
`;

export default chartWrapper(Chart);
