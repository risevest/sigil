import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M21 3H3C1.9 3 1 3.85 1 4.95V18.95C1 20.05 1.9 21 3 21H21C22.1 21 23 20.05 23 18.95V4.95C23 3.85 22.1 3 21 3ZM21 19H3V5H21V19ZM9 8H11V16H9V8ZM13 8H15V16H13V8Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PausePresentation'

/**
 * Material Icon: Pause Presentation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pause_presentation Material Icon Docs}
 */
export const PausePresentation = memo(Icon)
