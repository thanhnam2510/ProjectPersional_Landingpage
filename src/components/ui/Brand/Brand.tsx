import './Brand.scss'

/** The TeamFlow logo and name, linking back to the top of the page. */
export function Brand() {
  return (
    <a className="brand" href="#top">
      <span className="brand__mark">tf</span>
      TeamFlow
    </a>
  )
}
