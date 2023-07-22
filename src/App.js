import { React, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Dashboard = lazy(() => import('./component/dashboard/dashboard'))
const Order = lazy(() => import('./component/orders/Order'))
const ManageMeals = lazy(() => import('./component/Meals/ManageMeals'))
function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route index path="/" Component={Dashboard} />
          <Route path="/orders" Component={Order} />
          <Route path="/add-meals" Component={ManageMeals} />
        </Routes>
      </Router>
    </Suspense>

    // this is for testing
  );
}

export default App;
