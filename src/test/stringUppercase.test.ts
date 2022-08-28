import {toUppercase} from "../function/stringUppercase"

test ("check string uppercase function", () =>{
    const result = toUppercase("kiran");
    expect(result).toBe("KIRAN")
})