import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.92893 0.514648L21.0711 14.6568L19.6569 16.071L15.834 12.2486L15 13.4999V21.9999H9V13.4999L4 5.99993H3V3.99993L7.585 3.99965L5.51472 1.92886L6.92893 0.514648ZM9.585 5.99965L6.4037 5.99993L11 12.8944V19.9999H13V12.8944L14.392 10.8066L9.585 5.99965ZM21 3.99993V5.99993H20L18.085 8.87193L16.643 7.42893L17.5963 5.99993H15.213L13.213 3.99993H21Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterOffLine'

/**
 * Remix Icon: Filter Off Line
 * @see {@link https://remixicon.com/icon/filter-off-line Remix Icon Docs}
 */
export const FilterOffLine = memo(Icon)