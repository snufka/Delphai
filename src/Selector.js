import React from 'react'

export default function Selector() {
    return (
        <div>

            <form className="form-group">
                <div className="form-group row col-sm-8">
                    <label for="data" className="col-sm-1 col-form-label">Data: </label>
                    <select id="data-selector" name="data-selector" className="col-sm-6 form-control">
                        <option value="number of funding rounds per category">
                            Number of Funding Rounds per Category</option>
                        <option value="funding amount">Funding Amount</option>
                    </select>
                </div>
            </form>
        </div >
    )
}
