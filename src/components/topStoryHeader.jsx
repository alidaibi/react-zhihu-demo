import React, { Component } from 'react';

class TopStoryHeader extends Component {
  render() {
    return (
      <div className='top-story-header'>
        <div className='top-story-bar'>
          <button className='top-story-header-nav-button'>写问题</button>
          <a href='javascript:;' className='top-story-header-nav-button'>回答</a>
          <a href='javascript:;' className='top-story-header-nav-button'>写文章</a>
          <a href='javascript:;' className='top-story-header-nav-button'>写想法</a>
        </div>
        <a href='javascript:;' className='top-story-header-nav-button fr'>草稿</a>
      </div>
    );
  }
}

export default TopStoryHeader;
