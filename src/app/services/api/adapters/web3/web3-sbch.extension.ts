import Web3 from 'web3';
import { Transaction } from 'web3-core';
import helpers from 'web3-core-helpers'
import { Hex } from 'web3-utils';
import { SBCHSource } from '../../node-api.service';

export interface smartBCHWeb3 extends Web3 {
  sbch: {
    queryTxBySrc(from: string, start: Hex | 'latest', end: Hex | 'latest'): Promise<any>;
    queryTxByDst(from: string, start: Hex | 'latest', end: Hex | 'latest'): Promise<any>;
    queryTxByAddr(from: string, start: Hex | 'latest', end: Hex | 'latest'): Promise<any>;
    queryLogs(address: string, data: any[], start: string | 'latest', end: string | 'latest'): Promise<any>;
    getTxListByHeight(blockHeight: string): Promise<Transaction[]>;
    getAddressCount(type: SBCHSource, address: string): Promise<Hex>;
    getSep20AddressCount(type: SBCHSource, sepAddress: string, toAddress: string): Promise<Hex>;
    getCode(address: string):Promise<any>;
  }
}

export var sbch_extensions = {
  property: 'sbch',
  methods: [
    {
      name: 'queryTxBySrc',
      call: 'sbch_queryTxBySrc',
      params: 3,
      inputFormatter: [helpers.formatters.inputAddressFormatter, null, null],
      outputFormatter: null
    },
    {
      name: 'queryTxByDst',
      call: 'sbch_queryTxByDst',
      params: 3,
      inputFormatter: [helpers.formatters.inputAddressFormatter, null, null],
      outputFormatter: null
    },
    {
      name: 'queryTxByAddr',
      call: 'sbch_queryTxByAddr',
      params: 3,
      inputFormatter: [helpers.formatters.inputAddressFormatter, null, null],
      outputFormatter: null
    },
    {
      name: 'queryLogs',
      call: 'sbch_queryLogs',
      params: 4,
      inputFormatter: [helpers.formatters.inputAddressFormatter, null, null, null],
      outputFormatter: null
    },
    {
      name: 'getTxListByHeight',
      call: 'sbch_getTxListByHeight',
      params: 1,
      inputFormatter: [helpers.formatters.inputDefaultBlockNumberFormatter],
      outputFormatter: null
    },
    {
      name: 'getAddressCount',
      call: 'sbch_getAddressCount',
      params: 2,
      inputFormatter: [null, helpers.formatters.inputAddressFormatter],
      outputFormatter: null
    },
    {
      name: 'getSep20AddressCount',
      call: 'sbch_getSep20AddressCount',
      params: 3,
      inputFormatter: [null, helpers.formatters.inputAddressFormatter, helpers.formatters.inputAddressFormatter],
      outputFormatter: null
    }
  ]
} as any;
