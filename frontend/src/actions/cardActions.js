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
    CARD_DELETE_SUCCESS,
    CARD_DELETE_FAIL,
    CARD_DELETE_REQUEST,
  } from '../constants/cardConstants';
  import axios from 'axios';
  import Axios from 'axios';
  
  const listCards = () => async (dispatch) => {
    try {
      dispatch({ type: CARD_LIST_REQUEST });
      const { data } = await axios.get(
        '/api/cards'
      );
      dispatch({ type: CARD_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CARD_LIST_FAIL, payload: error.message });
    }
  };
  
  const saveCard = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: CARD_SAVE_REQUEST, payload: product });
      const {
        userSignin: { userInfo },
      } = getState();
      if (!card._id) {
        const { data } = await Axios.post('/api/cards', card, {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        });
        dispatch({ type: CARD_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put(
          '/api/card/' + card._id,
          card,
          {
            headers: {
              Authorization: 'Bearer ' + userInfo.token,
            },
          }
        );
        dispatch({ type: CARD_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: CARD_SAVE_FAIL, payload: error.message });
    }
  };
  
  const detailsCard = (cardId) => async (dispatch) => {
    try {
      dispatch({ type: CARD_DETAILS_REQUEST, payload: cardId });
      const { data } = await axios.get('/api/cards/' + cardId);
      dispatch({ type: CARD_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CARD_DETAILS_FAIL, payload: error.message });
    }
  };
  
  const deleteCard = (cardId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({ type: CARD_DELETE_REQUEST, payload: cardId });
      const { data } = await axios.delete('/api/cards/' + cardId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: CARD_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: CARD_DELETE_FAIL, payload: error.message });
    }
  };

  
  export {
    listCards,
    detailsCard,
    saveCard,
    deleteCard,
  };
  