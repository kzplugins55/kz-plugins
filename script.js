// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Server Optimization Guide Tabs
  const tabs = document.querySelectorAll('.guide-tab');
  const panels = document.querySelectorAll('.guide-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      panels.forEach((p) => {
        p.classList.remove('active');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Copy configuration snippet buttons
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const codeId = btn.getAttribute('data-copy');
      const codeEl = document.getElementById(codeId);
      if (!codeEl) return;

      const textToCopy = codeEl.textContent;
      const originalLabel = btn.textContent;

      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.textContent = 'Copied';
        btn.style.borderColor = '#FF1744';
        setTimeout(() => {
          btn.textContent = originalLabel;
          btn.style.borderColor = '';
        }, 1800);
      } catch {
        btn.textContent = 'Failed';
        setTimeout(() => {
          btn.textContent = originalLabel;
        }, 1800);
      }
    });
  });

  // Interactive Terminal Diagnostic Simulation
  const simulateBtn = document.getElementById('simulateTickBtn');
  const terminalOutput = document.getElementById('terminalOutput');

  if (simulateBtn && terminalOutput) {
    simulateBtn.addEventListener('click', () => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const mspt = (9.8 + Math.random() * 4.2).toFixed(1);
      const p95 = (parseFloat(mspt) + 4.1).toFixed(1);
      const mergedItems = Math.floor(180 + Math.random() * 240);

      terminalOutput.innerHTML = `
        <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-cmd">&gt; kz profile --quick</span></div>
        <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-tag">[KZOptimizer]</span> Sampling 100 server ticks...</div>
        <div class="log-line"><span class="log-time">[${timeStr}]</span> <span class="log-tag">[KZOptimizer]</span> Consolidated <span class="log-ok">${mergedItems}</span> dropped item entities</div>
        <div class="log-block">
          <div><span class="log-accent">━━━ DIAGNOSTIC SNAPSHOT ━━━</span></div>
          <div>Current TPS:       <span class="log-ok">20.00 (100% Tick Health)</span></div>
          <div>MSPT (Avg / P95):  <span class="log-ok">${mspt} ms / ${p95} ms</span></div>
          <div>Hopper Checks:     <span>64% skipped (Full Container Cache)</span></div>
          <div>Chunk GC Queue:    <span>0 pending unloads</span></div>
          <div>Status:            <span class="log-ok">OPTIMAL</span></div>
        </div>
      `;
    });
  }
});