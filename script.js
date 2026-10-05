(() => {
  const demoRoleCodes = { professor: '1234', admin: '5678' };
  const tuitionTotal = 8800;
  const tuitionTerms = [
    { name: 'Prelim', due: 'October 15, 2026', amount: 2200 },
    { name: 'Midterm', due: 'November 15, 2026', amount: 2200 },
    { name: 'Pre-final', due: 'December 15, 2026', amount: 2200 },
    { name: 'Final', due: 'January 15, 2027', amount: 2200 }
  ];
  const studentSchedules = {
    '1-A': [
      ['ITE 101', 'IT Fundamentals', '3', '8:00 AM - 10:00 AM', 'MON', 'Room 101', 'Prof. Santos'],
      ['ITE 102', 'Web Development', '3', '10:30 AM - 12:30 PM', 'MON', 'Room 203', 'Prof. Reyes'],
      ['ITE 103', 'Database Systems', '3', '1:30 PM - 3:30 PM', 'TUE', 'Room 104', 'Prof. Cruz'],
      ['ITE 104', 'System Analysis & Design', '3', '8:00 AM - 10:00 AM', 'WED', 'Room 201', 'Prof. Santos'],
      ['ITE 105', 'Computer Networks', '3', '10:30 AM - 12:30 PM', 'THU', 'Room 102', 'Prof. Lim'],
      ['ITE 106', 'Mobile App Development', '3', '1:30 PM - 3:30 PM', 'FRI', 'Room 105', 'Prof. Dela Cruz']
    ],
    '2-A': [
      ['PATHFIT3', '(P.E. 3) Dance (Folk Dance)', '2', '7:30-10:30', 'MON', 'A2B', '—'],
      ['PT 101', 'Platform Technologies', '3', '10:30-1:30', 'MON', 'A2B', '—'],
      ['CC 105', 'Information Management', '3', '1:30-4:30', 'MON', 'A2B', '—'],
      ['PF 101', 'Object Oriented Programming', '1', '7:30-8:30', 'WED', '302', '—'],
      ['PF 101', 'Object Oriented Programming', '2', '9:30-11:30', 'WED', 'LAB 2', '—'],
      ['CC 104', 'Data Structure and Algorithm', '1', '12:30-1:30', 'WED', '302', '—'],
      ['CC 104', 'Data Structure and Algorithm', '2', '1:30-3:30', 'WED', 'LAB 1', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '2', '3:30-5:30', 'WED', 'LAB 1', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '1', '5:30-6:30', 'WED', '302', '—'],
      ['SOC SCI 1', 'Life and Works of Rizal', '3', '1:30-4:30', 'FRI', 'A3A', '—'],
      ['History 1', 'Readings in Philippine History', '3', '4:30-7:30', 'FRI', 'A3A', '—']
    ],
    '2-B': [
      ['CC 105', 'Information Management', '3', '10:30-1:30', 'MON', 'A2A', '—'],
      ['PT 101', 'Platform Technologies', '3', '1:30-4:30', 'MON', 'A2A', '—'],
      ['SOC SCI 1', 'Life and Works of Rizal', '3', '4:30-7:30', 'MON', 'A2A', '—'],
      ['CC 104', 'Data Structure and Algorithm', '2', '7:30-9:30', 'TUE', 'LAB 1', '—'],
      ['CC 104', 'Data Structure and Algorithm', '1', '9:30-10:30', 'TUE', '303', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '1', '3:30-4:30', 'TUE', '303', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '2', '5:30-7:30', 'TUE', 'LAB 1', '—'],
      ['History 1', 'Readings in Philippine History', '3', '10:30-1:30', 'THU', 'A3A', '—'],
      ['PF 101', 'Object Oriented Programming', '1', '2:30-3:30', 'THU', '303', '—'],
      ['PF 101', 'Object Oriented Programming', '2', '3:30-5:30', 'THU', 'LAB 2', '—'],
      ['PATHFIT3', '(P.E. 3) Dance (Folk Dance)', '2', '7:30-9:30', 'THU', 'A3-A', '—']
    ],
    '2-C': [
      ['PATHFIT3', '(P.E. 3) Dance (Folk Dance)', '2', '7:30-9:30', 'TUE', 'A2A', '—'],
      ['History 1', 'Readings in Philippine History', '3', '10:30-1:30', 'TUE', 'A2A', '—'],
      ['PF 101', 'Object Oriented Programming', '1', '2:30-3:30', 'TUE', '303', '—'],
      ['PF 101', 'Object Oriented Programming', '2', '3:30-5:30', 'TUE', 'LAB 1', '—'],
      ['PT 101', 'Platform Technologies', '3', '7:30-10:30', 'THU', 'A2A', '—'],
      ['CC 104', 'Data Structure and Algorithm', '1', '12:30-1:30', 'THU', '102', '—'],
      ['CC 104', 'Data Structure and Algorithm', '2', '1:30-3:30', 'THU', 'LAB 1', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '2', '3:30-5:30', 'THU', 'LAB 1', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '1', '5:30-6:30', 'THU', '302', '—'],
      ['CC 105', 'Information Management', '3', '1:30-4:30', 'SAT', '103', '—'],
      ['SOC SCI 1', 'Life and Works of Rizal', '3', '4:30-7:30', 'SAT', '103', '—']
    ],
    '2-D': [
      ['CC 104', 'Data Structure and Algorithm', '2', '7:30-9:30', 'TUE', 'LAB 1', '—'],
      ['CC 104', 'Data Structure and Algorithm', '1', '9:30-10:30', 'TUE', '302', '—'],
      ['PATHFIT3', '(P.E. 3) Dance (Folk Dance)', '2', '11:30-1:30', 'TUE', 'A2B', '—'],
      ['CC 105', 'Information Management', '3', '1:30-4:30', 'TUE', 'A2B', '—'],
      ['PT 101', 'Platform Technologies', '3', '4:30-7:30', 'TUE', 'A2B', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '2', '7:30-9:30', 'WED', 'LAB 1', '—'],
      ['HCI 102', 'Human Computer Interaction 2', '1', '9:30-10:30', 'WED', '302', '—'],
      ['PF 101', 'Object Oriented Programming', '1', '12:00-1:00', 'WED', '102', '—'],
      ['PF 101', 'Object Oriented Programming', '2', '1:30-3:30', 'WED', 'LAB 3', '—'],
      ['SOC SCI 1', 'Life and Works of Rizal', '3', '1:30-4:30', 'FRI', 'A2B', '—'],
      ['History 1', 'Readings in Philippine History', '3', '4:30-7:30', 'FRI', 'A2B', '—']
    ]
  };

  function readRecords(key) {
    try {
      const records = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(records) ? records : [];
    } catch {
      return [];
    }
  }

  function formatMoney(amount) {
    return `₱ ${Number(amount || 0).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function getStudentSchedule(profile) {
    const year = String(profile.year || '1st Year').match(/[1-4]/)?.[0] || '1';
    const block = String(profile.block || 'A').toUpperCase();
    const course = profile.course || 'BS Information Technology';
    const normalizedCourse = course.toLowerCase();
    const isBsit = normalizedCourse.includes('bsit') || normalizedCourse.includes('information technology');
    return {
      year,
      block,
      course,
      rows: isBsit ? studentSchedules[`${year}-${block}`] || [] : []
    };
  }

  function getStudentSubjects(profile) {
    const subjects = new Map();
    getStudentSchedule(profile).rows.forEach(([code, name, units, time, day, room, instructor]) => {
      const key = `${code}|${name}`;
      const subject = subjects.get(key);
      if (subject) {
        subject.units += Number(units || 0);
        subject.meetings.push({ time, day, room });
      } else {
        subjects.set(key, { code, name, units: Number(units || 0), instructor, meetings: [{ time, day, room }] });
      }
    });
    return [...subjects.values()];
  }

  function buildStudentCorMarkup(profile, includeActions = true, logoSource = 'image/CCDI EDU.png') {
    const studentSchedule = getStudentSchedule(profile);
    const subjects = getStudentSubjects(profile);
    const totalUnits = subjects.reduce((total, subject) => total + subject.units, 0);
    const subjectRows = subjects.length
      ? subjects.map((subject) => {
        const meetings = subject.meetings
          .map((meeting) => `${meeting.day} ${meeting.time}${meeting.room ? ` · ${meeting.room}` : ''}`)
          .join('<br>');
        return `<tr><td>${subject.code}</td><td>${subject.name}</td><td>${subject.units}</td><td>${meetings}</td><td>${subject.instructor}</td></tr>`;
      }).join('')
      : '<tr><td colspan="5" class="muted">No registered subjects are available for this course, year, and block.</td></tr>';
    const installments = tuitionTerms.map((term) => `<div><span>${term.name}</span><strong>${formatMoney(term.amount)}</strong><small>Due ${term.due}</small></div>`).join('');
    const actions = includeActions
      ? '<div class="cor-document-actions"><button class="btn btn-outline" type="button" onclick="downloadCor()">Download COR</button><button class="btn btn-primary" type="button" onclick="window.print()">Print / Save PDF</button></div>'
      : '';
    return `<article class="cor-document"><header class="cor-document-header"><img src="${logoSource}" alt="CCDI EDU"><div><span>COMPUTER COMMUNICATION DEVELOPMENT INSTITUTE</span><h2>Certificate of Registration</h2><p>College Department · 1st Semester · AY 2026-2027</p></div></header><div class="cor-student-details"><div><small>Student Name</small><strong>${profile.name || 'Rene Batterbonia'}</strong></div><div><small>Student Number</small><strong>${profile.studentNumber || 'CCDI-2026-0001'}</strong></div><div><small>Course / Program</small><strong>${studentSchedule.course}</strong></div><div><small>Year and Block</small><strong>${profile.year || '1st Year'} · Block ${studentSchedule.block}</strong></div></div><div class="cor-document-section"><div class="cor-document-section-title"><h3>Registered Subjects</h3><span>Total units: ${totalUnits}</span></div><div class="table-wrap"><table><thead><tr><th>Subject Code</th><th>Description</th><th>Units</th><th>Schedule / Room</th><th>Instructor</th></tr></thead><tbody>${subjectRows}</tbody></table></div></div><div class="cor-document-fees"><div class="cor-document-section-title"><h3>Tuition Fee Summary</h3><span>Total assessment: ${formatMoney(tuitionTotal)}</span></div><div class="cor-installments">${installments}</div></div><p class="cor-document-note">Student copy · Verify enrollment and fee details with the Registrar.</p>${actions}</article>`;
  }

  function enrollmentBlock(index) {
    let block = '';
    let remaining = index;
    do {
      block = String.fromCharCode(65 + (remaining % 26)) + block;
      remaining = Math.floor(remaining / 26) - 1;
    } while (remaining >= 0);
    return block;
  }

  function renderStudentSubjects(profile) {
    const subjects = getStudentSubjects(profile);
    const gradeRowMarkup = subjects.length
      ? subjects.map((subject) => `<tr><td>${subject.code}</td><td>${subject.name}</td><td>${subject.instructor}</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>Awaiting Release</td></tr>`).join('')
      : '<tr><td colspan="9" class="muted">No subjects have been published for this course, year, and block yet.</td></tr>';
    document.querySelectorAll('#studentGradeRows, #dashboardStudentGradeRows').forEach((rows) => { rows.innerHTML = gradeRowMarkup; });

    document.querySelectorAll('#corSubjectRows').forEach((corRows) => {
      corRows.innerHTML = subjects.length
        ? subjects.map((subject) => `<tr><td>${subject.code}</td><td>${subject.name}</td><td>${subject.instructor}</td><td>${subject.units}</td></tr>`).join('')
        : '<tr><td colspan="4" class="muted">No registered subjects are available for this course, year, and block.</td></tr>';
    });
  }

  function renderTuition() {
    const payments = readRecords('ccdiTuitionPayments');
    const paid = payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
    const remaining = Math.max(0, tuitionTotal - paid);
    document.querySelectorAll('[data-total-payment], [data-payment-total]').forEach((node) => { node.textContent = formatMoney(tuitionTotal); });
    document.querySelectorAll('[data-paid-payment], [data-payment-paid]').forEach((node) => { node.textContent = formatMoney(paid); });
    document.querySelectorAll('[data-remaining-payment], [data-payment-balance], [data-payment-remaining]').forEach((node) => { node.textContent = formatMoney(remaining); });

    const periods = document.getElementById('paymentPeriods');
    if (periods) {
      periods.innerHTML = tuitionTerms.map((term) => {
        const receipt = payments.find((payment) => payment.term === term.name);
        return `<article class="payment-period ${receipt ? 'is-paid' : ''}"><div><span class="period-label">${term.name} payment</span><strong>${formatMoney(term.amount)}</strong><small>Due ${term.due}</small></div><div class="payment-period-action">${receipt ? `<span class="badge badge-success">Paid</span><button class="btn btn-outline" type="button" data-receipt-id="${receipt.id}">View receipt</button>` : `<button class="btn btn-primary" type="button" data-pay-term="${term.name}">Pay ${term.name}</button>`}</div></article>`;
      }).join('');
    }

    const history = document.getElementById('paymentHistory');
    if (history) {
      history.innerHTML = payments.length ? [...payments].reverse().map((payment) => `<tr><td>${payment.term}</td><td>${new Date(payment.date).toLocaleDateString()}</td><td>${payment.method}</td><td>${formatMoney(payment.amount)}</td><td><button class="text-link" type="button" data-receipt-id="${payment.id}">View receipt</button></td></tr>`).join('') : '<tr><td colspan="5" class="muted">No tuition payments recorded yet.</td></tr>';
    }
  }

  function renderTuitionReceipt() {
    const target = document.getElementById('tuitionReceipt');
    if (!target) return;
    const id = new URLSearchParams(window.location.search).get('id');
    const payment = readRecords('ccdiTuitionPayments').find((record) => record.id === id);
    if (!payment) {
      target.innerHTML = '<h1>Receipt unavailable</h1><p>No matching tuition payment was found in this browser.</p><a class="btn btn-primary" href="payments.html">Return to Tuition</a>';
      return;
    }
    target.innerHTML = `<span class="eyebrow">CCDI EDU · PAYMENT RECEIPT</span><h1>Tuition payment received</h1><p class="receipt-number">Receipt ${payment.id}</p><dl><div><dt>Student</dt><dd>${localStorage.getItem('ccdiStudentName') || 'Rene Batterbonia'}</dd></div><div><dt>Term</dt><dd>${payment.term} · AY 2026-2027</dd></div><div><dt>Payment date</dt><dd>${new Date(payment.date).toLocaleString()}</dd></div><div><dt>Method</dt><dd>${payment.method}</dd></div><div><dt>Amount</dt><dd>${formatMoney(payment.amount)}</dd></div><div><dt>Status</dt><dd>Recorded · Prototype</dd></div></dl><p class="muted">This receipt is a front-end demo record, not proof of a real financial transaction.</p>`;
  }

  function renderShopCheckout() {
    const cart = readRecords('ccdiCart');
    const items = document.getElementById('shopCheckoutItems');
    const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);
    if (items) {
      items.innerHTML = cart.length ? cart.map((item, index) => `<div class="shop-checkout-item"><div><strong>${item.name}</strong><small>${item.size || 'One size'}</small></div><strong>${formatMoney(item.price)}</strong><button class="text-link" type="button" data-remove-cart-item="${index}" aria-label="Remove ${item.name}">Remove</button></div>`).join('') : '<p class="muted">Your cart is empty. Add an item from the CCDI Shop to begin an order.</p>';
    }
    const totalNode = document.getElementById('shopCheckoutTotal');
    if (totalNode) totalNode.textContent = formatMoney(total);
    const history = document.getElementById('shopOrderHistory');
    const orders = readRecords('ccdiShopOrders');
    if (history) history.innerHTML = orders.length ? [...orders].reverse().map((order) => `<tr><td>${order.id}</td><td>${new Date(order.date).toLocaleDateString()}</td><td>${formatMoney(order.amount)}</td><td><a class="text-link" href="shop-receipt.html?id=${encodeURIComponent(order.id)}">Receipt</a></td></tr>`).join('') : '<tr><td colspan="4" class="muted">No completed orders yet.</td></tr>';
    document.querySelectorAll('.shop-cart-count').forEach((count) => { count.textContent = `${cart.length} item${cart.length === 1 ? '' : 's'}`; });
    const summary = document.querySelector('[data-shop-cart-summary]');
    if (summary) summary.textContent = cart.length ? cart.map((item) => `${item.name} (${item.size || 'One size'})`).join(', ') : 'Your cart is empty.';
    const payButton = document.getElementById('completeShopPayment');
    if (payButton) payButton.disabled = cart.length === 0;
  }

  function renderShopReceipt() {
    const target = document.getElementById('shopReceipt');
    if (!target) return;
    const id = new URLSearchParams(window.location.search).get('id');
    const order = readRecords('ccdiShopOrders').find((record) => record.id === id);
    if (!order) {
      target.innerHTML = '<h1>Receipt unavailable</h1><p>No matching shop order was found in this browser.</p><a class="btn btn-primary" href="shop-payment.html">Return to Orders</a>';
      return;
    }
    const items = order.items.map((item) => `<li>${item.name} · ${item.size || 'One size'} · ${formatMoney(item.price)}</li>`).join('');
    target.innerHTML = `<span class="eyebrow">CCDI EDU · SHOP ORDER</span><h1>Order payment receipt</h1><p class="receipt-number">Order ${order.id}</p><dl><div><dt>Student</dt><dd>${localStorage.getItem('ccdiStudentName') || 'Rene Batterbonia'}</dd></div><div><dt>Date</dt><dd>${new Date(order.date).toLocaleString()}</dd></div><div><dt>Payment method</dt><dd>${order.method}</dd></div><div><dt>Amount paid</dt><dd>${formatMoney(order.amount)}</dd></div><div><dt>Pickup status</dt><dd>Paid · Present this receipt at the school shop</dd></div></dl><h2>Items</h2><ul>${items}</ul><p class="muted">This receipt is a front-end demo record and does not confirm a real payment.</p>`;
  }

  function populateStudentProfile() {
    const profile = JSON.parse(localStorage.getItem('ccdiStudentProfile') || '{}');
    if (profile.name) {
      document.querySelectorAll('[data-profile-name], [data-record-name], #profileSummary h2, #topUserName').forEach((node) => { node.textContent = profile.name; });
    }
    if (profile.course) document.querySelectorAll('[data-record-course], .profile-academic-summary strong').forEach((node) => { node.textContent = profile.course; });
    if (profile.year) document.querySelectorAll('[data-record-year], .profile-academic-summary span:first-of-type').forEach((node) => { node.textContent = `${profile.year}, Block ${profile.block || 'A'}`; });
    document.querySelectorAll('[data-profile-field]').forEach((field) => {
      const value = profile[field.dataset.profileField];
      if (value) field.value = value;
    });
    if (profile.name) {
      const initials = profile.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
      document.querySelectorAll('.student-avatar-link .avatar').forEach((avatar) => { avatar.textContent = initials; });
    }
    renderStudentSubjects(profile);
    document.querySelectorAll('.cor-panel').forEach((panel) => {
      panel.classList.add('cor-panel--document');
      panel.innerHTML = buildStudentCorMarkup(profile);
    });
  }

  function renderStudentGrades() {
    document.querySelectorAll('#studentGradeStatus').forEach((status) => {
      status.className = 'badge badge-warning';
      status.textContent = 'Awaiting Release';
    });
  }

  function renderStudentSchedule() {
    const title = document.querySelector('[data-schedule-title]');
    const rows = document.getElementById('dashboardStudentScheduleRows');
    if (!title || !rows) return;
    const profile = JSON.parse(localStorage.getItem('ccdiStudentProfile') || '{}');
    const studentSchedule = getStudentSchedule(profile);
    title.textContent = `${studentSchedule.course} · ${profile.year || '1st Year'} · Block ${studentSchedule.block}`;
    rows.innerHTML = studentSchedule.rows.length
      ? studentSchedule.rows.map((subject) => `<tr>${subject.map((value) => `<td>${value}</td>`).join('')}</tr>`).join('')
      : '<tr><td colspan="7" class="muted">No schedule has been published for this course, year, and block yet.</td></tr>';
  }

  window.saveProfile = () => {
    const profile = JSON.parse(localStorage.getItem('ccdiStudentProfile') || '{}');
    document.querySelectorAll('[data-profile-field]').forEach((field) => { profile[field.dataset.profileField] = field.value.trim(); });
    localStorage.setItem('ccdiStudentProfile', JSON.stringify(profile));
    localStorage.setItem('ccdiStudentName', profile.name || 'Rene Batterbonia');
    showToast('Profile saved on this device.');
  };

  window.downloadCor = () => {
    const profile = JSON.parse(localStorage.getItem('ccdiStudentProfile') || '{}');
    const corStyles = 'body{font:14px Arial,sans-serif;color:#18324a;margin:30px}.cor-document{max-width:1000px;margin:auto;border:1px solid #b7c7d6;padding:26px}.cor-document-header{display:flex;gap:18px;align-items:center;border-bottom:2px solid #173b5b;padding-bottom:18px}.cor-document-header img{width:64px;height:64px;object-fit:contain}.cor-document-header span,.cor-student-details small{font-size:10px;letter-spacing:.06em;color:#5e7183}.cor-document-header h2{margin:4px 0}.cor-student-details{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0}.cor-student-details div{border-bottom:1px solid #d5dfe8;padding:8px}.cor-student-details strong,.cor-student-details small{display:block}.cor-document-section-title{display:flex;justify-content:space-between;align-items:center;margin:20px 0 10px}.cor-document table{width:100%;border-collapse:collapse}.cor-document th,.cor-document td{border:1px solid #b7c7d6;padding:8px;text-align:left}.cor-document th{background:#edf3f8}.cor-installments{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.cor-installments div{display:grid;gap:4px;border:1px solid #d5dfe8;padding:10px}.cor-installments small,.cor-document-note{color:#687b8d}.cor-document-note{margin-top:20px}';
    const logoSource = new URL('image/CCDI EDU.png', window.location.href).href;
    const cor = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Certificate of Registration</title><style>${corStyles}</style></head><body>${buildStudentCorMarkup(profile, false, logoSource)}</body></html>`;
    const url = URL.createObjectURL(new Blob([cor], { type: 'text/html' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CCDI-Certificate-of-Registration.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  function pageHref(page, role = document.body.dataset.role || 'student') {
    if (page === 'dashboard') return `dashboard-${role}.html`;
    if (role === 'student') {
      const dashboardSections = {
        payments: 'studentTuition',
        grades: 'studentGrades',
        schedule: 'studentSchedule',
        announcements: 'studentAnnouncements',
        events: 'studentEvents',
        shop: 'studentShop'
      };
      if (dashboardSections[page]) return `dashboard-student.html#${dashboardSections[page]}`;
    }
    if (page === 'settings') return role === 'student' ? 'settings-student.html' : `settings-${role}.html`;
    return `${page}.html`;
  }

  function goToPage(page) {
    window.location.href = pageHref(page);
  }

  function replaceNavigationButtons() {
    document.querySelectorAll('.nav-item[data-page]').forEach((item) => {
      const link = item.tagName === 'A' ? item : document.createElement('a');
      if (item !== link) {
        link.className = item.className;
        link.innerHTML = item.innerHTML;
        [...item.attributes].filter((attribute) => attribute.name.startsWith('data-'))
          .forEach((attribute) => link.setAttribute(attribute.name, attribute.value));
        item.replaceWith(link);
      }
      const page = link.dataset.page;
      if (document.body.dataset.page === 'dashboard' && link.dataset.section) {
        link.href = `#${link.dataset.section}`;
      } else {
        link.href = pageHref(page);
      }
      link.setAttribute('aria-current', link.classList.contains('active') ? 'page' : 'false');
    });
  }

  function setActiveNav(page) {
    document.querySelectorAll('.sidebar .nav-item').forEach((item) => {
      const active = item.dataset.page === page;
      item.classList.toggle('active', active);
      item.setAttribute('aria-current', active ? 'page' : 'false');
    });
  }

  function orderStudentNavigation() {
    if (document.body.dataset.role !== 'student') return;
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    const order = ['dashboard', 'payments', 'grades', 'schedule', 'announcements', 'events', 'shop', 'settings'];
    const labels = {
      dashboard: 'Home',
      payments: 'Tuition',
      announcements: 'Announcements',
      events: 'Events',
      grades: 'Grades',
      schedule: 'Class Schedule',
      shop: 'CCDI Shop',
      settings: 'Settings'
    };
    const items = [...sidebar.querySelectorAll('.nav-item[data-page]')];
    items.filter((item) => !order.includes(item.dataset.page)).forEach((item) => item.remove());
    const orderedItems = items.filter((item) => order.includes(item.dataset.page));
    order.forEach((page) => {
      if (orderedItems.some((item) => item.dataset.page === page)) return;
      const link = document.createElement('a');
      link.className = 'nav-item';
      link.dataset.page = page;
      link.href = pageHref(page);
      link.innerHTML = `<span>${labels[page]}</span>`;
      orderedItems.push(link);
    });
    orderedItems.sort((left, right) => order.indexOf(left.dataset.page) - order.indexOf(right.dataset.page));
    orderedItems.forEach((item) => {
      item.innerHTML = `<span>${labels[item.dataset.page]}</span>`;
      sidebar.append(item);
    });
  }

  function showServicePanel(service) {
    const details = document.getElementById('serviceDetail');
    const template = document.getElementById(`student${service[0].toUpperCase()}${service.slice(1)}PanelTemplate`);
    if (!details || !template) return;
    const alreadyOpen = details.dataset.service === service;
    document.querySelectorAll('.service-tile').forEach((tile) => {
      const selected = !alreadyOpen && tile.dataset.service === service;
      tile.classList.toggle('service-selected', selected);
      tile.setAttribute('aria-expanded', String(selected));
    });
    details.dataset.service = alreadyOpen ? '' : service;
    details.innerHTML = alreadyOpen ? '' : template.innerHTML;
    populateStudentProfile();
    renderStudentGrades();
    renderStudentSchedule();
    setActiveNav(alreadyOpen ? 'dashboard' : service);
  }

  function setupBackNavigation() {
    const page = document.body.dataset.page;
    if (page !== 'profile') return;
    const content = document.getElementById('appContent') || document.querySelector('main.app-content');
    if (!content || content.querySelector('.page-back-link')) return;
    const role = document.body.dataset.role || 'student';
    const service = page === 'grades' ? 'grades' : ['schedule', 'schedule-all'].includes(page) ? 'schedule' : page === 'shop' ? 'shop' : '';
    const returnHash = service ? `#service-${service}` : '#homeSection';
    const returnHref = `dashboard-${role}.html${returnHash}`;
    const existingHomeLink = [...content.querySelectorAll('.page-title a')]
      .find((link) => link.href.includes(`dashboard-${role}.html`));
    if (existingHomeLink) {
      existingHomeLink.href = returnHref;
      existingHomeLink.textContent = '← Back';
      existingHomeLink.classList.add('page-back-link');
      return;
    }
    const link = document.createElement('a');
    link.className = 'btn btn-outline page-back-link';
    link.href = returnHref;
    link.textContent = '← Back';
    const pageTitle = content.querySelector('.page-title');
    if (pageTitle) pageTitle.prepend(link);
    else content.prepend(link);
  }

  function restoreDashboardService() {
    if (document.body.dataset.page !== 'dashboard') return;
    const service = window.location.hash.match(/^#service-(grades|schedule|shop)$/)?.[1];
    if (!service) return;
    const sectionId = { grades: 'studentGrades', schedule: 'studentSchedule', shop: 'studentShop' }[service];
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveNav(service);
  }

  function setupMobileMenu() {
    document.querySelectorAll('.mobile-menu').forEach((button) => {
      button.textContent = '☰';
      button.type = 'button';
      button.setAttribute('aria-label', 'Open navigation');
      button.setAttribute('aria-expanded', 'false');
    });
  }

  function setupStudentHeader() {
    if (document.body.dataset.role !== 'student') return;
    const header = document.querySelector('.app-topbar');
    if (!header) return;
    const logout = [...header.querySelectorAll('a')].find((link) => link.textContent.trim().toLowerCase() === 'logout');
    if (logout) {
      logout.className = 'profile-btn student-avatar-link';
      logout.href = 'profile.html';
      logout.setAttribute('aria-label', 'Open profile');
      logout.textContent = '';
      const avatar = document.createElement('span');
      avatar.className = 'avatar';
      avatar.textContent = 'RB';
      logout.append(avatar);
    }
    header.querySelectorAll('.profile-btn').forEach((profileLink) => {
      profileLink.href = 'profile.html';
      profileLink.setAttribute('aria-label', 'Open profile');
    });
    if (document.body.dataset.page === 'profile') {
      document.body.classList.add('profile-page');
      document.getElementById('sidebar')?.remove();
      header.querySelector('.mobile-menu')?.remove();
    }
  }

  function initializeScrollNavigation() {
    if (document.body.dataset.page !== 'dashboard' || !('IntersectionObserver' in window)) return;
    const sections = ['homeSection', 'studentTuition', 'studentGrades', 'studentSchedule', 'studentEvents', 'studentShop', 'studentAnnouncements']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      if (document.getElementById('serviceDetail')?.dataset.service) return;
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
      if (visible) {
        const link = document.querySelector(`.sidebar .nav-item[data-section="${visible.target.id}"]`);
        if (link) setActiveNav(link.dataset.page);
      }
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => observer.observe(section));
  }

  function setupPublicNavigation() {
    const nav = document.querySelector('.public-nav');
    const sections = ['home', 'academics', 'announcements', 'events', 'about']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!nav || !sections.length) return;
    const links = [...nav.querySelectorAll('nav a[href^="#"]')];
    const updateActiveLink = () => {
      const headerBottom = nav.getBoundingClientRect().bottom;
      let currentSection = sections[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= headerBottom + 40) currentSection = section.id;
      });
      links.forEach((link) => {
        const active = link.hash === `#${currentSection}`;
        link.classList.toggle('is-current', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('hashchange', updateActiveLink);
    updateActiveLink();
  }

  function loadPageTemplate() {
    const page = document.body.dataset.page;
    const role = document.body.dataset.role || 'student';
    const content = document.getElementById('appContent');
    if (!page || !content) return;

    let templateId = `${page}Template`;
    if (page === 'dashboard') templateId = `${role}DashboardTemplate`;
    if (page === 'grades' && role === 'professor') templateId = 'professorGradesTemplate';

    const template = document.getElementById(templateId);
    if (template) {
      content.innerHTML = template.innerHTML;
      template.classList.add('hidden');
      return;
    }

    if (!content.textContent.trim() && page === 'announcements') {
      content.innerHTML = '<section class="page-title"><div><h1>Announcements</h1><p>School announcements and updates.</p></div></section><div class="panel"><p>There are no announcements to display right now.</p><p><a class="text-link" href="announcements-public.html">View public announcements</a></p></div>';
    }
  }

  function mountStudentDashboardSections() {
    if (document.body.dataset.page !== 'dashboard') return;
    [
      ['studentGrades', 'studentGradesPanelTemplate'],
      ['studentSchedule', 'studentSchedulePanelTemplate'],
      ['studentShop', 'studentShopPanelTemplate']
    ].forEach(([sectionId, templateId]) => {
      const section = document.getElementById(sectionId);
      const template = document.getElementById(templateId);
      if (section && template) section.innerHTML = template.innerHTML;
    });
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2800);
  }

  window.showPage = goToPage;
  window.navigateFromDashboard = goToPage;
  window.payTuitionPeriod = (termName) => {
    const term = tuitionTerms.find((item) => item.name === termName);
    if (!term) return;
    const payments = readRecords('ccdiTuitionPayments');
    if (payments.some((payment) => payment.term === term.name)) return;
    const payment = {
      id: `T-${Date.now()}`,
      term: term.name,
      amount: term.amount,
      method: document.getElementById('tuitionPaymentMethod')?.value || 'Cashier',
      date: new Date().toISOString()
    };
    payments.push(payment);
    localStorage.setItem('ccdiTuitionPayments', JSON.stringify(payments));
    window.location.href = `payment-receipt.html?id=${encodeURIComponent(payment.id)}`;
  };
  window.printReceipt = () => window.print();
  window.saveSettings = () => {
    const theme = document.getElementById('themeSelect')?.value || 'light';
    localStorage.setItem('ccdiTheme', theme);
    document.body.classList.toggle('dark-theme', theme === 'dark');
    showToast('Settings saved on this device.');
  };
  window.completeShopPayment = () => {
    const cart = readRecords('ccdiCart');
    if (!cart.length) return;
    const orders = readRecords('ccdiShopOrders');
    const order = {
      id: `S-${Date.now()}`,
      date: new Date().toISOString(),
      method: document.getElementById('shopPaymentMethod')?.value || 'Cashier',
      items: cart,
      amount: cart.reduce((sum, item) => sum + Number(item.price || 0), 0)
    };
    orders.push(order);
    localStorage.setItem('ccdiShopOrders', JSON.stringify(orders));
    localStorage.setItem('ccdiCart', '[]');
    window.location.href = `shop-receipt.html?id=${encodeURIComponent(order.id)}`;
  };
  window.toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar?.classList.toggle('open') || false;
    const menu = document.querySelector('.mobile-menu');
    menu?.setAttribute('aria-expanded', String(isOpen));
    menu?.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };
  window.toggleProfileMenu = () => document.getElementById('profileDropdown')?.classList.toggle('show');
  window.logout = () => {
    sessionStorage.removeItem('ccdiRole');
    window.location.href = 'index.html';
  };
  window.showPublic = (section) => {
    document.getElementById(section === 'home' ? 'home' : section)?.scrollIntoView({ behavior: 'smooth' });
  };
  window.openLogin = () => document.getElementById('loginModal')?.classList.remove('hidden');
  window.closeLogin = () => document.getElementById('loginModal')?.classList.add('hidden');
  window.openRegister = () => {
    window.closeLogin();
    document.getElementById('registerModal')?.classList.remove('hidden');
    window.showSignupStep(1);
  };
  window.closeRegister = () => document.getElementById('registerModal')?.classList.add('hidden');
  window.togglePassword = () => {
    const input = document.getElementById('loginPassword');
    if (input) input.type = input.type === 'password' ? 'text' : 'password';
  };
  window.showSignupStep = (step) => {
    document.querySelectorAll('[data-signup-step]').forEach((panel) => {
      panel.classList.toggle('hidden', Number(panel.dataset.signupStep) !== step);
    });
  };
  window.continueSignup = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const photo = document.getElementById('regPhoto')?.files?.[0];
    const lastName = document.getElementById('regLastName')?.value.trim();
    const firstName = document.getElementById('regFirstName')?.value.trim();
    const middleName = document.getElementById('regMiddleName')?.value.trim();
    const signup = {
      name: [firstName, middleName, lastName].filter(Boolean).join(' '),
      lastName,
      firstName,
      middleName,
      sex: document.getElementById('regSex')?.value,
      phone: document.getElementById('regPhone')?.value.trim(),
      email: document.getElementById('regEmail')?.value.trim(),
      address: document.getElementById('regAddress')?.value.trim(),
      previousSchool: document.getElementById('regPreviousSchool')?.value.trim(),
      course: document.getElementById('regCourse')?.value.trim(),
      year: document.getElementById('regYear')?.value,
      guardian: document.getElementById('regGuardian')?.value.trim(),
      photoName: photo?.name || ''
    };
    sessionStorage.setItem('ccdiSignup', JSON.stringify(signup));
    window.showSignupStep(2);
  };
  window.continuePayment = () => {
    if (!document.getElementById('regEntranceFee')?.checked) {
      showToast('Confirm the entrance fee to continue.');
      return;
    }
    const nextNumber = Number(localStorage.getItem('ccdiNextStudentNumber') || 1);
    const studentNumber = `CCDI-2026-${String(nextNumber).padStart(4, '0')}`;
    sessionStorage.setItem('ccdiStudentNumber', studentNumber);
    const display = document.getElementById('generatedStudentNumber');
    if (display) display.textContent = studentNumber;
    window.showSignupStep(3);
  };
  window.finishSignup = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const password = document.getElementById('regPassword')?.value;
    const confirmation = document.getElementById('regConfirm')?.value;
    if (password !== confirmation) {
      showToast('Passwords do not match.');
      return;
    }
    const studentNumber = sessionStorage.getItem('ccdiStudentNumber');
    if (!studentNumber) {
      showToast('Complete the enrollment steps first.');
      window.showSignupStep(1);
      return;
    }
    const signup = JSON.parse(sessionStorage.getItem('ccdiSignup') || '{}');
    const roster = readRecords('ccdiEnrollmentRoster');
    const courseKey = String(signup.course || '').trim().toLowerCase();
    const yearKey = String(signup.year || '').trim().toLowerCase();
    const enrollmentCount = roster.filter((student) => (
      String(student.course || '').trim().toLowerCase() === courseKey
      && String(student.year || '').trim().toLowerCase() === yearKey
    )).length;
    const profile = { ...signup, block: enrollmentBlock(Math.floor(enrollmentCount / 35)), studentNumber };
    roster.push({ studentNumber, course: profile.course, year: profile.year, block: profile.block });
    localStorage.setItem('ccdiNextStudentNumber', String(Number(localStorage.getItem('ccdiNextStudentNumber') || 1) + 1));
    localStorage.setItem('ccdiEnrollmentRoster', JSON.stringify(roster));
    localStorage.setItem('ccdiStudentProfile', JSON.stringify(profile));
    sessionStorage.setItem('ccdiRole', 'student');
    sessionStorage.removeItem('ccdiSignup');
    sessionStorage.removeItem('ccdiStudentNumber');
    window.location.href = 'dashboard-student.html';
  };
  window.login = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const roleCode = document.getElementById('roleCode')?.value.trim();
    const role = Object.keys(demoRoleCodes).find((key) => demoRoleCodes[key] === roleCode) || 'student';
    sessionStorage.setItem('ccdiRole', role);
    window.location.href = `dashboard-${role}.html`;
  };
  window.toggleServicePanel = (_button, page) => showServicePanel(page);
  window.filterGradebook = (value) => {
    const search = value.trim().toLowerCase();
    document.querySelectorAll('#gradebookRows tr').forEach((row) => {
      row.hidden = !row.textContent.toLowerCase().includes(search);
    });
  };
  window.saveGrades = () => showToast('Grade changes saved in this demo.');
  window.publishGrades = () => showToast('Grades published in this demo.');

  document.addEventListener('click', (event) => {
    const sectionLink = event.target.closest('.sidebar .nav-item[data-section]');
    if (sectionLink) {
      event.preventDefault();
      document.getElementById(sectionLink.dataset.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveNav(sectionLink.dataset.page);
      document.getElementById('sidebar')?.classList.remove('open');
      document.querySelector('.mobile-menu')?.setAttribute('aria-expanded', 'false');
      document.querySelector('.mobile-menu')?.setAttribute('aria-label', 'Open navigation');
    }

    const serviceLink = event.target.closest('.sidebar .nav-item[data-service]');
    if (serviceLink) {
      event.preventDefault();
      showServicePanel(serviceLink.dataset.service);
    }

    const serviceTile = event.target.closest('.service-tile[data-service]');
    if (serviceTile) showServicePanel(serviceTile.dataset.service);

    const payButton = event.target.closest('[data-pay-term]');
    if (payButton) window.payTuitionPeriod(payButton.dataset.payTerm);

    const receiptButton = event.target.closest('[data-receipt-id]');
    if (receiptButton) window.location.href = `payment-receipt.html?id=${encodeURIComponent(receiptButton.dataset.receiptId)}`;

    const removeButton = event.target.closest('[data-remove-cart-item]');
    if (removeButton) {
      const cart = readRecords('ccdiCart');
      cart.splice(Number(removeButton.dataset.removeCartItem), 1);
      localStorage.setItem('ccdiCart', JSON.stringify(cart));
      renderShopCheckout();
    }

    if (event.target.closest('#completeShopPayment')) window.completeShopPayment();

    const printButton = event.target.closest('button');
    if (printButton && /print/i.test(printButton.textContent)) window.print();

    const addToCartButton = event.target.closest('.shop-item [data-add-product]');
    if (addToCartButton) {
      const item = addToCartButton.closest('.shop-item');
      const itemName = item?.querySelector('h3')?.textContent.trim();
      const size = item?.querySelector('select')?.value;
      const cart = readRecords('ccdiCart');
      cart.push({ product: item.dataset.product, name: itemName, size: size || 'One size', price: Number(item.dataset.price || 0) });
      localStorage.setItem('ccdiCart', JSON.stringify(cart));
      renderShopCheckout();
      showToast(`${itemName} added to cart.`);
    }

    if (event.target.classList.contains('modal')) event.target.classList.add('hidden');
  });

  document.addEventListener('DOMContentLoaded', () => {
    setupPublicNavigation();
    setupMobileMenu();
    setupStudentHeader();
    replaceNavigationButtons();
    document.querySelectorAll('.sidebar .nav-item[data-page="profile"]').forEach((item) => item.remove());
    orderStudentNavigation();
    document.querySelectorAll('.sidebar .nav-item[data-page]').forEach((item) => {
      if (item.dataset.page === document.body.dataset.page) item.classList.add('active');
    });
    loadPageTemplate();
    mountStudentDashboardSections();
    setupBackNavigation();
    populateStudentProfile();
    renderStudentGrades();
    renderStudentSchedule();
    restoreDashboardService();
    renderTuition();
    renderTuitionReceipt();
    renderShopCheckout();
    renderShopReceipt();
    initializeScrollNavigation();
    ['scheduleCourseFilter', 'scheduleYearFilter', 'scheduleBlockFilter'].forEach((id) => {
      document.getElementById(id)?.addEventListener('change', () => {
        const course = document.getElementById('scheduleCourseFilter')?.value || 'all';
        const year = document.getElementById('scheduleYearFilter')?.value || 'all';
        const block = document.getElementById('scheduleBlockFilter')?.value || 'all';
        let visibleCount = 0;
        document.querySelectorAll('.schedule-catalog').forEach((section) => {
          const visible = (course === 'all' || section.dataset.course === course)
            && (year === 'all' || section.dataset.year === year)
            && (block === 'all' || section.dataset.block === block);
          section.hidden = !visible;
          if (visible) visibleCount += 1;
        });
        const unavailable = document.getElementById('scheduleUnavailable');
        if (unavailable) unavailable.hidden = visibleCount > 0;
      });
    });
    const role = sessionStorage.getItem('ccdiRole');
    const sidebarRole = document.getElementById('sidebarRole');
    if (role && sidebarRole) sidebarRole.textContent = role.toUpperCase();
    const profile = JSON.parse(localStorage.getItem('ccdiStudentProfile') || '{}');
    document.querySelectorAll('[data-student-name]').forEach((name) => {
      if (profile.name) name.textContent = profile.name.split(' ')[0];
    });
    if (profile.name) {
      localStorage.setItem('ccdiStudentName', profile.name);
      document.querySelectorAll('#topUserName').forEach((name) => { name.textContent = profile.name; });
      document.querySelectorAll('#profileSummary h2').forEach((name) => { name.textContent = profile.name; });
    }
  });

  window.addEventListener('hashchange', restoreDashboardService);
})();
