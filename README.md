# React package - MediaQuery component, useMediaQuery hook

#### Пример работы хука useMediaQuery

```javascript
import React from 'react'
import { useMediaQuery } from '@my-npm-user/react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return <div>
    <h1>Device Test!</h1>
    {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
    {isBigScreen && <p>You  have a huge screen</p>}
    {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    {isRetina && <p>You are retina</p>}
  </div>
}
```

#### Пример работы компонента MediaQuery

```javascript
import React from 'react'
import MediaQuery from '@my-npm-user/react-responsive'

const Example = () => (
  <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx"> {/* @media (-webkit-min-device-pixel-ratio: 2) */}
      {/* You can also use a function (render prop) as a child */}
      {(matches) =>
        matches
          ? <p>You are retina</p>
          : <p>You are not retina</p>
      }
    </MediaQuery>
  </div>
)
````

### Локальное использование библиотеки:

В папке с бибилиотекой запускаем команды
```
npm i
npm run build
npm link
```

В папке с проектом, в который хотим импортировать библиотеку, запускаем команды:
```
npm link <путь до библиотеки>/node_modules/react <путь до библиотеки>/node_modules/react-dom <путь до библиотеки>
```

Импортируем библиотеку в нужный файл:

```
import MediaQuery, { useMediaQuery } from "react-responsive";
```
