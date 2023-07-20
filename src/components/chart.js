import React from 'react';

const PieChart = ({ data, blockStyles, miniBlockStyles, diagramSize = 400, StatisticWrapperWidth,statisticPosition = 'bottom' }) => {
  const getTotal = () => data.reduce((sum, item) => sum + item.value, 0);
  const total = getTotal();

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getUniqueColors = (count) => {
    const uniqueColors = new Set();
    while (uniqueColors.size < count) {
      uniqueColors.add(getRandomColor());
    }
    return Array.from(uniqueColors);
  };

  const defaultBlockStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
  };

  const defaultMiniBlockStyles = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const mergedBlockStyles = { ...defaultBlockStyles, ...blockStyles };
  const mergedMiniBlockStyles = { ...defaultMiniBlockStyles, ...miniBlockStyles };

  const colors = getUniqueColors(data.length);

  let flexDirection;
  if (statisticPosition === 'left') {
    flexDirection = 'row';
  } else if (statisticPosition === 'right') {
    flexDirection = 'row-reverse';
  } else if (statisticPosition === 'top') {
    flexDirection = 'column';
  } else if (statisticPosition === 'bottom') {
    flexDirection = 'column-reverse';
  } else {
    flexDirection = 'column-reverse'; // По умолчанию, если передан некорректный параметр
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection,gap:'5%' }}>
      <div style={{ marginBottom: '20px', width:StatisticWrapperWidth,display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        {data.map((item, index) => {
          const angle = (item.value / total) * 360;

          const randomColor = colors[index];

          return (
            <div key={index} style={mergedBlockStyles}>
              <div style={{ ...mergedMiniBlockStyles, backgroundColor: randomColor }}></div>
              <div>{item.text} - {((item.value / total) * 100).toFixed(2)}%</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex',  }}>
        <svg width={diagramSize} height={diagramSize} viewBox={`-${diagramSize / 2} -${diagramSize / 2} ${diagramSize} ${diagramSize}`}>
          <g>
            {data.map((item, index) => {
              const angle = (item.value / total) * 360;
              const x1 = Math.cos((Math.PI / 180) * (index === 0 ? 0 : data.slice(0, index).reduce((sum, item) => sum + (item.value / total) * 360, 0)));
              const y1 = Math.sin((Math.PI / 180) * (index === 0 ? 0 : data.slice(0, index).reduce((sum, item) => sum + (item.value / total) * 360, 0)));
              const x2 = Math.cos((Math.PI / 180) * (data.slice(0, index + 1).reduce((sum, item) => sum + (item.value / total) * 360, 0)));
              const y2 = Math.sin((Math.PI / 180) * (data.slice(0, index + 1).reduce((sum, item) => sum + (item.value / total) * 360, 0)));

              const randomColor = colors[index];

              return (
                <path key={index} d={`M 0,0 L ${x1 * (diagramSize / 2)},${y1 * (diagramSize / 2)} A ${diagramSize / 2},${diagramSize / 2} 0 ${angle > 180 ? 1 : 0},1 ${x2 * (diagramSize / 2)},${y2 * (diagramSize / 2)} Z`} fill={randomColor} />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PieChart;
