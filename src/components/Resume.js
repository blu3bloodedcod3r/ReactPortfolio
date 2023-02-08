import React, {Component} from 'react';
// import { Document, Page } from 'react-pdf';

const DownloadButton = props => { 
  // const changeText = (text) => setButtonText(text);
  const downloadFile = () => { 
    window.location.href = "https://docs.google.com/document/d/1RLd_oglJJ8LqfoQzzCB1_7fP26V4TebHd5TUYn403x0/edit" 
  } 
    return ( <button onClick= {downloadFile} width='300px' height='250px' /> ) 
} 

export default DownloadButton; 

// export default function Resume() {
//     class App extends Component{
//     state = {
//       numPages: null,
//       pageNumber: 1,
//     };
  
//     onDocumentLoadSuccess = ({ numPages }) => {
//       this.setState({ numPages });
//     };

//     render() 
//         {const { pageNumber, numPages } = this.state;
//         return (
//             <div className='resume'>
//             <Document
//             file="file:///C:/Users/Kriis/AppData/Local/Temp/Temp1_WebDevRes.zip/WebDevRes.html"
//             onLoadSuccess={this.onDocumentLoadSuccess}
//             >
//             <Page pageNumber={pageNumber} />
//             </Document>
//             <p>Page {pageNumber} of {numPages}</p>
//             </div>  
//         );
//         }
//     };
// }
