import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';

export default function Resume() {
    class App extends Component{
    state = {
      numPages: null,
      pageNumber: 1,
    };
  
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };

    render() 
        {const { pageNumber, numPages } = this.state;
        return (
            <div className='resume'>
            <Document
            file="file:///C:/Users/Kriis/AppData/Local/Temp/Temp1_WebDevRes.zip/WebDevRes.html"
            onLoadSuccess={this.onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            </div>  
        );
        }
    };
}
