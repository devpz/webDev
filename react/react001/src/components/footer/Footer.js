import React from "react";
import './footer.css';
import Copyright from '../copyright/Copyright';

 

function Footer(props) {
  const elements1 = ["TOS", "about"];
  const items = [];
  

  for( const[index, value] of elements1.entries()) {

    items.push(<ul><li>{value}</li></ul>);

  } 
  return(
    <div>
      
      <ul>
        {items}
        <li>Regulamin</li>
        <li>FAQ</li>
        <li>Kontakt: {props.contact.adress}, {props.companyData.email}</li>
        
      </ul>
      <Copyright year="2023" />
    </div>

  );
}

export default Footer;
