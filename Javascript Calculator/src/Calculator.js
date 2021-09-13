class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number1: "",
            number2: "",
            op: "",
            result: ""
        }
    }

    addNumber = (num) =>{
        // Check if adding more than one 0 at the start
        if(num == 0){
            if(this.state.number1[0] != 0){
                this.state.number1 += "" + num;
                document.getElementById("lower-display").innerHTML = this.state.number1;
            }
        }
        // Else continue normally
        else{
            this.state.number1 += "" + num;
            document.getElementById("lower-display").innerHTML = this.state.number1;
        }
    }

    operation = (op) =>{
        // Only allow operations to be made after number 1 has been assigned
        if(this.state.number1 != ""){
            // Switch for the operations
            switch(op){
                case "+":
                    this.state.op = " + ";
                    break;
                case "-":
                    this.state.op = " - ";
                    break;
                case "*":
                    this.state.op = " * ";
                    break;
                case "/":
                    this.state.op = " / ";
                    break;
            }
            this.state.number2 = this.state.number1;
            this.state.number1 = "";
            this.state.result += " " + this.state.number2 + " " + this.state.op;

            // Display number 1 to upper display
            document.getElementById("lower-display").innerHTML = "0";
            document.getElementById("upper-display").innerHTML += " " + this.state.number2 + " " + this.state.op;
        }
    }

    calculate = () =>{
        // Put the second number into the result variable
        this.state.result += this.state.number1;

        // Check if the result has decimal values in it, if not evaluate the variable normally and put it into lower display
        if(Math.round(eval(this.state.result)) == eval(this.state.result)){
            document.getElementById("lower-display").innerHTML = eval(this.state.result);
        }
        // Else evaluate the variable to fixed 2 decimals and put it into lower display
        else{
            let decimal = 0;
            let res = eval(this.state.result);
            let sres = "" + res;
            for(let i = 0; i < sres.length; i++){
                if(sres[i] == "."){
                    let d = i + 1;
                    for(let ii = d; ii < sres.length; ii++){
                        if(sres[ii] != 0){
                            decimal += 1;
                        }
                    }
                }
            }
            if(decimal > 10){
                document.getElementById("lower-display").innerHTML = eval(this.state.result).toFixed(10);
            }else{
                document.getElementById("lower-display").innerHTML = eval(this.state.result).toFixed(decimal);
            }
        }

        // Put the whole arithmetic operation into upper display and reset all variables
        document.getElementById("upper-display").innerHTML = this.state.result + " =";
        this.state.number1 = "";
        this.state.number2 = "";
        this.state.op = "";
        this.state.result = "";
    }

    clear = () =>{
        // Reset everything
        document.getElementById("lower-display").innerHTML = "";
        document.getElementById("upper-display").innerHTML = "";
        this.state.number1 = "";
        this.state.number2 = "";
        this.state.op = "";
        this.state.result = "";
    }

    render() {
        return (
            <React.Fragment>
                <p id="heading">REACT CALCULATOR</p>
                <Display num1={this.state.number1} num2={this.state.number2}/>
                <Buttons addNum={this.addNumber} operation={this.operation} calculate={this.calculate} clear={this.clear}/>
            </React.Fragment>
        )
    }
}
