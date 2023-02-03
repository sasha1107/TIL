import React from 'react';
import styled from 'styled-components'

const SelectCont = styled.select`
    width: 100%;
    height: 40px;
    font-size: 14px;
`

interface OptionInterface {
    id: number,
    optionName: string,
    additionalFee: number
}

export default function SelectBox({options}: {options: OptionInterface[]}) {
    console.log(options);
    return (
        <SelectCont>
            <option value="">쿠폰 선택</option>
            {options.map((item: any, idx: number) => 
                <option
                    key={idx}
                    value="idx">
                    {item}
                </option>
                )}
        </SelectCont>
    )
}
