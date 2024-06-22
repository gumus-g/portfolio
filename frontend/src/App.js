// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage.js';
import RecipesPage from './pages/RecipesPage.js';
import TopicsPage from './pages/TopicsPage.js';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddRecipePageForm from './pages/AddRecipePageForm.js';
import EditRecipePageForm from './pages/EditRecipePageForm.js';

// If your schema requires SHORT data input, then use the TABLE design.
//import EditRecipePageTable from './pages/EditRecipePageTable.js';
//import AddRecipePageTable from './pages/AddRecipePageTable.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [recipe, setRecipeToEdit] = useState([])
//  const [Gallery, setGallery] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1><i><img src="android-chrome-192x192.png" alt="Gulper Gumus" /> </i>Gulper Gumus's Portfolio</h1>
            <p>Web Developments.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage />} />
                    <Route path="/log" element={<RecipesPage setRecipe={setRecipeToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                                   
         

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddRecipePageForm />} />   
                     <Route path="/update" element={<EditRecipePageForm recipeToEdit={recipe} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Gulper Gumus</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;