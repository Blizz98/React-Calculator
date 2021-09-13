class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    calculate = () =>{
        this.props.calculate();
    }

    addNumber = (num) =>{
        this.props.addNum(num);
    }

    operation = (op) =>{
        this.props.operation(op);
    }
    
    clear = () =>{
        this.props.clear();
    }

    render(){
        return(
            <div id="buttons">
                <button id="clear" className="button" onClick={this.clear}>AC</button>
                <button id="divide" className="button" onClick={() => this.operation("/")}>/</button>
                <button id="multiply" className="button" onClick={() => this.operation("*")}>*</button>
                <button id="seven" className="button" onClick={() => this.addNumber(7)}>7</button>
                <button id="eight" className="button" onClick={() => this.addNumber(8)}>8</button>
                <button id="nine" className="button" onClick={() => this.addNumber(9)}>9</button>
                <button id="subtract" className="button" onClick={() => this.operation("-")}>-</button>
                <button id="four" className="button" onClick={() => this.addNumber(4)}>4</button>
                <button id="five" className="button" onClick={() => this.addNumber(5)}>5</button>
                <button id="six" className="button" onClick={() => this.addNumber(6)}>6</button>
                <button id="add" className="button" onClick={() => this.operation("+")}>+</button>
                <button id="one" className="button" onClick={() => this.addNumber(1)}>1</button>
                <button id="two" className="button" onClick={() => this.addNumber(2)}>2</button>
                <button id="three" className="button" onClick={() => this.addNumber(3)}>3</button>
                <button id="equals" className="button" onClick={this.calculate}>=</button>
                <button id="zero" className="button" onClick={() => this.addNumber(0)}>0</button>
                <button id="decimal" className="button" onClick={() => this.addNumber(".")}>.</button>
            </div>
        );
    }
}