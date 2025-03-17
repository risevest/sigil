import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.00506 6H17.0051L11.9951 12.3L7.00506 6ZM4.25506 5.61C6.27506 8.2 10.0051 13 10.0051 13V19C10.0051 19.55 10.4551 20 11.0051 20H13.0051C13.5551 20 14.0051 19.55 14.0051 19V13C14.0051 13 17.7251 8.2 19.7451 5.61C20.2551 4.95 19.7851 4 18.9551 4H5.04506C4.21506 4 3.74506 4.95 4.25506 5.61Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterAlt'

/**
 * Material Icon: Filter Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_alt Material Icon Docs}
 */
export const FilterAlt = memo(Icon)
