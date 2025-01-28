import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C13.8195 17 15.413 16.0265 16.2878 14.5723L14.5729 13.5442C14.0484 14.4166 13.0926 15 12 15C10.3425 15 9 13.6575 9 12C9 10.3425 10.3425 9 12 9C13.0931 9 14.0491 9.58383 14.5735 10.4568L16.2878 9.42771C15.413 7.9735 13.8195 7 12 7Z" />
    </Svg>
  )
}

Icon.displayName = 'CopyrightFill'

/**
 * Remix Icon: Copyright Fill
 * @see {@link https://remixicon.com/icon/copyright-fill Remix Icon Docs}
 */
export const CopyrightFill = memo(Icon)
