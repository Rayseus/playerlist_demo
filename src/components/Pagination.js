import React, {Component} from "react"
import classnames from 'classnames';
//import style from "./pagination.css"

class Pagination extends Component{
    constructor(props){
        super(props)
    }

    create(){
        const{
            totalPages,
        } = this.props.config;

        let pages = [];
        pages.push(<li key={0}>prev page</li>)
        for (let i=1;i<=totalPages;i++){
            pages.push(<li key={i}>{i}</li>)
        }
        pages.push(<li key={totalPages+1}>next page</li>)
        return pages
    }

    render(){
        const Pages = this.create.bind(this)();
        console.log(Pages)
        return(
            <div >
                <ul>
                    {Pages}
                </ul>
            </div>
        )
    }

    

}
export default Pagination;