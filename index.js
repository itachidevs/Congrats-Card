const element = (
  // Write your code here.
  <div className='container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='profile-container'>
      <img
        className='profile-img'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h3 className='profile-name'>Kiran V</h3>
      <p className='profile-description'>
        Vishnu Institution of computer Education and Techmology Bhimavaram
      </p>
      <img
        className='watch-img'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
