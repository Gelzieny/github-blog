import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

import moment from "moment";

// Importar locale pt-br
import 'moment/locale/pt-br';

moment.locale("pt-br");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
