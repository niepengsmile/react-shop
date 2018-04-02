import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class NotLogin extends Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <ul>
                <li><Link to="/login">登 录</Link></li>
                <li><Link to="/reg">注 册</Link></li>
                <li><Link to="/forget">忘记密码</Link></li>
                <li><Link to="/cart">我的订单</Link></li>
            </ul>
        )
    }
}

export default NotLogin