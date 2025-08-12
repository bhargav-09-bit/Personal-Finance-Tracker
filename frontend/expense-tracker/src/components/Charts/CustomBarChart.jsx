import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";


const CustomBarChart = ({data}) => {
    

    //Function to alternate colors
    const getBarColor = (index) => {
        return index % 2 === 0 ? "#875cf5" : "#cfbefb";
    };

    const CustomTooltipComponent = ({ active, payload}) => {
        if(active && payload && payload.length) {
            return (
                <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                    <p className='text-xs font-semibold text-purple-800 mb-1'>{payload[0].payload.source}</p>
                    <p className='text-sm text-gray-600'>
                        Amount: <span className='text-sm font-medium text-gray-900'>
                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(payload[0].payload.amount)} 
                        </span>
                    </p>

                </div>
            );
        }
        return null;
    };
  return (
    <div className=''>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid stroke='none' />

                <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#555" }} stroke='#ccc' />
                <YAxis tick={{ fontSize: 12, fill: "#555"}} stroke='none' />

                <Tooltip content={<CustomTooltipComponent/>} />

                <Bar
                    dataKey="amount"
                    fill='#FF8042'
                    radius={[10, 10, 0, 0]}
                    activeDot={{r:8, fill: "yellow"}}
                    activeStyle={{fill: "green"}}
                >
                    {data.map((entry, index) => (
                        
                        <Cell key={index} fill={getBarColor(index)} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>

    </div>
  )
}

export default CustomBarChart