import "./Main.css";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import CustomerList from "../CustomerList/CustomerList";
import { useState, useEffect } from "react";
import { CUSTOMERS_URL } from "../../utils/constants";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [customerCards, setCustomerCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then((res) => {
          console.log(res.data.results);
          setCustomerCards(res.data.results);
          setFilteredCards(res.data.results);
        })
        .catch((err) => {
          console.log(`Ошибка загрузки ${err}`);
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, []);

  return (
    <main className="main">
      {isLoading && <Preloader />}
      {!isLoading && (
        <CustomerList
          customers={customerCards}
          filteredCustomers={filteredCards}
          setFilteredCustomers={setFilteredCards}
        />
      )}
    </main>
  );
}

export default Main;
