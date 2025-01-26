import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.47715 2 2 6.47715 2 12 2 17.5228 6.47715 22 12 22 17.5228 22 22 17.5228 22 12H20C20 16.4183 16.4183 20 12 20 7.58172 20 4 16.4183 4 12 4 7.58172 7.58172 4 12 4 14.7498 4 17.1755 5.38734 18.6155 7.50024L16 7.5V9.5H22V3.5H20L20.0001 5.99918C18.1757 3.57075 15.2713 2 12 2ZM9.5 8.5H14.5V10H11V11.25H12.625C13.7986 11.25 14.75 12.2014 14.75 13.375 14.75 14.5486 13.7986 15.5 12.625 15.5H9.5V14H12.625C12.9702 14 13.25 13.7202 13.25 13.375 13.25 13.0298 12.9702 12.75 12.625 12.75H9.5V8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Forward5Line'

/**
 * Remix Icon: Forward 5 Line
 * @see {@link https://remixicon.com/icon/forward-5-line Remix Icon Docs}
 */
export const Forward5Line = memo(Icon)
