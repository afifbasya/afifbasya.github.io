import portfolios from "../data/portfolio";

let initialState = {
  portfolios: portfolios
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOVER":
      return {
        ...state,
        portfolios: state.portfolios.map(portfolio =>
          portfolio.id === action.payload.id
            ? { ...portfolio, active: action.payload.active }
            : portfolio
        )
      };

    default:
      return state;
  }
};

export default items;
