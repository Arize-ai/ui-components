import React from "react";
import theme from "../src/theme";
import { Meta, Story } from '@storybook/react';

function Colors() {
  const colors = theme.colors;
  const colorsArray = [];
  const borderColor = "gray";

  Object.keys(theme.colors).forEach((name) => {
    if (theme.colors[name]) {
      colorsArray.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: colors[name],
              borderColor: (colors[name] === "#fff") ? borderColor : "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      );
    }
  });

  return (



      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
          color: "rgb(153,153,153)"
        }}
      >
        {colorsArray.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
  );
}

const meta: Meta = {
    title: 'Colors',
    component: Colors,
  };
  
  export default meta;
  
const Template: Story = args => <Colors />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
