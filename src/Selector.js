import React from 'react'

export default function Selector() {
    return (
        <div>

            <form className="form-group">
                <div className="form-group row col-sm-9">
                    <label className="col-sm-2 col-form-label">Data: </label>
                    <select id="data-selector" name="data-selector"
                        className="col-sm-7 form-control">
                        <option value="number of funding rounds per category">
                            Number of Funding Rounds per Category</option>
                        <option value="funding amount">Funding Amount</option>
                    </select>
                </div>
            </form>
        </div >
    )
}
