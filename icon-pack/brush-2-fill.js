import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5357 15.9465L18.657 13.8252L15.475 10.6432L19.0106 7.10768L16.8892 4.98636L13.3537 8.52189L10.1717 5.33991L8.05041 7.46123L16.5357 15.9465ZM13.3537 5.69346L16.1821 2.86504C16.5727 2.47451 17.2058 2.47451 17.5963 2.86504L21.1319 6.40057C21.5224 6.79109 21.5224 7.42426 21.1319 7.81478L18.3035 10.6432L20.7783 13.1181C21.1689 13.5086 21.1689 14.1418 20.7783 14.5323L13.0002 22.3105C12.6096 22.701 11.9765 22.701 11.5859 22.3105L1.68645 12.411C1.29592 12.0205 1.29592 11.3873 1.68645 10.9968L9.46462 3.21859C9.85515 2.82807 10.4883 2.82807 10.8788 3.21859L13.3537 5.69346Z" />
    </Svg>
  )
}

Icon.displayName = 'Brush2Fill'

/**
 * Remix Icon: Brush 2 Fill
 * @see {@link https://remixicon.com/icon/brush-2-fill Remix Icon Docs}
 */
export const Brush2Fill = memo(Icon)
