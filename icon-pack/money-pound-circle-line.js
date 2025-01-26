import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM9.00488 13.0027H8.00488V11.0027H9.00488V10.0027C9.00488 8.06975 10.5719 6.50275 12.5049 6.50275C13.9741 6.50275 15.2319 7.40804 15.7509 8.69125L13.7644 9.18786C13.4971 8.77553 13.0329 8.50275 12.5049 8.50275C11.6765 8.50275 11.0049 9.17432 11.0049 10.0027V11.0027H14.0049V13.0027H11.0049V15.0027H16.0049V17.0027H8.00488V15.0027H9.00488V13.0027Z" />
    </Svg>
  )
}

Icon.displayName = 'MoneyPoundCircleLine'

/**
 * Remix Icon: Money Pound Circle Line
 * @see {@link https://remixicon.com/icon/money-pound-circle-line Remix Icon Docs}
 */
export const MoneyPoundCircleLine = memo(Icon)