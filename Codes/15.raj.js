import React, { useState, useContext } from 'react';
	
// Step 1: Create an ExpenseContext
	const ExpenseContext = React.createContext();
	// Step 2: Create an ExpenseProvider component
	const ExpenseProvider = ({ children }) => {
	  const [expenses, setExpenses] = useState([]);
	
	  // Step 3: Define functions to add expenses and update the state
	  const addExpense = (title, category) => {
	    const newExpense = { title, category };
	    setExpenses([...expenses, newExpense]);
	  };
	
	  // Step 4: Provide the context value to the children components
	  return (
  	    <ExpenseContext.Provider value={{ expenses, addExpense }}>
  	      {children}
  	    </ExpenseContext.Provider>
  	  );
  	};
  
	
	// Step 5: Create an ExpenseForm component to add expenses
	const ExpenseForm = () => {
	  const { addExpense } = useContext(ExpenseContext);
	  const [title, setTitle] = useState('');
	  const [category, setCategory] = useState('');
	
	  const handleSubmit = (e) => {
	    e.preventDefault();
	    addExpense(title, category);
	    setTitle('');
	    setCategory('');
	  };
	
	  return (
	    <form onSubmit={handleSubmit}>
	      <input
	        type="text"
	        placeholder="Expense title"
	        value={title}
	        onChange={(e) => setTitle(e.target.value)}
	      />
	      <select
	        value={category}
	        onChange={(e) => setCategory(e.target.value)}
	      >
	        <option value="">Select a category</option>
	        <option value="Groceries">Groceries</option>
	        <option value="Bill payments">Bill payments</option>
	        <option value="Education">Education</option>
	        <option value="Entertainment">Entertainment</option>
	      </select>
	      <button type="submit">Add Expense</button>
	    </form>
	  );
	};
	
	// Step 6: Create an ExpenseList component to display expenses
	const ExpenseList = () => {
	  const { expenses } = useContext(ExpenseContext);
	
	  return (
	    <div>
	      <h2>Expenses:</h2>
	      <ul>
	        {expenses.map((expense, index) => (
	          <li key={index}>
	            {expense.title} - {expense.category}
	          </li>
	        ))}
	      </ul>
	    </div>
	  );
	};
	
	// Step 7: Create the App component
 const App = () => {
  return (
	    <ExpenseProvider>
	      <ExpenseForm />
	      <ExpenseList />
	    </ExpenseProvider>
	  );
	};
	
	export default App;
