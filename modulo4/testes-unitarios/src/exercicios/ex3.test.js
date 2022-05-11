import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
     test("retorna true para 1 2 1", () => {
        const ehPalindromo = checaPalindromo("1 2 1");
        expect(ehPalindromo).toEqual(true);
      });
});
