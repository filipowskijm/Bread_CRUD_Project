const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads}) {
    return (
      <Default>
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
      </Default>
    )
}

module.exports = Index
