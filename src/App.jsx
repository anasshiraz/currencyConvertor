import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import background from "./assets/background.jpg";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amountConverted, setAmountConverted] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(amountConverted);
    setAmountConverted(amount);
  };

  const convert = () => {
    setAmountConverted((Number(amount) * currencyInfo[to]).toFixed(2));
  };
  return (
    <div
      className="app-shell relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-6 sm:px-6 sm:py-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="app-overlay pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-md">
        <div className="app-card rounded-2xl border border-white/40 bg-white/20 p-4 shadow-2xl backdrop-blur-md sm:p-6">
          <h1 className="mb-4 text-center text-xl font-semibold tracking-wide text-white sm:mb-5 sm:text-2xl">
            Currency Converter
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-2 w-full sm:mb-3">
              <InputBox
                label="From"
                amount={amount}
                selectCurrency={from}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative h-3 w-full sm:h-4">
              <button
                type="button"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 bg-blue-600 px-3 py-1 text-sm font-medium capitalize text-white shadow-lg transition hover:bg-blue-700"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="mb-4 mt-2 w-full sm:mb-5 sm:mt-3">
              <InputBox
                label="To"
                amount={amountConverted}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                amonuntDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
