/*
 * Numeric Input Component
 *   HTML (initial state): <input type="text" class="c-numeric-input" />
 *   Requirement:
 *   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
 *   - if user enters leading zero, or .  when user moves focus away from the input, it should
 *     change to correct format:
 *       .1 ==> 0.1 and 01 => 1
 *   - if user enter invalid character/value, HTML should change to this
 *       <input type="text" class="c-numeric-input c-numeric-input--error" />
 *       <span class="c-numeric-input__error-msg">invalid input</span>
 *   - if user enter valid value and move focus away from the input HTML should change to this:
 *       <input type="text" class="c-numeric-input c-numeric-input--valid" />
 *   - if user focus on the input or user clear value from the input,
 *     HTML should return to initial stage
 *
 * Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
 * red or green border to the input
 * */

const NumericInput = {
  init: () => {
    document.querySelectorAll(".c-numeric-input").forEach((elem) => {
      console.log("TODO: Please see the above requirement for numeric input")

      // Event listener for: when user focus on the input HTML should return to initial stage
      elem.addEventListener("focus", function () {
        elem.value = ""
        elem.className = "c-numeric-input"
        clearErrorID(".c-numeric-input__error-msg")
      })

      function clearErrorID() {
        const errorElement = document.querySelector(
          ".c-numeric-input__error-msg"
        )
        if (errorElement !== null) errorElement.remove()
      }

      /* 
        If need to click off to do any action,
        should be use below at addEventListener: "blur" instead "input".
      */

      // Event listener for: input value change
      elem.addEventListener("input", function () {
        const value = elem.value.trim()

        const errorElement = document.querySelector(
          ".c-numeric-input__error-msg"
        )

        elem.className = "c-numeric-input"

        if (!isValidNumericInput(value)) {
          elem.classList.add("c-numeric-input--error")

          if (errorElement) {
            return
          }

          const studentDiv = document.querySelector(".c-numeric-input")

          studentDiv.insertAdjacentHTML(
            "afterend",
            "<span class='c-numeric-input__error-msg'>invalid input</span>"
          )
        } else {
          elem.classList.add("c-numeric-input--valid")

          clearErrorID(".c-numeric-input__error-msg")

          const dotZero = value.startsWith(".")
            ? (elem.value = "0" + value)
            : false
        }

        function isValidNumericInput(input) {
          return /^-?\d*\.?\d+$/.test(input)
        }
      })
    })
  },
}

document.addEventListener("DOMContentLoaded", NumericInput.init)
