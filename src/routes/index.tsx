import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="p-2">
      <h3 className='text-2xl font-bold text-yellow-500'>Welcome Home!</h3>
    </div>
  ),
})
