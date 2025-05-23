import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M20 2H12C6.38 2 2 6.66 2 12.28C2 17.5 6.49 22 11.72 22C17.39 22 22 17.62 22 12V4C22 2.9 21.1 2 20 2ZM17 15L14 13V15H7V9H14V11L17 9V15Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Duo'

/**
 * Material Icon: Duo
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:duo Material Icon Docs}
 */
export const Duo = memo(Icon)
