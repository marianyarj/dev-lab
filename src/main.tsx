import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
