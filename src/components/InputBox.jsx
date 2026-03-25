import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  currencyOptions = [],
  amonuntDisabled = false,
  currencyDisabled = false,

  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`rounded-xl bg-white/95 p-3 text-sm shadow-sm ring-1 ring-white/50 sm:flex sm:items-end sm:gap-3 sm:p-4 ${className}`}
    >
      <div className="w-full sm:w-1/2">
        <label
          htmlFor={amountInputId}
          className="mb-2 inline-block text-xs font-medium tracking-wide text-black/60"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full rounded-md border border-gray-200 bg-transparent px-2 py-2 text-base outline-none focus:border-blue-400"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amonuntDisabled}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="mt-3 w-full text-left sm:mt-0 sm:w-1/2 sm:text-right">
        <p className="mb-2 w-full text-xs font-medium tracking-wide text-black/60">
          Currency Type
        </p>
        <select
          className="w-full cursor-pointer rounded-md border border-gray-200 bg-gray-100 px-2 py-2 outline-none focus:border-blue-400 sm:w-auto"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
