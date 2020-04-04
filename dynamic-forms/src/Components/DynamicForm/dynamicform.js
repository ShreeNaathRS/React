import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class DynamicForm extends Component{
    state = {

    }
    constructor(props){
        super(props)
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state)
    }

    renderForm = ()=>{
        let model = this.props.model.Form;
        let form = model.map((element)=>{
            let key = element.key;
            let label = element.label;
            let props = element.props || {};
            let type = element.type || "text";
            return(
                <div key = {key}>
                    <label key = {"label"+key}
                           htmlFor = {key}>
                        {label}
                    </label>
                    <input  {...element.props}
                            ref = {(keyin)=>{this[key]=keyin}}
                            type = {type}
                            key = {"input"+key}        
                    >
                    </input>
                </div>
            );
        })
        return form
    }

    render(){
        let title = this.props.title || "Dynamic Form";

        return(
            <div>
                <h3>{title}</h3>
                <form onSubmit={(e)=>{this.onSubmit(e)}}>
                    {this.renderForm()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default DynamicForm;