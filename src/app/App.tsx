import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/widgets/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { PricesPage } from '@/pages/PricesPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { CalculatorPage } from '@/pages/CalculatorPage';
import { ToastProvider } from '@/features/toast/ToastProvider';
import { CustomCursor } from '@/shared/ui/CustomCursor/CustomCursor';

export function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ToastProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </BrowserRouter>
  );
}
