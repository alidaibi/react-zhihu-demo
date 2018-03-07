import React, { Component } from 'react';
import classnames from 'classnames';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchFocus = this.searchFocus.bind(this);
    this.searchBlur = this.searchBlur.bind(this);
    this.state = {
      isFocus: false
    };
  }
  searchFocus() {
    this.setState({ isFocus: true });
  }
  searchBlur() {
    this.setState({ isFocus: false });
  }
  render() {
    const search_wrapper_class = classnames({
      'search-bar-wrapper': true,
      'search-bar-wrapper-focused': this.state.isFocus
    });
    const search_bar_quesion_class = classnames({
      'Button': true,
      'search-bar-quesion-button': true,
      'search-bar-quesion-hide': this.state.isFocus
    });
    return (
      <div className='search-bar'>
        <div className='search-bar-wrapper-container'>
          <div className={search_wrapper_class}>
            <input className='search-bar-wrapper-input Input' type='text' placeholder='搜索你感兴趣的内容...' onFocus={this.searchFocus} onBlur={this.searchBlur} />
            <button className='search-bar-wrapper-button'>
              <svg viewBox="0 0 16 16" className="Icon Icon--search" aria-hidden="true" style={{ fill: '#afbdcf', height: '16px', width: '16px' }}>
                <g>
                  <path d="M12.054 10.864c.887-1.14 1.42-2.57 1.42-4.127C13.474 3.017 10.457 0 6.737 0S0 3.016 0 6.737c0 3.72 3.016 6.737 6.737 6.737 1.556 0 2.985-.533 4.127-1.42l3.103 3.104c.765.46 1.705-.37 1.19-1.19l-3.103-3.104zm-5.317.925c-2.786 0-5.053-2.267-5.053-5.053S3.95 1.684 6.737 1.684 11.79 3.95 11.79 6.737 9.522 11.79 6.736 11.79z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <button className={search_bar_quesion_class}>提问</button>
      </div>
    );
  }
}

export default SearchBar;
