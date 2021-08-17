import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './list.css';

interface IProps {

}
interface IState {
    isOpen?: boolean;
}

class List extends Component <IProps,IState> {
    
    constructor(props:IProps){
        super(props)
        this.state = {
            isOpen: false,
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
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
                                    <select>
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
                            <td > 
                                <button type="button" className="btn" style={{borderColor:"blue",color:"blue"}} onClick={this.showModal}>New User Default</button>
                                <Modal show={this.state.isOpen} onHide={this.hideModal} size="lg">
                                    <Modal.Header>
                                        <Modal.Title><div style={{color:"#41cc41"}}><h4>New User Defaults</h4><hr/></div><h6 className="text-muted">This setting is applies to all</h6></Modal.Title>
                                        <button onClick={this.hideModal} style={{color:"#41cc41",position:"relative",bottom:"60px",left:"30px",borderRadius:"100px"}}>X</button>
                                    </Modal.Header>
                                    <form>
                                    <Modal.Body>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label className="text-bold">Select Office</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <select name="office" placeholder="select office">
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
                                                        <input type="checkbox"/>
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
                                                    <input type="text" name="additional_amount" placeholder="Additional Amount"></input>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label>Licence Number</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <input type="text" name="licence_number" placeholder="Licence Number"></input>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div className="form-group row">
                                                <div className="col-md-2">
                                                    <label>Search Estimates For</label>
                                                </div>
                                                <div className="col-md-4">
                                                    <select name="search_estimate_for" placeholder="select type">
                                                        <option value="1 week">1 week</option>
                                                        <option value="2 week">1 week</option>
                                                        <option value="3 week">1 week</option>
                                                        <option value="1 month">1 week</option>
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
                                                            <input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label>
                                                </div>
                                            </div>      
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button onClick={this.hideModal} style={{borderRadius:"10%",width:"10%",borderColor:"green",backgroundColor:"#41cc41"}}>Save</button>
                                    </Modal.Footer>
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
                <table style={{width:"95%"}}>
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
                        <tr>
                            <td>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            <td>Check Shukla</td>
                            <td>rshukla@leaptodigital.com</td>
                            <td>08/16/21 @ 05:07 PM</td>
                            <td>Missouri-MS</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        )
    }
}

export default List;