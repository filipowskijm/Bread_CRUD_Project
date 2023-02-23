const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <p>I have {breads[2].name} bread!</p>
        {/* The above code will use the breads model array to render the breads data */}
        <ul>
            {
                breads.map((bread, index) => {
                    console.log(bread)
                    console.log(index)
                    return (
                        <li key={index}>
                            <a href={`/breads/${index}`}>
                                {bread.name}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      </Default>
    )
}

module.exports = Index
