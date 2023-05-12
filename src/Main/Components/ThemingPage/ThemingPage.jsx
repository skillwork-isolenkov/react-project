import './_theming-page.scss';

const ThemingPage = () => {

  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];

  return (
      <>
        <div className="theming-page">
          <h1 className="theming-page__title">Theming Page</h1>

          <div className="theming-page__container">
            <div className="theming-page__row">
              {colors.map((color, index) => (
                  <div className={`theming-page__column`} key={index}>
                    <div className={`p-3 bg-${color} ${color === 'light' ? 'text-dark' : 'text-white'}`}>
                      {color}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fill-background"/>
      </>
  )
}

export default ThemingPage;