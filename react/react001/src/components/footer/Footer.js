import React from "react";
import './footer.css';
import Copyright from '../copyright/Copyright';

function Footer(props) {
  return(
    <div>
      <ul>
        <li>Regulamin</li>
        <li>FAQ</li>
        <li>Kontakt: {props.contact.adress}, {props.companyData.email}</li>
      </ul>
      <Copyright year="2023" />
    </div>

  );
}

export default Footer;
