<template>
    <Line id="my-line-chart-id" :options="config" :data="chartData" />
  </template>
  
  <script setup>
  import { Line } from "vue-chartjs";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

  const originalData=[201, 400, 360, 520, 430, 600, 380, 800, 340, 430, 360, 600]
  const expectedData = [400, 470, 390, 500, 650, 430, 390, 340, 470, 320]
  
  const chartData = {
    labels: [
      "Jan",
      "feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Dashed",
        fill: true,
        backgroundColor: (ctx) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 300);
  
          gradient.addColorStop(0, "rgba(39, 196, 152, 0.10)");
          gradient.addColorStop(1, "rgba(39, 196, 152, 0.00)");
  
          return gradient;
        },
        borderColor: "#27C498",
        data: originalData,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        pointStyle: false,
      },
      {
        label: "Dashed",
        fill: true,
        backgroundColor: (ctx) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 300);
  
          gradient.addColorStop(0, "rgba(39, 196, 152, 0.10)");
          gradient.addColorStop(1, "rgba(39, 196, 152, 0.00)");
  
          return gradient;
        },
        borderColor: "#C6D0DC",
        data: expectedData,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
        pointStyle: false,
        borderWidth: 2,
        borderDash: [5, 5],
      },
    ],
  };
  
  const config = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Chart.js Line Chart - Cubic interpolation mode",
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        grid: {
          drawBorder: true,
          ticks: true,
          display: false,
        },
      },
      y: {
        display: true,
        borderColor: "#FFFFF",
        grid: {
          color: "#E9E9EA",
          drawTicks: false,
          borderDash: [3, 3],
        },
        ticks: {
          stepSize: 200,
          callback: (value) => {
            return "$" + value; // Add the "dollar" unit to the y-axis labels
          },
        },
        suggestedMin: 0,
        suggestedMax: 1000,
        unit: "$",
        border: {
          dash: [5, 4],
        },
      },
    },
  };
  </script>