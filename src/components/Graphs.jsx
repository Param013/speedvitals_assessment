import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Graph = ({ metric, device, darkMode }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const initChart = () => {
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }

      chartInstance.current = echarts.init(chartRef.current);

      const fetchData = async () => {
        try {
          const response = await fetch(`https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`);
          const data = await response.json();

          chartInstance.current.setOption({
            title: {
              text: metric === 'lcp' ? 'Largest Contentful Paint' : 'Cumulative Layout Shift',
              left: 'center',
              textStyle: {
                fontSize: window.innerWidth < 768 ? 14 : 16,
                fontWeight: 'normal',
                color: darkMode ? '#fff' : '#000',
              },
            },
            grid: {
              top: 60,
              right: 20,
              bottom: 40,
              left: 50,
              containLabel: true,
            },
            tooltip: {
              trigger: 'axis',
              confine: true,
              axisPointer: {
                type: 'line',
                lineStyle: {
                  type: 'solid',
                  width: 1,
                  color: darkMode ? '#fff' : '#000', 
                },
              },
            },
            xAxis: {
              type: 'category',
              data: data.labels || [],
              axisLabel: {
                fontSize: window.innerWidth < 768 ? 10 : 12,
                rotate: window.innerWidth < 480 ? 45 : 0,
                color: darkMode ? '#fff' : '#000',
              },
              axisTick: { alignWithLabel: true },
              axisLine: { lineStyle: { color: darkMode ? '#444' : '#ccc' } },
            },
            yAxis: {
              type: 'value',
              axisLabel: { fontSize: window.innerWidth < 768 ? 10 : 12, color: darkMode ? '#fff' : '#000' },
              splitLine: { lineStyle: { type: 'dashed', color: darkMode ? '#555' : '#eee' } },
            },
            series: [
              {
                data: data.values || [],
                type: 'line',
                smooth: false,
                symbolSize: 6,
                itemStyle: { color: '#1a73e8', borderWidth: 2 },
                lineStyle: { width: 2, type: 'solid', cap: 'square', color: '#1a73e8' },
                animationDuration: 1000,
              },
            ],
          });
        } catch (error) {
          console.error('Error fetching graph data:', error);
        }
      };

      fetchData();
    };

    initChart();

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(chartRef.current);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      chartInstance.current?.dispose();
    };
  }, [metric, device, darkMode]);

  return (
    <div className={`w-full rounded-lg shadow-sm ${darkMode ? "bg-gray-800 border border-black" : "bg-white border border-gray-300"}`}>
      <div ref={chartRef} className={`w-full h-48 sm:h-64 p-2 sm:p-4`}></div>
    </div>
  );
};

export default Graph;
