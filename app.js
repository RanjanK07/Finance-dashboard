
const STATE = {
  role: 'admin',
  theme: 'dark',
  transactions: [],
  filters: { search: '', type: '', category: '' },
  sort: 'date-desc',
  editingId: null,
  charts: {},
  activeSection: 'dashboard',
  activePeriod: '6m',
};

// ── Category Config ──────────────────────────────────────────
const CATEGORIES = {
  Food:          { emoji: '🍜', color: '#ff9e40' },
  Transport:     { emoji: '🚌', color: '#5b8dee' },
  Housing:       { emoji: '🏠', color: '#b480dc' },
  Entertainment: { emoji: '🎬', color: '#f05077' },
  Healthcare:    { emoji: '⚕️', color: '#4abe8a' },
  Shopping:      { emoji: '🛍️', color: '#f5c41e' },
  Utilities:     { emoji: '💡', color: '#50c8d0' },
  Salary:        { emoji: '💼', color: '#4abe8a' },
  Freelance:     { emoji: '💻', color: '#c9a84c' },
  Investment:    { emoji: '📈', color: '#5b8dee' },
  Other:         { emoji: '📦', color: '#8c8c8c' },
};

// ── Seed Data ────────────────────────────────────────────────
function generateSeedData() {
  const now = new Date();
  const txns = [
    // April 2025
    { desc: 'Monthly Salary',        amount: 5800, type: 'income',  category: 'Salary',        date: dateStr(now, -1, 1)  },
    { desc: 'Grocery Run',           amount: 142,  type: 'expense', category: 'Food',          date: dateStr(now, -1, 5)  },
    { desc: 'Netflix Subscription',  amount: 15,   type: 'expense', category: 'Entertainment', date: dateStr(now, -1, 6)  },
    { desc: 'Electricity Bill',      amount: 88,   type: 'expense', category: 'Utilities',     date: dateStr(now, -1, 8)  },
    { desc: 'Freelance Project',     amount: 950,  type: 'income',  category: 'Freelance',     date: dateStr(now, -1, 12) },
    { desc: 'Metro Card Top-up',     amount: 50,   type: 'expense', category: 'Transport',     date: dateStr(now, -1, 14) },
    { desc: 'Restaurant Dinner',     amount: 78,   type: 'expense', category: 'Food',          date: dateStr(now, -1, 16) },
    { desc: 'Gym Membership',        amount: 45,   type: 'expense', category: 'Healthcare',    date: dateStr(now, -1, 18) },
    { desc: 'Amazon Shopping',       amount: 210,  type: 'expense', category: 'Shopping',      date: dateStr(now, -1, 20) },
    { desc: 'Dividend Income',       amount: 320,  type: 'income',  category: 'Investment',    date: dateStr(now, -1, 22) },
    { desc: 'Rent Payment',          amount: 1400, type: 'expense', category: 'Housing',       date: dateStr(now, -1, 25) },
    { desc: 'Coffee Shop',           amount: 22,   type: 'expense', category: 'Food',          date: dateStr(now, -1, 28) },
    // May 2025
    { desc: 'Monthly Salary',        amount: 5800, type: 'income',  category: 'Salary',        date: dateStr(now, -2, 1)  },
    { desc: 'Supermarket',           amount: 165,  type: 'expense', category: 'Food',          date: dateStr(now, -2, 4)  },
    { desc: 'Spotify',               amount: 10,   type: 'expense', category: 'Entertainment', date: dateStr(now, -2, 5)  },
    { desc: 'Water Bill',            amount: 42,   type: 'expense', category: 'Utilities',     date: dateStr(now, -2, 7)  },
    { desc: 'Taxi Rides',            amount: 68,   type: 'expense', category: 'Transport',     date: dateStr(now, -2, 10) },
    { desc: 'Freelance Design',      amount: 1200, type: 'income',  category: 'Freelance',     date: dateStr(now, -2, 12) },
    { desc: 'Doctor Visit',          amount: 120,  type: 'expense', category: 'Healthcare',    date: dateStr(now, -2, 15) },
    { desc: 'Rent Payment',          amount: 1400, type: 'expense', category: 'Housing',       date: dateStr(now, -2, 25) },
    { desc: 'Online Course',         amount: 59,   type: 'expense', category: 'Entertainment', date: dateStr(now, -2, 18) },
    { desc: 'Clothing Store',        amount: 185,  type: 'expense', category: 'Shopping',      date: dateStr(now, -2, 22) },
    // June 2025
    { desc: 'Monthly Salary',        amount: 5800, type: 'income',  category: 'Salary',        date: dateStr(now, -3, 1)  },
    { desc: 'Grocery Shopping',      amount: 130,  type: 'expense', category: 'Food',          date: dateStr(now, -3, 3)  },
    { desc: 'Internet Bill',         amount: 55,   type: 'expense', category: 'Utilities',     date: dateStr(now, -3, 6)  },
    { desc: 'Bus Pass',              amount: 45,   type: 'expense', category: 'Transport',     date: dateStr(now, -3, 9)  },
    { desc: 'Bonus Payment',         amount: 1500, type: 'income',  category: 'Salary',        date: dateStr(now, -3, 10) },
    { desc: 'Movie Night',           amount: 35,   type: 'expense', category: 'Entertainment', date: dateStr(now, -3, 14) },
    { desc: 'Pharmacy',              amount: 48,   type: 'expense', category: 'Healthcare',    date: dateStr(now, -3, 16) },
    { desc: 'Rent Payment',          amount: 1400, type: 'expense', category: 'Housing',       date: dateStr(now, -3, 25) },
    { desc: 'Electronics',           amount: 340,  type: 'expense', category: 'Shopping',      date: dateStr(now, -3, 20) },
    { desc: 'Investment Return',     amount: 480,  type: 'income',  category: 'Investment',    date: dateStr(now, -3, 28) },
    // July 2025
    { desc: 'Monthly Salary',        amount: 5800, type: 'income',  category: 'Salary',        date: dateStr(now, -4, 1)  },
    { desc: 'Weekly Groceries',      amount: 155,  type: 'expense', category: 'Food',          date: dateStr(now, -4, 5)  },
    { desc: 'Gas Bill',              amount: 72,   type: 'expense', category: 'Utilities',     date: dateStr(now, -4, 7)  },
    { desc: 'Freelance Consulting',  amount: 700,  type: 'income',  category: 'Freelance',     date: dateStr(now, -4, 11) },
    { desc: 'Gym Membership',        amount: 45,   type: 'expense', category: 'Healthcare',    date: dateStr(now, -4, 14) },
    { desc: 'Concert Tickets',       amount: 120,  type: 'expense', category: 'Entertainment', date: dateStr(now, -4, 17) },
    { desc: 'Rent Payment',          amount: 1400, type: 'expense', category: 'Housing',       date: dateStr(now, -4, 25) },
    { desc: 'Shoes',                 amount: 95,   type: 'expense', category: 'Shopping',      date: dateStr(now, -4, 27) },
    // Aug 2025
    { desc: 'Monthly Salary',        amount: 5800, type: 'income',  category: 'Salary',        date: dateStr(now, -5, 1)  },
    { desc: 'Farmers Market',        amount: 98,   type: 'expense', category: 'Food',          date: dateStr(now, -5, 4)  },
    { desc: 'Phone Bill',            amount: 60,   type: 'expense', category: 'Utilities',     date: dateStr(now, -5, 6)  },
    { desc: 'Ride Share',            amount: 42,   type: 'expense', category: 'Transport',     date: dateStr(now, -5, 10) },
    { desc: 'Freelance App Dev',     amount: 2000, type: 'income',  category: 'Freelance',     date: dateStr(now, -5, 12) },
    { desc: 'Dental Checkup',        amount: 200,  type: 'expense', category: 'Healthcare',    date: dateStr(now, -5, 18) },
    { desc: 'Streaming Services',    amount: 30,   type: 'expense', category: 'Entertainment', date: dateStr(now, -5, 20) },
    { desc: 'Rent Payment',          amount: 1400, type: 'expense', category: 'Housing',       date: dateStr(now, -5, 25) },
    // Sep 2025 (current-ish)
    { desc: 'Monthly Salary',        amount: 6200, type: 'income',  category: 'Salary',        date: dateStr(now, 0, 1)   },
    { desc: 'Weekly Groceries',      amount: 178,  type: 'expense', category: 'Food',          date: dateStr(now, 0, 5)   },
    { desc: 'Electric & Gas',        amount: 105,  type: 'expense', category: 'Utilities',     date: dateStr(now, 0, 7)   },
    { desc: 'Freelance Invoice',     amount: 1500, type: 'income',  category: 'Freelance',     date: dateStr(now, 0, 9)   },
    { desc: 'Metro Pass',            amount: 55,   type: 'expense', category: 'Transport',     date: dateStr(now, 0, 12)  },
    { desc: 'Restaurant Lunch',      amount: 34,   type: 'expense', category: 'Food',          date: dateStr(now, 0, 14)  },
    { desc: 'Gym Membership',        amount: 45,   type: 'expense', category: 'Healthcare',    date: dateStr(now, 0, 15)  },
    { desc: 'Book Purchase',         amount: 28,   type: 'expense', category: 'Entertainment', date: dateStr(now, 0, 18)  },
    { desc: 'Dividend Payment',      amount: 410,  type: 'income',  category: 'Investment',    date: dateStr(now, 0, 20)  },
    { desc: 'Rent Payment',          amount: 1400, type: 'expense', category: 'Housing',       date: dateStr(now, 0, 25)  },
    { desc: 'Wardrobe Refresh',      amount: 230,  type: 'expense', category: 'Shopping',      date: dateStr(now, 0, 28)  },
  ];

  return txns.map((t, i) => ({ ...t, id: `txn_${i + 1}` }));
}

function dateStr(base, monthOffset, day) {
  const d = new Date(base);
  d.setMonth(d.getMonth() + monthOffset);
  d.setDate(day);
  return d.toISOString().split('T')[0];
}

// ── Persistence ──────────────────────────────────────────────
function saveState() {
  try {
    localStorage.setItem('aurum_txns', JSON.stringify(STATE.transactions));
    localStorage.setItem('aurum_role', STATE.role);
    localStorage.setItem('aurum_theme', STATE.theme);
  } catch (e) { /* ignore */ }
}

function loadState() {
  try {
    const txns = localStorage.getItem('aurum_txns');
    if (txns) STATE.transactions = JSON.parse(txns);
    else STATE.transactions = generateSeedData();
    const role = localStorage.getItem('aurum_role');
    if (role) STATE.role = role;
    const theme = localStorage.getItem('aurum_theme');
    if (theme) STATE.theme = theme;
  } catch (e) {
    STATE.transactions = generateSeedData();
  }
}

// ── Utils ────────────────────────────────────────────────────
function fmt(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(n);
}

function fmtDate(d) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtDateShort(d) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function uid() {
  return 'txn_' + Math.random().toString(36).slice(2, 10) + Date.now();
}

function getCssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// ── Calculations ─────────────────────────────────────────────
function calcSummary(txns = STATE.transactions) {
  const income  = txns.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = txns.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;
  const savings = income > 0 ? ((balance / income) * 100) : 0;
  return { income, expense, balance, savings };
}

function calcByCategory(txns = STATE.transactions) {
  const expenses = txns.filter(t => t.type === 'expense');
  const map = {};
  expenses.forEach(t => { map[t.category] = (map[t.category] || 0) + t.amount; });
  return Object.entries(map).sort((a,b) => b[1] - a[1]);
}

function getMonthlyData() {
  const months = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now);
    d.setMonth(d.getMonth() - i);
    const label = d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    const y = d.getFullYear(), m = d.getMonth();
    const monthTxns = STATE.transactions.filter(t => {
      const td = new Date(t.date + 'T00:00:00');
      return td.getFullYear() === y && td.getMonth() === m;
    });
    const { income, expense, balance } = calcSummary(monthTxns);
    months.push({ label, income, expense, balance });
  }
  return months;
}

function getPeriodTxns(period) {
  const now = new Date();
  const monthsBack = period === '1m' ? 1 : period === '3m' ? 3 : 6;
  const cutoff = new Date(now);
  cutoff.setMonth(cutoff.getMonth() - monthsBack);
  return STATE.transactions.filter(t => new Date(t.date + 'T00:00:00') >= cutoff);
}

// ── Render Summary Cards ─────────────────────────────────────
function renderSummary() {
  const { income, expense, balance, savings } = calcSummary();
  const incomeTxns  = STATE.transactions.filter(t => t.type === 'income').length;
  const expenseTxns = STATE.transactions.filter(t => t.type === 'expense').length;

  document.getElementById('totalBalance').textContent = fmt(balance);
  document.getElementById('totalIncome').textContent  = fmt(income);
  document.getElementById('totalExpense').textContent = fmt(expense);
  document.getElementById('savingsRate').textContent  = savings.toFixed(1) + '%';
  document.getElementById('incomeCount').textContent  = incomeTxns + ' transactions';
  document.getElementById('expenseCount').textContent = expenseTxns + ' transactions';

  const monthly = getMonthlyData();
  const prevBalance = monthly[4]?.balance || 0;
  const currBalance = monthly[5]?.balance || balance;
  const pct = prevBalance !== 0 ? (((currBalance - prevBalance) / Math.abs(prevBalance)) * 100) : 0;
  const dir = pct >= 0 ? '↑' : '↓';
  document.getElementById('balanceChange').textContent = `${dir} ${Math.abs(pct).toFixed(1)}% from last month`;
  document.getElementById('savingsSub').textContent = `of ${fmt(income)} income`;
}

// ── Trend Chart ──────────────────────────────────────────────
function renderTrendChart(period = '6m') {
  const ptxns = getPeriodTxns(period);
  const monthsBack = period === '1m' ? 1 : period === '3m' ? 3 : 6;
  const now = new Date();
  const labels = [], balances = [];

  for (let i = monthsBack - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setMonth(d.getMonth() - i);
    const label = d.toLocaleDateString('en-US', { month: 'short' });
    const y = d.getFullYear(), m = d.getMonth();
    const monthTxns = ptxns.filter(t => {
      const td = new Date(t.date + 'T00:00:00');
      return td.getFullYear() === y && td.getMonth() === m;
    });
    const { balance } = calcSummary(monthTxns);
    labels.push(label);
    balances.push(balance);
  }

  const gold = getCssVar('--gold');
  const ctx = document.getElementById('trendChart').getContext('2d');

  if (STATE.charts.trend) STATE.charts.trend.destroy();

  const gradient = ctx.createLinearGradient(0, 0, 0, 220);
  gradient.addColorStop(0, 'rgba(201,168,76,0.3)');
  gradient.addColorStop(1, 'rgba(201,168,76,0)');

  STATE.charts.trend = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: balances,
        borderColor: gold,
        borderWidth: 2,
        backgroundColor: gradient,
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: gold,
        pointBorderColor: 'transparent',
        pointHoverRadius: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...tooltipStyle() } },
      scales: {
        x: { ...axisStyle() },
        y: { ...axisStyle(), ticks: { ...axisStyle().ticks, callback: v => '$' + (v/1000).toFixed(0) + 'k' } }
      }
    }
  });
}

// ── Donut Chart ──────────────────────────────────────────────
function renderDonutChart() {
  const cats = calcByCategory().slice(0, 6);
  if (!cats.length) return;

  const labels  = cats.map(([c]) => c);
  const data    = cats.map(([,v]) => v);
  const colors  = cats.map(([c]) => CATEGORIES[c]?.color || '#8c8c8c');
  const total   = data.reduce((a,b) => a+b, 0);

  const ctx = document.getElementById('donutChart').getContext('2d');
  if (STATE.charts.donut) STATE.charts.donut.destroy();

  STATE.charts.donut = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 6 }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: { legend: { display: false }, tooltip: { ...tooltipStyle() } }
    }
  });

  const legend = document.getElementById('donutLegend');
  legend.innerHTML = cats.map(([cat, amt]) => `
    <div class="legend-item">
      <div class="legend-left">
        <div class="legend-dot" style="background:${CATEGORIES[cat]?.color || '#888'}"></div>
        ${cat}
      </div>
      <div class="legend-right">${((amt/total)*100).toFixed(0)}%</div>
    </div>
  `).join('');
}

// ── Monthly Compare Chart ────────────────────────────────────
function renderMonthlyCompare() {
  const monthly = getMonthlyData();
  const labels  = monthly.map(m => m.label);
  const income  = monthly.map(m => m.income);
  const expense = monthly.map(m => m.expense);

  const ctx = document.getElementById('monthlyCompareChart').getContext('2d');
  if (STATE.charts.monthly) STATE.charts.monthly.destroy();

  STATE.charts.monthly = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Income',  data: income,  backgroundColor: 'rgba(74,190,138,0.7)',  borderRadius: 4 },
        { label: 'Expense', data: expense, backgroundColor: 'rgba(224,92,92,0.7)',   borderRadius: 4 },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { ...legendStyle() }, tooltip: { ...tooltipStyle() } },
      scales: {
        x: { ...axisStyle() },
        y: { ...axisStyle(), ticks: { ...axisStyle().ticks, callback: v => '$' + (v/1000).toFixed(0) + 'k' } }
      }
    }
  });
}

// ── Category Bar Chart ───────────────────────────────────────
function renderCategoryBar() {
  const cats = calcByCategory().slice(0, 8);
  if (!cats.length) return;

  const labels = cats.map(([c]) => c);
  const data   = cats.map(([,v]) => v);
  const colors = cats.map(([c]) => CATEGORIES[c]?.color || '#8c8c8c');

  const ctx = document.getElementById('categoryBarChart').getContext('2d');
  if (STATE.charts.catBar) STATE.charts.catBar.destroy();

  STATE.charts.catBar = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderRadius: 4 }] },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...tooltipStyle() } },
      scales: {
        x: { ...axisStyle(), ticks: { ...axisStyle().ticks, callback: v => '$' + v } },
        y: { ...axisStyle() }
      }
    }
  });
}

// ── Chart Helpers ────────────────────────────────────────────
function tooltipStyle() {
  return {
    backgroundColor: getCssVar('--bg-2'),
    borderColor: getCssVar('--border'),
    borderWidth: 1,
    titleColor: getCssVar('--text'),
    bodyColor: getCssVar('--text-2'),
    padding: 10,
    callbacks: {
      label: ctx => ' ' + fmt(ctx.parsed.y ?? ctx.parsed.x ?? ctx.raw)
    }
  };
}

function axisStyle() {
  return {
    border: { display: false },
    grid: { color: getCssVar('--border'), drawBorder: false },
    ticks: { color: getCssVar('--text-3'), font: { family: 'DM Mono', size: 11 } }
  };
}

function legendStyle() {
  return {
    labels: { color: getCssVar('--text-2'), font: { family: 'Instrument Sans', size: 12 }, boxWidth: 10, boxHeight: 10 }
  };
}

// ── Recent Transactions ──────────────────────────────────────
function renderRecentTxns() {
  const recent = [...STATE.transactions].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 6);
  const el = document.getElementById('recentTxnList');

  if (!recent.length) {
    el.innerHTML = '<div class="empty-state"><span class="empty-icon">⌀</span><p>No transactions yet</p></div>';
    return;
  }

  el.innerHTML = recent.map(t => `
    <div class="txn-row">
      <div class="txn-cat-dot cat-${t.category}">${CATEGORIES[t.category]?.emoji || '•'}</div>
      <div class="txn-info">
        <div class="txn-desc">${escHtml(t.desc)}</div>
        <div class="txn-meta">${fmtDateShort(t.date)} · ${t.category}</div>
      </div>
      <span class="txn-type-badge badge-${t.type}">${t.type}</span>
      <div class="txn-amount ${t.type}">${t.type === 'income' ? '+' : '−'}${fmt(t.amount)}</div>
    </div>
  `).join('');
}

// ── Transactions Table ───────────────────────────────────────
function getFilteredTxns() {
  let txns = [...STATE.transactions];
  const { search, type, category } = STATE.filters;

  if (search)   txns = txns.filter(t => t.desc.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase()));
  if (type)     txns = txns.filter(t => t.type === type);
  if (category) txns = txns.filter(t => t.category === category);

  txns.sort((a, b) => {
    switch (STATE.sort) {
      case 'date-asc':    return a.date.localeCompare(b.date);
      case 'date-desc':   return b.date.localeCompare(a.date);
      case 'amount-desc': return b.amount - a.amount;
      case 'amount-asc':  return a.amount - b.amount;
      default: return 0;
    }
  });

  return txns;
}

function renderTxnTable() {
  const txns = getFilteredTxns();
  const isAdmin = STATE.role === 'admin';
  const tbody = document.getElementById('txnTableBody');
  const empty = document.getElementById('txnEmpty');
  const count = document.getElementById('txnCount');

  count.textContent = `${txns.length} transaction${txns.length !== 1 ? 's' : ''}`;

  if (!txns.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  tbody.innerHTML = txns.map(t => `
    <tr>
      <td class="td-date">${fmtDate(t.date)}</td>
      <td class="td-desc">
        <span class="txn-cat-dot cat-${t.category}" style="display:inline-flex;width:28px;height:28px;border-radius:8px;align-items:center;justify-content:center;font-size:13px;vertical-align:middle;margin-right:8px;">${CATEGORIES[t.category]?.emoji || '•'}</span>
        ${escHtml(t.desc)}
      </td>
      <td class="td-category">${t.category}</td>
      <td><span class="txn-type-badge badge-${t.type}">${t.type}</span></td>
      <td class="td-amount txn-amount ${t.type}">${t.type === 'income' ? '+' : '−'}${fmt(t.amount)}</td>
      <td class="td-actions admin-only">
        ${isAdmin ? `
          <button class="action-btn" onclick="openEditModal('${t.id}')" title="Edit">✎</button>
          <button class="action-btn delete" onclick="deleteTxn('${t.id}')" title="Delete">✕</button>
        ` : ''}
      </td>
    </tr>
  `).join('');
}

function populateCategoryFilter() {
  const cats = [...new Set(STATE.transactions.map(t => t.category))].sort();
  const sel = document.getElementById('filterCategory');
  const current = sel.value;
  sel.innerHTML = '<option value="">All Categories</option>' + cats.map(c => `<option value="${c}"${c===current?' selected':''}>${c}</option>`).join('');
}

// ── Insights ─────────────────────────────────────────────────
function renderInsights() {
  const cats = calcByCategory();
  const [topCat, topAmt] = cats[0] || ['—', 0];
  document.getElementById('topCategory').textContent = topCat;
  document.getElementById('topCategoryAmt').textContent = topAmt ? fmt(topAmt) + ' total spent' : '';

  // Avg daily spend this month
  const now = new Date();
  const thisMonth = STATE.transactions.filter(t => {
    const td = new Date(t.date + 'T00:00:00');
    return td.getFullYear() === now.getFullYear() && td.getMonth() === now.getMonth() && t.type === 'expense';
  });
  const totalExpense = thisMonth.reduce((s,t) => s + t.amount, 0);
  const daysElapsed = now.getDate();
  document.getElementById('avgDaily').textContent = fmt(daysElapsed ? totalExpense / daysElapsed : 0);

  // Largest transaction
  const largest = [...STATE.transactions].sort((a,b) => b.amount - a.amount)[0];
  if (largest) {
    document.getElementById('largestTxn').textContent = fmt(largest.amount);
    document.getElementById('largestTxnDesc').textContent = largest.desc + ' · ' + fmtDateShort(largest.date);
  }

  // Income/expense ratio
  const { income, expense } = calcSummary();
  const ratio = expense > 0 ? (income / expense).toFixed(2) : '∞';
  document.getElementById('incomeExpenseRatio').textContent = ratio + 'x';
  document.getElementById('incomeExpenseRatioSub').textContent = 'income to expense ratio';

  // Observations
  const monthly = getMonthlyData();
  const curr = monthly[5], prev = monthly[4];
  const observations = [];

  if (curr && prev) {
    const expChange = curr.expense - prev.expense;
    const dir = expChange > 0 ? 'increased' : 'decreased';
    observations.push({ icon: expChange > 0 ? '⚠️' : '✅', text: `Your spending ${dir} by ${fmt(Math.abs(expChange))} compared to last month.` });
  }

  if (topCat && topAmt) {
    const pct = income > 0 ? ((topAmt / income) * 100).toFixed(0) : 0;
    observations.push({ icon: '📊', text: `<strong>${topCat}</strong> is your biggest expense category at ${fmt(topAmt)}, representing ${pct}% of your income.` });
  }

  const savPct = income > 0 ? ((income - expense) / income * 100) : 0;
  if (savPct >= 20) {
    observations.push({ icon: '🌟', text: `Great savings discipline! You're saving ${savPct.toFixed(1)}% of your income — above the recommended 20%.` });
  } else {
    observations.push({ icon: '💡', text: `Your current savings rate is ${savPct.toFixed(1)}%. Financial experts recommend saving at least 20% of your income.` });
  }

  const freelance = STATE.transactions.filter(t => t.category === 'Freelance').reduce((s,t) => s + t.amount, 0);
  if (freelance > 0) {
    const pct = income > 0 ? ((freelance / income) * 100).toFixed(0) : 0;
    observations.push({ icon: '💼', text: `Freelance income contributes ${fmt(freelance)} (${pct}%) of your total earnings — a strong secondary income stream.` });
  }

  const obsEl = document.getElementById('observationsList');
  obsEl.innerHTML = observations.map(o => `
    <div class="obs-item">
      <span class="obs-icon">${o.icon}</span>
      <span>${o.text}</span>
    </div>
  `).join('');
}

// ── Modal ────────────────────────────────────────────────────
function openAddModal() {
  STATE.editingId = null;
  document.getElementById('modalTitle').textContent = 'Add Transaction';
  document.getElementById('fDesc').value = '';
  document.getElementById('fAmount').value = '';
  document.getElementById('fType').value = 'expense';
  document.getElementById('fCategory').value = 'Food';
  document.getElementById('fDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('formError').textContent = '';
  document.getElementById('modalBackdrop').classList.add('active');
}

function openEditModal(id) {
  const t = STATE.transactions.find(x => x.id === id);
  if (!t) return;
  STATE.editingId = id;
  document.getElementById('modalTitle').textContent = 'Edit Transaction';
  document.getElementById('fDesc').value = t.desc;
  document.getElementById('fAmount').value = t.amount;
  document.getElementById('fType').value = t.type;
  document.getElementById('fCategory').value = t.category;
  document.getElementById('fDate').value = t.date;
  document.getElementById('formError').textContent = '';
  document.getElementById('modalBackdrop').classList.add('active');
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('active');
  STATE.editingId = null;
}

function saveModal() {
  const desc   = document.getElementById('fDesc').value.trim();
  const amount = parseFloat(document.getElementById('fAmount').value);
  const type   = document.getElementById('fType').value;
  const cat    = document.getElementById('fCategory').value;
  const date   = document.getElementById('fDate').value;
  const errEl  = document.getElementById('formError');

  if (!desc)          { errEl.textContent = 'Description is required.'; return; }
  if (!amount || amount <= 0) { errEl.textContent = 'Enter a valid amount.'; return; }
  if (!date)          { errEl.textContent = 'Date is required.'; return; }
  errEl.textContent = '';

  if (STATE.editingId) {
    const idx = STATE.transactions.findIndex(t => t.id === STATE.editingId);
    if (idx !== -1) STATE.transactions[idx] = { id: STATE.editingId, desc, amount, type, category: cat, date };
  } else {
    STATE.transactions.unshift({ id: uid(), desc, amount, type, category: cat, date });
  }

  saveState();
  closeModal();
  renderAll();
}

function deleteTxn(id) {
  if (!confirm('Delete this transaction?')) return;
  STATE.transactions = STATE.transactions.filter(t => t.id !== id);
  saveState();
  renderAll();
}

// ── Section Nav ──────────────────────────────────────────────
function goToSection(name) {
  STATE.activeSection = name;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + name)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.section === name);
  });
  const titles = { dashboard: 'Overview', transactions: 'Transactions', insights: 'Insights' };
  document.getElementById('pageTitle').textContent = titles[name] || name;

  if (name === 'transactions') { renderTxnTable(); populateCategoryFilter(); }
  if (name === 'insights') { renderInsights(); renderMonthlyCompare(); renderCategoryBar(); }
}

// ── Export ───────────────────────────────────────────────────
function exportCSV() {
  const txns = getFilteredTxns();
  const header = ['Date', 'Description', 'Category', 'Type', 'Amount'];
  const rows = txns.map(t => [t.date, `"${t.desc.replace(/"/g,'""')}"`, t.category, t.type, t.amount]);
  const csv = [header, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'aurum-transactions.csv';
  a.click();
}

// ── Role ─────────────────────────────────────────────────────
function applyRole(role) {
  STATE.role = role;
  document.body.classList.toggle('role-viewer', role === 'viewer');
  document.getElementById('roleBadge').textContent = role.charAt(0).toUpperCase() + role.slice(1);
  saveState();
}

// ── Theme ────────────────────────────────────────────────────
function applyTheme(theme) {
  STATE.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  // Rebuild charts so they pick up new CSS variables
  setTimeout(() => {
    renderTrendChart(STATE.activePeriod);
    renderDonutChart();
    if (STATE.activeSection === 'insights') { renderMonthlyCompare(); renderCategoryBar(); }
  }, 50);
  saveState();
}

// ── Helpers ──────────────────────────────────────────────────
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Full Render ──────────────────────────────────────────────
function renderAll() {
  renderSummary();
  renderRecentTxns();
  renderTrendChart(STATE.activePeriod);
  renderDonutChart();
  if (STATE.activeSection === 'transactions') { renderTxnTable(); populateCategoryFilter(); }
  if (STATE.activeSection === 'insights') { renderInsights(); renderMonthlyCompare(); renderCategoryBar(); }
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  // Date
  document.getElementById('pageDate').textContent = new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' });

  // Apply persisted state
  applyRole(STATE.role);
  applyTheme(STATE.theme);
  document.getElementById('roleSelect').value = STATE.role;

  // Nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      goToSection(item.dataset.section);
    });
  });

  // "View all" link
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); goToSection(el.dataset.goto); });
  });

  // Sidebar toggle
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    applyTheme(STATE.theme === 'dark' ? 'light' : 'dark');
  });

  // Role select
  document.getElementById('roleSelect').addEventListener('change', e => applyRole(e.target.value));

  // Add transaction button
  document.getElementById('addTxnBtn').addEventListener('click', openAddModal);

  // Modal controls
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('modalSave').addEventListener('click', saveModal);
  document.getElementById('modalBackdrop').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Search & filters
  let searchTimer;
  document.getElementById('txnSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { STATE.filters.search = e.target.value; renderTxnTable(); }, 200);
  });

  document.getElementById('filterType').addEventListener('change', e => {
    STATE.filters.type = e.target.value;
    renderTxnTable();
  });

  document.getElementById('filterCategory').addEventListener('change', e => {
    STATE.filters.category = e.target.value;
    renderTxnTable();
  });

  document.getElementById('sortBy').addEventListener('change', e => {
    STATE.sort = e.target.value;
    renderTxnTable();
  });

  // Export
  document.getElementById('exportBtn').addEventListener('click', exportCSV);

  // Chart period tabs
  document.querySelectorAll('.chart-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      STATE.activePeriod = tab.dataset.period;
      renderTrendChart(STATE.activePeriod);
    });
  });

  // Initial render
  renderAll();
});
