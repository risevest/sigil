import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.34323 14.728L3.5148 17.5565L7.05033 21.092L20.4854 7.65696L16.9498 4.12143L14.8285 6.24275L16.2427 7.65696L14.8285 9.07118L13.4143 7.65696L11.293 9.77828L13.4143 11.8996L12.0001 13.3138L9.87876 11.1925L7.75744 13.3138L9.17165 14.728L7.75744 16.1422L6.34323 14.728ZM17.6569 2.00011L22.6067 6.94986C22.9972 7.34038 22.9972 7.97354 22.6067 8.36407L7.75744 23.2133C7.36692 23.6038 6.73375 23.6038 6.34323 23.2133L1.39348 18.2636C1.00295 17.873 1.00295 17.2399 1.39348 16.8494L16.2427 2.00011C16.6332 1.60958 17.2664 1.60958 17.6569 2.00011Z" />
    </Svg>
  )
}

Icon.displayName = 'RulerLine'

/**
 * Remix Icon: Ruler Line
 * @see {@link https://remixicon.com/icon/ruler-line Remix Icon Docs}
 */
export const RulerLine = memo(Icon)