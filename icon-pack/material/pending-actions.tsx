import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 12.5C13.24 12.5 11 14.74 11 17.5C11 20.26 13.24 22.5 16 22.5C18.76 22.5 21 20.26 21 17.5C21 14.74 18.76 12.5 16 12.5ZM17.65 19.85L15.5 17.7V14.5H16.5V17.29L18.35 19.14L17.65 19.85ZM17 3.5H13.82C13.4 2.34 12.3 1.5 11 1.5C9.7 1.5 8.6 2.34 8.18 3.5H5C3.9 3.5 3 4.4 3 5.5V20.5C3 21.6 3.9 22.5 5 22.5H11.11C10.52 21.93 10.04 21.25 9.69 20.5H5V5.5H7V8.5H15V5.5H17V10.58C17.71 10.68 18.38 10.89 19 11.18V5.5C19 4.4 18.1 3.5 17 3.5ZM11 5.5C10.45 5.5 10 5.05 10 4.5C10 3.95 10.45 3.5 11 3.5C11.55 3.5 12 3.95 12 4.5C12 5.05 11.55 5.5 11 5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'PendingActions'

/**
 * Material Icon: Pending Actions
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pending_actions Material Icon Docs}
 */
export const PendingActions = memo(Icon)
