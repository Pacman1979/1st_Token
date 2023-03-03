// to use the 'expect' function we need to bring in the Chai library...
const { expect } = require('chai');
const { ethers } = require('hardhat');
// the above line pulls the ethers library from the hardhat library...
const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
	let token

	beforeEach(async () => {
		// Code goes here... for running before each 'it' function...
		// instead of duplicating the following lines within the 'it' function..
		// Fetch Token from Blockchain with Ethers.js (2 step process)...
		// This imports/gets the contract itself but...
		const Token = await ethers.getContractFactory('Token')
		// ...to get a "deployed instance of that contract" we need this...
		token = await Token.deploy('Dapp University', 'DAPP', '1000000')
	})

	describe('Deployment', () => {
		const name = 'Dapp University'
		const symbol = 'DAPP'
		const decimals = '18'
		const totalSupply = tokens('1000000')

	// Describe Spending...

	// Describe approving...

	// Describe...
	
	// Tests go inside here...
		it('has correct name', async () => {
		// 2 lines combined into 1 - Read token name and...
		// ...check that name is correct...
			expect(await token.name()).to.equal(name)
		})

		it('has correct symbol', async () => {
			expect(await token.symbol()).to.equal(symbol)
		})

		it('has correct decimals', async () => {
			expect(await token.decimals()).to.equal(decimals)
		})

		it('has correct total supply', async () => {
			expect(await token.totalSupply()).to.equal(totalSupply)
		})
	})
})
