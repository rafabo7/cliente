import './loader.css'

export default function Loading({ isLoading }) {
  
  if (!isLoading) return

  return (
    <div className="loading">
      <div className="loader"></div>
    </div>
  )
}

