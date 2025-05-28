import { useState } from "react";

const AutoComplete = () => {
  const userNumbers: Record<string, string> = {
  "100001": "company 1", "100002": "company 2", "100003": "company 3", "100004": "company 4", "100005": "company 5",
  "100006": "company 6", "100007": "company 7", "100008": "company 8", "100009": "company 9", "100010": "company 10",

  "200001": "company 11", "200002": "company 12", "200003": "company 13", "200004": "company 14", "200005": "company 15",
  "200006": "company 16", "200007": "company 17", "200008": "company 18", "200009": "company 19", "200010": "company 20",

  "300001": "company 21", "300002": "company 22", "300003": "company 23", "300004": "company 24", "300005": "company 25",
  "300006": "company 26", "300007": "company 27", "300008": "company 28", "300009": "company 29", "300010": "company 30",

  "400001": "company 31", "400002": "company 32", "400003": "company 33", "400004": "company 34", "400005": "company 35",
  "400006": "company 36", "400007": "company 37", "400008": "company 38", "400009": "company 39", "400010": "company 40",

  "500001": "company 41", "500002": "company 42", "500003": "company 43", "500004": "company 44", "500005": "company 45",
  "500006": "company 46", "500007": "company 47", "500008": "company 48", "500009": "company 49", "500010": "company 50"
};


  const [query, setQuery] = useState('');
  const [showList, setShowList] = useState(true);

  const filteredList = query !== ''
    ? Object.keys(userNumbers).filter(key => key.startsWith(query))
    : Object.keys(userNumbers);

  const isInvalid = query !== '' && filteredList.length === 0;

  const handleSelect = (num: string) => {
    setQuery(num);
    setShowList(false);
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter Your User Number"
          className={`w-250 p-2 border-2 rounded-md shadow bg-gray-100 focus:outline-none ${
            isInvalid ? 'border-red-800' : 'border-gray-300'
          }`}
          value={query}
          onChange={(e) => {
              setQuery(e.target.value);
              setShowList(true); 
          }}
        />

        <div className="w-250 p-2 rounded-md bg-gray-50 shadow text-gray-500">
          {query && userNumbers[query] ? userNumbers[query] : "Account Name"}
        </div>
      </div>

      {showList && filteredList.length > 0 && (
        <ul className="w-55.5 mt-2 border border-gray-300 rounded-md shadow bg-gray-100 max-h-60 overflow-auto">
          {filteredList.map((num, index) => (
            <li
              key={index}
              onClick={() => handleSelect(num)}
              className="p-2 hover:bg-gray-300 cursor-pointer"
            >
              {num}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
