// app.js — Interactive functionalities for MathsWithSD landing page

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Drawer Navigation
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.contains('open');
            if (isOpen) {
                mobileDrawer.classList.remove('open');
                mobileMenuBtn.classList.remove('active');
            } else {
                mobileDrawer.classList.add('open');
                mobileMenuBtn.classList.add('active');
            }
        });

        // Close drawer when clicking a mobile nav link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // 2. KaTeX Inits and OCR Simulation Data
    const ocrData = {
        eq1: {
            latex: '\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}',
            confidence: '99.8%',
            percent: 99.8
        },
        eq2: {
            latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
            confidence: '99.5%',
            percent: 99.5
        },
        eq3: {
            latex: 'A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
            confidence: '98.9%',
            percent: 98.9
        }
    };

    const katexTarget = document.getElementById('katex-target');
    const quizMathRender = document.getElementById('quiz-math-render');

    // Helper to safely render LaTeX
    function renderLaTeX(target, texString) {
        if (target && window.katex) {
            try {
                window.katex.render(texString, target, {
                    throwOnError: false,
                    displayMode: true
                });
            } catch (err) {
                console.error("KaTeX rendering error:", err);
                target.textContent = texString;
            }
        }
    }

    // Initialize initial renderings
    if (katexTarget) {
        renderLaTeX(katexTarget, ocrData.eq1.latex);
    }
    if (quizMathRender) {
        renderLaTeX(quizMathRender, '\\int_{0}^{2} 3x^2 \\, dx');
    }

    // 3. OCR Live Simulator Interaction
    const sourceCards = document.querySelectorAll('.source-card');
    const laser = document.getElementById('laser');
    const scanTrigger = document.getElementById('scan-trigger');
    const activeMathView = document.getElementById('active-math-view');
    const latexCode = document.getElementById('latex-code');
    const confidenceVal = document.getElementById('confidence-val');
    const confidenceFill = document.getElementById('confidence-fill');

    let currentSelectedId = 'eq1';
    let isScanning = false;

    sourceCards.forEach(card => {
        card.addEventListener('click', () => {
            if (isScanning) return; // Prevent clicking during scan
            
            sourceCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentSelectedId = card.getAttribute('data-id');
            const data = ocrData[currentSelectedId];
            
            // Set preview text (raw latex text)
            if (activeMathView) {
                activeMathView.textContent = data.latex;
            }
        });
    });

    if (scanTrigger) {
        scanTrigger.addEventListener('click', () => {
            if (isScanning) return;
            isScanning = true;
            scanTrigger.disabled = true;
            scanTrigger.textContent = "Scanning Mathpix OCR Ingestion...";

            // Trigger Laser Animation
            if (laser) {
                laser.classList.add('scanning');
            }

            // Simulate Network delay
            setTimeout(() => {
                const data = ocrData[currentSelectedId];
                
                // Render LaTeX preview box
                renderLaTeX(katexTarget, data.latex);
                
                // Set LaTeX Code output
                if (latexCode) {
                    latexCode.textContent = data.latex;
                }
                
                // Set confidence parameters
                if (confidenceVal) {
                    confidenceVal.textContent = data.confidence;
                }
                if (confidenceFill) {
                    confidenceFill.style.width = `${data.percent}%`;
                }

                // Stop Laser Animation
                if (laser) {
                    laser.classList.remove('scanning');
                }

                scanTrigger.disabled = false;
                scanTrigger.textContent = "Analyze with Mathpix AI";
                isScanning = false;
            }, 1200);
        });
    }

    // 4. Assessment Quiz Simulator
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizScoreVal = document.getElementById('quiz-score-val');
    const leaderboardUserScore = document.getElementById('leaderboard-user-score');
    const userRankElement = document.getElementById('user-rank');
    let hasAnsweredQuiz = false;

    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (hasAnsweredQuiz) return; // Limit to one answer attempt in this mock
            hasAnsweredQuiz = true;

            const isCorrect = option.getAttribute('data-correct') === 'true';
            
            if (isCorrect) {
                option.classList.add('selected-correct');
                // Increment scores
                const currentScore = 120;
                const newScore = currentScore + 100; // Correct answer grants 100 pts
                
                if (quizScoreVal) {
                    quizScoreVal.textContent = `${newScore} pts`;
                    quizScoreVal.style.color = '#10b981';
                    quizScoreVal.style.transform = 'scale(1.2)';
                    setTimeout(() => quizScoreVal.style.transform = 'scale(1)', 300);
                }
                
                // Show syncing state first, then update leaderboard
                if (leaderboardUserScore) {
                    const userRow = document.querySelector('.user-row');
                    const syncBadge = userRow ? userRow.querySelector('.sync-badge') : null;
                    
                    if (syncBadge) {
                        syncBadge.textContent = 'Syncing...';
                        syncBadge.className = 'sync-badge syncing';
                    }

                    setTimeout(() => {
                        leaderboardUserScore.textContent = newScore.toString();
                        if (syncBadge) {
                            syncBadge.textContent = 'Synced';
                            syncBadge.className = 'sync-badge synced';
                        }
                        
                        // Recalculate rank (in this case, since You have 220, and Debosmit has 410, You remain at rank 2 but with 220 points)
                        // Let's adjust ranks dynamically if applicable
                        sortLeaderboard();
                    }, 800);
                }
            } else {
                option.classList.add('selected-incorrect');
                // Highlight the correct option (option B)
                quizOptions.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('selected-correct');
                    }
                });
            }
        });
    });

    // 5. Competitor Real-Time simulation
    const btnSimulate = document.getElementById('btn-simulate-event');
    const leaderboardBody = document.getElementById('leaderboard-body');

    if (btnSimulate) {
        btnSimulate.addEventListener('click', () => {
            // Trigger score increments for random students in the leaderboard
            const rows = document.querySelectorAll('.leader-row');
            // Select random student row that is NOT "You"
            const nonUserRows = Array.from(rows).filter(row => row.getAttribute('data-student') !== 'You');
            if (nonUserRows.length === 0) return;

            const randomRow = nonUserRows[Math.floor(Math.random() * nonUserRows.length)];
            const studentName = randomRow.getAttribute('data-student');
            const pointsCell = randomRow.querySelector('.cell-points');
            const syncBadge = randomRow.querySelector('.sync-badge');

            if (pointsCell && syncBadge) {
                // Show syncing state
                syncBadge.textContent = 'Syncing...';
                syncBadge.className = 'sync-badge syncing';

                // Increment score
                let score = parseInt(pointsCell.textContent) || 0;
                const increment = Math.random() > 0.5 ? 50 : 100;
                const newScore = score + increment;

                setTimeout(() => {
                    pointsCell.textContent = newScore.toString();
                    pointsCell.style.color = '#06b6d4';
                    setTimeout(() => pointsCell.style.color = '', 400);

                    syncBadge.textContent = 'Synced';
                    syncBadge.className = 'sync-badge synced';

                    // Re-sort the list based on updated scores
                    sortLeaderboard();
                }, 600);
            }
        });
    }

    // Leaderboard sorting function
    function sortLeaderboard() {
        if (!leaderboardBody) return;
        const rows = Array.from(leaderboardBody.querySelectorAll('.leader-row'));
        
        rows.sort((a, b) => {
            const scoreA = parseInt(a.querySelector('.cell-points').textContent) || 0;
            const scoreB = parseInt(b.querySelector('.cell-points').textContent) || 0;
            return scoreB - scoreA;
        });

        // Re-append sorted rows
        rows.forEach((row, index) => {
            leaderboardBody.appendChild(row);
            // Update Rank badge
            const rankBadge = row.querySelector('.rank-badge');
            if (rankBadge) {
                const newRank = index + 1;
                rankBadge.textContent = newRank;
                
                // Reapply rank colors
                rankBadge.className = 'rank-badge';
                if (newRank === 1) rankBadge.classList.add('gold');
                else if (newRank === 2) rankBadge.classList.add('silver');
                else if (newRank === 3) rankBadge.classList.add('bronze');
            }
        });
    }

    // 6. FAQ Accordion Toggle
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.parentElement;
            const faqContent = faqItem.querySelector('.faq-content');
            const isOpen = faqItem.classList.contains('open');

            // Close all FAQ items first
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
                item.querySelector('.faq-content').style.maxHeight = null;
                item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
            });

            // If it wasn't open, open it
            if (!isOpen) {
                faqItem.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
                faqContent.style.maxHeight = faqContent.scrollHeight + "px";
            }
        });
    });

    // 7. Clipboard Copy
    const btnCopyLatex = document.getElementById('btn-copy-latex');
    if (btnCopyLatex) {
        btnCopyLatex.addEventListener('click', () => {
            const textToCopy = latexCode.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHTML = btnCopyLatex.innerHTML;
                btnCopyLatex.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                `;
                setTimeout(() => {
                    btnCopyLatex.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => {
                console.error("Clipboard copy failed:", err);
            });
        });
    }

    // 8. Quiz Timer Count down
    const quizTimer = document.getElementById('quiz-timer');
    if (quizTimer) {
        let totalSeconds = 28 * 60 + 45; // 28:45
        const timerInterval = setInterval(() => {
            totalSeconds--;
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                quizTimer.textContent = "00:00";
                return;
            }
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            quizTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    // 9. Developer Sandbox Tabs
    const sandboxTabs = document.querySelectorAll('.sandbox-tab-btn');
    const sandboxContentPanels = document.querySelectorAll('.sandbox-tab-content');

    sandboxTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sandboxTabs.forEach(t => t.classList.remove('active'));
            sandboxContentPanels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetTab = tab.getAttribute('data-tab');
            const targetPanel = document.getElementById(`tab-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 10. Chapter Normalizer Sandbox
    const normInput = document.getElementById('norm-input');
    const normCleaned = document.getElementById('norm-cleaned');
    const normTag = document.getElementById('norm-tag');
    const normStatus = document.getElementById('norm-status');
    const presetTags = document.querySelectorAll('.preset-tag');

    // List of simulated pre-existing normalized tags in DB
    const existingTags = [
        'quadratic_equations',
        'integral_calculus',
        'matrices_determinants',
        'probability_theory',
        'trigonometry_functions'
    ];

    function runNormalization() {
        if (!normInput || !normCleaned || !normTag || !normStatus) return;

        const rawValue = normInput.value;
        
        // Match regex-based normalization in backend (ChapterNormalizer)
        const cleaned = rawValue.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();
        const tag = cleaned.replace(/\s+/g, '_');

        normCleaned.textContent = cleaned || '(empty)';
        normTag.textContent = tag || '(empty)';

        if (!tag) {
            normStatus.textContent = 'INVALID_INPUT';
            normStatus.className = 'status-pill status-success';
            normStatus.style.background = 'rgba(239, 68, 68, 0.15)';
            normStatus.style.color = '#ef4444';
            normStatus.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            return;
        }

        // Check matching
        const exists = existingTags.includes(tag) || 
                       existingTags.some(t => t.startsWith(tag) || tag.startsWith(t));

        if (exists) {
            normStatus.textContent = 'MATCHED_EXISTING';
            normStatus.className = 'status-pill status-success';
            normStatus.style.background = 'rgba(16, 185, 129, 0.15)';
            normStatus.style.color = '#10b981';
            normStatus.style.borderColor = 'rgba(16, 185, 129, 0.3)';
        } else {
            normStatus.textContent = 'CREATED_NEW';
            normStatus.className = 'status-pill status-success';
            normStatus.style.background = 'rgba(6, 182, 212, 0.15)';
            normStatus.style.color = '#06b6d4';
            normStatus.style.borderColor = 'rgba(6, 182, 212, 0.3)';
        }
    }

    if (normInput) {
        normInput.addEventListener('input', runNormalization);
    }

    presetTags.forEach(preset => {
        preset.addEventListener('click', () => {
            if (normInput) {
                normInput.value = preset.textContent;
                runNormalization();
            }
        });
    });

    // Run initial normalization
    runNormalization();

    // 11. Scoring Engine Sandbox
    const slideTotal = document.getElementById('slide-total');
    const slideAttempted = document.getElementById('slide-attempted');
    const slideCorrect = document.getElementById('slide-correct');

    const valTotal = document.getElementById('slide-val-total');
    const valAttempted = document.getElementById('slide-val-attempted');
    const valCorrect = document.getElementById('slide-val-correct');

    const scoreAccuracy = document.getElementById('score-accuracy');
    const scoreAttAccuracy = document.getElementById('score-att-accuracy');
    const scoreAttRate = document.getElementById('score-att-rate');
    const scoreUnattempted = document.getElementById('score-unattempted');
    const scoreIncorrect = document.getElementById('score-incorrect');

    const fillAccuracy = document.getElementById('fill-accuracy');
    const fillAttAccuracy = document.getElementById('fill-att-accuracy');
    const fillAttRate = document.getElementById('fill-att-rate');

    function calculateScoring() {
        if (!slideTotal || !slideAttempted || !slideCorrect) return;

        let total = parseInt(slideTotal.value);
        let attempted = parseInt(slideAttempted.value);
        let correct = parseInt(slideCorrect.value);

        // Keep values in logical boundary conditions
        if (attempted > total) {
            attempted = total;
            slideAttempted.value = attempted;
        }
        if (correct > attempted) {
            correct = attempted;
            slideCorrect.value = correct;
        }

        // Set dynamic slider max attributes
        slideAttempted.max = total;
        slideCorrect.max = attempted;

        // Update labels
        if (valTotal) valTotal.textContent = total;
        if (valAttempted) valAttempted.textContent = attempted;
        if (valCorrect) valCorrect.textContent = correct;

        // Compute Canonical Scoring Formulas (from resultEvaluationService.js)
        const unattempted = total - attempted;
        const incorrect = attempted - correct;

        const accuracy = total > 0 ? (correct / total) * 100 : 0;
        const attemptedAccuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
        const attemptRate = total > 0 ? (attempted / total) * 100 : 0;

        // Output results to DOM
        if (scoreAccuracy) scoreAccuracy.textContent = `${accuracy.toFixed(1)}%`;
        if (scoreAttAccuracy) scoreAttAccuracy.textContent = `${attemptedAccuracy.toFixed(1)}%`;
        if (scoreAttRate) scoreAttRate.textContent = `${attemptRate.toFixed(1)}%`;
        if (scoreUnattempted) scoreUnattempted.textContent = unattempted;
        if (scoreIncorrect) scoreIncorrect.textContent = incorrect;

        // Update progress fills
        if (fillAccuracy) fillAccuracy.style.width = `${accuracy}%`;
        if (fillAttAccuracy) fillAttAccuracy.style.width = `${attemptedAccuracy}%`;
        if (fillAttRate) fillAttRate.style.width = `${attemptRate}%`;
    }

    if (slideTotal) slideTotal.addEventListener('input', calculateScoring);
    if (slideAttempted) slideAttempted.addEventListener('input', calculateScoring);
    if (slideCorrect) slideCorrect.addEventListener('input', calculateScoring);

    // Initial Scoring Calculation
    calculateScoring();

    // 12. Diagnostics Terminal Auditor Simulation
    const btnRunAudit = document.getElementById('btn-run-audit');
    const terminalOutput = document.getElementById('terminal-output');
    let isAuditing = false;

    const auditScriptLines = [
        { type: 'cmd', text: './security-audit.sh' },
        { type: 'info', text: 'Initializing MathsWithSD Automated Security & Performance Audit...' },
        { type: 'info', text: 'Connecting to database instance: MONGODB_URI_DIRECT (Atlas Replica Set)' },
        { type: 'success', text: '✓ MongoDB connection active: Cluster0.517bkho.mongodb.net (Latency 54ms)' },
        { type: 'info', text: 'Auditing collection indexes and payload structures...' },
        { type: 'success', text: '✓ Verified optimized indexing on chapter tag and cohort queues.' },
        { type: 'info', text: 'Checking NoSQL query injection vector guards...' },
        { type: 'success', text: '✓ Verified express-mongo-sanitize filters (Active)' },
        { type: 'info', text: 'Testing JWT auth endpoints and parameter sanitization...' },
        { type: 'success', text: '✓ Verified token signature verification keys & rate limiters.' },
        { type: 'info', text: 'Probing Mathpix OCR background workers & queues...' },
        { type: 'success', text: '✓ Verified Mathpix OCR queue server ping (Response: 200 OK, Latency: 94ms)' },
        { type: 'info', text: 'Auditing proctoring clock drift tampered records...' },
        { type: 'warn', text: '! Warning: Offline proctoring logs detected 3 warning events. Cleared.' },
        { type: 'success', text: '✓ Verified local device anti-time tampering security verification.' },
        { type: 'info', text: 'Compile check: running scoring evaluation tests...' },
        { type: 'info', text: 'node --test test/scoring_evaluation.test.js' },
        { type: 'success', text: '✔ resultEvaluationService: accuracy percent calculation (8ms)' },
        { type: 'success', text: '✔ resultEvaluationService: attempted accuracy calculation (3ms)' },
        { type: 'success', text: '✔ resultEvaluationService: unattempted questions mapping (4ms)' },
        { type: 'success', text: '✓ All 12 scoring test fixtures passed successfully.' },
        { type: 'info', text: '────────────────────────────────────────────────────────' },
        { type: 'success', text: 'OPERATIONAL READINESS STATUS: READY FOR STAGING/PROD' },
        { type: 'success', text: 'Droplet Host 168.144.67.199: verified compliant.' },
        { type: 'info', text: 'Deployment recommendation: SAFE TO LAUNCH (PM2 reload)' }
    ];

    if (btnRunAudit && terminalOutput) {
        btnRunAudit.addEventListener('click', () => {
            if (isAuditing) return;
            isAuditing = true;
            btnRunAudit.disabled = true;
            btnRunAudit.textContent = "Auditing System...";

            // Clear terminal
            terminalOutput.innerHTML = '';

            let currentLine = 0;
            
            function printNextLine() {
                if (currentLine >= auditScriptLines.length) {
                    isAuditing = false;
                    btnRunAudit.disabled = false;
                    btnRunAudit.textContent = "Execute Security Audit";
                    
                    // Add cursor at the end
                    const promptLine = document.createElement('div');
                    promptLine.className = 'terminal-line cursor';
                    promptLine.innerHTML = '<span style="color: #4ade80">root@droplet-168-144-67-199:~#</span> ';
                    terminalOutput.appendChild(promptLine);
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                    return;
                }

                const lineData = auditScriptLines[currentLine];
                const lineElement = document.createElement('div');
                lineElement.className = `terminal-line ${lineData.type}`;
                
                if (lineData.type === 'cmd') {
                    lineElement.innerHTML = `<span style="color: #4ade80">root@droplet-168-144-67-199:~#</span> ${lineData.text}`;
                } else {
                    lineElement.textContent = lineData.text;
                }

                terminalOutput.appendChild(lineElement);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;

                currentLine++;
                
                // Random delay between lines for typing speed effect
                const delay = lineData.type === 'cmd' ? 800 : Math.random() * 200 + 100;
                setTimeout(printNextLine, delay);
            }

            printNextLine();
        });
    }
});
