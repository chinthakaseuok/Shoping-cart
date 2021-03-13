import React from "react";
import CurrencyInput from "react-currency-input-field";

interface CurrencyFormatProps {
    className: string,
    value: number
}

const CustomCurrencyFormat: React.FC<CurrencyFormatProps> = (props: CurrencyFormatProps) => {

    return (
        <CurrencyInput
            className={"currency-format " + props.className}
            value={props.value}
            prefix={"Rs. "}
            decimalScale={2}
            disabled
        />
    );
}

export default CustomCurrencyFormat;
