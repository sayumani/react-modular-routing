import React,{Component} from 'react';
import {Route} from 'react-router';
import Orders from './Orders';
import Transactions from './Transactions'

class DashboardRouter extends Component {
    render(){
        return (
            <div>
                <Route path="/orders" component={Orders}/>
                <Route path="/transactions" 
                    component={Transactions}/>
            </div>
        );
    }
}

export default DashboardRouter;