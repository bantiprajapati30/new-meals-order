import './spinner.css'
const Spinner = (props) => {
  return (
    <>
      <div className={`lds-ring ${props.customClass}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Spinner;