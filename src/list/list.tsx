import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './list.css';
import {AiFillEdit} from 'react-icons/ai';

interface IProps {

}
interface IState {
    isOpen?: boolean;
    office?: string;
    active?: string;
    additional_amount?: string;
    licence_number?: string;
    search_estimate_for?: string;
    submit_credit_app?: string;
    errors: {[key: string]: string};
    filter?: string;
    filterActive?: string;
    filterInactive?: string;
}

class List extends Component <IProps,IState> {
    
    constructor(props:IProps){
        super(props)
        this.state = {
            isOpen: false,
            office: "",
            active: "",
            additional_amount: "",
            licence_number: "",
            search_estimate_for: "",
            submit_credit_app: "",
            filter: "",
            filterActive: "",
            filterInactive: "",
            errors: {},
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckedActive = this.handleCheckedActive.bind(this);
        this.handleCheckedCreditApp = this.handleCheckedCreditApp.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleValidation(e:{preventDefault: ()=> void}): void {
        e.preventDefault();
        let errors: {[key:string]:any}={};
        let formIsValid = true;

        if(this.state.additional_amount===""){
            formIsValid = false;
            errors["additional_amount"] = "cannot be empty";
        }
        if(this.state.licence_number===""){
            formIsValid = false;
            errors["licence_number"] = "cannot be empty";
        }

        this.setState({errors: errors})

        if(formIsValid){
            this.handleSubmit(e);
        }
    }

    handleSubmit(e:{preventDefault: ()=> void}): void {
        e.preventDefault();

        const data = {
            office: this.state.office,
            active: this.state.active,
            additional_amount: this.state.additional_amount,
            licence_number: this.state.licence_number,
            search_extimate_for: this.state.search_estimate_for,
            submit_credit_app: this.state.submit_credit_app
        }

        console.log("data:",data)
        this.hideModal();
    }

    handleCheckedActive(e:any){
        e.preventDefault();

        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({active:"active"})
        }else{
            this.setState({active:"inactive"}) 
            console.log(this.state.active) 
        } 
    }

    handleCheckedCreditApp(e:any){
        e.preventDefault();

        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({submit_credit_app:"yes"})
        }else{
            this.setState({submit_credit_app:"no"})
            console.log(this.state.submit_credit_app)
        }
    }

    handleFilter(e:any){
        e.preventDefault();
        let filter = e.target.value;
        
        console.log(filter);
        if(filter==="active"){
            this.setState({
                filterActive: "table-row",
                filterInactive: "none"
            })
        }
        if(filter==="inactive"){
            this.setState({
                filterActive:"none",
                filterInactive:"table-row"
            })
        }
        if(filter==="all"){
            this.setState({
                filterActive:"table-row",
                filterInactive:"table-row"
            })
        }
    }

    showModal(){
        this.setState({isOpen:true});
    }
    hideModal(){
        this.setState({isOpen:false});
    }

    render(){   
        return(
            <div style={{margin:"5%"}}>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <td style={{width:"10%"}}>
                                <form className="form">
                                    <select onClick={(e)=>{this.handleFilter(e)}}>
                                        <option value="all">All</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">InActive</option>
                                    </select>
                                </form>
                            </td>
                            <td style={{width:"15%"}} >
                                <form>
                                    <input type="text" placeholder="search..."></input>
                                </form>
                            </td>
                            <td style={{width:"40%"}}></td>
                            <td style={{width:"15%"}}> 
                                <button type="button" className="btn" style={{borderColor:"blue",color:"blue"}} onClick={this.showModal}>New User Default</button>
                                <Modal show={this.state.isOpen} onHide={this.hideModal} size="lg">
                                    <Modal.Header>
                                        <Modal.Title><div style={{color:"#41cc41"}}><h4>New User Defaults</h4><hr/></div><h6 className="text-muted">This setting is applies to all</h6></Modal.Title>
                                        <button onClick={this.hideModal} style={{color:"#41cc41",position:"relative",bottom:"60px",left:"30px",borderRadius:"100px",width:"4%"}}>X</button>
                                    </Modal.Header>
                                    <form onSubmit={this.handleValidation} method="post">
                                    <Modal.Body>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label className="text-bold">Select Office</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <select name="office" placeholder="select office" onChange={(e)=>{this.setState({office:e.target.value})}}>
                                                        <option value="Delhi">Delhi</option>
                                                        <option value="Mumbai">Mumbai</option>
                                                        <option value="banglore">banglore</option>
                                                        <option value="Ahmedabad">Ahmedabad</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-group row"> 
                                                <div className="col-md-2">
                                                    <label>Active</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="switch">
                                                        <input name="active" type="checkbox" value="active" onChange={(e)=>{this.handleCheckedActive(e)}}/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label>Additional Amount</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <input type="text" name="additional_amount" style={{width:"100%"}}  placeholder="Additional Amount" onChange={(e)=>{this.setState({additional_amount:e.target.value})}}/>
                                                    {<span style={{color:"red"}}>{this.state.errors["additional_amount"]}</span>}
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label>Licence Number</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <input type="text" name="licence_number" style={{width:"100%"}} placeholder="Licence Number" onChange={(e)=>{this.setState({licence_number:e.target.value})}}/>
                                                    { <span style={{color: "red"}}>{this.state.errors["licence_number"]}</span> }
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label>Search Estimates For</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <select name="search_estimate_for" placeholder="select type" onChange={(e)=>{this.setState({search_estimate_for:e.target.value})}}>
                                                        <option value="1 week">1 week</option>
                                                        <option value="2 week">2 week</option>
                                                        <option value="1 month">1 Month</option>
                                                        <option value="forever">Forever</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label>Submit Credit App</label>
                                                </div>
                                                <div className="col-md-4">
                                                        <label className="switch">
                                                            <input name="submit_credit_app" type="checkbox" value="yes" onChange={(e)=>{this.handleCheckedCreditApp(e)}}/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                </div>
                                            </div>
                                            <div>
                                            <button  style={{borderRadius:"10%",width:"10%",borderColor:"green",backgroundColor:"#41cc41",marginLeft:"80%"}}>Save</button>
                                            </div>      
                                    </Modal.Body>
                                    </form>
                                </Modal>
                            </td>
                            <td style={{width:"15%"}}>
                                <button type="button" className="btn" style={{borderColor:"green",color:"green"}}>Add New +</button>
                            </td>
                        </tr>
                    </thead>
                </table>
                <div style={{margin:"2%"}}></div>
                <table className="table table-border" style={{width:"95%"}}>
                    <thead style={{background:"#f3f0f0"}}>
                        <tr>
                            <th>Active</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Last Login</th>
                            <th>Current Office</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{display:`${this.state.filterActive}`}}>
                            <td>
                                <label className="switch">
                                    <input type="checkbox" name="active" defaultChecked/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td>Check Shukla</td>
                            <td>rshukla@leaptodigital.com</td>
                            <td>08/16/21 @ 05:07 PM</td>
                            <td>Missouri-MS</td>
                            <td><AiFillEdit style={{fontSize:"24px"}}/></td>
                        </tr>
                        <tr style={{display:`${this.state.filterInactive}`}}>
                            <td>
                                <label className="switch">
                                    <input type="checkbox" name="inactive"/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td>Check Alex</td>
                            <td>alex@leaptodigital.com</td>
                            <td>08/18/21 @ 10:07 AM</td>
                            <td>Missouri-MS</td>
                            <td><AiFillEdit style={{fontSize:"24px"}}/></td>
                        </tr>
                        <tr style={{display:`${this.state.filterInactive}`}}>
                            <td>
                                <label className="switch">
                                    <input type="checkbox" name="inactive"/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td>Check Gary</td>
                            <td>gary@leaptodigital.com</td>
                            <td>08/19/21 @ 03:07 PM</td>
                            <td>Missouri-MS</td>
                            <td><AiFillEdit style={{fontSize:"24px"}}/></td>
                        </tr>
                        <tr style={{display:`${this.state.filterActive}`}}>
                            <td>
                                <label className="switch">
                                    <input type="checkbox" name="active" defaultChecked/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td>Check Henrry</td>
                            <td>henrry@leaptodigital.com</td>
                            <td>08/15/21 @ 09:00 PM</td>
                            <td>Missouri-MS</td>
                            <td><AiFillEdit style={{fontSize:"24px"}}/></td>
                        </tr>
                        <tr style={{display:`${this.state.filterActive}`}}>
                            <td>
                                <label className="switch">
                                    <input type="checkbox" name="active" defaultChecked/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td>Check Daniel</td>
                            <td>daniel@leaptodigital.com</td>
                            <td>08/6/21 @ 11:00 AM</td>
                            <td>Missouri-MS</td>
                            <td><AiFillEdit style={{fontSize:"24px"}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        )
    }
}

export default List;