import React from 'react'
import { Table, Dropdown} from 'semantic-ui-react'


class TransactionHeader extends React.Component{
    render(){
        return(
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                    <Dropdown
                        button
                        className='icon'
                        floating
                        labeled
                        icon='filter'
                        options={this.props.size()}
                        search
                        name = "size"
                        text= {this.props.state.sizeFilter}
                        onChange = {this.props.handleChange}
                    />
                    <Dropdown
                        button
                        className='icon'
                        floating
                        labeled
                        icon='filter'
                        options={this.props.account()}
                        search
                        name = "account"
                        text= {this.props.state.accountFilter}
                        onChange={this.props.handleChange}
                    />
                    <Dropdown
                        button
                        className='icon'
                        floating
                        labeled
                        icon='filter'
                        options={this.props.category()}
                        search
                        name = "category"
                        text={this.props.state.categoryFilter}
                        onChange={this.props.handleChange}
                    />
                    <Dropdown
                        button
                        size='small'
                        className='icon'
                        floating
                        labeled
                        icon='filter'
                        name = "price"
                        options={this.props.price()}
                        search
                        text={this.props.state.priceFilter}
                        onChange ={this.props.handleChange}
                    />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        )
    }
}

export default TransactionHeader