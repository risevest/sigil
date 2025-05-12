import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M9 3L5 6.99H8V14H10V6.99H13L9 3ZM16 17.01V10H14V17.01H11L15 21L19 17.01H16Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'ImportExport'

/**
 * Material Icon: Import Export
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:import_export Material Icon Docs}
 */
export const ImportExport = memo(Icon)
