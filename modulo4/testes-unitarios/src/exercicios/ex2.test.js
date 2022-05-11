import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'após a sopa'", () => {
    const ehpalidromo = checaPalindromo("apos a sopa")
    expect(ehpalidromo).toEqual(true)
  })

  it("retorna true para 'reviver'", () => {
    const ehpalidromo = checaPalindromo("reviver")
    expect(ehpalidromo).toEqual(true)
  })

  it("retorna true para 'Luz azul'", () => {
    const ehpalidromo = checaPalindromo("luz azul")
    expect(ehpalidromo).toEqual(true);
  })

  it("retorna true para 'ana'", () => {
    const ehPalindromo = checaPalindromo("ana");
    expect(ehPalindromo).toEqual(true);
  });
});
