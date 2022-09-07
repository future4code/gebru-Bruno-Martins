import { User, performPurchase } from "../src"

test("O saldo maior que o valor", () => {
	const user: User = {
		name: "Bruno",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Bruno",
		balance: 60
	})
})

test("O saldo maior que o valor", () => {
	const user: User = {
		name: "Vinicius",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("O saldo maior que o valor", () => {
	const user: User = {
		name: "Vinicius",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})