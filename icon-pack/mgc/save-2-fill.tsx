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
          d="M8 3v3.5A1.5 1.5 0 0 0 9.5 8h4A1.5 1.5 0 0 0 15 6.5V3h.586A2 2 0 0 1 17 3.586L19.414 6A2 2 0 0 1 20 7.414V19a2 2 0 0 1-2 2h-2v-7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v7H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6 11v7H9v-7zM13 3v3h-3V3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Save2Fill'

/**
 * MingCute Icon: Save 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Save2Fill = memo(Icon)
