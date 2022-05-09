window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
    if (contactList.length == 0) {
      return;
    }
    const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
      innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="../assets/icons/create-black-18dp.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
  
  let contactList = [
    {
      _id: 1,
      _name: "Ashvini",
      _phoneNumber: "+91 9691674007",
      _address: "Tilheri",
      _city: "Indore",
      _state: "Madhya Pradesh",
      _zip: "482021",
    },
    {
      _id: 2,
      _name: "Yash",
      _phoneNumber: "+91 8602203308",
      _address: "Napier",
      _city: "Raipur",
      _state: "Chattisgarh",
      _zip: "482001",
    },
  ];