import React, { Component } from 'react'
import {Row, Icon, Input, Button} from 'react-materialize'
import { Header, Image, Modal, Dropdown } from 'semantic-ui-react'
import {getAllBill} from '../Store/BillReducer'
import {connect} from 'react-redux'

const typeOfBill = [
  { key: 'none', text: 'none', value: 'none' },
  { key: 'bills & utilities ', text: 'bills & utilities', value: 'bills & utilities' },
  { key: 'Rent', text: 'Rent', value: 'Rent' },
  { key: 'Medical', text: 'Medical', value: 'Medical' },
  { key: 'Education', text: 'Education', value: 'Education' },
  { key: 'Loan', text: 'Loan', value: 'Loan' },
  { key: 'Day Care', text: 'DayCare', value: 'DayCare' },
  { key: 'Other', text: 'Other', value: 'Other' },
]

const howOften = [
  { key: 'none', text: 'none', value: 'none' },
  { key: 'One time only', text: 'One time only', value: 'One time only' },
  { key: 'Weekly', text: 'Weekly', value: 'Weekly' },
  { key: 'Monthly', text: 'Monthly', value: 'Monthly' },
  { key: 'Quarterly', text: 'Quarterly', value: 'Quarterly' },
  { key: 'Yearly', text: 'Yearly', value: 'Yearly' },
  { key: 'Other', text: 'Other', value: 'Other' },
]

class Bills extends Component {
  constructor(){
    super()
    this.state = {
      modalOpen : false,
      bill : '',
      typeOfBill : '',
      amountDue  : '',
      howOften : '',
      date: '',
      paid: false
    }
  }
  componentDidMount(){
    this.props.getAllBill()
  }
  
  onSubmitHandler = (evt) => {
    // evt.preventDefault()
    console.log(this.state)
  }

  //this is handler dropdown
  onChangeHandlerDrop =(evt,data) => {
    this.setState({
      [data.name] : data.value
    })
  }
  //handler for text
  onChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }
  onChangeDate = (e,value) =>{
   this.setState({
     date : value
   })
  }

  handleOpen = () => this.setState({modalOpen : true})
  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <div>
        
    <Modal 
    trigger={<Button onClick={this.handleOpen}>Add an offline bill</Button>} 
    centered={false}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    >
    <Modal.Header>Add your own bill</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>We'll help you manage it.</Header>
        <Input onChange={this.onChange}  size='small'  name='bill' placeholder='Name of your bill' />
        <div>
        <Dropdown onChange={this.onChangeHandlerDrop} placeholder='Type of bill' name='typeOfBill' search selection options={typeOfBill} />
        <Input  onChange={this.onChange}  size='small' name='amountDue' placeholder='Amount due' />
      </div>

      <div>
        <Dropdown  onChange={this.onChangeHandlerDrop}  placeholder='How often?' name='howOften' search selection  placeholder='How often?' options={howOften} />
        <Input placeholder='Date' type='date' onChange={this.onChangeDate} />
      </div>
        <Button onClick={this.onSubmitHandler}>Submit</Button>
      </Modal.Description>
    </Modal.Content>
  </Modal>
      

      </div>
    )
  }
}

const mapState =(state)=>{
  return{
      plaidObj: state.plaidContainer
  }
}
const mapDispatch=(dispatch)=>{
  return{
  getAllBill : () => dispatch(getAllBill()) 
  }
}


export default connect(mapState,mapDispatch)(Bills)