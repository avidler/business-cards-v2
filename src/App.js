import './App.css';
import BusinessCard from './components/BusinessCard.jsx'
import NewMember from './components/NewMember.jsx'

function App() {
  fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    console.log(data)
      document.getElementById("person-name").textContent = data.name
      document.getElementById("person-role").textContent = data.role
      document.getElementById("person-website").textContent = data.website
      document.getElementById("person-about").textContent = data.about
      document.getElementById("person-interests").textContent = data.interests
  })
  
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });
  return (
    <div className="App">
      <BusinessCard />
      <NewMember />
    </div>
  );
}

export default App;
