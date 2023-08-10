import { useState } from "react";



function Form() {

    const [activity, setActivity] = useState(null);
    const [affection, setAffection] = useState(null);
    const [allergic, setAllergic] = useState(null);
    const [children, setChildren] = useState(null);
    const [dogs, setDogs] = useState(null);
    const [garden, setGarden] = useState(null);

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
        <select value={activity}>
          <option value="Travelling">Travelling</option>
          <option value="50/50">50/50</option>
          <option value="Indoor">Indoor</option>
        </select>
      </div>
      
      <div>
        <select value={affection} >
          <option value="normal">Normal</option>
          <option value="Lonely">Lonely</option>
        </select>
      </div>

      <div>
        <select value={allergic} >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <select value={children} >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>
      </div>

      <div>
        <select value={dogs} >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>  
      </div>

      <div>
        <select value={garden} >
          <option value="Indoor Cat">Indoor Cat</option>
          <option value="Outdoor Cat">Outdoor Cat</option>
          </select>
          </div>  
        </form>
    </section>
    )
  }


  export default Form;