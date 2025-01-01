import { Suspense } from 'react'
import EditPrompt from '@/components/UpdatePrompt'

const page = () => {
  return (
    <Suspense>
      <EditPrompt/>
    </Suspense>
  )
}

export default page
