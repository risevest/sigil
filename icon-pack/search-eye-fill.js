import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM12.1779 7.17624C11.8055 7.06167 11.41 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 10.59 14.9383 10.1945 14.8238 9.82212C14.5102 10.5166 13.8115 11 13 11C11.8954 11 11 10.1046 11 9C11 8.18846 11.4834 7.48982 12.1779 7.17624Z" />
    </Svg>
  )
}

Icon.displayName = 'SearchEyeFill'

/**
 * Remix Icon: Search Eye Fill
 * @see {@link https://remixicon.com/icon/search-eye-fill Remix Icon Docs}
 */
export const SearchEyeFill = memo(Icon)
