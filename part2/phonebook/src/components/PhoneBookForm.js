import React from "react";

const PhoneBookForm = ({
  onAddName,
  newName,
  onNewNameChange,
  onPhoneNumberChange,
  phoneNumber,
}) => {
  return (
    <form onSubmit={onAddName}>
      <div>
        name:{" "}
        <input
          type="text"
          value={newName}
          onChange={onNewNameChange}
          placeholder="Enter a name"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={onPhoneNumberChange}
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PhoneBookForm;
