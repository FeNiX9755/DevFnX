function $ (selector) {
  if (selector.charAt(0) === '#') {
    return document.querySelector(`${selector}`)
  } else {
    return document.querySelectorAll(`${selector}`)
  }
}
// Append characters to the display
function appendCharacter (character) {
  const display = document.getElementById('display')
  display.value += character
  updatePreview()
}

// Clear the display
function clearDisplay () {
  document.getElementById('display').value = ''
  document.getElementById('preview').value = ''
}

// Delete the last character
function deleteLast () {
  const display = document.getElementById('display')
  display.value = display.value.slice(0, -1)
  updatePreview()
}

// Toggle the sign of the current number
function toggleSign () {
  const display = document.getElementById('display')
  if (display.value) {
    const currentValue = eval(display.value)
    display.value = -currentValue // Change sign
    updatePreview()
  }
}

// Toggle parentheses based on the current input
function toggleParentheses () {
  const display = document.getElementById('display')
  const currentInput = display.value

  // Count open and close parentheses
  const openCount = (currentInput.match(/\(/g) || []).length
  const closeCount = (currentInput.match(/\)/g) || []).length

  // Add ( if there are more close, otherwise add )
  if (openCount > closeCount) {
    display.value += ')'
  } else {
    display.value += '('
  }

  updatePreview()
}

// Calculate the result
function calculate () {
  const display = document.getElementById('display')
  let expression = display.value

  // Handle percentages
  expression = expression.replace(/(\d+)%/g, (match, num) => {
    return `(${num} / 100)`
  })

  try {
    const result = eval(expression)
    display.value = result // Set display to result
    document.getElementById('preview').value = '' // Clear preview
  } catch (e) {
    display.value = 'Error' // Display an error if invalid input
  }
}

// Update the preview as you type
function updatePreview () {
  const display = document.getElementById('display')
  let expression = display.value

  // Handle percentages in the preview
  expression = expression.replace(/(\d+)%/g, (match, num) => {
    return `(${num} / 100)`
  })

  try {
    const previewValue = eval(expression) // Update preview with live calculation
    document.getElementById('preview').value = previewValue
  } catch {
    document.getElementById('preview').value = '' // Clear if invalid expression
  }
}

function toggleTheme () {
  const body = document.body
  const toggleButton = document.getElementById('toggleTheme')
  let calculator = document.getElementsByClassName('calculator')[0];
  if (body.style.backgroundColor === 'rgb(42, 45, 52)') {
    // Switch to light mode
    body.style.backgroundColor = 'white'
    body.classList.remove('dark-mode')
    toggleButton.value = 'Dark Mode' // Change button text
    calculator.style.backgroundColor = '#2a2d34';
  } else {
    // Switch to dark mode
    body.style.backgroundColor = '#2a2d34 '
    body.classList.add('dark-mode')
    toggleButton.value = 'Light Mode' // Change button text
    calculator.style.backgroundColor = 'white';
  }
}
