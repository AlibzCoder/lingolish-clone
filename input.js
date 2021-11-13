const WORD_INPUT_CHANGE = 'WORD_INPUT_CHANGE'
function getInputValues() {
  return Object.assign([], document.querySelectorAll('.inputs input'))
    .map((input) => input.value.toUpperCase());
}

function clearInput() {
  document.querySelectorAll('.inputs input').forEach(function (input) {
    input.value = ''
  });
  document.dispatchEvent(new CustomEvent(WORD_INPUT_CHANGE, { detail: '' }))
}
function disableAllInputs(){
  document.querySelectorAll('.inputs input').forEach(function (input) {
    input.setAttribute("disabled","disabled")
  });
}
function enableAllInputs(){
  document.querySelectorAll('.inputs input').forEach(function (input) {
    input.removeAttribute("disabled")
  });
}

function initWordInput() {
  const KEY_CODE = {
    backspace: 8,
    left: 37,
    up: 38,
    right: 39,
    down: 40
  };
  let inputs = document.querySelectorAll('.inputs input');
  inputs.forEach(function (input) {

    input.addEventListener('focus', function (e) {
      e.target.select(e);
    })

    function onChange(e) {
      const index = parseInt(e.target.dataset.id);
      const value = e.target.value;
      if (value.length > 0) {
        let next = inputs[index + 1];
        if (next) {
          next.focus();
          next.select();
        }
      }
      document.dispatchEvent(new CustomEvent(WORD_INPUT_CHANGE, { detail: getInputValues().join('') }))
    }
    input.addEventListener('input', onChange);

    input.addEventListener('keydown', function (e) {
      if(e.target.disabled){
        e.preventDefault();
        return;
      }


      const index = parseInt(e.target.dataset.id);
      const prevIndex = index - 1;
      const nextIndex = index + 1;
      const prev = inputs[prevIndex];
      const next = inputs[nextIndex];
      switch (e.keyCode) {
        case KEY_CODE.backspace:
          e.preventDefault();
          let deletedvalinput = inputs[e.target.value === '' ? index - 1 : index];
          if (deletedvalinput) {
            deletedvalinput.value = '';
            document.dispatchEvent(new CustomEvent(WORD_INPUT_CHANGE, { detail: getInputValues().join('') }))
          }
          if (prev) { prev.focus(); }
          break;
        case KEY_CODE.left:
          e.preventDefault();
          if (prev) {
            prev.focus();
          }
          break;
        case KEY_CODE.right:
          e.preventDefault();
          if (next) {
            next.focus();
          }
          break;
        case KEY_CODE.up:
        case KEY_CODE.down:
          e.preventDefault();
          break;
      }
    });



  })
}
