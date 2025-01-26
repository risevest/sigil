import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.47715 2 2 6.47715 2 12 2 17.5228 6.47715 22 12 22 17.5228 22 22 17.5228 22 12H20C20 16.4183 16.4183 20 12 20 7.58172 20 4 16.4183 4 12 4 7.58172 7.58172 4 12 4 14.4639 4 16.6676 5.11383 18.1351 6.86543L16.5001 8.5H12V12.75H14.875C15.2202 12.75 15.5 13.0298 15.5 13.375 15.5 13.7202 15.2202 14 14.875 14H12V15.5H14.875C16.0486 15.5 17 14.5486 17 13.375 17 12.2014 16.0486 11.25 14.875 11.25H13.5V10H16.75V9H22V3L19.5534 5.44648C17.72 3.33509 15.0159 2 12 2ZM8.5 8.5H10V15.5H8.5V8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Forward15Fill'

/**
 * Remix Icon: Forward 15 Fill
 * @see {@link https://remixicon.com/icon/forward-15-fill Remix Icon Docs}
 */
export const Forward15Fill = memo(Icon)
