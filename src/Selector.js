import React from 'react'

export default class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'number of funding rounds per category' };

        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        alert('Your choose' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>

                <form className="form-group">
                    <div className="form-group row col-sm-9">
                        <label className="col-sm-2 col-form-label">Data: </label>
                        <select id="data-selector" name="data-selector"
                            className="col-sm-7 form-control"
                            value={this.state.value} onChange={this.handleChange}>

                            <option value="number of funding rounds per category">
                                Number of Funding Rounds per Category</option>
                            <option value="funding amount">
                                Funding Amount</option>
                        </select>
                    </div>
                </form>
            </div >
        )
    }
}
