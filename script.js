document.getElementById("button1").addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);
    const operator1 = document.getElementById("operator1").value;
    const operator2 = document.getElementById("operator2").value;

    let result1;
    let result2;

    if (operator1 === "+") {
        result1 = num1 + num2;
    }   else if (operator1 === "-") {
        result1 = num1 - num2;
    }   else if (operator1 === "*") {
        result1 = num1 * num2;
    }   else if (operator1 === "/") {
        result1 = num2 !== 0 ? num1 / num2 : "エラー";
    };

    if (num3 === null || result1 === "エラー") {
        result2 = result1;
    }   else if (operator2 === "+") {
        result2 = result1 + num3;
    }   else if (operator2 === "-") {
        result2 = result1 - num3;
    }   else if (operator2 === "*") {
        result2 = result1 * num3;
    }   else if (operator2 === "/") {
        result2 = num3 !== 0 ? result1 / num3 : "エラー";
    };

    document.getElementById("result").textContent = result2;
})