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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1.246 12h-2.492l-1.569 5.49c.876.33 1.824.51 2.815.51.867 0 1.701-.138 2.483-.393l.332-.116L13.245 14ZM12 4a8 8 0 0 0-4.62 14.532l1.45-5.082A2 2 0 0 1 10 12.148v-.763c0-.254.049-.506.143-.743l1.393-3.481a.5.5 0 0 1 .928 0l1.393 3.481c.094.237.143.489.143.743v.763a2 2 0 0 1 1.169 1.303l1.451 5.08A8 8 0 0 0 12 4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MarkupLine'

/**
 * MingCute Icon: Markup Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MarkupLine = memo(Icon)
