{
  /* <ul class="collapsible">
  {arr.map(item => (
    <li>
      <div class="collapsible-header">
        <i class="material-icons">filter_drama</i>
        First
        <span class="new badge">4</span>
      </div>
      <div class="collapsible-body">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </li>
  ))}
</ul>; */
}
function goodData(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let obj = {};
    if (newArray.indexOf(obj[element.date])) {
      obj[element.date].amount += element.amount;
    }
    obj[element.date] = element.amount;
    newArray.push(obj);
  }
}
export const items = [
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Travel", "Airlines and Aviation Services"],
    category_id: "22001000",
    date: "2017-02-15",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "United Airlines",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "Lvdv9PXmjZhLgEBEBkQ3FQLp1agjrMIPQwKVN",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: 6.33,
    category: ["Travel", "Car Service", "Ride Share"],
    category_id: "22006001",
    date: "2017-02-13",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Uber 072515 SF**POOL**",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "Rv7v9GnzVghrVqNqN1lWfl6vN4mZJgCRl8kZa",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Food and Drink", "Restaurants"],
    category_id: "13005000",
    date: "2017-02-10",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Tectra Inc",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "1dodaW8zypUQgwLwLRZKhJNexAgZ3Gf5KBXnW",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 2078.5,
    category: ["Payment"],
    category_id: "16000000",
    date: "2017-02-09",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "AUTOMATIC PAYMENT - THANK",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "MvavmPXywMhpJn3n3AlyUl7gzy8GARC9lqpja",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Food and Drink", "Restaurants"],
    category_id: "13005000",
    date: "2017-02-09",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "KFC",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "ZXoXJBRPgVInywvwvd75C768adpG5ACgR4mod",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Shops", "Bicycles"],
    category_id: "19007000",
    date: "2017-02-09",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Madison Bicycle Shop",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "QwjwkZyrVoSnQ8v8vLM1CMgZV3DmlnhpMv6NN",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "8eneQZXNwGClVA9A9K3jULEjENemQXfwbGPQ9",
    account_owner: null,
    amount: 25,
    category: ["Payment", "Credit Card"],
    category_id: "16001000",
    date: "2017-01-31",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "CREDIT CARD 3333 PAYMENT *//",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "KvxvmPXbaQh1kEzEzDZ8IZqA165wKvuVZMk3k",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: 5.4,
    category: ["Travel", "Car Service", "Ride Share"],
    category_id: "22006001",
    date: "2017-01-31",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Uber 063015 SF**POOL**",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "vZaZklQx5Vh7lbebedBaTQKqxw35aeIWzrewW",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "Wv1v9kna8GhdzWQWQo9lS9yWyedr6XslkDdNg",
    account_owner: null,
    amount: 5850,
    category: ["Transfer", "Debit"],
    category_id: "21006000",
    date: "2017-01-30",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "ACH Electronic CreditGUSTO PAY 123456",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: "ACH",
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "3484NJ53BgH8EBXBXkMls1pm5JQN7KtqrzbKm",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "EGqG63X8N4Cjg8A8ADRdTRLZLQwp6juXq1aAG",
    account_owner: null,
    amount: 1000,
    category: ["Transfer", "Deposit"],
    category_id: "21007000",
    date: "2017-01-30",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "CD DEPOSIT .INITIAL.",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "A8D8mKXLQ3SaweJeJNRLTnL57QKPBEf1jzJKP",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 78.5,
    category: ["Recreation", "Gyms and Fitness Centers"],
    category_id: "17018000",
    date: "2017-01-29",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Touchstone Climbing",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "el9lzwngaVso3kJkJBgxTgJzmrqMbaHLdpBqR",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: -500,
    category: ["Travel", "Airlines and Aviation Services"],
    category_id: "22001000",
    date: "2017-01-29",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "United Airlines",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "9QbQZ6XPVncq8JgJgrQ6s897LpNzldCRGjyKl",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: 12,
    category: ["Food and Drink", "Restaurants"],
    category_id: "13005000",
    date: "2017-01-28",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: "3322",
      zip: null
    },
    name: "McDonald's",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "mdldPAxmLVUbLlalaR9mhZ3BNGjR9VuLm6prK",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: 4.33,
    category: ["Food and Drink", "Restaurants", "Coffee Shop"],
    category_id: "13005043",
    date: "2017-01-28",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Starbucks",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "yLPLpr143lIp6mnmnNkVUw65dVralWTy3xngk",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: 89.4,
    category: ["Food and Drink", "Restaurants"],
    category_id: "13005000",
    date: "2017-01-27",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "SparkFun",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "bvbvqynL3Vh1ogAgAKvmIbPgKl36nVfVx8KBJ",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "8eneQZXNwGClVA9A9K3jULEjENemQXfwbGPQ9",
    account_owner: null,
    amount: -4.22,
    category: ["Food and Drink", "Restaurants"],
    category_id: "13005000",
    date: "2017-01-26",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "INTRST PYMNT",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "qPzPQAkKXVTNbZJZJrRLSK3amEpw4yfdmnPXl",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Travel", "Airlines and Aviation Services"],
    category_id: "22001000",
    date: "2017-01-16",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "United Airlines",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "77G7eXk4QAF8QmgmgkjaslqjWa8KApCgleyEV",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: 6.33,
    category: ["Travel", "Car Service", "Ride Share"],
    category_id: "22006001",
    date: "2017-01-14",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Uber 072515 SF**POOL**",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "naqajAdypVSb1q4q4lmNhqZMEPJvmDt6evVJ4",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Food and Drink", "Restaurants"],
    category_id: "13005000",
    date: "2017-01-11",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Tectra Inc",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "jBDBa7zGZVsbMBeBe4ljhraQ9GmRebF1MDmNl",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 2078.5,
    category: ["Payment"],
    category_id: "16000000",
    date: "2017-01-10",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "AUTOMATIC PAYMENT - THANK",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "PvPvw7VKephnEvavaDkBCk67Zv5QawT7kg5xj",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Food and Drink", "Restaurants"],
    category_id: "13005000",
    date: "2017-01-10",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "KFC",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "Nv4v9PXlw1hoBZxZxDjvTjBP3k5RaxuWj9plV",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "A8D8mKXLQ3SaweJeJNRLTnLALdEGqgu1QdbVd",
    account_owner: null,
    amount: 500,
    category: ["Shops", "Bicycles"],
    category_id: "19007000",
    date: "2017-01-10",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Madison Bicycle Shop",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "4NENPZmxv8T8WjZjZRzBs5pdeEWLq3hdrBV69",
    transaction_type: "place",
    unofficial_currency_code: null
  },
  {
    account_id: "8eneQZXNwGClVA9A9K3jULEjENemQXfwbGPQ9",
    account_owner: null,
    amount: 25,
    category: ["Payment", "Credit Card"],
    category_id: "16001000",
    date: "2017-01-01",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "CREDIT CARD 3333 PAYMENT *//",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "lxwxNA3bWVs9qBdBdPpLI3LZv4mKXpfZwlgAm",
    transaction_type: "special",
    unofficial_currency_code: null
  },
  {
    account_id: "gKRK37qEAVUwqKAKA5xlsx1y1QbJDetgxweG3",
    account_owner: null,
    amount: 5.4,
    category: ["Travel", "Car Service", "Ride Share"],
    category_id: "22006001",
    date: "2017-01-01",
    iso_currency_code: "USD",
    location: {
      address: null,
      city: null,
      lat: null,
      lon: null,
      state: null,
      store_number: null,
      zip: null
    },
    name: "Uber 063015 SF**POOL**",
    payment_meta: {
      by_order_of: null,
      payee: null,
      payer: null,
      payment_method: null,
      payment_processor: null,
      ppd_id: null,
      reason: null,
      reference_number: null
    },
    pending: false,
    pending_transaction_id: null,
    transaction_id: "GvrvmdXW3Phe6ElElLByIBQZP3D6gqu1BkxZv",
    transaction_type: "special",
    unofficial_currency_code: null
  }
];
