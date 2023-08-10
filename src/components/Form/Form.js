import { useState } from "react";
import "./Form.scss";



function Form() {

    const [Activity, setActivity] = useState(null);
    const [Affection, setAffection] = useState(null);
    const [Allergic, setAllergic] = useState(null);
    const [Children, setChildren] = useState(null);
    const [Dogs, setDogs] = useState(null);
    const [Garden, setGarden] = useState(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event);
    }

  
    const handleChange = (event) => {
      setActivity(event.target.value)
      setAffection(event.target.value)
      setAllergic(event.target.value)
      setChildren(event.target.value)
      setDogs(event.target.value)
      setGarden(event.target.value)
    }
  
   
    return (
    <section>
      <form onSubmit={handleSubmit}>

        <div>
          <p>How much do you travel?</p>
          <select className="activity" value={Activity}>
          <option value="choose option">choose option</option>
          <option value="I hate leaving the house">I hate leaving the house</option>
          <option value="50/50">50/50</option>
          <option value="I love the outdoors">I love the outdoors</option>
        </select>
      </div>
      
      <div>
        <p>Are you an affectionate person?</p>
        <select className="affection" value={Affection} >
        <option value="choose option">choose option</option>
          <option value="normal">Normal</option>
          <option value="Lonely">Lonely</option>
          <option value="Im so needy">Im so needy</option>
        </select>
      </div>

      <div>
        <p>Are you allergic to Cats?</p>
        <select className="allergic" value={Allergic} >
        <option value="choose option">choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <p>Do you have children?</p>
        <select className="children" value={Children} >
        <option value="choose option">choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>
      </div>

      <div>
        <p>Do you have a Dogs?</p>
        <select className="dogs" value={Dogs} >
        <option value="choose option">choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>  
      </div>

      <div>
        <p>Do you have a garden?</p>
        <select className="garden" value={Garden} >
        <option value="choose option">choose option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>
          </div>  
        </form>
    </section>
    )
  }


  export default Form;