import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
  render() {
    const pageNumber = this.props.pageNumber;
    
    return (
      <nav className="mt-5" aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-lg">
            {
              pageNumber === 1 ? <li className="page-item disabled"><Link to="https://yogasmara.com" className="page-link">Previous</Link></li> : <li className="page-item"><Link to="https://yogasmara.com" className="page-link">Previous</Link></li>
            }
          <li className="page-item disabled"><p className="page-link">Page: 1</p></li>
          <li className="page-item"><Link to="https://yogasmara.com" className="page-link">Next</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Pagination;