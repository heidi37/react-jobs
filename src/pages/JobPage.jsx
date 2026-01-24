import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'

const JobPage = () => {

  const [job, setJob] = useState(null)
  const [ loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      console.log(id)
      const apiURL = '/api/jobs/' + (id)
      try {
        const res = await fetch(apiURL)
        const data = await res.json()
        console.log(data)
        setJob(data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJob()
  }, [])

  return (
    <div>
      { loading ? <Spinner loading={ loading } /> :
      <h1>{job.title}</h1>
    }
    </div>
  )
}

export default JobPage
