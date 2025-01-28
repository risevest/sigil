import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1288)">
        <Path
          d="M0 19.9999C0 8.95425 8.95437 -0.00012207 20 -0.00012207C31.0456 -0.00012207 40 8.95425 40 19.9999"
          fill={color}
        />
        <Path
          d="M26.9569 18.5996L24.1143 19.9366L25.6281 22.6896L22.5414 22.0991L22.1504 25.2172L20.0004 22.9239L17.8504 25.2172L17.4594 22.0991L14.3728 22.6895L15.8864 19.9366L13.0439 18.5996L15.8864 17.2624L14.3728 14.5097L17.4593 15.1L17.8505 11.9821L20.0004 14.2753L22.1504 11.9821L22.5414 15.1L25.6282 14.5097L24.1146 17.2627L26.9569 18.5996Z"
          fill={color}
        />
        <Path
          d="M25.2181 6.52154H21.305C21.305 5.8013 20.7209 5.21716 20.0006 5.21716C19.2803 5.21716 18.6963 5.80123 18.6963 6.52154H14.7832C14.7832 7.24185 15.4107 7.82591 16.131 7.82591H16.0875C16.0875 8.54622 16.6714 9.13029 17.3919 9.13029C17.3919 9.8506 17.9758 10.4347 18.6963 10.4347H21.3049C22.0252 10.4347 22.6093 9.85068 22.6093 9.13029C23.3295 9.13029 23.9137 8.5463 23.9137 7.82591H23.8702C24.5906 7.82591 25.2181 7.24193 25.2181 6.52154V6.52154Z"
          fill={color}
        />
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95437 40 0 31.0456 0 20H40Z"
          fill={color}
        />
        <Path
          d="M20.0004 39.9999C26.2521 39.9999 31.8329 37.1308 35.5006 32.6383C34.8409 32.1886 34.4847 31.4615 33.3334 31.4615C31.6668 31.4615 31.6668 32.9855 30.0002 32.9855C28.3337 32.9855 28.3336 31.4615 26.667 31.4615C25.0004 31.4615 25.0004 32.9855 23.3337 32.9855C21.667 32.9855 21.6669 31.4615 20.0001 31.4615C18.3334 31.4615 18.3334 32.9855 16.6669 32.9855C15.0005 32.9855 15.0005 31.4615 13.3338 31.4615C11.667 31.4615 11.667 32.9855 10.0002 32.9855C8.33344 32.9855 8.33344 31.4615 6.66664 31.4615C5.51555 31.4615 5.15938 32.1884 4.5 32.6382C8.1675 37.1308 13.7486 39.9999 20.0004 39.9999V39.9999Z"
          fill={color}
        />
        <Path
          d="M36.6667 22.5506C35.0001 22.5506 35.0001 21.0267 33.3334 21.0267C31.6667 21.0267 31.6667 22.5506 30.0002 22.5506C28.3336 22.5506 28.3335 21.0267 26.667 21.0267C25.0003 21.0267 25.0003 22.5506 23.3336 22.5506C21.6669 22.5506 21.6668 21.0267 20 21.0267C18.3334 21.0267 18.3334 22.5506 16.6668 22.5506C15.0004 22.5506 15.0004 21.0267 13.3338 21.0267C11.667 21.0267 11.667 22.5506 10.0002 22.5506C8.3334 22.5506 8.3334 21.0267 6.6666 21.0267C5.00019 21.0267 5.00019 22.5506 3.33355 22.5506C1.6759 22.5506 1.66629 21.0435 0.0263672 21.0274C0.0725391 21.9423 0.181758 22.8404 0.346914 23.7187C1.67535 23.9139 1.79168 25.2173 3.33363 25.2173C5.00027 25.2173 5.00027 23.6935 6.66668 23.6935C8.33347 23.6935 8.33347 25.2173 10.0003 25.2173C11.6671 25.2173 11.6671 23.6935 13.3339 23.6935C15.0005 23.6935 15.0005 25.2173 16.6669 25.2173C18.3336 25.2173 18.3335 23.6935 20.0001 23.6935C21.6669 23.6935 21.6669 25.2173 23.3337 25.2173C25.0005 25.2173 25.0005 23.6935 26.6671 23.6935C28.3337 23.6935 28.3337 25.2173 30.0003 25.2173C31.6668 25.2173 31.6669 23.6935 33.3335 23.6935C35.0003 23.6935 35.0003 25.2173 36.6668 25.2173C38.2089 25.2173 38.3253 23.914 39.6538 23.7188C39.819 22.8404 39.9281 21.9424 39.9745 21.0275C38.3342 21.0437 38.3245 22.5506 36.6667 22.5506V22.5506Z"
          fill={color}
        />
        <Path
          d="M33.3336 26.2441C31.667 26.2441 31.667 27.768 30.0004 27.768C28.3338 27.768 28.3338 26.2441 26.6672 26.2441C25.0005 26.2441 25.0005 27.768 23.3338 27.768C21.667 27.768 21.667 26.2441 20.0002 26.2441C18.3336 26.2441 18.3336 27.768 16.667 27.768C15.0006 27.768 15.0006 26.2441 13.334 26.2441C11.6672 26.2441 11.6672 27.768 10.0004 27.768C8.33359 27.768 8.33359 26.2441 6.6668 26.2441C5.00039 26.2441 5.00039 27.768 3.33375 27.768C2.14289 27.768 1.80273 26.9902 1.09766 26.5459C1.56703 27.902 2.17766 29.1921 2.91305 30.398C3.04094 30.4216 3.18016 30.4347 3.33375 30.4347C5.00039 30.4347 5.00039 28.9109 6.6668 28.9109C8.33359 28.9109 8.33359 30.4347 10.0004 30.4347C11.6672 30.4347 11.6672 28.9109 13.334 28.9109C15.0006 28.9109 15.0006 30.4347 16.667 30.4347C18.3337 30.4347 18.3337 28.9109 20.0002 28.9109C21.667 28.9109 21.667 30.4347 23.3338 30.4347C25.0006 30.4347 25.0006 28.9109 26.6672 28.9109C28.3338 28.9109 28.3338 30.4347 30.0004 30.4347C31.667 30.4347 31.667 28.9109 33.3336 28.9109C35.0004 28.9109 35.0004 30.4347 36.667 30.4347C36.8207 30.4347 36.9599 30.4216 37.0878 30.398C37.8232 29.1921 38.4338 27.902 38.9034 26.5459C38.1982 26.9901 37.858 27.768 36.667 27.768C35.0004 27.768 35.0004 26.2441 33.3336 26.2441Z"
          fill={color}
        />
        <Path
          d="M39.938 18.4198C38.3341 18.4577 38.3119 19.942 36.6664 19.942C34.9998 19.942 34.9998 18.4181 33.333 18.4181C31.6664 18.4181 31.6664 19.942 29.9998 19.942C28.3333 19.942 28.3332 18.4181 26.6666 18.4181C25 18.4181 25 19.942 23.3333 19.942C21.6666 19.942 21.6665 18.4181 19.9997 18.4181C18.333 18.4181 18.333 19.942 16.6665 19.942C15.0001 19.942 15.0001 18.4181 13.3334 18.4181C11.6666 18.4181 11.6666 19.942 9.99984 19.942C8.33305 19.942 8.33305 18.4181 6.66625 18.4181C4.99984 18.4181 4.99984 19.942 3.3332 19.942C1.68797 19.942 1.6657 18.4579 0.0619531 18.4198C0.02125 18.9412 0 19.4681 0 19.9999C0 20.3642 0.0103125 20.7261 0.0297656 21.0856C1.66594 21.104 1.6768 22.6086 3.33328 22.6086C4.99992 22.6086 4.99992 21.0848 6.66633 21.0848C8.33312 21.0848 8.33312 22.6086 9.99992 22.6086C11.6667 22.6086 11.6667 21.0848 13.3335 21.0848C15.0002 21.0848 15.0002 22.6086 16.6666 22.6086C18.3332 22.6086 18.3332 21.0848 19.9998 21.0848C21.6666 21.0848 21.6666 22.6086 23.3334 22.6086C25.0002 22.6086 25.0002 21.0848 26.6667 21.0848C28.3334 21.0848 28.3334 22.6086 29.9999 22.6086C31.6665 22.6086 31.6666 21.0848 33.3331 21.0848C34.9999 21.0848 34.9999 22.6086 36.6665 22.6086C38.3231 22.6086 38.334 21.104 39.9705 21.0856C39.9897 20.7261 40 20.3642 40 19.9999C40 19.4681 39.9787 18.9412 39.938 18.4198V18.4198Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1288">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Kiribati'

/**
 * Flags by `Deji.Zeal`: Kiribati
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Kiribati = memo(Icon)
