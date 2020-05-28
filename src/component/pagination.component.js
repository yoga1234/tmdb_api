import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    let pageNumber = this.props.pageNumber;
    let maxPage = this.props.maxPage;
    
    return (
      <nav className="mt-5" aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-lg">
            {
              pageNumber === 1 ? <li className="page-item disabled"><button className="page-link">Previous</button></li> : <li className="page-item"><button onClick={() => {this.props.paging(-1)}} className="page-link">Previous</button></li>
            }
          <li className="page-item disabled"><p className="page-link">Page: {pageNumber}</p></li>
          {
            pageNumber <= maxPage ? <li className="page-item"><button onClick={() => {this.props.paging(1)}} className="page-link">Next</button></li> : <li className="page-item disabled"><button className="page-link">Next</button></li>
          }
        </ul>
      </nav>
    )
  }
}

export default Pagination;