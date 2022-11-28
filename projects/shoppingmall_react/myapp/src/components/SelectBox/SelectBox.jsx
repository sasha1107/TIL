import styled from 'styled-components'

const SelectCont = styled.select`
    width: 100%;
    height: 40px;
    font-size: 14px;
`

export default function SelectBox({options}) {
    console.log(options);
    return (
        <SelectCont>
            <option value="">쿠폰 선택</option>
            {options.map((item, idx) => 
                <option
                    key={idx}
                    value="idx">
                    {item}
                </option>
                )}
        </SelectCont>
    )
}
