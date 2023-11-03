function evaluateExpression(expression) {
    if (!activeElement) {
      alert("Please select a cell to enter the result.");
      return;
    }
  
    if (activeElement && expression) {
      // Use a regular expression to check for allowed operators (+, -, *, /, %)
      const allowedOperatorsRegex = /^[\d\s()+\-*/%]+$/;
  
      if (allowedOperatorsRegex.test(expression)) {
        try {
          // Use JavaScript's eval() function to evaluate the expression
          const result = eval(expression);
  
          // Update the selected cell with the result
          activeElement.innerText = result;
          state[activeElement.id] = {
            ...state[activeElement.id],
            value: result.toString(),
          };
        } catch (error) {
          //alert("Invalid expression. Please enter a valid mathematical expression.");
        }
      } else {
        alert("Invalid characters in the expression. Please use only +, -, *, /, %, digits, and parentheses.");
      }
    }
  }