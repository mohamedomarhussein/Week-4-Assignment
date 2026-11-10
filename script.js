document.addEventListener("DOMContentLoaded", () => {
    // =====================================
    // SPENDWISE CONFIGURATION
    // =====================================
    const STORAGE_KEY = "spendwise_expenses";
    const MONTHLY_INCOME = 4850;

    const form = document.getElementById("expense-form");
    const nameInput = document.getElementById("expense-name");
    const amountInput = document.getElementById("expense-amount");
    const categoryInput = document.getElementById("expense-category");
    const dateInput = document.getElementById("expense-date");

    const tableBody = document.querySelector(
        ".expenses-section .table-responsive tbody"
    );

    const statValues = document.querySelectorAll(
        ".summary-stats .stat-card .stat-value"
    );

    let expenses = [];

    const categoryNames = {
        food: "Food",
        transport: "Transport",
        rent: "Rent",
        entertainment: "Entertainment",
        other: "Other"
    };

    // =====================================
    // CURRENCY FORMATTING
    // =====================================
    function formatMoney(amount) {
        return "$" + Number(amount).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    // =====================================
    // SAFE HTML TEXT
    // =====================================
    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[character]);
    }

    // =====================================
    // LOAD EXPENSES
    // =====================================
    function loadExpenses() {
        try {
            const savedExpenses = localStorage.getItem(STORAGE_KEY);

            if (savedExpenses !== null) {
                const parsed = JSON.parse(savedExpenses);

                expenses = Array.isArray(parsed) ? parsed : [];
            } else {
                // Read the five sample expenses already in HTML.
                const existingRows = tableBody
                    ? Array.from(tableBody.querySelectorAll("tr"))
                    : [];

                expenses = existingRows.map((row, index) => {
                    const cells = row.querySelectorAll("td");

                    return {
                        id: index + 1,
                        name: cells[0]?.textContent.trim() || "",
                        amount: Number(
                            cells[1]?.textContent.replace(/[$,]/g, "")
                        ),
                        category: Object.keys(categoryNames).find(
                            key => categoryNames[key].toLowerCase() ===
                                cells[2]?.textContent.trim().toLowerCase()
                        ) || "other",
                        date: cells[3]?.textContent.trim() || ""
                    };
                }).filter(expense =>
                    expense.name &&
                    Number.isFinite(expense.amount) &&
                    expense.date
                );

                saveExpenses();
            }
        } catch (error) {
            console.error("Error loading expenses:", error);
            expenses = [];
        }
    }

    // =====================================
    // SAVE EXPENSES
    // =====================================
    function saveExpenses() {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(expenses)
            );
        } catch (error) {
            console.error("Could not save expenses:", error);
            alert("Could not save your expenses in this browser.");
        }
    }

    // =====================================
    // DISPLAY EXPENSES
    // =====================================
    function displayExpenses() {
        if (!tableBody) {
            console.error("Expenses table body was not found.");
            return;
        }

        if (expenses.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="4">No expenses recorded yet.</td>
                </tr>
            `;
            return;
        }

        const sortedExpenses = [...expenses].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );

        tableBody.innerHTML = sortedExpenses.map(expense => `
            <tr>
                <td>${escapeHTML(expense.name)}</td>
                <td>${formatMoney(expense.amount)}</td>
                <td>${escapeHTML(
                    categoryNames[expense.category] || expense.category
                )}</td>
                <td>${escapeHTML(expense.date)}</td>
            </tr>
        `).join("");
    }

    // =====================================
    // UPDATE DASHBOARD STATISTICS
    // =====================================
    function updateStatistics() {
        const totalExpenses = expenses.reduce(
            (total, expense) => total + Number(expense.amount),
            0
        );

        const balance = MONTHLY_INCOME - totalExpenses;

        if (statValues.length >= 3) {
            statValues[0].textContent = formatMoney(MONTHLY_INCOME);
            statValues[1].textContent = formatMoney(totalExpenses);
            statValues[2].textContent = formatMoney(balance);
        }
    }

    // =====================================
    // REFRESH APPLICATION
    // =====================================
    function refreshApp() {
        saveExpenses();
        displayExpenses();
        updateStatistics();
    }

    // =====================================
    // ADD EXPENSE
    // =====================================
    if (form) {
        const addButton = form.querySelector(".btn-primary");

        if (addButton) {
            addButton.addEventListener("click", () => {
                const name = nameInput.value.trim();
                const amount = Number(amountInput.value);
                const category = categoryInput.value;
                const date = dateInput.value;

                if (!name) {
                    alert("Please enter the expense name.");
                    nameInput.focus();
                    return;
                }

                if (!Number.isFinite(amount) || amount <= 0) {
                    alert("Please enter a valid amount.");
                    amountInput.focus();
                    return;
                }

                if (!category) {
                    alert("Please select a category.");
                    categoryInput.focus();
                    return;
                }

                if (!date) {
                    alert("Please select the expense date.");
                    dateInput.focus();
                    return;
                }

                const newExpense = {
                    id: Date.now(),
                    name: name,
                    amount: amount,
                    category: category,
                    date: date
                };

                expenses.push(newExpense);

                refreshApp();

                form.reset();

                alert("Expense added successfully!");
            });
        } else {
            console.error("Add Expense button was not found.");
        }
    } else {
        console.error("Form with ID expense-form was not found.");
    }

    // =====================================
    // INITIALIZE APPLICATION
    // =====================================
    if (!tableBody) {
        console.error("Could not find the expenses table.");
    }

    loadExpenses();
    refreshApp();

    console.log("SpendWise loaded successfully!");
});
