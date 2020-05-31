import React from 'react'

export default function Selector() {
    return (
        <div>

            <form action="/action_page.php">
                <label for="cars">Data: </label>
                <select id="cars" name="cars">
                    <option value="funding amount">Funding Amount</option>
                    <option value="number of funding rounds per category">
                        Number of Funding Rounds per Category</option>
                </select>
                <input type="submit" />
            </form>
        </div >
    )
}
