import "./AddressCard.scss";

export const AddressCard = (): JSX.Element => {
  return (
    <div className="address_container">
      <div className="div_01 flex_column">
        <h2>SWISS RESORT</h2>
        <p>Luxury Hotel</p>
      </div>
      <div className="div_02">
        <h1>Hotel & Spa Swiss Resort</h1>
      </div>
      <div className="div_03 flex_column">
        <h2>Location</h2>
        <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
      </div>
      <div className="div_04 flex_column">
        <h2>Phone Support</h2>
        <p>+91 45565 78455</p>
        <p>+91 25978 78455</p>
      </div>
      <div className="div_05 flex_column">
        <h2>Email Support</h2>
        <p>abcd@gmail.com</p>
        <p>hajkdjalkd@gmail.com</p>
      </div>
    </div>
  );
};
