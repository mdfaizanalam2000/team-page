import './App.css';
import UniversityCard from './components/UniversityCard';
import universities from "./jsons/universities.json";
import mentors from "./jsons/mentors.json";
import MentorCard from './components/MentorCard';

function App() {
  console.log(universities);
  return (
    <div className="container">
      <h1 className='text-center mt-5'>Team Page</h1>
      <hr />
      <p className='text-center'>Learn from Scientists, research scholars from the top institutes in the world.</p>
      <div className="row">
        {
          universities.map((item) => {
            return <>
              <UniversityCard name={item.name} />
            </>
          })
        }
      </div>
      <hr />
      <h2 className='text-center my-3'>Meet your mentors</h2>
      <div className="row">
        {
          mentors.map((item) => {
            return <>
              <MentorCard name={item.name} university={item.university} />
            </>
          })
        }
      </div>
      <hr />
      <h2 className='text-center my-3'>Mentor & Advisor</h2>
      <div className="row mb-5">
        <div className="col-md-4">
          <div class="card" style={{ width: "auto" }}>
            <img src="https://source.unsplash.com/random/?profile" class="card-img-top" alt="advisor" style={{ maxHeight: "15rem" }} />
            <div class="card-body">
              <h5 class="card-title text-center">Dr Omkar</h5>
              <p class="card-text text-center">Principal Project Scientist, IIT Madras</p>
              <div className="text-center">
                <button class="btn btn-primary">Message Him Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card" style={{ width: "auto" }}>
            <img src="https://source.unsplash.com/random/?profile" class="card-img-top" alt="advisor" style={{ maxHeight: "15rem" }} />
            <div class="card-body">
              <h5 class="card-title text-center">Akhil Tripathi</h5>
              <p class="card-text text-center">IIT Bombay</p>
              <div className="text-center">
                <button class="btn btn-primary">Message Him Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card" style={{ width: "auto" }}>
            <img src="https://source.unsplash.com/random/?profile" class="card-img-top" alt="advisor" style={{ maxHeight: "15rem" }} />
            <div class="card-body">
              <h5 class="card-title text-center">Vivek Dwivedi</h5>
              <p class="card-text text-center">IIT Delhi</p>
              <div className="text-center">
                <button class="btn btn-primary">Message Him Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
