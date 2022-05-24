import {
    CARD_LIST_REQUEST,
    CARD_LIST_SUCCESS,
    CARD_LIST_FAIL,
    CARD_DETAILS_REQUEST,
    CARD_DETAILS_SUCCESS,
    CARD_DETAILS_FAIL,
    CARD_SAVE_REQUEST,
    CARD_SAVE_SUCCESS,
    CARD_SAVE_FAIL,
    CARD_DELETE_REQUEST,
    CARD_DELETE_SUCCESS,
    CARD_DELETE_FAIL,
    CARD_REVIEW_SAVE_SUCCESS,
    CARD_REVIEW_SAVE_REQUEST,
    CARD_REVIEW_SAVE_FAIL,
    CARD_REVIEW_SAVE_RESET,
  } from '../constants/cardConstants';
  
  function cardListReducer(state = { cards: [] }, action) {
    switch (action.type) {
      case CARD_LIST_REQUEST:
        return { loading: true, cards: [] };
      case CARD_LIST_SUCCESS:
        return { loading: false, cards: action.payload };
      case CARD_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function cardDetailsReducer(state = { card: { reviews: [] } }, action) {
    switch (action.type) {
      case CARD_DETAILS_REQUEST:
        return { loading: true };
      case CARD_DETAILS_SUCCESS:
        return { loading: false, card: action.payload };
      case CARD_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function cardDeleteReducer(state = { card: {} }, action) {
    switch (action.type) {
      case CARD_DELETE_REQUEST:
        return { loading: true };
      case CARD_DELETE_SUCCESS:
        return { loading: false, card: action.payload, success: true };
      case CARD_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function cardSaveReducer(state = { card: {} }, action) {
    switch (action.type) {
      case CARD_SAVE_REQUEST:
        return { loading: true };
      case CARD_SAVE_SUCCESS:
        return { loading: false, success: true, card: action.payload };
      case CARD_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  
  export {
    cardListReducer,
    cardDetailsReducer,
    cardSaveReducer,
    cardDeleteReducer,
  };
  