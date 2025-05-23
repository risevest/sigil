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
          d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V5H5v4a1 1 0 0 1-2 0zm15.717-.238a1 1 0 0 1 1.158.811l.414 2.348c.117.665-.35 1.092-.704 1.226-.353.134-.98.123-1.335-.442l-.215-.333c-.602-.905-1.674-2.312-3.02-3.254a1 1 0 1 1 1.147-1.639c.717.502 1.358 1.1 1.908 1.697a.997.997 0 0 1 .647-.414M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm2 0v-6h14v6z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RotateToHorizontalLine'

/**
 * MingCute Icon: Rotate To Horizontal Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RotateToHorizontalLine = memo(Icon)
