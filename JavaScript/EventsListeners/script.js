 // ---------- addEventListener & event object ----------
  const btn = document.getElementById('btn');
  const log = document.getElementById('log');

  function logMsg(msg){
    // prepend for easier reading
    log.textContent = msg + "\n" + log.textContent;
  }

  // Handler 1 (normal function -> `this` is element)
  function handler1(e) {
    logMsg(`[handler1] type:${e.type} target:${e.target.tagName} this:${this.id}`);
  }
  // Handler 2 (arrow function -> `this` is lexical, not element)
  const handler2 = (e) => {
    logMsg(`[handler2] arrow fn, key info: bubbles=${e.bubbles}, clientX=${e.clientX}`);
  };

  btn.addEventListener('click', handler1);
  btn.addEventListener('click', handler2);

  // mouseover handler to demonstrate adding/removing
  function mouseOverHandler(e) {
    logMsg(`[mouseover] You moved over the button (event type: ${e.type})`);
  }
  btn.addEventListener('mouseover', mouseOverHandler);

  // remove mouseover using stored reference
  document.getElementById('removeBtn').addEventListener('click', function(){
    btn.removeEventListener('mouseover', mouseOverHandler);
    logMsg('Removed mouseover handler');
  });


  // ---------- Propagation (capturing vs bubbling) ----------
  const outer = document.getElementById('outer');
  const inner = document.getElementById('inner');
  const propBtn = document.getElementById('propBtn');

  // Outer capture listener
  outer.addEventListener('click', function(e){
    logMsg('outer (capture) — runs during capture phase');
  }, { capture: true });

  // Button target listener
  propBtn.addEventListener('click', function(e){
    logMsg('button (target)');
    // e.stopPropagation(); // uncomment to stop further bubbling/capturing
  });

  // Inner bubble listener (runs during bubble phase)
  inner.addEventListener('click', function(e){
    logMsg('inner (bubble)');
  });

  // Outer bubble listener
  outer.addEventListener('click', function(e){
    logMsg('outer (bubble)');
  });

  // Example of stopPropagation: if you click button and call e.stopPropagation() in its handler,
  // the inner and outer bubble listeners will not run.

  // ---------- Event Delegation ----------
  const list = document.getElementById('list');
  let nextId = 3;
  document.getElementById('addItem').addEventListener('click', function(){
    const li = document.createElement('li');
    li.dataset.id = nextId;
    li.textContent = 'Item ' + nextId;
    list.appendChild(li);
    nextId++;
  });

  // Single listener on parent ul handles clicks for all li children (works for future li too)
  list.addEventListener('click', function(e){
    const li = e.target.closest('li');
    if (!li || !list.contains(li)) return;
    logMsg(`[delegation] clicked li id=${li.dataset.id} text="${li.textContent}"`);
  });

  // ---------- Form submit + preventDefault ----------
  const form = document.getElementById('demoForm');
  form.addEventListener('submit', function(e){
    e.preventDefault(); // stop actual submit/navigation
    const name = document.getElementById('name').value.trim();
    if (!name) {
      logMsg('[form] name is required — prevented submit');
      return;
    }
    logMsg(`[form] validated name="${name}" — would submit now`);
    // if you wanted to actually submit programmatically, do form.submit()
  });

  // ---------- stopImmediatePropagation demo (optional) ----------
  // Add two handlers on the same element; the second won't run if first calls stopImmediatePropagation
  const demo = document.createElement('button');
  demo.textContent = 'StopImmediatePropagation demo';
  demo.style.display = 'block';
  demo.style.marginTop = '10px';
  document.body.appendChild(demo);

  demo.addEventListener('click', function(e){
    logMsg('[stopImmediate] handler A - calling stopImmediatePropagation()');
    e.stopImmediatePropagation();
  });
  demo.addEventListener('click', function(e){
    logMsg('[stopImmediate] handler B - will NOT run because A stopped it');
  });