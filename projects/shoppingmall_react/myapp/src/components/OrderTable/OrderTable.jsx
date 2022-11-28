import { Header, HTr, TableCont} from './OrderTableStyle'

export default function OrderTable() {
    return (
        <TableCont>
            <colgroup>
                <col style={{width: "10%"}}/>
                <col style={{width: "50%"}}/>
                <col style={{width: "10%"}}/>
                <col style={{width: "10%"}}/>
                <col style={{width: "20%"}}/>
            </colgroup>
            <Header>
                <tr>
                    <th>체크</th>
                    <th>상품정보</th>
                    <th>쿠폰 할인</th>
                    <th>배송비</th>
                    <th>주문금액</th>
                </tr>
            </Header>
            <tbody>
                
            </tbody>
        </TableCont>
    )
}
