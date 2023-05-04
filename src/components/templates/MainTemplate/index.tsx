import { HTMLAttributes, useEffect, useState } from 'react'
// import Header from '../../common/Header'
import { AppBar, IconButton, useTheme } from 'hikari-ui'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import classNames from 'classnames'
// import ThemeSwitch from '../../ui/forms/ThemeSwitch'
interface MainTemplateProps extends HTMLAttributes<HTMLDivElement> {}

function MainTemplate({ children, ...rest }: MainTemplateProps) {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // useEffect(() => {
  //   if (localStorage.getItem('theme') === 'dark') {
  //     setTheme('dark')
  //   }
  //   localStorage.setItem('theme', 'dark')
  // }, [])

  const { toogleTheme, isDarkMode } = useTheme()

  return (
    <div
      className={classNames(
        'relative',
        'flex flex-col',
        'min-h-screen max-w-screen',
        'overflow-x-hidden'
      )}
      {...rest}
    >
      {/* <Header />
       */}
      <AppBar>
        <AppBar.Tool className={classNames('justify-between mx-auto max-w-7xl')}>
          <h2 className={classNames('text-base sm:text-2xl text-light font-bold')}>
            Gerador de dados fakes
          </h2>
          <div className="flex items-center">
            <IconButton
              onClick={toogleTheme}
              variantStyle="light-ghost"
              icon={isDarkMode ? <FaRegSun /> : <FaRegMoon />}
            />
          </div>
        </AppBar.Tool>
      </AppBar>
      <div
        className={classNames('flex', 'w-full h-full pt-[35px]', 'overflow-x-hidden')}
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className="flex flex-col flex-1 px-7">{children}</div>
      </div>
    </div>
  )
}

export default MainTemplate
