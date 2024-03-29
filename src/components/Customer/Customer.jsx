import "./Customer.css";

function Customer({ customer }) {

  function toCapitalize(word) { return (word.charAt(0).toUpperCase() + word.slice(1))}

  return (
    <li className="customer">
      <span className="customer__item customer__item_big">{customer.id}</span>
      <span className="customer__item customer__item_big">{customer.name}</span>
      <span className={`customer__item customer__item_bg customer__item_right ${customer.status === "Dead" && `customer__item_red`} ${customer.status === "unknown" && `customer__item_gray`} ${customer.status === "Alive" && `customer__item_green`}`}>{toCapitalize(customer.status)}</span>
      <span className="customer__item customer__item_right">{customer.gender}</span>
      <span className="customer__item customer__item_right">{customer.species}</span>
    </li>
  );
}

export default Customer;
