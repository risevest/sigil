import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 6V2H7V6H4.5V8H7V13C7 15.2091 8.79086 17 11 17C12.0238 17 12.9599 16.614 13.6669 15.9812L12.3331 14.491C11.9786 14.8083 11.5129 15 11 15C9.89543 15 9 14.1046 9 13V8H15.6249L11.5 11.9749L11.5 13.5H12.5C15.5671 13.5 17.5 15.6792 17.5 17.5C17.5 19.3827 15.8727 21 13.75 21C11.9274 21 10.4568 19.7978 10.0902 18.2671L8.14521 18.7329C8.73856 21.2102 11.0514 23 13.75 23C16.874 23 19.5 20.5878 19.5 17.5C19.5 14.9348 17.4658 12.5683 14.5864 11.7783L19 7.5251V6H9Z" />
    </Svg>
  )
}

Icon.displayName = 'XtzLine'

/**
 * Remix Icon: Xtz Line
 * @see {@link https://remixicon.com/icon/xtz-line Remix Icon Docs}
 */
export const XtzLine = memo(Icon)
