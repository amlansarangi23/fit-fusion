import { useEffect } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://fit-fusion-backend.onrender.com/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }

    if(user){
      fetchWorkouts()
    }
  }, [dispatch, user])//dependencies

  return (
    <div className="home flex flex-col lg:flex-row lg:gap-8">
      <div className="workout-form-container lg:w-1/3 p-4">
        <WorkoutForm />
      </div>
      <div className="workouts-container lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 h-[30rem] p-4 overflow-auto">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  )
}

export default Home
