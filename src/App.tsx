import styled from 'styled-components';
import { PDFViewer } from '@react-pdf/renderer';

import { TestTemplate } from './templates/TestTemplate';

const ResumePDFView = () => {
  return (
    <Container>
      <PDFViewer>
        <TestTemplate />
      </PDFViewer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  & > iframe {
    width: 100%;
    min-height: 100vh;
  }
`;

function App() {
  return (
    <div>
      <ResumePDFView />
    </div>
  );
}

export default App;
