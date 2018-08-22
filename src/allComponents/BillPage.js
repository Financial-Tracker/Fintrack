import React, { Component } from 'react'
import {Row, Icon, Input, Button} from 'react-materialize'
import { Header, Image, Modal, Dropdown } from 'semantic-ui-react'
import {getAllBill} from '../Store/BillReducer'
import {connect} from 'react-redux'

import NavBar from './smallComponents/Navbar'
import SideNav from './smallComponents/SideNav';
import Transactions from './smallComponents/Transactions'
import GoalForm from './smallComponents/GoalForm';
import AccountOverViewSection from './smallComponents/AccountOverViewSection';
import Footer from './smallComponents/Footer'

// const typeOfBill = [
//   { key: 'none', text: 'none', value: 'none' },
//   { key: 'bills & utilities ', text: 'bills & utilities', value: 'bills & utilities' },
//   { key: 'Rent', text: 'Rent', value: 'Rent' },
//   { key: 'Medical', text: 'Medical', value: 'Medical' },
//   { key: 'Education', text: 'Education', value: 'Education' },
//   { key: 'Loan', text: 'Loan', value: 'Loan' },
//   { key: 'Day Care', text: 'DayCare', value: 'DayCare' },
//   { key: 'Other', text: 'Other', value: 'Other' },
// ]

// const howOften = [
//   { key: 'none', text: 'none', value: 'none' },
//   { key: 'One time only', text: 'One time only', value: 'One time only' },
//   { key: 'Weekly', text: 'Weekly', value: 'Weekly' },
//   { key: 'Monthly', text: 'Monthly', value: 'Monthly' },
//   { key: 'Quarterly', text: 'Quarterly', value: 'Quarterly' },
//   { key: 'Yearly', text: 'Yearly', value: 'Yearly' },
//   { key: 'Other', text: 'Other', value: 'Other' },
// ]

class BillPage extends Component {
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
      <NavBar link={'Bills'}/>
    <section id="main">
      <div className="container">
        <div className="row">
      <SideNav link={"Bills"}/>
          <div className="col-md-9">
          This Bills
            {/* <AccountOverViewSection />
            <Transactions /> */}
          </div>
        </div>
      </div>
    </section>
    <Footer />    
    
    </div>
    )
  }
}


const mapState =(state)=>{
  return{
    isLoading:state.plaidContainer.isLoading,
      plaidObj: state.plaidContainer.plaidData
  }
}
const mapDispatch=(dispatch)=>{
  return{
  getAllBill : () => dispatch(getAllBill()) 
  }
}


{/* <div>

<div class="container">
  <h2>Dynamic Tabs</h2>
  <p>To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
      <Button>Test</Button>
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Bills</a></li>
    <li><a data-toggle="tab" href="#menu1">Paid List</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>Bills </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Payments</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>
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
      

      </div> */}

export default connect(mapState,mapDispatch)(BillPage)