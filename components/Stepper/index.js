import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';

const Stepper = ({ steps, height = "400px" }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    height: height,
    minHeight: "400px",
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    padding: '20px',
    backgroundColor: token.colorFillAlter,
    border: `1px dashed ${token.colorBorder}`,
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1rem", marginBottom: "5px" }}>
        <p style={{ width: "50%", textAlign: "center", margin: 0 }}>코드 및 설명</p>
        <p style={{ width: "50%", textAlign: "center", margin: 0 }}>콜 스택</p>
      </div>
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {(
          <Button
            disabled={current <= 0}
            style={{
              color: `${current <= 0 ? '#C6C6C6' : '#ffffff'}`,
              background: `${current <= 0 ? '#ffffff' : '#0092ff'}`,
              border: `${current <= 0 ? '1px solid #C6C6C6' : '1px solid #ffffff'}`,
            }}
            onClick={() => prev()}
          >
            이전 단계
          </Button>
        )}
        {(
          <Button
            disabled={current >= steps.length - 1}
            style={{
              color: `${current >= steps.length - 1 ? '#C6C6C6' : '#ffffff'}`,
              background: `${current >= steps.length - 1 ? '#ffffff' : '#0092ff'}`,
              border: `${current >= steps.length - 1 ? '1px solid #C6C6C6' : '1px solid #ffffff'}`,
              marginLeft: '8px'
            }}
            onClick={() => next()}
          >
            다음 단계
          </Button>
        )}
        
      </div>
    </>
  );
};

export default Stepper;
