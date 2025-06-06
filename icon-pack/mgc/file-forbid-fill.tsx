import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2v6.5a1.5 1.5 0 0 0 1.356 1.493L13.5 10H20v2.022a6.5 6.5 0 0 0-8.384 9.768l.194.21H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zm4.5 11a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m-2.328 3.586a2.5 2.5 0 0 0 3.069 3.302l.173-.06zM16.5 15c-.322 0-.63.061-.914.172l3.242 3.242A2.5 2.5 0 0 0 16.5 15M14 2.043a2 2 0 0 1 .877.43l.123.113L19.414 7a2 2 0 0 1 .502.84l.04.16H14z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FileForbidFill'

/**
 * MingCute Icon: File Forbid Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FileForbidFill = memo(Icon)
