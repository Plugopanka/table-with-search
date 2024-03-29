import "./CustomerList.css";
import { useState, useCallback, useEffect } from "react";
import Customer from "../Customer/Customer";
import { CUSTOMERS_URL } from "../../utils/constants";
import SearchForm from "../SearchForm/SearchForm";
import {
  filterCustomers,
  filterNames,
  filterRevertNames,
  filterNumbers,
  filterRevertNumbers,
} from "../../utils/filterCards";
import RadioButton from "../RadioButton/RadioButton";
import Pagination from "../Pagination/Pagination";
import SelectInput from "../SelectInput/SelectInput";

function CustomerList({ customers, filteredCustomers, setFilteredCustomers }) {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(15);
  const [page, setPage] = useState(1);
  const [selectValue, setSelectValue] = useState(15);
  const [sortedCustomers, setSortedCustomers] = useState(filteredCustomers);
  const [renderCustomers, setRenderCustomers] = useState([]);

  function handleChangeSelect() {
    setCounter(selectValue);
    console.log(counter);
  }

  function handleFilter() {
    const customerList = filterCustomers(customers, text);
    setFilteredCustomers(customerList);
  }

  function handleChangeText(evt) {
    const inputText = evt.target.value;
    setText(inputText);
    handleFilter();
  }

  function handleSortNames() {
    setSortedCustomers(filterNames(filteredCustomers));
  }

  function handleSortRevertNames() {
    setSortedCustomers(filterRevertNames(filteredCustomers));
  }

  function handleFilterNumbers() {
    setSortedCustomers(filterNumbers(filteredCustomers));
  }

  function handleFilterRevertNumbers() {
    setSortedCustomers(filterRevertNumbers(filteredCustomers));
  }

  const getTotalPageCount = (rowCount) => Math.ceil(rowCount / counter);

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = sortedCustomers
      ? getTotalPageCount(sortedCustomers.length)
      : current;

    setPage(next <= total ? next : current);
  }, [page]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);

  useEffect(() => {
    const offset = (page - 1) * counter;
    console.log(filteredCustomers);
    const currentCustomers = filteredCustomers.slice(offset, offset + counter);
    console.log(currentCustomers);
    setRenderCustomers(currentCustomers);
  }, [page, sortedCustomers]);

  useEffect(() => {
    setCounter(selectValue);
  }, [selectValue]);

  return (
    <article className="list">
      <div className="list__heading">
        <SearchForm text={text} handleChangeText={handleChangeText} />
        <h1 className="list__heading__name">{CUSTOMERS_URL}</h1>
      </div>
      <ul className="list__items">
        <li className="list__title">
          <div className="list__button">
            <span >#</span>
            <div className="list__button__container">
              <RadioButton position="up" handleSwitch={handleFilterNumbers} />
              <RadioButton
                position="down"
                handleSwitch={handleFilterRevertNumbers}
              />
            </div>
          </div>
          <div className="list__button">
            <span >name</span>
            <div className="list__button__container">
              <RadioButton position="up" handleSwitch={handleSortNames} />
              <RadioButton
                position="down"
                handleSwitch={handleSortRevertNames}
              />
            </div>
          </div>
          <span className="list__title_right">status</span>
          <span className="list__title_right">gender</span>
          <span className="list__title_right">species</span>
        </li>
        {renderCustomers.slice(0, counter).map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </ul>
      <div className="list__bottom">
        <span className="list__bottom__info">
          total: {filteredCustomers.length}
        </span>
        <div className="list__bottom__container">
          <SelectInput
            setCounter={setCounter}
            selectValue={selectValue}
            setSelectValue={setSelectValue}
            handleChangeSelect={handleChangeSelect}
          />
          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: page === 1,
              right: page === getTotalPageCount(filteredCustomers.length),
            }}
            nav={{
              current: page,
              total: getTotalPageCount(filteredCustomers.length),
            }}
          />
        </div>
      </div>
    </article>
  );
}

export default CustomerList;
