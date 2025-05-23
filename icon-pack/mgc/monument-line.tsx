import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M16 17V5.236l.888-1.776a1.01 1.01 0 0 0-.778-1.454l-3.955-.494a1.25 1.25 0 0 0-.31 0l-3.955.494a1.01 1.01 0 0 0-.778 1.454L8 5.236V17H6.25C5.56 17 5 17.56 5 18.25V20H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-1.75c0-.69-.56-1.25-1.25-1.25zM12 3.508l-2.473.309.262.525a2 2 0 0 1 .211.894V17h4V5.236a2 2 0 0 1 .211-.894l.262-.525zM17 20v-1H7v1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MonumentLine'

/**
 * MingCute Icon: Monument Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MonumentLine = memo(Icon)
