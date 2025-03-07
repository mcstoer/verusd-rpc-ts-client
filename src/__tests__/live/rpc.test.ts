import { VerusdRpcInterface } from '../../index'

const { RPC_USER, RPC_PASSWORD, RPC_PORT } = require('../../fixtures/conf')

jest.setTimeout(10000)

describe('Makes live API Verusd RPC calls', () => {
  const verusd = new VerusdRpcInterface("iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq", `http://localhost:${RPC_PORT}`, {
    auth: {
      username: RPC_USER,
      password: RPC_PASSWORD
    },
  });

  test('getaddressbalance', async () => {
    expect(
      !!(
        await verusd.getAddressBalance({
          addresses: ["mike@"],
          friendlynames: true,
        })
      ).error
    ).toBe(false);
  });

  test('getaddressutxos', async () => {
    expect(
      !!(
        await verusd.getAddressUtxos({
          addresses: ["mike@"],
          friendlynames: true
        })
      ).error
    ).toBe(false);
  });

  test('getaddressdeltas', async () => {
    expect(
      !!(
        await verusd.getAddressDeltas({
          addresses: ["mike@"],
          friendlynames: true,
          verbosity: 1
        })
      ).error
    ).toBe(false);
  });

  test('getaddressmempool', async () => {
    expect(
      !!(
        await verusd.getAddressMempool({
          addresses: ["mike@"],
          friendlynames: true,
          verbosity: 1
        })
      ).error
    ).toBe(false);
  });

  test("getblock", async () => {
    expect(!!(await verusd.getBlock("1")).error).toBe(false);
  });

  test('getidentity', async () => {
    expect(
      !!(
        await verusd.getIdentity("mike@")
      ).error
    ).toBe(false);
  });

  test('getidentitycontent', async () => {
    expect(
      !!(
        await verusd.getIdentityContent("mike@")
      ).error
    ).toBe(false);
  });

  test('getinfo', async () => {
    expect(
      !!(
        await verusd.getInfo()
      ).error
    ).toBe(false);
  });

  test('getoffers', async () => {
    expect(
      !!(
        await verusd.getOffers("mike@")
      ).error
    ).toBe(false);
  });

  test('getrawtransaction', async () => {
    expect(
      !!(
        await verusd.getRawTransaction(
          "db97193d1a91f047cb14aa32a975be2e953924e1f4f0747cc20981edef6f4c28"
        )
      ).error
    ).toBe(false);
  });

  test("getcurrency", async () => {
    expect(!!(await verusd.getCurrency("VRSCTEST")).error).toBe(false);
  });

  test("getvdxfid", async () => {
    expect(!!(await verusd.getVdxfId("test")).error).toBe(false);
  });

  test("getvdxfid with only vdxfkey parameter", async () => {
    const obj = await verusd.getVdxfId("vrsc.data.type.string", {
      vdxfkey:"test"
    });
    expect(!!(obj.error)).toBe(false);
    const result = {
      "vdxfid": "i4g4wrokfYdJcNoU2oCSFovcsEK58tG7ch",
      "indexid": "x9WBQfEqWrqyEYgVtUrbECT9ttL5zu6c3j",
      "hash160result": "2590a2254668e71bc1f431ad97943be5eb01270d",
      "qualifiedname": {
        "namespace": "iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq",
        "name": "vrsc.data.type.string"
      },
      "bounddata": {
        "vdxfkey": "i8jHXEEYEQ7KEoYe6eKXBib8cUBZ6vjWSd"
      }
    };
    
    expect(obj.result).toStrictEqual(result);
  });

  test("getvdxfid with vdxfkey and uint256 parameters", async () => {
    const obj = await verusd.getVdxfId("vrsc.data.type.string", {
      vdxfkey: "test",
      uint256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
    });
    expect(!!(obj.error)).toBe(false);
    const result = {
      "vdxfid": "iK8aVEDZ3tFqUxji4LNgkH49GZsRHVhKvp",
      "indexid": "xPxgx2eduCUW78cjv22qifagJDtSAyPjUe",
      "hash160result": "bd7f014f4be52aa20349f563d754ec7c313ebcab",
      "qualifiedname": {
        "namespace": "iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq",
        "name": "vrsc.data.type.string"
      },
      "bounddata": {
        "vdxfkey": "i8jHXEEYEQ7KEoYe6eKXBib8cUBZ6vjWSd",
        "uint256": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
      }
    };
    
    expect(obj.result).toStrictEqual(result);
  });

  test("getvdxfid with vdxfkey, uint256 and indexnum parameters", async () => {
    const obj = await verusd.getVdxfId("vrsc.data.type.string", {
      vdxfkey: "test",
      uint256:"9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      indexnum: "2",
    });
    expect(!!(obj.error)).toBe(false);
    const result = {
      "vdxfid": "iLm56VAJk8DHPy8i6fLJXDDJdMqHhNrCPX",
      "indexid": "xRbBZHbPbSRx291jxLzTVbjqf1rJaKKnrC",
      "hash160result": "c7ccc956d49ccad33574864494f9bd1059399bbd",
      "qualifiedname": {
        "namespace": "iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq",
        "name": "vrsc.data.type.string"
      },
      "bounddata": {
        "vdxfkey": "i8jHXEEYEQ7KEoYe6eKXBib8cUBZ6vjWSd",
        "uint256": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        "indexnum": 2
      }
    };
    
    expect(obj.result).toStrictEqual(result);
  });

  test("getcurrencyconverters", async () => {
    expect(!!(await verusd.getCurrencyConverters(["VRSCTEST"])).error).toBe(false);
  });

  test("listcurrencies", async () => {
    expect(!!(await verusd.listCurrencies()).error).toBe(false);
  });

  test("estimateconversion", async () => {
    expect(!!(await verusd.estimateConversion({
      "currency": "VRSCTEST",
      "convertto": "USD",
      "via": "VRSC-USD", 
      "amount": 10
    })).error).toBe(false);
  });

  test("getcurrencyconversionpaths", async () => {
    const VRSCTEST = (await verusd.getCurrency("VRSCTEST")).result
    const paths = await verusd.getCurrencyConversionPaths(VRSCTEST!)

    expect(paths).toBeDefined()
  });

  test("z_getoperationstatus", async () => {
    expect(
      !!(
        await verusd.zGetOperationStatus()
      ).error
    ).toBe(false);
  });
});
