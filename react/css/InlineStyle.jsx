export const InlineStyle = () => {
  const containerStyle = {
    border: 'solid 2px #3934ff',
    borderRadius: '20px',
    padding: '8px',
    margin: '8px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  const titleStyle = {
    margin: 0,
    color: '#3d7518',
  };
  const buttonStyle = {
    backgroundColor: '#abedd8',
    border: 'none',
    padding: '8px',
    borderRadius: '8px',
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>Fight</button>
    </div>
  );
};
