import React, { useState } from "react";
import { useInternet } from "./hooks/useInternet";

const App = () => {
  const isOnline = useInternet();
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  const addMore = () => {
    let newInputField = { name: "", age: "" };
    setInputFields([...inputFields, newInputField]);
  };

  const handeChange = (event, index) => {
    let cloneData = [...inputFields];
    cloneData[index][event.target.name] = event.target.value;
    setInputFields(cloneData)
  }

  return (
    <div>
      {isOnline ? "User is Online ✅" : "User is Offline ❌"}
      <div>
        {
          inputFields.map((input, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  placeholder="Name"
                  onChange={(event) => handeChange(event, index)}
                />

                <input
                  type="text"
                  name="age"
                  value={input.age}
                  placeholder="Age"
                  onChange={(event) => handeChange(event, index)}
                />
              </div>
            )
          })
        }
        <button onClick={addMore}>Add More...</button>
      </div>
    </div>
  );
};

export default App;
