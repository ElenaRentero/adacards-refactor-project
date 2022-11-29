import logoAdalab from '../images/logo-adalab.png';
function Footer(){
    return (<footer className="landingFooter">
    <a
      className="landingFooter__text"
      href="https://twitter.com/ChamaleonGirls"
      title="@ChamaleonGirls"
      target="_blank"
    >
      Chamaleon Girls @2022
    </a>
    <a href="https://adalab.es/" title="Adalab" target="_blank">
      <img
        className="landingFooter__logo"
        src={logoAdalab}
        alt="logo de adalab"
      />
    </a>
  </footer>)
}

export default Footer