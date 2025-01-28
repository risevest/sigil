import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.32244 5.96559C5.42367 5.85376 5.5282 5.74386 5.63604 5.63602C6.11945 5.15261 6.64417 4.73569 7.19883 4.38526C6.8849 4.29873 6.60274 4.24748 6.35542 4.22882C5.78308 4.18566 5.53243 4.32157 5.42553 4.42847C5.31863 4.53537 5.18272 4.78602 5.22589 5.35835C5.23974 5.54197 5.27156 5.74481 5.32244 5.96559ZM20.7257 14.2107C20.7873 14.3337 20.8463 14.4557 20.9028 14.5766C21.3793 15.5977 21.6941 16.5944 21.7616 17.4903C21.8289 18.3819 21.656 19.3107 20.9819 19.9848C20.3077 20.659 19.379 20.8318 18.4874 20.7646C17.7068 20.7057 16.8497 20.4592 15.9666 20.0815L15.964 20.0827C15.8109 20.0172 15.657 19.9478 15.5025 19.8746C13.4695 18.9123 11.1435 17.2205 8.9599 15.0369C6.77855 12.8556 5.08807 10.5322 4.1252 8.50073C4.05178 8.34582 3.98205 8.19148 3.91629 8.03796L3.91734 8.03582C3.53815 7.15052 3.29057 6.29122 3.23155 5.50877C3.1643 4.61713 3.33717 3.6884 4.01132 3.01425C4.68547 2.34011 5.61419 2.16724 6.50583 2.23449C7.40174 2.30206 8.3984 2.61685 9.41949 3.09335C9.54253 3.15077 9.66667 3.21089 9.79181 3.27366C12.7623 2.52497 16.0404 3.31242 18.364 5.63602C20.6882 7.96029 21.4755 11.2395 20.7257 14.2107ZM19.6128 16.8042C19.2627 17.3578 18.8465 17.8814 18.364 18.3639C18.257 18.4709 18.1479 18.5747 18.037 18.6752C18.2553 18.7252 18.456 18.7565 18.6378 18.7702C19.2101 18.8134 19.4608 18.6775 19.5677 18.5706C19.6746 18.4637 19.8105 18.2131 19.7673 17.6407C19.7488 17.3952 19.6982 17.1154 19.6128 16.8042ZM5.63604 18.3639C3.37241 16.1003 2.56666 12.9309 3.21877 10.0224C4.30105 12.0032 5.92374 14.1221 7.89924 16.0976C9.87632 18.0747 11.9971 19.6985 13.9794 20.7808C11.0705 21.4337 7.90015 20.6281 5.63604 18.3639Z" />
    </Svg>
  )
}

Icon.displayName = 'PlanetFill'

/**
 * Remix Icon: Planet Fill
 * @see {@link https://remixicon.com/icon/planet-fill Remix Icon Docs}
 */
export const PlanetFill = memo(Icon)
