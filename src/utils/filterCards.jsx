export function filterCustomers(customers, text) {
  const userText = text.toLowerCase().trim();
  const searchedCustomers = customers.filter((customer) => {
    const searchedCustomer = String(customer.name).toLowerCase().trim();
    return searchedCustomer.includes(userText);
  });
  return searchedCustomers;
}

export function filterNames(customers) {
  customers.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}

export function filterRevertNames(customers) {
  customers.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}

export function filterNumbers(customers) {
  customers.sort((a, b) => a.id - b.id);
}

export function filterRevertNumbers(customers) {
  customers.sort((a, b) => b.id - a.id);
}
