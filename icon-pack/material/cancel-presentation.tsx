import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM9.41 15.95L12 13.36L14.59 15.95L16 14.54L13.41 11.95L16 9.36L14.59 7.95L12 10.54L9.41 7.95L8 9.36L10.59 11.95L8 14.54L9.41 15.95Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CancelPresentation'

/**
 * Material Icon: Cancel Presentation
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cancel_presentation Material Icon Docs}
 */
export const CancelPresentation = memo(Icon)
