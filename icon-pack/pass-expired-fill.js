import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.00008 10C9.00008 10.5523 8.55236 11 8.00008 11 7.44779 11 7.00008 10.5523 7.00008 10 7.00008 9.44772 7.44779 9 8.00008 9 8.55236 9 9.00008 9.44772 9.00008 10ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM11.0001 10C11.0001 11.6569 9.65693 13 8.00008 13 6.34322 13 5.00008 11.6569 5.00008 10 5.00008 8.34315 6.34322 7 8.00008 7 9.65693 7 11.0001 8.34315 11.0001 10ZM5.52725 17.0251 4.11304 15.6109C5.10725 14.6167 6.48362 14 8.00212 14 9.52063 14 10.897 14.6167 11.8912 15.6109L10.477 17.0251C9.84253 16.3907 8.9689 16 8.00212 16 7.03535 16 6.16172 16.3907 5.52725 17.0251ZM16.0001 10.5858 17.793 8.79289 19.2072 10.2071 17.4143 12 19.2072 13.7929 17.793 15.2071 16.0001 13.4142 14.2072 15.2071 12.793 13.7929 14.5859 12 12.793 10.2071 14.2072 8.79289 16.0001 10.5858Z" />
    </Svg>
  )
}

Icon.displayName = 'PassExpiredFill'

/**
 * Remix Icon: Pass Expired Fill
 * @see {@link https://remixicon.com/icon/pass-expired-fill Remix Icon Docs}
 */
export const PassExpiredFill = memo(Icon)
