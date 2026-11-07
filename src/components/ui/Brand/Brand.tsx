import logoMark from '@/assets/brand/logo-mark.svg'
import './Brand.scss'

/** The TeamFlow logo and name, linking back to the top of the page. */
export function Brand() {
  return (
    <a className="brand" href="#top">
      <img className="brand__mark" src={logoMark} alt="" width={32} height={32} />
      TeamFlow
    </a>
  )
}
