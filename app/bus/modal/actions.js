// Instruments
import types from './types';
import { HISTORY_ITEMS_PER_PAGE, PotatoRpc } from '../../constants';

export const modalActions = Object.freeze({
  fetchAccountInfo: producerName => async dispatch => {
    dispatch({ type: types.FETCHING_ACCOUNT_INFO });

    const response = await fetch(`${process.env.API_URL}/api/v1/accounts/${producerName}`);
    const data = await response.json();
    return dispatch({
      type: types.FETCHING_ACCOUNT_INFO_SUCCESS,
      payload: data,
    });
  },

  fetchAccountHistory: (producerName, page) => async dispatch => {
    dispatch({ type: types.FETCHING_ACCOUNT_HISTORY });
    const response = await fetch(
      `${process.env.API_URL}/api/v1/accounts/${producerName}/history?skip=${HISTORY_ITEMS_PER_PAGE *
        page}&limit=${HISTORY_ITEMS_PER_PAGE}`
    );
    const data = await response.json();
    return dispatch({
      type: types.FETCHING_ACCOUNT_HISTORY_SUCCESS,
      payload: data,
    });
  },

  fetchBlockInfo: blockNum => async dispatch => {
    dispatch({ type: types.FETCHING_BLOCK_INFO });

    const response = await PotatoRpc.get_block(blockNum);

    return dispatch({
      type: types.FETCHING_BLOCK_INFO_SUCCESS,
      payload: response,
    });
  },

  fetchTxInfo: txId => async dispatch => {
    dispatch({ type: types.FETCHING_TX_INFO });
    try {
      const response = await fetch(`${process.env.API_URL}/api/v1/transactions/${txId}`);
      const data = await response.json();
      return dispatch({
        type: types.FETCHING_TX_INFO_SUCCESS,
        payload: data,
      });
    } catch (e) {
      return dispatch({
        type: types.FETCHING_TX_INFO_FAILURE,
      });
    }
  },

  fetchP2PAddresses: () => async dispatch => {
    dispatch({ type: types.FETCHING_P2P_ADDRESSES });

    try {
      const response = await fetch(`${process.env.API_URL}/api/v1/p2p/addresses`);
      const data = await response.json();
      return dispatch({
        type: types.FETCHING_P2P_ADDRESSES_SUCCESS,
        payload: data,
      });
    } catch (e) {
      return dispatch({
        type: types.FETCHING_P2P_ADDRESSES_FAILURE,
      });
    }
  },

  fetchBpJson: accountName => async dispatch => {
    dispatch({ type: types.FETCHING_BP_JSON });

    try {
      const response = await fetch(`${process.env.API_URL}/api/v1/chain/${accountName}/bp`);
      const data = await response.json();

      return dispatch({
        type: types.FETCHING_BP_JSON_SUCCESS,
        payload: data,
      });
    } catch (e) {
      return dispatch({
        type: types.FETCHING_BP_JSON_FAILURE,
      });
    }
  },

  fetchRamPrice: (from, to) => async dispatch => {
    dispatch({ type: types.FETCHING_RAM_PRICE });

    try {
      const response = await fetch(`${process.env.API_URL}/api/v1/ram?from=${from}&to=${to}`);

      const data = await response.json();
      return dispatch({
        type: types.FETCHING_RAM_PRICE_SUCCESS,
        payload: data,
      });
    } catch (e) {
      return dispatch({
        type: types.FETCHING_RAM_PRICE_FAILURE,
      });
    }
  },

  resetRamPriceStore: () => ({
    type: types.RESET_RAM_PRICE,
  }),

  resetEosApiStore: () => ({
    type: types.RESET_EOS_API,
  }),

  resetBpJsonStore: () => ({
    type: types.RESET_BP_JSON,
  }),

  getInfo: () => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const response = await PotatoRpc.get_info();
      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getBlock: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getBlock } = data;

      const response = await PotatoRpc.get_block(getBlock);

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },
  getBlockHeaderState: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getBlockHeaderState } = data;

      const response = await PotatoRpc.get_block_header_state(getBlockHeaderState);

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getAccount: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getAccount } = data;

      const response = await PotatoRpc.get_account(getAccount);

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getAbi: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getAbi } = data;

      const response = await PotatoRpc.get_abi(getAbi);

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getRawCodeAndAbi: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getCode } = data;

      const abi = await PotatoRpc.get_abi(getCode);
      const code = await PotatoRpc.get_code(getCode);

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: { abi, code },
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getTableRows: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const {
        getTableRowsJson,
        getTableRowsCode,
        getTableRowsScope,
        getTableRowsTable,
        getTableRowsTableKey,
        getTableRowsLowerBound,
        getTableRowsUpperBound,
        getTableRowsLimit,
      } = data;
      const limit = +getTableRowsLimit;
      const json = getTableRowsJson === 'true';

      const response = await PotatoRpc.get_table_rows(
        json,
        getTableRowsCode,
        getTableRowsScope,
        getTableRowsTable,
        getTableRowsTableKey,
        getTableRowsLowerBound,
        getTableRowsUpperBound,
        limit
      );

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getCurrencyBalance: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getCurrencyBalanceСode, getCurrencyBalanceAccount, getCurrencyBalanceSymbol } = data;

      const response = await PotatoRpc.get_currency_balance(
        getCurrencyBalanceСode,
        getCurrencyBalanceAccount,
        getCurrencyBalanceSymbol
      );

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getCurrencyStats: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getCurrencyStatsСode, getCurrencyStatsSymbol } = data;

      const response = await PotatoRpc.get_currency_stats(getCurrencyStatsСode, getCurrencyStatsSymbol);

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },

  getProducers: data => async dispatch => {
    dispatch({ type: types.POTATO_API_PENDING });

    try {
      const { getProducersJson, getProducersLowerBound, getProducersLimit } = data;
      const limit = +getProducersLimit;
      const json = getProducersJson === 'true';

      const response = await PotatoRpc.get_producers(json, getProducersLowerBound, limit);

      return dispatch({
        type: types.POTATO_API_SUCCESS,
        payload: response,
      });
    } catch (e) {
      return dispatch({
        type: types.POTATO_API_FAILURE,
      });
    }
  },
});
