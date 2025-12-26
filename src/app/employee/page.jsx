import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

const page = () => {
  return (
    <>  <ProtectedRoute allowedRoles={["admin"]}>
        <h1>Welcome to Admin ddwdd  Page</h1>
      </ProtectedRoute>
    </>
  )
}

export default page