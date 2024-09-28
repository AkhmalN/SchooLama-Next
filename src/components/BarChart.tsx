"use client";

import React, { PureComponent } from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 20,
    absent: 10,
  },
  {
    name: "Sun",
    present: 30,
    absent: 20,
  },
  {
    name: "Thu",
    present: 40,
    absent: 30,
  },
  {
    name: "Fri",
    present: 50,
    absent: 40,
  },
];
const SimpleBarChart = () => {
  return (
    <div className="w-full bg-white rounded-xl h-full p-4 shadow-md shadow-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <div className="relative w-full h-full py-5">
        <ResponsiveContainer>
          <BarChart
            barSize={20}
            data={data}
            margin={{
              top: 5,
              bottom: 5,
              right: 30,
              left: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis axisLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleBarChart;
