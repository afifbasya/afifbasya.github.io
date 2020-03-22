import { connect } from "react-redux";
import Portfolios from "../components/Portfolios";

const getPortfolios = (portfolios, filter) => {
  switch (filter) {
    case "ALL":
      return portfolios;
    case "WEB":
      return portfolios.filter( item => !item.mobile);
    case "MOBILE":
      return portfolios.filter( item => item.mobile);
    default:
      throw new Error("Filter tidak dikenali : " + filter);
  }
};

const mapStateToProps = state => ({
  portfolios: getPortfolios(state.items.portfolios, state.filter)
});

export default connect(mapStateToProps, null)(Portfolios);
