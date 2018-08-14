import React from 'react'
import { Table, Label} from 'semantic-ui-react'


class TransactionHeader extends React.Component{
    render(){
        return(
            <Table.Header>
                <Table.Row>
                    <Table.Cell>
                        <Label ribbon>Transactions</Label>
                    </Table.Cell>
                </Table.Row>
            </Table.Header>
        )
    }
}

export default TransactionHeader