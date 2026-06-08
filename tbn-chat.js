/* The Baseball Nerd — chat bubble (knowledge-grounded + Substack CTA)
   Drop-in: add <script src="/tbn-chat.js" defer></script> before </body>.
   Talks to /.netlify/functions/chat. No dependencies. */
(function () {
  "use strict";

  var ENDPOINT = "/.netlify/functions/chat";
  var GREETING =
    "Ask me about how the models work. SPARK, FADE, Bases Gained, ABS IQ+, or any stat like wRC+ or WAR. I answer from The Baseball Nerd's own work.";

  var captured = false;
  var email = "";
  var history = [];

  var css = `
  .tbn-c-fab{position:fixed;bottom:22px;right:22px;width:60px;height:60px;border-radius:50%;
    background:#0a1628;border:2px solid #c9a84c;color:#c9a84c;cursor:pointer;z-index:99998;
    display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.35);
    transition:transform .18s ease, box-shadow .18s ease;font-family:'Bebas Neue',sans-serif}
  .tbn-c-fab:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 12px 30px rgba(0,0,0,.45)}
  .tbn-c-fab svg{width:26px;height:26px}
  .tbn-c-fab .tbn-c-dot{position:absolute;top:-2px;right:-2px;width:14px;height:14px;border-radius:50%;
    background:#D85A30;border:2px solid #0a1628;animation:tbnpulse 1.8s infinite}
  @keyframes tbnpulse{0%,100%{opacity:1}50%{opacity:.4}}

  .tbn-c-panel{position:fixed;bottom:94px;right:22px;width:360px;max-width:calc(100vw - 32px);
    height:520px;max-height:calc(100vh - 130px);background:#0f1e35;border:1px solid #2a3f5f;
    border-radius:16px;z-index:99999;display:none;flex-direction:column;overflow:hidden;
    box-shadow:0 20px 60px rgba(0,0,0,.5);font-family:'Inter',system-ui,sans-serif;
    transform:translateY(12px);opacity:0;transition:transform .2s ease, opacity .2s ease}
  .tbn-c-panel.tbn-show{display:flex;transform:translateY(0);opacity:1}

  .tbn-c-head{background:#0a1628;border-bottom:1px solid #2a3f5f;padding:14px 16px;display:flex;
    align-items:center;gap:10px}
  .tbn-c-head .tbn-c-badge{width:34px;height:34px;border-radius:8px;background:#c9a84c;color:#0a1628;
    display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;
    font-size:20px;flex-shrink:0}
  .tbn-c-head h3{font-family:'Bebas Neue',sans-serif;color:#c9a84c;font-size:18px;letter-spacing:.04em;
    margin:0;line-height:1}
  .tbn-c-head p{color:#8a9bb5;font-size:11px;margin:2px 0 0}
  .tbn-c-x{margin-left:auto;background:none;border:none;color:#8a9bb5;font-size:22px;cursor:pointer;
    line-height:1;padding:2px 6px}
  .tbn-c-x:hover{color:#f5f0e8}

  .tbn-c-log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
  .tbn-c-msg{max-width:84%;padding:9px 12px;border-radius:12px;font-size:13.5px;line-height:1.5;
    word-wrap:break-word;white-space:pre-wrap}
  .tbn-c-bot{align-self:flex-start;background:#1d2e47;color:#f5f0e8;border-bottom-left-radius:4px}
  .tbn-c-user{align-self:flex-end;background:#c9a84c;color:#0a1628;border-bottom-right-radius:4px;font-weight:500}

  .tbn-c-cta{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;margin-top:-2px;
    background:#c9a84c;color:#0a1628;font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:.04em;
    text-decoration:none;padding:9px 16px;border-radius:9px;transition:background .15s}
  .tbn-c-cta:hover{background:#d4b060}

  .tbn-c-typing{align-self:flex-start;display:flex;gap:4px;padding:11px 14px;background:#1d2e47;border-radius:12px}
  .tbn-c-typing span{width:6px;height:6px;border-radius:50%;background:#8a9bb5;animation:tbnbounce 1.2s infinite}
  .tbn-c-typing span:nth-child(2){animation-delay:.15s}
  .tbn-c-typing span:nth-child(3){animation-delay:.3s}
  @keyframes tbnbounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-5px);opacity:1}}

  .tbn-c-foot{border-top:1px solid #2a3f5f;padding:10px;background:#0f1e35}
  .tbn-c-row{display:flex;gap:8px}
  .tbn-c-input{flex:1;background:#162338;border:1px solid #2a3f5f;border-radius:9px;color:#f5f0e8;
    font-size:13.5px;padding:9px 12px;outline:none;font-family:inherit}
  .tbn-c-input:focus{border-color:#c9a84c}
  .tbn-c-input::placeholder{color:#5d6e88}
  .tbn-c-send{background:#c9a84c;color:#0a1628;border:none;border-radius:9px;padding:0 14px;cursor:pointer;
    font-family:'Bebas Neue',sans-serif;font-size:15px;letter-spacing:.04em}
  .tbn-c-send:disabled{opacity:.5;cursor:not-allowed}
  .tbn-c-note{font-size:10.5px;color:#5d6e88;text-align:center;margin-top:6px}
  .tbn-c-err{color:#e24b4a;font-size:11px;text-align:center;margin-top:6px;display:none}
  `;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var fab = el("button", "tbn-c-fab");
  fab.setAttribute("aria-label", "Open chat");
  fab.innerHTML =
    '<span class="tbn-c-dot"></span>' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

  var panel = el("div", "tbn-c-panel");
  panel.innerHTML =
    '<div class="tbn-c-head">' +
      '<div class="tbn-c-badge">TBN</div>' +
      '<div><h3>The Baseball Nerd</h3><p>Numbers, not feelings.</p></div>' +
      '<button class="tbn-c-x" aria-label="Close">&times;</button>' +
    '</div>' +
    '<div class="tbn-c-log"></div>' +
    '<div class="tbn-c-foot">' +
      '<div class="tbn-c-row">' +
        '<input class="tbn-c-input" type="text" placeholder="Ask about a metric or stat...">' +
        '<button class="tbn-c-send">Send</button>' +
      '</div>' +
      '<div class="tbn-c-err"></div>' +
      '<div class="tbn-c-note">Powered by the Baseball Nerd Analytics Suite</div>' +
    '</div>';

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  var log = panel.querySelector(".tbn-c-log");
  var input = panel.querySelector(".tbn-c-input");
  var sendBtn = panel.querySelector(".tbn-c-send");
  var errBox = panel.querySelector(".tbn-c-err");
  var closeBtn = panel.querySelector(".tbn-c-x");
  var open = false;

  function scrollDown() { log.scrollTop = log.scrollHeight; }

  function linkify(t) {
    var d = document.createElement("div");
    d.textContent = t;
    var safe = d.innerHTML;
    return safe.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener" style="color:#e2c570">$1</a>');
  }

  function addMsg(role, text) {
    var m = el("div", "tbn-c-msg " + (role === "user" ? "tbn-c-user" : "tbn-c-bot"));
    m.innerHTML = linkify(text);
    log.appendChild(m);
    scrollDown();
    return m;
  }

  function addCta(cta) {
    var a = document.createElement("a");
    a.className = "tbn-c-cta";
    a.href = cta.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = cta.label + "  \u2192";
    log.appendChild(a);
    scrollDown();
  }

  function showTyping() {
    var t = el("div", "tbn-c-typing");
    t.innerHTML = "<span></span><span></span><span></span>";
    log.appendChild(t);
    scrollDown();
    return t;
  }

  function setErr(msg) {
    errBox.textContent = msg || "";
    errBox.style.display = msg ? "block" : "none";
  }

  function setBusy(b) {
    sendBtn.disabled = b;
    input.disabled = b;
  }

  function toggle(force) {
    open = force != null ? force : !open;
    panel.classList.toggle("tbn-show", open);
    fab.querySelector(".tbn-c-dot").style.display = open ? "none" : "block";
    if (open) {
      if (!log.childElementCount) addMsg("bot", GREETING);
      setTimeout(function () { input.focus(); }, 220);
    }
  }

  function handleSend() {
    var val = input.value.trim();
    if (!val) return;
    setErr("");
    addMsg("user", val);
    input.value = "";
    ask(val);
  }

  function ask(question) {
    history.push({ role: "user", content: question });
    setBusy(true);
    var typing = showTyping();

    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: history,
        email: captured ? email : null,
        capturedNow: false,
        page: location.pathname,
        url: location.href
      })
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        typing.remove();
        setBusy(false);
        if (!res.ok || !res.j || !res.j.reply) {
          setErr("Something jammed on my end. Try again in a sec.");
          history.pop();
          return;
        }
        history.push({ role: "assistant", content: res.j.reply });
        addMsg("bot", res.j.reply);
        if (res.j.cta) addCta(res.j.cta);
        input.focus();
      })
      .catch(function () {
        typing.remove();
        setBusy(false);
        setErr("Connection hiccup. Try again.");
        history.pop();
      });
  }

  fab.addEventListener("click", function () { toggle(); });
  closeBtn.addEventListener("click", function () { toggle(false); });
  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); handleSend(); }
  });
})();
