import Profile from './pages/Profile'; // Import new page

<Routes>
  {/* Existing routes */}
  <Route path="/" element={<Home />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/tv-shows" element={<TVShows />} />
  <Route path="/my-list" element={<MyList />} />
  {/* New route */}
  <Route path="/profile" element={<Profile />} />
</Routes>

